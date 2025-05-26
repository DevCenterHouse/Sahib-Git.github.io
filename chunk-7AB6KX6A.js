import {
  AisleFormatPipe,
  PlaceAdFacade,
  RouteDataType,
  RouterLink,
  RouterModule,
  SectionType,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf
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
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-category/place-ad-category.page.ts
var _c0 = (a0) => ({ sectionList: a0 });
function PlaceAdCategoryPage_div_0_a_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275pipe(3, "aisleFormatPipe");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aisle_r1 = ctx.$implicit;
    const j_r2 = ctx.index;
    const i_r3 = \u0275\u0275nextContext().index;
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 3, \u0275\u0275pipeBind1(2, 1, aisle_r1 == null ? null : aisle_r1.translationKey), j_r2, vm_r4.sectionList[i_r3] == null ? null : vm_r4.sectionList[i_r3].aisles.length), " ");
  }
}
function PlaceAdCategoryPage_div_0_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 6)(2, "div", 7)(3, "mat-icon", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 11);
    \u0275\u0275template(10, PlaceAdCategoryPage_div_0_a_7_span_10_Template, 4, 7, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7)(12, "mat-icon", 13);
    \u0275\u0275text(13, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", section_r5.reference);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (section_r5 == null ? null : section_r5.reference) === ctx_r5.sectionTypes.PROPERTIES_FOR_RENT ? "co_present" : "local_offer", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, section_r5 == null ? null : section_r5.translationKey));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vm_r4.sectionList[i_r3] == null ? null : vm_r4.sectionList[i_r3].aisles);
  }
}
function PlaceAdCategoryPage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PlaceAdCategoryPage_div_0_a_7_Template, 14, 6, "a", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r4 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "n275"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "n2972"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", vm_r4 == null ? null : vm_r4.sectionList);
  }
}
var PlaceAdCategoryPage = class _PlaceAdCategoryPage {
  constructor(placeAdFacade) {
    this.placeAdFacade = placeAdFacade;
    this.sectionTypes = SectionType;
    this.sectionList$ = placeAdFacade.getSectionList$();
  }
  static {
    this.\u0275fac = function PlaceAdCategoryPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdCategoryPage)(\u0275\u0275directiveInject(PlaceAdFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAdCategoryPage, selectors: [["findqo-place-ad-category"]], standalone: false, decls: 2, vars: 5, consts: [["class", "container mt-4", 4, "ngIf"], [1, "container", "mt-4"], [1, "heading-3", "mb-2", "fg-genral-5"], [1, "text-caption-regular", "mb-4", "fg-general-4"], ["class", "d-block my-3 stand-link cursor-pointer", "queryParamsHandling", "merge", 3, "routerLink", 4, "ngFor", "ngForOf"], ["queryParamsHandling", "merge", 1, "d-block", "my-3", "stand-link", "cursor-pointer", 3, "routerLink"], [1, "row", "justify-content-between", "align-items-center", "h-100", "px-3", "gap-3"], [1, "col-auto"], [1, "icon-logo", "align-middle", "place-ad-two-tone", "material-icons-two-tone"], [1, "col", "pe-2"], [1, "text-body-regular", "fg-general-5"], [1, "text-caption-regular", "fg-general-3"], [4, "ngFor", "ngForOf"], [1, "fg-prim-2"]], template: function PlaceAdCategoryPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlaceAdCategoryPage_div_0_Template, 8, 7, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.sectionList$)));
      }
    }, dependencies: [NgForOf, NgIf, MatIcon, RouterLink, AsyncPipe, TranslationsPipe, AisleFormatPipe], styles: ["\n\n.icon-logo[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  display: inline-block !important;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 343px;\n}\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n.stand-link[_ngcontent-%COMP%] {\n  height: 90px;\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.stand-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-category.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdCategoryPage, [{
    type: Component,
    args: [{ selector: "findqo-place-ad-category", standalone: false, template: `<div class="container mt-4" *ngIf="{sectionList: sectionList$ |async} as vm">
	<h3 class="heading-3 mb-2 fg-genral-5">{{ 'n275' | translations }}</h3>

	<p class="text-caption-regular mb-4 fg-general-4">{{ 'n2972' | translations }}</p>

	<a
		class="d-block my-3 stand-link cursor-pointer"
		[routerLink]="section.reference"
		queryParamsHandling="merge"
		*ngFor="let section of vm?.sectionList; let i=index;"
	>
		<div class="row justify-content-between align-items-center h-100 px-3 gap-3">
			<div class="col-auto">
				<mat-icon class="icon-logo align-middle place-ad-two-tone material-icons-two-tone">
					{{ section?.reference === sectionTypes.PROPERTIES_FOR_RENT ? 'co_present':'local_offer' }}
				</mat-icon>
			</div>

			<div class="col pe-2">
				<p class="text-body-regular fg-general-5">{{ section?.translationKey | translations }}</p>

				<p class="text-caption-regular fg-general-3">
					<span *ngFor=" let aisle of vm.sectionList[i]?.aisles; let j=index;let last=last;">
						{{aisle?.translationKey | translations | aisleFormatPipe : j:vm.sectionList[i]?.aisles.length }}
					</span>
				</p>
			</div>

			<div class="col-auto">
				<mat-icon class="fg-prim-2">arrow_forward</mat-icon>
			</div>
		</div>
	</a>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-category/place-ad-category.page.scss */\n.icon-logo {\n  width: 25px;\n  height: 25px;\n  display: inline-block !important;\n}\n.container {\n  max-width: 343px;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 600px;\n  }\n}\n.stand-link {\n  height: 90px;\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.stand-link:hover {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-category.page.css.map */\n"] }]
  }], () => [{ type: PlaceAdFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAdCategoryPage, { className: "PlaceAdCategoryPage", filePath: "apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-category/place-ad-category.page.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-category/place-ad-category-routing.module.ts
var routes = [
  {
    path: "",
    component: PlaceAdCategoryPage,
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_FOOTER_VISIBLE]: false
    }
  }
];
var PlaceAdCategoryRoutingModule = class _PlaceAdCategoryRoutingModule {
  static {
    this.\u0275fac = function PlaceAdCategoryRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdCategoryRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdCategoryRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdCategoryRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-category/place-ad-category.module.ts
var PlaceAdCategoryModule = class _PlaceAdCategoryModule {
  static {
    this.\u0275fac = function PlaceAdCategoryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdCategoryModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdCategoryModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, PlaceAdCategoryRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdCategoryModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAdCategoryPage],
      imports: [SharedModule, PlaceAdCategoryRoutingModule],
      exports: [PlaceAdCategoryPage]
    }]
  }], null, null);
})();
export {
  PlaceAdCategoryModule
};
//# sourceMappingURL=chunk-7AB6KX6A.js.map
