import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  APP_ROUTE,
  CommonFacade,
  Router
} from "./chunk-DMGY2MF4.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  finalize,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ads/ads.facade.ts
var AdsFacade = class _AdsFacade {
  constructor(adsApi, adsState, router, commonFacade) {
    this.adsApi = adsApi;
    this.adsState = adsState;
    this.router = router;
    this.commonFacade = commonFacade;
    this._isLoadingMoreAds$ = new BehaviorSubject(false);
  }
  get isLoadingMoreAds$() {
    return this._isLoadingMoreAds$.asObservable();
  }
  updateAdsList(params) {
    this._isLoadingMoreAds$.next(true);
    this.adsApi.getAdList(params).pipe(finalize(() => this._isLoadingMoreAds$.next(false))).subscribe((adListResponse) => {
      this.adsState.addAd(adListResponse?.data);
      this.adsState.setPageMetaData(adListResponse?.meta);
    });
  }
  fetchAds(params) {
    this.adsState.setIsLoading(true);
    return this.adsApi.getAdList(params).pipe(catchError((response) => {
      if (response.status === 400 || response.status === 500) {
        this.router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
      }
      throw new Error(response.message);
    }), tap(() => this.commonFacade.fetchRecentSearch()), finalize(() => this.adsState.setIsLoading(false)));
  }
  updateAdsState(adListResponse) {
    this.adsState.setAdList(adListResponse?.data);
    this.adsState.setPageMetaData(adListResponse?.meta);
    this.adsState.setAdListKind(adListResponse.kind);
  }
  static {
    this.\u0275fac = function AdsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdsFacade)(\u0275\u0275inject(AdsApi), \u0275\u0275inject(AdsState), \u0275\u0275inject(Router), \u0275\u0275inject(CommonFacade));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdsFacade, factory: _AdsFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdsFacade, [{
    type: Injectable
  }], () => [{ type: AdsApi }, { type: AdsState }, { type: Router }, { type: CommonFacade }], null);
})();

export {
  AdsFacade
};
//# sourceMappingURL=chunk-UDKL55SE.js.map
