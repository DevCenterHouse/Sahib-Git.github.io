import {
  SubscriptionOffersComponent
} from "./chunk-RG2UJM2Z.js";
import {
  SubscriptionButtonComponent
} from "./chunk-6I3UIAZY.js";
import "./chunk-HIMS7BZ4.js";
import {
  APP_ROUTE,
  MyProfileFacade,
  PremiumUnlimitedPlan,
  SharedModule,
  TranslationsPipe,
  WindowService,
  environment
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  Component,
  finalize,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/pages/payment-plan/payment-plan.component.ts
function PaymentPlanComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "findqo-subscription-button", 9);
    \u0275\u0275listener("subscribed", function PaymentPlanComponent_For_15_Template_findqo_subscription_button_subscribed_1_listener($event) {
      const paymentPlan_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.generatePaymentLink(paymentPlan_r2, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const paymentPlan_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("paymentPlan", paymentPlan_r2)("isLoading", ctx_r2.paymentButtonLoaders[paymentPlan_r2]);
  }
}
var PaymentPlanComponent = class _PaymentPlanComponent {
  constructor(profileFacade, windowService) {
    this.profileFacade = profileFacade;
    this.windowService = windowService;
    this.paymentButtonLoaders = {};
    this.paymentPlans = [PremiumUnlimitedPlan.MONTHLY, PremiumUnlimitedPlan.YEARLY];
  }
  generatePaymentLink(paymentPlan, planTierId) {
    this.paymentButtonLoaders[paymentPlan] = true;
    this.profileFacade.generatePaymentLink({ planTierId, successUrl: `${environment.appUrl}/${APP_ROUTE.agentHub.dashboard}/${APP_ROUTE.businessProfile.paymentSuccess}` }).pipe(finalize(() => this.paymentButtonLoaders[paymentPlan] = false)).subscribe((res) => this.windowService.reference.location.replace(res.url));
  }
  static {
    this.\u0275fac = function PaymentPlanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentPlanComponent)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(WindowService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentPlanComponent, selectors: [["findqo-payment-plan"]], decls: 16, vars: 6, consts: [[1, "h-100", "w-100", "bg-general-1", "pt-4", "plans-container"], [1, "container", "bg-basic-1", "py-4", "px-3", "rounded"], [1, "heading-1", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-1", "mb-4"], [1, "rounded", "border", "plan-item"], [1, "header", "p-3", "bg-general-5", "border-bottom"], [1, "text-body-medium", "fg-basic-1"], [1, "p-3"], [1, "p-3", "border-top"], ["btnClass", "rounded-pill", 3, "subscribed", "paymentPlan", "isLoading"]], template: function PaymentPlanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "p", 6);
        \u0275\u0275text(11, "Premium Unlimited");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275element(13, "findqo-subscription-offers");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, PaymentPlanComponent_For_15_Template, 2, 2, "div", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "n3317"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "n3318"));
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.paymentPlans);
      }
    }, dependencies: [SharedModule, TranslationsPipe, SubscriptionOffersComponent, SubscriptionButtonComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px !important;\n}\n.plan-item[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.header[_ngcontent-%COMP%] {\n  border-radius: 4px 4px 0 0;\n}\n.plans-container[_ngcontent-%COMP%] {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .plans-container[_ngcontent-%COMP%] {\n    padding-bottom: 24px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/payment-plan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentPlanComponent, [{
    type: Component,
    args: [{ selector: "findqo-payment-plan", imports: [SharedModule, SubscriptionOffersComponent, SubscriptionButtonComponent], template: `<div class="h-100 w-100 bg-general-1 pt-4 plans-container">
	<div class="container bg-basic-1 py-4 px-3 rounded">
		<h1 class="heading-1 fg-general-5">{{ 'n3317' | translations }}</h1>
		<p class="text-body-regular fg-general-5 mt-1 mb-4">{{ 'n3318' | translations }}</p>

		<div class="rounded border plan-item">
			<div class="header p-3 bg-general-5 border-bottom">
				<p class="text-body-medium fg-basic-1">Premium Unlimited</p>
			</div>

			<div class="p-3">
				<findqo-subscription-offers></findqo-subscription-offers>
			</div>

			@for (paymentPlan of paymentPlans; track paymentPlan) {
				<div class="p-3 border-top">
					<findqo-subscription-button
						btnClass="rounded-pill"
						[paymentPlan]="paymentPlan"
						[isLoading]="paymentButtonLoaders[paymentPlan]"
						(subscribed)="generatePaymentLink(paymentPlan, $event)"
					></findqo-subscription-button>
				</div>
			}
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/pages/payment-plan/payment-plan.component.scss */\n.container {\n  max-width: 1000px !important;\n}\n.plan-item {\n  max-width: 400px;\n}\n.header {\n  border-radius: 4px 4px 0 0;\n}\n.plans-container {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .plans-container {\n    padding-bottom: 24px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/payment-plan.component.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }, { type: WindowService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentPlanComponent, { className: "PaymentPlanComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/pages/payment-plan/payment-plan.component.ts", lineNumber: 18 });
})();
export {
  PaymentPlanComponent
};
//# sourceMappingURL=chunk-LBDYA63U.js.map
