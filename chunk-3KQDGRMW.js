import {
  cancelReason
} from "./chunk-LUIRD62T.js";
import {
  MatSelect
} from "./chunk-VZJAPMN6.js";
import {
  ButtonComponent,
  ButtonType,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatIconButton,
  MatInput,
  MatLabel,
  MatOption,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  SubscriptionType,
  TranslationsPipe,
  Validators,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  DatePipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/change-card-dilaog/change-card-dilaog.component.ts
var ChangeCardDilaogComponent = class _ChangeCardDilaogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
  }
  cancel() {
    this.dialogRef.close();
  }
  //TODO: implement function after API is ready
  changeCard() {
  }
  static {
    this.\u0275fac = function ChangeCardDilaogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangeCardDilaogComponent)(\u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangeCardDilaogComponent, selectors: [["findqo-change-card-dilaog"]], standalone: false, decls: 24, vars: 19, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", 3, "click"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "px-3", "py-4"], [1, "text-paragraph-regular", "fg-general-5"], [1, "mt-4", "text-paragraph-regular", "fg-general-5"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "btnClass"]], template: function ChangeCardDilaogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275listener("click", function ChangeCardDilaogComponent_Template_button_click_7_listener() {
          return ctx.cancel();
        });
        \u0275\u0275elementStart(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 8);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "findqo-button", 11);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275listener("clicked", function ChangeCardDilaogComponent_Template_findqo_button_clicked_19_listener() {
          return ctx.cancel();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "findqo-button", 11);
        \u0275\u0275pipe(23, "translations");
        \u0275\u0275listener("clicked", function ChangeCardDilaogComponent_Template_findqo_button_clicked_22_listener() {
          return ctx.changeCard();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "n3451"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "n3450"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "n3449"));
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(20, 15, "n112"))("btnClass", "text-body-regular w-100");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(23, 17, "n3452"))("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/change-card-dilaog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangeCardDilaogComponent, [{
    type: Component,
    args: [{ selector: "findqo-change-card-dilaog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<!-- TODO: add translation later -->
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3451' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn" (click)="cancel()">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="px-3 py-4">
		<p class="text-paragraph-regular fg-general-5">{{ 'n3450' | translations }}</p>

		<p class="mt-4 text-paragraph-regular fg-general-5">{{ 'n3449' | translations }}</p>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button [btnType]="buttonType.STROKED" [label]="'n112' | translations" [btnClass]="'text-body-regular w-100'" (clicked)="cancel()"></findqo-button>
		</div>

		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n3452' | translations"
				[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
				(clicked)="changeCard()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/change-card-dilaog/change-card-dilaog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/change-card-dilaog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangeCardDilaogComponent, { className: "ChangeCardDilaogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription/change-card-dilaog/change-card-dilaog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/cancel-subscription-dialog/cancel-subscription-dialog.component.ts
function CancelSubscriptionDialogComponent_ng_template_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "mat-icon", 21);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const benefit_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(benefit_r2.name);
  }
}
function CancelSubscriptionDialogComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, " Are you sure you want to cancel? You will lose all the benefits of having a ");
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "Premium Unlimited Subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " with us as follows: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275template(6, CancelSubscriptionDialogComponent_ng_template_19_div_6_Template, 7, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.benefitsList);
  }
}
function CancelSubscriptionDialogComponent_ng_template_21_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36);
    \u0275\u0275text(1, "Max character 500");
    \u0275\u0275elementEnd();
  }
}
function CancelSubscriptionDialogComponent_ng_template_21_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 36);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CancelSubscriptionDialogComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "We\u2019re sorry to hear that you\u2019d like to cancel your subscription.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3, "Before you continue, we like to hear why you\u2019ve decided to cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 25)(5, "mat-label", 26);
    \u0275\u0275text(6, "Select a reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 27)(8, "mat-select", 28);
    \u0275\u0275listener("selectionChange", function CancelSubscriptionDialogComponent_ng_template_21_Template_mat_select_selectionChange_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleChange());
    });
    \u0275\u0275elementStart(9, "mat-option", 29);
    \u0275\u0275text(10, "I no longer need the subscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 30);
    \u0275\u0275text(12, "Subscription is too expensive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 31);
    \u0275\u0275text(14, "Service did not meet my expectations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 32);
    \u0275\u0275text(16, "I am experiencing technical issues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 33);
    \u0275\u0275text(18, "I am not using the service enough");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 34);
    \u0275\u0275text(20, "I am not satisfied with customer support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 35);
    \u0275\u0275text(22, "Other (Please specify)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-error", 36);
    \u0275\u0275text(24, "Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-label", 26);
    \u0275\u0275text(26, "Comment (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 27);
    \u0275\u0275element(28, "textarea", 37);
    \u0275\u0275template(29, CancelSubscriptionDialogComponent_ng_template_21_mat_error_29_Template, 2, 0, "mat-error", 38)(30, CancelSubscriptionDialogComponent_ng_template_21_mat_error_30_Template, 2, 0, "mat-error", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", "Select reason")("formControlName", "reason");
    \u0275\u0275advance(20);
    \u0275\u0275property("maxlength", 500)("placeholder", "Add your comment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.get("comment").hasError("maxLength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.get("comment").hasError("required"));
  }
}
function CancelSubscriptionDialogComponent_ng_template_23_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4028"));
  }
}
function CancelSubscriptionDialogComponent_ng_template_23_ng_container_14_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "+VAT");
    \u0275\u0275elementEnd();
  }
}
function CancelSubscriptionDialogComponent_ng_template_23_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 44);
    \u0275\u0275text(2, "Subscription Price:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 42);
    \u0275\u0275text(4);
    \u0275\u0275template(5, CancelSubscriptionDialogComponent_ng_template_23_ng_container_14_span_5_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" \u20AC", +(ctx_r2.data == null ? null : ctx_r2.data.price == null ? null : ctx_r2.data.price.value) / 100, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r2.data == null ? null : ctx_r2.data.price == null ? null : ctx_r2.data.price.value) / 100 === 135 || +(ctx_r2.data == null ? null : ctx_r2.data.price == null ? null : ctx_r2.data.price.value) / 100 === 995);
  }
}
function CancelSubscriptionDialogComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Are you sure you want to cancel?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 40);
    \u0275\u0275text(3, "Canceling your subscription will switch your business account to 1 Year Free Limited Plan.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 41);
    \u0275\u0275text(5, "Active subscription plan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7);
    \u0275\u0275template(8, CancelSubscriptionDialogComponent_ng_template_23_span_8_Template, 3, 3, "span", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 44);
    \u0275\u0275text(10, "Next renewal date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CancelSubscriptionDialogComponent_ng_template_23_ng_container_14_Template, 6, 2, "ng-container", 43);
    \u0275\u0275elementStart(15, "div", 45)(16, "div", 20)(17, "mat-icon", 46);
    \u0275\u0275text(18, "info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 47)(20, "p", 48);
    \u0275\u0275text(21, "Even after your subscription expires, your current ads will stay active until their expiry date.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data == null ? null : ctx_r2.data.planTier == null ? null : ctx_r2.data.planTier.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.data == null ? null : ctx_r2.data.subscriptionType) === ctx_r2.planType.TRIAL);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 4, ctx_r2.data == null ? null : ctx_r2.data.dates == null ? null : ctx_r2.data.dates.nextBilling, "MMMM dd, YYYY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.data == null ? null : ctx_r2.data.price);
  }
}
var CancelSubscriptionDialogComponent = class _CancelSubscriptionDialogComponent {
  constructor(dialogRef, fb, data) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.data = data;
    this.form = this.fb.group({
      reason: ["", [Validators.required]],
      comment: ["", [Validators.maxLength(500)]]
    });
    this.buttonType = ButtonType;
    this.planType = SubscriptionType;
    this.isFormActive = false;
    this.isFormCancelled = false;
    this.benefitsList = [
      { name: "Post unlimited Standard ads" },
      { name: "Featured listings" },
      { name: "3X more ad views" },
      { name: "Seller Leads + Bonus leads" },
      { name: "Dedicated ad manager assigned" },
      { name: "In-person valuation seller leads" },
      { name: "Free Marketing on FindQo Socials" },
      { name: "Embedded FindQo ad listings on your website" },
      { name: "Fast premium support" }
    ];
  }
  onCloseDialog() {
    this.dialogRef.close(false);
  }
  handleChange() {
    const value = this.form.get("reason").value;
    if (value === cancelReason.other) {
      this.form.get("comment")?.setValidators([Validators.required]);
    } else {
      this.form.get("comment")?.clearValidators();
      this.form.get("comment")?.setValidators([Validators.maxLength(500)]);
    }
    this.form.get("comment")?.updateValueAndValidity();
  }
  //TODO: need to add Api call here once Api is ready. For now caneclling the subscription to show dummy UI
  cancelSubscription() {
    if (this.isFormActive && this.form.invalid) {
      this.form.markAsDirty();
      this.form.markAllAsTouched();
      return;
    }
    if (this.isFormCancelled) {
      this.dialogRef.close({ value: this.form.value });
      return;
    }
    if (this.isFormActive) {
      this.isFormCancelled = true;
      this.isFormActive = false;
    } else {
      this.isFormActive = true;
    }
  }
  static {
    this.\u0275fac = function CancelSubscriptionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelSubscriptionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CancelSubscriptionDialogComponent, selectors: [["findqo-cancel-subscription-dialog"]], standalone: false, decls: 25, vars: 12, consts: [["concentInfo", ""], ["cancelForm", ""], ["subscriptionInfo", ""], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "text-body-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "px-3", "py-4"], [3, "ngTemplateOutlet"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], ["mat-button", "", 1, "text-body-regular", "w-100", "fg-prim-2", 3, "click"], ["color", "warn", 3, "clicked", "btnType", "label", "btnClass"], [1, "text-paragraph-regular", "fg-general-5"], [1, "fg-prim-2"], [1, "mt-3"], ["class", "row align-items-center gap-1 mx-2", 4, "ngFor", "ngForOf"], [1, "row", "align-items-center", "gap-1", "mx-2"], [1, "col-auto"], [1, "fg-success-3", "fs-16px"], [1, "fg-general-5", "text-body-regular"], [1, "text-body-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-1"], [3, "formGroup"], [1, "text-body-regular", "fg-general-5", "mb-2", "d-block", "mt-3"], ["appearance", "outline"], [3, "selectionChange", "placeholder", "formControlName"], ["value", "I no longer need the subscription"], ["value", "Subscription is too expensive"], ["value", "Service did not meet my expectations"], ["value", "I am experiencing technical issues"], ["value", "I am not using the service enough"], ["value", "I am not satisfied with customer support"], ["value", "Other (Please specify)"], [1, "text-caption-regular"], ["formControlName", "comment", "matInput", "", "rows", "6", 1, "no-expand", "py-1", "text-body-regular", 3, "maxlength", "placeholder"], ["class", "text-caption-regular", 4, "ngIf"], [1, "heading-4-medium", "fg-general-5"], [1, "text-paragraph-regular", "fg-general-5", "mt-1"], [1, "text-paragraph-regular", "fg-general-5", "mt-3"], [1, "text-body-medium", "fg-general-5", "mt-1"], [4, "ngIf"], [1, "text-paragraph-regular", "fg-general-5", "mt-2"], [1, "row", "bg-info-1", "info", "p-2", "mt-3", "rounded"], [1, "fg-info-3", "fs-18px", "material-symbols-outlined"], [1, "col"], [1, "text-body-regular", "fg-info-3"]], template: function CancelSubscriptionDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "p", 6);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "button", 7);
        \u0275\u0275element(8, "mat-icon", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275elementContainer(10, 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "button", 13);
        \u0275\u0275listener("click", function CancelSubscriptionDialogComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCloseDialog());
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12)(17, "findqo-button", 14);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275listener("clicked", function CancelSubscriptionDialogComponent_Template_findqo_button_clicked_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cancelSubscription());
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(19, CancelSubscriptionDialogComponent_ng_template_19_Template, 7, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(21, CancelSubscriptionDialogComponent_ng_template_21_Template, 31, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(23, CancelSubscriptionDialogComponent_ng_template_23_Template, 22, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const concentInfo_r5 = \u0275\u0275reference(20);
        const cancelForm_r6 = \u0275\u0275reference(22);
        const subscriptionInfo_r7 = \u0275\u0275reference(24);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "n3370"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngTemplateOutlet", ctx.isFormActive ? cancelForm_r6 : ctx.isFormCancelled ? subscriptionInfo_r7 : concentInfo_r5);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, "n117"));
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", ctx.isFormCancelled ? "Cancel Subscription" : \u0275\u0275pipeBind1(18, 10, "n91"))("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, MatButton, MatIconButton, MatIcon, ButtonComponent, MatDialogClose, MatInput, MatFormField, MatLabel, MatError, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, MatSelect, MatOption, DatePipe, TranslationsPipe], styles: ['\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-variation-settings: "FILL" 0;\n}\ntextarea.no-expand[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.row.info[_ngcontent-%COMP%] {\n  border: 1px solid var(--info-2) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/cancel-subscription-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelSubscriptionDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-cancel-subscription-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<p class="text-body-regular fg-general-5 m-0">{{ 'n3370' | translations }}</p>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="px-3 py-4">
		<ng-container [ngTemplateOutlet]="isFormActive ? cancelForm : isFormCancelled ? subscriptionInfo : concentInfo"></ng-container>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<button class="text-body-regular w-100 fg-prim-2" mat-button (click)="onCloseDialog()">{{ 'n117' | translations }}</button>
		</div>

		<div class="col px-0">
			<findqo-button
				color="warn"
				[btnType]="buttonType.FILLED"
				[label]="isFormCancelled ? 'Cancel Subscription' : ('n91' | translations)"
				[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
				(clicked)="cancelSubscription()"
			></findqo-button>
		</div>
	</div>
</div>

<ng-template #concentInfo>
	<p class="text-paragraph-regular fg-general-5">
		Are you sure you want to cancel? You will lose all the benefits of having a
		<span class="fg-prim-2">Premium Unlimited Subscription</span>
		with us as follows:
	</p>

	<!-- <p class="text-paragraph-regular fg-general-5 mt-3">
		See the file below to review all the activities we\u2019ve done to promote your ads on different social media platforms
	</p> -->

	<div class="mt-3">
		<div class="row align-items-center gap-1 mx-2" *ngFor="let benefit of benefitsList">
			<div class="col-auto">
				<mat-icon class="fg-success-3 fs-16px">check_circle</mat-icon>
			</div>
			<div class="col-auto">
				<span class="fg-general-5 text-body-regular">{{ benefit.name }}</span>
			</div>
		</div>
	</div>
</ng-template>

<ng-template #cancelForm>
	<p class="text-body-medium fg-general-5">We\u2019re sorry to hear that you\u2019d like to cancel your subscription.</p>
	<p class="text-body-regular fg-general-5 mt-1">Before you continue, we like to hear why you\u2019ve decided to cancel</p>

	<form [formGroup]="form">
		<mat-label class="text-body-regular fg-general-5 mb-2 d-block mt-3">Select a reason</mat-label>
		<mat-form-field appearance="outline">
			<mat-select [placeholder]="'Select reason'" [formControlName]="'reason'" (selectionChange)="handleChange()">
				<mat-option value="I no longer need the subscription">I no longer need the subscription</mat-option>
				<mat-option value="Subscription is too expensive">Subscription is too expensive</mat-option>
				<mat-option value="Service did not meet my expectations">Service did not meet my expectations</mat-option>
				<mat-option value="I am experiencing technical issues">I am experiencing technical issues</mat-option>
				<mat-option value="I am not using the service enough">I am not using the service enough</mat-option>
				<mat-option value="I am not satisfied with customer support">I am not satisfied with customer support</mat-option>
				<mat-option value="Other (Please specify)">Other (Please specify)</mat-option>
			</mat-select>
			<mat-error class="text-caption-regular">Required</mat-error>
		</mat-form-field>

		<mat-label class="text-body-regular fg-general-5 mb-2 d-block mt-3">Comment (optional)</mat-label>
		<mat-form-field appearance="outline">
			<textarea
				formControlName="comment"
				matInput
				[maxlength]="500"
				[placeholder]="'Add your comment'"
				class="no-expand py-1 text-body-regular"
				rows="6"
			></textarea>
			<mat-error *ngIf="this.form.get('comment').hasError('maxLength')" class="text-caption-regular">Max character 500</mat-error>
			<mat-error *ngIf="this.form.get('comment').hasError('required')" class="text-caption-regular">Required</mat-error>
		</mat-form-field>
	</form>
</ng-template>

<ng-template #subscriptionInfo>
	<p class="heading-4-medium fg-general-5">Are you sure you want to cancel?</p>
	<p class="text-paragraph-regular fg-general-5 mt-1">Canceling your subscription will switch your business account to 1 Year Free Limited Plan.</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">Active subscription plan:</p>
	<p class="text-body-medium fg-general-5 mt-1">
		{{ data?.planTier?.name }}
		<span *ngIf="data?.subscriptionType === planType.TRIAL">{{ 'n4028' | translations }}</span>
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-2">Next renewal date:</p>
	<p class="text-body-medium fg-general-5 mt-1">{{ data?.dates?.nextBilling | date: 'MMMM dd, YYYY' }}</p>

	<ng-container *ngIf="data?.price">
		<p class="text-paragraph-regular fg-general-5 mt-2">Subscription Price:</p>
		<p class="text-body-medium fg-general-5 mt-1">
			\u20AC{{ +data?.price?.value / 100 }}
			<span *ngIf="+data?.price?.value / 100 === 135 || +data?.price?.value / 100 === 995">+VAT</span>
		</p>
	</ng-container>

	<div class="row bg-info-1 info p-2 mt-3 rounded">
		<div class="col-auto">
			<mat-icon class="fg-info-3 fs-18px material-symbols-outlined">info</mat-icon>
		</div>

		<div class="col">
			<p class="text-body-regular fg-info-3">Even after your subscription expires, your current ads will stay active until their expiry date.</p>
		</div>
	</div>
</ng-template>
`, styles: ['/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/cancel-subscription-dialog/cancel-subscription-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n.error-icon {\n  font-size: 20px;\n  width: 20px;\n}\n.material-symbols-outlined {\n  font-variation-settings: "FILL" 0;\n}\ntextarea.no-expand {\n  resize: none !important;\n}\n.row.info {\n  border: 1px solid var(--info-2) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/cancel-subscription-dialog.component.css.map */\n'] }]
  }], () => [{ type: MatDialogRef }, { type: FormBuilder }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CancelSubscriptionDialogComponent, { className: "CancelSubscriptionDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/cancel-subscription-dialog/cancel-subscription-dialog.component.ts", lineNumber: 15 });
})();

export {
  ChangeCardDilaogComponent,
  CancelSubscriptionDialogComponent
};
//# sourceMappingURL=chunk-3KQDGRMW.js.map
