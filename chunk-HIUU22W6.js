import {
  DeleteBusinessDialogComponent
} from "./chunk-BW46TJNW.js";
import {
  CancelSubscriptionDialogComponent
} from "./chunk-3KQDGRMW.js";
import {
  EditProfileInfoDialogComponent,
  EditProfileInfoDialogModule
} from "./chunk-6Z3MPJNO.js";
import {
  DEFAULT_EMAIL_PLACEHOLDER,
  EDIT_DIALOG_STATIC_DATA
} from "./chunk-LUIRD62T.js";
import {
  SubscriptionOfferDialogComponent
} from "./chunk-QRKYK676.js";
import {
  ImageService
} from "./chunk-3VDTWW5F.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  AuthDialogV2Component,
  AuthFacade,
  AuthType,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DefaultValueAccessor,
  DeleteAccountOtpV2Module,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDivider,
  MatDividerModule,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatLabel,
  MaxLengthValidator,
  MinLengthValidator,
  MyProfileFacade,
  NgControlStatus,
  NgControlStatusGroup,
  ProfileInfoField,
  ReactiveFormsModule,
  Router,
  RouterLink,
  SharedModule,
  TranslationsPipe,
  UntypedFormBuilder,
  VALIDATOR,
  Validators,
  ViewportService,
  environment,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Input,
  NgModule,
  ViewChild,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵsetComponentScope,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/delete-account-dialog-v2/delete-account-dialog-v2.component.ts
