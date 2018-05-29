/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpParams, HttpHeaders } from "@angular/common/http";
/**
 * @record
 */
function httpRequestOptions() { }
function httpRequestOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    httpRequestOptions.prototype.body;
    /** @type {?|undefined} */
    httpRequestOptions.prototype.headers;
    /** @type {?|undefined} */
    httpRequestOptions.prototype.params;
    /** @type {?|undefined} */
    httpRequestOptions.prototype.observe;
    /** @type {?|undefined} */
    httpRequestOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    httpRequestOptions.prototype.responseType;
    /** @type {?|undefined} */
    httpRequestOptions.prototype.withCredentials;
}
/**
 * @param {?} annotations
 * @return {?}
 */
export function observe(annotations) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return HttpRestUtils.decorate.apply(_this, tslib_1.__spread(['observe', annotations], args));
    };
}
/**
 * @param {?} annotations
 * @return {?}
 */
export function path(annotations) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return HttpRestUtils.decorate.apply(_this, tslib_1.__spread(['path', annotations], args));
    };
}
/**
 * @param {?} annotations
 * @return {?}
 */
export function body(annotations) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return HttpRestUtils.decorate.apply(_this, tslib_1.__spread(['body', annotations], args));
    };
}
/**
 * @param {?} annotations
 * @return {?}
 */
export function query(annotations) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return HttpRestUtils.decorate.apply(_this, tslib_1.__spread(['query', annotations], args));
    };
}
/**
 * @param {?} annotations
 * @return {?}
 */
export function headers(annotations) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return HttpRestUtils.decorate.apply(_this, tslib_1.__spread(['headers', annotations], args));
    };
}
/**
 * @param {?} annotations
 * @return {?}
 */
export function produces(annotations) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return HttpRestUtils.decorate.apply(_this, tslib_1.__spread(['produces', annotations], args));
    };
}
/**
 * @record
 */
