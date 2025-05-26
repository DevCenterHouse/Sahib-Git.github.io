import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  MatButton,
  MatButtonModule,
  PREMIUM_UNLIMITED_OPTIONS,
  PremiumUnlimitedPlan
} from "./chunk-DMGY2MF4.js";
import {
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  NgClass
} from "./chunk-P7GEPQ2C.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/subscription-button/subscription-button.component.ts
function SubscriptionButtonComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
var SubscriptionButtonComponent = class _SubscriptionButtonComponent {
  constructor() {
    this.paymentPlan = PremiumUnlimitedPlan.MONTHLY;
    this.isLoading = false;
    this.subscribed = new EventEmitter();
    this.paymentOptions = PREMIUM_UNLIMITED_OPTIONS;
  }
  onSubscribe(plantierId) {
    this.subscribed.emit(plantierId);
  }
  static {
    this.\u0275fac = function SubscriptionButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionButtonComponent, selectors: [["findqo-subscription-button"]], inputs: { paymentPlan: "paymentPlan", isLoading: "isLoading", btnClass: "btnClass" }, outputs: { subscribed: "subscribed" }, decls: 14, vars: 7, consts: [[1, "w-100", "text-center"], [1, "heading-1", "fw-400"], [1, "line-through"], [1, "fs-14px", "fg-general-5", "fw-500"], [1, "fg-general-5", "fw-600"], [1, "text-caption-2-regular", "fg-general-4", "vat-description"], [1, "mt-4"], ["mat-flat-button", "", "color", "primary", 1, "btn-subscribe", "w-100", "position-relative", 3, "click", "ngClass", "disabled"], ["diameter", "16", 1, "position-absolute", "top-50", "start-50", "translate-middle"]], template: function SubscriptionButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1)(2, "sub", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "sup", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "sup", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
        \u0275\u0275listener("click", function SubscriptionButtonComponent_Template_button_click_11_listener() {
          return ctx.onSubscribe(ctx.paymentOptions[ctx.paymentPlan].planTierId);
        });
        \u0275\u0275text(12, " Subscribe ");
        \u0275\u0275template(13, SubscriptionButtonComponent_Conditional_13_Template, 1, 0, "mat-spinner", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan].currency + ctx.paymentOptions[ctx.paymentPlan].originalPrice);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan].currency);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan].offerPrice);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan].vatDescription);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.btnClass)("disabled", ctx.isLoading);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading ? 13 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatProgressSpinnerModule, MatProgressSpinner, NgClass], styles: ["\n\nsub.line-through[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 10px;\n  line-height: 14px;\n  color: var(--general-4);\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.7em;\n}\nsup.vat-description[_ngcontent-%COMP%] {\n  top: -1.5em;\n}\nbutton.btn-subscribe[_ngcontent-%COMP%] {\n  height: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-button.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionButtonComponent, [{
    type: Component,
    args: [{ selector: "findqo-subscription-button", imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, NgClass], template: `
		<div class="w-100 text-center">
			<p class="heading-1 fw-400">
				<sub class="line-through">{{ paymentOptions[paymentPlan].currency + paymentOptions[paymentPlan].originalPrice }}</sub>
				<sup class="fs-14px fg-general-5 fw-500">{{ paymentOptions[paymentPlan].currency }}</sup>
				<span class="fg-general-5 fw-600">{{ paymentOptions[paymentPlan].offerPrice }}</span>
				<sup class="text-caption-2-regular fg-general-4 vat-description">{{ paymentOptions[paymentPlan].vatDescription }}</sup>
			</p>

			<div class="mt-4">
				<button
					mat-flat-button
					color="primary"
					class="btn-subscribe w-100 position-relative"
					[ngClass]="btnClass"
					[disabled]="isLoading"
					(click)="onSubscribe(paymentOptions[paymentPlan].planTierId)"
				>
					Subscribe

					@if (isLoading) {
						<mat-spinner class="position-absolute top-50 start-50 translate-middle" diameter="16"></mat-spinner>
					}
				</button>
			</div>
		</div>
	`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;cc9b21cc6bc0af14584f3c826c1ca712eb19615fb9aa14fb430044cb1426dc81;/Users/sahibsingh/Documents/Workspace/FindQO/findqo-website/apps/findqo-ireland/src/app/shared/components/subscription-button/subscription-button.component.ts */\nsub.line-through {\n  text-decoration: line-through;\n  font-size: 10px;\n  line-height: 14px;\n  color: var(--general-4);\n}\nsup {\n  top: -0.7em;\n}\nsup.vat-description {\n  top: -1.5em;\n}\nbutton.btn-subscribe {\n  height: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-button.component.css.map */\n"] }]
  }], null, { paymentPlan: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], btnClass: [{
    type: Input
  }], subscribed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionButtonComponent, { className: "SubscriptionButtonComponent", filePath: "apps/findqo-ireland/src/app/shared/components/subscription-button/subscription-button.component.ts", lineNumber: 61 });
})();

export {
  SubscriptionButtonComponent
};
//# sourceMappingURL=chunk-6I3UIAZY.js.map
