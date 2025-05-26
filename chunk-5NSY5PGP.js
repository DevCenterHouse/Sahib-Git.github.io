import {
  BedroomIconComponent,
  PropertySizeIconComponent,
  ShowerIconComponent
} from "./chunk-UNCX2CTW.js";
import {
  AdDetailRoutePipe,
  AdImagePipe,
  AdImagePreloadDirective,
  AdPricePipe,
  CountyType,
  MatAnchor,
  RouterLink,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/other-ad-list/other-ad-list.component.ts
var _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
var _c1 = (a0) => ({ $implicit: a0 });
var _c2 = (a0) => ({ icon: "bedroom", label: a0 });
var _c3 = (a0) => ({ icon: "shower", label: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function OtherAdListComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "mat-icon", 10);
    \u0275\u0275text(2, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction3(4, _c0, ctx_r0.section, ctx_r0.countyType.DEFAULT, ctx_r0.aisle));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "n44"));
  }
}
function OtherAdListComponent_Conditional_0_For_10_ng_template_7_Template(rf, ctx) {
}
function OtherAdListComponent_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275pipe(1, "adDetailRoute");
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275pipe(3, "adImagePipe");
    \u0275\u0275elementStart(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, OtherAdListComponent_Conditional_0_For_10_ng_template_7_Template, 0, 0, "ng-template", 15);
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "adPrice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    let tmp_17_0;
    const ad_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    const propertiesAdFeatureTemplate_r3 = \u0275\u0275reference(4);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 8, ad_r2))("title", ctx_r0.aisle === "share-residential" || (ad_r2 == null ? null : ad_r2.aisle == null ? null : ad_r2.aisle.reference) === "share-residential" ? (tmp_14_0 = ad_r2 == null ? null : ad_r2.ad_address) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : ad_r2 == null ? null : ad_r2.location.address : ad_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 10, ad_r2 == null ? null : ad_r2.images == null ? null : ad_r2.images[0] == null ? null : ad_r2.images[0].url))("alt", ad_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.aisle === "share-residential" || (ad_r2 == null ? null : ad_r2.aisle == null ? null : ad_r2.aisle.reference) === "share-residential" ? (tmp_17_0 = ad_r2 == null ? null : ad_r2.ad_address) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : ad_r2 == null ? null : ad_r2.location.address : ad_r2.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", propertiesAdFeatureTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c1, ad_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 12, ad_r2 == null ? null : ad_r2.price, ad_r2 == null ? null : ad_r2.rentalPeriod), " ");
  }
}
function OtherAdListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h4", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275template(7, OtherAdListComponent_Conditional_0_Conditional_7_Template, 6, 8, "a", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275repeaterCreate(9, OtherAdListComponent_Conditional_0_For_10_Template, 11, 17, "a", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.subTitle);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.adList.length >= 5 ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.adList);
  }
}
function OtherAdListComponent_ng_template_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-bedroom-icon");
  }
}
function OtherAdListComponent_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-shower-icon");
  }
}
function OtherAdListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon", 18);
    \u0275\u0275template(2, OtherAdListComponent_ng_template_1_Conditional_2_Template, 1, 0, "findqo-bedroom-icon")(3, OtherAdListComponent_ng_template_1_Conditional_3_Template, 1, 0, "findqo-shower-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ad_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ad_r4.icon === "bedroom" || ad_r4.icon === "shower" ? "" : ad_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional((ad_r4 == null ? null : ad_r4.icon) === "bedroom" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ad_r4 == null ? null : ad_r4.icon) === "shower" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ad_r4.label);
  }
}
function OtherAdListComponent_ng_template_3_div_1_ng_template_1_Template(rf, ctx) {
}
function OtherAdListComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, OtherAdListComponent_ng_template_3_div_1_ng_template_1_Template, 0, 0, "ng-template", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const adFeatureBadgeTemplate_r6 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c1, \u0275\u0275pureFunction1(2, _c2, ad_r5.bedroomCount.trim().slice(0, 1))));
  }
}
function OtherAdListComponent_ng_template_3_div_2_ng_template_1_Template(rf, ctx) {
}
function OtherAdListComponent_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, OtherAdListComponent_ng_template_3_div_2_ng_template_1_Template, 0, 0, "ng-template", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const adFeatureBadgeTemplate_r6 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c1, \u0275\u0275pureFunction1(2, _c3, ad_r5.bathroomCount)));
  }
}
function OtherAdListComponent_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 17)(2, "mat-icon");
    \u0275\u0275element(3, "findqo-property-size-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ad_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ad_r5.propertySize.value, " ", ad_r5.propertySize.parameter, "");
  }
}
function OtherAdListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, OtherAdListComponent_ng_template_3_div_1_Template, 2, 6, "div", 21)(2, OtherAdListComponent_ng_template_3_div_2_Template, 2, 6, "div", 21)(3, OtherAdListComponent_ng_template_3_div_3_Template, 6, 2, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ad_r5 == null ? null : ad_r5.bedroomCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ad_r5 == null ? null : ad_r5.bathroomCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ad_r5 == null ? null : ad_r5.propertySize);
  }
}
var OtherAdListComponent = class _OtherAdListComponent {
  constructor() {
    this.adList = [];
    this.countyType = CountyType;
  }
  static {
    this.\u0275fac = function OtherAdListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OtherAdListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtherAdListComponent, selectors: [["findqo-other-ad-list"]], inputs: { adList: "adList", section: "section", aisle: "aisle", title: "title", subTitle: "subTitle" }, standalone: false, decls: 5, vars: 1, consts: [["adFeatureBadgeTemplate", ""], ["propertiesAdFeatureTemplate", ""], [1, "row", "justify-content-between", "align-items-center"], [1, "col-12", "col-md-8"], [1, "heading-4-medium", "text-nowrap", "text-truncate"], [1, "fs-12px", "fw-400", "fg-genral-5", "mt-2"], [1, "col-12", "col-md-4", "text-end"], ["mat-button", "", "disableRipple", "", 1, "p-0", "float-end", "float-sm-none", 3, "routerLink"], [1, "row", "gap-3", "mt-2", "flex-nowrap", "hide-scrollbar"], ["data-bs-toggle", "tooltip", 1, "col-auto", "ad", 3, "routerLink", "title"], ["iconPositionEnd", "", 1, "fg-prim-2"], [1, "text-body-regular", "fg-prim-2"], ["findqoAdImage", "", "loading", "lazy", "width", "187", "height", "150", 1, "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "d-flex", "flex-column", "mt-2"], [1, "text-body-regular", "fg-general-5", "text-truncate"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-body-regular", "fg-general-4", "text-truncate"], [1, "d-flex", "align-items-center", "gap-1"], [3, "svgIcon"], [1, "text-caption-2-regular", "fg-general-4"], [1, "row", "gap-2", "mt-1", "mb-2"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"]], template: function OtherAdListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OtherAdListComponent_Conditional_0_Template, 11, 3)(1, OtherAdListComponent_ng_template_1_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, OtherAdListComponent_ng_template_3_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.adList == null ? null : ctx.adList.length) ? 0 : -1);
      }
    }, dependencies: [NgIf, NgTemplateOutlet, MatAnchor, MatIcon, RouterLink, NgOptimizedImage, AdImagePreloadDirective, PropertySizeIconComponent, BedroomIconComponent, ShowerIconComponent, AdImagePipe, TranslationsPipe, AdDetailRoutePipe, AdPricePipe], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  object-fit: cover;\n}\na.ad[_ngcontent-%COMP%] {\n  max-width: 187px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/other-ad-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtherAdListComponent, [{
    type: Component,
    args: [{ selector: "findqo-other-ad-list", standalone: false, template: `@if (adList?.length) {
	<div class="row justify-content-between align-items-center">
		<div class="col-12 col-md-8">
			<h4 class="heading-4-medium text-nowrap text-truncate">{{ title }}</h4>

			<p class="fs-12px fw-400 fg-genral-5 mt-2">{{ subTitle }}</p>
		</div>

		<div class="col-12 col-md-4 text-end">
			@if (adList.length >= 5) {
				<a mat-button disableRipple class="p-0 float-end float-sm-none" [routerLink]="['/', section, countyType.DEFAULT, aisle]">
					<mat-icon iconPositionEnd class="fg-prim-2">arrow_forward</mat-icon>
					<span class="text-body-regular fg-prim-2">{{ 'n44' | translations }}</span>
				</a>
			}
		</div>
	</div>

	<div class="row gap-3 mt-2 flex-nowrap hide-scrollbar">
		<!-- TODO: Change the year in route after clarifying what should be the final value. -->
		@for (ad of adList; track ad.id) {
			<a
				class="col-auto ad"
				[routerLink]="ad | adDetailRoute"
				data-bs-toggle="tooltip"
				[title]="aisle === 'share-residential' || ad?.aisle?.reference === 'share-residential' ? ad?.ad_address ?? ad?.location.address : ad.title"
			>
				<img
					findqoAdImage
					loading="lazy"
					class="image-skeleton-loader"
					width="187"
					height="150"
					[ngSrc]="ad?.images?.[0]?.url | adImagePipe"
					[alt]="ad.title"
				/>

				<div class="d-flex flex-column mt-2">
					<!-- Ad title -->
					<span class="text-body-regular fg-general-5 text-truncate">
						{{ aisle === 'share-residential' || ad?.aisle?.reference === 'share-residential' ? ad?.ad_address ?? ad?.location.address : ad.title }}
					</span>

					<!-- Ad feature -->
					<ng-template [ngTemplateOutlet]="propertiesAdFeatureTemplate" [ngTemplateOutletContext]="{ $implicit: ad }"></ng-template>

					<!-- Price -->
					<span class="text-body-regular fg-general-4 text-truncate">
						{{ ad?.price | adPrice: ad?.rentalPeriod }}
					</span>
				</div>
			</a>
		}
	</div>
}

<!-- Ad feature badge template -->
<ng-template #adFeatureBadgeTemplate let-ad>
	<div class="d-flex align-items-center gap-1">
		<mat-icon [svgIcon]="ad.icon === 'bedroom' || ad.icon === 'shower' ? '' : ad.icon">
			@if (ad?.icon === 'bedroom') {
				<findqo-bedroom-icon></findqo-bedroom-icon>
			}
			@if (ad?.icon === 'shower') {
				<findqo-shower-icon></findqo-shower-icon>
			}
		</mat-icon>
		<span class="text-caption-2-regular fg-general-4">{{ ad.label }}</span>
	</div>
</ng-template>

<!-- Properties ad feature template -->
<ng-template #propertiesAdFeatureTemplate let-ad>
	<div class="row gap-2 mt-1 mb-2">
		<!-- Bedroom -->
		<div *ngIf="+ad?.bedroomCount > 0" class="col-auto">
			<ng-template
				[ngTemplateOutlet]="adFeatureBadgeTemplate"
				[ngTemplateOutletContext]="{ $implicit: { icon: 'bedroom', label: ad.bedroomCount.trim().slice(0, 1) } }"
			></ng-template>
		</div>

		<!-- Bathroom -->
		<div *ngIf="+ad?.bathroomCount > 0" class="col-auto">
			<ng-template
				[ngTemplateOutlet]="adFeatureBadgeTemplate"
				[ngTemplateOutletContext]="{ $implicit: { icon: 'shower', label: ad.bathroomCount } }"
			></ng-template>
		</div>

		<!-- Property size -->
		<div *ngIf="ad?.propertySize" class="col-auto">
			<div class="d-flex align-items-center gap-1">
				<mat-icon>
					<findqo-property-size-icon></findqo-property-size-icon>
				</mat-icon>
				<span class="text-caption-2-regular fg-general-4">{{ ad.propertySize.value }} {{ ad.propertySize.parameter }}</span>
			</div>
		</div>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/other-ad-list/other-ad-list.component.scss */\nimg {\n  border-radius: 4px;\n  object-fit: cover;\n}\na.ad {\n  max-width: 187px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/other-ad-list.component.css.map */\n"] }]
  }], null, { adList: [{
    type: Input
  }], section: [{
    type: Input
  }], aisle: [{
    type: Input
  }], title: [{
    type: Input
  }], subTitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtherAdListComponent, { className: "OtherAdListComponent", filePath: "apps/findqo-ireland/src/app/shared/components/other-ad-list/other-ad-list.component.ts", lineNumber: 11 });
})();

export {
  OtherAdListComponent
};
//# sourceMappingURL=chunk-5NSY5PGP.js.map
