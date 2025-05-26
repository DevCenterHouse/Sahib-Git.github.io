import {
  EnquiriesState,
  MyEnquiriesFacade
} from "./chunk-E2NRA2LK.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
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

// apps/findqo-ireland/src/app/feature/my-enquiries/my-enquiries-routing.module.ts
var routes = [
  __spreadValues({
    path: "",
    loadChildren: () => import("./chunk-QYQKK4FF.js").then((m) => m.MyEnquiryListPageModule)
  }, false ? { \u0275entryName: "src/app/feature/my-enquiries/pages/my-enquiry-list/my-enquiry-list.page.module.ts" } : {})
];
var MyEnquiriesRoutingModule = class _MyEnquiriesRoutingModule {
  static {
    this.\u0275fac = function MyEnquiriesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyEnquiriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiriesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-enquiries/my-enquiries.module.ts
var MyEnquiriesModule = class _MyEnquiriesModule {
  static {
    this.\u0275fac = function MyEnquiriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyEnquiriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [EnquiriesState, MyEnquiriesFacade, SharedAdsFacade, AdsState], imports: [SharedModule, MyEnquiriesRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiriesModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, MyEnquiriesRoutingModule],
      providers: [EnquiriesState, MyEnquiriesFacade, SharedAdsFacade, AdsState]
    }]
  }], null, null);
})();
export {
  MyEnquiriesModule
};
//# sourceMappingURL=chunk-342LDUSA.js.map
