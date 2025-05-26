import {
  EnquirySentDialogComponent
} from "./chunk-2G7JVEJI.js";
import {
  MatAutocompleteModule
} from "./chunk-5J2JGDL5.js";
import {
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  AgentsApi,
  AppEmailValidator,
  ButtonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatDialog,
  MatDividerModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RouterModule,
  SharedModule,
  SnackService,
  TranslationsPipe,
  VALIDATOR,
  Validators,
  ViewportService,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Injectable,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/sellerLead/sellerLead.facade.ts
var SellerLeadFacade = class _SellerLeadFacade {
  constructor(agentApi) {
    this.agentApi = agentApi;
  }
  singupAgentV2(body) {
    return this.agentApi.agentSignUp(body);
  }
  static {
    this.\u0275fac = function SellerLeadFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerLeadFacade)(\u0275\u0275inject(AgentsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SellerLeadFacade, factory: _SellerLeadFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerLeadFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AgentsApi }], null);
})();

// apps/findqo-ireland/src/app/feature/sellerLead/sign-up-section.page/sign-up-section.page.ts
var _c0 = ["phoneNumber"];
function SignUpSectionPage_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 49);
    \u0275\u0275text(1, "Please enter a valid name.");
    \u0275\u0275elementEnd();
  }
}
function SignUpSectionPage_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 49);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function SignUpSectionPage_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 49);
    \u0275\u0275text(1, "Please enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function SignUpSectionPage_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 49);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
function SignUpSectionPage_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 49);
    \u0275\u0275text(1, " Please enter a valid phone number. ");
    \u0275\u0275elementEnd();
  }
}
function SignUpSectionPage_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 49);
    \u0275\u0275text(1, "This is a required field");
    \u0275\u0275elementEnd();
  }
}
var SignUpSectionPage = class _SignUpSectionPage {
  constructor(viewport, snack, dialog, fb, sellerLeadFacade) {
    this.viewport = viewport;
    this.snack = snack;
    this.dialog = dialog;
    this.fb = fb;
    this.sellerLeadFacade = sellerLeadFacade;
    this.form = this.fb.group({
      companyName: [""],
      email: ["", [Validators.required, AppEmailValidator.validateEmailPattern()]],
      name: ["", [Validators.required, VALIDATOR.pattern.name, Validators.minLength(3)]],
      phone: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$"), Validators.minLength(7)]]
    });
    this.submitLoading = false;
  }
  onClickLink() {
    const headerOffset = 125;
    const element = document.getElementById("pricingList");
    window.scrollTo({
      top: element.offsetTop - headerOffset,
      behavior: "smooth"
    });
  }
  onSubmit() {
    if (this.form.invalid || this.submitLoading)
      return;
    this.submitLoading = true;
    const FORM = this.form.getRawValue();
    const PAYLOAD = __spreadProps(__spreadValues({}, FORM), {
      enquiredBy: FORM.name,
      name: FORM.companyName
    });
    delete PAYLOAD.companyName;
    this.sellerLeadFacade.singupAgentV2(PAYLOAD).subscribe({
      next: () => {
        this.submitLoading = false;
        this.form.reset();
        this.form.get("name").setErrors(null);
        this.form.get("email").setErrors(null);
        this.form.get("phone").setErrors(null);
        this.dialog.open(EnquirySentDialogComponent, {
          width: "100%",
          maxWidth: "500px",
          height: "auto"
        });
      },
      error: () => {
        this.submitLoading = false;
        this.snack.open({
          data: { translationKey: "n608" },
          panelClass: ["snackbar-error"]
        });
      }
    });
  }
  mouseClick() {
    setTimeout(() => {
      this.phoneNumber?.focus();
    }, 200);
  }
  static {
    this.\u0275fac = function SignUpSectionPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignUpSectionPage)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SellerLeadFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignUpSectionPage, selectors: [["findqo-sign-up-section-page"]], viewQuery: function SignUpSectionPage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneNumber = _t.first);
      }
    }, decls: 93, vars: 14, consts: [["phone", ""], ["phoneNumber", "matInput"], [1, "signup-container", "row", "justify-content-between", "gap-4", "gap-lg-0", "px-2", "py-3", "px-lg-5", "py-lg-4"], [1, "col-12", "col-lg-6", "px-0", "form-container"], [3, "formGroup"], [1, "heading-3-medium", "mb-1"], [1, "text-paragraph-regular", "mb-3"], [1, "gap-1", "my-2"], [1, "text-body-regular", "fg-general-4"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "formControlName", "companyName", "placeholder", "Estate Agency", 1, "text-body-regular"], [1, "gap-1", "mt-2"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "name", "placeholder", "Name", 1, "text-body-regular"], ["class", "text-caption-regular fg-error-3", 4, "ngIf"], ["matInput", "", "formControlName", "email", "placeholder", "Email", 1, "text-body-regular"], [1, "col-md-6", "col-12", "mt-2", "mb-2", "w-100"], [1, "text-body-regular", "fg-general-4", "d-block"], ["for", "phoneNumber", "subscriptSizing", "dynamic", "appearance", "outline"], [1, "input", "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0", "w-40px"], [1, "fs-14px", "fs-sm-16px", "text-body-regular", "fg-general-5"], [1, "col", "ps-2", "pe-0"], ["placeholder", "Phone Number", "matInput", "", "id", "phoneNumber", "minlength", "7", "maxlength", "10", "formControlName", "phone", "type", "tel", 3, "mousedown"], ["mat-flat-button", "", "color", "primary", 1, "rounded-pill", "w-100", "mt-3", 3, "click", "disabled"], [1, "col-12", "col-lg-4", "px-0"], [1, "fs-16px", "fw-600", "fg-general-5", "mb-1", "text-center", "text-md-start"], [1, "horizontal-line", "mb-3", "mb-lg-4", "mx-auto", "mx-lg-0"], [1, "mt-4", "row", "gap-2", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "col-auto"], ["ngSrc", "assets/images/contact-us/kara-profile-image.webp", "alt", "kara profile", "width", "64", "height", "64", "priority", ""], [1, "col-auto", "col-lg", "text-start"], [1, "heading-3", "fg-general-5", "mb-2"], [1, "text-caption-regular", "fg-general-5"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start", "mt-2", "mt-lg-3", "px-2"], [1, "fg-prim-2"], [1, "material-symbols-outlined", "fs-16px"], ["href", "mailto:kara@findqo.ie", 1, "fg-prim-2", "fs-14px", "me-4"], ["href", "tel:+353851859159", "data-rel", "external", 1, "fg-prim-2", "fs-14px"], [1, "mt-4", "mt-lg-6", "px-2", "px-lg-0"], [1, "d-flex", "gap-2", "align-items-center", "mb-2"], [1, "check-circle", "rounded-circle", "d-flex", "align-items-center", "justify-content-center"], [1, "material-symbols-outlined", "fs-14px", "fg-prim-2"], [1, "fg-general-4", "fs-10px", "fs-md-12px"], [1, "fg-prim-2", "text-decoration-underline", "cursor-pointer", 3, "click"], [1, "text-caption-regular", "fg-error-3"]], template: function SignUpSectionPage_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "form", 4)(3, "h3", 5);
        \u0275\u0275text(4, "Sign up Today");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 6);
        \u0275\u0275text(6, " Get 1 Year FREE Limited, or Subscribe to Premium Unlimited for \u20AC135/month + VAT to access seller leads, dedicated marketing, and more. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "mat-label", 8);
        \u0275\u0275text(9, "Estate Agency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 9);
        \u0275\u0275element(11, "input", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 11)(13, "mat-label", 8);
        \u0275\u0275text(14, "Name*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 12);
        \u0275\u0275element(16, "input", 13);
        \u0275\u0275template(17, SignUpSectionPage_mat_error_17_Template, 2, 0, "mat-error", 14)(18, SignUpSectionPage_mat_error_18_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 11)(20, "mat-label", 8);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-form-field", 12);
        \u0275\u0275element(24, "input", 15);
        \u0275\u0275template(25, SignUpSectionPage_mat_error_25_Template, 2, 0, "mat-error", 14)(26, SignUpSectionPage_mat_error_26_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 16)(28, "mat-label", 17);
        \u0275\u0275text(29, "Phone Number*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-form-field", 18, 0)(32, "div", 19)(33, "div", 20)(34, "mat-select-trigger")(35, "div", 21)(36, "div", 22);
        \u0275\u0275element(37, "img", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 24)(39, "p", 25);
        \u0275\u0275text(40, "+353");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "div", 26)(42, "input", 27, 1);
        \u0275\u0275listener("mousedown", function SignUpSectionPage_Template_input_mousedown_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mouseClick());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(44, SignUpSectionPage_mat_error_44_Template, 2, 0, "mat-error", 14)(45, SignUpSectionPage_mat_error_45_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "button", 28);
        \u0275\u0275listener("click", function SignUpSectionPage_Template_button_click_46_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275text(47, "Sign Up Today");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 29)(49, "p", 30);
        \u0275\u0275text(50, "Let's Talk");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "div", 31);
        \u0275\u0275elementStart(52, "div", 32)(53, "div", 33);
        \u0275\u0275element(54, "img", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 35)(56, "h3", 36);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 37);
        \u0275\u0275text(60, "FindQo.ie | Senior Account Executive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 38)(62, "mat-icon", 39)(63, "span", 40);
        \u0275\u0275text(64, "mail");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "a", 41);
        \u0275\u0275text(66, "kara@findqo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-icon", 39)(68, "span", 40);
        \u0275\u0275text(69, "call");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "a", 42);
        \u0275\u0275text(71, "0851859159");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 43)(73, "div", 44)(74, "mat-icon", 45)(75, "span", 46);
        \u0275\u0275text(76, "check");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "p", 47);
        \u0275\u0275text(78, "List your Estate Agency or Business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 44)(80, "mat-icon", 45)(81, "span", 46);
        \u0275\u0275text(82, "check");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "p", 47);
        \u0275\u0275text(84, " Learn about ");
        \u0275\u0275elementStart(85, "span", 48);
        \u0275\u0275listener("click", function SignUpSectionPage_Template_span_click_85_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onClickLink());
        });
        \u0275\u0275text(86, "Free and Premium features");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 44)(88, "mat-icon", 45)(89, "span", 46);
        \u0275\u0275text(90, "check");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "p", 47);
        \u0275\u0275text(92, "Talk about Seller Leads, In-person Valuation, Property listings, Unlimited enquiries, and more");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("name")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 10, "n82"), "*");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["emailPattern"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("phone")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]) || ((tmp_8_0 = ctx.form.get("phone")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["minlength"]));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_9_0 = ctx.form.get("phone")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.form == null ? null : ctx.form.invalid);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 12, "n3860"));
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinLengthValidator,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      SharedModule,
      NgIf,
      MatButton,
      MatIcon,
      NgOptimizedImage,
      TranslationsPipe,
      MatDividerModule,
      ButtonModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatIconModule,
      MatInputModule,
      MatInput,
      MatAutocompleteModule,
      MatSelectModule,
      MatSelectTrigger,
      RouterModule
    ], styles: ["\n\n.signup-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 5px;\n  opacity: 15%;\n  background-color: var(--prim-2);\n  border-radius: 100px;\n}\n.check-circle[_ngcontent-%COMP%] {\n  background: rgba(255, 90, 184, 0.149);\n  flex-shrink: 0;\n}\n.badge-text[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  background-color: var(--general-5);\n  color: var(--basic-1);\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-2) !important;\n  padding: 16px 12px 16px 16px !important;\n}\ntable[_ngcontent-%COMP%]   th.subscription-offers[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td.subscription-offers[_ngcontent-%COMP%] {\n  max-width: 638px;\n  word-wrap: break-word;\n}\ntable[_ngcontent-%COMP%]   td.subscription-offers[_ngcontent-%COMP%]    > findqo-subscription-offers[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 180px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/sign-up-section.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignUpSectionPage, [{
    type: Component,
    args: [{ selector: "findqo-sign-up-section-page", imports: [
      ReactiveFormsModule,
      SharedModule,
      MatDividerModule,
      ButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatAutocompleteModule,
      MatSelectModule,
      RouterModule
    ], template: `<div class="signup-container row justify-content-between gap-4 gap-lg-0 px-2 py-3 px-lg-5 py-lg-4">
	<div class="col-12 col-lg-6 px-0 form-container">
		<form [formGroup]="form">
			<h3 class="heading-3-medium mb-1">Sign up Today</h3>
			<p class="text-paragraph-regular mb-3">
				Get 1 Year FREE Limited, or Subscribe to Premium Unlimited for \u20AC135/month + VAT to access seller leads, dedicated marketing, and more.
			</p>

			<div class="gap-1 my-2">
				<mat-label class="text-body-regular fg-general-4">Estate Agency</mat-label>
				<mat-form-field appearance="outline" class="no-subscript">
					<input matInput class="text-body-regular" formControlName="companyName" placeholder="Estate Agency" />
				</mat-form-field>
			</div>

			<div class="gap-1 mt-2">
				<mat-label class="text-body-regular fg-general-4">Name*</mat-label>
				<mat-form-field appearance="outline" subscriptSizing="dynamic">
					<input matInput class="text-body-regular" formControlName="name" placeholder="Name" />

					<mat-error class="text-caption-regular fg-error-3" *ngIf="form.get('name')?.errors?.['minlength']">Please enter a valid name.</mat-error>
					<mat-error class="text-caption-regular fg-error-3" *ngIf="form.get('name')?.errors?.['required']">This is a required field</mat-error>
				</mat-form-field>
			</div>

			<div class="gap-1 mt-2">
				<mat-label class="text-body-regular fg-general-4">{{ 'n82' | translations }}*</mat-label>
				<mat-form-field appearance="outline" subscriptSizing="dynamic">
					<input matInput class="text-body-regular" formControlName="email" placeholder="Email" />

					<mat-error class="text-caption-regular fg-error-3" *ngIf="form.get('email')?.errors?.['emailPattern']">Please enter a valid email address.</mat-error>
					<mat-error class="text-caption-regular fg-error-3" *ngIf="form.get('email')?.errors?.['required']">This is a required field</mat-error>
				</mat-form-field>
			</div>

			<div class="col-md-6 col-12 mt-2 mb-2 w-100">
				<mat-label class="text-body-regular fg-general-4 d-block">Phone Number*</mat-label>
				<mat-form-field for="phoneNumber" subscriptSizing="dynamic" #phone appearance="outline">
					<div class="input row mx-0 align-items-center">
						<div class="col-auto px-0">
							<mat-select-trigger>
								<div class="row mx-0 align-items-center">
									<div class="col-auto px-0 me-2">
										<img width="24px" height="18px" class="d-block rounded" alt="Country code flag" src="https://flagcdn.com/ie.svg" />
									</div>

									<div class="col px-0 w-40px">
										<p class="fs-14px fs-sm-16px text-body-regular fg-general-5">+353</p>
									</div>
								</div>
							</mat-select-trigger>
						</div>

						<div class="col ps-2 pe-0">
							<input
								placeholder="Phone Number"
								matInput
								id="phoneNumber"
								#phoneNumber="matInput"
								minlength="7"
								maxlength="10"
								formControlName="phone"
								type="tel"
								(mousedown)="mouseClick()"
							/>
						</div>
					</div>

					<mat-error class="text-caption-regular fg-error-3" *ngIf="form.get('phone')?.errors?.['pattern'] || form.get('phone')?.errors?.['minlength']">
						Please enter a valid phone number.
					</mat-error>
					<mat-error class="text-caption-regular fg-error-3" *ngIf="form.get('phone')?.errors?.['required']">This is a required field</mat-error>
				</mat-form-field>
			</div>

			<button [disabled]="this.form?.invalid" (click)="onSubmit()" mat-flat-button color="primary" class="rounded-pill w-100 mt-3">Sign Up Today</button>
		</form>
	</div>

	<div class="col-12 col-lg-4 px-0">
		<p class="fs-16px fw-600 fg-general-5 mb-1 text-center text-md-start">Let's Talk</p>
		<div class="horizontal-line mb-3 mb-lg-4 mx-auto mx-lg-0"></div>

		<div class="mt-4 row gap-2 align-items-center justify-content-center justify-content-lg-start">
			<div class="col-auto">
				<img ngSrc="assets/images/contact-us/kara-profile-image.webp" alt="kara profile" width="64" height="64" priority />
			</div>

			<div class="col-auto col-lg text-start">
				<h3 class="heading-3 fg-general-5 mb-2">{{ 'n3860' | translations }}</h3>
				<p class="text-caption-regular fg-general-5">FindQo.ie | Senior Account Executive</p>
			</div>
		</div>

		<div class="d-flex align-items-center justify-content-center justify-content-lg-start mt-2 mt-lg-3 px-2">
			<mat-icon class="fg-prim-2">
				<span class="material-symbols-outlined fs-16px">mail</span>
			</mat-icon>
			<a href="mailto:kara@findqo.ie" class="fg-prim-2 fs-14px me-4">kara&#64;findqo.ie</a>

			<mat-icon class="fg-prim-2">
				<span class="material-symbols-outlined fs-16px">call</span>
			</mat-icon>
			<a class="fg-prim-2 fs-14px" href="tel:+353851859159" data-rel="external">0851859159</a>
		</div>

		<div class="mt-4 mt-lg-6 px-2 px-lg-0">
			<div class="d-flex gap-2 align-items-center mb-2">
				<mat-icon class="check-circle rounded-circle d-flex align-items-center justify-content-center">
					<span class="material-symbols-outlined fs-14px fg-prim-2">check</span>
				</mat-icon>

				<p class="fg-general-4 fs-10px fs-md-12px">List your Estate Agency or Business</p>
			</div>

			<div class="d-flex gap-2 align-items-center mb-2">
				<mat-icon class="check-circle rounded-circle d-flex align-items-center justify-content-center">
					<span class="material-symbols-outlined fs-14px fg-prim-2">check</span>
				</mat-icon>

				<p class="fg-general-4 fs-10px fs-md-12px">
					Learn about
					<span class="fg-prim-2 text-decoration-underline cursor-pointer" (click)="onClickLink()">Free and Premium features</span>
				</p>
			</div>

			<div class="d-flex gap-2 align-items-center mb-2">
				<mat-icon class="check-circle rounded-circle d-flex align-items-center justify-content-center">
					<span class="material-symbols-outlined fs-14px fg-prim-2">check</span>
				</mat-icon>

				<p class="fg-general-4 fs-10px fs-md-12px">Talk about Seller Leads, In-person Valuation, Property listings, Unlimited enquiries, and more</p>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/sellerLead/sign-up-section.page/sign-up-section.page.scss */\n.signup-container {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.horizontal-line {\n  width: 100px;\n  height: 5px;\n  opacity: 15%;\n  background-color: var(--prim-2);\n  border-radius: 100px;\n}\n.check-circle {\n  background: rgba(255, 90, 184, 0.149);\n  flex-shrink: 0;\n}\n.badge-text {\n  padding-left: 8px;\n  padding-right: 8px;\n  background-color: var(--general-5);\n  color: var(--basic-1);\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.full-width-table {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable td,\ntable th {\n  border: 1px solid var(--neutral-2) !important;\n  padding: 16px 12px 16px 16px !important;\n}\ntable th.subscription-offers,\ntable td.subscription-offers {\n  max-width: 638px;\n  word-wrap: break-word;\n}\ntable td.subscription-offers > findqo-subscription-offers {\n  display: block;\n  margin-right: 180px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/sign-up-section.page.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: SnackService }, { type: MatDialog }, { type: FormBuilder }, { type: SellerLeadFacade }], { phoneNumber: [{
    type: ViewChild,
    args: ["phoneNumber"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignUpSectionPage, { className: "SignUpSectionPage", filePath: "apps/findqo-ireland/src/app/feature/sellerlead/sign-up-section.page/sign-up-section.page.ts", lineNumber: 38 });
})();

export {
  SignUpSectionPage
};
//# sourceMappingURL=chunk-NW3E66SE.js.map
