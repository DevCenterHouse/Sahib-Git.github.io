import {
  AdBerComponent
} from "./chunk-235SP5Y4.js";
import {
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/ad-ber/ad-ber.module.ts
var AdBerModule = class _AdBerModule {
  static {
    this.\u0275fac = function AdBerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdBerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdBerModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdBerModule, [{
    type: NgModule,
    args: [{
      declarations: [AdBerComponent],
      imports: [SharedModule],
      exports: [AdBerComponent]
    }]
  }], null, null);
})();

export {
  AdBerModule
};
//# sourceMappingURL=chunk-GCFYHD3C.js.map
