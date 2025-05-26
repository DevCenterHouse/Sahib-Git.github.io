import {
  MyAdsFacade
} from "./chunk-ZVA7FJ7A.js";
import {
  SeoGuard
} from "./chunk-44A3ZODA.js";
import {
  AuthGuard
} from "./chunk-YWVMQOIU.js";
import "./chunk-5JBKTQLQ.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
  APP_ROUTE,
  RouteDataType,
  RouterModule
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  NgModule,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-ads/my-ads-routing.module.ts
var routes = [
  __spreadValues({
    path: "",
    loadChildren: () => import("./chunk-RWCYYJ2A.js").then((m) => m.MyAdListPageModule)
  }, false ? { \u0275entryName: "src/app/feature/my-ads/pages/my-ad-list/my-ad-list.page.module.ts" } : {}),
  __spreadValues({
    path: APP_ROUTE.myAdmatchingTenants,
    loadChildren: () => import("./chunk-3USTETRK.js").then((m) => m.MyAdMatchingTenantListPageModule),
    canActivate: [AuthGuard, SeoGuard],
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: true,
      [RouteDataType.IS_FOOTER_VISIBLE]: false
    }
  }, false ? { \u0275entryName: "src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list.module.ts" } : {})
];
var MyAdsPageRoutingModule = class _MyAdsPageRoutingModule {
  static {
    this.\u0275fac = function MyAdsPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdsPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/my-ads.module.ts
var MyAdsModule = class _MyAdsModule {
  static {
    this.\u0275fac = function MyAdsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [MyAdsFacade, AdsState, SharedAdsFacade], imports: [MyAdsPageRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsModule, [{
    type: NgModule,
    args: [{
      imports: [MyAdsPageRoutingModule],
      providers: [MyAdsFacade, AdsState, SharedAdsFacade]
    }]
  }], null, null);
})();
export {
  MyAdsModule
};
//# sourceMappingURL=chunk-OI344UHR.js.map
