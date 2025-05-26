import {
  DatePickerAdapter
} from "./chunk-KTGQE5R4.js";
import {
  IconService
} from "./chunk-DYYJHWVN.js";
import {
  AisleType,
  AmplitudeEvent,
  AmplitudeService,
  AppEmailValidator,
  AuthService,
  ButtonType,
  DateAdapter,
  ENQUIRY_LIMIT,
  FormBuilder,
  FormControl,
  MAT_DATE_LOCALE,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MenuKeys,
  MyProfileFacade,
  RouteDataType,
  RouteService,
  Router,
  SectionType,
  SellerType,
  SnackService,
  StorageService,
  StorageType,
  UpdateAction,
  Validators,
  WindowService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  Platform
} from "./chunk-7YCEKZKP.js";
import {
  Component,
  Inject,
  Injectable,
  __spreadProps,
  __spreadValues,
  finalize,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/services/enquiry.service.ts
var EnquiryService = class _EnquiryService {
  constructor(authService, amplitudeService, storageService) {
    this.authService = authService;
    this.amplitudeService = amplitudeService;
    this.storageService = storageService;
  }
  onOpenSendEnquiryDialog(amplitudeEvent, openDialogCallback) {
    const user = this.authService.user();
    const isLoggedIn = !!user;
    this.amplitudeService.handleSendEnquiryEvents(amplitudeEvent, __spreadValues({
      user_logged_in: isLoggedIn
    }, isLoggedIn && { user_email: user.email, user_id: user.id }));
    const count = this.storageService.getItem(StorageType.ENQUIRY_SEND_ATTEMPT_COUNT);
    const shouldOpenAuthDialog = !isLoggedIn && +count >= ENQUIRY_LIMIT;
    if (shouldOpenAuthDialog) {
      this.authService.openAuthDialog({ onLogin: openDialogCallback });
    } else {
      openDialogCallback();
    }
  }
  handleAmplitudeEvents(event, user, ad, additionalInfo) {
    this.amplitudeService.handleSendEnquiryEvents(event, __spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, user && { user_email: user.email, user_id: user.id }), {
      property_name: ad.title,
      property_id: ad.id,
      property_county: ad.county
    }), additionalInfo?.errorId && { errorId: additionalInfo.errorId }), additionalInfo?.error && { error: additionalInfo.error }), additionalInfo?.enquiryId && { enquiry_id: additionalInfo.enquiryId }));
    if (event === AmplitudeEvent.SUBMIT_ENQUIRY_FORM_SUCCESS) {
      this.incrementEnquiryAttemptCount();
      const isLoggedIn = !!this.authService.user();
      if (!isLoggedIn) {
        this.storageService.setItemSession(StorageType.ENQUIRY_FORM_VALUES, JSON.stringify(additionalInfo?.enquiryFormValues));
      }
    }
  }
  incrementEnquiryAttemptCount() {
    const count = this.storageService.getItem(StorageType.ENQUIRY_SEND_ATTEMPT_COUNT);
    this.storageService.setItem(StorageType.ENQUIRY_SEND_ATTEMPT_COUNT, count ? (+count + 1).toString() : "1");
  }
  static {
    this.\u0275fac = function EnquiryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiryService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(AmplitudeService), \u0275\u0275inject(StorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnquiryService, factory: _EnquiryService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: AuthService }, { type: AmplitudeService }, { type: StorageService }], null);
})();

