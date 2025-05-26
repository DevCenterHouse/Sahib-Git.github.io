import {
  EmptyAdListComponent
} from "./chunk-MNKMPSFA.js";
import {
  ButtonModule,
  MatDividerModule,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/empty-ad-list/empty-ad-list.module.ts
var EmptyAdListModule = class _EmptyAdListModule {
  static {
    this.\u0275fac = function EmptyAdListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmptyAdListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmptyAdListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyAdListModule, [{
    type: NgModule,
    args: [{
      declarations: [EmptyAdListComponent],
      imports: [SharedModule, ButtonModule, MatDividerModule],
      exports: [EmptyAdListComponent]
    }]
  }], null, null);
})();

export {
  EmptyAdListModule
};
//# sourceMappingURL=chunk-ZCYKWHRI.js.map
