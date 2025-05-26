import {
  FiltersApi
} from "./chunk-DMGY2MF4.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ads/pages/ad-list/county-content.facade.ts
var CountyContentFacade = class _CountyContentFacade {
  constructor() {
    this.filtersApi = inject(FiltersApi);
    this._currentCounty$ = new BehaviorSubject(null);
    this._countyContent$ = new BehaviorSubject(null);
    this.excludedCounties = /* @__PURE__ */ new Set(["ireland", "outside-ireland"]);
  }
  get countyContent$() {
    return this._countyContent$.asObservable();
  }
  loadCountyContent(county) {
    const primaryCounty = county.split(",")[0];
    if (this.excludedCounties.has(primaryCounty)) {
      this._countyContent$.next(null);
      return;
    }
    if (this._countyContent$.value && this._currentCounty$.value === primaryCounty) {
      return;
    }
    this._currentCounty$.next(primaryCounty);
    this.filtersApi.getCountyContent(primaryCounty).pipe(catchError((error) => {
      this._countyContent$.next(null);
      throw error;
    }), tap((content) => this._countyContent$.next(content))).subscribe();
  }
  static {
    this.\u0275fac = function CountyContentFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CountyContentFacade)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CountyContentFacade, factory: _CountyContentFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountyContentFacade, [{
    type: Injectable
  }], null, null);
})();

export {
  CountyContentFacade
};
//# sourceMappingURL=chunk-YVUZMQUE.js.map