// apps/findqo-ireland/src/app/feature/general/send-inquiry/include-rental-resume-dialog/include-rental-resume-dialog.component.ts
function IncludeRentalResumeDialogComponent_mat_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 17);
    \u0275\u0275text(1, "open_in_new");
    \u0275\u0275elementEnd();
  }
}
function IncludeRentalResumeDialogComponent_mat_spinner_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 18);
  }
}
var IncludeRentalResumeDialogComponent = class _IncludeRentalResumeDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.appendTenantinPdf = true;
    this.fetchingPdf = false;
    this.sharedAdsFacade = this.data.sharedFacade;
  }
  handlePdfPreview() {
    this.fetchingPdf = true;
    this.sharedAdsFacade.getPdfLocalUrl(this.data.tenantProfile.tenantResumeUrl).pipe(finalize(() => this.fetchingPdf = false)).subscribe((res) => {
      const LINK = URL.createObjectURL(res);
      this.data.windowService.reference.open(LINK);
    });
  }
  closeDialog() {
    this.dialogRef.close(this.appendTenantinPdf);
  }
  static {
    this.\u0275fac = function IncludeRentalResumeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncludeRentalResumeDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncludeRentalResumeDialogComponent, selectors: [["findqo-include-rental-resume-dialog"]], standalone: false, decls: 37, vars: 30, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "py-4", "px-3"], [1, "heading-3-medium", "fg-general-5", "m-0"], [1, "text-paragraph-regular", "mt-3"], ["color", "primary", 1, "tenantin-checkbox", 3, "ngModelChange", "ngModel"], [1, "fg-general-5", "text-small-14px-regular", "d-inline-block", "ms-2"], ["mat-button", "", "type", "button", 1, "d-inline-block", "p-0", "m-0", "ms-2", "preview-pdf-dialog-button", 3, "click", "disabled"], [1, "fg-prim-2", "d-flex", "align-items-center"], ["class", "fg-prim-2 fs-18px", 4, "ngIf"], ["diameter", "16", "iconPositionEnd", "", "class", "d-inline-block align-middle", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "w-100", "mt-3", 3, "click", "disabled"], [1, "text-body-regular"], [1, "fg-prim-2", "fs-18px"], ["diameter", "16", "iconPositionEnd", "", 1, "d-inline-block", "align-middle"]], template: function IncludeRentalResumeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4)(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "h4", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 8);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 8);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-checkbox", 9);
        \u0275\u0275twoWayListener("ngModelChange", function IncludeRentalResumeDialogComponent_Template_mat_checkbox_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.appendTenantinPdf, $event) || (ctx.appendTenantinPdf = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 10);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 11);
        \u0275\u0275listener("click", function IncludeRentalResumeDialogComponent_Template_button_click_26_listener() {
          return ctx.handlePdfPreview();
        });
        \u0275\u0275elementStart(27, "a", 12)(28, "span");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, IncludeRentalResumeDialogComponent_mat_icon_30_Template, 2, 0, "mat-icon", 13)(31, IncludeRentalResumeDialogComponent_mat_spinner_31_Template, 1, 0, "mat-spinner", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 15);
        \u0275\u0275listener("click", function IncludeRentalResumeDialogComponent_Template_button_click_32_listener() {
          return ctx.closeDialog();
        });
        \u0275\u0275elementStart(33, "span", 16);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translations");
        \u0275\u0275pipe(36, "translations");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "n3728"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(!(ctx.data.tenantProfile == null ? null : ctx.data.tenantProfile.isIncludeResumeRequired) ? \u0275\u0275pipeBind1(13, 14, "n3729") : \u0275\u0275pipeBind1(14, 16, "n3741"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 18, "n3730"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(!(ctx.data.tenantProfile == null ? null : ctx.data.tenantProfile.isIncludeResumeRequired) ? \u0275\u0275pipeBind1(20, 20, "n3731") : \u0275\u0275pipeBind1(21, 22, "n3742"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.appendTenantinPdf);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 24, "n3713"), ":");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.fetchingPdf);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.data.tenantProfile == null ? null : ctx.data.tenantProfile.tenantResume);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fetchingPdf);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fetchingPdf);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.appendTenantinPdf && (ctx.data.tenantProfile == null ? null : ctx.data.tenantProfile.isIncludeResumeRequired));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(!(ctx.data.tenantProfile == null ? null : ctx.data.tenantProfile.isIncludeResumeRequired) ? \u0275\u0275pipeBind1(35, 26, "n3732") : \u0275\u0275pipeBind1(36, 28, "n91"));
      }
    }, styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.tenant-resume-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--general-5);\n  height: 18px;\n  display: inline-block !important;\n}\n.tenant-resume-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--prim-2);\n}\n.tenant-resume-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  color: var(--prim-2);\n  font-size: 18px;\n}\n.preview-pdf-dialog-button[_ngcontent-%COMP%] {\n  width: 235px !important;\n}\n.preview-pdf-dialog-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px !important;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n@media (min-width: 768px) {\n  .preview-pdf-dialog-button[_ngcontent-%COMP%] {\n    width: 375px !important;\n  }\n  .preview-pdf-dialog-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    min-width: 325px !important;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/include-rental-resume-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncludeRentalResumeDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-include-rental-resume-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3728' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="py-4 px-3">
		<!-- Changing the text based on it's limit reached or not -->
		<h4 class="heading-3-medium fg-general-5 m-0">{{ !data.tenantProfile?.isIncludeResumeRequired ? ('n3729' | translations) : ('n3741' | translations) }}</h4>
		<p class="text-paragraph-regular mt-3">{{ 'n3730' | translations }}</p>
		<p class="text-paragraph-regular mt-3">{{ !data.tenantProfile?.isIncludeResumeRequired ? ('n3731' | translations) : ('n3742' | translations) }}</p>

		<mat-checkbox [(ngModel)]="appendTenantinPdf" class="tenantin-checkbox" color="primary"></mat-checkbox>
		<p class="fg-general-5 text-small-14px-regular d-inline-block ms-2">{{ 'n3713' | translations }}:</p>

		<button mat-button class="d-inline-block p-0 m-0 ms-2 preview-pdf-dialog-button" [disabled]="fetchingPdf" (click)="handlePdfPreview()" type="button">
			<a class="fg-prim-2 d-flex align-items-center">
				<span>{{ data.tenantProfile?.tenantResume }}</span>
				<mat-icon *ngIf="!fetchingPdf" class="fg-prim-2 fs-18px">open_in_new</mat-icon>
				<mat-spinner *ngIf="fetchingPdf" diameter="16" iconPositionEnd class="d-inline-block align-middle"></mat-spinner>
			</a>
		</button>
		<!-- Disable the button, if tenant profile is required to include with the enquiry -->
		<button
			mat-flat-button
			color="primary"
			class="w-100 mt-3"
			(click)="closeDialog()"
			[disabled]="!appendTenantinPdf && data.tenantProfile?.isIncludeResumeRequired"
		>
			<span class="text-body-regular">{{ !data.tenantProfile?.isIncludeResumeRequired ? ('n3732' | translations) : ('n91' | translations) }}</span>
		</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/send-inquiry/include-rental-resume-dialog/include-rental-resume-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.tenant-resume-link {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--general-5);\n  height: 18px;\n  display: inline-block !important;\n}\n.tenant-resume-link a {\n  text-decoration: none;\n  color: var(--prim-2);\n}\n.tenant-resume-link a mat-icon {\n  display: inline !important;\n  color: var(--prim-2);\n  font-size: 18px;\n}\n.preview-pdf-dialog-button {\n  width: 235px !important;\n}\n.preview-pdf-dialog-button a span {\n  display: inline-block;\n  width: 215px !important;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n@media (min-width: 768px) {\n  .preview-pdf-dialog-button {\n    width: 375px !important;\n  }\n  .preview-pdf-dialog-button a span {\n    min-width: 325px !important;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/include-rental-resume-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncludeRentalResumeDialogComponent, { className: "IncludeRentalResumeDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/send-inquiry/include-rental-resume-dialog/include-rental-resume-dialog.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/general/send-inquiry/send-inquiry-dialog.component.ts
var _c0 = (a0) => ({ "no-subscript": a0 });
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "mat-icon", 48);
    \u0275\u0275element(2, "findqo-bedroom-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.bedroomCount);
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "mat-icon", 48);
    \u0275\u0275element(2, "findqo-shower-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.bathroomCount);
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "mat-icon", 48);
    \u0275\u0275element(2, "findqo-property-size-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.propertySize == null ? null : ctx_r2.dialogData.ad.propertySize.value) + " " + (ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.propertySize == null ? null : ctx_r2.dialogData.ad.propertySize.parameter), " ");
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "formErrorMessage");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.tenantForm.get("name").errors), " ");
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "formErrorMessage");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.tenantForm.get("email").errors), " ");
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1, " This field is required! ");
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3405"), " ");
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1, "This field is required!");
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1, "No. of occupants should be at least 1!");
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 52)(2, "div", 10)(3, "span", 53);
    \u0275\u0275text(4, "No. of occupants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6, "(Including children)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "button", 56);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.decreaseAdultCount());
    });
    \u0275\u0275elementStart(9, "mat-icon", 57);
    \u0275\u0275text(10, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.adultsCount, $event) || (ctx_r2.adultsCount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 59);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.increaseAdultCount());
    });
    \u0275\u0275elementStart(13, "mat-icon", 60);
    \u0275\u0275text(14, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_mat_error_15_Template, 2, 0, "mat-error", 34)(16, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_mat_error_16_Template, 2, 0, "mat-error", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r2.adultsCount <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.adultsCount);
    \u0275\u0275property("min", 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("adults").hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("adults").hasError("min"));
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1, "This field is required!");
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span", 61);
    \u0275\u0275text(2, " Bringing pets? ");
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4, "(Optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-radio-group", 63)(6, "div", 64)(7, "div", 65)(8, "a", 66);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_51_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const noPets_r6 = \u0275\u0275reference(13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateRadioBtnPet(noPets_r6, false));
    });
    \u0275\u0275elementStart(9, "span", 67);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 68, 4);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_51_Template_mat_radio_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const noPets_r6 = \u0275\u0275reference(13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateRadioBtnPet(noPets_r6, true));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 65)(15, "a", 66);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_51_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const havePets_r7 = \u0275\u0275reference(20);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateRadioBtnPet(havePets_r7, false));
    });
    \u0275\u0275elementStart(16, "span", 67);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-radio-button", 68, 5);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_51_Template_mat_radio_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const havePets_r7 = \u0275\u0275reference(20);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateRadioBtnPet(havePets_r7, true));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const noPets_r6 = \u0275\u0275reference(13);
    const havePets_r7 = \u0275\u0275reference(20);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("checked-option", noPets_r6.checked);
    \u0275\u0275advance();
    \u0275\u0275classProp("fg-info-3", noPets_r6.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "n177"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("checked-option", havePets_r7.checked);
    \u0275\u0275advance();
    \u0275\u0275classProp("fg-info-3", havePets_r7.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "n176"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", true);
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_ng_container_52_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "formErrorMessage");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.tenantForm.get("date").errors), " ");
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-label", 69);
    \u0275\u0275text(2, " Move in date ");
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4, "(Optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 70)(6, "input", 71);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_ng_container_52_Template_input_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const picker_r9 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(picker_r9.open());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-datepicker-toggle", 72)(8, "mat-icon", 73);
    \u0275\u0275text(9, "calendar_today");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-datepicker", null, 6);
    \u0275\u0275template(12, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_ng_container_52_mat_error_12_Template, 3, 3, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const picker_r9 = \u0275\u0275reference(11);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275property("matDatepicker", picker_r9)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r9);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("date").hasError);
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "mat-label", 42);
    \u0275\u0275text(2, " How are you going to make your payment? ");
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4, "(Optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-radio-group", 75)(6, "mat-radio-button", 76);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-radio-button", 76);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ((tmp_8_0 = ctx_r2.tenantForm.get("paymentMode")) == null ? null : tmp_8_0.value) === ctx_r2.paymentMode.CASH);
    \u0275\u0275property("value", ctx_r2.paymentMode.CASH);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "n3643"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ((tmp_11_0 = ctx_r2.tenantForm.get("paymentMode")) == null ? null : tmp_11_0.value) === ctx_r2.paymentMode.MORTGAGE);
    \u0275\u0275property("value", ctx_r2.paymentMode.MORTGAGE);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "n3644"), " ");
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20)(3, "div", 12);
    \u0275\u0275element(4, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 25)(13, "div", 12);
    \u0275\u0275element(14, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10)(16, "span", 27);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_18_Template, 5, 1, "div", 28)(19, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_19_Template, 5, 1, "div", 28)(20, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_20_Template, 5, 1, "div", 29);
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "adPrice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-label", 31);
    \u0275\u0275text(25, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 32);
    \u0275\u0275element(27, "input", 33);
    \u0275\u0275template(28, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_28_Template, 3, 3, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-label", 35);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 36);
    \u0275\u0275element(33, "input", 37);
    \u0275\u0275template(34, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_34_Template, 3, 3, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-label", 38);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-form-field", 39);
    \u0275\u0275element(39, "input", 40);
    \u0275\u0275pipe(40, "translations");
    \u0275\u0275template(41, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_41_Template, 2, 0, "mat-error", 34)(42, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_42_Template, 3, 3, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_43_Template, 17, 5, "div", 41);
    \u0275\u0275elementStart(44, "mat-label", 42);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 43);
    \u0275\u0275element(48, "textarea", 44);
    \u0275\u0275pipe(49, "translations");
    \u0275\u0275template(50, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_mat_error_50_Template, 2, 0, "mat-error", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_51_Template, 21, 16, "div", 41)(52, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_ng_container_52_Template, 13, 5, "ng-container", 41)(53, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_div_53_Template, 12, 12, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(54, 46);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    const sendEnquiryButton_r10 = \u0275\u0275reference(19);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngSrc", (ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.seller == null ? null : ctx_r2.dialogData.ad.seller.picture) || ctx_r2.defaultUserImg);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.seller == null ? null : ctx_r2.dialogData.ad.seller.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.seller == null ? null : ctx_r2.dialogData.ad.seller.sellerTypeId) === ctx_r2.sellerType.BUSINESS ? \u0275\u0275pipeBind1(10, 25, "n3160") : \u0275\u0275pipeBind1(11, 27, "n3139"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.images[0] == null ? null : ctx_r2.dialogData.ad.images[0].url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.bedroomCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.bathroomCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.propertySize == null ? null : ctx_r2.dialogData.ad.propertySize.value) && (ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.propertySize == null ? null : ctx_r2.dialogData.ad.propertySize.value) !== "0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 29, ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.price, ctx_r2.dialogData == null ? null : ctx_r2.dialogData.ad == null ? null : ctx_r2.dialogData.ad.rentalPeriod), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("name").hasError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 32, "n3015"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("email").hasError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 34, "n3297"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 36, "n3702"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("phone").hasError && !ctx_r2.tenantForm.get("phone").hasError("minlength") && !ctx_r2.tenantForm.get("phone").hasError("maxlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("phone").hasError("minlength") || ctx_r2.tenantForm.get("phone").hasError("maxlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isRentCommercial);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 38, "n3009"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(49, 40, "n3692"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.tenantForm.get("message").hasError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isRentCommercial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ad.section.reference !== ctx_r2.sectionType.PROPERTIES_FOR_SALE);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ad.section.reference === ctx_r2.sectionType.PROPERTIES_FOR_SALE);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sendEnquiryButton_r10);
  }
}
function SendInquiryDialogComponent_Conditional_10_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 17);
    \u0275\u0275listener("ngSubmit", function SendInquiryDialogComponent_Conditional_10_form_0_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275template(1, SendInquiryDialogComponent_Conditional_10_form_0_ng_container_1_Template, 55, 42, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const enquiryLimitReached_r11 = \u0275\u0275reference(17);
    \u0275\u0275property("formGroup", ctx_r2.tenantForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !+ctx_r2.isLimitReached.status && (ctx_r2.ad == null ? null : ctx_r2.ad.section == null ? null : ctx_r2.ad.section.reference) === ctx_r2.sectionType.PROPERTIES_FOR_RENT || ctx_r2.isRentCommercial || ctx_r2.isPublicPage || (ctx_r2.ad == null ? null : ctx_r2.ad.section == null ? null : ctx_r2.ad.section.reference) === ctx_r2.sectionType.PROPERTIES_FOR_SALE)("ngIfElse", enquiryLimitReached_r11);
  }
}
function SendInquiryDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SendInquiryDialogComponent_Conditional_10_form_0_Template, 2, 3, "form", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const successMessageTemplate_r12 = \u0275\u0275reference(13);
    \u0275\u0275property("ngIf", !ctx_r2.showSuccessMessage)("ngIfElse", successMessageTemplate_r12);
  }
}
function SendInquiryDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-send-inquiry-skeleton-loader");
    \u0275\u0275elementContainer(1, 46);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sendEnquiryButton_r10 = \u0275\u0275reference(19);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sendEnquiryButton_r10);
  }
}
function SendInquiryDialogComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "img", 78);
    \u0275\u0275elementStart(2, "h2", 79);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 80);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 81)(9, "span", 82)(10, "mat-icon", 83);
    \u0275\u0275text(11, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 84);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "n3581"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "n3582"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.fc["email"].value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "n3583"), " ");
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_mat_icon_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1, "open_in_new");
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_mat_spinner_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 97);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 87);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 89);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.changeAccount());
    });
    \u0275\u0275elementStart(6, "span", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 91);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-checkbox", 92);
    \u0275\u0275listener("ngModelChange", function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_Template_mat_checkbox_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addTenantinUrl($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 93);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 94);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.handlePdfPreview());
    });
    \u0275\u0275elementStart(17, "a")(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_mat_icon_20_Template, 2, 0, "mat-icon", 95)(21, SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_mat_spinner_21_Template, 1, 0, "mat-spinner", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 10, "n3711"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detectedTenantinEmail ? ctx_r2.detectedTenantinEmail : ctx_r2.user.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "n3714"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 14, "n3712"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r2.appendTenantinPdf);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 16, "n3713"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loadingState[ctx_r2.loadingStateEnum.GET_PDF]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.tenantInformation == null ? null : ctx_r2.tenantInformation.tenantResume);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingState[ctx_r2.loadingStateEnum.GET_PDF]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingState[ctx_r2.loadingStateEnum.GET_PDF]);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 46);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tenantinCreateAccount_r15 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", tenantinCreateAccount_r15);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 113);
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1, "open_in_new");
    \u0275\u0275elementEnd();
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_mat_spinner_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 116);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.createTenantProfile());
    });
    \u0275\u0275elementStart(1, "a")(2, "span", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_mat_icon_6_Template, 2, 0, "mat-icon", 95)(7, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_mat_spinner_7_Template, 1, 0, "mat-spinner", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.loadingState[ctx_r2.loadingStateEnum.CREATE_TENANTIN_PROFILE]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isLimitReached.status ? \u0275\u0275pipeBind1(4, 4, "n3735") : \u0275\u0275pipeBind1(5, 6, "n3715"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.loadingState[ctx_r2.loadingStateEnum.CREATE_TENANTIN_PROFILE]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingState[ctx_r2.loadingStateEnum.CREATE_TENANTIN_PROFILE]);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onToggleTenantinCreateAccount());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n117"), " ");
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 109);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3734"), " ");
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3487"), " ");
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_mat_form_field_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n621"), " ");
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 107);
    \u0275\u0275element(1, "input", 121);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275template(3, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_mat_form_field_1_Conditional_3_Template, 3, 3, "mat-error", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, (tmp_10_0 = ctx_r2.connectEmailForm.get("pin")) == null ? null : tmp_10_0.valid));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 3, "n567"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_12_0 = ctx_r2.connectEmailForm.get("pin")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx_r2.connectEmailForm.get("pin")) == null ? null : tmp_12_0.hasError) ? 3 : -1);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_mat_form_field_1_Template, 4, 7, "mat-form-field", 118);
    \u0275\u0275elementStart(2, "button", 119);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sendOtp(ctx_r2.loadingStateEnum.SEND_OTP));
    });
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.detectedTenantinUrl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.showResendOtp || ctx_r2.loadingState[ctx_r2.loadingStateEnum.SEND_OTP]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", !ctx_r2.showResendOtp ? \u0275\u0275pipeBind1(5, 4, "n557") : \u0275\u0275pipeBind1(6, 6, "n271"), " ", ctx_r2.resendOtpCooldownTime, " ");
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_mat_spinner_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 122);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_div_1_Template, 2, 0, "div", 99);
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275template(3, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_3_Template, 8, 8, "button", 100)(4, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_4_Template, 3, 3, "button", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 102);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 103);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 104);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 103);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 105);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "form", 106)(21, "mat-form-field", 107);
    \u0275\u0275element(22, "input", 108);
    \u0275\u0275pipe(23, "translations");
    \u0275\u0275template(24, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_24_Template, 3, 3, "mat-error", 109)(25, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Conditional_25_Template, 3, 3, "mat-error", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_ng_container_26_Template, 7, 8, "ng-container", 41);
    \u0275\u0275elementStart(27, "button", 110);
    \u0275\u0275listener("click", function SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.connectAccount(ctx_r2.loadingStateEnum.CONNECT_ACCOUNT));
    });
    \u0275\u0275elementStart(28, "span", 111);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_mat_spinner_31_Template, 1, 0, "mat-spinner", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLimitReached.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isLimitReached.status || !ctx_r2.hasTenantinAccount ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasTenantinAccount ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "n3716"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 18, "n3717"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "n3718"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 22, "n3719"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "n3720"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.connectEmailForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c0, (tmp_17_0 = ctx_r2.connectEmailForm.get("email")) == null ? null : tmp_17_0.valid));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 26, "n3722"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_19_0 = ctx_r2.connectEmailForm.get("email")) == null ? null : tmp_19_0.hasError("accountNotDetected")) ? 24 : ((tmp_19_0 = ctx_r2.connectEmailForm.get("email")) == null ? null : tmp_19_0.hasError) ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isOtpSent);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loadingState[ctx_r2.loadingStateEnum.CONNECT_ACCOUNT]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 28, "n3721"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loadingState[ctx_r2.loadingStateEnum.CONNECT_ACCOUNT]);
  }
}
function SendInquiryDialogComponent_ng_template_14_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, SendInquiryDialogComponent_ng_template_14_div_0_Conditional_1_Template, 22, 18)(2, SendInquiryDialogComponent_ng_template_14_div_0_Conditional_2_Template, 1, 1, "ng-container", 46)(3, SendInquiryDialogComponent_ng_template_14_div_0_ng_template_3_Template, 32, 32, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.toggleTenantinCreateAccount && ctx_r2.hasTenantinAccount ? 1 : 2);
  }
}
function SendInquiryDialogComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SendInquiryDialogComponent_ng_template_14_div_0_Template, 5, 1, "div", 85);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.isRentCommercial);
  }
}
function SendInquiryDialogComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "h4", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 125);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(7, 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const tenantinSection_r20 = \u0275\u0275reference(15);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("You\u2019ve reached your daily limit of sending ", ctx_r2.enquiryLimit, " enquiries!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, \u0275\u0275pipeBind1(5, 3, "n519")));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", tenantinSection_r20);
  }
}
function SendInquiryDialogComponent_ng_template_18_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 122);
  }
}
function SendInquiryDialogComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "button", 127);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275template(4, SendInquiryDialogComponent_ng_template_18_mat_spinner_4_Template, 1, 0, "mat-spinner", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loadingState[ctx_r2.loadingStateEnum.COMPONENT] || ctx_r2.loadingState[ctx_r2.loadingStateEnum.SUBMIT_FORM]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "n2963"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loadingState[ctx_r2.loadingStateEnum.SUBMIT_FORM]);
  }
}
var PaymentMode;
(function(PaymentMode2) {
  PaymentMode2["CASH"] = "Cash";
  PaymentMode2["MORTGAGE"] = "Mortgage";
})(PaymentMode || (PaymentMode = {}));
var LoadingState;
(function(LoadingState2) {
  LoadingState2[LoadingState2["CONNECT_ACCOUNT"] = 0] = "CONNECT_ACCOUNT";
  LoadingState2[LoadingState2["GET_PDF"] = 1] = "GET_PDF";
  LoadingState2[LoadingState2["CREATE_TENANTIN_PROFILE"] = 2] = "CREATE_TENANTIN_PROFILE";
  LoadingState2[LoadingState2["COMPONENT"] = 3] = "COMPONENT";
  LoadingState2[LoadingState2["SEND_OTP"] = 4] = "SEND_OTP";
  LoadingState2[LoadingState2["SUBMIT_FORM"] = 5] = "SUBMIT_FORM";
})(LoadingState || (LoadingState = {}));
var SendInquiryDialogComponent = class _SendInquiryDialogComponent {
  constructor(icon, dialogData, dialogRef, fb, snack, auth, window, router, routeService, dialog, profileFacde, enquiryService, storageService) {
    this.icon = icon;
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.snack = snack;
    this.auth = auth;
    this.window = window;
    this.router = router;
    this.routeService = routeService;
    this.dialog = dialog;
    this.profileFacde = profileFacde;
    this.enquiryService = enquiryService;
    this.storageService = storageService;
    this.defaultUserImg = environment.defaultAvatarImg;
    this.minDate = +this.dialogData.ad.availableFrom * 1e3 > Date.now() ? new Date(+this.dialogData.ad.availableFrom * 1e3) : /* @__PURE__ */ new Date();
    this.ad = this.dialogData.ad;
    this.appendTenantinPdf = new FormControl(false);
    this.resendOtpCooldownTime = 45;
    this.adultsCount = 1;
    this.detectedTenantinUrl = "";
    this.detectedTenantinEmail = void 0;
    this.isLimitReached = {
      status: 0,
      translation: "n3707"
    };
    this.loadingState = {
      [LoadingState.CONNECT_ACCOUNT]: false,
      [LoadingState.GET_PDF]: false,
      [LoadingState.COMPONENT]: false,
      [LoadingState.CREATE_TENANTIN_PROFILE]: false,
      [LoadingState.SEND_OTP]: false,
      [LoadingState.SUBMIT_FORM]: false
    };
    this.toggleTenantinCreateAccount = false;
    this.hasTenantinAccount = false;
    this.showResendOtp = false;
    this.isOtpSent = false;
    this.isTenantInProfile = true;
    this.isRentCommercial = false;
    this.isPublicPage = false;
    this.showSuccessMessage = false;
    this.isResubmitEnquiry = false;
    this.buttonType = ButtonType;
    this.sharedAdsFacade = this.dialogData.sharedAdsFacade;
    this.sellerType = SellerType;
    this.sectionType = SectionType;
    this.paymentMode = PaymentMode;
    this.loadingStateEnum = LoadingState;
    this.enquiryLimit = ENQUIRY_LIMIT;
    this.connectEmailForm = this.fb.group({
      email: [void 0, [Validators.required, AppEmailValidator.validateEmailPattern()]],
      pin: [void 0, [Validators.required, Validators.minLength(6), Validators.pattern("[0-9]+")]]
    });
    this.user = this.auth.user();
    this.isPublicPage = this.routeService.getRouteData()?.[RouteDataType.IS_PUBLIC_PAGE];
  }
  get fc() {
    return this.tenantForm.controls;
  }
  updateRadioBtnChild(event, fromRadioButton) {
    if (!fromRadioButton) {
      event.checked = !event.checked;
    }
    if (event.value || !fromRadioButton) {
      this.tenantForm.get("hasChild").setValue(false);
    }
    if (event.value || fromRadioButton) {
      this.tenantForm.get("hasChild").setValue(true);
    }
  }
  updateRadioBtnPet(event, fromRadioButton) {
    if (!fromRadioButton) {
      event.checked = !event.checked;
    }
    if (event.value || !fromRadioButton) {
      this.tenantForm.get("hasPets").setValue(false);
    }
    if (event.value || fromRadioButton) {
      this.tenantForm.get("hasPets").setValue(true);
    }
  }
  addTenantinUrl(checked) {
    if (checked) {
      this.connectEmailForm.patchValue({
        email: this.detectedTenantinUrl
      });
    } else {
      this.connectEmailForm.patchValue({
        email: ""
      });
    }
  }
  changeAccount() {
    this.toggleTenantinCreateAccount = true;
    this.detectedTenantinUrl = "";
    this.connectEmailForm.controls["email"].enable();
    this.isOtpSent = false;
  }
  connectAccount(loadingState) {
    if (this.connectEmailForm.controls["email"].invalid) {
      return;
    }
    if (this.isOtpSent) {
      if (this.connectEmailForm.valid) {
        this.verifyOtp();
      }
    } else {
      this.sendOtp(loadingState);
    }
  }
  verifyOtp() {
    this.loadingState[LoadingState.CONNECT_ACCOUNT] = true;
    const FORM_DATA = {
      email: this.connectEmailForm.controls["email"].value,
      pin: this.connectEmailForm.controls["pin"].value
    };
    this.sharedAdsFacade.verifyTenantOtp(FORM_DATA).pipe(finalize(() => this.loadingState[LoadingState.CONNECT_ACCOUNT] = false)).subscribe((res) => {
      this.detectedTenantinUrl = res.data?.["profileUrl"];
      this.detectedTenantinEmail = res.data?.["email"];
      this.tenantInformation = res.data;
      this.connectEmailForm.reset();
      this.isLimitReached.status = 0;
      this.appendTenantinPdf.patchValue(true);
      this.onToggleTenantinCreateAccount();
      this.checkForTenantinAccount(this.detectedTenantinUrl);
      this.snack.open({
        data: { translationKey: "n3743", type: "success" },
        panelClass: ["snackbar-success"]
      });
    }, () => {
      this.connectEmailForm.get("pin").setErrors({ incorrectPin: true });
    });
  }
  sendOtp(loadingState) {
    this.loadingState[loadingState] = true;
    this.sharedAdsFacade.sendTenantOtp({ email: this.connectEmailForm.controls["email"].value }).pipe(finalize(() => this.loadingState[loadingState] = false)).subscribe(() => {
      this.startOtpCooldownTimer();
      this.isOtpSent = true;
      this.connectEmailForm.controls["email"].disable();
    }, (err) => {
      this.connectEmailForm.controls["email"].enable();
      this.isOtpSent = false;
      if (err?.error?.error?.id === "accountNotDetected") {
        this.connectEmailForm.get("email").setErrors({ accountNotDetected: true });
        return;
      }
      this.snack.open({
        data: { translationKey: "n608", type: "error" },
        panelClass: ["snackbar-error"]
      });
    });
  }
  onToggleTenantinCreateAccount() {
    this.toggleTenantinCreateAccount = !this.toggleTenantinCreateAccount;
    this.connectEmailForm.reset();
    clearInterval(this.timer);
  }
  createTenantProfile() {
    this.loadingState[LoadingState.CREATE_TENANTIN_PROFILE] = true;
    this.sharedAdsFacade.createTenantProfile().pipe(finalize(() => this.loadingState[LoadingState.CREATE_TENANTIN_PROFILE] = false)).subscribe((res) => {
      const OPENED_TAB = this.window.reference.open(`${environment.tenantInCreateProfileUrl}?findqoAuthToken=${res.data.accessToken}`, "_blank");
      if (!OPENED_TAB || OPENED_TAB.closed || typeof OPENED_TAB.closed === "undefined") {
        this.snack.open({
          data: { translationKey: "n3965", type: "error" },
          panelClass: ["snackbar-error"]
        });
      }
    }, () => {
      this.snack.open({
        data: { translationKey: "n3736", type: "error" },
        panelClass: ["snackbar-error"]
      });
    });
  }
  handlePdfPreview() {
    this.loadingState[LoadingState.GET_PDF] = true;
    this.sharedAdsFacade.getPdfLocalUrl(this.tenantInformation.tenantResumeUrl).pipe(finalize(() => this.loadingState[LoadingState.GET_PDF] = false)).subscribe((res) => {
      const LINK = URL.createObjectURL(res);
      this.window.reference.open(LINK);
    });
  }
  // TODO: Refactor this function. This is not good as it's more than 100 lines of code for a function/method!
  onSubmit(isSubmittedFromDialog = false) {
    this.enquiryService.handleAmplitudeEvents(AmplitudeEvent.ENQUIRY_FORM_SUBMITTED, this.user, this.ad);
    if (!this.tenantForm.valid) {
      this.enquiryService.handleAmplitudeEvents(AmplitudeEvent.SUBMIT_ENQUIRY_FORM_FAILED, __spreadProps(__spreadValues({}, this.user), {
        name: this.fc["name"]?.value,
        email: this.fc["email"]?.value
      }), this.ad, { error: "Form incomplete or invalid! Please check all the fields." });
    }
    if (!this.isRentCommercial && !this.connectEmailForm.get("email")?.value || this.detectedTenantinUrl) {
      this.connectEmailForm.get("email").setErrors(null);
    }
    if (this.tenantForm.get("date")?.pristine && this.tenantForm.get("date")?.errors) {
      this.tenantForm.get("date").setErrors(null);
    }
    if (!this.tenantForm.valid && (this.tenantForm?.get("tenantinUrl")?.valid || Object.keys(this.tenantForm.controls).find((key) => this.tenantForm?.controls[key]?.invalid && key === "tenantinUrl" ? this.tenantForm?.controls[key]?.value : true))) {
      this.snack.open({
        data: { translationKey: "n3214", type: "error" },
        panelClass: ["snackbar-error"]
      });
    } else {
      if (!this.appendTenantinPdf.value && !this.isRentCommercial && this.detectedTenantinUrl && !isSubmittedFromDialog) {
        this.openIncludeResumeDialog();
        return;
      }
      this.loadingState[LoadingState.SUBMIT_FORM] = true;
      const FORM_DATA = this.tenantForm.value;
      const MOVE_IN_DATE = FORM_DATA?.date ? FORM_DATA.date : null;
      let sendInquiryValues;
      if (this.ad.section.reference === SectionType.PROPERTIES_FOR_SALE) {
        sendInquiryValues = {
          phone: FORM_DATA.phone,
          message: FORM_DATA.message,
          paymentMode: FORM_DATA.paymentMode
        };
      } else if (this.isRentCommercial) {
        sendInquiryValues = {
          phone: FORM_DATA.phone,
          message: FORM_DATA.message
        };
      } else {
        sendInquiryValues = {
          phone: FORM_DATA.phone,
          adultsCount: FORM_DATA.adults.toString(),
          withTenantResume: this.appendTenantinPdf.value ? "1" : "0",
          pet: {
            hasPet: FORM_DATA.hasPets ? "1" : "0"
          },
          message: FORM_DATA.message
        };
      }
      if (MOVE_IN_DATE) {
        const unixTimestamp = Math.floor(MOVE_IN_DATE / 1e3);
        const date = new Date(unixTimestamp * 1e3);
        const formattedDate = date.toISOString().split("T")[0];
        sendInquiryValues = __spreadProps(__spreadValues({}, sendInquiryValues), {
          moveDate: formattedDate,
          moveInDate: unixTimestamp.toString()
        });
      }
      if (!this.isResubmitEnquiry && !this.dialogData?.isReSubmitEnquiry) {
        this.isResubmitEnquiry = true;
        const enquiryFormValues = __spreadProps(__spreadValues({}, sendInquiryValues), {
          name: this.fc["name"].value,
          email: this.fc["email"].value
        });
        this.sharedAdsFacade.sendInquiry(this.dialogData.ad.id, enquiryFormValues).then((inquiryData) => {
          this.enquiryService.handleAmplitudeEvents(AmplitudeEvent.SUBMIT_ENQUIRY_FORM_SUCCESS, __spreadProps(__spreadValues({}, this.user), {
            name: this.fc["name"].value,
            email: this.fc["email"].value
          }), this.ad, {
            enquiryId: inquiryData.data.id,
            enquiryFormValues
          });
          this.dialogData = __spreadProps(__spreadValues({}, this.dialogData), { inquiryData: inquiryData?.data });
          const isLoggedIn = !!this.user;
          if (isLoggedIn) {
            this.profileFacde.updateProfileValues(MenuKeys.ENQUIRY_COUNT, UpdateAction.ADD);
          }
          this.dialogRef.backdropClick().subscribe(() => this.closeForm());
          this.showSuccessMessage = true;
          this.loadingState[LoadingState.SUBMIT_FORM] = false;
        }).catch((error) => {
          const errorMessage = error?.error?.error?.errors?.[0]?.messages?.[0] || error?.message || "Unknown error occurred";
          const errorId = error?.error?.error?.id;
          this.enquiryService.handleAmplitudeEvents(AmplitudeEvent.SUBMIT_ENQUIRY_FORM_FAILED, __spreadProps(__spreadValues({}, this.user), {
            name: this.fc["name"].value,
            email: this.fc["email"].value
          }), this.ad, { error: errorMessage.toString(), errorId });
          this.isResubmitEnquiry = false;
          this.loadingState[LoadingState.SUBMIT_FORM] = false;
          this.snack.open({
            data: { translationKey: "n608", type: "error" },
            panelClass: ["snackbar-error"]
          });
          if (errorId) {
            this.fc["email"]?.setErrors({ [errorId]: true });
          }
        });
      } else if (this.dialogData?.inquiryData) {
        const RESUBMIT_ENQUIRY_DATA = __spreadProps(__spreadValues({}, sendInquiryValues), {
          // ...(this.isPublicPage && {
          name: this.fc["name"].value,
          email: this.fc["email"].value
          // }),
        });
        this.sharedAdsFacade.handleEnquiryReSubmit(RESUBMIT_ENQUIRY_DATA, this.dialogData, !this.isRentCommercial, this.dialogRef);
        this.loadingState[LoadingState.SUBMIT_FORM] = false;
      }
    }
  }
  openIncludeResumeDialog() {
    this.dialog.open(IncludeRentalResumeDialogComponent, {
      width: "95%",
      maxWidth: "500px",
      data: {
        tenantProfile: __spreadProps(__spreadValues({}, this.tenantInformation), { isIncludeResumeRequired: Boolean(this.dialogData?.isIncludeResumeRequired) }),
        sharedFacade: this.sharedAdsFacade,
        windowService: this.window
      },
      panelClass: ["full-screen"],
      backdropClass: "tenantin-backdrop"
    }).afterClosed().subscribe((res) => {
      if (typeof res === "boolean") {
        this.appendTenantinPdf.setValue(res);
        this.onSubmit(true);
      }
    });
  }
  showWhyTenantin() {
    this.window.reference.open(environment.tenantInWhyUrl, "_blank", "noopener");
  }
  decreaseAdultCount() {
    if (this.adultsCount > 0) {
      --this.adultsCount;
    }
  }
  increaseAdultCount() {
    ++this.adultsCount;
  }
  closeForm() {
    if (this.showSuccessMessage === true) {
      this.dialogRef.close(this.dialogData);
    } else {
      this.dialogRef.close();
    }
  }
  startOtpCooldownTimer() {
    this.showResendOtp = false;
    this.resendOtpCooldownTime = 45;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.resendOtpCooldownTime = this.resendOtpCooldownTime - 1;
      if (this.resendOtpCooldownTime === 0) {
        this.showResendOtp = true;
        this.resendOtpCooldownTime = void 0;
        clearInterval(this.timer);
      }
    }, 1e3);
  }
  setMaximumDate() {
    this.maxDate = /* @__PURE__ */ new Date();
    this.maxDate.setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 2);
  }
  updateInquiryData() {
    const AVAILABLE_MIN_DATE = +this.dialogData.ad.availableFrom * 1e3 > Date.now() ? this.minDate.getDate() : this.minDate.getDate() + 1;
    this.minDate.setDate(AVAILABLE_MIN_DATE);
    if (this.dialogData?.isReSubmitEnquiry && this.dialogData?.inquiryData) {
      this.prefillEnquiryForm(this.dialogData.inquiryData);
      this.loadingState[LoadingState.COMPONENT] = false;
    } else {
      this.sharedAdsFacade.loadInquiry(this.dialogData?.ad?.id).then((response) => {
        this.prefillEnquiryForm(response?.data[0]);
        this.isLimitReached = {
          status: !+response?.meta?.hasTenantAccount && +response?.meta?.hasLimitReached,
          translation: "n3707"
        };
        this.dialogData = __spreadProps(__spreadValues({}, this.dialogData), {
          isIncludeResumeRequired: +(response?.meta?.hasLimitReached ?? "0") && +(response?.meta?.hasTenantAccount ?? "0")
        });
        if (!Array.isArray(response.data)) {
          this.isLimitReached = {
            status: 0,
            translation: "n3707"
          };
        }
        this.loadingState[LoadingState.COMPONENT] = false;
      });
    }
  }
  checkForTenantinAccount(tenantinUrl = "") {
    const HAS_TENANTIN_URL = Boolean(tenantinUrl);
    this.appendTenantinPdf.setValue(HAS_TENANTIN_URL);
    this.detectedTenantinUrl = HAS_TENANTIN_URL ? tenantinUrl : "";
    this.toggleTenantinCreateAccount = !HAS_TENANTIN_URL;
    this.hasTenantinAccount = HAS_TENANTIN_URL;
  }
  prefillEnquiryForm(data) {
    this.checkForTenantinAccount(data?.tenantin?.tenantResumeUrl);
    this.tenantInformation = data?.tenantin;
    this.detectedTenantinEmail = data?.tenantin?.email;
    this.adultsCount = +data?.adultsCount || 1;
    if (this.ad.section.reference === SectionType.PROPERTIES_FOR_SALE) {
      const UPDATED_VALUES = {
        name: this.user?.name || data?.name,
        email: this.user?.email || data?.email,
        phone: data?.phone
      };
      this.tenantForm.patchValue(UPDATED_VALUES);
    } else if (!this.isRentCommercial) {
      const UPDATED_VALUES = {
        name: this.user?.name || data?.name,
        email: this.user?.email || data?.email,
        phone: data?.phone,
        adults: data?.adultsCount || 1
      };
      this.tenantForm.patchValue(UPDATED_VALUES);
    } else {
      const UPDATED_VALUES = {
        name: this.user?.name || data?.name,
        email: this.user?.email || data?.email,
        phone: data?.phone
      };
      this.tenantForm.patchValue(UPDATED_VALUES);
    }
  }
  removeFormControls() {
    this.tenantForm.removeControl("adults");
    this.tenantForm.removeControl("hasPets");
    if (this.ad.section.reference === SectionType.PROPERTIES_FOR_SALE) {
      this.tenantForm.removeControl("date");
    } else {
      this.tenantForm.removeControl("paymentMode");
    }
  }
  checkIsRentCommercial() {
    if (this.router.url.includes(AisleType.RENT_COMMERCIAL) || this.dialogData.ad.aisle.reference === AisleType.RENT_COMMERCIAL || this.ad.section.reference === SectionType.PROPERTIES_FOR_SALE) {
      this.removeFormControls();
      this.isRentCommercial = true;
    }
  }
  initDeclarations() {
    const isLoggedIn = !!this.user;
    this.loadingState[LoadingState.COMPONENT] = isLoggedIn;
    if (this.isPublicPage) {
      this.fc["name"].enable();
      this.fc["email"].enable();
      this.loadingState[LoadingState.COMPONENT] = false;
    } else if (isLoggedIn) {
      this.updateInquiryData();
    }
    if (!isLoggedIn || this.isPublicPage) {
      this.minDate.setDate(this.minDate.getDate() + 1);
      const enquiryFormValues = this.storageService.getItemSession(StorageType.ENQUIRY_FORM_VALUES);
      if (enquiryFormValues) {
        this.prefillEnquiryForm(JSON.parse(enquiryFormValues));
      }
    }
    this.setMaximumDate();
    this.checkIsRentCommercial();
  }
  createTenantForm() {
    const isLoggedIn = !!this.user;
    this.tenantForm = this.fb.group({
      name: [{ value: void 0, disabled: isLoggedIn }, Validators.required],
      email: [{ value: void 0, disabled: isLoggedIn }, [Validators.required, Validators.email]],
      phone: [void 0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      adults: [void 0, Validators.required],
      date: [void 0],
      message: [`Hi,

I am interested in your property on FindQo.ie. Link: ${this.ad.adlink}

Ad ID: ${this.ad.id}`, [Validators.required]],
      hasPets: [void 0],
      paymentMode: [void 0]
    });
  }
  ngOnInit() {
    this.createTenantForm();
    this.enquiryService.handleAmplitudeEvents(AmplitudeEvent.ENQUIRY_FORM_OPENED, this.user, this.ad);
    this.initDeclarations();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  static {
    this.\u0275fac = function SendInquiryDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SendInquiryDialogComponent)(\u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RouteService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(EnquiryService), \u0275\u0275directiveInject(StorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendInquiryDialogComponent, selectors: [["findqo-send-inquiry-dialog"]], standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: DateAdapter,
        useClass: DatePickerAdapter,
        deps: [MAT_DATE_LOCALE, Platform]
      }
    ])], decls: 20, vars: 4, consts: [["successMessageTemplate", ""], ["tenantinSection", ""], ["enquiryLimitReached", ""], ["sendEnquiryButton", ""], ["noPets", ""], ["havePets", ""], ["picker", ""], ["tenantinCreateAccount", ""], [1, "inquiry-container", "h-100", "position-relative", "border-bottom-left-radius"], [1, "row", "justify-content-between", "align-items-center", "position-fixed", "top-0", "inquiry-header", "border-bottom", "w-100", "px-3", "bg-basic-1", "border-top-left-radius"], [1, "col"], [1, "text-title-16px-regular", "lh-20px", "fg-general-5"], [1, "col-auto"], ["mat-mini-fab", "", "aria-label", "close button", "disableRipple", "", "type", "button", 1, "bg-general-1", "close-btn", 3, "click"], [1, "fg-general-4"], [1, "send-inquiry", 3, "formGroup"], ["class", "send-inquiry", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "send-inquiry", 3, "ngSubmit", "formGroup"], [4, "ngIf", "ngIfElse"], [1, "p-3", "fw-400", "fs-14px"], [1, "bg-general-1", "rounded-1", "row", "gap-2", "justify-content-start", "align-items-center", "mb-2", "p-2"], ["alt", "Dealer profile picture", "width", "40", "height", "40", 1, "dealer-img", 3, "ngSrc"], [1, "col", "overflow-hidden"], [1, "d-block", "fg-general-5", "text-truncate"], [1, "d-block", "fg-general-3"], [1, "row", "justify-content-between", "align-items-center", "gap-3"], ["findqoAdImage", "", 1, "ad-image", "rounded-1", 3, "src", "alt"], [1, "d-block", "fw-400", "fs-14px", "lh-18px", "fg-general-5"], ["class", "d-inline-flex align-items-center pe-2", 4, "ngIf"], ["class", "d-inline-flex align-items-center", 4, "ngIf"], [1, "d-block", "text-small-14px-regular", "lh-18px", "fg-general-5"], ["for", "nameControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block", "mt-3"], ["appearance", "outline", "id", "nameControl", 1, "w-100"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "Enter your full name"], ["class", "text-small-12px-regular", 4, "ngIf"], ["for", "emailControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], ["id", "emailControl", "appearance", "outline", 1, "w-100"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Enter your email address", 1, "w-100"], ["for", "phoneControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], ["id", "phoneControl", "appearance", "outline", 1, "w-100"], ["matInput", "", "type", "tel", "formControlName", "phone", "minlength", "7", "maxlength", "10", 1, "w-100", 3, "placeholder"], [4, "ngIf"], ["for", "messageControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], ["id", "messageControl", "appearance", "outline"], ["matInput", "", "formControlName", "message", "rows", "10", 1, "message-area", "py-1", 3, "placeholder"], ["class", "mb-4", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "d-inline-flex", "align-items-center", "pe-2"], [1, "me-2", "icon-size"], [1, "text-caption-2-regular", "fg-general-4"], [1, "d-inline-flex", "align-items-center"], [1, "text-small-12px-regular"], [1, "row", "justify-content-between", "align-items-center", "mb-4"], [1, "d-flex", "lh-18px", "fg-general-4"], [1, "d-flex", "lh-18px", "text-caption-regular", "fg-general-3"], [1, "col-auto", "add-btn"], ["mat-stroked-button", "", "disableRipple", "", "type", "button", 1, "bg-basic-1", "round-btn", "px-0", 3, "click", "disabled"], [1, "fg-prim-2", "fs-18px"], ["type", "number", "formControlName", "adults", 1, "text-small-14px-regular", "lh-18px", "fg-general-5", "border-0", "w-35px", "text-center", 3, "ngModelChange", "ngModel", "min"], ["mat-stroked-button", "", "disableRipple", "", "type", "button", 1, "bg-basic-1", "round-btn", "px-0", 3, "click"], [1, "fg-prim-2"], [1, "d-inline-block", "lh-18px", "fg-general-4", "mb-2"], [1, "fg-general-3", "text-caption-regular"], ["formControlName", "hasPets"], [1, "row", "mx-0", "mb-4", "justify-content-between", "align-items-center", "gap-3"], [1, "col", "checkbox-list", "px-0"], [1, "d-flex", "justify-content-between", "align-items-center", "radio-btn-item", "p-3", "fg-general-4", 3, "click"], [1, "text-body-regular"], ["color", "primary", 1, "text-body-regular", "fg-general-4", "option-selection-radio-btn", 3, "click", "value"], ["for", "dateControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], ["id", "dateControl", "appearance", "outline"], ["matInput", "", "formControlName", "date", "placeholder", "Select a date", 1, "w-100", 3, "click", "matDatepicker", "min", "max"], ["matIconSuffix", "", 3, "for"], ["matDatepickerToggleIcon", "", 1, "pe-3", "fs-18px"], [1, "mb-4"], ["formControlName", "paymentMode", 1, "payment-mode"], ["labelPosition", "before", "color", "primary", 1, "option-selection-radio-btn", 3, "value"], [1, "text-center", "px-3"], ["src", "assets/images/advertisement-images/ad-success-inquiry.png", 1, "mt-48px"], [1, "heading-2", "fg-general-5", "my-3"], [1, "fg-general-3", "text-body-regular"], [1, "bg-general-1", "email-container"], [1, "text-body-regular", "fg-general-5", "text-center"], [1, "email-icon", "fg-general-3", "me-2"], ["mat-flat-button", "", "color", "primary", "disableRipple", "", "type", "button", 1, "w-100", "text-small-14px-regular", "lh-18px", "h-40px", 3, "click"], ["class", "py-3 px-2 tenantin-section mb-3", 4, "ngIf"], [1, "py-3", "px-2", "tenantin-section", "mb-3"], [1, "fg-general-5", "text-body-regular"], [1, "mb-2", "fg-general-5", "text-body-regular"], ["mat-button", "", "type", "button", 1, "mb-4", 3, "click"], [1, "fg-prim-2", "text-caption-regular"], [1, "mb-4", "text-paragraph-regular", "fg-general-5"], ["color", "primary", 1, "tenantin-checkbox", 3, "ngModelChange", "formControl"], [1, "fg-general-5", "text-small-14px-regular", "profile-pdf"], ["mat-button", "", "type", "button", 1, "d-inline-block", "p-0", "m-0", "preview-pdf-button", 3, "click", "disabled"], ["class", "fg-prim-2 fs-18px", 4, "ngIf"], ["diameter", "16", "iconPositionEnd", "", "class", "d-inline-block align-middle", 4, "ngIf"], ["diameter", "16", "iconPositionEnd", "", 1, "d-inline-block", "align-middle"], [1, "row", "justify-content-between", "w-100"], ["class", "col-auto", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "tenant-button", "heading-4-medium", "fg-prim-2", 3, "disabled"], ["mat-button", "", "type", "button", 1, "tenant-button", "text-body-regular", "fg-general-4"], [1, "fg-general-5", "text-body-medium", "mt-4"], [1, "fg-general-5", "text-paragraph-regular"], [1, "fg-general-5", "text-body-medium", "mt-3"], [1, "fg-general-5", "text-body-regular", "mt-4"], [3, "formGroup"], ["appearance", "outline", 1, "mt-2", "tenantin-url", 3, "ngClass"], ["formControlName", "email", "matInput", "", 1, "w-100", 3, "placeholder"], [1, "text-small-12px-regular", "fg-error-3"], ["mat-button", "", "color", "primary", "type", "submit", 1, "mt-2", 3, "click", "disabled"], [1, "text-body-regular", "align-middle", "fg-prim-2"], ["diameter", "14", "class", "d-inline-block align-middle", 4, "ngIf"], ["ngSrc", "assets/images/tenantin-mini-logo.png", "alt", "Tenantin", "width", "85", "height", "21", "priority", "", 1, "fs-10px", "d-block", "mb-2"], ["mat-button", "", "type", "button", 1, "tenant-button", "heading-4-medium", "fg-prim-2", 3, "click", "disabled"], ["diameter", "16", "class", "d-inline-block align-middle ms-1", 4, "ngIf"], ["diameter", "16", 1, "d-inline-block", "align-middle", "ms-1"], ["mat-button", "", "type", "button", 1, "tenant-button", "text-body-regular", "fg-general-4", 3, "click"], ["appearance", "outline", "class", "mt-2 tenantin-url", 3, "ngClass", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "d-block", "ms-auto", 3, "click", "disabled"], [1, "text-body-regular", "fg-general-4"], ["formControlName", "pin", "matInput", "", 1, "w-100", 3, "placeholder"], ["diameter", "14", 1, "d-inline-block", "align-middle"], [1, "px-3", "py-5"], [1, "fg-general-5", "heading-4-medium"], [1, "text-center", "fg-general-5", "heading-4-medium", "mb-3"], [1, "position-fixed", "bottom-0", "px-3", "bg-basic-1", "w-100", "inquiry-btn", "text-center", "border-bottom-left-radius"], ["id", "send-enquiry-submit", "mat-flat-button", "", "color", "primary", "disableRipple", "", "type", "submit", 1, "w-100", "text-small-14px-regular", "lh-18px", "h-40px", 3, "disabled"]], template: function SendInquiryDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "p", 11);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 12)(7, "button", 13);
        \u0275\u0275listener("click", function SendInquiryDialogComponent_Template_button_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeForm());
        });
        \u0275\u0275elementStart(8, "mat-icon", 14);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(10, SendInquiryDialogComponent_Conditional_10_Template, 1, 2, "form", 15)(11, SendInquiryDialogComponent_Conditional_11_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, SendInquiryDialogComponent_ng_template_12_Template, 17, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, SendInquiryDialogComponent_ng_template_14_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, SendInquiryDialogComponent_ng_template_16_Template, 8, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, SendInquiryDialogComponent_ng_template_18_Template, 5, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "n2963"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(!ctx.loadingState[ctx.loadingStateEnum.COMPONENT] ? 10 : 11);
      }
    }, styles: ["\n\n.inquiry-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  max-width: 380px;\n  z-index: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset !important;\n}\n.ad-image[_ngcontent-%COMP%] {\n  object-fit: contain;\n  height: 70px;\n  width: auto;\n}\n.inquiry-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-top: 60px;\n  padding-bottom: 56px;\n  border-radius: 8px;\n}\n.dealer-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.inquiry-btn[_ngcontent-%COMP%] {\n  max-width: 380px;\n  border-top: 1px solid var(--neutral-2);\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.round-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.icon-size[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.message-area[_ngcontent-%COMP%] {\n  resize: none;\n}\n.add-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.add-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checked-option[_ngcontent-%COMP%] {\n  border: 1px solid var(--info-3);\n  background-color: var(--info-1);\n}\n.email-container[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 4px;\n  margin-inline-end: 8px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  line-height: 40px;\n}\n.mt-48px[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.email-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  vertical-align: middle;\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.info-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 12px;\n  height: 12px;\n  vertical-align: middle;\n}\n@media (max-width: 991.98px) {\n  .inquiry-header[_ngcontent-%COMP%], \n   .inquiry-btn[_ngcontent-%COMP%] {\n    max-width: -webkit-fill-available;\n  }\n}\n.steps-bg[_ngcontent-%COMP%] {\n  background-color: rgba(255, 92, 184, 0.05);\n  border-radius: 4px;\n}\n.mt-2px[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n.tenantin-section[_ngcontent-%COMP%] {\n  border: 1px solid var(--prim-2);\n  border-radius: 4px;\n  background-color: rgba(255, 90, 184, 0.08);\n}\n.profile-pdf[_ngcontent-%COMP%] {\n  margin-inline-start: 8px;\n  display: inline !important;\n  vertical-align: middle !important;\n}\na[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.tenant-button[_ngcontent-%COMP%] {\n  height: fit-content !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  text-align: left;\n}\n.preview-pdf-button[_ngcontent-%COMP%] {\n  max-width: 240px !important;\n}\n.preview-pdf-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px !important;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.border-bottom-left-radius[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 4px;\n}\n.border-top-left-radius[_ngcontent-%COMP%] {\n  border-top-left-radius: 4px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/send-inquiry-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SendInquiryDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-send-inquiry-dialog", providers: [
      {
        provide: DateAdapter,
        useClass: DatePickerAdapter,
        deps: [MAT_DATE_LOCALE, Platform]
      }
    ], standalone: false, template: `<!-- 
TODO: Remove anchor tag inside of the buttons
TODO: Create a separate component for Tenanin create account UI 
-->

<div class="inquiry-container h-100 position-relative border-bottom-left-radius">
	<div class="row justify-content-between align-items-center position-fixed top-0 inquiry-header border-bottom w-100 px-3 bg-basic-1 border-top-left-radius">
		<div class="col">
			<p class="text-title-16px-regular lh-20px fg-general-5">{{ 'n2963' | translations }}</p>
		</div>

		<div class="col-auto">
			<button mat-mini-fab class="bg-general-1 close-btn" aria-label="close button" disableRipple (click)="closeForm()" type="button">
				<mat-icon class="fg-general-4">close</mat-icon>
			</button>
		</div>
	</div>

	@if (!this.loadingState[loadingStateEnum.COMPONENT]) {
		<form [formGroup]="tenantForm" (ngSubmit)="onSubmit()" class="send-inquiry" *ngIf="!showSuccessMessage; else successMessageTemplate">
			<ng-container
				*ngIf="
					(!+isLimitReached.status && ad?.section?.reference === sectionType.PROPERTIES_FOR_RENT) ||
						isRentCommercial ||
						isPublicPage ||
						ad?.section?.reference === sectionType.PROPERTIES_FOR_SALE;
					else enquiryLimitReached
				"
			>
				<div class="p-3 fw-400 fs-14px">
					<!-- Landlord details / dealer details -->
					<div class="bg-general-1 rounded-1 row gap-2 justify-content-start align-items-center mb-2 p-2">
						<div class="col-auto">
							<img [ngSrc]="dialogData?.ad?.seller?.picture || defaultUserImg" alt="Dealer profile picture" class="dealer-img" width="40" height="40" />
						</div>

						<div class="col overflow-hidden">
							<span class="d-block fg-general-5 text-truncate">{{ dialogData?.ad?.seller?.name }}</span>

							<span class="d-block fg-general-3">
								{{ dialogData?.ad?.seller?.sellerTypeId === sellerType.BUSINESS ? ('n3160' | translations) : ('n3139' | translations) }}
							</span>
						</div>
					</div>

					<!-- Ad details -->
					<div class="row justify-content-between align-items-center gap-3">
						<div class="col-auto">
							<img [src]="dialogData?.ad?.images[0]?.url" [alt]="dialogData?.ad?.title" class="ad-image rounded-1" findqoAdImage />
						</div>

						<div class="col">
							<span class="d-block fw-400 fs-14px lh-18px fg-general-5">{{ dialogData?.ad?.title }}</span>

							<div class="d-inline-flex align-items-center pe-2" *ngIf="dialogData?.ad?.bedroomCount">
								<mat-icon class="me-2 icon-size">
									<findqo-bedroom-icon></findqo-bedroom-icon>
								</mat-icon>
								<span class="text-caption-2-regular fg-general-4">{{ dialogData?.ad?.bedroomCount }}</span>
							</div>

							<div class="d-inline-flex align-items-center pe-2" *ngIf="dialogData?.ad?.bathroomCount">
								<mat-icon class="me-2 icon-size">
									<findqo-shower-icon></findqo-shower-icon>
								</mat-icon>
								<span class="text-caption-2-regular fg-general-4">{{ dialogData?.ad?.bathroomCount }}</span>
							</div>

							<div class="d-inline-flex align-items-center" *ngIf="dialogData?.ad?.propertySize?.value && dialogData?.ad?.propertySize?.value !== '0'">
								<mat-icon class="me-2 icon-size">
									<findqo-property-size-icon></findqo-property-size-icon>
								</mat-icon>
								<span class="text-caption-2-regular fg-general-4">
									{{ dialogData?.ad?.propertySize?.value + ' ' + dialogData?.ad?.propertySize?.parameter }}
								</span>
							</div>

							<span class="d-block text-small-14px-regular lh-18px fg-general-5">
								{{ dialogData?.ad?.price | adPrice: dialogData?.ad?.rentalPeriod }}
							</span>
						</div>
					</div>

					<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block mt-3" for="nameControl">Full Name</mat-label>

					<mat-form-field appearance="outline" class="w-100" id="nameControl">
						<input matInput type="text" formControlName="name" placeholder="Enter your full name" />

						<mat-error *ngIf="tenantForm.get('name').hasError" class="text-small-12px-regular">
							{{ tenantForm.get('name').errors | formErrorMessage }}
						</mat-error>
					</mat-form-field>

					<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block" for="emailControl">{{ 'n3015' | translations }}</mat-label>

					<mat-form-field id="emailControl" appearance="outline" class="w-100">
						<input matInput type="email" formControlName="email" class="w-100" placeholder="Enter your email address" />

						<mat-error *ngIf="tenantForm.get('email').hasError" class="text-small-12px-regular">
							{{ tenantForm.get('email').errors | formErrorMessage }}
						</mat-error>
					</mat-form-field>

					<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block" for="phoneControl">{{ 'n3297' | translations }}</mat-label>

					<mat-form-field id="phoneControl" appearance="outline" class="w-100">
						<input matInput type="tel" formControlName="phone" class="w-100" minlength="7" maxlength="10" [placeholder]="'n3702' | translations" />

						<mat-error
							*ngIf="tenantForm.get('phone').hasError && !tenantForm.get('phone').hasError('minlength') && !tenantForm.get('phone').hasError('maxlength')"
							class="text-small-12px-regular"
						>
							This field is required!
						</mat-error>

						<mat-error *ngIf="tenantForm.get('phone').hasError('minlength') || tenantForm.get('phone').hasError('maxlength')" class="text-small-12px-regular">
							{{ 'n3405' | translations }}
						</mat-error>
					</mat-form-field>

					<div *ngIf="!isRentCommercial">
						<div class="row justify-content-between align-items-center mb-4">
							<div class="col">
								<span class="d-flex lh-18px fg-general-4">No. of occupants</span>
								<span class="d-flex lh-18px text-caption-regular fg-general-3">(Including children)</span>
							</div>

							<div class="col-auto add-btn">
								<button
									mat-stroked-button
									class="bg-basic-1 round-btn px-0"
									disableRipple
									(click)="decreaseAdultCount()"
									[disabled]="adultsCount <= 1"
									type="button"
								>
									<mat-icon class="fg-prim-2 fs-18px">remove</mat-icon>
								</button>

								<input
									type="number"
									formControlName="adults"
									class="text-small-14px-regular lh-18px fg-general-5 border-0 w-35px text-center"
									[(ngModel)]="adultsCount"
									[min]="1"
								/>

								<button mat-stroked-button class="bg-basic-1 round-btn px-0" disableRipple type="button" (click)="increaseAdultCount()">
									<mat-icon class="fg-prim-2">add</mat-icon>
								</button>
							</div>

							<mat-error *ngIf="tenantForm.get('adults').hasError('required')" class="text-small-12px-regular">This field is required!</mat-error>
							<mat-error *ngIf="tenantForm.get('adults').hasError('min')" class="text-small-12px-regular">No. of occupants should be at least 1!</mat-error>
						</div>
					</div>

					<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block" for="messageControl">{{ 'n3009' | translations }}</mat-label>

					<mat-form-field id="messageControl" appearance="outline">
						<textarea
							matInput
							class="w-100 fs-10px"
							formControlName="message"
							rows="10"
							class="message-area py-1"
							[placeholder]="'n3692' | translations"
						></textarea>

						<mat-error *ngIf="tenantForm.get('message').hasError" class="text-small-12px-regular">This field is required!</mat-error>
					</mat-form-field>

					<div *ngIf="!isRentCommercial">
						<!-- Pets -->
						<span class="d-inline-block lh-18px fg-general-4 mb-2">
							Bringing pets?
							<span class="fg-general-3 text-caption-regular">(Optional)</span>
						</span>

						<mat-radio-group formControlName="hasPets">
							<div class="row mx-0 mb-4 justify-content-between align-items-center gap-3">
								<div class="col checkbox-list px-0">
									<a
										(click)="updateRadioBtnPet(noPets, false)"
										class="d-flex justify-content-between align-items-center radio-btn-item p-3 fg-general-4"
										[class.checked-option]="noPets.checked"
									>
										<span class="text-body-regular" [class.fg-info-3]="noPets.checked">{{ 'n177' | translations }}</span>

										<mat-radio-button
											color="primary"
											[value]="false"
											class="text-body-regular fg-general-4 option-selection-radio-btn"
											#noPets
											(click)="updateRadioBtnPet(noPets, true)"
										></mat-radio-button>
									</a>
								</div>

								<div class="col checkbox-list px-0">
									<a
										(click)="updateRadioBtnPet(havePets, false)"
										class="d-flex justify-content-between align-items-center radio-btn-item p-3 fg-general-4"
										[class.checked-option]="havePets.checked"
									>
										<span class="text-body-regular" [class.fg-info-3]="havePets.checked">{{ 'n176' | translations }}</span>

										<mat-radio-button
											color="primary"
											[value]="true"
											class="text-body-regular fg-general-4 option-selection-radio-btn"
											#havePets
											(click)="updateRadioBtnPet(havePets, true)"
										></mat-radio-button>
									</a>
								</div>
							</div>
						</mat-radio-group>
					</div>

					<ng-container *ngIf="ad.section.reference !== sectionType.PROPERTIES_FOR_SALE">
						<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block" for="dateControl">
							Move in date
							<span class="fg-general-3 text-caption-regular">(Optional)</span>
						</mat-label>

						<mat-form-field id="dateControl" appearance="outline">
							<input
								matInput
								[matDatepicker]="picker"
								[min]="minDate"
								[max]="maxDate"
								formControlName="date"
								placeholder="Select a date"
								class="w-100"
								(click)="picker.open()"
							/>

							<mat-datepicker-toggle matIconSuffix [for]="picker">
								<mat-icon matDatepickerToggleIcon class="pe-3 fs-18px">calendar_today</mat-icon>
							</mat-datepicker-toggle>

							<mat-datepicker #picker></mat-datepicker>

							<mat-error *ngIf="tenantForm.get('date').hasError" class="text-small-12px-regular">
								{{ tenantForm.get('date').errors | formErrorMessage }}
							</mat-error>
						</mat-form-field>
					</ng-container>

					<div *ngIf="ad.section.reference === sectionType.PROPERTIES_FOR_SALE" class="mb-4">
						<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block" for="messageControl">
							How are you going to make your payment?
							<span class="fg-general-3 text-caption-regular">(Optional)</span>
						</mat-label>

						<mat-radio-group class="payment-mode" formControlName="paymentMode">
							<mat-radio-button
								class="option-selection-radio-btn"
								labelPosition="before"
								color="primary"
								[value]="paymentMode.CASH"
								[class.active]="tenantForm.get('paymentMode')?.value === paymentMode.CASH"
							>
								{{ 'n3643' | translations }}
							</mat-radio-button>
							<mat-radio-button
								class="option-selection-radio-btn"
								labelPosition="before"
								color="primary"
								[value]="paymentMode.MORTGAGE"
								[class.active]="tenantForm.get('paymentMode')?.value === paymentMode.MORTGAGE"
							>
								{{ 'n3644' | translations }}
							</mat-radio-button>
						</mat-radio-group>
					</div>
				</div>

				<ng-container [ngTemplateOutlet]="sendEnquiryButton"></ng-container>
			</ng-container>
		</form>
	} @else {
		<findqo-send-inquiry-skeleton-loader></findqo-send-inquiry-skeleton-loader>
		<ng-container [ngTemplateOutlet]="sendEnquiryButton"></ng-container>
	}
</div>

<!-- success message template -->
<ng-template #successMessageTemplate>
	<div class="text-center px-3">
		<img src="assets/images/advertisement-images/ad-success-inquiry.png" class="mt-48px" />

		<h2 class="heading-2 fg-general-5 my-3">{{ 'n3581' | translations }}</h2>

		<p class="fg-general-3 text-body-regular">
			{{ 'n3582' | translations }}
		</p>

		<p class="bg-general-1 email-container">
			<span class="text-body-regular fg-general-5 text-center">
				<mat-icon class="email-icon fg-general-3 me-2">mail_outline</mat-icon>
				<span>{{ fc['email'].value }}</span>
			</span>
		</p>

		<button mat-flat-button color="primary" disableRipple type="button" class="w-100 text-small-14px-regular lh-18px h-40px" (click)="closeForm()">
			{{ 'n3583' | translations }}
		</button>
	</div>
</ng-template>

<!-- tenantin section template -->
<ng-template #tenantinSection>
	<div class="py-3 px-2 tenantin-section mb-3" *ngIf="!isRentCommercial">
		@if (!toggleTenantinCreateAccount && hasTenantinAccount) {
			<p class="fg-general-5 text-body-regular">{{ 'n3711' | translations }}:</p>
			<p class="mb-2 fg-general-5 text-body-regular">{{ detectedTenantinEmail ? detectedTenantinEmail : user.email }}</p>

			<button mat-button class="mb-4" (click)="changeAccount()" type="button">
				<span class="fg-prim-2 text-caption-regular">{{ 'n3714' | translations }}</span>
			</button>

			<p class="mb-4 text-paragraph-regular fg-general-5">{{ 'n3712' | translations }}:</p>
			<mat-checkbox [formControl]="appendTenantinPdf" class="tenantin-checkbox" color="primary" (ngModelChange)="addTenantinUrl($event)"></mat-checkbox>
			<p class="fg-general-5 text-small-14px-regular profile-pdf">{{ 'n3713' | translations }}:</p>

			<button
				mat-button
				class="d-inline-block p-0 m-0 preview-pdf-button"
				[disabled]="this.loadingState[loadingStateEnum.GET_PDF]"
				(click)="handlePdfPreview()"
				type="button"
			>
				<a>
					<span class="fg-prim-2">{{ tenantInformation?.tenantResume }}</span>
					<mat-icon *ngIf="!this.loadingState[loadingStateEnum.GET_PDF]" class="fg-prim-2 fs-18px">open_in_new</mat-icon>
					<mat-spinner *ngIf="this.loadingState[loadingStateEnum.GET_PDF]" diameter="16" iconPositionEnd class="d-inline-block align-middle"></mat-spinner>
				</a>
			</button>
		} @else {
			<ng-container [ngTemplateOutlet]="tenantinCreateAccount"></ng-container>
		}

		<ng-template #tenantinCreateAccount>
			<div class="row justify-content-between w-100">
				<div class="col-auto" *ngIf="!isLimitReached.status">
					<img ngSrc="assets/images/tenantin-mini-logo.png" alt="Tenantin" width="85" height="21" priority class="fs-10px d-block mb-2" />
				</div>

				<div class="col-auto">
					@if (isLimitReached.status || !hasTenantinAccount) {
						<button
							mat-button
							class="tenant-button heading-4-medium fg-prim-2"
							type="button"
							(click)="createTenantProfile()"
							[disabled]="this.loadingState[loadingStateEnum.CREATE_TENANTIN_PROFILE]"
						>
							<a>
								<span class="fg-prim-2">{{ isLimitReached.status ? ('n3735' | translations) : ('n3715' | translations) }}</span>
								<mat-icon *ngIf="!this.loadingState[loadingStateEnum.CREATE_TENANTIN_PROFILE]" class="fg-prim-2 fs-18px">open_in_new</mat-icon>
								<mat-spinner
									*ngIf="this.loadingState[loadingStateEnum.CREATE_TENANTIN_PROFILE]"
									diameter="16"
									class="d-inline-block align-middle ms-1"
								></mat-spinner>
							</a>
						</button>
					}

					@if (hasTenantinAccount) {
						<button mat-button class="tenant-button text-body-regular fg-general-4" type="button" (click)="onToggleTenantinCreateAccount()">
							{{ 'n117' | translations }}
						</button>
					}
				</div>
			</div>

			<p class="fg-general-5 text-body-medium mt-4">{{ 'n3716' | translations }}</p>
			<p class="fg-general-5 text-paragraph-regular">{{ 'n3717' | translations }}</p>
			<p class="fg-general-5 text-body-medium mt-3">{{ 'n3718' | translations }}</p>
			<p class="fg-general-5 text-paragraph-regular">
				{{ 'n3719' | translations }}
			</p>

			<p class="fg-general-5 text-body-regular mt-4">{{ 'n3720' | translations }}</p>
			<form [formGroup]="connectEmailForm">
				<mat-form-field
					appearance="outline"
					[ngClass]="{
						'no-subscript': connectEmailForm.get('email')?.valid
					}"
					class="mt-2 tenantin-url"
				>
					<input formControlName="email" matInput class="w-100" [placeholder]="'n3722' | translations" />
					@if (connectEmailForm.get('email')?.hasError('accountNotDetected')) {
						<mat-error class="text-small-12px-regular fg-error-3">
							{{ 'n3734' | translations }}
						</mat-error>
					} @else if (connectEmailForm.get('email')?.hasError) {
						<mat-error class="text-small-12px-regular">
							{{ 'n3487' | translations }}
						</mat-error>
					}
				</mat-form-field>

				<ng-container *ngIf="isOtpSent">
					<mat-form-field
						appearance="outline"
						[ngClass]="{
							'no-subscript': connectEmailForm.get('pin')?.valid
						}"
						class="mt-2 tenantin-url"
						*ngIf="!detectedTenantinUrl"
					>
						<input formControlName="pin" matInput class="w-100" [placeholder]="'n567' | translations" />

						@if (connectEmailForm.get('pin')?.touched && connectEmailForm.get('pin')?.hasError) {
							<mat-error class="text-small-12px-regular">
								{{ 'n621' | translations }}
							</mat-error>
						}
					</mat-form-field>

					<button
						mat-button
						[disabled]="!showResendOtp || loadingState[loadingStateEnum.SEND_OTP]"
						(click)="sendOtp(loadingStateEnum.SEND_OTP)"
						class="d-block ms-auto"
						type="button"
					>
						<span class="text-body-regular fg-general-4">
							{{ !showResendOtp ? ('n557' | translations) : ('n271' | translations) }} {{ resendOtpCooldownTime }}
						</span>
					</button>
				</ng-container>

				<button
					mat-button
					color="primary"
					class="mt-2"
					type="submit"
					(click)="connectAccount(loadingStateEnum.CONNECT_ACCOUNT)"
					[disabled]="loadingState[loadingStateEnum.CONNECT_ACCOUNT]"
				>
					<span class="text-body-regular align-middle fg-prim-2">
						{{ 'n3721' | translations }}
					</span>
					<mat-spinner *ngIf="loadingState[loadingStateEnum.CONNECT_ACCOUNT]" diameter="14" class="d-inline-block align-middle"></mat-spinner>
				</button>
			</form>
		</ng-template>
	</div>
</ng-template>

<!-- enquiry limit reached template -->
<ng-template #enquiryLimitReached>
	<div class="px-3 py-5">
		<h4 class="fg-general-5 heading-4-medium">You\u2019ve reached your daily limit of sending {{ enquiryLimit }} enquiries!</h4>
		<h4 class="text-center fg-general-5 heading-4-medium mb-3">{{ 'n519' | translations | uppercase }}</h4>
		<ng-container [ngTemplateOutlet]="tenantinSection"></ng-container>
	</div>
</ng-template>

<!-- Send enquiry button template -->
<ng-template #sendEnquiryButton>
	<div class="position-fixed bottom-0 px-3 bg-basic-1 w-100 inquiry-btn text-center border-bottom-left-radius">
		<button
			id="send-enquiry-submit"
			mat-flat-button
			color="primary"
			disableRipple
			type="submit"
			class="w-100 text-small-14px-regular lh-18px h-40px"
			[disabled]="loadingState[loadingStateEnum.COMPONENT] || loadingState[loadingStateEnum.SUBMIT_FORM]"
		>
			{{ 'n2963' | translations }}
			<mat-spinner *ngIf="loadingState[loadingStateEnum.SUBMIT_FORM]" diameter="14" class="d-inline-block align-middle"></mat-spinner>
		</button>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/send-inquiry/send-inquiry-dialog.component.scss */\n.inquiry-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  max-width: 380px;\n  z-index: 2;\n}\n.close-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset !important;\n}\n.ad-image {\n  object-fit: contain;\n  height: 70px;\n  width: auto;\n}\n.inquiry-container {\n  overflow-y: auto;\n  padding-top: 60px;\n  padding-bottom: 56px;\n  border-radius: 8px;\n}\n.dealer-img {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.inquiry-btn {\n  max-width: 380px;\n  border-top: 1px solid var(--neutral-2);\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.round-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn .mat-icon {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.icon-size {\n  width: 16px;\n  height: 16px;\n}\n.w-35px {\n  width: 35px;\n}\n.h-40px {\n  height: 40px;\n}\n.message-area {\n  resize: none;\n}\n.add-btn {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn * {\n  vertical-align: middle;\n}\n.add-btn input {\n  height: 100%;\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checked-option {\n  border: 1px solid var(--info-3);\n  background-color: var(--info-1);\n}\n.email-container {\n  height: 40px;\n  border-radius: 4px;\n  margin-inline-end: 8px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  line-height: 40px;\n}\n.mt-48px {\n  margin-top: 48px;\n}\n.email-icon {\n  display: inline-block !important;\n  vertical-align: middle;\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.info-icon {\n  display: inline-block !important;\n  width: 12px;\n  height: 12px;\n  vertical-align: middle;\n}\n@media (max-width: 991.98px) {\n  .inquiry-header,\n  .inquiry-btn {\n    max-width: -webkit-fill-available;\n  }\n}\n.steps-bg {\n  background-color: rgba(255, 92, 184, 0.05);\n  border-radius: 4px;\n}\n.mt-2px {\n  margin-top: 2px;\n}\n.tenantin-section {\n  border: 1px solid var(--prim-2);\n  border-radius: 4px;\n  background-color: rgba(255, 90, 184, 0.08);\n}\n.profile-pdf {\n  margin-inline-start: 8px;\n  display: inline !important;\n  vertical-align: middle !important;\n}\na mat-icon {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.tenant-button {\n  height: fit-content !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  text-align: left;\n}\n.preview-pdf-button {\n  max-width: 240px !important;\n}\n.preview-pdf-button a span {\n  display: inline-block;\n  width: 215px !important;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.border-bottom-left-radius {\n  border-bottom-left-radius: 4px;\n}\n.border-top-left-radius {\n  border-top-left-radius: 4px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/send-inquiry-dialog.component.css.map */\n"] }]
  }], () => [{ type: IconService }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: FormBuilder }, { type: SnackService }, { type: AuthService }, { type: WindowService }, { type: Router }, { type: RouteService }, { type: MatDialog }, { type: MyProfileFacade }, { type: EnquiryService }, { type: StorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendInquiryDialogComponent, { className: "SendInquiryDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/send-inquiry/send-inquiry-dialog.component.ts", lineNumber: 57 });
})();

export {
  EnquiryService,
  IncludeRentalResumeDialogComponent,
  SendInquiryDialogComponent
};
//# sourceMappingURL=chunk-PLN2PSBG.js.map
