import {
  AdListKind
} from "./chunk-DMGY2MF4.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/states/ads.state.ts
var AdsState = class _AdsState {
  constructor() {
    this._isLoading$ = new BehaviorSubject(false);
    this._adList$ = new BehaviorSubject([]);
    this._ad$ = new BehaviorSubject(void 0);
    this._adsCount$ = new BehaviorSubject(0);
    this._adStatusList$ = new BehaviorSubject([]);
    this._pageMetaData$ = new BehaviorSubject(void 0);
    this._adListKind$ = new BehaviorSubject(AdListKind.SIMILAR);
    this._reportAdReasons$ = new BehaviorSubject(void 0);
  }
  get reportAdReasons$() {
    return this._reportAdReasons$.asObservable();
  }
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  get adList$() {
    return this._adList$.asObservable();
  }
  get ad$() {
    return this._ad$.asObservable();
  }
  get adsCount$() {
    return this._adsCount$.asObservable();
  }
  get adStatusList$() {
    return this._adStatusList$.asObservable();
  }
  get pageMetaData$() {
    return this._pageMetaData$.asObservable();
  }
  get adListKind$() {
    return this._adListKind$.asObservable();
  }
  // TODO: This is on the previous implementation. Avoid using this for now on other places.
  getPageMetaData() {
    return this._pageMetaData$.getValue();
  }
  setAdStatusList(adStatusList) {
    this._adStatusList$.next(adStatusList);
  }
  setAdList(adList) {
    this._adList$.next(adList);
  }
  setAd(ad) {
    this._ad$.next(ad);
  }
  setIsLoading(isLoading) {
    this._isLoading$.next(isLoading);
  }
  setAdsCount(count) {
    this._adsCount$.next(count);
  }
  setPageMetaData(pageMetaData) {
    return this._pageMetaData$.next(pageMetaData);
  }
  setAdListKind(kind) {
    this._adListKind$.next(kind);
  }
  getUpdatedAdList() {
    return this._adList$.getValue();
  }
  setReportAdReasons(data) {
    this._reportAdReasons$.next(data);
  }
  addDataToList(updatedAd) {
    const CURRENT_AD_LIST = [...this._adList$.getValue()];
    this._adList$.next([...CURRENT_AD_LIST, ...updatedAd]);
  }
  updateAdList(updatedAd) {
    const NEW_AD_LIST = [...this._adList$.getValue()];
    const AD_INDEX = NEW_AD_LIST.findIndex((ad) => ad.id === updatedAd.id);
    NEW_AD_LIST[AD_INDEX] = __spreadValues({}, updatedAd);
    this._adList$.next([...NEW_AD_LIST]);
  }
  updateAd(updateAd) {
    this._ad$.next(__spreadValues(__spreadValues({}, this._ad$.getValue()), updateAd));
  }
  addAd(adList) {
    this._adList$.next([...this._adList$.getValue(), ...adList]);
  }
  deleteAd(deletedAd) {
    this._adList$.next(this._adList$.getValue().filter((ad) => ad.id !== deletedAd.id));
  }
  static {
    this.\u0275fac = function AdsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdsState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdsState, factory: _AdsState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdsState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AdsState
};
//# sourceMappingURL=chunk-3GNTPSH6.js.map
