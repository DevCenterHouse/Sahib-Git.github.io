import {
  FiltersService
} from "./chunk-C3BHYCVX.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  ButtonComponent,
  ButtonType,
  FeatureIfDirective,
  FeatureVersion,
  MatDivider,
  Router,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  NgClass,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/empty-ad-list/empty-ad-list.component.ts
var _c0 = (a0) => [a0];
var _c1 = (a0) => ({ "px-sm-0": a0 });
function EmptyAdListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275element(3, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "n181"));
  }
}
function EmptyAdListComponent_div_1_p_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("in ", (tmp_3_0 = ctx_r1.location) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "Ireland", ". ", \u0275\u0275pipeBind1(2, 2, "n3961"), "");
  }
}
function EmptyAdListComponent_div_1_p_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3957"));
  }
}
function EmptyAdListComponent_div_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275template(3, EmptyAdListComponent_div_1_p_3_span_3_Template, 3, 4, "span", 15)(4, EmptyAdListComponent_div_1_p_3_span_4_Template, 3, 3, "span", 15);
    \u0275\u0275elementStart(5, "a", 16);
    \u0275\u0275listener("click", function EmptyAdListComponent_div_1_p_3_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPlaceAd());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 6, "n3949"), " ", (ctx_r1.section == null ? null : ctx_r1.section.includes("rent")) ? "rent" : "sale", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hasMultipleLocation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMultipleLocation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "n3950"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "n3951"), " ");
  }
}
function EmptyAdListComponent_div_1_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3589"));
  }
}
function EmptyAdListComponent_div_1_findqo_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 18);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function EmptyAdListComponent_div_1_findqo_button_5_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReset());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "n3848"))("btnType", ctx_r1.buttonType.BASIC);
  }
}
function EmptyAdListComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-divider", 20);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-divider", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "n3130"));
  }
}
function EmptyAdListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275template(3, EmptyAdListComponent_div_1_p_3_Template, 10, 12, "p", 10)(4, EmptyAdListComponent_div_1_h3_4_Template, 3, 3, "h3", 11)(5, EmptyAdListComponent_div_1_findqo_button_5_Template, 2, 4, "findqo-button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EmptyAdListComponent_div_1_div_6_Template, 6, 3, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c1, ctx_r1.pageName === "seller"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "/assets/images/advertisement-images/result-message-1.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pageName !== "seller");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pageName === "seller");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pageName !== "seller");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pageName !== "seller" && (ctx_r1.ads == null ? null : ctx_r1.ads.length));
  }
}
var EmptyAdListComponent = class _EmptyAdListComponent {
  constructor(filtersService, router, route) {
    this.filtersService = filtersService;
    this.router = router;
    this.route = route;
    this.ads = [];
    this.featureVersion = FeatureVersion;
    this.buttonType = ButtonType;
    this.hasMultipleLocation = false;
  }
  onPlaceAd() {
    this.router.navigate([APP_ROUTE.placeAd]);
  }
  getTranslationKey() {
    return this.pageName === "seller" ? "n3202" : "n3849";
  }
  onReset() {
    this.filtersService.clearAllFilterControl();
  }
  ngOnInit() {
    const location = this.route.snapshot.queryParamMap.get("location");
    if (location)
      this.hasMultipleLocation = true;
    this.location = this.location?.split(",")[0];
    const locationSplit = this.location?.split("-");
    const formattedLocation = locationSplit?.map((part) => part.charAt(0).toUpperCase() + part.slice(1));
    this.location = formattedLocation?.join(" ");
    this.noAdsMessage = this.getTranslationKey();
  }
  static {
    this.\u0275fac = function EmptyAdListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmptyAdListComponent)(\u0275\u0275directiveInject(FiltersService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyAdListComponent, selectors: [["findqo-empty-ad-list"]], inputs: { pageName: "pageName", location: "location", section: "section", ads: "ads" }, standalone: false, decls: 2, vars: 6, consts: [["class", "container px-3 px-sm-0", 4, "findqoFeatureIf"], ["class", "container container-padding", 3, "ngClass", 4, "findqoFeatureIf"], [1, "container", "px-3", "px-sm-0"], [1, "no-ads", "px-1", "bg-info-1"], [1, "search-container", "mx-auto", "bg-info-2", "position-relative", "mb-3"], ["src", "assets/icons/search.svg", "alt", "No ads image", 1, "centered", "position-absolute"], [1, "fs-12px", "fs-sm-14px", "lh-20px", "lh-sm-18px", "fw-400", "fg-info-3", "text-center"], [1, "container", "container-padding", 3, "ngClass"], [1, "p-3", "no-ads-v2", "text-center"], ["alt", "Try different search", 3, "src"], ["class", "text-body-regular fg-general-5 mt-2", 4, "ngIf"], ["class", "heading-3 text-center mt-2", 4, "ngIf"], [3, "label", "btnType", "clicked", 4, "ngIf"], ["class", "d-flex align-items-center my-4", 4, "ngIf"], [1, "text-body-regular", "fg-general-5", "mt-2"], [4, "ngIf"], [1, "fg-prim-2", "cursor-pointer", "ms-1", 3, "click"], [1, "heading-3", "text-center", "mt-2"], [3, "clicked", "label", "btnType"], [1, "d-flex", "align-items-center", "my-4"], [1, "divider"], [1, "fg-general-4", "mx-3", "text-body-regular"]], template: function EmptyAdListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EmptyAdListComponent_div_0_Template, 7, 3, "div", 0)(1, EmptyAdListComponent_div_1_Template, 7, 8, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(2, _c0, ctx.featureVersion.V1));
        \u0275\u0275advance();
        \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(4, _c0, ctx.featureVersion.V2));
      }
    }, dependencies: [NgClass, NgIf, FeatureIfDirective, ButtonComponent, MatDivider, TranslationsPipe], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.centered[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.no-ads[_ngcontent-%COMP%] {\n  height: 150px;\n  contain: content;\n  border-radius: 4px;\n}\n.no-ads-v2[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background: var(--neutral-1);\n}\n.divider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background: var(--neutral-2);\n}\n.container-padding[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n@media (min-width: 576px) {\n  .container-padding[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/empty-ad-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyAdListComponent, [{
    type: Component,
    args: [{ selector: "findqo-empty-ad-list", standalone: false, template: `<div class="container px-3 px-sm-0" *findqoFeatureIf="[featureVersion.V1]">
	<div class="no-ads px-1 bg-info-1">
		<div class="search-container mx-auto bg-info-2 position-relative mb-3">
			<img src="assets/icons/search.svg" class="centered position-absolute" alt="No ads image" />
		</div>

		<p class="fs-12px fs-sm-14px lh-20px lh-sm-18px fw-400 fg-info-3 text-center">{{ 'n181' | translations }}</p>
	</div>
</div>

<div class="container container-padding" *findqoFeatureIf="[featureVersion.V2]" [ngClass]="{ 'px-sm-0': pageName === 'seller' }">
	<div class="p-3 no-ads-v2 text-center">
		<img [src]="'/assets/images/advertisement-images/result-message-1.svg'" alt="Try different search" />

		<p *ngIf="this.pageName !== 'seller'" class="text-body-regular fg-general-5 mt-2">
			{{ 'n3949' | translations }} {{ section?.includes('rent') ? 'rent' : 'sale' }}

			<span *ngIf="!hasMultipleLocation">in {{ location ?? 'Ireland' }}. {{ 'n3961' | translations }}</span>

			<span *ngIf="hasMultipleLocation">{{ 'n3957' | translations }}</span>
			<a class="fg-prim-2 cursor-pointer ms-1" (click)="onPlaceAd()">{{ 'n3950' | translations }}</a>
			{{ 'n3951' | translations }}
		</p>

		<h3 class="heading-3 text-center mt-2" *ngIf="pageName === 'seller'">{{ 'n3589' | translations }}</h3>

		<findqo-button *ngIf="pageName !== 'seller'" [label]="'n3848' | translations" [btnType]="buttonType.BASIC" (clicked)="onReset()"></findqo-button>
	</div>

	<div class="d-flex align-items-center my-4" *ngIf="pageName !== 'seller' && ads?.length">
		<mat-divider class="divider"></mat-divider>
		<span class="fg-general-4 mx-3 text-body-regular">{{ 'n3130' | translations }}</span>
		<mat-divider class="divider"></mat-divider>
	</div>

	<!-- TODO: Similar ads should be shown here. -->
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/empty-ad-list/empty-ad-list.component.scss */\n.search-container {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-top: 33px;\n}\n.centered {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.no-ads {\n  height: 150px;\n  contain: content;\n  border-radius: 4px;\n}\n.no-ads-v2 {\n  border-radius: 4px;\n  background: var(--neutral-1);\n}\n.divider {\n  flex-grow: 1;\n  background: var(--neutral-2);\n}\n.container-padding {\n  padding: 0 16px;\n}\n@media (min-width: 576px) {\n  .container-padding {\n    padding: 0;\n  }\n}\n.text-uppercase {\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/empty-ad-list.component.css.map */\n"] }]
  }], () => [{ type: FiltersService }, { type: Router }, { type: ActivatedRoute }], { pageName: [{
    type: Input
  }], location: [{
    type: Input
  }], section: [{
    type: Input
  }], ads: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyAdListComponent, { className: "EmptyAdListComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/empty-ad-list/empty-ad-list.component.ts", lineNumber: 15 });
})();

export {
  EmptyAdListComponent
};
//# sourceMappingURL=chunk-MNKMPSFA.js.map