function ExtraEntityData() { }
function ExtraEntityData_tsickle_Closure_declarations() {
    /** @type {?} */
    ExtraEntityData.prototype.keyName;
    /** @type {?} */
    ExtraEntityData.prototype.index;
}
var /** @type {?} */ RESOURSE_METADATA_ROOT = 'resources_metadata';
var HttpRestUtils = /** @class */ (function () {
    function HttpRestUtils() {
    }
    /**
     * @param {?} decoratorName
     * @param {?} annotations
     * @param {...?} args
     * @return {?}
     */
    HttpRestUtils.decorate = /**
     * @param {?} decoratorName
     * @param {?} annotations
     * @param {...?} args
     * @return {?}
     */
    function (decoratorName, annotations) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        switch (args.length) {
            case 1: {
                var _a = tslib_1.__read(args, 1), target = _a[0];
                HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'class', annotations, target.prototype]);
                break;
            }
            case 2: {
                var _b = tslib_1.__read(args, 2), target = _b[0], key = _b[1];
                HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'props', annotations, target]);
                break;
            }
            case 3:
                if (typeof args[2] === 'number') {
                    var _c = tslib_1.__read(args, 3), target = _c[0], keyName = _c[1], index = _c[2];
                    HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'params', annotations, target, { keyName: keyName, index: index }]);
                    break;
                }
                else {
                    var _d = tslib_1.__read(args, 3), target = _d[0], keyName = _d[1], descriptor = _d[2];
                    HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'methods', annotations, target, { keyName: keyName }]);
                    break;
                }
            default:
                throw new Error('Decorators are not valid here!');
        }
    };
    /**
     * Set up metadada
     * @param {?} metaName Decorator name
     * @param {?} entityType
     * @param {?} value Value of metadata
     * @param {?} target Prototype of current object
     * @param {?=} entityData Entity extra data
     * @return {?}
     */
    HttpRestUtils.constructMetadata = /**
     * Set up metadada
     * @param {?} metaName Decorator name
     * @param {?} entityType
     * @param {?} value Value of metadata
     * @param {?} target Prototype of current object
     * @param {?=} entityData Entity extra data
     * @return {?}
     */
    function (metaName, entityType, value, target, entityData) {
        target[RESOURSE_METADATA_ROOT] = target[RESOURSE_METADATA_ROOT] || {};
        target[RESOURSE_METADATA_ROOT][entityType] = target[RESOURSE_METADATA_ROOT][entityType] || {};
        var /** @type {?} */ rootMetadata = target[RESOURSE_METADATA_ROOT];
        var /** @type {?} */ metadataObj = target[RESOURSE_METADATA_ROOT][entityType];
        if (entityData && entityData.keyName) {
            metadataObj[entityData.keyName] = metadataObj[entityData.keyName] || {};
        }
        if (entityData && entityData.index != null) {
            metadataObj[entityData.keyName][metaName] = metadataObj[entityData.keyName][metaName] || {};
        }
        switch (entityType) {
            case 'class':
                metadataObj[metaName] = value;
                break;
            case 'props':
                metadataObj[metaName] = value;
                break;
            case 'methods':
                metadataObj[entityData.keyName][metaName] = value;
                break;
            case 'params': metadataObj[entityData.keyName][metaName][value || 'default'] = entityData.index;
        }
        target[RESOURSE_METADATA_ROOT][entityType] = metadataObj;
    };
    /**
     * @param {?} requestMethodName
     * @return {?}
     */
    HttpRestUtils.requestMethod = /**
     * @param {?} requestMethodName
     * @return {?}
     */
    function (requestMethodName) {
        // @dynamic
        return function (target, key, descriptor) {
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var /** @type {?} */ url = HttpRestUtils.collectUrl(target, key, args);
                var /** @type {?} */ body = HttpRestUtils.collectBody(target, key, args);
                var /** @type {?} */ search = HttpRestUtils.collectQueryParams(target, key, args);
                var /** @type {?} */ headers = HttpRestUtils.collectHeaders(target, key, args);
                var /** @type {?} */ producesType = HttpRestUtils.produce(target, key, args);
                var /** @type {?} */ observe = HttpRestUtils.getObserve(target, key, args);
                var /** @type {?} */ params = {
                    body: body,
                    params: search,
                    headers: headers,
                    responseType: producesType,
                    observe: observe
                };
                return HttpRestUtils.http.request(requestMethodName, url, params);
            };
        };
    };
    /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    HttpRestUtils.getObserve = /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (target, methodName, args) {
        if (target[RESOURSE_METADATA_ROOT].methods
            && target[RESOURSE_METADATA_ROOT].methods[methodName]) {
            return target[RESOURSE_METADATA_ROOT].methods[methodName].observe;
        }
        return undefined;
    };
    /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    HttpRestUtils.produce = /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (target, methodName, args) {
        if (target[RESOURSE_METADATA_ROOT].methods
            && target[RESOURSE_METADATA_ROOT].methods[methodName]) {
            return target[RESOURSE_METADATA_ROOT].methods[methodName].produces;
        }
        return undefined;
    };
    /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    HttpRestUtils.collectUrl = /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (target, methodName, args) {
        var /** @type {?} */ baseUrl = target[RESOURSE_METADATA_ROOT] && target[RESOURSE_METADATA_ROOT].class
            ? target[RESOURSE_METADATA_ROOT].class.path
            : '';
        var /** @type {?} */ methodUrl = target[RESOURSE_METADATA_ROOT].methods && target[RESOURSE_METADATA_ROOT].methods[methodName]
            ? target[RESOURSE_METADATA_ROOT].methods[methodName].path
            : '';
        var /** @type {?} */ isRelativePath = ("" + baseUrl + methodUrl)[0] === '/';
        var /** @type {?} */ methodUrlWithParams = [baseUrl, methodUrl]
            .filter(function (path) { return path; })
            .join('/')
            .split('/')
            .map(function (path) {
            if (path[0] === ':') {
                var /** @type {?} */ paramName = path.substring(1);
                var /** @type {?} */ index = target[RESOURSE_METADATA_ROOT].params
                    && target[RESOURSE_METADATA_ROOT].params[methodName]
                    && target[RESOURSE_METADATA_ROOT].params[methodName].path
                    ? target[RESOURSE_METADATA_ROOT].params[methodName].path[paramName]
                    : '';
                return args[index];
            }
            return path;
        })
            .filter(function (path) { return path; })
            .join('/');
        if (!isRelativePath) {
            var _a = tslib_1.__read(methodUrlWithParams.split('/')), absolutePrefix = _a[0], paths = _a.slice(1);
            return absolutePrefix + "//" + paths.join('/');
        }
        return "/" + methodUrlWithParams;
    };
    /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    HttpRestUtils.collectBody = /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (target, methodName, args) {
        if (!target[RESOURSE_METADATA_ROOT].params
            || !target[RESOURSE_METADATA_ROOT].params[methodName]
            || !target[RESOURSE_METADATA_ROOT].params[methodName].body)
            return undefined;
        var /** @type {?} */ index = target[RESOURSE_METADATA_ROOT].params[methodName].body.default;
        return args[index];
    };
    /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    HttpRestUtils.collectQueryParams = /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (target, methodName, args) {
        if (!target[RESOURSE_METADATA_ROOT].params
            || !target[RESOURSE_METADATA_ROOT].params[methodName]
            || !target[RESOURSE_METADATA_ROOT].params[methodName].query)
            return undefined;
        var /** @type {?} */ queryParams = new HttpParams();
        var /** @type {?} */ queryParamsObjectIndex = target[RESOURSE_METADATA_ROOT].params[methodName].query.default;
        var /** @type {?} */ queryMetadata = target[RESOURSE_METADATA_ROOT].params[methodName].query;
        var /** @type {?} */ queryParamsCollection = queryParamsObjectIndex != undefined
            ? args[queryParamsObjectIndex]
            : Object.keys(queryMetadata).reduce(function (mergedObj, paramName) {
                return Object.assign(mergedObj, (_a = {}, _a[paramName] = args[queryMetadata[paramName]], _a));
                var _a;
            }, {});
        Object.keys(queryParamsCollection)
            .forEach(function (paramName) {
            var /** @type {?} */ value = queryParamsCollection[paramName];
            if (!Array.isArray(value)) {
                value = [value];
            }
            value.forEach(function (curParam) { return queryParams = queryParams.append(paramName, curParam); });
        });
        return queryParams;
    };
    /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    HttpRestUtils.collectHeaders = /**
     * @param {?} target
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    function (target, methodName, args) {
        var /** @type {?} */ classHeaders = target[RESOURSE_METADATA_ROOT].class ? target[RESOURSE_METADATA_ROOT].class.headers : {};
        var /** @type {?} */ methodHeaders = target[RESOURSE_METADATA_ROOT].methods && target[RESOURSE_METADATA_ROOT].methods[methodName]
            ? target[RESOURSE_METADATA_ROOT].methods[methodName].headers
            : {};
        var /** @type {?} */ mergedHeaders = Object.assign({}, classHeaders, methodHeaders);
        var /** @type {?} */ httpHeaders = new HttpHeaders();
        for (var /** @type {?} */ header in mergedHeaders) {
            httpHeaders.append(header, mergedHeaders[header]);
        }
        return httpHeaders;
    };
    HttpRestUtils.http = null;
    return HttpRestUtils;
}());
export { HttpRestUtils };
function HttpRestUtils_tsickle_Closure_declarations() {
    /** @type {?} */
    HttpRestUtils.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWh0dHAtYW5ub3RhdGlvbnMudXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaHR0cC1hbm5vdGF0aW9ucy8iLCJzb3VyY2VzIjpbInNyYy9uZ3gtaHR0cC1hbm5vdGF0aW9ucy51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBYyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjM0UsTUFBTSxrQkFBa0IsV0FBZ0I7SUFBeEMsaUJBRUM7SUFEQyxNQUFNLENBQUM7UUFBQyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUFLLE9BQUEsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSSxvQkFBRyxTQUFTLEVBQUUsV0FBVyxHQUFLLElBQUksRUFBRTtJQUFyRSxDQUFxRSxDQUFDO0NBQ2xHOzs7OztBQUNELE1BQU0sZUFBZSxXQUFnQjtJQUFyQyxpQkFFQztJQURDLE1BQU0sQ0FBQztRQUFDLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQUssT0FBQSxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFJLG9CQUFHLE1BQU0sRUFBRSxXQUFXLEdBQUssSUFBSSxFQUFFO0lBQWxFLENBQWtFLENBQUM7Q0FDL0Y7Ozs7O0FBQ0QsTUFBTSxlQUFlLFdBQWdCO0lBQXJDLGlCQUVDO0lBREMsTUFBTSxDQUFDO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFBSyxPQUFBLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUksb0JBQUcsTUFBTSxFQUFFLFdBQVcsR0FBSyxJQUFJLEVBQUU7SUFBbEUsQ0FBa0UsQ0FBQztDQUMvRjs7Ozs7QUFDRCxNQUFNLGdCQUFnQixXQUFnQjtJQUF0QyxpQkFFQztJQURDLE1BQU0sQ0FBQztRQUFDLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQUssT0FBQSxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFJLG9CQUFHLE9BQU8sRUFBRSxXQUFXLEdBQUssSUFBSSxFQUFFO0lBQW5FLENBQW1FLENBQUM7Q0FDaEc7Ozs7O0FBQ0QsTUFBTSxrQkFBa0IsV0FBZ0I7SUFBeEMsaUJBRUM7SUFEQyxNQUFNLENBQUM7UUFBQyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUFLLE9BQUEsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSSxvQkFBRyxTQUFTLEVBQUUsV0FBVyxHQUFLLElBQUksRUFBRTtJQUFyRSxDQUFxRSxDQUFDO0NBQ2xHOzs7OztBQUNELE1BQU0sbUJBQW1CLFdBQXFEO0lBQTlFLGlCQUVDO0lBREMsTUFBTSxDQUFDO1FBQUMsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFBSyxPQUFBLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUksb0JBQUcsVUFBVSxFQUFFLFdBQVcsR0FBSyxJQUFJLEVBQUU7SUFBdEUsQ0FBc0UsQ0FBQztDQUNuRzs7Ozs7Ozs7Ozs7QUFPRCxxQkFBTSxzQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7OztJQU1wQyxzQkFBUTs7Ozs7O2NBQUMsYUFBcUIsRUFBRSxXQUFnQjtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQzVFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1Asa0NBQU8sY0FBTSxDQUFTO2dCQUN0QixhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDO2dCQUN2RyxLQUFLLENBQUM7YUFDUDtZQUNELEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1Asa0NBQU8sY0FBTSxFQUFFLFdBQUcsQ0FBUztnQkFDM0IsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUUsQ0FBQyxDQUFDO2dCQUM3RixLQUFLLENBQUM7YUFDUDtZQUNELEtBQUssQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxrQ0FBTyxjQUFNLEVBQUUsZUFBTyxFQUFFLGFBQUssQ0FBUztvQkFDdEMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFFLENBQUMsQ0FBQztvQkFDbEgsS0FBSyxDQUFDO2lCQUNQO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLGtDQUFPLGNBQU0sRUFBRSxlQUFPLEVBQUUsa0JBQVUsQ0FBUztvQkFDM0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFFLENBQUMsQ0FBQztvQkFDNUcsS0FBSyxDQUFDO2lCQUNQO1lBQ0g7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ3JEOzs7Ozs7Ozs7OztJQVdVLCtCQUFpQjs7Ozs7Ozs7O2NBQUMsUUFBZ0IsRUFBRSxVQUFnQyxFQUFFLEtBQVUsRUFBRSxNQUFXLEVBQUUsVUFBNEI7UUFDeEksTUFBTSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5RixxQkFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQscUJBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pFO1FBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdGO1FBQ0QsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFLLE9BQU87Z0JBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDbkQsS0FBSyxPQUFPO2dCQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ25ELEtBQUssU0FBUztnQkFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDekUsS0FBSyxRQUFRLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNqRztRQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQzs7Ozs7O0lBRzdDLDJCQUFhOzs7O2NBQUMsaUJBQXlCOztRQUVuRCxNQUFNLENBQUMsVUFBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLFVBQWU7WUFDL0MsVUFBVSxDQUFDLEtBQUssR0FBRztnQkFBVSxjQUFjO3FCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7b0JBQWQseUJBQWM7O2dCQUN6QyxxQkFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxxQkFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxxQkFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25FLHFCQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLHFCQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlELHFCQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzNELHFCQUFNLE1BQU0sR0FBdUI7b0JBQ2pDLElBQUksTUFBQTtvQkFDSixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxFQUFFLFlBQVk7b0JBQzFCLE9BQU8sU0FBQTtpQkFDUixDQUFDO2dCQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbkUsQ0FBQztTQUNILENBQUM7Ozs7Ozs7O0lBR1csd0JBQVU7Ozs7OztjQUFDLE1BQVcsRUFBRSxVQUFrQixFQUFFLElBQVc7UUFDcEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTztlQUNyQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ25FO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7SUFHTCxxQkFBTzs7Ozs7O2NBQUMsTUFBVyxFQUFFLFVBQWtCLEVBQUUsSUFBVztRQUNqRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPO2VBQ3RDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDcEU7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDOzs7Ozs7OztJQUdKLHdCQUFVOzs7Ozs7Y0FBQyxNQUFXLEVBQUUsVUFBa0IsRUFBRSxJQUFXO1FBQ3BFLHFCQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBSSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxLQUFLO1lBQ3hFLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUMzQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25CLHFCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUM5RixDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUk7WUFDekQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyQixxQkFBTSxjQUFjLEdBQUcsQ0FBQSxLQUFHLE9BQU8sR0FBRyxTQUFXLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDM0QscUJBQU0sbUJBQW1CLEdBQ3JCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUNuQixNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMscUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU07dUJBQ3JDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7dUJBQ2pELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJO29CQUN4RCxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ25FLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2IsQ0FBQzthQUNELE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLHlEQUFPLHNCQUFjLEVBQUUsbUJBQVEsQ0FBbUM7WUFDbEUsTUFBTSxDQUFLLGNBQWMsVUFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxDQUFDO1NBQ3BEO1FBQ0QsTUFBTSxDQUFDLE1BQUssbUJBQXNCLENBQUM7Ozs7Ozs7O0lBR3RCLHlCQUFXOzs7Ozs7Y0FBQyxNQUFXLEVBQUUsVUFBa0IsRUFBRSxJQUFXO1FBQ3JFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTTtlQUN0QyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7ZUFDbEQsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUU5RSxxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7SUFHTixnQ0FBa0I7Ozs7OztjQUFDLE1BQVcsRUFBRSxVQUFrQixFQUFFLElBQVc7UUFDNUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNO2VBQ3RDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztlQUNsRCxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBRS9FLHFCQUFJLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ25DLHFCQUFNLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQy9GLHFCQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlFLHFCQUFNLHFCQUFxQixHQUFHLHNCQUFzQixJQUFJLFNBQVM7WUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUM5QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxTQUFTLEVBQUUsU0FBUztnQkFDdkQsT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsWUFBSSxHQUFDLFNBQVMsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQUc7O1lBQXpFLENBQXlFLEVBQUUsRUFBRSxDQUM5RSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDL0IsT0FBTyxDQUFDLFVBQUEsU0FBUztZQUNoQixxQkFBSSxLQUFLLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFLLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQzthQUFFO1lBQ2pELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztTQUN6RixDQUFDLENBQUM7UUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDOzs7Ozs7OztJQUdOLDRCQUFjOzs7Ozs7Y0FBQyxNQUFXLEVBQUUsVUFBa0IsRUFBRSxJQUFXO1FBQ3hFLHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RyxxQkFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDOUYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPO1lBQzVELENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekIscUJBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVyRSxxQkFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxHQUFHLENBQUMsQ0FBQyxxQkFBTSxNQUFNLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7O3lCQS9LWSxJQUFJO3dCQTVDdkM7O1NBMENhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cE9ic2VydmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHAvc3JjL2NsaWVudFwiO1xyXG5cclxuaW50ZXJmYWNlIGh0dHBSZXF1ZXN0T3B0aW9ucyB7XHJcbiAgYm9keT86IGFueTtcclxuICBoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcbiAgcGFyYW1zPzogSHR0cFBhcmFtcztcclxuICBvYnNlcnZlPzogSHR0cE9ic2VydmU7XHJcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKGFubm90YXRpb25zOiBhbnkpIHtcclxuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiBIdHRwUmVzdFV0aWxzLmRlY29yYXRlLmFwcGx5KHRoaXMsIFsnb2JzZXJ2ZScsIGFubm90YXRpb25zLCAuLi5hcmdzXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGgoYW5ub3RhdGlvbnM6IGFueSkge1xyXG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IEh0dHBSZXN0VXRpbHMuZGVjb3JhdGUuYXBwbHkodGhpcywgWydwYXRoJywgYW5ub3RhdGlvbnMsIC4uLmFyZ3NdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYm9keShhbm5vdGF0aW9uczogYW55KSB7XHJcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gSHR0cFJlc3RVdGlscy5kZWNvcmF0ZS5hcHBseSh0aGlzLCBbJ2JvZHknLCBhbm5vdGF0aW9ucywgLi4uYXJnc10pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShhbm5vdGF0aW9uczogYW55KSB7XHJcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gSHR0cFJlc3RVdGlscy5kZWNvcmF0ZS5hcHBseSh0aGlzLCBbJ3F1ZXJ5JywgYW5ub3RhdGlvbnMsIC4uLmFyZ3NdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVycyhhbm5vdGF0aW9uczogYW55KSB7XHJcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gSHR0cFJlc3RVdGlscy5kZWNvcmF0ZS5hcHBseSh0aGlzLCBbJ2hlYWRlcnMnLCBhbm5vdGF0aW9ucywgLi4uYXJnc10pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWNlcyhhbm5vdGF0aW9uczogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0Jykge1xyXG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IEh0dHBSZXN0VXRpbHMuZGVjb3JhdGUuYXBwbHkodGhpcywgWydwcm9kdWNlcycsIGFubm90YXRpb25zLCAuLi5hcmdzXSk7XHJcbn1cclxuXHJcbnR5cGUgUmVzb3VyY2VNZXRhZGF0YVR5cGUgPSAnY2xhc3MnfCdtZXRob2RzJ3wncGFyYW1zJ3wncHJvcHMnO1xyXG5pbnRlcmZhY2UgRXh0cmFFbnRpdHlEYXRhIHtcclxuICBrZXlOYW1lOiBzdHJpbmc7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxufVxyXG5jb25zdCBSRVNPVVJTRV9NRVRBREFUQV9ST09UID0gJ3Jlc291cmNlc19tZXRhZGF0YSc7XHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVzdFV0aWxzIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBodHRwOiBIdHRwQ2xpZW50ID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBkZWNvcmF0ZShkZWNvcmF0b3JOYW1lOiBzdHJpbmcsIGFubm90YXRpb25zOiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICBjb25zdCBbdGFyZ2V0XSA9IGFyZ3M7XHJcbiAgICAgICAgICBIdHRwUmVzdFV0aWxzLmNvbnN0cnVjdE1ldGFkYXRhLmFwcGx5KHRoaXMsIFsgZGVjb3JhdG9yTmFtZSwgJ2NsYXNzJywgYW5ub3RhdGlvbnMsIHRhcmdldC5wcm90b3R5cGUgXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgICBjb25zdCBbdGFyZ2V0LCBrZXldID0gYXJncztcclxuICAgICAgICAgIEh0dHBSZXN0VXRpbHMuY29uc3RydWN0TWV0YWRhdGEuYXBwbHkodGhpcywgWyBkZWNvcmF0b3JOYW1lLCAncHJvcHMnLCBhbm5vdGF0aW9ucywgdGFyZ2V0IF0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1syXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgW3RhcmdldCwga2V5TmFtZSwgaW5kZXhdID0gYXJncztcclxuICAgICAgICAgICAgSHR0cFJlc3RVdGlscy5jb25zdHJ1Y3RNZXRhZGF0YS5hcHBseSh0aGlzLCBbIGRlY29yYXRvck5hbWUsICdwYXJhbXMnLCBhbm5vdGF0aW9ucywgdGFyZ2V0LCB7IGtleU5hbWUsIGluZGV4IH0gXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgW3RhcmdldCwga2V5TmFtZSwgZGVzY3JpcHRvcl0gPSBhcmdzO1xyXG4gICAgICAgICAgICBIdHRwUmVzdFV0aWxzLmNvbnN0cnVjdE1ldGFkYXRhLmFwcGx5KHRoaXMsIFsgZGVjb3JhdG9yTmFtZSwgJ21ldGhvZHMnLCBhbm5vdGF0aW9ucywgdGFyZ2V0LCB7IGtleU5hbWUgfSBdKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVjb3JhdG9ycyBhcmUgbm90IHZhbGlkIGhlcmUhJyk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB1cCBtZXRhZGFkYVxyXG4gICAqIEBwYXJhbSB0eXBlIEVudGl0eSB0eXBlXHJcbiAgICogQHBhcmFtIHZhbHVlIFZhbHVlIG9mIG1ldGFkYXRhXHJcbiAgICogQHBhcmFtIHRhcmdldCBQcm90b3R5cGUgb2YgY3VycmVudCBvYmplY3RcclxuICAgKiBAcGFyYW0gbWV0YU5hbWUgRGVjb3JhdG9yIG5hbWVcclxuICAgKiBAcGFyYW0gZW50aXR5RGF0YSBFbnRpdHkgZXh0cmEgZGF0YVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbnN0cnVjdE1ldGFkYXRhKG1ldGFOYW1lOiBzdHJpbmcsIGVudGl0eVR5cGU6IFJlc291cmNlTWV0YWRhdGFUeXBlLCB2YWx1ZTogYW55LCB0YXJnZXQ6IGFueSwgZW50aXR5RGF0YT86IEV4dHJhRW50aXR5RGF0YSkge1xyXG4gICAgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdIHx8IHt9O1xyXG4gICAgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdW2VudGl0eVR5cGVdID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdW2VudGl0eVR5cGVdIHx8IHt9O1xyXG5cclxuICAgIGNvbnN0IHJvb3RNZXRhZGF0YSA9IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXTtcclxuICAgIGNvbnN0IG1ldGFkYXRhT2JqID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdW2VudGl0eVR5cGVdO1xyXG4gICAgaWYgKGVudGl0eURhdGEgJiYgZW50aXR5RGF0YS5rZXlOYW1lKSB7XHJcbiAgICAgIG1ldGFkYXRhT2JqW2VudGl0eURhdGEua2V5TmFtZV0gPSBtZXRhZGF0YU9ialtlbnRpdHlEYXRhLmtleU5hbWVdIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKGVudGl0eURhdGEgJiYgZW50aXR5RGF0YS5pbmRleCAhPSBudWxsKSB7XHJcbiAgICAgIG1ldGFkYXRhT2JqW2VudGl0eURhdGEua2V5TmFtZV1bbWV0YU5hbWVdID0gbWV0YWRhdGFPYmpbZW50aXR5RGF0YS5rZXlOYW1lXVttZXRhTmFtZV0gfHwge307XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGVudGl0eVR5cGUpIHtcclxuICAgICAgY2FzZSAnY2xhc3MnOiBtZXRhZGF0YU9ialttZXRhTmFtZV0gPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Byb3BzJzogbWV0YWRhdGFPYmpbbWV0YU5hbWVdID0gdmFsdWU7IGJyZWFrO1xyXG4gICAgICBjYXNlICdtZXRob2RzJzogbWV0YWRhdGFPYmpbZW50aXR5RGF0YS5rZXlOYW1lXVttZXRhTmFtZV0gPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BhcmFtcyc6IG1ldGFkYXRhT2JqW2VudGl0eURhdGEua2V5TmFtZV1bbWV0YU5hbWVdW3ZhbHVlIHx8ICdkZWZhdWx0J10gPSBlbnRpdHlEYXRhLmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXVtlbnRpdHlUeXBlXSA9IG1ldGFkYXRhT2JqO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyByZXF1ZXN0TWV0aG9kKHJlcXVlc3RNZXRob2ROYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAvLyBAZHluYW1pY1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkgPT4ge1xyXG4gICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gSHR0cFJlc3RVdGlscy5jb2xsZWN0VXJsKHRhcmdldCwga2V5LCBhcmdzKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gSHR0cFJlc3RVdGlscy5jb2xsZWN0Qm9keSh0YXJnZXQsIGtleSwgYXJncyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gSHR0cFJlc3RVdGlscy5jb2xsZWN0UXVlcnlQYXJhbXModGFyZ2V0LCBrZXksIGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBIdHRwUmVzdFV0aWxzLmNvbGxlY3RIZWFkZXJzKHRhcmdldCwga2V5LCBhcmdzKTtcclxuICAgICAgICBjb25zdCBwcm9kdWNlc1R5cGUgPSBIdHRwUmVzdFV0aWxzLnByb2R1Y2UodGFyZ2V0LCBrZXksIGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmUgPSBIdHRwUmVzdFV0aWxzLmdldE9ic2VydmUodGFyZ2V0LCBrZXksIGFyZ3MpXHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBodHRwUmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgcGFyYW1zOiBzZWFyY2gsXHJcbiAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiBwcm9kdWNlc1R5cGUsXHJcbiAgICAgICAgICBvYnNlcnZlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gSHR0cFJlc3RVdGlscy5odHRwLnJlcXVlc3QocmVxdWVzdE1ldGhvZE5hbWUsIHVybCwgcGFyYW1zKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRPYnNlcnZlKHRhcmdldDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAodGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNcclxuICAgICAgJiYgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNbbWV0aG9kTmFtZV0pIHtcclxuICAgICAgIHJldHVybiB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kc1ttZXRob2ROYW1lXS5vYnNlcnZlO1xyXG4gICAgIH1cclxuICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcHJvZHVjZSh0YXJnZXQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzXHJcbiAgICAgJiYgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNbbWV0aG9kTmFtZV0pIHtcclxuICAgICAgcmV0dXJuIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzW21ldGhvZE5hbWVdLnByb2R1Y2VzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbGxlY3RVcmwodGFyZ2V0OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pIHtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0gJiYgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLmNsYXNzXHJcbiAgICAgICAgICAgICAgICAgID8gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLmNsYXNzLnBhdGhcclxuICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgIGNvbnN0IG1ldGhvZFVybCA9IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzICYmIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzW21ldGhvZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kc1ttZXRob2ROYW1lXS5wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcclxuICAgIGNvbnN0IGlzUmVsYXRpdmVQYXRoID0gYCR7YmFzZVVybH0ke21ldGhvZFVybH1gWzBdID09PSAnLyc7XHJcbiAgICBjb25zdCBtZXRob2RVcmxXaXRoUGFyYW1zXHJcbiAgICAgID0gW2Jhc2VVcmwsIG1ldGhvZFVybF1cclxuICAgICAgICAuZmlsdGVyKHBhdGggPT4gcGF0aClcclxuICAgICAgICAuam9pbignLycpXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAubWFwKHBhdGggPT4ge1xyXG4gICAgICAgICAgaWYgKCBwYXRoWzBdID09PSAnOicpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gcGF0aC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICYmIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAmJiB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zW21ldGhvZE5hbWVdLnBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zW21ldGhvZE5hbWVdLnBhdGhbcGFyYW1OYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJnc1tpbmRleF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIocGF0aCA9PiBwYXRoKVxyXG4gICAgICAgIC5qb2luKCcvJyk7XHJcblxyXG4gICAgaWYgKCFpc1JlbGF0aXZlUGF0aCkge1xyXG4gICAgICBjb25zdCBbYWJzb2x1dGVQcmVmaXgsIC4uLnBhdGhzXSA9IG1ldGhvZFVybFdpdGhQYXJhbXMuc3BsaXQoJy8nKTtcclxuICAgICAgcmV0dXJuIGAkeyBhYnNvbHV0ZVByZWZpeCB9Ly8keyBwYXRocy5qb2luKCcvJykgfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYC8keyBtZXRob2RVcmxXaXRoUGFyYW1zIH1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29sbGVjdEJvZHkodGFyZ2V0OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pIHtcclxuICAgIGlmICghdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1xyXG4gICAgIHx8ICF0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zW21ldGhvZE5hbWVdXHJcbiAgICAgfHwgIXRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV0uYm9keSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV0uYm9keS5kZWZhdWx0O1xyXG4gICAgcmV0dXJuIGFyZ3NbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29sbGVjdFF1ZXJ5UGFyYW1zKHRhcmdldDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAoIXRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNcclxuICAgICB8fCAhdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1ttZXRob2ROYW1lXVxyXG4gICAgIHx8ICF0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zW21ldGhvZE5hbWVdLnF1ZXJ5KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGxldCBxdWVyeVBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtc09iamVjdEluZGV4ID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1ttZXRob2ROYW1lXS5xdWVyeS5kZWZhdWx0O1xyXG4gICAgY29uc3QgcXVlcnlNZXRhZGF0YSA9IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV0ucXVlcnk7XHJcbiAgICBjb25zdCBxdWVyeVBhcmFtc0NvbGxlY3Rpb24gPSBxdWVyeVBhcmFtc09iamVjdEluZGV4ICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYXJnc1txdWVyeVBhcmFtc09iamVjdEluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMocXVlcnlNZXRhZGF0YSkucmVkdWNlKChtZXJnZWRPYmosIHBhcmFtTmFtZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWVyZ2VkT2JqLCB7IFtwYXJhbU5hbWVdOiBhcmdzW3F1ZXJ5TWV0YWRhdGFbcGFyYW1OYW1lXV0gfSksIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtc0NvbGxlY3Rpb24pXHJcbiAgICAgIC5mb3JFYWNoKHBhcmFtTmFtZSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gcXVlcnlQYXJhbXNDb2xsZWN0aW9uW3BhcmFtTmFtZV07XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgeyB2YWx1ZSA9IFsgdmFsdWUgXTsgfVxyXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGN1clBhcmFtOiBhbnkpID0+IHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuYXBwZW5kKHBhcmFtTmFtZSwgY3VyUGFyYW0pKTtcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjb2xsZWN0SGVhZGVycyh0YXJnZXQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkge1xyXG4gICAgY29uc3QgY2xhc3NIZWFkZXJzID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLmNsYXNzID8gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLmNsYXNzLmhlYWRlcnMgOiB7fTtcclxuICAgIGNvbnN0IG1ldGhvZEhlYWRlcnMgPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kcyAmJiB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kc1ttZXRob2ROYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzW21ldGhvZE5hbWVdLmhlYWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7fTtcclxuICAgIGNvbnN0IG1lcmdlZEhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFzc0hlYWRlcnMsIG1ldGhvZEhlYWRlcnMpO1xyXG5cclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBmb3IgKGNvbnN0IGhlYWRlciBpbiBtZXJnZWRIZWFkZXJzKSB7XHJcbiAgICAgIGh0dHBIZWFkZXJzLmFwcGVuZChoZWFkZXIsIG1lcmdlZEhlYWRlcnNbaGVhZGVyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaHR0cEhlYWRlcnM7XHJcbiAgfVxyXG59Il19