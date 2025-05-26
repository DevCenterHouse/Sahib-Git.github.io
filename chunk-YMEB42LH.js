import {
  APP_ROUTE,
  Router,
  SellerType,
  StorageService,
  StorageType
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/services/common-place-ad.service.ts
var CommonPlaceAdService = class _CommonPlaceAdService {
  constructor() {
    this.storageService = inject(StorageService);
    this.router = inject(Router);
  }
  gotoPlaceAd() {
    const user = this.storageService.getItem(StorageType.USER);
    const isLoggedIn = !!user;
    if (!isLoggedIn) {
      this.router.navigate([`/${APP_ROUTE.placeAdCategory}`], {
        queryParams: { sellerTypeId: SellerType.INDIVIDUAL }
      });
      return;
    }
    const sellerTypeId = +user.hasBusinessProfile ? SellerType.BUSINESS : SellerType.INDIVIDUAL;
    this.router.navigate([`/${APP_ROUTE.placeAdCategory}`], { queryParams: { sellerTypeId } });
  }
  static {
    this.\u0275fac = function CommonPlaceAdService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommonPlaceAdService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommonPlaceAdService, factory: _CommonPlaceAdService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonPlaceAdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CommonPlaceAdService
};
//# sourceMappingURL=chunk-YMEB42LH.js.map
