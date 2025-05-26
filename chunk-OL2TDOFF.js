import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/data-access/states/property-worth.state.ts
var PropertyWorthState = class _PropertyWorthState {
  constructor() {
    this._isProcessing$ = new BehaviorSubject(false);
    this._valuationInfo$ = new BehaviorSubject(null);
    this._isError$ = new BehaviorSubject(false);
    this._isLoading$ = new BehaviorSubject(true);
  }
  get isError$() {
    return this._isError$.asObservable();
  }
  get ValuationInfo() {
    return this._valuationInfo$.asObservable();
  }
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  setErrorState(state) {
    this._isError$.next(state);
  }
  setLoadingState(state) {
    this._isLoading$.next(state);
  }
  get isProcessing$() {
    return this._isProcessing$.asObservable();
  }
  setProcessing(state) {
    this._isProcessing$.next(state);
  }
  setValuationInfo(info) {
    this._valuationInfo$.next(info);
  }
  getValuationInfo() {
    return this._valuationInfo$.getValue();
  }
  static {
    this.\u0275fac = function PropertyWorthState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyWorthState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertyWorthState, factory: _PropertyWorthState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyWorthState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PropertyWorthState
};
//# sourceMappingURL=chunk-OL2TDOFF.js.map
