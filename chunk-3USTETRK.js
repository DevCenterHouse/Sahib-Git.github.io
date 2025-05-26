import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-JSBFZMNA.js";
import {
  MatchingTenantItemComponent,
  MatchingTenantItemModule
} from "./chunk-7GXKAIQJ.js";
import {
  MatchingTenantApi,
  MatchingTenantsFacade,
  MatchingTenantsState
} from "./chunk-NLB2NH2A.js";
import "./chunk-MC2MM2OW.js";
import "./chunk-7NR4UKDC.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  CommonFacade,
  MatButton,
  Router,
  RouterModule,
  SharedModule,
  TenantContactedListPipe,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  catchError,
  inject,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list.page.ts
var _c0 = (a0) => ({ matchingTenantList: a0 });
function MyAdMatchingTenantListPage_ng_container_0_ng_template_16_Template(rf, ctx) {
}
function MyAdMatchingTenantListPage_ng_container_0_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementStart(2, "h3", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", "assets/images/place-an-ad/no-tenant-matches.webp");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "n3654"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "n3674"));
  }
}
function MyAdMatchingTenantListPage_ng_container_0_ng_template_19_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "findqo-matching-tenant-item", 18);
    \u0275\u0275listener("openTenant", function MyAdMatchingTenantListPage_ng_container_0_ng_template_19_div_0_div_1_Template_findqo_matching_tenant_item_openTenant_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onScheduleTenantView($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("index", i_r5 + 1)("tenantData", item_r4)("fromMyAdsPage", true)("isDisableScheduleBtn", ctx_r1.isDisableSchedule);
  }
}
function MyAdMatchingTenantListPage_ng_container_0_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MyAdMatchingTenantListPage_ng_container_0_ng_template_19_div_0_div_1_Template, 2, 4, "div", 16);
    \u0275\u0275pipe(2, "tenantContactedList");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r6 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(2, 1, vm_r6.matchingTenantList, ctx_r1.sortContactedList));
  }
}
function MyAdMatchingTenantListPage_ng_container_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAdMatchingTenantListPage_ng_container_0_ng_template_19_div_0_Template, 3, 4, "div", 14);
  }
  if (rf & 2) {
    const vm_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngIf", (vm_r6 == null ? null : vm_r6.matchingTenantList == null ? null : vm_r6.matchingTenantList.length) > 0);
  }
}
function MyAdMatchingTenantListPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function MyAdMatchingTenantListPage_ng_container_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBack());
    });
    \u0275\u0275elementStart(3, "mat-icon", 5);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Back to my ads");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-slide-toggle", 8);
    \u0275\u0275listener("click", function MyAdMatchingTenantListPage_ng_container_0_Template_mat_slide_toggle_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSlideToggle());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, MyAdMatchingTenantListPage_ng_container_0_ng_template_16_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MyAdMatchingTenantListPage_ng_container_0_ng_template_17_Template, 8, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, MyAdMatchingTenantListPage_ng_container_0_ng_template_19_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r6 = ctx.ngIf;
    const noMatchingTenants_r7 = \u0275\u0275reference(18);
    const matchingTenantsTemplate_r8 = \u0275\u0275reference(20);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "n3671"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "n3672"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", (vm_r6 == null ? null : vm_r6.matchingTenantList == null ? null : vm_r6.matchingTenantList.length) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "n3673"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", (vm_r6 == null ? null : vm_r6.matchingTenantList == null ? null : vm_r6.matchingTenantList.length) > 0 ? matchingTenantsTemplate_r8 : noMatchingTenants_r7);
  }
}
var MyAdMatchingTenantListPage = class _MyAdMatchingTenantListPage {
  constructor(myAdMatchingTenantstFacade, route, commonFacade, router) {
    this.myAdMatchingTenantstFacade = myAdMatchingTenantstFacade;
    this.route = route;
    this.commonFacade = commonFacade;
    this.router = router;
    this.appRoute = APP_ROUTE;
    this.sortContactedList = false;
    this.isDisableSchedule = false;
    this.matchingTenantList$ = this.myAdMatchingTenantstFacade.matchingTenantsList$;
  }
  handleBack() {
    const URL = this.router.url.includes("dashboard") ? APP_ROUTE.agentHub.dashboard : APP_ROUTE.myAdList;
    this.router.navigate([URL]);
  }
  onScheduleTenantView(tenantData) {
    this.isDisableSchedule = true;
    this.commonFacade.loadAvailiblitySlots();
    this.myAdMatchingTenantstFacade.getMatchingTenantDetail(this.adId, tenantData?.id).pipe(catchError((error) => {
      this.isDisableSchedule = false;
      throw new Error(error);
    })).subscribe((res) => {
      this.isDisableSchedule = false;
      this.myAdMatchingTenantstFacade.openTenantViewDateDialog(res?.data, this.adId);
    });
  }
  getAdId() {
    this.route.params.subscribe((params) => {
      this.adId = params["adId"];
    });
  }
  onSlideToggle() {
    this.sortContactedList = !this.sortContactedList;
  }
  ngOnInit() {
    this.getAdId();
  }
  static {
    this.\u0275fac = function MyAdMatchingTenantListPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdMatchingTenantListPage)(\u0275\u0275directiveInject(MatchingTenantsFacade), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdMatchingTenantListPage, selectors: [["findqo-my-ad-matching-tenant-list"]], standalone: false, decls: 2, vars: 5, consts: [["noMatchingTenants", ""], ["matchingTenantsTemplate", ""], [4, "ngIf"], [1, "container", "h-100", "d-flex", "flex-column", "align-items-start", "pb-4"], ["mat-button", "", 1, "text-body-regular", "fg-general-4", "d-block", "my-4", "px-0", 3, "click"], [1, "material-icons", "back-icon", "me-1"], [1, "fg-general-5", "mb-1", "heading-3"], [1, "fg-general-4", "text-body-regular"], ["color", "primary", 1, "text-body-medium", "fg-general-4", "my-4", 3, "click", "disabled"], [3, "ngTemplateOutlet"], [1, "text-center", "mx-auto", "py-5", "my-auto"], ["width", "200", "height", "200", "alt", "No matches found", 1, "d-block", "mx-auto", "mt-4", 3, "ngSrc"], [1, "heading-3-medium", "fg-general-5", "my-1"], [1, "text-body-regular", "fg-general-4"], ["class", "row justify-content-start gap-3", 4, "ngIf"], [1, "row", "justify-content-start", "gap-3"], ["class", "col-sm match-tenant", 4, "ngFor", "ngForOf"], [1, "col-sm", "match-tenant"], [3, "openTenant", "index", "tenantData", "fromMyAdsPage", "isDisableScheduleBtn"]], template: function MyAdMatchingTenantListPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MyAdMatchingTenantListPage_ng_container_0_Template, 21, 11, "ng-container", 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.matchingTenantList$)));
      }
    }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, MatButton, MatIcon, NgOptimizedImage, MatSlideToggle, MatchingTenantItemComponent, AsyncPipe, TranslationsPipe, TenantContactedListPipe], styles: ["\n\n.back-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n@media (min-width: 576px) {\n  .match-tenant[_ngcontent-%COMP%] {\n    max-width: 346px;\n    min-width: 310px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-matching-tenant-list.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdMatchingTenantListPage, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-matching-tenant-list", standalone: false, template: `<ng-container *ngIf="{matchingTenantList : matchingTenantList$ | async} as vm">
	<div class="container h-100 d-flex flex-column align-items-start pb-4">
		<button class="text-body-regular fg-general-4 d-block my-4 px-0" mat-button (click)="handleBack()">
			<mat-icon class="material-icons back-icon me-1">arrow_back</mat-icon>
			<span>Back to my ads</span>
		</button>

		<h3 class="fg-general-5 mb-1 heading-3">{{'n3671' |translations}}</h3>

		<p class="fg-general-4 text-body-regular">{{'n3672' | translations}}</p>

		<mat-slide-toggle class="text-body-medium fg-general-4 my-4" color="primary" [disabled]="vm?.matchingTenantList?.length=== 0" (click)="onSlideToggle()">
			{{'n3673' | translations}}
		</mat-slide-toggle>

		<ng-template [ngTemplateOutlet]="vm?.matchingTenantList?.length >0 ? matchingTenantsTemplate : noMatchingTenants"></ng-template>
	</div>

	<ng-template #noMatchingTenants>
		<div class="text-center mx-auto py-5 my-auto">
			<img [ngSrc]="'assets/images/place-an-ad/no-tenant-matches.webp'" width="200" height="200" alt="No matches found" class="d-block mx-auto mt-4" />

			<h3 class="heading-3-medium fg-general-5 my-1">{{ 'n3654' | translations }}</h3>

			<p class="text-body-regular fg-general-4">{{ 'n3674' | translations }}</p>
		</div>
	</ng-template>

	<ng-template #matchingTenantsTemplate>
		<div class="row justify-content-start gap-3" *ngIf="vm?.matchingTenantList?.length>0">
			<div class="col-sm match-tenant" *ngFor="let item of vm.matchingTenantList | tenantContactedList:sortContactedList; let i=index">
				<findqo-matching-tenant-item
					[index]="i+1"
					[tenantData]="item"
					(openTenant)="onScheduleTenantView($event)"
					[fromMyAdsPage]="true"
					[isDisableScheduleBtn]="isDisableSchedule"
				></findqo-matching-tenant-item>
			</div>
		</div>
	</ng-template>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list.page.scss */\n.back-icon {\n  display: inline-block !important;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n@media (min-width: 576px) {\n  .match-tenant {\n    max-width: 346px;\n    min-width: 310px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-matching-tenant-list.page.css.map */\n"] }]
  }], () => [{ type: MatchingTenantsFacade }, { type: ActivatedRoute }, { type: CommonFacade }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdMatchingTenantListPage, { className: "MyAdMatchingTenantListPage", filePath: "apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list.page.ts", lineNumber: 17 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/resolvers/my-ad-matching-tenant-list-resolver.ts
var MyAdMatchingTenanListResolver = (route, state, router = inject(Router), matchingTenantApi = inject(MatchingTenantApi), myAdTenantState = inject(MatchingTenantsState)) => {
  return matchingTenantApi.getMatchingTenantList(route.params["adId"]).pipe(catchError((error) => {
    router.navigate([APP_ROUTE.wildCard], { skipLocationChange: true });
    throw new Error(error.message);
  }), tap((tenantList) => myAdTenantState.setMatchingTenantsList(tenantList)));
};

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list-routing.module.ts
var routes = [
  {
    path: "",
    component: MyAdMatchingTenantListPage,
    resolve: { matchingTenantList: MyAdMatchingTenanListResolver }
  }
];
var MyAdMatchingTenantListPageRoutingModule = class _MyAdMatchingTenantListPageRoutingModule {
  static {
    this.\u0275fac = function MyAdMatchingTenantListPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdMatchingTenantListPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdMatchingTenantListPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdMatchingTenantListPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list.module.ts
var MyAdMatchingTenantListPageModule = class _MyAdMatchingTenantListPageModule {
  static {
    this.\u0275fac = function MyAdMatchingTenantListPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdMatchingTenantListPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdMatchingTenantListPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [MatchingTenantsState, MatchingTenantsFacade], imports: [SharedModule, MatSlideToggleModule, MyAdMatchingTenantListPageRoutingModule, MatchingTenantItemModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdMatchingTenantListPageModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdMatchingTenantListPage],
      imports: [SharedModule, MatSlideToggleModule, MyAdMatchingTenantListPageRoutingModule, MatchingTenantItemModule],
      providers: [MatchingTenantsState, MatchingTenantsFacade]
    }]
  }], null, null);
})();
export {
  MyAdMatchingTenantListPageModule
};
//# sourceMappingURL=chunk-3USTETRK.js.map
