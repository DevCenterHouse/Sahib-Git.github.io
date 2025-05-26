import {
  AdDescriptionModule,
  AdExtrasModule,
  AdLocationModule,
  AdShareDialogModule,
  AdSubDetailsModule,
  AdVideoModule
} from "./chunk-ZVNVBQRY.js";
import {
  AdContactsComponent,
  AdContactsV2Component,
  AdDealerSummaryComponent,
  AdDesktopPhotoComponent,
  AdDetailPage,
  AdDetailResolver,
  AdHeaderComponent,
  AdIconComponent,
  AdMainHeadingsComponent,
  AdNotFoundComponent,
  AdSummaryHeaderComponent,
  NoEnquiryDialogComponent
} from "./chunk-CES6MYIN.js";
import {
  AdDetailFacade
} from "./chunk-AJZ7THAU.js";
import "./chunk-VSJWKDDR.js";
import "./chunk-MZUUJAB7.js";
import {
  PublicGuard
} from "./chunk-OZPLB4T5.js";
import "./chunk-6CJCVRJS.js";
import {
  GoogleAdModule
} from "./chunk-GV7UKQB5.js";
import "./chunk-OA73AKNS.js";
import "./chunk-AH5EFBPI.js";
import {
  AdBerModule
} from "./chunk-GCFYHD3C.js";
import "./chunk-235SP5Y4.js";
import {
  AdStampModule
} from "./chunk-744QYGBS.js";
import "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import "./chunk-5JBKTQLQ.js";
import "./chunk-VGENAY26.js";
import "./chunk-ZM4NPOC4.js";
import {
  AdBreadcrumbsComponent
} from "./chunk-JF4CZBE5.js";
import {
  SendInquiryDialogModule
} from "./chunk-ZEDUIJHQ.js";
import "./chunk-6TIUDW4S.js";
import {
  PropertyAlertDialogModule
} from "./chunk-QMD5Z7A4.js";
import "./chunk-7NR4UKDC.js";
import {
  FindqoAdModule
} from "./chunk-UVI4O6OH.js";
import "./chunk-OZKRZICA.js";
import {
  AdsImageCarouselComponent
} from "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import "./chunk-DYYJHWVN.js";
import {
  OtherAdListModule
} from "./chunk-LLUGBW5M.js";
import "./chunk-5NSY5PGP.js";
import "./chunk-5EVZ7EBP.js";
import "./chunk-UWPIFTDN.js";
import "./chunk-THEU3YGZ.js";
import "./chunk-VPQFLCQL.js";
import "./chunk-GOW5C4RI.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import "./chunk-5CLAA2MT.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  ButtonModule,
  MatDialogModule,
  MatDividerModule,
  RouterModule,
  SharedModule,
  environment
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-contacts/ad-contacts.module.ts
var AdContactsModule = class _AdContactsModule {
  static {
    this.\u0275fac = function AdContactsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdContactsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdContactsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdContactsModule, [{
    type: NgModule,
    args: [{
      declarations: [AdContactsComponent],
      imports: [SharedModule, ButtonModule],
      exports: [AdContactsComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/no-enquiry-dialog/no-enquiry-dialog.module.ts
var NoEnquiryDialogModule = class _NoEnquiryDialogModule {
  static {
    this.\u0275fac = function NoEnquiryDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoEnquiryDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NoEnquiryDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoEnquiryDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [NoEnquiryDialogComponent],
      imports: [SharedModule, MatDialogModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-dealer-summary/ad-dealer-summary.module.ts
var AdDealerSummaryModule = class _AdDealerSummaryModule {
  static {
    this.\u0275fac = function AdDealerSummaryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDealerSummaryModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdDealerSummaryModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [AdDetailFacade], imports: [SharedModule, NoEnquiryDialogModule, SendInquiryDialogModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDealerSummaryModule, [{
    type: NgModule,
    args: [{
      declarations: [AdDealerSummaryComponent],
      imports: [SharedModule, NoEnquiryDialogModule, SendInquiryDialogModule, MatDividerModule],
      exports: [AdDealerSummaryComponent],
      providers: [AdDetailFacade]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/v2/components/ad-contacts-v2/ad-contacts-v2.module.ts
var AdContactsV2Module = class _AdContactsV2Module {
  constructor() {
    this.isProduction = environment.production;
  }
  static {
    this.\u0275fac = function AdContactsV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdContactsV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdContactsV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, GoogleAdModule, NoEnquiryDialogModule, FindqoAdModule, MatTooltipModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdContactsV2Module, [{
    type: NgModule,
    args: [{
      declarations: [AdContactsV2Component],
      imports: [SharedModule, ButtonModule, GoogleAdModule, NoEnquiryDialogModule, FindqoAdModule, MatTooltipModule],
      exports: [AdContactsV2Component]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/pages/ad-detail/ad-detail-routing.module.ts
var routes = [
  {
    path: ":adId/:title",
    component: AdDetailPage,
    resolve: { ad: AdDetailResolver },
    canActivate: [PublicGuard],
    runGuardsAndResolvers: "always"
  }
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

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-not-found/ad-not-found.module.ts
var AdNotFoundModule = class _AdNotFoundModule {
  static {
    this.\u0275fac = function AdNotFoundModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdNotFoundModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdNotFoundModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdNotFoundModule, [{
    type: NgModule,
    args: [{
      declarations: [AdNotFoundComponent],
      imports: [SharedModule, NgOptimizedImage],
      exports: [AdNotFoundComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-icon/ad-icon.module.ts
var AdIconModule = class _AdIconModule {
  static {
    this.\u0275fac = function AdIconModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdIconModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdIconModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdIconModule, [{
    type: NgModule,
    args: [{
      declarations: [AdIconComponent],
      imports: [SharedModule],
      exports: [AdIconComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-main-headings/ad-main-headings.module.ts
var AdMainHeadingsModule = class _AdMainHeadingsModule {
  static {
    this.\u0275fac = function AdMainHeadingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdMainHeadingsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdMainHeadingsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, AdIconModule, AdShareDialogModule, PropertyAlertDialogModule, AdStampModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdMainHeadingsModule, [{
    type: NgModule,
    args: [{
      declarations: [AdMainHeadingsComponent],
      imports: [SharedModule, ButtonModule, AdIconModule, AdShareDialogModule, PropertyAlertDialogModule, AdStampModule],
      exports: [AdMainHeadingsComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/pages/ad-detail/ad-detail-page.module.ts
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
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      AdDetailPageRoutingModule,
      SharedModule,
      AdMainHeadingsModule,
      AdSubDetailsModule,
      AdDescriptionModule,
      AdExtrasModule,
      ButtonModule,
      AdVideoModule,
      AdLocationModule,
      AdContactsModule,
      AdDealerSummaryModule,
      AdContactsV2Module,
      OtherAdListModule,
      AdBerModule,
      AdNotFoundModule,
      GoogleAdModule,
      FindqoAdModule,
      MatDividerModule,
      AdHeaderComponent,
      AdBreadcrumbsComponent,
      AdSummaryHeaderComponent,
      AdsImageCarouselComponent,
      AdDesktopPhotoComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDetailPageModule, [{
    type: NgModule,
    args: [{
      declarations: [AdDetailPage],
      imports: [
        AdDetailPageRoutingModule,
        SharedModule,
        AdMainHeadingsModule,
        AdSubDetailsModule,
        AdDescriptionModule,
        AdExtrasModule,
        ButtonModule,
        AdVideoModule,
        AdLocationModule,
        AdContactsModule,
        AdDealerSummaryModule,
        AdContactsV2Module,
        OtherAdListModule,
        AdBerModule,
        AdNotFoundModule,
        GoogleAdModule,
        FindqoAdModule,
        MatDividerModule,
        AdHeaderComponent,
        AdBreadcrumbsComponent,
        AdSummaryHeaderComponent,
        AdsImageCarouselComponent,
        AdDesktopPhotoComponent
      ]
    }]
  }], null, null);
})();
export {
  AdDetailPageModule
};
//# sourceMappingURL=chunk-VO67U7XO.js.map
