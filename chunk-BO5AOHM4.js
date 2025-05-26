import {
  AdDetailPage,
  AdDetailResolver
} from "./chunk-CES6MYIN.js";
import {
  AdDetailFacade
} from "./chunk-AJZ7THAU.js";
import {
  ResponseService
} from "./chunk-VSJWKDDR.js";
import "./chunk-MZUUJAB7.js";
import "./chunk-6CJCVRJS.js";
import "./chunk-OA73AKNS.js";
import "./chunk-AH5EFBPI.js";
import "./chunk-235SP5Y4.js";
import "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import "./chunk-5JBKTQLQ.js";
import "./chunk-VGENAY26.js";
import "./chunk-ZM4NPOC4.js";
import "./chunk-JF4CZBE5.js";
import {
  SendInquiryDialogModule
} from "./chunk-ZEDUIJHQ.js";
import "./chunk-6TIUDW4S.js";
import "./chunk-7NR4UKDC.js";
import {
  AdsFacade
} from "./chunk-UDKL55SE.js";
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
import "./chunk-5NSY5PGP.js";
import "./chunk-5EVZ7EBP.js";
import "./chunk-UWPIFTDN.js";
import "./chunk-THEU3YGZ.js";
import "./chunk-VPQFLCQL.js";
import "./chunk-GOW5C4RI.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
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

// apps/findqo-ireland/src/app/public/ad-detail/ad-detail-routing.public.module.ts
var routes = [
  {
    path: ":adId/:title",
    component: AdDetailPage,
    resolve: { ad: AdDetailResolver },
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_MOBILE_HEADER_VISIBLE]: false,
      [RouteDataType.IS_FOOTER_VISIBLE]: false,
      [RouteDataType.IS_PUBLIC_PAGE]: true
    }
  }
];
var PublicAdDetailPageRoutingModule = class _PublicAdDetailPageRoutingModule {
  static {
    this.\u0275fac = function PublicAdDetailPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicAdDetailPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PublicAdDetailPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicAdDetailPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/public/ad-detail/ad-detail.public.module..ts
var PublicAdDetaiPageModule = class _PublicAdDetaiPageModule {
  static {
    this.\u0275fac = function PublicAdDetaiPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicAdDetaiPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PublicAdDetaiPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [AdsState, AdDetailFacade, SharedAdsFacade, AdsFacade, ResponseService], imports: [PublicAdDetailPageRoutingModule, SendInquiryDialogModule, AdPhotoViewerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicAdDetaiPageModule, [{
    type: NgModule,
    args: [{
      imports: [PublicAdDetailPageRoutingModule, SendInquiryDialogModule, AdPhotoViewerModule],
      providers: [AdsState, AdDetailFacade, SharedAdsFacade, AdsFacade, ResponseService]
    }]
  }], null, null);
})();
export {
  PublicAdDetaiPageModule
};
//# sourceMappingURL=chunk-BO5AOHM4.js.map
