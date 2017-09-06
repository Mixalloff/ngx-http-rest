import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { HttpObserve } from "@angular/common/http/src/client";

interface httpRequestOptions {
  body?: any;
  headers?: HttpHeaders;
  params?: HttpParams;
  observe?: HttpObserve;
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}


export function observe(annotations: any) {
  return (...args: any[]) => HttpRestUtils.decorate.apply(this, ['observe', annotations, ...args]);
}
export function path(annotations: any) {
  return (...args: any[]) => HttpRestUtils.decorate.apply(this, ['path', annotations, ...args]);
}
export function body(annotations: any) {
  return (...args: any[]) => HttpRestUtils.decorate.apply(this, ['body', annotations, ...args]);
}
export function query(annotations: any) {
  return (...args: any[]) => HttpRestUtils.decorate.apply(this, ['query', annotations, ...args]);
}
export function headers(annotations: any) {
  return (...args: any[]) => HttpRestUtils.decorate.apply(this, ['headers', annotations, ...args]);
}
export function produces(annotations: 'arraybuffer' | 'blob' | 'json' | 'text') {
  return (...args: any[]) => HttpRestUtils.decorate.apply(this, ['produces', annotations, ...args]);
}

type ResourceMetadataType = 'class'|'methods'|'params'|'props';
interface ExtraEntityData {
  keyName: string;
  index: number;
}
const RESOURSE_METADATA_ROOT = 'resources_metadata';

export class HttpRestUtils {

  public static http: HttpClient;

  public static decorate(decoratorName: string, annotations: any, ...args: any[]) {
    switch (args.length) {
        case 1: {
          const [target] = args;
          HttpRestUtils.constructMetadata.apply(this, [ decoratorName, 'class', annotations, target.prototype ]);
          break;
        }
        case 2: {
          const [target, key] = args;
          HttpRestUtils.constructMetadata.apply(this, [ decoratorName, 'props', annotations, target ]);
          break;
        }
        case 3:
          if (typeof args[2] === 'number') {
            const [target, keyName, index] = args;
            HttpRestUtils.constructMetadata.apply(this, [ decoratorName, 'params', annotations, target, { keyName, index } ]);
            break;
          } else {
            const [target, keyName, descriptor] = args;
            HttpRestUtils.constructMetadata.apply(this, [ decoratorName, 'methods', annotations, target, { keyName } ]);
            break;
          }
        default:
          throw new Error('Decorators are not valid here!');
      }
  }

  /**
   * Set up metadada
   * @param type Entity type
   * @param value Value of metadata
   * @param target Prototype of current object
   * @param metaName Decorator name
   * @param entityData Entity extra data
   */
  private static constructMetadata(metaName: string, entityType: ResourceMetadataType, value: any, target: any, entityData?: ExtraEntityData) {
    target[RESOURSE_METADATA_ROOT] = target[RESOURSE_METADATA_ROOT] || {};
    target[RESOURSE_METADATA_ROOT][entityType] = target[RESOURSE_METADATA_ROOT][entityType] || {};

    const rootMetadata = target[RESOURSE_METADATA_ROOT];
    const metadataObj = target[RESOURSE_METADATA_ROOT][entityType];
    if (entityData && entityData.keyName) {
      metadataObj[entityData.keyName] = metadataObj[entityData.keyName] || {};
    }
    if (entityData && entityData.index != null) {
      metadataObj[entityData.keyName][metaName] = metadataObj[entityData.keyName][metaName] || {};
    }
    switch (entityType) {
      case 'class': metadataObj[metaName] = value; break;
      case 'props': metadataObj[metaName] = value; break;
      case 'methods': metadataObj[entityData.keyName][metaName] = value; break;
      case 'params': metadataObj[entityData.keyName][metaName][value || 'default'] = entityData.index;
    }

    target[RESOURSE_METADATA_ROOT][entityType] = metadataObj;
  }

  public static requestMethod(requestMethodName: string): any {
    return (target: any, key: string, descriptor: any) => {
      descriptor.value = function (...args: any[]) {
        const url = HttpRestUtils.collectUrl(target, key, args);
        const body = HttpRestUtils.collectBody(target, key, args);
        const search = HttpRestUtils.collectQueryParams(target, key, args);
        const headers = HttpRestUtils.collectHeaders(target, key, args);
        const producesType = HttpRestUtils.produce(target, key, args);
        const observe = HttpRestUtils.getObserve(target, key, args)
        const params: httpRequestOptions = {
          body,
          params: search,
          headers,
          responseType: producesType,
          observe
        };
        return HttpRestUtils.http.request(requestMethodName, url, params);
      };
    };
  }

