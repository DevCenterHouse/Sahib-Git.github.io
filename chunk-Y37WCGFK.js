import {
  ResponseService
} from "./chunk-VSJWKDDR.js";
import {
  RouterModule,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/page-not-found/page-not-found.page.ts
var PageNotFoundPage = class _PageNotFoundPage {
  constructor(responseService) {
    this.responseService = responseService;
    this.responseService.setStatusCode(404);
  }
  static {
    this.\u0275fac = function PageNotFoundPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageNotFoundPage)(\u0275\u0275directiveInject(ResponseService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageNotFoundPage, selectors: [["findqo-page-not-found"]], standalone: false, features: [\u0275\u0275ProvidersFeature([ResponseService])], decls: 9, vars: 6, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "w-100", "h-100", "py-4", "py-md-0"], [1, "text-center"], ["src", "assets/images/page-not-found.svg", "alt", "page not found"], [1, "d-block", "fw-500", "fs-20px", "lh-24px", "fs-sm-24px", "lh-sm-28px", "mt-4", "mb-2", "fg-general-5"], [1, "fw-400", "fs-14px", "lh-18px", "fs-16px", "lh-22px", "fg-general-4"]], template: function PageNotFoundPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translations");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "n2309"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "n2308"));
      }
    }, dependencies: [TranslationsPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFoundPage, [{
    type: Component,
    args: [{ selector: "findqo-page-not-found", providers: [ResponseService], standalone: false, template: `<div class="d-flex justify-content-center align-items-center w-100 h-100 py-4 py-md-0">
	<div class="text-center">
		<img src="assets/images/page-not-found.svg" alt="page not found" />

		<span class="d-block fw-500 fs-20px lh-24px fs-sm-24px lh-sm-28px mt-4 mb-2 fg-general-5">{{ 'n2309' | translations}}</span>

		<p class="fw-400 fs-14px lh-18px fs-16px lh-22px fg-general-4">{{'n2308' | translations}}</p>
	</div>
</div>
` }]
  }], () => [{ type: ResponseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageNotFoundPage, { className: "PageNotFoundPage", filePath: "apps/findqo-ireland/src/app/feature/page-not-found/page-not-found.page.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/page-not-found/page-not-found-routing.module.ts
var routes = [
  {
    path: "",
    component: PageNotFoundPage
  }
];
var PageNotFoundPageRoutingModule = class _PageNotFoundPageRoutingModule {
  static {
    this.\u0275fac = function PageNotFoundPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageNotFoundPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PageNotFoundPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFoundPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/page-not-found/page-not-found.module.ts
var PageNotFoundPageModule = class _PageNotFoundPageModule {
  static {
    this.\u0275fac = function PageNotFoundPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageNotFoundPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PageNotFoundPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, PageNotFoundPageRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFoundPageModule, [{
    type: NgModule,
    args: [{
      declarations: [PageNotFoundPage],
      imports: [SharedModule, PageNotFoundPageRoutingModule]
    }]
  }], null, null);
})();
export {
  PageNotFoundPageModule
};
//# sourceMappingURL=chunk-Y37WCGFK.js.map
