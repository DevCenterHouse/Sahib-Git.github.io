import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  AdBerColorPipe,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  CommonFacade,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatHint,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
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
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Input,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/ad-ber/ad-ber.component.ts
var AdBerComponent = class _AdBerComponent {
  static {
    this.\u0275fac = function AdBerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdBerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdBerComponent, selectors: [["findqo-ad-ber"]], inputs: { ber: "ber" }, standalone: false, decls: 8, vars: 7, consts: [[1, "container", "px-0"], [1, "row", "gap-1", "mx-0"], [1, "col-auto", "px-0", "label-shape", "ps-1", "fs-12px", "bg-basic-2", "fg-basic-1", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "col-auto", "arrow-pointer", "fs-12px", "fg-basic-1", "d-inline-flex", "align-items-center", "justify-content-center", 3, "ngClass"]], template: function AdBerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275pipe(6, "adBerColor");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "n3430"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pipeBind1(6, 5, ctx.ber));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.ber, " ");
      }
    }, dependencies: [NgClass, TranslationsPipe, AdBerColorPipe], styles: ['\n\n.label-shape[_ngcontent-%COMP%] {\n  position: relative;\n  width: 30px;\n  height: 26px;\n}\n.label-shape[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: -10px;\n  width: 0;\n  height: 0;\n  border-top: 13px solid transparent;\n  border-left: 10px solid var(--basic-2);\n  border-bottom: 13px solid transparent;\n  z-index: 1;\n}\n.arrow-pointer[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 26px;\n  position: relative;\n  padding-left: 12px;\n}\n.arrow-pointer[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-left: 10px solid var(--basic-1);\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n}\n.arrow-pointer[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  right: -13px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n}\n.ber-a[_ngcontent-%COMP%] {\n  background-color: #56ae67;\n}\n.ber-a[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #56ae67;\n}\n.ber-b[_ngcontent-%COMP%] {\n  background-color: #6eb865;\n}\n.ber-b[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #6eb865;\n}\n.ber-c[_ngcontent-%COMP%] {\n  background-color: #b8d261;\n}\n.ber-c[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #b8d261;\n}\n.ber-d[_ngcontent-%COMP%] {\n  background-color: #f1ec60;\n}\n.ber-d[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #f1ec60;\n}\n.ber-e[_ngcontent-%COMP%] {\n  background-color: #f2ba4e;\n}\n.ber-e[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #f2ba4e;\n}\n.ber-f[_ngcontent-%COMP%] {\n  background-color: #e37d44;\n}\n.ber-f[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #e37d44;\n}\n.ber-g[_ngcontent-%COMP%] {\n  background-color: #db433e;\n}\n.ber-g[_ngcontent-%COMP%]:before {\n  border-left: 13px solid #db433e;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-ber.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdBerComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-ber", standalone: false, template: `<div class="container px-0">
	<div class="row gap-1 mx-0">
		<div class="col-auto px-0 label-shape ps-1 fs-12px bg-basic-2 fg-basic-1 d-inline-flex align-items-center justify-content-center">
			{{ 'n3430' | translations }}
		</div>

		<div class="col-auto arrow-pointer fs-12px fg-basic-1 d-inline-flex align-items-center justify-content-center" [ngClass]="ber | adBerColor">
			{{ ber }}
		</div>
	</div>
</div>
`, styles: ['/* apps/findqo-ireland/src/app/shared/components/ads/ad-ber/ad-ber.component.scss */\n.label-shape {\n  position: relative;\n  width: 30px;\n  height: 26px;\n}\n.label-shape::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: -10px;\n  width: 0;\n  height: 0;\n  border-top: 13px solid transparent;\n  border-left: 10px solid var(--basic-2);\n  border-bottom: 13px solid transparent;\n  z-index: 1;\n}\n.arrow-pointer {\n  width: 28px;\n  height: 26px;\n  position: relative;\n  padding-left: 12px;\n}\n.arrow-pointer:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-left: 10px solid var(--basic-1);\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n}\n.arrow-pointer:before {\n  content: "";\n  position: absolute;\n  right: -13px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n}\n.ber-a {\n  background-color: #56ae67;\n}\n.ber-a:before {\n  border-left: 13px solid #56ae67;\n}\n.ber-b {\n  background-color: #6eb865;\n}\n.ber-b:before {\n  border-left: 13px solid #6eb865;\n}\n.ber-c {\n  background-color: #b8d261;\n}\n.ber-c:before {\n  border-left: 13px solid #b8d261;\n}\n.ber-d {\n  background-color: #f1ec60;\n}\n.ber-d:before {\n  border-left: 13px solid #f1ec60;\n}\n.ber-e {\n  background-color: #f2ba4e;\n}\n.ber-e:before {\n  border-left: 13px solid #f2ba4e;\n}\n.ber-f {\n  background-color: #e37d44;\n}\n.ber-f:before {\n  border-left: 13px solid #e37d44;\n}\n.ber-g {\n  background-color: #db433e;\n}\n.ber-g:before {\n  border-left: 13px solid #db433e;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-ber.component.css.map */\n'] }]
  }], null, { ber: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdBerComponent, { className: "AdBerComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-ber/ad-ber.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-report-dialog/ad-report-dialog.component.ts
var _c0 = (a0) => ({ reasons: a0 });
function AdReportDialogComponent_div_0_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r2 = ctx.$implicit;
    \u0275\u0275property("value", reason_r2 == null ? null : reason_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reason_r2 == null ? null : reason_r2.name, " ");
  }
}
function AdReportDialogComponent_div_0_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3113"), " ");
  }
}
function AdReportDialogComponent_div_0_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3239"), " ");
  }
}
function AdReportDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "button", 5);
    \u0275\u0275element(8, "mat-icon", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "form", 7)(10, "div", 8)(11, "mat-label", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 10)(15, "mat-select", 11);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275template(17, AdReportDialogComponent_div_0_mat_option_17_Template, 2, 2, "mat-option", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdReportDialogComponent_div_0_mat_error_18_Template, 3, 3, "mat-error", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-label", 14);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 15);
    \u0275\u0275element(23, "textarea", 16);
    \u0275\u0275pipe(24, "translations");
    \u0275\u0275elementStart(25, "mat-hint", 17);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AdReportDialogComponent_div_0_mat_error_27_Template, 3, 3, "mat-error", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "findqo-button", 20);
    \u0275\u0275pipe(31, "translations");
    \u0275\u0275listener("clicked", function AdReportDialogComponent_div_0_Template_findqo_button_clicked_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reportAd());
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 14, "n3298"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 16, "n3299"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 18, "n3300"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", vm_r4.reasons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.get("reportReasonId").hasError("required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 20, "n3302"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 22, "n3301"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.reportMessageCount, "/500 characters left");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.get("message").hasError);
    \u0275\u0275advance(3);
    \u0275\u0275property("btnType", ctx_r2.buttonType.FILLED)("label", \u0275\u0275pipeBind1(31, 24, "n3298"))("isStopPropagation", true)("btnClass", "text-body-regular w-100");
  }
}
var AdReportDialogComponent = class _AdReportDialogComponent {
  constructor(data, fb, sharedAdsFacade, matDialogRef) {
    this.data = data;
    this.fb = fb;
    this.sharedAdsFacade = sharedAdsFacade;
    this.matDialogRef = matDialogRef;
    this.buttonType = ButtonType;
    this.form = this.fb.group({
      reportReasonId: ["", Validators.required],
      message: ["", Validators.maxLength(500)]
    });
    this.reportReasons$ = this.sharedAdsFacade.getReportAdReasons$();
  }
  get reportMessageCount() {
    const count = 500 - (this.form?.get("message").value?.length || 0);
    if (count <= 0) {
      return 0;
    } else {
      return count;
    }
  }
  reportAd() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const BODY = {
        reportReasonId: this.form.get("reportReasonId").value,
        message: this.form.get("message")?.value
      };
      this.sharedAdsFacade.reportAd(this.data?.adId, BODY, this.matDialogRef);
    }
  }
  ngOnInit() {
    this.sharedAdsFacade.loadReportAdReasons();
  }
  static {
    this.\u0275fac = function AdReportDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdReportDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdReportDialogComponent, selectors: [["findqo-ad-report-dialog"]], features: [\u0275\u0275ProvidersFeature([SharedAdsFacade])], decls: 2, vars: 5, consts: [["class", "container p-0", 4, "ngIf"], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "py-10px", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [3, "formGroup"], [1, "p-3"], ["for", "reasonControl", 1, "mb-2", "fg-general-4", "text-body-regular"], ["appearance", "outline", 1, "w-100"], ["formControlName", "reportReasonId", "id", "reasonControl", 1, "text-body-regular", 3, "placeholder"], ["class", "text-body-regular", 3, "value", 4, "ngFor", "ngForOf"], ["class", "text-caption-regular", 4, "ngIf"], ["for", "messageControl", 1, "mb-2", "fg-general-4", "text-body-regular"], ["appearance", "outline", 1, ""], ["matInput", "", "rows", "5", "aria-label", "Enter message", "formControlName", "message", "maxlength", "500", "id", "messageControl", 1, "fs-14px", "fw-400", "lh-22px", "rounded-1", "py-2", 3, "placeholder"], [1, "abc", "d-inline-flex", "justify-content-end", "text-caption-regular", "w-100", "mt-2"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], [1, "text-body-regular", 3, "value"], [1, "text-caption-regular"]], template: function AdReportDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdReportDialogComponent_div_0_Template, 32, 26, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.reportReasons$)));
      }
    }, dependencies: [SharedModule, NgForOf, NgIf, MatIconButton, MatIcon, AsyncPipe, TranslationsPipe, ButtonModule, ButtonComponent, MatInputModule, MatInput, MatFormField, MatLabel, MatHint, MatError, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatDialogModule, MatDialogClose], styles: ["\n\n.py-10px[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-report-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdReportDialogComponent, [{
    type: Component,
    args: [{ imports: [SharedModule, ButtonModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDialogModule], selector: "findqo-ad-report-dialog", providers: [SharedAdsFacade], template: `<div class="container p-0" *ngIf="{ reasons: reportReasons$ | async } as vm">
	<div class="row mx-0 px-3 py-10px justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n3298' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<form [formGroup]="form">
		<div class="p-3">
			<mat-label class="mb-2 fg-general-4 text-body-regular" for="reasonControl">{{ 'n3299' | translations }}</mat-label>

			<mat-form-field appearance="outline" class="w-100">
				<mat-select formControlName="reportReasonId" [placeholder]="'n3300' | translations" class="text-body-regular" id="reasonControl">
					<mat-option *ngFor="let reason of vm.reasons" [value]="reason?.id" class="text-body-regular">
						{{ reason?.name }}
					</mat-option>
				</mat-select>

				<mat-error *ngIf="form.get('reportReasonId').hasError('required')" class="text-caption-regular">
					{{ 'n3113' | translations }}
				</mat-error>
			</mat-form-field>

			<mat-label class="mb-2 fg-general-4 text-body-regular" for="messageControl">{{ 'n3302' | translations }}</mat-label>

			<mat-form-field appearance="outline" class="">
				<textarea
					matInput
					[placeholder]="'n3301' | translations"
					class="fs-14px fw-400 lh-22px rounded-1 py-2"
					rows="5"
					aria-label="Enter message"
					formControlName="message"
					maxlength="500"
					id="messageControl"
				></textarea>

				<mat-hint class="abc d-inline-flex justify-content-end text-caption-regular w-100 mt-2">{{ reportMessageCount }}/500 characters left</mat-hint>

				<mat-error *ngIf="form.get('message').hasError" class="text-caption-regular">
					{{ 'n3239' | translations }}
				</mat-error>
			</mat-form-field>
		</div>

		<div class="row mx-0 gap-3 p-3 dialog-actions">
			<div class="col px-0">
				<findqo-button
					[btnType]="buttonType.FILLED"
					[label]="'n3298' | translations"
					[isStopPropagation]="true"
					[btnClass]="'text-body-regular w-100'"
					(clicked)="reportAd()"
				></findqo-button>
			</div>
		</div>
	</form>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-report-dialog/ad-report-dialog.component.scss */\n.py-10px {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-report-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: FormBuilder }, { type: SharedAdsFacade }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdReportDialogComponent, { className: "AdReportDialogComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-report-dialog/ad-report-dialog.component.ts", lineNumber: 20 });
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-share-dialog/ad-share-dialog.component.ts
var _c02 = ["adLink"];
var AdShareDialogComponent = class _AdShareDialogComponent {
  constructor(snackBarService, commonFacade, data, matDialogRef) {
    this.snackBarService = snackBarService;
    this.commonFacade = commonFacade;
    this.data = data;
    this.matDialogRef = matDialogRef;
    this.buttonType = ButtonType;
  }
  copyAdLink(adLink) {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    navigator.clipboard.writeText(adLink);
    this.snackBarService.open({
      data: { message: TRANSLATIONS["n227"], type: "success" },
      panelClass: "snackbar-success"
    });
    this.matDialogRef.close();
  }
  ngAfterViewInit() {
    this.adLink.nativeElement.value = this.data["adLink"];
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function AdShareDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdShareDialogComponent)(\u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdShareDialogComponent, selectors: [["findqo-ad-share-dialog"]], viewQuery: function AdShareDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.adLink = _t.first);
      }
    }, standalone: false, decls: 20, vars: 14, consts: [["adLink", ""], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], ["appearance", "outline", 1, "w-100", "no-subscript", "mt-3"], ["disabled", "", "matInput", "", 1, "text-body-regular", "fg-general-5", 3, "readonly"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "iconPrefix", "isStopPropagation", "btnClass"]], template: function AdShareDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 9);
        \u0275\u0275element(14, "input", 10, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "findqo-button", 13);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275listener("clicked", function AdShareDialogComponent_Template_findqo_button_clicked_18_listener() {
          \u0275\u0275restoreView(_r1);
          const adLink_r2 = \u0275\u0275reference(15);
          return \u0275\u0275resetView(ctx.copyAdLink(adLink_r2.value));
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "n195"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "n720"));
        \u0275\u0275advance(3);
        \u0275\u0275property("readonly", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(19, 12, "n226"))("iconPrefix", "copy-link-basic-1")("isStopPropagation", true)("btnClass", "text-body-regular w-100");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatInput, MatFormField, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-share-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdShareDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-share-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n195' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<span class="text-body-regular fg-general-4 mb-3">{{ 'n720' | translations }}</span>

		<mat-form-field appearance="outline" class="w-100 no-subscript mt-3">
			<input disabled [readonly]="true" matInput #adLink class="text-body-regular fg-general-5" />
		</mat-form-field>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n226' | translations"
				[iconPrefix]="'copy-link-basic-1'"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="copyAdLink(adLink.value)"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-share-dialog/ad-share-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-share-dialog.component.css.map */\n"] }]
  }], () => [{ type: SnackService }, { type: CommonFacade }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], { adLink: [{
    type: ViewChild,
    args: ["adLink"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdShareDialogComponent, { className: "AdShareDialogComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-share-dialog/ad-share-dialog.component.ts", lineNumber: 13 });
})();

export {
  AdBerComponent,
  AdReportDialogComponent,
  AdShareDialogComponent
};
//# sourceMappingURL=chunk-235SP5Y4.js.map
