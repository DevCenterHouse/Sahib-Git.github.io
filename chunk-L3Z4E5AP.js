import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-UWPIFTDN.js";
import {
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgForOf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/filters/components/filters-form-skeleton-loader/filters-form-skeleton-loader.component.ts
function FiltersFormSkeletonLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "ngx-skeleton-loader", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("theme", theme_r1);
  }
}
var FiltersFormSkeletonLoaderComponent = class _FiltersFormSkeletonLoaderComponent {
  constructor() {
    this.themeList = [{ border: "4", width: "100%", margin: "0", height: "40px" }];
  }
  static {
    this.\u0275fac = function FiltersFormSkeletonLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersFormSkeletonLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiltersFormSkeletonLoaderComponent, selectors: [["findqo-filters-form-skeleton-loader"]], standalone: false, decls: 1, vars: 1, consts: [["class", "py-0", 4, "ngFor", "ngForOf"], [1, "py-0"], [3, "theme"]], template: function FiltersFormSkeletonLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FiltersFormSkeletonLoaderComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.themeList);
      }
    }, dependencies: [NgForOf, NgxSkeletonLoaderComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersFormSkeletonLoaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-filters-form-skeleton-loader", standalone: false, template: '<div class="py-0" *ngFor="let theme of themeList">\n	<ngx-skeleton-loader [theme]="theme"></ngx-skeleton-loader>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiltersFormSkeletonLoaderComponent, { className: "FiltersFormSkeletonLoaderComponent", filePath: "apps/findqo-ireland/src/app/feature/general/filters/components/filters-form-skeleton-loader/filters-form-skeleton-loader.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/general/filters/components/filters-form-skeleton-loader/filters-form-skeleton-loader.module.ts
var FiltersFormSkeletonLoaderModule = class _FiltersFormSkeletonLoaderModule {
  static {
    this.\u0275fac = function FiltersFormSkeletonLoaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersFormSkeletonLoaderModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FiltersFormSkeletonLoaderModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, NgxSkeletonLoaderModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersFormSkeletonLoaderModule, [{
    type: NgModule,
    args: [{
      declarations: [FiltersFormSkeletonLoaderComponent],
      imports: [SharedModule, NgxSkeletonLoaderModule],
      exports: [FiltersFormSkeletonLoaderComponent]
    }]
  }], null, null);
})();

export {
  FiltersFormSkeletonLoaderComponent,
  FiltersFormSkeletonLoaderModule
};
//# sourceMappingURL=chunk-L3Z4E5AP.js.map
