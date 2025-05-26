import {
  PropertyWorthFacade
} from "./chunk-UFWQVVKR.js";
import {
  PhoneNumberValidation,
  PropertyWorthsApi
} from "./chunk-PVESVPHH.js";
import {
  CommercialLeadAIResponseComponent
} from "./chunk-A3HYZPJI.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-T6P2TQWL.js";
import {
  PropertyWorthState
} from "./chunk-OL2TDOFF.js";
import {
  FiltersFormSkeletonLoaderModule
} from "./chunk-L3Z4E5AP.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-6TIUDW4S.js";
import {
  MatDatepickerModule
} from "./chunk-7NR4UKDC.js";
import {
  NgxSkeletonLoaderModule
} from "./chunk-UWPIFTDN.js";
import {
  counties_exports
} from "./chunk-SPRKI5MA.js";
import {
  MatCheckboxModule
} from "./chunk-GOW5C4RI.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-5J2JGDL5.js";
import {
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DateAdapter,
  DefaultValueAccessor,
  DigitOnlyDirective,
  FiltersApi,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatButton,
  MatDialog,
  MatDialogRef,
  MatError,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MaxLengthValidator,
  MinLengthValidator,
  NativeDateAdapter,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  RouterModule,
  SectionsState,
  SharedModule,
  SnackService,
  TranslationsPipe,
  Validators,
  ViewportService,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  __spreadValues,
  map,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/confirmation-modal/confirmation-modal.component.ts
var ConfirmationModalComponent = class _ConfirmationModalComponent {
  constructor(dialogRef, dialog) {
    this.dialogRef = dialogRef;
    this.dialog = dialog;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function ConfirmationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationModalComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationModalComponent, selectors: [["findqo-confirmation-modal"]], decls: 12, vars: 0, consts: [[1, "row", "dialog-container", "position-relative"], [1, "col-auto", "dialog-header"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", 3, "click"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "container", "d-flex", "gap-3", "justify-content-center", "flex-column"], [1, "heading-4-medium", "text-center"], [1, "text-body-regular", "text-center"], ["mat-flat-button", "", "color", "primary", "disableRipple", "", 1, "text-body-regular", "w-100", "button", 3, "click"]], template: function ConfirmationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ConfirmationModalComponent_Template_button_click_2_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementStart(3, "mat-icon", 3);
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 4)(6, "p", 5);
        \u0275\u0275text(7, "Request Submitted Successfully");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "One of the approved estate agents will contact you soon to arrange your property valuation.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function ConfirmationModalComponent_Template_button_click_10_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275text(11, "Got it");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [ButtonModule, SharedModule, MatButton, MatIconButton, MatIcon], styles: ["\n\n.dialog-container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 16px 16px 24px 16px;\n  justify-content: end;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n}\n.button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/confirmation-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "findqo-confirmation-modal", imports: [ButtonModule, SharedModule], template: '<div class="row dialog-container position-relative">\n	<div class="col-auto dialog-header">\n		<button mat-icon-button mat-dialog-close (click)="onCloseDialog()" class="close-btn">\n			<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>\n		</button>\n	</div>\n	<div class="container d-flex gap-3 justify-content-center flex-column">\n		<p class="heading-4-medium text-center">Request Submitted Successfully</p>\n		<p class="text-body-regular text-center">One of the approved estate agents will contact you soon to arrange your property valuation.</p>\n		<button class="text-body-regular w-100 button" (click)="onCloseDialog()" mat-flat-button color="primary" disableRipple>Got it</button>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/confirmation-modal/confirmation-modal.component.scss */\n.dialog-container {\n  height: 100%;\n  padding: 16px 16px 24px 16px;\n  justify-content: end;\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n}\n.button {\n  height: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/confirmation-modal.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationModalComponent, { className: "ConfirmationModalComponent", filePath: "apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/confirmation-modal/confirmation-modal.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/skeleton-loader/skeleton-loader.component.ts
var SkeletonLoaderComponent = class _SkeletonLoaderComponent {
  static {
    this.\u0275fac = function SkeletonLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonLoaderComponent, selectors: [["findqo-skeleton-loader"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "row", "h-50vh", "justify-content-center", "align-items-center"], [1, "text-center"], [1, "d-inline-block", "text-center"], [1, "heading-3-medium", "fg-general-5", "text-center", "mt-3"], [1, "text-body-regular", "fg-general-5", "text-center", "d-inline-block", "pt-1"]], template: function SkeletonLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "mat-spinner", 3);
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, "Please wait...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, " We're estimating your office space cost based on the details you provided. This usually takes 20\u201330 seconds. Please hold on while we generate your results! ");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.h-50vh[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/skeleton-loader.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonLoaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-skeleton-loader", imports: [MatProgressSpinnerModule], template: `<div class="container">
  <div class="row h-50vh justify-content-center align-items-center">
    <div class="text-center">
      <mat-spinner class="d-inline-block text-center"></mat-spinner>

      <p class="heading-3-medium fg-general-5 text-center mt-3">Please wait...</p>

      <span class="text-body-regular fg-general-5 text-center d-inline-block pt-1">
				We're estimating your office space cost based on the details you provided. This usually takes 20\u201330 seconds. Please hold on while we generate your results!
			</span>
    </div>
  </div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/skeleton-loader/skeleton-loader.component.scss */\n.h-50vh {\n  height: 50vh;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/skeleton-loader.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonLoaderComponent, { className: "SkeletonLoaderComponent", filePath: "apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/skeleton-loader/skeleton-loader.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/valuation-calculated.component.ts
function ValuationCalculatedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-skeleton-loader");
  }
}
function ValuationCalculatedComponent_Conditional_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "findqo-commercial-lead-ai-response", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("aiResponse", ctx_r0.aiResponse);
  }
}
function ValuationCalculatedComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ValuationCalculatedComponent_Conditional_2_div_0_Template, 2, 1, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.aiResponse);
  }
}
function ValuationCalculatedComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2, " An error occurred. Try again shortly. You can also email us your property details at ");
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "hello@findqo.ie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 6)(6, "findqo-button", 7);
    \u0275\u0275listener("clicked", function ValuationCalculatedComponent_div_3_Template_findqo_button_clicked_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.postPropertyWorth());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("label", "Try Again")("btnType", ctx_r0.buttonType.FILLED)("isDisabled", ctx_r0.isLoading);
  }
}
var ValuationCalculatedComponent = class _ValuationCalculatedComponent {
  constructor(propertyWorth, propertyWorthState, snack, dialog) {
    this.propertyWorth = propertyWorth;
    this.propertyWorthState = propertyWorthState;
    this.snack = snack;
    this.dialog = dialog;
    this.isLoading = true;
    this.inPersonValuationRequested = false;
    this.isError = false;
    this.aiResponse = null;
    this.summary = null;
    this.buttonType = ButtonType;
    this.prevTab = new EventEmitter();
  }
  set formData(formData) {
    if (formData) {
      this.aiContent = null;
      this.isLoading = true;
      this.inPersonValuationRequested = false;
      this.isError = false;
      this.payload = formData;
      this.postPropertyWorth();
    } else {
      this.prevTab.emit(0);
    }
  }
  postPropertyWorth() {
    const API_PAYLOAD = this.removeEmptyKeys(this.payload);
    this.isLoading = true;
    this.propertyWorthState.setProcessing(true);
    this.propertyWorth.postCommercialEstimation(API_PAYLOAD).subscribe((res) => {
      this.isLoading = false;
      this.valuationId = res?.["data"]?.id;
      try {
        this.aiResponse = JSON.parse(res?.["data"]?.ai_response);
        this.summary = this.aiResponse?.summary || null;
      } catch (e) {
        this.isError = true;
        this.aiResponse = null;
      }
      this.propertyWorthState.setProcessing(false);
      if (this.payload?.isPersonValuation === 1) {
        this.dialog.open(ConfirmationModalComponent, {
          disableClose: false,
          maxWidth: "375px",
          width: "100%",
          height: "auto",
          maxHeight: "100%"
        });
      }
    }, (error) => {
      if (error?.error?.error?.id === "invalidEmail") {
        this.prevTab.emit(1);
        this.snack.open({
          data: { message: "Invalid Email, please try again", type: "error" },
          panelClass: ["snackbar-error"]
        });
      }
      this.propertyWorthState.setProcessing(false);
      this.isError = true;
      this.isLoading = false;
    });
  }
  removeEmptyKeys(obj) {
    const RESULT = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] !== "" && obj[key] !== null && obj[key] !== void 0) {
          RESULT[key] = obj[key];
        }
      }
    }
    return RESULT;
  }
  static {
    this.\u0275fac = function ValuationCalculatedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValuationCalculatedComponent)(\u0275\u0275directiveInject(PropertyWorthFacade), \u0275\u0275directiveInject(PropertyWorthState), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValuationCalculatedComponent, selectors: [["findqo-valuation-calculated"]], inputs: { formData: "formData" }, outputs: { prevTab: "prevTab" }, decls: 4, vars: 2, consts: [[1, "container", "property-information-form", "mt-5"], [1, "ai-json-content"], [4, "ngIf"], ["class", "ai-json-content", 4, "ngIf"], [3, "aiResponse"], ["href", "mailto:hello@findqo.ie", 1, "fg-prim-2"], [1, "d-flex", "w-100", "mt-5", "justify-content-center"], ["btnClass", "text-small-14px-regular ", "type", "submit", 1, "d-block", 3, "clicked", "label", "btnType", "isDisabled"]], template: function ValuationCalculatedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ValuationCalculatedComponent_Conditional_1_Template, 1, 0, "findqo-skeleton-loader")(2, ValuationCalculatedComponent_Conditional_2_Template, 1, 1, "div", 1)(3, ValuationCalculatedComponent_div_3_Template, 7, 3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isLoading ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isError && !ctx.isLoading);
      }
    }, dependencies: [CommercialLeadAIResponseComponent, ButtonModule, ButtonComponent, SkeletonLoaderComponent, NgIf], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 650px;\n  padding-bottom: 75px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/valuation-calculated.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValuationCalculatedComponent, [{
    type: Component,
    args: [{ selector: "findqo-valuation-calculated", imports: [CommercialLeadAIResponseComponent, ButtonModule, SkeletonLoaderComponent, NgIf], template: `<div class="container property-information-form mt-5">
	@if (isLoading) {
		<findqo-skeleton-loader></findqo-skeleton-loader>
	} @else {
		<div *ngIf="aiResponse" class="ai-json-content">
			<findqo-commercial-lead-ai-response [aiResponse]="aiResponse"></findqo-commercial-lead-ai-response>
		</div>
	}

	<div *ngIf="isError && !isLoading">
		<p>
			An error occurred. Try again shortly. You can also email us your property details at
			<a class="fg-prim-2" href="mailto:hello@findqo.ie">hello&#64;findqo.ie</a>
		</p>

		<div class="d-flex w-100 mt-5 justify-content-center">
			<findqo-button
				btnClass="text-small-14px-regular "
				class="d-block"
				[label]="'Try Again'"
				(clicked)="postPropertyWorth()"
				[btnType]="buttonType.FILLED"
				[isDisabled]="isLoading"
				type="submit"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/valuation-calculated.component.scss */\n.container {\n  max-width: 650px;\n  padding-bottom: 75px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/valuation-calculated.component.css.map */\n"] }]
  }], () => [{ type: PropertyWorthFacade }, { type: PropertyWorthState }, { type: SnackService }, { type: MatDialog }], { prevTab: [{
    type: Output
  }], formData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValuationCalculatedComponent, { className: "ValuationCalculatedComponent", filePath: "apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/valuation-calculated/valuation-calculated.component.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/property-information/property-information.component.ts
var _c0 = (a0) => ({ eirCodeOptions: a0 });
function PropertyInformationComponent_div_0_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 36);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_mat_option_38_Template_mat_option_click_0_listener() {
      const county_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCounty(county_r4.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const county_r4 = ctx.$implicit;
    \u0275\u0275property("value", county_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", county_r4.name, " ");
  }
}
function PropertyInformationComponent_div_0_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_mat_error_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 37);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h1", 4);
    \u0275\u0275text(2, "Office space insights based on locations and prices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Looking to buy or lease office space in Dublin, Cork, Galway, or elsewhere in Ireland? Our free tool helps you:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "ol", 7)(7, "li", 8);
    \u0275\u0275text(8, "Estimate costs (by employees or square meters)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "li", 8);
    \u0275\u0275text(10, "Discover cheaper nearby areas with better amenities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li", 8);
    \u0275\u0275text(12, "Get expert insights on market trends");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "form", 9)(14, "div", 10)(15, "div", 11)(16, "mat-label", 12);
    \u0275\u0275text(17, "Looking to Buy or Lease?*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-radio-group", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateTransactionType("lease"));
    });
    \u0275\u0275elementStart(22, "mat-radio-button", 17);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_mat_radio_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateTransactionType("lease"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 18);
    \u0275\u0275text(24, "Lease");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 19)(26, "div", 16);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_div_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateTransactionType("buy"));
    });
    \u0275\u0275elementStart(27, "mat-radio-button", 20);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_mat_radio_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateTransactionType("buy"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 18);
    \u0275\u0275text(29, "Buy");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(30, "div", 21)(31, "mat-label", 12);
    \u0275\u0275text(32, "Select County*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 22);
    \u0275\u0275element(34, "input", 23, 0);
    \u0275\u0275elementStart(36, "mat-autocomplete", null, 1);
    \u0275\u0275template(38, PropertyInformationComponent_div_0_mat_option_38_Template, 2, 2, "mat-option", 24);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, PropertyInformationComponent_div_0_mat_error_40_Template, 2, 0, "mat-error", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 21)(42, "mat-label", 12);
    \u0275\u0275text(43, "Staff Size*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 22);
    \u0275\u0275element(45, "input", 26);
    \u0275\u0275template(46, PropertyInformationComponent_div_0_mat_error_46_Template, 2, 0, "mat-error", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 21)(48, "mat-label", 12);
    \u0275\u0275text(49, "Additional Comments/Requirements*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field", 22);
    \u0275\u0275element(51, "textarea", 27);
    \u0275\u0275template(52, PropertyInformationComponent_div_0_mat_error_52_Template, 2, 0, "mat-error", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 28)(54, "div", 29)(55, "div", 30)(56, "div", 31)(57, "findqo-button", 32);
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_Template_findqo_button_clicked_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNext());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 33)(59, "div", 34)(60, "div", 11)(61, "findqo-button", 35);
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_Template_findqo_button_clicked_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNext());
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const auto_r5 = \u0275\u0275reference(37);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("formGroup", ctx_r1.propertyInformationForm);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("chip-selected", ctx_r1.propertyInformationForm.getRawValue().propertyIntent === "lease");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.propertyInformationForm.getRawValue().propertyIntent === "lease" ? "fg-prim-2" : "fg-general-5")("value", "lease");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("chip-selected", ctx_r1.propertyInformationForm.getRawValue().propertyIntent === "buy");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.propertyInformationForm.getRawValue().propertyIntent === "buy" ? "fg-prim-2" : "fg-general-5")("value", "buy");
    \u0275\u0275advance(7);
    \u0275\u0275property("matAutocomplete", auto_r5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(39, 20, ctx_r1.filteredCounties));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.get("county").hasError("required"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.get("propertySize").hasError("required"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.get("comment").hasError("required"));
    \u0275\u0275advance(5);
    \u0275\u0275property("label", "Next")("isDisabled", ctx_r1.propertyInformationForm.invalid)("btnType", ctx_r1.buttonType.FILLED);
    \u0275\u0275advance(4);
    \u0275\u0275property("label", "Next")("isDisabled", ctx_r1.propertyInformationForm.invalid)("btnType", ctx_r1.buttonType.FILLED);
  }
}
var MyDateAdapter = class extends NativeDateAdapter {
  format(date, displayFormat) {
    const YEAR = date.getFullYear();
    return `${YEAR}`;
  }
};
var MY_FORMATS = {
  parse: {
    dateInput: "yyyy"
  },
  display: {
    dateInput: "yyyy",
    monthYearLabel: "yyyy",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "yyyy"
  }
};
var PropertyInformationComponent = class _PropertyInformationComponent {
  constructor(fb) {
    this.fb = fb;
    this.propertyInformationForm = this.fb.group({
      propertyIntent: ["lease", [Validators.required]],
      county: ["", [Validators.required]],
      propertySize: ["", [Validators.required]],
      propertyUnit: ["people"],
      budgetPeriod: ["monthly"],
      comment: ["", [Validators.required]]
    });
    this.nextTab = new EventEmitter();
    this.maxDate = /* @__PURE__ */ new Date();
    this.buttonType = ButtonType;
    this.counties = counties_exports?.data?.all;
    this.units = [
      {
        key: "people",
        label: "People office"
      }
    ];
    this.budgetPeriods = [
      {
        key: "monthly",
        label: "Monthly"
      },
      {
        key: "annually",
        label: "Annually"
      }
    ];
  }
  filterCounties(value) {
    const filterValue = value.toLowerCase();
    return this.counties.filter((county) => county?.name.toLowerCase().includes(filterValue));
  }
  onNext() {
    const FORM_DATA = this.propertyInformationForm.value;
    this.nextTab.emit({
      status: this.propertyInformationForm.status,
      value: __spreadValues({}, FORM_DATA),
      form: "propertyInformation"
    });
  }
  updateTransactionType(type) {
    this.propertyInformationForm.get("propertyIntent").setValue(type);
  }
  selectCounty(county) {
    this.propertyInformationForm.get("county").setValue(county);
  }
  ngOnInit() {
    this.filteredCounties = this.propertyInformationForm.controls["county"].valueChanges.pipe(startWith(""), map((value) => this.filterCounties(value || "")));
  }
  static {
    this.\u0275fac = function PropertyInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyInformationComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyInformationComponent, selectors: [["findqo-commercial-property-information"]], outputs: { nextTab: "nextTab" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: DateAdapter,
        useClass: MyDateAdapter,
        deps: [MAT_DATE_LOCALE]
      },
      {
        provide: MAT_DATE_FORMATS,
        useValue: MY_FORMATS
      }
    ])], decls: 2, vars: 5, consts: [["input", ""], ["auto", "matAutocomplete"], ["class", "container pb-md-5 property-information-form", 4, "ngIf"], [1, "container", "pb-md-5", "property-information-form"], [1, "heading-2", "lh-28px", "fs-24px", "mt-4", "mb-2"], [1, "text-body-regular", "fg-general-5"], [1, "border", "rounded-1", "p-2", "mt-2"], [1, "mb-0", "px-3"], [1, "pb-1", "text-caption-medium", "fg-general-5", "fs-12px", "lh-16px"], [1, "my-4", 3, "formGroup"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "fg-general-4", "text-small-14px-regular"], ["formControlName", "propertyIntent"], [1, "row", "mx-0", "align-items-center", "mt-2"], [1, "col-6", "pe-1"], [1, "checkbox-list", "d-flex", "align-items-center", "py-4", 3, "click"], ["color", "primary", 1, "ps-2", "text-body-regular", "fg-general-2", 3, "click", "ngClass", "value"], [1, "text-body-regular", "ps-2"], [1, "col-6", "ps-1"], ["color", "primary", 1, "ps-2", "text-body-regular", "fg-general-4", 3, "click", "ngClass", "value"], [1, "col-md-12", "mt-3"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["placeholder", "Select County", "matInput", "", "formControlName", "county", 3, "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "text-caption-regular fs-12px fw-400 lh-16px", 4, "ngIf"], ["type", "number", "digitOnly", "", "formControlName", "propertySize", "matInput", "", "placeholder", "20 people office", 1, "text-body-regular", "fg-general-5"], ["matInput", "", "minlength", "3", "formControlName", "comment", "placeholder", "Mention specific requirements like parking, serviced office, affordability is key, near public transport.", "rows", "8", 1, "w-100", "text-body-regular", "reason-area", "resize-none", "fg-general-5", "pt-2", "mt-9"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "w-100", "position-fixed", "bottom-0", "border-top", "bg-basic-1", "d-none", "d-md-block"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-end", "align-items-center"], [1, "col-auto", "w-125px"], ["id", "office-space-next-btn", "btnClass", "text-small-14px-regular w-100 h-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [1, "w-100", "d-block", "d-md-none"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "align-items-center"], ["id", "office-space-next-btn", "btnClass", "text-small-14px-regular w-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [3, "click", "value"], [1, "text-caption-regular", "fs-12px", "fw-400", "lh-16px"]], template: function PropertyInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PropertyInformationComponent_div_0_Template, 62, 22, "div", 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.eirCodeOptions$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DigitOnlyDirective, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, FormGroupDirective, FormControlName, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatFormField, MatLabel, MatError, MatInput, ButtonComponent, MatRadioGroup, MatRadioButton, AsyncPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\ninput.search-location[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location[_ngcontent-%COMP%]:focus {\n  outline: unset !important;\n}\ninput.search-location[_ngcontent-%COMP%]::placeholder {\n  font-style: italic !important;\n  color: var(--general-2) !important;\n}\n.search-option[_ngcontent-%COMP%] {\n  min-height: 45px;\n  height: 45px;\n  border-bottom: 1px solid var(--neutral-1);\n}\n.bedroom-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.add-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.round-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.bed-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  background-color: var(--info-1);\n  position: relative;\n  display: inline-block;\n}\n.bed-icon[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bedroom-count[_ngcontent-%COMP%] {\n  line-height: 35px;\n  color: var(--general-5);\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.w-600px[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-125px[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n.checkbox-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-information.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyInformationComponent, [{
    type: Component,
    args: [{ selector: "findqo-commercial-property-information", providers: [
      {
        provide: DateAdapter,
        useClass: MyDateAdapter,
        deps: [MAT_DATE_LOCALE]
      },
      {
        provide: MAT_DATE_FORMATS,
        useValue: MY_FORMATS
      }
    ], standalone: false, template: `<div class="container pb-md-5 property-information-form" *ngIf="{ eirCodeOptions: eirCodeOptions$ | async } as vm">
	<h1 class="heading-2 lh-28px fs-24px mt-4 mb-2">Office space insights based on locations and prices</h1>

	<p class="text-body-regular fg-general-5">Looking to buy or lease office space in Dublin, Cork, Galway, or elsewhere in Ireland? Our free tool helps you:</p>

	<div class="border rounded-1 p-2 mt-2">
		<ol class="mb-0 px-3">
			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">Estimate costs (by employees or square meters)</li>

			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">Discover cheaper nearby areas with better amenities</li>

			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">Get expert insights on market trends</li>
		</ol>
	</div>

	<form class="my-4" [formGroup]="propertyInformationForm">
		<div class="row justify-content-center">
			<div class="col-12">
				<mat-label class="fg-general-4 text-small-14px-regular">Looking to Buy or Lease?*</mat-label>
				<mat-radio-group formControlName="propertyIntent">
					<div class="row mx-0 align-items-center mt-2">
						<div class="col-6 pe-1">
							<div
								(click)="updateTransactionType('lease')"
								[class.chip-selected]="propertyInformationForm.getRawValue().propertyIntent === 'lease'"
								class="checkbox-list d-flex align-items-center py-4"
							>
								<mat-radio-button
									[ngClass]="propertyInformationForm.getRawValue().propertyIntent === 'lease' ? 'fg-prim-2' : 'fg-general-5'"
									color="primary"
									[value]="'lease'"
									class="ps-2 text-body-regular fg-general-2"
									(click)="updateTransactionType('lease')"
								></mat-radio-button>
								<span class="text-body-regular ps-2">Lease</span>
							</div>
						</div>

						<div class="col-6 ps-1">
							<div
								(click)="updateTransactionType('buy')"
								[class.chip-selected]="propertyInformationForm.getRawValue().propertyIntent === 'buy'"
								class="checkbox-list d-flex align-items-center py-4"
							>
								<mat-radio-button
									[ngClass]="propertyInformationForm.getRawValue().propertyIntent === 'buy' ? 'fg-prim-2' : 'fg-general-5'"
									color="primary"
									[value]="'buy'"
									class="ps-2 text-body-regular fg-general-4"
									(click)="updateTransactionType('buy')"
								></mat-radio-button>
								<span class="text-body-regular ps-2">Buy</span>
							</div>
						</div>
					</div>
				</mat-radio-group>
			</div>
		</div>

		<div class="col-md-12 mt-3">
			<mat-label class="fg-general-4 text-small-14px-regular">Select County*</mat-label>
			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<input #input placeholder="Select County" matInput formControlName="county" [matAutocomplete]="auto" />
				<mat-autocomplete #auto="matAutocomplete">
					<mat-option *ngFor="let county of filteredCounties | async" (click)="selectCounty(county.name)" [value]="county.name">
						{{ county.name }}
					</mat-option>
				</mat-autocomplete>

				<mat-error *ngIf="propertyInformationForm.get('county').hasError('required')" class="text-caption-regular fs-12px fw-400 lh-16px">
					This is a required field
				</mat-error>
			</mat-form-field>
		</div>

		<div class="col-md-12 mt-3">
			<mat-label class="fg-general-4 text-small-14px-regular">Staff Size*</mat-label>
			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<input type="number" digitOnly formControlName="propertySize" matInput placeholder="20 people office" class="text-body-regular fg-general-5" />

				<mat-error *ngIf="propertyInformationForm.get('propertySize').hasError('required')" class="text-caption-regular fs-12px fw-400 lh-16px">
					This is a required field
				</mat-error>
			</mat-form-field>
		</div>

		<div class="col-md-12 mt-3">
			<mat-label class="fg-general-4 text-small-14px-regular">Additional Comments/Requirements*</mat-label>
			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<textarea
					matInput
					minlength="3"
					formControlName="comment"
					placeholder="Mention specific requirements like parking, serviced office, affordability is key, near public transport."
					class="w-100 text-body-regular reason-area resize-none fg-general-5 pt-2 mt-9"
					rows="8"
				></textarea>

				<mat-error *ngIf="propertyInformationForm.get('comment').hasError('required')" class="text-caption-regular fs-12px fw-400 lh-16px">
					This is a required field
				</mat-error>
			</mat-form-field>
		</div>
	</form>

	<div class="row justify-content-center gap-3 mt-3">
		<!-- Desktop View (fixed position) -->
		<div class="w-100 position-fixed bottom-0 border-top bg-basic-1 d-none d-md-block">
			<div class="row mx-auto p-3 mw-550px justify-content-end align-items-center">
				<div class="col-auto w-125px">
					<findqo-button
						id="office-space-next-btn"
						btnClass="text-small-14px-regular w-100 h-100"
						class="d-block"
						[label]="'Next'"
						(clicked)="onNext()"
						[isDisabled]="propertyInformationForm.invalid"
						[btnType]="buttonType.FILLED"
						type="submit"
					></findqo-button>
				</div>
			</div>
		</div>

		<!-- Mobile and Tablet View (scrollable) -->
		<div class="w-100 d-block d-md-none">
			<div class="row mx-auto p-lg-2 justify-content-end align-items-center">
				<div class="col-12">
					<findqo-button
						id="office-space-next-btn"
						btnClass="text-small-14px-regular w-100"
						class="d-block"
						[label]="'Next'"
						(clicked)="onNext()"
						[isDisabled]="propertyInformationForm.invalid"
						[btnType]="buttonType.FILLED"
						type="submit"
					></findqo-button>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/property-information/property-information.component.scss */\n.container {\n  max-width: 500px;\n}\ninput.search-location {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location:focus {\n  outline: unset !important;\n}\ninput.search-location::placeholder {\n  font-style: italic !important;\n  color: var(--general-2) !important;\n}\n.search-option {\n  min-height: 45px;\n  height: 45px;\n  border-bottom: 1px solid var(--neutral-1);\n}\n.bedroom-item {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.add-btn {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn * {\n  vertical-align: middle;\n}\n.add-btn input {\n  height: 100%;\n}\n.round-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn .mat-icon {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.bed-icon {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  background-color: var(--info-1);\n  position: relative;\n  display: inline-block;\n}\n.bed-icon > .mat-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bedroom-count {\n  line-height: 35px;\n  color: var(--general-5);\n}\n.w-35px {\n  width: 35px;\n}\n.w-600px {\n  max-width: 600px;\n}\n.h-100 {\n  height: 100% !important;\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na mat-icon {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-125px {\n  width: 125px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n.checkbox-list {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-information.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], { nextTab: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyInformationComponent, { className: "PropertyInformationComponent", filePath: "apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/property-information/property-information.component.ts", lineNumber: 47 });
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/about-you/about-you.component.ts
var _c02 = ["phoneNumber"];
function AboutYouComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 43);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44);
    \u0275\u0275text(1, " The name should be between 3 and 80 characters. ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 43);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 43);
    \u0275\u0275text(1, " Please enter valid email ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 45);
    \u0275\u0275text(1, "Your phone number is required");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r0.aboutYouForm.get("phone")) == null ? null : tmp_1_0.errors["invalidPhone"], " ");
  }
}
var AboutYouComponent = class _AboutYouComponent {
  constructor(fb, auth, snack, phoneValidation) {
    this.fb = fb;
    this.auth = auth;
    this.snack = snack;
    this.phoneValidation = phoneValidation;
    this.nextTab = new EventEmitter();
    this.prevTab = new EventEmitter();
    this.buttonType = ButtonType;
    this.aboutYouForm = this.fb.group({
      fullname: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      email: ["", [Validators.required, Validators.email]],
      phoneCode: ["+353", [Validators.required]],
      phone: ["", [Validators.required, this.phoneValidation.phoneValidator(true)]],
      isPersonValuation: ["", [Validators.required]]
    });
    this.purposeOptions = [
      {
        id: "1",
        name: "Thinking of Selling"
      },
      {
        id: "2",
        name: "Curious About Property Value"
      },
      {
        id: "3",
        name: "Fair Deal Valuation"
      },
      {
        id: "4",
        name: "End of terrace house"
      },
      {
        id: "5",
        name: "Probate"
      },
      {
        id: "6",
        name: "Legal or Administration"
      },
      {
        id: "7",
        name: "Mortgage Purposes"
      },
      {
        id: "8",
        name: "Divorce or Matrimonial Separation"
      },
      {
        id: "9",
        name: "Accounting & Open Market Purposes"
      }
    ];
  }
  onMouseClick() {
    setTimeout(() => {
      this.phoneNumber?.focus();
    }, 100);
  }
  onNext() {
    if (this.aboutYouForm.invalid) {
      return;
    }
    this.nextTab.emit({ status: this.aboutYouForm.status, value: this.aboutYouForm.value, form: "aboutYou" });
  }
  onBack() {
    this.prevTab.emit();
  }
  onUpdateRadioBtn(type) {
    this.aboutYouForm.get("isPersonValuation").setValue(type);
  }
  ngOnInit() {
    const USER_PAYLOAD = this.auth.user();
    if (USER_PAYLOAD && USER_PAYLOAD?.name) {
      this.aboutYouForm.patchValue({
        fullname: USER_PAYLOAD?.name,
        email: USER_PAYLOAD?.email,
        phoneCode: USER_PAYLOAD?.phoneCode || "+353",
        phone: USER_PAYLOAD?.phone
      });
      this.aboutYouForm.markAllAsTouched();
    }
  }
  static {
    this.\u0275fac = function AboutYouComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutYouComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(PhoneNumberValidation));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutYouComponent, selectors: [["findqo-about-you"]], viewQuery: function AboutYouComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneNumber = _t.first);
      }
    }, outputs: { nextTab: "nextTab", prevTab: "prevTab" }, standalone: false, decls: 67, vars: 24, consts: [[1, "container", "px-3"], [1, "heading-2", "lh-28px", "fs-24px", "mt-4", "mb-2"], [1, "text-body-regular", "fg-general-5"], [1, "my-4", 3, "formGroup"], [1, "row", "gap-3", "justify-content-center"], [1, "col-md-12"], [1, "mb-1", "fg-general-4", "text-body-regular"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["required", "", "formControlName", "fullname", "maxlength", "80", "minlength", "3", "placeholder", "Your Name", "matInput", "", 1, "text-body-regular", "fg-general-5"], ["class", "text-caption-regular fs-12px fw-400 lh-16px", 4, "ngIf"], ["class", "text-small-12px-regular", 4, "ngIf"], ["required", "", "formControlName", "email", "minlength", "3", "maxlength", "80", "placeholder", "Your Email", "matInput", "", 1, "text-body-regular", "fg-general-5"], [1, "col-12"], ["for", "phoneControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "row", "mx-0", "align-items-center", "w-70px"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0"], [1, "fs-14px", "fg-general-5"], [1, "col", "ps-2", "pe-0", "phone-number"], ["required", "", "placeholder", "Your Phone Number", "formControlName", "phone", "matInput", "", "minlength", "7", "maxlength", "15", "type", "tel", 1, "fs-14px"], ["class", "text-caption-regular", 4, "ngIf"], [1, "fg-general-4", "text-small-14px-regular"], ["formControlName", "isPersonValuation"], [1, "row", "mx-0", "align-items-center", "mt-2"], [1, "col-6", "pe-1"], ["tabindex", "0", 1, "checkbox-list", "d-flex", "align-items-center", "py-4", 3, "click", "keydown.enter"], ["color", "primary", 1, "ps-2", "text-body-regular", "fg-general-2", 3, "click", "keydown.enter", "ngClass", "value"], [1, "text-body-regular", "ps-2"], [1, "col-6", "ps-1"], ["color", "primary", 1, "ps-2", "text-body-regular", "fg-general-4", 3, "click", "keydown.enter", "ngClass", "value"], [1, "col-12", "mt-3"], [1, "text-caption-regular", "fg-general-4"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "w-100", "position-fixed", "bottom-0", "border-top", "bg-basic-1", "d-none", "d-md-block"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-end", "align-items-center"], [1, "col-auto", "w-125px"], ["id", "office-space-generate-btn", "mat-flat-button", "", "color", "primary", "type", "submit", 1, "text-small-14px-regular", "text-truncate", "h-40px", 3, "click", "disabled"], [1, "w-100", "d-block", "d-md-none"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "align-items-center"], ["id", "office-space-generate-btn", "mat-flat-button", "", "color", "primary", "type", "submit", 1, "text-small-14px-regular", "w-100", "d-block", 3, "click", "disabled"], [1, "text-caption-regular", "fs-12px", "fw-400", "lh-16px"], [1, "text-small-12px-regular"], [1, "text-caption-regular"]], template: function AboutYouComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Office space insights based on locations and prices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Please provide your contact details so we can connect you with top office space experts in Ireland. Get AI-driving insights for offices in Ireland. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "form", 3)(6, "div", 4)(7, "div", 5)(8, "mat-label", 6);
        \u0275\u0275text(9, "Your Name*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-form-field", 7);
        \u0275\u0275element(11, "input", 8);
        \u0275\u0275template(12, AboutYouComponent_mat_error_12_Template, 2, 0, "mat-error", 9)(13, AboutYouComponent_mat_error_13_Template, 2, 0, "mat-error", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 5)(15, "mat-label", 6);
        \u0275\u0275text(16, "Your Email*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-form-field", 7);
        \u0275\u0275element(18, "input", 11);
        \u0275\u0275template(19, AboutYouComponent_mat_error_19_Template, 2, 0, "mat-error", 9)(20, AboutYouComponent_mat_error_20_Template, 2, 0, "mat-error", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "mat-label", 13);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 7)(26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17);
        \u0275\u0275element(30, "img", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 19)(32, "span", 20);
        \u0275\u0275text(33, "+353");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 21);
        \u0275\u0275element(35, "input", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, AboutYouComponent_mat_error_36_Template, 2, 0, "mat-error", 23)(37, AboutYouComponent_mat_error_37_Template, 2, 1, "mat-error", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 12)(39, "mat-label", 24);
        \u0275\u0275text(40, "Would you like tailored offers from a local agent?*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-radio-group", 25)(42, "div", 26)(43, "div", 27)(44, "div", 28);
        \u0275\u0275listener("click", function AboutYouComponent_Template_div_click_44_listener() {
          return ctx.onUpdateRadioBtn("1");
        })("keydown.enter", function AboutYouComponent_Template_div_keydown_enter_44_listener() {
          return ctx.onUpdateRadioBtn("1");
        });
        \u0275\u0275elementStart(45, "mat-radio-button", 29);
        \u0275\u0275listener("click", function AboutYouComponent_Template_mat_radio_button_click_45_listener() {
          return ctx.onUpdateRadioBtn("1");
        })("keydown.enter", function AboutYouComponent_Template_mat_radio_button_keydown_enter_45_listener() {
          return ctx.onUpdateRadioBtn("1");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 30);
        \u0275\u0275text(47, "Yes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 31)(49, "div", 28);
        \u0275\u0275listener("click", function AboutYouComponent_Template_div_click_49_listener() {
          return ctx.onUpdateRadioBtn("0");
        })("keydown.enter", function AboutYouComponent_Template_div_keydown_enter_49_listener() {
          return ctx.onUpdateRadioBtn("0");
        });
        \u0275\u0275elementStart(50, "mat-radio-button", 32);
        \u0275\u0275listener("click", function AboutYouComponent_Template_mat_radio_button_click_50_listener() {
          return ctx.onUpdateRadioBtn("0");
        })("keydown.enter", function AboutYouComponent_Template_mat_radio_button_keydown_enter_50_listener() {
          return ctx.onUpdateRadioBtn("0");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 30);
        \u0275\u0275text(52, "No");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 33)(54, "p", 34);
        \u0275\u0275text(55, " By continuing, you accept FindQo\u2019s Terms of Service & Privacy Policy. You'll receive an AI-based office space estimation, and your information will be sent to a dedicated estate agent for tailored insights and a precise estimation. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 35)(57, "div", 36)(58, "div", 37)(59, "div", 38)(60, "button", 39);
        \u0275\u0275listener("click", function AboutYouComponent_Template_button_click_60_listener() {
          return ctx.onNext();
        });
        \u0275\u0275text(61, " Generate Results ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 40)(63, "div", 41)(64, "div", 12)(65, "button", 42);
        \u0275\u0275listener("click", function AboutYouComponent_Template_button_click_65_listener() {
          return ctx.onNext();
        });
        \u0275\u0275text(66, " Generate Results ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.aboutYouForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.aboutYouForm.get("fullname").hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.aboutYouForm.get("fullname").hasError("minlength") || ctx.aboutYouForm.get("phone").hasError("maxlength"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.aboutYouForm.get("email").hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.aboutYouForm.get("email").hasError("email"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 22, "n3297"), "*");
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.aboutYouForm.get("phone").hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.aboutYouForm.get("phone").hasError("invalidPhone"));
        \u0275\u0275advance(7);
        \u0275\u0275classProp("chip-selected", ctx.aboutYouForm.getRawValue().isPersonValuation === "1");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.aboutYouForm.getRawValue().isPersonValuation === "1" ? "fg-prim-2" : "fg-general-5")("value", "1");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("chip-selected", ctx.aboutYouForm.getRawValue().isPersonValuation === "0");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.aboutYouForm.getRawValue().isPersonValuation === "0" ? "fg-prim-2" : "fg-general-5")("value", "0");
        \u0275\u0275advance(10);
        \u0275\u0275classProp("disabled", ctx.aboutYouForm.invalid);
        \u0275\u0275property("disabled", ctx.aboutYouForm.invalid);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("disabled", ctx.aboutYouForm.invalid);
        \u0275\u0275property("disabled", ctx.aboutYouForm.invalid);
      }
    }, dependencies: [NgClass, NgIf, MatButton, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, MatFormField, MatLabel, MatError, MatInput, MatRadioGroup, MatRadioButton, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding-bottom: 75px;\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-80px[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.w-70px[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checkbox-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about-you.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutYouComponent, [{
    type: Component,
    args: [{ selector: "findqo-about-you", standalone: false, template: `<div class="container px-3">
	<h2 class="heading-2 lh-28px fs-24px mt-4 mb-2">Office space insights based on locations and prices</h2>

	<p class="text-body-regular fg-general-5">
		Please provide your contact details so we can connect you with top office space experts in Ireland. Get AI-driving insights for offices in Ireland.
	</p>

	<form class="my-4" [formGroup]="aboutYouForm">
		<div class="row gap-3 justify-content-center">
			<div class="col-md-12">
				<mat-label class="mb-1 fg-general-4 text-body-regular">Your Name*</mat-label>

				<mat-form-field appearance="outline" subscriptSizing="dynamic">
					<input required formControlName="fullname" maxlength="80" minlength="3" placeholder="Your Name" matInput class="text-body-regular fg-general-5" />
					<mat-error *ngIf="aboutYouForm.get('fullname').hasError('required')" class="text-caption-regular fs-12px fw-400 lh-16px">
						This is a required field
					</mat-error>
					<mat-error
						*ngIf="aboutYouForm.get('fullname').hasError('minlength') || aboutYouForm.get('phone').hasError('maxlength')"
						class="text-small-12px-regular"
					>
						The name should be between 3 and 80 characters.
					</mat-error>
				</mat-form-field>
			</div>

			<div class="col-md-12">
				<mat-label class="mb-1 fg-general-4 text-body-regular">Your Email*</mat-label>

				<mat-form-field appearance="outline" subscriptSizing="dynamic">
					<input required formControlName="email" minlength="3" maxlength="80" placeholder="Your Email" matInput class="text-body-regular fg-general-5" />

					<mat-error *ngIf="aboutYouForm.get('email').hasError('required')" class="text-caption-regular fs-12px fw-400 lh-16px">
						This is a required field
					</mat-error>

					<mat-error *ngIf="aboutYouForm.get('email').hasError('email')" class="text-caption-regular fs-12px fw-400 lh-16px">
						Please enter valid email
					</mat-error>
				</mat-form-field>
			</div>

			<div class="col-12">
				<mat-label class="text-small-14px-regular lh-18px fg-general-4 mb-2 d-block" for="phoneControl">{{ 'n3297' | translations }}*</mat-label>

				<mat-form-field appearance="outline" subscriptSizing="dynamic">
					<div class="row mx-0 align-items-center">
						<div class="col-auto px-0">
							<div class="row mx-0 align-items-center w-70px">
								<div class="col-auto px-0 me-2">
									<img width="24px" height="18px" class="d-block rounded" alt="Country code flag" src="https://flagcdn.com/ie.svg" />
								</div>

								<div class="col px-0">
									<span class="fs-14px fg-general-5">+353</span>
								</div>
							</div>
						</div>

						<div class="col ps-2 pe-0 phone-number">
							<input required placeholder="Your Phone Number" formControlName="phone" matInput class="fs-14px" minlength="7" maxlength="15" type="tel" />
						</div>
					</div>

					<mat-error *ngIf="aboutYouForm.get('phone').hasError('required')" class="text-caption-regular">Your phone number is required</mat-error>
					<mat-error *ngIf="aboutYouForm.get('phone').hasError('invalidPhone')" class="text-caption-regular">
						{{ aboutYouForm.get('phone')?.errors['invalidPhone'] }}
					</mat-error>
				</mat-form-field>
			</div>

			<div class="col-12">
				<mat-label class="fg-general-4 text-small-14px-regular">Would you like tailored offers from a local agent?*</mat-label>
				<mat-radio-group formControlName="isPersonValuation">
					<div class="row mx-0 align-items-center mt-2">
						<div class="col-6 pe-1">
							<div
								(click)="onUpdateRadioBtn('1')"
								(keydown.enter)="onUpdateRadioBtn('1')"
								[class.chip-selected]="aboutYouForm.getRawValue().isPersonValuation === '1'"
								class="checkbox-list d-flex align-items-center py-4"
								tabindex="0"
							>
								<mat-radio-button
									[ngClass]="aboutYouForm.getRawValue().isPersonValuation === '1' ? 'fg-prim-2' : 'fg-general-5'"
									color="primary"
									[value]="'1'"
									class="ps-2 text-body-regular fg-general-2"
									(click)="onUpdateRadioBtn('1')"
									(keydown.enter)="onUpdateRadioBtn('1')"
								></mat-radio-button>
								<span class="text-body-regular ps-2">Yes</span>
							</div>
						</div>

						<div class="col-6 ps-1">
							<div
								(click)="onUpdateRadioBtn('0')"
								(keydown.enter)="onUpdateRadioBtn('0')"
								[class.chip-selected]="aboutYouForm.getRawValue().isPersonValuation === '0'"
								class="checkbox-list d-flex align-items-center py-4"
								tabindex="0"
							>
								<mat-radio-button
									[ngClass]="aboutYouForm.getRawValue().isPersonValuation === '0' ? 'fg-prim-2' : 'fg-general-5'"
									color="primary"
									[value]="'0'"
									class="ps-2 text-body-regular fg-general-4"
									(click)="onUpdateRadioBtn('0')"
									(keydown.enter)="onUpdateRadioBtn('0')"
								></mat-radio-button>
								<span class="text-body-regular ps-2">No</span>
							</div>
						</div>
					</div>
				</mat-radio-group>
			</div>

			<div class="col-12 mt-3">
				<p class="text-caption-regular fg-general-4">
					By continuing, you accept FindQo\u2019s Terms of Service & Privacy Policy. You'll receive an AI-based office space estimation, and your information will be
					sent to a dedicated estate agent for tailored insights and a precise estimation.
				</p>
			</div>
		</div>
	</form>

	<div class="row justify-content-center gap-3 mt-3">
		<!-- Desktop View (fixed position) -->
		<div class="w-100 position-fixed bottom-0 border-top bg-basic-1 d-none d-md-block">
			<div class="row mx-auto p-3 mw-550px justify-content-end align-items-center">
				<div class="col-auto w-125px">
					<button
						id="office-space-generate-btn"
						mat-flat-button
						class="text-small-14px-regular text-truncate h-40px"
						color="primary"
						[class.disabled]="aboutYouForm.invalid"
						[disabled]="aboutYouForm.invalid"
						(click)="onNext()"
						type="submit"
					>
						Generate Results
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile and Tablet View (scrollable) -->
		<div class="w-100 d-block d-md-none">
			<div class="row mx-auto p-lg-2 justify-content-end align-items-center">
				<div class="col-12">
					<button
						id="office-space-generate-btn"
						mat-flat-button
						class="text-small-14px-regular w-100 d-block"
						color="primary"
						[class.disabled]="aboutYouForm.invalid"
						[disabled]="aboutYouForm.invalid"
						(click)="onNext()"
						type="submit"
					>
						Generate Results
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/about-you/about-you.component.scss */\n.container {\n  max-width: 500px;\n  padding-bottom: 75px;\n}\n.w-35px {\n  width: 35px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-80px {\n  width: 80px;\n}\n.w-70px {\n  width: 70px;\n}\n.h-40px {\n  height: 40px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checkbox-list {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about-you.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: SnackService }, { type: PhoneNumberValidation }], { nextTab: [{
    type: Output
  }], prevTab: [{
    type: Output
  }], phoneNumber: [{
    type: ViewChild,
    args: ["phoneNumber"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutYouComponent, { className: "AboutYouComponent", filePath: "apps/findqo-ireland/src/app/feature/commercial-space-estimation/components/about-you/about-you.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/commercial-space-estimation.component.ts
var CommercialSpaceEstimationComponent = class _CommercialSpaceEstimationComponent {
  constructor(viewPort, propertyWorthState) {
    this.viewPort = viewPort;
    this.propertyWorthState = propertyWorthState;
    this.buttonType = ButtonType;
    this.selectedIndex = 0;
  }
  onPrevTab(event) {
    this.selectedIndex = event;
  }
  onTabChange(tabEvent) {
    this.selectedIndex = tabEvent.index;
  }
  onNextTab(data, index) {
    if (data && data["status"]) {
      if (data["form"] === "propertyInformation") {
        this.propertyInformation = data;
      } else if (data["form"] === "aboutYou") {
        this.aboutYou = data;
        this.formData = __spreadValues(__spreadValues({}, this.propertyInformation.value), this.aboutYou.value);
      }
      setTimeout(() => {
        this.selectedIndex = index;
      }, 0);
    }
  }
  static {
    this.\u0275fac = function CommercialSpaceEstimationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommercialSpaceEstimationComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(PropertyWorthState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommercialSpaceEstimationComponent, selectors: [["findqo-commercial-office-space-estimation-tool"]], standalone: false, decls: 10, vars: 13, consts: [[1, "property-worth-tab", 3, "ngClass"], [1, "my-3", "h-100", 3, "selectedTabChange", "selectedIndex"], ["label", "1. Office Info", 3, "disabled", "tabIndex"], [3, "nextTab"], ["label", "2. About You", 3, "tabIndex", "disabled"], [3, "prevTab", "nextTab"], ["label", "3. Estimation", 3, "tabIndex", "disabled"], [3, "prevTab", "formData"]], template: function CommercialSpaceEstimationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1);
        \u0275\u0275listener("selectedTabChange", function CommercialSpaceEstimationComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275elementStart(2, "mat-tab", 2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementStart(4, "findqo-commercial-property-information", 3);
        \u0275\u0275listener("nextTab", function CommercialSpaceEstimationComponent_Template_findqo_commercial_property_information_nextTab_4_listener($event) {
          return ctx.onNextTab($event, 1);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-tab", 4);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "findqo-about-you", 5);
        \u0275\u0275listener("prevTab", function CommercialSpaceEstimationComponent_Template_findqo_about_you_prevTab_7_listener() {
          return ctx.onPrevTab(0);
        })("nextTab", function CommercialSpaceEstimationComponent_Template_findqo_about_you_nextTab_7_listener($event) {
          return ctx.onNextTab($event, 2);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-tab", 6)(9, "findqo-valuation-calculated", 7);
        \u0275\u0275listener("prevTab", function CommercialSpaceEstimationComponent_Template_findqo_valuation_calculated_prevTab_9_listener($event) {
          return ctx.onPrevTab($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.viewPort.mobile ? "container-fluid p-0" : "container");
        \u0275\u0275advance();
        \u0275\u0275property("selectedIndex", ctx.selectedIndex);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 9, ctx.propertyWorthState.isProcessing$))("tabIndex", 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("tabIndex", 1)("disabled", !ctx.propertyInformation || \u0275\u0275pipeBind1(6, 11, ctx.propertyWorthState.isProcessing$));
        \u0275\u0275advance(3);
        \u0275\u0275property("tabIndex", 2)("disabled", !ctx.aboutYou);
        \u0275\u0275advance();
        \u0275\u0275property("formData", ctx.formData);
      }
    }, dependencies: [NgClass, MatTab, MatTabGroup, ValuationCalculatedComponent, PropertyInformationComponent, AboutYouComponent, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommercialSpaceEstimationComponent, [{
    type: Component,
    args: [{ selector: "findqo-commercial-office-space-estimation-tool", standalone: false, template: `<div class="property-worth-tab" [ngClass]="viewPort.mobile ? 'container-fluid p-0' : 'container'">
	<mat-tab-group (selectedTabChange)="onTabChange($event)" [selectedIndex]="selectedIndex" class="my-3 h-100">
		<mat-tab [disabled]="propertyWorthState.isProcessing$ | async" [tabIndex]="0" label="1. Office Info">
			<findqo-commercial-property-information (nextTab)="onNextTab($event, 1)"></findqo-commercial-property-information>
		</mat-tab>

		<mat-tab [tabIndex]="1" [disabled]="!propertyInformation || (propertyWorthState.isProcessing$ | async)" label="2. About You">
			<findqo-about-you (prevTab)="onPrevTab(0)" (nextTab)="onNextTab($event, 2)"></findqo-about-you>
		</mat-tab>

		<mat-tab [tabIndex]="2" [disabled]="!aboutYou" label="3. Estimation">
			<findqo-valuation-calculated (prevTab)="onPrevTab($event)" [formData]="formData"></findqo-valuation-calculated>
		</mat-tab>
	</mat-tab-group>
</div>
` }]
  }], () => [{ type: ViewportService }, { type: PropertyWorthState }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommercialSpaceEstimationComponent, { className: "CommercialSpaceEstimationComponent", filePath: "apps/findqo-ireland/src/app/feature/commercial-space-estimation/commercial-space-estimation.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/commercial-space-estimation-routing.module.ts
var routes = [{ path: "", component: CommercialSpaceEstimationComponent }];
var CommercialSpaceEstimationRoutingModule = class _CommercialSpaceEstimationRoutingModule {
  static {
    this.\u0275fac = function CommercialSpaceEstimationRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommercialSpaceEstimationRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommercialSpaceEstimationRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommercialSpaceEstimationRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/commercial-space-estimation.facade.ts
var CommercialSpaceEstimationFacade = class _CommercialSpaceEstimationFacade {
  constructor(filterApi, propertyWorth, sectionState) {
    this.filterApi = filterApi;
    this.propertyWorth = propertyWorth;
    this.sectionState = sectionState;
  }
  getSectionList() {
    return this.sectionState.getSortedAisleList$("properties-for-sale");
  }
  getFilterUnits() {
    return this.filterApi.getFilterValue("property-units", { aisle: "rent-commercial" });
  }
  postPropertyWorth(data) {
    return this.propertyWorth.postPropertyWorth(data);
  }
  getPurposeOptions() {
    return this.propertyWorth.getPurposeOptions();
  }
  postInPersonValuation(id) {
    return this.propertyWorth.postInPersonValuation(id);
  }
  static {
    this.\u0275fac = function CommercialSpaceEstimationFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommercialSpaceEstimationFacade)(\u0275\u0275inject(FiltersApi), \u0275\u0275inject(PropertyWorthsApi), \u0275\u0275inject(SectionsState));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommercialSpaceEstimationFacade, factory: _CommercialSpaceEstimationFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommercialSpaceEstimationFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: FiltersApi }, { type: PropertyWorthsApi }, { type: SectionsState }], null);
})();

// apps/findqo-ireland/src/app/feature/commercial-space-estimation/commercial-space-estimation.module.ts
var CommercialSpaceEstimationModule = class _CommercialSpaceEstimationModule {
  static {
    this.\u0275fac = function CommercialSpaceEstimationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommercialSpaceEstimationModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CommercialSpaceEstimationModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [CommercialSpaceEstimationFacade], imports: [
      CommonModule,
      CommercialSpaceEstimationRoutingModule,
      SharedModule,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatCheckboxModule,
      MatSelectModule,
      MatInputModule,
      ButtonModule,
      MatRadioModule,
      MatDatepickerModule,
      NgxSkeletonLoaderModule,
      FiltersFormSkeletonLoaderModule,
      MatProgressSpinnerModule,
      ValuationCalculatedComponent,
      SkeletonLoaderComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommercialSpaceEstimationModule, [{
    type: NgModule,
    args: [{
      declarations: [CommercialSpaceEstimationComponent, PropertyInformationComponent, AboutYouComponent],
      imports: [
        CommonModule,
        CommercialSpaceEstimationRoutingModule,
        SharedModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        ButtonModule,
        MatRadioModule,
        MatDatepickerModule,
        NgxSkeletonLoaderModule,
        FiltersFormSkeletonLoaderModule,
        MatProgressSpinnerModule,
        ValuationCalculatedComponent,
        SkeletonLoaderComponent
      ],
      providers: [CommercialSpaceEstimationFacade]
    }]
  }], null, null);
})();
export {
  CommercialSpaceEstimationModule
};
//# sourceMappingURL=chunk-DTWYBDNU.js.map
