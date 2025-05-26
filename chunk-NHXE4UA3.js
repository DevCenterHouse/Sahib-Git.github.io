import {
  AdPhotoViewerComponent,
  AdsImageCarouselComponent
} from "./chunk-7LQ3PONV.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  AdPricePipe,
  AdStatusTooltipPipe,
  ButtonComponent,
  ButtonModule,
  FeatureIfDirective,
  MatDialogModule,
  MatFabButton,
  MatMiniFabButton,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵsetComponentScope
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/ad-photo-viewer/ad-photo-viewer.module.ts
var AdPhotoViewerModule = class _AdPhotoViewerModule {
  static {
    this.\u0275fac = function AdPhotoViewerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdPhotoViewerModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdPhotoViewerModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, AdsImageCarouselComponent, ButtonModule, MatDialogModule, CommonModule, MatTooltipModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdPhotoViewerModule, [{
    type: NgModule,
    args: [{
      declarations: [AdPhotoViewerComponent],
      imports: [SharedModule, AdsImageCarouselComponent, ButtonModule, MatDialogModule, CommonModule, MatTooltipModule],
      exports: [AdPhotoViewerComponent]
    }]
  }], null, null);
})();
\u0275\u0275setComponentScope(AdPhotoViewerComponent, [NgClass, NgForOf, NgIf, MatMiniFabButton, MatFabButton, MatIcon, FeatureIfDirective, AdsImageCarouselComponent, ButtonComponent, MatTooltip], [AsyncPipe, AdStatusTooltipPipe, TranslationsPipe, AdPricePipe]);

export {
  AdPhotoViewerModule
};
//# sourceMappingURL=chunk-NHXE4UA3.js.map
