import {
  environment
} from "./chunk-DMGY2MF4.js";
import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  PLATFORM_ID,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// node_modules/ng2-adsense/fesm2022/ng2-adsense.mjs
var _c0 = ["ins"];
var ADSENSE_TOKEN = new InjectionToken("AdsenseConfig");
var AdsenseComponent = class _AdsenseComponent {
  config;
  platform;
  /** adsense account ca-pub-XXXXXXXXXXXXXXXX */
  adClient;
  /** ad slot/number */
  adSlot;
  adFormat;
  /** can be manually set if you need all ads on a page to have same id page-xxx */
  adRegion = "page-" + Math.floor(Math.random() * 1e4) + 1;
  /** ins element display style */
  display;
  /** ins element height in px */
  width;
  /** ins element width in px */
  height;
  /** used for in-feed ads */
  layout;
  /** used for in-feed ads */
  layoutKey;
  /** enable page-level ads */
  pageLevelAds;
  /** sets up some sort of google test ad */
  adtest;
  /* used for flexible ads */
  fullWidthResponsive;
  /**
   * classes applied to the ins element
   */
  className = "";
  ins;
  constructor(config, platform) {
    this.config = config;
    this.platform = platform;
  }
  ngOnInit() {
    const config = this.config;
    this.adClient = this.adClient ?? config.adClient;
    this.adSlot = this.adSlot ?? config.adSlot;
    this.adFormat = this.adFormat ?? config.adFormat ?? "auto";
    this.display = this.display ?? config.display ?? "block";
    this.width = this.width ?? config.width;
    this.height = this.height ?? config.height;
    this.layout = this.layout ?? config.layout;
    this.layoutKey = this.layoutKey ?? config.layoutKey;
    this.pageLevelAds = this.pageLevelAds ?? config.pageLevelAds;
    this.adtest = this.adtest ?? config.adtest;
    this.fullWidthResponsive = this.fullWidthResponsive ?? config.fullWidthResponsive;
  }
  ngOnDestroy() {
    const iframe = this.ins.nativeElement.querySelector("iframe");
    if (iframe && iframe.contentWindow) {
      iframe.src = "about:blank";
      iframe.remove();
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platform)) {
      this.push();
    }
  }
  push() {
    const p = {};
    if (this.pageLevelAds) {
      p.google_ad_client = this.adClient;
      p.enable_page_level_ads = true;
    }
    if (window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push(p);
      } catch {
      }
    }
  }
  static \u0275fac = function AdsenseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdsenseComponent)(\u0275\u0275directiveInject(ADSENSE_TOKEN), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AdsenseComponent,
    selectors: [["ng2-adsense"], ["ng-adsense"]],
    viewQuery: function AdsenseComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ins = _t.first);
      }
    },
    inputs: {
      adClient: "adClient",
      adSlot: "adSlot",
      adFormat: "adFormat",
      adRegion: "adRegion",
      display: "display",
      width: "width",
      height: "height",
      layout: "layout",
      layoutKey: "layoutKey",
      pageLevelAds: "pageLevelAds",
      adtest: "adtest",
      fullWidthResponsive: "fullWidthResponsive",
      className: "className"
    },
    standalone: false,
    decls: 2,
    vars: 17,
    consts: [["ins", ""]],
    template: function AdsenseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "ins", null, 0);
      }
      if (rf & 2) {
        \u0275\u0275classMapInterpolate1("adsbygoogle ", ctx.className, "");
        \u0275\u0275styleProp("display", ctx.display)("width", ctx.width, "px")("height", ctx.height, "px");
        \u0275\u0275attribute("data-ad-client", ctx.adClient)("data-ad-slot", ctx.adSlot)("data-ad-format", ctx.adFormat)("data-ad-region", ctx.adRegion)("data-layout", ctx.layout)("data-adtest", ctx.adtest)("data-layout-key", ctx.layoutKey)("data-full-width-responsive", ctx.fullWidthResponsive);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdsenseComponent, [{
    type: Component,
    args: [{
      selector: "ng2-adsense,ng-adsense",
      template: `
    <ins
      #ins
      class="adsbygoogle {{ className }}"
      [style.display]="display"
      [style.width.px]="width"
      [style.height.px]="height"
      [attr.data-ad-client]="adClient"
      [attr.data-ad-slot]="adSlot"
      [attr.data-ad-format]="adFormat"
      [attr.data-ad-region]="adRegion"
      [attr.data-layout]="layout"
      [attr.data-adtest]="adtest"
      [attr.data-layout-key]="layoutKey"
      [attr.data-full-width-responsive]="fullWidthResponsive"
    >
    </ins>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [ADSENSE_TOKEN]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    adClient: [{
      type: Input
    }],
    adSlot: [{
      type: Input
    }],
    adFormat: [{
      type: Input
    }],
    adRegion: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    layoutKey: [{
      type: Input
    }],
    pageLevelAds: [{
      type: Input
    }],
    adtest: [{
      type: Input
    }],
    fullWidthResponsive: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    ins: [{
      type: ViewChild,
      args: ["ins", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var AdsenseModule = class _AdsenseModule {
  static forRoot(config = {}) {
    return {
      ngModule: _AdsenseModule,
      providers: [{
        provide: ADSENSE_TOKEN,
        useValue: config
      }]
    };
  }
  static \u0275fac = function AdsenseModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdsenseModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AdsenseModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdsenseModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AdsenseComponent],
      declarations: [AdsenseComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/shared/google-ad/google-ad.component.ts
var GoogleAdComponent = class _GoogleAdComponent {
  constructor() {
    this.googleAdBanner = environment.googleAdSense.banner;
  }
  static {
    this.\u0275fac = function GoogleAdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleAdComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoogleAdComponent, selectors: [["findqo-google-ad"]], standalone: false, decls: 1, vars: 2, consts: [[3, "adSlot", "fullWidthResponsive"]], template: function GoogleAdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "ng-adsense", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("adSlot", ctx.googleAdBanner.adSlot)("fullWidthResponsive", ctx.googleAdBanner.fullWidthResponsive);
      }
    }, dependencies: [AdsenseComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleAdComponent, [{
    type: Component,
    args: [{ selector: "findqo-google-ad", standalone: false, template: '<ng-adsense [adSlot]="googleAdBanner.adSlot" [fullWidthResponsive]="googleAdBanner.fullWidthResponsive"></ng-adsense>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoogleAdComponent, { className: "GoogleAdComponent", filePath: "apps/findqo-ireland/src/app/shared/google-ad/google-ad.component.ts", lineNumber: 10 });
})();

export {
  AdsenseModule,
  GoogleAdComponent
};
//# sourceMappingURL=chunk-OA73AKNS.js.map
