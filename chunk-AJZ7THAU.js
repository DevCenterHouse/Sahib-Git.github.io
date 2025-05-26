import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  BehaviorSubject,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ad-detail/ad-detail.facade.ts
var AdDetailFacade = class _AdDetailFacade {
  constructor(adsApi) {
    this.adsApi = adsApi;
    this._relatedAdList$ = new BehaviorSubject([]);
  }
  getRelatedAdList$() {
    return this._relatedAdList$.asObservable();
  }
  loadRelatedAdList(currentAd) {
    this.adsApi.getLatestAdList({ section: currentAd.section.reference, aisle: currentAd.aisle.reference, perPage: 6 }).pipe(map((adList) => {
      const FILTERED_AD_LIST = adList.filter((ad) => ad.id !== currentAd.id);
      if (FILTERED_AD_LIST.length > 5) {
        FILTERED_AD_LIST.splice(FILTERED_AD_LIST.length - 1, 1);
      }
      return FILTERED_AD_LIST;
    })).subscribe((adList) => this._relatedAdList$.next(adList));
  }
  trackPhoneCall(id) {
    this.adsApi.trackPhoneCall(id).subscribe();
  }
  static {
    this.\u0275fac = function AdDetailFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDetailFacade)(\u0275\u0275inject(AdsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdDetailFacade, factory: _AdDetailFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDetailFacade, [{
    type: Injectable
  }], () => [{ type: AdsApi }], null);
})();

export {
  AdDetailFacade
};
//# sourceMappingURL=chunk-AJZ7THAU.js.map