  private static getObserve(target: any, methodName: string, args: any[]) {
    if (target[RESOURSE_METADATA_ROOT].methods
      && target[RESOURSE_METADATA_ROOT].methods[methodName]) {
       return target[RESOURSE_METADATA_ROOT].methods[methodName].observe;
     }
     return undefined;
  }

  private static produce(target: any, methodName: string, args: any[]) {
    if (target[RESOURSE_METADATA_ROOT].methods
     && target[RESOURSE_METADATA_ROOT].methods[methodName]) {
      return target[RESOURSE_METADATA_ROOT].methods[methodName].produces;
    }
    return undefined;
  }

  private static collectUrl(target: any, methodName: string, args: any[]) {
    const baseUrl = target[RESOURSE_METADATA_ROOT] && target[RESOURSE_METADATA_ROOT].class
                  ? target[RESOURSE_METADATA_ROOT].class.path
                  : '';
    const methodUrl = target[RESOURSE_METADATA_ROOT].methods && target[RESOURSE_METADATA_ROOT].methods[methodName]
                    ? target[RESOURSE_METADATA_ROOT].methods[methodName].path
                    : '';
    const isRelativePath = `${baseUrl}${methodUrl}`[0] === '/';
    const methodUrlWithParams
      = [baseUrl, methodUrl]
        .filter(path => path)
        .join('/')
        .split('/')
        .map(path => {
          if ( path[0] === ':') {
            const paramName = path.substring(1);
            const index = target[RESOURSE_METADATA_ROOT].params
                       && target[RESOURSE_METADATA_ROOT].params[methodName]
                       && target[RESOURSE_METADATA_ROOT].params[methodName].path
                        ? target[RESOURSE_METADATA_ROOT].params[methodName].path[paramName]
                        : '';
            return args[index];
          }
          return path;
        })
        .filter(path => path)
        .join('/');

    if (!isRelativePath) {
      const [absolutePrefix, ...paths] = methodUrlWithParams.split('/');
      return `${ absolutePrefix }//${ paths.join('/') }`;
    }
    return `/${ methodUrlWithParams }`;
  }

  private static collectBody(target: any, methodName: string, args: any[]) {
    if (!target[RESOURSE_METADATA_ROOT].params
     || !target[RESOURSE_METADATA_ROOT].params[methodName]
     || !target[RESOURSE_METADATA_ROOT].params[methodName].body) return undefined;

    const index = target[RESOURSE_METADATA_ROOT].params[methodName].body.default;
    return args[index];
  }

  private static collectQueryParams(target: any, methodName: string, args: any[]) {
    if (!target[RESOURSE_METADATA_ROOT].params
     || !target[RESOURSE_METADATA_ROOT].params[methodName]
     || !target[RESOURSE_METADATA_ROOT].params[methodName].query) return undefined;

    let queryParams = new HttpParams();
    const queryParamsObjectIndex = target[RESOURSE_METADATA_ROOT].params[methodName].query.default;
    const queryMetadata = target[RESOURSE_METADATA_ROOT].params[methodName].query;
    const queryParamsCollection = queryParamsObjectIndex != undefined
                                ? args[queryParamsObjectIndex]
                                : Object.keys(queryMetadata).reduce((mergedObj, paramName) =>
                                  Object.assign(mergedObj, { [paramName]: args[queryMetadata[paramName]] }), {}
                                );

    Object.keys(queryParamsCollection)
      .forEach(paramName => {
        let value = queryParamsCollection[paramName];
        if (!Array.isArray(value)) { value = [ value ]; }
        value.forEach((curParam: any) => queryParams = queryParams.append(paramName, curParam));
      });
    return queryParams;
  }

  private static collectHeaders(target: any, methodName: string, args: any[]) {
    const classHeaders = target[RESOURSE_METADATA_ROOT].class ? target[RESOURSE_METADATA_ROOT].class.headers : {};
    const methodHeaders = target[RESOURSE_METADATA_ROOT].methods && target[RESOURSE_METADATA_ROOT].methods[methodName]
                        ? target[RESOURSE_METADATA_ROOT].methods[methodName].headers
                        : {};
    const mergedHeaders = Object.assign({}, classHeaders, methodHeaders);

    const httpHeaders = new HttpHeaders();
    for (const header in mergedHeaders) {
      httpHeaders.append(header, mergedHeaders[header]);
    }
    return httpHeaders;
  }
}