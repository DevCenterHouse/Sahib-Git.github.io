import {
  AdsenseModule,
  GoogleAdComponent
} from "./chunk-OA73AKNS.js";
import {
  SharedModule,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/google-ad/google-ad.module.ts
var GoogleAdModule = class _GoogleAdModule {
  static {
    this.\u0275fac = function GoogleAdModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleAdModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GoogleAdModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      AdsenseModule.forRoot({
        adClient: environment.googleAdSense.adClient,
        display: environment.googleAdSense.display
      })
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAdModule, [{
    type: NgModule,
    args: [{
      declarations: [GoogleAdComponent],
      imports: [
        SharedModule,
        AdsenseModule.forRoot({
          adClient: environment.googleAdSense.adClient,
          display: environment.googleAdSense.display
        })
      ],
      exports: [GoogleAdComponent]
    }]
  }], null, null);
})();

export {
  GoogleAdModule
};
//# sourceMappingURL=chunk-GV7UKQB5.js.map
