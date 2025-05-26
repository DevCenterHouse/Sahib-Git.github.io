import {
  CdkDropdownComponent,
  FiltersSortComponent
} from "./chunk-5VDMSC62.js";
import {
  MatBottomSheetModule
} from "./chunk-2KWNZOXB.js";
import {
  ButtonModule,
  PortalModule,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/filters/components/filters-sort/filters-sort.module.ts
var FiltersSortModule = class _FiltersSortModule {
  static {
    this.\u0275fac = function FiltersSortModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersSortModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FiltersSortModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatBottomSheetModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersSortModule, [{
    type: NgModule,
    args: [{
      declarations: [FiltersSortComponent],
      imports: [SharedModule, ButtonModule, MatBottomSheetModule],
      exports: [FiltersSortComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/shared/components/cdk-dropdown/cdk-dropdown.module.ts
var CdkDropdownModule = class _CdkDropdownModule {
  static {
    this.\u0275fac = function CdkDropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDropdownModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CdkDropdownModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, PortalModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropdownModule, [{
    type: NgModule,
    args: [{
      declarations: [CdkDropdownComponent],
      imports: [SharedModule, PortalModule],
      exports: [CdkDropdownComponent]
    }]
  }], null, null);
})();

export {
  FiltersSortModule,
  CdkDropdownModule
};
//# sourceMappingURL=chunk-K6L3DPCH.js.map
