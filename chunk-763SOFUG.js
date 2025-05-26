import {
  PublicGuard
} from "./chunk-OZPLB4T5.js";
import {
  SellerAboutComponent,
  SellerAdListComponent,
  SellerPage,
  SellerProfileCardComponent
} from "./chunk-O3N4KFWX.js";
import {
  SellerFacade
} from "./chunk-ZM7LEXHZ.js";
import "./chunk-6CJCVRJS.js";
import {
  AdListSkeletonLoadingModule
} from "./chunk-OQEO7NJG.js";
import {
  EmptyAdListModule
} from "./chunk-ZCYKWHRI.js";
import "./chunk-L6WIR66L.js";
import "./chunk-MNKMPSFA.js";
import "./chunk-AH5EFBPI.js";
import {
  AdItemV2Module
} from "./chunk-GGIORZLS.js";
import "./chunk-GCFYHD3C.js";
import "./chunk-DYDGEZIA.js";
import "./chunk-235SP5Y4.js";
import "./chunk-744QYGBS.js";
import "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import "./chunk-5JBKTQLQ.js";
import "./chunk-VGENAY26.js";
import "./chunk-ZM4NPOC4.js";
import {
  CdkDropdownModule,
  FiltersSortModule
} from "./chunk-K6L3DPCH.js";
import "./chunk-5VDMSC62.js";
import {
  MatBottomSheetModule
} from "./chunk-2KWNZOXB.js";
import {
  FindqoAdModule
} from "./chunk-UVI4O6OH.js";
import "./chunk-OZKRZICA.js";
import "./chunk-NHXE4UA3.js";
import "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import "./chunk-DYYJHWVN.js";
import "./chunk-5DPLTTSV.js";
import "./chunk-2RKTIM73.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import "./chunk-C3BHYCVX.js";
import "./chunk-5CLAA2MT.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  ButtonModule,
  MatDividerModule,
  RouterModule,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/seller/component/seller-ad-list/seller-ad-list.module.ts
var SellerAdListModule = class _SellerAdListModule {
  static {
    this.\u0275fac = function SellerAdListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerAdListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SellerAdListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [SellerFacade], imports: [
      SharedModule,
      AdItemV2Module,
      EmptyAdListModule,
      MatProgressSpinnerModule,
      AdListSkeletonLoadingModule,
      FiltersSortModule,
      CdkDropdownModule,
      ButtonModule,
      MatBottomSheetModule,
      FindqoAdModule,
      MatDividerModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerAdListModule, [{
    type: NgModule,
    args: [{
      declarations: [SellerAdListComponent],
      imports: [
        SharedModule,
        AdItemV2Module,
        EmptyAdListModule,
        MatProgressSpinnerModule,
        AdListSkeletonLoadingModule,
        FiltersSortModule,
        CdkDropdownModule,
        ButtonModule,
        MatBottomSheetModule,
        FindqoAdModule,
        MatDividerModule
      ],
      exports: [SellerAdListComponent],
      providers: [SellerFacade]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/seller/pages/seller-page-routing.module.ts
var routes = [
  {
    path: ":agentId/:agentName",
    component: SellerPage,
    canActivate: [PublicGuard]
  },
  {
    path: ":sellerType/:sellerId/:sellerName",
    component: SellerPage,
    canActivate: [PublicGuard]
  }
];
var SellerPageRoutingModule = class _SellerPageRoutingModule {
  static {
    this.\u0275fac = function SellerPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SellerPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/seller/pages/seller-page.module.ts
var SellerPageModule = class _SellerPageModule {
  static {
    this.\u0275fac = function SellerPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SellerPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, SellerPageRoutingModule, SellerAdListModule, FindqoAdModule, SellerProfileCardComponent, SellerAboutComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerPageModule, [{
    type: NgModule,
    args: [{
      declarations: [SellerPage],
      imports: [SharedModule, SellerPageRoutingModule, SellerAdListModule, FindqoAdModule, SellerProfileCardComponent, SellerAboutComponent]
    }]
  }], null, null);
})();
export {
  SellerPageModule
};
//# sourceMappingURL=chunk-763SOFUG.js.map
