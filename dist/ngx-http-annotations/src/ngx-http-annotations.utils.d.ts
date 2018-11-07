import { HttpClient } from "@angular/common/http";
export declare function observe(annotations: any): (...args: any[]) => any;
export declare function path(annotations: any): (...args: any[]) => any;
export declare function body(annotations: any): (...args: any[]) => any;
export declare function query(annotations: any): (...args: any[]) => any;
export declare function headers(annotations: any): (...args: any[]) => any;
export declare function produces(annotations: 'arraybuffer' | 'blob' | 'json' | 'text'): (...args: any[]) => any;
export declare class HttpRestUtils {
    static http: HttpClient;
    static decorate(decoratorName: string, annotations: any, ...args: any[]): void;
    /**
     * Set up metadada
     * @param type Entity type
     * @param value Value of metadata
     * @param target Prototype of current object
     * @param metaName Decorator name
     * @param entityData Entity extra data
     */
    private static constructMetadata(metaName, entityType, value, target, entityData?);
    static requestMethod(requestMethodName: string): any;
    private static getObserve(target, methodName, args);
    private static produce(target, methodName, args);
    private static collectUrl(target, methodName, args);
    private static collectBody(target, methodName, args);
    private static collectQueryParams(target, methodName, args);
    private static collectHeaders(target, methodName, args);
}
