import {
  MatButtonToggle,
  MatButtonToggleGroup
} from "./chunk-MC2MM2OW.js";
import {
  MatCalendar
} from "./chunk-7NR4UKDC.js";
import {
  API,
  CommonFacade,
  CommonUtil,
  FormControl,
  FormControlDirective,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  NgControlStatus,
  PlaceAdApi,
  SnackService,
  TenantDay,
  TenantSummaryTimeSlotPipe,
  TenantTimeSlotsPipe,
  TenantViewDateStatus,
  TranslationsPipe,
  Validators,
  WEEK_DAYS,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  HttpClient,
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  BehaviorSubject,
  Component,
  Inject,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  map,
  setClassMetadata,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/states/matching-tenants-state.ts
var MatchingTenantsState = class _MatchingTenantsState {
  constructor() {
    this._matchingTenantsList$ = new BehaviorSubject(null);
  }
  get matchingTenantsList$() {
    return this._matchingTenantsList$.asObservable();
  }
  setMatchingTenantsList(tenantList) {
    this._matchingTenantsList$.next(tenantList);
  }
  static {
    this.\u0275fac = function MatchingTenantsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchingTenantsState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MatchingTenantsState, factory: _MatchingTenantsState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchingTenantsState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/data-access/apis/matching-tenant.api.ts
var MatchingTenantApi = class _MatchingTenantApi {
  constructor(http) {
    this.http = http;
  }
  getMatchingTenantList(adId, body = null) {
    return this.http.get(API.matchingTenant.getMatchingTenantList(adId), { params: CommonUtil.createHttpParams(body) }).pipe(map((response) => response.data));
  }
  getMatchingTenantDetail(adId, tenantId) {
    return this.http.get(API.matchingTenant.getMatchingTenantDetail(adId, tenantId));
  }
  confirmTenantViewDate(adId, tenantId, body) {
    return this.http.post(API.matchingTenant.submitTenantViewDate(adId, tenantId), body);
  }
  static {
    this.\u0275fac = function MatchingTenantApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchingTenantApi)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MatchingTenantApi, factory: _MatchingTenantApi.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchingTenantApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// apps/findqo-ireland/src/app/feature/general/set-tenant-view-date-dialog/set-tenant-view-date-dialog.component.ts
var _c0 = (a0) => ({ availiblitySlots: a0 });
function SetTenantViewDateDialogComponent_div_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "mat-button-toggle", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", i_r4 % 2 !== 0 ? "ps-3 ps-sm-0" : "");
    \u0275\u0275advance();
    \u0275\u0275property("disableRipple", true)("disabled", !ctx_r1.isShowTimeSlotsMobile)("value", slot_r3 == null ? null : slot_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r3.name, " ");
  }
}
function SetTenantViewDateDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "button", 6)(8, "mat-icon", 7);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(10, "button", 8);
    \u0275\u0275elementStart(11, "mat-dialog-content", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
    \u0275\u0275element(15, "img", 13)(16, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 3)(18, "h4", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "p", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "div", 5)(28, "p", 17);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 3)(32, "p", 20);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "p", 21);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 22)(38, "button", 23);
    \u0275\u0275listener("click", function SetTenantViewDateDialogComponent_div_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackToCalendar());
    });
    \u0275\u0275elementStart(39, "mat-icon", 24);
    \u0275\u0275text(40, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "p", 25);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 26)(48, "div", 27)(49, "mat-calendar", 28);
    \u0275\u0275twoWayListener("selectedChange", function SetTenantViewDateDialogComponent_div_0_Template_mat_calendar_selectedChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectedChange", function SetTenantViewDateDialogComponent_div_0_Template_mat_calendar_selectedChange_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectDate());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 29)(51, "mat-button-toggle-group", 30)(52, "div", 31);
    \u0275\u0275template(53, SetTenantViewDateDialogComponent_div_0_div_53_Template, 3, 5, "div", 32);
    \u0275\u0275pipe(54, "tenantTimeSlots");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "mat-dialog-actions", 33)(56, "button", 34);
    \u0275\u0275listener("click", function SetTenantViewDateDialogComponent_div_0_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSetViewDate());
    });
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 23, "n3656"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", !ctx_r1.isShowTimeSlotsMobile ? "d-block" : "d-none");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSrc", (ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.picture) || ctx_r1.defaultAvatarImg);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", "assets/images/place-an-ad/on-hunt-badge.webp");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 25, "n3650"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.employment == null ? null : ctx_r1.data.tenant.employment.jobTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "n3651"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.employment == null ? null : ctx_r1.data.tenant.employment.grossIncome == null ? null : ctx_r1.data.tenant.employment.grossIncome.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 29, "n3668"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.isShowTimeSlotsMobile ? "d-block" : "d-none");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 31, "n3666"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 33, "n3668"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", !ctx_r1.isShowTimeSlotsMobile ? "d-block" : "d-none");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selected", ctx_r1.selectedDate);
    \u0275\u0275property("dateFilter", ctx_r1.dateFilter)("minDate", ctx_r1.todayDate)("maxDate", ctx_r1.maxDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.isShowTimeSlotsMobile ? "d-block" : "d-none");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.timeSlotControl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(54, 35, vm_r5 == null ? null : vm_r5.availiblitySlots, ctx_r1.selectedDate, ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.availabilitySlots));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.selectedDate || !ctx_r1.timeSlotControl.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 39, "n3667"), " ");
  }
}
var SetTenantViewDateDialogComponent = class _SetTenantViewDateDialogComponent {
  constructor(data, dialogRef, commonFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.commonFacade = commonFacade;
    this.todayDate = /* @__PURE__ */ new Date();
    this.defaultAvatarImg = environment.defaultAvatarImg;
    this.allowedWeekdays = [];
    this.isShowTimeSlotsMobile = false;
    this.availibilitySlots$ = this.commonFacade.availiblitySlots$;
    this.timeSlotControl = new FormControl("", Validators.required);
    this.dateFilter = (date) => {
      const day = date.getDay();
      return this.allowedWeekdays.includes(day);
    };
  }
  onSelectDate() {
    this.isShowTimeSlotsMobile = true;
  }
  setMaxDate(months) {
    this.maxDate = /* @__PURE__ */ new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() + months);
  }
  onBackToCalendar() {
    this.isShowTimeSlotsMobile = false;
  }
  getDays() {
    this.allowedWeekdays = this.data?.tenant?.availabilitySlots?.length > 0 ? this.data?.tenant?.availabilitySlots.map((slots) => TenantDay[slots.reference.toUpperCase()]) : WEEK_DAYS;
  }
  onSetViewDate() {
    if (this.selectedDate && this.timeSlotControl.valid) {
      const SELECTED_DATE = new Date(this.selectedDate);
      const DATE_STRING = `${SELECTED_DATE.getFullYear()}-${SELECTED_DATE.getMonth() > 9 ? SELECTED_DATE.getMonth() + 1 : `0${SELECTED_DATE.getMonth()}`}-${SELECTED_DATE.getDate() > 9 ? SELECTED_DATE.getDate() : `0${SELECTED_DATE.getDate()}`}`;
      const APPOINTMENT_DATA = {
        slotTime: {
          id: this.timeSlotControl.value
        },
        viewingAt: Math.floor(SELECTED_DATE.getTime() / 1e3),
        viewDate: DATE_STRING
      };
      const updatedTenantData = __spreadProps(__spreadValues({}, this.data.tenant), { viewAppointment: __spreadValues({}, APPOINTMENT_DATA) });
      this.dialogRef.close(updatedTenantData);
    }
  }
  patchData() {
    if (this.data?.tenant?.viewAppointment?.viewingAt) {
      this.selectedDate = new Date(+this.data?.tenant?.viewAppointment?.viewingAt * 1e3);
      this.timeSlotControl.patchValue(this.data?.tenant?.viewAppointment?.slotTime?.id);
      this.isShowTimeSlotsMobile = true;
    }
  }
  ngOnInit() {
    this.getDays();
    this.setMaxDate(3);
    this.patchData();
  }
  static {
    this.\u0275fac = function SetTenantViewDateDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetTenantViewDateDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(CommonFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetTenantViewDateDialogComponent, selectors: [["findqo-set-tenant-view-date-dialog"]], standalone: false, decls: 2, vars: 5, consts: [["class", "container px-0", 4, "ngIf"], [1, "container", "px-0"], [1, "row", "align-items-center", "justify-content-between", "border-bottom", "py-10px", "px-3"], [1, "col"], [1, "fg-general-5", "heading-4-regular"], [1, "col-auto"], ["mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], ["hidden", "", "cdkFocusInitial", ""], [1, "p-3"], [1, "d-sm-block", 3, "ngClass"], [1, "row", "gap-1", "justify-content-start", "align-items-center", "d-flex-sm"], [1, "col-auto", "position-relative", "avatar"], ["fill", "", "alt", "Tenant Image", 1, "tenant-img", "d-block", 3, "ngSrc"], ["alt", "on hunt badge", "fill", "", 1, "on-hunt-badge", 3, "ngSrc"], [1, "fg-general-5", "heading-4-medium", "limit-2"], [1, "d-flex", "gap-1", "mt-2"], [1, "fg-general-3", "text-caption-regular"], [1, "fg-general-5", "text-caption-regular", "limit-2", "me-3"], [1, "row", "gap-1", "align-items-start", "mt-2"], [1, "fg-general-5", "text-caption-regular"], [1, "fg-general-4", "text-paragraph-regular", "mt-3", "mb-2", "d-sm-block"], [1, "d-sm-none", 3, "ngClass"], ["mat-button", "", "color", "primary", 1, "text-body-regular", "d-sm-none", "back-btn", 3, "click"], [1, "material-icons", "fg-prim-2", "align-middle"], [1, "fg-general-4", "text-paragraph-regular", "mt-3", "mb-2", "d-sm-none"], [1, "row", "gap-3"], [1, "col-sm", "d-sm-block", "position-relative", 3, "ngClass"], [1, "tenant-calendar", 3, "selectedChange", "selected", "dateFilter", "minDate", "maxDate"], [1, "col-sm-auto", "d-sm-block", "mw-sm-260px", "mt-2", 3, "ngClass"], [1, "w-100", 3, "formControl"], [1, "row", "row-cols-2", "slot-row"], ["class", "col col-sm-auto mb-4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-3", "border-top"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "text-body-regular", "w-100", 3, "click", "disabled"], [1, "col", "col-sm-auto", "mb-4", 3, "ngClass"], ["type", "button", 1, "rounded-pill", "w-100", "w-sm-auto", "fg-general-4", "d-block", "time-slot-btn", 3, "disableRipple", "disabled", "value"]], template: function SetTenantViewDateDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetTenantViewDateDialogComponent_div_0_Template, 59, 41, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.availibilitySlots$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIcon, NgOptimizedImage, MatCalendar, MatButtonToggleGroup, MatButtonToggle, MatDialogClose, MatDialogActions, MatDialogContent, NgControlStatus, FormControlDirective, AsyncPipe, TranslationsPipe, TenantTimeSlotsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n  border-radius: 50%;\n}\n.py-10px[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n@media (min-width: 576px) {\n  .mw-sm-260px[_ngcontent-%COMP%] {\n    max-width: 260px;\n  }\n}\n@media (min-width: 576px) {\n  .slot-row[_ngcontent-%COMP%] {\n    gap: 0px 16px;\n  }\n}\n.back-btn[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.time-slot-btn[_ngcontent-%COMP%] {\n  min-width: 114px;\n}\n.tenant-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  object-fit: cover;\n}\n.on-hunt-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 5px solid var(--basic-1);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/set-tenant-view-date-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetTenantViewDateDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-set-tenant-view-date-dialog", standalone: false, template: `<div class="container px-0" *ngIf="{ availiblitySlots: availibilitySlots$ | async } as vm">
	<div class="row align-items-center justify-content-between border-bottom py-10px px-3">
		<div class="col">
			<h4 class="fg-general-5 heading-4-regular">{{ 'n3656' | translations }}</h4>
		</div>

		<div class="col-auto">
			<button class="bg-general-1" mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<button hidden cdkFocusInitial></button>

	<mat-dialog-content class="p-3">
		<div class="d-sm-block" [ngClass]="!isShowTimeSlotsMobile ? 'd-block' : 'd-none'">
			<div class="row gap-1 justify-content-start align-items-center d-flex-sm">
				<div class="col-auto position-relative avatar">
					<img [ngSrc]="data?.tenant?.picture || defaultAvatarImg" fill alt="Tenant Image" class="tenant-img d-block" />

					<img [ngSrc]="'assets/images/place-an-ad/on-hunt-badge.webp'" alt="on hunt badge" class="on-hunt-badge" fill />
				</div>

				<div class="col">
					<h4 class="fg-general-5 heading-4-medium limit-2">{{ data?.tenant?.title }}</h4>

					<div class="d-flex gap-1 mt-2">
						<p class="fg-general-3 text-caption-regular">{{ 'n3650' | translations }}</p>

						<p class="fg-general-5 text-caption-regular limit-2 me-3">{{ data?.tenant?.employment?.jobTitle }}</p>
					</div>

					<div class="row gap-1 align-items-start mt-2">
						<div class="col-auto">
							<p class="fg-general-3 text-caption-regular">{{ 'n3651' | translations }}</p>
						</div>

						<div class="col">
							<p class="fg-general-5 text-caption-regular">{{ data?.tenant?.employment?.grossIncome?.name }}</p>
						</div>
					</div>
				</div>
			</div>

			<p class="fg-general-4 text-paragraph-regular mt-3 mb-2 d-sm-block">
				{{ 'n3668' | translations }}
			</p>
		</div>
		<!-- For Mobile view Time slots -->
		<div class="d-sm-none" [ngClass]="isShowTimeSlotsMobile ? 'd-block' : 'd-none'">
			<button mat-button color="primary" class="text-body-regular d-sm-none back-btn" (click)="onBackToCalendar()">
				<mat-icon class="material-icons fg-prim-2 align-middle">arrow_back</mat-icon>
				<span>{{ 'n3666' | translations }}</span>
			</button>

			<p class="fg-general-4 text-paragraph-regular mt-3 mb-2 d-sm-none">
				{{ 'n3668' | translations }}
			</p>
		</div>
		<!--  -->

		<div class="row gap-3">
			<div class="col-sm d-sm-block position-relative" [ngClass]="!isShowTimeSlotsMobile ? 'd-block' : 'd-none'">
				<mat-calendar
					[(selected)]="selectedDate"
					[dateFilter]="dateFilter"
					[minDate]="todayDate"
					[maxDate]="maxDate"
					class="tenant-calendar"
					(selectedChange)="onSelectDate()"
				></mat-calendar>
			</div>

			<div class="col-sm-auto d-sm-block mw-sm-260px mt-2" [ngClass]="isShowTimeSlotsMobile ? 'd-block' : 'd-none'">
				<mat-button-toggle-group class="w-100" [formControl]="timeSlotControl">
					<div class="row row-cols-2 slot-row">
						<div
							class="col col-sm-auto mb-4"
							*ngFor="let slot of vm?.availiblitySlots | tenantTimeSlots : selectedDate : data?.tenant?.availabilitySlots; let i = index"
							[ngClass]="i % 2 !== 0 ? 'ps-3 ps-sm-0' : ''"
						>
							<mat-button-toggle
								class="rounded-pill w-100 w-sm-auto fg-general-4 d-block time-slot-btn"
								[disableRipple]="true"
								[disabled]="!isShowTimeSlotsMobile"
								[value]="slot?.id"
								type="button"
							>
								{{ slot.name }}
							</mat-button-toggle>
						</div>
					</div>
				</mat-button-toggle-group>
			</div>
		</div>
	</mat-dialog-content>

	<mat-dialog-actions class="p-3 border-top">
		<button
			mat-flat-button
			color="primary"
			class="text-body-regular w-100"
			type="submit"
			[disabled]="!selectedDate || !timeSlotControl.valid"
			(click)="onSetViewDate()"
		>
			{{ 'n3667' | translations }}
		</button>
	</mat-dialog-actions>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/set-tenant-view-date-dialog/set-tenant-view-date-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n  border-radius: 50%;\n}\n.py-10px {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n@media (min-width: 576px) {\n  .mw-sm-260px {\n    max-width: 260px;\n  }\n}\n@media (min-width: 576px) {\n  .slot-row {\n    gap: 0px 16px;\n  }\n}\n.back-btn .mat-icon {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.time-slot-btn {\n  min-width: 114px;\n}\n.tenant-img {\n  border-radius: 50%;\n  object-fit: cover;\n}\n.on-hunt-badge {\n  position: absolute;\n  bottom: 0;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  border: 5px solid var(--basic-1);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/set-tenant-view-date-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: CommonFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetTenantViewDateDialogComponent, { className: "SetTenantViewDateDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/set-tenant-view-date-dialog/set-tenant-view-date-dialog.component.ts", lineNumber: 21 });
})();

// apps/findqo-ireland/src/app/feature/general/tenant-view-date-summary-dialog/tenant-view-date-summary-dialog.component.ts
var _c02 = (a0) => ({ availibilitySlots: a0 });
function TenantViewDateSummaryDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "button", 6)(8, "mat-icon", 7);
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(10, "button", 8);
    \u0275\u0275elementStart(11, "mat-dialog-content", 9)(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
    \u0275\u0275element(17, "img", 12)(18, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 3)(20, "h4", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 15)(23, "p", 16);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 17);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 18)(29, "div", 5)(30, "p", 16);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 3)(34, "p", 19);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "div", 20)(37, "p", 21);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translations");
    \u0275\u0275elementStart(40, "span", 22);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "p", 23);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translations");
    \u0275\u0275elementStart(46, "span", 22);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "tenantSummaryTimeSlot");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "mat-dialog-actions", 24)(50, "div", 25)(51, "div", 3)(52, "button", 26);
    \u0275\u0275listener("click", function TenantViewDateSummaryDialogComponent_div_0_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditViewDate());
    });
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 3)(56, "button", 27);
    \u0275\u0275listener("click", function TenantViewDateSummaryDialogComponent_div_0_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirmViewDate());
    });
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translations");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const vm_r3 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 15, "n3656"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "n3657"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngSrc", (ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.picture) || ctx_r1.defaultAvatarImg);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", "assets/images/place-an-ad/on-hunt-badge.webp");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 19, "n3650"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.employment == null ? null : ctx_r1.data.tenant.employment.jobTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 21, "n3651"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.tenant == null ? null : ctx_r1.data.tenant.employment == null ? null : ctx_r1.data.tenant.employment.grossIncome == null ? null : ctx_r1.data.tenant.employment.grossIncome.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 23, "n3647"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 25, +(ctx_r1.data == null ? null : ctx_r1.data.tenant.viewAppointment == null ? null : ctx_r1.data.tenant.viewAppointment.viewingAt) * 1e3, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 28, "n3647"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 30, vm_r3 == null ? null : vm_r3.availibilitySlots, ctx_r1.data == null ? null : ctx_r1.data.tenant.viewAppointment == null ? null : ctx_r1.data.tenant.viewAppointment.slotTime == null ? null : ctx_r1.data.tenant.viewAppointment.slotTime.id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 33, "n3658"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 35, "n3659"), " ");
  }
}
var TenantViewDateSummaryDialogComponent = class _TenantViewDateSummaryDialogComponent {
  constructor(data, dialogRef, commonFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.commonFacade = commonFacade;
    this.defaultAvatarImg = environment.defaultAvatarImg;
    this.availibilitySlots$ = this.commonFacade.availiblitySlots$;
  }
  onConfirmViewDate() {
    this.dialogRef.close({ status: TenantViewDateStatus.CONFIRM });
  }
  onEditViewDate() {
    this.dialogRef.close({ status: TenantViewDateStatus.EDIT });
  }
  static {
    this.\u0275fac = function TenantViewDateSummaryDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TenantViewDateSummaryDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(CommonFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantViewDateSummaryDialogComponent, selectors: [["ng-component"]], standalone: false, decls: 2, vars: 5, consts: [["class", "container px-0", 4, "ngIf"], [1, "container", "px-0"], [1, "row", "align-items-center", "justify-content-between", "border-bottom", "py-10px", "px-3"], [1, "col"], [1, "fg-general-5", "heading-4-regular"], [1, "col-auto"], ["mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], ["hidden", "", "cdkFocusInitial", ""], [1, "p-3"], [1, "row", "gap-2", "justify-content-start", "align-items-center", "my-3"], [1, "col-auto", "position-relative", "avatar"], ["fill", "", "alt", "Tenant Image", 1, "tenant-img", "d-block", 3, "ngSrc"], ["alt", "on hunt badge", "fill", "", 1, "on-hunt-badge", 3, "ngSrc"], [1, "fg-general-5", "heading-4-medium", "limit-2"], [1, "d-flex", "gap-1", "mt-2"], [1, "fg-general-3", "text-caption-regular"], [1, "fg-general-5", "text-caption-regular", "limit-2", "me-3"], [1, "row", "gap-1", "align-items-start", "mt-2"], [1, "fg-general-5", "text-caption-regular"], [1, "view-date", "p-2"], [1, "text-body-regular", "fg-general-4", "mb-1"], [1, "text-body-medium", "fg-general-5", "ms-1"], [1, "text-body-regular", "fg-general-4"], [1, "p-3", "border-top"], [1, "row", "w-100", "justify-content-between", "gap-3"], ["mat-stroked-button", "", "color", "primary", 1, "text-body-regular", "w-100", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", "w-100", 3, "click"]], template: function TenantViewDateSummaryDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TenantViewDateSummaryDialogComponent_div_0_Template, 59, 37, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c02, \u0275\u0275pipeBind1(1, 1, ctx.availibilitySlots$)));
      }
    }, dependencies: [NgIf, MatButton, MatIcon, NgOptimizedImage, MatDialogClose, MatDialogActions, MatDialogContent, AsyncPipe, DatePipe, TranslationsPipe, TenantSummaryTimeSlotPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n  border-radius: 50%;\n}\n.py-10px[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.view-date[_ngcontent-%COMP%] {\n  background-color: rgba(255, 90, 184, 0.08);\n  border: 1px solid var(--prim-2);\n  border-radius: 4px;\n}\n.tenant-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  object-fit: cover;\n}\n.on-hunt-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 5px solid var(--basic-1);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/tenant-view-date-summary-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantViewDateSummaryDialogComponent, [{
    type: Component,
    args: [{ standalone: false, template: `<div class="container px-0" *ngIf="{ availibilitySlots: availibilitySlots$ | async } as vm">
	<div class="row align-items-center justify-content-between border-bottom py-10px px-3">
		<div class="col">
			<h4 class="fg-general-5 heading-4-regular">{{ 'n3656' | translations }}</h4>
		</div>

		<div class="col-auto">
			<button class="bg-general-1" mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<button hidden cdkFocusInitial></button>

	<mat-dialog-content class="p-3">
		<p>{{ 'n3657' | translations }}</p>

		<div class="row gap-2 justify-content-start align-items-center my-3">
			<div class="col-auto position-relative avatar">
				<img [ngSrc]="data?.tenant?.picture || defaultAvatarImg" fill alt="Tenant Image" class="tenant-img d-block" />

				<img [ngSrc]="'assets/images/place-an-ad/on-hunt-badge.webp'" alt="on hunt badge" class="on-hunt-badge" fill />
			</div>

			<div class="col">
				<h4 class="fg-general-5 heading-4-medium limit-2">{{ data?.tenant?.title }}</h4>

				<div class="d-flex gap-1 mt-2">
					<p class="fg-general-3 text-caption-regular">{{ 'n3650' | translations }}</p>

					<p class="fg-general-5 text-caption-regular limit-2 me-3">{{ data?.tenant?.employment?.jobTitle }}</p>
				</div>

				<div class="row gap-1 align-items-start mt-2">
					<div class="col-auto">
						<p class="fg-general-3 text-caption-regular">{{ 'n3651' | translations }}</p>
					</div>

					<div class="col">
						<p class="fg-general-5 text-caption-regular">{{ data?.tenant?.employment?.grossIncome?.name }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="view-date p-2">
			<p class="text-body-regular fg-general-4 mb-1">
				{{ 'n3647' | translations }}
				<span class="text-body-medium fg-general-5 ms-1">{{ +data?.tenant.viewAppointment?.viewingAt * 1000 | date : 'mediumDate' }}</span>
			</p>

			<p class="text-body-regular fg-general-4">
				{{ 'n3647' | translations }}
				<span class="text-body-medium fg-general-5 ms-1">{{ vm?.availibilitySlots | tenantSummaryTimeSlot : data?.tenant.viewAppointment?.slotTime?.id }}</span>
			</p>
		</div>
	</mat-dialog-content>

	<mat-dialog-actions class="p-3 border-top">
		<div class="row w-100 justify-content-between gap-3">
			<div class="col">
				<button mat-stroked-button color="primary" class="text-body-regular w-100" (click)="onEditViewDate()">
					{{ 'n3658' | translations }}
				</button>
			</div>

			<div class="col">
				<button mat-flat-button color="primary" class="text-body-regular w-100" (click)="onConfirmViewDate()">
					{{ 'n3659' | translations }}
				</button>
			</div>
		</div>
	</mat-dialog-actions>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/tenant-view-date-summary-dialog/tenant-view-date-summary-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n  border-radius: 50%;\n}\n.py-10px {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.view-date {\n  background-color: rgba(255, 90, 184, 0.08);\n  border: 1px solid var(--prim-2);\n  border-radius: 4px;\n}\n.tenant-img {\n  border-radius: 50%;\n  object-fit: cover;\n}\n.on-hunt-badge {\n  position: absolute;\n  bottom: 0;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  border: 5px solid var(--basic-1);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/tenant-view-date-summary-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: CommonFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantViewDateSummaryDialogComponent, { className: "TenantViewDateSummaryDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/tenant-view-date-summary-dialog/tenant-view-date-summary-dialog.component.ts", lineNumber: 18 });
})();

// apps/findqo-ireland/src/app/shared/facades/matching-tenants-facade.ts
var MatchingTenantsFacade = class _MatchingTenantsFacade {
  constructor(dialog, matchingTenantsState, matchingTenantApi, snackbar, placeAdApi) {
    this.dialog = dialog;
    this.matchingTenantsState = matchingTenantsState;
    this.matchingTenantApi = matchingTenantApi;
    this.snackbar = snackbar;
    this.placeAdApi = placeAdApi;
  }
  get matchingTenantsList$() {
    return this.matchingTenantsState.matchingTenantsList$;
  }
  setMatchingTenantsList(tenantList) {
    this.matchingTenantsState.setMatchingTenantsList(tenantList);
  }
  openTenantViewDateDialog(tenantData, adId, perPage = null) {
    this.dialog.closeAll();
    this.dialog.open(SetTenantViewDateDialogComponent, {
      maxWidth: "800px",
      height: "auto",
      width: "100%",
      disableClose: true,
      data: {
        tenant: __spreadValues({}, tenantData)
      }
    }).afterClosed().subscribe((updatedTenantData) => {
      if (updatedTenantData) {
        this.openTenantViewDateSummary(updatedTenantData, adId, perPage);
      }
    });
  }
  openTenantViewDateSummary(tenantData, adId, perPage = null) {
    this.dialog.open(TenantViewDateSummaryDialogComponent, {
      maxWidth: "500px",
      height: "auto",
      width: "100%",
      disableClose: true,
      data: {
        tenant: tenantData
      }
    }).afterClosed().subscribe((data) => {
      if (data?.status && data?.status === TenantViewDateStatus.EDIT) {
        this.openTenantViewDateDialog(tenantData, adId, perPage);
      } else if (data?.status && data?.status === TenantViewDateStatus.CONFIRM) {
        this.confirmViewDate(tenantData, adId, perPage);
      }
    });
  }
  confirmViewDate(tenantData, adId, perPage = null) {
    const BODY = {
      adId,
      tenantId: tenantData?.id,
      slotTimeId: tenantData?.viewAppointment?.slotTime?.id,
      viewAt: tenantData?.viewAppointment?.viewingAt,
      tenantName: tenantData?.name,
      tenantEmail: tenantData?.email,
      viewDate: tenantData?.viewAppointment?.viewDate
    };
    const PARAMS = perPage ? { perPage } : null;
    this.matchingTenantApi.confirmTenantViewDate(adId, tenantData?.id, BODY).pipe(switchMap(() => {
      this.snackbar.open({
        data: { translationKey: "n3675", type: "success", icon: "check_circle" },
        panelClass: "snackbar-success"
      });
      return this.matchingTenantApi.getMatchingTenantList(adId, PARAMS);
    })).subscribe((tenantList) => {
      this.matchingTenantsState.setMatchingTenantsList(tenantList);
    });
  }
  verifyPayment(body) {
    return this.placeAdApi.completePayment(body).pipe(switchMap(() => {
      return this.matchingTenantApi.getMatchingTenantList(body?.adId, { perPage: 3 }).pipe(catchError((err) => {
        this.matchingTenantsState.setMatchingTenantsList([]);
        return throwError(err);
      }), tap((tenantList) => {
        this.matchingTenantsState.setMatchingTenantsList(tenantList);
      }));
    }), catchError((err) => {
      return throwError(err);
    }));
  }
  loadTenantList(adId, perPage = void 0) {
    return this.matchingTenantApi.getMatchingTenantList(adId, { perPage }).pipe(tap((tenantList) => {
      this.matchingTenantsState.setMatchingTenantsList(tenantList);
    }));
  }
  getMatchingTenantDetail(adId, tenantId) {
    return this.matchingTenantApi.getMatchingTenantDetail(adId, tenantId);
  }
  getMobileAppLink(body) {
    return this.placeAdApi.getMobileAppRedirectLink(body);
  }
  static {
    this.\u0275fac = function MatchingTenantsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchingTenantsFacade)(\u0275\u0275inject(MatDialog), \u0275\u0275inject(MatchingTenantsState), \u0275\u0275inject(MatchingTenantApi), \u0275\u0275inject(SnackService), \u0275\u0275inject(PlaceAdApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MatchingTenantsFacade, factory: _MatchingTenantsFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchingTenantsFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: MatDialog }, { type: MatchingTenantsState }, { type: MatchingTenantApi }, { type: SnackService }, { type: PlaceAdApi }], null);
})();

export {
  MatchingTenantApi,
  SetTenantViewDateDialogComponent,
  TenantViewDateSummaryDialogComponent,
  MatchingTenantsState,
  MatchingTenantsFacade
};
//# sourceMappingURL=chunk-NLB2NH2A.js.map
