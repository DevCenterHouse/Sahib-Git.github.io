import {
  SubscriptionOffersComponent
} from "./chunk-RG2UJM2Z.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  SignUpSectionPage
} from "./chunk-NW3E66SE.js";
import "./chunk-2G7JVEJI.js";
import {
  PricingListComponent,
  PricingListModule
} from "./chunk-76XBNLIX.js";
import "./chunk-HPH4IAIR.js";
import {
  SubscriptionButtonComponent
} from "./chunk-6I3UIAZY.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import "./chunk-HIMS7BZ4.js";
import "./chunk-5J2JGDL5.js";
import "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatIconButton,
  PremiumUnlimitedPlan,
  ProfileState,
  Router,
  RouterModule,
  SharedModule,
  SnackService,
  TranslationsPipe,
  ViewportService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Injectable,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/pricing/component/ads-list-dialog/ads-list-dialog.component.ts
function AdListDialogComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, item_r1));
  }
}
function AdListDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8)(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdListDialogComponent_div_6_div_7_Template, 7, 3, "div", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "n3414"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.adDetails.standardAd);
  }
}
function AdListDialogComponent_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, item_r3));
  }
}
function AdListDialogComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17)(4, "h3", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdListDialogComponent_div_7_div_7_Template, 7, 3, "div", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "n3413"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.adDetails.featureAd);
  }
}
var AdListDialogComponent = class _AdListDialogComponent {
  constructor(auth, data, dialogRef) {
    this.auth = auth;
    this.data = data;
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
    this.adDetails = {
      standardAd: ["n3340", "n3338"],
      featureAd: ["n3334", "n3338", "n3333", "n3332", "n3331"]
    };
  }
  onClose() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function AdListDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListDialogComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdListDialogComponent, selectors: [["findqo-feature-ad-dialog"]], standalone: false, decls: 8, vars: 2, consts: [[1, "container", "p-0"], [1, "pt-3", "ps-4", "pe-3", "text-end"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", 3, "click"], [1, "fg-general-4", "justify-content-center"], [1, "text-center"], [4, "ngIf"], ["src", "assets/images/standardAd-posting.webp", 1, "w-100"], [1, "d-flex", "justify-content-center", "px-4"], [1, "my-4", "my-sm-3"], [1, "heading-3-medium", "fg-general-5", "mb-3"], ["class", "align-items-center d-flex justify-content-start mb-2", 4, "ngFor", "ngForOf"], [1, "align-items-center", "d-flex", "justify-content-start", "mb-2"], [1, "check-background", "rounded-pill", "d-flex", "align-items-center", "justify-content-center", "me-2"], [1, "check-icon", "fg-prim-2"], [1, "text-body-regular", "fg-general-5", "text-start"], ["src", "assets/images/featureAd-posting.webp", 1, "w-100"], [1, "d-flex", "justify-content-center"], [1, "my-2"]], template: function AdListDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function AdListDialogComponent_Template_button_click_2_listener() {
          return ctx.onClose();
        });
        \u0275\u0275elementStart(3, "mat-icon", 3);
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275template(6, AdListDialogComponent_div_6_Template, 8, 4, "div", 5)(7, AdListDialogComponent_div_7_Template, 8, 4, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.data.adType === "standardAd");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.adType === "featureAd");
      }
    }, dependencies: [NgForOf, NgIf, MatIconButton, MatIcon, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.check-background[_ngcontent-%COMP%] {\n  background: rgba(255, 90, 184, 0.15);\n  width: 20px;\n  height: 20px;\n}\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ads-list-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-feature-ad-dialog", standalone: false, template: `<div class="container p-0">
	<div class="pt-3 ps-4 pe-3 text-end">
		<button mat-icon-button mat-dialog-close class="close-btn" (click)="onClose()">
			<mat-icon class="fg-general-4 justify-content-center">close</mat-icon>
		</button>
	</div>

	<div class="text-center">
		<div *ngIf="data.adType === 'standardAd'">
			<img src="assets/images/standardAd-posting.webp" class="w-100" />

			<div class="d-flex justify-content-center px-4">
				<div class="my-4 my-sm-3">
					<h3 class="heading-3-medium fg-general-5 mb-3">{{ 'n3414' | translations }}</h3>
					<div *ngFor="let item of adDetails.standardAd" class="align-items-center d-flex justify-content-start mb-2">
						<div class="check-background rounded-pill d-flex align-items-center justify-content-center me-2">
							<mat-icon class="check-icon fg-prim-2">check</mat-icon>
						</div>

						<span class="text-body-regular fg-general-5 text-start">{{ item | translations }}</span>
					</div>
				</div>
			</div>
		</div>

		<div *ngIf="data.adType === 'featureAd'">
			<img src="assets/images/featureAd-posting.webp" class="w-100" />

			<div class="d-flex justify-content-center">
				<div class="my-2">
					<h3 class="heading-3-medium fg-general-5 mb-3">{{ 'n3413' | translations }}</h3>
					<div *ngFor="let item of adDetails.featureAd" class="align-items-center d-flex justify-content-start mb-2">
						<div class="check-background rounded-pill d-flex align-items-center justify-content-center me-2">
							<mat-icon class="check-icon fg-prim-2">check</mat-icon>
						</div>

						<span class="text-body-regular fg-general-5 text-start">{{ item | translations }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/pricing/component/ads-list-dialog/ads-list-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.check-background {\n  background: rgba(255, 90, 184, 0.15);\n  width: 20px;\n  height: 20px;\n}\n.check-icon {\n  font-size: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ads-list-dialog.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdListDialogComponent, { className: "AdListDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/pricing/component/ads-list-dialog/ads-list-dialog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/pricing/component/ads-list-dialog/ads-list-dialog.module.ts
var AdListDialogModule = class _AdListDialogModule {
  static {
    this.\u0275fac = function AdListDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdListDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [AdListDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [AdListDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/pricing/component/help-dialog/help-dialog.component.ts
function HelpDialogComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, item_r1));
  }
}
var HelpDialogComponent = class _HelpDialogComponent {
  constructor(auth, dialogRef) {
    this.auth = auth;
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
    this.tenentInInfo = {
      details: ["n3408", "n3409", "n3410"]
    };
  }
  onClose() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function HelpDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpDialogComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpDialogComponent, selectors: [["findqo-help-dialog"]], standalone: false, decls: 16, vars: 7, consts: [[1, "container", "p-0"], [1, "pt-3", "ps-4", "pe-3", "text-end"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", 3, "click"], [1, "fg-general-4", "justify-content-center"], [1, "text-center", "px-4", "py-3"], ["src", "assets/images/tenant-in.webp", 1, "img-fluid"], [1, "d-flex", "justify-content-center"], [1, "my-4", "w-315px"], [1, "heading-3-medium", "fg-general-5", "mb-1"], [1, "fs-14px", "fw-400", "lh-18px", "fg-general-3", "mb-3"], ["class", "align-items-center d-flex justify-content-start mb-2", 4, "ngFor", "ngForOf"], [1, "align-items-center", "d-flex", "justify-content-start", "mb-2"], [1, "check-background", "rounded-pill", "d-flex", "align-items-center", "justify-content-center", "me-2"], [1, "check-icon", "fg-prim-2"], [1, "text-body-regular", "fg-general-5", "text-start"]], template: function HelpDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function HelpDialogComponent_Template_button_click_2_listener() {
          return ctx.onClose();
        });
        \u0275\u0275elementStart(3, "mat-icon", 3);
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275element(6, "img", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "h3", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, HelpDialogComponent_div_15_Template, 7, 3, "div", 10);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 3, "n3406"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 5, "n3407"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.tenentInInfo.details);
      }
    }, dependencies: [NgForOf, MatIconButton, MatIcon, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.check-background[_ngcontent-%COMP%] {\n  background: rgba(255, 90, 184, 0.15);\n  width: 20px;\n  height: 20px;\n}\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n}\n.w-315px[_ngcontent-%COMP%] {\n  width: 315px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/help-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-help-dialog", standalone: false, template: `<div class="container p-0">
	<div class="pt-3 ps-4 pe-3 text-end">
		<button mat-icon-button mat-dialog-close class="close-btn" (click)="onClose()">
			<mat-icon class="fg-general-4 justify-content-center">close</mat-icon>
		</button>
	</div>

	<div class="text-center px-4 py-3">
		<img src="assets/images/tenant-in.webp" class="img-fluid" />

		<div class="d-flex justify-content-center">
			<div class="my-4 w-315px">
				<h3 class="heading-3-medium fg-general-5 mb-1">{{ 'n3406' | translations }}</h3>
				<p class="fs-14px fw-400 lh-18px fg-general-3 mb-3">{{ 'n3407' | translations }}</p>

				<div *ngFor="let item of tenentInInfo.details" class="align-items-center d-flex justify-content-start mb-2">
					<div class="check-background rounded-pill d-flex align-items-center justify-content-center me-2">
						<mat-icon class="check-icon fg-prim-2">check</mat-icon>
					</div>

					<span class="text-body-regular fg-general-5 text-start">{{ item | translations }}</span>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/pricing/component/help-dialog/help-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.check-background {\n  background: rgba(255, 90, 184, 0.15);\n  width: 20px;\n  height: 20px;\n}\n.check-icon {\n  font-size: 15px;\n  width: 15px;\n}\n.w-315px {\n  width: 315px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/help-dialog.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpDialogComponent, { className: "HelpDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/pricing/component/help-dialog/help-dialog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/pricing/component/help-dialog/help-dialog.module.ts
var HelpDialogModule = class _HelpDialogModule {
  static {
    this.\u0275fac = function HelpDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HelpDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [HelpDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [HelpDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/pricing/pricing.facade.ts
var PricingFacade = class _PricingFacade {
  constructor(adsApi) {
    this.adsApi = adsApi;
  }
  getAdsPlan() {
    return this.adsApi.getAdsPrice();
  }
  static {
    this.\u0275fac = function PricingFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingFacade)(\u0275\u0275inject(AdsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PricingFacade, factory: _PricingFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingFacade, [{
    type: Injectable
  }], () => [{ type: AdsApi }], null);
})();

// apps/findqo-ireland/src/app/feature/pricing/pricing.page.ts
var _c0 = ["class", "page"];
function PricingPage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "findqo-pricing-list", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "div", 12)(4, "h3", 13);
    \u0275\u0275text(5, "Irish Property Platform Built for Estate Agents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Showcase your property listings across Ireland to maximize reach and drive enquiries");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "findqo-sign-up-section-page");
    \u0275\u0275elementEnd();
  }
}
function PricingPage_Conditional_15_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "mat-icon", 37);
    \u0275\u0275text(2, "help_outline");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", item_r1.tooltiptxt);
  }
}
function PricingPage_Conditional_15_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 29)(2, "mat-icon", 22);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PricingPage_Conditional_15_div_12_div_8_Template, 3, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, item_r1.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r1.hasIcon);
  }
}
function PricingPage_Conditional_15_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 29)(2, "mat-icon", 33);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, item_r2.name));
  }
}
function PricingPage_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 14);
    \u0275\u0275text(1, " Compare ");
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3, "Individual Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h4", 16);
    \u0275\u0275text(5, " Compare ");
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "Individual Pricing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17)(9, "div", 18)(10, "h3", 19);
    \u0275\u0275text(11, "Featured Ad Listing");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PricingPage_Conditional_15_div_12_Template, 9, 4, "div", 20);
    \u0275\u0275elementStart(13, "div", 21)(14, "mat-icon", 22);
    \u0275\u0275text(15, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 5);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translations");
    \u0275\u0275elementStart(19, "a", 23);
    \u0275\u0275text(20, "Tenantin.ie");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "h4", 24);
    \u0275\u0275text(22, "Pricing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 25)(24, "div", 26)(25, "div", 27)(26, "span", 28);
    \u0275\u0275text(27, "Share (Rent a room)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 29)(29, "span", 30);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 31)(32, "div", 27)(33, "span", 28);
    \u0275\u0275text(34, "Rent and Sale listings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 29)(36, "span", 30);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 32)(39, "div")(40, "h3", 19);
    \u0275\u0275text(41, "Standard Ad Listing");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, PricingPage_Conditional_15_div_42_Template, 8, 3, "div", 20);
    \u0275\u0275elementStart(43, "div", 21)(44, "mat-icon", 33);
    \u0275\u0275text(45, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 5);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translations");
    \u0275\u0275elementStart(49, "a", 23);
    \u0275\u0275text(50, "Tenantin.ie");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div")(52, "h4", 24);
    \u0275\u0275text(53, "Pricing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 25)(55, "div", 26)(56, "div", 27)(57, "span", 28);
    \u0275\u0275text(58, "Share (Rent a room)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 29)(60, "span", 30);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 31)(63, "div", 27)(64, "span", 28);
    \u0275\u0275text(65, "Rent and Sale listings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 29)(67, "span", 30);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.featuredAd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "n4087"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "https://tenantin.ie/", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r2.pricing == null ? null : ctx_r2.pricing.featured == null ? null : ctx_r2.pricing.featured.share, " per ad");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r2.pricing == null ? null : ctx_r2.pricing.featured == null ? null : ctx_r2.pricing.featured.rent, " per ad");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.standardAd);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 12, "n4087"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "https://tenantin.ie/", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r2.pricing == null ? null : ctx_r2.pricing.standard == null ? null : ctx_r2.pricing.standard.share, " per ad");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20AC", ctx_r2.pricing == null ? null : ctx_r2.pricing.standard == null ? null : ctx_r2.pricing.standard.rent, " per ad");
  }
}
var PricingTab;
(function(PricingTab2) {
  PricingTab2["ESTATE_AGENTS"] = "estateAgents";
  PricingTab2["INDIVIDUALS"] = "individuals";
})(PricingTab || (PricingTab = {}));
var PricingPage = class _PricingPage {
  constructor(viewport, auth, priceFacade, matDialog, router, authService, profileState, snackService) {
    this.viewport = viewport;
    this.auth = auth;
    this.priceFacade = priceFacade;
    this.matDialog = matDialog;
    this.router = router;
    this.authService = authService;
    this.profileState = profileState;
    this.snackService = snackService;
    this.pricing = {
      featured: {
        share: "",
        rent: ""
      },
      standard: {
        share: "",
        rent: ""
      }
    };
    this.isUserLogin = this.auth.user()?.accessToken;
    this.tenantInUrl = environment.tenantIn;
    this.featuredAd = [
      { name: "Sale ads will be listed for 180 days" },
      { name: "Rent ads will be listed for 90 days" },
      { name: "Share ads will be listed for 14 days" },
      { name: "n3334" },
      { name: "n3363" },
      { name: "n3333" },
      { name: "n3332", hasIcon: true, tooltiptxt: "Highlight your top 3 badges about your property." },
      { name: "n3330" }
    ];
    this.standardAd = [
      { name: "Sale ads will be listed for 180 days" },
      { name: "Rent ads will be listed for 90 days" },
      { name: "Share ads will be listed for 14 days" }
    ];
    this.paymentPlans = [PremiumUnlimitedPlan.MONTHLY, PremiumUnlimitedPlan.YEARLY];
    this.buttonType = ButtonType;
    this.pricingTab = PricingTab;
    this.selectedTab = this.pricingTab.ESTATE_AGENTS;
  }
  openHelpDialog() {
    this.matDialog.open(HelpDialogComponent, {
      width: "500px",
      height: "auto",
      maxWidth: "unset",
      panelClass: "tenent-in"
    });
  }
  openfeatureAdDetailsDialog() {
    this.matDialog.open(AdListDialogComponent, {
      width: "500px",
      height: "auto",
      maxWidth: "unset",
      data: {
        adType: "featureAd"
      },
      panelClass: "feature-ad"
    });
  }
  openStandardAdDetailsDialog() {
    this.matDialog.open(AdListDialogComponent, {
      width: "500px",
      height: "auto",
      maxWidth: "unset",
      data: {
        adType: "standardAd"
      },
      panelClass: "standar-ad"
    });
  }
  openDialog(helpText) {
    if (helpText === "standardAd") {
      this.openStandardAdDetailsDialog();
    } else if (helpText === "FeaturedAd") {
      this.openfeatureAdDetailsDialog();
    } else {
      this.openHelpDialog();
    }
  }
  // TODO: Remove this code as it's not being used.
  onSubscribe() {
    const IS_AGENT = this.auth.user()?.roles.some((role) => role === "isAgentUser");
    if (IS_AGENT) {
      this.snackService.open({
        data: { message: "You are not subscribed to any plan, please contact your business administrator" },
        panelClass: ["snackbar-error"]
      });
      return;
    }
    const IS_LOGGED_IN = this.authService.user()?.accessToken;
    const navigateTo = () => {
      const route = this.profileState.getUser()?.hasBusinessProfile === "0" ? APP_ROUTE.agentHub.landing : APP_ROUTE.agentHub.businessAccountSubscription;
      this.router.navigate([route]);
    };
    if (IS_LOGGED_IN) {
      navigateTo();
    } else {
      this.authService.openAuthDialog({ onLogin: navigateTo });
    }
  }
  getPricingInfo() {
    this.priceFacade.getAdsPlan().subscribe((pricing) => {
      const individualAccountPlans = Array.isArray(pricing?.individualAccount) ? pricing.individualAccount : [];
      const featuredAd = individualAccountPlans.find((plan) => plan?.reference === "featured-ad");
      if (featuredAd) {
        const featuredShare = featuredAd?.features.find((feature) => feature?.aisle === "Share (Rent a room)");
        const featuredRent = featuredAd?.features.find((feature) => feature?.aisle === "Rent Residential");
        this.pricing.featured.share = featuredShare ? featuredShare.price?.price : null;
        this.pricing.featured.rent = featuredRent ? featuredRent.price?.price : null;
      }
      const standardAd = individualAccountPlans.find((plan) => plan.reference === "standard-ad");
      if (standardAd && Array.isArray(standardAd.features)) {
        const standardShare = standardAd.features.find((feature) => feature?.aisle === "Share (Rent a room)");
        const standardRent = standardAd.features.find((feature) => feature?.aisle === "Rent Residential");
        this.pricing.standard.share = standardShare ? standardShare.price?.price : null;
        this.pricing.standard.rent = standardRent ? standardRent.price?.price : null;
      }
    });
  }
  ngOnInit() {
    this.getPricingInfo();
  }
  static {
    this.\u0275fac = function PricingPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingPage)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(PricingFacade), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProfileState), \u0275\u0275directiveInject(SnackService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingPage, selectors: [["findqo-pricing", 8, "page"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], attrs: _c0, decls: 16, vars: 3, consts: [[1, "bg-general-1", "py-4"], [1, "container", "bg-basic-1", "px-3", "py-4", "rounded"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "gap-3", "w-100", "mt-3"], [1, "d-flex", "flex-column", "gap-2", "w-100", "w-md-50"], [1, "heading-1", "fg-general-5"], [1, "fg-general-5", "text-body-regular"], [1, "fg-prim-2"], [1, "d-flex", "gap-2", "w-100", "w-md-50", "justify-content-md-end"], ["label", "Estate Agents", 3, "clicked", "btnType"], ["label", "Individuals", 3, "clicked", "btnType"], [1, "my-4"], ["headerTitle", "Estate Agents"], [1, "gap-2", "mb-3"], [1, "heading-3-medium", "fg-general-5"], [1, "heading-3", "mb-1", "fg-general-5", "d-none", "d-md-block", "my-4"], [1, "bg-prim-2", "fg-basic-1"], [1, "heading-4", "mb-1", "fg-general-5", "d-md-none", "my-4"], [1, "d-flex", "flex-column", "flex-md-row", "w-100", "gap-md-5"], [1, "w-100", "w-md-50"], [1, "heading-4-medium", "fg-general-5", "my-4"], ["class", "row align-items-center gap-1 mb-2", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", "align-items-start", "gap-1", "w-100"], [1, "fg-success-3", "icon-18px"], ["target", "_blank", 1, "cursor-pointer", 3, "href"], [1, "heading-4-medium", "fg-general-5", "mt-4"], [1, "border", "rounded", "p-3", "mt-3"], [1, "row"], [1, "col"], [1, "text-body-regular", "fg-general-5"], [1, "col-auto"], [1, "text-body-medium", "fg-general-5"], [1, "row", "mt-3"], [1, "w-100", "w-md-50", "standard-ad", "standard-ad-mt"], [1, "fg-general-4", "icon-18px"], [1, "row", "align-items-center", "gap-1", "mb-2"], ["class", "col cursor-pointer", "matTooltipClass", "pland-hint", 3, "matTooltip", 4, "ngIf"], ["matTooltipClass", "pland-hint", 1, "col", "cursor-pointer", 3, "matTooltip"], [1, "fg-general-3", "icon-18px", "material-icons-outlined"]], template: function PricingPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, "Irish Property Platform Built for All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " Whether you're a professional agent or an individual property owner, ");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " helps you discover pricing plans that suit you perfectly. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "findqo-button", 8);
        \u0275\u0275listener("clicked", function PricingPage_Template_findqo_button_clicked_12_listener() {
          return ctx.selectedTab = ctx.pricingTab.ESTATE_AGENTS;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "findqo-button", 9);
        \u0275\u0275listener("clicked", function PricingPage_Template_findqo_button_clicked_13_listener() {
          return ctx.selectedTab = ctx.pricingTab.INDIVIDUALS;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, PricingPage_Conditional_14_Template, 9, 0)(15, PricingPage_Conditional_15_Template, 69, 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("btnType", ctx.selectedTab === ctx.pricingTab.ESTATE_AGENTS ? ctx.buttonType.FILLED : ctx.buttonType.STROKED);
        \u0275\u0275advance();
        \u0275\u0275property("btnType", ctx.selectedTab === ctx.pricingTab.INDIVIDUALS ? ctx.buttonType.FILLED : ctx.buttonType.STROKED);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selectedTab === ctx.pricingTab.ESTATE_AGENTS ? 14 : 15);
      }
    }, dependencies: [NgForOf, NgIf, MatIcon, MatTooltip, ButtonComponent, PricingListComponent, SignUpSectionPage, TranslationsPipe], styles: ["\n\na[_ngcontent-%COMP%] {\n  color: var(--prim-2);\n  text-decoration: underline !important;\n}\n.icon-18px[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  min-height: 18px;\n  min-width: 18px;\n  width: 18px;\n}\n.w-400px[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 5px;\n  background-color: var(--prim-2);\n  opacity: 15%;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n.standard-ad[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 767.98px) {\n  .standard-ad-mt[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pricing.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPage, [{
    type: Component,
    args: [{ selector: "findqo-pricing.page", providers: [DestroyService], standalone: false, template: `<div class="bg-general-1 py-4">
	<div class="container bg-basic-1 px-3 py-4 rounded">
		<div class="d-flex flex-column flex-md-row align-items-center gap-3 w-100 mt-3">
			<div class="d-flex flex-column gap-2 w-100 w-md-50">
				<h1 class="heading-1 fg-general-5">Irish Property Platform Built for All</h1>
				<p class="fg-general-5 text-body-regular">
					Whether you're a professional agent or an individual property owner,
					<span class="fg-prim-2">FindQo.ie</span>
					helps you discover pricing plans that suit you perfectly.
				</p>
			</div>

			<div class="d-flex gap-2 w-100 w-md-50 justify-content-md-end">
				<findqo-button
					label="Estate Agents"
					(clicked)="selectedTab = pricingTab.ESTATE_AGENTS"
					[btnType]="selectedTab === pricingTab.ESTATE_AGENTS ? buttonType.FILLED : buttonType.STROKED"
				></findqo-button>
				<findqo-button
					label="Individuals"
					(clicked)="selectedTab = pricingTab.INDIVIDUALS"
					[btnType]="selectedTab === pricingTab.INDIVIDUALS ? buttonType.FILLED : buttonType.STROKED"
				></findqo-button>
			</div>
		</div>

		@if (selectedTab === pricingTab.ESTATE_AGENTS) {
			<div class="my-4">
				<findqo-pricing-list headerTitle="Estate Agents"></findqo-pricing-list>
			</div>

			<div>
				<div class="gap-2 mb-3">
					<h3 class="heading-3-medium fg-general-5">Irish Property Platform Built for Estate Agents</h3>
					<p class="fg-general-5 text-body-regular">Showcase your property listings across Ireland to maximize reach and drive enquiries</p>
				</div>

				<findqo-sign-up-section-page></findqo-sign-up-section-page>
			</div>
		} @else {
			<h3 class="heading-3 mb-1 fg-general-5 d-none d-md-block my-4">
				Compare
				<span class="bg-prim-2 fg-basic-1">Individual Pricing</span>
			</h3>
			<h4 class="heading-4 mb-1 fg-general-5 d-md-none my-4">
				Compare
				<span class="bg-prim-2 fg-basic-1">Individual Pricing</span>
			</h4>

			<div class="d-flex flex-column flex-md-row w-100 gap-md-5">
				<div class="w-100 w-md-50">
					<h3 class="heading-4-medium fg-general-5 my-4">Featured Ad Listing</h3>

					<div class="row align-items-center gap-1 mb-2" *ngFor="let item of featuredAd">
						<div class="col-auto">
							<mat-icon class="fg-success-3 icon-18px">check_circle</mat-icon>
						</div>

						<div class="col-auto">
							<span class="fg-general-5 text-body-regular">{{ item.name | translations }}</span>
						</div>

						<div *ngIf="item.hasIcon" class="col cursor-pointer" matTooltipClass="pland-hint" [matTooltip]="item.tooltiptxt">
							<mat-icon class="fg-general-3 icon-18px material-icons-outlined">help_outline</mat-icon>
						</div>
					</div>

					<div class="d-inline-flex align-items-start gap-1 w-100">
						<mat-icon class="fg-success-3 icon-18px">check_circle</mat-icon>
						<span class="fg-general-5 text-body-regular">
							{{ 'n4087' | translations }}
							<a class="cursor-pointer" [href]="'https://tenantin.ie/'" target="_blank">Tenantin.ie</a>
						</span>
					</div>

					<h4 class="heading-4-medium fg-general-5 mt-4">Pricing:</h4>

					<div class="border rounded p-3 mt-3">
						<div class="row">
							<div class="col">
								<span class="text-body-regular fg-general-5">Share (Rent a room)</span>
							</div>

							<div class="col-auto">
								<span class="text-body-medium fg-general-5">\u20AC{{ pricing?.featured?.share }} per ad</span>
							</div>
						</div>

						<div class="row mt-3">
							<div class="col">
								<span class="text-body-regular fg-general-5">Rent and Sale listings</span>
							</div>

							<div class="col-auto">
								<span class="text-body-medium fg-general-5">\u20AC{{ pricing?.featured?.rent }} per ad</span>
							</div>
						</div>
					</div>
				</div>

				<div class="w-100 w-md-50 standard-ad standard-ad-mt">
					<div>
						<h3 class="heading-4-medium fg-general-5 my-4">Standard Ad Listing</h3>

						<div class="row align-items-center gap-1 mb-2" *ngFor="let item of standardAd">
							<div class="col-auto">
								<mat-icon class="fg-general-4 icon-18px">check_circle</mat-icon>
							</div>

							<div class="col-auto">
								<span class="fg-general-5 text-body-regular">{{ item.name | translations }}</span>
							</div>
						</div>

						<div class="d-inline-flex align-items-start gap-1 w-100">
							<mat-icon class="fg-general-4 icon-18px">check_circle</mat-icon>
							<span class="fg-general-5 text-body-regular">
								{{ 'n4087' | translations }}
								<a class="cursor-pointer" [href]="'https://tenantin.ie/'" target="_blank">Tenantin.ie</a>
							</span>
						</div>
					</div>

					<div>
						<h4 class="heading-4-medium fg-general-5 mt-4">Pricing:</h4>

						<div class="border rounded p-3 mt-3">
							<div class="row">
								<div class="col">
									<span class="text-body-regular fg-general-5">Share (Rent a room)</span>
								</div>

								<div class="col-auto">
									<span class="text-body-medium fg-general-5">\u20AC{{ pricing?.standard?.share }} per ad</span>
								</div>
							</div>

							<div class="row mt-3">
								<div class="col">
									<span class="text-body-regular fg-general-5">Rent and Sale listings</span>
								</div>

								<div class="col-auto">
									<span class="text-body-medium fg-general-5">\u20AC{{ pricing?.standard?.rent }} per ad</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		}
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/pricing/pricing.page.scss */\na {\n  color: var(--prim-2);\n  text-decoration: underline !important;\n}\n.icon-18px {\n  font-size: 18px;\n  height: 18px;\n  min-height: 18px;\n  min-width: 18px;\n  width: 18px;\n}\n.w-400px {\n  max-width: 400px;\n}\n.horizontal-line {\n  width: 100px;\n  height: 5px;\n  background-color: var(--prim-2);\n  opacity: 15%;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n.standard-ad {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 767.98px) {\n  .standard-ad-mt {\n    margin-top: 24px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pricing.page.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: AuthService }, { type: PricingFacade }, { type: MatDialog }, { type: Router }, { type: AuthService }, { type: ProfileState }, { type: SnackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingPage, { className: "PricingPage", filePath: "apps/findqo-ireland/src/app/feature/pricing/pricing.page.ts", lineNumber: 28 });
})();

// apps/findqo-ireland/src/app/feature/pricing/pricing-routing.module.ts
var routes = [
  {
    path: "",
    component: PricingPage
  }
];
var PricingPageRoutingModule = class _PricingPageRoutingModule {
  static {
    this.\u0275fac = function PricingPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PricingPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/pricing/pricing.module.ts
var PricingPageModule = class _PricingPageModule {
  static {
    this.\u0275fac = function PricingPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PricingPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [PricingFacade], imports: [
      SharedModule,
      PricingPageRoutingModule,
      MatTooltipModule,
      HelpDialogModule,
      AdListDialogModule,
      SubscriptionOffersComponent,
      SubscriptionButtonComponent,
      ButtonModule,
      PricingListModule,
      SignUpSectionPage
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingPageModule, [{
    type: NgModule,
    args: [{
      declarations: [PricingPage],
      imports: [
        SharedModule,
        PricingPageRoutingModule,
        MatTooltipModule,
        HelpDialogModule,
        AdListDialogModule,
        SubscriptionOffersComponent,
        SubscriptionButtonComponent,
        ButtonModule,
        PricingListModule,
        SignUpSectionPage
      ],
      providers: [PricingFacade]
    }]
  }], null, null);
})();
export {
  PricingPageModule
};
//# sourceMappingURL=chunk-PC5UHLZL.js.map
