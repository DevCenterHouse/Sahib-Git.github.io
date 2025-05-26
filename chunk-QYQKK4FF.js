import {
  MyEnquiriesFacade
} from "./chunk-E2NRA2LK.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ABFZREUC.js";
import {
  PaginationComponent,
  PaginationModule
} from "./chunk-3PMSSHKP.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  APP_ROUTE,
  AdImagePipe,
  AdImagePreloadDirective,
  AdPricePipe,
  AdStatus,
  AisleType,
  BooleanStatus,
  ButtonModule,
  ButtonType,
  MatDivider,
  MatDividerModule,
  Router,
  RouterModule,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgForOf,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  catchError,
  inject,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-enquiries/components/my-enquiry-item/my-enquiry-item.component.ts
function MyEnquiryItemComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "n3728"), ":\xA0");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", !!(ctx_r0.enquiry == null ? null : ctx_r0.enquiry.tenantResume) ? \u0275\u0275pipeBind1(6, 4, "n3559") : \u0275\u0275pipeBind1(7, 6, "n3558"), " ");
  }
}
var MyEnquiryItemComponent = class _MyEnquiryItemComponent {
  constructor() {
    this.buttonType = ButtonType;
    this.booleanStatus = BooleanStatus;
    this.aisleType = AisleType;
    this.adStatusEnum = AdStatus;
    this.canShowTenantStatus = false;
  }
  ngOnInit() {
    this.canShowTenantStatus = this.enquiry.ad.aisle.reference !== AisleType.RENT_COMMERCIAL && this.enquiry.ad.aisle.reference !== AisleType.SALE_COMMERCIAL && this.enquiry.ad.aisle.reference !== AisleType.SALE_RESIDENTIAL;
  }
  static {
    this.\u0275fac = function MyEnquiryItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiryItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyEnquiryItemComponent, selectors: [["findqo-my-enquiry-item"]], inputs: { enquiry: "enquiry" }, standalone: false, decls: 27, vars: 23, consts: [[1, "row", "p-3", "enquiry-item", "align-items-center", "justify-content-evenly"], [1, "col-lg", "d-flex", "align-items-center"], ["loading", "lazy", "width", "88", "height", "70", "findqoAdImage", "", 1, "rounded-1", "me-2", "object-fit-cover", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "w-349px"], [1, "d-block", "text-small-14px-regular", "fg-general-5"], [1, "d-block", "text-small-14px-regular", "fg-general-5", "mt-2"], [1, "col-lg", "d-none", "d-lg-block"], [1, "divider", "bg-general-1", "mx-auto"], [1, "my-2", "d-lg-none"], [1, "col-lg-auto", "py-0", "text-start", "text-md-end"], [1, "d-block", "text-caption-regular", "fg-general-3"], [1, "text-body-regular", "fg-general-5"], ["class", "text-caption-regular fg-general-3 mt-1", 4, "ngIf"], [1, "text-caption-regular", "fg-general-3", "mt-1"], [1, "d-inline-block"], [1, "d-inline-block", "text-body-regular", "fg-general-5"]], template: function MyEnquiryItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275pipe(3, "adImagePipe");
        \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "adPrice");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275element(11, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "mat-divider", 8);
        \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
        \u0275\u0275text(15, " Enquiry Sent :\xA0 ");
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, MyEnquiryItemComponent_div_20_Template, 8, 8, "div", 12);
        \u0275\u0275elementStart(21, "span", 10);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translations");
        \u0275\u0275elementStart(24, "span", 11);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "date");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 9, ctx.enquiry == null ? null : ctx.enquiry.ad == null ? null : ctx.enquiry.ad.images[0] == null ? null : ctx.enquiry.ad.images[0].url))("alt", ctx.enquiry == null ? null : ctx.enquiry.ad == null ? null : ctx.enquiry.ad.title);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.enquiry == null ? null : ctx.enquiry.ad == null ? null : ctx.enquiry.ad.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 11, ctx.enquiry == null ? null : ctx.enquiry.ad == null ? null : ctx.enquiry.ad.price, ctx.enquiry == null ? null : ctx.enquiry.ad == null ? null : ctx.enquiry.ad.rentalPeriod));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate2(" ", +(ctx.enquiry == null ? null : ctx.enquiry.count) + 1, " ", +(ctx.enquiry == null ? null : ctx.enquiry.count) === 0 ? \u0275\u0275pipeBind1(18, 14, "n3744") : \u0275\u0275pipeBind1(19, 16, "n3745"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.canShowTenantStatus);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 18, "n3541"), "\xA0 ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 20, +(ctx.enquiry == null ? null : ctx.enquiry.updatedAt) * 1e3, "dd-MMM-YYYY"));
      }
    }, dependencies: [NgIf, NgOptimizedImage, AdImagePreloadDirective, MatDivider, DatePipe, AdImagePipe, TranslationsPipe, AdPricePipe], styles: ["\n\n.enquiry-item[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: 100px;\n  min-width: 84px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 1px;\n}\n.w-349px[_ngcontent-%COMP%] {\n  width: 349px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-enquiry-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiryItemComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-enquiry-item", standalone: false, template: `<div class="row p-3 enquiry-item align-items-center justify-content-evenly">
	<div class="col-lg d-flex align-items-center">
		<img
			[ngSrc]="enquiry?.ad?.images[0]?.url | adImagePipe"
			class="rounded-1 me-2 object-fit-cover image-skeleton-loader"
			[alt]="enquiry?.ad?.title"
			loading="lazy"
			width="88"
			height="70"
			findqoAdImage
		/>

		<div class="w-349px">
			<span class="d-block text-small-14px-regular fg-general-5">{{ enquiry?.ad?.title }}</span>

			<span class="d-block text-small-14px-regular fg-general-5 mt-2">{{ enquiry?.ad?.price | adPrice: enquiry?.ad?.rentalPeriod }}</span>
		</div>
	</div>

	<div class="col-lg d-none d-lg-block">
		<div class="divider bg-general-1 mx-auto"></div>
	</div>

	<mat-divider class="my-2 d-lg-none"></mat-divider>

	<div class="col-lg-auto py-0 text-start text-md-end">
		<span class="d-block text-caption-regular fg-general-3">
			Enquiry Sent :&nbsp;
			<span class="text-body-regular fg-general-5">
				{{ +enquiry?.count + 1 }} {{ +enquiry?.count === 0 ? ('n3744' | translations) : ('n3745' | translations) }}
			</span>
		</span>

		<div *ngIf="canShowTenantStatus" class="text-caption-regular fg-general-3 mt-1">
			<span class="d-inline-block">{{ 'n3728' | translations }}:&nbsp;</span>

			<span class="d-inline-block text-body-regular fg-general-5">
				{{ !!enquiry?.tenantResume ? ('n3559' | translations) : ('n3558' | translations) }}
			</span>
		</div>

		<span class="d-block text-caption-regular fg-general-3">
			{{ 'n3541' | translations }}&nbsp;
			<span class="text-body-regular fg-general-5">{{ +enquiry?.updatedAt * 1000 | date: 'dd-MMM-YYYY' }}</span>
		</span>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-enquiries/components/my-enquiry-item/my-enquiry-item.component.scss */\n.enquiry-item {\n  border: 1px solid var(--general-2);\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n.status-badge {\n  height: 20px;\n  border-radius: 100px;\n  min-width: 84px;\n}\n.divider {\n  height: 70px;\n  width: 1px;\n}\n.w-349px {\n  width: 349px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-enquiry-item.component.css.map */\n"] }]
  }], null, { enquiry: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyEnquiryItemComponent, { className: "MyEnquiryItemComponent", filePath: "apps/findqo-ireland/src/app/feature/my-enquiries/components/my-enquiry-item/my-enquiry-item.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/my-enquiries/pages/my-enquiry-list/my-enquiry-list.page.ts
var _c0 = (a0, a1, a2) => ({ enquiryList: a0, isLoading: a1, pageMetaData: a2 });
function MyEnquiryListPage_ng_container_0_ng_container_1_mat_progress_bar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 10);
  }
}
function MyEnquiryListPage_ng_container_0_ng_container_1_findqo_my_enquiry_item_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-my-enquiry-item", 11);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("enquiry", item_r1);
  }
}
function MyEnquiryListPage_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyEnquiryListPage_ng_container_0_ng_container_1_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "h3", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MyEnquiryListPage_ng_container_0_ng_container_1_findqo_my_enquiry_item_9_Template, 1, 1, "findqo-my-enquiry-item", 7);
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275element(11, "findqo-pagination", 9);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r2 == null ? null : vm_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275classProp("pe-none", vm_r2 == null ? null : vm_r2.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "n3538"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "n3747"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", vm_r2 == null ? null : vm_r2.enquiryList);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageMetaData", \u0275\u0275pipeBind1(12, 11, ctx_r2.pageMetaData$));
  }
}
function MyEnquiryListPage_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "n3573"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "n3574"));
  }
}
function MyEnquiryListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyEnquiryListPage_ng_container_0_ng_container_1_Template, 13, 13, "ng-container", 2)(2, MyEnquiryListPage_ng_container_0_ng_template_2_Template, 9, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r2 = ctx.ngIf;
    const noEnquiryTemplate_r4 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r2 == null ? null : vm_r2.enquiryList == null ? null : vm_r2.enquiryList.length)("ngIfElse", noEnquiryTemplate_r4);
  }
}
var MyEnquiryListPage = class _MyEnquiryListPage {
  constructor(myEnquiriesFacade) {
    this.myEnquiriesFacade = myEnquiriesFacade;
    this.enquiryList$ = this.myEnquiriesFacade.getEnquiryList$();
    this.pageMetaData$ = this.myEnquiriesFacade.getEnquiryListMetaData$();
    this.isLoading$ = this.myEnquiriesFacade.getIsLoading$();
  }
  static {
    this.\u0275fac = function MyEnquiryListPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiryListPage)(\u0275\u0275directiveInject(MyEnquiriesFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyEnquiryListPage, selectors: [["findqo-my-enquiry-list"]], standalone: false, decls: 4, vars: 11, consts: [["noEnquiryTemplate", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", "class", "position-fixed loading-progress", 4, "ngIf"], [1, "container"], [1, "heading-3-medium", "fg-general-5", "mt-4", "mb-1", "fw-600"], [1, "text-body-regular", "fg-general-5", "mb-3"], [3, "enquiry", 4, "ngFor", "ngForOf"], [1, "my-4"], [3, "pageMetaData"], ["mode", "indeterminate", 1, "position-fixed", "loading-progress"], [3, "enquiry"], [1, "container", "mw-350px", "d-flex", "justify-content-center", "align-items-center", "w-100", "h-100", "py-5"], [1, "mx-auto", "text-center"], ["ngSrc", "assets/images/enquiries/no-enquiries.webp", "alt", "No Enquiries", "fill", "", "fetchpriority", "high", 1, "empty-img", "position-relative"], [1, "d-block", "heading-3-medium", "fg-general-5"], [1, "d-block", "text-body-regular", "fg-general-4", "mt-1"]], template: function MyEnquiryListPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MyEnquiryListPage_ng_container_0_Template, 4, 2, "ng-container", 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction3(7, _c0, \u0275\u0275pipeBind1(1, 1, ctx.enquiryList$), \u0275\u0275pipeBind1(2, 3, ctx.isLoading$), \u0275\u0275pipeBind1(3, 5, ctx.pageMetaData$)));
      }
    }, dependencies: [NgForOf, NgIf, NgOptimizedImage, MyEnquiryItemComponent, PaginationComponent, MatProgressBar, AsyncPipe, TranslationsPipe], styles: ["\n\n.no-enquiry-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\n.empty-img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n}\n.mw-350px[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-enquiry-list.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiryListPage, [{
    type: Component,
    args: [{ selector: "findqo-my-enquiry-list", standalone: false, template: `<ng-container *ngIf="{enquiryList : enquiryList$ | async, isLoading:isLoading$|async, pageMetaData:pageMetaData$| async} as vm">
	<ng-container *ngIf="vm?.enquiryList?.length; else noEnquiryTemplate">
		<mat-progress-bar mode="indeterminate" class="position-fixed loading-progress" *ngIf="vm?.isLoading"></mat-progress-bar>

		<div class="container" [class.pe-none]="vm?.isLoading">
			<h3 class="heading-3-medium fg-general-5 mt-4 mb-1 fw-600">{{'n3538' | translations}}</h3>
			<p class="text-body-regular fg-general-5 mb-3">{{'n3747'| translations}}</p>

			<findqo-my-enquiry-item *ngFor="let item of vm?.enquiryList" [enquiry]="item"></findqo-my-enquiry-item>

			<div class="my-4">
				<findqo-pagination [pageMetaData]="pageMetaData$ | async"></findqo-pagination>
			</div>
		</div>
	</ng-container>

	<ng-template #noEnquiryTemplate>
		<div class="container mw-350px d-flex justify-content-center align-items-center w-100 h-100 py-5">
			<div class="mx-auto text-center">
				<img ngSrc="assets/images/enquiries/no-enquiries.webp" alt="No Enquiries" fill class="empty-img position-relative" fetchpriority="high" />

				<span class="d-block heading-3-medium fg-general-5">{{'n3573'| translations}}</span>

				<span class="d-block text-body-regular fg-general-4 mt-1">{{'n3574'| translations}}</span>
			</div>
		</div>
	</ng-template>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-enquiries/pages/my-enquiry-list/my-enquiry-list.page.scss */\n.no-enquiry-container {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\n.empty-img {\n  max-width: 200px;\n  max-height: 200px;\n}\n.mw-350px {\n  max-width: 350px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-enquiry-list.page.css.map */\n"] }]
  }], () => [{ type: MyEnquiriesFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyEnquiryListPage, { className: "MyEnquiryListPage", filePath: "apps/findqo-ireland/src/app/feature/my-enquiries/pages/my-enquiry-list/my-enquiry-list.page.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/my-enquiries/components/my-enquiry-item/my-enquiry-item.module.ts
var MyEnquiryItemModule = class _MyEnquiryItemModule {
  static {
    this.\u0275fac = function MyEnquiryItemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiryItemModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyEnquiryItemModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiryItemModule, [{
    type: NgModule,
    args: [{
      declarations: [MyEnquiryItemComponent],
      imports: [SharedModule, ButtonModule, MatDividerModule],
      exports: [MyEnquiryItemComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-enquiries/resolvers/my-enquiries-resolver.ts
var MyEnquiriesResolver = (route, state, router = inject(Router), adsApi = inject(AdsApi), myEnquiriesFacade = inject(MyEnquiriesFacade)) => {
  const PAGE = route.queryParams["page"] ? +route.queryParams["page"] : 1;
  return adsApi.getInquiryList({ page: PAGE, perPage: 20 }).pipe(catchError((response) => {
    if (response?.status === 400 || response?.status === 500) {
      router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
    }
    throw new Error(response?.message);
  }), tap((response) => {
    myEnquiriesFacade.setEnquiryList(response?.data);
    myEnquiriesFacade.setEnquiryListMetaData(response?.meta);
  }));
};

// apps/findqo-ireland/src/app/feature/my-enquiries/pages/my-enquiry-list/my-enquiry-list-routing.module.ts
var routes = [
  {
    path: "",
    component: MyEnquiryListPage,
    resolve: { enquiryList: MyEnquiriesResolver },
    runGuardsAndResolvers: "paramsOrQueryParamsChange"
  }
];
var MyEnquiryListPageRoutingModule = class _MyEnquiryListPageRoutingModule {
  static {
    this.\u0275fac = function MyEnquiryListPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiryListPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyEnquiryListPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiryListPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-enquiries/pages/my-enquiry-list/my-enquiry-list.page.module.ts
var MyEnquiryListPageModule = class _MyEnquiryListPageModule {
  static {
    this.\u0275fac = function MyEnquiryListPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiryListPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyEnquiryListPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MyEnquiryListPageRoutingModule, MyEnquiryItemModule, PaginationModule, MatProgressBarModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiryListPageModule, [{
    type: NgModule,
    args: [{
      declarations: [MyEnquiryListPage],
      imports: [SharedModule, MyEnquiryListPageRoutingModule, MyEnquiryItemModule, PaginationModule, MatProgressBarModule]
    }]
  }], null, null);
})();
export {
  MyEnquiryListPageModule
};
//# sourceMappingURL=chunk-QYQKK4FF.js.map
