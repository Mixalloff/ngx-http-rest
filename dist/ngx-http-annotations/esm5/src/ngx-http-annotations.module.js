/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpRestUtils } from "./ngx-http-annotations.utils";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
var HttpRestModule = /** @class */ (function () {
    function HttpRestModule() {
    }
    HttpRestModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
                    providers: [
                        { provide: APP_INITIALIZER, useFactory: onAppInit, multi: true, deps: [HttpClient] }
                    ]
                },] },
    ];
    return HttpRestModule;
}());
export { HttpRestModule };
function HttpRestModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HttpRestModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HttpRestModule.ctorParameters;
}
/**
 * @param {?} http
 * @return {?}
 */
export function onAppInit(http) {
    return function () {
        HttpRestUtils.http = http;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWh0dHAtYW5ub3RhdGlvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWh0dHAtYW5ub3RhdGlvbnMvIiwic291cmNlcyI6WyJzcmMvbmd4LWh0dHAtYW5ub3RhdGlvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztnQkFFdkQsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtxQkFDckY7aUJBQ0o7O3lCQVZEOztTQVdhLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLE1BQU0sb0JBQW9CLElBQWdCO0lBQ3hDLE1BQU0sQ0FBQztRQUNMLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQzNCLENBQUE7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlc3RVdGlscyB9IGZyb20gXCIuL25neC1odHRwLWFubm90YXRpb25zLnV0aWxzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG4vLyBAZHluYW1pY1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBvbkFwcEluaXQsIG11bHRpOiB0cnVlLCBkZXBzOiBbSHR0cENsaWVudF0gfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFJlc3RNb2R1bGUge1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25BcHBJbml0KGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgSHR0cFJlc3RVdGlscy5odHRwID0gaHR0cDtcclxuICB9XHJcbn0iXX0=