function DeleteAccountDialogV2Component_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275element(6, "mat-icon", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 12);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "mat-divider");
    \u0275\u0275elementStart(13, "div", 13)(14, "findqo-button", 14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275listener("clicked", function DeleteAccountDialogV2Component_div_9_Template_findqo_button_clicked_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDismiss());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "n3216"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 10, "n95"), " ", ctx_r1.data.adCount, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "n3217"));
    \u0275\u0275advance(4);
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("label", \u0275\u0275pipeBind1(15, 14, "n97"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 continue-btn");
  }
}
function DeleteAccountDialogV2Component_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "mat-icon", 18);
    \u0275\u0275text(6, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-divider");
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20)(12, "findqo-button", 21);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275listener("clicked", function DeleteAccountDialogV2Component_ng_template_10_Template_findqo_button_clicked_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDismiss());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 20)(15, "findqo-button", 21);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275listener("clicked", function DeleteAccountDialogV2Component_ng_template_10_Template_findqo_button_clicked_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.continue());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 10, "n110"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 12, "n589"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("btnType", ctx_r1.buttonType.STROKED)("label", \u0275\u0275pipeBind1(13, 14, "n112"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 cancel-btn");
    \u0275\u0275advance(3);
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("label", \u0275\u0275pipeBind1(16, 16, "n91"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 continue-btn");
  }
}
var DeleteAccountDialogV2Component = class _DeleteAccountDialogV2Component {
  constructor(data, dialog, dialogRef, authFacade) {
    this.data = data;
    this.dialog = dialog;
    this.dialogRef = dialogRef;
    this.authFacade = authFacade;
    this.buttonType = ButtonType;
  }
  onDismiss() {
    this.dialogRef.close(false);
  }
  continue() {
    this.authFacade.requestOtpForDeleteAccount();
    this.dialogRef.close();
    this.dialog.open(AuthDialogV2Component, {
      data: { authType: AuthType.DELETE_OTP, email: this.data?.email },
      panelClass: "auth-dialog",
      disableClose: true
    });
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function DeleteAccountDialogV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteAccountDialogV2Component)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(AuthFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteAccountDialogV2Component, selectors: [["findqo-delete-account-dialog-v2"]], standalone: false, decls: 12, vars: 5, consts: [["showAds", ""], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [4, "ngIf", "ngIfElse"], [1, "p-3"], [1, "d-block", "fs-14px", "lh-22px", "fw-400", "fg-general-4"], [1, "my-3", "p-2", "h-40px", "fs-14px", "lh-20px", "alert-text", "fw-400", "alert", "alert-primary", "d-inline-flex", "align-items-center"], ["svgIcon", "info-outlined", 1, "me-2"], [1, "fs-14px", "lh-18px", "fw-400", "fg-general-4"], [1, "text-center", "p-3"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], [1, "px-3", "pt-3"], [1, "fs-14px", "lh-22px", "fw-400", "fg-general-4", "mb-4"], [1, "mb-3", "p-2", "alert", "alert-danger", "fs-14px", "lh-18px", "alert-text", "fw-400", "d-inline-flex", "align-items-center"], [1, "me-2", "d-inline-block"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [1, "delete-account", 3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function DeleteAccountDialogV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, DeleteAccountDialogV2Component_div_9_Template, 16, 16, "div", 7)(10, DeleteAccountDialogV2Component_ng_template_10_Template, 17, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const showAds_r4 = \u0275\u0275reference(11);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "n130"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.data.adCount > 0)("ngIfElse", showAds_r4);
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, MatDivider, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-color: var(--neutral-2);\n}\n.alert-danger[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  min-width: 20px;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-color: var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/delete-account-dialog-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteAccountDialogV2Component, [{
    type: Component,
    args: [{ selector: "findqo-delete-account-dialog-v2", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n130' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div *ngIf="data.adCount > 0; else showAds">
		<div class="p-3">
			<span class="d-block fs-14px lh-22px fw-400 fg-general-4">{{ 'n3216' | translations }}</span>

			<div class="my-3 p-2 h-40px fs-14px lh-20px alert-text fw-400 alert alert-primary d-inline-flex align-items-center">
				<mat-icon svgIcon="info-outlined" class="me-2"></mat-icon>
				{{ 'n95' | translations }} {{ data.adCount }}
			</div>
			<p class="fs-14px lh-18px fw-400 fg-general-4">{{ 'n3217' | translations }}</p>
		</div>

		<mat-divider></mat-divider>

		<div class="text-center p-3">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n97' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 continue-btn'"
				(clicked)="onDismiss()"
			></findqo-button>
		</div>
	</div>

	<ng-template #showAds>
		<div class="px-3 pt-3">
			<p class="fs-14px lh-22px fw-400 fg-general-4 mb-4">{{ 'n110' | translations }}</p>

			<div class="mb-3 p-2 alert alert-danger fs-14px lh-18px alert-text fw-400 d-inline-flex align-items-center">
				<mat-icon class="me-2 d-inline-block">warning</mat-icon>
				{{ 'n589' | translations }}
			</div>
		</div>
		<mat-divider></mat-divider>

		<div class="row mx-0 gap-3 p-3 dialog-actions">
			<div class="col px-0">
				<findqo-button
					[btnType]="buttonType.STROKED"
					[label]="'n112' | translations"
					[isStopPropagation]="true"
					[btnClass]="'text-body-regular w-100 cancel-btn'"
					(clicked)="onDismiss()"
					class="delete-account"
				></findqo-button>
			</div>
			<div class="col px-0">
				<findqo-button
					[btnType]="buttonType.FILLED"
					[label]="'n91' | translations"
					[isStopPropagation]="true"
					[btnClass]="'text-body-regular w-100 continue-btn'"
					(clicked)="continue()"
					class="delete-account"
				></findqo-button>
			</div>
		</div>
	</ng-template>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/delete-account-dialog-v2/delete-account-dialog-v2.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.mat-divider {\n  border-color: var(--neutral-2);\n}\n.alert-danger .mat-icon {\n  font-size: 20px !important;\n  min-width: 20px;\n}\n.h-40px {\n  height: 40px;\n}\n.mat-divider {\n  border-color: var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/delete-account-dialog-v2.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialog }, { type: MatDialogRef }, { type: AuthFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAccountDialogV2Component, { className: "DeleteAccountDialogV2Component", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/delete-account-dialog-v2/delete-account-dialog-v2.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/individual-account-v2/individual-account-v2.component.ts
var _c0 = ["phoneNumber"];
function IndividualAccountV2Component_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 25);
  }
}
function IndividualAccountV2Component_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 16);
    \u0275\u0275listener("click", function IndividualAccountV2Component_div_36_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editProfileInfo(ctx_r3.profileInfoField.PHONE));
    });
    \u0275\u0275elementStart(4, "mat-icon", 17);
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (tmp_2_0 = ctx_r3.userDetails == null ? null : ctx_r3.userDetails.phoneCode) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "+353", " ", ctx_r3.userDetails == null ? null : ctx_r3.userDetails.phone, "");
  }
}
function IndividualAccountV2Component_ng_container_37_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3635"), " ");
  }
}
function IndividualAccountV2Component_ng_container_37_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3988"), " ");
  }
}
function IndividualAccountV2Component_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-form-field", 26, 1)(3, "div", 27)(4, "div", 28)(5, "mat-select-trigger")(6, "div", 29)(7, "div", 30);
    \u0275\u0275element(8, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32)(10, "input", 33);
    \u0275\u0275listener("mousedown", function IndividualAccountV2Component_ng_container_37_Template_input_mousedown_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(11, "div", 34)(12, "input", 35, 2);
    \u0275\u0275listener("mousedown", function IndividualAccountV2Component_ng_container_37_Template_input_mousedown_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.mouseClick());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(14, IndividualAccountV2Component_ng_container_37_p_14_Template, 3, 3, "p", 36)(15, IndividualAccountV2Component_ng_container_37_p_15_Template, 3, 3, "p", 36);
    \u0275\u0275elementStart(16, "p", 37);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 38);
    \u0275\u0275listener("click", function IndividualAccountV2Component_ng_container_37_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.savePhoneNumber());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r3.form.get("phone")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) && !ctx_r3.form.pristine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r3.form.get("phone")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["pattern"]) || ((tmp_5_0 = ctx_r3.form.get("phone")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["minlength"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 5, "n3956"), ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.form.get("phone").invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 7, "n3989"), " ");
  }
}
function IndividualAccountV2Component_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "mat-divider", 40);
    \u0275\u0275elementStart(2, "p", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41)(6, "a", 42);
    \u0275\u0275text(7, "Create a business account");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " today and get listed as an agency. ");
    \u0275\u0275elementStart(9, "a", 42);
    \u0275\u0275text(10, "Compare plans");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-divider", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "n3985"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/" + ctx_r3.appRoutes.agentHub.landing);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/" + ctx_r3.appRoutes.pricing);
  }
}
var IndividualAccountV2Component = class _IndividualAccountV2Component {
  constructor(myProfileFacade, destroyService, fb, dialog, viewport, imageService) {
    this.myProfileFacade = myProfileFacade;
    this.destroyService = destroyService;
    this.fb = fb;
    this.dialog = dialog;
    this.viewport = viewport;
    this.imageService = imageService;
    this.selectedFile = null;
    this.defaultUserImg = environment.defaultAvatarImg;
    this.isPhotoUploading = false;
    this.defaultEmailPlaceholder = DEFAULT_EMAIL_PLACEHOLDER;
    this.buttonType = ButtonType;
    this.appRoutes = APP_ROUTE;
    this.profileInfoField = ProfileInfoField;
    this.form = this.fb.group({
      name: ["", [Validators.required, VALIDATOR.pattern.name]],
      phoneCode: ["+353", Validators.required],
      phone: [void 0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    this.user$ = myProfileFacade.getUser$();
  }
  mouseClick() {
    setTimeout(() => {
      this.phoneNumber?.focus();
    }, 200);
  }
  showUserDetails() {
    this.user$.pipe(takeUntil(this.destroyService)).subscribe((user) => {
      if (user) {
        this.userDetails = user;
        this.form.get("name").setValue(user?.name || "");
        this.form.get("phone").setValue(user?.phone || "");
        this.checkEmailPreference = user?.preference?.marketingEmailAlerts === "1";
      }
    });
  }
  updateAvatar() {
    this.myProfileFacade.getUserAvatar();
  }
  onFileSelect(event) {
    if (event.target.files.length === 0) {
      return;
    }
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }
  onUpload() {
    if (this.selectedFile) {
      this.isPhotoUploading = true;
      this.imageService.getCompressedImage(this.selectedFile, 400).then((file) => {
        this.selectedFile = file;
        this.myProfileFacade.uploadUserProfilePhoto(this.selectedFile).pipe(takeUntil(this.destroyService)).subscribe(() => {
          this.isPhotoUploading = false;
        });
      });
    }
  }
  editProfileInfo(target) {
    const DATA = __spreadProps(__spreadValues(__spreadValues({}, EDIT_DIALOG_STATIC_DATA[target]), this.userDetails), { target });
    this.dialog.open(EditProfileInfoDialogComponent, {
      disableClose: false,
      maxWidth: "375px",
      width: "95%",
      height: "auto",
      maxHeight: "100%",
      data: DATA
    }).afterClosed().subscribe((value) => {
      if (value && value !== DATA[target]) {
        this.myProfileFacade.updateProfile({
          [target]: value
        });
      }
    });
  }
  savePhoneNumber() {
    this.myProfileFacade.updateProfile({ phoneCode: this.form.get("phoneCode").value, phone: this.form.get("phone").value });
  }
  onSubmit() {
    if (this.form.valid) {
      this.myProfileFacade.updateProfile(this.form.value);
      this.form.markAsPristine();
    }
  }
  deleteAccount() {
    if (+this.userDetails.hasBusinessProfile) {
      this.openBusinessDeleteDialog();
      return;
    }
    this.dialog.open(DeleteAccountDialogV2Component, {
      width: "375px",
      height: "auto",
      data: { email: this.userDetails.email, adCount: this.userDetails.liveAds },
      panelClass: "delete-account-dialog",
      disableClose: true
    });
  }
  openBusinessDeleteDialog() {
    this.dialog.open(DeleteBusinessDialogComponent, {
      width: "95%",
      maxWidth: "500px",
      height: "auto"
    });
  }
  ngOnInit() {
    this.showUserDetails();
  }
  static {
    this.\u0275fac = function IndividualAccountV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IndividualAccountV2Component)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(ImageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndividualAccountV2Component, selectors: [["findqo-individual-account-v2"]], viewQuery: function IndividualAccountV2Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneNumber = _t.first);
      }
    }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 50, vars: 34, consts: [["fileInput", ""], ["phone", ""], ["phoneNumber", "matInput"], [1, "heading-3", "fg-general-5"], [1, "row", "gap-lg-3", "mx-0", "user-profile-picture", "mt-3", "align-items-center"], [1, "col-sm-auto", "px-0", "image-section", "py-3", "py-lg-0"], ["class", "spinner", "strokeWidth", "2", 4, "ngIf"], ["alt", "User account photo", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "col-sm", "align-self-center"], [1, "fg-general-5", "text-body-regular", "mb-2"], ["materialIconPrefix", "upload", 1, "fg-info-3", 3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], ["type", "file", "accept", "image/jpg,image/png,image/jpeg,image/heic,image/heif,image/webp", 1, "d-none", 3, "change"], [1, "mt-4", 3, "formGroup"], [1, "text-body-regular", "fg-general-5"], [1, "d-flex", "align-items-center", "gap-2", "mt-2", "mb-4"], [1, "text-body-medium", "fg-general-5"], ["mat-icon-button", "", 1, "bg-info-1", "edit-icon-button", 3, "click"], [1, "fg-info-3"], [1, "mb-4"], [1, "text-body-regular", "fg-general-5", "mb-2", "mt-4"], ["class", "d-flex align-items-center gap-2 mt-2 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "text-body-medium", "fg-general-5", "mt-2", "mb-4"], [1, "text-caption-regular", "fg-general-3", "me-1"], [1, "delete-button", "text-caption-regular", "fg-general-3", 3, "click"], ["strokeWidth", "2", 1, "spinner"], ["for", "phoneNumber", "appearance", "outline", 1, "no-subscript"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "row", "mx-0", "align-items-center", "w-80px"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0", "w-40px"], ["type", "tel", "placeholder", "+353", "aria-label", "Phone Code", "matInput", "", "minlength", "4", "maxlength", "4", "formControlName", "phoneCode", "readonly", "true", 1, "fs-14px", "fs-sm-16px", 3, "mousedown"], [1, "col", "ps-2", "pe-0"], ["placeholder", "800000000", "matInput", "", "id", "phoneNumber", "minlength", "7", "maxlength", "10", "formControlName", "phone", "type", "tel", 3, "mousedown"], ["class", "text-caption-regular fg-error-3", 4, "ngIf"], [1, "text-caption-regular", "fg-general-3", "mt-1"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", "mt-2", 3, "click", "disabled"], [1, "text-caption-regular", "fg-error-3"], [1, "my-4"], [1, "text-body-regular", "fg-general-5", "mt-1"], [1, "fg-prim-2", 3, "routerLink"]], template: function IndividualAccountV2Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h3", 3);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
        \u0275\u0275template(5, IndividualAccountV2Component_mat_spinner_5_Template, 1, 0, "mat-spinner", 6);
        \u0275\u0275element(6, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 8)(8, "p", 9);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "findqo-button", 10);
        \u0275\u0275listener("clicked", function IndividualAccountV2Component_Template_findqo_button_clicked_11_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r2 = \u0275\u0275reference(13);
          return \u0275\u0275resetView(fileInput_r2.click());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 11, 0);
        \u0275\u0275listener("change", function IndividualAccountV2Component_Template_input_change_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileSelect($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "form", 12)(15, "mat-label", 13);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 14)(19, "p", 15);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 16);
        \u0275\u0275listener("click", function IndividualAccountV2Component_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editProfileInfo(ctx.profileInfoField.NAME));
        });
        \u0275\u0275elementStart(22, "mat-icon", 17);
        \u0275\u0275text(23, "edit");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "mat-label", 13);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 14)(28, "p", 15);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 16);
        \u0275\u0275listener("click", function IndividualAccountV2Component_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editProfileInfo(ctx.profileInfoField.EMAIL));
        });
        \u0275\u0275elementStart(31, "mat-icon", 17);
        \u0275\u0275text(32, "edit");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 18)(34, "p", 19);
        \u0275\u0275text(35, "Phone number");
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, IndividualAccountV2Component_div_36_Template, 6, 2, "div", 20)(37, IndividualAccountV2Component_ng_container_37_Template, 22, 9, "ng-container", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-label", 13);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 22);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275template(44, IndividualAccountV2Component_ng_container_44_Template, 12, 5, "ng-container", 21);
        \u0275\u0275elementStart(45, "span", 23);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "a", 24);
        \u0275\u0275listener("click", function IndividualAccountV2Component_Template_a_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteAccount());
        });
        \u0275\u0275text(49, "delete your account");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 19, "n12"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isPhotoUploading);
        \u0275\u0275advance();
        \u0275\u0275property("src", (ctx.userDetails == null ? null : ctx.userDetails.picture) || ctx.defaultUserImg, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 21, "n3095"));
        \u0275\u0275advance(2);
        \u0275\u0275property("btnType", ctx.buttonType.BASIC)("label", "Upload photo")("isStopPropagation", true)("btnClass", "text-body-regular fg-info-3 px-0");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 23, "n3098"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.form.get("name").value, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 25, "n82"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.userDetails == null ? null : ctx.userDetails.email, " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.userDetails == null ? null : ctx.userDetails.phone);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.userDetails == null ? null : ctx.userDetails.phone));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 27, "n3094"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 29, +(ctx.userDetails == null ? null : ctx.userDetails.createdAt) * 1e3, "MMMM dd, yyyy"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !(ctx.userDetails == null ? null : ctx.userDetails.businessProfile == null ? null : ctx.userDetails.businessProfile.id));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 32, "n3990"));
      }
    }, dependencies: [NgIf, MatButton, MatIconButton, MatIcon, RouterLink, ButtonComponent, MatProgressSpinner, MatInput, MatFormField, MatLabel, MatDivider, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, MatSelectTrigger, DatePipe, TranslationsPipe], styles: ["\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n  object-fit: cover;\n  margin: 0 auto;\n  clip-path: circle(50%);\n}\n.enable-save-btn[_ngcontent-%COMP%] {\n  background-color: var(--prim-2) !important;\n  color: var(--basic-1) !important;\n}\n.disable-save-btn[_ngcontent-%COMP%] {\n  background-color: var(--neutral-2) !important;\n  color: var(--neutral-3) !important;\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-color: var(--neutral-2);\n}\n.image-section[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.mat-mdc-progress-spinner[_ngcontent-%COMP%] {\n  width: 125px !important;\n  height: 125px !important;\n}\n@media (max-width: 575.98px) {\n  .user-profile-picture[_ngcontent-%COMP%] {\n    border: 1px solid var(--general-2) !important;\n    border-radius: 4px;\n    text-align: center;\n    margin-top: 24px;\n  }\n  .submit-btn[_ngcontent-%COMP%] {\n    position: fixed !important;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n  }\n  .spinner[_ngcontent-%COMP%] {\n    left: 31%;\n  }\n}\n.w-80px[_ngcontent-%COMP%] {\n  width: 80px !important;\n}\n.edit-icon-button[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 4px;\n  padding: 4px;\n}\n.edit-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: var(--prim-2) !important;\n}\n.delete-button[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  cursor: pointer;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/individual-account-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndividualAccountV2Component, [{
    type: Component,
    args: [{ selector: "findqo-individual-account-v2", providers: [DestroyService], standalone: false, template: `<h3 class="heading-3 fg-general-5">{{ 'n12' | translations }}</h3>

<div class="row gap-lg-3 mx-0 user-profile-picture mt-3 align-items-center">
	<div class="col-sm-auto px-0 image-section py-3 py-lg-0">
		<mat-spinner class="spinner" strokeWidth="2" *ngIf="isPhotoUploading"></mat-spinner>
		<img [src]="userDetails?.picture || defaultUserImg" alt="User account photo" class="img-fluid rounded-circle" />
	</div>

	<div class="col-sm align-self-center">
		<p class="fg-general-5 text-body-regular mb-2">{{ 'n3095' | translations }}</p>

		<findqo-button
			class="fg-info-3"
			[btnType]="buttonType.BASIC"
			[label]="'Upload photo'"
			materialIconPrefix="upload"
			[isStopPropagation]="true"
			[btnClass]="'text-body-regular fg-info-3 px-0'"
			(clicked)="fileInput.click()"
		></findqo-button>

		<input type="file" #fileInput (change)="onFileSelect($event)" accept="image/jpg,image/png,image/jpeg,image/heic,image/heif,image/webp" class="d-none" />
	</div>
</div>

<form [formGroup]="form" class="mt-4">
	<mat-label class="text-body-regular fg-general-5">{{ 'n3098' | translations }}</mat-label>

	<div class="d-flex align-items-center gap-2 mt-2 mb-4">
		<p class="text-body-medium fg-general-5">
			{{ form.get('name').value }}
		</p>

		<button mat-icon-button class="bg-info-1 edit-icon-button" (click)="editProfileInfo(profileInfoField.NAME)">
			<mat-icon class="fg-info-3">edit</mat-icon>
		</button>
	</div>

	<mat-label class="text-body-regular fg-general-5">{{ 'n82' | translations }}</mat-label>

	<div class="d-flex align-items-center gap-2 mt-2 mb-4">
		<p class="text-body-medium fg-general-5">
			{{ userDetails?.email }}
		</p>

		<button mat-icon-button class="bg-info-1 edit-icon-button" (click)="editProfileInfo(profileInfoField.EMAIL)">
			<mat-icon class="fg-info-3">edit</mat-icon>
		</button>
	</div>

	<div class="mb-4">
		<p class="text-body-regular fg-general-5 mb-2 mt-4">Phone number</p>

		<div class="d-flex align-items-center gap-2 mt-2 mb-4" *ngIf="userDetails?.phone">
			<p class="text-body-medium fg-general-5">{{ userDetails?.phoneCode ?? '+353' }} {{ userDetails?.phone }}</p>

			<button mat-icon-button class="bg-info-1 edit-icon-button" (click)="editProfileInfo(profileInfoField.PHONE)">
				<mat-icon class="fg-info-3">edit</mat-icon>
			</button>
		</div>

		<ng-container *ngIf="!userDetails?.phone">
			<mat-form-field for="phoneNumber" class="no-subscript" #phone appearance="outline">
				<div class="row mx-0 align-items-center">
					<div class="col-auto px-0">
						<mat-select-trigger>
							<div class="row mx-0 align-items-center w-80px">
								<div class="col-auto px-0 me-2">
									<img width="24px" height="18px" class="d-block rounded" alt="Country code flag" src="https://flagcdn.com/ie.svg" />
								</div>

								<div class="col px-0 w-40px">
									<input
										type="tel"
										class="fs-14px fs-sm-16px"
										placeholder="+353"
										aria-label="Phone Code"
										matInput
										minlength="4"
										maxlength="4"
										formControlName="phoneCode"
										readonly="true"
										(mousedown)="$event.preventDefault()"
									/>
								</div>
							</div>
						</mat-select-trigger>
					</div>

					<div class="col ps-2 pe-0">
						<input
							placeholder="800000000"
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
			</mat-form-field>

			<p *ngIf="form.get('phone')?.errors?.['required'] && !form.pristine" class="text-caption-regular fg-error-3">
				{{ 'n3635' | translations }}
			</p>

			<p *ngIf="form.get('phone')?.errors?.['pattern'] || form.get('phone')?.errors?.['minlength']" class="text-caption-regular fg-error-3">
				{{ 'n3988' | translations }}
			</p>
			<p class="text-caption-regular fg-general-3 mt-1">{{ 'n3956' | translations }}.</p>
			<button mat-flat-button color="primary" class="text-body-regular mt-2" [disabled]="form.get('phone').invalid" (click)="savePhoneNumber()">
				{{ 'n3989' | translations }}
			</button>
		</ng-container>
	</div>

	<mat-label class="text-body-regular fg-general-5">{{ 'n3094' | translations }}</mat-label>

	<p class="text-body-medium fg-general-5 mt-2 mb-4">{{ +userDetails?.createdAt * 1000 | date: 'MMMM dd, yyyy' }}</p>

	<ng-container *ngIf="!userDetails?.businessProfile?.id">
		<mat-divider class="my-4"></mat-divider>
		<p class="text-body-medium fg-general-5">{{ 'n3985' | translations }}</p>
		<p class="text-body-regular fg-general-5 mt-1">
			<a [routerLink]="'/' + appRoutes.agentHub.landing" class="fg-prim-2">Create a business account</a>
			today and get listed as an agency.

			<a [routerLink]="'/' + appRoutes.pricing" class="fg-prim-2">Compare plans</a>
		</p>
		<mat-divider class="my-4"></mat-divider>
	</ng-container>

	<span class="text-caption-regular fg-general-3 me-1">{{ 'n3990' | translations }}</span>
	<a class="delete-button text-caption-regular fg-general-3" (click)="deleteAccount()">delete your account</a>
</form>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/individual-account-v2/individual-account-v2.component.scss */\n.img-fluid {\n  width: 125px;\n  height: 125px;\n  object-fit: cover;\n  margin: 0 auto;\n  clip-path: circle(50%);\n}\n.enable-save-btn {\n  background-color: var(--prim-2) !important;\n  color: var(--basic-1) !important;\n}\n.disable-save-btn {\n  background-color: var(--neutral-2) !important;\n  color: var(--neutral-3) !important;\n}\n.mat-divider {\n  border-color: var(--neutral-2);\n}\n.image-section {\n  position: relative;\n  display: inline-block;\n}\n.spinner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.mat-mdc-progress-spinner {\n  width: 125px !important;\n  height: 125px !important;\n}\n@media (max-width: 575.98px) {\n  .user-profile-picture {\n    border: 1px solid var(--general-2) !important;\n    border-radius: 4px;\n    text-align: center;\n    margin-top: 24px;\n  }\n  .submit-btn {\n    position: fixed !important;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n  }\n  .spinner {\n    left: 31%;\n  }\n}\n.w-80px {\n  width: 80px !important;\n}\n.edit-icon-button {\n  width: 26px;\n  height: 26px;\n  border-radius: 4px;\n  padding: 4px;\n}\n.edit-icon-button mat-icon {\n  font-size: 18px !important;\n}\na:hover {\n  text-decoration: underline;\n  color: var(--prim-2) !important;\n}\n.delete-button {\n  text-decoration: underline;\n  cursor: pointer;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/individual-account-v2.component.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }, { type: DestroyService }, { type: UntypedFormBuilder }, { type: MatDialog }, { type: ViewportService }, { type: ImageService }], { phoneNumber: [{
    type: ViewChild,
    args: ["phoneNumber"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndividualAccountV2Component, { className: "IndividualAccountV2Component", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/individual-account-v2/individual-account-v2.component.ts", lineNumber: 27 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/delete-account-dialog-v2/delete-account-dialog-v2.module.ts
var DeleteAccountDialogV2Module = class _DeleteAccountDialogV2Module {
  static {
    this.\u0275fac = function DeleteAccountDialogV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteAccountDialogV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DeleteAccountDialogV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, ButtonModule, DeleteAccountOtpV2Module, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteAccountDialogV2Module, [{
    type: NgModule,
    args: [{
      declarations: [DeleteAccountDialogV2Component],
      imports: [SharedModule, MatDividerModule, ButtonModule, DeleteAccountOtpV2Module, MatDialogModule],
      exports: [DeleteAccountDialogV2Component]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/individual-account-v2/individual-account-v2.module.ts
var IndividualAccountV2Module = class _IndividualAccountV2Module {
  static {
    this.\u0275fac = function IndividualAccountV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IndividualAccountV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _IndividualAccountV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      ButtonModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatDividerModule,
      DeleteAccountDialogV2Module,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      EditProfileInfoDialogModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndividualAccountV2Module, [{
    type: NgModule,
    args: [{
      declarations: [IndividualAccountV2Component],
      imports: [
        SharedModule,
        ButtonModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatDividerModule,
        DeleteAccountDialogV2Module,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        EditProfileInfoDialogModule
      ],
      exports: [IndividualAccountV2Component]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer/subscription-offer.component.ts
var _c02 = (a0) => ({ "bg-general-1": a0 });
function SubscriptionOfferComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "mat-icon", 11);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subscription_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, subscription_r1));
  }
}
function SubscriptionOfferComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 13);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15)(3, "button", 16);
    \u0275\u0275listener("click", function SubscriptionOfferComponent_ng_container_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewOptions());
    });
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "mat-icon");
    \u0275\u0275text(9, "north_east");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "n3394"));
  }
}
function SubscriptionOfferComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 19);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 20)(3, "button", 21);
    \u0275\u0275listener("click", function SubscriptionOfferComponent_ng_container_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewOptions());
    });
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "mat-icon", 22);
    \u0275\u0275text(9, "north_east");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 23)(11, "div", 15)(12, "findqo-button", 24);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275listener("clicked", function SubscriptionOfferComponent_ng_container_12_Template_findqo_button_clicked_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSubscriptionDialog());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "n3394"));
    \u0275\u0275advance(7);
    \u0275\u0275property("btnType", ctx_r2.buttonType.BASIC)("label", \u0275\u0275pipeBind1(13, 6, "n3393"))("btnClass", "text-body-regular fg-general-4");
  }
}
var SubscriptionOfferComponent = class _SubscriptionOfferComponent {
  constructor(dialogRef, router) {
    this.dialogRef = dialogRef;
    this.router = router;
    this.buttonType = ButtonType;
    this.subscriptionList = ["n3390", "n3391", "n3392"];
  }
  closeSubscriptionDialog() {
    this.dialogRef.close();
  }
  viewOptions() {
    this.router.navigate([APP_ROUTE.pricing]);
    this.closeSubscriptionDialog();
  }
  static {
    this.\u0275fac = function SubscriptionOfferComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionOfferComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionOfferComponent, selectors: [["findqo-subscription-offer"]], inputs: { isSubscriptionDialog: "isSubscriptionDialog" }, standalone: false, decls: 13, vars: 13, consts: [[1, "container", "p-0"], [1, "rounded", "center-content", "p-3", 3, "ngClass"], ["alt", "Agent Subscription", "role", "presentation", "fetchpriority", "high", "fill", "", 1, "rounded", "position-relative", "image-size", 3, "ngSrc"], [1, "content-width"], [1, "d-block", "text-center", "heading-3-medium", "fg-general-5"], [1, "d-block", "text-center", "text-body-regular", "fg-general-3", "mt-2", "mb-4"], ["class", "align-items-center d-flex justify-content-start mb-2", 4, "ngFor", "ngForOf"], ["subscriptionTab", "", 4, "ngIf"], ["subscriptionDialog", "", 4, "ngIf"], [1, "align-items-center", "d-flex", "justify-content-start", "mb-2"], [1, "check-background", "rounded-pill", "d-flex", "align-items-center", "justify-content-center", "me-2"], [1, "check-icon", "fg-prim-2"], [1, "text-body-regular", "fg-general-5", "text-start"], ["subscriptionTab", ""], [1, "row", "mx-0", "mb-2"], [1, "col", "px-0", "text-center"], [1, "bg-prim-2", "rounded", "border-0", "options-btn-2", "mt-3", 3, "click"], [1, "text-body-regular", "fg-basic-1", "me-2"], [1, "d-inline-block", "align-middle", "north-east-icon", "fg-basic-1"], ["subscriptionDialog", ""], [1, "col-12", "px-0", "text-center"], [1, "bg-prim-2", "rounded", "border-0", "options-btn", "mt-3", 3, "click"], [1, "material-icons-round"], [1, "row", "mx-0"], [3, "clicked", "btnType", "label", "btnClass"]], template: function SubscriptionOfferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, SubscriptionOfferComponent_div_10_Template, 7, 3, "div", 6)(11, SubscriptionOfferComponent_ng_container_11_Template, 10, 3, "ng-container", 7)(12, SubscriptionOfferComponent_ng_container_12_Template, 14, 8, "ng-container", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c02, !ctx.isSubscriptionDialog));
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", "assets/images/profile/agent-subscription.webp");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "n3319"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "n3389"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.subscriptionList);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSubscriptionDialog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSubscriptionDialog);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatIcon, NgOptimizedImage, ButtonComponent, TranslationsPipe], styles: ["\n\n.check-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n}\n.check-background[_ngcontent-%COMP%] {\n  background: rgba(255, 90, 184, 0.15);\n  width: 20px;\n  height: 20px;\n}\n.north-east-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n}\n.options-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 355px;\n  height: 40px;\n}\n.options-btn-2[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 200px;\n  height: 40px;\n}\n.center-content[_ngcontent-%COMP%] {\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.content-width[_ngcontent-%COMP%] {\n  max-width: 355px;\n}\n.image-size[_ngcontent-%COMP%] {\n  max-width: 365px;\n  max-height: 272px;\n}\n@media (max-width: 575.98px) {\n  .image-size[_ngcontent-%COMP%] {\n    max-width: 275px;\n    max-height: 205px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-offer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionOfferComponent, [{
    type: Component,
    args: [{ selector: "findqo-subscription-offer", standalone: false, template: `<div class="container p-0">
	<div class="rounded center-content p-3" [ngClass]="{ 'bg-general-1': !isSubscriptionDialog }">
		<img
			[ngSrc]="'assets/images/profile/agent-subscription.webp'"
			class="rounded position-relative image-size"
			alt="Agent Subscription"
			role="presentation"
			fetchpriority="high"
			fill
		/>

		<div class="content-width">
			<span class="d-block text-center heading-3-medium fg-general-5">{{ 'n3319' | translations }}</span>
			<span class="d-block text-center text-body-regular fg-general-3 mt-2 mb-4">{{ 'n3389' | translations }}</span>

			<div class="align-items-center d-flex justify-content-start mb-2" *ngFor="let subscription of subscriptionList">
				<div class="check-background rounded-pill d-flex align-items-center justify-content-center me-2">
					<mat-icon class="check-icon fg-prim-2">check</mat-icon>
				</div>

				<span class="text-body-regular fg-general-5 text-start">{{ subscription | translations }}</span>
			</div>

			<ng-container *ngIf="!isSubscriptionDialog" subscriptionTab>
				<div class="row mx-0 mb-2">
					<div class="col px-0 text-center">
						<button class="bg-prim-2 rounded border-0 options-btn-2 mt-3" (click)="viewOptions()">
							<span class="text-body-regular fg-basic-1 me-2">{{ 'n3394' | translations }}</span>
							<div class="d-inline-block align-middle north-east-icon fg-basic-1">
								<mat-icon>north_east</mat-icon>
							</div>
						</button>
					</div>
				</div>
			</ng-container>

			<ng-container *ngIf="isSubscriptionDialog" subscriptionDialog>
				<div class="row mx-0 mb-2">
					<div class="col-12 px-0 text-center">
						<button class="bg-prim-2 rounded border-0 options-btn mt-3" (click)="viewOptions()">
							<span class="text-body-regular fg-basic-1 me-2">{{ 'n3394' | translations }}</span>

							<div class="d-inline-block align-middle north-east-icon fg-basic-1">
								<mat-icon class="material-icons-round">north_east</mat-icon>
							</div>
						</button>
					</div>
				</div>

				<div class="row mx-0">
					<div class="col px-0 text-center">
						<findqo-button
							[btnType]="buttonType.BASIC"
							[label]="'n3393' | translations"
							[btnClass]="'text-body-regular fg-general-4'"
							(clicked)="closeSubscriptionDialog()"
						></findqo-button>
					</div>
				</div>
			</ng-container>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer/subscription-offer.component.scss */\n.check-icon {\n  font-size: 15px;\n  width: 15px;\n}\n.check-background {\n  background: rgba(255, 90, 184, 0.15);\n  width: 20px;\n  height: 20px;\n}\n.north-east-icon {\n  font-size: 18px;\n  width: 18px;\n}\n.options-btn {\n  width: 100%;\n  max-width: 355px;\n  height: 40px;\n}\n.options-btn-2 {\n  width: 100%;\n  max-width: 200px;\n  height: 40px;\n}\n.center-content {\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.content-width {\n  max-width: 355px;\n}\n.image-size {\n  max-width: 365px;\n  max-height: 272px;\n}\n@media (max-width: 575.98px) {\n  .image-size {\n    max-width: 275px;\n    max-height: 205px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-offer.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: Router }], { isSubscriptionDialog: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionOfferComponent, { className: "SubscriptionOfferComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer/subscription-offer.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer/subscription-offer.module.ts
var SubscriptionOfferModule = class _SubscriptionOfferModule {
  static {
    this.\u0275fac = function SubscriptionOfferModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionOfferModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SubscriptionOfferModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{ provide: MatDialogRef, useValue: {} }], imports: [SharedModule, ButtonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionOfferModule, [{
    type: NgModule,
    args: [{
      declarations: [SubscriptionOfferComponent],
      imports: [SharedModule, ButtonModule],
      exports: [SubscriptionOfferComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/cancel-subscription-dialog/cancel-subscription-dialog.module.ts
var CancelSubscriptionDialogModule = class _CancelSubscriptionDialogModule {
  static {
    this.\u0275fac = function CancelSubscriptionDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelSubscriptionDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CancelSubscriptionDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelSubscriptionDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [CancelSubscriptionDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, MatSelectModule],
      exports: [CancelSubscriptionDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer-dialog/subscription-offer-dialog.module.ts
var SubscriptionOfferDialogModule = class _SubscriptionOfferDialogModule {
  static {
    this.\u0275fac = function SubscriptionOfferDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionOfferDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SubscriptionOfferDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, SubscriptionOfferModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionOfferDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [SubscriptionOfferDialogComponent],
      imports: [SharedModule, SubscriptionOfferModule, MatDialogModule],
      exports: [SubscriptionOfferDialogComponent]
    }]
  }], null, null);
})();
\u0275\u0275setComponentScope(SubscriptionOfferDialogComponent, [MatIconButton, MatIcon, SubscriptionOfferComponent, MatDialogClose], []);

export {
  IndividualAccountV2Component,
  IndividualAccountV2Module,
  SubscriptionOfferModule,
  CancelSubscriptionDialogModule,
  SubscriptionOfferDialogModule
};
//# sourceMappingURL=chunk-HIUU22W6.js.map
