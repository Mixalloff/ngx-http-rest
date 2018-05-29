(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-http-annotations', ['exports', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['ngx-http-annotations'] = {}),global.ng.common.http,global.ng.core));
}(this, (function (exports,http,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} annotations
     * @return {?}
     */
    function observe(annotations) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return HttpRestUtils.decorate.apply(_this, __spread(['observe', annotations], args));
        };
    }
    /**
     * @param {?} annotations
     * @return {?}
     */
    function path(annotations) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return HttpRestUtils.decorate.apply(_this, __spread(['path', annotations], args));
        };
    }
    /**
     * @param {?} annotations
     * @return {?}
     */
    function body(annotations) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return HttpRestUtils.decorate.apply(_this, __spread(['body', annotations], args));
        };
    }
    /**
     * @param {?} annotations
     * @return {?}
     */
    function query(annotations) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return HttpRestUtils.decorate.apply(_this, __spread(['query', annotations], args));
        };
    }
    /**
     * @param {?} annotations
     * @return {?}
     */
    function headers(annotations) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return HttpRestUtils.decorate.apply(_this, __spread(['headers', annotations], args));
        };
    }
    /**
     * @param {?} annotations
     * @return {?}
     */
    function produces(annotations) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return HttpRestUtils.decorate.apply(_this, __spread(['produces', annotations], args));
        };
    }
    var /** @type {?} */ RESOURSE_METADATA_ROOT = 'resources_metadata';
    var HttpRestUtils = (function () {
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
                        var _a = __read(args, 1), target = _a[0];
                        HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'class', annotations, target.prototype]);
                        break;
                    }
                    case 2: {
                        var _b = __read(args, 2), target = _b[0], key = _b[1];
                        HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'props', annotations, target]);
                        break;
                    }
                    case 3:
                        if (typeof args[2] === 'number') {
                            var _c = __read(args, 3), target = _c[0], keyName = _c[1], index = _c[2];
                            HttpRestUtils.constructMetadata.apply(this, [decoratorName, 'params', annotations, target, { keyName: keyName, index: index }]);
                            break;
                        }
                        else {
                            var _d = __read(args, 3), target = _d[0], keyName = _d[1], descriptor = _d[2];
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
                    var _a = __read(methodUrlWithParams.split('/')), absolutePrefix = _a[0], paths = _a.slice(1);
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
                var /** @type {?} */ queryParams = new http.HttpParams();
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
                var /** @type {?} */ httpHeaders = new http.HttpHeaders();
                for (var /** @type {?} */ header in mergedHeaders) {
                    httpHeaders.append(header, mergedHeaders[header]);
                }
                return httpHeaders;
            };
        HttpRestUtils.http = null;
        return HttpRestUtils;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HttpRestModule = (function () {
        function HttpRestModule() {
        }
        HttpRestModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [http.HttpClientModule],
                        providers: [
                            { provide: core.APP_INITIALIZER, useFactory: onAppInit, multi: true, deps: [http.HttpClient] }
                        ]
                    },] },
        ];
        return HttpRestModule;
    }());
    /**
     * @param {?} http
     * @return {?}
     */
    function onAppInit(http$$1) {
        return function () {
            HttpRestUtils.http = http$$1;
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Path = path;
    var /** @type {?} */ PathParam = path;
    var /** @type {?} */ Body = body(null);
    var /** @type {?} */ Query = query(null);
    var /** @type {?} */ QueryParam = query;
    var /** @type {?} */ QueryParams = query(null);
    var /** @type {?} */ Observe = observe;
    // Headers
    var /** @type {?} */ Headers = headers;
    // Produces
    var /** @type {?} */ Produces = produces;
    // Request methods
    var /** @type {?} */ GET = HttpRestUtils.requestMethod('Get');
    var /** @type {?} */ POST = HttpRestUtils.requestMethod('Post');
    var /** @type {?} */ PUT = HttpRestUtils.requestMethod('Put');
    var /** @type {?} */ DELETE = HttpRestUtils.requestMethod('Delete');
    var /** @type {?} */ OPTIONS = HttpRestUtils.requestMethod('Options');
    var /** @type {?} */ HEAD = HttpRestUtils.requestMethod('Head');
    var /** @type {?} */ PATCH = HttpRestUtils.requestMethod('Patch');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.Path = Path;
    exports.PathParam = PathParam;
    exports.Body = Body;
    exports.Query = Query;
    exports.QueryParam = QueryParam;
    exports.QueryParams = QueryParams;
    exports.Observe = Observe;
    exports.Headers = Headers;
    exports.Produces = Produces;
    exports.GET = GET;
    exports.POST = POST;
    exports.PUT = PUT;
    exports.DELETE = DELETE;
    exports.OPTIONS = OPTIONS;
    exports.HEAD = HEAD;
    exports.PATCH = PATCH;
    exports.HttpRestModule = HttpRestModule;
    exports.onAppInit = onAppInit;
    exports.observe = observe;
    exports.path = path;
    exports.body = body;
    exports.query = query;
    exports.headers = headers;
    exports.produces = produces;
    exports.HttpRestUtils = HttpRestUtils;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWh0dHAtYW5ub3RhdGlvbnMudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL25neC1odHRwLWFubm90YXRpb25zL3NyYy9uZ3gtaHR0cC1hbm5vdGF0aW9ucy51dGlscy50cyIsIm5nOi8vbmd4LWh0dHAtYW5ub3RhdGlvbnMvc3JjL25neC1odHRwLWFubm90YXRpb25zLm1vZHVsZS50cyIsIm5nOi8vbmd4LWh0dHAtYW5ub3RhdGlvbnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwT2JzZXJ2ZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cC9zcmMvY2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgaHR0cFJlcXVlc3RPcHRpb25zIHtcclxuICBib2R5PzogYW55O1xyXG4gIGhlYWRlcnM/OiBIdHRwSGVhZGVycztcclxuICBwYXJhbXM/OiBIdHRwUGFyYW1zO1xyXG4gIG9ic2VydmU/OiBIdHRwT2JzZXJ2ZTtcclxuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUoYW5ub3RhdGlvbnM6IGFueSkge1xyXG4gIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IEh0dHBSZXN0VXRpbHMuZGVjb3JhdGUuYXBwbHkodGhpcywgWydvYnNlcnZlJywgYW5ub3RhdGlvbnMsIC4uLmFyZ3NdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGF0aChhbm5vdGF0aW9uczogYW55KSB7XHJcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gSHR0cFJlc3RVdGlscy5kZWNvcmF0ZS5hcHBseSh0aGlzLCBbJ3BhdGgnLCBhbm5vdGF0aW9ucywgLi4uYXJnc10pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBib2R5KGFubm90YXRpb25zOiBhbnkpIHtcclxuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiBIdHRwUmVzdFV0aWxzLmRlY29yYXRlLmFwcGx5KHRoaXMsIFsnYm9keScsIGFubm90YXRpb25zLCAuLi5hcmdzXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KGFubm90YXRpb25zOiBhbnkpIHtcclxuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiBIdHRwUmVzdFV0aWxzLmRlY29yYXRlLmFwcGx5KHRoaXMsIFsncXVlcnknLCBhbm5vdGF0aW9ucywgLi4uYXJnc10pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJzKGFubm90YXRpb25zOiBhbnkpIHtcclxuICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiBIdHRwUmVzdFV0aWxzLmRlY29yYXRlLmFwcGx5KHRoaXMsIFsnaGVhZGVycycsIGFubm90YXRpb25zLCAuLi5hcmdzXSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y2VzKGFubm90YXRpb25zOiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnKSB7XHJcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4gSHR0cFJlc3RVdGlscy5kZWNvcmF0ZS5hcHBseSh0aGlzLCBbJ3Byb2R1Y2VzJywgYW5ub3RhdGlvbnMsIC4uLmFyZ3NdKTtcclxufVxyXG5cclxudHlwZSBSZXNvdXJjZU1ldGFkYXRhVHlwZSA9ICdjbGFzcyd8J21ldGhvZHMnfCdwYXJhbXMnfCdwcm9wcyc7XHJcbmludGVyZmFjZSBFeHRyYUVudGl0eURhdGEge1xyXG4gIGtleU5hbWU6IHN0cmluZztcclxuICBpbmRleDogbnVtYmVyO1xyXG59XHJcbmNvbnN0IFJFU09VUlNFX01FVEFEQVRBX1JPT1QgPSAncmVzb3VyY2VzX21ldGFkYXRhJztcclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGNsYXNzIEh0dHBSZXN0VXRpbHMge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGh0dHA6IEh0dHBDbGllbnQgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlY29yYXRlKGRlY29yYXRvck5hbWU6IHN0cmluZywgYW5ub3RhdGlvbnM6IGFueSwgLi4uYXJnczogYW55W10pIHtcclxuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgIGNvbnN0IFt0YXJnZXRdID0gYXJncztcclxuICAgICAgICAgIEh0dHBSZXN0VXRpbHMuY29uc3RydWN0TWV0YWRhdGEuYXBwbHkodGhpcywgWyBkZWNvcmF0b3JOYW1lLCAnY2xhc3MnLCBhbm5vdGF0aW9ucywgdGFyZ2V0LnByb3RvdHlwZSBdKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIDI6IHtcclxuICAgICAgICAgIGNvbnN0IFt0YXJnZXQsIGtleV0gPSBhcmdzO1xyXG4gICAgICAgICAgSHR0cFJlc3RVdGlscy5jb25zdHJ1Y3RNZXRhZGF0YS5hcHBseSh0aGlzLCBbIGRlY29yYXRvck5hbWUsICdwcm9wcycsIGFubm90YXRpb25zLCB0YXJnZXQgXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzJdID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBjb25zdCBbdGFyZ2V0LCBrZXlOYW1lLCBpbmRleF0gPSBhcmdzO1xyXG4gICAgICAgICAgICBIdHRwUmVzdFV0aWxzLmNvbnN0cnVjdE1ldGFkYXRhLmFwcGx5KHRoaXMsIFsgZGVjb3JhdG9yTmFtZSwgJ3BhcmFtcycsIGFubm90YXRpb25zLCB0YXJnZXQsIHsga2V5TmFtZSwgaW5kZXggfSBdKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBbdGFyZ2V0LCBrZXlOYW1lLCBkZXNjcmlwdG9yXSA9IGFyZ3M7XHJcbiAgICAgICAgICAgIEh0dHBSZXN0VXRpbHMuY29uc3RydWN0TWV0YWRhdGEuYXBwbHkodGhpcywgWyBkZWNvcmF0b3JOYW1lLCAnbWV0aG9kcycsIGFubm90YXRpb25zLCB0YXJnZXQsIHsga2V5TmFtZSB9IF0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWNvcmF0b3JzIGFyZSBub3QgdmFsaWQgaGVyZSEnKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHVwIG1ldGFkYWRhXHJcbiAgICogQHBhcmFtIHR5cGUgRW50aXR5IHR5cGVcclxuICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUgb2YgbWV0YWRhdGFcclxuICAgKiBAcGFyYW0gdGFyZ2V0IFByb3RvdHlwZSBvZiBjdXJyZW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSBtZXRhTmFtZSBEZWNvcmF0b3IgbmFtZVxyXG4gICAqIEBwYXJhbSBlbnRpdHlEYXRhIEVudGl0eSBleHRyYSBkYXRhXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uc3RydWN0TWV0YWRhdGEobWV0YU5hbWU6IHN0cmluZywgZW50aXR5VHlwZTogUmVzb3VyY2VNZXRhZGF0YVR5cGUsIHZhbHVlOiBhbnksIHRhcmdldDogYW55LCBlbnRpdHlEYXRhPzogRXh0cmFFbnRpdHlEYXRhKSB7XHJcbiAgICB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0gPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0gfHwge307XHJcbiAgICB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF1bZW50aXR5VHlwZV0gPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF1bZW50aXR5VHlwZV0gfHwge307XHJcblxyXG4gICAgY29uc3Qgcm9vdE1ldGFkYXRhID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdO1xyXG4gICAgY29uc3QgbWV0YWRhdGFPYmogPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF1bZW50aXR5VHlwZV07XHJcbiAgICBpZiAoZW50aXR5RGF0YSAmJiBlbnRpdHlEYXRhLmtleU5hbWUpIHtcclxuICAgICAgbWV0YWRhdGFPYmpbZW50aXR5RGF0YS5rZXlOYW1lXSA9IG1ldGFkYXRhT2JqW2VudGl0eURhdGEua2V5TmFtZV0gfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoZW50aXR5RGF0YSAmJiBlbnRpdHlEYXRhLmluZGV4ICE9IG51bGwpIHtcclxuICAgICAgbWV0YWRhdGFPYmpbZW50aXR5RGF0YS5rZXlOYW1lXVttZXRhTmFtZV0gPSBtZXRhZGF0YU9ialtlbnRpdHlEYXRhLmtleU5hbWVdW21ldGFOYW1lXSB8fCB7fTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZW50aXR5VHlwZSkge1xyXG4gICAgICBjYXNlICdjbGFzcyc6IG1ldGFkYXRhT2JqW21ldGFOYW1lXSA9IHZhbHVlOyBicmVhaztcclxuICAgICAgY2FzZSAncHJvcHMnOiBtZXRhZGF0YU9ialttZXRhTmFtZV0gPSB2YWx1ZTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21ldGhvZHMnOiBtZXRhZGF0YU9ialtlbnRpdHlEYXRhLmtleU5hbWVdW21ldGFOYW1lXSA9IHZhbHVlOyBicmVhaztcclxuICAgICAgY2FzZSAncGFyYW1zJzogbWV0YWRhdGFPYmpbZW50aXR5RGF0YS5rZXlOYW1lXVttZXRhTmFtZV1bdmFsdWUgfHwgJ2RlZmF1bHQnXSA9IGVudGl0eURhdGEuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdW2VudGl0eVR5cGVdID0gbWV0YWRhdGFPYmo7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHJlcXVlc3RNZXRob2QocmVxdWVzdE1ldGhvZE5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgIC8vIEBkeW5hbWljXHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSA9PiB7XHJcbiAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBIdHRwUmVzdFV0aWxzLmNvbGxlY3RVcmwodGFyZ2V0LCBrZXksIGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBIdHRwUmVzdFV0aWxzLmNvbGxlY3RCb2R5KHRhcmdldCwga2V5LCBhcmdzKTtcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSBIdHRwUmVzdFV0aWxzLmNvbGxlY3RRdWVyeVBhcmFtcyh0YXJnZXQsIGtleSwgYXJncyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IEh0dHBSZXN0VXRpbHMuY29sbGVjdEhlYWRlcnModGFyZ2V0LCBrZXksIGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y2VzVHlwZSA9IEh0dHBSZXN0VXRpbHMucHJvZHVjZSh0YXJnZXQsIGtleSwgYXJncyk7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZSA9IEh0dHBSZXN0VXRpbHMuZ2V0T2JzZXJ2ZSh0YXJnZXQsIGtleSwgYXJncylcclxuICAgICAgICBjb25zdCBwYXJhbXM6IGh0dHBSZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXM6IHNlYXJjaCxcclxuICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHByb2R1Y2VzVHlwZSxcclxuICAgICAgICAgIG9ic2VydmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBIdHRwUmVzdFV0aWxzLmh0dHAucmVxdWVzdChyZXF1ZXN0TWV0aG9kTmFtZSwgdXJsLCBwYXJhbXMpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldE9ic2VydmUodGFyZ2V0OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pIHtcclxuICAgIGlmICh0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kc1xyXG4gICAgICAmJiB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kc1ttZXRob2ROYW1lXSkge1xyXG4gICAgICAgcmV0dXJuIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzW21ldGhvZE5hbWVdLm9ic2VydmU7XHJcbiAgICAgfVxyXG4gICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBwcm9kdWNlKHRhcmdldDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKSB7XHJcbiAgICBpZiAodGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNcclxuICAgICAmJiB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ubWV0aG9kc1ttZXRob2ROYW1lXSkge1xyXG4gICAgICByZXR1cm4gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNbbWV0aG9kTmFtZV0ucHJvZHVjZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29sbGVjdFVybCh0YXJnZXQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkge1xyXG4gICAgY29uc3QgYmFzZVVybCA9IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXSAmJiB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0uY2xhc3NcclxuICAgICAgICAgICAgICAgICAgPyB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0uY2xhc3MucGF0aFxyXG4gICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgY29uc3QgbWV0aG9kVXJsID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHMgJiYgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNbbWV0aG9kTmFtZV1cclxuICAgICAgICAgICAgICAgICAgICA/IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzW21ldGhvZE5hbWVdLnBhdGhcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgY29uc3QgaXNSZWxhdGl2ZVBhdGggPSBgJHtiYXNlVXJsfSR7bWV0aG9kVXJsfWBbMF0gPT09ICcvJztcclxuICAgIGNvbnN0IG1ldGhvZFVybFdpdGhQYXJhbXNcclxuICAgICAgPSBbYmFzZVVybCwgbWV0aG9kVXJsXVxyXG4gICAgICAgIC5maWx0ZXIocGF0aCA9PiBwYXRoKVxyXG4gICAgICAgIC5qb2luKCcvJylcclxuICAgICAgICAuc3BsaXQoJy8nKVxyXG4gICAgICAgIC5tYXAocGF0aCA9PiB7XHJcbiAgICAgICAgICBpZiAoIHBhdGhbMF0gPT09ICc6Jykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbU5hbWUgPSBwYXRoLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJiYgdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1ttZXRob2ROYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICYmIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV0ucGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV0ucGF0aFtwYXJhbU5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2luZGV4XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcihwYXRoID0+IHBhdGgpXHJcbiAgICAgICAgLmpvaW4oJy8nKTtcclxuXHJcbiAgICBpZiAoIWlzUmVsYXRpdmVQYXRoKSB7XHJcbiAgICAgIGNvbnN0IFthYnNvbHV0ZVByZWZpeCwgLi4ucGF0aHNdID0gbWV0aG9kVXJsV2l0aFBhcmFtcy5zcGxpdCgnLycpO1xyXG4gICAgICByZXR1cm4gYCR7IGFic29sdXRlUHJlZml4IH0vLyR7IHBhdGhzLmpvaW4oJy8nKSB9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBgLyR7IG1ldGhvZFVybFdpdGhQYXJhbXMgfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjb2xsZWN0Qm9keSh0YXJnZXQ6IGFueSwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSkge1xyXG4gICAgaWYgKCF0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zXHJcbiAgICAgfHwgIXRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV1cclxuICAgICB8fCAhdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1ttZXRob2ROYW1lXS5ib2R5KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1ttZXRob2ROYW1lXS5ib2R5LmRlZmF1bHQ7XHJcbiAgICByZXR1cm4gYXJnc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjb2xsZWN0UXVlcnlQYXJhbXModGFyZ2V0OiBhbnksIG1ldGhvZE5hbWU6IHN0cmluZywgYXJnczogYW55W10pIHtcclxuICAgIGlmICghdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1xyXG4gICAgIHx8ICF0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zW21ldGhvZE5hbWVdXHJcbiAgICAgfHwgIXRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5wYXJhbXNbbWV0aG9kTmFtZV0ucXVlcnkpIHJldHVybiB1bmRlZmluZWQ7XHJcblxyXG4gICAgbGV0IHF1ZXJ5UGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zT2JqZWN0SW5kZXggPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0ucGFyYW1zW21ldGhvZE5hbWVdLnF1ZXJ5LmRlZmF1bHQ7XHJcbiAgICBjb25zdCBxdWVyeU1ldGFkYXRhID0gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLnBhcmFtc1ttZXRob2ROYW1lXS5xdWVyeTtcclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zQ29sbGVjdGlvbiA9IHF1ZXJ5UGFyYW1zT2JqZWN0SW5kZXggIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcmdzW3F1ZXJ5UGFyYW1zT2JqZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyhxdWVyeU1ldGFkYXRhKS5yZWR1Y2UoKG1lcmdlZE9iaiwgcGFyYW1OYW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZXJnZWRPYmosIHsgW3BhcmFtTmFtZV06IGFyZ3NbcXVlcnlNZXRhZGF0YVtwYXJhbU5hbWVdXSB9KSwge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zQ29sbGVjdGlvbilcclxuICAgICAgLmZvckVhY2gocGFyYW1OYW1lID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBxdWVyeVBhcmFtc0NvbGxlY3Rpb25bcGFyYW1OYW1lXTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7IHZhbHVlID0gWyB2YWx1ZSBdOyB9XHJcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoY3VyUGFyYW06IGFueSkgPT4gcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5hcHBlbmQocGFyYW1OYW1lLCBjdXJQYXJhbSkpO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBxdWVyeVBhcmFtcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNvbGxlY3RIZWFkZXJzKHRhcmdldDogYW55LCBtZXRob2ROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKSB7XHJcbiAgICBjb25zdCBjbGFzc0hlYWRlcnMgPSB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0uY2xhc3MgPyB0YXJnZXRbUkVTT1VSU0VfTUVUQURBVEFfUk9PVF0uY2xhc3MuaGVhZGVycyA6IHt9O1xyXG4gICAgY29uc3QgbWV0aG9kSGVhZGVycyA9IHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzICYmIHRhcmdldFtSRVNPVVJTRV9NRVRBREFUQV9ST09UXS5tZXRob2RzW21ldGhvZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGFyZ2V0W1JFU09VUlNFX01FVEFEQVRBX1JPT1RdLm1ldGhvZHNbbWV0aG9kTmFtZV0uaGVhZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHt9O1xyXG4gICAgY29uc3QgbWVyZ2VkSGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIGNsYXNzSGVhZGVycywgbWV0aG9kSGVhZGVycyk7XHJcblxyXG4gICAgY29uc3QgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIGZvciAoY29uc3QgaGVhZGVyIGluIG1lcmdlZEhlYWRlcnMpIHtcclxuICAgICAgaHR0cEhlYWRlcnMuYXBwZW5kKGhlYWRlciwgbWVyZ2VkSGVhZGVyc1toZWFkZXJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBodHRwSGVhZGVycztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXN0VXRpbHMgfSBmcm9tIFwiLi9uZ3gtaHR0cC1hbm5vdGF0aW9ucy51dGlsc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuLy8gQGR5bmFtaWNcclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICB7IHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogb25BcHBJbml0LCBtdWx0aTogdHJ1ZSwgZGVwczogW0h0dHBDbGllbnRdIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBSZXN0TW9kdWxlIHtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uQXBwSW5pdChodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIEh0dHBSZXN0VXRpbHMuaHR0cCA9IGh0dHA7XHJcbiAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvbmd4LWh0dHAtYW5ub3RhdGlvbnMubW9kdWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvbmd4LWh0dHAtYW5ub3RhdGlvbnMudXRpbHMnO1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBIdHRwUmVzdFV0aWxzLCBwYXRoLCBib2R5LCBxdWVyeSwgaGVhZGVycywgcHJvZHVjZXMsIG9ic2VydmUgfSBmcm9tIFwiLi9zcmMvbmd4LWh0dHAtYW5ub3RhdGlvbnMudXRpbHNcIjtcclxuXHJcbmV4cG9ydCBsZXQgUGF0aCA9IHBhdGg7XHJcbmV4cG9ydCBsZXQgUGF0aFBhcmFtID0gcGF0aDtcclxuZXhwb3J0IGxldCBCb2R5ID0gYm9keShudWxsKTtcclxuZXhwb3J0IGxldCBRdWVyeSA9IHF1ZXJ5KG51bGwpO1xyXG5leHBvcnQgbGV0IFF1ZXJ5UGFyYW0gPSBxdWVyeTtcclxuZXhwb3J0IGxldCBRdWVyeVBhcmFtcyA9IHF1ZXJ5KG51bGwpO1xyXG5leHBvcnQgbGV0IE9ic2VydmUgPSBvYnNlcnZlO1xyXG5cclxuLy8gSGVhZGVyc1xyXG5leHBvcnQgbGV0IEhlYWRlcnMgPSBoZWFkZXJzO1xyXG5cclxuLy8gUHJvZHVjZXNcclxuZXhwb3J0IGxldCBQcm9kdWNlcyA9IHByb2R1Y2VzO1xyXG5cclxuLy8gUmVxdWVzdCBtZXRob2RzXHJcbmV4cG9ydCBsZXQgR0VUID0gSHR0cFJlc3RVdGlscy5yZXF1ZXN0TWV0aG9kKCdHZXQnKTtcclxuZXhwb3J0IGxldCBQT1NUID0gSHR0cFJlc3RVdGlscy5yZXF1ZXN0TWV0aG9kKCdQb3N0Jyk7XHJcbmV4cG9ydCBsZXQgUFVUID0gSHR0cFJlc3RVdGlscy5yZXF1ZXN0TWV0aG9kKCdQdXQnKTtcclxuZXhwb3J0IGxldCBERUxFVEUgPSBIdHRwUmVzdFV0aWxzLnJlcXVlc3RNZXRob2QoJ0RlbGV0ZScpO1xyXG5leHBvcnQgbGV0IE9QVElPTlMgPSBIdHRwUmVzdFV0aWxzLnJlcXVlc3RNZXRob2QoJ09wdGlvbnMnKTtcclxuZXhwb3J0IGxldCBIRUFEID0gSHR0cFJlc3RVdGlscy5yZXF1ZXN0TWV0aG9kKCdIZWFkJyk7XHJcbmV4cG9ydCBsZXQgUEFUQ0ggPSBIdHRwUmVzdFV0aWxzLnJlcXVlc3RNZXRob2QoJ1BhdGNoJyk7Il0sIm5hbWVzIjpbIkh0dHBQYXJhbXMiLCJIdHRwSGVhZGVycyIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkFQUF9JTklUSUFMSVpFUiIsIkh0dHBDbGllbnQiLCJodHRwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxvQkFpR3VCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FD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