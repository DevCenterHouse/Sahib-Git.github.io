import {
  MatchingTenantItemComponent,
  MatchingTenantItemModule
} from "./chunk-7GXKAIQJ.js";
import {
  MatchingTenantsFacade,
  MatchingTenantsState,
  SetTenantViewDateDialogComponent,
  TenantViewDateSummaryDialogComponent
} from "./chunk-NLB2NH2A.js";
import {
  MatButtonToggleModule
} from "./chunk-MC2MM2OW.js";
import {
  MatDatepickerModule
} from "./chunk-7NR4UKDC.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AuthService,
  CommonFacade,
  FormsModule,
  LinkifyPipe,
  MatButton,
  MatDialogModule,
  MatDivider,
  MatDividerModule,
  MenuKeys,
  MyProfileFacade,
  NavigationStart,
  PlaceAdFacade,
  ReactiveFormsModule,
  RouteDataType,
  Router,
  RouterLink,
  RouterModule,
  SectionType,
  SellerType,
  SharedModule,
  TranslationsPipe,
  UpdateAction,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Injectable,
  Input,
  NgModule,
  catchError,
  filter,
  finalize,
  setClassMetadata,
  takeUntil,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/place-ad/components/rent-properties-submitted/rent-properties-submitted.component.ts
var _c0 = ["*"];
var _c1 = () => ({ translation: "n3663" });
var RentPropertiesSubmittedComponent = class _RentPropertiesSubmittedComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.AD_ID = this.route.snapshot.queryParams["adId"];
    this.myAdsRoute = [APP_ROUTE.myAdList, "matching-tenants", this.AD_ID];
    this.appRoute = APP_ROUTE;
  }
  set sellerType(id) {
    if (id === SellerType.BUSINESS) {
      this.myAdsRoute = [APP_ROUTE.agentHub.detail, this.AD_ID];
    }
  }
  handleMoreTenants() {
    this.router.navigate(this.myAdsRoute);
  }
  static {
    this.\u0275fac = function RentPropertiesSubmittedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentPropertiesSubmittedComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RentPropertiesSubmittedComponent, selectors: [["findqo-rent-properties-submitted"]], inputs: { userEmail: "userEmail", sellerType: "sellerType" }, standalone: false, ngContentSelectors: _c0, decls: 25, vars: 21, consts: [[1, "container", "px-3", "py-4", "h-100"], [1, "row", "align-items-start", "py-4", "px-3", "heading-bg", "gap-4"], [1, "col-sm-auto"], ["width", "125", "height", "87", "alt", "Ad submitted", "fetchPriority", "high", 3, "ngSrc"], [1, "col-sm"], [1, "heading-2", "fg-general-5", "mb-2"], [1, "text-body-regular", "fg-general-3"], [1, "text-body-medium"], [1, "divider-100px", "bg-prim-2", "mx-auto", "my-4"], [1, "fg-general-5", "heading-4-medium"], [1, "fg-general-4", "text-body-regular", "link-text", "mb-4", 3, "innerHTML"], ["mat-button", "", 1, "text-body-regular", "fg-general-4", "d-block", "mx-auto", 3, "click"]], template: function RentPropertiesSubmittedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "h2", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translations");
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(13, "mat-divider", 8);
        \u0275\u0275elementStart(14, "h4", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "p", 10);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275pipe(19, "linkify");
        \u0275\u0275projection(20);
        \u0275\u0275element(21, "mat-divider", 8);
        \u0275\u0275elementStart(22, "button", 11);
        \u0275\u0275listener("click", function RentPropertiesSubmittedComponent_Template_button_click_22_listener() {
          return ctx.handleMoreTenants();
        });
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngSrc", "assets/images/place-an-ad/ad-submitted-illus-desktop.webp");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "n3114"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "n3115"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.userEmail);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "n3646"));
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(19, 15, \u0275\u0275pipeBind1(18, 13, "n3663"), \u0275\u0275pureFunction0(20, _c1)), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 18, "n3664"));
      }
    }, dependencies: [MatButton, NgOptimizedImage, MatDivider, TranslationsPipe, LinkifyPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    padding-top: 120px !important;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.heading-bg[_ngcontent-%COMP%] {\n  background-color: rgba(255, 90, 184, 0.08);\n}\n.mat-divider.divider-100px[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 5px;\n  border-radius: 100px;\n  opacity: 0.15;\n}\n.mw-500[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/rent-properties-submitted.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentPropertiesSubmittedComponent, [{
    type: Component,
    args: [{ selector: "findqo-rent-properties-submitted", standalone: false, template: `<div class="container px-3 py-4 h-100">
	<div class="row align-items-start py-4 px-3 heading-bg gap-4">
		<div class="col-sm-auto">
			<img [ngSrc]="'assets/images/place-an-ad/ad-submitted-illus-desktop.webp'" width="125" height="87" alt="Ad submitted" fetchPriority="high" />
		</div>

		<div class="col-sm">
			<h2 class="heading-2 fg-general-5 mb-2">{{ 'n3114' | translations }}</h2>

			<p class="text-body-regular fg-general-3">
				{{ 'n3115' | translations }}
				<span class="text-body-medium">{{ userEmail }}</span>
			</p>
		</div>
	</div>

	<mat-divider class="divider-100px bg-prim-2 mx-auto my-4"></mat-divider>

	<h4 class="fg-general-5 heading-4-medium">{{ 'n3646' | translations }}</h4>

	<p class="fg-general-4 text-body-regular link-text mb-4" [innerHTML]="'n3663' | translations | linkify: { translation: 'n3663' }"></p>

	<ng-content></ng-content>

	<mat-divider class="divider-100px bg-prim-2 mx-auto my-4"></mat-divider>

	<button mat-button class="text-body-regular fg-general-4 d-block mx-auto" (click)="handleMoreTenants()">{{ 'n3664' | translations }}</button>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/place-ad/components/rent-properties-submitted/rent-properties-submitted.component.scss */\n.container {\n  max-width: 1100px;\n}\n@media (min-width: 576px) {\n  .container {\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    padding-top: 120px !important;\n  }\n}\nbutton {\n  height: 40px;\n}\n.heading-bg {\n  background-color: rgba(255, 90, 184, 0.08);\n}\n.mat-divider.divider-100px {\n  width: 100px;\n  height: 5px;\n  border-radius: 100px;\n  opacity: 0.15;\n}\n.mw-500 {\n  max-width: 500px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/rent-properties-submitted.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }], { userEmail: [{
    type: Input
  }], sellerType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RentPropertiesSubmittedComponent, { className: "RentPropertiesSubmittedComponent", filePath: "apps/findqo-ireland/src/app/feature/place-ad/components/rent-properties-submitted/rent-properties-submitted.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/components/sale-properties-submitted/sale-properties-submitted.component.ts
var _c02 = (a0) => ["/", a0];
var SalePropertiesSubmittedComponent = class _SalePropertiesSubmittedComponent {
  constructor() {
    this.myAdsRoute = APP_ROUTE.myAdList;
    this.homePageRoute = APP_ROUTE.home;
  }
  set sellerType(id) {
    if (id === SellerType.BUSINESS) {
      this.myAdsRoute = APP_ROUTE.agentHub.dashboard;
      this.homePageRoute = APP_ROUTE.agentHub.dashboard;
    }
  }
  static {
    this.\u0275fac = function SalePropertiesSubmittedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalePropertiesSubmittedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalePropertiesSubmittedComponent, selectors: [["findqo-sale-properties-submitted"]], inputs: { userEmail: "userEmail", sellerType: "sellerType" }, standalone: false, decls: 20, vars: 21, consts: [[1, "container", "mx-auto", "text-center", "px-3"], ["alt", "Ad submitted", "fill", "", 1, "d-sm-none", "position-relative", 3, "ngSrc"], ["alt", "Ad submitted", "fill", "", 1, "d-none", "d-sm-block", "position-relative", 3, "ngSrc"], [1, "heading-2", "fg-general-5", "mt-4", "mb-3"], [1, "text-body-regular", "fg-general-3"], [1, "bg-general-1", "email-container"], [1, "text-body-regular", "fg-general-5", "text-center"], [1, "email-icon"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "text-small-14px-regular", "w-100", "h-100", "d-block", 3, "routerLink"], ["mat-button", "", "color", "primary", "type", "submit", 1, "text-small-14px-regular", "w-100", "h-100", "mt-3", "fg-general-4", "d-block", 3, "routerLink"]], template: function SalePropertiesSubmittedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1)(2, "img", 2);
        \u0275\u0275elementStart(3, "h2", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5)(10, "span", 6)(11, "mat-icon", 7);
        \u0275\u0275text(12, "mail_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", "assets/images/place-an-ad/ad-submitted-illus-mobile.webp");
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", "assets/images/place-an-ad/ad-submitted-illus-desktop.webp");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "n3114"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "n3115"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.userEmail, " ");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c02, ctx.myAdsRoute));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "n3116"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c02, ctx.homePageRoute));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 15, "n3117"), " ");
      }
    }, dependencies: [MatButton, MatIcon, RouterLink, NgOptimizedImage, TranslationsPipe], styles: ["\n\n.email-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block !important;\n  vertical-align: middle;\n  width: 18px;\n  height: 18px;\n}\n.email-container[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 4px;\n  margin-inline-end: 8px;\n  margin-top: 16px;\n  margin-bottom: 24px;\n  line-height: 40px;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/sale-properties-submitted.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalePropertiesSubmittedComponent, [{
    type: Component,
    args: [{ selector: "findqo-sale-properties-submitted", standalone: false, template: `<div class="container mx-auto text-center px-3">
	<img [ngSrc]="'assets/images/place-an-ad/ad-submitted-illus-mobile.webp'" alt="Ad submitted" class="d-sm-none position-relative" fill />

	<img [ngSrc]="'assets/images/place-an-ad/ad-submitted-illus-desktop.webp'" alt="Ad submitted" fill class="d-none d-sm-block position-relative" />
	<h2 class="heading-2 fg-general-5 mt-4 mb-3">{{ 'n3114' | translations }}</h2>

	<p class="text-body-regular fg-general-3">{{ 'n3115' | translations }}</p>

	<p class="bg-general-1 email-container">
		<span class="text-body-regular fg-general-5 text-center">
			<mat-icon class="email-icon">mail_outline</mat-icon>
			{{ userEmail }}
		</span>
	</p>

	<button class="text-small-14px-regular w-100 h-100 d-block" mat-flat-button color="primary" [routerLink]="['/', myAdsRoute]" type="submit">
		{{ 'n3116' | translations }}
	</button>

	<button class="text-small-14px-regular w-100 h-100 mt-3 fg-general-4 d-block" mat-button color="primary" [routerLink]="['/', homePageRoute]" type="submit">
		{{ 'n3117' | translations }}
	</button>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/place-ad/components/sale-properties-submitted/sale-properties-submitted.component.scss */\n.email-icon {\n  font-size: 18px;\n  display: inline-block !important;\n  vertical-align: middle;\n  width: 18px;\n  height: 18px;\n}\n.email-container {\n  height: 40px;\n  border-radius: 4px;\n  margin-inline-end: 8px;\n  margin-top: 16px;\n  margin-bottom: 24px;\n  line-height: 40px;\n}\n.container {\n  max-width: 500px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nbutton {\n  height: 40px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/sale-properties-submitted.component.css.map */\n"] }]
  }], null, { userEmail: [{
    type: Input
  }], sellerType: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalePropertiesSubmittedComponent, { className: "SalePropertiesSubmittedComponent", filePath: "apps/findqo-ireland/src/app/feature/place-ad/components/sale-properties-submitted/sale-properties-submitted.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-submitted/place-ad-submitted.page.ts
var _c03 = (a0) => ({ tenantMatches: a0 });
function PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "findqo-matching-tenant-item", 10);
    \u0275\u0275listener("openTenant", function PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_2_div_2_Template_findqo_matching_tenant_item_openTenant_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onScheduleTenantView($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("index", i_r4 + 1)("tenantData", item_r3)("isDisableScheduleBtn", ctx_r1.isDisableSchedule);
  }
}
function PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "findqo-rent-properties-submitted", 6)(1, "div", 7);
    \u0275\u0275template(2, PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_2_div_2_Template, 2, 3, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("userEmail", ctx_r1.userEmail)("sellerType", ctx_r1.sellerType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", vm_r5.tenantMatches);
  }
}
function PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-sale-properties-submitted", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("userEmail", ctx_r1.userEmail)("sellerType", ctx_r1.sellerType);
  }
}
function PlaceAdSubmittedPage_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 5)(2, PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_2_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, PlaceAdSubmittedPage_ng_container_0_ng_container_1_ng_template_4_Template, 1, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r5 = ctx.ngIf;
    const propertiesForRent_r6 = \u0275\u0275reference(3);
    const propertiesForSale_r7 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (vm_r5 == null ? null : vm_r5.tenantMatches == null ? null : vm_r5.tenantMatches.length) > 0 ? propertiesForRent_r6 : propertiesForSale_r7);
  }
}
function PlaceAdSubmittedPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PlaceAdSubmittedPage_ng_container_0_ng_container_1_Template, 6, 1, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c03, \u0275\u0275pipeBind1(2, 1, ctx_r1.tenantMatches$)));
  }
}
function PlaceAdSubmittedPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "mat-spinner");
    \u0275\u0275elementEnd()();
  }
}
var PlaceAdSubmittedPage = class _PlaceAdSubmittedPage {
  constructor(viewport, placeAdFacade, router, auth, route, destroy, matchingTenanstFacade, matchingTenantsFacade, commonFacade, profileFacde, adsApi) {
    this.viewport = viewport;
    this.placeAdFacade = placeAdFacade;
    this.router = router;
    this.auth = auth;
    this.route = route;
    this.destroy = destroy;
    this.matchingTenanstFacade = matchingTenanstFacade;
    this.matchingTenantsFacade = matchingTenantsFacade;
    this.commonFacade = commonFacade;
    this.profileFacde = profileFacde;
    this.adsApi = adsApi;
    this.isDisableSchedule = false;
    this.isPaymentUnderProcess = false;
    this.appRoute = APP_ROUTE;
    this.sectionType = SectionType;
    this.loading = true;
    this.sellerType = "1";
    this.userEmail = auth.user().email;
    this.tenantMatches$ = this.matchingTenantsFacade.matchingTenantsList$;
  }
  ngOnDestroy() {
    this.placeAdFacade.setIsCompletAdSubmitted(false);
  }
  checkPaymentSuccesfull() {
    const QUERY_PARAMS = this.route.snapshot.queryParams;
    const SESSION_ID = QUERY_PARAMS["sessionId"];
    const AD_ID = QUERY_PARAMS["adId"];
    if (SESSION_ID && AD_ID) {
      this.loading = true;
      const REQUEST_BODY = { sessionId: SESSION_ID, adId: AD_ID };
      this.isPaymentUnderProcess = true;
      const API_REQUEST$ = this.matchingTenanstFacade.verifyPayment(REQUEST_BODY);
      API_REQUEST$.pipe(tap(() => this.profileFacde.updateProfileValues(MenuKeys.ADDS_COUNT, UpdateAction.ADD)), finalize(() => {
        this.isPaymentUnderProcess = false;
        this.loading = false;
      })).subscribe();
    }
  }
  onScheduleTenantView(tenantData) {
    this.commonFacade.loadAvailiblitySlots();
    const AD_ID = this.route.snapshot.queryParams["adId"] ? this.route.snapshot.queryParams["adId"] : this.placeAdFacade.getAdId();
    this.matchingTenanstFacade.getMatchingTenantDetail(AD_ID, tenantData?.id).pipe(catchError((error) => {
      this.isDisableSchedule = false;
      throw new Error(error);
    })).subscribe((res) => {
      this.isDisableSchedule = false;
      this.matchingTenanstFacade.openTenantViewDateDialog(res?.data, AD_ID, 3);
    });
  }
  //to load tenant list after payment complete if its coupon payment
  checkForTenantList() {
    if (this.route.snapshot.queryParams["adId"] && !this.route.snapshot.queryParams["sessionId"]) {
      this.loading = true;
      this.profileFacde.updateProfileValues(MenuKeys.ADDS_COUNT, UpdateAction.ADD);
      this.matchingTenanstFacade.loadTenantList(this.route.snapshot.queryParams["adId"], "3").pipe(catchError((err) => {
        this.matchingTenanstFacade.setMatchingTenantsList([]);
        this.loading = false;
        return throwError(err);
      })).subscribe(() => {
        this.loading = false;
      });
    }
  }
  ngOnInit() {
    this.route?.queryParams?.pipe().subscribe((res) => this.adId = res["adId"]);
    this.adsApi.getAdDetail(this.adId).pipe().subscribe((res) => this.sellerType = res?.seller?.sellerTypeId);
    this.checkPaymentSuccesfull();
    this.checkForTenantList();
    this.router.events.pipe(filter((event) => {
      return event instanceof NavigationStart;
    }), takeUntil(this.destroy)).subscribe((event) => {
      if (event.navigationTrigger === "popstate") {
        this.router.navigate([this.appRoute.home]);
      }
    });
  }
  static {
    this.\u0275fac = function PlaceAdSubmittedPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSubmittedPage)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MatchingTenantsFacade), \u0275\u0275directiveInject(MatchingTenantsFacade), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(AdsApi));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAdSubmittedPage, selectors: [["ng-component"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 3, vars: 2, consts: [["skeletonLoader", ""], ["propertiesForRent", ""], ["propertiesForSale", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "ngTemplateOutlet"], [3, "userEmail", "sellerType"], [1, "row", "justify-content-start", "gap-3"], ["class", "col-sm match-tenant", 4, "ngFor", "ngForOf"], [1, "col-sm", "match-tenant"], [3, "openTenant", "index", "tenantData", "isDisableScheduleBtn"], [1, "container", "my-3", "position-relative", "h-100", "w-100"], [1, "spinner"]], template: function PlaceAdSubmittedPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlaceAdSubmittedPage_ng_container_0_Template, 3, 5, "ng-container", 3)(1, PlaceAdSubmittedPage_ng_template_1_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const skeletonLoader_r8 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", skeletonLoader_r8);
      }
    }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, MatchingTenantItemComponent, RentPropertiesSubmittedComponent, SalePropertiesSubmittedComponent, MatProgressSpinner, AsyncPipe], styles: ["\n\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  z-index: 3;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  z-index: var(--z-index-payment-spinner);\n  background-color: rgba(0, 0, 0, 0.2);\n}\n@media (min-width: 576px) {\n  .match-tenant[_ngcontent-%COMP%] {\n    max-width: 346px;\n    min-width: 310px;\n  }\n}\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-submitted.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSubmittedPage, [{
    type: Component,
    args: [{ providers: [DestroyService], standalone: false, template: '<ng-container *ngIf="!loading; else skeletonLoader">\n	<ng-container *ngIf="{ tenantMatches: tenantMatches$ | async } as vm">\n		<ng-template [ngTemplateOutlet]="vm?.tenantMatches?.length > 0 ? propertiesForRent : propertiesForSale"></ng-template>\n\n		<ng-template #propertiesForRent>\n			<findqo-rent-properties-submitted [userEmail]="userEmail" [sellerType]="sellerType">\n				<!-- To show tenant matches if any -->\n				<div class="row justify-content-start gap-3">\n					<div class="col-sm match-tenant" *ngFor="let item of vm.tenantMatches; let i = index">\n						<findqo-matching-tenant-item\n							[index]="i + 1"\n							[tenantData]="item"\n							(openTenant)="onScheduleTenantView($event)"\n							[isDisableScheduleBtn]="isDisableSchedule"\n						></findqo-matching-tenant-item>\n					</div>\n				</div>\n			</findqo-rent-properties-submitted>\n		</ng-template>\n\n		<ng-template #propertiesForSale>\n			<findqo-sale-properties-submitted [userEmail]="userEmail" [sellerType]="sellerType"></findqo-sale-properties-submitted>\n		</ng-template>\n	</ng-container>\n</ng-container>\n\n<ng-template #skeletonLoader>\n	<div class="container my-3 position-relative h-100 w-100">\n		<div class="spinner">\n			<mat-spinner></mat-spinner>\n		</div>\n	</div>\n</ng-template>\n', styles: ["/* apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-submitted/place-ad-submitted.page.scss */\n.loading-spinner {\n  width: 100%;\n  height: 100%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  z-index: 3;\n}\n.spinner-container {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  z-index: var(--z-index-payment-spinner);\n  background-color: rgba(0, 0, 0, 0.2);\n}\n@media (min-width: 576px) {\n  .match-tenant {\n    max-width: 346px;\n    min-width: 310px;\n  }\n}\n.spinner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-submitted.page.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: PlaceAdFacade }, { type: Router }, { type: AuthService }, { type: ActivatedRoute }, { type: DestroyService }, { type: MatchingTenantsFacade }, { type: MatchingTenantsFacade }, { type: CommonFacade }, { type: MyProfileFacade }, { type: AdsApi }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAdSubmittedPage, { className: "PlaceAdSubmittedPage", filePath: "apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-submitted/place-ad-submitted.page.ts", lineNumber: 23 });
})();

// apps/findqo-ireland/src/app/core/guards/place-ad/place-ad-submit.guard.ts
var PlaceAdSubmitGuard = class _PlaceAdSubmitGuard {
  constructor(placeAdFacade, router) {
    this.placeAdFacade = placeAdFacade;
    this.router = router;
  }
  // to prevent user from going to place ad submit page   manually without completion of ad
  canActivate(route, _state) {
    const IS_AD_SUBMITTED = this.placeAdFacade.getIsCompleteAdSubmitted();
    if (IS_AD_SUBMITTED && route.queryParams["adId"] || route.queryParams["adId"] && route.queryParams["sessionId"]) {
      return true;
    } else {
      this.router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
      return false;
    }
  }
  static {
    this.\u0275fac = function PlaceAdSubmitGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSubmitGuard)(\u0275\u0275inject(PlaceAdFacade), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceAdSubmitGuard, factory: _PlaceAdSubmitGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSubmitGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: PlaceAdFacade }, { type: Router }], null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-submitted/place-ad-submitted-routing.module.ts
var routes = [
  {
    path: "",
    component: PlaceAdSubmittedPage,
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_FOOTER_VISIBLE]: false
    },
    canActivate: [PlaceAdSubmitGuard]
  }
];
var PlaceAdSubmittedRoutingModule = class _PlaceAdSubmittedRoutingModule {
  static {
    this.\u0275fac = function PlaceAdSubmittedRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSubmittedRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdSubmittedRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSubmittedRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/components/rent-properties-submitted/rent-properties-submitted.module.ts
var RentPropertiesSubmittedModule = class _RentPropertiesSubmittedModule {
  static {
    this.\u0275fac = function RentPropertiesSubmittedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentPropertiesSubmittedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RentPropertiesSubmittedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentPropertiesSubmittedModule, [{
    type: NgModule,
    args: [{
      declarations: [RentPropertiesSubmittedComponent],
      imports: [SharedModule, MatDividerModule],
      exports: [RentPropertiesSubmittedComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/components/sale-properties-submitted/sale-properties-submitted.module.ts
var SalePropertiesSubmittedModule = class _SalePropertiesSubmittedModule {
  static {
    this.\u0275fac = function SalePropertiesSubmittedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SalePropertiesSubmittedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SalePropertiesSubmittedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalePropertiesSubmittedModule, [{
    type: NgModule,
    args: [{
      declarations: [SalePropertiesSubmittedComponent],
      imports: [SharedModule],
      exports: [SalePropertiesSubmittedComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/general/set-tenant-view-date-dialog/set-tenant-view-date-dialog.module.ts
var SetTenantViewDateDialogModule = class _SetTenantViewDateDialogModule {
  static {
    this.\u0275fac = function SetTenantViewDateDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetTenantViewDateDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SetTenantViewDateDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDatepickerModule, MatButtonToggleModule, MatDialogModule, FormsModule, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetTenantViewDateDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [SetTenantViewDateDialogComponent],
      imports: [SharedModule, MatDatepickerModule, MatButtonToggleModule, MatDialogModule, FormsModule, ReactiveFormsModule],
      exports: [SetTenantViewDateDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/general/tenant-view-date-summary-dialog/tenant-view-date-summary-dialog.module.ts
var TenantViewDateSummaryDialogModule = class _TenantViewDateSummaryDialogModule {
  static {
    this.\u0275fac = function TenantViewDateSummaryDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TenantViewDateSummaryDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TenantViewDateSummaryDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantViewDateSummaryDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [TenantViewDateSummaryDialogComponent],
      imports: [SharedModule, MatDialogModule],
      exports: [TenantViewDateSummaryDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-submitted/place-ad-submitted.module.ts
var PlaceAdSubmittedModule = class _PlaceAdSubmittedModule {
  static {
    this.\u0275fac = function PlaceAdSubmittedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSubmittedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdSubmittedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [MatchingTenantsFacade, MatchingTenantsState], imports: [
      SharedModule,
      PlaceAdSubmittedRoutingModule,
      MatchingTenantItemModule,
      RentPropertiesSubmittedModule,
      SalePropertiesSubmittedModule,
      SetTenantViewDateDialogModule,
      TenantViewDateSummaryDialogModule,
      MatProgressSpinnerModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSubmittedModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAdSubmittedPage],
      imports: [
        SharedModule,
        PlaceAdSubmittedRoutingModule,
        MatchingTenantItemModule,
        RentPropertiesSubmittedModule,
        SalePropertiesSubmittedModule,
        SetTenantViewDateDialogModule,
        TenantViewDateSummaryDialogModule,
        MatProgressSpinnerModule
      ],
      providers: [MatchingTenantsFacade, MatchingTenantsState]
    }]
  }], null, null);
})();

export {
  PlaceAdSubmittedModule
};
//# sourceMappingURL=chunk-EKYBY6VX.js.map
