import {
  APP_ROUTE,
  RouterLink
} from "./chunk-DMGY2MF4.js";
import {
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/findqo-ad/findqo-ad.component.ts
var FindqoAdComponent = class _FindqoAdComponent {
  constructor() {
    this.appRoute = APP_ROUTE;
  }
  static {
    this.\u0275fac = function FindqoAdComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindqoAdComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindqoAdComponent, selectors: [["findqo-findqo-ad"]], standalone: false, decls: 3, vars: 3, consts: [[1, "text-center", 3, "routerLink"], ["width", "300", "height", "600", "priority", "", "alt", "findqo ad", 1, "d-none", "d-lg-block", 3, "ngSrc"], ["width", "343", "height", "300", "alt", "findqo ad", 1, "d-lg-none", 3, "ngSrc"]], template: function FindqoAdComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1)(2, "img", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", "/" + ctx.appRoute.placeAd);
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", "assets/images/findqo-ad/ad-banner.webp");
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", "assets/images/findqo-ad/ad-banner-mobile.webp");
      }
    }, dependencies: [NgOptimizedImage, RouterLink], styles: ["\n\ndiv[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/findqo-ad.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindqoAdComponent, [{
    type: Component,
    args: [{ selector: "findqo-findqo-ad", standalone: false, template: `<div class="text-center" [routerLink]="'/' + appRoute.placeAd">
	<img [ngSrc]="'assets/images/findqo-ad/ad-banner.webp'" width="300" height="600" priority alt="findqo ad" class="d-none d-lg-block" />

	<img [ngSrc]="'assets/images/findqo-ad/ad-banner-mobile.webp'" width="343" height="300" alt="findqo ad" class="d-lg-none" />
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/findqo-ad/findqo-ad.component.scss */\ndiv {\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/findqo-ad.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindqoAdComponent, { className: "FindqoAdComponent", filePath: "apps/findqo-ireland/src/app/shared/findqo-ad/findqo-ad.component.ts", lineNumber: 11 });
})();

export {
  FindqoAdComponent
};
//# sourceMappingURL=chunk-OZKRZICA.js.map
