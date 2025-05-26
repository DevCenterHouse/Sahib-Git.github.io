import {
  ConfettiService
} from "./chunk-P5MOHOFP.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  APP_ROUTE,
  MatButton,
  MyProfileFacade,
  Router,
  RouterLink,
  SharedModule,
  SnackService,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  finalize,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/pages/payment-sucess/payment-sucess.page.ts
var _c0 = (a0) => ({ "mb-2": a0 });
function PaymentSucessPage_ng_container_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11)(2, "mat-icon", 12);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, $index_r2 < ctx_r2.featureList.length - 1));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, item_r1));
  }
}
function PaymentSucessPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275elementStart(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275repeaterCreate(9, PaymentSucessPage_ng_container_1_For_10_Template, 8, 6, "div", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementStart(17, "mat-icon", 10);
    \u0275\u0275text(18, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 5, "n4044"), " Premium Unlimited");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 7, "n4045"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.featureList);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 9, "n4046"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/" + ctx_r2.appRoute.agentHub.businessAccount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "n91"), " ");
  }
}
function PaymentSucessPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 64);
  }
}
var PaymentSucessPage = class _PaymentSucessPage {
  constructor(confetti, router, profileFacade, snack) {
    this.confetti = confetti;
    this.router = router;
    this.profileFacade = profileFacade;
    this.snack = snack;
    this.featureList = [
      "Post unlimited property listings and receive unlimited enquiries",
      "Unlock and view property 10 monthly leads",
      "Get seller, rental, and commercial leads",
      "Connect with potential sellers interested in an in-person valuation",
      "Dedicated Marketing across FindQo.ie socials",
      "Premium Customer support"
    ];
    this.appRoute = APP_ROUTE;
    this.loading = true;
  }
  ngOnInit() {
    const { planTier, sessionId, token } = this.router.routerState.root.snapshot.queryParams;
    if (planTier && sessionId && token) {
      this.profileFacade.verifyPayment({ planTier, sessionId, token }).pipe(finalize(() => this.loading = false)).subscribe(() => {
        this.router.navigate([`/${APP_ROUTE.agentHub.dashboard}/${APP_ROUTE.businessProfile.paymentSuccess}`], { skipLocationChange: true });
        this.confetti.celebrate();
      }, () => {
        this.snack.open({
          data: { translationKey: "n208", type: "error" },
          panelClass: "snackbar-error"
        });
        this.router.navigate([`/${APP_ROUTE.agentHub.dashboard}/${APP_ROUTE.businessProfile.paymentPlan}`]);
      });
    } else {
      this.loading = false;
      this.confetti.celebrate();
    }
  }
  static {
    this.\u0275fac = function PaymentSucessPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentSucessPage)(\u0275\u0275directiveInject(ConfettiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(SnackService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentSucessPage, selectors: [["findqo-payment-sucess"]], decls: 4, vars: 2, consts: [["loadingSpinner", ""], [1, "container", "w-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["ngSrc", "assets/images/rocket-with-background.webp", "alt", "Welcome Image", "width", "100", "height", "100", "priority", ""], [1, "heading-2-medium", "fg-general-5", "mt-3", "text-center"], [1, "text-body-regular", "fg-general-5", "my-2"], [1, "feature-container", "py-3", "px-lg-3"], [1, "row", "align-items-start", "gap-1", "justify-content-start", 3, "ngClass"], [1, "text-caption-regular", "fg-general-4", "mt-32px", "text-center"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", "w-100", "rounded-pill", "continue-button", 3, "routerLink"], ["iconPositionEnd", ""], [1, "col-auto"], [1, "fg-prim-2", "fs-18px"], [1, "col"], [1, "fg-general-5", "text-start", "text-body-regular", "mt-1"], [3, "diameter"]], template: function PaymentSucessPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, PaymentSucessPage_ng_container_1_Template, 19, 13, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, PaymentSucessPage_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const loadingSpinner_r4 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loadingSpinner_r4);
      }
    }, dependencies: [SharedModule, NgClass, NgIf, MatButton, MatIcon, RouterLink, NgOptimizedImage, TranslationsPipe, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 600px !important;\n  height: calc(100vh - 80px);\n}\n.feature-container[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n}\n.feature-container[_ngcontent-%COMP%]   .continue-button[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  height: 40px !important;\n}\n.feature-container[_ngcontent-%COMP%]   .mt-32px[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/payment-sucess.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentSucessPage, [{
    type: Component,
    args: [{ selector: "findqo-payment-sucess", imports: [SharedModule, MatProgressSpinnerModule], template: `<div class="container w-100 d-flex flex-column align-items-center justify-content-center">
	<ng-container *ngIf="!loading; else loadingSpinner">
		<img ngSrc="assets/images/rocket-with-background.webp" alt="Welcome Image" width="100" height="100" priority />

		<h2 class="heading-2-medium fg-general-5 mt-3 text-center">{{ 'n4044' | translations }} Premium Unlimited</h2>
		<p class="text-body-regular fg-general-5 my-2">{{ 'n4045' | translations }}:</p>

		<div class="feature-container py-3 px-lg-3">
			@for (item of featureList; track $index) {
				<div class="row align-items-start gap-1 justify-content-start" [ngClass]="{ 'mb-2': $index < featureList.length - 1 }">
					<div class="col-auto">
						<mat-icon class="fg-prim-2 fs-18px">check</mat-icon>
					</div>

					<div class="col">
						<p class="fg-general-5 text-start text-body-regular mt-1">{{ item | translations }}</p>
					</div>
				</div>
			}

			<p class="text-caption-regular fg-general-4 mt-32px text-center">{{ 'n4046' | translations }}</p>

			<button
				mat-flat-button
				color="primary"
				class="text-body-regular w-100 rounded-pill continue-button"
				[routerLink]="'/' + appRoute.agentHub.businessAccount"
			>
				{{ 'n91' | translations }}
				<mat-icon iconPositionEnd>arrow_forward</mat-icon>
			</button>
		</div>
	</ng-container>
</div>

<ng-template #loadingSpinner>
	<mat-spinner [diameter]="64"></mat-spinner>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/pages/payment-sucess/payment-sucess.page.scss */\n.container {\n  max-width: 600px !important;\n  height: calc(100vh - 80px);\n}\n.feature-container {\n  max-width: 400px !important;\n}\n.feature-container .continue-button {\n  margin-top: 16px !important;\n  height: 40px !important;\n}\n.feature-container .mt-32px {\n  margin-top: 32px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/payment-sucess.page.css.map */\n"] }]
  }], () => [{ type: ConfettiService }, { type: Router }, { type: MyProfileFacade }, { type: SnackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentSucessPage, { className: "PaymentSucessPage", filePath: "apps/findqo-ireland/src/app/feature/my-profile/pages/payment-sucess/payment-sucess.page.ts", lineNumber: 17 });
})();
export {
  PaymentSucessPage
};
//# sourceMappingURL=chunk-JPAYLN5L.js.map
