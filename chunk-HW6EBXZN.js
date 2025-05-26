import {
  AgentHubFacade,
  EnquiryState
} from "./chunk-XVUCQVKR.js";
import {
  ActionsComponent,
  ActionsModule,
  AdOverviewComponent,
  AdOverviewModule,
  ENQUIRY_DETAIL_ACTIONS
} from "./chunk-K65MW22H.js";
import {
  AgentHubActions
} from "./chunk-YL2NNRDT.js";
import {
  AdFeaturedItemComponent,
  AdFeaturedItemModule
} from "./chunk-DJC3A7OB.js";
import {
  AdItemV2Module
} from "./chunk-GGIORZLS.js";
import "./chunk-GCFYHD3C.js";
import {
  AdItemV2Component
} from "./chunk-DYDGEZIA.js";
import "./chunk-235SP5Y4.js";
import {
  AdStampModule
} from "./chunk-744QYGBS.js";
import {
  MyAdStampComponent
} from "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import "./chunk-VGENAY26.js";
import {
  MatBottomSheet,
  MatBottomSheetModule
} from "./chunk-2KWNZOXB.js";
import "./chunk-NHXE4UA3.js";
import "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import "./chunk-DYYJHWVN.js";
import "./chunk-5DPLTTSV.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  AisleType,
  MatDivider,
  MatDividerModule,
  MatIconButton,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  SnackService,
  WindowService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  PLATFORM_ID,
  catchError,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  tap,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/components/basic-information/basic-information.component.ts
