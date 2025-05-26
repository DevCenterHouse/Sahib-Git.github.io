import {
  SellerFacade
} from "./chunk-ZM7LEXHZ.js";
import {
  SendInquiryDialogModule
} from "./chunk-ZEDUIJHQ.js";
import "./chunk-6TIUDW4S.js";
import "./chunk-7NR4UKDC.js";
import "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import "./chunk-DYYJHWVN.js";
import "./chunk-UWPIFTDN.js";
import "./chunk-GOW5C4RI.js";
import "./chunk-UNCX2CTW.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  RouteDataType,
  RouterModule,
  SharedModule
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

// apps/findqo-ireland/src/app/feature/seller/seller-routing.module.ts
var routes = [
  __spreadValues({
    path: "",
    loadChildren: () => import("./chunk-763SOFUG.js").then((m) => m.SellerPageModule),
    data: { [RouteDataType.IS_SELLER_PAGE]: true, [RouteDataType.SHOW_SELLER_INFO]: true }
  }, false ? { \u0275entryName: "src/app/feature/seller/pages/seller-page.module.ts" } : {})
];
var SellerRoutingModule = class _SellerRoutingModule {
  static {
    this.\u0275fac = function SellerRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SellerRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/seller/seller.module.ts
var SellerModule = class _SellerModule {
  static {
    this.\u0275fac = function SellerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SellerModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [SharedAdsFacade, AdsState, SellerFacade], imports: [SharedModule, SellerRoutingModule, SendInquiryDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, SellerRoutingModule, SendInquiryDialogModule],
      providers: [SharedAdsFacade, AdsState, SellerFacade]
    }]
  }], null, null);
})();
export {
  SellerModule
};
//# sourceMappingURL=chunk-7CZ57W2G.js.map
