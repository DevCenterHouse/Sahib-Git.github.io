import {
  PaginationComponent,
  PaginationModule
} from "./chunk-3PMSSHKP.js";
import {
  PropertyAlertsFacade
} from "./chunk-VPQFLCQL.js";
import {
  ButtonComponent,
  ButtonModule,
  ButtonType,
  IconType,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogRef,
  MatIconButton,
  RouterModule,
  SharedModule,
  SnackService,
  TranslationsPipe,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  NgModule,
  setClassMetadata,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/property-alerts/components/property-alerts-dialog/property-alerts-dialog.component.ts
var PropertyAlertsDialogComponent = class _PropertyAlertsDialogComponent {
  constructor(data, dialogRef, propertAlert) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.propertAlert = propertAlert;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  deleteAlert() {
    this.propertAlert.deleteAlert(this.data.id).subscribe({
      next: () => this.dialogRef.close({ status: true, alertId: this.data.id }),
      error: () => this.dialogRef.close({ status: false })
    });
  }
  static {
    this.\u0275fac = function PropertyAlertsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertsDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(PropertyAlertsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyAlertsDialogComponent, selectors: [["findqo-property-alerts-dialog"]], standalone: false, features: [\u0275\u0275ProvidersFeature([PropertyAlertsFacade])], decls: 18, vars: 4, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", "mat-mdc-icon-button", 3, "click"], [1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], ["mat-button", "", "disableRipple", "", 1, "cancel-btn", "w-100", 3, "click"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function PropertyAlertsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4, "Remove this alert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "button", 4);
        \u0275\u0275listener("click", function PropertyAlertsDialogComponent_Template_button_click_6_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementStart(7, "mat-icon", 5);
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11, "You will no longer receive any alerts on this search.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "button", 10);
        \u0275\u0275listener("click", function PropertyAlertsDialogComponent_Template_button_click_14_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275text(15, "No");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "findqo-button", 11);
        \u0275\u0275listener("clicked", function PropertyAlertsDialogComponent_Template_findqo_button_clicked_17_listener() {
          return ctx.deleteAlert();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", "Yes, Remove")("isStopPropagation", true)("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, dependencies: [ButtonComponent, MatIcon, MatButton, MatIconButton], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n  border-radius: 4px;\n  background: white;\n}\n@media (max-width: 576px) {\n  .cancel-btn[_ngcontent-%COMP%] {\n    height: 35px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-alerts-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertsDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-property-alerts-dialog", providers: [PropertyAlertsFacade], standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">Remove this alert</h4>
		</div>
		<div class="col-auto px-0">
			<button (click)="onCloseDialog()" mat-icon-button mat-dialog-close class="close-btn mat-mdc-icon-button">
				<mat-icon class="justify-content-center">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="text-body-regular fg-general-4 mb-3">You will no longer receive any alerts on this search.</p>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<button mat-button disableRipple (click)="onCloseDialog()" class="cancel-btn w-100">No</button>
		</div>

		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'Yes, Remove'"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
				(clicked)="deleteAlert()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/property-alerts/components/property-alerts-dialog/property-alerts-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n.cancel-btn {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n  border-radius: 4px;\n  background: white;\n}\n@media (max-width: 576px) {\n  .cancel-btn {\n    height: 35px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-alerts-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: PropertyAlertsFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyAlertsDialogComponent, { className: "PropertyAlertsDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/property-alerts/components/property-alerts-dialog/property-alerts-dialog.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/property-alerts/property-alerts.component.ts
function PropertyAlertsComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "p", 13);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "findqo-button", 14);
    \u0275\u0275listener("clicked", function PropertyAlertsComponent_ng_container_4_div_1_Template_findqo_button_clicked_16_listener() {
      const elem_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRemoveAlerts(elem_r2));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const elem_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((elem_r2 == null ? null : elem_r2.aisle == null ? null : elem_r2.aisle.reference) == "rent-commercial" ? \u0275\u0275pipeBind1(6, 9, "n4109") : (elem_r2 == null ? null : elem_r2.aisle == null ? null : elem_r2.aisle.reference) == "sell-residential" ? \u0275\u0275pipeBind1(7, 11, "n4107") : (elem_r2 == null ? null : elem_r2.aisle == null ? null : elem_r2.aisle.reference) == "sell-commercial" ? \u0275\u0275pipeBind1(8, 13, "n4108") : (elem_r2 == null ? null : elem_r2.aisle == null ? null : elem_r2.aisle.reference) == "share-residential" ? \u0275\u0275pipeBind1(9, 15, "n195") : elem_r2 == null ? null : elem_r2.aisle == null ? null : elem_r2.aisle.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Location: ", elem_r2 == null ? null : elem_r2.county == null ? null : elem_r2.county.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (ctx_r2.viewport == null ? null : ctx_r2.viewport.desktop) ? "Created on:" : "", " ", (elem_r2 == null ? null : elem_r2.createdAt) ? \u0275\u0275pipeBind2(15, 17, +(elem_r2 == null ? null : elem_r2.createdAt) * 1e3, "dd-MMM-yyyy") : "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r2.buttonType.BASIC)("label", "Remove")("iconPrefix", "delete")("isStopPropagation", true)("btnClass", "fg-general-4 fs-12px");
  }
}
function PropertyAlertsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PropertyAlertsComponent_ng_container_4_div_1_Template, 17, 20, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275element(3, "findqo-pagination", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.alertsList);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageMetaData", ctx_r2.alertsMetaData);
  }
}
function PropertyAlertsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275element(2, "img", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 17);
    \u0275\u0275text(4, "No Properties Alerts yet!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Start adding your searches to property alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var PropertyAlertsComponent = class _PropertyAlertsComponent {
  constructor(dialog, propertAlert, snackService, viewport) {
    this.dialog = dialog;
    this.propertAlert = propertAlert;
    this.snackService = snackService;
    this.viewport = viewport;
    this.buttonType = ButtonType;
    this.alertsList = [];
    this.isLoaded = false;
  }
  onRemoveAlerts(elem) {
    this.dialog.open(PropertyAlertsDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: elem
    }).afterClosed().subscribe({
      next: (res) => {
        if (res?.["status"]) {
          this.alertsList = this.alertsList.filter((resp) => resp.id !== res.alertId);
          this.snackService.open({
            data: { message: "Property alert removed successfully.", type: "success" },
            panelClass: "snackbar-success"
          });
        }
      }
    });
  }
  getAlertsList(page = 1, perPage = 10) {
    this.propertAlert.getPropertyAlerts({ page, perPage }).subscribe({
      next: (res) => {
        this.isLoaded = true;
        this.alertsList = res["data"];
        this.alertsMetaData = res["meta"];
      },
      error: () => {
        this.isLoaded = false;
        this.snackService.open({
          data: {
            message: "Something went wrong",
            type: "error"
          },
          panelClass: "snackbar-error"
        });
      }
    });
  }
  ngOnInit() {
    this.getAlertsList();
  }
  static {
    this.\u0275fac = function PropertyAlertsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertsComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PropertyAlertsFacade), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(ViewportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyAlertsComponent, selectors: [["findqo-property-alerts"]], standalone: false, decls: 6, vars: 2, consts: [[1, "bg-basic-1", "border-bottom", "mx-3"], [1, "container", "px-0", "my-3", "my-xl-4"], [1, "text-title-20px-regular", "fg-general-5"], [4, "ngIf"], ["class", "mx-3", 4, "ngFor", "ngForOf"], [1, "mb-custom", "mt-3"], [3, "pageMetaData"], [1, "mx-3"], [1, "container", "border", "rounded", "px-3", "mt-3", "h-74px"], [1, "row", "justify-content-between", "py-3"], [1, "col-auto"], [1, "heading-5-medium", "fg-general-5"], [1, "text-body-small", "lh-20px", "fg-general-5", "fs-14px"], [1, "text-body-small", "fg-general-4", "fs-12px"], [1, "float-end", 3, "clicked", "btnType", "label", "iconPrefix", "isStopPropagation", "btnClass"], [1, "text-center", "mx-auto"], ["src", "assets/images/property-alert/alert-no-records.svg", "alt", "No favorites ads", 1, "img-fluid", "mt-5"], [1, "heading-3-regular", "fg-general-5", "text-center", "mt-4"], [1, "text-body-regular", "fg-general-4", "text-center", "mt-1"]], template: function PropertyAlertsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3, "My Property Alerts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, PropertyAlertsComponent_ng_container_4_Template, 4, 2, "ng-container", 3)(5, PropertyAlertsComponent_ng_container_5_Template, 7, 0, "ng-container", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isLoaded);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.alertsList.length === 0 && ctx.isLoaded);
      }
    }, dependencies: [NgForOf, NgIf, ButtonComponent, PaginationComponent, DatePipe, TranslationsPipe], styles: ["\n\n.mb-custom[_ngcontent-%COMP%] {\n  margin-bottom: 5rem !important;\n}\n.h-74px[_ngcontent-%COMP%] {\n  height: 74px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-alerts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertsComponent, [{
    type: Component,
    args: [{ selector: "findqo-property-alerts", standalone: false, template: `<div class="bg-basic-1 border-bottom mx-3">
	<div class="container px-0 my-3 my-xl-4">
		<h3 class="text-title-20px-regular fg-general-5">My Property Alerts</h3>
	</div>
</div>

<ng-container *ngIf="isLoaded">
	<div class="mx-3" *ngFor="let elem of alertsList">
		<div class="container border rounded px-3 mt-3 h-74px">
			<div class="row justify-content-between py-3">
				<div class="col-auto">
					<p class="heading-5-medium fg-general-5">{{ elem?.aisle?.reference=='rent-commercial'?('n4109' | translations) :
                        elem?.aisle?.reference=='sell-residential'?('n4107' | translations) :elem?.aisle?.reference=='sell-commercial'?('n4108' | translations) :
                        elem?.aisle?.reference=='share-residential'?('n195' | translations) :elem?.aisle?.name }}</p> 	
					<p class="text-body-small lh-20px fg-general-5 fs-14px">Location: {{ elem?.county?.name }}</p>
				</div>

				<div class="col-auto">
					<p class="text-body-small fg-general-4 fs-12px">
						{{ viewport?.desktop ? 'Created on:' : '' }} {{ elem?.createdAt ? (+elem?.createdAt * 1000 | date: 'dd-MMM-yyyy') : '-' }}
					</p>

					<findqo-button
						[btnType]="buttonType.BASIC"
						[label]="'Remove'"
						[iconPrefix]="'delete'"
						[isStopPropagation]="true"
						[btnClass]="'fg-general-4 fs-12px'"
						(clicked)="onRemoveAlerts(elem)"
						class="float-end"
					></findqo-button>
				</div>
			</div>
		</div>
	</div>
	<div class="mb-custom mt-3">
		<findqo-pagination [pageMetaData]="alertsMetaData"></findqo-pagination>
	</div>
</ng-container>

<ng-container *ngIf="alertsList.length === 0 && isLoaded">
	<div class="text-center mx-auto">
		<img src="assets/images/property-alert/alert-no-records.svg" alt="No favorites ads" class="img-fluid mt-5" />
	</div>

	<h4 class="heading-3-regular fg-general-5 text-center mt-4">No Properties Alerts yet!</h4>
	<p class="text-body-regular fg-general-4 text-center mt-1">Start adding your searches to property alert</p>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/property-alerts/property-alerts.component.scss */\n.mb-custom {\n  margin-bottom: 5rem !important;\n}\n.h-74px {\n  height: 74px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-alerts.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: PropertyAlertsFacade }, { type: SnackService }, { type: ViewportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyAlertsComponent, { className: "PropertyAlertsComponent", filePath: "apps/findqo-ireland/src/app/feature/property-alerts/property-alerts.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/property-alerts/property-alerts-routing.module.ts
var routes = [{ path: "", component: PropertyAlertsComponent }];
var PropertyAlertsRoutingModule = class _PropertyAlertsRoutingModule {
  static {
    this.\u0275fac = function PropertyAlertsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PropertyAlertsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/property-alerts/property-alerts.module.ts
var PropertyAlertsModule = class _PropertyAlertsModule {
  static {
    this.\u0275fac = function PropertyAlertsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PropertyAlertsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [PropertyAlertsFacade, TitleCasePipe], imports: [CommonModule, PropertyAlertsRoutingModule, ButtonModule, MatIconModule, PaginationModule, SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertsModule, [{
    type: NgModule,
    args: [{
      declarations: [PropertyAlertsComponent, PropertyAlertsDialogComponent],
      imports: [CommonModule, PropertyAlertsRoutingModule, ButtonModule, MatIconModule, PaginationModule, SharedModule],
      providers: [PropertyAlertsFacade, TitleCasePipe]
    }]
  }], null, null);
})();
export {
  PropertyAlertsModule
};
//# sourceMappingURL=chunk-47UJ3LLB.js.map
