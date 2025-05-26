import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-ZRK6DKBO.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  AppEmailValidator,
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatList,
  MatListItem,
  MatListModule,
  MatOption,
  MyProfileFacade,
  NgControlStatus,
  ReactiveFormsModule,
  SharedModule,
  TimeSlotFieldKeys,
  TimeZoneNamePipe,
  TimeZoneTimePipe,
  TranslationsPipe,
  Validators
} from "./chunk-DMGY2MF4.js";
import {
  COMMA,
  ENTER,
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  __spreadProps,
  __spreadValues,
  debounceTime,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/components/time-zone-dialog/time-zone-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.zone;
var _forTrack1 = ($index, $item) => $item.id;
function TimeZoneDialogComponent_For_16_mat_list_item_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.zone);
  }
}
function TimeZoneDialogComponent_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 13);
    \u0275\u0275listener("click", function TimeZoneDialogComponent_For_16_For_2_Template_mat_list_item_click_0_listener() {
      const zone_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.dialogRef.close(zone_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "timeZoneTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", zone_r3.name, " (", \u0275\u0275pipeBind1(2, 2, zone_r3.iana), ") ");
  }
}
function TimeZoneDialogComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TimeZoneDialogComponent_For_16_mat_list_item_0_Template, 2, 1, "mat-list-item", 10);
    \u0275\u0275repeaterCreate(1, TimeZoneDialogComponent_For_16_For_2_Template, 3, 4, "mat-list-item", 11, _forTrack1);
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275property("ngIf", data_r1.timeZones.length);
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r1.timeZones);
  }
}
var TimeZoneDialogComponent = class _TimeZoneDialogComponent {
  constructor(dialogData, destroyService, dialogRef) {
    this.dialogData = dialogData;
    this.destroyService = destroyService;
    this.dialogRef = dialogRef;
    this.searchControl = new FormControl("");
    this.filteredZones = [...dialogData];
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500), takeUntil(this.destroyService)).subscribe((value) => {
      if (!value) {
        this.filteredZones = this.dialogData;
        return;
      }
      this.filteredZones = this.dialogData.map((zone) => __spreadProps(__spreadValues({}, zone), {
        timeZones: zone.timeZones.filter((tz) => tz.name?.toLowerCase().includes(value?.toLocaleLowerCase()))
      }));
    });
  }
  static {
    this.\u0275fac = function TimeZoneDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeZoneDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeZoneDialogComponent, selectors: [["findqo-time-zone-dialog"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 17, vars: 7, consts: [[1, "container", "px-0", "w-100"], [1, "row", "mx-0", "justify-content-between", "align-items-center", "dialog-header", "p-3", "position-sticky", "top-0", "bg-basic-1", "z-index-1"], [1, "col-auto", "px-0"], [1, "text-body-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-2", "mx-auto", "fs-20px", "fw-700"], [1, "p-3", "border-bottom", "border-top", "search-container", "z-index-1", "bg-basic-1"], ["appearance", "outline", 1, "no-subscript"], ["type", "text", "matInput", "", 3, "formControl", "placeholder"], ["role", "list", 1, "p-0"], ["role", "listitem", "disabled", "", "class", "bg-general-1 fg-general-3", 4, "ngIf"], ["role", "listitem", 1, "text-body-regular", "fg-general-5", "border-bottom"], ["role", "listitem", "disabled", "", 1, "bg-general-1", "fg-general-3"], ["role", "listitem", 1, "text-body-regular", "fg-general-5", "border-bottom", 3, "click"]], template: function TimeZoneDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4)(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "mat-form-field", 7);
        \u0275\u0275element(12, "input", 8);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-list", 9);
        \u0275\u0275repeaterCreate(15, TimeZoneDialogComponent_For_16_Template, 3, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "n3913"));
        \u0275\u0275advance(8);
        \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(13, 5, "n681"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filteredZones);
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, MatFormField, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatInput, MatDialogClose, MatList, MatListItem, TranslationsPipe, TimeZoneTimePipe], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 59px !important;\n}\n.z-index-1[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-zone-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeZoneDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-time-zone-dialog", providers: [DestroyService], standalone: false, template: `<div class="container px-0 w-100">
	<div class="row mx-0 justify-content-between align-items-center dialog-header p-3 position-sticky top-0 bg-basic-1 z-index-1">
		<div class="col-auto px-0">
			<h4 class="text-body-regular fg-general-5 m-0">{{ 'n3913' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-2 mx-auto fs-20px fw-700">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3 border-bottom border-top search-container z-index-1 bg-basic-1">
		<mat-form-field appearance="outline" class="no-subscript">
			<input type="text" [formControl]="searchControl" matInput [placeholder]="'n681' | translations" />
		</mat-form-field>
	</div>

	<mat-list role="list" class="p-0">
		@for (data of filteredZones; track data.zone) {
			<mat-list-item role="listitem" *ngIf="data.timeZones.length" disabled class="bg-general-1 fg-general-3">{{ data.zone }}</mat-list-item>
			@for (zone of data.timeZones; track zone.id) {
				<mat-list-item role="listitem" (click)="dialogRef.close(zone)" class="text-body-regular fg-general-5 border-bottom">
					{{ zone.name }} ({{ zone.iana | timeZoneTime }})
				</mat-list-item>
			}
		}
	</mat-list>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/components/time-zone-dialog/time-zone-dialog.component.scss */\n.search-container {\n  position: sticky;\n  top: 59px !important;\n}\n.z-index-1 {\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-zone-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: DestroyService }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeZoneDialogComponent, { className: "TimeZoneDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/components/time-zone-dialog/time-zone-dialog.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/time-zone.component.ts
var _forTrack02 = ($index, $item) => $item.zone;
var _forTrack12 = ($index, $item) => $item.id;
function TimeZoneComponent_For_14_mat_option_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r2.zone);
  }
}
function TimeZoneComponent_For_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "timeZoneTime");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r3 = ctx.$implicit;
    \u0275\u0275property("value", zone_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", zone_r3.name, " (", \u0275\u0275pipeBind1(2, 3, zone_r3.iana), ")");
  }
}
function TimeZoneComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TimeZoneComponent_For_14_mat_option_0_Template, 2, 1, "mat-option", 12);
    \u0275\u0275repeaterCreate(1, TimeZoneComponent_For_14_For_2_Template, 3, 5, "mat-option", 13, _forTrack12);
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275property("ngIf", data_r2.timeZones.length);
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r2.timeZones);
  }
}
var TimeZoneComponent = class _TimeZoneComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.cardBorder = "no-border";
    this.zoneChange = new EventEmitter();
    this.timeZoneControl = new FormControl("", Validators.required);
    this.searchControl = new FormControl("");
  }
  set timeZones(timeZonesData) {
    this.filteredZones = timeZonesData;
    this.timeZonesData = timeZonesData;
  }
  set disabled(disable) {
    if (disable) {
      this.timeZoneControl.disable();
    }
  }
  set selectedZoneId(id) {
    this.timeZoneControl.patchValue(id);
  }
  handleZoneChange($event) {
    this.timeZoneControl.patchValue($event.value);
    this.zoneChange.emit({ key: TimeSlotFieldKeys.TIME_ZONE, value: $event.value });
  }
  openDialog() {
    this.dialog.open(TimeZoneDialogComponent, {
      data: this.timeZonesData,
      width: "100%",
      height: "100%",
      maxWidth: "100vw",
      panelClass: ["full-screen"]
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.handleZoneChange({ value: res.id });
      }
    });
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      if (!value) {
        this.filteredZones = this.timeZonesData;
        return;
      }
      this.filteredZones = this.timeZonesData.map((zone) => __spreadProps(__spreadValues({}, zone), {
        timeZones: zone.timeZones.filter((tz) => tz.name?.toLowerCase().includes(value?.toLocaleLowerCase()))
      }));
    });
  }
  static {
    this.\u0275fac = function TimeZoneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeZoneComponent)(\u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeZoneComponent, selectors: [["findqo-time-zone"]], inputs: { timeZones: "timeZones", cardBorder: "cardBorder", disabled: "disabled", selectedZoneId: "selectedZoneId" }, outputs: { zoneChange: "zoneChange" }, standalone: false, decls: 22, vars: 15, consts: [["timeZone", ""], ["appearance", "outline", 1, "no-subscript", "time-zone-field", "d-none", "d-lg-block", 3, "ngClass"], ["disableRipple", "", 1, "w-auto", 3, "selectionChange", "closed", "disabled", "formControl"], [1, "d-flex", "align-items-center"], [1, "fg-general-3", "fs-18px"], [1, "px-3", "pb-3", "pt-2", "sticky-top"], ["appearance", "outline", 1, "no-subscript"], ["type", "text", "matInput", "", 3, "formControl", "placeholder"], [1, "d-none", 3, "value"], ["mat-button", "", 1, "time-zone-field", "text-left-button", "d-lg-none", "text-body-regular", "fg-general-5", "justify-content-between", "px-0", 3, "click"], [1, "fg-general-3", "fs-18px", "pe-2"], ["iconPositionEnd", "", 1, "fs-24px", "pe-4", "fg-general-3"], ["disabled", "", "class", "bg-general-1 fg-general-3", 4, "ngIf"], [3, "value"], ["disabled", "", 1, "bg-general-1", "fg-general-3"]], template: function TimeZoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 2, 0);
        \u0275\u0275listener("selectionChange", function TimeZoneComponent_Template_mat_select_selectionChange_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleZoneChange($event));
        })("closed", function TimeZoneComponent_Template_mat_select_closed_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchControl.reset());
        });
        \u0275\u0275elementStart(3, "mat-select-trigger", 3)(4, "mat-icon", 4);
        \u0275\u0275text(5, "access_time");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "timeZoneName");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "mat-form-field", 6);
        \u0275\u0275element(10, "input", 7);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "mat-option", 8);
        \u0275\u0275repeaterCreate(13, TimeZoneComponent_For_14_Template, 3, 1, null, null, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "button", 9);
        \u0275\u0275listener("click", function TimeZoneComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openDialog());
        });
        \u0275\u0275elementStart(16, "mat-icon", 10);
        \u0275\u0275text(17, "access_time");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "timeZoneName");
        \u0275\u0275elementStart(20, "mat-icon", 11);
        \u0275\u0275text(21, "arrow_drop_down");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.cardBorder);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.disabled)("formControl", ctx.timeZoneControl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, ctx.timeZoneControl.value, ctx.timeZonesData), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(11, 10, "n681"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filteredZones);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 12, ctx.timeZoneControl.value, ctx.timeZonesData), " ");
      }
    }, dependencies: [NgClass, NgIf, MatButton, MatIcon, MatInput, MatFormField, MatSelect, MatSelectTrigger, MatOption, DefaultValueAccessor, NgControlStatus, FormControlDirective, TranslationsPipe, TimeZoneNamePipe, TimeZoneTimePipe], styles: ["\n\n.time-zone-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .time-zone-field[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n.sticky-top[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -8px !important;\n  z-index: 10 !important;\n  background-color: var(--basic-1) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-zone.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeZoneComponent, [{
    type: Component,
    args: [{ selector: "findqo-time-zone", standalone: false, template: `<mat-form-field class="no-subscript time-zone-field d-none d-lg-block" [ngClass]="cardBorder" appearance="outline">
	<mat-select
		[disabled]="disabled"
		class="w-auto"
		disableRipple
		#timeZone
		[formControl]="timeZoneControl"
		(selectionChange)="handleZoneChange($event)"
		(closed)="searchControl.reset()"
	>
		<mat-select-trigger class="d-flex align-items-center">
			<mat-icon class="fg-general-3 fs-18px">access_time</mat-icon>
			{{ timeZoneControl.value | timeZoneName: timeZonesData }}
		</mat-select-trigger>

		<div class="px-3 pb-3 pt-2 sticky-top">
			<mat-form-field appearance="outline" class="no-subscript">
				<input type="text" [formControl]="searchControl" matInput [placeholder]="'n681' | translations" />
			</mat-form-field>
		</div>

		<mat-option [value]="" class="d-none"></mat-option>
		@for (data of filteredZones; track data.zone) {
			<mat-option *ngIf="data.timeZones.length" disabled class="bg-general-1 fg-general-3">{{ data.zone }}</mat-option>

			@for (zone of data.timeZones; track zone.id) {
				<mat-option [value]="zone.id">{{ zone.name }} ({{ zone.iana | timeZoneTime }})</mat-option>
			}
		}
	</mat-select>
</mat-form-field>

<button mat-button class="time-zone-field text-left-button d-lg-none text-body-regular fg-general-5 justify-content-between px-0" (click)="openDialog()">
	<mat-icon class="fg-general-3 fs-18px pe-2">access_time</mat-icon>
	{{ timeZoneControl.value | timeZoneName: timeZonesData }}
	<mat-icon iconPositionEnd class="fs-24px pe-4 fg-general-3">arrow_drop_down</mat-icon>
</button>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/time-zone.component.scss */\n.time-zone-field {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .time-zone-field {\n    width: 75%;\n  }\n}\n.sticky-top {\n  position: sticky;\n  top: -8px !important;\n  z-index: 10 !important;\n  background-color: var(--basic-1) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-zone.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }], { timeZones: [{
    type: Input
  }], cardBorder: [{
    type: Input
  }], disabled: [{
    type: Input
  }], selectedZoneId: [{
    type: Input
  }], zoneChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeZoneComponent, { className: "TimeZoneComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/time-zone.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/components/time-zone-dialog/time-zone-dialog.module.ts
var TimeZoneDialogModule = class _TimeZoneDialogModule {
  static {
    this.\u0275fac = function TimeZoneDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeZoneDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TimeZoneDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatListModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeZoneDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [TimeZoneDialogComponent],
      imports: [SharedModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatListModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-zone/time-zone.module.ts
var TimeZoneModule = class _TimeZoneModule {
  static {
    this.\u0275fac = function TimeZoneModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeZoneModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TimeZoneModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, TimeZoneDialogModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeZoneModule, [{
    type: NgModule,
    args: [{
      declarations: [TimeZoneComponent],
      imports: [SharedModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, TimeZoneDialogModule, MatDialogModule],
      exports: [TimeZoneComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/email-input/email-input.component.ts
function EmailInputComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-chip-row", 8);
    \u0275\u0275listener("removed", function EmailInputComponent_ng_container_3_Template_mat_chip_row_removed_1_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(email_r3));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 9)(4, "mat-icon", 10);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("editable", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "remove " + email_r3);
  }
}
function EmailInputComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3736"), "\n");
  }
}
function EmailInputComponent_ng_template_7_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3755"));
  }
}
function EmailInputComponent_ng_template_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3487"), " ");
  }
}
function EmailInputComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EmailInputComponent_ng_template_7_span_0_Template, 3, 3, "span", 12)(1, EmailInputComponent_ng_template_7_span_1_Template, 3, 3, "span", 12);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.userEmailControl.hasError("ownEmail"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.userEmailControl.hasError("emailPattern") || ctx_r3.userEmailControl.hasError("emailRequired"));
  }
}
var EmailInputComponent = class _EmailInputComponent {
  constructor(profileFacade) {
    this.profileFacade = profileFacade;
    this.addEmail = new EventEmitter();
    this.removeEmail = new EventEmitter();
    this.addOnBlur = true;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.userEmailControl = new FormControl("", [AppEmailValidator.validateEmailPattern(), Validators.maxLength(255)]);
  }
  add() {
    if (!this.userEmailControl.valid)
      return;
    this.userEmailControl.markAsTouched();
    if (!this.userEmailControl.hasError("emailPattern")) {
      this.userEmailControl.setErrors(null);
    }
    if (this.userEmailControl.value && this.userEmailControl.valid) {
      if (this.userEmailControl.value?.toLowerCase() === this.profileFacade.getUser()?.email) {
        this.userEmailControl.setErrors({ ownEmail: true });
        this.userEmailControl.markAsTouched();
      } else {
        if (this.emails.findIndex((agent) => agent === this.userEmailControl.value?.toLowerCase()) === -1) {
          this.addEmail.emit(this.userEmailControl.value);
          this.userEmailControl.reset();
          this.userEmailControl.markAsUntouched();
        } else {
          this.userEmailControl.setErrors({ existingEmail: true });
          this.userEmailControl.markAsTouched();
        }
      }
    }
  }
  remove(email) {
    this.removeEmail.emit(email);
  }
  static {
    this.\u0275fac = function EmailInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailInputComponent)(\u0275\u0275directiveInject(MyProfileFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailInputComponent, selectors: [["app-email-input"]], inputs: { emails: "emails" }, outputs: { addEmail: "addEmail", removeEmail: "removeEmail" }, standalone: false, decls: 9, vars: 7, consts: [["chipGrid", ""], ["emailInput", ""], ["otherError", ""], ["appearance", "outline", 1, "email-chip-list", "no-subscript"], ["aria-label", "Enter email"], [4, "ngFor", "ngForOf"], ["placeholder", "Enter email", 1, "email-input", 3, "matChipInputTokenEnd", "formControl", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], ["class", "text-small-12px-regular fg-error-3", 4, "ngIf", "ngIfElse"], [3, "removed", "editable"], ["matChipRemove", ""], [1, "fg-general-5"], [1, "text-small-12px-regular", "fg-error-3"], ["class", "text-small-12px-regular fg-error-3", 4, "ngIf"]], template: function EmailInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-chip-grid", 4, 0);
        \u0275\u0275template(3, EmailInputComponent_ng_container_3_Template, 6, 3, "ng-container", 5);
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("matChipInputTokenEnd", function EmailInputComponent_Template_input_matChipInputTokenEnd_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.add());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, EmailInputComponent_span_6_Template, 3, 3, "span", 7)(7, EmailInputComponent_ng_template_7_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const chipGrid_r5 = \u0275\u0275reference(2);
        const otherError_r6 = \u0275\u0275reference(8);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.emails);
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.userEmailControl)("matChipInputFor", chipGrid_r5)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.userEmailControl.hasError("existingEmail") && ctx.userEmailControl.touched)("ngIfElse", otherError_r6);
      }
    }, dependencies: [NgForOf, NgIf, MatIcon, MatFormField, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, DefaultValueAccessor, NgControlStatus, FormControlDirective, TranslationsPipe], styles: ["\n\n.email-chip-list[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 85px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/email-input.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailInputComponent, [{
    type: Component,
    args: [{ selector: "app-email-input", standalone: false, template: `<mat-form-field class="email-chip-list no-subscript" appearance="outline">
	<mat-chip-grid #chipGrid aria-label="Enter email">
		<ng-container *ngFor="let email of emails">
			<mat-chip-row (removed)="remove(email)" [editable]="false">
				{{ email }}
				<button matChipRemove [attr.aria-label]="'remove ' + email">
					<mat-icon class="fg-general-5">close</mat-icon>
				</button>
			</mat-chip-row>
		</ng-container>

		<input
			[formControl]="userEmailControl"
			placeholder="Enter email"
			[matChipInputFor]="chipGrid"
			[matChipInputSeparatorKeyCodes]="separatorKeysCodes"
			[matChipInputAddOnBlur]="addOnBlur"
			(matChipInputTokenEnd)="add()"
			class="email-input"
			#emailInput
		/>
	</mat-chip-grid>
</mat-form-field>

<span *ngIf="userEmailControl.hasError('existingEmail') && userEmailControl.touched; else otherError" class="text-small-12px-regular fg-error-3">
	{{ 'n3736' | translations }}
</span>

<ng-template #otherError>
	<span *ngIf="userEmailControl.hasError('ownEmail')" class="text-small-12px-regular fg-error-3">{{ 'n3755' | translations }}</span>

	<span *ngIf="userEmailControl.hasError('emailPattern') || userEmailControl.hasError('emailRequired')" class="text-small-12px-regular fg-error-3">
		{{ 'n3487' | translations }}
	</span>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/email-input/email-input.component.scss */\n.email-chip-list {\n  width: 100%;\n  min-height: 85px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/email-input.component.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }], { emails: [{
    type: Input
  }], addEmail: [{
    type: Output
  }], removeEmail: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailInputComponent, { className: "EmailInputComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/email-input/email-input.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/email-input/email-input.module.ts
var EmailInputModule = class _EmailInputModule {
  static {
    this.\u0275fac = function EmailInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailInputModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmailInputModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatInputModule, MatChipsModule, FormsModule, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailInputModule, [{
    type: NgModule,
    args: [{
      declarations: [EmailInputComponent],
      imports: [SharedModule, MatInputModule, MatChipsModule, FormsModule, ReactiveFormsModule],
      exports: [EmailInputComponent]
    }]
  }], null, null);
})();

export {
  TimeZoneComponent,
  EmailInputComponent,
  TimeZoneModule,
  EmailInputModule
};
//# sourceMappingURL=chunk-TYNXQKCJ.js.map
