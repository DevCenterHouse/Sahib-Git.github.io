import {
  SubscriptionOffersComponent
} from "./chunk-RG2UJM2Z.js";
import {
  CancelSubscriptionDialogComponent,
  ChangeCardDilaogComponent
} from "./chunk-3KQDGRMW.js";
import "./chunk-LUIRD62T.js";
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-UWPIFTDN.js";
import "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  FormatDatePipe,
  MatButton,
  MatDialog,
  MatDivider,
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListModule,
  MyProfileFacade,
  RouterLink,
  SharedModule,
  SnackService,
  SubscriptionStatus,
  SubscriptionTier,
  SubscriptionType,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/pages/subscription-plan/subscription-plan.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
function SubscriptionPlanComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SubscriptionPlanComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SubscriptionPlanComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    const expiredSubscription_r3 = \u0275\u0275reference(16);
    const activeSubscription_r4 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (vm_r1 == null ? null : vm_r1.status) === ctx_r1.subscriptionStatus.EXPIRED ? expiredSubscription_r3 : activeSubscription_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, vm_r1));
  }
}
function SubscriptionPlanComponent_ng_template_9_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "findqo-button", 21);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function SubscriptionPlanComponent_ng_template_9_div_21_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeCard());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 3, "n3451"))("btnClass", "text-body-regular rounded fg-prim-2  px-0");
  }
}
function SubscriptionPlanComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "div", 13)(6, "mat-icon", 14);
    \u0275\u0275text(7, "credit_card");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 15)(9, "div")(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "formatDate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "mat-icon", 18);
    \u0275\u0275text(18, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 19);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, SubscriptionPlanComponent_ng_template_9_div_21_Template, 3, 5, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subscription_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "n3380"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 8, "n3388"), " ", subscription_r6 == null ? null : subscription_r6.card == null ? null : subscription_r6.card.lastDigit, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Expiry ", \u0275\u0275pipeBind1(15, 10, subscription_r6 == null ? null : subscription_r6.card == null ? null : subscription_r6.card.expiryDate), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(subscription_r6 == null ? null : subscription_r6.billingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canChangeCard);
  }
}
function SubscriptionPlanComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "findqo-subscription-offers");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4041"));
  }
}
function SubscriptionPlanComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "ngx-skeleton-loader", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("theme", theme_r7);
  }
}
function SubscriptionPlanComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SubscriptionPlanComponent_ng_template_13_div_0_Template, 2, 1, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r1.themeList);
  }
}
function SubscriptionPlanComponent_ng_template_15_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 30)(1, "mat-icon", 43);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, item_r8), " ");
  }
}
function SubscriptionPlanComponent_ng_template_15_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4028"));
  }
}
function SubscriptionPlanComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3", 27);
    \u0275\u0275text(2, "You are not subscribed to our agent plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Subscribe to our plan to earn the following benefits.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-list", 29);
    \u0275\u0275repeaterCreate(6, SubscriptionPlanComponent_ng_template_15_For_7_Template, 5, 3, "mat-list-item", 30, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 31)(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-icon", 33);
    \u0275\u0275text(12, "north_east");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "mat-divider", 34);
    \u0275\u0275elementStart(14, "h3", 27);
    \u0275\u0275text(15, "Your Last Subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 35);
    \u0275\u0275text(17, "Subscription name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 36);
    \u0275\u0275text(19);
    \u0275\u0275template(20, SubscriptionPlanComponent_ng_template_15_span_20_Template, 3, 3, "span", 37);
    \u0275\u0275elementStart(21, "span", 38);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p", 39);
    \u0275\u0275text(24, " Your subscription has expired. ");
    \u0275\u0275element(25, "br");
    \u0275\u0275elementStart(26, "span", 40);
    \u0275\u0275text(27, "Purchase Premium Unlimited");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " to continue posting ads. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 41);
    \u0275\u0275text(30, "Last renewal date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 42);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subscription_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.benefitsList);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/" + ctx_r1.appRoute.agentHub.dashboard + "/" + ctx_r1.appRoute.businessProfile.paymentPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("Susbcribe to plan");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", subscription_r9 == null ? null : subscription_r9.planTier == null ? null : subscription_r9.planTier.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subscription_r9.subscriptionType === ctx_r1.subscriptionType.TRIAL);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", subscription_r9 == null ? null : subscription_r9.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subscription_r9.status);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 7, subscription_r9 == null ? null : subscription_r9.dates == null ? null : subscription_r9.dates.nextBilling, "MMMM dd, YYYY"));
  }
}
function SubscriptionPlanComponent_ng_template_17_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4028"));
  }
}
function SubscriptionPlanComponent_ng_template_17_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "n4049"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 7, vm_r11 == null ? null : vm_r11.dates == null ? null : vm_r11.dates.nextBilling, "MMMM dd, yyyy"), ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(7, 10, "n4050"), " \u20AC", +(vm_r11.price == null ? null : vm_r11.price.value) / 100, " ", \u0275\u0275pipeBind1(8, 12, "n4051"), ". ");
  }
}
function SubscriptionPlanComponent_ng_template_17_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, " Your subscription is valid until ");
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 1, vm_r11 == null ? null : vm_r11.dates == null ? null : vm_r11.dates.nextBilling, "MMMM dd, yyyy"), ".");
  }
}
function SubscriptionPlanComponent_ng_template_17_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "n4034"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "n4035"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "n4036"), ". ");
  }
}
function SubscriptionPlanComponent_ng_template_17_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "n4052"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20AC", +(vm_r11.price == null ? null : vm_r11.price.value) / 100, "");
  }
}
function SubscriptionPlanComponent_ng_template_17_h3_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 62);
    \u0275\u0275text(1, " 5 ");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_ng_template_17_h3_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 62);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_ng_template_17_h3_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n4030"), " ");
  }
}
function SubscriptionPlanComponent_ng_template_17_h3_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 62);
    \u0275\u0275text(1, "2");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionPlanComponent_ng_template_17_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 64)(3, "h4", 65);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 64)(10, "button", 67)(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-icon", 33);
    \u0275\u0275text(15, "north_east");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vm_r11.status === ctx_r1.subscriptionStatus.CANCELLED ? "Changed your mind?" : \u0275\u0275pipeBind1(5, 4, "n4037"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "n4038"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/" + ctx_r1.appRoute.agentHub.dashboard + "/" + ctx_r1.appRoute.businessProfile.paymentPlan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "n4039"));
  }
}
function SubscriptionPlanComponent_ng_template_17_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 68);
  }
  if (rf & 2) {
    const vm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const creditCard_r12 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", creditCard_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, vm_r11));
  }
}
function SubscriptionPlanComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275template(8, SubscriptionPlanComponent_ng_template_17_span_8_Template, 3, 3, "span", 37);
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, SubscriptionPlanComponent_ng_template_17_p_11_Template, 9, 14, "p", 46)(12, SubscriptionPlanComponent_ng_template_17_p_12_Template, 5, 4, "p", 46)(13, SubscriptionPlanComponent_ng_template_17_p_13_Template, 9, 9, "p", 46);
    \u0275\u0275elementStart(14, "p", 47);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 48);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SubscriptionPlanComponent_ng_template_17_ng_container_20_Template, 6, 4, "ng-container", 20);
    \u0275\u0275elementStart(21, "p", 49);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 50)(25, "div", 51)(26, "span", 52);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SubscriptionPlanComponent_ng_template_17_h3_29_Template, 2, 0, "h3", 53)(30, SubscriptionPlanComponent_ng_template_17_h3_30_Template, 2, 0, "h3", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 51)(32, "span", 54);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, SubscriptionPlanComponent_ng_template_17_h3_35_Template, 3, 3, "h3", 53)(36, SubscriptionPlanComponent_ng_template_17_h3_36_Template, 2, 0, "h3", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "mat-divider", 55);
    \u0275\u0275template(38, SubscriptionPlanComponent_ng_template_17_ng_container_38_Template, 16, 10, "ng-container", 20)(39, SubscriptionPlanComponent_ng_template_17_ng_container_39_Template, 1, 4, "ng-container", 56);
    \u0275\u0275element(40, "mat-divider", 55);
    \u0275\u0275elementContainer(41, 57);
    \u0275\u0275element(42, "mat-divider", 55);
    \u0275\u0275elementStart(43, "h3", 58);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 59);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 60);
    \u0275\u0275listener("click", function SubscriptionPlanComponent_ng_template_17_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancleSubscription());
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const subscriptionBenefits_r13 = \u0275\u0275reference(12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 26, "n4032"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 28, "n4027"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", vm_r11 == null ? null : vm_r11.planTier == null ? null : vm_r11.planTier.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r11.subscriptionType === ctx_r1.subscriptionType.TRIAL);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", vm_r11 == null ? null : vm_r11.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vm_r11.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r11.subscriptionType === ctx_r1.subscriptionType.PAID && (vm_r11 == null ? null : vm_r11.status) !== ctx_r1.subscriptionStatus.CANCELLED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r11 == null ? null : vm_r11.status) === ctx_r1.subscriptionStatus.CANCELLED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r11.status === ctx_r1.subscriptionStatus.EXPIRING);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (vm_r11 == null ? null : vm_r11.status) === ctx_r1.subscriptionStatus.CANCELLED ? "Valid until" : \u0275\u0275pipeBind1(16, 30, "n4029"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 32, vm_r11 == null ? null : vm_r11.dates == null ? null : vm_r11.dates.nextBilling, "MMMM dd, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r11.subscriptionType === ctx_r1.subscriptionType.PAID);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 35, "n449"), ":");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 37, "n3309"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r11.planTier.reference === ctx_r1.subscriptionTier.PREMIUM_UNLIMITED || vm_r11.planTier.reference === ctx_r1.subscriptionTier.PREMIUM_UNLIMITED_YEARLY);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r11.planTier.reference === ctx_r1.subscriptionTier.LIMITED_YEARLY);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 39, "n815"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r11.planTier.reference === ctx_r1.subscriptionTier.PREMIUM_UNLIMITED || vm_r11.planTier.reference === ctx_r1.subscriptionTier.PREMIUM_UNLIMITED_YEARLY);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r11.planTier.reference === ctx_r1.subscriptionTier.LIMITED_YEARLY);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r11.subscriptionType === ctx_r1.subscriptionType.TRIAL || vm_r11.status === ctx_r1.subscriptionStatus.EXPIRING || vm_r11.status === ctx_r1.subscriptionStatus.CANCELLED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r11.subscriptionType === ctx_r1.subscriptionType.PAID && vm_r11.status !== ctx_r1.subscriptionStatus.CANCELLED);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", subscriptionBenefits_r13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 41, "n4032"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 43, "n4040"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (vm_r11 == null ? null : vm_r11.subscriptionType) !== ctx_r1.subscriptionType.PAID || vm_r11.status === ctx_r1.subscriptionStatus.CANCELLED);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 45, "n3370"), " ");
  }
}
var SubscriptionPlanComponent = class _SubscriptionPlanComponent {
  constructor(snackBarService, dialog, profileFacade, location) {
    this.snackBarService = snackBarService;
    this.dialog = dialog;
    this.profileFacade = profileFacade;
    this.location = location;
    this.canChangeCard = false;
    this.subscriptionTier = SubscriptionTier;
    this.appRoute = APP_ROUTE;
    this.buttonType = ButtonType;
    this.subscriptionStatus = SubscriptionStatus;
    this.subscriptionType = SubscriptionType;
    this.benefitsList = ["n3886", "n3891", "n3892"];
    this.themeList = [
      { border: "4", width: "100%", margin: "0", height: "40px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "40px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "40px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "40px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" }
    ];
  }
  cancleSubscription() {
    this.dialog.open(CancelSubscriptionDialogComponent, {
      disableClose: true,
      maxWidth: "500px",
      width: "95%",
      data: this.profileFacade.getSubscriptionData()
    }).afterClosed().subscribe((res) => {
      if (res.value) {
        this.profileFacade.cancelSubscription(res.value).subscribe(() => {
          this.snackBarService.open({
            data: { message: "Subscription cancelled", type: "success" },
            panelClass: "snackbar-success"
          });
        });
      }
    });
  }
  changeCard() {
    this.dialog.open(ChangeCardDilaogComponent, {
      disableClose: true,
      maxWidth: "500px",
      backdropClass: "inquiry-backdrop"
    });
  }
  ngOnInit() {
    if (!this.profileFacade.getSubscriptionData()) {
      this.profileFacade.getSubscriptionInfo().subscribe();
    }
  }
  static {
    this.\u0275fac = function SubscriptionPlanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionPlanComponent)(\u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionPlanComponent, selectors: [["findqo-subscription-plan"]], decls: 19, vars: 8, consts: [["creditCard", ""], ["subscriptionBenefits", ""], ["skeltonLoader", ""], ["expiredSubscription", ""], ["activeSubscription", ""], [1, "w-100", "h-100", "bg-general-1", "pt-4", "subscription-container"], [1, "container"], ["mat-button", "", 1, "fg-info-3", "text-body-regular", "px-0", "mb-4", 3, "routerLink"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "heading-3", "fg-general-5", "mb-3"], [1, "row", "mx-0", "gap-3", "p-3", "border", "rounded"], [1, "col-auto", "px-0"], [1, "bg-general-1", "rounded-pill", "credit-card-background", "d-flex", "align-items-center", "justify-content-center"], [1, "credit-card-icon", "fg-general-5"], [1, "col", "px-0", "d-flex", "align-items-sm-center", "justify-content-sm-between", "flex-column", "flex-sm-row"], [1, "d-block", "text-body-medium", "fg-general-5"], [1, "d-block", "text-caption-regular", "fg-general-5", "my-1"], [1, "mail-icon", "material-symbols-outlined", "fg-general-5", "me-1", "align-middle"], [1, "text-caption-regular", "fg-general-5", "align-middle"], [4, "ngIf"], [3, "clicked", "btnType", "label", "btnClass"], [1, "heading-3", "fg-general-5"], ["class", "py-0", 4, "ngFor", "ngForOf"], [1, "py-0"], [3, "theme"], [1, "rounded", "bg-neutral-1", "py-4", "px-lg-5", "px-3", "text-center"], [1, "heading-3-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-2"], ["role", "list", 1, "gap-2", "text-start", "p-0", "mt-4"], ["role", "listitem", 1, "text-body-regular", "fg-general-5", "mb-2"], ["mat-flat-button", "", "color", "primary", 1, "align-items-center", "border-0", "plan-benefits-btn", "mx-auto", "mt-4", 3, "routerLink"], [1, "text-body-regular", "text-start", "align-middle"], ["iconPositionEnd", "", 1, "north-east-icon", "align-middle"], [1, "my-3"], [1, "text-body-regular", "fg-general-5", "mt-3"], [1, "text-body-medium", "fg-general-5", "my-1"], ["class", "me-1", 4, "ngIf"], [1, "status-badge", "text-body-regular", "text-capitalize", 3, "ngClass"], [1, "text-body-regular", "fg-general-5"], [1, "text-body-regular", "fg-prim-2"], [1, "text-body-regular", "fg-general-4", "mt-3"], [1, "text-body-medium", "fg-general-5", "mt-1"], ["matListItemIcon", "", 1, "fg-prim-2", "fs-18px", "me-2"], [1, "me-1"], [1, "heading-4", "fg-general-5", "mb-3"], ["class", "text-body-regular fg-general-5", 4, "ngIf"], [1, "text-body-regular", "fg-general-5", "mt-3", "mb-1"], [1, "text-body-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mb-1", "mt-4"], [1, "row", "mx-0", "gap-3"], [1, "col", "p-3", "border-neutral-1", "rounded"], [1, "fg-info-3", "px-2", "bg-info-1", "rounded", "text-subheading-regular"], ["class", "heading-3-medium fg-general-5 mt-3", 4, "ngIf"], [1, "fg-general-4", "px-2", "bg-general-1", "rounded", "text-subheading-regular", "text-uppercase"], [1, "my-4"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "heading-4", "fg-general-5", "mb-2", "mt-4"], [1, "d-block", "text-paragraph-regular", "fg-general-4", "mb-3"], ["mat-button", "", 1, "text-body-regular", "rounded", "border", "fg-general-3", 3, "click", "disabled"], [1, "fg-prim-2"], [1, "heading-3-medium", "fg-general-5", "mt-3"], [1, "row", "gap-2", "align-items-center", "justify-content-sm-between"], [1, "col-auto"], [1, "heading-4-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-1"], ["mat-flat-button", "", "color", "primary", 1, "align-items-center", "border-0", "plan-benefits-btn", 3, "routerLink"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SubscriptionPlanComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "button", 7)(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, SubscriptionPlanComponent_ng_container_7_Template, 2, 4, "ng-container", 8);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, SubscriptionPlanComponent_ng_template_9_Template, 22, 12, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, SubscriptionPlanComponent_ng_template_11_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, SubscriptionPlanComponent_ng_template_13_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, SubscriptionPlanComponent_ng_template_15_Template, 34, 10, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(17, SubscriptionPlanComponent_ng_template_17_Template, 52, 47, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const skeltonLoader_r14 = \u0275\u0275reference(14);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", "/" + ctx.appRoute.agentHub.dashboard + "/" + ctx.appRoute.businessProfile.base);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "n4001"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(8, 6, ctx.profileFacade.getSubscriptionInfo$()))("ngIfElse", skeltonLoader_r14);
      }
    }, dependencies: [SharedModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, MatButton, MatIcon, RouterLink, AsyncPipe, DatePipe, FormatDatePipe, TranslationsPipe, MatListModule, MatList, MatListItem, MatListItemIcon, MatDivider, ButtonModule, ButtonComponent, SubscriptionOffersComponent, NgxSkeletonLoaderModule, NgxSkeletonLoaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  background-color: var(--basic-1);\n  border-radius: 4px;\n  padding: 24px 16px;\n}\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n.border-neutral-1[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-1) !important;\n}\n.plan-benefits-btn[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.north-east-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n}\n.subscription-container[_ngcontent-%COMP%] {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .subscription-container[_ngcontent-%COMP%] {\n    padding-bottom: 24px !important;\n  }\n}\n.credit-card-background[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n.credit-card-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.mail-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  display: inline-block !important;\n  height: 15px;\n}\n.border[_ngcontent-%COMP%] {\n  border-color: var(--neutral-2) !important;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  height: fit-content !important;\n  line-height: 18px;\n  padding: 0;\n}\nmat-list-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background-color: rgba(255, 90, 184, 0.15);\n  width: 20px !important;\n  height: 20px !important;\n  font-size: 14px !important;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-plan.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionPlanComponent, [{
    type: Component,
    args: [{ selector: "findqo-subscription-plan", imports: [SharedModule, MatListModule, ButtonModule, SubscriptionOffersComponent, NgxSkeletonLoaderModule], template: `<div class="w-100 h-100 bg-general-1 pt-4 subscription-container">
	<div class="container">
		<button mat-button class="fg-info-3 text-body-regular px-0 mb-4" [routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.base">
			<mat-icon>arrow_back</mat-icon>
			{{ 'n4001' | translations }}
		</button>

		<ng-container *ngIf="profileFacade.getSubscriptionInfo$() | async as vm; else skeltonLoader">
			<!-- Subscription active template -->
			<ng-container
				*ngTemplateOutlet="vm?.status === subscriptionStatus.EXPIRED ? expiredSubscription : activeSubscription; context: { $implicit: vm }"
			></ng-container>
		</ng-container>
	</div>
</div>

<ng-template #creditCard let-subscription>
	<h3 class="heading-3 fg-general-5 mb-3">{{ 'n3380' | translations }}</h3>

	<div class="row mx-0 gap-3 p-3 border rounded">
		<div class="col-auto px-0">
			<div class="bg-general-1 rounded-pill credit-card-background d-flex align-items-center justify-content-center">
				<mat-icon class="credit-card-icon fg-general-5">credit_card</mat-icon>
			</div>
		</div>

		<div class="col px-0 d-flex align-items-sm-center justify-content-sm-between flex-column flex-sm-row">
			<div>
				<span class="d-block text-body-medium fg-general-5">{{ 'n3388' | translations }} {{ subscription?.card?.lastDigit }}</span>
				<span class="d-block text-caption-regular fg-general-5 my-1">Expiry {{ subscription?.card?.expiryDate | formatDate }}</span>

				<div>
					<mat-icon class="mail-icon material-symbols-outlined fg-general-5 me-1 align-middle">mail</mat-icon>

					<span class="text-caption-regular fg-general-5 align-middle">{{ subscription?.billingEmail }}</span>
				</div>
			</div>

			<div *ngIf="canChangeCard">
				<findqo-button
					[btnType]="buttonType.BASIC"
					[label]="'n3451' | translations"
					[btnClass]="'text-body-regular rounded fg-prim-2  px-0'"
					(clicked)="changeCard()"
				></findqo-button>
			</div>
		</div>
	</div>
</ng-template>

<ng-template #subscriptionBenefits>
	<h3 class="heading-3 fg-general-5">{{ 'n4041' | translations }}</h3>

	<findqo-subscription-offers></findqo-subscription-offers>
</ng-template>

<ng-template #skeltonLoader>
	<div class="py-0" *ngFor="let theme of themeList">
		<ngx-skeleton-loader [theme]="theme"></ngx-skeleton-loader>
	</div>
</ng-template>

<ng-template #expiredSubscription let-subscription>
	<div class="rounded bg-neutral-1 py-4 px-lg-5 px-3 text-center">
		<h3 class="heading-3-medium fg-general-5">You are not subscribed to our agent plan</h3>
		<p class="text-body-regular fg-general-5 mt-2">Subscribe to our plan to earn the following benefits.</p>

		<mat-list role="list" class="gap-2 text-start p-0 mt-4">
			@for (item of benefitsList; track $index) {
				<mat-list-item role="listitem" class="text-body-regular fg-general-5 mb-2">
					<mat-icon matListItemIcon class="fg-prim-2 fs-18px me-2">check</mat-icon>
					{{ item | translations }}
				</mat-list-item>
			}
		</mat-list>

		<button
			class="align-items-center border-0 plan-benefits-btn mx-auto mt-4"
			mat-flat-button
			color="primary"
			[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.paymentPlan"
		>
			<span class="text-body-regular text-start align-middle">{{ 'Susbcribe to plan' }}</span>

			<mat-icon iconPositionEnd class="north-east-icon align-middle">north_east</mat-icon>
		</button>
	</div>

	<mat-divider class="my-3"></mat-divider>

	<h3 class="heading-3-medium fg-general-5">Your Last Subscription</h3>

	<p class="text-body-regular fg-general-5 mt-3">Subscription name:</p>
	<p class="text-body-medium fg-general-5 my-1">
		{{ subscription?.planTier?.name }}
		<span class="me-1" *ngIf="subscription.subscriptionType === subscriptionType.TRIAL">{{ 'n4028' | translations }}</span>
		<span class="status-badge text-body-regular text-capitalize" [ngClass]="subscription?.status">{{ subscription.status }}</span>
	</p>

	<p class="text-body-regular fg-general-5">
		Your subscription has expired.
		<br />
		<span class="text-body-regular fg-prim-2">Purchase Premium Unlimited</span>
		to continue posting ads.
	</p>
	<p class="text-body-regular fg-general-4 mt-3">Last renewal date:</p>
	<p class="text-body-medium fg-general-5 mt-1">{{ subscription?.dates?.nextBilling | date: 'MMMM dd, YYYY' }}</p>
</ng-template>

<ng-template #activeSubscription let-vm>
	<h3 class="heading-4 fg-general-5 mb-3">{{ 'n4032' | translations }}</h3>

	<p class="text-body-regular fg-general-5">{{ 'n4027' | translations }}</p>
	<p class="text-body-medium fg-general-5 my-1">
		{{ vm?.planTier?.name }}
		<span class="me-1" *ngIf="vm.subscriptionType === subscriptionType.TRIAL">{{ 'n4028' | translations }}</span>
		<span class="status-badge text-body-regular text-capitalize" [ngClass]="vm?.status">{{ vm.status }}</span>
	</p>
	<p *ngIf="vm.subscriptionType === subscriptionType.PAID && vm?.status !== subscriptionStatus.CANCELLED" class="text-body-regular fg-general-5">
		{{ 'n4049' | translations }}
		<span class="text-body-medium fg-general-5">{{ vm?.dates?.nextBilling | date: 'MMMM dd, yyyy' }}.</span>
		{{ 'n4050' | translations }} \u20AC{{ +vm.price?.value / 100 }} {{ 'n4051' | translations }}.
	</p>

	<p *ngIf="vm?.status === subscriptionStatus.CANCELLED" class="text-body-regular fg-general-5">
		Your subscription is valid until
		<span class="text-body-medium fg-general-5">{{ vm?.dates?.nextBilling | date: 'MMMM dd, yyyy' }}.</span>
	</p>

	<p class="text-body-regular fg-general-5" *ngIf="vm.status === subscriptionStatus.EXPIRING">
		{{ 'n4034' | translations }}
		<br />
		<span class="fg-prim-2">{{ 'n4035' | translations }}</span>
		{{ 'n4036' | translations }}.
	</p>

	<p class="text-body-regular fg-general-5 mt-3 mb-1">{{ vm?.status === subscriptionStatus.CANCELLED ? 'Valid until' : ('n4029' | translations) }}:</p>
	<p class="text-body-medium fg-general-5">{{ vm?.dates?.nextBilling | date: 'MMMM dd, yyyy' }}</p>

	<ng-container *ngIf="vm.subscriptionType === subscriptionType.PAID">
		<p class="text-body-regular fg-general-5 mt-3 mb-1">{{ 'n4052' | translations }}:</p>
		<p class="text-body-medium fg-general-5">\u20AC{{ +vm.price?.value / 100 }}</p>
	</ng-container>

	<p class="text-body-regular fg-general-5 mb-1 mt-4">{{ 'n449' | translations }}:</p>

	<div class="row mx-0 gap-3">
		<div class="col p-3 border-neutral-1 rounded">
			<span class="fg-info-3 px-2 bg-info-1 rounded text-subheading-regular">{{ 'n3309' | translations }}</span>
			<h3
				*ngIf="vm.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED || vm.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY"
				class="heading-3-medium fg-general-5 mt-3"
			>
				5
			</h3>
			<h3 *ngIf="vm.planTier.reference === subscriptionTier.LIMITED_YEARLY" class="heading-3-medium fg-general-5 mt-3">0</h3>
		</div>

		<div class="col p-3 border-neutral-1 rounded">
			<span class="fg-general-4 px-2 bg-general-1 rounded text-subheading-regular text-uppercase">{{ 'n815' | translations }}</span>
			<h3
				*ngIf="vm.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED || vm.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY"
				class="heading-3-medium fg-general-5 mt-3"
			>
				{{ 'n4030' | translations }}
			</h3>
			<h3 *ngIf="vm.planTier.reference === subscriptionTier.LIMITED_YEARLY" class="heading-3-medium fg-general-5 mt-3">2</h3>
		</div>
	</div>

	<mat-divider class="my-4"></mat-divider>

	<ng-container
		*ngIf="vm.subscriptionType === subscriptionType.TRIAL || vm.status === subscriptionStatus.EXPIRING || vm.status === subscriptionStatus.CANCELLED"
	>
		<div class="row gap-2 align-items-center justify-content-sm-between">
			<div class="col-auto">
				<h4 class="heading-4-medium fg-general-5">{{ vm.status === subscriptionStatus.CANCELLED ? 'Changed your mind?' : ('n4037' | translations) }}</h4>
				<p class="text-body-regular fg-general-5 mt-1">{{ 'n4038' | translations }}</p>
			</div>

			<div class="col-auto">
				<button
					class="align-items-center border-0 plan-benefits-btn"
					mat-flat-button
					color="primary"
					[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.paymentPlan"
				>
					<span class="text-body-regular text-start align-middle">{{ 'n4039' | translations }}</span>

					<mat-icon iconPositionEnd class="north-east-icon align-middle">north_east</mat-icon>
				</button>
			</div>
		</div>
	</ng-container>

	<ng-container
		*ngIf="vm.subscriptionType === subscriptionType.PAID && vm.status !== subscriptionStatus.CANCELLED"
		[ngTemplateOutlet]="creditCard"
		[ngTemplateOutletContext]="{ $implicit: vm }"
	></ng-container>

	<mat-divider class="my-4"></mat-divider>

	<ng-container [ngTemplateOutlet]="subscriptionBenefits"></ng-container>

	<mat-divider class="my-4"></mat-divider>

	<h3 class="heading-4 fg-general-5 mb-2 mt-4">{{ 'n4032' | translations }}</h3>
	<p class="d-block text-paragraph-regular fg-general-4 mb-3">
		{{ 'n4040' | translations }}
	</p>

	<button
		mat-button
		(click)="cancleSubscription()"
		[disabled]="vm?.subscriptionType !== subscriptionType.PAID || vm.status === subscriptionStatus.CANCELLED"
		class="text-body-regular rounded border fg-general-3"
	>
		{{ 'n3370' | translations }}
	</button>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/pages/subscription-plan/subscription-plan.component.scss */\n.container {\n  max-width: 600px;\n  background-color: var(--basic-1);\n  border-radius: 4px;\n  padding: 24px 16px;\n}\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n.border-neutral-1 {\n  border: 1px solid var(--neutral-1) !important;\n}\n.plan-benefits-btn {\n  height: 40px;\n}\n.north-east-icon mat-icon {\n  font-size: 18px;\n  width: 18px;\n}\n.subscription-container {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .subscription-container {\n    padding-bottom: 24px !important;\n  }\n}\n.credit-card-background {\n  height: 40px;\n  width: 40px;\n}\n.credit-card-icon {\n  font-size: 25px;\n}\n.mail-icon {\n  font-size: 15px;\n  width: 15px;\n  display: inline-block !important;\n  height: 15px;\n}\n.border {\n  border-color: var(--neutral-2) !important;\n}\nmat-list-item {\n  height: fit-content !important;\n  line-height: 18px;\n  padding: 0;\n}\nmat-list-item mat-icon {\n  background-color: rgba(255, 90, 184, 0.15);\n  width: 20px !important;\n  height: 20px !important;\n  font-size: 14px !important;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-plan.component.css.map */\n"] }]
  }], () => [{ type: SnackService }, { type: MatDialog }, { type: MyProfileFacade }, { type: Location }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionPlanComponent, { className: "SubscriptionPlanComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/pages/subscription-plan/subscription-plan.component.ts", lineNumber: 23 });
})();
export {
  SubscriptionPlanComponent
};
//# sourceMappingURL=chunk-5RGLXM4I.js.map
