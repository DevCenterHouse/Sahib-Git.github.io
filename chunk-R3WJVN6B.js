import {
  AdDetailFacade
} from "./chunk-AJZ7THAU.js";
import {
  ResponseService
} from "./chunk-VSJWKDDR.js";
import {
  SendInquiryDialogModule
} from "./chunk-ZEDUIJHQ.js";
import "./chunk-6TIUDW4S.js";
import "./chunk-7NR4UKDC.js";
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
import "./chunk-GOW5C4RI.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
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
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ad-detail/ad-detail-routing.module.ts
var routes = [
  __spreadValues({
    path: "",
    loadChildren: () => import("./chunk-VO67U7XO.js").then((m) => m.AdDetailPageModule),
    data: {
      [RouteDataType.PAGE_REFERENCE]: "ad-detail",
      runGuardsAndResolvers: "always"
    }
  }, false ? { \u0275entryName: "src/app/feature/ad-detail/pages/ad-detail/ad-detail-page.module.ts" } : {})
];
var AdDetailPageRoutingModule = class _AdDetailPageRoutingModule {
  static {
    this.\u0275fac = function AdDetailPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDetailPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdDetailPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDetailPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/ad-detail.module.ts
var AdDetailPageModule = class _AdDetailPageModule {
  static {
    this.\u0275fac = function AdDetailPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDetailPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdDetailPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [AdsState, AdDetailFacade, SharedAdsFacade, ResponseService], imports: [AdDetailPageRoutingModule, SendInquiryDialogModule, AdPhotoViewerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDetailPageModule, [{
    type: NgModule,
    args: [{
      imports: [AdDetailPageRoutingModule, SendInquiryDialogModule, AdPhotoViewerModule],
      providers: [AdsState, AdDetailFacade, SharedAdsFacade, ResponseService]
    }]
  }], null, null);
})();
export {
  AdDetailPageModule
};
//# sourceMappingURL=chunk-R3WJVN6B.js.map
