import {
  PropertyAlertsFacade
} from "./chunk-VPQFLCQL.js";
import {
  MatCheckbox
} from "./chunk-GOW5C4RI.js";
import {
  MatSelect
} from "./chunk-VZJAPMN6.js";
import {
  ButtonComponent,
  ButtonType,
  FiltersApi,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatIconButton,
  MatOption,
  NgControlStatus,
  NgControlStatusGroup,
  RouterLink,
  SnackService,
  Validators,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  Component,
  Inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/filters/components/property-alert-dialog/property-alert-dialog.component.ts
function PropertyAlertDialogComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const county_r1 = ctx.$implicit;
    \u0275\u0275property("value", county_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(county_r1.name);
  }
}
var PropertyAlertDialogComponent = class _PropertyAlertDialogComponent {
  constructor(modalData, dialogRef, filterApi, fb, propertAlert, snackService) {
    this.modalData = modalData;
    this.dialogRef = dialogRef;
    this.filterApi = filterApi;
    this.fb = fb;
    this.propertAlert = propertAlert;
    this.snackService = snackService;
    this.buttonType = ButtonType;
    this.countyList = [];
    this.propertyAlertForm = this.fb.group({
      countyId: ["", [Validators.required]],
      section: ["", [Validators.required]],
      emailAlert: [true, [Validators.required]],
      aisle: ["", [Validators.required]]
    });
  }
  onDismiss() {
    this.dialogRef.close(false);
  }
  onSubmit() {
    if (this.propertyAlertForm.invalid) {
      return;
    }
    this.propertAlert.addAlert(this.propertyAlertForm.value).subscribe({
      next: () => {
        this.snackService.open({ data: { message: "Success! Property Alert enabled for this search.", type: "success" }, panelClass: ["snackbar-success"] });
        this.dialogRef?.close();
      },
      error: (e) => {
        this.snackService.open({
          data: {
            message: e?.error?.error?.id === "propertyAlertAlreadyExists" ? "Property Alert already exists for this search." : e?.error?.error?.errors[0]?.messages[0],
            type: e?.error?.error?.id === "propertyAlertAlreadyExists" ? "info" : "error"
          },
          panelClass: "snackbar-error"
        });
      }
    });
  }
  ngOnInit() {
    this.filterApi.getCountyList({}).subscribe((res) => {
      if (res && res?.["all"]) {
        this.countyList = res?.["all"];
        if (this.modalData.location.county) {
          this.propertyAlertForm.patchValue({
            countyId: this.countyList.find((res2) => res2.name.trim().toLowerCase() === this.modalData.location.county.trim().toLowerCase())?.id
          });
        }
        if (this.modalData.location.countyReference) {
          this.propertyAlertForm.patchValue({
            countyId: this.countyList.find((res2) => res2.reference.trim().toLowerCase() === this.modalData.location.countyReference.trim().toLowerCase())?.id
          });
        }
      }
    });
    this.propertyAlertForm.patchValue({
      section: this.modalData.section,
      aisle: this.modalData.aisle
    });
  }
  static {
    this.\u0275fac = function PropertyAlertDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FiltersApi), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PropertyAlertsFacade), \u0275\u0275directiveInject(SnackService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyAlertDialogComponent, selectors: [["findqo-property-alert-dialog"]], standalone: false, decls: 27, vars: 4, consts: [[1, "container", "p-0"], [3, "ngSubmit", "formGroup"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "row", "mx-0", "px-3", "mt-3", "justify-content-between", "align-items-center"], [1, "col-12", "px-0"], [1, "text-body-regular", "fg-general-4", "mt-4"], ["appearance", "outline", 1, "text-body-regular", "w-100", "no-subscript"], ["formControlName", "countyId", 3, "placeholder"], [3, "value"], ["mat-dialog-close", "", "routerLink", "property-alerts", 1, "text-decoration-underline", "fg-general-3", "fs-12px", "lh-16px"], [1, "row", "my-3", "mx-0", "px-3", "justify-content-between", "align-items-center"], ["formControlName", "emailAlert", "color", "primary"], [1, "fs-12px", "fw-400", "lh-18px", "fg-general-5"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], ["type", "submit", 1, "w-100", "d-flex", "flex-column", 3, "isDisabled", "label"]], template: function PropertyAlertDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function PropertyAlertDialogComponent_Template_form_ngSubmit_1_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        \u0275\u0275text(5, "Property Alert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
        \u0275\u0275text(12, "Select the County");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 10)(14, "mat-select", 11);
        \u0275\u0275repeaterCreate(15, PropertyAlertDialogComponent_For_16_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "a", 13);
        \u0275\u0275text(18, "Manage Email Alerts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 8)(21, "mat-checkbox", 15)(22, "span", 16);
        \u0275\u0275text(23, "Email me when ads match this search");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 17)(25, "div", 18);
        \u0275\u0275element(26, "findqo-button", 19);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.propertyAlertForm);
        \u0275\u0275advance(13);
        \u0275\u0275property("placeholder", "Select the County");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.countyList);
        \u0275\u0275advance(11);
        \u0275\u0275property("isDisabled", !ctx.propertyAlertForm.getRawValue().emailAlert || ctx.propertyAlertForm.invalid)("label", "Enable property listing alert");
      }
    }, dependencies: [MatIconButton, MatIcon, RouterLink, ButtonComponent, MatDialogClose, MatFormField, MatSelect, MatOption, MatCheckbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 72px;\n  border-top: 1px solid var(--neutral-2);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-alert-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-property-alert-dialog", standalone: false, template: `<div class="container p-0">
	<form [formGroup]="propertyAlertForm" (ngSubmit)="onSubmit()">
		<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
			<div class="col-auto px-0">
				<h4 class="heading-4-regular fg-general-5 m-0">Property Alert</h4>
			</div>
			<div class="col-auto px-0">
				<button mat-icon-button mat-dialog-close class="close-btn">
					<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
				</button>
			</div>
		</div>

		<div class="row mx-0 px-3 mt-3 justify-content-between align-items-center">
			<div class="col-12 px-0">
				<span class="text-body-regular fg-general-4 mt-4">Select the County</span>

				<mat-form-field appearance="outline" class="text-body-regular w-100 no-subscript">
					<mat-select formControlName="countyId" [placeholder]="'Select the County'">
						@for (county of countyList; track county) {
							<mat-option [value]="county.id">{{ county.name }}</mat-option>
						}
					</mat-select>
				</mat-form-field>
				<a class="text-decoration-underline fg-general-3 fs-12px lh-16px" mat-dialog-close routerLink="property-alerts">Manage Email Alerts</a>
			</div>
		</div>

		<div class="row my-3 mx-0 px-3 justify-content-between align-items-center">
			<div class="col-12 px-0">
				<mat-checkbox formControlName="emailAlert" color="primary">
					<span class="fs-12px fw-400 lh-18px fg-general-5">Email me when ads match this search</span>
				</mat-checkbox>
			</div>
		</div>

		<div class="row mx-0 gap-3 p-3 dialog-actions">
			<div class="col px-0">
				<findqo-button
					[isDisabled]="!propertyAlertForm.getRawValue().emailAlert || propertyAlertForm.invalid"
					type="submit"
					class="w-100 d-flex flex-column"
					[label]="'Enable property listing alert'"
				></findqo-button>
			</div>
		</div>
	</form>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/filters/components/property-alert-dialog/property-alert-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 72px;\n  border-top: 1px solid var(--neutral-2);\n}\n.cancel-btn {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-alert-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: FiltersApi }, { type: FormBuilder }, { type: PropertyAlertsFacade }, { type: SnackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyAlertDialogComponent, { className: "PropertyAlertDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/filters/components/property-alert-dialog/property-alert-dialog.component.ts", lineNumber: 15 });
})();

export {
  PropertyAlertDialogComponent
};
//# sourceMappingURL=chunk-THEU3YGZ.js.map
