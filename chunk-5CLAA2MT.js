import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/states/breadcrumbs.state.ts
var BreadcrumbsState = class _BreadcrumbsState {
  constructor() {
    this._breadcrumbsParams$ = new BehaviorSubject([]);
    this._breadcrumbsQueryParams$ = new BehaviorSubject({});
  }
  get breadcrumbsParams$() {
    return this._breadcrumbsParams$.asObservable();
  }
  get breadcrumbsQueryParams$() {
    return this._breadcrumbsQueryParams$.asObservable();
  }
  setbreadcrumbsParams(params, queryParams = {}) {
    const sanitizedParams = params.filter((seg) => !!seg && seg !== "/");
    this._breadcrumbsParams$.next(sanitizedParams);
    this._breadcrumbsQueryParams$.next(queryParams);
  }
  getbreadcrumbsParams() {
    return { params: this._breadcrumbsParams$.getValue(), queryParams: this._breadcrumbsQueryParams$.getValue() };
  }
  static {
    this.\u0275fac = function BreadcrumbsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbsState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BreadcrumbsState, factory: _BreadcrumbsState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbsState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  BreadcrumbsState
};
//# sourceMappingURL=chunk-5CLAA2MT.js.map
