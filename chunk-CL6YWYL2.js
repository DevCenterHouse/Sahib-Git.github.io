import {
  SellerPage
} from "./chunk-O3N4KFWX.js";
import {
  SellerFacade
} from "./chunk-ZM7LEXHZ.js";
import "./chunk-6CJCVRJS.js";
import "./chunk-L6WIR66L.js";
import "./chunk-MNKMPSFA.js";
import "./chunk-AH5EFBPI.js";
import "./chunk-DYDGEZIA.js";
import "./chunk-235SP5Y4.js";
import "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import "./chunk-5JBKTQLQ.js";
import "./chunk-VGENAY26.js";
import "./chunk-ZM4NPOC4.js";
import "./chunk-5VDMSC62.js";
import {
  SendInquiryDialogModule
} from "./chunk-ZEDUIJHQ.js";
import "./chunk-6TIUDW4S.js";
import {
  MatBottomSheetModule
} from "./chunk-2KWNZOXB.js";
import "./chunk-7NR4UKDC.js";
import "./chunk-OZKRZICA.js";
import {
  AdPhotoViewerModule
} from "./chunk-NHXE4UA3.js";
import "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import "./chunk-DYYJHWVN.js";
import "./chunk-UWPIFTDN.js";
import "./chunk-2RKTIM73.js";
import "./chunk-GOW5C4RI.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import "./chunk-C3BHYCVX.js";
import "./chunk-5CLAA2MT.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  RouteDataType,
  RouterModule
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/public/seller/seller-routing.public.module.ts
var routes = [
  {
    path: ":sellerType/:sellerId/:sellerName",
    component: SellerPage,
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_MOBILE_HEADER_VISIBLE]: false,
      [RouteDataType.IS_FOOTER_VISIBLE]: false,
      [RouteDataType.IS_PUBLIC_PAGE]: true,
      [RouteDataType.IS_SELLER_PAGE]: true,
      [RouteDataType.SHOW_SELLER_INFO]: true
    }
  }
];
var PublicSellerPageRoutingModule = class _PublicSellerPageRoutingModule {
  static {
    this.\u0275fac = function PublicSellerPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicSellerPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PublicSellerPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicSellerPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/public/seller/seller.public.module.ts
var PublicSellerPageModule = class _PublicSellerPageModule {
  static {
    this.\u0275fac = function PublicSellerPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicSellerPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PublicSellerPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [SharedAdsFacade, AdsState, SellerFacade], imports: [PublicSellerPageRoutingModule, AdPhotoViewerModule, MatBottomSheetModule, SendInquiryDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicSellerPageModule, [{
    type: NgModule,
    args: [{
      imports: [PublicSellerPageRoutingModule, AdPhotoViewerModule, MatBottomSheetModule, SendInquiryDialogModule],
      providers: [SharedAdsFacade, AdsState, SellerFacade]
    }]
  }], null, null);
})();
export {
  PublicSellerPageModule
};
//# sourceMappingURL=chunk-CL6YWYL2.js.map
