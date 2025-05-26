import {
  ToggleComponent
} from "./chunk-HPH4IAIR.js";
import {
  SubscriptionButtonComponent
} from "./chunk-6I3UIAZY.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  ButtonComponent,
  ButtonModule,
  ButtonType,
  PREMIUM_UNLIMITED_OPTIONS,
  PremiumUnlimitedPlan,
  SharedModule,
  SubscriptionStatus,
  SubscriptionTier,
  SubscriptionType
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/constants/features.constant.ts
var CANCEL_CHECK_ICONS = {
  limitedIcon: "cancel",
  unlimitedIcon: "check_circle"
};
var CHECK_ICONS = {
  limitedIcon: "check_circle",
  unlimitedIcon: "check_circle"
};
var createFeature = ({ title, limitedText, unlimitedText, limitedIcon, unlimitedIcon, toolTip }) => __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
  title: typeof title === "string" ? { desktop: title, mobile: title } : title
}, limitedText && {
  limitedText: typeof limitedText === "string" ? { desktop: limitedText, mobile: limitedText } : limitedText
}), unlimitedText && {
  unlimitedText: typeof unlimitedText === "string" ? { desktop: unlimitedText, mobile: unlimitedText } : unlimitedText
}), limitedIcon && { limitedIcon }), unlimitedIcon && { unlimitedIcon }), {
  toolTip,
  hovered: false
});
var Features = [
  createFeature({
    title: { desktop: "Total Active Properties", mobile: "Active Properties" },
    limitedText: "2",
    unlimitedText: "Unlimited",
    toolTip: "Ads that are currently live"
  }),
  createFeature({
    title: "Featured Listings",
    limitedText: "0",
    unlimitedText: "5",
    toolTip: "Ad listings that stay on top for more visibility"
  }),
  createFeature({
    title: "Property Enquiries",
    limitedText: "Unlimited",
    unlimitedText: "Unlimited",
    toolTip: "Enquiries from the people interested in rental and sale properties"
  }),
  createFeature(__spreadProps(__spreadValues({
    title: "Seller Leads"
  }, CANCEL_CHECK_ICONS), {
    unlimitedText: { desktop: "10 Seller Leads monthly ", mobile: "10 monthly" },
    toolTip: "Gain access to seller leads with full details (Name, Email, Phone, Address & Property specifics)"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: { desktop: "In-Person Valuation Seller Leads", mobile: "In-Person Valuation" }
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Potential sellers interested in an in-person valuation of their properties."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Landlord Rental Leads"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Landlords looking to find out their property\u2019s rental value and potentially seeking tenants."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Commercial Lease Leads"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Businesses actively searching for office spaces to rent."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Commercial Buyer Leads"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Businesses actively searching for office spaces to buy."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Hot Leads"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "These are people who selected an in-person valuation, indicating strong selling intent."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Bonus Leads"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Additional leads distributed to agents based on the availability"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Lead Replacement"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Invalid leads reported upon unlocking will have tokens replaced if verified to have incorrect phone number (e.g. phone number doesn't exist)"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Lead Alerts"
  }, CHECK_ICONS), {
    toolTip: "Get instant notification about new seller leads to increase your chances for a successful sale."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Dedicated Marketing"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Promote your estate agency, and properties you are advertising on channels such as Social media, email, and other."
  })),
  createFeature(__spreadProps(__spreadValues({
    title: { desktop: "Account Managed by FindQo.ie Team", mobile: "Managed Account" }
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Dedicated support to help agents manage their accounts effectively"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Ad Migration"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Manages the entire process of uploading Agents ad listings"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "CRM Integration"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Free integration with CRM to manage and track Agent Ad Listings"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Website Integration"
  }, CANCEL_CHECK_ICONS), {
    toolTip: "Upon request, the properties you display on FindQo will be shown on your official website"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Performance Reports"
  }, CHECK_ICONS), {
    toolTip: "Monthly summary of your performance on the website"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: { desktop: "Scheduling Property Viewing", mobile: "Viewing Scheduler" }
  }, CHECK_ICONS), {
    toolTip: "Simplifies the scheduling and management of property viewings"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Branding Options"
  }, CHECK_ICONS), {
    toolTip: "Customisations and assistance to curate your brand appearance internally on FindQo.ie"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Follow-Up Reminders"
  }, CHECK_ICONS), {
    toolTip: "Email reminders regarding potential enquirers and subscription recurrence"
  })),
  createFeature(__spreadProps(__spreadValues({
    title: "Agent Hub"
  }, CHECK_ICONS), {
    toolTip: "A unified admin page for Agents needs"
  })),
  createFeature({
    title: "Advanced Support",
    limitedText: { desktop: "Limited Support", mobile: "Limited" },
    unlimitedText: { desktop: "Full Priority Support", mobile: "Full Priority" },
    toolTip: "Multi-channel support for quick and reliable assistance when needed"
  })
];

