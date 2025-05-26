import {
  EmailInputComponent,
  EmailInputModule,
  TimeZoneComponent,
  TimeZoneModule
} from "./chunk-TYNXQKCJ.js";
import {
  MeetingScheduleFacade
} from "./chunk-6K6PKNF2.js";
import {
  BottomsheetComponent,
  BottomsheetModule
} from "./chunk-CM73RVW6.js";
import {
  MatBottomSheet,
  MatBottomSheetModule
} from "./chunk-2KWNZOXB.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-7NR4UKDC.js";
import "./chunk-ZRK6DKBO.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-GOW5C4RI.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  ButtonComponent,
  ButtonModule,
  DAYS_INDEX,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  InputComponent,
  InputModule,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDivider,
  MatDividerModule,
  MatError,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatListModule,
  MatListOption,
  MatNativeDateModule,
  MatOptgroup,
  MatOption,
  MatSelectionList,
  MatSuffix,
  MaxLengthValidator,
  MeetingType,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Router,
  RouterModule,
  SharedModule,
  TIME_INTERVALS,
  TimeIntervalNamePipe,
  TimeSlotFieldKeys,
  TimeSlotsNamePipe,
  TimeSlotsPipe,
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
  DatePipe,
  Location,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewChild,
  __spreadProps,
  __spreadValues,
  finalize,
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
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/section-title/section-title.component.ts
var _c0 = (a0) => ({ "mt-5": a0 });
var SectionTitleComponent = class _SectionTitleComponent {
  static {
    this.\u0275fac = function SectionTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SectionTitleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionTitleComponent, selectors: [["findqo-section-title"]], inputs: { index: "index", headingTranslation: "headingTranslation", subHeadingTranslation: "subHeadingTranslation" }, standalone: false, decls: 9, vars: 6, consts: [[1, "row", "gap-2", "align-items-center", "mb-4", 3, "ngClass"], [1, "col-auto"], [1, "number"], [1, "col"], [1, "text-body-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-4"]], template: function SectionTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx.index !== 1));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.index);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.headingTranslation);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.subHeadingTranslation);
      }
    }, dependencies: [NgClass], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTitleComponent, [{
    type: Component,
    args: [{ selector: "findqo-section-title", standalone: false, template: `<div class="row gap-2 align-items-center mb-4" [ngClass]="{ 'mt-5': index !== 1 }">
	<div class="col-auto">
		<span class="number">{{ index }}</span>
	</div>

	<div class="col">
		<p class="text-body-medium fg-general-5">{{ headingTranslation }}</p>
		<p class="text-body-regular fg-general-4">{{ subHeadingTranslation }}</p>
	</div>
</div>
` }]
  }], null, { index: [{
    type: Input
  }], headingTranslation: [{
    type: Input
  }], subHeadingTranslation: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionTitleComponent, { className: "SectionTitleComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/section-title/section-title.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-purpose/meeting-purpose.component.ts
var _c02 = (a0, a1) => ({ selected: a0, "mb-2": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function MeetingPurposeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-list-option", 5);
    \u0275\u0275listener("click", function MeetingPurposeComponent_For_5_Template_mat_list_option_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleChange("meetingTypeId", item_r2 == null ? null : item_r2.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, ctx_r2.selectedTypeId === item_r2.id, $index_r4 < ctx_r2.meetingTypes.length - 1))("selected", ctx_r2.selectedTypeId === item_r2.id)("value", item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
  }
}
var MeetingPurposeComponent = class _MeetingPurposeComponent {
  constructor() {
    this.meetingTypes = [
      {
        id: "1",
        name: "Property on FindQo"
      },
      {
        id: "2",
        name: "Property from other site"
      }
    ];
    this.meetingTypeChange = new EventEmitter();
  }
  handleChange(key, value) {
    this.meetingTypeChange.emit({ key, value });
  }
  static {
    this.\u0275fac = function MeetingPurposeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingPurposeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingPurposeComponent, selectors: [["findqo-meeting-purpose"]], inputs: { selectedTypeId: "selectedTypeId" }, outputs: { meetingTypeChange: "meetingTypeChange" }, standalone: false, decls: 6, vars: 4, consts: [["selectedOption", ""], [3, "index", "headingTranslation", "subHeadingTranslation"], [1, "row"], ["disableRipple", "", 1, "", 3, "multiple"], [1, "col-12", "col-lg-6", "mx-1", "meeting-purpose-select"], [1, "border-general-2", "rounded", "mb-2", "mb-lg-0", 3, "click", "ngClass", "selected", "value"]], template: function MeetingPurposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "findqo-section-title", 1);
        \u0275\u0275elementStart(1, "div", 2)(2, "mat-selection-list", 3, 0);
        \u0275\u0275repeaterCreate(4, MeetingPurposeComponent_For_5_Template, 3, 7, "div", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("index", 1)("headingTranslation", "Schedule a Meeting")("subHeadingTranslation", "Which property would you like to schedule a meeting for?");
        \u0275\u0275advance(2);
        \u0275\u0275property("multiple", false);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.meetingTypes);
      }
    }, dependencies: [NgClass, SectionTitleComponent, MatSelectionList, MatListOption], styles: ["\n\nmat-selection-list[_ngcontent-%COMP%] {\n  display: block !important;\n}\n@media (min-width: 992px) {\n  mat-selection-list[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-purpose.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingPurposeComponent, [{
    type: Component,
    args: [{ selector: "findqo-meeting-purpose", standalone: false, template: `<findqo-section-title
	[index]="1"
	[headingTranslation]="'Schedule a Meeting'"
	[subHeadingTranslation]="'Which property would you like to schedule a meeting for?'"
></findqo-section-title>

<div class="row">
	<mat-selection-list #selectedOption [multiple]="false" disableRipple class="">
		@for (item of meetingTypes; track item.id) {
			<div class="col-12 col-lg-6 mx-1 meeting-purpose-select">
				<mat-list-option
					[ngClass]="{ selected: selectedTypeId === item.id, 'mb-2': $index < meetingTypes.length - 1 }"
					[selected]="selectedTypeId === item.id"
					(click)="handleChange('meetingTypeId', item?.id)"
					class="border-general-2 rounded mb-2 mb-lg-0"
					[value]="item.id"
				>
					{{ item.name }}
				</mat-list-option>
			</div>
		}
	</mat-selection-list>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-purpose/meeting-purpose.component.scss */\nmat-selection-list {\n  display: block !important;\n}\n@media (min-width: 992px) {\n  mat-selection-list {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-purpose.component.css.map */\n"] }]
  }], null, { selectedTypeId: [{
    type: Input
  }], meetingTypeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingPurposeComponent, { className: "MeetingPurposeComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-purpose/meeting-purpose.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-properties-dialog/select-properties-dialog.component.ts
var _c03 = (a0) => ({ "border-bottom": a0 });
var _forTrack02 = ($index, $item) => $item.id;
function SelectPropertiesDialogComponent_For_14_ng_container_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275listener("click", function SelectPropertiesDialogComponent_For_14_ng_container_0_For_3_Template_mat_option_click_0_listener() {
      const ad_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.handleSelection(ad_r3));
    });
    \u0275\u0275elementStart(1, "p", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "mat-icon", 15);
    \u0275\u0275text(5, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ad_r3 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", ad_r3)("ngClass", \u0275\u0275pureFunction1(5, _c03, $index_r5 < item_r6.ads.length - 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ad_r3.id, " - ", ad_r3.title, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ad_r3.location == null ? null : ad_r3.location.address);
  }
}
function SelectPropertiesDialogComponent_For_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-optgroup", 10);
    \u0275\u0275repeaterCreate(2, SelectPropertiesDialogComponent_For_14_ng_container_0_For_3_Template, 8, 7, "mat-option", 11, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("label", item_r6.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r6.ads);
  }
}
function SelectPropertiesDialogComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectPropertiesDialogComponent_For_14_ng_container_0_Template, 4, 1, "ng-container", 9);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r6.ads.length);
  }
}
function SelectPropertiesDialogComponent_15_ng_template_0_Template(rf, ctx) {
}
function SelectPropertiesDialogComponent_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectPropertiesDialogComponent_15_ng_template_0_Template, 0, 0, "ng-template", 17);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emptyOptionsTemplate_r7 = \u0275\u0275reference(18);
    \u0275\u0275property("ngTemplateOutlet", emptyOptionsTemplate_r7);
  }
}
function SelectPropertiesDialogComponent_16_ng_template_0_Template(rf, ctx) {
}
function SelectPropertiesDialogComponent_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectPropertiesDialogComponent_16_ng_template_0_Template, 0, 0, "ng-template", 17);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const noAds_r8 = \u0275\u0275reference(20);
    \u0275\u0275property("ngTemplateOutlet", noAds_r8);
  }
}
function SelectPropertiesDialogComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3534"));
  }
}
function SelectPropertiesDialogComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3876"));
  }
}
var SelectPropertiesDialogComponent = class _SelectPropertiesDialogComponent {
  constructor(data, dialogRef, destroy) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.destroy = destroy;
    this.searchControl = new FormControl("");
    this.noResult = false;
  }
  handleSelection(ad) {
    this.dialogRef.close({ value: ad });
  }
  ngOnInit() {
    this.filteredAds = this.data?.data;
    this.searchControl.valueChanges.pipe(takeUntil(this.destroy)).subscribe((text) => {
      this.filteredAds = this.data.data.map((data) => __spreadProps(__spreadValues({}, data), {
        ads: data.ads.filter((ad) => ad.title.toLowerCase().includes(text.toLowerCase()))
      }));
      this.noResult = this.filteredAds.every((ad) => !ad.ads.length);
    });
  }
  static {
    this.\u0275fac = function SelectPropertiesDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectPropertiesDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(DestroyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectPropertiesDialogComponent, selectors: [["findqo-select-properties-dialog"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 21, vars: 9, consts: [["emptyOptionsTemplate", ""], ["noAds", ""], [1, "row", "mx-0", "p-3", "justify-content-between", "align-items-center", "position-sticky", "start-0", "top-0", "bg-basic-1", "z-index-1"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "option", "option--search", "py-3", "px-3", "border-top", "border-bottom", "search-container", "z-index-1", "bg-basic-1"], ["wrapperClass", "no-subscript", 3, "keydown.space", "formControl", "placeholder"], [4, "ngIf"], [3, "label"], [1, "py-2", "px-3", 3, "value", "ngClass"], [1, "py-2", "px-3", 3, "click", "value", "ngClass"], [1, "text-body-regular", "fg-general-5"], [1, "d-flex", "align-items-center", "mt-2"], [1, "text-title-20px-regular", "fg-general-3", "m-0"], [1, "text-caption-regular", "fg-general-4"], [3, "ngTemplateOutlet"], [1, "no-results", "px-4", "py-2"], [1, "text-body-regular", "fg-general-4", "px-4"]], template: function SelectPropertiesDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h4", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 5)(7, "mat-icon", 6);
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "findqo-input", 8);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275listener("keydown.space", function SelectPropertiesDialogComponent_Template_findqo_input_keydown_space_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementContainerStart(12);
        \u0275\u0275repeaterCreate(13, SelectPropertiesDialogComponent_For_14_Template, 1, 1, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275template(15, SelectPropertiesDialogComponent_15_Template, 1, 1, null, 9)(16, SelectPropertiesDialogComponent_16_Template, 1, 1, null, 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(17, SelectPropertiesDialogComponent_ng_template_17_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, SelectPropertiesDialogComponent_ng_template_19_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "n3772"));
        \u0275\u0275advance(7);
        \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(11, 7, "n681"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filteredAds);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.noResult);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.noAds);
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatIconButton, MatIcon, InputComponent, MatOption, MatOptgroup, MatDialogClose, TranslationsPipe], styles: ["\n\n.search-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 59px !important;\n}\n.z-index-1[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/select-properties-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPropertiesDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-select-properties-dialog", providers: [DestroyService], standalone: false, template: `<div class="row mx-0 p-3 justify-content-between align-items-center position-sticky start-0 top-0 bg-basic-1 z-index-1">
	<div class="col-auto px-0">
		<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3772' | translations }}</h4>
	</div>

	<div class="col-auto px-0">
		<button mat-icon-button mat-dialog-close class="close-btn">
			<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
		</button>
	</div>
</div>

<!-- Search -->
<div class="option option--search py-3 px-3 border-top border-bottom search-container z-index-1 bg-basic-1">
	<findqo-input
		[formControl]="searchControl"
		wrapperClass="no-subscript"
		[placeholder]="'n681' | translations"
		(keydown.space)="$event.stopPropagation()"
	></findqo-input>
</div>

<!-- All list -->
<ng-container>
	@for (item of filteredAds; track $index) {
		<ng-container *ngIf="item.ads.length">
			<mat-optgroup [label]="item.name">
				@for (ad of item.ads; track ad.id) {
					<mat-option [value]="ad" (click)="handleSelection(ad)" class="py-2 px-3" [ngClass]="{ 'border-bottom': $index < item.ads.length - 1 }">
						<p class="text-body-regular fg-general-5">{{ ad.id }} - {{ ad.title }}</p>
						<div class="d-flex align-items-center mt-2">
							<mat-icon class="text-title-20px-regular fg-general-3 m-0">location_on</mat-icon>
							<p class="text-caption-regular fg-general-4">{{ ad.location?.address }}</p>
						</div>
					</mat-option>
				}
			</mat-optgroup>
		</ng-container>
	}

	<ng-template *ngIf="noResult" [ngTemplateOutlet]="emptyOptionsTemplate"></ng-template>

	<ng-template *ngIf="data?.noAds" [ngTemplateOutlet]="noAds"></ng-template>
</ng-container>

<!-- No results -->
<ng-template #emptyOptionsTemplate>
	<div class="no-results px-4 py-2">
		<span>{{ 'n3534' | translations }}</span>
	</div>
</ng-template>

<!-- No ads -->
<ng-template #noAds>
	<div class="text-body-regular fg-general-4 px-4">
		<span>{{ 'n3876' | translations }}</span>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-properties-dialog/select-properties-dialog.component.scss */\n.search-container {\n  position: sticky;\n  top: 59px !important;\n}\n.z-index-1 {\n  z-index: 1 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/select-properties-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: DestroyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectPropertiesDialogComponent, { className: "SelectPropertiesDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-properties-dialog/select-properties-dialog.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-property/select-property.component.ts
var _c04 = (a0) => ({ "border-bottom": a0 });
var _forTrack03 = ($index, $item) => $item.id;
function SelectPropertyComponent_For_14_ng_container_0_ng_template_2_Template(rf, ctx) {
}
function SelectPropertyComponent_For_14_ng_container_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "mat-icon", 17);
    \u0275\u0275text(5, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ad_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("value", ad_r3.id)("ngClass", \u0275\u0275pureFunction1(5, _c04, $index_r4 < item_r5.ads.length - 1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ad_r3.id, " - ", ad_r3.title, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ad_r3.location == null ? null : ad_r3.location.address);
  }
}
function SelectPropertyComponent_For_14_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-optgroup", 12);
    \u0275\u0275template(2, SelectPropertyComponent_For_14_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 13);
    \u0275\u0275repeaterCreate(3, SelectPropertyComponent_For_14_ng_container_0_For_4_Template, 8, 7, "mat-option", 14, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("label", item_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r5.ads);
  }
}
function SelectPropertyComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectPropertyComponent_For_14_ng_container_0_Template, 5, 1, "ng-container", 9);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r5.ads.length);
  }
}
function SelectPropertyComponent_15_ng_template_0_Template(rf, ctx) {
}
function SelectPropertyComponent_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectPropertyComponent_15_ng_template_0_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emptyOptionsTemplate_r6 = \u0275\u0275reference(23);
    \u0275\u0275property("ngTemplateOutlet", emptyOptionsTemplate_r6);
  }
}
function SelectPropertyComponent_16_ng_template_0_Template(rf, ctx) {
}
function SelectPropertyComponent_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectPropertyComponent_16_ng_template_0_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const noAds_r7 = \u0275\u0275reference(25);
    \u0275\u0275property("ngTemplateOutlet", noAds_r7);
  }
}
function SelectPropertyComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3534"));
  }
}
function SelectPropertyComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3876"));
  }
}
var SelectPropertyComponent = class _SelectPropertyComponent {
  constructor(dialog, plateformId) {
    this.dialog = dialog;
    this.plateformId = plateformId;
    this.adSelectionChange = new EventEmitter();
    this.searchControl = new FormControl("");
    this.noResult = false;
  }
  set selectedAd(ad) {
    this.selectedAdId = ad?.id;
    this.selectedAdTitle = ad?.title;
  }
  set adsData(adsData) {
    this.filteredAds = adsData.data;
    this._adsData = adsData;
    if (this._adsData.isEmpty) {
      this.searchControl.disable();
    }
  }
  openBottomSheet() {
    this.dialog.open(SelectPropertiesDialogComponent, {
      data: this._adsData,
      width: "100%",
      height: "100%",
      maxWidth: "100vw"
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.handleChange({ value: res.value.id });
      }
    });
  }
  handleSearch($event) {
    if (!$event.target.value) {
      this.filteredAds = this._adsData.data;
      return;
    }
    this.filteredAds = this._adsData.data.map((data) => __spreadProps(__spreadValues({}, data), {
      ads: data.ads.filter((ad) => ad.title.toLowerCase().includes($event?.target.value?.toLowerCase()) || ad.id?.includes($event?.target.value) || ad.location?.address.toLowerCase().includes($event?.target.value.toLowerCase()))
    }));
    this.noResult = this.filteredAds.every((ad) => !ad.ads.length);
  }
  handleChange(event) {
    const AD = this._adsData.allAds.find((ad) => ad.id === event.value);
    if (AD) {
      this.selectedAdTitle = AD?.title;
      this.selectedAdId = AD?.id;
      this.adSelectionChange.emit({ key: "adId", value: AD?.id });
      this.adSelectionChange.emit({ key: "address", value: AD?.location?.address });
    }
  }
  static {
    this.\u0275fac = function SelectPropertyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectPropertyComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectPropertyComponent, selectors: [["findqo-select-property"]], inputs: { selectedAd: "selectedAd", adsData: "adsData" }, outputs: { adSelectionChange: "adSelectionChange" }, standalone: false, decls: 26, vars: 16, consts: [["searchInput", ""], ["emptyOptionsTemplate", ""], ["noAds", ""], [1, "text-body-regular", "fg-general-4", "mt-4"], ["appearance", "outline", 1, "mt-2", "d-none", "d-lg-block"], [3, "selectionChange", "closed", "opened", "placeholder", "value"], [1, "option", "option--search", "py-3", "px-3", "sticky-top"], ["wrapperClass", "no-subscript", 3, "keydown.space", "input", "formControl", "placeholder"], ["value", "", 1, "d-none"], [4, "ngIf"], ["disableRipple", "", "mat-button", "", 1, "d-lg-none", "text-truncate", "w-100", "text-body-regular", "justify-content-between", "border", "mb-4", "mt-2", "text-left-button", 3, "click", "ngClass"], ["iconPositionEnd", "", 1, "fs-24px", "fg-general-3"], [3, "label"], ["matTitle", ""], [1, "py-2", "px-3", 3, "value", "ngClass"], [1, "text-body-regular", "fg-general-5"], [1, "d-flex", "align-items-center", "mt-2"], [1, "text-title-20px-regular", "fg-general-3", "m-0"], [1, "text-caption-regular", "fg-general-4"], [3, "ngTemplateOutlet"], [1, "no-results", "px-4"], [1, "text-body-regular", "fg-general-4", "px-4"]], template: function SelectPropertyComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "span", 3);
        \u0275\u0275text(1, "FindQo Property");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-form-field", 4)(3, "mat-select", 5);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275listener("selectionChange", function SelectPropertyComponent_Template_mat_select_selectionChange_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleChange($event));
        })("closed", function SelectPropertyComponent_Template_mat_select_closed_3_listener() {
          \u0275\u0275restoreView(_r1);
          const searchInput_r2 = \u0275\u0275reference(7);
          return \u0275\u0275resetView(searchInput_r2.formControl.reset());
        })("opened", function SelectPropertyComponent_Template_mat_select_opened_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filteredAds = ctx._adsData.data);
        });
        \u0275\u0275elementStart(5, "div", 6)(6, "findqo-input", 7, 0);
        \u0275\u0275pipe(8, "translations");
        \u0275\u0275listener("keydown.space", function SelectPropertyComponent_Template_findqo_input_keydown_space_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        })("input", function SelectPropertyComponent_Template_findqo_input_input_6_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleSearch($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-select-trigger");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "mat-option", 8);
        \u0275\u0275elementContainerStart(12);
        \u0275\u0275repeaterCreate(13, SelectPropertyComponent_For_14_Template, 1, 1, "ng-container", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275template(15, SelectPropertyComponent_15_Template, 1, 1, null, 9)(16, SelectPropertyComponent_16_Template, 1, 1, null, 9);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 10);
        \u0275\u0275listener("click", function SelectPropertyComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openBottomSheet());
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275elementStart(20, "mat-icon", 11);
        \u0275\u0275text(21, "arrow_drop_down");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, SelectPropertyComponent_ng_template_22_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(24, SelectPropertyComponent_ng_template_24_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 10, "n3768"))("value", ctx.selectedAdId);
        \u0275\u0275advance(3);
        \u0275\u0275property("formControl", ctx.searchControl)("placeholder", \u0275\u0275pipeBind1(8, 12, "n681"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", ctx.selectedAdId, " - ", ctx.selectedAdTitle, "");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filteredAds);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.noResult);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx._adsData.isEmpty);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.selectedAdTitle ? "fg-general-5" : "fg-general-2");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedAdTitle ? ctx.selectedAdId + "-" + ctx.selectedAdTitle : \u0275\u0275pipeBind1(19, 14, "n3768"), " ");
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatButton, MatIcon, InputComponent, MatFormField, MatSelect, MatSelectTrigger, MatOption, MatOptgroup, TranslationsPipe], styles: ["\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom-color: var(--neutral-1) !important;\n}\n.sticky-top[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -8px;\n  z-index: 1000;\n  background-color: var(--basic-1);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/select-property.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPropertyComponent, [{
    type: Component,
    args: [{ selector: "findqo-select-property", standalone: false, template: `<span class="text-body-regular fg-general-4 mt-4">FindQo Property</span>
<mat-form-field class="no-subscript" appearance="outline" class="mt-2 d-none d-lg-block">
	<mat-select
		[placeholder]="'n3768' | translations"
		(selectionChange)="handleChange($event)"
		(closed)="searchInput.formControl.reset()"
		(opened)="filteredAds = _adsData.data"
		[value]="selectedAdId"
	>
		<!-- Search -->
		<div class="option option--search py-3 px-3 sticky-top">
			<findqo-input
				#searchInput
				[formControl]="searchControl"
				wrapperClass="no-subscript"
				[placeholder]="'n681' | translations"
				(keydown.space)="$event.stopPropagation()"
				(input)="handleSearch($event)"
			></findqo-input>
		</div>

		<mat-select-trigger>{{ selectedAdId }} - {{ selectedAdTitle }}</mat-select-trigger>

		<mat-option class="d-none" value=""></mat-option>

		<!-- All list -->
		<ng-container>
			@for (item of filteredAds; track $index) {
				<ng-container *ngIf="item.ads.length">
					<mat-optgroup [label]="item.name">
						<ng-template matTitle></ng-template>
						@for (ad of item.ads; track ad.id) {
							<mat-option [value]="ad.id" class="py-2 px-3" [ngClass]="{ 'border-bottom': $index < item.ads.length - 1 }">
								<p class="text-body-regular fg-general-5">{{ ad.id }} - {{ ad.title }}</p>
								<div class="d-flex align-items-center mt-2">
									<mat-icon class="text-title-20px-regular fg-general-3 m-0">location_on</mat-icon>
									<p class="text-caption-regular fg-general-4">{{ ad.location?.address }}</p>
								</div>
							</mat-option>
						}
					</mat-optgroup>
				</ng-container>
			}

			<ng-template *ngIf="noResult" [ngTemplateOutlet]="emptyOptionsTemplate"></ng-template>
			<ng-template *ngIf="_adsData.isEmpty" [ngTemplateOutlet]="noAds"></ng-template>
		</ng-container>
	</mat-select>
</mat-form-field>

<button
	disableRipple
	mat-button
	(click)="openBottomSheet()"
	class="d-lg-none text-truncate w-100 text-body-regular justify-content-between border mb-4 mt-2 text-left-button"
	[ngClass]="selectedAdTitle ? 'fg-general-5' : 'fg-general-2'"
>
	{{ selectedAdTitle ? selectedAdId + '-' + selectedAdTitle : ('n3768' | translations) }}
	<mat-icon iconPositionEnd class="fs-24px fg-general-3">arrow_drop_down</mat-icon>
</button>

<!-- No results -->
<ng-template #emptyOptionsTemplate>
	<div class="no-results px-4">
		<span>{{ 'n3534' | translations }}</span>
	</div>
</ng-template>

<!-- No ads -->
<ng-template #noAds>
	<div class="text-body-regular fg-general-4 px-4">
		<span>{{ 'n3876' | translations }}</span>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-property/select-property.component.scss */\n.border-bottom {\n  border-bottom-color: var(--neutral-1) !important;\n}\n.sticky-top {\n  position: sticky;\n  top: -8px;\n  z-index: 1000;\n  background-color: var(--basic-1);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/select-property.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { selectedAd: [{
    type: Input
  }], adsData: [{
    type: Input
  }], adSelectionChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectPropertyComponent, { className: "SelectPropertyComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-property/select-property.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/components/time-slot-dialog/time-slot-dialog.component.ts
function TimeSlotDialogComponent_For_10_mat_option_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275pipe(1, "timeSlotName");
    \u0275\u0275pipe(2, "timeSlotName");
    \u0275\u0275listener("click", function TimeSlotDialogComponent_For_10_mat_option_0_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogRef.close(item_r2));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", \u0275\u0275pipeBind2(1, 2, item_r2.id, ctx_r2.data.options) >= \u0275\u0275pipeBind2(2, 5, ctx_r2.data.form.endTimeId, ctx_r2.data.options));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
  }
}
function TimeSlotDialogComponent_For_10_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275pipe(1, "timeSlotName");
    \u0275\u0275pipe(2, "timeSlotName");
    \u0275\u0275listener("click", function TimeSlotDialogComponent_For_10_mat_option_1_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogRef.close(item_r2));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", \u0275\u0275pipeBind2(1, 2, item_r2.id, ctx_r2.data.options) <= \u0275\u0275pipeBind2(2, 5, ctx_r2.data.form.startTimeId, ctx_r2.data.options));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
  }
}
function TimeSlotDialogComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TimeSlotDialogComponent_For_10_mat_option_0_Template, 4, 8, "mat-option", 5)(1, TimeSlotDialogComponent_For_10_mat_option_1_Template, 4, 8, "mat-option", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.data.target === "startTimeId");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.data.target === "endTimeId");
  }
}
var TimeSlotDialogComponent = class _TimeSlotDialogComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  static {
    this.\u0275fac = function TimeSlotDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSlotDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeSlotDialogComponent, selectors: [["findqo-time-slot-dialog"]], standalone: false, decls: 11, vars: 3, consts: [[1, "row", "mx-0", "p-3", "justify-content-between", "align-items-center", "dialog-header", "border-bottom", "bg-basic-1"], [1, "col-auto", "px-0"], [1, "text-body-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "justify-content-center", "fg-general-2", "mx-auto", "fs-20px", "fw-700"], ["class", "fg-general-5 text-body-regular px-3 py-2 border-top", 3, "disabled", "click", 4, "ngIf"], [1, "fg-general-5", "text-body-regular", "px-3", "py-2", "border-top", 3, "click", "disabled"]], template: function TimeSlotDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 1)(6, "button", 3);
        \u0275\u0275listener("click", function TimeSlotDialogComponent_Template_button_click_6_listener() {
          return ctx.dialogRef.close();
        });
        \u0275\u0275elementStart(7, "mat-icon", 4);
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275repeaterCreate(9, TimeSlotDialogComponent_For_10_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx.data.title));
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.data.options);
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, MatOption, TranslationsPipe, TimeSlotsNamePipe], styles: ["\n\n.dialog-header[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-slot-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSlotDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-time-slot-dialog", standalone: false, template: `<div class="row mx-0 p-3 justify-content-between align-items-center dialog-header border-bottom bg-basic-1">
	<div class="col-auto px-0">
		<p class="text-body-regular fg-general-5 m-0">{{ data.title | translations }}</p>
	</div>

	<div class="col-auto px-0">
		<button mat-icon-button (click)="dialogRef.close()" class="close-btn">
			<mat-icon class="justify-content-center fg-general-2 mx-auto fs-20px fw-700">close</mat-icon>
		</button>
	</div>
</div>

@for (item of data.options; track $index) {
	<mat-option
		*ngIf="data.target === 'startTimeId'"
		[disabled]="(item.id | timeSlotName: data.options) >= (data.form.endTimeId | timeSlotName: data.options)"
		(click)="dialogRef.close(item)"
		class="fg-general-5 text-body-regular px-3 py-2 border-top"
	>
		{{ item.name }}
	</mat-option>

	<mat-option
		*ngIf="data.target === 'endTimeId'"
		[disabled]="(item.id | timeSlotName: data.options) <= (data.form.startTimeId | timeSlotName: data.options)"
		(click)="dialogRef.close(item)"
		class="fg-general-5 text-body-regular px-3 py-2 border-top"
	>
		{{ item.name }}
	</mat-option>
}
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/components/time-slot-dialog/time-slot-dialog.component.scss */\n.dialog-header {\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-slot-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeSlotDialogComponent, { className: "TimeSlotDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/components/time-slot-dialog/time-slot-dialog.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/time-slot.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function TimeSlotComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3776"));
  }
}
function TimeSlotComponent_ng_template_7_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275pipe(1, "timeSlotName");
    \u0275\u0275pipe(2, "timeSlotName");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind2(1, 3, time_r4.id, ctx_r2.timeSlots) >= \u0275\u0275pipeBind2(2, 6, ctx_r2.form.controls.endTimeId.value, ctx_r2.timeSlots))("value", time_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", time_r4.name, " ");
  }
}
function TimeSlotComponent_ng_template_7_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275pipe(1, "timeSlotName");
    \u0275\u0275pipe(2, "timeSlotName");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind2(1, 3, time_r5.id, ctx_r2.timeSlots) <= \u0275\u0275pipeBind2(2, 6, ctx_r2.form.controls.startTimeId.value, ctx_r2.timeSlots))("value", time_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", time_r5.name, " ");
  }
}
function TimeSlotComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9)(1, "div", 10)(2, "div", 6)(3, "mat-form-field", 11)(4, "mat-select", 12);
    \u0275\u0275listener("selectionChange", function TimeSlotComponent_ng_template_7_Template_mat_select_selectionChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSelect($event, ctx_r2.formKeys.START_TIME));
    });
    \u0275\u0275repeaterCreate(5, TimeSlotComponent_ng_template_7_For_6_Template, 4, 9, "mat-option", 13, _forTrack04);
    \u0275\u0275pipe(7, "timeSlots");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function TimeSlotComponent_ng_template_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBottomsheet(ctx_r2.formKeys.START_TIME));
    });
    \u0275\u0275elementStart(9, "span", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "timeSlotName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 16);
    \u0275\u0275text(13, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275text(15, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 6)(17, "mat-form-field", 11)(18, "mat-select", 18);
    \u0275\u0275listener("selectionChange", function TimeSlotComponent_ng_template_7_Template_mat_select_selectionChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSelect($event, ctx_r2.formKeys.END_TIME));
    });
    \u0275\u0275repeaterCreate(19, TimeSlotComponent_ng_template_7_For_20_Template, 4, 9, "mat-option", 13, _forTrack04);
    \u0275\u0275pipe(21, "timeSlots");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275listener("click", function TimeSlotComponent_ng_template_7_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBottomsheet(ctx_r2.formKeys.END_TIME));
    });
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "timeSlotName");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-icon", 16);
    \u0275\u0275text(27, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 6)(30, "mat-checkbox", 20);
    \u0275\u0275listener("change", function TimeSlotComponent_ng_template_7_Template_mat_checkbox_change_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSelect($event, ctx_r2.formKeys.AUTO_STRETCH_START_TIME));
    });
    \u0275\u0275elementStart(31, "span", 21, 2);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 22)(35, "mat-checkbox", 20);
    \u0275\u0275listener("change", function TimeSlotComponent_ng_template_7_Template_mat_checkbox_change_35_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleSelect($event, ctx_r2.formKeys.AUTO_STRETCH_END_TIME));
    });
    \u0275\u0275elementStart(36, "span", 21, 2);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(7, 9, ctx_r2.timeSlots, ctx_r2.formKeys.START_TIME));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, ctx_r2.form.controls.startTimeId.value, ctx_r2.timeSlots));
    \u0275\u0275advance(9);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(21, 15, ctx_r2.timeSlots, ctx_r2.formKeys.END_TIME));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 18, ctx_r2.form.controls.endTimeId.value, ctx_r2.timeSlots));
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r2.form.controls.autoStretchStartTime.value === "1");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r2.tooltipDescription);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.viewport.mobile ? "Auto-Stretch" : "Enable Auto-Stretch", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.form.controls.autoStretchEndTime.value === "1");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r2.tooltipDescription);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.viewport.mobile ? "Auto-Stretch" : "Enable Auto-Stretch", " ");
  }
}
var TimeSlotComponent = class _TimeSlotComponent {
  constructor(fb, dialog, viewport) {
    this.fb = fb;
    this.dialog = dialog;
    this.viewport = viewport;
    this.onSelection = new EventEmitter();
    this.formKeys = TimeSlotFieldKeys;
    this.tooltipDescription = " With Auto Stretch Timeline turned on, we\u2019ll automatically add more time slots if all current ones are booked up. For example, if all slots are between 17:30 and 18:00 with 5-minute intervals for each viewing, the system will add one interval slot before 17:30 and one interval slot after 18:00.";
    this.form = this.fb.group({
      startTimeId: [""],
      endTimeId: [""],
      autoStretchStartTime: [false],
      autoStretchEndTime: [false]
    });
  }
  set selectedDays(data) {
    this.alreadySelected = data.find((dt) => dt.dayId === this.day.id);
    if (this.alreadySelected) {
      this.form.patchValue(__spreadValues({}, this.alreadySelected.time[0]));
    }
  }
  handleSelect(event, target) {
    let time = this.form.value;
    if (target === this.formKeys.DAY && !event.checked) {
      this.form.get("startTimeId").reset();
      this.form.get("endTimeId").reset();
      this.form.get("autoStretchStartTime").reset();
      this.form.get("autoStretchEndTime").reset();
    }
    if (target === this.formKeys.DAY) {
      if (!event.checked) {
        this.form.get("startTimeId").reset();
        this.form.get("endTimeId").reset();
      }
      time = {
        startTimeId: this.timeSlots[0].id,
        endTimeId: this.timeSlots[this.timeSlots.length - 1].id,
        autoStretchStartTime: this.form.get("autoStretchStartTime").value ? "1" : "0",
        autoStretchEndTime: this.form.get("autoStretchEndTime").value ? "1" : "0"
      };
    } else {
      time = __spreadProps(__spreadValues({}, time), {
        [target]: event.value ?? (event.checked ? "1" : "0")
      });
    }
    this.form.patchValue(time);
    this.onSelection.emit(JSON.parse(JSON.stringify({
      key: target,
      value: event.value ?? (event.checked ? "1" : "0"),
      dayId: this.day.id,
      timeSlots: __spreadValues({}, time)
    })));
  }
  openBottomsheet(target) {
    let title;
    let timeSlotsList = [...this.timeSlots];
    switch (target) {
      case this.formKeys.START_TIME:
        title = "n3784";
        timeSlotsList = timeSlotsList.slice(0, -1);
        break;
      case this.formKeys.END_TIME:
        title = "n3783";
        timeSlotsList = timeSlotsList.slice(1);
        break;
      default:
    }
    this.dialog.open(TimeSlotDialogComponent, {
      data: { options: timeSlotsList, title, form: this.form.getRawValue(), target },
      width: "100%",
      height: "100%",
      maxWidth: "100vw"
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.handleSelect({ value: res.id }, target);
      }
    });
  }
  static {
    this.\u0275fac = function TimeSlotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSlotComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ViewportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeSlotComponent, selectors: [["findqo-time-slot"]], inputs: { day: "day", timeSlots: "timeSlots", selectedDays: "selectedDays" }, outputs: { onSelection: "onSelection" }, standalone: false, decls: 9, vars: 4, consts: [["daySelection", ""], ["minMaxSelection", ""], ["tooltip", "matTooltip"], [1, "row", "gap-4", "py-2", "border-bottom", "align-items-center"], [1, "col-auto", "m-width-65px"], ["color", "primary", 1, "text-body-regular", "fg-general-5", 3, "change", "checked"], [1, "col"], [4, "ngIf", "ngIfElse"], [1, "text-body-regular", "fg-general-3"], [3, "formGroup"], [1, "row", "align-items-center", "gap-1"], ["appearance", "outline", 1, "no-subscript", "d-none", "d-lg-block"], ["formControlName", "startTimeId", "disableRipple", "", 3, "selectionChange"], [3, "disabled", "value"], ["mat-button", "", 1, "w-100", "border", "d-lg-none", "fg-general-5", "text-body-regular", "justify-content-between", 3, "click"], [1, "text-start"], ["iconPositionEnd", "", 1, "fs-24px", "fg-general-3", "pe-2", "m-0"], [1, "col-auto", "fg-general-3"], ["formControlName", "endTimeId", "disableRipple", "", 3, "selectionChange"], [1, "row", "auto-stretch", "align-items-center", "gap-2"], ["color", "primary", 1, "time-stretch", "text-body-regular", "fg-general-4", 3, "change", "checked"], ["matTooltipClass", "auto-stretch-tooltip", "matTooltipPosition", "below", 3, "matTooltip"], [1, "col", "ms-2"]], template: function TimeSlotComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "mat-checkbox", 5, 0);
        \u0275\u0275listener("change", function TimeSlotComponent_Template_mat_checkbox_change_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleSelect($event, ctx.formKeys.DAY));
        });
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275template(6, TimeSlotComponent_ng_container_6_Template, 4, 3, "ng-container", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, TimeSlotComponent_ng_template_7_Template, 39, 21, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const daySelection_r6 = \u0275\u0275reference(3);
        const minMaxSelection_r7 = \u0275\u0275reference(8);
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", !!ctx.alreadySelected);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.day.name.slice(0, 3).toUpperCase(), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !daySelection_r6.checked)("ngIfElse", minMaxSelection_r7);
      }
    }, dependencies: [NgIf, MatButton, MatIcon, MatCheckbox, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatSelect, MatOption, MatTooltip, TranslationsPipe, TimeSlotsNamePipe, TimeSlotsPipe], styles: ["\n\n.m-width-65px[_ngcontent-%COMP%] {\n  min-width: 65px;\n}\n.row[_ngcontent-%COMP%] {\n  min-height: 56px !important;\n}\n.row.auto-stretch[_ngcontent-%COMP%] {\n  min-height: auto !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-slot.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSlotComponent, [{
    type: Component,
    args: [{ selector: "findqo-time-slot", standalone: false, template: `<div class="row gap-4 py-2 border-bottom align-items-center">
	<div class="col-auto m-width-65px">
		<mat-checkbox
			#daySelection
			(change)="handleSelect($event, formKeys.DAY)"
			color="primary"
			class="me-2"
			[checked]="!!alreadySelected"
			class="text-body-regular fg-general-5"
		>
			{{ day.name.slice(0, 3).toUpperCase() }}
		</mat-checkbox>
	</div>

	<div class="col">
		<ng-container *ngIf="!daySelection.checked; else minMaxSelection">
			<p class="text-body-regular fg-general-3">{{ 'n3776' | translations }}</p>
		</ng-container>
	</div>
</div>

<ng-template #minMaxSelection>
	<form [formGroup]="form">
		<div class="row align-items-center gap-1">
			<div class="col">
				<mat-form-field class="no-subscript d-none d-lg-block" appearance="outline">
					<mat-select formControlName="startTimeId" disableRipple (selectionChange)="handleSelect($event, formKeys.START_TIME)">
						@for (time of timeSlots | timeSlots: formKeys.START_TIME; track time.id) {
							<mat-option [disabled]="(time.id | timeSlotName: timeSlots) >= (form.controls.endTimeId.value | timeSlotName: timeSlots)" [value]="time.id">
								{{ time.name }}
							</mat-option>
						}
					</mat-select>
				</mat-form-field>

				<button mat-button class="w-100 border d-lg-none fg-general-5 text-body-regular justify-content-between" (click)="openBottomsheet(formKeys.START_TIME)">
					<span class="text-start">{{ form.controls.startTimeId.value | timeSlotName: timeSlots }}</span>
					<mat-icon iconPositionEnd class="fs-24px fg-general-3 pe-2 m-0">arrow_drop_down</mat-icon>
				</button>
			</div>

			<div class="col-auto fg-general-3">-</div>

			<div class="col">
				<mat-form-field class="no-subscript d-none d-lg-block" appearance="outline">
					<mat-select formControlName="endTimeId" disableRipple (selectionChange)="handleSelect($event, formKeys.END_TIME)">
						@for (time of timeSlots | timeSlots: formKeys.END_TIME; track time.id) {
							<mat-option [disabled]="(time.id | timeSlotName: timeSlots) <= (form.controls.startTimeId.value | timeSlotName: timeSlots)" [value]="time.id">
								{{ time.name }}
							</mat-option>
						}
					</mat-select>
				</mat-form-field>

				<button mat-button class="w-100 border d-lg-none fg-general-5 text-body-regular justify-content-between" (click)="openBottomsheet(formKeys.END_TIME)">
					<span class="text-start">{{ form.controls.endTimeId.value | timeSlotName: timeSlots }}</span>
					<mat-icon iconPositionEnd class="fs-24px fg-general-3 pe-2 m-0">arrow_drop_down</mat-icon>
				</button>
			</div>
		</div>

		<div class="row auto-stretch align-items-center gap-2">
			<div class="col">
				<mat-checkbox
					(change)="handleSelect($event, formKeys.AUTO_STRETCH_START_TIME)"
					[checked]="form.controls.autoStretchStartTime.value === '1'"
					color="primary"
					class="time-stretch text-body-regular fg-general-4"
				>
					<span matTooltipClass="auto-stretch-tooltip" #tooltip="matTooltip" [matTooltip]="tooltipDescription" matTooltipPosition="below">
						{{ viewport.mobile ? 'Auto-Stretch' : 'Enable Auto-Stretch' }}
					</span>
				</mat-checkbox>
			</div>
			<div class="col ms-2">
				<mat-checkbox
					(change)="handleSelect($event, formKeys.AUTO_STRETCH_END_TIME)"
					[checked]="form.controls.autoStretchEndTime.value === '1'"
					color="primary"
					class="time-stretch text-body-regular fg-general-4"
				>
					<span matTooltipClass="auto-stretch-tooltip" #tooltip="matTooltip" [matTooltip]="tooltipDescription" matTooltipPosition="below">
						{{ viewport.mobile ? 'Auto-Stretch' : 'Enable Auto-Stretch' }}
					</span>
				</mat-checkbox>
			</div>
		</div>
	</form>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/time-slot.component.scss */\n.m-width-65px {\n  min-width: 65px;\n}\n.row {\n  min-height: 56px !important;\n}\n.row.auto-stretch {\n  min-height: auto !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/time-slot.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialog }, { type: ViewportService }], { day: [{
    type: Input
  }], timeSlots: [{
    type: Input
  }], selectedDays: [{
    type: Input
  }], onSelection: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeSlotComponent, { className: "TimeSlotComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/time-slot.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/viewing-availability/viewing-availability.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function ViewingAvailabilityComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-time-slot", 3);
    \u0275\u0275listener("onSelection", function ViewingAvailabilityComponent_For_8_Template_findqo_time_slot_onSelection_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSlotChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("day", day_r3)("selectedDays", ctx_r1.selectedDays)("timeSlots", ctx_r1.timeSlots);
  }
}
var ViewingAvailabilityComponent = class _ViewingAvailabilityComponent {
  constructor() {
    this.handleChange = new EventEmitter();
  }
  handleSlotChange(event) {
    this.handleChange.emit(event);
  }
  static {
    this.\u0275fac = function ViewingAvailabilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewingAvailabilityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewingAvailabilityComponent, selectors: [["findqo-viewing-availability"]], inputs: { days: "days", timeSlots: "timeSlots", selectedDays: "selectedDays" }, outputs: { handleChange: "handleChange" }, standalone: false, decls: 9, vars: 10, consts: [[3, "index", "headingTranslation", "subHeadingTranslation"], [1, "text-body-regular", "fg-general-4"], [3, "day", "selectedDays", "timeSlots"], [3, "onSelection", "day", "selectedDays", "timeSlots"]], template: function ViewingAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "findqo-section-title", 0);
        \u0275\u0275pipe(1, "translations");
        \u0275\u0275pipe(2, "translations");
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-selection-list");
        \u0275\u0275repeaterCreate(7, ViewingAvailabilityComponent_For_8_Template, 1, 3, "findqo-time-slot", 2, _forTrack05);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("index", 3)("headingTranslation", \u0275\u0275pipeBind1(1, 4, "n3773"))("subHeadingTranslation", \u0275\u0275pipeBind1(2, 6, "n3774"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "n3775"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.days);
      }
    }, dependencies: [SectionTitleComponent, TimeSlotComponent, MatSelectionList, TranslationsPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewingAvailabilityComponent, [{
    type: Component,
    args: [{ selector: "findqo-viewing-availability", standalone: false, template: `<findqo-section-title [index]="3" [headingTranslation]="'n3773' | translations" [subHeadingTranslation]="'n3774' | translations"></findqo-section-title>

<p class="text-body-regular fg-general-4">{{ 'n3775' | translations }}</p>

<mat-selection-list>
	@for (day of days; track day.id) {
		<findqo-time-slot [day]="day" [selectedDays]="selectedDays" (onSelection)="handleSlotChange($event)" [timeSlots]="timeSlots"></findqo-time-slot>
	}
</mat-selection-list>
` }]
  }], null, { days: [{
    type: Input
  }], timeSlots: [{
    type: Input
  }], selectedDays: [{
    type: Input
  }], handleChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewingAvailabilityComponent, { className: "ViewingAvailabilityComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/viewing-availability/viewing-availability.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting.component.ts
var _c05 = ["datePicker"];
function ScheduleMeetingComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-select-property", 15);
    \u0275\u0275listener("adSelectionChange", function ScheduleMeetingComponent_ng_container_3_ng_container_2_ng_container_1_Template_findqo_select_property_adSelectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleChange($event.key, $event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("adsData", vm_r3)("selectedAd", ctx_r1.selectedAd);
  }
}
function ScheduleMeetingComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ScheduleMeetingComponent_ng_container_3_ng_container_2_ng_container_1_Template, 2, 2, "ng-container", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r1.adsList$));
  }
}
function ScheduleMeetingComponent_ng_container_3_ng_container_3_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3154"), " ");
  }
}
function ScheduleMeetingComponent_ng_container_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2, "Add Property Listing URL from other websites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13);
    \u0275\u0275element(4, "input", 16);
    \u0275\u0275template(5, ScheduleMeetingComponent_ng_container_3_ng_container_3_mat_error_5_Template, 3, 3, "mat-error", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.form.get("title").errors) == null ? null : tmp_2_0["pattern"]);
  }
}
function ScheduleMeetingComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "findqo-section-title", 11);
    \u0275\u0275template(2, ScheduleMeetingComponent_ng_container_3_ng_container_2_Template, 3, 3, "ng-container", 7)(3, ScheduleMeetingComponent_ng_container_3_ng_container_3_Template, 6, 1, "ng-container", 7);
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 13);
    \u0275\u0275element(8, "textarea", 14);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("index", 2)("headingTranslation", ctx_r1.form.get("meetingTypeId").value === ctx_r1.meetingType.PROPERTY_VIEWING ? "Select a property" : "Add a property")("subHeadingTranslation", ctx_r1.form.get("meetingTypeId").value === ctx_r1.meetingType.PROPERTY_VIEWING ? "Select the property you want to set viewing dates on" : "Add the property you want to set viewing dates");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.get("meetingTypeId").value === ctx_r1.meetingType.PROPERTY_VIEWING);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.get("meetingTypeId").value === ctx_r1.meetingType.PERSONAL);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "n3771"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 9, "n3576"));
  }
}
function ScheduleMeetingComponent_ng_container_4_ng_container_1_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r5 = ctx.$implicit;
    \u0275\u0275property("value", time_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(time_r5.name);
  }
}
function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-viewing-availability", 19);
    \u0275\u0275listener("handleChange", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_findqo_viewing_availability_handleChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleTimeSlotChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "findqo-time-zone", 20);
    \u0275\u0275listener("zoneChange", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_findqo_time_zone_zoneChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleChange($event.key, $event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(3);
    \u0275\u0275elementStart(4, "div", 21)(5, "mat-icon", 22);
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "What\u2019s Auto-Stretch Timeline?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "p", 24);
    \u0275\u0275text(11, " With Auto Stretch Timeline turned on, we\u2019ll automatically add more time slots if all current ones are booked up. For example, if all slots are between 17:30 and 18:00 with 5-minute intervals for each viewing, the system will add one interval slot before 17:30 and one interval slot after 18:00. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275element(12, "mat-divider", 25);
    \u0275\u0275elementStart(13, "p", 12);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 26)(17, "mat-select", 27);
    \u0275\u0275repeaterCreate(18, ScheduleMeetingComponent_ng_container_4_ng_container_1_For_19_Template, 2, 2, "mat-option", 28, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBottomSheet());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "timeIntervalName");
    \u0275\u0275elementStart(23, "mat-icon", 30);
    \u0275\u0275text(24, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 12);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 31);
    \u0275\u0275listener("click", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_mat_form_field_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const startPicker_r6 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(startPicker_r6.open());
    });
    \u0275\u0275elementStart(29, "input", 32, 0);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275listener("dateChange", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_input_dateChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange($event, "startDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "mat-datepicker-toggle", 33)(33, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 12);
    \u0275\u0275text(36, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 34);
    \u0275\u0275listener("click", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_mat_form_field_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const endPicker_r7 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(endPicker_r7.open());
    });
    \u0275\u0275elementStart(38, "input", 35, 2);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275listener("dateChange", function ScheduleMeetingComponent_ng_container_4_ng_container_1_Template_input_dateChange_38_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange($event, "endDate"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "mat-datepicker-toggle", 33)(42, "mat-datepicker", null, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const vm_r8 = ctx.ngIf;
    const startPicker_r6 = \u0275\u0275reference(34);
    const endPicker_r7 = \u0275\u0275reference(43);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("days", vm_r8.meetingDays)("timeSlots", vm_r8.timeSlots)("selectedDays", ctx_r1.availabilityControls.value);
    \u0275\u0275advance();
    \u0275\u0275property("timeZones", vm_r8.timeZones)("selectedZoneId", (tmp_11_0 = ctx_r1.form.get("timezoneId")) == null ? null : tmp_11_0.value);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "n3777"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.timeIntervals);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 20, ctx_r1.form.get("intervals").value), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "n3382"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(31, 24, +(ctx_r1.selectedMeeting == null ? null : ctx_r1.selectedMeeting.startDate) * 1e3, "dd/MM/yyyy"))("min", ctx_r1.minDate)("matDatepickerFilter", ctx_r1.myFilter)("matDatepicker", startPicker_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", startPicker_r6);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", \u0275\u0275pipeBind2(40, 27, +(ctx_r1.selectedMeeting == null ? null : ctx_r1.selectedMeeting.endDate) * 1e3, "dd/MM/yyyy"))("min", ctx_r1.endMinDate)("matDatepickerFilter", ctx_r1.myFilter)("matDatepicker", endPicker_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", endPicker_r7);
  }
}
function ScheduleMeetingComponent_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-email-input", 36);
    \u0275\u0275listener("addEmail", function ScheduleMeetingComponent_ng_container_4_ng_container_3_Template_app_email_input_addEmail_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmailAdd($event));
    })("removeEmail", function ScheduleMeetingComponent_ng_container_4_ng_container_3_Template_app_email_input_removeEmail_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeEmail($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "n3780"));
    \u0275\u0275advance(2);
    \u0275\u0275property("emails", ctx_r1.emails.value);
  }
}
function ScheduleMeetingComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ScheduleMeetingComponent_ng_container_4_ng_container_1_Template, 44, 30, "ng-container", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ScheduleMeetingComponent_ng_container_4_ng_container_3_Template, 5, 4, "ng-container", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.timesVm$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.get("meetingTypeId").value === ctx_r1.meetingType.PROPERTY_VIEWING);
  }
}
var ScheduleMeetingComponent = class _ScheduleMeetingComponent {
  constructor(fb, meetingFacade, router, platformId, location, bottomSheet, activatedRoute) {
    this.fb = fb;
    this.meetingFacade = meetingFacade;
    this.router = router;
    this.platformId = platformId;
    this.location = location;
    this.bottomSheet = bottomSheet;
    this.activatedRoute = activatedRoute;
    this.meetingTypes$ = this.meetingFacade.getMeetingTypes$();
    this.adsList$ = this.meetingFacade.myAdList$();
    this.timesVm$ = this.meetingFacade.timesVm$();
    this.timeIntervals = TIME_INTERVALS;
    this.meetingType = MeetingType;
    this.loading = false;
    this.minDate = /* @__PURE__ */ new Date();
    this.endMinDate = /* @__PURE__ */ new Date();
    this.form = this.fb.group({
      adId: [""],
      meetingTypeId: ["1"],
      address: [""],
      availability: this.fb.array([], Validators.required),
      timezoneId: ["70", Validators.required],
      intervals: ["30", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      agents: this.fb.array([]),
      title: [""]
    });
    this.myFilter = (d) => {
      return this.availabilityControls.value.some((day) => DAYS_INDEX[+day.dayId] === (d || /* @__PURE__ */ new Date()).getDay());
    };
    this.minDate.setDate(this.minDate.getDate() - 0);
  }
  get availabilityControls() {
    return this.form.get("availability");
  }
  get emails() {
    return this.form.get("agents");
  }
  handleTimeSlotChange($event) {
    const INDEX = this.availabilityControls.controls.findIndex((ct) => ct.value.dayId === $event.dayId);
    if ($event.key === TimeSlotFieldKeys.DAY) {
      if (INDEX > -1 && $event.value === "0") {
        this.availabilityControls.removeAt(INDEX);
      } else if (INDEX === -1 && $event.value) {
        const TIME_CONTROL_GROUP = this.fb.group({
          startTimeId: [$event.timeSlots.startTimeId, Validators.required],
          endTimeId: [$event.timeSlots.endTimeId, Validators.required],
          autoStretchStartTime: [$event.timeSlots.autoStretchStartTime === "1" ? "1" : "0", Validators.required],
          autoStretchEndTime: [$event.timeSlots.autoStretchEndTime === "1" ? "1" : "0", Validators.required]
        });
        this.availabilityControls.push(this.fb.group({
          dayId: [$event.dayId, Validators.required],
          time: this.fb.array([TIME_CONTROL_GROUP])
        }));
      }
      this.updateMeetingDates();
    } else if ($event.key === TimeSlotFieldKeys.START_TIME) {
      const TIME = this.availabilityControls.at(INDEX).get("time");
      TIME.controls[0].patchValue({ [TimeSlotFieldKeys.START_TIME]: $event.timeSlots.startTimeId });
    } else if ($event.key === TimeSlotFieldKeys.END_TIME) {
      const TIME = this.availabilityControls.at(INDEX).get("time");
      TIME.controls[0].patchValue({ [TimeSlotFieldKeys.END_TIME]: $event.timeSlots.endTimeId });
    } else if ($event.key === TimeSlotFieldKeys.AUTO_STRETCH_START_TIME) {
      const TIME = this.availabilityControls.at(INDEX).get("time");
      TIME.controls[0].patchValue({ [TimeSlotFieldKeys.AUTO_STRETCH_START_TIME]: $event.timeSlots.autoStretchStartTime === "1" ? "1" : "0" });
    } else if ($event.key === TimeSlotFieldKeys.AUTO_STRETCH_END_TIME) {
      const TIME = this.availabilityControls.at(INDEX).get("time");
      TIME.controls[0].patchValue({ [TimeSlotFieldKeys.AUTO_STRETCH_END_TIME]: $event.timeSlots.autoStretchEndTime === "1" ? "1" : "0" });
    }
  }
  updateMeetingDates() {
    const SELECTED_DAYS = this.availabilityControls.value.map((v) => DAYS_INDEX[+v.dayId]);
    if (!SELECTED_DAYS.length) {
      this.form.get("startDate").patchValue("");
      this.form.get("endDate").patchValue("");
      return;
    }
    const UPCOMING_DATES = this.getAllUpcomingDates(SELECTED_DAYS);
    this.form.get("startDate").patchValue(UPCOMING_DATES[0]);
    this.form.get("endDate").patchValue(UPCOMING_DATES[UPCOMING_DATES.length - 1]);
  }
  handleChange(key, value) {
    if (key === "meetingTypeId") {
      this.form.get("address").reset();
      this.form.removeControl("address");
      switch (value) {
        case this.meetingType.PROPERTY_VIEWING:
          this.form.addControl("adId", this.fb.control("", [Validators.required]));
          this.form.addControl("otherPropertyLink", this.fb.control(""));
          this.form.addControl("agents", this.fb.array([]));
          this.form.get("title").clearValidators();
          this.form.addControl("address", this.fb.control("", [Validators.required]));
          break;
        case this.meetingType.PERSONAL:
          this.selectedAd = null;
          this.form.get("title").setValidators([Validators.required, Validators.pattern(/^(https?:\/\/[^/]+)(\/[^/]+)*\/?$/)]);
          this.form.addControl("address", this.fb.control("", [Validators.required]));
          this.form.removeControl("adId");
          this.form.removeControl("otherPropertyLink");
          this.form.removeControl("agents");
          break;
        default:
      }
    }
    this.form.updateValueAndValidity();
    this.form.patchValue({ [key]: value });
  }
  onDateChange($event, type) {
    if (type === "startDate") {
      this.form.get("startDate").patchValue($event.value);
      if (!this.form.get("endDate").touched) {
        this.form.get("endDate").patchValue($event.value);
      }
      this.endMinDate = $event.value;
    } else {
      this.form.get("endDate").patchValue($event.value);
    }
  }
  getAllUpcomingDates(selectedDays) {
    if (!selectedDays.length)
      return [];
    const currentDate = /* @__PURE__ */ new Date();
    const currentDayIndex = currentDate.getDay();
    const upcomingDates = [];
    selectedDays.forEach((selectedDayIndex) => {
      let daysUntilNextOccurrence = (selectedDayIndex + 7 - currentDayIndex) % 7;
      if (daysUntilNextOccurrence === 0) {
        daysUntilNextOccurrence = 0;
      }
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + daysUntilNextOccurrence);
      nextDate.setHours(0, 0, 0, 0);
      upcomingDates.push(nextDate);
    });
    upcomingDates.sort((a, b) => a.getTime() - b.getTime());
    return upcomingDates;
  }
  onEmailAdd(email) {
    this.emails.push(new FormControl(email, Validators.required));
  }
  removeEmail(email) {
    const INDEX = this.emails.controls.findIndex((em) => em.value === email);
    this.emails.removeAt(INDEX);
  }
  handleSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const EMAILS = this.emails?.value?.join(",");
    const START_DATE = new Date(this.form.get("startDate").value).getTime().toString().slice(0, 10);
    const END_DATE = new Date(this.form.get("endDate").value).getTime().toString().slice(0, 10);
    if (this.meetingId) {
      this.meetingFacade.editMeeting(__spreadProps(__spreadValues({}, this.form.value), { agents: EMAILS, startDate: START_DATE, endDate: END_DATE }), this.meetingId).pipe(finalize(() => this.loading = false)).subscribe(() => this.router.navigate([APP_ROUTE.meetingSchedule.base], {
        relativeTo: this.activatedRoute.parent.parent.parent
      }));
    } else {
      let API_DATA = __spreadProps(__spreadValues({}, this.form.value), { agents: EMAILS, startDate: START_DATE, endDate: END_DATE });
      API_DATA = Object.keys(API_DATA).reduce((acc, key) => {
        if (API_DATA[key]) {
          return __spreadProps(__spreadValues({}, acc), { [key]: API_DATA[key] });
        }
        return acc;
      }, {});
      this.meetingFacade.saveMeeting(__spreadValues({}, API_DATA)).pipe(finalize(() => this.loading = false)).subscribe(() => this.router.navigate([APP_ROUTE.meetingSchedule.base], {
        relativeTo: this.activatedRoute.parent.parent.parent
      }));
    }
  }
  openBottomSheet() {
    this.bottomSheet.open(BottomsheetComponent, {
      data: { options: this.timeIntervals, title: "n3782" }
    }).afterDismissed().subscribe((res) => {
      if (res) {
        this.form.get("intervals").patchValue(res.value);
      }
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.meetingFacade.loadAdList().subscribe((ads) => {
        const AD_ID = this.router.routerState.root.snapshot.queryParams["adId"];
        if (AD_ID) {
          this.selectedAd = ads.allAds.find((ad) => ad.id === AD_ID);
          this.form.patchValue({
            adId: AD_ID,
            address: this.selectedAd?.location?.address
          });
          if (!this.selectedAd) {
            this.location.back();
          }
        }
      });
      if (this.meetingId) {
        this.meetingFacade.getMeeting(this.meetingId).subscribe((res) => {
          this.selectedMeeting = res;
          this.selectedAd = res.ad;
          this.handleChange("meetingTypeId", this.meetingType.PROPERTY_VIEWING);
          this.form.patchValue({
            adId: res?.ad?.id,
            address: this.selectedAd?.location?.address
          });
          if (res?.agents) {
            res.agents?.split(",")?.forEach((email) => this.onEmailAdd(email));
          }
          res.availability.forEach((timeSlot) => {
            const TIME_CONTROL_GROUP = this.fb.group({
              startTimeId: [timeSlot.time[0].start.id, Validators.required],
              endTimeId: [timeSlot.time[0].end.id, Validators.required],
              autoStretchStartTime: [timeSlot.time[0].autoStretchStartTime ?? "0", Validators.required],
              autoStretchEndTime: [timeSlot.time[0].autoStretchEndTime ?? "0", Validators.required]
            });
            this.availabilityControls.push(this.fb.group({
              dayId: [timeSlot.day.id, Validators.required],
              time: this.fb.array([TIME_CONTROL_GROUP])
            }));
          });
          this.form.patchValue({
            title: res.title,
            meetingTypeId: res.meetingType.id,
            address: res.address,
            timezoneId: res.timezone?.id,
            intervals: res.intervals,
            startDate: new Date(+res.startDate * 1e3),
            endDate: new Date(+res.endDate * 1e3)
          });
        });
      }
    }
  }
  static {
    this.\u0275fac = function ScheduleMeetingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleMeetingComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MeetingScheduleFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleMeetingComponent, selectors: [["findqo-schedule-meeting"]], viewQuery: function ScheduleMeetingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5, MatInput);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.datePicker = _t.first);
      }
    }, inputs: { meetingId: "meetingId" }, standalone: false, decls: 9, vars: 8, consts: [["startDatePicker", ""], ["startPicker", ""], ["datePicker", ""], ["endPicker", ""], [1, "container", "py-4"], [3, "formGroup"], [3, "meetingTypeChange", "selectedTypeId"], [4, "ngIf"], [1, "position-fixed", "start-0", "bottom-0", "w-100", "border-top", "p-3", "bg-basic-1"], [1, "submit-button", "mx-auto"], ["btnClass", "w-100", 3, "clicked", "label", "isDisabled"], [3, "index", "headingTranslation", "subHeadingTranslation"], [1, "text-body-regular", "fg-general-4", "mb-2"], ["appearance", "outline", 1, "mt-2"], ["matInput", "", "minlength", "3", "maxlength", "2000", "formControlName", "address", "rows", "4", 1, "w-100", "text-body-regular", "address-area", "resize-none", "fg-general-5", "p-2", 3, "placeholder"], [3, "adSelectionChange", "adsData", "selectedAd"], ["matInput", "", "formControlName", "title", "placeholder", "Input property ad URL from other websites", 1, "text-body-regular"], ["class", "text-caption-regular", 4, "ngIf"], [1, "text-caption-regular"], [3, "handleChange", "days", "timeSlots", "selectedDays"], [3, "zoneChange", "timeZones", "selectedZoneId"], [1, "d-flex", "ps-2", "mt-2", "align-items-center"], [1, "fg-general-3", "pe-2", "material-symbols-outlined", "cursor-pointer", "fs-18px", "pe-2"], [1, "text-body-regular", "fg-general-5"], [1, "fs-12px", "lh-14px", "fg-general-4", "mt-2", "ps-2"], [1, "my-4"], ["appearance", "outline", 1, "d-none", "d-lg-block"], ["formControlName", "intervals"], [3, "value"], ["mat-button", "", 1, "d-lg-none", "border", "w-100", "text-left-button", "text-body-regular", "fg-general-5", "mb-4", 3, "click"], ["iconPositionEnd", "", 1, "fs-24px", "pe-2", "fg-general-3"], ["appearance", "outline", 3, "click"], ["matInput", "", "formControlName", "startDate", 3, "dateChange", "value", "min", "matDatepickerFilter", "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["appearance", "outline", 1, "example-full-width", 3, "click"], ["matInput", "", "formControlName", "endDate", 3, "dateChange", "value", "min", "matDatepickerFilter", "matDatepicker"], [3, "addEmail", "removeEmail", "emails"]], template: function ScheduleMeetingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "form", 5)(2, "findqo-meeting-purpose", 6);
        \u0275\u0275listener("meetingTypeChange", function ScheduleMeetingComponent_Template_findqo_meeting_purpose_meetingTypeChange_2_listener($event) {
          return ctx.handleChange($event.key, $event.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ScheduleMeetingComponent_ng_container_3_Template, 10, 11, "ng-container", 7)(4, ScheduleMeetingComponent_ng_container_4_Template, 4, 4, "ng-container", 7);
        \u0275\u0275elementStart(5, "div", 8)(6, "div", 9)(7, "findqo-button", 10);
        \u0275\u0275pipe(8, "translations");
        \u0275\u0275listener("clicked", function ScheduleMeetingComponent_Template_findqo_button_clicked_7_listener() {
          return ctx.handleSubmit();
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("selectedTypeId", ctx.form.get("meetingTypeId").value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.get("meetingTypeId").value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.form.get("address").value);
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 6, "n3781"))("isDisabled", ctx.loading || ctx.form.invalid);
      }
    }, dependencies: [NgIf, MatButton, MatIcon, ButtonComponent, MeetingPurposeComponent, SelectPropertyComponent, ViewingAvailabilityComponent, TimeZoneComponent, EmailInputComponent, SectionTitleComponent, MatInput, MatFormField, MatError, MatSuffix, MatDivider, MatSelect, MatOption, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, AsyncPipe, DatePipe, TranslationsPipe, TimeIntervalNamePipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 500px !important;\n  padding-bottom: 89px !important;\n}\n.mat-mdc-optgroup-label[_ngcontent-%COMP%] {\n  background: var(--general-1) !important;\n  border: 1px solid var(--neutral-1) !important;\n}\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px !important;\n}\n.address-area[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/schedule-meeting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleMeetingComponent, [{
    type: Component,
    args: [{ selector: "findqo-schedule-meeting", standalone: false, template: `<div class="container py-4">
	<form [formGroup]="form">
		<findqo-meeting-purpose
			[selectedTypeId]="form.get('meetingTypeId').value"
			(meetingTypeChange)="handleChange($event.key, $event.value)"
		></findqo-meeting-purpose>

		<ng-container *ngIf="form.get('meetingTypeId').value">
			<findqo-section-title
				[index]="2"
				[headingTranslation]="form.get('meetingTypeId').value === meetingType.PROPERTY_VIEWING ? 'Select a property' : 'Add a property'"
				[subHeadingTranslation]="
					form.get('meetingTypeId').value === meetingType.PROPERTY_VIEWING
						? 'Select the property you want to set viewing dates on'
						: 'Add the property you want to set viewing dates'
				"
			></findqo-section-title>

			<ng-container *ngIf="form.get('meetingTypeId').value === meetingType.PROPERTY_VIEWING">
				<ng-container *ngIf="adsList$ | async as vm">
					<findqo-select-property
						(adSelectionChange)="handleChange($event.key, $event.value)"
						[adsData]="vm"
						[selectedAd]="selectedAd"
					></findqo-select-property>
				</ng-container>
			</ng-container>

			<ng-container *ngIf="form.get('meetingTypeId').value === meetingType.PERSONAL">
				<span class="text-body-regular fg-general-4 mb-2">Add Property Listing URL from other websites</span>
				<mat-form-field appearance="outline" class="mt-2">
					<input class="text-body-regular" matInput formControlName="title" placeholder="Input property ad URL from other websites" />
					<mat-error *ngIf="form.get('title').errors?.['pattern']" class="text-caption-regular">
						{{ 'n3154' | translations }}
					</mat-error>
				</mat-form-field>
			</ng-container>
			<span class="text-body-regular fg-general-4 mb-2">
				{{ 'n3771' | translations }}
			</span>
			<mat-form-field appearance="outline" class="mt-2">
				<textarea
					matInput
					minlength="3"
					maxlength="2000"
					class="w-100 text-body-regular address-area resize-none fg-general-5 p-2"
					formControlName="address"
					rows="4"
					[placeholder]="'n3576' | translations"
				></textarea>
			</mat-form-field>
		</ng-container>

		<ng-container *ngIf="form.get('address').value">
			<ng-container *ngIf="timesVm$ | async as vm">
				<findqo-viewing-availability
					[days]="vm.meetingDays"
					[timeSlots]="vm.timeSlots"
					(handleChange)="handleTimeSlotChange($event)"
					[selectedDays]="availabilityControls.value"
				></findqo-viewing-availability>

				<findqo-time-zone
					(zoneChange)="handleChange($event.key, $event.value)"
					[timeZones]="vm.timeZones"
					[selectedZoneId]="form.get('timezoneId')?.value"
				></findqo-time-zone>

				<ng-container>
					<div class="d-flex ps-2 mt-2 align-items-center">
						<mat-icon class="fg-general-3 pe-2 material-symbols-outlined cursor-pointer fs-18px pe-2">info</mat-icon>
						<span class="text-body-regular fg-general-5">What\u2019s Auto-Stretch Timeline?</span>
					</div>

					<div>
						<p class="fs-12px lh-14px fg-general-4 mt-2 ps-2">
							With Auto Stretch Timeline turned on, we\u2019ll automatically add more time slots if all current ones are booked up. For example, if all slots are
							between 17:30 and 18:00 with 5-minute intervals for each viewing, the system will add one interval slot before 17:30 and one interval slot after
							18:00.
						</p>
					</div>
				</ng-container>

				<mat-divider class="my-4"></mat-divider>

				<p class="text-body-regular fg-general-4 mb-2">{{ 'n3777' | translations }}</p>
				<mat-form-field appearance="outline" class="d-none d-lg-block">
					<mat-select formControlName="intervals">
						@for (time of timeIntervals; track $index) {
							<mat-option [value]="time.value">{{ time.name }}</mat-option>
						}
					</mat-select>
				</mat-form-field>

				<button mat-button class="d-lg-none border w-100 text-left-button text-body-regular fg-general-5 mb-4" (click)="openBottomSheet()">
					{{ form.get('intervals').value | timeIntervalName }}
					<mat-icon iconPositionEnd class="fs-24px pe-2 fg-general-3">arrow_drop_down</mat-icon>
				</button>

				<p class="text-body-regular fg-general-4 mb-2">{{ 'n3382' | translations }}</p>
				<mat-form-field appearance="outline" (click)="startPicker.open()">
					<input
						[value]="+selectedMeeting?.startDate * 1000 | date: 'dd/MM/yyyy'"
						#startDatePicker
						(dateChange)="onDateChange($event, 'startDate')"
						[min]="minDate"
						matInput
						[matDatepickerFilter]="myFilter"
						[matDatepicker]="startPicker"
						formControlName="startDate"
					/>
					<mat-datepicker-toggle matIconSuffix [for]="startPicker"></mat-datepicker-toggle>
					<mat-datepicker #startPicker></mat-datepicker>
				</mat-form-field>

				<p class="text-body-regular fg-general-4 mb-2">End date</p>
				<mat-form-field appearance="outline" class="example-full-width" (click)="endPicker.open()">
					<input
						[value]="+selectedMeeting?.endDate * 1000 | date: 'dd/MM/yyyy'"
						#datePicker
						(dateChange)="onDateChange($event, 'endDate')"
						[min]="endMinDate"
						matInput
						[matDatepickerFilter]="myFilter"
						[matDatepicker]="endPicker"
						formControlName="endDate"
					/>
					<mat-datepicker-toggle matIconSuffix [for]="endPicker"></mat-datepicker-toggle>
					<mat-datepicker #endPicker></mat-datepicker>
				</mat-form-field>
			</ng-container>

			<ng-container *ngIf="form.get('meetingTypeId').value === meetingType.PROPERTY_VIEWING">
				<p class="text-body-regular fg-general-4 mb-2">{{ 'n3780' | translations }}</p>
				<app-email-input [emails]="emails.value" (addEmail)="onEmailAdd($event)" (removeEmail)="removeEmail($event)"></app-email-input>
			</ng-container>
		</ng-container>

		<div class="position-fixed start-0 bottom-0 w-100 border-top p-3 bg-basic-1">
			<div class="submit-button mx-auto">
				<findqo-button btnClass="w-100" (clicked)="handleSubmit()" [label]="'n3781' | translations" [isDisabled]="loading || form.invalid"></findqo-button>
			</div>
		</div>
	</form>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting.component.scss */\n.container {\n  max-width: 500px !important;\n  padding-bottom: 89px !important;\n}\n.mat-mdc-optgroup-label {\n  background: var(--general-1) !important;\n  border: 1px solid var(--neutral-1) !important;\n}\n.submit-button {\n  width: 100%;\n  max-width: 500px !important;\n}\n.address-area {\n  resize: none;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/schedule-meeting.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MeetingScheduleFacade }, { type: Router }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Location }, { type: MatBottomSheet }, { type: ActivatedRoute }], { datePicker: [{
    type: ViewChild,
    args: ["datePicker", {
      read: MatInput
    }]
  }], meetingId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleMeetingComponent, { className: "ScheduleMeetingComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting.component.ts", lineNumber: 22 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting-routing.module.ts
var routes = [
  {
    path: "",
    component: ScheduleMeetingComponent
  }
];
var ScheduleMeetingRoutingModule = class _ScheduleMeetingRoutingModule {
  static {
    this.\u0275fac = function ScheduleMeetingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleMeetingRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ScheduleMeetingRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleMeetingRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/section-title/section-title.module.ts
var SectionTitleModule = class _SectionTitleModule {
  static {
    this.\u0275fac = function SectionTitleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SectionTitleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SectionTitleModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTitleModule, [{
    type: NgModule,
    args: [{
      declarations: [SectionTitleComponent],
      imports: [SharedModule],
      exports: [SectionTitleComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-purpose/meeting-purpose.module.ts
var MeetingPurposeModule = class _MeetingPurposeModule {
  static {
    this.\u0275fac = function MeetingPurposeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingPurposeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingPurposeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, SectionTitleModule, MatListModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingPurposeModule, [{
    type: NgModule,
    args: [{
      declarations: [MeetingPurposeComponent],
      imports: [SharedModule, SectionTitleModule, MatListModule],
      exports: [MeetingPurposeComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-properties-dialog/select-properties-dialog.module.ts
var SelectPropertiesDialogModule = class _SelectPropertiesDialogModule {
  static {
    this.\u0275fac = function SelectPropertiesDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectPropertiesDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SelectPropertiesDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, InputModule, MatSelectModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPropertiesDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [SelectPropertiesDialogComponent],
      imports: [SharedModule, InputModule, MatSelectModule, MatDialogModule],
      exports: [SelectPropertiesDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/select-property/select-property.module.ts
var SelectPropertyModule = class _SelectPropertyModule {
  static {
    this.\u0275fac = function SelectPropertyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectPropertyModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SelectPropertyModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, InputModule, MatInputModule, MatSelectModule, SelectPropertiesDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPropertyModule, [{
    type: NgModule,
    args: [{
      declarations: [SelectPropertyComponent],
      imports: [SharedModule, InputModule, MatInputModule, MatSelectModule, SelectPropertiesDialogModule],
      exports: [SelectPropertyComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/time-slot/time-slot.module.ts
var TimeSlotModule = class _TimeSlotModule {
  static {
    this.\u0275fac = function TimeSlotModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeSlotModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TimeSlotModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, BottomsheetModule, MatTooltipModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeSlotModule, [{
    type: NgModule,
    args: [{
      declarations: [TimeSlotComponent, TimeSlotsPipe, TimeSlotDialogComponent],
      imports: [SharedModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule, BottomsheetModule, MatTooltipModule],
      exports: [TimeSlotComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/viewing-availability/viewing-availability.module.ts
var ViewingAvailabilityModule = class _ViewingAvailabilityModule {
  static {
    this.\u0275fac = function ViewingAvailabilityModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewingAvailabilityModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ViewingAvailabilityModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, SectionTitleModule, TimeSlotModule, MatListModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewingAvailabilityModule, [{
    type: NgModule,
    args: [{
      declarations: [ViewingAvailabilityComponent],
      imports: [SharedModule, SectionTitleModule, TimeSlotModule, MatListModule],
      exports: [ViewingAvailabilityComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting.module.ts
var ScheduleMeetingModule = class _ScheduleMeetingModule {
  static {
    this.\u0275fac = function ScheduleMeetingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleMeetingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ScheduleMeetingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [AdsState, MeetingScheduleFacade], imports: [
      SharedModule,
      ScheduleMeetingRoutingModule,
      InputModule,
      ButtonModule,
      MeetingPurposeModule,
      SelectPropertyModule,
      InputModule,
      ViewingAvailabilityModule,
      TimeZoneModule,
      EmailInputModule,
      SectionTitleModule,
      MatInputModule,
      MatDividerModule,
      MatSelectModule,
      MatDatepickerModule,
      FormsModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MatBottomSheetModule,
      BottomsheetModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleMeetingModule, [{
    type: NgModule,
    args: [{
      declarations: [ScheduleMeetingComponent],
      imports: [
        SharedModule,
        ScheduleMeetingRoutingModule,
        InputModule,
        ButtonModule,
        MeetingPurposeModule,
        SelectPropertyModule,
        InputModule,
        ViewingAvailabilityModule,
        TimeZoneModule,
        EmailInputModule,
        SectionTitleModule,
        MatInputModule,
        MatDividerModule,
        MatSelectModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatBottomSheetModule,
        BottomsheetModule
      ],
      providers: [AdsState, MeetingScheduleFacade]
    }]
  }], null, null);
})();
export {
  ScheduleMeetingModule
};
//# sourceMappingURL=chunk-YAPDXWQX.js.map
