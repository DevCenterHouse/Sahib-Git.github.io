import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-JSBFZMNA.js";
import {
  AdvertiseAgentComponent,
  AdvertiseAgentModule
} from "./chunk-OUZSKFWK.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-NQD7YOJF.js";
import {
  EnquirySentDialogComponent
} from "./chunk-2G7JVEJI.js";
import {
  APP_ROUTE,
  AgentsApi,
  AppEmailValidator,
  AuthService,
  ButtonModule,
  ButtonType,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatDialog,
  MatDialogModule,
  MatDividerModule,
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ProfileState,
  ReactiveFormsModule,
  Router,
  RouterModule,
  SharedModule,
  SnackService,
  TranslationsPipe,
  Validators,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgForOf,
  NgIf,
  NgOptimizedImage,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Injectable,
  NgModule,
  PLATFORM_ID,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent/agent.facade.ts
var AgentFacade = class _AgentFacade {
  constructor(agentApi) {
    this.agentApi = agentApi;
  }
  singupAgent(body) {
    return this.agentApi.agentSignUp(body);
  }
  static {
    this.\u0275fac = function AgentFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentFacade)(\u0275\u0275inject(AgentsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentFacade, factory: _AgentFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AgentsApi }], null);
})();

// apps/findqo-ireland/src/app/feature/agent/agent.component.ts
function AgentPage_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 21)(2, "mat-icon", 49);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 31)(5, "p", 50);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const label_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, label_r2));
  }
}
function AgentPage_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "p", 52)(2, "sub", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 56);
    \u0275\u0275text(9, "+ VAT per month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 57);
    \u0275\u0275listener("click", function AgentPage_div_81_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubscribe());
    });
    \u0275\u0275text(11, "Subscribe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.monthly.originalCost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.monthly.currentCost);
  }
}
function AgentPage_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "p", 52)(2, "sub", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 56);
    \u0275\u0275text(9, "+ VAT yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 59);
    \u0275\u0275text(11, "Save \u20AC 625");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 60);
    \u0275\u0275text(13, "Subscribe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.yearly.originalCost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.yearly.currentCost);
  }
}
function AgentPage_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 21)(2, "mat-icon", 49);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 31)(5, "p", 50);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const label_r5 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, label_r5));
  }
}
function AgentPage_td_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 61)(1, "div", 62)(2, "p", 52)(3, "sub", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 56);
    \u0275\u0275text(10, "+ VAT per month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 63);
    \u0275\u0275listener("click", function AgentPage_td_100_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubscribe());
    });
    \u0275\u0275text(12, "Subscribe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.monthly.originalCost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.monthly.currentCost);
  }
}
function AgentPage_td_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61)(1, "div", 64)(2, "p", 52)(3, "sub", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 56);
    \u0275\u0275text(10, "+ VAT yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 59);
    \u0275\u0275text(12, "Save \u20AC 625");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 65);
    \u0275\u0275text(14, "Subscribe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.yearly.originalCost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.currency);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dataSource.yearly.currentCost);
  }
}
function AgentPage_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "findqo-advertise-agent");
    \u0275\u0275elementContainerEnd();
  }
}
var AgentPage = class _AgentPage {
  constructor(platformId, fb, agentFacade, dialog, snackService, authService, profileState, router, auth) {
    this.platformId = platformId;
    this.fb = fb;
    this.agentFacade = agentFacade;
    this.dialog = dialog;
    this.snackService = snackService;
    this.authService = authService;
    this.profileState = profileState;
    this.router = router;
    this.auth = auth;
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(80), Validators.minLength(3)]],
      email: ["", [Validators.required, AppEmailValidator.validateEmailPattern()]],
      phone: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]]
    });
    this.displayedColumns = ["subscriptionPlan", "includes", "monthlyCost"];
    this.buttonType = ButtonType;
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
    this.dataSource = {
      planName: "Premium Unlimited",
      planDuration: "12 Months Unlimited",
      includes: ["n4085", "n3897", "n3334", "n3888", "n3889", "n3330", "n3890", "n3891", "n3892", "n3893"],
      monthly: {
        currentCost: "135",
        originalCost: "\u20AC295"
      },
      yearly: {
        currentCost: "995",
        originalCost: "\u20AC1620"
      },
      currency: "\u20AC",
      savings: "625"
    };
    this.isMonthly = true;
  }
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
  onSubmit() {
    this.agentFacade.singupAgent(this.form.value).subscribe(() => {
      this.form.reset();
      this.form.get("name").setErrors(null);
      this.form.get("email").setErrors(null);
      this.form.get("phone").setErrors(null);
      this.dialog.open(EnquirySentDialogComponent, {
        width: "100%",
        maxWidth: "500px",
        height: "auto"
      });
    }, () => {
      this.snackService.open({
        data: { translationKey: "n608" },
        panelClass: ["snackbar-error"]
      });
    });
  }
  static {
    this.\u0275fac = function AgentPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentPage)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AgentFacade), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProfileState), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentPage, selectors: [["findqo-agent"]], standalone: false, decls: 108, vars: 61, consts: [["phoneNumber", "matInput"], [1, "main-container"], [1, "container", "px-lg-0"], [1, "heading-1", "fg-general-5", "mb-1"], [1, "heading-4-medium", "fg-general-5"], [1, "fg-prim-2"], [1, "row", "row-cols-1", "row-cols-lg-auto", "mt-4", "justify-content-lg-between", "justify-content-center", "align-items-center"], [1, "col", "py-4", "px-2", "form-container"], [3, "formGroup"], [1, "text-paragraph-regular", "mb-4"], [1, "text-body-regular", "fg-general-4"], ["appearance", "outline", 1, "no-subscript", "my-2"], ["matInput", "", "formControlName", "name", 1, "text-body-regular"], ["matInput", "", "formControlName", "email", 1, "text-body-regular"], ["appearance", "outline", 1, "no-subscript", "mt-2"], ["matInput", "", "matInput", "", "id", "phoneNumber", "minlength", "7", "maxlength", "10", "formControlName", "phone", "type", "tel"], ["mat-flat-button", "", "color", "primary", 1, "rounded-pill", "w-100", "mt-4", 3, "click", "disabled"], [1, "col-auto", "py-4", "text-center"], [1, "heading-2", "fg-general-5"], [1, "horizontal-line", "mx-auto"], [1, "row", "gap-2", "align-items-center"], [1, "col-auto"], ["ngSrc", "assets/images/contact-us/kara-profile-image.webp", "alt", "kara profile", "width", "68", "height", "68", "priority", ""], [1, "col", "text-start"], [1, "heading-3", "fg-general-5"], [1, "text-caption-regular", "fg-general-5"], [1, "d-flex", "align-items-center", "mt-3"], [1, "fg-prim-2", "fs-18px", "material-icons-outlined"], ["href", "mailto:kara@findqo.ie", 1, "fg-prim-2", "heading-4-medium", "me-4"], ["href", "tel:+353851859159", "data-rel", "external", 1, "fg-prim-2", "heading-4-medium"], [1, "row", "align-items-center", "mt-5", "mb-2"], [1, "col"], [1, "badge-text"], ["color", "primary", 3, "click", "checked"], [1, "border", "rounded", "px-3", "py-4", "mt-3", "d-md-none"], [1, "heading-4-medium", "fg-general-5", "mb-4"], [1, "heading-3-medium", "fg-general-5", "mb-3"], ["class", "row gap-1 mb-2", 4, "ngFor", "ngForOf"], ["class", "h-100 d-flex flex-column justify-content-center w-100 mt-3", 4, "ngIf"], ["class", "h-100 d-flex flex-column justify-content-center gap-2 mt-3", 4, "ngIf"], [1, "w-100", "mt-3", "d-none", "d-md-table"], [1, "h-lg-100", "d-flex", "gap-1", "flex-lg-column", "justify-content-lg-center", "align-items-center"], [1, "heading-3-medium", "fg-general-5", "align-middle"], [1, "pe-0"], ["class", "price-section", 4, "ngIf"], [1, "advertise-container"], [1, "heading-3-medium", "fg-general-5", "px-3", "px-md-0"], [4, "ngIf"], [1, "row", "gap-1", "mb-2"], [1, "fg-success-3", "icon-15px"], [1, "fg-general-5", "text-body-regular"], [1, "h-100", "d-flex", "flex-column", "justify-content-center", "w-100", "mt-3"], [1, "text-center"], [1, "text-caption-regular", "fg-general-4", "deleted-text"], [1, "text-body-medium", "fg-general-5", "align-top"], [1, "heading-1", "fg-general-5"], [1, "align-top", "text-caption-regular", "fg-general-4"], ["mat-button", "", 1, "w-100", "fg-basic-1", "bg-prim-2", "text-body-regular", "p-2", "rounded-pill", "mt-3", 3, "click"], [1, "h-100", "d-flex", "flex-column", "justify-content-center", "gap-2", "mt-3"], [1, "text-body-regular", "fg-prim-2", "text-center"], ["mat-button", "", 1, "w-100", "fg-neutral-3", "bg-neutral-2", "text-body-regular", "p-2", "rounded-pill", "mt-3"], [1, "price-section"], [1, "h-100", "d-lg-flex", "flex-lg-column", "justify-content-lg-center", "w-100"], ["mat-button", "", 1, "w-100", "fg-basic-1", "bg-prim-2", "text-body-regular", "p-2", "rounded", "mt-40px", 3, "click"], [1, "h-100", "d-lg-flex", "flex-lg-column", "justify-content-lg-center", "gap-2"], ["mat-button", "", 1, "w-100", "fg-neutral-3", "bg-neutral-2", "text-body-regular", "p-2", "rounded", "mt-3", "subscribe-cursor"]], template: function AgentPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h4", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translations");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "form", 8)(16, "p", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-label", 10);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 11);
        \u0275\u0275element(23, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-label", 10);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-form-field", 11);
        \u0275\u0275element(28, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-label", 10);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-form-field", 14);
        \u0275\u0275element(33, "input", 15, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 16);
        \u0275\u0275listener("click", function AgentPage_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275text(36, "Submit");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 17)(38, "h2", 18);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "div", 19);
        \u0275\u0275elementStart(42, "div", 20)(43, "div", 21);
        \u0275\u0275element(44, "img", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 23)(46, "h3", 24);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p", 25);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 26)(53, "mat-icon", 27);
        \u0275\u0275text(54, "mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "a", 28);
        \u0275\u0275text(56, "kara@findqo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-icon", 27);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 29);
        \u0275\u0275text(61, "0851859159");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 30)(63, "div", 31)(64, "h2", 18);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 32);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 21);
        \u0275\u0275text(71, " Yearly ");
        \u0275\u0275elementStart(72, "mat-slide-toggle", 33);
        \u0275\u0275listener("click", function AgentPage_Template_mat_slide_toggle_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isMonthly = !ctx.isMonthly);
        });
        \u0275\u0275text(73, "Monthly");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 34)(75, "h4", 35);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "h3", 36);
        \u0275\u0275text(79);
        \u0275\u0275elementEnd();
        \u0275\u0275template(80, AgentPage_div_80_Template, 8, 3, "div", 37)(81, AgentPage_div_81_Template, 12, 3, "div", 38)(82, AgentPage_div_82_Template, 14, 3, "div", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "table", 40)(84, "thead")(85, "tr")(86, "th", 4);
        \u0275\u0275text(87, "Subscription Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "th", 4);
        \u0275\u0275text(89, "Includes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "th", 4);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "tbody")(93, "tr")(94, "td")(95, "div", 41)(96, "h3", 42);
        \u0275\u0275text(97);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "td", 43);
        \u0275\u0275template(99, AgentPage_div_99_Template, 8, 3, "div", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275template(100, AgentPage_td_100_Template, 13, 3, "td", 44)(101, AgentPage_td_101_Template, 15, 3, "td", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(102, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 45)(104, "h3", 46);
        \u0275\u0275text(105);
        \u0275\u0275pipe(106, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(107, AgentPage_ng_container_107_Template, 2, 0, "ng-container", 47);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 29, "n3281"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 31, "n3854"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 33, "n3855"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 35, "n3856"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 37, "n3857"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 39, "n3858"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 41, "n82"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 43, "n80"));
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 45, "n3859"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 47, "n3860"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 49, "n3861"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 51, "n3862"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 53, "n3283"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 55, "n3863"));
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.isMonthly);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 57, "n3438"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.dataSource.planName);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.dataSource.includes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMonthly);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isMonthly);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isMonthly ? "Monthly Cost" : "Yearly Cost");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.dataSource.planName);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.dataSource.includes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMonthly);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isMonthly);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 59, "n3866"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isPlatformBrowser);
      }
    }, dependencies: [NgForOf, NgIf, MatButton, MatIcon, NgOptimizedImage, MatInput, MatFormField, MatLabel, AdvertiseAgentComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, MatSlideToggle, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 48px;\n  padding-bottom: 48px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--prim-2);\n}\n.divider-opacity[_ngcontent-%COMP%] {\n  opacity: 0.15;\n}\n.divider-margin[_ngcontent-%COMP%] {\n  margin-top: 72px;\n  margin-bottom: 72px;\n}\n.w-34px[_ngcontent-%COMP%] {\n  width: 34px;\n}\n.w-52px[_ngcontent-%COMP%] {\n  width: 52px;\n}\n.w-100px[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.mt-48px[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.mt-60px[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.mx-60px[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n.pb-56px[_ngcontent-%COMP%] {\n  padding-bottom: 56px;\n}\n.connect-btn[_ngcontent-%COMP%] {\n  max-width: 250px;\n  height: 40px;\n  padding: 0px 16px;\n  background: var(--prim-2);\n  border: none;\n}\n.section-content[_ngcontent-%COMP%] {\n  max-width: 450px;\n  min-width: 300px;\n}\n.tenantin-img[_ngcontent-%COMP%] {\n  max-width: 423px;\n  max-height: 265px;\n}\n.header-img[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.header-img[_ngcontent-%COMP%]   .hero-header-img[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.footer-section[_ngcontent-%COMP%] {\n  margin-top: 72px;\n  height: 280px;\n}\n.footer-section[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n  width: 459px;\n}\n.video-img[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  filter: brightness(0.7);\n}\n.centered[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 5px;\n  background-color: var(--prim-2);\n  opacity: 15%;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n.form-container[_ngcontent-%COMP%] {\n  max-width: 600px !important;\n}\n.badge-text[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  background-color: var(--general-5);\n  color: var(--basic-1);\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n@media (min-width: 992px) {\n  .h-lg-100[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .border-lg[_ngcontent-%COMP%] {\n    border: 1px solid var(--neutral-2) !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .divider-margin[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .footer-section[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .hero-header-img[_ngcontent-%COMP%] {\n    max-height: 275px;\n  }\n  .video-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntd[_ngcontent-%COMP%], \nth[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-2) !important;\n  padding: 16px 12px 16px 16px !important;\n}\n.deleted-text[_ngcontent-%COMP%] {\n  text-decoration: line-through !important;\n}\n@media (min-width: 768px) {\n  .advertise-container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.icon-15px[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.mt-40px[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.subscribe-cursor[_ngcontent-%COMP%] {\n  cursor: context-menu !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentPage, [{
    type: Component,
    args: [{ selector: "findqo-agent", standalone: false, template: `<div class="main-container">
	<div class="container px-lg-0">
		<h1 class="heading-1 fg-general-5 mb-1">{{ 'n3281' | translations }}</h1>

		<h4 class="heading-4-medium fg-general-5">
			{{ 'n3854' | translations }}
			<span class="fg-prim-2">{{ 'n3855' | translations }}</span>
			{{ 'n3856' | translations }}
		</h4>

		<div class="row row-cols-1 row-cols-lg-auto mt-4 justify-content-lg-between justify-content-center align-items-center">
			<div class="col py-4 px-2 form-container">
				<form [formGroup]="form">
					<p class="text-paragraph-regular mb-4">{{ 'n3857' | translations }}</p>

					<mat-label class="text-body-regular fg-general-4">{{ 'n3858' | translations }}</mat-label>
					<mat-form-field appearance="outline" class="no-subscript my-2">
						<input matInput class="text-body-regular" formControlName="name" />
					</mat-form-field>

					<mat-label class="text-body-regular fg-general-4">{{ 'n82' | translations }}</mat-label>
					<mat-form-field appearance="outline" class="no-subscript my-2">
						<input matInput class="text-body-regular" formControlName="email" />
					</mat-form-field>

					<mat-label class="text-body-regular fg-general-4">{{ 'n80' | translations }}</mat-label>
					<mat-form-field appearance="outline" class="no-subscript mt-2">
						<input matInput matInput id="phoneNumber" #phoneNumber="matInput" minlength="7" maxlength="10" formControlName="phone" type="tel" />
					</mat-form-field>

					<button (click)="onSubmit()" mat-flat-button [disabled]="form.invalid" color="primary" class="rounded-pill w-100 mt-4">Submit</button>
				</form>
			</div>

			<div class="col-auto py-4 text-center">
				<h2 class="heading-2 fg-general-5">{{ 'n3859' | translations }}</h2>
				<div class="horizontal-line mx-auto"></div>

				<div class="row gap-2 align-items-center">
					<div class="col-auto">
						<img ngSrc="assets/images/contact-us/kara-profile-image.webp" alt="kara profile" width="68" height="68" priority />
					</div>

					<div class="col text-start">
						<h3 class="heading-3 fg-general-5">{{ 'n3860' | translations }}</h3>
						<p class="text-caption-regular fg-general-5">{{ 'n3861' | translations }}</p>
					</div>
				</div>

				<div class="d-flex align-items-center mt-3">
					<mat-icon class="fg-prim-2 fs-18px material-icons-outlined">mail</mat-icon>
					<a href="mailto:kara@findqo.ie" class="fg-prim-2 heading-4-medium me-4">kara&#64;findqo.ie</a>
					<mat-icon class="fg-prim-2 fs-18px material-icons-outlined">{{ 'n3862' | translations }}</mat-icon>
					<a class="fg-prim-2 heading-4-medium" href="tel:+353851859159" data-rel="external">0851859159</a>
				</div>
			</div>
		</div>

		<div class="row align-items-center mt-5 mb-2">
			<div class="col">
				<h2 class="heading-2 fg-general-5">{{ 'n3283' | translations }}</h2>
				<span class="badge-text">{{ 'n3863' | translations }}</span>
			</div>

			<div class="col-auto">
				Yearly
				<mat-slide-toggle [checked]="isMonthly" color="primary" (click)="isMonthly = !isMonthly">Monthly</mat-slide-toggle>
			</div>
		</div>

		<div class="border rounded px-3 py-4 mt-3 d-md-none">
			<h4 class="heading-4-medium fg-general-5 mb-4">{{ 'n3438' | translations }}</h4>
			<h3 class="heading-3-medium fg-general-5 mb-3">{{ dataSource.planName }}</h3>

			<div class="row gap-1 mb-2" *ngFor="let label of dataSource.includes">
				<div class="col-auto">
					<mat-icon class="fg-success-3 icon-15px">check_circle</mat-icon>
				</div>

				<div class="col">
					<p class="fg-general-5 text-body-regular">{{ label | translations }}</p>
				</div>
			</div>

			<div *ngIf="isMonthly" class="h-100 d-flex flex-column justify-content-center w-100 mt-3">
				<p class="text-center">
					<sub class="text-caption-regular fg-general-4 deleted-text">{{ dataSource.monthly.originalCost }}</sub>
					<span class="text-body-medium fg-general-5 align-top">{{ dataSource.currency }}</span>
					<span class="heading-1 fg-general-5">{{ dataSource.monthly.currentCost }}</span>
					<span class="align-top text-caption-regular fg-general-4">+ VAT per month</span>
				</p>

				<button mat-button class="w-100 fg-basic-1 bg-prim-2 text-body-regular p-2 rounded-pill mt-3" (click)="onSubscribe()">Subscribe</button>
			</div>

			<div *ngIf="!isMonthly" class="h-100 d-flex flex-column justify-content-center gap-2 mt-3">
				<p class="text-center">
					<sub class="text-caption-regular fg-general-4 deleted-text">{{ dataSource.yearly.originalCost }}</sub>
					<span class="text-body-medium fg-general-5 align-top">{{ dataSource.currency }}</span>
					<span class="heading-1 fg-general-5">{{ dataSource.yearly.currentCost }}</span>
					<span class="align-top text-caption-regular fg-general-4">+ VAT yearly</span>
				</p>

				<span class="text-body-regular fg-prim-2 text-center">Save \u20AC 625</span>

				<button mat-button class="w-100 fg-neutral-3 bg-neutral-2 text-body-regular p-2 rounded-pill mt-3">Subscribe</button>
			</div>
		</div>

		<table class="w-100 mt-3 d-none d-md-table">
			<thead>
				<tr>
					<th class="heading-4-medium fg-general-5">Subscription Plan</th>
					<th class="heading-4-medium fg-general-5">Includes</th>
					<th class="heading-4-medium fg-general-5">{{ isMonthly ? 'Monthly Cost' : 'Yearly Cost' }}</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						<div class="h-lg-100 d-flex gap-1 flex-lg-column justify-content-lg-center align-items-center">
							<h3 class="heading-3-medium fg-general-5 align-middle">{{ dataSource.planName }}</h3>
						</div>
					</td>

					<td class="pe-0">
						<div class="row gap-1 mb-2" *ngFor="let label of dataSource.includes">
							<div class="col-auto">
								<mat-icon class="fg-success-3 icon-15px">check_circle</mat-icon>
							</div>

							<div class="col">
								<p class="fg-general-5 text-body-regular">{{ label | translations }}</p>
							</div>
						</div>
					</td>

					<td *ngIf="isMonthly" class="price-section">
						<div class="h-100 d-lg-flex flex-lg-column justify-content-lg-center w-100">
							<p class="text-center">
								<sub class="text-caption-regular fg-general-4 deleted-text">{{ dataSource.monthly.originalCost }}</sub>
								<span class="text-body-medium fg-general-5 align-top">{{ dataSource.currency }}</span>
								<span class="heading-1 fg-general-5">{{ dataSource.monthly.currentCost }}</span>
								<span class="align-top text-caption-regular fg-general-4">+ VAT per month</span>
							</p>
						</div>

						<button mat-button class="w-100 fg-basic-1 bg-prim-2 text-body-regular p-2 rounded mt-40px" (click)="onSubscribe()">Subscribe</button>
					</td>

					<td *ngIf="!isMonthly" class="price-section">
						<div class="h-100 d-lg-flex flex-lg-column justify-content-lg-center gap-2">
							<p class="text-center">
								<sub class="text-caption-regular fg-general-4 deleted-text">{{ dataSource.yearly.originalCost }}</sub>
								<span class="text-body-medium fg-general-5 align-top">{{ dataSource.currency }}</span>
								<span class="heading-1 fg-general-5">{{ dataSource.yearly.currentCost }}</span>
								<span class="align-top text-caption-regular fg-general-4">+ VAT yearly</span>
							</p>

							<span class="text-body-regular fg-prim-2 text-center">Save \u20AC 625</span>
						</div>

						<button mat-button class="w-100 fg-neutral-3 bg-neutral-2 text-body-regular p-2 rounded mt-3 subscribe-cursor">Subscribe</button>
					</td>
				</tr>
			</tbody>
		</table>

		<div class="horizontal-line mx-auto"></div>
	</div>

	<div class="advertise-container">
		<h3 class="heading-3-medium fg-general-5 px-3 px-md-0">{{ 'n3866' | translations }}</h3>
		<ng-container *ngIf="isPlatformBrowser">
			<findqo-advertise-agent></findqo-advertise-agent>
		</ng-container>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent/agent.component.scss */\n.container {\n  max-width: 1000px;\n}\n.main-container {\n  padding-top: 48px;\n  padding-bottom: 48px;\n}\n.divider {\n  height: 5px;\n  background: var(--prim-2);\n}\n.divider-opacity {\n  opacity: 0.15;\n}\n.divider-margin {\n  margin-top: 72px;\n  margin-bottom: 72px;\n}\n.w-34px {\n  width: 34px;\n}\n.w-52px {\n  width: 52px;\n}\n.w-100px {\n  width: 100px;\n}\n.mt-48px {\n  margin-top: 48px;\n}\n.mt-60px {\n  margin-top: 60px;\n}\n.mx-60px {\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n.pb-56px {\n  padding-bottom: 56px;\n}\n.connect-btn {\n  max-width: 250px;\n  height: 40px;\n  padding: 0px 16px;\n  background: var(--prim-2);\n  border: none;\n}\n.section-content {\n  max-width: 450px;\n  min-width: 300px;\n}\n.tenantin-img {\n  max-width: 423px;\n  max-height: 265px;\n}\n.header-img {\n  margin-top: 40px;\n}\n.header-img .hero-header-img {\n  max-width: 900px;\n}\n.footer-section {\n  margin-top: 72px;\n  height: 280px;\n}\n.footer-section .img-content {\n  width: 459px;\n}\n.video-img {\n  border-radius: 15px;\n  filter: brightness(0.7);\n}\n.centered {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.horizontal-line {\n  width: 100px;\n  height: 5px;\n  background-color: var(--prim-2);\n  opacity: 15%;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n.form-container {\n  max-width: 600px !important;\n}\n.badge-text {\n  padding-left: 8px;\n  padding-right: 8px;\n  background-color: var(--general-5);\n  color: var(--basic-1);\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n@media (min-width: 992px) {\n  .h-lg-100 {\n    height: 100%;\n  }\n  .border-lg {\n    border: 1px solid var(--neutral-2) !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .divider-margin {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .footer-section {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .hero-header-img {\n    max-height: 275px;\n  }\n  .video-img {\n    width: 100%;\n    height: 100%;\n  }\n}\n.full-width-table {\n  width: 100%;\n  border-collapse: collapse;\n}\ntd,\nth {\n  border: 1px solid var(--neutral-2) !important;\n  padding: 16px 12px 16px 16px !important;\n}\n.deleted-text {\n  text-decoration: line-through !important;\n}\n@media (min-width: 768px) {\n  .advertise-container {\n    max-width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.icon-15px {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.mt-40px {\n  margin-top: 40px;\n}\n.subscribe-cursor {\n  cursor: context-menu !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: FormBuilder }, { type: AgentFacade }, { type: MatDialog }, { type: SnackService }, { type: AuthService }, { type: ProfileState }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentPage, { className: "AgentPage", filePath: "apps/findqo-ireland/src/app/feature/agent/agent.component.ts", lineNumber: 22 });
})();

// apps/findqo-ireland/src/app/feature/agent/agent-routing.module.ts
var routes = [
  {
    path: "",
    component: AgentPage
  }
];
var AgentRoutingModule = class _AgentRoutingModule {
  static {
    this.\u0275fac = function AgentRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent/components/enquiry-sent-dialog/enquiry-sent-dialog.module.ts
var EnquirySentDialogModule = class _EnquirySentDialogModule {
  static {
    this.\u0275fac = function EnquirySentDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquirySentDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EnquirySentDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquirySentDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [EnquirySentDialogComponent],
      imports: [SharedModule, MatDialogModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent/agent.module.ts
var AgentModule = class _AgentModule {
  static {
    this.\u0275fac = function AgentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      MatInputModule,
      AgentRoutingModule,
      ButtonModule,
      EnquirySentDialogModule,
      AdvertiseAgentModule,
      FormsModule,
      ReactiveFormsModule,
      MatDividerModule,
      MatSlideToggleModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentModule, [{
    type: NgModule,
    args: [{
      declarations: [AgentPage],
      imports: [
        SharedModule,
        MatInputModule,
        AgentRoutingModule,
        ButtonModule,
        EnquirySentDialogModule,
        AdvertiseAgentModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatSlideToggleModule
      ]
    }]
  }], null, null);
})();
export {
  AgentModule
};
//# sourceMappingURL=chunk-TN3MQZBW.js.map
