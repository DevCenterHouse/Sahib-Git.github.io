import {
  MyAdStampComponent
} from "./chunk-UNPSDH5C.js";
import {
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-stamp/my-ad-stamp.module.ts
var AdStampModule = class _AdStampModule {
  static {
    this.\u0275fac = function AdStampModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdStampModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdStampModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdStampModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdStampComponent],
      imports: [SharedModule],
      exports: [MyAdStampComponent]
    }]
  }], null, null);
})();

export {
  AdStampModule
};
//# sourceMappingURL=chunk-744QYGBS.js.map
