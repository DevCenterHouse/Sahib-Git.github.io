import {
  BusinessAgentListModule
} from "./chunk-6Z3MPJNO.js";
import {
  DEFAULT_EMAIL_PLACEHOLDER
} from "./chunk-LUIRD62T.js";
import {
  AgentStatus
} from "./chunk-YL2NNRDT.js";
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
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  AuthDialogV2Component,
  AuthType,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatDialog,
  MatDivider,
  MatDividerModule,
  MatError,
  MatFormField,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MaxLengthValidator,
  MinLengthValidator,
  MyProfileFacade,
  MyProfileService,
  NgControlStatus,
  NgControlStatusGroup,
  PlaceAdService,
  PlaceAdType,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  SearchFilterPipe,
  SellerType,
  SharedModule,
  TranslationsPipe,
  UserRoles,
  VALIDATOR,
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
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  ViewChild,
  __async,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-account-v2/business-account-v2.component.ts
var _c0 = ["phoneNumber"];
var _c1 = () => ["name"];
var _c2 = (a0, a1, a2) => ({ countyList: a0, countyAreaList: a1, inviterName: a2 });
function BusinessAccountV2Component_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon", 68);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "n3521"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", vm_r2 == null ? null : vm_r2.inviterName, "\xA0");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "n3520"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "n3519"), " ");
  }
}
function BusinessAccountV2Component_div_0_mat_spinner_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 70);
  }
}
function BusinessAccountV2Component_div_0_p_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3635"), " ");
  }
}
function BusinessAccountV2Component_div_0_p_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3988"), " ");
  }
}
function BusinessAccountV2Component_div_0_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3277"));
  }
}
function BusinessAccountV2Component_div_0_mat_option_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5 == null ? null : item_r5["id"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5 == null ? null : item_r5["name"], " ");
  }
}
function BusinessAccountV2Component_div_0_mat_error_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3113"), " ");
  }
}
function BusinessAccountV2Component_div_0_span_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3277"));
  }
}
function BusinessAccountV2Component_div_0_mat_option_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6 == null ? null : item_r6["id"]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6 == null ? null : item_r6["name"], " ");
  }
}
function BusinessAccountV2Component_div_0_mat_error_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3113"), " ");
  }
}
function BusinessAccountV2Component_div_0_button_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function BusinessAccountV2Component_div_0_button_114_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveBusinessProfile());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.businessInformationForm.pristine || !ctx_r3.businessInformationForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n4023"), " ");
  }
}
function BusinessAccountV2Component_div_0_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function BusinessAccountV2Component_div_0_ng_template_115_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.redirectToPlaceAd());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.businessInformationForm.pristine || !ctx_r3.businessInformationForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n3229"), " ");
  }
}
function BusinessAccountV2Component_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275template(2, BusinessAccountV2Component_div_0_div_2_Template, 13, 10, "div", 9);
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12);
    \u0275\u0275element(8, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BusinessAccountV2Component_div_0_mat_spinner_9_Template, 1, 0, "mat-spinner", 14);
    \u0275\u0275elementStart(10, "div", 15)(11, "div", 16)(12, "div")(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "findqo-button", 18);
    \u0275\u0275pipe(18, "translations");
    \u0275\u0275listener("clicked", function BusinessAccountV2Component_div_0_Template_findqo_button_clicked_17_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r3 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(fileInput_r3.click());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 19, 0);
    \u0275\u0275listener("change", function BusinessAccountV2Component_div_0_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelect($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "div", 21);
    \u0275\u0275element(23, "mat-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 23);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translations");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "form", 24)(28, "h4", 25);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-label", 26);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 27);
    \u0275\u0275element(35, "input", 28);
    \u0275\u0275elementStart(36, "mat-hint", 29);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "mat-label", 26);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 30);
    \u0275\u0275element(43, "mat-icon", 31)(44, "input", 32);
    \u0275\u0275elementStart(45, "mat-hint", 33);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translations");
    \u0275\u0275elementStart(48, "button", 34);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "mat-label", 35);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 36, 1)(56, "div", 37)(57, "div", 38)(58, "mat-select-trigger")(59, "div", 39)(60, "div", 40);
    \u0275\u0275element(61, "img", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 42)(63, "input", 43);
    \u0275\u0275listener("mousedown", function BusinessAccountV2Component_div_0_Template_input_mousedown_63_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(64, "div", 44)(65, "input", 45, 2);
    \u0275\u0275listener("mousedown", function BusinessAccountV2Component_div_0_Template_input_mousedown_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.mouseClick());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(67, BusinessAccountV2Component_div_0_p_67_Template, 3, 3, "p", 46)(68, BusinessAccountV2Component_div_0_p_68_Template, 3, 3, "p", 46);
    \u0275\u0275element(69, "mat-divider", 47);
    \u0275\u0275elementStart(70, "h4", 48);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-label", 49);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-form-field", 50)(77, "mat-select", 51);
    \u0275\u0275pipe(78, "translations");
    \u0275\u0275listener("selectionChange", function BusinessAccountV2Component_div_0_Template_mat_select_selectionChange_77_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCountySelected($event));
    });
    \u0275\u0275elementStart(79, "div", 52);
    \u0275\u0275element(80, "input", 53, 3);
    \u0275\u0275pipe(82, "translations");
    \u0275\u0275template(83, BusinessAccountV2Component_div_0_span_83_Template, 3, 3, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, BusinessAccountV2Component_div_0_mat_option_84_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, BusinessAccountV2Component_div_0_mat_error_85_Template, 3, 3, "mat-error", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "mat-label", 49);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "mat-form-field", 57)(90, "mat-select", 58);
    \u0275\u0275pipe(91, "translations");
    \u0275\u0275listener("selectionChange", function BusinessAccountV2Component_div_0_Template_mat_select_selectionChange_90_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCountyAreaSelected());
    });
    \u0275\u0275elementStart(92, "div", 52);
    \u0275\u0275element(93, "input", 53, 4);
    \u0275\u0275pipe(95, "translations");
    \u0275\u0275template(96, BusinessAccountV2Component_div_0_span_96_Template, 3, 3, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(97, BusinessAccountV2Component_div_0_mat_option_97_Template, 2, 2, "mat-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, BusinessAccountV2Component_div_0_mat_error_98_Template, 3, 3, "mat-error", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "mat-label", 59);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "mat-form-field", 60);
    \u0275\u0275element(103, "textarea", 61);
    \u0275\u0275elementStart(104, "mat-hint", 29);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 62)(108, "div", 63)(109, "div", 64)(110, "button", 65);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 64);
    \u0275\u0275template(114, BusinessAccountV2Component_div_0_button_114_Template, 3, 4, "button", 66)(115, BusinessAccountV2Component_div_0_ng_template_115_Template, 3, 4, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_31_0;
    let tmp_32_0;
    const vm_r2 = ctx.ngIf;
    const placeAdButton_r9 = \u0275\u0275reference(116);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r2 == null ? null : vm_r2.inviterName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 52, "n4012"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngSrc", (ctx_r3.businessProfile == null ? null : ctx_r3.businessProfile.picture) || "/assets/images/profile/business-account-photo.svg");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isPhotoUploading);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 54, "n3103"));
    \u0275\u0275advance(3);
    \u0275\u0275property("btnType", ctx_r3.buttonType.BASIC)("label", \u0275\u0275pipeBind1(18, 56, "n3102"))("isStopPropagation", true)("btnClass", "text-body-regular fg-info-3 ps-0")("isDisabled", ctx_r3.isAgentUser)("btnIconClass", ctx_r3.isAgentUser ? "fg-neutral-2 material-symbols-outlined" : "fg-info-3 material-symbols-outlined");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 58, "n3123"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.businessInformationForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 60, "n4019"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 62, "n3100"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 64, "n3097"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 66, "n4020"));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", (ctx_r3.businessProfile == null ? null : ctx_r3.businessProfile.email) || ctx_r3.defaultEmailPlaceholder)("placeholder", (ctx_r3.businessProfile == null ? null : ctx_r3.businessProfile.email) || ctx_r3.defaultEmailPlaceholder);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 68, "n4021"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/" + ctx_r3.appRoute.myProfile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 70, "n12"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 72, "n4022"));
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ((tmp_31_0 = ctx_r3.businessInformationForm.get("phone")) == null ? null : tmp_31_0.errors == null ? null : tmp_31_0.errors["required"]) && !ctx_r3.businessInformationForm.pristine);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_32_0 = ctx_r3.businessInformationForm.get("phone")) == null ? null : tmp_32_0.errors == null ? null : tmp_32_0.errors["pattern"]) || ((tmp_32_0 = ctx_r3.businessInformationForm.get("phone")) == null ? null : tmp_32_0.errors == null ? null : tmp_32_0.errors["minlength"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 74, "n3101"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 76, "n3054"));
    \u0275\u0275advance(3);
    \u0275\u0275property("panelClass", "search-dropdown-selection")("placeholder", \u0275\u0275pipeBind1(78, 78, "n3055"))("ngClass", ctx_r3.isAgentUser ? "fg-general-3" : "fg-general-4");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r3.searchCounty)("placeholder", \u0275\u0275pipeBind1(82, 80, "n681"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(vm_r2.countyList == null ? null : vm_r2.countyList.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vm_r2.countyList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.businessInformationForm.get("countyId").hasError("required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 82, "n3056"));
    \u0275\u0275advance(3);
    \u0275\u0275property("panelClass", "search-dropdown-selection")("placeholder", \u0275\u0275pipeBind1(91, 84, "n3057"))("ngClass", ctx_r3.isAgentUser ? "fg-general-3" : "fg-general-4");
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r3.searchCountyArea)("placeholder", \u0275\u0275pipeBind1(95, 86, "n681"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(vm_r2.countyAreaList == null ? null : vm_r2.countyAreaList.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vm_r2.countyAreaList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.businessInformationForm.get("countyAreaId").hasError("required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 88, "n3058"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", "e.g. Suite 5, Plaza 1")("ngClass", ctx_r3.isAgentUser ? "fg-general-3" : "fg-general-5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 90, "n3060"));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/" + ctx_r3.appRoute.agentHub.dashboard + "/" + ctx_r3.appRoute.businessProfile.base);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(112, 92, "n112"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r3.fromPlaceAd)("ngIfElse", placeAdButton_r9);
  }
}
var BusinessAccountV2Component = class _BusinessAccountV2Component {
  constructor(myProfileFacade, imageService, formBuilder, destroy, dialog, router, placeAdService, myProfileService) {
    this.myProfileFacade = myProfileFacade;
    this.imageService = imageService;
    this.formBuilder = formBuilder;
    this.destroy = destroy;
    this.dialog = dialog;
    this.router = router;
    this.placeAdService = placeAdService;
    this.myProfileService = myProfileService;
    this.fromPlaceAd = false;
    this.buttonType = ButtonType;
    this.agentStatus = AgentStatus;
    this.appRoute = APP_ROUTE;
    this.hasBusinessAccount = false;
    this.selectedFile = null;
    this.isPhotoUploading = false;
    this.isChangeEmail = false;
    this.defaultEmailPlaceholder = DEFAULT_EMAIL_PLACEHOLDER;
    this.isAgentUser = false;
    this.businessInformationForm = this.formBuilder.group({
      name: ["", [Validators.required, VALIDATOR.pattern.name]],
      phone: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      phoneCode: ["+353", Validators.required],
      countyId: ["", Validators.required],
      countyAreaId: [{ value: "", disabled: true }, Validators.required],
      address: ["", Validators.required]
    });
    this.searchCounty = new FormControl("");
    this.searchCountyArea = new FormControl("");
    this.countyList$ = this.myProfileFacade.getCountyList$();
    this.countyAreaList$ = this.myProfileFacade.getCountyAreaList$();
    this.business$ = myProfileFacade.getBusinessProfile$();
    this.inviterName$ = myProfileService.inviterName$;
  }
  saveBusinessProfile() {
    const FORM_DATA = this.businessInformationForm.value;
    this.myProfileFacade.updateUserBusinsessProfile(FORM_DATA);
    if (!this.hasBusinessAccount) {
      this.myProfileFacade.setShowBusinessAcc(true);
      this.myProfileFacade.loadAgents();
      this.dialog.open(SubscriptionOfferDialogComponent, {
        disableClose: true,
        width: "500px",
        height: "600px"
      }).afterClosed();
    }
  }
  onFileSelect(event) {
    if (event.target.files.length === 0) {
      return;
    }
    this.selectedFile = event.target.files[0];
    this.onUpload();
  }
  onUpload() {
    return __async(this, null, function* () {
      if (this.selectedFile) {
        this.isPhotoUploading = true;
        this.imageService.getCompressedImage(this.selectedFile, 400).then((file) => {
          this.selectedFile = file;
          this.myProfileFacade.uploadUserBusinsessProfilePhoto(this.selectedFile).pipe(takeUntil(this.destroy)).subscribe(() => {
            this.isPhotoUploading = false;
          });
        });
      }
    });
  }
  onCountySelected(county) {
    this.businessInformationForm.get("countyAreaId").enable();
    this.myProfileFacade.loadCountyAreaList(county?.value);
    this.searchCounty.patchValue("");
    this.searchCountyArea.patchValue("");
  }
  onCountyAreaSelected() {
    this.searchCountyArea.patchValue("");
  }
  patchBusinessProfileData(business) {
    if (business?.county?.id) {
      this.myProfileFacade.loadCountyAreaList(business?.county?.id);
    }
    if (!this.isAgentUser) {
      this.businessInformationForm.get("countyAreaId").enable();
    }
    const USER_DETAILS = {
      name: business?.name,
      countyId: business?.county?.id,
      countyAreaId: business?.countyArea?.id,
      address: business?.address,
      phone: business?.phone
    };
    this.businessInformationForm.patchValue(USER_DETAILS);
    this.businessInformationForm.markAsPristine();
  }
  getUserDetails() {
    this.business$.pipe(takeUntil(this.destroy)).subscribe((business) => {
      if (business) {
        this.businessProfile = business;
        this.hasBusinessAccount = business?.name ? true : false;
        this.isAgentUser = !!business?.roles.find((role) => role === UserRoles.IS_AGENT_VERIFIED) && !!business?.name;
        if (this.isAgentUser) {
          this.businessInformationForm.disable();
        }
        if (business?.name) {
          this.patchBusinessProfileData(business);
        }
      } else {
        this.myProfileFacade.loadBusinessProfile();
      }
    });
  }
  updateEmail() {
    this.dialog.open(AuthDialogV2Component, {
      data: { authType: AuthType.CHANGE_EMAIL, email: this.businessProfile.email },
      panelClass: "auth-dialog",
      disableClose: true
    });
  }
  redirectToPlaceAd() {
    const FORM_DATA = this.businessInformationForm.value;
    this.myProfileFacade.updateUserBusinsessProfile(FORM_DATA).then(() => {
      this.placeAdService.addIndividualControlData(PlaceAdType?.SELLER_TYPE, SellerType.BUSINESS);
      if (!this.hasBusinessAccount) {
        this.myProfileFacade.setShowBusinessAcc(true);
        this.dialog.open(SubscriptionOfferDialogComponent, {
          disableClose: true,
          width: "500px",
          height: "600px"
        }).afterClosed();
      }
      this.router.navigate([APP_ROUTE.placeAdCategory], { queryParams: { sellerTypeId: SellerType.BUSINESS } });
    });
    this.businessInformationForm.markAsPristine();
  }
  mouseClick() {
    setTimeout(() => {
      this.phoneNumber?.focus();
    }, 200);
  }
  ngOnDestroy() {
    this.myProfileFacade.setProfileTabIndex(0);
  }
  ngOnInit() {
    this.myProfileFacade.loadCountyList();
    this.getUserDetails();
  }
  static {
    this.\u0275fac = function BusinessAccountV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessAccountV2Component)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(ImageService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PlaceAdService), \u0275\u0275directiveInject(MyProfileService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessAccountV2Component, selectors: [["findqo-business-account-v2"]], viewQuery: function BusinessAccountV2Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneNumber = _t.first);
      }
    }, inputs: { fromPlaceAd: "fromPlaceAd" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 6, vars: 21, consts: [["fileInput", ""], ["phone", ""], ["phoneNumber", "matInput"], ["searchInput", ""], ["searchCountyAreaValue", ""], ["placeAdButton", ""], ["class", "overflow-hidden px-0 bg-general-1 pt-4 pb-96px", 4, "ngIf"], [1, "overflow-hidden", "px-0", "bg-general-1", "pt-4", "pb-96px"], [1, "container", "py-4", "px-3", "bg-basic-1", "rounded"], ["class", "d-flex align-items-start inviter-info py-2 px-3 my-4", 4, "ngIf"], [1, "heading-3", "fg-general-5", "mb-3"], [1, "row", "mx-0", "account-photo-section", "mb-4"], [1, "col", "col-sm-auto", "px-0", "position-relative", "align-self-center", "text-center", "text-sm-start", "image-section"], ["alt", "Business account photo", "alt", "Business Account Photo", "width", "172", "height", "125", "priority", "", 1, "account-photo", "image-width", 3, "ngSrc"], ["class", "spinner", "strokeWidth", "2", 4, "ngIf"], [1, "col-sm", "col-auto", "p-0", "ps-sm-3"], [1, "d-flex", "flex-column", "justify-content-center", "gap-2", "h-100", "text-center", "text-sm-start"], [1, "fg-general-5", "text-body-regular"], ["materialIconPrefix", "upload", 1, "fg-info-3", 3, "clicked", "btnType", "label", "isStopPropagation", "btnClass", "isDisabled", "btnIconClass"], ["type", "file", "accept", "image/jpg,image/png,image/jpeg,image/heic,image/heif,image/webp", 1, "d-none", 3, "change"], [1, "align-items-center", "photo-tip", "d-flex"], [1, "d-inline-block", "align-middle"], ["svgIcon", "lightbulb", 1, "me-2"], [1, "text-caption-regular", "fg-general-3", "text-start", "align-middle"], [1, "form", 3, "formGroup"], [1, "heading-4-medium", "fg-general-5", "mb-3", "d-block"], [1, "text-body-regular", "fg-general-4", "mb-2", "d-block"], ["appearance", "outline", 1, "mb-3"], ["matInput", "", "type", "text", "formControlName", "name", "minlength", "2", "maxlength", "80", 1, "text-body-regular", "fg-general-5"], [1, "mt-2", "text-caption-regular", "fg-general-3"], ["appearance", "outline", 1, "admin-email"], ["svgIcon", "email", 1, "me-1"], ["matInput", "", "type", "email", "disabled", "", 1, "text-body-regular", "fg-general-5", 3, "value", "placeholder"], [1, "text-caption-regular", "fg-general-4"], ["mat-button", "", "color", "primary", "type", "button", 1, "p-0", 3, "routerLink"], [1, "text-body-regular", "fg-general-4", "mb-2", "d-block", "mt-3"], ["for", "phoneNumber", "appearance", "outline", 1, "no-subscript"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "row", "mx-0", "align-items-center", "w-80px"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0", "w-40px"], ["type", "tel", "placeholder", "+353", "aria-label", "Phone Code", "matInput", "", "minlength", "4", "maxlength", "4", "formControlName", "phoneCode", "readonly", "true", 1, "fs-14px", "fs-sm-16px", 3, "mousedown"], [1, "col", "ps-2", "pe-0"], ["placeholder", "800000000", "matInput", "", "id", "phoneNumber", "minlength", "7", "maxlength", "10", "formControlName", "phone", "type", "tel", 3, "mousedown"], ["class", "text-caption-regular fg-error-3", 4, "ngIf"], [1, "my-4"], [1, "heading-4-medium", "fg-general-5", "mb-2", "text-capitalize"], [1, "fg-general-4", "text-body-regular", "d-block", "mb-2"], ["appearance", "outline", "id", "countyControl", 1, "fs-14px", "lh-18px", "fw-400"], ["formControlName", "countyId", "required", "", "overlayPanelClass", "location-overlay", 3, "selectionChange", "panelClass", "placeholder", "ngClass"], [1, "p-3", "border-bottom", "search-container"], ["type", "text", 1, "w-100", "search-location", "px-2", "fs-14px", "lh-18px", "fw-400", 3, "formControl", "placeholder"], ["class", "text-caption-regular fg-general-3", 4, "ngIf"], ["class", "search-option fs-14px lh-18px fw-400", 3, "value", 4, "ngFor", "ngForOf"], ["class", "text-caption-regular", 4, "ngIf"], ["appearance", "outline", "id", "countyArea", 1, "text-body-regular"], ["formControlName", "countyAreaId", "required", "", 3, "selectionChange", "panelClass", "placeholder", "ngClass"], [1, "fg-general-4", "text-body-regular", "mb-2", "d-block"], ["appearance", "outline", 1, "w-100", "mb-4", "address"], ["matInput", "", "minlength", "3", "maxlength", "120", "formControlName", "address", "rows", "4", 1, "w-100", "text-body-regular", "address-area", "resize-none", "py-1", 3, "placeholder", "ngClass"], [1, "button-container", "position-fixed", "start-0", "bottom-0", "w-100", "py-3", "bg-basic-1", "border-top"], [1, "row", "justify-content-between", "px-3", "p-sm-0", "mx-auto"], [1, "col-auto"], ["mat-stroked-button", "", "type", "button", 1, "text-body-regular", "w-100", 3, "routerLink"], ["mat-flat-button", "", "class", "text-body-regular", "color", "primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-start", "inviter-info", "py-2", "px-3", "my-4"], [1, "material-icons-outlined", "fg-info-3", "inviter-icon"], [1, "text-body-regular", "fg-info-3", "ms-2"], ["strokeWidth", "2", 1, "spinner"], [1, "text-caption-regular", "fg-error-3"], [1, "text-caption-regular", "fg-general-3"], [1, "search-option", "fs-14px", "lh-18px", "fw-400", 3, "value"], [1, "text-caption-regular"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", "w-100", 3, "click", "disabled"]], template: function BusinessAccountV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BusinessAccountV2Component_div_0_Template, 117, 94, "div", 6);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "searchFilter");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "searchFilter");
        \u0275\u0275pipe(5, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction3(17, _c2, \u0275\u0275pipeBind3(2, 3, \u0275\u0275pipeBind1(1, 1, ctx.countyList$), ctx.searchCounty == null ? null : ctx.searchCounty.value, \u0275\u0275pureFunction0(15, _c1)), \u0275\u0275pipeBind3(4, 9, \u0275\u0275pipeBind1(3, 7, ctx.countyAreaList$), ctx.searchCountyArea == null ? null : ctx.searchCountyArea.value, \u0275\u0275pureFunction0(16, _c1)), \u0275\u0275pipeBind1(5, 13, ctx.inviterName$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIcon, RouterLink, NgOptimizedImage, MatProgressSpinner, MatDivider, MatFormField, MatLabel, MatHint, MatError, MatSelect, MatSelectTrigger, MatOption, MatInput, ButtonComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, FormControlDirective, FormGroupDirective, FormControlName, AsyncPipe, SearchFilterPipe, TranslationsPipe], styles: ["\n\n.photo-tip[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: var(--general-1);\n  border-radius: 4px;\n}\n.account-photo[_ngcontent-%COMP%] {\n  width: 172px;\n  height: 125px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.enable-save-btn[_ngcontent-%COMP%] {\n  background-color: var(--prim-2) !important;\n  color: var(--basic-1) !important;\n}\n.disable-save-btn[_ngcontent-%COMP%] {\n  background-color: var(--neutral-2) !important;\n  color: var(--neutral-3) !important;\n}\n.image-section[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 175px;\n  left: 34%;\n  z-index: 1;\n}\ninput.search-location[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location[_ngcontent-%COMP%]:focus {\n  outline: unset !important;\n}\n@media (max-width: 575.98px) {\n  .account-photo-section[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid var(--general-2);\n    padding: 16px;\n  }\n  .button-border[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--neutral-2);\n    z-index: 999;\n    background: var(--basic-1);\n  }\n}\n.inviter-info[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: var(--info-1);\n  border: 1px solid var(--info-2);\n}\n.inviter-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  overflow: unset;\n}\n.address-area[_ngcontent-%COMP%] {\n  resize: none;\n}\n.search-container[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: var(--basic-1);\n  z-index: 100;\n}\n.container[_ngcontent-%COMP%], \n.button-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  max-width: 600px !important;\n}\n.button-container[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.pb-96px[_ngcontent-%COMP%] {\n  padding-bottom: 96px !important;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-color: var(--neutral-2) !important;\n}\n.h-16px[_ngcontent-%COMP%] {\n  height: 16px !important;\n}\n.w-80px[_ngcontent-%COMP%] {\n  width: 80px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-account-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessAccountV2Component, [{
    type: Component,
    args: [{ selector: "findqo-business-account-v2", providers: [DestroyService], standalone: false, template: `<div
	class="overflow-hidden px-0 bg-general-1 pt-4 pb-96px"
	*ngIf="{
		countyList: countyList$ | async | searchFilter: searchCounty?.value : ['name'],
		countyAreaList: countyAreaList$ | async | searchFilter: searchCountyArea?.value : ['name'],
		inviterName: inviterName$ | async
	} as vm"
>
	<div class="container py-4 px-3 bg-basic-1 rounded">
		<div *ngIf="vm?.inviterName" class="d-flex align-items-start inviter-info py-2 px-3 my-4">
			<mat-icon class="material-icons-outlined fg-info-3 inviter-icon">info</mat-icon>

			<div class="text-body-regular fg-info-3 ms-2">
				{{ 'n3521' | translations }}
				<span>{{ vm?.inviterName }}&nbsp;</span>

				<span>{{ 'n3520' | translations }}</span>
				{{ 'n3519' | translations }}
			</div>
		</div>

		<h3 class="heading-3 fg-general-5 mb-3">{{ 'n4012' | translations }}</h3>

		<div class="row mx-0 account-photo-section mb-4">
			<div class="col col-sm-auto px-0 position-relative align-self-center text-center text-sm-start image-section">
				<img
					[ngSrc]="businessProfile?.picture || '/assets/images/profile/business-account-photo.svg'"
					alt="Business account photo"
					class="account-photo image-width"
					alt="Business Account Photo"
					width="172"
					height="125"
					priority
				/>
			</div>
			<mat-spinner class="spinner" strokeWidth="2" *ngIf="isPhotoUploading"></mat-spinner>

			<div class="col-sm col-auto p-0 ps-sm-3">
				<div class="d-flex flex-column justify-content-center gap-2 h-100 text-center text-sm-start">
					<div>
						<span class="fg-general-5 text-body-regular">{{ 'n3103' | translations }}</span>
					</div>

					<div>
						<findqo-button
							class="fg-info-3"
							[btnType]="buttonType.BASIC"
							[label]="'n3102' | translations"
							materialIconPrefix="upload"
							[isStopPropagation]="true"
							[btnClass]="'text-body-regular fg-info-3 ps-0'"
							(clicked)="fileInput.click()"
							[isDisabled]="isAgentUser"
							[btnIconClass]="isAgentUser ? 'fg-neutral-2 material-symbols-outlined' : 'fg-info-3 material-symbols-outlined'"
						></findqo-button>

						<input
							type="file"
							#fileInput
							(change)="onFileSelect($event)"
							accept="image/jpg,image/png,image/jpeg,image/heic,image/heif,image/webp"
							class="d-none"
						/>
					</div>

					<div class="align-items-center photo-tip d-flex">
						<div class="d-inline-block align-middle">
							<mat-icon svgIcon="lightbulb" class="me-2"></mat-icon>
						</div>

						<p class="text-caption-regular fg-general-3 text-start align-middle">
							{{ 'n3123' | translations }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<form [formGroup]="businessInformationForm" class="form">
			<h4 class="heading-4-medium fg-general-5 mb-3 d-block">{{ 'n4019' | translations }}</h4>

			<!-- Business Name -->
			<mat-label class="text-body-regular fg-general-4 mb-2 d-block">{{ 'n3100' | translations }}</mat-label>
			<mat-form-field appearance="outline" class="mb-3">
				<input matInput type="text" formControlName="name" class="text-body-regular fg-general-5" minlength="2" maxlength="80" />

				<mat-hint class="mt-2 text-caption-regular fg-general-3">{{ 'n3097' | translations }}</mat-hint>
			</mat-form-field>

			<!-- Email -->
			<mat-label class="text-body-regular fg-general-4 mb-2 d-block">{{ 'n4020' | translations }}</mat-label>
			<mat-form-field appearance="outline" class="admin-email">
				<mat-icon svgIcon="email" class="me-1"></mat-icon>
				<input
					matInput
					[value]="businessProfile?.email || defaultEmailPlaceholder"
					[placeholder]="businessProfile?.email || defaultEmailPlaceholder"
					type="email"
					disabled
					class="text-body-regular fg-general-5"
				/>

				<mat-hint class="text-caption-regular fg-general-4">
					{{ 'n4021' | translations }}
					<button mat-button color="primary" class="p-0" type="button" [routerLink]="'/' + appRoute.myProfile">{{ 'n12' | translations }}</button>
				</mat-hint>
			</mat-form-field>

			<!-- Phone number -->
			<mat-label class="text-body-regular fg-general-4 mb-2 d-block mt-3">{{ 'n4022' | translations }}</mat-label>
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

			<p *ngIf="businessInformationForm.get('phone')?.errors?.['required'] && !businessInformationForm.pristine" class="text-caption-regular fg-error-3">
				{{ 'n3635' | translations }}
			</p>

			<p
				*ngIf="businessInformationForm.get('phone')?.errors?.['pattern'] || businessInformationForm.get('phone')?.errors?.['minlength']"
				class="text-caption-regular fg-error-3"
			>
				{{ 'n3988' | translations }}
			</p>

			<mat-divider class="my-4"></mat-divider>
			<h4 class="heading-4-medium fg-general-5 mb-2 text-capitalize">{{ 'n3101' | translations }}</h4>

			<!-- County -->
			<mat-label class="fg-general-4 text-body-regular d-block mb-2">{{ 'n3054' | translations }}</mat-label>

			<mat-form-field appearance="outline" id="countyControl" class="fs-14px lh-18px fw-400">
				<mat-select
					[panelClass]="'search-dropdown-selection'"
					formControlName="countyId"
					required
					(selectionChange)="onCountySelected($event)"
					[placeholder]="'n3055' | translations"
					overlayPanelClass="location-overlay"
					[ngClass]="isAgentUser ? 'fg-general-3' : 'fg-general-4'"
				>
					<div class="p-3 border-bottom search-container">
						<input
							type="text"
							class="w-100 search-location px-2 fs-14px lh-18px fw-400"
							[formControl]="searchCounty"
							#searchInput
							[placeholder]="'n681' | translations"
						/>
						<span *ngIf="!vm.countyList?.length" class="text-caption-regular fg-general-3">{{ 'n3277' | translations }}</span>
					</div>

					<mat-option *ngFor="let item of vm.countyList" [value]="item?.['id']" class="search-option fs-14px lh-18px fw-400">
						{{ item?.['name'] }}
					</mat-option>
				</mat-select>

				<mat-error *ngIf="businessInformationForm.get('countyId').hasError('required')" class="text-caption-regular">
					{{ 'n3113' | translations }}
				</mat-error>
			</mat-form-field>

			<!--County Area -->
			<mat-label class="fg-general-4 text-body-regular d-block mb-2">{{ 'n3056' | translations }}</mat-label>

			<mat-form-field appearance="outline" id="countyArea" class="text-body-regular">
				<mat-select
					[panelClass]="'search-dropdown-selection'"
					(selectionChange)="onCountyAreaSelected()"
					formControlName="countyAreaId"
					required
					[placeholder]="'n3057' | translations"
					[ngClass]="isAgentUser ? 'fg-general-3' : 'fg-general-4'"
				>
					<div class="p-3 border-bottom search-container">
						<input
							type="text"
							class="w-100 search-location px-2 fs-14px lh-18px fw-400"
							[formControl]="searchCountyArea"
							#searchCountyAreaValue
							[placeholder]="'n681' | translations"
						/>
						<span *ngIf="!vm.countyAreaList?.length" class="text-caption-regular fg-general-3">{{ 'n3277' | translations }}</span>
					</div>

					<mat-option *ngFor="let item of vm.countyAreaList" [value]="item?.['id']" class="search-option fs-14px lh-18px fw-400">
						{{ item?.['name'] }}
					</mat-option>
				</mat-select>
				<mat-error *ngIf="businessInformationForm.get('countyAreaId').hasError('required')" class="text-caption-regular">
					{{ 'n3113' | translations }}
				</mat-error>
			</mat-form-field>
			<!-- Address -->
			<mat-label class="fg-general-4 text-body-regular mb-2 d-block">{{ 'n3058' | translations }}</mat-label>
			<mat-form-field appearance="outline" class="w-100 mb-4 address">
				<textarea
					matInput
					minlength="3"
					maxlength="120"
					class="w-100 text-body-regular address-area resize-none py-1"
					formControlName="address"
					rows="4"
					[placeholder]="'e.g. Suite 5, Plaza 1'"
					[ngClass]="isAgentUser ? 'fg-general-3' : 'fg-general-5'"
				></textarea>
				<mat-hint class="mt-2 text-caption-regular fg-general-3">{{ 'n3060' | translations }}</mat-hint>
			</mat-form-field>
		</form>

		<!-- Save button -->
		<div class="button-container position-fixed start-0 bottom-0 w-100 py-3 bg-basic-1 border-top">
			<div class="row justify-content-between px-3 p-sm-0 mx-auto">
				<div class="col-auto">
					<button
						mat-stroked-button
						class="text-body-regular w-100"
						type="button"
						[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.base"
					>
						{{ 'n112' | translations }}
					</button>
				</div>

				<div class="col-auto">
					<button
						mat-flat-button
						class="text-body-regular"
						(click)="saveBusinessProfile()"
						[disabled]="businessInformationForm.pristine || !businessInformationForm.valid"
						*ngIf="!fromPlaceAd; else placeAdButton"
						color="primary"
					>
						{{ 'n4023' | translations }}
					</button>

					<ng-template #placeAdButton>
						<button
							mat-flat-button
							class="text-body-regular w-100"
							(click)="redirectToPlaceAd()"
							[disabled]="businessInformationForm.pristine || !businessInformationForm.valid"
							color="primary"
						>
							{{ 'n3229' | translations }}
						</button>
					</ng-template>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-account-v2/business-account-v2.component.scss */\n.photo-tip {\n  padding: 8px;\n  background: var(--general-1);\n  border-radius: 4px;\n}\n.account-photo {\n  width: 172px;\n  height: 125px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.enable-save-btn {\n  background-color: var(--prim-2) !important;\n  color: var(--basic-1) !important;\n}\n.disable-save-btn {\n  background-color: var(--neutral-2) !important;\n  color: var(--neutral-3) !important;\n}\n.image-section {\n  position: relative;\n  display: inline-block;\n}\n.spinner {\n  position: absolute;\n  top: 175px;\n  left: 34%;\n  z-index: 1;\n}\ninput.search-location {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-location:focus {\n  outline: unset !important;\n}\n@media (max-width: 575.98px) {\n  .account-photo-section {\n    border-radius: 4px;\n    border: 1px solid var(--general-2);\n    padding: 16px;\n  }\n  .button-border {\n    border-top: 1px solid var(--neutral-2);\n    z-index: 999;\n    background: var(--basic-1);\n  }\n}\n.inviter-info {\n  border-radius: 4px;\n  background-color: var(--info-1);\n  border: 1px solid var(--info-2);\n}\n.inviter-icon {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  overflow: unset;\n}\n.address-area {\n  resize: none;\n}\n.search-container {\n  position: sticky;\n  top: 0;\n  background-color: var(--basic-1);\n  z-index: 100;\n}\n.container,\n.button-container > div {\n  max-width: 600px !important;\n}\n.button-container {\n  z-index: 2;\n}\n.pb-96px {\n  padding-bottom: 96px !important;\n}\n.border-top {\n  border-color: var(--neutral-2) !important;\n}\n.h-16px {\n  height: 16px !important;\n}\n.w-80px {\n  width: 80px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-account-v2.component.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }, { type: ImageService }, { type: FormBuilder }, { type: DestroyService }, { type: MatDialog }, { type: Router }, { type: PlaceAdService }, { type: MyProfileService }], { phoneNumber: [{
    type: ViewChild,
    args: ["phoneNumber"]
  }], fromPlaceAd: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessAccountV2Component, { className: "BusinessAccountV2Component", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-account-v2/business-account-v2.component.ts", lineNumber: 29 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-account-v2/business-account-v2-routing.module.ts
var routes = [
  {
    path: "",
    component: BusinessAccountV2Component
  }
];
var MyProfilePageRoutingModule = class _MyProfilePageRoutingModule {
  static {
    this.\u0275fac = function MyProfilePageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfilePageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyProfilePageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfilePageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-account-v2/business-account-v2.module.ts
var BusinessAccountV2Module = class _BusinessAccountV2Module {
  static {
    this.\u0275fac = function BusinessAccountV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessAccountV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BusinessAccountV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      MatProgressSpinnerModule,
      MatDividerModule,
      MatSelectModule,
      MatInputModule,
      ButtonModule,
      BusinessAgentListModule,
      FormsModule,
      ReactiveFormsModule,
      MyProfilePageRoutingModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessAccountV2Module, [{
    type: NgModule,
    args: [{
      declarations: [BusinessAccountV2Component],
      imports: [
        SharedModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatSelectModule,
        MatInputModule,
        ButtonModule,
        BusinessAgentListModule,
        FormsModule,
        ReactiveFormsModule,
        MyProfilePageRoutingModule
      ],
      exports: [BusinessAccountV2Component]
    }]
  }], null, null);
})();

export {
  BusinessAccountV2Module
};
//# sourceMappingURL=chunk-RNOQXJDC.js.map
