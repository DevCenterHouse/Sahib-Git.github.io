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
  MatCalendar,
  MatDatepickerModule
} from "./chunk-7NR4UKDC.js";
import "./chunk-ZRK6DKBO.js";
import "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  DAYS_INDEX,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatDivider,
  MatDividerModule,
  MatError,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatNativeDateModule,
  MaxLengthValidator,
  MeetingType,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  TimeSlotNamePipe,
  TranslationsPipe,
  Validators,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf,
  NgOptimizedImage,
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
  __objRest,
  __spreadProps,
  __spreadValues,
  finalize,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/calender-header/calender-header.component.ts
var CalenderHeaderComponent = class _CalenderHeaderComponent {
  constructor(calendar) {
    this.calendar = calendar;
  }
  get periodLabel() {
    return this.calendar.activeDate.toLocaleString("default", { month: "long", year: "numeric" });
  }
  previousClicked() {
    this.calendar.activeDate = new Date(this.calendar.activeDate.getFullYear(), this.calendar.activeDate.getMonth() - 1, 1);
  }
  nextClicked() {
    this.calendar.activeDate = new Date(this.calendar.activeDate.getFullYear(), this.calendar.activeDate.getMonth() + 1, 1);
  }
  static {
    this.\u0275fac = function CalenderHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalenderHeaderComponent)(\u0275\u0275directiveInject(MatCalendar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalenderHeaderComponent, selectors: [["findqo-calender-header"]], standalone: false, decls: 9, vars: 1, consts: [[1, "calender-header"], ["mat-icon-button", "", 1, "rounded-circle", 3, "click"]], template: function CalenderHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function CalenderHeaderComponent_Template_button_click_1_listener() {
          return ctx.previousClicked();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 1);
        \u0275\u0275listener("click", function CalenderHeaderComponent_Template_button_click_6_listener() {
          return ctx.nextClicked();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "chevron_right");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.periodLabel);
      }
    }, dependencies: [MatIconButton, MatIcon], styles: ["\n\n.calender-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5em;\n}\n.calender-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n  width: fit-content !important;\n}\n.calender-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/calender-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalenderHeaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-calender-header", standalone: false, template: '<div class="calender-header">\n	<button mat-icon-button (click)="previousClicked()" class="rounded-circle">\n		<mat-icon>chevron_left</mat-icon>\n	</button>\n\n	<div>{{ periodLabel }}</div>\n\n	<button mat-icon-button (click)="nextClicked()" class="rounded-circle">\n		<mat-icon>chevron_right</mat-icon>\n	</button>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/calender-header/calender-header.component.scss */\n.calender-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5em;\n}\n.calender-header button {\n  margin: 0 0.5em;\n  width: fit-content !important;\n}\n.calender-header button :hover {\n  background-color: var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/calender-header.component.css.map */\n"] }]
  }], () => [{ type: MatCalendar, decorators: [{
    type: Inject,
    args: [MatCalendar]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalenderHeaderComponent, { className: "CalenderHeaderComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/calender-header/calender-header.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/invitee-meeting-form/invitee-meeting-form.component.ts
var _c0 = ["phoneNumber"];
function InviteeMeetingFormComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3635"), " ");
  }
}
function InviteeMeetingFormComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3960"), " ");
  }
}
function InviteeMeetingFormComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3086"));
  }
}
function InviteeMeetingFormComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3487"));
  }
}
function InviteeMeetingFormComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-email-input", 29);
    \u0275\u0275listener("addEmail", function InviteeMeetingFormComponent_Conditional_37_Template_app_email_input_addEmail_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addEmail($event));
    })("removeEmail", function InviteeMeetingFormComponent_Conditional_37_Template_app_email_input_removeEmail_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeEmail($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "n3927"));
    \u0275\u0275advance(2);
    \u0275\u0275property("emails", ctx_r2.emails.value);
  }
}
function InviteeMeetingFormComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function InviteeMeetingFormComponent_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddGuest());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementStart(3, "mat-icon", 31);
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3928"), " ");
  }
}
var InviteeMeetingFormComponent = class _InviteeMeetingFormComponent {
  constructor(fb, meetingFacade) {
    this.fb = fb;
    this.meetingFacade = meetingFacade;
    this.formSubmission = new EventEmitter();
    this.isAddGuestEnabled = false;
    this.loading = false;
    this.form = this.fb.group({
      name: ["", Validators.required],
      phoneCode: ["+353", Validators.required],
      phone: [void 0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ["", Validators.maxLength(2e3)],
      guestEmails: this.fb.array([])
    });
  }
  get emails() {
    return this.form.get("guestEmails");
  }
  mouseClick() {
    setTimeout(() => {
      this.phoneNumber?.focus();
    }, 200);
  }
  handleAddGuest() {
    this.isAddGuestEnabled = true;
  }
  addEmail(email) {
    this.emails.push(new FormControl(email, Validators.required));
  }
  removeEmail(email) {
    const INDEX = this.emails.controls.findIndex((em) => em.value === email);
    this.emails.removeAt(INDEX);
  }
  handleFormSubmit() {
    this.loading = true;
    const GUEST_EMAILS = this.form.get("guestEmails")?.value?.join(",");
    const DATE = new Date(this.previousData.date);
    const DATE_STRING = `${DATE.getFullYear()}-${DATE.getMonth() + 1 > 9 ? DATE.getMonth() + 1 : `0${DATE.getMonth() + 1}`}-${DATE.getDate() > 9 ? DATE.getDate() : `0${DATE.getDate()}`}`;
    const API_DATA = __spreadProps(__spreadValues(__spreadValues({}, this.form.value), this.previousData), {
      guestEmails: GUEST_EMAILS,
      date: DATE_STRING,
      timeZoneId: this.previousData.timezoneId
    });
    this.meetingFacade.acceptMeeting(API_DATA).pipe(finalize(() => this.loading = true)).subscribe(() => {
      this.formSubmission.emit(__spreadValues(__spreadValues({}, this.form.value), this.previousData));
    });
  }
  static {
    this.\u0275fac = function InviteeMeetingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteeMeetingFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MeetingScheduleFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteeMeetingFormComponent, selectors: [["findqo-invitee-meeting-form"]], viewQuery: function InviteeMeetingFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneNumber = _t.first);
      }
    }, inputs: { previousData: "previousData" }, outputs: { formSubmission: "formSubmission" }, standalone: false, decls: 55, vars: 33, consts: [["phone", ""], ["phoneNumber", "matInput"], [1, "heading-4-medium"], [3, "formGroup"], [1, "text-body-regular", "fg-general-4", "mb-2", "mt-3"], ["appearance", "outline"], ["formControlName", "name", "type", "text", "matInput", ""], [1, "text-caption-regular"], [1, "text-body-regular", "fg-general-4", "mb-2"], ["for", "phoneNumber", "appearance", "outline", 1, "no-subscript"], [1, "row", "mx-0", "align-items-center"], [1, "col-auto", "px-0"], [1, "col-auto", "px-0", "me-2"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "d-block", "rounded"], [1, "col", "px-0", "w-40px"], ["type", "tel", "placeholder", "+353", "aria-label", "Phone Code", "matInput", "", "minlength", "4", "maxlength", "4", "formControlName", "phoneCode", "readonly", "true", 1, "fs-14px", "fs-sm-16px", 3, "mousedown"], [1, "col", "ps-2", "pe-0"], ["placeholder", "800000000", "matInput", "", "id", "phoneNumber", "minlength", "7", "maxlength", "10", "formControlName", "phone", "type", "tel", 3, "mousedown"], ["class", "text-caption-regular", 4, "ngIf"], ["class", "text-caption-regular fg-error-3", 4, "ngIf"], ["formControlName", "email", "type", "email", "matInput", ""], [1, "guest-email-container"], ["mat-stroked-button", "", "color", "primary", 1, "rounded-pill"], ["appearance", "outline", 1, "meeting-message-field"], ["formControlName", "message", "type", "text", "matInput", "", "rows", "6", 1, "resize-none", "rounded-1", "text-body-regular", "fg-general-5"], [1, "text-caption-regular", "fg-general-4", "mb-3"], ["mat-flat-button", "", "color", "primary", 1, "rounded-pill", 3, "click", "disabled"], ["iconPositionEnd", ""], [1, "text-caption-regular", "fg-error-3"], [3, "addEmail", "removeEmail", "emails"], ["mat-stroked-button", "", "color", "primary", 1, "rounded-pill", 3, "click"], ["iconPositionEnd", "", 1, "material-icons-outlined"]], template: function InviteeMeetingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h4", 2);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form", 3)(4, "p", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-form-field", 5);
        \u0275\u0275element(8, "input", 6);
        \u0275\u0275elementStart(9, "mat-error", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-form-field", 9, 0)(17, "div", 10)(18, "div", 11)(19, "mat-select-trigger")(20, "div", 10)(21, "div", 12);
        \u0275\u0275element(22, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "input", 15);
        \u0275\u0275listener("mousedown", function InviteeMeetingFormComponent_Template_input_mousedown_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.preventDefault());
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "div", 16)(26, "input", 17, 1);
        \u0275\u0275listener("mousedown", function InviteeMeetingFormComponent_Template_input_mousedown_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mouseClick());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(28, InviteeMeetingFormComponent_mat_error_28_Template, 3, 3, "mat-error", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, InviteeMeetingFormComponent_span_29_Template, 3, 3, "span", 19);
        \u0275\u0275elementStart(30, "p", 4);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 5);
        \u0275\u0275element(34, "input", 20);
        \u0275\u0275template(35, InviteeMeetingFormComponent_Conditional_35_Template, 3, 3, "mat-error", 7)(36, InviteeMeetingFormComponent_Conditional_36_Template, 3, 3, "mat-error", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, InviteeMeetingFormComponent_Conditional_37_Template, 5, 4, "div", 21)(38, InviteeMeetingFormComponent_Conditional_38_Template, 5, 3, "button", 22);
        \u0275\u0275elementStart(39, "p", 4);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-form-field", 23);
        \u0275\u0275element(43, "textarea", 24);
        \u0275\u0275elementStart(44, "mat-error", 7);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "p", 25);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 26);
        \u0275\u0275listener("click", function InviteeMeetingFormComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleFormSubmit());
        });
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translations");
        \u0275\u0275elementStart(53, "mat-icon", 27);
        \u0275\u0275text(54, "schedule_send");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_8_0;
        let tmp_10_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 15, "n3925"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, "n3098"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 19, "n3085"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "n3926"));
        \u0275\u0275advance(15);
        \u0275\u0275property("ngIf", (tmp_7_0 = ctx.form.get("phone")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.form.get("phone")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]) || ((tmp_8_0 = ctx.form.get("phone")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["minlength"]));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 23, "n82"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_10_0 = ctx.form.get("email").errors) == null ? null : tmp_10_0["required"]) ? 35 : ((tmp_10_0 = ctx.form.get("email").errors) == null ? null : tmp_10_0["pattern"]) ? 36 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAddGuestEnabled ? 37 : 38);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 25, "n3929"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 27, "n3935"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(49, 29, "n3930"), ".");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 31, "n3931"), " ");
      }
    }, dependencies: [NgIf, MatButton, MatIcon, EmailInputComponent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MinLengthValidator, MaxLengthValidator, FormGroupDirective, FormControlName, MatInput, MatFormField, MatError, MatSelectTrigger, TranslationsPipe], styles: ["\n\n.resize-none[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.guest-email-container[_ngcontent-%COMP%] {\n  max-width: 509px !important;\n}\n.w-40px[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/invitee-meeting-form.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteeMeetingFormComponent, [{
    type: Component,
    args: [{ selector: "findqo-invitee-meeting-form", standalone: false, template: `<h4 class="heading-4-medium">{{ 'n3925' | translations }}</h4>
<form [formGroup]="form">
	<p class="text-body-regular fg-general-4 mb-2 mt-3">{{ 'n3098' | translations }}</p>
	<mat-form-field appearance="outline">
		<input formControlName="name" type="text" matInput />
		<mat-error class="text-caption-regular">{{ 'n3085' | translations }}</mat-error>
	</mat-form-field>

	<p class="text-body-regular fg-general-4 mb-2">{{ 'n3926' | translations }}</p>
	<mat-form-field for="phoneNumber" class="no-subscript" #phone appearance="outline">
		<div class="row mx-0 align-items-center">
			<div class="col-auto px-0">
				<mat-select-trigger>
					<div class="row mx-0 align-items-center">
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

		<mat-error *ngIf="form.get('phone')?.errors?.['required']" class="text-caption-regular">
			{{ 'n3635' | translations }}
		</mat-error>
	</mat-form-field>

	<span *ngIf="form.get('phone')?.errors?.['pattern'] || form.get('phone')?.errors?.['minlength']" class="text-caption-regular fg-error-3">
		{{ 'n3960' | translations }}
	</span>

	<p class="text-body-regular fg-general-4 mb-2 mt-3">{{ 'n82' | translations }}</p>
	<mat-form-field appearance="outline">
		<input formControlName="email" type="email" matInput />

		@if (form.get('email').errors?.['required']) {
			<mat-error class="text-caption-regular">{{ 'n3086' | translations }}</mat-error>
		} @else if (form.get('email').errors?.['pattern']) {
			<mat-error class="text-caption-regular">{{ 'n3487' | translations }}</mat-error>
		}
	</mat-form-field>

	@if (isAddGuestEnabled) {
		<div class="guest-email-container">
			<p class="text-body-regular fg-general-4 mb-2">{{ 'n3927' | translations }}</p>
			<app-email-input [emails]="emails.value" (addEmail)="addEmail($event)" (removeEmail)="removeEmail($event)"></app-email-input>
		</div>
	} @else {
		<button mat-stroked-button class="rounded-pill" color="primary" (click)="handleAddGuest()">
			{{ 'n3928' | translations }}
			<mat-icon iconPositionEnd class="material-icons-outlined">person_add</mat-icon>
		</button>
	}

	<p class="text-body-regular fg-general-4 mb-2 mt-3">{{ 'n3929' | translations }}</p>
	<mat-form-field appearance="outline" class="meeting-message-field">
		<textarea formControlName="message" type="text" matInput rows="6" class="resize-none rounded-1 text-body-regular fg-general-5"></textarea>
		<mat-error class="text-caption-regular">{{ 'n3935' | translations }}</mat-error>
	</mat-form-field>

	<p class="text-caption-regular fg-general-4 mb-3">{{ 'n3930' | translations }}.</p>

	<button mat-flat-button class="rounded-pill" color="primary" (click)="handleFormSubmit()" [disabled]="form.invalid || loading">
		{{ 'n3931' | translations }}
		<mat-icon iconPositionEnd>schedule_send</mat-icon>
	</button>
</form>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/invitee-meeting-form/invitee-meeting-form.component.scss */\n.resize-none {\n  resize: none !important;\n}\n.guest-email-container {\n  max-width: 509px !important;\n}\n.w-40px {\n  width: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/invitee-meeting-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MeetingScheduleFacade }], { previousData: [{
    type: Input
  }], formSubmission: [{
    type: Output
  }], phoneNumber: [{
    type: ViewChild,
    args: ["phoneNumber"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteeMeetingFormComponent, { className: "InviteeMeetingFormComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/invitee-meeting-form/invitee-meeting-form.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-schedule-success/meeting-schedule-success.component.ts
function MeetingScheduleSuccessComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.meetingData == null ? null : ctx_r0.meetingData.guestEmails == null ? null : ctx_r0.meetingData.guestEmails.join(",\n"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r0.meetingData == null ? null : ctx_r0.meetingData.guestEmails == null ? null : ctx_r0.meetingData.guestEmails.length, " ");
  }
}
function MeetingScheduleSuccessComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meetingData == null ? null : ctx_r0.meetingData.title);
  }
}
function MeetingScheduleSuccessComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 20)(1, "img", 21);
    \u0275\u0275elementStart(2, "a", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "mat-icon", 23);
    \u0275\u0275text(5, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", ctx_r0.meetingData.ad.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.meetingData.ad.adlink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingData.ad.title, " ");
  }
}
function MeetingScheduleSuccessComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 23);
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.meetingData.otherPropertyLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingData.otherPropertyLink, " ");
  }
}
var MeetingScheduleSuccessComponent = class _MeetingScheduleSuccessComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.appRoute = APP_ROUTE;
    this.meetingType = MeetingType;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  static {
    this.\u0275fac = function MeetingScheduleSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleSuccessComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingScheduleSuccessComponent, selectors: [["findqo-meeting-schedule-success"]], inputs: { meetingData: "meetingData", meetingEventData: "meetingEventData" }, standalone: false, decls: 46, vars: 33, consts: [[1, "container", "py-4", "px-3", "px-lg-4"], [1, "heading-1", "fg-prim-2", "text-center", "mb-5", "mb-lg-3"], [1, "row", "gap-3", "justify-content-lg-center", "align-items-center"], [1, "col-auto", "px-lg-4"], [1, "heading-4-medium"], [1, "fg-success-3"], [1, "text-body-regular", "fg-general-5", "mt-2"], [1, "text-body-regular", "fg-general-5", "mt-3"], [1, "material-icons-outlined", "fg-general-4"], ["class", "fg-general-4 bg-neutral-1 px-2 rounded-pill ms-1 cursor-pointer", 3, "matTooltip", 4, "ngIf"], [1, "col-auto", "pt-3", "pb-4", "mw-345px", "border-left-lg"], [1, "pt-3", "pb-4", "px-lg-4"], [1, "fg-general-4", "text-caption-regular"], [1, "text-break", "heading-3", "fg-general-5", "mt-2"], [1, "text-break", "text-body-medium", "fg-general-5", "mt-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-break", "text-body-regular", "fg-general-5", "d-inline-flex", "align-items-center", "mt-3", 3, "href"], [1, "text-center", "w-100", "position-fixed", "bottom-0", "start-0"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["iconPositionEnd", ""], [1, "fg-general-4", "bg-neutral-1", "px-2", "rounded-pill", "ms-1", "cursor-pointer", 3, "matTooltip"], [1, "my-2"], ["alt", "property image", "width", "252", "height", "150", "priority", "", 1, "mb-2", "mx-auto", 3, "ngSrc"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-break", "text-body-regular", "fg-general-5", "d-inline-flex", "align-items-center", 3, "href"], [1, "d-inline", "fs-16px", "fg-general-4", "pe-2"]], template: function MeetingScheduleSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "h4", 4)(7, "mat-icon", 5);
        \u0275\u0275text(8, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 7)(15, "mat-icon", 8);
        \u0275\u0275text(16, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "timeSlotName");
        \u0275\u0275pipe(19, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 6)(21, "mat-icon", 8);
        \u0275\u0275text(22, "access_time");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 6)(25, "mat-icon", 8);
        \u0275\u0275text(26, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27);
        \u0275\u0275template(28, MeetingScheduleSuccessComponent_span_28_Template, 2, 2, "span", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "p", 12);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translations");
        \u0275\u0275pipe(34, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, MeetingScheduleSuccessComponent_Conditional_35_Template, 2, 1, "h3", 13);
        \u0275\u0275elementStart(36, "p", 14);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, MeetingScheduleSuccessComponent_Conditional_38_Template, 6, 3)(39, MeetingScheduleSuccessComponent_Conditional_39_Template, 4, 2, "a", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 16)(41, "button", 17);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "translations");
        \u0275\u0275elementStart(44, "mat-icon", 18);
        \u0275\u0275text(45, "arrow_forward");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 15, "n3786"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "n3939"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 19, "n3940"), ".");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(18, 21, ctx.meetingData == null ? null : ctx.meetingData.timeSlot == null ? null : ctx.meetingData.timeSlot.name, ctx.meetingEventData.intervals), ", ", \u0275\u0275pipeBind2(19, 24, ctx.meetingData.date, "EEEE, MMMM dd, YYYY"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.meetingData == null ? null : ctx.meetingData.timezone == null ? null : ctx.meetingData.timezone.name, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.meetingData == null ? null : ctx.meetingData.email, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.meetingData == null ? null : ctx.meetingData.guestEmails == null ? null : ctx.meetingData.guestEmails.length);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", (ctx.meetingData == null ? null : ctx.meetingData.meetingType == null ? null : ctx.meetingData.meetingType.id) === ctx.meetingType.PROPERTY_VIEWING ? \u0275\u0275pipeBind1(33, 27, "n3785") + ":" : \u0275\u0275pipeBind1(34, 29, "n3932"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.meetingData == null ? null : ctx.meetingData.title) ? 35 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.meetingData == null ? null : ctx.meetingData.address);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.meetingData == null ? null : ctx.meetingData.ad) ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.meetingData == null ? null : ctx.meetingData.otherPropertyLink) ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", ctx.appRoute.home);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 31, "n3941"), " ");
      }
    }, dependencies: [NgIf, MatButton, MatIcon, RouterLink, NgOptimizedImage, MatDivider, MatTooltip, DatePipe, TranslationsPipe, TimeSlotNamePipe], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-1);\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  height: 100% !important;\n}\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 362px;\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 800px !important;\n  }\n}\nmat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n  vertical-align: middle;\n  width: fit-content !important;\n}\n@media (min-width: 768px) {\n  .mw-345px[_ngcontent-%COMP%] {\n    max-width: 345px !important;\n  }\n}\n.border-left-lg[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (min-width: 992px) {\n  .border-left-lg[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 80%;\n    width: 1px;\n    margin-right: 16px;\n    background-color: var(--neutral-1);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-schedule-success.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleSuccessComponent, [{
    type: Component,
    args: [{ selector: "findqo-meeting-schedule-success", standalone: false, template: `<div class="container py-4 px-3 px-lg-4">
	<h1 class="heading-1 fg-prim-2 text-center mb-5 mb-lg-3">{{ 'n3786' | translations }}</h1>

	<div class="row gap-3 justify-content-lg-center align-items-center">
		<div class="col-auto px-lg-4">
			<h4 class="heading-4-medium">
				<mat-icon class="fg-success-3">check_circle</mat-icon>
				{{ 'n3939' | translations }}
			</h4>
			<p class="text-body-regular fg-general-5 mt-2">{{ 'n3940' | translations }}.</p>

			<p class="text-body-regular fg-general-5 mt-3">
				<mat-icon class="material-icons-outlined fg-general-4">calendar_today</mat-icon>
				{{ meetingData?.timeSlot?.name | timeSlotName: meetingEventData.intervals }}, {{ meetingData.date | date: 'EEEE, MMMM dd, YYYY' }}
			</p>
			<p class="text-body-regular fg-general-5 mt-2">
				<mat-icon class="material-icons-outlined fg-general-4">access_time</mat-icon>
				{{ meetingData?.timezone?.name }}
			</p>
			<p class="text-body-regular fg-general-5 mt-2">
				<mat-icon class="material-icons-outlined fg-general-4">person</mat-icon>
				{{ meetingData?.email }}

				<span
					*ngIf="meetingData?.guestEmails?.length"
					class="fg-general-4 bg-neutral-1 px-2 rounded-pill ms-1 cursor-pointer"
					[matTooltip]="meetingData?.guestEmails?.join(',\\n')"
				>
					+{{ meetingData?.guestEmails?.length }}
				</span>
			</p>
		</div>

		<div class="col-auto pt-3 pb-4 mw-345px border-left-lg">
			<div class="pt-3 pb-4 px-lg-4">
				<p class="fg-general-4 text-caption-regular">
					{{ meetingData?.meetingType?.id === meetingType.PROPERTY_VIEWING ? ('n3785' | translations) + ':' : ('n3932' | translations) }}
				</p>

				@if (meetingData?.title) {
					<h3 class="text-break heading-3 fg-general-5 mt-2">{{ meetingData?.title }}</h3>
				}

				<p class="text-break text-body-medium fg-general-5 mt-2">{{ meetingData?.address }}</p>

				@if (meetingData?.ad) {
					<mat-divider class="my-2"></mat-divider>

					<img class="mb-2 mx-auto" [ngSrc]="meetingData.ad.imageUrl" alt="property image" width="252" height="150" priority />

					<a
						[href]="meetingData.ad.adlink"
						target="_blank"
						rel="noopener noreferrer"
						class="text-break text-body-regular fg-general-5 d-inline-flex align-items-center"
					>
						{{ meetingData.ad.title }}
						<mat-icon class="d-inline fs-16px fg-general-4 pe-2">open_in_new</mat-icon>
					</a>
				}

				@if (meetingData?.otherPropertyLink) {
					<a
						[href]="meetingData.otherPropertyLink"
						target="_blank"
						rel="noopener noreferrer"
						class="text-break text-body-regular fg-general-5 d-inline-flex align-items-center mt-3"
					>
						{{ meetingData.otherPropertyLink }}
						<mat-icon class="d-inline fs-16px fg-general-4 pe-2">open_in_new</mat-icon>
					</a>
				}
			</div>
		</div>
	</div>

	<div class="text-center w-100 position-fixed bottom-0 start-0">
		<button mat-button color="primary" [routerLink]="appRoute.home">
			{{ 'n3941' | translations }}
			<mat-icon iconPositionEnd>arrow_forward</mat-icon>
		</button>
	</div>
</div>
`, styles: ['/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-schedule-success/meeting-schedule-success.component.scss */\n.container {\n  border: 1px solid var(--neutral-1);\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  height: 100% !important;\n}\n.container .row {\n  min-height: 362px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 800px !important;\n  }\n}\nmat-icon {\n  display: inline !important;\n  vertical-align: middle;\n  width: fit-content !important;\n}\n@media (min-width: 768px) {\n  .mw-345px {\n    max-width: 345px !important;\n  }\n}\n.border-left-lg {\n  position: relative;\n}\n@media (min-width: 992px) {\n  .border-left-lg ::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 80%;\n    width: 1px;\n    margin-right: 16px;\n    background-color: var(--neutral-1);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-schedule-success.component.css.map */\n'] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { meetingData: [{
    type: Input
  }], meetingEventData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingScheduleSuccessComponent, { className: "MeetingScheduleSuccessComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-schedule-success/meeting-schedule-success.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/view-meeting/view-meeting.component.ts
var _c02 = (a0) => ({ "form-container": a0 });
var _c1 = (a0) => ({ "d-none d-lg-block": a0 });
var _c2 = (a0, a1) => ({ "text-body-medium": a0, "text-body-regular": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function ViewMeetingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-meeting-schedule-success", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("meetingData", ctx_r0.meetingData)("meetingEventData", ctx_r0.meetingEventData);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.meetingEventData.title);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 18)(1, "img", 19);
    \u0275\u0275elementStart(2, "div", 20)(3, "a", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 22);
    \u0275\u0275text(6, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", ctx_r0.meetingEventData.ad.imageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.meetingEventData.ad.adlink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingEventData.ad.title, " ");
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "a", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 23);
    \u0275\u0275text(4, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.meetingEventData.otherPropertyLink, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingEventData.otherPropertyLink, " ");
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "findqo-invitee-meeting-form", 24);
    \u0275\u0275listener("formSubmission", function ViewMeetingComponent_Conditional_2_Conditional_22_Template_findqo_invitee_meeting_form_formSubmission_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFormSubmit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("previousData", ctx_r0.form.value);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_mat_calendar_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-calendar", 31);
    \u0275\u0275listener("selectedChange", function ViewMeetingComponent_Conditional_2_Conditional_23_mat_calendar_5_Template_mat_calendar_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleChange("date", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r0.form.get("date").value)("headerComponent", ctx_r0.headerComponent)("dateFilter", ctx_r0.myFilter)("dateClass", ctx_r0.dateClass)("minDate", ctx_r0.minDate)("maxDate", ctx_r0.maxDate);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "findqo-time-zone", 33);
    \u0275\u0275listener("zoneChange", function ViewMeetingComponent_Conditional_2_Conditional_23_ng_container_6_Template_findqo_time_zone_zoneChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleChange($event.key, $event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const vm_r6 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "n3933"));
    \u0275\u0275advance(2);
    \u0275\u0275property("timeZones", vm_r6)("selectedZoneId", (tmp_6_0 = ctx_r0.form.get("timezoneId")) == null ? null : tmp_6_0.value)("cardBorder", "border")("disabled", true);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.handleChange("timeId", item_r9.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.name, " ");
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.name, " ");
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 45);
    \u0275\u0275listener("click", function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.handleNext());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n292"));
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275template(2, ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_button_2_Template, 2, 1, "button", 40)(3, ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_button_3_Template, 2, 1, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_div_4_Template, 4, 3, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.form.get("timeId").value !== item_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.get("timeId").value === item_r9.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.get("timeId").value === item_r9.id);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 7)(3, "button", 8);
    \u0275\u0275listener("click", function ViewMeetingComponent_Conditional_2_Conditional_23_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.form.get("date").reset());
    });
    \u0275\u0275elementStart(4, "mat-icon", 9);
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 10)(7, "h1", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 36)(11, "p", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4", 37);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, ViewMeetingComponent_Conditional_2_Conditional_23_div_8_For_18_Template, 5, 3, "div", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", ctx_r0.appRoute.home);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "n3786"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 6, "n3934"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 8, ctx_r0.form.get("date").value, "EEEE, MMM dd"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.timeSlots);
  }
}
function ViewMeetingComponent_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275template(5, ViewMeetingComponent_Conditional_2_Conditional_23_mat_calendar_5_Template, 1, 6, "mat-calendar", 28)(6, ViewMeetingComponent_Conditional_2_Conditional_23_ng_container_6_Template, 5, 7, "ng-container", 29);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ViewMeetingComponent_Conditional_2_Conditional_23_div_8_Template, 19, 11, "div", 30);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx_r0.form.get("date").value && ctx_r0.timeSlots.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "n3112"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isBrowser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 7, ctx_r0.timeZone$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.form.get("date").value && ctx_r0.timeSlots.length);
  }
}
function ViewMeetingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 2)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "button", 8);
    \u0275\u0275listener("click", function ViewMeetingComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleBack());
    });
    \u0275\u0275elementStart(6, "mat-icon", 9);
    \u0275\u0275text(7, "arrow_back");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 10)(9, "h1", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "p", 13);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ViewMeetingComponent_Conditional_2_Conditional_17_Template, 2, 1, "h3", 14);
    \u0275\u0275elementStart(18, "p", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ViewMeetingComponent_Conditional_2_Conditional_20_Template, 7, 3)(21, ViewMeetingComponent_Conditional_2_Conditional_21_Template, 5, 2, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ViewMeetingComponent_Conditional_2_Conditional_22_Template, 2, 1, "div", 17)(23, ViewMeetingComponent_Conditional_2_Conditional_23_Template, 9, 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form)("ngClass", \u0275\u0275pureFunction1(18, _c02, ctx_r0.form.get("date").value && ctx_r0.timeSlots.length && !ctx_r0.isFormEnabled));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx_r0.form.get("date").value && ctx_r0.timeSlots.length && !ctx_r0.isFormEnabled));
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", ctx_r0.appRoute.home);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "n3786"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingEventData.meetingType.id === ctx_r0.meetingType.PROPERTY_VIEWING ? \u0275\u0275pipeBind1(15, 14, "n3785") + ":" : \u0275\u0275pipeBind1(16, 16, "n3932"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.meetingEventData.title ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c2, ctx_r0.meetingEventData.meetingType.id === ctx_r0.meetingType.PROPERTY_VIEWING, ctx_r0.meetingEventData.meetingType.id === ctx_r0.meetingType.PERSONAL));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meetingEventData.address, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.meetingEventData.ad ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.meetingEventData.otherPropertyLink ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isFormEnabled ? 22 : 23);
  }
}
function ViewMeetingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 3);
  }
}
var ViewMeetingComponent = class _ViewMeetingComponent {
  constructor(fb, meetingFacade, platforId, router) {
    this.fb = fb;
    this.meetingFacade = meetingFacade;
    this.platforId = platforId;
    this.router = router;
    this.timeZone$ = this.meetingFacade.getTimeZone$();
    this.isBrowser = isPlatformBrowser(this.platforId);
    this.headerComponent = CalenderHeaderComponent;
    this.meetingType = MeetingType;
    this.appRoute = APP_ROUTE;
    this.timeSlots = [];
    this.isFormEnabled = false;
    this.isFormSubmitted = false;
    this.form = this.fb.group({
      date: ["", Validators.required],
      timezoneId: ["", Validators.required],
      timeId: ["", Validators.required],
      user: ["", Validators.required],
      title: ["", Validators.required],
      meetingTypeId: ["", Validators.required],
      dayId: ["", Validators.required]
    });
    this.myFilter = (d) => {
      return this.meetingEventData.availability.some((day) => DAYS_INDEX[+day.day.id] === (d || /* @__PURE__ */ new Date()).getDay());
    };
    this.dateClass = (d) => {
      if (this.meetingEventData.availability.some((day) => DAYS_INDEX[+day.day.id] === (d || /* @__PURE__ */ new Date()).getDay()) && (d || /* @__PURE__ */ new Date()).getTime() > this.minDate.getTime() - 1 && (d || /* @__PURE__ */ new Date()).getTime() <= this.maxDate.getTime()) {
        return "highlighted-date";
      }
      return null;
    };
  }
  handleChange(key, value) {
    if (key === "date") {
      const DATE = this.meetingEventData.availability.find((day) => {
        if (DAYS_INDEX[+day.day.id] === new Date(value).getDay()) {
          this.form.patchValue({ dayId: day.day.id });
          return true;
        }
        return false;
      });
      this.form.get("timeId").reset();
      const SELECTED_DATE = new Date(value);
      const DATE_STRING = `${SELECTED_DATE.getFullYear()}-${SELECTED_DATE.getMonth() + 1 > 9 ? SELECTED_DATE.getMonth() + 1 : `0${SELECTED_DATE.getMonth() + 1}`}-${SELECTED_DATE.getDate() > 9 ? SELECTED_DATE.getDate() : `0${SELECTED_DATE.getDate()}`}`;
      this.meetingFacade.getTimeSlots$({
        startTime: DATE.time[0].start.reference,
        endTime: DATE.time[0].end.reference,
        date: DATE_STRING,
        meetingId: this.meetingEventData.id
      }).subscribe((slots) => this.timeSlots = slots);
    }
    this.form.get([key]).patchValue(value);
  }
  handleNext() {
    this.isFormEnabled = true;
  }
  handleBack() {
    if (this.isFormEnabled) {
      this.isFormEnabled = false;
      return;
    }
    this.router.navigate([APP_ROUTE.home]);
  }
  onFormSubmit(meetingData) {
    const _a = meetingData, { title, user } = _a, rest = __objRest(_a, ["title", "user"]);
    const TIME_SLOT = this.timeSlots?.find((ts) => ts.id === meetingData?.timeId);
    this.meetingData = __spreadProps(__spreadValues(__spreadValues({}, rest), this.meetingEventData), { timeSlot: TIME_SLOT });
    this.isFormSubmitted = true;
  }
  ngOnInit() {
    if (this.isBrowser) {
      this.meetingFacade.getMeetingEvent({ user: this.userName, title: this.meetingTitle }).subscribe((meeting) => {
        this.meetingEventData = meeting;
        this.minDate = new Date(+this.meetingEventData.startDate * 1e3);
        this.maxDate = new Date(+this.meetingEventData.endDate * 1e3);
        if ((/* @__PURE__ */ new Date()).getTime() > this.minDate.getTime() - 1) {
          this.minDate = /* @__PURE__ */ new Date();
          this.minDate.setHours(0, 0, 0, 0);
        }
        this.minDate.setDate(this.minDate.getDate() - 0);
        this.form.patchValue({
          title: this.meetingTitle,
          user: this.userName,
          meetingTypeId: meeting.meetingType.id,
          timezoneId: this.meetingEventData?.timezone?.id
        });
      }, () => this.router.navigate([this.appRoute.meetingSchedule.inactive]));
    }
  }
  static {
    this.\u0275fac = function ViewMeetingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewMeetingComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MeetingScheduleFacade), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewMeetingComponent, selectors: [["findqo-view-meeting"]], inputs: { userName: "userName", meetingTitle: "meetingTitle" }, standalone: false, decls: 4, vars: 2, consts: [[1, "align-items-center", "justify-content-center", "h-100", "w-100", "position-relative", 3, "ngClass"], [3, "meetingData", "meetingEventData"], [3, "formGroup", "ngClass"], ["diameter", "32", "color", "primary"], [1, "meeting-card", "row", "rounded"], [1, "col-auto", "mw-300px", 3, "ngClass"], [1, "row", "cols-2", "row-cols-md-1", "gap-lg-5", "align-items-center", "px-4", "pt-4", "pb-3", "border-bottom"], [1, "col-auto"], ["mat-icon-button", "", "color", "primary back-button", 3, "click"], [1, "back-icon", "mx-auto"], [1, "col", "text-center"], [1, "heading-1", "fg-prim-2", 3, "routerLink"], [1, "pt-3", "pb-4", "px-4"], [1, "fg-general-4", "text-caption-regular"], [1, "text-break", "heading-3", "fg-general-5", "mt-2"], [1, "text-break", "fg-general-5", "mt-2", 3, "ngClass"], [1, "text-break", "d-flex", "align-items-center", "mt-3"], [1, "col-auto", "p-4", "pb-5", "border-left", "h-100"], [1, "my-2"], ["alt", "property image", "width", "252", "height", "150", "priority", "", 1, "mb-2", "mx-auto", 3, "ngSrc"], [1, "text-break", "d-flex", "align-items-center"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-break", "w-100", "text-break", "text-body-regular", "fg-general-5", 3, "href"], [1, "d-inline", "fs-16px", "fg-general-4", "pe-2"], [1, "d-inline", "fs-16px", "fg-general-4", "pe-2", "align-middle"], [3, "formSubmission", "previousData"], [1, "col", "p-4", "pb-5", "border-left", "h-100", 3, "ngClass"], [1, "text-body-medium", "fg-general-4"], [1, "calendar-card", "mt-3"], [3, "selected", "headerComponent", "dateFilter", "dateClass", "minDate", "maxDate", "selectedChange", 4, "ngIf"], [4, "ngIf"], ["class", "col col-lg-auto pb-4 px-3 timeslot-container", 4, "ngIf"], [3, "selectedChange", "selected", "headerComponent", "dateFilter", "dateClass", "minDate", "maxDate"], [1, "text-body-regular", "fg-general-4", "mt-3", "mb-2"], [3, "zoneChange", "timeZones", "selectedZoneId", "cardBorder", "disabled"], [1, "col", "col-lg-auto", "pb-4", "px-3", "timeslot-container"], [1, "d-lg-none", "row", "align-items-center", "pt-4", "pb-3", "border-bottom", "position-sticky", "top-0"], [1, "position-sticky", "top-0", "bg-basic-1", "pt-4", "pb-1", "z-index-2"], [1, "heading-4-medium", "fg-general-5", "mt-3"], [1, "row", "gap-1", "mt-3", "slot-button"], [1, "col"], ["mat-stroked-button", "", "color", "primary", "class", "w-100 px-3", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "default", "class", "w-100 bg-general-4 fg-basic-1", 4, "ngIf"], ["class", "col", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "w-100", "px-3", 3, "click"], ["mat-flat-button", "", "color", "default", 1, "w-100", "bg-general-4", "fg-basic-1"], ["mat-flat-button", "", "color", "primary", 1, "w-100", 3, "click"]], template: function ViewMeetingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ViewMeetingComponent_Conditional_1_Template, 1, 2, "findqo-meeting-schedule-success", 1)(2, ViewMeetingComponent_Conditional_2_Template, 24, 25, "form", 2)(3, ViewMeetingComponent_Conditional_3_Template, 1, 0, "mat-progress-spinner", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isFormSubmitted ? "d-lg-flex" : "d-flex");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isFormSubmitted ? 1 : ctx.meetingEventData ? 2 : 3);
      }
    }, dependencies: [NgClass, NgIf, MatButton, MatIconButton, MatIcon, RouterLink, NgOptimizedImage, MatDivider, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective, MatCalendar, MatProgressSpinner, TimeZoneComponent, InviteeMeetingFormComponent, MeetingScheduleSuccessComponent, AsyncPipe, DatePipe, TranslationsPipe], styles: ["\n\n.meeting-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-1);\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n}\n.back-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--prim-2);\n  border-radius: 50%;\n  justify-content: center;\n}\n.calendar-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n@media (min-width: 576px) {\n  .calendar-card[_ngcontent-%COMP%] {\n    width: 412px;\n    height: 500px;\n  }\n}\nmat-icon[_ngcontent-%COMP%] {\n  width: fit-content !important;\n  height: fit-content !important;\n}\n.timeslot-container[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n@media (max-width: 767.98px) {\n  .timeslot-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-height: 100vh;\n  }\n}\n@media (max-width: 767.98px) {\n  .form-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.slot-button[_ngcontent-%COMP%] {\n  min-width: 208px !important;\n}\n.z-index-2[_ngcontent-%COMP%] {\n  z-index: 2 !important;\n}\n.mw-300px[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  width: 100% !important;\n}\n@media (min-width: 768px) {\n  .mw-300px[_ngcontent-%COMP%] {\n    width: fit-content !important;\n    max-width: 300px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/view-meeting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMeetingComponent, [{
    type: Component,
    args: [{ selector: "findqo-view-meeting", standalone: false, template: `<div class="align-items-center justify-content-center h-100 w-100 position-relative" [ngClass]="isFormSubmitted ? 'd-lg-flex' : 'd-flex'">
	@if (isFormSubmitted) {
		<findqo-meeting-schedule-success [meetingData]="meetingData" [meetingEventData]="meetingEventData"></findqo-meeting-schedule-success>
	} @else if (meetingEventData) {
		<form [formGroup]="form" [ngClass]="{ 'form-container': form.get('date').value && timeSlots.length && !isFormEnabled }">
			<div class="meeting-card row rounded">
				<div class="col-auto mw-300px" [ngClass]="{ 'd-none d-lg-block': form.get('date').value && timeSlots.length && !isFormEnabled }">
					<div class="row cols-2 row-cols-md-1 gap-lg-5 align-items-center px-4 pt-4 pb-3 border-bottom">
						<div class="col-auto">
							<button mat-icon-button color="primary back-button" (click)="handleBack()">
								<mat-icon class="back-icon mx-auto">arrow_back</mat-icon>
							</button>
						</div>

						<div class="col text-center">
							<h1 class="heading-1 fg-prim-2" [routerLink]="appRoute.home">{{ 'n3786' | translations }}</h1>
						</div>
					</div>

					<div class="pt-3 pb-4 px-4">
						<p class="fg-general-4 text-caption-regular">
							{{ meetingEventData.meetingType.id === meetingType.PROPERTY_VIEWING ? ('n3785' | translations) + ':' : ('n3932' | translations) }}
						</p>

						@if (meetingEventData.title) {
							<h3 class="text-break heading-3 fg-general-5 mt-2">{{ meetingEventData.title }}</h3>
						}

						<p
							class="text-break fg-general-5 mt-2"
							[ngClass]="{
								'text-body-medium': meetingEventData.meetingType.id === meetingType.PROPERTY_VIEWING,
								'text-body-regular': meetingEventData.meetingType.id === meetingType.PERSONAL
							}"
						>
							{{ meetingEventData.address }}
						</p>

						@if (meetingEventData.ad) {
							<mat-divider class="my-2"></mat-divider>

							<img class="mb-2 mx-auto" [ngSrc]="meetingEventData.ad.imageUrl" alt="property image" width="252" height="150" priority />

							<div class="text-break d-flex align-items-center">
								<a
									[href]="meetingEventData.ad.adlink"
									target="_blank"
									rel="noopener noreferrer"
									class="text-break w-100 text-break text-body-regular fg-general-5"
								>
									{{ meetingEventData.ad.title }}
								</a>

								<mat-icon class="d-inline fs-16px fg-general-4 pe-2">open_in_new</mat-icon>
							</div>
						}

						@if (meetingEventData.otherPropertyLink) {
							<div class="text-break d-flex align-items-center mt-3">
								<a
									[href]="meetingEventData.otherPropertyLink"
									target="_blank"
									rel="noopener noreferrer"
									class="text-break w-100 text-break text-body-regular fg-general-5"
								>
									{{ meetingEventData.otherPropertyLink }}
								</a>

								<mat-icon class="d-inline fs-16px fg-general-4 pe-2 align-middle">open_in_new</mat-icon>
							</div>
						}
					</div>
				</div>

				@if (isFormEnabled) {
					<div class="col-auto p-4 pb-5 border-left h-100">
						<findqo-invitee-meeting-form (formSubmission)="onFormSubmit($event)" [previousData]="this.form.value"></findqo-invitee-meeting-form>
					</div>
				} @else {
					<div class="col p-4 pb-5 border-left h-100" [ngClass]="{ 'd-none d-lg-block': form.get('date').value && timeSlots.length }">
						<p class="text-body-medium fg-general-4">{{ 'n3112' | translations }}</p>

						<div class="calendar-card mt-3">
							<mat-calendar
								[selected]="form.get('date').value"
								(selectedChange)="handleChange('date', $event)"
								[headerComponent]="headerComponent"
								*ngIf="isBrowser"
								[dateFilter]="myFilter"
								[dateClass]="dateClass"
								[minDate]="minDate"
								[maxDate]="maxDate"
							></mat-calendar>

							<ng-container *ngIf="timeZone$ | async as vm">
								<p class="text-body-regular fg-general-4 mt-3 mb-2">{{ 'n3933' | translations }}</p>
								<findqo-time-zone
									(zoneChange)="handleChange($event.key, $event.value)"
									[timeZones]="vm"
									[selectedZoneId]="form.get('timezoneId')?.value"
									[cardBorder]="'border'"
									[disabled]="true"
								></findqo-time-zone>
							</ng-container>
						</div>
					</div>

					<div class="col col-lg-auto pb-4 px-3 timeslot-container" *ngIf="form.get('date').value && timeSlots.length">
						<div class="d-lg-none row align-items-center pt-4 pb-3 border-bottom position-sticky top-0">
							<div class="col-auto">
								<button mat-icon-button color="primary back-button" (click)="form.get('date').reset()">
									<mat-icon class="back-icon mx-auto">arrow_back</mat-icon>
								</button>
							</div>

							<div class="col text-center">
								<h1 class="heading-1 fg-prim-2" [routerLink]="appRoute.home">{{ 'n3786' | translations }}</h1>
							</div>
						</div>

						<div class="position-sticky top-0 bg-basic-1 pt-4 pb-1 z-index-2">
							<p class="text-body-medium fg-general-4">{{ 'n3934' | translations }}</p>
							<h4 class="heading-4-medium fg-general-5 mt-3">{{ form.get('date').value | date: 'EEEE, MMM dd' }}</h4>
						</div>

						@for (item of timeSlots; track item.id) {
							<div class="row gap-1 mt-3 slot-button">
								<div class="col">
									<button
										mat-stroked-button
										color="primary"
										class="w-100 px-3"
										*ngIf="form.get('timeId').value !== item.id"
										(click)="handleChange('timeId', item.id)"
									>
										{{ item.name }}
									</button>

									<button mat-flat-button color="default" class="w-100 bg-general-4 fg-basic-1" *ngIf="form.get('timeId').value === item.id">
										{{ item.name }}
									</button>
								</div>

								<div class="col" *ngIf="form.get('timeId').value === item.id">
									<button mat-flat-button color="primary" class="w-100" (click)="handleNext()">{{ 'n292' | translations }}</button>
								</div>
							</div>
						}
					</div>
				}
			</div>
		</form>
	} @else {
		<mat-progress-spinner diameter="32" color="primary"></mat-progress-spinner>
	}
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/pages/view-meeting/view-meeting.component.scss */\n.meeting-card {\n  border: 1px solid var(--neutral-1);\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n}\n.back-button {\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--prim-2);\n  border-radius: 50%;\n  justify-content: center;\n}\n.calendar-card {\n  width: 100%;\n  height: 100%;\n}\n@media (min-width: 576px) {\n  .calendar-card {\n    width: 412px;\n    height: 500px;\n  }\n}\nmat-icon {\n  width: fit-content !important;\n  height: fit-content !important;\n}\n.timeslot-container {\n  max-height: 600px;\n  overflow-y: scroll;\n}\n@media (max-width: 767.98px) {\n  .timeslot-container {\n    width: 100% !important;\n    max-height: 100vh;\n  }\n}\n@media (max-width: 767.98px) {\n  .form-container {\n    width: 100% !important;\n  }\n}\n.slot-button {\n  min-width: 208px !important;\n}\n.z-index-2 {\n  z-index: 2 !important;\n}\n.mw-300px {\n  max-width: 100% !important;\n  width: 100% !important;\n}\n@media (min-width: 768px) {\n  .mw-300px {\n    width: fit-content !important;\n    max-width: 300px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/view-meeting.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MeetingScheduleFacade }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Router }], { userName: [{
    type: Input
  }], meetingTitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewMeetingComponent, { className: "ViewMeetingComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/pages/view-meeting/view-meeting.component.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/view-meeting/view-meeting-routing.module.ts
var routes = [
  {
    path: "",
    component: ViewMeetingComponent
  }
];
var ViewMeetingRoutingModule = class _ViewMeetingRoutingModule {
  static {
    this.\u0275fac = function ViewMeetingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewMeetingRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ViewMeetingRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMeetingRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/calender-header/calender-header.module.ts
var CalenderHeaderModule = class _CalenderHeaderModule {
  static {
    this.\u0275fac = function CalenderHeaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalenderHeaderModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CalenderHeaderModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalenderHeaderModule, [{
    type: NgModule,
    args: [{
      declarations: [CalenderHeaderComponent],
      imports: [SharedModule],
      exports: [CalenderHeaderComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/invitee-meeting-form/invitee-meeting-form.module.ts
var InviteeMeetingFormModule = class _InviteeMeetingFormModule {
  static {
    this.\u0275fac = function InviteeMeetingFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteeMeetingFormModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InviteeMeetingFormModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, EmailInputModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteeMeetingFormModule, [{
    type: NgModule,
    args: [{
      declarations: [InviteeMeetingFormComponent],
      imports: [SharedModule, EmailInputModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSelectModule],
      exports: [InviteeMeetingFormComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-schedule-success/meeting-schedule-success.module.ts
var MeetingScheduleSuccessModule = class _MeetingScheduleSuccessModule {
  static {
    this.\u0275fac = function MeetingScheduleSuccessModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleSuccessModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingScheduleSuccessModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, MatTooltipModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleSuccessModule, [{
    type: NgModule,
    args: [{
      declarations: [MeetingScheduleSuccessComponent, TimeSlotNamePipe],
      imports: [SharedModule, MatDividerModule, MatTooltipModule],
      exports: [MeetingScheduleSuccessComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/view-meeting/view-meeting.module.ts
var ViewMeetingModule = class _ViewMeetingModule {
  static {
    this.\u0275fac = function ViewMeetingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewMeetingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ViewMeetingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      MatDividerModule,
      FormsModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      MatProgressSpinnerModule,
      ViewMeetingRoutingModule,
      TimeZoneModule,
      CalenderHeaderModule,
      InviteeMeetingFormModule,
      MeetingScheduleSuccessModule,
      MatNativeDateModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMeetingModule, [{
    type: NgModule,
    args: [{
      declarations: [ViewMeetingComponent],
      imports: [
        SharedModule,
        MatDividerModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        ViewMeetingRoutingModule,
        TimeZoneModule,
        CalenderHeaderModule,
        InviteeMeetingFormModule,
        MeetingScheduleSuccessModule,
        MatNativeDateModule
      ]
    }]
  }], null, null);
})();
export {
  ViewMeetingModule
};
//# sourceMappingURL=chunk-SJTLERC2.js.map
