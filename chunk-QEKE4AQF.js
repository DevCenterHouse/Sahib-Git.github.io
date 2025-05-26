import {
  DeleteBusinessDialogComponent,
  SubscriptionComponent,
  SubscriptionModule
} from "./chunk-BW46TJNW.js";
import {
  CancelSubscriptionDialogComponent
} from "./chunk-3KQDGRMW.js";
import {
  DEFAULT_EMAIL_PLACEHOLDER
} from "./chunk-LUIRD62T.js";
import {
  AgentStatus
} from "./chunk-YL2NNRDT.js";
import "./chunk-QRKYK676.js";
import "./chunk-UWPIFTDN.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-76XBNLIX.js";
import "./chunk-HPH4IAIR.js";
import "./chunk-6I3UIAZY.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AuthService,
  ButtonType,
  ExpiringInDays,
  FormControl,
  MatButton,
  MatButtonModule,
  MatDialog,
  MatDialogModule,
  MatDivider,
  MatDividerModule,
  MatIconButton,
  MyProfileFacade,
  MyProfileService,
  RouterLink,
  SearchFilterPipe,
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
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  setClassMetadata,
  takeUntil,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-card/business-info-card.component.ts
function BusinessInfoCardComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 15)(1, "mat-icon", 16);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/" + ctx_r0.appRoute.agentHub.dashboard + "/" + ctx_r0.appRoute.businessProfile.edit);
  }
}
var BusinessInfoCardComponent = class _BusinessInfoCardComponent {
  constructor() {
    this.appRoute = APP_ROUTE;
    this.defaultImage = "assets/images/profile/business-account-photo.svg";
  }
  static {
    this.\u0275fac = function BusinessInfoCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessInfoCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessInfoCardComponent, selectors: [["findqo-business-info-card"]], inputs: { businessProfile: "businessProfile", isAgentUser: "isAgentUser" }, standalone: false, decls: 35, vars: 26, consts: [[1, "container", "p-0"], [1, "row", "align-items-center", "gap-3", "justify-content-center"], [1, "col-auto"], ["width", "165", "height", "120", "priority", "", 1, "border", "rounded-10px", 3, "ngSrc", "alt"], [1, "col-lg", "text-center", "text-lg-start"], [1, "d-flex", "align-items-center", "gap-1", "mb-3", "justify-content-center", "justify-content-lg-start"], [1, "heading-4-medium", "fg-general-5"], ["mat-icon-button", "", "class", "bg-info-1 edit-icon-button", 3, "routerLink", 4, "ngIf"], [1, "text-body-regular", "fg-general-5", "mt-2"], [1, "text-body-medium"], [1, "ms-3", "text-body-medium"], [1, "text-body-regular", "fg-general-5", "mt-3"], [1, "text-body-medium", "fg-general-5", "my-1"], [1, "text-body-medium", "fg-general-5"], [1, "text-body-medium", "fg-general-5", "mt-1"], ["mat-icon-button", "", 1, "bg-info-1", "edit-icon-button", 3, "routerLink"], [1, "fg-info-3"]], template: function BusinessInfoCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, BusinessInfoCardComponent_button_8_Template, 3, 1, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 8)(10, "span", 9);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "p", 11);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 13);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 11);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 14);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 11);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 14);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_14_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("ngSrc", (tmp_0_0 = ctx.businessProfile == null ? null : ctx.businessProfile.picture) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : ctx.defaultImage)("alt", ctx.businessProfile == null ? null : ctx.businessProfile.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.businessProfile == null ? null : ctx.businessProfile.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAgentUser);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.businessProfile == null ? null : ctx.businessProfile.liveAds);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "n4024"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.businessProfile == null ? null : ctx.businessProfile.agentCount);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 18, "n4025"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 20, "n3058"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.businessProfile == null ? null : ctx.businessProfile.location == null ? null : ctx.businessProfile.location.address);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.businessProfile == null ? null : ctx.businessProfile.location == null ? null : ctx.businessProfile.location.countyArea);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 22, "n4020"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.businessProfile == null ? null : ctx.businessProfile.email);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 24, "n4022"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.businessProfile == null ? null : ctx.businessProfile.phoneCode, " ", (tmp_14_0 = ctx.businessProfile == null ? null : ctx.businessProfile.phone) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "N/A", "");
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, RouterLink, NgOptimizedImage, TranslationsPipe], styles: ["\n\n.rounded-10px[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n.edit-icon-button[_ngcontent-%COMP%] {\n  width: 26px !important;\n  height: 26px !important;\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center !important;\n  align-items: center !important;\n}\n.edit-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  margin: 0 !important;\n  padding: 9 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-info-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessInfoCardComponent, [{
    type: Component,
    args: [{ selector: "findqo-business-info-card", standalone: false, template: `<div class="container p-0">
	<div class="row align-items-center gap-3 justify-content-center">
		<div class="col-auto">
			<img [ngSrc]="businessProfile?.picture ?? defaultImage" [alt]="businessProfile?.name" width="165" height="120" priority class="border rounded-10px" />
		</div>

		<div class="col-lg text-center text-lg-start">
			<div class="d-flex align-items-center gap-1 mb-3 justify-content-center justify-content-lg-start">
				<h4 class="heading-4-medium fg-general-5">{{ businessProfile?.name }}</h4>

				<button
					mat-icon-button
					class="bg-info-1 edit-icon-button"
					[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.edit"
					*ngIf="!isAgentUser"
				>
					<mat-icon class="fg-info-3">edit</mat-icon>
				</button>
			</div>

			<p class="text-body-regular fg-general-5 mt-2">
				<span class="text-body-medium">{{ businessProfile?.liveAds }}</span>
				{{ 'n4024' | translations }}
				<span class="ms-3 text-body-medium">{{ businessProfile?.agentCount }}</span>
				{{ 'n4025' | translations }}
			</p>
		</div>
	</div>

	<p class="text-body-regular fg-general-5 mt-3">{{ 'n3058' | translations }}:</p>
	<p class="text-body-medium fg-general-5 my-1">{{ businessProfile?.location?.address }}</p>
	<p class="text-body-medium fg-general-5">{{ businessProfile?.location?.countyArea }}</p>

	<p class="text-body-regular fg-general-5 mt-3">{{ 'n4020' | translations }}:</p>
	<p class="text-body-medium fg-general-5 mt-1">{{ businessProfile?.email }}</p>

	<p class="text-body-regular fg-general-5 mt-3">{{ 'n4022' | translations }}:</p>
	<p class="text-body-medium fg-general-5 mt-1">{{ businessProfile?.phoneCode }} {{ businessProfile?.phone ?? 'N/A' }}</p>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-card/business-info-card.component.scss */\n.rounded-10px {\n  border-radius: 10px !important;\n}\n.edit-icon-button {\n  width: 26px !important;\n  height: 26px !important;\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center !important;\n  align-items: center !important;\n}\n.edit-icon-button mat-icon {\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n  margin: 0 !important;\n  padding: 9 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-info-card.component.css.map */\n"] }]
  }], null, { businessProfile: [{
    type: Input
  }], isAgentUser: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessInfoCardComponent, { className: "BusinessInfoCardComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-card/business-info-card.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-card/business-info-card.module.ts
var BusinessInfoCardModule = class _BusinessInfoCardModule {
  static {
    this.\u0275fac = function BusinessInfoCardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessInfoCardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BusinessInfoCardModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatButtonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessInfoCardModule, [{
    type: NgModule,
    args: [{
      declarations: [BusinessInfoCardComponent],
      imports: [SharedModule, MatButtonModule, NgOptimizedImage],
      exports: [BusinessInfoCardComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/pages/business-profile/business-profile.page.ts
var _c0 = () => ["name"];
var _c1 = (a0, a1, a2, a3) => ({ countyList: a0, countyAreaList: a1, inviterName: a2, subscription: a3 });
function BusinessProfilePage_div_0_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, " Subscription expired! ");
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275listener("click", function BusinessProfilePage_div_0_div_1_p_4_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onClickWarningBanner());
    });
    \u0275\u0275text(3, "Purchase Premium Unlimited now");
    \u0275\u0275elementEnd()();
  }
}
function BusinessProfilePage_div_0_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "expiringInDays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 22);
    \u0275\u0275listener("click", function BusinessProfilePage_div_0_div_1_p_5_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onClickWarningBanner());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (vm_r5 == null ? null : vm_r5.subscription == null ? null : vm_r5.subscription.planTier == null ? null : vm_r5.subscription.planTier.reference) === ctx_r2.subscriptionTier.LIMITED_YEARLY ? "Your Limited Plan expires in" : "Your Premium Unlimited expires in", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 3, vm_r5.subscription.dates == null ? null : vm_r5.subscription.dates.expired), " days.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(" Extend use");
  }
}
function BusinessProfilePage_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "mat-icon", 17);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BusinessProfilePage_div_0_div_1_p_4_Template, 4, 0, "p", 18)(5, BusinessProfilePage_div_0_div_1_p_5_Template, 7, 5, "p", 18);
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function BusinessProfilePage_div_0_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hideExtentPayment());
    });
    \u0275\u0275elementStart(7, "mat-icon", 20);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", vm_r5.subscription.status === ctx_r2.subscriptionStatus.EXPIRED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r5.subscription.status === ctx_r2.subscriptionStatus.EXPIRING);
  }
}
function BusinessProfilePage_div_0_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4013"));
  }
}
function BusinessProfilePage_div_0_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", "Total active agents:", " ", ctx_r2.businessProfile == null ? null : ctx_r2.businessProfile.agentCount, "");
  }
}
function BusinessProfilePage_div_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "mat-divider", 6);
    \u0275\u0275elementStart(2, "h3", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 24);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementStart(11, "mat-icon", 25);
    \u0275\u0275text(12, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "n4015"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "n4016"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "n4015"), " ");
  }
}
function BusinessProfilePage_div_0_p_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, " Canceling your subscription will switch your account to limited plan, ");
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function BusinessProfilePage_div_0_p_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelSubscription());
    });
    \u0275\u0275text(3, " cancel my premium unlimited subscription ");
    \u0275\u0275elementEnd()();
  }
}
function BusinessProfilePage_div_0_p_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementStart(3, "button", 27);
    \u0275\u0275listener("click", function BusinessProfilePage_div_0_p_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openBusinessDeleteDialog());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n4017"), ", ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "n4018"), " ");
  }
}
function BusinessProfilePage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, BusinessProfilePage_div_0_div_1_Template, 9, 2, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "findqo-business-info-card", 5)(7, "mat-divider", 6);
    \u0275\u0275elementStart(8, "h3", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BusinessProfilePage_div_0_p_11_Template, 3, 3, "p", 8)(12, BusinessProfilePage_div_0_p_12_Template, 2, 2, "p", 8);
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementStart(16, "mat-icon", 10);
    \u0275\u0275text(17, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "mat-divider", 6)(19, "findqo-subscription", 11);
    \u0275\u0275template(20, BusinessProfilePage_div_0_ng_container_20_Template, 13, 9, "ng-container", 12);
    \u0275\u0275element(21, "mat-divider", 6);
    \u0275\u0275template(22, BusinessProfilePage_div_0_p_22_Template, 4, 0, "p", 13)(23, BusinessProfilePage_div_0_p_23_Template, 6, 6, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((vm_r5.subscription == null ? null : vm_r5.subscription.status) === ctx_r2.subscriptionStatus.EXPIRED || (vm_r5.subscription == null ? null : vm_r5.subscription.status) === ctx_r2.subscriptionStatus.EXPIRING) && ctx_r2.isExtendPaymentStrip);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 14, "n4012"));
    \u0275\u0275advance(2);
    \u0275\u0275property("businessProfile", ctx_r2.businessProfile)("isAgentUser", ctx_r2.isAgentUser);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, ctx_r2.isAgentUser ? "n4053" : "n4004"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isAgentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAgentUser);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/" + ctx_r2.appRoute.agentHub.dashboard + "/" + ctx_r2.appRoute.businessProfile.agentList);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 18, "n4014"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("subscriptionInfo", vm_r5.subscription)("isAgentUser", ctx_r2.isAgentUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isAgentUser && (vm_r5 == null ? null : vm_r5.subscription) && (vm_r5 == null ? null : vm_r5.subscription == null ? null : vm_r5.subscription.status) !== ctx_r2.subscriptionStatus.CANCELLED && (vm_r5 == null ? null : vm_r5.subscription == null ? null : vm_r5.subscription.status) !== ctx_r2.subscriptionStatus.EXPIRED && (vm_r5 == null ? null : vm_r5.subscription == null ? null : vm_r5.subscription.planTier == null ? null : vm_r5.subscription.planTier.reference) !== ctx_r2.subscriptionTier.LIMITED_YEARLY && (vm_r5 == null ? null : vm_r5.subscription == null ? null : vm_r5.subscription.subscriptionType) !== ctx_r2.subscriptionType.TRIAL);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isAgentUser);
  }
}
var BusinessProfilePage = class _BusinessProfilePage {
  constructor(myProfileFacade, destroy, myProfileService, dialog, auth, snackBarService, route) {
    this.myProfileFacade = myProfileFacade;
    this.destroy = destroy;
    this.myProfileService = myProfileService;
    this.dialog = dialog;
    this.auth = auth;
    this.snackBarService = snackBarService;
    this.route = route;
    this.buttonType = ButtonType;
    this.agentStatus = AgentStatus;
    this.appRoute = APP_ROUTE;
    this.subscriptionStatus = SubscriptionStatus;
    this.subscriptionTier = SubscriptionTier;
    this.subscriptionType = SubscriptionType;
    this.hasBusinessAccount = false;
    this.selectedFile = null;
    this.isPhotoUploading = false;
    this.isChangeEmail = false;
    this.isExtendPaymentStrip = true;
    this.defaultEmailPlaceholder = DEFAULT_EMAIL_PLACEHOLDER;
    this.isAgentUser = this.auth.user()?.roles?.some((role) => role === "isAgentUser");
    this.searchCounty = new FormControl("");
    this.searchCountyArea = new FormControl("");
    this.countyList$ = this.myProfileFacade.getCountyList$();
    this.countyAreaList$ = this.myProfileFacade.getCountyAreaList$();
    this.businessProfile$ = myProfileFacade.getBusinessProfile$();
    this.inviterName$ = myProfileService.inviterName$;
    this.subscription$ = this.myProfileFacade.getSubscriptionInfo$();
  }
  getUserDetails() {
    this.businessProfile$.pipe(takeUntil(this.destroy)).subscribe((business) => {
      if (business) {
        this.businessProfile = business;
        this.hasBusinessAccount = business?.name ? true : false;
      }
    });
  }
  openBusinessDeleteDialog() {
    this.dialog.open(DeleteBusinessDialogComponent, {
      width: "95%",
      maxWidth: "500px",
      height: "auto"
    });
  }
  cancelSubscription() {
    this.dialog.open(CancelSubscriptionDialogComponent, {
      disableClose: true,
      maxWidth: "500px",
      width: "95%",
      data: this.myProfileFacade.getSubscriptionData()
    }).afterClosed().subscribe((res) => {
      if (res.value) {
        this.myProfileFacade.cancelSubscription(res.value).subscribe(() => {
          this.snackBarService.open({
            data: { message: "Subscription cancelled", type: "success" },
            panelClass: "snackbar-success"
          });
        });
      }
    });
  }
  onClickWarningBanner() {
    document.getElementById("pricingList").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  hideExtentPayment() {
    this.isExtendPaymentStrip = false;
  }
  ngAfterViewInit() {
    this.route.queryParams.pipe().subscribe((res) => {
      const params = res;
      if (params["pricing"]) {
        setTimeout(() => {
          document.getElementById("pricing").scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }
    });
  }
  ngOnInit() {
    this.myProfileFacade.loadBusinessProfile();
    this.getUserDetails();
  }
  static {
    this.\u0275fac = function BusinessProfilePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessProfilePage)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MyProfileService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessProfilePage, selectors: [["findqo-business-profile"]], decls: 7, vars: 24, consts: [["class", "overflow-hidden w-100 h-100 business-profile bg-general-1", 4, "ngIf"], [1, "overflow-hidden", "w-100", "h-100", "business-profile", "bg-general-1"], ["class", "extend-use-strip bg-error-1 mb-4'", 4, "ngIf"], [1, "container", "my-4", "py-4", "px-3", "rounded"], [1, "heading-3", "fg-general-5", "mb-3"], [3, "businessProfile", "isAgentUser"], [1, "my-3"], [1, "heading-3", "fg-general-5"], ["class", "text-body-regular fg-general-5 my-3", 4, "ngIf"], [1, "fg-info-3", "px-0", "text-body-regular", 3, "routerLink"], ["iconPositionEnd", "", 1, "d-inline", "align-middle", "fs-18px"], ["id", "pricing", 3, "subscriptionInfo", "isAgentUser"], [4, "ngIf"], ["class", "text-caption-regular fg-general-3 mb-2", 4, "ngIf"], ["class", "text-caption-regular fg-general-3", 4, "ngIf"], [1, "extend-use-strip", "bg-error-1", "mb-4'"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "justify-content-end", "fg-error-3", "material-symbols-outlined", "rounded", "align-middle", "fs-18px"], ["class", "text-body-regular fg-general-5", 4, "ngIf"], ["mat-icon-button", "", 1, "w-auto", 3, "click"], [1, "material-icons-outline", "fg-general-3", "fs-18px"], [1, "text-body-regular", "fg-general-5"], [1, "fg-prim-2", 3, "click"], [1, "text-body-regular", "fg-general-5", "my-3"], ["mat-button", "", 1, "fg-info-3", "px-0"], ["iconPositionEnd", ""], [1, "text-caption-regular", "fg-general-3", "mb-2"], ["mat-button", "", 1, "px-0", "text-decoration-underline", "text-caption-regular", "h-16px", "fg-general-3", "align-middle", "delete-button", 3, "click"], [1, "text-caption-regular", "fg-general-3"]], template: function BusinessProfilePage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BusinessProfilePage_div_0_Template, 24, 20, "div", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "searchFilter");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "searchFilter");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction4(19, _c1, \u0275\u0275pipeBind3(2, 3, \u0275\u0275pipeBind1(1, 1, ctx.countyList$), ctx.searchCounty == null ? null : ctx.searchCounty.value, \u0275\u0275pureFunction0(17, _c0)), \u0275\u0275pipeBind3(4, 9, \u0275\u0275pipeBind1(3, 7, ctx.countyAreaList$), ctx.searchCountyArea == null ? null : ctx.searchCountyArea.value, \u0275\u0275pureFunction0(18, _c0)), \u0275\u0275pipeBind1(5, 13, ctx.inviterName$), \u0275\u0275pipeBind1(6, 15, ctx.subscription$)));
      }
    }, dependencies: [SharedModule, NgIf, MatButton, MatIconButton, MatIcon, RouterLink, AsyncPipe, SearchFilterPipe, TranslationsPipe, ExpiringInDays, MatDialogModule, MatDividerModule, MatDivider, SubscriptionModule, SubscriptionComponent, BusinessInfoCardModule, BusinessInfoCardComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px !important;\n  background-color: var(--basic-1) !important;\n}\n.extend-use-strip[_ngcontent-%COMP%] {\n  padding: 8px 10px 8px 10px !important;\n  width: 100%;\n  left: 0;\n  z-index: 2;\n}\n.extend-use-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  gap: 10px !important;\n}\n.extend-use-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  overflow: unset !important;\n}\n.pt-64px[_ngcontent-%COMP%] {\n  padding-top: 64px !important;\n}\n.business-profile[_ngcontent-%COMP%] {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .business-profile[_ngcontent-%COMP%] {\n    padding-bottom: 24px !important;\n  }\n}\n.h-16px[_ngcontent-%COMP%] {\n  height: 16px !important;\n}\n.d-inline[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n.delete-button[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: var(--prim-2) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-profile.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessProfilePage, [{
    type: Component,
    args: [{ selector: "findqo-business-profile", imports: [SharedModule, MatDialogModule, MatDividerModule, SubscriptionModule, BusinessInfoCardModule], template: `<div
	class="overflow-hidden w-100 h-100 business-profile bg-general-1"
	*ngIf="{
		countyList: countyList$ | async | searchFilter: searchCounty?.value : ['name'],
		countyAreaList: countyAreaList$ | async | searchFilter: searchCountyArea?.value : ['name'],
		inviterName: inviterName$ | async,
		subscription: subscription$ | async
	} as vm"
>
	<div
		class="extend-use-strip bg-error-1 mb-4'"
		*ngIf="(vm.subscription?.status === subscriptionStatus.EXPIRED || vm.subscription?.status === subscriptionStatus.EXPIRING) && isExtendPaymentStrip"
	>
		<div class="d-flex justify-content-center align-items-center">
			<mat-icon class="justify-content-end fg-error-3 material-symbols-outlined rounded align-middle fs-18px">warning</mat-icon>

			<p *ngIf="vm.subscription.status === subscriptionStatus.EXPIRED" class="text-body-regular fg-general-5">
				Subscription expired!

				<a (click)="onClickWarningBanner()" class="fg-prim-2">Purchase Premium Unlimited now</a>
			</p>

			<p *ngIf="vm.subscription.status === subscriptionStatus.EXPIRING" class="text-body-regular fg-general-5">
				{{ vm?.subscription?.planTier?.reference === subscriptionTier.LIMITED_YEARLY ? 'Your Limited Plan expires in' : 'Your Premium Unlimited expires in' }}

				<span>{{ vm.subscription.dates?.expired | expiringInDays }} days.</span>

				<a (click)="onClickWarningBanner()" class="fg-prim-2">{{ ' Extend use' }}</a>
			</p>

			<button mat-icon-button (click)="hideExtentPayment()" class="w-auto">
				<mat-icon class="material-icons-outline fg-general-3 fs-18px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="container my-4 py-4 px-3 rounded">
		<h3 class="heading-3 fg-general-5 mb-3">{{ 'n4012' | translations }}</h3>

		<findqo-business-info-card [businessProfile]="businessProfile" [isAgentUser]="isAgentUser"></findqo-business-info-card>

		<mat-divider class="my-3"></mat-divider>

		<!-- Manage agent section -->
		<h3 class="heading-3 fg-general-5">{{ (isAgentUser ? 'n4053' : 'n4004') | translations }}</h3>
		<p class="text-body-regular fg-general-5 my-3" *ngIf="!isAgentUser">{{ 'n4013' | translations }}</p>
		<p class="text-body-regular fg-general-5 my-3" *ngIf="isAgentUser">{{ 'Total active agents:' }} {{ businessProfile?.agentCount }}</p>
		<a class="fg-info-3 px-0 text-body-regular" [routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.agentList">
			{{ 'n4014' | translations }}
			<mat-icon iconPositionEnd class="d-inline align-middle fs-18px">arrow_forward</mat-icon>
		</a>

		<mat-divider class="my-3"></mat-divider>

		<findqo-subscription id="pricing" [subscriptionInfo]="vm.subscription" [isAgentUser]="isAgentUser"></findqo-subscription>

		<!-- View Activity section -->
		<!-- this section is hidden for this sprint -->
		<ng-container *ngIf="false">
			<mat-divider class="my-3"></mat-divider>
			<h3 class="heading-3 fg-general-5">{{ 'n4015' | translations }}</h3>
			<p class="text-body-regular fg-general-5 my-3">{{ 'n4016' | translations }}</p>
			<button mat-button class="fg-info-3 px-0">
				{{ 'n4015' | translations }}
				<mat-icon iconPositionEnd>arrow_forward</mat-icon>
			</button>
		</ng-container>
		<mat-divider class="my-3"></mat-divider>

		<p
			class="text-caption-regular fg-general-3 mb-2"
			*ngIf="
				!isAgentUser &&
				vm?.subscription &&
				vm?.subscription?.status !== subscriptionStatus.CANCELLED &&
				vm?.subscription?.status !== subscriptionStatus.EXPIRED &&
				vm?.subscription?.planTier?.reference !== subscriptionTier.LIMITED_YEARLY &&
				vm?.subscription?.subscriptionType !== subscriptionType.TRIAL
			"
		>
			Canceling your subscription will switch your account to limited plan,
			<button
				mat-button
				class="px-0 text-decoration-underline text-caption-regular h-16px fg-general-3 align-middle delete-button"
				(click)="cancelSubscription()"
			>
				cancel my premium unlimited subscription
			</button>
		</p>

		<p class="text-caption-regular fg-general-3" *ngIf="!isAgentUser">
			{{ 'n4017' | translations }},
			<button
				mat-button
				class="px-0 text-decoration-underline text-caption-regular h-16px fg-general-3 align-middle delete-button"
				(click)="openBusinessDeleteDialog()"
			>
				{{ 'n4018' | translations }}
			</button>
		</p>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/pages/business-profile/business-profile.page.scss */\n.container {\n  max-width: 1000px !important;\n  background-color: var(--basic-1) !important;\n}\n.extend-use-strip {\n  padding: 8px 10px 8px 10px !important;\n  width: 100%;\n  left: 0;\n  z-index: 2;\n}\n.extend-use-strip > div {\n  gap: 10px !important;\n}\n.extend-use-strip > div mat-icon {\n  overflow: unset !important;\n}\n.pt-64px {\n  padding-top: 64px !important;\n}\n.business-profile {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .business-profile {\n    padding-bottom: 24px !important;\n  }\n}\n.h-16px {\n  height: 16px !important;\n}\n.d-inline {\n  display: inline !important;\n}\n.delete-button:hover {\n  text-decoration: underline;\n  color: var(--prim-2) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-profile.page.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }, { type: DestroyService }, { type: MyProfileService }, { type: MatDialog }, { type: AuthService }, { type: SnackService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessProfilePage, { className: "BusinessProfilePage", filePath: "apps/findqo-ireland/src/app/feature/my-profile/pages/business-profile/business-profile.page.ts", lineNumber: 30 });
})();
export {
  BusinessProfilePage
};
//# sourceMappingURL=chunk-QEKE4AQF.js.map
