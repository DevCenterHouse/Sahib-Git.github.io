import {
  PREMIUM_UNLIMITED_OFFERS
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/subscription-offers/subscription-offers.component.ts
function SubscriptionOffersComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1)(1, "mat-icon", 2);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 3)(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const offer_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", offer_r1.label, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", offer_r1.description, " ");
  }
}
var SubscriptionOffersComponent = class _SubscriptionOffersComponent {
  constructor() {
    this.subscriptionOffers = PREMIUM_UNLIMITED_OFFERS;
  }
  static {
    this.\u0275fac = function SubscriptionOffersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionOffersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionOffersComponent, selectors: [["findqo-subscription-offers"]], decls: 3, vars: 0, consts: [[1, "list-unstyled", "mt-3"], [1, "d-flex", "align-items-start", "mb-2", "text-body-medium", "fg-general-5"], [1, "fg-success-3", "me-1"], [1, "fg-general-5", "text-body-regular"], [1, "text-body-medium"]], template: function SubscriptionOffersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, SubscriptionOffersComponent_For_2_Template, 7, 2, "li", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.subscriptionOffers);
      }
    }, dependencies: [MatIconModule, MatIcon], styles: ["\n\nmat-icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  font-size: 15px;\n  overflow: visible;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-offers.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionOffersComponent, [{
    type: Component,
    args: [{ selector: "findqo-subscription-offers", imports: [MatIconModule], template: `
		<ul class="list-unstyled mt-3">
			@for (offer of subscriptionOffers; track offer) {
				<li class="d-flex align-items-start mb-2 text-body-medium fg-general-5">
					<mat-icon class="fg-success-3 me-1">check_circle</mat-icon>
					<p class="fg-general-5 text-body-regular">
						<span class="text-body-medium">{{ offer.label }}:</span>
						{{ offer.description }}
					</p>
				</li>
			}
		</ul>
	`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;43fcb38019f7f5bb2d670f2900633d6628d75a5604121eecdf73760c8dade37a;/Users/sahibsingh/Documents/Workspace/FindQO/findqo-website/apps/findqo-ireland/src/app/shared/components/subscription-offers/subscription-offers.component.ts */\nmat-icon {\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  font-size: 15px;\n  overflow: visible;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-offers.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionOffersComponent, { className: "SubscriptionOffersComponent", filePath: "apps/findqo-ireland/src/app/shared/components/subscription-offers/subscription-offers.component.ts", lineNumber: 32 });
})();

export {
  SubscriptionOffersComponent
};
//# sourceMappingURL=chunk-RG2UJM2Z.js.map
