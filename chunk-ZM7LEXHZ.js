import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  APP_ROUTE,
  Router,
  SellerType
} from "./chunk-DMGY2MF4.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  finalize,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/seller/seller.facade.ts
var SellerFacade = class _SellerFacade {
  constructor(adsState, adsApi, router) {
    this.adsState = adsState;
    this.adsApi = adsApi;
    this.router = router;
    this._isLoading$ = new BehaviorSubject(false);
    this._isLoadingMoreAds$ = new BehaviorSubject(false);
    this._seller$ = new BehaviorSubject(void 0);
  }
  getIsLoading$() {
    return this._isLoading$.asObservable();
  }
  getIsLoadingMoreAds$() {
    return this._isLoadingMoreAds$.asObservable();
  }
  getSeller$() {
    return this._seller$.asObservable();
  }
  getSeller() {
    return this._seller$.getValue();
  }
  getMetadata() {
    return this.adsState.getPageMetaData();
  }
  setIsLoading(isLoading) {
    this._isLoading$.next(isLoading);
  }
  setIsLoadingMoreAds(isLoading) {
    this._isLoadingMoreAds$.next(isLoading);
  }
  setSeller(seller) {
    this._seller$.next(seller);
  }
  clearData() {
    this.adsState.setAdList([]);
    this.setSeller(void 0);
    this.adsState.setPageMetaData(void 0);
    this.adsState.setAdListKind(void 0);
  }
  // end - Move all declarations here to Seller State
  loadAdList(params) {
    this.setIsLoading(true);
    this.adsState.setIsLoading(true);
    let adListVm$ = this.adsApi.getAdList(params);
    if (params?.agentId) {
      adListVm$ = this.adsApi.getAgentAdList(params?.agentId, { sort: params?.sort, sellerTypeId: SellerType.BUSINESS });
    }
    adListVm$.pipe(catchError((response) => {
      if (response.status === 400 || response.status === 403) {
        this.router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
      }
      throw new Error(response.message);
    }), finalize(() => {
      this.setIsLoading(false);
      this.adsState.setIsLoading(false);
    })).subscribe((adListResponse) => {
      this.adsState.setAdList(adListResponse?.data);
      this.setSeller(adListResponse?.seller);
      this.adsState.setPageMetaData(adListResponse?.meta);
      this.adsState.setAdListKind(adListResponse.kind);
    });
  }
  updateAdsList(params) {
    this.setIsLoadingMoreAds(true);
    this.adsApi.getAdList(__spreadProps(__spreadValues({}, params), { userId: this.getSeller().id })).pipe(catchError((response) => {
      if (response.status === 400) {
        this.router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
      }
      throw new Error(response.message);
    }), finalize(() => {
      this.setIsLoadingMoreAds(false);
    })).subscribe((adListResponse) => {
      this.adsState.addDataToList(adListResponse?.data);
      this.adsState.setPageMetaData(adListResponse?.meta);
    });
  }
  static {
    this.\u0275fac = function SellerFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerFacade)(\u0275\u0275inject(AdsState), \u0275\u0275inject(AdsApi), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SellerFacade, factory: _SellerFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerFacade, [{
    type: Injectable
  }], () => [{ type: AdsState }, { type: AdsApi }, { type: Router }], null);
})();

export {
  SellerFacade
};
//# sourceMappingURL=chunk-ZM7LEXHZ.js.map
