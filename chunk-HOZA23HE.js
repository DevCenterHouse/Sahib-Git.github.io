import {
  AdFeaturedItemComponent,
  AdFeaturedItemModule
} from "./chunk-DJC3A7OB.js";
import {
  GoogleAdModule
} from "./chunk-GV7UKQB5.js";
import {
  GoogleAdComponent
} from "./chunk-OA73AKNS.js";
import {
  AdListSkeletonLoadingModule
} from "./chunk-OQEO7NJG.js";
import {
  EmptyAdListModule
} from "./chunk-ZCYKWHRI.js";
import {
  AdListSkeletonLoadingComponent,
  RichTextPipe
} from "./chunk-L6WIR66L.js";
import {
  EmptyAdListComponent
} from "./chunk-MNKMPSFA.js";
import {
  SsoPostLoginService
} from "./chunk-AH5EFBPI.js";
import {
  AdItemV2Module
} from "./chunk-GGIORZLS.js";
import "./chunk-GCFYHD3C.js";
import {
  AdItemV2Component
} from "./chunk-DYDGEZIA.js";
import "./chunk-235SP5Y4.js";
import "./chunk-744QYGBS.js";
import "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import {
  SeoService
} from "./chunk-5JBKTQLQ.js";
import "./chunk-VGENAY26.js";
import {
  CanonicalService
} from "./chunk-ZM4NPOC4.js";
import {
  CountyContentFacade
} from "./chunk-YVUZMQUE.js";
import {
  PaginationComponent,
  PaginationModule
} from "./chunk-3PMSSHKP.js";
import {
  AdsFacade
} from "./chunk-UDKL55SE.js";
import {
  FindqoAdModule
} from "./chunk-UVI4O6OH.js";
import {
  FindqoAdComponent
} from "./chunk-OZKRZICA.js";
import "./chunk-NHXE4UA3.js";
import "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import {
  IconService
} from "./chunk-DYYJHWVN.js";
import {
  StructuredDataService
} from "./chunk-5EVZ7EBP.js";
import "./chunk-5DPLTTSV.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import {
  BreakpointObserverService
} from "./chunk-QNQ2AX2B.js";
import {
  FiltersService,
  FiltersState
} from "./chunk-C3BHYCVX.js";
import "./chunk-5CLAA2MT.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import "./chunk-VZJAPMN6.js";
import {
  AdListKind,
  AuthService,
  FilterType,
  MatDivider,
  MatDividerModule,
  PostLoginAction,
  RouteDataType,
  RouteService,
  Router,
  RouterModule,
  SharedModule,
  ViewportService,
  environment
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Injectable,
  NgModule,
  PLATFORM_ID,
  __spreadProps,
  __spreadValues,
  of,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ads/pages/ad-list/ad-list.page.ts
var _c0 = (a0, a1) => ({ ads: a0, countyContent: a1 });
var _forTrack0 = ($index, $item) => $item.id;
function AdListPage_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function AdListPage_Conditional_0_ng_template_1_findqo_empty_ad_list_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-empty-ad-list", 8);
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("location", ctx_r1.params == null ? null : ctx_r1.params["location"])("section", ctx_r1.params == null ? null : ctx_r1.params["section"])("ads", vm_r1.ads.adList);
  }
}
function AdListPage_Conditional_0_ng_template_1_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-item-v2", 9);
  }
  if (rf & 2) {
    const ad_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ad", ad_r3)("section", ctx_r1.currentSection);
  }
}
function AdListPage_Conditional_0_ng_template_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-featured-item", 10);
  }
  if (rf & 2) {
    const ad_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ad", ad_r3)("section", ctx_r1.currentSection);
  }
}
function AdListPage_Conditional_0_ng_template_1_For_3_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "findqo-google-ad");
    \u0275\u0275elementEnd();
  }
}
function AdListPage_Conditional_0_ng_template_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "findqo-findqo-ad")(2, "mat-divider", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdListPage_Conditional_0_ng_template_1_For_3_Conditional_2_Conditional_3_Template, 2, 0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isProduction ? 3 : -1);
  }
}
function AdListPage_Conditional_0_ng_template_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "findqo-google-ad");
    \u0275\u0275elementEnd();
  }
}
function AdListPage_Conditional_0_ng_template_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdListPage_Conditional_0_ng_template_1_For_3_Conditional_0_Template, 1, 2, "findqo-ad-item-v2", 9)(1, AdListPage_Conditional_0_ng_template_1_For_3_Conditional_1_Template, 1, 2, "findqo-ad-featured-item", 10)(2, AdListPage_Conditional_0_ng_template_1_For_3_Conditional_2_Template, 4, 1)(3, AdListPage_Conditional_0_ng_template_1_For_3_Conditional_3_Template, 2, 0, "div", 11);
  }
  if (rf & 2) {
    const ad_r3 = ctx.$implicit;
    const \u0275$index_14_r4 = ctx.$index;
    const vm_r1 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ad_r3.isFeatured === "0" ? 0 : ad_r3.isFeatured === "1" ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isBrowser && ((\u0275$index_14_r4 + 1) % 5 === 0 || \u0275$index_14_r4 === vm_r1.ads.adList.length - 1 && (\u0275$index_14_r4 + 1) % 5 !== 0) && (\u0275$index_14_r4 + 1) % 10 !== 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isProduction && ctx_r1.isBrowser && (\u0275$index_14_r4 + 1) % 10 === 0 ? 3 : -1);
  }
}
function AdListPage_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdListPage_Conditional_0_ng_template_1_findqo_empty_ad_list_0_Template, 1, 3, "findqo-empty-ad-list", 4);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275repeaterCreate(2, AdListPage_Conditional_0_ng_template_1_For_3_Template, 4, 3, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "findqo-pagination", 7);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", vm_r1.ads.isEmptyList || !vm_r1.ads.adList.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(vm_r1.ads.adList);
    \u0275\u0275advance(3);
    \u0275\u0275property("pageMetaData", \u0275\u0275pipeBind1(6, 2, ctx_r1.pageMetaData$));
  }
}
function AdListPage_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
    \u0275\u0275pipe(1, "richText");
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, vm_r1.countyContent.description), \u0275\u0275sanitizeHtml);
  }
}
function AdListPage_Conditional_0_ng_template_4_findqo_ad_list_skeleton_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-list-skeleton-loading");
  }
}
function AdListPage_Conditional_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdListPage_Conditional_0_ng_template_4_findqo_ad_list_skeleton_loading_0_Template, 1, 0, "findqo-ad-list-skeleton-loading", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.adListSkeletonArray);
  }
}
function AdListPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdListPage_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 2)(1, AdListPage_Conditional_0_ng_template_1_Template, 7, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, AdListPage_Conditional_0_Conditional_3_Template, 2, 3, "div", 3)(4, AdListPage_Conditional_0_ng_template_4_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const vm_r1 = ctx;
    const adListTemplate_r5 = \u0275\u0275reference(2);
    const adListSkeletonLoaderTemplate_r6 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", vm_r1.ads.isLoading ? adListSkeletonLoaderTemplate_r6 : adListTemplate_r5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((vm_r1.countyContent == null ? null : vm_r1.countyContent.description) ? 3 : -1);
  }
}
var AdListPage = class _AdListPage {
  constructor(platformId, adsFacade, viewport, icon, bpoService, destroyService, sharedAdsFacade, structuredDataService, canonicalService, router, seoService, routeService, filtersService, filterState, countyContentFacade, ssoPostLoginService, authService) {
    this.platformId = platformId;
    this.adsFacade = adsFacade;
    this.viewport = viewport;
    this.icon = icon;
    this.bpoService = bpoService;
    this.destroyService = destroyService;
    this.sharedAdsFacade = sharedAdsFacade;
    this.structuredDataService = structuredDataService;
    this.canonicalService = canonicalService;
    this.router = router;
    this.seoService = seoService;
    this.routeService = routeService;
    this.filtersService = filtersService;
    this.filterState = filterState;
    this.countyContentFacade = countyContentFacade;
    this.ssoPostLoginService = ssoPostLoginService;
    this.authService = authService;
    this.adsVm$ = this.sharedAdsFacade.getAdsVm$();
    this.pageMetaData$ = this.sharedAdsFacade.getPageMetaData$();
    this.countyContent$ = this.countyContentFacade.countyContent$;
    this.adListSkeletonArray = Array(5);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.isProduction = environment.production;
  }
  getCurrentUrlWithoutParams() {
    return this.router.url.split("?")[0];
  }
  handleRouteDataChange() {
    this.routeService.routeData$.pipe(takeUntil(this.destroyService), switchMap((routeData) => {
      this.canonicalService.updateCanonicalUrlForAdRoutes(this.router.url);
      return this.processRouteData(routeData);
    })).subscribe((adsResponse) => this.handleAdsResponse(adsResponse));
  }
  processRouteData(data) {
    const params = this.extractParams(data);
    this.currentSection = params[FilterType.SECTION];
    this.params = this.createAdsParams(params);
    this.filterState.setSelectedFilterCount(this.params);
    return this.adsFacade.fetchAds(this.params);
  }
  extractParams(pageData) {
    let locationParams = [pageData[FilterType.LOCATION_REFERENCE]];
    if (pageData[FilterType.LOCATION_REFERENCE] !== pageData["pageData"][FilterType.LOCATION_REFERENCE]) {
      locationParams = [...locationParams, pageData["pageData"][FilterType.LOCATION_REFERENCE]];
    }
    const LOCATIONS = pageData["pageData"][FilterType.LOCATION_REFERENCE] === "ireland" ? void 0 : locationParams.join(",");
    this.filtersService.updateLocationField([LOCATIONS]);
    return __spreadProps(__spreadValues({}, pageData["pageData"]), {
      location: LOCATIONS
    });
  }
  createAdsParams(params) {
    return __spreadProps(__spreadValues({}, params), {
      perPage: "10"
    });
  }
  handleAdsResponse(adsResponse) {
    const seo = adsResponse.meta.seo;
    const ads = adsResponse.kind === AdListKind.LIST ? adsResponse.data : [];
    const location = this.params["location"] || "ireland";
    this.countyContentFacade.loadCountyContent(location);
    this.adsFacade.updateAdsState(adsResponse);
    this.structuredDataService.generateRealEstateList(ads, seo, this.getCurrentUrlWithoutParams());
    this.canonicalService.createCannonicaUrl(this.getCurrentUrlWithoutParams());
    if (seo) {
      this.seoService.setSeo({
        title: seo.titleWithCount,
        description: seo.description,
        includeTitleSuffix: true
      });
    }
    if (isPlatformBrowser(this.platformId)) {
      this.ssoPostLoginService.handlePostLoginWithAction({
        [PostLoginAction.ADD_TO_FAVORITE]: this.addToFav.bind(this)
      });
    }
  }
  addToFav(ad) {
    if (this.authService.user()?.id !== ad.seller.id) {
      ad = __spreadProps(__spreadValues({}, ad), {
        isFavorite: "1"
      });
      this.sharedAdsFacade.addFavouriteAdFromList(ad);
    }
  }
  ngOnInit() {
    this.handleRouteDataChange();
  }
  ngOnDestroy() {
    this.structuredDataService.destroyScript();
    this.canonicalService.removeCanonicalLinkElement();
  }
  static {
    this.\u0275fac = function AdListPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListPage)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(AdsFacade), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(BreakpointObserverService), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(StructuredDataService), \u0275\u0275directiveInject(CanonicalService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(RouteService), \u0275\u0275directiveInject(FiltersService), \u0275\u0275directiveInject(FiltersState), \u0275\u0275directiveInject(CountyContentFacade), \u0275\u0275directiveInject(SsoPostLoginService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdListPage, selectors: [["ng-component"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 3, vars: 8, consts: [["adListTemplate", ""], ["adListSkeletonLoaderTemplate", ""], [3, "ngTemplateOutlet"], [1, "p-4", "bg-general-1", "mb-4", 3, "innerHTML"], [3, "location", "section", "ads", 4, "ngIf"], [1, "advertisement-element"], [1, "my-4"], [3, "pageMetaData"], [3, "location", "section", "ads"], ["indqo-ad-item-v2", "", 3, "ad", "section"], [3, "ad", "section"], [1, "m-3"], [1, "d-lg-none", "text-center", "mb-sm-4"], [1, "my-3", "on-desktop", "d-sm-none"], [1, "m-3", "d-none", "d-lg-block"], [4, "ngFor", "ngForOf"]], template: function AdListPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdListPage_Conditional_0_Template, 6, 2);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pureFunction2(5, _c0, \u0275\u0275pipeBind1(1, 1, ctx.adsVm$), \u0275\u0275pipeBind1(2, 3, ctx.countyContent$))) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, MatDivider, AdListSkeletonLoadingComponent, EmptyAdListComponent, AdItemV2Component, AdFeaturedItemComponent, GoogleAdComponent, FindqoAdComponent, PaginationComponent, AsyncPipe, RichTextPipe], styles: ["\n\n.ad-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: auto;\n}\n.advertisement-element[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n@media (min-width: 576px) {\n  .advertisement-element[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-list.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListPage, [{
    type: Component,
    args: [{ providers: [DestroyService], standalone: false, template: `@if (
	{
		ads: adsVm$ | async,
		countyContent: countyContent$ | async
	};
	as vm
) {
	<ng-template [ngTemplateOutlet]="vm.ads.isLoading ? adListSkeletonLoaderTemplate : adListTemplate"></ng-template>

	<!-- Ad list -->
	<ng-template #adListTemplate>
		<findqo-empty-ad-list
			*ngIf="vm.ads.isEmptyList || !vm.ads.adList.length"
			[location]="params?.['location']"
			[section]="params?.['section']"
			[ads]="vm.ads.adList"
		></findqo-empty-ad-list>

		<div class="advertisement-element">
			@for (ad of vm.ads.adList; track ad.id; let index = $index) {
				<!-- Display featured Ad or none featured Ad -->
				@if (ad.isFeatured === '0') {
					<findqo-ad-item-v2 indqo-ad-item-v2 [ad]="ad" [section]="currentSection"></findqo-ad-item-v2>
				} @else if (ad.isFeatured === '1') {
					<findqo-ad-featured-item [ad]="ad" [section]="currentSection"></findqo-ad-featured-item>
				}

				<!-- Display Google Ad after every 5th item or at the end if the list has fewer than 5 items -->
				<!-- On Mobile view show findqo ad banner after every 5 ads and google ad banner after every 10 ads -->
				@if (isBrowser && ((index + 1) % 5 === 0 || (index === vm.ads.adList.length - 1 && (index + 1) % 5 !== 0)) && (index + 1) % 10 !== 0) {
					<div class="d-lg-none text-center mb-sm-4">
						<findqo-findqo-ad></findqo-findqo-ad>
						<mat-divider class="my-3 on-desktop d-sm-none"></mat-divider>
					</div>

					<!-- On Desktop view show google ad after every 5 ads as well -->
					@if (isProduction) {
						<div class="m-3 d-none d-lg-block">
							<findqo-google-ad></findqo-google-ad>
						</div>
					}
				}
				<!-- Show google ad after every 10 ads -->
				@if (isProduction && isBrowser && (index + 1) % 10 === 0) {
					<div class="m-3">
						<findqo-google-ad></findqo-google-ad>
					</div>
				}
			}
		</div>

		<div class="my-4">
			<findqo-pagination [pageMetaData]="pageMetaData$ | async"></findqo-pagination>
		</div>
	</ng-template>

	@if (vm.countyContent?.description) {
		<div class="p-4 bg-general-1 mb-4" [innerHTML]="vm.countyContent.description | richText"></div>
	}

	<!-- Skeleton loader -->
	<ng-template #adListSkeletonLoaderTemplate>
		<findqo-ad-list-skeleton-loading *ngFor="let i of adListSkeletonArray"></findqo-ad-list-skeleton-loading>
	</ng-template>
}
`, styles: ["/* apps/findqo-ireland/src/app/feature/ads/pages/ad-list/ad-list.page.scss */\n.ad-container {\n  height: 100vh;\n  overflow: auto;\n}\n.advertisement-element {\n  padding: 0 16px;\n}\n@media (min-width: 576px) {\n  .advertisement-element {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-list.page.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: AdsFacade }, { type: ViewportService }, { type: IconService }, { type: BreakpointObserverService }, { type: DestroyService }, { type: SharedAdsFacade }, { type: StructuredDataService }, { type: CanonicalService }, { type: Router }, { type: SeoService }, { type: RouteService }, { type: FiltersService }, { type: FiltersState }, { type: CountyContentFacade }, { type: SsoPostLoginService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdListPage, { className: "AdListPage", filePath: "apps/findqo-ireland/src/app/feature/ads/pages/ad-list/ad-list.page.ts", lineNumber: 32 });
})();

// apps/findqo-ireland/src/app/feature/ads/resolvers/ad-list.resolver.ts
var AdListResolver = class _AdListResolver {
  resolve(route, _state) {
    return of(__spreadValues(__spreadValues({}, route?.params), route?.queryParams));
  }
  static {
    this.\u0275fac = function AdListResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListResolver)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdListResolver, factory: _AdListResolver.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ads/pages/ad-list/ad-list-routing.module.ts
var routes = [
  {
    path: "",
    component: AdListPage,
    resolve: { pageData: AdListResolver },
    runGuardsAndResolvers: "always",
    data: {
      [RouteDataType.IS_SECTION_NAV_VISIBLE]: true
    }
  }
];
var AdListPageRoutingModule = class _AdListPageRoutingModule {
  static {
    this.\u0275fac = function AdListPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdListPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ads/pages/ad-list/ad-list.module.ts
var AdListPageModule = class _AdListPageModule {
  static {
    this.\u0275fac = function AdListPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdListPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      AdListPageRoutingModule,
      SharedModule,
      MatDividerModule,
      AdListSkeletonLoadingModule,
      EmptyAdListModule,
      AdItemV2Module,
      AdFeaturedItemModule,
      GoogleAdModule,
      FindqoAdModule,
      MatProgressSpinnerModule,
      PaginationModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListPageModule, [{
    type: NgModule,
    args: [{
      declarations: [AdListPage],
      imports: [
        AdListPageRoutingModule,
        SharedModule,
        MatDividerModule,
        AdListSkeletonLoadingModule,
        EmptyAdListModule,
        AdItemV2Module,
        AdFeaturedItemModule,
        GoogleAdModule,
        FindqoAdModule,
        MatProgressSpinnerModule,
        PaginationModule,
        RichTextPipe
      ]
    }]
  }], null, null);
})();
export {
  AdListPageModule
};
//# sourceMappingURL=chunk-HOZA23HE.js.map
