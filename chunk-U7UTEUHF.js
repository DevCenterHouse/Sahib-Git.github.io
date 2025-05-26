import {
  PropertyWorthState
} from "./chunk-OL2TDOFF.js";
import {
  APP_ROUTE,
  Router
} from "./chunk-DMGY2MF4.js";
import {
  Component,
  Input,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/place-free-ad-banner/place-free-ad-banner.component.ts
var PlaceFreeAdBannerComponent = class _PlaceFreeAdBannerComponent {
  constructor(router, propertyWorthState) {
    this.router = router;
    this.propertyWorthState = propertyWorthState;
  }
  onPlaceAd() {
    let aisle = "sell-residential";
    if (this.valuationData?.aisle) {
      aisle = this.valuationData.aisle;
    }
    let section = "properties-for-sale";
    if (aisle === "rent-residential" || aisle === "share-residential") {
      section = "properties-for-rent";
    }
    this.propertyWorthState.setValuationInfo(__spreadProps(__spreadValues({}, this.valuationData), { section, aisle }));
    this.router.navigate([APP_ROUTE.placeAdCategory, section, aisle]);
  }
  static {
    this.\u0275fac = function PlaceFreeAdBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceFreeAdBannerComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PropertyWorthState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceFreeAdBannerComponent, selectors: [["findqo-place-free-ad-banner"]], inputs: { valuationData: "valuationData" }, decls: 25, vars: 0, consts: [[1, "mt-1", "desktop-banner", "py-3", "d-none", "d-lg-flex"], [1, "text-body-medium"], [1, "text-caption-regular"], [1, "text-caption-medium", "fg-prim-2"], ["mat-button", "", 1, "p-2", "ad-button", "bg-prim-2", "fg-basic-1", "text-body-medium", 3, "click"], [1, "mt-1", "phone-banner", "text-center", "py-3", "d-flex", "d-lg-none"], [1, "row"], [1, "col-12", "gap-1"], [1, "text-caption-medium", "w-309px"], [1, "text-caption-2-regular"], [1, "text-caption-2-medium", "fg-prim-2"], [1, "col-7"], ["mat-button", "", 1, "p-2", "col-3", "ad-button", "mt-3", "bg-prim-2", "fg-basic-1", "text-caption-2-medium", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "col-2"]], template: function PlaceFreeAdBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "p", 1);
        \u0275\u0275text(3, "Do you want to list your property for more visibility?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, " You've earned yourself ");
        \u0275\u0275elementStart(6, "span", 3);
        \u0275\u0275text(7, "2 Free Ad Listings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " on FindQo.ie! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function PlaceFreeAdBannerComponent_Template_button_click_9_listener() {
          return ctx.onPlaceAd();
        });
        \u0275\u0275text(10, "Place FREE Ad");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "p", 8);
        \u0275\u0275text(15, "Do you want to list your property for more visibility?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 9);
        \u0275\u0275text(17, " You've earned yourself ");
        \u0275\u0275elementStart(18, "span", 10);
        \u0275\u0275text(19, "2 Free Ad Listings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " on FindQo.ie! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(21, "div", 11);
        \u0275\u0275elementStart(22, "button", 12);
        \u0275\u0275listener("click", function PlaceFreeAdBannerComponent_Template_button_click_22_listener() {
          return ctx.onPlaceAd();
        });
        \u0275\u0275text(23, " Place FREE Ad ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "div", 13);
        \u0275\u0275elementEnd()();
      }
    }, styles: ['\n\n.desktop-banner[_ngcontent-%COMP%] {\n  background-image: url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/place-ad-banner.webp");\n  background-size: cover;\n  background-position: center;\n  padding-left: 48px;\n  padding-right: 48px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  justify-self: center;\n}\n.ad-button[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  align-self: center;\n  height: 34px;\n  width: 150px;\n  border: 0;\n}\n@media (max-width: 991.98px) {\n  .ad-button[_ngcontent-%COMP%] {\n    height: 28px;\n    width: 101px;\n  }\n}\n.phone-banner[_ngcontent-%COMP%] {\n  background-image: url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/phone-place-ad-banner.webp");\n  background-size: cover;\n  background-position: center;\n  padding-left: 48px;\n  padding-right: 48px;\n  border-radius: 4px;\n  justify-content: center;\n}\n@media (max-width: 440px) {\n  .w-309px[_ngcontent-%COMP%] {\n    width: 309px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-free-ad-banner.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceFreeAdBannerComponent, [{
    type: Component,
    args: [{ selector: "findqo-place-free-ad-banner", standalone: true, template: `<div class="mt-1 desktop-banner py-3 d-none d-lg-flex">
	<div>
		<p class="text-body-medium">Do you want to list your property for more visibility?</p>
		<p class="text-caption-regular">
			You've earned yourself
			<span class="text-caption-medium fg-prim-2">2 Free Ad Listings</span>
			on FindQo.ie!
		</p>
	</div>
	<button (click)="onPlaceAd()" mat-button class="p-2 ad-button bg-prim-2 fg-basic-1 text-body-medium">Place FREE Ad</button>
</div>
<div class="mt-1 phone-banner text-center py-3 d-flex d-lg-none">
	<div class="row">
		<div class="col-12 gap-1">
			<p class="text-caption-medium w-309px">Do you want to list your property for more visibility?</p>
			<p class="text-caption-2-regular">
				You've earned yourself
				<span class="text-caption-2-medium fg-prim-2">2 Free Ad Listings</span>
				on FindQo.ie!
			</p>
		</div>
		<div class="col-7"></div>
		<button
			(click)="onPlaceAd()"
			mat-button
			class="p-2 col-3 ad-button mt-3 bg-prim-2 fg-basic-1 text-caption-2-medium d-flex justify-content-center align-items-center"
		>
			Place FREE Ad
		</button>
		<div class="col-2"></div>
	</div>
</div>
`, styles: ['/* apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/place-free-ad-banner/place-free-ad-banner.component.scss */\n.desktop-banner {\n  background-image: url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/place-ad-banner.webp");\n  background-size: cover;\n  background-position: center;\n  padding-left: 48px;\n  padding-right: 48px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  justify-self: center;\n}\n.ad-button {\n  border-radius: 100px;\n  align-self: center;\n  height: 34px;\n  width: 150px;\n  border: 0;\n}\n@media (max-width: 991.98px) {\n  .ad-button {\n    height: 28px;\n    width: 101px;\n  }\n}\n.phone-banner {\n  background-image: url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/phone-place-ad-banner.webp");\n  background-size: cover;\n  background-position: center;\n  padding-left: 48px;\n  padding-right: 48px;\n  border-radius: 4px;\n  justify-content: center;\n}\n@media (max-width: 440px) {\n  .w-309px {\n    width: 309px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-free-ad-banner.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: PropertyWorthState }], { valuationData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceFreeAdBannerComponent, { className: "PlaceFreeAdBannerComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/place-free-ad-banner/place-free-ad-banner.component.ts", lineNumber: 12 });
})();

export {
  PlaceFreeAdBannerComponent
};
//# sourceMappingURL=chunk-U7UTEUHF.js.map
