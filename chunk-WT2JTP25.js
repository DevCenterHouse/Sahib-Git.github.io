import {
  PropertyWorthFacade
} from "./chunk-UFWQVVKR.js";
import {
  PlaceFreeAdBannerComponent
} from "./chunk-U7UTEUHF.js";
import {
  PhoneNumberValidation
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
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
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
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DateAdapter,
  DefaultValueAccessor,
  DigitOnlyDirective,
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
  MatPrefix,
  MatSuffix,
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
  RouterModule,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/property-worth/components/property-information/property-information.component.ts
var _c0 = (a0) => ({ eirCodeOptions: a0 });
var _c1 = () => ["site", ""];
var _forTrack0 = ($index, $item) => $item.reference;
function PropertyInformationComponent_div_0_div_23_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 61);
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
function PropertyInformationComponent_div_0_div_23_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 62);
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
function PropertyInformationComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-label", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 52);
    \u0275\u0275element(5, "input", 53);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementStart(7, "findqo-button", 54);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_div_23_Template_findqo_button_clicked_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onErCodeSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-autocomplete", 55, 1);
    \u0275\u0275listener("optionSelected", function PropertyInformationComponent_div_0_div_23_Template_mat_autocomplete_optionSelected_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const vm_r4 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onupdateAddress($event, vm_r4 == null ? null : vm_r4.eirCodeOptions));
    });
    \u0275\u0275template(11, PropertyInformationComponent_div_0_div_23_mat_option_11_Template, 2, 4, "mat-option", 56)(12, PropertyInformationComponent_div_0_div_23_mat_option_12_Template, 3, 4, "mat-option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-error")(14, "span", 58);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-hint", 59);
    \u0275\u0275text(18, " Can\u2019t find your eircode or address? ");
    \u0275\u0275elementStart(19, "a", 60);
    \u0275\u0275text(20, "Find Eircode");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const auto_r7 = \u0275\u0275reference(10);
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 11, "n3459"), "*");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r2.addressErCode)("matAutocomplete", auto_r7)("placeholder", \u0275\u0275pipeBind1(6, 13, "n3460"));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnClass", "fs-14px fw-400 lh-18px")("materialIconPrefix", "search")("label", \u0275\u0275pipeBind1(8, 15, "n681"))("btnType", ctx_r2.buttonType.BASIC);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", vm_r4 == null ? null : vm_r4.eirCodeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r4 == null ? null : vm_r4.eirCodeOptions == null ? null : vm_r4.eirCodeOptions.length) === 0 && ctx_r2.propertyInformationForm.get("address").value.trim() !== "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "n3513"));
  }
}
function PropertyInformationComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 65);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_div_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEditAddress());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "n3466"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.propertyInformationForm.getRawValue()) == null ? null : tmp_5_0.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "n3467"));
  }
}
function PropertyInformationComponent_div_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
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
function PropertyInformationComponent_div_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 66)(2, "div", 67)(3, "span", 68);
    \u0275\u0275text(4, "Number of Bedrooms*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 69)(6, "button", 70);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDecreaseCount("bedroomCount"));
    });
    \u0275\u0275elementStart(7, "mat-icon", 71);
    \u0275\u0275text(8, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "input", 72);
    \u0275\u0275elementStart(10, "button", 73);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_34_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onIncreaseCount("bedroomCount"));
    });
    \u0275\u0275elementStart(11, "mat-icon", 74);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 75)(14, "div", 67)(15, "span", 68);
    \u0275\u0275text(16, "Number of Bathrooms*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 76)(18, "button", 70);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_34_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDecreaseCount("bathroomCount"));
    });
    \u0275\u0275elementStart(19, "mat-icon", 71);
    \u0275\u0275text(20, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 77);
    \u0275\u0275elementStart(22, "button", 73);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Conditional_34_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onIncreaseCount("bathroomCount"));
    });
    \u0275\u0275elementStart(23, "mat-icon", 74);
    \u0275\u0275text(24, "add");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.propertyInformationForm.getRawValue().bedroomCount < 1);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r2.propertyInformationForm.getRawValue().bathroomCount < 1);
  }
}
function PropertyInformationComponent_div_0_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Maximum 1000 square meters limit ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Property size must be greater than zero ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Please enter a valid number ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
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
function PropertyInformationComponent_div_0_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Price must be greater than zero ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Please enter a valid number ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_ng_container_86_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_ng_container_86_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Estimated cost must be greater than zero ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_ng_container_86_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 20);
    \u0275\u0275text(1, " Please enter a valid number ");
    \u0275\u0275elementEnd();
  }
}
function PropertyInformationComponent_div_0_ng_container_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29)(3, "mat-label", 16);
    \u0275\u0275text(4, "Estimated Cost of Improvements*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 17)(6, "span", 30);
    \u0275\u0275text(7, "\u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 78);
    \u0275\u0275template(9, PropertyInformationComponent_div_0_ng_container_86_mat_error_9_Template, 2, 0, "mat-error", 25)(10, PropertyInformationComponent_div_0_ng_container_86_mat_error_10_Template, 2, 0, "mat-error", 25)(11, PropertyInformationComponent_div_0_ng_container_86_mat_error_11_Template, 2, 0, "mat-error", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 32)(13, "mat-label", 79);
    \u0275\u0275text(14, "Details of Improvements Made*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 80);
    \u0275\u0275element(16, "textarea", 81);
    \u0275\u0275elementStart(17, "mat-error", 20);
    \u0275\u0275text(18, "This is a required field");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("improvementCost").getError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("improvementCost").getError("min"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("improvementCost").getError("pattern"));
  }
}
function PropertyInformationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h1", 4);
    \u0275\u0275text(2, "Ireland Property Valuation Calculator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, " Input your Eircode and property details for an instant property valuation with FindQo.ie\u2019s AI-powered calculator. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "p", 7);
    \u0275\u0275text(7, "FindQo.ie valuation calculator works on the basis of:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ol", 8)(9, "li", 9);
    \u0275\u0275text(10, " Live Market Data: ");
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "Current listings from all major property platforms in Ireland.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 9);
    \u0275\u0275text(14, " Historical Insights: ");
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16, " Sales data from the past 3 years within a 3KM radius of your property, matched by size and specifications. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li", 9);
    \u0275\u0275text(18, " Exclusive FindQo.ie Intelligence: ");
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20, "Unique insights powered by our proprietary data.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "form", 11)(22, "div", 12);
    \u0275\u0275template(23, PropertyInformationComponent_div_0_div_23_Template, 21, 19, "div", 13)(24, PropertyInformationComponent_div_0_div_24_Template, 9, 7, "div", 14);
    \u0275\u0275elementStart(25, "div", 15)(26, "mat-label", 16);
    \u0275\u0275text(27, "Property Type*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 17)(29, "mat-select", 18);
    \u0275\u0275repeaterCreate(30, PropertyInformationComponent_div_0_For_31_Template, 2, 2, "mat-option", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-error", 20);
    \u0275\u0275text(33, "This is a required field");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, PropertyInformationComponent_div_0_Conditional_34_Template, 25, 2, "div", 21);
    \u0275\u0275elementStart(35, "div", 22)(36, "div", 23)(37, "mat-label", 16);
    \u0275\u0275text(38, "Property Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 17);
    \u0275\u0275element(40, "input", 24);
    \u0275\u0275template(41, PropertyInformationComponent_div_0_mat_error_41_Template, 2, 0, "mat-error", 25)(42, PropertyInformationComponent_div_0_mat_error_42_Template, 2, 0, "mat-error", 25)(43, PropertyInformationComponent_div_0_mat_error_43_Template, 2, 0, "mat-error", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 26)(45, "mat-label", 16);
    \u0275\u0275text(46, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 17)(48, "mat-select", 27);
    \u0275\u0275repeaterCreate(49, PropertyInformationComponent_div_0_For_50_Template, 2, 2, "mat-option", 19, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 28)(52, "div", 29)(53, "mat-label", 16);
    \u0275\u0275text(54, "Purchase Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-form-field", 17)(56, "span", 30);
    \u0275\u0275text(57, "\u20AC");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 31);
    \u0275\u0275template(59, PropertyInformationComponent_div_0_mat_error_59_Template, 2, 0, "mat-error", 25)(60, PropertyInformationComponent_div_0_mat_error_60_Template, 2, 0, "mat-error", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 28)(62, "div", 32)(63, "mat-label", 16);
    \u0275\u0275text(64, "Year of purchase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-form-field", 17)(66, "input", 33);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_input_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const propertyWorthDate_r12 = \u0275\u0275reference(69);
      return \u0275\u0275resetView(propertyWorthDate_r12.open());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "mat-datepicker-toggle", 34);
    \u0275\u0275elementStart(68, "mat-datepicker", 35, 0);
    \u0275\u0275listener("yearSelected", function PropertyInformationComponent_div_0_Template_mat_datepicker_yearSelected_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      const propertyWorthDate_r12 = \u0275\u0275reference(69);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSetYear($event, propertyWorthDate_r12));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 28)(71, "div", 32)(72, "mat-label", 16);
    \u0275\u0275text(73, "Have you made any improvements to the property?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-radio-group", 36)(75, "div", 37)(76, "div", 23)(77, "div", 38);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_div_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpdateRadioBtn(true));
    });
    \u0275\u0275elementStart(78, "mat-radio-button", 39);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_mat_radio_button_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpdateRadioBtn(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span", 40);
    \u0275\u0275text(80, "Yes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 26)(82, "div", 38);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_div_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpdateRadioBtn(false));
    });
    \u0275\u0275elementStart(83, "mat-radio-button", 41);
    \u0275\u0275listener("click", function PropertyInformationComponent_div_0_Template_mat_radio_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpdateRadioBtn(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 40);
    \u0275\u0275text(85, "No");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(86, PropertyInformationComponent_div_0_ng_container_86_Template, 19, 3, "ng-container", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 43)(88, "div", 44)(89, "div", 45)(90, "div", 46)(91, "findqo-button", 47);
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_Template_findqo_button_clicked_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNext());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 48)(93, "div", 49)(94, "div", 32)(95, "findqo-button", 50);
    \u0275\u0275listener("clicked", function PropertyInformationComponent_div_0_Template_findqo_button_clicked_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNext());
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const propertyWorthDate_r12 = \u0275\u0275reference(69);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("formGroup", ctx_r2.propertyInformationForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_4_0 = ctx_r2.propertyInformationForm.getRawValue()) == null ? null : tmp_4_0.address));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r2.propertyInformationForm.getRawValue()) == null ? null : tmp_5_0.address);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Select Property Type");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.residentialsStands == null ? null : ctx_r2.residentialsStands["stands"]);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pureFunction0(33, _c1).includes(ctx_r2.propertyInformationForm.getRawValue().stand) ? 34 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("decimal", true)("min", 1)("max", ctx_r2.propertyInformationForm.get("propertyUnit").value === "square-meters" ? 1e3 : void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("propertySize").getError("max"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("propertySize").getError("min"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("propertySize").getError("pattern"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Unit");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.propertyUnits);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("purchasePrice").getError("min"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.get("purchasePrice").getError("pattern"));
    \u0275\u0275advance(6);
    \u0275\u0275property("max", ctx_r2.maxDate)("matDatepicker", propertyWorthDate_r12)("placeholder", "eg: 2015");
    \u0275\u0275advance();
    \u0275\u0275property("for", propertyWorthDate_r12);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("chip-selected", ctx_r2.propertyInformationForm.getRawValue().improvements === true);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.propertyInformationForm.getRawValue().improvements === true ? "fg-prim-2" : "fg-general-5")("value", true);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("feedback-chip-selected", ctx_r2.propertyInformationForm.getRawValue().improvements === false);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.propertyInformationForm.getRawValue().improvements === false ? "fg-prim-2" : "fg-general-5")("value", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.propertyInformationForm.getRawValue().improvements);
    \u0275\u0275advance(5);
    \u0275\u0275property("label", "Next")("isDisabled", ctx_r2.propertyInformationForm.invalid)("btnType", ctx_r2.buttonType.FILLED);
    \u0275\u0275advance(4);
    \u0275\u0275property("label", "Next")("isDisabled", ctx_r2.propertyInformationForm.invalid)("btnType", ctx_r2.buttonType.FILLED);
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
  constructor(fb, placeAdFacade, destroy, propertyWorth) {
    this.fb = fb;
    this.placeAdFacade = placeAdFacade;
    this.destroy = destroy;
    this.propertyWorth = propertyWorth;
    this.propertyInformationForm = this.fb.group({
      address: ["", [Validators.required]],
      countyArea: ["", [Validators.required]],
      county: ["", [Validators.required]],
      eirCode: [""],
      stand: ["", [Validators.required]],
      bedroomCount: [0, [Validators.required]],
      bathroomCount: [0, [Validators.required]],
      propertySize: [void 0, [Validators.min(1), Validators.pattern("^[0-9.]*$")]],
      propertyUnit: [""],
      purchasePrice: [void 0, [Validators.min(1), Validators.pattern("^[0-9.]*$")]],
      purchaseYear: [],
      improvements: [void 0],
      improvementCost: ["", [Validators.min(1), Validators.pattern("^[0-9.]*$")]],
      improvementDetail: [""]
    });
    this.nextTab = new EventEmitter();
    this.residentialsStands = {};
    this.propertyUnits = [];
    this.maxDate = /* @__PURE__ */ new Date();
    this.buttonType = ButtonType;
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
  onUpdateRadioBtn(fromRadioButton) {
    this.propertyInformationForm.get("improvements").setValue(fromRadioButton);
    if (fromRadioButton) {
      this.propertyInformationForm.get("improvementCost").setValidators([Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]);
      this.propertyInformationForm.get("improvementCost").setErrors({ required: true });
      this.propertyInformationForm.get("improvementDetail").setValidators([Validators.required]);
      this.propertyInformationForm.updateValueAndValidity();
    } else {
      this.propertyInformationForm.get("improvementCost").setValue("");
      this.propertyInformationForm.get("improvementCost").clearValidators();
      this.propertyInformationForm.get("improvementCost").setErrors(null);
      this.propertyInformationForm.get("improvementDetail").setValue("");
      this.propertyInformationForm.get("improvementDetail").clearValidators();
      this.propertyInformationForm.get("improvementDetail").setErrors(null);
      this.propertyInformationForm.updateValueAndValidity();
    }
  }
  onSetYear(normalizedYear, datepicker) {
    if (normalizedYear) {
      const ctrlValue = this.propertyInformationForm.getRawValue().purchaseYear || /* @__PURE__ */ new Date();
      ctrlValue.setFullYear(normalizedYear.getFullYear());
      this.propertyInformationForm.patchValue({
        purchaseYear: ctrlValue
      });
      datepicker.close(normalizedYear);
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
    this.nextTab.emit({
      status: this.propertyInformationForm.status,
      value: __spreadValues(__spreadValues(__spreadValues({}, FORM_DATA), FORM_DATA.purchaseYear ? { purchaseYear: FORM_DATA.purchaseYear.getFullYear() } : {}), FORM_DATA.improvements ? { improvements: 1 } : { improvements: 0 }),
      form: "propertyInformation"
    });
  }
  onIncreaseCount(field) {
    this.propertyInformationForm.patchValue({
      [field]: this.propertyInformationForm.getRawValue()[field] + 1
    });
  }
  onDecreaseCount(field) {
    this.propertyInformationForm.patchValue({
      [field]: this.propertyInformationForm.getRawValue()[field] - 1
    });
  }
  ngOnInit() {
    this.callEricodeApi();
    this.propertyWorth.getSectionList().subscribe((res) => {
      const STANDS = res.filter((res2) => res2.reference === "sell-residential");
      this.residentialsStands = STANDS[0];
    });
    this.propertyWorth.getFilterUnits().subscribe((res) => {
      this.propertyUnits = res;
      if (res && res?.length) {
        this.propertyInformationForm.patchValue({
          propertyUnit: res.find((res2) => res2.reference === "square-meters")?.reference
        });
        this.propertyInformationForm.addControl("propertySize", this.fb.control(void 0, [Validators.max(1e3)]));
      }
    });
    this.propertyInformationForm.get("propertyUnit").valueChanges.subscribe((unit) => {
      if (unit === "square-meters") {
        this.propertyInformationForm.addControl("propertySize", this.fb.control(void 0, [Validators.max(1e3)]));
      }
    });
    this.propertyInformationForm.get("stand").valueChanges.subscribe((res) => {
      if (res === "site") {
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
      return new (__ngFactoryType__ || _PropertyInformationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(PropertyWorthFacade));
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
    ])], decls: 2, vars: 5, consts: [["propertyWorthDate", ""], ["auto", "matAutocomplete"], ["class", "container pb-md-5 property-information-form", 4, "ngIf"], [1, "container", "pb-md-5", "property-information-form"], [1, "heading-2", "lh-28px", "fs-24px", "mt-4", "mb-2"], [1, "text-body-regular", "fg-general-5"], [1, "border", "rounded-1", "p-2", "mt-2"], [1, "text-caption-regular", "fg-general-5", "fs-12px", "lh-16px", "pb-1"], [1, "mb-0", "px-3"], [1, "pb-1", "text-caption-medium", "fg-general-5", "fs-12px", "lh-16px"], [1, "text-caption-regular", "fw-400"], [1, "my-4", 3, "formGroup"], [1, "row", "justify-content-center", "gap-1", "mt-3"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "fg-general-4", "text-small-14px-regular"], ["appearance", "outline"], ["required", "", "formControlName", "stand", 3, "placeholder"], [3, "value"], [1, "text-caption-regular", "fs-12px", "fw-400", "lh-16px"], [1, "row", "align-items-center", "mb-2"], [1, "row", "justify-content-center", "my-2"], [1, "col-6", "pe-1"], ["digitOnly", "", "type", "number", "formControlName", "propertySize", "matInput", "", "placeholder", "0.00", 1, "text-body-regular", "fg-general-5", 3, "decimal", "min", "max"], ["class", "text-caption-regular fs-12px fw-400 lh-16px", 4, "ngIf"], [1, "col-6", "ps-1"], ["formControlName", "propertyUnit", 3, "placeholder"], [1, "row", "justify-content-center"], [1, "col-md-12"], ["matPrefix", "", 1, "ps-1", "fg-general-3", "text-body-regular"], ["min", "1", "formControlName", "purchasePrice", "type", "tel", "placeholder", "Enter a number", "matInput", "", 1, "text-body-regular", "fg-general-5"], [1, "col-12"], ["type", "text", "formControlName", "purchaseYear", "matInput", "", "readonly", "", 1, "eircode-search", 3, "click", "max", "matDatepicker", "placeholder"], ["matIconSuffix", "", 3, "for"], ["startView", "multi-year", 3, "yearSelected"], ["formControlName", "improvements"], [1, "row", "mx-0", "align-items-center", "mt-2", "mb-3"], [1, "checkbox-list", "d-flex", "align-items-center", "py-4", 3, "click"], ["color", "primary", "label", "role", 1, "ps-2", "text-body-regular", "fg-general-2", 3, "click", "ngClass", "value"], [1, "text-body-regular", "ps-2"], ["color", "primary", "label", "role", 1, "ps-2", "text-body-regular", "fg-general-4", 3, "click", "ngClass", "value"], [4, "ngIf"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "w-100", "position-fixed", "bottom-0", "border-top", "bg-basic-1", "d-none", "d-md-block"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-end", "align-items-center"], [1, "col-auto", "w-125px"], ["id", "property-worth-next-btn", "btnClass", "text-small-14px-regular w-100 h-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [1, "w-100", "d-block", "d-md-none"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "align-items-center"], ["id", "property-worth-next-btn", "btnClass", "text-small-14px-regular w-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], ["for", "eidControl", 1, "fg-general-4", "text-small-14px-regular", "d-block"], ["appearance", "outline", "id", "eidControl", 1, "text-body-regular", "mt-1"], ["type", "text", "matInput", "", 1, "eircode-search", 3, "formControl", "matAutocomplete", "placeholder"], [1, "d-block", 3, "clicked", "btnClass", "materialIconPrefix", "label", "btnType"], ["required", "", 3, "optionSelected"], ["class", "mb-1 py-5px fg-general-4 text-paragraph-regular lh-22px", 3, "value", "mt-2", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "fs-12px", "fw-400", "lh-16px"], [1, "mt-1", "text-caption-regular", "fg-general-4"], ["target", "_blank", "href", "https://finder.eircode.ie/", 1, "fg-prim-2"], [1, "mb-1", "py-5px", "fg-general-4", "text-paragraph-regular", "lh-22px", 3, "value"], [3, "disabled"], [1, "fg-general-3", "text-small-14px-regular", "d-block"], [1, "fg-general-5", "text-small-14px-regular", "d-block", "my-2"], ["mat-button", "", "color", "primary", 1, "px-0", "text-body-regular", "eir-btn", 3, "click"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "col"], [1, "d-inline-block", "fg-general-4", "text-small-14px-regular"], [1, "col-auto", "add-btn"], ["mat-stroked-button", "", "disableRipple", "", "type", "button", 1, "bg-basic-1", "round-btn", "px-0", 3, "click", "disabled"], [1, "fg-prim-2", "fs-18px"], ["type", "number", "formControlName", "bedroomCount", 1, "text-small-14px-regular", "lh-18px", "fg-general-5", "border-0", "w-35px", "text-center"], ["mat-stroked-button", "", "disableRipple", "", "type", "button", 1, "bg-basic-1", "round-btn", "px-0", 3, "click"], [1, "fg-prim-2"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "col-auto", "add-btn", "justify-content-between"], ["type", "number", "formControlName", "bathroomCount", 1, "text-small-14px-regular", "lh-18px", "fg-general-5", "border-0", "w-35px", "text-center"], ["formControlName", "improvementCost", "type", "tel", "placeholder", "Enter a number", "matInput", "", 1, "text-body-regular", "fg-general-5"], [1, "fg-general-4", "text-body-regular", "d-block"], ["appearance", "outline", 1, "w-100", "address"], ["matInput", "", "minlength", "3", "formControlName", "improvementDetail", "placeholder", "Optional examples: new flooring, kitchen remodel, bathroom upgrade, attic conversion, granny flat, garden makeover, heating system upgrade, and more.", "rows", "8", 1, "w-100", "text-body-regular", "reason-area", "resize-none", "fg-general-5", "pt-2", "mt-9"]], template: function PropertyInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PropertyInformationComponent_div_0_Template, 96, 34, "div", 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.eirCodeOptions$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIcon, DigitOnlyDirective, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MinValidator, MaxValidator, FormControlDirective, FormGroupDirective, FormControlName, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatSelect, MatInput, ButtonComponent, MatRadioGroup, MatRadioButton, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, AsyncPipe, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\ninput.search-location[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location[_ngcontent-%COMP%]:focus {\n  outline: unset !important;\n}\ninput.search-location[_ngcontent-%COMP%]::placeholder {\n  font-style: italic !important;\n  color: var(--general-2) !important;\n}\n.search-option[_ngcontent-%COMP%] {\n  min-height: 45px;\n  height: 45px;\n  border-bottom: 1px solid var(--neutral-1);\n}\n.bedroom-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.add-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.add-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.round-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.bed-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  background-color: var(--info-1);\n  position: relative;\n  display: inline-block;\n}\n.bed-icon[_ngcontent-%COMP%]    > .mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bedroom-count[_ngcontent-%COMP%] {\n  line-height: 35px;\n  color: var(--general-5);\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.w-600px[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-125px[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n.checkbox-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-information.component.css.map */"] });
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
	<h1 class="heading-2 lh-28px fs-24px mt-4 mb-2">Ireland Property Valuation Calculator</h1>

	<p class="text-body-regular fg-general-5">
		Input your Eircode and property details for an instant property valuation with FindQo.ie\u2019s AI-powered calculator.
	</p>

	<div class="border rounded-1 p-2 mt-2">
		<p class="text-caption-regular fg-general-5 fs-12px lh-16px pb-1">FindQo.ie valuation calculator works on the basis of:</p>

		<ol class="mb-0 px-3">
			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">
				Live Market Data:
				<span class="text-caption-regular fw-400">Current listings from all major property platforms in Ireland.</span>
			</li>

			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">
				Historical Insights:
				<span class="text-caption-regular fw-400">
					Sales data from the past 3 years within a 3KM radius of your property, matched by size and specifications.
				</span>
			</li>

			<li class="pb-1 text-caption-medium fg-general-5 fs-12px lh-16px">
				Exclusive FindQo.ie Intelligence:

				<span class="text-caption-regular fw-400">Unique insights powered by our proprietary data.</span>
			</li>
		</ol>
	</div>

	<form class="my-4" [formGroup]="propertyInformationForm">
		<div class="row justify-content-center gap-1 mt-3">
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
				<mat-form-field appearance="outline">
					<mat-select required formControlName="stand" [placeholder]="'Select Property Type'">
						@for (stand of residentialsStands?.['stands']; track stand.reference) {
							<mat-option [value]="stand.reference">{{ stand.name }}</mat-option>
						}
					</mat-select>

					<mat-error class="text-caption-regular fs-12px fw-400 lh-16px">This is a required field</mat-error>
				</mat-form-field>
			</div>

			@if (!['site', ''].includes(propertyInformationForm.getRawValue().stand)) {
				<div class="row align-items-center mb-2">
					<div class="d-flex justify-content-between mb-1">
						<div class="col">
							<span class="d-inline-block fg-general-4 text-small-14px-regular">Number of Bedrooms*</span>
						</div>

						<div class="col-auto add-btn">
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

			<div class="row justify-content-center my-2">
				<div class="col-6 pe-1">
					<mat-label class="fg-general-4 text-small-14px-regular">Property Size</mat-label>

					<mat-form-field appearance="outline">
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

					<mat-form-field appearance="outline">
						<mat-select formControlName="propertyUnit" [placeholder]="'Unit'">
							@for (unit of propertyUnits; track unit.reference) {
								<mat-option [value]="unit.reference">{{ unit.name }}</mat-option>
							}
						</mat-select>
					</mat-form-field>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-md-12">
					<mat-label class="fg-general-4 text-small-14px-regular">Purchase Price</mat-label>

					<mat-form-field appearance="outline">
						<span matPrefix class="ps-1 fg-general-3 text-body-regular">&euro;</span>
						<input min="1" formControlName="purchasePrice" type="tel" placeholder="Enter a number" matInput class="text-body-regular fg-general-5" />

						<mat-error *ngIf="propertyInformationForm.get('purchasePrice').getError('min')" class="text-caption-regular fs-12px fw-400 lh-16px">
							Price must be greater than zero
						</mat-error>
						<mat-error *ngIf="propertyInformationForm.get('purchasePrice').getError('pattern')" class="text-caption-regular fs-12px fw-400 lh-16px">
							Please enter a valid number
						</mat-error>
					</mat-form-field>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-12">
					<mat-label class="fg-general-4 text-small-14px-regular">Year of purchase</mat-label>

					<mat-form-field appearance="outline">
						<input
							(click)="propertyWorthDate.open()"
							type="text"
							formControlName="purchaseYear"
							matInput
							[max]="maxDate"
							[matDatepicker]="propertyWorthDate"
							[placeholder]="'eg: 2015'"
							readonly
							class="eircode-search"
						/>

						<mat-datepicker-toggle matIconSuffix [for]="propertyWorthDate"></mat-datepicker-toggle>
						<mat-datepicker #propertyWorthDate startView="multi-year" (yearSelected)="onSetYear($event, propertyWorthDate)"></mat-datepicker>
					</mat-form-field>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-12">
					<mat-label class="fg-general-4 text-small-14px-regular">Have you made any improvements to the property?</mat-label>
					<mat-radio-group formControlName="improvements">
						<div class="row mx-0 align-items-center mt-2 mb-3">
							<div class="col-6 pe-1">
								<div
									(click)="onUpdateRadioBtn(true)"
									[class.chip-selected]="propertyInformationForm.getRawValue().improvements === true"
									class="checkbox-list d-flex align-items-center py-4"
								>
									<mat-radio-button
										[ngClass]="propertyInformationForm.getRawValue().improvements === true ? 'fg-prim-2' : 'fg-general-5'"
										color="primary"
										[value]="true"
										label="role"
										class="ps-2 text-body-regular fg-general-2"
										(click)="onUpdateRadioBtn(true)"
									></mat-radio-button>
									<span class="text-body-regular ps-2">Yes</span>
								</div>
							</div>

							<div class="col-6 ps-1">
								<div
									(click)="onUpdateRadioBtn(false)"
									[class.feedback-chip-selected]="propertyInformationForm.getRawValue().improvements === false"
									class="checkbox-list d-flex align-items-center py-4"
								>
									<mat-radio-button
										[ngClass]="propertyInformationForm.getRawValue().improvements === false ? 'fg-prim-2' : 'fg-general-5'"
										color="primary"
										[value]="false"
										label="role"
										class="ps-2 text-body-regular fg-general-4"
										(click)="onUpdateRadioBtn(false)"
									></mat-radio-button>
									<span class="text-body-regular ps-2">No</span>
								</div>
							</div>
						</div>
					</mat-radio-group>
				</div>
			</div>

			<ng-container *ngIf="propertyInformationForm.getRawValue().improvements">
				<div class="row justify-content-center">
					<div class="col-md-12">
						<mat-label class="fg-general-4 text-small-14px-regular">Estimated Cost of Improvements*</mat-label>

						<mat-form-field appearance="outline">
							<span matPrefix class="ps-1 fg-general-3 text-body-regular">&euro;</span>

							<input formControlName="improvementCost" type="tel" placeholder="Enter a number" matInput class="text-body-regular fg-general-5" />

							<mat-error *ngIf="propertyInformationForm.get('improvementCost').getError('required')" class="text-caption-regular fs-12px fw-400 lh-16px">
								This is a required field
							</mat-error>

							<mat-error *ngIf="propertyInformationForm.get('improvementCost').getError('min')" class="text-caption-regular fs-12px fw-400 lh-16px">
								Estimated cost must be greater than zero
							</mat-error>

							<mat-error *ngIf="propertyInformationForm.get('improvementCost').getError('pattern')" class="text-caption-regular fs-12px fw-400 lh-16px">
								Please enter a valid number
							</mat-error>
						</mat-form-field>
					</div>
				</div>

				<div class="col-12">
					<mat-label class="fg-general-4 text-body-regular d-block">Details of Improvements Made*</mat-label>
					<mat-form-field appearance="outline" class="w-100 address">
						<textarea
							matInput
							minlength="3"
							formControlName="improvementDetail"
							placeholder="Optional examples: new flooring, kitchen remodel, bathroom upgrade, attic conversion, granny flat, garden makeover, heating system upgrade, and more."
							class="w-100 text-body-regular reason-area resize-none fg-general-5 pt-2 mt-9"
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
						id="property-worth-next-btn"
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
						id="property-worth-next-btn"
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
`, styles: ["/* apps/findqo-ireland/src/app/feature/property-worth/components/property-information/property-information.component.scss */\n.container {\n  max-width: 500px;\n}\ninput.search-location {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location:focus {\n  outline: unset !important;\n}\ninput.search-location::placeholder {\n  font-style: italic !important;\n  color: var(--general-2) !important;\n}\n.search-option {\n  min-height: 45px;\n  height: 45px;\n  border-bottom: 1px solid var(--neutral-1);\n}\n.bedroom-item {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  margin-bottom: 24px;\n}\n.add-btn {\n  height: 40px;\n  line-height: 40px;\n}\n.add-btn * {\n  vertical-align: middle;\n}\n.add-btn input {\n  height: 100%;\n}\n.round-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset;\n  border-radius: 50% !important;\n  min-width: unset !important;\n}\n.round-btn .mat-icon {\n  margin-inline-start: auto !important;\n  margin-inline-end: auto !important;\n}\n.bed-icon {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  background-color: var(--info-1);\n  position: relative;\n  display: inline-block;\n}\n.bed-icon > .mat-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bedroom-count {\n  line-height: 35px;\n  color: var(--general-5);\n}\n.w-35px {\n  width: 35px;\n}\n.w-600px {\n  max-width: 600px;\n}\n.h-100 {\n  height: 100% !important;\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\na mat-icon {\n  display: inline !important;\n  vertical-align: middle !important;\n  margin-inline-start: 4px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-125px {\n  width: 125px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n.checkbox-list {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/property-information.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: PlaceAdFacade }, { type: DestroyService }, { type: PropertyWorthFacade }], { nextTab: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyInformationComponent, { className: "PropertyInformationComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/components/property-information/property-information.component.ts", lineNumber: 50 });
})();

// apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/confirmation-modal/confirmation-modal.component.ts
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
    args: [{ selector: "findqo-confirmation-modal", imports: [ButtonModule, SharedModule], template: '<div class="row dialog-container position-relative">\n	<div class="col-auto dialog-header">\n		<button mat-icon-button mat-dialog-close (click)="onCloseDialog()" class="close-btn">\n			<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>\n		</button>\n	</div>\n	<div class="container d-flex gap-3 justify-content-center flex-column">\n		<p class="heading-4-medium text-center">Request Submitted Successfully</p>\n		<p class="text-body-regular text-center">One of the approved estate agents will contact you soon to arrange your property valuation.</p>\n		<button class="text-body-regular w-100 button" (click)="onCloseDialog()" mat-flat-button color="primary" disableRipple>Got it</button>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/confirmation-modal/confirmation-modal.component.scss */\n.dialog-container {\n  height: 100%;\n  padding: 16px 16px 24px 16px;\n  justify-content: end;\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n}\n.button {\n  height: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/confirmation-modal.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationModalComponent, { className: "ConfirmationModalComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/confirmation-modal/confirmation-modal.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/skeleton-loader/skeleton-loader.component.ts
var SkeletonLoaderComponent = class _SkeletonLoaderComponent {
  static {
    this.\u0275fac = function SkeletonLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonLoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonLoaderComponent, selectors: [["findqo-skeleton-loader"]], standalone: false, decls: 8, vars: 0, consts: [[1, "container"], [1, "row", "h-50vh", "justify-content-center", "align-items-center"], [1, "text-center"], [1, "d-inline-block", "text-center"], [1, "heading-3-medium", "fg-general-5", "text-center", "mt-3"], [1, "text-body-regular", "fg-general-5", "text-center", "d-inline-block", "pt-1"]], template: function SkeletonLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "mat-spinner", 3);
        \u0275\u0275elementStart(4, "p", 4);
        \u0275\u0275text(5, "Please wait...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, " Our tool is processing your valuation request based on property info. It usually takes 20 to 30 seconds. ");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [MatProgressSpinner], styles: ["\n\n.h-50vh[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/skeleton-loader.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonLoaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-skeleton-loader", standalone: false, template: '<div class="container">\n	<div class="row h-50vh justify-content-center align-items-center">\n		<div class="text-center">\n			<mat-spinner class="d-inline-block text-center"></mat-spinner>\n\n			<p class="heading-3-medium fg-general-5 text-center mt-3">Please wait...</p>\n\n			<span class="text-body-regular fg-general-5 text-center d-inline-block pt-1">\n				Our tool is processing your valuation request based on property info. It usually takes 20 to 30 seconds.\n			</span>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/skeleton-loader/skeleton-loader.component.scss */\n.h-50vh {\n  height: 50vh;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/skeleton-loader.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonLoaderComponent, { className: "SkeletonLoaderComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/skeleton-loader/skeleton-loader.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/valuation-calculated.component.ts
function ValuationCalculatedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-skeleton-loader");
  }
}
function ValuationCalculatedComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.aiContent, \u0275\u0275sanitizeHtml);
  }
}
function ValuationCalculatedComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2, " An error occurred. Try again shortly. You can also email us your property details at ");
    \u0275\u0275elementStart(3, "a", 3);
    \u0275\u0275text(4, "hello@findqo.ie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "findqo-button", 6);
    \u0275\u0275listener("clicked", function ValuationCalculatedComponent_div_3_Template_findqo_button_clicked_7_listener() {
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
var ValuationCalculatedComponent = class _ValuationCalculatedComponent {
  constructor(propertyWorth, propertyWorthState, snack, dialog) {
    this.propertyWorth = propertyWorth;
    this.propertyWorthState = propertyWorthState;
    this.snack = snack;
    this.dialog = dialog;
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
      this.propertyWorthState.setLoadingState(true);
      this.propertyWorthState.setErrorState(false);
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
    this.propertyWorthState.setProcessing(true);
    this.propertyWorth.postPropertyWorth(API_PAYLOAD).subscribe((res) => {
      this.propertyWorthState.setProcessing(false);
      this.propertyWorthState.setLoadingState(false);
      this.propertyWorthState.setErrorState(false);
      this.isLoading = false;
      this.valuationId = res?.["data"]?.id;
      this.aiContent = parse(res?.["data"]?.aiResponse);
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
      this.propertyWorthState.setLoadingState(false);
      this.propertyWorthState.setErrorState(true);
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
  onRetry() {
    this.aiContent = null;
    this.isLoading = true;
    this.inPersonValuationRequested = false;
    this.isError = false;
    this.postPropertyWorth();
  }
  static {
    this.\u0275fac = function ValuationCalculatedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValuationCalculatedComponent)(\u0275\u0275directiveInject(PropertyWorthFacade), \u0275\u0275directiveInject(PropertyWorthState), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValuationCalculatedComponent, selectors: [["findqo-valuation-calculated"]], inputs: { formData: "formData" }, outputs: { prevTab: "prevTab" }, standalone: false, decls: 4, vars: 2, consts: [[1, "container", "property-information-form", "mt-5"], [1, "ai-content", 3, "innerHTML"], [4, "ngIf"], ["href", "mailto:hello@findqo.ie", 1, "fg-prim-2"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "justify-content-center", "align-items-center"], [1, "col-12", "col-md-3"], ["btnClass", "text-small-14px-regular w-100", "type", "button", 1, "d-block", 3, "clicked", "label", "btnType"]], template: function ValuationCalculatedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ValuationCalculatedComponent_Conditional_1_Template, 1, 0, "findqo-skeleton-loader")(2, ValuationCalculatedComponent_Conditional_2_Template, 1, 1, "div", 1)(3, ValuationCalculatedComponent_div_3_Template, 8, 2, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isLoading ? 1 : 2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isError);
      }
    }, dependencies: [NgIf, ButtonComponent, SkeletonLoaderComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 650px;\n  padding-bottom: 75px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/valuation-calculated.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValuationCalculatedComponent, [{
    type: Component,
    args: [{ selector: "findqo-valuation-calculated", standalone: false, template: `<div class="container property-information-form mt-5">
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
`, styles: ["/* apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/valuation-calculated.component.scss */\n.container {\n  max-width: 650px;\n  padding-bottom: 75px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/valuation-calculated.component.css.map */\n"] }]
  }], () => [{ type: PropertyWorthFacade }, { type: PropertyWorthState }, { type: SnackService }, { type: MatDialog }], { prevTab: [{
    type: Output
  }], formData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValuationCalculatedComponent, { className: "ValuationCalculatedComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/components/valuation-calculated/valuation-calculated.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/property-worth/components/about-you/about-you.component.ts
var _c02 = ["phoneNumber"];
function AboutYouComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 45);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 46);
    \u0275\u0275text(1, " The name should be between 3 and 80 characters. ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 45);
    \u0275\u0275text(1, " This is a required field ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 45);
    \u0275\u0275text(1, " Please enter valid email ");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 47);
    \u0275\u0275text(1, "Your phone number is required");
    \u0275\u0275elementEnd();
  }
}
function AboutYouComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 47);
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
function AboutYouComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.name);
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
      purposeValuationId: [""],
      isPersonValuation: [null, [Validators.required]]
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
    if (!this.aboutYouForm.controls.purposeValuationId.value) {
      this.snack.open({
        data: {
          message: "Please select a Purpose of Valuation",
          type: "error"
        },
        panelClass: "snackbar-error"
      });
      return;
    }
    this.nextTab.emit({ status: this.aboutYouForm.status, value: this.aboutYouForm.value, form: "aboutYou" });
  }
  onBack() {
    this.prevTab.emit();
  }
  onUpdateRadioBtn(value) {
    this.aboutYouForm.get("isPersonValuation").patchValue(value);
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
    }, outputs: { nextTab: "nextTab", prevTab: "prevTab" }, standalone: false, decls: 72, vars: 24, consts: [[1, "container", "px-3"], [1, "heading-2", "lh-28px", "fs-24px", "mt-4", "mb-2"], [1, "text-body-regular", "fg-general-5"], [1, "my-4", 3, "formGroup"], [1, "row", "gap-2", "justify-content-center"], [1, "col-md-12"], [1, "mb-1", "fg-general-4", "text-body-regular"], ["appearance", "outline"], ["required", "", "formControlName", "fullname", "maxlength", "80", "minlength", "3", "placeholder", "Your Name", "matInput", "", 1, "text-body-regular", "fg-general-5"], ["class", "text-caption-regular fs-12px fw-400 lh-16px", 4, "ngIf"], ["class", "text-small-12px-regular", 4, "ngIf"], ["required", "", "formControlName", "email", "minlength", "3", "maxlength", "80", "placeholder", "Your Email", "matInput", "", 1, "text-body-regular", "fg-general-5"], [1, "col-12"], ["for", "phoneControl", 1, "text-small-14px-regular", "lh-18px", "fg-general-4", "mb-2", "d-block"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "row", "mx-0", "align-items-center", "w-70px"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0"], [1, "fs-14px", "fg-general-5"], [1, "col", "ps-2", "pe-0", "phone-number"], ["required", "", "placeholder", "Your Phone Number", "formControlName", "phone", "matInput", "", "minlength", "7", "maxlength", "15", "type", "tel", 1, "fs-14px"], ["class", "text-caption-regular", 4, "ngIf"], ["placeholder", "e.g Thinking of Selling", "formControlName", "purposeValuationId"], [3, "value"], [1, "fg-general-4", "text-small-14px-regular"], ["formControlName", "isPersonValuation"], [1, "row", "mx-0", "align-items-center", "mt-2", "mb-3"], [1, "col-6", "pe-1"], [1, "checkbox-list", "d-flex", "align-items-center", "py-4", 3, "click"], ["color", "primary", "label", "role", 1, "ps-2", "text-body-regular", "fg-general-2", 3, "click", "ngClass", "value"], [1, "text-body-regular", "ps-2"], [1, "col-6", "ps-1"], ["color", "primary", "label", "role", 1, "ps-2", "text-body-regular", "fg-general-4", 3, "click", "ngClass", "value"], [1, "col-12", "mt-3"], [1, "text-caption-regular", "fg-general-4"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "w-100", "position-fixed", "bottom-0", "border-top", "bg-basic-1", "d-none", "d-md-block"], [1, "row", "mx-auto", "p-3", "mw-550px", "justify-content-end", "align-items-center"], [1, "col-auto", "w-125px"], ["id", "property-worth-generate-btn", "btnClass", "text-small-14px-regular w-100 h-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [1, "w-100", "d-block", "d-md-none"], [1, "row", "mx-auto", "p-lg-2", "justify-content-end", "align-items-center"], ["id", "property-worth-generate-btn", "btnClass", "text-small-14px-regular w-100", "type", "submit", 1, "d-block", 3, "clicked", "label", "isDisabled", "btnType"], [1, "text-caption-regular", "fs-12px", "fw-400", "lh-16px"], [1, "text-small-12px-regular"], [1, "text-caption-regular"]], template: function AboutYouComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Ireland Property Valuation Calculator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4, " Input your Eircode and property details for an instant property valuation with FindQo.ie\u2019s AI-powered calculator. ");
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
        \u0275\u0275elementStart(38, "div", 5)(39, "mat-label", 6);
        \u0275\u0275text(40, "Purpose of Valuation*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-form-field", 7)(42, "mat-select", 24);
        \u0275\u0275repeaterCreate(43, AboutYouComponent_For_44_Template, 2, 2, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 12)(46, "mat-label", 26);
        \u0275\u0275text(47, "Would you like to request a Free In-Person Valuation?*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-radio-group", 27)(49, "div", 28)(50, "div", 29)(51, "div", 30);
        \u0275\u0275listener("click", function AboutYouComponent_Template_div_click_51_listener() {
          return ctx.onUpdateRadioBtn(1);
        });
        \u0275\u0275elementStart(52, "mat-radio-button", 31);
        \u0275\u0275listener("click", function AboutYouComponent_Template_mat_radio_button_click_52_listener() {
          return ctx.onUpdateRadioBtn(1);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 32);
        \u0275\u0275text(54, "Yes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 33)(56, "div", 30);
        \u0275\u0275listener("click", function AboutYouComponent_Template_div_click_56_listener() {
          return ctx.onUpdateRadioBtn(0);
        });
        \u0275\u0275elementStart(57, "mat-radio-button", 34);
        \u0275\u0275listener("click", function AboutYouComponent_Template_mat_radio_button_click_57_listener() {
          return ctx.onUpdateRadioBtn(0);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 32);
        \u0275\u0275text(59, "No");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(60, "div", 35)(61, "p", 36);
        \u0275\u0275text(62, " By continuing, you accept FindQo\u2019s Terms of Service & Privacy Policy. You'll receive an AI-based property valuation, and your information will be sent to a dedicated estate agent for tailored insights and a precise valuation. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "div", 37)(64, "div", 38)(65, "div", 39)(66, "div", 40)(67, "findqo-button", 41);
        \u0275\u0275listener("clicked", function AboutYouComponent_Template_findqo_button_clicked_67_listener() {
          return ctx.onNext();
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "div", 42)(69, "div", 43)(70, "div", 12)(71, "findqo-button", 44);
        \u0275\u0275listener("clicked", function AboutYouComponent_Template_findqo_button_clicked_71_listener() {
          return ctx.onNext();
        });
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
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.purposeOptions);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("chip-selected", ctx.aboutYouForm.getRawValue().isPersonValuation);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.aboutYouForm.getRawValue().isPersonValuation ? "fg-prim-2" : "fg-general-5")("value", 1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("feedback-chip-selected", !ctx.aboutYouForm.getRawValue().isPersonValuation);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", !ctx.aboutYouForm.getRawValue().isPersonValuation ? "fg-prim-2" : "fg-general-5")("value", 0);
        \u0275\u0275advance(10);
        \u0275\u0275property("label", "Get Online Valuation")("isDisabled", ctx.aboutYouForm.invalid)("btnType", ctx.buttonType.FILLED);
        \u0275\u0275advance(4);
        \u0275\u0275property("label", "Get Online Valuation")("isDisabled", ctx.aboutYouForm.invalid)("btnType", ctx.buttonType.FILLED);
      }
    }, dependencies: [NgClass, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, MatOption, MatFormField, MatLabel, MatError, MatSelect, MatInput, ButtonComponent, MatRadioGroup, MatRadioButton, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding-bottom: 75px;\n}\n.w-35px[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.mw-550px[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.w-80px[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.w-70px[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.radio-btn-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checkbox-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.chip-selected[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about-you.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutYouComponent, [{
    type: Component,
    args: [{ selector: "findqo-about-you", standalone: false, template: `<div class="container px-3">
	<h2 class="heading-2 lh-28px fs-24px mt-4 mb-2">Ireland Property Valuation Calculator</h2>

	<p class="text-body-regular fg-general-5">
		Input your Eircode and property details for an instant property valuation with FindQo.ie\u2019s AI-powered calculator.
	</p>

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

			<div class="col-md-12">
				<mat-label class="mb-1 fg-general-4 text-body-regular">Purpose of Valuation*</mat-label>

				<mat-form-field appearance="outline">
					<mat-select placeholder="e.g Thinking of Selling" formControlName="purposeValuationId">
						@for (option of purposeOptions; track option) {
							<mat-option [value]="option.id">{{ option.name }}</mat-option>
						}
					</mat-select>
				</mat-form-field>
			</div>

			<div class="col-12">
				<mat-label class="fg-general-4 text-small-14px-regular">Would you like to request a Free In-Person Valuation?*</mat-label>
				<mat-radio-group formControlName="isPersonValuation">
					<div class="row mx-0 align-items-center mt-2 mb-3">
						<div class="col-6 pe-1">
							<div
								(click)="onUpdateRadioBtn(1)"
								[class.chip-selected]="aboutYouForm.getRawValue().isPersonValuation"
								class="checkbox-list d-flex align-items-center py-4"
							>
								<mat-radio-button
									[ngClass]="aboutYouForm.getRawValue().isPersonValuation ? 'fg-prim-2' : 'fg-general-5'"
									(click)="onUpdateRadioBtn(1)"
									color="primary"
									[value]="1"
									label="role"
									class="ps-2 text-body-regular fg-general-2"
								></mat-radio-button>
								<span class="text-body-regular ps-2">Yes</span>
							</div>
						</div>

						<div class="col-6 ps-1">
							<div
								(click)="onUpdateRadioBtn(0)"
								[class.feedback-chip-selected]="!aboutYouForm.getRawValue().isPersonValuation"
								class="checkbox-list d-flex align-items-center py-4"
							>
								<mat-radio-button
									[ngClass]="!aboutYouForm.getRawValue().isPersonValuation ? 'fg-prim-2' : 'fg-general-5'"
									(click)="onUpdateRadioBtn(0)"
									color="primary"
									[value]="0"
									label="role"
									class="ps-2 text-body-regular fg-general-4"
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
					<findqo-button
						id="property-worth-generate-btn"
						btnClass="text-small-14px-regular w-100 h-100"
						class="d-block"
						[label]="'Get Online Valuation'"
						(clicked)="onNext()"
						[isDisabled]="aboutYouForm.invalid"
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
						id="property-worth-generate-btn"
						btnClass="text-small-14px-regular w-100"
						class="d-block"
						[label]="'Get Online Valuation'"
						(clicked)="onNext()"
						[isDisabled]="aboutYouForm.invalid"
						[btnType]="buttonType.FILLED"
						type="submit"
					></findqo-button>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/property-worth/components/about-you/about-you.component.scss */\n.container {\n  max-width: 500px;\n  padding-bottom: 75px;\n}\n.w-35px {\n  width: 35px;\n}\n.mw-550px {\n  max-width: 550px;\n}\nfindqo-button {\n  height: 40px;\n}\n.w-80px {\n  width: 80px;\n}\n.w-70px {\n  width: 70px;\n}\n.container-fluid {\n  z-index: var(--z-index-place-ad-action-btn);\n}\n.radio-btn-item {\n  border: 1px solid var(--general-3);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.checkbox-list {\n  border: 1px solid var(--general-2);\n  height: 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.chip-selected {\n  border-radius: 4px !important;\n  border: 1px solid #ff5ab8 !important;\n  color: #ff5ab8;\n  min-height: 40px;\n  background-color: #feebf6 !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about-you.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutYouComponent, { className: "AboutYouComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/components/about-you/about-you.component.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/property-worth/property-worth.component.ts
function PropertyWorthComponent_findqo_place_free_ad_banner_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-place-free-ad-banner", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("valuationData", ctx_r0.formData);
  }
}
var PropertyWorthComponent = class _PropertyWorthComponent {
  constructor(viewPort, propertyWorthState) {
    this.viewPort = viewPort;
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
    this.\u0275fac = function PropertyWorthComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyWorthComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(PropertyWorthState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PropertyWorthComponent, selectors: [["findqo-property-worth"]], standalone: false, decls: 13, vars: 18, consts: [[1, "property-worth-tab", 3, "ngClass"], [1, "my-3", "h-100", 3, "selectedTabChange", "selectedIndex"], ["label", "1. Property Info", 3, "disabled", "tabIndex"], [3, "nextTab"], ["label", "2. About You", 3, "tabIndex", "disabled"], [3, "prevTab", "nextTab"], ["label", "3. Valuation", 3, "tabIndex", "disabled"], ["class", "d-block container", 3, "valuationData", 4, "ngIf"], [3, "prevTab", "formData"], [1, "d-block", "container", 3, "valuationData"]], template: function PropertyWorthComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1);
        \u0275\u0275listener("selectedTabChange", function PropertyWorthComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275elementStart(2, "mat-tab", 2);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementStart(4, "findqo-property-information", 3);
        \u0275\u0275listener("nextTab", function PropertyWorthComponent_Template_findqo_property_information_nextTab_4_listener($event) {
          return ctx.onNextTab($event, 1);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-tab", 4);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "findqo-about-you", 5);
        \u0275\u0275listener("prevTab", function PropertyWorthComponent_Template_findqo_about_you_prevTab_7_listener() {
          return ctx.onPrevTab(0);
        })("nextTab", function PropertyWorthComponent_Template_findqo_about_you_nextTab_7_listener($event) {
          return ctx.onNextTab($event, 2);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-tab", 6);
        \u0275\u0275template(9, PropertyWorthComponent_findqo_place_free_ad_banner_9_Template, 1, 1, "findqo-place-free-ad-banner", 7);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275pipe(11, "async");
        \u0275\u0275elementStart(12, "findqo-valuation-calculated", 8);
        \u0275\u0275listener("prevTab", function PropertyWorthComponent_Template_findqo_valuation_calculated_prevTab_12_listener($event) {
          return ctx.onPrevTab($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.viewPort.mobile ? "container-fluid p-0" : "container");
        \u0275\u0275advance();
        \u0275\u0275property("selectedIndex", ctx.selectedIndex);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 10, ctx.propertyWorthState.isProcessing$))("tabIndex", 0);
        \u0275\u0275advance(3);
        \u0275\u0275property("tabIndex", 1)("disabled", !ctx.propertyInformation || \u0275\u0275pipeBind1(6, 12, ctx.propertyWorthState.isProcessing$));
        \u0275\u0275advance(3);
        \u0275\u0275property("tabIndex", 2)("disabled", !ctx.aboutYou);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(10, 14, ctx.isLoading$) && !\u0275\u0275pipeBind1(11, 16, ctx.isError$));
        \u0275\u0275advance(3);
        \u0275\u0275property("formData", ctx.formData);
      }
    }, dependencies: [PlaceFreeAdBannerComponent, NgClass, NgIf, MatTab, MatTabGroup, PropertyInformationComponent, ValuationCalculatedComponent, AboutYouComponent, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyWorthComponent, [{
    type: Component,
    args: [{ selector: "findqo-property-worth", standalone: false, template: `<div class="property-worth-tab" [ngClass]="viewPort.mobile ? 'container-fluid p-0' : 'container'">
	<mat-tab-group (selectedTabChange)="onTabChange($event)" [selectedIndex]="selectedIndex" class="my-3 h-100">
		<mat-tab [disabled]="propertyWorthState.isProcessing$ | async" [tabIndex]="0" label="1. Property Info">
			<findqo-property-information (nextTab)="onNextTab($event, 1)"></findqo-property-information>
		</mat-tab>

		<mat-tab [tabIndex]="1" [disabled]="!propertyInformation || (propertyWorthState.isProcessing$ | async)" label="2. About You">
			<findqo-about-you (prevTab)="onPrevTab(0)" (nextTab)="onNextTab($event, 2)"></findqo-about-you>
		</mat-tab>
		<mat-tab [tabIndex]="2" [disabled]="!aboutYou" label="3. Valuation">
			<findqo-place-free-ad-banner
				[valuationData]="formData"
				class="d-block container"
				*ngIf="!(isLoading$ | async) && !(isError$ | async)"
			></findqo-place-free-ad-banner>
			<findqo-valuation-calculated (prevTab)="onPrevTab($event)" [formData]="formData"></findqo-valuation-calculated>
		</mat-tab>
	</mat-tab-group>
</div>
` }]
  }], () => [{ type: ViewportService }, { type: PropertyWorthState }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PropertyWorthComponent, { className: "PropertyWorthComponent", filePath: "apps/findqo-ireland/src/app/feature/property-worth/property-worth.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/property-worth/property-worth-routing.module.ts
var routes = [{ path: "", component: PropertyWorthComponent }];
var PropertyWorthRoutingModule = class _PropertyWorthRoutingModule {
  static {
    this.\u0275fac = function PropertyWorthRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyWorthRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PropertyWorthRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyWorthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/property-worth/property-worth.module.ts
var PropertyWorthModule = class _PropertyWorthModule {
  static {
    this.\u0275fac = function PropertyWorthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyWorthModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PropertyWorthModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [PropertyWorthFacade], imports: [
      CommonModule,
      PropertyWorthRoutingModule,
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
      MatProgressSpinnerModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyWorthModule, [{
    type: NgModule,
    args: [{
      declarations: [PropertyWorthComponent, PropertyInformationComponent, ValuationCalculatedComponent, AboutYouComponent, SkeletonLoaderComponent],
      imports: [
        PlaceFreeAdBannerComponent,
        CommonModule,
        PropertyWorthRoutingModule,
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
        MatProgressSpinnerModule
      ],
      providers: [PropertyWorthFacade]
    }]
  }], null, null);
})();
export {
  PropertyWorthModule
};
//# sourceMappingURL=chunk-WT2JTP25.js.map
