import {
  CancelSubscriptionDialogModule,
  IndividualAccountV2Module,
  SubscriptionOfferDialogModule,
  SubscriptionOfferModule
} from "./chunk-HIUU22W6.js";
import {
  SubscriptionModule
} from "./chunk-BW46TJNW.js";
import "./chunk-3KQDGRMW.js";
import {
  BusinessAccountV2Module
} from "./chunk-RNOQXJDC.js";
import {
  BusinessAgentListModule
} from "./chunk-6Z3MPJNO.js";
import "./chunk-62PZKBP3.js";
import "./chunk-LUIRD62T.js";
import "./chunk-YL2NNRDT.js";
import "./chunk-CM73RVW6.js";
import "./chunk-QRKYK676.js";
import "./chunk-3VDTWW5F.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-6TIUDW4S.js";
import "./chunk-2KWNZOXB.js";
import {
  MatMenuModule
} from "./chunk-5DPLTTSV.js";
import "./chunk-UWPIFTDN.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-ZRK6DKBO.js";
import "./chunk-3VMN4KZT.js";
import "./chunk-76XBNLIX.js";
import "./chunk-HPH4IAIR.js";
import "./chunk-6I3UIAZY.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  API,
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  CommonUtil,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatDividerModule,
  MatError,
  MatFormField,
  MatInput,
  MatInputModule,
  MatListModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RouteDataType,
  Router,
  RouterModule,
  SharedModule,
  SnackService,
  Validators,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  HttpClient,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  BehaviorSubject,
  Component,
  Inject,
  Injectable,
  NgModule,
  PLATFORM_ID,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/data-access/apis/feedback.api.ts