var BasicInformationComponent = class _BasicInformationComponent {
  static {
    this.\u0275fac = function BasicInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BasicInformationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicInformationComponent, selectors: [["findqo-basic-information"]], inputs: { enquiry: "enquiry" }, standalone: false, decls: 43, vars: 7, consts: [[1, "container", "p-3", "bg-basic-1", "rounded-8px", "mb-4"], [1, "text-body-medium", "fg-general-5"], [1, "grid", "column-gap-32px", "justify-content-between", "mt-2"], [1, "col"], [1, "row", "py-2", "gap-2", "justify-content-between", "align-items-center"], [1, "col-auto"], [1, "text-body-regular", "fg-general-5"], [1, "text-body-regular", "fg-prim-2", 3, "href"], [3, "adStatus"]], template: function BasicInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2, "Enquirer Basic Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8, "Name");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "p", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 3)(13, "div", 4)(14, "div", 5)(15, "p", 6);
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 5)(18, "a", 7);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 3)(21, "div", 4)(22, "div", 5)(23, "p", 6);
        \u0275\u0275text(24, "Phone number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 5)(26, "a", 7);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 3)(29, "div", 4)(30, "div", 5)(31, "p", 6);
        \u0275\u0275text(32, "No of. adults");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 5)(34, "p", 6);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 3)(37, "div", 4)(38, "div", 5)(39, "p", 6);
        \u0275\u0275text(40, "Status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 5);
        \u0275\u0275element(42, "findqo-my-ad-stamp", 8);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.enquiry == null ? null : ctx.enquiry.user == null ? null : ctx.enquiry.user.name);
        \u0275\u0275advance(7);
        \u0275\u0275property("href", "mailto:" + (ctx.enquiry == null ? null : ctx.enquiry.user == null ? null : ctx.enquiry.user.email), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.enquiry == null ? null : ctx.enquiry.user == null ? null : ctx.enquiry.user.email);
        \u0275\u0275advance(7);
        \u0275\u0275property("href", "tel:+353" + (ctx.enquiry == null ? null : ctx.enquiry.user == null ? null : ctx.enquiry.user.phone), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("+353 ", ctx.enquiry == null ? null : ctx.enquiry.user == null ? null : ctx.enquiry.user.phone, "");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.enquiry == null ? null : ctx.enquiry.adultsCount);
        \u0275\u0275advance(7);
        \u0275\u0275property("adStatus", (tmp_6_0 = ctx.enquiry == null ? null : ctx.enquiry.completionStatus) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "pending");
      }
    }, dependencies: [MyAdStampComponent], styles: ["\n\n.column-gap-32px[_ngcontent-%COMP%] {\n  column-gap: 32px !important;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n}\n@media (min-width: 992px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 47% 47%;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/basic-information.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicInformationComponent, [{
    type: Component,
    args: [{ selector: "findqo-basic-information", standalone: false, template: `<div class="container p-3 bg-basic-1 rounded-8px mb-4">
	<p class="text-body-medium fg-general-5">Enquirer Basic Information</p>

	<div class="grid column-gap-32px justify-content-between mt-2">
		<div class="col">
			<div class="row py-2 gap-2 justify-content-between align-items-center">
				<div class="col-auto">
					<p class="text-body-regular fg-general-5">Name</p>
				</div>

				<div class="col-auto">
					<p class="text-body-regular fg-general-5">{{ enquiry?.user?.name }}</p>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="row py-2 gap-2 justify-content-between align-items-center">
				<div class="col-auto">
					<p class="text-body-regular fg-general-5">Email</p>
				</div>

				<div class="col-auto">
					<a [href]="'mailto:' + enquiry?.user?.email" class="text-body-regular fg-prim-2">{{ enquiry?.user?.email }}</a>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="row py-2 gap-2 justify-content-between align-items-center">
				<div class="col-auto">
					<p class="text-body-regular fg-general-5">Phone number</p>
				</div>

				<div class="col-auto">
					<a [href]="'tel:+353' + enquiry?.user?.phone" class="text-body-regular fg-prim-2">+353 {{ enquiry?.user?.phone }}</a>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="row py-2 gap-2 justify-content-between align-items-center">
				<div class="col-auto">
					<p class="text-body-regular fg-general-5">No of. adults</p>
				</div>

				<div class="col-auto">
					<p class="text-body-regular fg-general-5">{{ enquiry?.adultsCount }}</p>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="row py-2 gap-2 justify-content-between align-items-center">
				<div class="col-auto">
					<p class="text-body-regular fg-general-5">Status</p>
				</div>

				<div class="col-auto">
					<findqo-my-ad-stamp [adStatus]="enquiry?.completionStatus ?? 'pending'"></findqo-my-ad-stamp>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/components/basic-information/basic-information.component.scss */\n.column-gap-32px {\n  column-gap: 32px !important;\n}\n.grid {\n  display: grid;\n  grid-template-columns: 100%;\n}\n@media (min-width: 992px) {\n  .grid {\n    grid-template-columns: 47% 47%;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/basic-information.component.css.map */\n"] }]
  }], null, { enquiry: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicInformationComponent, { className: "BasicInformationComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/components/basic-information/basic-information.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/components/other-information/other-information.component.ts
var _c0 = (a0) => ({ "mt-2": a0 });
function OtherInformationComponent_ng_container_3_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 1);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ages_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Child #", $index_r2 + 1, " age");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ages_r1);
  }
}
function OtherInformationComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "p", 9);
    \u0275\u0275text(6, "Bringing children?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "p", 1);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275repeaterCreate(10, OtherInformationComponent_ng_container_3_For_11_Template, 8, 2, "div", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "mat-divider", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(+(ctx_r2.enquiry == null ? null : ctx_r2.enquiry.children == null ? null : ctx_r2.enquiry.children.hasChildren) ? "Yes" : "No");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.enquiry == null ? null : ctx_r2.enquiry.children == null ? null : ctx_r2.enquiry.children.ages);
  }
}
function OtherInformationComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "p", 9);
    \u0275\u0275text(4, "Bringing Pets?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 1);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "mat-divider", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(+(ctx_r2.enquiry == null ? null : ctx_r2.enquiry.pet == null ? null : ctx_r2.enquiry.pet.hasPet) ? "Yes" : "No");
  }
}
function OtherInformationComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 12)(3, "p", 9);
    \u0275\u0275text(4, "Move in date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "mat-divider", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r2.enquiry.ad.aisle.reference === ctx_r2.aisleType.RENT_COMMERCIAL));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.enquiry == null ? null : ctx_r2.enquiry.moveInDate) ? \u0275\u0275pipeBind2(7, 2, ctx_r2.enquiry == null ? null : ctx_r2.enquiry.moveInDate, "MMMM dd, YYYY") : "N/A");
  }
}
function OtherInformationComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 12)(3, "p", 9);
    \u0275\u0275text(4, "Payment Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "mat-divider", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.enquiry == null ? null : ctx_r2.enquiry.paymentMode);
  }
}
var OtherInformationComponent = class _OtherInformationComponent {
  constructor() {
    this.aisleType = AisleType;
  }
  static {
    this.\u0275fac = function OtherInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OtherInformationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtherInformationComponent, selectors: [["findqo-other-information"]], inputs: { enquiry: "enquiry" }, standalone: false, decls: 11, vars: 5, consts: [[1, "container", "p-3", "bg-basic-1", "rounded-8px", "mb-4"], [1, "text-body-medium", "fg-general-5"], [4, "ngIf"], [1, "text-body-regular", "fg-general-5", "mb-2"], [1, "text-body-regular", "fg-general-5", "overflow-hidden"], [1, "justify-content-between", "mt-2", "grid", "column-gap-32px"], [1, "col"], [1, "row", "py-2", "gap-2", "justify-content-between"], [1, "col-auto"], [1, "text-body-regular", "fg-general-5"], [1, "my-3"], [1, "grid", "column-gap-32px"], [1, "col", "d-flex", "justify-content-between", "py-2"], [1, "grid", "column-gap-32px", 3, "ngClass"], [1, "text-body-regular", "fg-general-4"], [1, "grid", "column-gap-32px", "mt-3"]], template: function OtherInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
        \u0275\u0275text(2, "Other information");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, OtherInformationComponent_ng_container_3_Template, 13, 1, "ng-container", 2)(4, OtherInformationComponent_ng_container_4_Template, 8, 1, "ng-container", 2)(5, OtherInformationComponent_ng_container_5_Template, 9, 7, "ng-container", 2)(6, OtherInformationComponent_ng_container_6_Template, 8, 1, "ng-container", 2);
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8, "Sender\u2019s message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "pre", 4);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.enquiry == null ? null : ctx.enquiry.children == null ? null : ctx.enquiry.children.hasChildren);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.enquiry == null ? null : ctx.enquiry.pet == null ? null : ctx.enquiry.pet.hasPet);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.enquiry.ad.aisle.reference !== ctx.aisleType.SALE_RESIDENTIAL && ctx.enquiry.ad.aisle.reference !== ctx.aisleType.SALE_COMMERCIAL);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.enquiry == null ? null : ctx.enquiry.paymentMode);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.enquiry == null ? null : ctx.enquiry.message);
      }
    }, dependencies: [NgClass, NgIf, MatDivider, DatePipe], styles: ['\n\npre[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  word-wrap: break-word;\n  font-family: "Poppins", sans-serif;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n}\n@media (min-width: 992px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 47% 47%;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/other-information.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtherInformationComponent, [{
    type: Component,
    args: [{ selector: "findqo-other-information", standalone: false, template: `<div class="container p-3 bg-basic-1 rounded-8px mb-4">
	<p class="text-body-medium fg-general-5">Other information</p>
	<ng-container *ngIf="enquiry?.children?.hasChildren">
		<div class="justify-content-between mt-2 grid column-gap-32px">
			<div class="col">
				<div class="row py-2 gap-2 justify-content-between">
					<div class="col-auto">
						<p class="text-body-regular fg-general-5">Bringing children?</p>
					</div>

					<div class="col-auto">
						<p class="text-body-medium fg-general-5">{{ +enquiry?.children?.hasChildren ? 'Yes' : 'No' }}</p>
					</div>
				</div>
			</div>

			@for (ages of enquiry?.children?.ages; track $index) {
				<div class="col">
					<div class="row py-2 gap-2 justify-content-between">
						<div class="col-auto">
							<p class="text-body-regular fg-general-5">Child #{{ $index + 1 }} age</p>
						</div>

						<div class="col-auto">
							<p class="text-body-medium fg-general-5">{{ ages }}</p>
						</div>
					</div>
				</div>
			}
		</div>

		<mat-divider class="my-3"></mat-divider>
	</ng-container>

	<ng-container *ngIf="enquiry?.pet?.hasPet">
		<div class="grid column-gap-32px">
			<div class="col d-flex justify-content-between py-2">
				<p class="text-body-regular fg-general-5">Bringing Pets?</p>
				<p class="text-body-medium fg-general-5">{{ +enquiry?.pet?.hasPet ? 'Yes' : 'No' }}</p>
			</div>
		</div>

		<mat-divider class="my-3"></mat-divider>
	</ng-container>

	<ng-container *ngIf="enquiry.ad.aisle.reference !== aisleType.SALE_RESIDENTIAL && enquiry.ad.aisle.reference !== aisleType.SALE_COMMERCIAL">
		<div class="grid column-gap-32px" [ngClass]="{ 'mt-2': enquiry.ad.aisle.reference === aisleType.RENT_COMMERCIAL }">
			<div class="col d-flex justify-content-between py-2">
				<p class="text-body-regular fg-general-5">Move in date</p>
				<p class="text-body-regular fg-general-4">{{ enquiry?.moveInDate ? (enquiry?.moveInDate | date: 'MMMM dd, YYYY') : 'N/A' }}</p>
			</div>
		</div>

		<mat-divider class="my-3"></mat-divider>
	</ng-container>

	<ng-container *ngIf="enquiry?.paymentMode">
		<div class="grid column-gap-32px mt-3">
			<div class="col d-flex justify-content-between py-2">
				<p class="text-body-regular fg-general-5">Payment Mode</p>
				<p class="text-body-regular fg-general-4">{{ enquiry?.paymentMode }}</p>
			</div>
		</div>

		<mat-divider class="my-3"></mat-divider>
	</ng-container>

	<p class="text-body-regular fg-general-5 mb-2">Sender\u2019s message</p>

	<pre class="text-body-regular fg-general-5 overflow-hidden">{{ enquiry?.message }}</pre>
</div>
`, styles: ['/* apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/components/other-information/other-information.component.scss */\npre {\n  white-space: pre-line;\n  word-wrap: break-word;\n  font-family: "Poppins", sans-serif;\n}\n.grid {\n  display: grid;\n  grid-template-columns: 100%;\n}\n@media (min-width: 992px) {\n  .grid {\n    grid-template-columns: 47% 47%;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/other-information.component.css.map */\n'] }]
  }], null, { enquiry: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtherInformationComponent, { className: "OtherInformationComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/components/other-information/other-information.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/enquiry-detail.page.ts
var _c02 = (a0, a1) => ({ enquiry: a0, isLoading: a1 });
function EnquiryDetailPage_ng_container_0_div_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-item-v2", 22);
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ad", vm_r2.enquiry.ad)("isAgentHub", true);
  }
}
function EnquiryDetailPage_ng_container_0_div_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-featured-item", 23);
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ad", vm_r2.enquiry.ad)("isAgentHub", true);
  }
}
function EnquiryDetailPage_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "button", 6)(5, "mat-icon", 7);
    \u0275\u0275text(6, "arrow_back");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 8);
    \u0275\u0275listener("click", function EnquiryDetailPage_ng_container_0_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const vm_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openActionDialog(vm_r2 == null ? null : vm_r2.enquiry));
    });
    \u0275\u0275elementStart(9, "mat-icon", 7);
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "button", 11)(14, "mat-icon", 7);
    \u0275\u0275text(15, "arrow_back");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "h3", 13);
    \u0275\u0275text(18, "Viewing Enquiry");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
    \u0275\u0275element(21, "findqo-basic-information", 16)(22, "findqo-other-information", 16);
    \u0275\u0275elementContainerStart(23);
    \u0275\u0275element(24, "findqo-ad-overview", 17);
    \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "p", 20);
    \u0275\u0275text(28, "Ad Preview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 21);
    \u0275\u0275template(30, EnquiryDetailPage_ng_container_0_div_1_Conditional_30_Template, 1, 2, "findqo-ad-item-v2", 22)(31, EnquiryDetailPage_ng_container_0_div_1_Conditional_31_Template, 1, 2, "findqo-ad-featured-item", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24)(33, "findqo-actions", 25);
    \u0275\u0275listener("click", function EnquiryDetailPage_ng_container_0_div_1_Template_findqo_actions_click_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const vm_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleActionButton($event, vm_r2.enquiry));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/" + ctx_r2.appRoute.agentHub.dashboard + "/" + ctx_r2.appRoute.agentHub.enquiries);
    \u0275\u0275advance(9);
    \u0275\u0275property("routerLink", "/" + ctx_r2.appRoute.agentHub.dashboard + "/" + ctx_r2.appRoute.agentHub.enquiries);
    \u0275\u0275advance(8);
    \u0275\u0275property("enquiry", vm_r2.enquiry);
    \u0275\u0275advance();
    \u0275\u0275property("enquiry", vm_r2.enquiry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ad", vm_r2.enquiry.ad);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(vm_r2.enquiry.ad.isFeatured === "0" ? 30 : vm_r2.enquiry.ad.isFeatured === "1" ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ad", vm_r2.enquiry.ad)("options", ctx_r2.actionOption(vm_r2.enquiry))("isLoading", ctx_r2.isLoading)("loaderRef", ctx_r2.loaderRef);
  }
}
function EnquiryDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EnquiryDetailPage_ng_container_0_div_1_Template, 34, 10, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r2.isLoading);
  }
}
var EnquiryDetailPage = class _EnquiryDetailPage {
  constructor(agentHubFacade, window, bottomSheet, sharedAdsFacade, snack) {
    this.agentHubFacade = agentHubFacade;
    this.window = window;
    this.bottomSheet = bottomSheet;
    this.sharedAdsFacade = sharedAdsFacade;
    this.snack = snack;
    this.actionOption = ENQUIRY_DETAIL_ACTIONS;
    this.isLoading = false;
    this.loaderRef = null;
    this.appRoute = APP_ROUTE;
  }
  openActionDialog(enquiry) {
    const ref = this.bottomSheet.open(ActionsComponent, {
      panelClass: ["agent-ad-detail"]
    });
    ref.instance.ad = enquiry?.ad;
    ref.instance.isBottomActionbar = true;
    ref.instance.dialogRef = ref;
    ref.instance.options = this.actionOption(enquiry);
    ref.afterDismissed().subscribe((res) => {
      if (res?.reference) {
        this.handleActionButton(res, enquiry);
      }
    });
  }
  handleActionButton(actionItem, enquiry) {
    if (actionItem.reference) {
      this.isLoading = true;
      this.loaderRef = actionItem.reference;
    }
    switch (actionItem.reference) {
      case AgentHubActions.VIEW_TENANCY_RESUME:
        this.sharedAdsFacade.getPdfLocalUrl(enquiry.tenantin?.tenantResumeUrl).pipe(finalize(() => {
          this.isLoading = false;
        })).subscribe((res) => {
          const LINK = URL.createObjectURL(res);
          this.window.reference.open(LINK);
        });
        break;
      case AgentHubActions.VIEW_AD_ON_WEB:
        this.openNewWindow(actionItem.link);
        this.isLoading = false;
        break;
      case AgentHubActions.MARK_AS_PENDING:
      case AgentHubActions.MARK_AS_COMPLETED:
        this.agentHubFacade.markAsPending(enquiry?.id, { completionStatus: actionItem.value });
        break;
      default:
    }
  }
  openNewWindow(link) {
    const OPENED_TAB = this.window.reference.open(link, "_blank");
    if (!OPENED_TAB || OPENED_TAB.closed || typeof OPENED_TAB.closed === "undefined") {
      this.snack.open({
        data: { translationKey: "n3965", type: "error" },
        panelClass: ["snackbar-error"]
      });
    }
  }
  static {
    this.\u0275fac = function EnquiryDetailPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiryDetailPage)(\u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(SnackService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquiryDetailPage, selectors: [["findqo-enquiry-detail"]], standalone: false, decls: 3, vars: 8, consts: [[4, "ngIf"], ["class", "pb-4 pt-lg-4 bg-general-1 w-100", 4, "ngIf"], [1, "pb-4", "pt-lg-4", "bg-general-1", "w-100"], [1, "container", "px-0"], [1, "d-md-none", "row", "justify-content-between", "header", "px-3", "bg-basic-1", "align-items-center"], [1, "col-auto"], ["mat-icon-button", "", 1, "fg-general-4", 3, "routerLink"], [1, "fs-18px"], ["mat-icon-button", "", 1, "fg-general-4", "bg-neutral-1", "rounded-circle", "back-button", 3, "click"], [1, "row", "align-items-center", "gap-3", "mb-4", "px-3", "px-lg-0", "pt-4", "pt-lg-0"], [1, "col-auto", "d-none", "d-lg-block"], ["mat-icon-button", "", 1, "fg-general-4", "bg-neutral-2", "rounded-circle", "back-button", 3, "routerLink"], [1, "col"], [1, "heading-3-regular", "fg-general-5"], [1, "row", "gap-4"], [1, "col", "col-md-8", "col-xl-9"], [3, "enquiry"], [3, "ad"], [1, "bg-neutral-2", "mt-4", "rounded-8px", "overflow-hidden"], [1, "bg-basic-1", "h-50px", "d-flex", "align-items-center", "px-3"], [1, "text-body-medium", "fg-general-5", "align-middle"], [1, "m-3", "bg-basic-1"], ["indqo-ad-item-v2", "", 3, "ad", "isAgentHub"], [3, "ad", "isAgentHub"], [1, "col", "d-md-block", "d-none"], [3, "click", "ad", "options", "isLoading", "loaderRef"]], template: function EnquiryDetailPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EnquiryDetailPage_ng_container_0_Template, 2, 1, "ng-container", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c02, \u0275\u0275pipeBind1(1, 1, ctx.agentHubFacade.getEnquiry$()), \u0275\u0275pipeBind1(2, 3, ctx.agentHubFacade.getIsLoading$())));
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, RouterLink, AdOverviewComponent, AdItemV2Component, AdFeaturedItemComponent, ActionsComponent, BasicInformationComponent, OtherInformationComponent, AsyncPipe], styles: ["\n\n.back-button[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: fit-content !important;\n}\n.h-50px[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n.header[_ngcontent-%COMP%] {\n  height: 60px;\n}\n.spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: calc(100vh - 65px) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/enquiry-detail.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiryDetailPage, [{
    type: Component,
    args: [{ selector: "findqo-enquiry-detail", standalone: false, template: `<ng-container *ngIf="{enquiry:agentHubFacade.getEnquiry$() | async,isLoading:agentHubFacade.getIsLoading$()|async} as vm">
	<div class="pb-4 pt-lg-4 bg-general-1 w-100" *ngIf="!vm.isLoading">
		<div class="container px-0">
			<div class="d-md-none row justify-content-between header px-3 bg-basic-1 align-items-center">
				<div class="col-auto">
					<button mat-icon-button class="fg-general-4" [routerLink]="'/'+appRoute.agentHub.dashboard+'/'+appRoute.agentHub.enquiries">
						<mat-icon class="fs-18px">arrow_back</mat-icon>
					</button>
				</div>

				<div class="col-auto">
					<button mat-icon-button class="fg-general-4 bg-neutral-1 rounded-circle back-button" (click)="openActionDialog(vm?.enquiry)">
						<mat-icon class="fs-18px">more_vert</mat-icon>
					</button>
				</div>
			</div>

			<div class="row align-items-center gap-3 mb-4 px-3 px-lg-0 pt-4 pt-lg-0">
				<div class="col-auto d-none d-lg-block">
					<button
						mat-icon-button
						class="fg-general-4 bg-neutral-2 rounded-circle back-button"
						[routerLink]="'/'+appRoute.agentHub.dashboard+'/'+appRoute.agentHub.enquiries"
					>
						<mat-icon class="fs-18px">arrow_back</mat-icon>
					</button>
				</div>

				<div class="col">
					<h3 class="heading-3-regular fg-general-5">Viewing Enquiry</h3>
				</div>
			</div>

			<div class="row gap-4">
				<div class="col col-md-8 col-xl-9">
					<findqo-basic-information [enquiry]="vm.enquiry"></findqo-basic-information>

					<findqo-other-information [enquiry]="vm.enquiry"></findqo-other-information>

					<ng-container>
						<findqo-ad-overview [ad]="vm.enquiry.ad"></findqo-ad-overview>
						<div class="bg-neutral-2 mt-4 rounded-8px overflow-hidden">
							<div class="bg-basic-1 h-50px d-flex align-items-center px-3">
								<p class="text-body-medium fg-general-5 align-middle">Ad Preview</p>
							</div>

							<div class="m-3 bg-basic-1">
								@if (vm.enquiry.ad.isFeatured ==='0') {
								<findqo-ad-item-v2 indqo-ad-item-v2 [ad]="vm.enquiry.ad" [isAgentHub]="true"></findqo-ad-item-v2>
								} @else if (vm.enquiry.ad.isFeatured ==='1') {
								<findqo-ad-featured-item [ad]="vm.enquiry.ad" [isAgentHub]="true"></findqo-ad-featured-item>
								}
							</div>
						</div>
					</ng-container>
				</div>

				<div class="col d-md-block d-none">
					<findqo-actions
						[ad]="vm.enquiry.ad"
						[options]="actionOption(vm.enquiry)"
						(click)="handleActionButton($event,vm.enquiry)"
						[isLoading]="isLoading"
						[loaderRef]="loaderRef"
					></findqo-actions>
				</div>
			</div>
		</div>
	</div>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/enquiry-detail.page.scss */\n.back-button {\n  height: 44px;\n  width: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-button mat-icon {\n  width: fit-content !important;\n}\n.h-50px {\n  height: 50px !important;\n}\n.header {\n  height: 60px;\n}\n.spinner {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n}\n.h-100 {\n  height: calc(100vh - 65px) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/enquiry-detail.page.css.map */\n"] }]
  }], () => [{ type: AgentHubFacade }, { type: WindowService }, { type: MatBottomSheet }, { type: SharedAdsFacade }, { type: SnackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquiryDetailPage, { className: "EnquiryDetailPage", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/enquiry-detail.page.ts", lineNumber: 21 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/resolvers/enquiry-detail.resolver.ts
var EnquiryDetailResolver = (route, _state, adsApi = inject(AdsApi), enquiryState = inject(EnquiryState), router = inject(Router), platformId = inject(PLATFORM_ID)) => {
  enquiryState.setLoading(true);
  if (isPlatformBrowser(platformId)) {
    return adsApi.getEnquiryById(route.params["enquiryId"]).pipe(catchError(() => {
      enquiryState.setEnquiry(void 0);
      router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
      return of(null);
    }), map((res) => res.data), tap((enquiry) => {
      enquiryState.setEnquiry(enquiry);
    }), finalize(() => enquiryState.setLoading(false)));
  }
  return of(void 0);
};

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/enquiry-detail-routing.module.ts
var routes = [
  {
    path: ":enquiryId",
    component: EnquiryDetailPage,
    resolve: { adResolver: EnquiryDetailResolver }
  }
];
var EnquiryDetailPageRoutingModule = class _EnquiryDetailPageRoutingModule {
  static {
    this.\u0275fac = function EnquiryDetailPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiryDetailPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EnquiryDetailPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiryDetailPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiry-detail/enquiry-detail.module.ts
var EnquiryDetailPageModule = class _EnquiryDetailPageModule {
  static {
    this.\u0275fac = function EnquiryDetailPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiryDetailPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EnquiryDetailPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      EnquiryDetailPageRoutingModule,
      AdOverviewModule,
      AdItemV2Module,
      AdFeaturedItemModule,
      ActionsModule,
      MatBottomSheetModule,
      AdStampModule,
      MatDividerModule,
      MatProgressSpinnerModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiryDetailPageModule, [{
    type: NgModule,
    args: [{
      declarations: [EnquiryDetailPage, BasicInformationComponent, OtherInformationComponent],
      imports: [
        SharedModule,
        EnquiryDetailPageRoutingModule,
        AdOverviewModule,
        AdItemV2Module,
        AdFeaturedItemModule,
        ActionsModule,
        MatBottomSheetModule,
        AdStampModule,
        MatDividerModule,
        MatProgressSpinnerModule
      ]
    }]
  }], null, null);
})();
export {
  EnquiryDetailPageModule
};
//# sourceMappingURL=chunk-HW6EBXZN.js.map
