import {
  ChangeCardDilaogComponent
} from "./chunk-3KQDGRMW.js";
import {
  SubscriptionOfferDialogComponent
} from "./chunk-QRKYK676.js";
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-UWPIFTDN.js";
import {
  PricingListComponent,
  PricingListModule
} from "./chunk-76XBNLIX.js";
import {
  APP_ROUTE,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDivider,
  MatDividerModule,
  MatIconButton,
  MyProfileFacade,
  PREMIUM_UNLIMITED_OPTIONS,
  SharedModule,
  SnackService,
  SubscriptionStatus,
  SubscriptionTier,
  SubscriptionType,
  TranslationsPipe,
  WindowService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  finalize,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/components/delete-business-dialog/delete-business-dialog.component.ts
var DeleteBusinessDialogComponent = class _DeleteBusinessDialogComponent {
  static {
    this.\u0275fac = function DeleteBusinessDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteBusinessDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteBusinessDialogComponent, selectors: [["findqo-delete-business-dialog"]], standalone: false, decls: 31, vars: 9, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header", "border-bottom"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", "rounded-circle", "bg-general-1"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "py-4", "px-3"], [1, "text-paragraph-regular", "fg-general-5"], [1, "row", "align-items-center", "gap-1", "mt-3"], [1, "col-auto", "icon-container"], [1, "col"], ["href", "mailto:hello@findqo.ie", 1, "text-body-medium", "fg-general-5"], [1, "material-icons-outline"], ["href", "tel:+35315314791", 1, "text-body-medium", "fg-general-5"], [1, "border-top", "p-3"], ["mat-button", "", "mat-dialog-close", "", 1, "fg-prim-2", "text-body-regular", "w-100"]], template: function DeleteBusinessDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "mat-icon");
        \u0275\u0275text(16, "mail_outlined");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "a", 11);
        \u0275\u0275text(19, "hello@findqo.ie");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9)(22, "mat-icon", 12);
        \u0275\u0275text(23, "phone_outlined");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 10)(25, "a", 13);
        \u0275\u0275text(26, "+353-15314791");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 14)(28, "button", 15);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translations");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "n4008"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, "n4009"), " ");
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 7, "n97"));
      }
    }, dependencies: [MatButton, MatIconButton, MatIcon, MatDialogClose, TranslationsPipe], styles: ["\n\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n}\n.icon-container[_ngcontent-%COMP%] {\n  width: 30px !important;\n  height: 30px !important;\n  background-color: rgba(255, 90, 184, 0.1);\n  border-radius: 50% !important;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--prim-2) !important;\n}\n.icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/delete-business-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteBusinessDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-delete-business-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header border-bottom">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n4008' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn rounded-circle bg-general-1">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="py-4 px-3">
		<p class="text-paragraph-regular fg-general-5">
			{{ 'n4009' | translations }}
		</p>

		<div class="row align-items-center gap-1 mt-3">
			<div class="col-auto icon-container">
				<mat-icon>mail_outlined</mat-icon>
			</div>

			<div class="col">
				<a href="mailto:hello@findqo.ie" class="text-body-medium fg-general-5">hello&#64;findqo.ie</a>
			</div>
		</div>

		<div class="row align-items-center gap-1 mt-3">
			<div class="col-auto icon-container">
				<mat-icon class="material-icons-outline">phone_outlined</mat-icon>
			</div>

			<div class="col">
				<a class="text-body-medium fg-general-5" href="tel:+35315314791">+353-15314791</a>
			</div>
		</div>
	</div>

	<div class="border-top p-3">
		<button mat-button mat-dialog-close class="fg-prim-2 text-body-regular w-100">{{ 'n97' | translations }}</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/components/delete-business-dialog/delete-business-dialog.component.scss */\n.dialog-header {\n  height: 60px !important;\n}\n.close-btn {\n  width: 40px !important;\n  height: 40px !important;\n}\n.icon-container {\n  width: 30px !important;\n  height: 30px !important;\n  background-color: rgba(255, 90, 184, 0.1);\n  border-radius: 50% !important;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--prim-2) !important;\n}\n.icon-container mat-icon {\n  font-size: 18px !important;\n  width: 18px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/delete-business-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteBusinessDialogComponent, { className: "DeleteBusinessDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/components/delete-business-dialog/delete-business-dialog.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/subscription.component.ts
function SubscriptionComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4028"));
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, " 5 ads ");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n4030"), " ");
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, "2 ads");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, " 10 monthly ");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, " UNLIMITED ");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_h3_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 22);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function SubscriptionComponent_div_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "p", 5);
    \u0275\u0275text(3, "Valid until:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SubscriptionComponent_div_0_ng_container_13_h3_16_Template, 2, 0, "h3", 18)(17, SubscriptionComponent_div_0_ng_container_13_h3_17_Template, 2, 0, "h3", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 16)(19, "span", 19);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, SubscriptionComponent_div_0_ng_container_13_h3_22_Template, 3, 3, "h3", 18)(23, SubscriptionComponent_div_0_ng_container_13_h3_23_Template, 2, 0, "h3", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "div", 16)(26, "span", 19);
    \u0275\u0275text(27, "SELLER LEADS");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, SubscriptionComponent_div_0_ng_container_13_h3_28_Template, 2, 0, "h3", 18)(29, SubscriptionComponent_div_0_ng_container_13_h3_29_Template, 2, 0, "h3", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 16)(31, "span", 20);
    \u0275\u0275text(32, "IN-PERSON VALUATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 21);
    \u0275\u0275text(34, "VALUATION");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, SubscriptionComponent_div_0_ng_container_13_h3_35_Template, 2, 0, "h3", 18)(36, SubscriptionComponent_div_0_ng_container_13_h3_36_Template, 2, 0, "h3", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.dates == null ? null : ctx_r0.subscriptionInfo.dates.expired, "MMMM dd, yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 15, "n449"), ":");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "n3309"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED_YEARLY);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.LIMITED_YEARLY);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 19, "n815"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED_YEARLY);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.LIMITED_YEARLY);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED_YEARLY);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.LIMITED_YEARLY);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.PREMIUM_UNLIMITED_YEARLY);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.LIMITED_YEARLY);
  }
}
function SubscriptionComponent_div_0_mat_divider_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 23);
  }
}
function SubscriptionComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "findqo-pricing-list", 24);
    \u0275\u0275listener("paymentPlanToggled", function SubscriptionComponent_div_0_div_15_Template_findqo_pricing_list_paymentPlanToggled_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.handlePlanChange($event));
    })("planClicked", function SubscriptionComponent_div_0_div_15_Template_findqo_pricing_list_planClicked_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generatePaymentLink());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("isPrivatePage", true)("subscriptionInfo", ctx_r0.subscriptionInfo)("isLoading", ctx_r0.isLoading);
  }
}
function SubscriptionComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "mat-divider", 23);
    \u0275\u0275elementStart(2, "div", 25)(3, "div")(4, "p", 26);
    \u0275\u0275text(5, "Subscribe to Premium plan?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7, "Get seller leads, enjoy up to 5 featured ads, post unlimited ads, and much more!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "findqo-button", 28);
    \u0275\u0275listener("clicked", function SubscriptionComponent_div_0_div_16_Template_findqo_button_clicked_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.generatePaymentLink());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("isDisabled", ctx_r0.isLoading);
  }
}
function SubscriptionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275template(10, SubscriptionComponent_div_0_span_10_Template, 3, 3, "span", 7);
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, SubscriptionComponent_div_0_ng_container_13_Template, 37, 21, "ng-container", 9)(14, SubscriptionComponent_div_0_mat_divider_14_Template, 1, 0, "mat-divider", 10)(15, SubscriptionComponent_div_0_div_15_Template, 2, 3, "div", 9)(16, SubscriptionComponent_div_0_div_16_Template, 9, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "n4026"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 13, "n4027"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.LIMITED_YEARLY ? "fg-general-5" : "fg-prim-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier == null ? null : ctx_r0.subscriptionInfo.planTier.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subscriptionInfo.subscriptionType === ctx_r0.subscriptionType.TRIAL);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.subscriptionInfo.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subscriptionInfo.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subscriptionInfo.status !== ctx_r0.subscriptionStatus.EXPIRED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAgentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAgentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.planTier.reference) === ctx_r0.subscriptionTier.LIMITED_YEARLY || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.status) === ctx_r0.subscriptionStatus.CANCELLED || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.status) === ctx_r0.subscriptionStatus.EXPIRED || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.status) === ctx_r0.subscriptionStatus.EXPIRING || (ctx_r0.subscriptionInfo == null ? null : ctx_r0.subscriptionInfo.subscriptionType) === ctx_r0.subscriptionType.TRIAL);
  }
}
function SubscriptionComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "ngx-skeleton-loader", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("theme", theme_r4);
  }
}
function SubscriptionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SubscriptionComponent_ng_template_1_div_0_Template, 2, 1, "div", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r0.themeList);
  }
}
var SubscriptionComponent = class _SubscriptionComponent {
  constructor(snackBarService, dialog, profileFacade, windowService) {
    this.snackBarService = snackBarService;
    this.dialog = dialog;
    this.profileFacade = profileFacade;
    this.windowService = windowService;
    this.subscriptionTier = SubscriptionTier;
    this.appRoute = APP_ROUTE;
    this.buttonType = ButtonType;
    this.subscriptionType = SubscriptionType;
    this.subscriptionStatus = SubscriptionStatus;
    this.paymentOptions = PREMIUM_UNLIMITED_OPTIONS;
    this.isLoading = false;
    this.selectedPaymentPlan = "monthly";
    this.themeList = [
      { border: "4", width: "100%", margin: "0", height: "40px" },
      { border: "4", width: "100%", margin: "0", height: "20px" },
      { border: "4", width: "100%", margin: "0", height: "20px" }
    ];
  }
  openSubscription() {
    this.dialog.open(SubscriptionOfferDialogComponent, {
      disableClose: true,
      width: "500px",
      height: "600px"
    }).afterClosed();
  }
  changeCard() {
    this.dialog.open(ChangeCardDilaogComponent, {
      disableClose: true,
      maxWidth: "500px",
      backdropClass: "inquiry-backdrop"
    });
  }
  handlePlanChange(plan) {
    this.selectedPaymentPlan = plan;
  }
  generatePaymentLink() {
    const planTierId = this.paymentOptions[this.selectedPaymentPlan].planTierId;
    this.isLoading = true;
    this.profileFacade.generatePaymentLink({
      planTierId,
      successUrl: `${environment.appUrl}/${APP_ROUTE.agentHub.dashboard}/${APP_ROUTE.businessProfile.paymentSuccess}`,
      cancelUrl: `${environment.appUrl}/${APP_ROUTE.agentHub.businessAccount}`
    }).pipe(finalize(() => this.isLoading = false)).subscribe((res) => this.windowService.reference.location.replace(res.url));
  }
  static {
    this.\u0275fac = function SubscriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionComponent)(\u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(WindowService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionComponent, selectors: [["findqo-subscription"]], inputs: { subscriptionInfo: "subscriptionInfo", isAgentUser: "isAgentUser" }, standalone: false, decls: 3, vars: 2, consts: [["skeltonLoader", ""], ["class", "container my-4 px-0", 4, "ngIf", "ngIfElse"], [1, "container", "my-4", "px-0"], [1, "heading-3", "fg-general-5", "mb-3"], [1, "d-flex", "flex-column", "flex-md-row", "gap-2", "mb-3", "align-items-md-center"], [1, "d-block", "text-body-regular", "fg-general-5"], [1, "d-block", "text-body-medium", "align-items-center", 3, "ngClass"], ["class", "me-1", 4, "ngIf"], [1, "status-badge", "text-body-regular", "text-capitalize", 3, "ngClass"], [4, "ngIf"], ["class", "my-4", 4, "ngIf"], [1, "me-1"], [1, "d-block", "text-body-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mb-1"], [1, "d-flex", "flex-column", "flex-md-row", "gap-3"], [1, "d-flex", "flex-row", "gap-3", "w-100"], [1, "col", "p-3", "border-neutral-1", "rounded"], [1, "fg-info-3", "px-2", "bg-info-1", "rounded", "text-subheading-regular"], ["class", "heading-3-medium fg-general-5 mt-3", 4, "ngIf"], [1, "fg-general-4", "px-2", "bg-general-1", "rounded", "text-subheading-regular", "text-uppercase"], [1, "fg-general-4", "px-2", "bg-general-1", "rounded", "text-subheading-regular", "text-uppercase", "d-none", "d-md-inline"], [1, "fg-general-4", "px-2", "bg-general-1", "rounded", "text-subheading-regular", "text-uppercase", "d-md-none"], [1, "heading-3-medium", "fg-general-5", "mt-3"], [1, "my-4"], [3, "paymentPlanToggled", "planClicked", "isPrivatePage", "subscriptionInfo", "isLoading"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "gap-2", "gap-md-0"], [1, "heading-4-medium"], [1, "text-body-regular"], ["label", "Upgrade to Premium Unlimited", "materialIconSuffix", "call_made", 3, "clicked", "isDisabled"], ["class", "py-0", 4, "ngFor", "ngForOf"], [1, "py-0"], [3, "theme"]], template: function SubscriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SubscriptionComponent_div_0_Template, 17, 15, "div", 1)(1, SubscriptionComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const skeltonLoader_r5 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.subscriptionInfo)("ngIfElse", skeltonLoader_r5);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatDivider, ButtonComponent, NgxSkeletonLoaderComponent, PricingListComponent, DatePipe, TranslationsPipe], styles: ['\n\n.credit-card-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.credit-card-background[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings: "FILL" 0;\n}\n.mail-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  display: inline-block !important;\n  height: 15px;\n}\n.cancel-alert[_ngcontent-%COMP%] {\n  border: 1px solid var(--error-2);\n  border-radius: 4px;\n}\n.active-plan[_ngcontent-%COMP%] {\n  border: 1px solid var(--success-2);\n}\n.cancelled-plan[_ngcontent-%COMP%] {\n  border: 1px solid var(--error-2);\n}\n.subscription-badge[_ngcontent-%COMP%] {\n  height: 25px;\n  border-radius: 4px;\n  line-height: 22px;\n}\n.price-page-link[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 4px;\n  width: fit-content;\n}\n.price-page-link[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.mat-icon.d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.border-neutral-1[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-1) !important;\n}\n.h-26px[_ngcontent-%COMP%] {\n  height: 26px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionComponent, [{
    type: Component,
    args: [{ selector: "findqo-subscription", standalone: false, template: `<div class="container my-4 px-0" *ngIf="subscriptionInfo; else skeltonLoader">
	<h3 class="heading-3 fg-general-5 mb-3">{{ 'n4026' | translations }}</h3>

	<!-- Subscription active template -->

	<!-- <div class="d-flex align-items-center gap-2 mb-3"> -->
	<div class="d-flex flex-column flex-md-row gap-2 mb-3 align-items-md-center">
		<p class="d-block text-body-regular fg-general-5">{{ 'n4027' | translations }}:</p>
		<p
			class="d-block text-body-medium align-items-center"
			[ngClass]="subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY ? 'fg-general-5' : 'fg-prim-2'"
		>
			{{ subscriptionInfo?.planTier?.name }}
			<span class="me-1" *ngIf="subscriptionInfo.subscriptionType === subscriptionType.TRIAL">{{ 'n4028' | translations }}</span>
			<span class="status-badge text-body-regular text-capitalize" [ngClass]="subscriptionInfo.status">{{ subscriptionInfo.status }}</span>
		</p>
	</div>

	<ng-container *ngIf="subscriptionInfo.status !== subscriptionStatus.EXPIRED">
		<!-- <div class="d-flex align-items-center gap-2 mb-3"> -->
		<div class="d-flex flex-column flex-md-row gap-2 mb-3 align-items-md-center">
			<p class="d-block text-body-regular fg-general-5">Valid until:</p>
			<p class="d-block text-body-medium fg-general-5">{{ subscriptionInfo?.dates?.expired | date: 'MMMM dd, yyyy' }}</p>
		</div>

		<p class="text-body-regular fg-general-5 mb-1">{{ 'n449' | translations }}:</p>

		<div class="d-flex flex-column flex-md-row gap-3">
			<div class="d-flex flex-row gap-3 w-100">
				<div class="col p-3 border-neutral-1 rounded">
					<span class="fg-info-3 px-2 bg-info-1 rounded text-subheading-regular">{{ 'n3309' | translations }}</span>
					<h3
						*ngIf="
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED ||
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY
						"
						class="heading-3-medium fg-general-5 mt-3"
					>
						5 ads
					</h3>
					<h3 *ngIf="subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY" class="heading-3-medium fg-general-5 mt-3">N/A</h3>
				</div>
				<div class="col p-3 border-neutral-1 rounded">
					<span class="fg-general-4 px-2 bg-general-1 rounded text-subheading-regular text-uppercase">{{ 'n815' | translations }}</span>
					<h3
						*ngIf="
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED ||
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY
						"
						class="heading-3-medium fg-general-5 mt-3"
					>
						{{ 'n4030' | translations }}
					</h3>
					<h3 *ngIf="subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY" class="heading-3-medium fg-general-5 mt-3">2 ads</h3>
				</div>
			</div>

			<div class="d-flex flex-row gap-3 w-100">
				<div class="col p-3 border-neutral-1 rounded">
					<span class="fg-general-4 px-2 bg-general-1 rounded text-subheading-regular text-uppercase">SELLER LEADS</span>
					<h3
						*ngIf="
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED ||
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY
						"
						class="heading-3-medium fg-general-5 mt-3"
					>
						10 monthly
					</h3>
					<h3 *ngIf="subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY" class="heading-3-medium fg-general-5 mt-3">N/A</h3>
				</div>

				<div class="col p-3 border-neutral-1 rounded">
					<span class="fg-general-4 px-2 bg-general-1 rounded text-subheading-regular text-uppercase d-none d-md-inline">IN-PERSON VALUATION</span>
					<span class="fg-general-4 px-2 bg-general-1 rounded text-subheading-regular text-uppercase d-md-none">VALUATION</span>

					<h3
						*ngIf="
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED ||
							subscriptionInfo?.planTier.reference === subscriptionTier.PREMIUM_UNLIMITED_YEARLY
						"
						class="heading-3-medium fg-general-5 mt-3"
					>
						UNLIMITED
					</h3>
					<h3 *ngIf="subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY" class="heading-3-medium fg-general-5 mt-3">N/A</h3>
				</div>
			</div>
		</div>
	</ng-container>

	<mat-divider *ngIf="!isAgentUser" class="my-4"></mat-divider>

	<div *ngIf="!isAgentUser">
		<findqo-pricing-list
			[isPrivatePage]="true"
			(paymentPlanToggled)="handlePlanChange($event)"
			[subscriptionInfo]="subscriptionInfo"
			(planClicked)="generatePaymentLink()"
			[isLoading]="isLoading"
		/>
	</div>

	<!-- <button
		mat-button
		class="px-0 fg-info-3 h-26px text-body-regular"
		[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.subscription"
		*ngIf="!isAgentUser"
	>
		{{ 'n4031' | translations }}
		<mat-icon iconPositionEnd>arrow_forward</mat-icon>
	</button> -->

	<div
		*ngIf="
			subscriptionInfo?.planTier.reference === subscriptionTier.LIMITED_YEARLY ||
			subscriptionInfo?.status === subscriptionStatus.CANCELLED ||
			subscriptionInfo?.status === subscriptionStatus.EXPIRED ||
			subscriptionInfo?.status === subscriptionStatus.EXPIRING ||
			subscriptionInfo?.subscriptionType === subscriptionType.TRIAL
		"
	>
		<mat-divider class="my-4"></mat-divider>

		<div class="d-flex flex-column flex-md-row justify-content-between gap-2 gap-md-0">
			<div>
				<p class="heading-4-medium">Subscribe to Premium plan?</p>
				<p class="text-body-regular">Get seller leads, enjoy up to 5 featured ads, post unlimited ads, and much more!</p>
			</div>

			<findqo-button
				label="Upgrade to Premium Unlimited"
				materialIconSuffix="call_made"
				(clicked)="generatePaymentLink()"
				[isDisabled]="isLoading"
			></findqo-button>
		</div>
	</div>
</div>

<ng-template #skeltonLoader>
	<div class="py-0" *ngFor="let theme of themeList">
		<ngx-skeleton-loader [theme]="theme"></ngx-skeleton-loader>
	</div>
</ng-template>
`, styles: ['/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/subscription.component.scss */\n.credit-card-icon {\n  font-size: 25px;\n}\n.credit-card-background {\n  height: 40px;\n  width: 40px;\n}\n.info-icon {\n  font-size: 20px;\n}\n.material-symbols-outlined {\n  font-variation-settings: "FILL" 0;\n}\n.mail-icon {\n  font-size: 15px;\n  width: 15px;\n  display: inline-block !important;\n  height: 15px;\n}\n.cancel-alert {\n  border: 1px solid var(--error-2);\n  border-radius: 4px;\n}\n.active-plan {\n  border: 1px solid var(--success-2);\n}\n.cancelled-plan {\n  border: 1px solid var(--error-2);\n}\n.subscription-badge {\n  height: 25px;\n  border-radius: 4px;\n  line-height: 22px;\n}\n.price-page-link {\n  height: 40px;\n  border-radius: 4px;\n  width: fit-content;\n}\n.price-page-link .mat-icon {\n  width: 18px;\n  height: 18px;\n}\n.mat-icon.d-inline-block {\n  display: inline-block !important;\n}\n.border-neutral-1 {\n  border: 1px solid var(--neutral-1) !important;\n}\n.h-26px {\n  height: 26px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription.component.css.map */\n'] }]
  }], () => [{ type: SnackService }, { type: MatDialog }, { type: MyProfileFacade }, { type: WindowService }], { subscriptionInfo: [{
    type: Input
  }], isAgentUser: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionComponent, { className: "SubscriptionComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/subscription.component.ts", lineNumber: 22 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/change-card-dilaog/change-card-dialog.module.ts
var ChangeCardDilaogModule = class _ChangeCardDilaogModule {
  static {
    this.\u0275fac = function ChangeCardDilaogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangeCardDilaogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChangeCardDilaogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangeCardDilaogModule, [{
    type: NgModule,
    args: [{
      declarations: [ChangeCardDilaogComponent],
      imports: [SharedModule, ButtonModule],
      exports: [ChangeCardDilaogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/subscription.module.ts
var SubscriptionModule = class _SubscriptionModule {
  static {
    this.\u0275fac = function SubscriptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SubscriptionModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, ButtonModule, ChangeCardDilaogModule, NgxSkeletonLoaderModule, PricingListModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionModule, [{
    type: NgModule,
    args: [{
      declarations: [SubscriptionComponent],
      imports: [SharedModule, MatDividerModule, ButtonModule, ChangeCardDilaogModule, NgxSkeletonLoaderModule, PricingListModule],
      exports: [SubscriptionComponent]
    }]
  }], null, null);
})();

export {
  DeleteBusinessDialogComponent,
  SubscriptionComponent,
  SubscriptionModule
};
//# sourceMappingURL=chunk-BW46TJNW.js.map