var FeedbackApi = class _FeedbackApi {
  constructor(http) {
    this.http = http;
  }
  getFeedbackList(request) {
    return this.http.get(API.feedback.feedbackList, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  addFeedback(feedback) {
    return this.http.post(API.feedback.base, feedback);
  }
  static {
    this.\u0275fac = function FeedbackApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackApi)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbackApi, factory: _FeedbackApi.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// apps/findqo-ireland/src/app/feature/feedback/feedback.facade.ts
var FeedbackFacade = class _FeedbackFacade {
  constructor(feedbackApi, platformId) {
    this.feedbackApi = feedbackApi;
    this.platformId = platformId;
  }
  loadFeedbackList() {
    if (!isPlatformBrowser(this.platformId)) {
      return of([]);
    }
    return this.feedbackApi.getFeedbackList();
  }
  addFeedbackList(params) {
    return this.feedbackApi.addFeedback(params);
  }
  static {
    this.\u0275fac = function FeedbackFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackFacade)(\u0275\u0275inject(FeedbackApi), \u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbackFacade, factory: _FeedbackFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackFacade, [{
    type: Injectable
  }], () => [{ type: FeedbackApi }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();

// apps/findqo-ireland/src/app/feature/feedback/feedback-success-dialog/feedback-success-dialog.component.ts
var FeedbackSuccessDialogComponent = class _FeedbackSuccessDialogComponent {
  constructor(ad, dialogRef) {
    this.ad = ad;
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
  }
  onDismiss() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function FeedbackSuccessDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackSuccessDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackSuccessDialogComponent, selectors: [["findqo-feedback-success-dialog"]], standalone: false, decls: 15, vars: 0, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], [1, "p-3", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["width", "40px", "height", "40px", "src", "assets/images/feedback/icons/success.svg", "alt", "Success"], [1, "fs-16px", "fw-500", "lh-20px", "fg-general-5", "mb-2", "text-center", "my-2"], [1, "fs-14px", "fw-400", "lh-22px", "fg-general-5", "text-center", "my-2"], [1, "row", "mx-0", "dialog-actions"], [1, "col", "px-0", "d-flex", "justify-content-center", "align-items-center"], ["href", "/", 1, "text-body-regular", "fg-prim-2", "text-center"]], template: function FeedbackSuccessDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4, "Feedback Sent");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275element(6, "img", 5);
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Thank You for Your Feedback!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, " We appreciate you taking the time to share your thoughts. Your insights are invaluable in helping us improve FindQo.ie. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "a", 10);
        \u0275\u0275text(14, "Back to Home");
        \u0275\u0275elementEnd()()()();
      }
    }, styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 72px;\n  border-top: 1px solid var(--neutral-2);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/feedback-success-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackSuccessDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-feedback-success-dialog", standalone: false, template: '<div class="container p-0">\n	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">\n		<div class="col-auto px-0">\n			<h4 class="heading-4-regular fg-general-5 m-0">Feedback Sent</h4>\n		</div>\n	</div>\n\n	<div class="p-3 d-flex flex-column justify-content-center align-items-center">\n		<img width="40px" height="40px" src="assets/images/feedback/icons/success.svg" alt="Success" />\n		<p class="fs-16px fw-500 lh-20px fg-general-5 mb-2 text-center my-2">Thank You for Your Feedback!</p>\n		<p class="fs-14px fw-400 lh-22px fg-general-5 text-center my-2">\n			We appreciate you taking the time to share your thoughts. Your insights are invaluable in helping us improve FindQo.ie.\n		</p>\n	</div>\n\n	<div class="row mx-0 dialog-actions">\n		<div class="col px-0 d-flex justify-content-center align-items-center">\n			<a class="text-body-regular fg-prim-2 text-center" href="/">Back to Home</a>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/feedback/feedback-success-dialog/feedback-success-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 72px;\n  border-top: 1px solid var(--neutral-2);\n}\n.cancel-btn {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/feedback-success-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackSuccessDialogComponent, { className: "FeedbackSuccessDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/feedback/feedback-success-dialog/feedback-success-dialog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/feedback/feedback.component.ts
function FeedbackComponent_mat_chip_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 52);
    \u0275\u0275listener("click", function FeedbackComponent_mat_chip_32_Template_mat_chip_click_0_listener() {
      const elem_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onRatingSelected(elem_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const elem_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r3.feedbackForm.getRawValue().ratingId === elem_r3.id ? "feedback-chip-selected" : "feedback-chip");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", elem_r3.emoji, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.feedbackForm.getRawValue().ratingId === elem_r3.id ? "fg-prim-2" : "fg-general-5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", elem_r3.rating, " ");
  }
}
var FeedbackComponent = class _FeedbackComponent {
  constructor(fb, feedbackFacade, matDialog, snackBar, router, auth) {
    this.fb = fb;
    this.feedbackFacade = feedbackFacade;
    this.matDialog = matDialog;
    this.snackBar = snackBar;
    this.router = router;
    this.auth = auth;
    this.buttonType = ButtonType;
    this.feedbackRating = [];
    this.feedbackForm = this.fb.group({
      ratingId: ["", [Validators.required]],
      role: ["", [Validators.required]],
      usageRate: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      senderEmail: ["", [Validators.required, Validators.email]]
    });
    this.isLoading = true;
    this.authUser = !!this.auth.user();
  }
  onRatingSelected(event) {
    this.feedbackForm.patchValue({
      ratingId: event
    });
  }
  onSubmit() {
    if (this.feedbackForm.invalid) {
      this.snackBar.open({
        data: { message: "Please fill in all the required details!", type: "error" },
        panelClass: "snackbar-error"
      });
      return;
    }
    this.feedbackFacade.addFeedbackList(this.feedbackForm.value).subscribe(() => {
      this.matDialog.open(FeedbackSuccessDialogComponent, {
        maxWidth: "542px",
        width: "100%",
        disableClose: true
      });
    });
  }
  onCancel() {
    this.router.navigate(["/"]);
  }
  onUpdateRadioBtnChild(event, key, fromRadioButton) {
    if (!fromRadioButton) {
      event.checked = !event.checked;
    }
    if (event.value || !fromRadioButton) {
      this.feedbackForm.get(key).setValue("");
    }
    if (event.value || fromRadioButton) {
      this.feedbackForm.get(key).setValue(event.value);
    }
  }
  ngOnInit() {
    this.feedbackFacade.loadFeedbackList().subscribe((res) => {
      if (res?.["data"] && res?.["data"].length) {
        this.feedbackRating = res?.["data"];
        this.isLoading = false;
      }
    });
    if (this.auth.user()) {
      this.feedbackForm.get("senderEmail").clearValidators();
      this.feedbackForm.get("senderEmail").updateValueAndValidity();
    }
  }
  static {
    this.\u0275fac = function FeedbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FeedbackFacade), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackComponent, selectors: [["findqo-feedback"]], standalone: false, decls: 99, vars: 35, consts: [["propertyOwnnerRole", ""], ["tenantRole", ""], ["bothRole", ""], ["dailyUsageRate", ""], ["weeklyUsageRate", ""], ["monthyUsageRate", ""], ["occasionallyUsageRate", ""], ["neverUsageRate", ""], [3, "ngSubmit", "hidden", "formGroup"], [1, "bg-neutral-1", "w-100", "h-100", "py-4"], [1, "container", "px-3", "w-600px", "bg-basic-1", "rounded", "profile-container"], [1, "row"], [1, "col"], [1, "d-flex", "my-2", "justify-content-center", "align-items-center"], ["width", "200", "height", "200", "src", "assets/images/feedback/feedback.svg", "alt", "feedback-form"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "text-title-20px-medium"], [1, "fg-general-4", "fs-14px", "fw-400"], [1, "row", "my-2"], [1, "text-title-20px-small"], [1, "ps-3", "ps-lg-4"], [1, "fg-general-4", "fs-14px", 3, "hidden"], ["appearance", "outline", 1, "w-100", "address", "d-flex", "mt-2"], ["placeholder", "Enter your email", "formControlName", "senderEmail", "matInput", "", "minlength", "3", 1, "w-100", "text-body-regular", "reason-area", "resize-none", "fg-general-5", "mt-9"], [1, "text-small-12px-regular", "fg-error-3"], [1, "fg-general-4", "fs-14px"], ["aria-label", "How satisfied are you with the FindQo.ie website and mobile apps?", 1, "mt-2", "mb-3"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["formControlName", "role"], [1, "row", "mx-0", "align-items-center", "mt-2", "mb-3"], [1, "col-auto", "d-flex", "checkbox-list", "p-1", "my-1"], [1, "radio-btn-item", "p-2", "fg-general-4", 3, "click"], [1, "text-body-regular", "me-2", 3, "ngClass"], ["color", "primary", "value", "Property Owner", "label", "role", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["color", "primary", "value", "Tenant", "label", "role", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["color", "primary", "value", "Both", "label", "role", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["formControlName", "usageRate"], ["color", "primary", "value", "Daily", 1, "text-body-regular", "fg-general-5", "option-selection-radio-btn", 3, "click"], [1, "col-auto", "d-flex", "checkbox-list", "px-1", "my-1"], [1, "text-body-regular", "me-2", "fg-prim-2", 3, "ngClass"], ["color", "primary", "value", "Weekly", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["color", "primary", "value", "Monthly", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["color", "primary", "value", "Occasionally", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["color", "primary", "value", "Never", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click"], ["appearance", "outline", 1, "w-100", "address", "d-flex", "no-subscript", "mt-2", "mb-3"], ["formControlName", "comment", "matInput", "", "minlength", "3", "placeholder", "I would like FindQo.ie app to be ....", "rows", "3", 1, "w-100", "text-body-regular", "reason-area", "resize-none", "fg-general-5", "mt-9", "pt-2"], [1, "w-100", "container-fluid", "position-fixed", "bottom-0", "border-top", "bg-basic-1"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-between", "justify-content-lg-end", "align-items-center"], [1, "col-auto", "w-125px"], ["btnClass", "text-small-14px-regular w-100 h-100", 1, "d-block", 3, "clicked", "label", "btnType"], [1, "col-auto", "w-125px", "ms-2"], ["btnClass", "text-small-14px-regular w-100 h-100", "type", "submit", 1, "d-block", 3, "label", "btnType", "isDisabled"], [3, "click", "ngClass"], [1, "text-body-regular", 3, "ngClass"]], template: function FeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "form", 8);
        \u0275\u0275listener("ngSubmit", function FeedbackComponent_Template_form_ngSubmit_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13);
        \u0275\u0275element(7, "img", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 11)(9, "div", 12)(10, "div", 15)(11, "p", 16);
        \u0275\u0275text(12, "We Value Your Feedback!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 15)(14, "p", 17);
        \u0275\u0275text(15, "Help Us Enhance Your Experience with FindQo.ie");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "div", 18)(17, "div", 12)(18, "p", 19);
        \u0275\u0275text(19, "Feedback Form");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "ol", 20)(23, "li", 21);
        \u0275\u0275text(24, "Your Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 22);
        \u0275\u0275element(26, "input", 23);
        \u0275\u0275elementStart(27, "mat-error", 24);
        \u0275\u0275text(28, "Please enter a valid email address");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "li", 25);
        \u0275\u0275text(30, "How satisfied are you with the FindQo.ie website and mobile apps?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-chip-set", 26);
        \u0275\u0275template(32, FeedbackComponent_mat_chip_32_Template, 4, 4, "mat-chip", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "li", 25);
        \u0275\u0275text(34, "Are you currently a property owner or tenant?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-radio-group", 28)(36, "div", 29)(37, "div", 30)(38, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          const propertyOwnnerRole_r5 = \u0275\u0275reference(42);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(propertyOwnnerRole_r5, "role", false));
        });
        \u0275\u0275elementStart(39, "span", 32);
        \u0275\u0275text(40, " Property Owner ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-radio-button", 33, 0);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          const propertyOwnnerRole_r5 = \u0275\u0275reference(42);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(propertyOwnnerRole_r5, "role", true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 30)(44, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          const tenantRole_r6 = \u0275\u0275reference(48);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(tenantRole_r6, "role", false));
        });
        \u0275\u0275elementStart(45, "span", 32);
        \u0275\u0275text(46, "Tenant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-radio-button", 34, 1);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_47_listener() {
          \u0275\u0275restoreView(_r1);
          const tenantRole_r6 = \u0275\u0275reference(48);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(tenantRole_r6, "role", true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 30)(50, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          const bothRole_r7 = \u0275\u0275reference(54);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(bothRole_r7, "role", false));
        });
        \u0275\u0275elementStart(51, "span", 32);
        \u0275\u0275text(52, "Both");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-radio-button", 35, 2);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_53_listener() {
          \u0275\u0275restoreView(_r1);
          const bothRole_r7 = \u0275\u0275reference(54);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(bothRole_r7, "role", true));
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(55, "li", 25);
        \u0275\u0275text(56, "How often do you use the FindQo.ie website or mobile apps?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-radio-group", 36)(58, "div", 29)(59, "div", 30)(60, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_60_listener() {
          \u0275\u0275restoreView(_r1);
          const dailyUsageRate_r8 = \u0275\u0275reference(64);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(dailyUsageRate_r8, "usageRate", false));
        });
        \u0275\u0275elementStart(61, "span", 32);
        \u0275\u0275text(62, " Daily ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "mat-radio-button", 37, 3);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_63_listener() {
          \u0275\u0275restoreView(_r1);
          const dailyUsageRate_r8 = \u0275\u0275reference(64);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(dailyUsageRate_r8, "usageRate", true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 38)(66, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_66_listener() {
          \u0275\u0275restoreView(_r1);
          const weeklyUsageRate_r9 = \u0275\u0275reference(70);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(weeklyUsageRate_r9, "usageRate", false));
        });
        \u0275\u0275elementStart(67, "span", 39);
        \u0275\u0275text(68, " Weekly ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-radio-button", 40, 4);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_69_listener() {
          \u0275\u0275restoreView(_r1);
          const weeklyUsageRate_r9 = \u0275\u0275reference(70);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(weeklyUsageRate_r9, "usageRate", true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 38)(72, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          const monthyUsageRate_r10 = \u0275\u0275reference(76);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(monthyUsageRate_r10, "usageRate", false));
        });
        \u0275\u0275elementStart(73, "span", 32);
        \u0275\u0275text(74, " Monthly ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "mat-radio-button", 41, 5);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_75_listener() {
          \u0275\u0275restoreView(_r1);
          const monthyUsageRate_r10 = \u0275\u0275reference(76);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(monthyUsageRate_r10, "usageRate", true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 38)(78, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_78_listener() {
          \u0275\u0275restoreView(_r1);
          const occasionallyUsageRate_r11 = \u0275\u0275reference(82);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(occasionallyUsageRate_r11, "usageRate", false));
        });
        \u0275\u0275elementStart(79, "span", 32);
        \u0275\u0275text(80, " Occasionally ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "mat-radio-button", 42, 6);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_81_listener() {
          \u0275\u0275restoreView(_r1);
          const occasionallyUsageRate_r11 = \u0275\u0275reference(82);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(occasionallyUsageRate_r11, "usageRate", true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "div", 38)(84, "a", 31);
        \u0275\u0275listener("click", function FeedbackComponent_Template_a_click_84_listener() {
          \u0275\u0275restoreView(_r1);
          const neverUsageRate_r12 = \u0275\u0275reference(88);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(neverUsageRate_r12, "usageRate", false));
        });
        \u0275\u0275elementStart(85, "span", 32);
        \u0275\u0275text(86, " Never ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-radio-button", 43, 7);
        \u0275\u0275listener("click", function FeedbackComponent_Template_mat_radio_button_click_87_listener() {
          \u0275\u0275restoreView(_r1);
          const neverUsageRate_r12 = \u0275\u0275reference(88);
          return \u0275\u0275resetView(ctx.onUpdateRadioBtnChild(neverUsageRate_r12, "usageRate", true));
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(89, "li", 25);
        \u0275\u0275text(90, "What would you suggest we improve on the FindQo.ie website and mobile apps?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "mat-form-field", 44);
        \u0275\u0275element(92, "textarea", 45);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(93, "div", 46)(94, "div", 47)(95, "div", 48)(96, "findqo-button", 49);
        \u0275\u0275listener("clicked", function FeedbackComponent_Template_findqo_button_clicked_96_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCancel());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 50);
        \u0275\u0275element(98, "findqo-button", 51);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("hidden", ctx.isLoading)("formGroup", ctx.feedbackForm);
        \u0275\u0275advance(22);
        \u0275\u0275property("hidden", ctx.authUser);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("d-none", ctx.authUser);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.feedbackRating);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().role === "Property Owner");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().role === "Property Owner" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().role === "Tenant");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().role === "Tenant" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().role === "Both");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().role === "Both" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().usageRate === "Daily");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().usageRate === "Daily" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().usageRate === "Weekly");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().usageRate === "Weekly" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().usageRate === "Monthly");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().usageRate === "Monthly" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().usageRate === "Occasionally");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().usageRate === "Occasionally" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("feedback-chip-selected", ctx.feedbackForm.getRawValue().usageRate === "Never");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.feedbackForm.getRawValue().usageRate === "Never" ? "fg-prim-2" : "fg-general-5");
        \u0275\u0275advance(11);
        \u0275\u0275property("label", "Cancel")("btnType", ctx.buttonType.STROKED);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", "Submit")("btnType", ctx.buttonType.FILLED)("isDisabled", ctx.feedbackForm.invalid);
      }
    }, dependencies: [NgClass, NgForOf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, ButtonComponent, MatChip, MatChipSet, MatRadioGroup, MatRadioButton], styles: ["\n\n.w-600px[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.profile-container[_ngcontent-%COMP%] {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding-bottom: 70px !important;\n  }\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-125px[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.feedback-chip[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  background-color: white !important;\n  border: 1px solid var(--general-2);\n  min-height: 40px;\n}\n.feedback-chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/feedback.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackComponent, [{
    type: Component,
    args: [{ selector: "findqo-feedback", standalone: false, template: `<ng-container>
	<form [hidden]="this.isLoading" [formGroup]="feedbackForm" (ngSubmit)="onSubmit()">
		<div class="bg-neutral-1 w-100 h-100 py-4">
			<div class="container px-3 w-600px bg-basic-1 rounded profile-container">
				<div class="row">
					<div class="col">
						<div class="d-flex my-2 justify-content-center align-items-center">
							<img width="200" height="200" src="assets/images/feedback/feedback.svg" alt="feedback-form" />
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<div class="d-flex justify-content-center align-items-center">
							<p class="text-title-20px-medium">We Value Your Feedback!</p>
						</div>

						<div class="d-flex justify-content-center align-items-center">
							<p class="fg-general-4 fs-14px fw-400">Help Us Enhance Your Experience with FindQo.ie</p>
						</div>
					</div>
				</div>

				<div class="row my-2">
					<div class="col">
						<p class="text-title-20px-small">Feedback Form</p>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<ol class="ps-3 ps-lg-4">
							<li [hidden]="authUser" class="fg-general-4 fs-14px">Your Email address</li>

							<mat-form-field [class.d-none]="authUser" appearance="outline" class="w-100 address d-flex mt-2">
								<input
									placeholder="Enter your email"
									formControlName="senderEmail"
									matInput
									minlength="3"
									class="w-100 text-body-regular reason-area resize-none fg-general-5 mt-9"
								/>

								<mat-error class="text-small-12px-regular fg-error-3">Please enter a valid email address</mat-error>
							</mat-form-field>

							<li class="fg-general-4 fs-14px">How satisfied are you with the FindQo.ie website and mobile apps?</li>

							<mat-chip-set class="mt-2 mb-3" aria-label="How satisfied are you with the FindQo.ie website and mobile apps?">
								<mat-chip
									*ngFor="let elem of feedbackRating"
									[ngClass]="feedbackForm.getRawValue().ratingId === elem.id ? 'feedback-chip-selected' : 'feedback-chip'"
									(click)="onRatingSelected(elem.id)"
								>
									{{ elem.emoji }}
									<span [ngClass]="feedbackForm.getRawValue().ratingId === elem.id ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular">
										{{ elem.rating }}
									</span>
								</mat-chip>
							</mat-chip-set>

							<li class="fg-general-4 fs-14px">Are you currently a property owner or tenant?</li>

							<mat-radio-group formControlName="role">
								<div class="row mx-0 align-items-center mt-2 mb-3">
									<div class="col-auto d-flex checkbox-list p-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().role === 'Property Owner'"
											(click)="onUpdateRadioBtnChild(propertyOwnnerRole, 'role', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().role === 'Property Owner' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">
												Property Owner
											</span>
											<mat-radio-button
												color="primary"
												value="Property Owner"
												label="role"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												(click)="onUpdateRadioBtnChild(propertyOwnnerRole, 'role', true)"
												#propertyOwnnerRole
											></mat-radio-button>
										</a>
									</div>

									<div class="col-auto d-flex checkbox-list p-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().role === 'Tenant'"
											(click)="onUpdateRadioBtnChild(tenantRole, 'role', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().role === 'Tenant' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">Tenant</span>
											<mat-radio-button
												color="primary"
												value="Tenant"
												label="role"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												#tenantRole
												(click)="onUpdateRadioBtnChild(tenantRole, 'role', true)"
											></mat-radio-button>
										</a>
									</div>

									<div class="col-auto d-flex checkbox-list p-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().role === 'Both'"
											(click)="onUpdateRadioBtnChild(bothRole, 'role', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().role === 'Both' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">Both</span>

											<mat-radio-button
												color="primary"
												value="Both"
												label="role"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												#bothRole
												(click)="onUpdateRadioBtnChild(bothRole, 'role', true)"
											></mat-radio-button>
										</a>
									</div>
								</div>
							</mat-radio-group>

							<li class="fg-general-4 fs-14px">How often do you use the FindQo.ie website or mobile apps?</li>

							<mat-radio-group formControlName="usageRate">
								<div class="row mx-0 align-items-center mt-2 mb-3">
									<div class="col-auto d-flex checkbox-list p-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().usageRate === 'Daily'"
											(click)="onUpdateRadioBtnChild(dailyUsageRate, 'usageRate', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().usageRate === 'Daily' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">
												Daily
											</span>
											<mat-radio-button
												color="primary"
												value="Daily"
												class="text-body-regular fg-general-5 option-selection-radio-btn"
												(click)="onUpdateRadioBtnChild(dailyUsageRate, 'usageRate', true)"
												#dailyUsageRate
											></mat-radio-button>
										</a>
									</div>

									<div class="col-auto d-flex checkbox-list px-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().usageRate === 'Weekly'"
											(click)="onUpdateRadioBtnChild(weeklyUsageRate, 'usageRate', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span
												[ngClass]="feedbackForm.getRawValue().usageRate === 'Weekly' ? 'fg-prim-2' : 'fg-general-5'"
												class="text-body-regular me-2 fg-prim-2"
											>
												Weekly
											</span>
											<mat-radio-button
												color="primary"
												value="Weekly"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												(click)="onUpdateRadioBtnChild(weeklyUsageRate, 'usageRate', true)"
												#weeklyUsageRate
											></mat-radio-button>
										</a>
									</div>

									<div class="col-auto d-flex checkbox-list px-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().usageRate === 'Monthly'"
											(click)="onUpdateRadioBtnChild(monthyUsageRate, 'usageRate', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().usageRate === 'Monthly' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">
												Monthly
											</span>
											<mat-radio-button
												color="primary"
												value="Monthly"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												#monthyUsageRate
												(click)="onUpdateRadioBtnChild(monthyUsageRate, 'usageRate', true)"
											></mat-radio-button>
										</a>
									</div>

									<div class="col-auto d-flex checkbox-list px-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().usageRate === 'Occasionally'"
											(click)="onUpdateRadioBtnChild(occasionallyUsageRate, 'usageRate', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().usageRate === 'Occasionally' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">
												Occasionally
											</span>
											<mat-radio-button
												color="primary"
												value="Occasionally"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												#occasionallyUsageRate
												(click)="onUpdateRadioBtnChild(occasionallyUsageRate, 'usageRate', true)"
											></mat-radio-button>
										</a>
									</div>

									<div class="col-auto d-flex checkbox-list px-1 my-1">
										<a
											[class.feedback-chip-selected]="feedbackForm.getRawValue().usageRate === 'Never'"
											(click)="onUpdateRadioBtnChild(neverUsageRate, 'usageRate', false)"
											class="radio-btn-item p-2 fg-general-4"
										>
											<span [ngClass]="feedbackForm.getRawValue().usageRate === 'Never' ? 'fg-prim-2' : 'fg-general-5'" class="text-body-regular me-2">
												Never
											</span>
											<mat-radio-button
												color="primary"
												value="Never"
												class="text-body-regular fg-general-4 option-selection-radio-btn"
												#neverUsageRate
												(click)="onUpdateRadioBtnChild(neverUsageRate, 'usageRate', true)"
											></mat-radio-button>
										</a>
									</div>
								</div>
							</mat-radio-group>

							<li class="fg-general-4 fs-14px">What would you suggest we improve on the FindQo.ie website and mobile apps?</li>

							<mat-form-field appearance="outline" class="w-100 address d-flex no-subscript mt-2 mb-3">
								<textarea
									formControlName="comment"
									matInput
									minlength="3"
									placeholder="I would like FindQo.ie app to be ...."
									class="w-100 text-body-regular reason-area resize-none fg-general-5 mt-9 pt-2"
									rows="3"
								></textarea>
							</mat-form-field>
						</ol>
					</div>
				</div>
			</div>
		</div>

		<div class="w-100 container-fluid position-fixed bottom-0 border-top bg-basic-1">
			<div class="row mx-auto p-3 mw-550px justify-content-between justify-content-lg-end align-items-center">
				<div class="col-auto w-125px">
					<findqo-button
						(clicked)="onCancel()"
						btnClass="text-small-14px-regular w-100 h-100"
						class="d-block"
						[label]="'Cancel'"
						[btnType]="buttonType.STROKED"
					></findqo-button>
				</div>

				<div class="col-auto w-125px ms-2">
					<findqo-button
						btnClass="text-small-14px-regular w-100 h-100"
						class="d-block"
						[label]="'Submit'"
						[btnType]="buttonType.FILLED"
						type="submit"
						[isDisabled]="feedbackForm.invalid"
					></findqo-button>
				</div>
			</div>
		</div>
	</form>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/feedback/feedback.component.scss */\n.w-600px {\n  max-width: 600px;\n}\n.h-100 {\n  height: 100% !important;\n}\n.profile-container {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .profile-container {\n    padding-bottom: 70px !important;\n  }\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na mat-icon {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-125px {\n  width: 125px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.feedback-chip {\n  border-radius: 4px !important;\n  background-color: white !important;\n  border: 1px solid var(--general-2);\n  min-height: 40px;\n}\n.feedback-chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/feedback.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: FeedbackFacade }, { type: MatDialog }, { type: SnackService }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackComponent, { className: "FeedbackComponent", filePath: "apps/findqo-ireland/src/app/feature/feedback/feedback.component.ts", lineNumber: 18 });
})();

// apps/findqo-ireland/src/app/feature/feedback/feedback-routing.module.ts
var routes = [
  {
    path: "",
    component: FeedbackComponent,
    data: { [RouteDataType.PAGE_REFERENCE]: "feedback" }
  }
];
var FeedbackRoutingModule = class _FeedbackRoutingModule {
  static {
    this.\u0275fac = function FeedbackRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeedbackRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/shared/states/feedback.state.ts
var FeedbackState = class _FeedbackState {
  constructor() {
    this._isLoading$ = new BehaviorSubject(false);
    this._feedbackList$ = new BehaviorSubject([]);
  }
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  setIsLoading(isLoading) {
    this._isLoading$.next(isLoading);
  }
  get feedbackList$() {
    return this._feedbackList$.asObservable();
  }
  setFeedbackList(feedbackList) {
    this._feedbackList$.next(feedbackList);
  }
  static {
    this.\u0275fac = function FeedbackState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbackState, factory: _FeedbackState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/feedback/feedback.module.ts
var FeedbackModule = class _FeedbackModule {
  static {
    this.\u0275fac = function FeedbackModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeedbackModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [FeedbackFacade, FeedbackState], imports: [
      CommonModule,
      FeedbackRoutingModule,
      BusinessAccountV2Module,
      IndividualAccountV2Module,
      SubscriptionModule,
      CancelSubscriptionDialogModule,
      SubscriptionOfferDialogModule,
      SubscriptionOfferModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatInputModule,
      MatMenuModule,
      BusinessAgentListModule,
      MatProgressSpinnerModule,
      ButtonModule,
      MatDividerModule,
      MatDialogModule,
      MatListModule,
      MatIconModule,
      MatChipsModule,
      MatRadioModule,
      SharedModule,
      ButtonModule,
      MatDialogModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackModule, [{
    type: NgModule,
    args: [{
      declarations: [FeedbackComponent, FeedbackSuccessDialogComponent],
      imports: [
        CommonModule,
        FeedbackRoutingModule,
        BusinessAccountV2Module,
        IndividualAccountV2Module,
        SubscriptionModule,
        CancelSubscriptionDialogModule,
        SubscriptionOfferDialogModule,
        SubscriptionOfferModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatMenuModule,
        BusinessAgentListModule,
        MatProgressSpinnerModule,
        ButtonModule,
        MatDividerModule,
        MatDialogModule,
        MatListModule,
        MatIconModule,
        MatChipsModule,
        MatRadioModule,
        SharedModule,
        ButtonModule,
        MatDialogModule
      ],
      providers: [FeedbackFacade, FeedbackState]
    }]
  }], null, null);
})();
export {
  FeedbackModule
};
//# sourceMappingURL=chunk-BC4TFD3X.js.map
