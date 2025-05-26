import {
  PlaceFreeAdBannerComponent
} from "./chunk-U7UTEUHF.js";
import {
  PhoneNumberValidation,
  PropertyWorthsApi
} from "./chunk-PVESVPHH.js";
import {
  parse
} from "./chunk-QG7G77LC.js";
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
  MatCheckboxModule
} from "./chunk-GOW5C4RI.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
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
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  AisleType,
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DateAdapter,
  DefaultValueAccessor,
  DigitOnlyDirective,
  FiltersApi,
  FormBuilder,
  FormControl,
  FormControlDirective,
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
  MatHint,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MaxLengthValidator,
  MaxValidator,
  MinLengthValidator,
  MinValidator,
  NativeDateAdapter,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  PlaceAdFacade,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterModule,
  SectionType,
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
  BehaviorSubject,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  __spreadValues,
  debounceTime,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/rental-estimate-tool.facade.ts
var RentalEstimateToolFacade = class _RentalEstimateToolFacade {
  constructor(sectionState, filterApi, propertyWorth) {
    this.sectionState = sectionState;
    this.filterApi = filterApi;
    this.propertyWorth = propertyWorth;
    this._isProcessing$ = new BehaviorSubject(false);
  }
  get isProcessing$() {
    return this._isProcessing$.asObservable();
  }
  setIsProcessing(status) {
    this._isProcessing$.next(status);
  }
  getFilterUnits(aisle = AisleType.RENT_RESIDENTIAL) {
    return this.filterApi.getFilterValue("property-units", { aisle });
  }
  getSectionList(section = SectionType.PROPERTIES_FOR_RENT) {
    return this.sectionState.getSortedAisleList$(section);
  }
  getTenantList(aisle = AisleType.RENT_RESIDENTIAL) {
    return this.filterApi.getFilterValue("tenants", { aisle, section: SectionType.PROPERTIES_FOR_RENT });
  }
  getRoomTypes() {
    return this.filterApi.getFilterValue("room-types");
  }
  postRentalProperty(data) {
    return this.propertyWorth.postRentalEstimate(data);
  }
  static {
    this.\u0275fac = function RentalEstimateToolFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentalEstimateToolFacade)(\u0275\u0275inject(SectionsState), \u0275\u0275inject(FiltersApi), \u0275\u0275inject(PropertyWorthsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RentalEstimateToolFacade, factory: _RentalEstimateToolFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentalEstimateToolFacade, [{
    type: Injectable
  }], () => [{ type: SectionsState }, { type: FiltersApi }, { type: PropertyWorthsApi }], null);
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/property-information/property-information.component.ts
var _c0 = (a0) => ({ eirCodeOptions: a0 });
var _c1 = () => ["parking"];
var _forTrack0 = ($index, $item) => $item.reference;
var _forTrack1 = ($index, $item) => $item.id;
function PropertyInformationComponent_div_0_div_41_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const first_r6 = ctx.first;
    \u0275\u0275classProp("mt-2", first_r6);
    \u0275\u0275property("value", option_r5 == null ? null : option_r5.address);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5 == null ? null : option_r5.address, " ");
  }
}
function PropertyInformationComponent_div_0_div_41_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n3465"), " ");
  }
}
function PropertyInformationComponent_div_0_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "mat-label", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 42);
    \u0275\u0275element(5, "input", 43);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementStart(7, "findqo-button", 44);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_div_41_Template_findqo_button_clicked_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onErCodeSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-autocomplete", 45, 0);
    \u0275\u0275listener("optionSelected", function PropertyInformationComponent_div_0_div_41_Template_mat_autocomplete_optionSelected_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const vm_r4 = \u0275\u0275nextContext().ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onupdateAddress($event, vm_r4 == null ? null : vm_r4.eirCodeOptions));
    });
    \u0275\u0275template(11, PropertyInformationComponent_div_0_div_41_mat_option_11_Template, 2, 4, "mat-option", 46)(12, PropertyInformationComponent_div_0_div_41_mat_option_12_Template, 3, 4, "mat-option", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-error")(14, "span", 48);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-hint", 49);
    \u0275\u0275text(18, " Can\u2019t find your eircode or address? ");
    \u0275\u0275elementStart(19, "a", 50);
    \u0275\u0275text(20, "Find Eircode");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(10);
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 11, "n3459"), "*");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.addressErCode)("matAutocomplete", auto_r7)("placeholder", \u0275\u0275pipeBind1(6, 13, "n3460"));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnClass", "fs-14px fw-400 lh-18px")("materialIconPrefix", "search")("label", \u0275\u0275pipeBind1(8, 15, "n681"))("btnType", ctx_r1.buttonType.BASIC);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", vm_r4 == null ? null : vm_r4.eirCodeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r4 == null ? null : vm_r4.eirCodeOptions == null ? null : vm_r4.eirCodeOptions.length) === 0 && ctx_r1.propertyInformationForm.get("address").value.trim() !== "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "n3513"));
  }
}
function PropertyInformationComponent_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_div_42_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEditAddress());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "n3466"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r1.propertyInformationForm.getRawValue()) == null ? null : tmp_4_0.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "n3467"));
  }
}
function PropertyInformationComponent_div_0_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stand_r9 = ctx.$implicit;
    \u0275\u0275property("value", stand_r9.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stand_r9.name);
  }
}
function PropertyInformationComponent_div_0_Conditional_52_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 61)(2, "div", 62)(3, "span", 63);
    \u0275\u0275text(4, "Number of Bedrooms*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 64)(6, "button", 65);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_52_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDecreaseCount("bedroomCount"));
    });
    \u0275\u0275elementStart(7, "mat-icon", 66);
    \u0275\u0275text(8, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "input", 67);
    \u0275\u0275elementStart(10, "button", 68);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_52_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onIncreaseCount("bedroomCount"));
    });
    \u0275\u0275elementStart(11, "mat-icon", 69);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 70)(14, "div", 62)(15, "span", 63);
    \u0275\u0275text(16, "Number of Bathrooms*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 71)(18, "button", 65);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_52_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDecreaseCount("bathroomCount"));
    });
    \u0275\u0275elementStart(19, "mat-icon", 66);
    \u0275\u0275text(20, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 72);
    \u0275\u0275elementStart(22, "button", 68);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_52_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onIncreaseCount("bathroomCount"));
    });
    \u0275\u0275elementStart(23, "mat-icon", 69);
    \u0275\u0275text(24, "add");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.propertyInformationForm.getRawValue().bedroomCount < 1);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.propertyInformationForm.getRawValue().bathroomCount < 1);
  }
}
function PropertyInformationComponent_div_0_Conditional_52_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31);
    \u0275\u0275text(1, " Maximum 1000 square meters limit ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_Conditional_52_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31);
    \u0275\u0275text(1, " Property size must be greater than zero ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_Conditional_52_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 31);
    \u0275\u0275text(1, " Please enter a valid number ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_Conditional_52_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const unit_r11 = ctx.$implicit;
    \u0275\u0275property("value", unit_r11.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(unit_r11.name);
  }
}
function PropertyInformationComponent_div_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PropertyInformationComponent_div_0_Conditional_52_Conditional_0_Template, 25, 2, "div", 56);
    \u0275\u0275elementStart(1, "div", 57)(2, "div", 18)(3, "mat-label", 27);
    \u0275\u0275text(4, "Property Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 28);
    \u0275\u0275element(6, "input", 58);
    \u0275\u0275template(7, PropertyInformationComponent_div_0_Conditional_52_mat_error_7_Template, 2, 0, "mat-error", 59)(8, PropertyInformationComponent_div_0_Conditional_52_mat_error_8_Template, 2, 0, "mat-error", 59)(9, PropertyInformationComponent_div_0_Conditional_52_mat_error_9_Template, 2, 0, "mat-error", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 22)(11, "mat-label", 27);
    \u0275\u0275text(12, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 28)(14, "mat-select", 60);
    \u0275\u0275repeaterCreate(15, PropertyInformationComponent_div_0_Conditional_52_For_16_Template, 2, 2, "mat-option", 30, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!\u0275\u0275pureFunction0(8, _c1).includes(ctx_r1.propertyInformationForm.getRawValue().stand) && ctx_r1.propertyInformationForm.getRawValue().stand ? 0 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("decimal", true)("min", 1)("max", ctx_r1.propertyInformationForm.get("propertyUnit").value === "square-meters" ? 1e3 : void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.get("propertySize").getError("max"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.get("propertySize").getError("min"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.get("propertySize").getError("pattern"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Unit");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.propertyUnits);
  }
}
function PropertyInformationComponent_div_0_Conditional_53_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r12 = ctx.$implicit;
    \u0275\u0275property("value", room_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(room_r12.name);
  }
}
function PropertyInformationComponent_div_0_Conditional_53_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r13 = ctx.$implicit;
    \u0275\u0275property("value", tenant_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r13.name);
  }
}
function PropertyInformationComponent_div_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "mat-label", 27);
    \u0275\u0275text(2, "Room type*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 28)(4, "mat-select", 74);
    \u0275\u0275repeaterCreate(5, PropertyInformationComponent_div_0_Conditional_53_For_6_Template, 2, 2, "mat-option", 30, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error", 31);
    \u0275\u0275text(8, "This is a required field");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 73)(10, "mat-label", 27);
    \u0275\u0275text(11, "Number of tenants sharing*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 28)(13, "mat-select", 75);
    \u0275\u0275repeaterCreate(14, PropertyInformationComponent_div_0_Conditional_53_For_15_Template, 2, 2, "mat-option", 30, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-error", 31);
    \u0275\u0275text(17, "This is a required field");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", "Select Number of tenants");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roomTypes);
    \u0275\u0275advance(8);
    \u0275\u0275property("placeholder", "Select Number of tenants");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tenantList);
  }
}
function PropertyInformationComponent_div_0_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "mat-label", 76);
    \u0275\u0275text(3, "Amenities*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 77);
    \u0275\u0275element(5, "textarea", 78);
    \u0275\u0275elementStart(6, "mat-error", 31);
    \u0275\u0275text(7, "This is a required field");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
function PropertyInformationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1", 3);
    \u0275\u0275text(2, "Free Rental Estimate Tool for Irish Property Owners");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, " Thinking of renting out your property or just a spare room? FindQo.ie offers a smart, instant way to calculate your property\u2019s rental value. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, " Our Rental calculator uses live market data and tailored insights to help you price your rental accurately\u2014whether you're leasing the entire property or sharing a room. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
    \u0275\u0275text(9, "FindQo.ie Rental Estimate Tool works on the basis of:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ol", 8)(11, "li", 9);
    \u0275\u0275text(12, " Live Market Data: ");
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "Live listings from all major Irish rental platforms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 9);
    \u0275\u0275text(16, " Historical Insights: ");
    \u0275\u0275elementStart(17, "span", 10);
    \u0275\u0275text(18, "Comparable rents based on your location, property type, and features");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li", 9);
    \u0275\u0275text(20, " Exclusive FindQo.ie Intelligence: ");
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22, "Unique insights powered by our proprietary data.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "form", 11)(24, "div", 12)(25, "div", 13)(26, "div", 14)(27, "mat-radio-group", 15)(28, "mat-label", 16);
    \u0275\u0275text(29, "Start by selecting what you're offering*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17)(31, "div", 18)(32, "div", 19);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_div_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateRadioBtn(ctx_r1.aisleType.RENT_RESIDENTIAL));
    });
    \u0275\u0275elementStart(33, "mat-radio-button", 20);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_mat_radio_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateRadioBtn(ctx_r1.aisleType.RENT_RESIDENTIAL));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 21);
    \u0275\u0275text(35, "Rent Entire Property");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 22)(37, "div", 19);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_div_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateRadioBtn(ctx_r1.aisleType.SHARE_RESIDENTIAL));
    });
    \u0275\u0275elementStart(38, "mat-radio-button", 23);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_mat_radio_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateRadioBtn(ctx_r1.aisleType.SHARE_RESIDENTIAL));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 21);
    \u0275\u0275text(40, "Share (Rent a Room)");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(41, PropertyInformationComponent_div_0_div_41_Template, 21, 19, "div", 24)(42, PropertyInformationComponent_div_0_div_42_Template, 9, 7, "div", 25);
    \u0275\u0275elementStart(43, "div", 26)(44, "mat-label", 27);
    \u0275\u0275text(45, "Property Type*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 28)(47, "mat-select", 29);
    \u0275\u0275repeaterCreate(48, PropertyInformationComponent_div_0_For_49_Template, 2, 2, "mat-option", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-error", 31);
    \u0275\u0275text(51, "This is a required field");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, PropertyInformationComponent_div_0_Conditional_52_Template, 17, 9)(53, PropertyInformationComponent_div_0_Conditional_53_Template, 18, 2)(54, PropertyInformationComponent_div_0_ng_container_54_Template, 8, 0, "ng-container", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 33)(56, "div", 34)(57, "div", 35)(58, "div", 36)(59, "findqo-button", 37);
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_Template_findqo_button_clicked_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNext());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 38)(61, "div", 39)(62, "div", 14)(63, "findqo-button", 40);
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_Template_findqo_button_clicked_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNext());
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("formGroup", ctx_r1.propertyInformationForm);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("chip-selected", ctx_r1.propertyInformationForm.getRawValue().aisle === ctx_r1.aisleType.RENT_RESIDENTIAL);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.propertyInformationForm.getRawValue().aisle === ctx_r1.aisleType.RENT_RESIDENTIAL ? "fg-prim-2" : "fg-general-5")("value", ctx_r1.aisleType.RENT_RESIDENTIAL);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("chip-selected", ctx_r1.propertyInformationForm.getRawValue().aisle === ctx_r1.aisleType.SHARE_RESIDENTIAL);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.propertyInformationForm.getRawValue().aisle === ctx_r1.aisleType.SHARE_RESIDENTIAL ? "fg-prim-2" : "fg-general-5")("value", ctx_r1.aisleType.SHARE_RESIDENTIAL);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !((tmp_9_0 = ctx_r1.propertyInformationForm.getRawValue()) == null ? null : tmp_9_0.address));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_10_0 = ctx_r1.propertyInformationForm.getRawValue()) == null ? null : tmp_10_0.address);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Select Property Type");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.residentialsStands == null ? null : ctx_r1.residentialsStands["stands"]);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.propertyInformationForm.getRawValue().aisle === ctx_r1.aisleType.RENT_RESIDENTIAL ? 52 : ctx_r1.propertyInformationForm.getRawValue().aisle === ctx_r1.aisleType.SHARE_RESIDENTIAL ? 53 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.propertyInformationForm.getRawValue().aisle);
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
  constructor(fb, placeAdFacade, destroy, rentalFacade) {
    this.fb = fb;
    this.placeAdFacade = placeAdFacade;
    this.destroy = destroy;
    this.rentalFacade = rentalFacade;
    this.propertyInformationForm = this.fb.group({
      aisle: [AisleType.RENT_RESIDENTIAL, Validators.required],
      address: ["", [Validators.required]],
      countyArea: ["", [Validators.required]],
      county: ["", [Validators.required]],
      eirCode: [""],
      stand: ["", [Validators.required]],
      bedroomCount: [0, [Validators.required]],
      bathroomCount: [0, [Validators.required]],
      propertySize: [void 0, [Validators.min(1), Validators.pattern("^[0-9.]*$")]],
      propertyUnit: [""],
      roomTypeId: [""],
      otherTenantShareCount: [""],
      comment: ["", [Validators.required]]
    });
    this.nextTab = new EventEmitter();
    this.residentialsStands = {};
    this.propertyUnits = [];
    this.tenantList = [];
    this.roomTypes = [];
    this.maxDate = /* @__PURE__ */ new Date();
    this.buttonType = ButtonType;
    this.aisleType = AisleType;
    this.addressErCode = new FormControl("", [Validators.required]);
    this.eirForceSearched = false;
    this.yearFilter = (date) => {
      return date ? date.getDate() === 1 && date.getMonth() === 0 : false;
    };
  }
  getEirCodes(text, params) {
    return this.placeAdFacade.getEricode(text, params);
  }
  callEricodeApi() {
    this.addressErCode?.valueChanges.pipe(debounceTime(1e3), switchMap((searchText) => {
      if (!searchText) {
        return of([]);
      }
      if (searchText && searchText.trim() === "") {
        return of([]);
      } else {
        this.eirForceSearched = true;
        return this.getEirCodes(searchText, "0");
      }
    }), takeUntil(this.destroy)).subscribe((eirCodes) => {
      this.eirCodeOptions$ = of(eirCodes);
    });
  }
  onErCodeSearch() {
    if (this.addressErCode.invalid || !this.eirForceSearched) {
      return;
    }
    this.eirForceSearched = false;
    const SEARCHED_KEYWORD = this.addressErCode.value;
    if (SEARCHED_KEYWORD) {
      this.getEirCodes(SEARCHED_KEYWORD, "1").subscribe();
    }
  }
  onUpdateRadioBtn(aisle) {
    if (this.propertyInformationForm.getRawValue()?.["aisle"] === aisle)
      return;
    this.propertyInformationForm.get("stand").reset();
    this.propertyInformationForm.get("aisle").setValue(aisle);
    this.getPropertyTypes(aisle);
    if (aisle === AisleType.RENT_RESIDENTIAL) {
      this.propertyInformationForm.get("bedroomCount").setValidators(Validators.required);
      this.propertyInformationForm.get("bathroomCount").setValidators(Validators.required);
      this.propertyInformationForm.get("propertySize").setValidators([Validators.min(1), Validators.pattern("^[0-9.]*$")]);
      this.propertyInformationForm.get("propertyUnit").setValue(this.propertyUnits.find((res) => res.reference === "square-meters")?.reference);
      this.propertyInformationForm.get("roomTypeId").setValue("");
      this.propertyInformationForm.get("roomTypeId").clearValidators();
      this.propertyInformationForm.get("roomTypeId").setErrors(null);
      this.propertyInformationForm.get("otherTenantShareCount").setValue("");
      this.propertyInformationForm.get("otherTenantShareCount").clearValidators();
      this.propertyInformationForm.get("otherTenantShareCount").setErrors(null);
    } else {
      this.propertyInformationForm.get("roomTypeId").setValidators(Validators.required);
      this.propertyInformationForm.get("otherTenantShareCount").setValidators(Validators.required);
      this.propertyInformationForm.get("bedroomCount").setValue(0);
      this.propertyInformationForm.get("bedroomCount").clearValidators();
      this.propertyInformationForm.get("bedroomCount").setErrors(null);
      this.propertyInformationForm.get("bathroomCount").setValue(0);
      this.propertyInformationForm.get("bathroomCount").clearValidators();
      this.propertyInformationForm.get("bathroomCount").setErrors(null);
      this.propertyInformationForm.get("propertySize").setValue(void 0);
      this.propertyInformationForm.get("propertySize").clearValidators();
      this.propertyInformationForm.get("propertySize").setErrors(null);
      this.propertyInformationForm.get("propertyUnit").setValue("");
      this.propertyInformationForm.get("propertyUnit").clearValidators();
      this.propertyInformationForm.get("propertyUnit").setErrors(null);
    }
  }
  onupdateAddress(event, eirCodeList) {
    const selectedAddressEricode = eirCodeList.find((eirCode) => eirCode.address === event.option.value);
    this.propertyInformationForm.patchValue({
      address: event.option.value,
      countyArea: selectedAddressEricode?.countyArea,
      county: selectedAddressEricode?.county,
      eirCode: selectedAddressEricode?.eirCode
    });
  }
  onEditAddress() {
    this.propertyInformationForm.patchValue({
      address: "",
      countyArea: "",
      county: "",
      eirCode: ""
    });
    this.addressErCode.reset();
  }
  onNext() {
    const FORM_DATA = this.propertyInformationForm.value;
    switch (FORM_DATA.aisle) {
      case AisleType.SHARE_RESIDENTIAL: {
        delete FORM_DATA.propertyUnit;
        delete FORM_DATA.propertySize;
        delete FORM_DATA.bathroomCount;
        delete FORM_DATA.bedroomCount;
        break;
      }
      case AisleType.RENT_RESIDENTIAL: {
        delete FORM_DATA.roomTypeId;
        delete FORM_DATA.otherTenantShareCount;
        break;
      }
      default:
        null;
    }
    this.nextTab.emit({
      status: this.propertyInformationForm.status,
      value: __spreadValues({}, FORM_DATA),
      form: "propertyInformation"
    });
  }
  onIncreaseCount(field) {
    this.propertyInformationForm.patchValue({
      [field]: Number(this.propertyInformationForm.getRawValue()[field]) + 1
    });
  }
  onDecreaseCount(field) {
    this.propertyInformationForm.patchValue({
      [field]: Number(this.propertyInformationForm.getRawValue()[field]) - 1
    });
  }
  getUnits(aisle) {
    this.rentalFacade.getFilterUnits(aisle).subscribe((res) => {
      this.propertyUnits = res;
      if (res && res?.length) {
        this.propertyInformationForm.patchValue({
          propertyUnit: res.find((res2) => res2.reference === "square-meters")?.reference
        });
        this.propertyInformationForm.addControl("propertySize", this.fb.control(void 0, [Validators.max(1e3)]));
      }
    });
  }
  getPropertyTypes(aisle) {
    this.rentalFacade.getSectionList().subscribe((res) => {
      const STANDS = res.filter((res2) => res2.reference === aisle);
      this.residentialsStands = STANDS[0];
    });
  }
  getTenantsList() {
    this.rentalFacade.getTenantList().subscribe((res) => {
      this.tenantList = res;
    });
  }
  getRoomTypes() {
    this.rentalFacade.getRoomTypes().subscribe((res) => {
      this.roomTypes = res;
    });
  }
  ngOnInit() {
    this.callEricodeApi();
    this.getPropertyTypes(AisleType.RENT_RESIDENTIAL);
    this.getRoomTypes();
    this.getTenantsList();
    this.getUnits(AisleType.RENT_RESIDENTIAL);
    this.propertyInformationForm.get("propertyUnit").valueChanges.subscribe((unit) => {
      if (unit === "square-meters") {
        this.propertyInformationForm.addControl("propertySize", this.fb.control(void 0, [Validators.max(1e3)]));
      }
    });
    this.propertyInformationForm.get("stand").valueChanges.subscribe((res) => {
      if (res === "parking" || this.propertyInformationForm.getRawValue()?.aisle === AisleType.SHARE_RESIDENTIAL) {
        this.propertyInformationForm.patchValue({
          bathroomCount: 0,
          bedroomCount: 0
        });
      } else {
        this.propertyInformationForm.patchValue({
          bathroomCount: 1,
          bedroomCount: 1
        });
      }
    });
  }
  static {
    this.\u0275fac = function PropertyInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyInformationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(RentalEstimateToolFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyInformationComponent, selectors: [["findqo-property-information"]], outputs: { nextTab: "nextTab" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: DateAdapter,
        useClass: MyDateAdapter,
        deps: [MAT_DATE_LOCALE]
      },
      {
        provide: MAT_DATE_FORMATS,
        useValue: MY_FORMATS
      }
    ])], decls: 2, vars: 5, consts: [["auto", "matAutocomplete"], ["class", "container pb-md-5 property-information-form", 4, "ngIf"], [1, "container", "pb-md-5", "property-information-form"], [1, "heading-2", "lh-28px", "fs-24px", "mt-4", "mb-2"], [1, "text-body-regular", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-2"], [1, "border", "rounded-1", "p-2", "mt-2"], [1, "text-caption-regular", "fg-general-5", "fs-12px", "lh-16px", "pb-1"], [1, "mb-0", "px-3"], [1, "pb-1", "text-caption-medium", "fg-general-5", "fs-12px", "lh-16px"], [1, "text-caption-regular", "fw-400"], [1, "my-4", 3, "formGroup"], [1, "row", "justify-content-center", "gap-1", "mt-3"], [1, "row", "justify-content-center"], [1, "col-12"], ["formControlName", "aisle"], ["for", "eidControl", 1, "fg-general-4", "text-small-14px-regular", "d-block"], [1, "row", "mx-0", "align-items-center", "mt-1", "mb-3"], [1, "col-6", "pe-1"], [1, "checkbox-list", "d-flex", "align-items-center", "py-4", 3, "click"], ["color", "primary", "label", "role", 1, "ps-2", "text-body-regular", "fg-general-2", 3, "click", "ngClass", "value"], [1, "text-body-regular", "ps-2"], [1, "col-6", "ps-1"], ["color", "primary", "label", "role", 1, "ps-2", "text-body-regular", "fg-general-4", 3, "click", "ngClass", "value"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "fg-general-4", "text-small-14px-regular"], ["appearance", "outline", 1, "mt-1"], ["required", "", "formControlName", "stand", 3, "placeholder"], [3, "value"], [1, "text-caption-regular", "fs-12px", "fw-400", "lh-16px"], [4, "ngIf"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "w-100", "position-fixed", "bottom-0", "border-top", "bg-basic-1", "d-none", "d-md-block"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-end", "align-items-center"], [1, "col-auto", "w-125px"], ["id", "rental-estimate-next-btn", "btnClass", "text-small-14px-regular w-100 h-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [1, "w-100", "d-block", "d-md-none"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "align-items-center"], ["id", "rental-estimate-next-btn", "btnClass", "text-small-14px-regular w-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [1, "col-md-12"], ["appearance", "outline", "id", "eidControl", 1, "text-body-regular", "mt-1"], ["type", "text", "matInput", "", 1, "eircode-search", 3, "formControl", "matAutocomplete", "placeholder"], [1, "d-block", 3, "clicked", "btnClass", "materialIconPrefix", "label", "btnType"], ["required", "", 3, "optionSelected"], ["class", "mb-1 py-5px fg-general-4 text-paragraph-regular lh-22px", 3, "value", "mt-2", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "fs-12px", "fw-400", "lh-16px"], [1, "mt-1", "text-caption-regular", "fg-general-4"], ["target", "_blank", "href", "https://finder.eircode.ie/", 1, "fg-prim-2"], [1, "mb-1", "py-5px", "fg-general-4", "text-paragraph-regular", "lh-22px", 3, "value"], [3, "disabled"], [1, "fg-general-3", "text-small-14px-regular", "d-block"], [1, "fg-general-5", "text-small-14px-regular", "d-block", "my-2"], ["mat-button", "", "color", "primary", 1, "px-0", "text-body-regular", "eir-btn", 3, "click"], [1, "row", "align-items-center", "mb-2"], [1, "row", "justify-content-center", "mb-2"], ["digitOnly", "", "type", "number", "formControlName", "propertySize", "matInput", "", "placeholder", "0.00", 1, "text-body-regular", "fg-general-5", 3, "decimal", "min", "max"], ["class", "text-caption-regular fs-12px fw-400 lh-16px", 4, "ngIf"], ["formControlName", "propertyUnit", 3, "placeholder"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "col"], [1, "d-inline-block", "fg-general-4", "text-small-14px-regular"], [1, "col-auto", "add-btn", "mt-1"], ["mat-stroked-button", "", "disableRipple", "", "type", "button", 1, "bg-basic-1", "round-btn", "px-0", 3, "click", "disabled"], [1, "fg-prim-2", "fs-18px"], ["type", "number", "formControlName", "bedroomCount", 1, "text-small-14px-regular", "lh-18px", "fg-general-5", "border-0", "w-35px", "text-center"], ["mat-stroked-button", "", "disableRipple", "", "type", "button", 1, "bg-basic-1", "round-btn", "px-0", 3, "click"], [1, "fg-prim-2"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "col-auto", "add-btn", "justify-content-between"], ["type", "number", "formControlName", "bathroomCount", 1, "text-small-14px-regular", "lh-18px", "fg-general-5", "border-0", "w-35px", "text-center"], [1, "col-md-12", "mb-2"], ["required", "", "formControlName", "roomTypeId", 3, "placeholder"], ["required", "", "formControlName", "otherTenantShareCount", 3, "placeholder"], [1, "fg-general-4", "text-body-regular", "d-block"], ["appearance", "outline", 1, "w-100", "address", "mt-1"], ["matInput", "", "minlength", "3", "formControlName", "comment", "placeholder", "E.g. Includes washer/dryer, electric heating, fast broadband, small pets allowed, private parking, and access to rear garden and patio.", "rows", "8", 1, "w-100", "text-body-regular", "reason-area", "resize-none", "fg-general-5", "py-2", "mt-9"]], template: function PropertyInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PropertyInformationComponent_div_0_Template, 64, 20, "div", 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.eirCodeOptions$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIcon, DigitOnlyDirective, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MinValidator, MaxValidator, FormControlDirective, FormGroupDirective, FormControlName, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatFormField, MatLabel, MatHint, MatError, MatSelect, MatInput, ButtonComponent, MatRadioGroup, MatRadioButton, AsyncPipe, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 612px;\n}\ninput.search-location[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location[_ngcontent-%COMP%]:focus {\n  outline: unset !important;\n}\ninput.search-location[_ngcontent-%COMP%]::placeholder {\n  font-style: italic !important;\n  color: var(--general-2) !important;\n}\n.search-option[_ngcontent-%COMP%] {\n  min-height: 45px;\n  height: 45px;\n  border-bottom: 1px solid var(--neutral-1);\n}\n.bedroom-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.add-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.round-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.bed-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  background-color: var(--info-1);\n  position: relative;\n  display: inline-block;\n}\n.bed-icon[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bedroom-count[_ngcontent-%COMP%] {\n  line-height: 35px;\n  color: var(--general-5);\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.w-600px[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-125px[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n.checkbox-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-information.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyInformationComponent, [{
    type: Component,
    args: [{ selector: "findqo-property-information", providers: [
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
	<h1 class="heading-2 lh-28px fs-24px mt-4 mb-2">Free Rental Estimate Tool for Irish Property Owners</h1>

	<p class="text-body-regular fg-general-5">
		Thinking of renting out your property or just a spare room? FindQo.ie offers a smart, instant way to calculate your property\u2019s rental value.
	</p>

	<p class="text-body-regular fg-general-5 mt-2">
		Our Rental calculator uses live market data and tailored insights to help you price your rental accurately\u2014whether you're leasing the entire property or
		sharing a room.
	</p>

	<div class="border rounded-1 p-2 mt-2">
		<p class="text-caption-regular fg-general-5 fs-12px lh-16px pb-1">FindQo.ie Rental Estimate Tool works on the basis of:</p>

		<ol class="mb-0 px-3">
			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">
				Live Market Data:
				<span class="text-caption-regular fw-400">Live listings from all major Irish rental platforms</span>
			</li>

			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">
				Historical Insights:
				<span class="text-caption-regular fw-400">Comparable rents based on your location, property type, and features</span>
			</li>

			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">
				Exclusive FindQo.ie Intelligence:

				<span class="text-caption-regular fw-400">Unique insights powered by our proprietary data.</span>
			</li>
		</ol>
	</div>

	<form class="my-4" [formGroup]="propertyInformationForm">
		<div class="row justify-content-center gap-1 mt-3">
			<div class="row justify-content-center">
				<div class="col-12">
					<mat-radio-group formControlName="aisle">
						<mat-label class="fg-general-4 text-small-14px-regular d-block" for="eidControl">Start by selecting what you're offering*</mat-label>

						<div class="row mx-0 align-items-center mt-1 mb-3">
							<div class="col-6 pe-1">
								<div
									(click)="onUpdateRadioBtn(aisleType.RENT_RESIDENTIAL)"
									[class.chip-selected]="propertyInformationForm.getRawValue().aisle === aisleType.RENT_RESIDENTIAL"
									class="checkbox-list d-flex align-items-center py-4"
								>
									<mat-radio-button
										[ngClass]="propertyInformationForm.getRawValue().aisle === aisleType.RENT_RESIDENTIAL ? 'fg-prim-2' : 'fg-general-5'"
										color="primary"
										[value]="aisleType.RENT_RESIDENTIAL"
										label="role"
										class="ps-2 text-body-regular fg-general-2"
										(click)="onUpdateRadioBtn(aisleType.RENT_RESIDENTIAL)"
									></mat-radio-button>
									<span class="text-body-regular ps-2">Rent Entire Property</span>
								</div>
							</div>

							<div class="col-6 ps-1">
								<div
									(click)="onUpdateRadioBtn(aisleType.SHARE_RESIDENTIAL)"
									[class.chip-selected]="propertyInformationForm.getRawValue().aisle === aisleType.SHARE_RESIDENTIAL"
									class="checkbox-list d-flex align-items-center py-4"
								>
									<mat-radio-button
										[ngClass]="propertyInformationForm.getRawValue().aisle === aisleType.SHARE_RESIDENTIAL ? 'fg-prim-2' : 'fg-general-5'"
										color="primary"
										[value]="aisleType.SHARE_RESIDENTIAL"
										label="role"
										class="ps-2 text-body-regular fg-general-4"
										(click)="onUpdateRadioBtn(aisleType.SHARE_RESIDENTIAL)"
									></mat-radio-button>
									<span class="text-body-regular ps-2">Share (Rent a Room)</span>
								</div>
							</div>
						</div>
					</mat-radio-group>
				</div>
			</div>

			<div class="col-md-12" *ngIf="!propertyInformationForm.getRawValue()?.address">
				<mat-label class="fg-general-4 text-small-14px-regular d-block" for="eidControl">{{ 'n3459' | translations }}*</mat-label>

				<mat-form-field appearance="outline" id="eidControl" class="text-body-regular mt-1">
					<input type="text" matInput [formControl]="addressErCode" [matAutocomplete]="auto" [placeholder]="'n3460' | translations" class="eircode-search" />

					<findqo-button
						[btnClass]="'fs-14px fw-400 lh-18px'"
						class="d-block"
						[materialIconPrefix]="'search'"
						[label]="'n681' | translations"
						[btnType]="buttonType.BASIC"
						(clicked)="onErCodeSearch()"
					></findqo-button>

					<mat-autocomplete required (optionSelected)="onupdateAddress($event, vm?.eirCodeOptions)" #auto="matAutocomplete">
						<mat-option
							*ngFor="let option of vm?.eirCodeOptions; let first = first"
							[value]="option?.address"
							class="mb-1 py-5px fg-general-4 text-paragraph-regular lh-22px"
							[class.mt-2]="first"
						>
							{{ option?.address }}
						</mat-option>

						<mat-option *ngIf="vm?.eirCodeOptions?.length === 0 && propertyInformationForm.get('address').value.trim() !== ''" [disabled]="true">
							{{ 'n3465' | translations }}
						</mat-option>
					</mat-autocomplete>

					<mat-error>
						<span class="fs-12px fw-400 lh-16px">{{ 'n3513' | translations }}</span>
					</mat-error>

					<mat-hint class="mt-1 text-caption-regular fg-general-4">
						Can\u2019t find your eircode or address?
						<a class="fg-prim-2" target="_blank" href="https://finder.eircode.ie/">Find Eircode</a>
					</mat-hint>
				</mat-form-field>
			</div>

			<div class="col-12" *ngIf="propertyInformationForm.getRawValue()?.address">
				<span class="fg-general-3 text-small-14px-regular d-block">{{ 'n3466' | translations }}</span>

				<span class="fg-general-5 text-small-14px-regular d-block my-2">{{ propertyInformationForm.getRawValue()?.address }}</span>

				<button mat-button color="primary" (click)="onEditAddress()" class="px-0 text-body-regular eir-btn">{{ 'n3467' | translations }}</button>
			</div>

			<div class="col-md-12 mt-3">
				<mat-label class="fg-general-4 text-small-14px-regular">Property Type*</mat-label>
				<mat-form-field appearance="outline" class="mt-1">
					<mat-select required formControlName="stand" [placeholder]="'Select Property Type'">
						@for (stand of residentialsStands?.['stands']; track stand.reference) {
							<mat-option [value]="stand.reference">{{ stand.name }}</mat-option>
						}
					</mat-select>

					<mat-error class="text-caption-regular fs-12px fw-400 lh-16px">This is a required field</mat-error>
				</mat-form-field>
			</div>

			@if (propertyInformationForm.getRawValue().aisle === aisleType.RENT_RESIDENTIAL) {
				@if (!['parking'].includes(propertyInformationForm.getRawValue().stand) && propertyInformationForm.getRawValue().stand) {
					<div class="row align-items-center mb-2">
						<div class="d-flex justify-content-between mb-1">
							<div class="col">
								<span class="d-inline-block fg-general-4 text-small-14px-regular">Number of Bedrooms*</span>
							</div>

							<div class="col-auto add-btn mt-1">
								<button
									[disabled]="propertyInformationForm.getRawValue().bedroomCount < 1"
									(click)="onDecreaseCount('bedroomCount')"
									mat-stroked-button
									class="bg-basic-1 round-btn px-0"
									disableRipple
									type="button"
								>
									<mat-icon class="fg-prim-2 fs-18px">remove</mat-icon>
								</button>

								<input type="number" formControlName="bedroomCount" class="text-small-14px-regular lh-18px fg-general-5 border-0 w-35px text-center" />

								<button (click)="onIncreaseCount('bedroomCount')" mat-stroked-button class="bg-basic-1 round-btn px-0" disableRipple type="button">
									<mat-icon class="fg-prim-2">add</mat-icon>
								</button>
							</div>
						</div>

						<div class="d-flex justify-content-between mt-1">
							<div class="col">
								<span class="d-inline-block fg-general-4 text-small-14px-regular">Number of Bathrooms*</span>
							</div>

							<div class="col-auto add-btn justify-content-between">
								<button
									[disabled]="propertyInformationForm.getRawValue().bathroomCount < 1"
									(click)="onDecreaseCount('bathroomCount')"
									mat-stroked-button
									class="bg-basic-1 round-btn px-0"
									disableRipple
									type="button"
								>
									<mat-icon class="fg-prim-2 fs-18px">remove</mat-icon>
								</button>

								<input type="number" formControlName="bathroomCount" class="text-small-14px-regular lh-18px fg-general-5 border-0 w-35px text-center" />

								<button (click)="onIncreaseCount('bathroomCount')" mat-stroked-button class="bg-basic-1 round-btn px-0" disableRipple type="button">
									<mat-icon class="fg-prim-2">add</mat-icon>
								</button>
							</div>
						</div>
					</div>
				}

				<div class="row justify-content-center mb-2">
					<div class="col-6 pe-1">
						<mat-label class="fg-general-4 text-small-14px-regular">Property Size</mat-label>

						<mat-form-field appearance="outline" class="mt-1">
							<input
								digitOnly
								type="number"
								[decimal]="true"
								[min]="1"
								[max]="propertyInformationForm.get('propertyUnit').value === 'square-meters' ? 1000 : undefined"
								formControlName="propertySize"
								matInput
								placeholder="0.00"
								class="text-body-regular fg-general-5"
							/>
							<mat-error *ngIf="propertyInformationForm.get('propertySize').getError('max')" class="text-caption-regular fs-12px fw-400 lh-16px">
								Maximum 1000 square meters limit
							</mat-error>
							<mat-error *ngIf="propertyInformationForm.get('propertySize').getError('min')" class="text-caption-regular fs-12px fw-400 lh-16px">
								Property size must be greater than zero
							</mat-error>
							<mat-error *ngIf="propertyInformationForm.get('propertySize').getError('pattern')" class="text-caption-regular fs-12px fw-400 lh-16px">
								Please enter a valid number
							</mat-error>
						</mat-form-field>
					</div>

					<div class="col-6 ps-1">
						<mat-label class="fg-general-4 text-small-14px-regular">Unit</mat-label>

						<mat-form-field appearance="outline" class="mt-1">
							<mat-select formControlName="propertyUnit" [placeholder]="'Unit'">
								@for (unit of propertyUnits; track unit.reference) {
									<mat-option [value]="unit.reference">{{ unit.name }}</mat-option>
								}
							</mat-select>
						</mat-form-field>
					</div>
				</div>
			} @else if (propertyInformationForm.getRawValue().aisle === aisleType.SHARE_RESIDENTIAL) {
				<div class="col-md-12 mb-2">
					<mat-label class="fg-general-4 text-small-14px-regular">Room type*</mat-label>
					<mat-form-field appearance="outline" class="mt-1">
						<mat-select required formControlName="roomTypeId" [placeholder]="'Select Number of tenants'">
							@for (room of roomTypes; track room.id) {
								<mat-option [value]="room.id">{{ room.name }}</mat-option>
							}
						</mat-select>

						<mat-error class="text-caption-regular fs-12px fw-400 lh-16px">This is a required field</mat-error>
					</mat-form-field>
				</div>

				<div class="col-md-12 mb-2">
					<mat-label class="fg-general-4 text-small-14px-regular">Number of tenants sharing*</mat-label>
					<mat-form-field appearance="outline" class="mt-1">
						<mat-select required formControlName="otherTenantShareCount" [placeholder]="'Select Number of tenants'">
							@for (tenant of tenantList; track tenant.id) {
								<mat-option [value]="tenant.id">{{ tenant.name }}</mat-option>
							}
						</mat-select>

						<mat-error class="text-caption-regular fs-12px fw-400 lh-16px">This is a required field</mat-error>
					</mat-form-field>
				</div>
			}

			<ng-container *ngIf="propertyInformationForm.getRawValue().aisle">
				<div class="col-12">
					<mat-label class="fg-general-4 text-body-regular d-block">Amenities*</mat-label>
					<mat-form-field appearance="outline" class="w-100 address mt-1">
						<textarea
							matInput
							minlength="3"
							formControlName="comment"
							placeholder="E.g. Includes washer/dryer, electric heating, fast broadband, small pets allowed, private parking, and access to rear garden and patio."
							class="w-100 text-body-regular reason-area resize-none fg-general-5 py-2 mt-9"
							rows="8"
						></textarea>
						<mat-error class="text-caption-regular fs-12px fw-400 lh-16px">This is a required field</mat-error>
					</mat-form-field>
				</div>
			</ng-container>
		</div>
	</form>

	<div class="row justify-content-center gap-3 mt-3">
		<!-- Desktop View (fixed position) -->
		<div class="w-100 position-fixed bottom-0 border-top bg-basic-1 d-none d-md-block">
			<div class="row mx-auto p-3 mw-550px justify-content-end align-items-center">
				<div class="col-auto w-125px">
					<findqo-button
						id="rental-estimate-next-btn"
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
						id="rental-estimate-next-btn"
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
`, styles: ["/* apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/property-information/property-information.component.scss */\n.container {\n  max-width: 612px;\n}\ninput.search-location {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location:focus {\n  outline: unset !important;\n}\ninput.search-location::placeholder {\n  font-style: italic !important;\n  color: var(--general-2) !important;\n}\n.search-option {\n  min-height: 45px;\n  height: 45px;\n  border-bottom: 1px solid var(--neutral-1);\n}\n.bedroom-item {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.add-btn {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn * {\n  vertical-align: middle;\n}\n.add-btn input {\n  height: 100%;\n}\n.round-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn .mat-icon {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.bed-icon {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  background-color: var(--info-1);\n  position: relative;\n  display: inline-block;\n}\n.bed-icon > .mat-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bedroom-count {\n  line-height: 35px;\n  color: var(--general-5);\n}\n.w-35px {\n  width: 35px;\n}\n.w-600px {\n  max-width: 600px;\n}\n.h-100 {\n  height: 100% !important;\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na mat-icon {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-125px {\n  width: 125px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n.checkbox-list {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-information.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: PlaceAdFacade }, { type: DestroyService }, { type: RentalEstimateToolFacade }], { nextTab: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyInformationComponent, { className: "PropertyInformationComponent", filePath: "apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/property-information/property-information.component.ts", lineNumber: 51 });
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/about-you/about-you.component.ts
var _c02 = ["phoneNumber"];
function AboutYouComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 42);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 43);
    \u0275\u0275text(1, " The name should be between 3 and 80 characters. ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 42);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 42);
    \u0275\u0275text(1, " Please enter valid email ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44);
    \u0275\u0275text(1, "Your phone number is required");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 44);
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
    }, outputs: { nextTab: "nextTab", prevTab: "prevTab" }, standalone: false, decls: 65, vars: 24, consts: [[1, "container", "px-3"], [1, "heading-2", "lh-28px", "fs-24px", "mt-4", "mb-2"], [1, "my-4", 3, "formGroup"], [1, "row", "gap-2", "justify-content-center"], [1, "col-md-12"], [1, "mb-1", "fg-general-4", "text-body-regular"], ["appearance", "outline"], ["required", "", "formControlName", "fullname", "maxlength", "80", "minlength", "3", "placeholder", "Your Name", "matInput", "", 1, "text-body-regular", "fg-general-5"], ["class", "text-caption-regular fs-12px fw-400 lh-16px", 4, "ngIf"], ["class", "text-small-12px-regular", 4, "ngIf"], ["required", "", "formControlName", "email", "minlength", "3", "maxlength", "80", "placeholder", "Your Email", "matInput", "", 1, "text-body-regular", "fg-general-5"], [1, "col-12"], ["for", "phoneControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "row", "mx-0", "align-items-center", "w-70px"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0"], [1, "fs-14px", "fg-general-5"], [1, "col", "ps-2", "pe-0", "phone-number"], ["required", "", "placeholder", "Your Phone Number", "formControlName", "phone", "matInput", "", "minlength", "7", "maxlength", "15", "type", "tel", 1, "fs-14px"], ["class", "text-caption-regular", 4, "ngIf"], [1, "fg-general-4", "text-small-14px-regular"], ["formControlName", "isPersonValuation"], [1, "row", "mx-0", "align-items-center", "mt-2"], [1, "col-6", "pe-1"], ["tabindex", "0", 1, "checkbox-list", "d-flex", "align-items-center", "py-4", 3, "click", "keydown.enter"], ["color", "primary", 1, "ps-2", "text-body-regular", "fg-general-2", 3, "click", "keydown.enter", "ngClass", "value"], [1, "text-body-regular", "ps-2"], [1, "col-6", "ps-1"], ["color", "primary", 1, "ps-2", "text-body-regular", "fg-general-4", 3, "click", "keydown.enter", "ngClass", "value"], [1, "col-12", "mt-3"], [1, "text-caption-regular", "fg-general-4"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "w-100", "position-fixed", "bottom-0", "border-top", "bg-basic-1", "d-none", "d-md-block"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-end", "align-items-center"], [1, "col-auto", "w-125px"], ["id", "rental-estimate-generate-btn", "mat-flat-button", "", "color", "primary", "type", "submit", 1, "text-small-14px-regular", "text-truncate", "h-40px", 3, "click", "disabled"], [1, "w-100", "d-block", "d-md-none"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "align-items-center"], ["id", "rental-estimate-generate-btn", "mat-flat-button", "", "color", "primary", "type", "submit", 1, "text-small-14px-regular", "w-100", "d-block", 3, "click", "disabled"], [1, "text-caption-regular", "fs-12px", "fw-400", "lh-16px"], [1, "text-small-12px-regular"], [1, "text-caption-regular"]], template: function AboutYouComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Free Rental Estimate Tool for Irish Property Owners");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 2)(4, "div", 3)(5, "div", 4)(6, "mat-label", 5);
        \u0275\u0275text(7, "Your Name*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-form-field", 6);
        \u0275\u0275element(9, "input", 7);
        \u0275\u0275template(10, AboutYouComponent_mat_error_10_Template, 2, 0, "mat-error", 8)(11, AboutYouComponent_mat_error_11_Template, 2, 0, "mat-error", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 4)(13, "mat-label", 5);
        \u0275\u0275text(14, "Your Email*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 6);
        \u0275\u0275element(16, "input", 10);
        \u0275\u0275template(17, AboutYouComponent_mat_error_17_Template, 2, 0, "mat-error", 8)(18, AboutYouComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 11)(20, "mat-label", 12);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-form-field", 6)(24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "div", 16);
        \u0275\u0275element(28, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 18)(30, "span", 19);
        \u0275\u0275text(31, "+353");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 20);
        \u0275\u0275element(33, "input", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(34, AboutYouComponent_mat_error_34_Template, 2, 0, "mat-error", 22)(35, AboutYouComponent_mat_error_35_Template, 2, 1, "mat-error", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 11)(37, "mat-label", 23);
        \u0275\u0275text(38, "Interested in speaking with a local agent?*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-radio-group", 24)(40, "div", 25)(41, "div", 26)(42, "div", 27);
        \u0275\u0275listener("click", function AboutYouComponent_Template_div_click_42_listener() {
          return ctx.onUpdateRadioBtn("1");
        })("keydown.enter", function AboutYouComponent_Template_div_keydown_enter_42_listener() {
          return ctx.onUpdateRadioBtn("1");
        });
        \u0275\u0275elementStart(43, "mat-radio-button", 28);
        \u0275\u0275listener("click", function AboutYouComponent_Template_mat_radio_button_click_43_listener() {
          return ctx.onUpdateRadioBtn("1");
        })("keydown.enter", function AboutYouComponent_Template_mat_radio_button_keydown_enter_43_listener() {
          return ctx.onUpdateRadioBtn("1");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 29);
        \u0275\u0275text(45, "Yes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 30)(47, "div", 27);
        \u0275\u0275listener("click", function AboutYouComponent_Template_div_click_47_listener() {
          return ctx.onUpdateRadioBtn("0");
        })("keydown.enter", function AboutYouComponent_Template_div_keydown_enter_47_listener() {
          return ctx.onUpdateRadioBtn("0");
        });
        \u0275\u0275elementStart(48, "mat-radio-button", 31);
        \u0275\u0275listener("click", function AboutYouComponent_Template_mat_radio_button_click_48_listener() {
          return ctx.onUpdateRadioBtn("0");
        })("keydown.enter", function AboutYouComponent_Template_mat_radio_button_keydown_enter_48_listener() {
          return ctx.onUpdateRadioBtn("0");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 29);
        \u0275\u0275text(50, "No");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(51, "div", 32)(52, "p", 33);
        \u0275\u0275text(53, " By continuing, you accept FindQo\u2019s Terms of Service & Privacy Policy. You'll receive an AI-based property valuation, and your information will be sent to a dedicated estate agent for tailored insights and a precise valuation. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 34)(55, "div", 35)(56, "div", 36)(57, "div", 37)(58, "button", 38);
        \u0275\u0275listener("click", function AboutYouComponent_Template_button_click_58_listener() {
          return ctx.onNext();
        });
        \u0275\u0275text(59, " Generate Results ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "div", 39)(61, "div", 40)(62, "div", 11)(63, "button", 41);
        \u0275\u0275listener("click", function AboutYouComponent_Template_button_click_63_listener() {
          return ctx.onNext();
        });
        \u0275\u0275text(64, " Generate Results ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
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
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 22, "n3297"), "*");
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
    }, dependencies: [NgClass, NgIf, MatButton, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, MatFormField, MatLabel, MatError, MatInput, MatRadioGroup, MatRadioButton, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 612px;\n  padding-bottom: 75px;\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-80px[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.w-70px[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checkbox-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about-you.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutYouComponent, [{
    type: Component,
    args: [{ selector: "findqo-about-you", standalone: false, template: `<div class="container px-3">
	<h2 class="heading-2 lh-28px fs-24px mt-4 mb-2">Free Rental Estimate Tool for Irish Property Owners</h2>

	<form class="my-4" [formGroup]="aboutYouForm">
		<div class="row gap-2 justify-content-center">
			<div class="col-md-12">
				<mat-label class="mb-1 fg-general-4 text-body-regular">Your Name*</mat-label>

				<mat-form-field appearance="outline">
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

				<mat-form-field appearance="outline">
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

				<mat-form-field appearance="outline">
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
				<mat-label class="fg-general-4 text-small-14px-regular">Interested in speaking with a local agent?*</mat-label>
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
					By continuing, you accept FindQo\u2019s Terms of Service & Privacy Policy. You'll receive an AI-based property valuation, and your information will be sent
					to a dedicated estate agent for tailored insights and a precise valuation.
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
						id="rental-estimate-generate-btn"
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
						id="rental-estimate-generate-btn"
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
`, styles: ["/* apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/about-you/about-you.component.scss */\n.container {\n  max-width: 612px;\n  padding-bottom: 75px;\n}\n.w-35px {\n  width: 35px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-80px {\n  width: 80px;\n}\n.w-70px {\n  width: 70px;\n}\n.h-40px {\n  height: 40px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checkbox-list {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about-you.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutYouComponent, { className: "AboutYouComponent", filePath: "apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/about-you/about-you.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/confirmation-modal/confirmation-modal.component.ts
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
    args: [{ selector: "findqo-confirmation-modal", imports: [ButtonModule, SharedModule], template: '<div class="row dialog-container position-relative">\n	<div class="col-auto dialog-header">\n		<button mat-icon-button mat-dialog-close (click)="onCloseDialog()" class="close-btn">\n			<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>\n		</button>\n	</div>\n	<div class="container d-flex gap-3 justify-content-center flex-column">\n		<p class="heading-4-medium text-center">Request Submitted Successfully</p>\n		<p class="text-body-regular text-center">One of the approved estate agents will contact you soon to arrange your property valuation.</p>\n		<button class="text-body-regular w-100 button" (click)="onCloseDialog()" mat-flat-button color="primary" disableRipple>Got it</button>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/confirmation-modal/confirmation-modal.component.scss */\n.dialog-container {\n  height: 100%;\n  padding: 16px 16px 24px 16px;\n  justify-content: end;\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n}\n.button {\n  height: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/confirmation-modal.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationModalComponent, { className: "ConfirmationModalComponent", filePath: "apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/confirmation-modal/confirmation-modal.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/skeleton-loader/skeleton-loader.component.ts
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
        \u0275\u0275text(7, " Our tool is processing your rental estimate request based on rental info. It usually takes 20 to 30 seconds. ");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.h-50vh[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/skeleton-loader.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonLoaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-skeleton-loader", imports: [MatProgressSpinnerModule], template: '<div class="container">\n	<div class="row h-50vh justify-content-center align-items-center">\n		<div class="text-center">\n			<mat-spinner class="d-inline-block text-center"></mat-spinner>\n\n			<p class="heading-3-medium fg-general-5 text-center mt-3">Please wait...</p>\n\n			<span class="text-body-regular fg-general-5 text-center d-inline-block pt-1">\n				Our tool is processing your rental estimate request based on rental info. It usually takes 20 to 30 seconds.\n			</span>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/skeleton-loader/skeleton-loader.component.scss */\n.h-50vh {\n  height: 50vh;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/skeleton-loader.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonLoaderComponent, { className: "SkeletonLoaderComponent", filePath: "apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/skeleton-loader/skeleton-loader.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/rental-results.component.ts
function RentalResultsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-skeleton-loader");
  }
}
function RentalResultsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.aiContent, \u0275\u0275sanitizeHtml);
  }
}
function RentalResultsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2, " An error occurred. Try again shortly. You can also email us your property details at ");
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "hello@findqo.ie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "findqo-button", 6);
    \u0275\u0275listener("clicked", function RentalResultsComponent_div_3_Template_findqo_button_clicked_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onRetry());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("label", "Retry")("btnType", ctx_r0.buttonType.FILLED);
  }
}
var RentalResultsComponent = class _RentalResultsComponent {
  constructor(rentalfacade, snack, dialog, propertyWorthState) {
    this.rentalfacade = rentalfacade;
    this.snack = snack;
    this.dialog = dialog;
    this.propertyWorthState = propertyWorthState;
    this.isLoading = true;
    this.inPersonValuationRequested = false;
    this.isError = false;
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
      this.propertyWorthState.setLoadingState(true);
      this.propertyWorthState.setErrorState(false);
      this.postPropertyWorth();
    } else {
      this.prevTab.emit(0);
    }
  }
  postPropertyWorth() {
    const API_PAYLOAD = this.removeEmptyKeys(this.payload);
    this.rentalfacade.setIsProcessing(true);
    this.rentalfacade.postRentalProperty(API_PAYLOAD).subscribe((res) => {
      this.propertyWorthState.setLoadingState(false);
      this.propertyWorthState.setErrorState(false);
      this.isLoading = false;
      this.valuationId = res?.["data"]?.id;
      this.aiContent = parse(res?.["data"]?.aiResponse);
      this.rentalfacade.setIsProcessing(false);
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
      this.rentalfacade.setIsProcessing(false);
      this.isError = true;
      this.isLoading = false;
      this.propertyWorthState.setLoadingState(false);
      this.propertyWorthState.setErrorState(true);
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
  onRetry() {
    this.aiContent = null;
    this.isLoading = true;
    this.inPersonValuationRequested = false;
    this.isError = false;
    this.postPropertyWorth();
  }
  static {
    this.\u0275fac = function RentalResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentalResultsComponent)(\u0275\u0275directiveInject(RentalEstimateToolFacade), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PropertyWorthState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RentalResultsComponent, selectors: [["findqo-rental-results"]], inputs: { formData: "formData" }, outputs: { prevTab: "prevTab" }, standalone: false, decls: 4, vars: 2, consts: [[1, "container", "property-information-form", "mt-5"], [1, "ai-content", 3, "innerHTML"], [4, "ngIf"], ["href", "mailto:hello@findqo.ie", 1, "fg-prim-2"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "justify-content-center", "align-items-center"], [1, "col-12", "col-md-3"], ["btnClass", "text-small-14px-regular w-100", "type", "button", 1, "d-block", 3, "clicked", "label", "btnType"]], template: function RentalResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, RentalResultsComponent_Conditional_1_Template, 1, 0, "findqo-skeleton-loader")(2, RentalResultsComponent_Conditional_2_Template, 1, 1, "div", 1)(3, RentalResultsComponent_div_3_Template, 8, 2, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isLoading ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isError);
      }
    }, dependencies: [NgIf, ButtonComponent, SkeletonLoaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 650px;\n  padding-bottom: 75px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/rental-results.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentalResultsComponent, [{
    type: Component,
    args: [{ selector: "findqo-rental-results", standalone: false, template: `<div class="container property-information-form mt-5">
	@if (isLoading) {
		<findqo-skeleton-loader></findqo-skeleton-loader>
	} @else {
		<div class="ai-content" [innerHTML]="aiContent"></div>
	}

	<div *ngIf="isError">
		<p>
			An error occurred. Try again shortly. You can also email us your property details at
			<a class="fg-prim-2" href="mailto:hello@findqo.ie">hello&#64;findqo.ie</a>
		</p>

		<div class="row mx-auto p-lg-2 justify-content-end justify-content-center align-items-center">
			<div class="col-12 col-md-3">
				<findqo-button
					btnClass="text-small-14px-regular w-100"
					class="d-block"
					[label]="'Retry'"
					(clicked)="onRetry()"
					[btnType]="buttonType.FILLED"
					type="button"
				></findqo-button>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/rental-results.component.scss */\n.container {\n  max-width: 650px;\n  padding-bottom: 75px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/rental-results.component.css.map */\n"] }]
  }], () => [{ type: RentalEstimateToolFacade }, { type: SnackService }, { type: MatDialog }, { type: PropertyWorthState }], { prevTab: [{
    type: Output
  }], formData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RentalResultsComponent, { className: "RentalResultsComponent", filePath: "apps/findqo-ireland/src/app/feature/rental-estimate-tool/components/rental-results/rental-results.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/rental-estimate-tool.component.ts
function RentalEstimateToolComponent_findqo_place_free_ad_banner_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-place-free-ad-banner", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valuationData", ctx_r0.formData);
  }
}
var RentalEstimateToolComponent = class _RentalEstimateToolComponent {
  constructor(viewPort, rentalToolFacade, router, propertyWorthState) {
    this.viewPort = viewPort;
    this.rentalToolFacade = rentalToolFacade;
    this.router = router;
    this.propertyWorthState = propertyWorthState;
    this.buttonType = ButtonType;
    this.selectedIndex = 0;
    this.isLoading$ = this.propertyWorthState.isLoading$;
    this.isError$ = this.propertyWorthState.isError$;
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
    this.\u0275fac = function RentalEstimateToolComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentalEstimateToolComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(RentalEstimateToolFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PropertyWorthState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RentalEstimateToolComponent, selectors: [["findqo-rental-estimate-tool"]], standalone: false, decls: 13, vars: 18, consts: [[1, "property-worth-tab", 3, "ngClass"], [1, "my-3", "h-100", 3, "selectedTabChange", "selectedIndex"], ["label", "1. Rental Info", 3, "disabled", "tabIndex"], [3, "nextTab"], ["label", "2. About You", 3, "tabIndex", "disabled"], [3, "prevTab", "nextTab"], ["label", "3. Rental Estimate", 3, "tabIndex", "disabled"], ["class", "d-block container", 3, "valuationData", 4, "ngIf"], [3, "prevTab", "formData"], [1, "d-block", "container", 3, "valuationData"]], template: function RentalEstimateToolComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1);
        \u0275\u0275listener("selectedTabChange", function RentalEstimateToolComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275elementStart(2, "mat-tab", 2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementStart(4, "findqo-property-information", 3);
        \u0275\u0275listener("nextTab", function RentalEstimateToolComponent_Template_findqo_property_information_nextTab_4_listener($event) {
          return ctx.onNextTab($event, 1);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-tab", 4);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "findqo-about-you", 5);
        \u0275\u0275listener("prevTab", function RentalEstimateToolComponent_Template_findqo_about_you_prevTab_7_listener() {
          return ctx.onPrevTab(0);
        })("nextTab", function RentalEstimateToolComponent_Template_findqo_about_you_nextTab_7_listener($event) {
          return ctx.onNextTab($event, 2);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-tab", 6);
        \u0275\u0275template(9, RentalEstimateToolComponent_findqo_place_free_ad_banner_9_Template, 1, 1, "findqo-place-free-ad-banner", 7);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementStart(12, "findqo-rental-results", 8);
        \u0275\u0275listener("prevTab", function RentalEstimateToolComponent_Template_findqo_rental_results_prevTab_12_listener($event) {
          return ctx.onPrevTab($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.viewPort.mobile ? "container-fluid p-0" : "container");
        \u0275\u0275advance();
        \u0275\u0275property("selectedIndex", ctx.selectedIndex);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 10, ctx.rentalToolFacade.isProcessing$))("tabIndex", 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("tabIndex", 1)("disabled", !ctx.propertyInformation || \u0275\u0275pipeBind1(6, 12, ctx.rentalToolFacade.isProcessing$));
        \u0275\u0275advance(3);
        \u0275\u0275property("tabIndex", 2)("disabled", !ctx.aboutYou);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(10, 14, ctx.isLoading$) && !\u0275\u0275pipeBind1(11, 16, ctx.isError$));
        \u0275\u0275advance(3);
        \u0275\u0275property("formData", ctx.formData);
      }
    }, dependencies: [PlaceFreeAdBannerComponent, NgClass, NgIf, MatTab, MatTabGroup, PropertyInformationComponent, AboutYouComponent, RentalResultsComponent, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentalEstimateToolComponent, [{
    type: Component,
    args: [{ selector: "findqo-rental-estimate-tool", standalone: false, template: `<div class="property-worth-tab" [ngClass]="viewPort.mobile ? 'container-fluid p-0' : 'container'">
	<mat-tab-group (selectedTabChange)="onTabChange($event)" [selectedIndex]="selectedIndex" class="my-3 h-100">
		<mat-tab [disabled]="rentalToolFacade.isProcessing$ | async" [tabIndex]="0" label="1. Rental Info">
			<findqo-property-information (nextTab)="onNextTab($event, 1)"></findqo-property-information>
		</mat-tab>

		<mat-tab [tabIndex]="1" [disabled]="!propertyInformation || (rentalToolFacade.isProcessing$ | async)" label="2. About You">
			<findqo-about-you (prevTab)="onPrevTab(0)" (nextTab)="onNextTab($event, 2)"></findqo-about-you>
		</mat-tab>

		<mat-tab [tabIndex]="2" [disabled]="!aboutYou" label="3. Rental Estimate">
			<findqo-place-free-ad-banner
				[valuationData]="formData"
				class="d-block container"
				*ngIf="!(isLoading$ | async) && !(isError$ | async)"
			></findqo-place-free-ad-banner>
			<findqo-rental-results (prevTab)="onPrevTab($event)" [formData]="formData"></findqo-rental-results>
		</mat-tab>
	</mat-tab-group>
</div>
` }]
  }], () => [{ type: ViewportService }, { type: RentalEstimateToolFacade }, { type: Router }, { type: PropertyWorthState }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RentalEstimateToolComponent, { className: "RentalEstimateToolComponent", filePath: "apps/findqo-ireland/src/app/feature/rental-estimate-tool/rental-estimate-tool.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/rental-estimate-tool-routing.module.ts
var routes = [{ path: "", component: RentalEstimateToolComponent }];
var RentalEstimateToolRoutingModule = class _RentalEstimateToolRoutingModule {
  static {
    this.\u0275fac = function RentalEstimateToolRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentalEstimateToolRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RentalEstimateToolRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentalEstimateToolRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/rental-estimate-tool/rental-estimate-tool.module.ts
var RentalEstimateToolModule = class _RentalEstimateToolModule {
  static {
    this.\u0275fac = function RentalEstimateToolModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RentalEstimateToolModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RentalEstimateToolModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [RentalEstimateToolFacade], imports: [
      CommonModule,
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
      RentalEstimateToolRoutingModule,
      SkeletonLoaderComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentalEstimateToolModule, [{
    type: NgModule,
    args: [{
      declarations: [RentalEstimateToolComponent, PropertyInformationComponent, AboutYouComponent, RentalResultsComponent],
      imports: [
        PlaceFreeAdBannerComponent,
        CommonModule,
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
        RentalEstimateToolRoutingModule,
        SkeletonLoaderComponent
      ],
      providers: [RentalEstimateToolFacade]
    }]
  }], null, null);
})();
export {
  RentalEstimateToolModule
};
//# sourceMappingURL=chunk-MCZ34ACQ.js.map
