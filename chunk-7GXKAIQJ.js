import {
  MatButton,
  SharedModule,
  TenantOtherInfoPipe,
  TenantQualityPipe,
  TranslationsPipe,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  DatePipe,
  NgClass,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/matching-tenant-item/matching-tenant-item.component.ts
function MatchingTenantItemComponent_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("d-none", ctx_r0.fromMyAdsPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, "n3648"), "\xA0 #", ctx_r0.index, " ");
  }
}
function MatchingTenantItemComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3676"));
  }
}
function MatchingTenantItemComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function MatchingTenantItemComponent_ng_template_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onScheduleView());
    });
    \u0275\u0275text(1, " Schedule a Viewing ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pe-none", ctx_r0.isDisableScheduleBtn);
  }
}
function MatchingTenantItemComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "n3647"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, +(ctx_r0.tenantData == null ? null : ctx_r0.tenantData.viewAppointment == null ? null : ctx_r0.tenantData.viewAppointment.viewingAt) * 1e3, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "n3647"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.tenantData == null ? null : ctx_r0.tenantData.viewAppointment == null ? null : ctx_r0.tenantData.viewAppointment.slotTime == null ? null : ctx_r0.tenantData.viewAppointment.slotTime.name);
  }
}
var MatchingTenantItemComponent = class _MatchingTenantItemComponent {
  constructor() {
    this.defaultAvatarImg = environment.defaultAvatarImg;
    this.openTenant = new EventEmitter();
    this.fromMyAdsPage = false;
    this.isDisableScheduleBtn = false;
  }
  onScheduleView() {
    this.openTenant.emit(this.tenantData);
  }
  static {
    this.\u0275fac = function MatchingTenantItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchingTenantItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatchingTenantItemComponent, selectors: [["findqo-matching-tenant-item"]], inputs: { tenantData: "tenantData", index: "index", fromMyAdsPage: "fromMyAdsPage", isDisableScheduleBtn: "isDisableScheduleBtn" }, outputs: { openTenant: "openTenant" }, standalone: false, decls: 49, vars: 32, consts: [["showScheduleBtn", ""], [1, "tenant-item", "p-3", "d-flex", "flex-column"], [1, "d-flex", "gap-2", "mb-3", "align-items-center", "justify-content-start"], ["alt", "Tenantin website logo", "width", "89", "height", "22", 3, "ngSrc"], ["class", "heading-4-medium fg-general-3", 3, "d-none", 4, "ngIf"], ["class", "heading-4-medium fg-prim-2", 4, "ngIf"], [3, "ngClass"], [1, "position-relative", "avatar"], ["fill", "", "alt", "Tenant Image", 1, "tenant-img", "d-block", 3, "ngSrc"], ["alt", "on hunt badge", "fill", "", 1, "on-hunt-badge", 3, "ngSrc"], [1, "fg-general-5", "heading-4-medium", "limit-2"], [1, "fg-general-4", "text-caption-medium", "mt-3"], [1, "d-flex", "gap-1", "mt-2"], [1, "fg-general-3", "text-caption-regular"], [1, "fg-general-5", "text-caption-regular", "limit-2", "me-3"], [1, "row", "gap-1", "align-items-start", "mt-2"], [1, "col-auto"], [1, "col"], [1, "fg-general-5", "text-caption-regular"], [1, "row", "gap-1", "mt-2"], ["class", "view-date mt-auto mb-0 p-2", 4, "ngIf", "ngIfElse"], [1, "heading-4-medium", "fg-general-3"], [1, "heading-4-medium", "fg-prim-2"], ["mat-stroked-button", "", "color", "primary", 1, "text-body-regular", "w-100", "mt-auto", "mb-0", "mw-343px", 3, "click"], [1, "view-date", "mt-auto", "mb-0", "p-2"], [1, "text-body-regular", "fg-general-4", "mb-1"], [1, "text-body-medium", "fg-general-5", "ms-1"], [1, "text-body-regular", "fg-general-4"]], template: function MatchingTenantItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275element(2, "img", 3);
        \u0275\u0275template(3, MatchingTenantItemComponent_h4_3_Template, 3, 6, "h4", 4)(4, MatchingTenantItemComponent_h4_4_Template, 3, 3, "h4", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6)(6, "div", 7);
        \u0275\u0275element(7, "img", 8)(8, "img", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h4", 10);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 11);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "p", 13);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "p", 13);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 17)(26, "p", 18);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 15)(29, "div", 16)(30, "p", 13);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 17)(34, "p", 14);
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "tenantQuality");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 19)(38, "div", 16)(39, "p", 13);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 17)(43, "p", 14);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "tenantOtherInfo");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(46, MatchingTenantItemComponent_ng_template_46_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(48, MatchingTenantItemComponent_div_48_Template, 12, 11, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const showScheduleBtn_r3 = \u0275\u0275reference(47);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", "assets/images/tenantin-mini-logo.png");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.tenantData == null ? null : ctx.tenantData.viewAppointment));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tenantData.viewAppointment);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", (ctx.tenantData == null ? null : ctx.tenantData.viewAppointment) ? "opacity-50" : "opacity-100");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", (ctx.tenantData == null ? null : ctx.tenantData.picture) || ctx.defaultAvatarImg);
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", "assets/images/place-an-ad/on-hunt-badge.webp");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.tenantData == null ? null : ctx.tenantData.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 18, "n3649"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "n3650"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.tenantData == null ? null : ctx.tenantData.employment == null ? null : ctx.tenantData.employment.jobTitle);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "n3651"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.tenantData == null ? null : ctx.tenantData.employment == null ? null : ctx.tenantData.employment.grossIncome == null ? null : ctx.tenantData.employment.grossIncome.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 24, "n3652"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 26, ctx.tenantData == null ? null : ctx.tenantData.tenantinQuality));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 28, "n3653"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 30, ctx.tenantData), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.tenantData == null ? null : ctx.tenantData.viewAppointment)("ngIfElse", showScheduleBtn_r3);
      }
    }, dependencies: [NgClass, NgIf, MatButton, NgOptimizedImage, DatePipe, TranslationsPipe, TenantOtherInfoPipe, TenantQualityPipe], styles: ["\n\n.icon-18px[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  overflow: unset;\n}\n.tenant-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 8px;\n  min-height: 450px;\n}\n.limit-2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.mw-343px[_ngcontent-%COMP%] {\n  max-width: 343px;\n}\n.view-date[_ngcontent-%COMP%] {\n  background-color: rgba(255, 90, 184, 0.08);\n  border: 1px solid var(--prim-2);\n  border-radius: 4px;\n}\n.tenant-img[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-1);\n  border-radius: 50%;\n  object-fit: cover;\n}\n.on-hunt-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 5px solid var(--basic-1);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/matching-tenant-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchingTenantItemComponent, [{
    type: Component,
    args: [{ selector: "findqo-matching-tenant-item", standalone: false, template: `<div class="tenant-item p-3 d-flex flex-column">
	<div class="d-flex gap-2 mb-3 align-items-center justify-content-start">
		<img [ngSrc]="'assets/images/tenantin-mini-logo.png'" alt="Tenantin website logo" width="89" height="22" />

		<h4 class="heading-4-medium fg-general-3" *ngIf="!tenantData?.viewAppointment" [class.d-none]="fromMyAdsPage">
			{{ 'n3648' | translations }}&nbsp; #{{ index }}
		</h4>

		<h4 class="heading-4-medium fg-prim-2" *ngIf="tenantData.viewAppointment">{{ 'n3676' | translations }}</h4>
	</div>

	<div [ngClass]="tenantData?.viewAppointment ? 'opacity-50' : 'opacity-100'">
		<div class="position-relative avatar">
			<img [ngSrc]="tenantData?.picture || defaultAvatarImg" fill alt="Tenant Image" class="tenant-img d-block" />
			<img [ngSrc]="'assets/images/place-an-ad/on-hunt-badge.webp'" alt="on hunt badge" class="on-hunt-badge" fill />
		</div>

		<h4 class="fg-general-5 heading-4-medium limit-2">{{ tenantData?.title }}</h4>

		<p class="fg-general-4 text-caption-medium mt-3">{{ 'n3649' | translations }}</p>

		<div class="d-flex gap-1 mt-2">
			<p class="fg-general-3 text-caption-regular">{{ 'n3650' | translations }}</p>

			<p class="fg-general-5 text-caption-regular limit-2 me-3">{{ tenantData?.employment?.jobTitle }}</p>
		</div>

		<div class="row gap-1 align-items-start mt-2">
			<div class="col-auto">
				<p class="fg-general-3 text-caption-regular">{{ 'n3651' | translations }}</p>
			</div>

			<div class="col">
				<p class="fg-general-5 text-caption-regular">{{ tenantData?.employment?.grossIncome?.name }}</p>
			</div>
		</div>

		<div class="row gap-1 align-items-start mt-2">
			<div class="col-auto">
				<p class="fg-general-3 text-caption-regular">{{ 'n3652' | translations }}</p>
			</div>

			<div class="col">
				<p class="fg-general-5 text-caption-regular limit-2 me-3">{{ tenantData?.tenantinQuality | tenantQuality }}</p>
			</div>
		</div>

		<div class="row gap-1 mt-2">
			<div class="col-auto">
				<p class="fg-general-3 text-caption-regular">{{ 'n3653' | translations }}</p>
			</div>

			<div class="col">
				<p class="fg-general-5 text-caption-regular limit-2 me-3">
					{{ tenantData | tenantOtherInfo }}
				</p>
			</div>
		</div>
	</div>

	<ng-template #showScheduleBtn>
		<button
			mat-stroked-button
			color="primary"
			class="text-body-regular w-100 mt-auto mb-0 mw-343px"
			(click)="onScheduleView()"
			[class.pe-none]="isDisableScheduleBtn"
		>
			Schedule a Viewing
		</button>
	</ng-template>

	<div class="view-date mt-auto mb-0 p-2" *ngIf="tenantData?.viewAppointment; else showScheduleBtn">
		<p class="text-body-regular fg-general-4 mb-1">
			{{ 'n3647' | translations }}
			<span class="text-body-medium fg-general-5 ms-1">{{ +tenantData?.viewAppointment?.viewingAt * 1000 | date: 'mediumDate' }}</span>
		</p>

		<p class="text-body-regular fg-general-4">
			{{ 'n3647' | translations }}
			<span class="text-body-medium fg-general-5 ms-1">{{ tenantData?.viewAppointment?.slotTime?.name }}</span>
		</p>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/matching-tenant-item/matching-tenant-item.component.scss */\n.icon-18px {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  overflow: unset;\n}\n.tenant-item {\n  border: 1px solid var(--general-2);\n  border-radius: 8px;\n  min-height: 450px;\n}\n.limit-2 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.mw-343px {\n  max-width: 343px;\n}\n.view-date {\n  background-color: rgba(255, 90, 184, 0.08);\n  border: 1px solid var(--prim-2);\n  border-radius: 4px;\n}\n.tenant-img {\n  border: 1px solid var(--general-1);\n  border-radius: 50%;\n  object-fit: cover;\n}\n.on-hunt-badge {\n  position: absolute;\n  bottom: 0;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  border: 5px solid var(--basic-1);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/matching-tenant-item.component.css.map */\n"] }]
  }], null, { tenantData: [{
    type: Input
  }], index: [{
    type: Input
  }], openTenant: [{
    type: Output
  }], fromMyAdsPage: [{
    type: Input
  }], isDisableScheduleBtn: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatchingTenantItemComponent, { className: "MatchingTenantItemComponent", filePath: "apps/findqo-ireland/src/app/feature/general/matching-tenant-item/matching-tenant-item.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/general/matching-tenant-item/matching-tenant-item.module.ts
var MatchingTenantItemModule = class _MatchingTenantItemModule {
  static {
    this.\u0275fac = function MatchingTenantItemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatchingTenantItemModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MatchingTenantItemModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatIconModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatchingTenantItemModule, [{
    type: NgModule,
    args: [{
      declarations: [MatchingTenantItemComponent],
      imports: [SharedModule, MatIconModule],
      exports: [MatchingTenantItemComponent]
    }]
  }], null, null);
})();

export {
  MatchingTenantItemComponent,
  MatchingTenantItemModule
};
//# sourceMappingURL=chunk-7GXKAIQJ.js.map
