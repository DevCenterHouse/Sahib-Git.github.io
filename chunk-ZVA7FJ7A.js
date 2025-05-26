import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  AdStatus,
  CommonFacade,
  MY_ADS_HEADER_STATUS_MAPPING,
  MenuKeys,
  MyProfileFacade,
  SnackService,
  UpdateAction
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-ads/my-ads.facade.ts
var MyAdsFacade = class _MyAdsFacade {
  constructor(adsApi, commonFacade, snackService, adState, profileFacade) {
    this.adsApi = adsApi;
    this.commonFacade = commonFacade;
    this.snackService = snackService;
    this.adState = adState;
    this.profileFacade = profileFacade;
  }
  getAdsStatusList$() {
    return this.adState.adStatusList$;
  }
  loadAdStatusList() {
    this.adsApi.getAdsStatusList().subscribe((adStatusList) => {
      this.adState.setAdStatusList(adStatusList);
    });
  }
  loadAdList(params) {
    this.adsApi.getMyAds(params).subscribe((myAds) => {
      const LIVE_ADS = myAds.data.filter((ad) => ad.adStatus.status === AdStatus.LIVE);
      this.profileFacade.updateProfileValues(MenuKeys.LIVE_ADS, UpdateAction.UPDATE, LIVE_ADS.length);
      this.profileFacade.updateProfileValues(MenuKeys.ADDS_COUNT, UpdateAction.UPDATE, myAds.data.length);
      this.adState.setAdList(myAds.data);
      this.adState.setPageMetaData(myAds?.meta);
    });
  }
  deleteAd(adId, dialogRef, myAdHeaderStatusId) {
    const AD_STATUS = MY_ADS_HEADER_STATUS_MAPPING[myAdHeaderStatusId];
    this.adsApi.deleteAd(adId).subscribe(() => {
      this.snackService.open({ data: { message: this.commonFacade.getTranslations()["n590"] }, panelClass: ["snackbar-success"] });
      dialogRef.close(true);
      if (AD_STATUS) {
        this.loadAdList({ status: AD_STATUS, perPage: 10 });
      } else {
        this.loadAdList();
      }
      this.loadAdStatusList();
    });
  }
  unpublishAd(adId, updatestatus, dialogRef, myAdHeaderStatusId) {
    const AD_STATUS = MY_ADS_HEADER_STATUS_MAPPING[myAdHeaderStatusId];
    this.adsApi.unpublishAd(adId, updatestatus).subscribe(() => {
      this.snackService.open({ data: { type: "success", message: this.commonFacade.getTranslations()["n4102"] }, panelClass: ["snackbar-success"] });
      dialogRef.close("UPDATE_STATUS");
      if (AD_STATUS) {
        this.loadAdList({ status: AD_STATUS, perPage: 10 });
      } else {
        this.loadAdList();
      }
      this.loadAdStatusList();
    });
  }
  publishAd(adId, updatestatus, myAdHeaderStatusId) {
    const AD_STATUS = MY_ADS_HEADER_STATUS_MAPPING[myAdHeaderStatusId];
    this.adsApi.unpublishAd(adId, updatestatus).subscribe(() => {
      this.snackService.open({ data: { type: "success", message: this.commonFacade.getTranslations()["n4103"] }, panelClass: ["snackbar-success"] });
      if (AD_STATUS) {
        this.loadAdList({ status: AD_STATUS, perPage: 10 });
      } else {
        this.loadAdList();
      }
      this.loadAdStatusList();
    });
  }
  updateAdStatus(adId, updatestatus) {
    return this.adsApi.updateAdStatus(adId, updatestatus);
  }
  soldAd(adId, dialogRef, myAdHeaderStatusId) {
    const AD_STATUS = MY_ADS_HEADER_STATUS_MAPPING[myAdHeaderStatusId];
    this.adsApi.soldAd(adId).subscribe(() => {
      this.snackService.open({ data: { message: this.commonFacade.getTranslations()["n3201"] }, panelClass: ["snackbar-success"] });
      dialogRef.close();
      if (AD_STATUS) {
        this.loadAdList({ status: AD_STATUS, perPage: 10 });
      } else {
        this.loadAdList();
      }
      this.loadAdStatusList();
    });
  }
  static {
    this.\u0275fac = function MyAdsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsFacade)(\u0275\u0275inject(AdsApi), \u0275\u0275inject(CommonFacade), \u0275\u0275inject(SnackService), \u0275\u0275inject(AdsState), \u0275\u0275inject(MyProfileFacade));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MyAdsFacade, factory: _MyAdsFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsFacade, [{
    type: Injectable
  }], () => [{ type: AdsApi }, { type: CommonFacade }, { type: SnackService }, { type: AdsState }, { type: MyProfileFacade }], null);
})();

export {
  MyAdsFacade
};
//# sourceMappingURL=chunk-ZVA7FJ7A.js.map