// apps/findqo-ireland/src/app/feature/pricing/component/pricing-list/pricing-list.component.ts
function PricingListComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " for ");
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.headerTitle);
  }
}
function PricingListComponent_findqo_button_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-button", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("label", "Current Plan")("isDisabled", true)("btnClass", "text-body-regular");
  }
}
function PricingListComponent_findqo_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 47);
    \u0275\u0275listener("clicked", function PricingListComponent_findqo_button_49_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPlanClick());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r0.isSubscriptionUpgradable ? "Upgrade" : "Current Plan")("isDisabled", ctx_r0.isLoading || !ctx_r0.isSubscriptionUpgradable)("btnClass", "text-body-regular");
  }
}
function PricingListComponent_tr_51_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275listener("mouseenter", function PricingListComponent_tr_51_mat_icon_5_Template_mat_icon_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r3);
      const feature_r4 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(feature_r4.hovered = true);
    })("mouseleave", function PricingListComponent_tr_51_mat_icon_5_Template_mat_icon_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const feature_r4 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(feature_r4.hovered = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", feature_r4.toolTip)("ngClass", "fg-general-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r4.hovered ? "info" : "info_outline", " ");
  }
}
function PricingListComponent_tr_51_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", feature_r4.limitedIcon === "check_circle" ? "fg-success-3" : "fg-error-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r4.limitedIcon, " ");
  }
}
function PricingListComponent_tr_51_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r4.limitedText.desktop);
  }
}
function PricingListComponent_tr_51_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", feature_r4.unlimitedIcon === "check_circle" ? "fg-success-3" : "fg-error-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r4.unlimitedIcon, " ");
  }
}
function PricingListComponent_tr_51_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", feature_r4.unlimitedIcon && feature_r4.unlimitedText ? "text-caption-regular fg-prim-2" : "text-body-regular");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r4.unlimitedText.desktop, " ");
  }
}
function PricingListComponent_tr_51_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, PricingListComponent_tr_51_div_13_span_1_Template, 2, 2, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r4.unlimitedText);
  }
}
function PricingListComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 48)(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PricingListComponent_tr_51_mat_icon_5_Template, 2, 3, "mat-icon", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 50)(7, "div", 51);
    \u0275\u0275template(8, PricingListComponent_tr_51_mat_icon_8_Template, 2, 2, "mat-icon", 52)(9, PricingListComponent_tr_51_span_9_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 50)(11, "div", 54);
    \u0275\u0275template(12, PricingListComponent_tr_51_mat_icon_12_Template, 2, 2, "mat-icon", 52)(13, PricingListComponent_tr_51_div_13_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r4.title.desktop);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r4.toolTip);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", feature_r4.limitedIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r4.limitedText);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", feature_r4.unlimitedIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r4.unlimitedText);
  }
}
function PricingListComponent_findqo_button_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-button", 46);
  }
  if (rf & 2) {
    \u0275\u0275property("label", "Current Plan")("isDisabled", true)("btnClass", "text-caption-2-regular px-2");
  }
}
function PricingListComponent_findqo_button_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 47);
    \u0275\u0275listener("clicked", function PricingListComponent_findqo_button_89_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPlanClick());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", ctx_r0.isSubscriptionUpgradable ? "Upgrade" : "Current Plan")("isDisabled", ctx_r0.isLoading || !ctx_r0.isSubscriptionUpgradable)("btnClass", "text-caption-2-regular px-2 flex-wrap");
  }
}
function PricingListComponent_tr_91_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 64, 0);
    \u0275\u0275listener("mouseleave", function PricingListComponent_tr_91_mat_icon_5_Template_mat_icon_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const feature_r7 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(feature_r7.hovered = false);
    })("click", function PricingListComponent_tr_91_mat_icon_5_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const tooltip_r8 = \u0275\u0275reference(1);
      const feature_r7 = \u0275\u0275nextContext().$implicit;
      feature_r7.hovered = !feature_r7.hovered;
      return \u0275\u0275resetView(tooltip_r8.toggle());
    })("scroll", function PricingListComponent_tr_91_mat_icon_5_Template_mat_icon_scroll_0_listener() {
      \u0275\u0275restoreView(_r6);
      const tooltip_r8 = \u0275\u0275reference(1);
      const feature_r7 = \u0275\u0275nextContext().$implicit;
      tooltip_r8.hide();
      return \u0275\u0275resetView(feature_r7.hovered = false);
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", feature_r7.toolTip)("ngClass", "fg-general-3");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r7.hovered ? "info" : "info_outline", " ");
  }
}
function PricingListComponent_tr_91_mat_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", feature_r7.limitedIcon === "check_circle" ? "fg-success-3" : "fg-error-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r7.limitedIcon, " ");
  }
}
function PricingListComponent_tr_91_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r7.limitedText.mobile);
  }
}
function PricingListComponent_tr_91_Conditional_12_mat_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", feature_r7.unlimitedIcon === "check_circle" ? "fg-success-3" : "fg-error-3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r7.unlimitedIcon, " ");
  }
}
function PricingListComponent_tr_91_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PricingListComponent_tr_91_Conditional_12_mat_icon_0_Template, 2, 2, "mat-icon", 61);
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", feature_r7.unlimitedIcon);
  }
}
function PricingListComponent_tr_91_Conditional_13_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", feature_r7.unlimitedIcon && feature_r7.unlimitedText ? "text-caption-2-regular fg-prim-2" : "text-caption-2-regular");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r7.unlimitedText.mobile, " ");
  }
}
function PricingListComponent_tr_91_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PricingListComponent_tr_91_Conditional_13_span_0_Template, 2, 2, "span", 52);
  }
  if (rf & 2) {
    const feature_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", feature_r7.unlimitedText);
  }
}
function PricingListComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 58)(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PricingListComponent_tr_91_mat_icon_5_Template, 3, 3, "mat-icon", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 50)(7, "div", 51);
    \u0275\u0275template(8, PricingListComponent_tr_91_mat_icon_8_Template, 2, 2, "mat-icon", 61)(9, PricingListComponent_tr_91_span_9_Template, 2, 1, "span", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 50)(11, "div", 54);
    \u0275\u0275template(12, PricingListComponent_tr_91_Conditional_12_Template, 1, 1, "mat-icon", 63)(13, PricingListComponent_tr_91_Conditional_13_Template, 1, 1, "span", 57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r7.title.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r7.toolTip);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", feature_r7.limitedIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r7.limitedText);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(feature_r7.unlimitedIcon ? 12 : 13);
  }
}
var PricingListComponent = class _PricingListComponent {
  constructor() {
    this.planClicked = new EventEmitter();
    this.paymentPlanToggled = new EventEmitter();
    this.paymentPlan = signal(PremiumUnlimitedPlan.MONTHLY);
    this.isHovered = false;
    this.paymentPlans = [PremiumUnlimitedPlan.MONTHLY, PremiumUnlimitedPlan.YEARLY];
    this.paymentOptions = PREMIUM_UNLIMITED_OPTIONS;
    this.buttonType = ButtonType;
    this.subscriptionTier = SubscriptionTier;
    this.subscriptionStatus = SubscriptionStatus;
    this.subscriptionType = SubscriptionType;
    this.premiumUnlimitedPlan = PremiumUnlimitedPlan;
    this.featuresList = Features;
  }
  get isTrial() {
    return this.subscriptionInfo?.subscriptionType === this.subscriptionType.TRIAL;
  }
  get isActive() {
    return this.subscriptionInfo?.status === this.subscriptionStatus.ACTIVE;
  }
  get isCurrentPlan() {
    const planTierRef = this.subscriptionInfo?.planTier?.reference;
    return this.paymentPlan().valueOf() === this.premiumUnlimitedPlan.YEARLY && planTierRef === this.subscriptionTier.PREMIUM_UNLIMITED_YEARLY || this.paymentPlan().valueOf() === this.premiumUnlimitedPlan.MONTHLY && planTierRef === this.subscriptionTier.PREMIUM_UNLIMITED;
  }
  get isSubscriptionUpgradable() {
    return this.isTrial || !this.isActive || !this.isCurrentPlan;
  }
  onTogglePaymentPlan() {
    this.paymentPlan.set(this.paymentPlan() === PremiumUnlimitedPlan.MONTHLY ? PremiumUnlimitedPlan.YEARLY : PremiumUnlimitedPlan.MONTHLY);
    this.paymentPlanToggled.emit(this.paymentPlan());
  }
  onPlanClick() {
    this.planClicked.emit();
  }
  static {
    this.\u0275fac = function PricingListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingListComponent, selectors: [["findqo-pricing-list"]], inputs: { subscriptionInfo: "subscriptionInfo", isPrivatePage: "isPrivatePage", isLoading: "isLoading", headerTitle: "headerTitle" }, outputs: { planClicked: "planClicked", paymentPlanToggled: "paymentPlanToggled" }, standalone: false, decls: 92, vars: 17, consts: [["tooltip", "matTooltip"], ["id", "pricingList"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "heading-3", "mb-1", "fg-general-5", "d-none", "d-md-table"], [4, "ngIf"], [1, "heading-4", "mb-1", "fg-general-5", "d-md-none"], [1, "d-flex", "align-items-center", "gap-2"], ["leftLabel", "Yearly", "rightLabel", "Monthly", 3, "toggled", "checked"], [1, "w-100", "mt-4", "d-none", "d-md-table"], [1, "heading-4-medium", "fg-general-5"], [1, "d-flex", "flex-column", "gap-2", "mt-2"], [1, "heading-4-medium"], [1, "text-caption-regular", "fg-general-4"], [1, "fg-general-5", "text-center", "align-top"], [1, "d-flex", "flex-column", "gap-2", "mt-3"], [1, "heading-4-medium", "fg-prim-2"], [1, "d-flex", "flex-column"], [1, "text-body-regular"], [1, "heading-3"], [1, "text-caption-regular", "fg-general-3"], [3, "label", "isDisabled", "btnClass", 4, "ngIf"], [1, "fg-general-5", "text-center", "position-relative", "align-top"], [1, "bg-prim-2", "px-2", "py-1", "rounded-4", "fg-basic-1", "text-small-sm-10px-regular", "position-absolute", "translate-middle-x", 2, "top", "-13px", "z-index", "1"], [1, "d-flex", "flex-column", "gap-1"], [1, "heading-1", "fw-400"], [1, "line-through", "text-caption-regular"], [1, "text-caption-regular", "fg-general-5"], [1, "fg-general-5", "heading-2"], [1, "text-caption-regular", "fg-general-4", "vat-description"], [3, "label", "isDisabled", "btnClass", "clicked", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "overflow-x-auto"], [1, "w-100", "mt-4", "d-md-none"], [1, "fg-general-5"], [1, "text-caption-regular"], [1, "text-caption-2-regular", "fg-general-4"], [1, "d-flex", "flex-column", "gap-1", "mt-2"], [1, "text-caption-2-regular", "fg-prim-2"], [1, "text-caption-2-regular", "fg-general-5"], [1, "heading-4", "fg-general-5"], [1, "text-caption-2-regular", "fg-general-3"], [1, "bg-prim-2", "px-2", "py-1", "rounded-4", "fg-basic-1", "text-caption-2-regular", "position-absolute", "translate-middle-x", 2, "top", "-13px", "z-index", "1", "white-space", "nowrap"], [1, "d-flex", "flex-column", "gap-1", 2, "white-space", "nowrap"], [1, "heading-3", "fg-general-5"], [1, "text-caption-2-regular", "fg-general-4", "vat-description", "fs-8px"], [1, "bg-prim-2", "fg-basic-1"], [3, "label", "isDisabled", "btnClass"], [3, "clicked", "label", "isDisabled", "btnClass"], [1, "d-flex", "gap-1", "align-items-center"], ["matTooltipClass", "plan-hint", "class", "ms-2 fs-12px", 3, "matTooltip", "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "text-center", "align-middle"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center"], [3, "ngClass", 4, "ngIf"], ["class", "text-body-regular", 4, "ngIf"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-2"], ["class", "d-flex flex-column justify-content-center align-items-center", 4, "ngIf"], ["matTooltipClass", "plan-hint", 1, "ms-2", "fs-12px", 3, "mouseenter", "mouseleave", "matTooltip", "ngClass"], [3, "ngClass"], [1, "d-flex", "gap-1", "align-items-center", "no-wrap"], [1, "text-caption-2-regular"], ["matTooltipClass", "plan-hint", "class", "fs-12px w-12px", "onkeypress", "feature.hovered = !feature.hovered; tooltip.toggle()", 3, "matTooltip", "ngClass", "mouseleave", "click", "scroll", 4, "ngIf"], ["class", "ms-2 fs-16px", 3, "ngClass", 4, "ngIf"], ["class", "text-caption-2-regular", 4, "ngIf"], [1, "ms-2", "fs-16px", 3, "ngClass"], ["matTooltipClass", "plan-hint", "onkeypress", "feature.hovered = !feature.hovered; tooltip.toggle()", 1, "fs-12px", "w-12px", 3, "mouseleave", "click", "scroll", "matTooltip", "ngClass"]], template: function PricingListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "div", 2)(3, "div")(4, "h3", 3);
        \u0275\u0275text(5, " Pricing Plan ");
        \u0275\u0275template(6, PricingListComponent_span_6_Template, 4, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h4", 5);
        \u0275\u0275text(8, "Pricing Plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "findqo-toggle", 7);
        \u0275\u0275listener("toggled", function PricingListComponent_Template_findqo_toggle_toggled_10_listener() {
          return ctx.onTogglePaymentPlan();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "table", 8)(12, "thead")(13, "tr")(14, "th", 9)(15, "div", 10)(16, "span", 11);
        \u0275\u0275text(17, "Subscription Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "Choose the right plan for your agency");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "th", 13)(21, "div", 14)(22, "span", 15);
        \u0275\u0275text(23, "Limited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16)(25, "p")(26, "sup", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 18);
        \u0275\u0275text(29, "0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "span", 19);
        \u0275\u0275text(31, "1 Year Free");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, PricingListComponent_findqo_button_32_Template, 1, 3, "findqo-button", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "th", 21)(34, "span", 22);
        \u0275\u0275text(35, " Most Popular ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 14)(37, "span", 15);
        \u0275\u0275text(38, "Premium Unlimited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 23)(40, "p", 24)(41, "sub", 25);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "sup", 26);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 27);
        \u0275\u0275text(46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "sup", 28);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(49, PricingListComponent_findqo_button_49_Template, 1, 3, "findqo-button", 29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275template(51, PricingListComponent_tr_51_Template, 14, 6, "tr", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 31)(53, "table", 32)(54, "thead")(55, "tr")(56, "th", 33)(57, "div", 10)(58, "span", 34);
        \u0275\u0275text(59, "Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 35);
        \u0275\u0275text(61, "Choose the right plan");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "th", 13)(63, "div", 36)(64, "span", 37);
        \u0275\u0275text(65, "Limited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 16)(67, "p")(68, "sup", 38);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "span", 39);
        \u0275\u0275text(71, "0");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "span", 40);
        \u0275\u0275text(73, "1 Year Free");
        \u0275\u0275elementEnd();
        \u0275\u0275template(74, PricingListComponent_findqo_button_74_Template, 1, 3, "findqo-button", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "th", 21)(76, "span", 41);
        \u0275\u0275text(77, " Most Popular ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 10)(79, "span", 37);
        \u0275\u0275text(80, "Premium Unlimited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 42)(82, "p")(83, "sup", 38);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "span", 43);
        \u0275\u0275text(86);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "sup", 44);
        \u0275\u0275text(88);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(89, PricingListComponent_findqo_button_89_Template, 1, 3, "findqo-button", 29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "tbody");
        \u0275\u0275template(91, PricingListComponent_tr_91_Template, 14, 5, "tr", 30);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.headerTitle);
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.paymentPlan() === "monthly");
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].currency);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.isPrivatePage && (ctx.subscriptionInfo == null ? null : ctx.subscriptionInfo.planTier.reference) === ctx.subscriptionTier.LIMITED_YEARLY);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.paymentOptions[ctx.paymentPlan().valueOf()].currency + ctx.paymentOptions[ctx.paymentPlan().valueOf()].originalPrice, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].currency);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].offerPrice);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].vatDescription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPrivatePage && (ctx.isTrial || !(ctx.isActive && ctx.paymentPlan().valueOf() === ctx.premiumUnlimitedPlan.MONTHLY && (ctx.subscriptionInfo == null ? null : ctx.subscriptionInfo.planTier == null ? null : ctx.subscriptionInfo.planTier.reference) === ctx.subscriptionTier.PREMIUM_UNLIMITED_YEARLY || ctx.isActive && ctx.paymentPlan().valueOf() === ctx.premiumUnlimitedPlan.YEARLY && (ctx.subscriptionInfo == null ? null : ctx.subscriptionInfo.planTier == null ? null : ctx.subscriptionInfo.planTier.reference) === ctx.subscriptionTier.PREMIUM_UNLIMITED)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.featuresList);
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].currency);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.isPrivatePage && (ctx.subscriptionInfo == null ? null : ctx.subscriptionInfo.planTier.reference) === ctx.subscriptionTier.LIMITED_YEARLY);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].currency);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].offerPrice);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.paymentOptions[ctx.paymentPlan().valueOf()].vatDescription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPrivatePage && (ctx.isTrial || !(ctx.isActive && ctx.paymentPlan().valueOf() === ctx.premiumUnlimitedPlan.MONTHLY && (ctx.subscriptionInfo == null ? null : ctx.subscriptionInfo.planTier == null ? null : ctx.subscriptionInfo.planTier.reference) === ctx.subscriptionTier.PREMIUM_UNLIMITED_YEARLY || ctx.isActive && ctx.paymentPlan().valueOf() === ctx.premiumUnlimitedPlan.YEARLY && (ctx.subscriptionInfo == null ? null : ctx.subscriptionInfo.planTier == null ? null : ctx.subscriptionInfo.planTier.reference) === ctx.subscriptionTier.PREMIUM_UNLIMITED)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.featuresList);
      }
    }, dependencies: [ToggleComponent, NgClass, NgForOf, NgIf, MatIcon, ButtonComponent, MatTooltip], styles: ["\n\ntable[_ngcontent-%COMP%] {\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--neutral-2) !important;\n  border-bottom: 1px solid var(--neutral-2) !important;\n  border-left: none !important;\n  border-right: none !important;\n  padding: 8px 8px 8px 8px !important;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid var(--neutral-2) !important;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid var(--neutral-2) !important;\n}\ntable[_ngcontent-%COMP%]   th.subscription-offers[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td.subscription-offers[_ngcontent-%COMP%] {\n  max-width: 638px;\n  word-wrap: break-word;\n}\ntable[_ngcontent-%COMP%]   td.subscription-offers[_ngcontent-%COMP%]    > findqo-subscription-offers[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 180px;\n}\nsub.line-through[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  font-size: 10px;\n  line-height: 14px;\n  color: var(--general-4);\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.7em;\n}\nsup.vat-description[_ngcontent-%COMP%] {\n  top: -1.5em;\n}\n.flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.no-wrap[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\n.w-12px[_ngcontent-%COMP%] {\n  width: 12px;\n}\n.fs-8px[_ngcontent-%COMP%] {\n  font-size: 8px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pricing-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingListComponent, [{
    type: Component,
    args: [{ selector: "findqo-pricing-list", standalone: false, template: `<div id="pricingList">
	<div>
		<div class="d-flex align-items-center justify-content-between">
			<div>
				<h3 class="heading-3 mb-1 fg-general-5 d-none d-md-table">
					Pricing Plan
					<span *ngIf="headerTitle">
						for
						<span class="bg-prim-2 fg-basic-1">{{ headerTitle }}</span>
					</span>
				</h3>
				<h4 class="heading-4 mb-1 fg-general-5 d-md-none">Pricing Plan</h4>
			</div>

			<!-- Yearly and Monthly payment options -->
			<div class="d-flex align-items-center gap-2">
				<findqo-toggle leftLabel="Yearly" rightLabel="Monthly" [checked]="paymentPlan() === 'monthly'"
					(toggled)="onTogglePaymentPlan()"></findqo-toggle>
			</div>
		</div>

		<!-- Desktop view start -->

		<table class="w-100 mt-4 d-none d-md-table">
			<thead>
				<tr>
					<th class="heading-4-medium fg-general-5">
						<div class="d-flex flex-column gap-2 mt-2">
							<span class="heading-4-medium">Subscription Features</span>
							<span class="text-caption-regular fg-general-4">Choose the right plan for your agency</span>
						</div>
					</th>
					<th class="fg-general-5 text-center align-top">
						<div class="d-flex flex-column gap-2 mt-3">
							<span class="heading-4-medium fg-prim-2">Limited</span>

							<div class="d-flex flex-column">
								<p>
									<sup class="text-body-regular">{{ paymentOptions[paymentPlan().valueOf()].currency }}</sup>
									<span class="heading-3">0</span>
								</p>

								<span class="text-caption-regular fg-general-3">1 Year Free</span>

								<findqo-button
									*ngIf="isPrivatePage && subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY"
									[label]="'Current Plan'" [isDisabled]="true" [btnClass]="'text-body-regular'" />
							</div>
						</div>
					</th>
					<th class="fg-general-5 text-center position-relative align-top">
						<span
							class="bg-prim-2 px-2 py-1 rounded-4 fg-basic-1 text-small-sm-10px-regular position-absolute translate-middle-x"
							style="top: -13px; z-index: 1">
							Most Popular
						</span>
						<div class="d-flex flex-column gap-2 mt-3">
							<span class="heading-4-medium fg-prim-2">Premium Unlimited</span>

							<div class="d-flex flex-column gap-1">
								<p class="heading-1 fw-400">
									<sub class="line-through text-caption-regular">
										{{ paymentOptions[paymentPlan().valueOf()].currency +
										paymentOptions[paymentPlan().valueOf()].originalPrice }}
									</sub>
									<sup class="text-caption-regular fg-general-5">{{ paymentOptions[paymentPlan().valueOf()].currency
										}}</sup>
									<span class="fg-general-5 heading-2">{{ paymentOptions[paymentPlan().valueOf()].offerPrice }}</span>
									<sup class="text-caption-regular fg-general-4 vat-description">{{
										paymentOptions[paymentPlan().valueOf()].vatDescription }}</sup>
								</p>
							</div>

							<findqo-button *ngIf="
									isPrivatePage &&
									(isTrial ||
										!(
											(isActive &&
												paymentPlan().valueOf() === premiumUnlimitedPlan.MONTHLY &&
												subscriptionInfo?.planTier?.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY) ||
											(isActive &&
												paymentPlan().valueOf() === premiumUnlimitedPlan.YEARLY &&
												subscriptionInfo?.planTier?.reference === subscriptionTier.PREMIUM_UNLIMITED)
										))
								" [label]="isSubscriptionUpgradable ? 'Upgrade' : 'Current Plan'"
								[isDisabled]="isLoading || !isSubscriptionUpgradable" (clicked)="onPlanClick()"
								[btnClass]="'text-body-regular'" />
						</div>
					</th>
				</tr>
			</thead>

			<tbody>
				<tr *ngFor="let feature of featuresList">
					<td>
						<div class="d-flex gap-1 align-items-center">
							<span class="text-body-regular">{{ feature.title.desktop }}</span>
							<mat-icon *ngIf="feature.toolTip" matTooltipClass="plan-hint" [matTooltip]="feature.toolTip"
								[ngClass]="'fg-general-3'" class="ms-2 fs-12px" (mouseenter)="feature.hovered = true"
								(mouseleave)="feature.hovered = false">
								{{ feature.hovered ? 'info' : 'info_outline' }}
							</mat-icon>
						</div>
					</td>

					<td class="text-center align-middle">
						<div class="d-flex flex-column justify-content-center align-items-center">
							<mat-icon *ngIf="feature.limitedIcon"
								[ngClass]="feature.limitedIcon === 'check_circle' ? 'fg-success-3' : 'fg-error-3'">
								{{ feature.limitedIcon }}
							</mat-icon>
							<span class="text-body-regular" *ngIf="feature.limitedText">{{ feature.limitedText.desktop }}</span>
						</div>
					</td>

					<td class="text-center align-middle">
						<div class="d-flex flex-column justify-content-center align-items-center gap-2">
							<mat-icon *ngIf="feature.unlimitedIcon"
								[ngClass]="feature.unlimitedIcon === 'check_circle' ? 'fg-success-3' : 'fg-error-3'">
								{{ feature.unlimitedIcon }}
							</mat-icon>
							<div *ngIf="feature.unlimitedText" class="d-flex flex-column justify-content-center align-items-center">
								<span
									[ngClass]="feature.unlimitedIcon && feature.unlimitedText ? 'text-caption-regular fg-prim-2' : 'text-body-regular'"
									*ngIf="feature.unlimitedText">
									{{ feature.unlimitedText.desktop }}
								</span>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- Desktop view end -->

		<!-- Mobile view start -->
		<div class="overflow-x-auto">
			<table class="w-100 mt-4 d-md-none">
				<thead>
					<tr>
						<th class="fg-general-5">
							<div class="d-flex flex-column gap-2 mt-2">
								<span class="text-caption-regular">Features</span>
								<span class="text-caption-2-regular fg-general-4">Choose the right plan</span>
							</div>
						</th>
						<th class="fg-general-5 text-center align-top">
							<div class="d-flex flex-column gap-1 mt-2">
								<span class="text-caption-2-regular fg-prim-2">Limited</span>

								<div class="d-flex flex-column">
									<p>
										<sup class="text-caption-2-regular fg-general-5">{{ paymentOptions[paymentPlan().valueOf()].currency
											}}</sup>
										<span class="heading-4 fg-general-5">0</span>
									</p>

									<span class="text-caption-2-regular fg-general-3">1 Year Free</span>

									<findqo-button
										*ngIf="isPrivatePage && subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY"
										[label]="'Current Plan'" [isDisabled]="true" [btnClass]="'text-caption-2-regular px-2'" />
								</div>
							</div>
						</th>
						<th class="fg-general-5 text-center position-relative align-top">
							<span
								class="bg-prim-2 px-2 py-1 rounded-4 fg-basic-1 text-caption-2-regular position-absolute translate-middle-x"
								style="top: -13px; z-index: 1; white-space: nowrap">
								Most Popular
							</span>
							<div class="d-flex flex-column gap-2 mt-2">
								<span class="text-caption-2-regular fg-prim-2">Premium Unlimited</span>

								<div class="d-flex flex-column gap-1" style="white-space: nowrap">
									<p>
										<sup class="text-caption-2-regular fg-general-5">{{ paymentOptions[paymentPlan().valueOf()].currency
											}}</sup>
										<span class="heading-3 fg-general-5">{{ paymentOptions[paymentPlan().valueOf()].offerPrice }}</span>
										<sup class="text-caption-2-regular fg-general-4 vat-description fs-8px">{{
											paymentOptions[paymentPlan().valueOf()].vatDescription }}</sup>
									</p>
								</div>

								<findqo-button *ngIf="
									isPrivatePage &&
									(isTrial ||
										!(
											(isActive &&
												paymentPlan().valueOf() === premiumUnlimitedPlan.MONTHLY &&
												subscriptionInfo?.planTier?.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY) ||
											(isActive &&
												paymentPlan().valueOf() === premiumUnlimitedPlan.YEARLY &&
												subscriptionInfo?.planTier?.reference === subscriptionTier.PREMIUM_UNLIMITED)
										))
								" [label]="isSubscriptionUpgradable ? 'Upgrade' : 'Current Plan'"
									[isDisabled]="isLoading || !isSubscriptionUpgradable" (clicked)="onPlanClick()"
									[btnClass]="'text-caption-2-regular px-2 flex-wrap'" />
							</div>
						</th>
					</tr>
				</thead>

				<tbody>
					<tr *ngFor="let feature of featuresList">
						<td>
							<div class="d-flex gap-1 align-items-center no-wrap">
								<span class="text-caption-2-regular">{{ feature.title.mobile }}</span>
								<mat-icon *ngIf="feature.toolTip" matTooltipClass="plan-hint" [matTooltip]="feature.toolTip"
									[ngClass]="'fg-general-3'" class="fs-12px w-12px" #tooltip="matTooltip"
									(mouseleave)="feature.hovered = false" (click)="feature.hovered = !feature.hovered; tooltip.toggle()"
									(window:scroll)="tooltip.hide(); feature.hovered = false"
									onkeypress="feature.hovered = !feature.hovered; tooltip.toggle()">
									{{ feature.hovered ? 'info' : 'info_outline' }}
								</mat-icon>
							</div>
						</td>

						<td class="text-center align-middle">
							<div class="d-flex flex-column justify-content-center align-items-center">
								<mat-icon class="ms-2 fs-16px" *ngIf="feature.limitedIcon"
									[ngClass]="feature.limitedIcon === 'check_circle' ? 'fg-success-3' : 'fg-error-3'">
									{{ feature.limitedIcon }}
								</mat-icon>
								<span class="text-caption-2-regular" *ngIf="feature.limitedText">{{ feature.limitedText.mobile }}</span>
							</div>
						</td>

						<td class="text-center align-middle">
							<div class="d-flex flex-column justify-content-center align-items-center gap-2">
								@if (feature.unlimitedIcon) {
								<mat-icon class="ms-2 fs-16px" *ngIf="feature.unlimitedIcon"
									[ngClass]="feature.unlimitedIcon === 'check_circle' ? 'fg-success-3' : 'fg-error-3'">
									{{ feature.unlimitedIcon }}
								</mat-icon>
								} @else {
								<span
									[ngClass]="feature.unlimitedIcon && feature.unlimitedText ? 'text-caption-2-regular fg-prim-2' : 'text-caption-2-regular'"
									*ngIf="feature.unlimitedText">
									{{ feature.unlimitedText.mobile }}
								</span>
								}
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- Mobile view end -->
	</div>
</div>`, styles: ["/* apps/findqo-ireland/src/app/feature/pricing/component/pricing-list/pricing-list.component.scss */\ntable {\n}\ntable td,\ntable th {\n  border-top: 1px solid var(--neutral-2) !important;\n  border-bottom: 1px solid var(--neutral-2) !important;\n  border-left: none !important;\n  border-right: none !important;\n  padding: 8px 8px 8px 8px !important;\n}\ntable td:first-child,\ntable th:first-child {\n  border-left: 1px solid var(--neutral-2) !important;\n}\ntable td:last-child,\ntable th:last-child {\n  border-right: 1px solid var(--neutral-2) !important;\n}\ntable th.subscription-offers,\ntable td.subscription-offers {\n  max-width: 638px;\n  word-wrap: break-word;\n}\ntable td.subscription-offers > findqo-subscription-offers {\n  display: block;\n  margin-right: 180px;\n}\nsub.line-through {\n  text-decoration: line-through;\n  font-size: 10px;\n  line-height: 14px;\n  color: var(--general-4);\n}\nsup {\n  top: -0.7em;\n}\nsup.vat-description {\n  top: -1.5em;\n}\n.flex-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.no-wrap {\n  white-space: nowrap !important;\n}\n.w-12px {\n  width: 12px;\n}\n.fs-8px {\n  font-size: 8px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pricing-list.component.css.map */\n"] }]
  }], null, { planClicked: [{
    type: Output
  }], paymentPlanToggled: [{
    type: Output
  }], subscriptionInfo: [{
    type: Input
  }], isPrivatePage: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], headerTitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingListComponent, { className: "PricingListComponent", filePath: "apps/findqo-ireland/src/app/feature/pricing/component/pricing-list/pricing-list.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/pricing/component/pricing-list/pricing-list.module.ts
var PricingListModule = class _PricingListModule {
  static {
    this.\u0275fac = function PricingListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PricingListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, SubscriptionButtonComponent, MatTooltipModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingListModule, [{
    type: NgModule,
    args: [{
      declarations: [PricingListComponent],
      imports: [ToggleComponent, SharedModule, ButtonModule, SubscriptionButtonComponent, MatTooltipModule],
      exports: [PricingListComponent]
    }]
  }], null, null);
})();

export {
  PricingListComponent,
  PricingListModule
};
//# sourceMappingURL=chunk-76XBNLIX.js.map
