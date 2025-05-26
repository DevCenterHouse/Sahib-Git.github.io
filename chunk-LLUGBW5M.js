import {
  OtherAdListComponent
} from "./chunk-5NSY5PGP.js";
import {
  BedroomIconModule,
  PropertySizeIconModule,
  ShowerIconModule
} from "./chunk-UNCX2CTW.js";
import {
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/other-ad-list/other-ad-list.module.ts
var OtherAdListModule = class _OtherAdListModule {
  static {
    this.\u0275fac = function OtherAdListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OtherAdListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _OtherAdListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, PropertySizeIconModule, BedroomIconModule, ShowerIconModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtherAdListModule, [{
    type: NgModule,
    args: [{
      declarations: [OtherAdListComponent],
      imports: [SharedModule, PropertySizeIconModule, BedroomIconModule, ShowerIconModule],
      exports: [OtherAdListComponent]
    }]
  }], null, null);
})();

export {
  OtherAdListModule
};
//# sourceMappingURL=chunk-LLUGBW5M.js.map
