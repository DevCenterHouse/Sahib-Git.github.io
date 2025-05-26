import {
  OtherAdListModule
} from "./chunk-LLUGBW5M.js";
import {
  AcceptInviteDialogComponent,
  AdvertiseAgentComponent,
  AdvertiseAgentModule,
  HomeFacade,
  UnableAcceptInviteDialogComponent
} from "./chunk-OUZSKFWK.js";
import "./chunk-5NSY5PGP.js";
import {
  HeaderNavItemsComponent,
  HeaderNavItemsModule
} from "./chunk-EL7AU6Y6.js";
import {
  HeaderAccountMenuComponent,
  HeaderAccountMenuModule,
  HeaderSidenavComponent,
  OFFCANVAS_HEADER_SIDENAV
} from "./chunk-FD6IYBQU.js";
import {
  StructuredDataService
} from "./chunk-5EVZ7EBP.js";
import "./chunk-5DPLTTSV.js";
import {
  LocationSearchComponent,
  LocationSearchModule
} from "./chunk-YBOP6AON.js";
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-UWPIFTDN.js";
import "./chunk-SPRKI5MA.js";
import {
  NgbOffcanvas
} from "./chunk-FFTGLPS5.js";
import "./chunk-ZRK6DKBO.js";
import "./chunk-THEU3YGZ.js";
import "./chunk-VPQFLCQL.js";
import "./chunk-2RKTIM73.js";
import "./chunk-GOW5C4RI.js";
import "./chunk-TDH4RB3F.js";
import {
  BedroomIconModule,
  PropertySizeIconModule,
  ShowerIconModule
} from "./chunk-UNCX2CTW.js";
import "./chunk-QNQ2AX2B.js";
import {
  FiltersService
} from "./chunk-C3BHYCVX.js";
import "./chunk-5CLAA2MT.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  CommonPlaceAdService
} from "./chunk-YMEB42LH.js";
import "./chunk-5J2JGDL5.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AisleType,
  AmplitudeService,
  AnchorDirective,
  AuthFacade,
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  ChevronIconComponent,
  ChevronIconModule,
  CommonFacade,
  CountyType,
  FilterType,
  FiltersApi,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  GetAislePipe,
  IntercomService,
  MatAnchor,
  MatButton,
  MatDialogModule,
  MatFormField,
  MatInputModule,
  MatOption,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RouteDataType,
  RouteService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SectionType,
  SectionsState,
  SharedModule,
  TranslationsPipe,
  ViewportService,
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
  NgOptimizedImage,
  NgTemplateOutlet,
  SlicePipe,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  BehaviorSubject,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  filter,
  map,
  setClassMetadata,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/home/services/home-tab.service.ts
var HomeTab;
(function(HomeTab2) {
  HomeTab2[HomeTab2["RENT"] = 0] = "RENT";
  HomeTab2[HomeTab2["SHARE"] = 1] = "SHARE";
  HomeTab2[HomeTab2["BUY"] = 2] = "BUY";
})(HomeTab || (HomeTab = {}));
var HomeTabService = class _HomeTabService {
  constructor() {
    this._selectedSection$ = new BehaviorSubject(SectionType.PROPERTIES_FOR_RENT);
  }
  get selectedSection$() {
    return this._selectedSection$.asObservable();
  }
  setSelectedSection(section) {
    this._selectedSection$.next(section);
  }
  static {
    this.\u0275fac = function HomeTabService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeTabService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeTabService, factory: _HomeTabService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeTabService, [{
    type: Injectable
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/filters-tabs/filters-tabs.facade.ts
var FiltersTabsFacade = class _FiltersTabsFacade {
  constructor(filtersApi, sectionsState) {
    this.filtersApi = filtersApi;
    this.sectionsState = sectionsState;
    this._countyList$ = new BehaviorSubject(void 0);
  }
  getCountyList$() {
    return this._countyList$.asObservable();
  }
  getRentAisleList$() {
    return this.sectionsState.sectionList$.pipe(filter((sectionList) => !!sectionList?.length), map(() => {
      const AISLE_LIST = this.sectionsState.getSection(SectionType.PROPERTIES_FOR_RENT).aisles;
      return AISLE_LIST.filter((aisle) => aisle.reference === AisleType.RENT_RESIDENTIAL || aisle.reference === AisleType.RENT_COMMERCIAL);
    }));
  }
  getBuyAisleList$() {
    return this.sectionsState.sectionList$.pipe(filter((sectionList) => !!sectionList?.length), map(() => this.sectionsState.getSection(SectionType.PROPERTIES_FOR_SALE)?.aisles || []));
  }
  loadCountyList() {
    this.filtersApi.getFilterValue("county").subscribe((countyList) => this._countyList$.next(countyList));
  }
  static {
    this.\u0275fac = function FiltersTabsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersTabsFacade)(\u0275\u0275inject(FiltersApi), \u0275\u0275inject(SectionsState));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FiltersTabsFacade, factory: _FiltersTabsFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersTabsFacade, [{
    type: Injectable
  }], () => [{ type: FiltersApi }, { type: SectionsState }], null);
})();

// apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/filters-tabs/filters-tabs.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ aisleList: a0, countyList: a1, rentAisleList: a2, buyAisleList: a3, recentSearches: a4 });
var _c1 = (a0) => ({ active: a0 });
function FiltersTabsComponent_ng_container_0_Conditional_14_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aisle_r2 = ctx.$implicit;
    \u0275\u0275property("value", aisle_r2.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, aisle_r2.translationKey));
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_14_mat_select_trigger_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-select-trigger");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", "Property type", " ");
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_14_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stand_r3 = ctx.$implicit;
    \u0275\u0275property("value", stand_r3.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, stand_r3.translationKey), " ");
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275element(1, "findqo-location-search", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "mat-form-field", 14)(5, "mat-select", 15);
    \u0275\u0275template(6, FiltersTabsComponent_ng_container_0_Conditional_14_mat_option_6_Template, 3, 4, "mat-option", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 13)(8, "mat-form-field", 14)(9, "mat-select", 17);
    \u0275\u0275template(10, FiltersTabsComponent_ng_container_0_Conditional_14_mat_select_trigger_10_Template, 2, 1, "mat-select-trigger", 1);
    \u0275\u0275elementStart(11, "mat-option", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FiltersTabsComponent_ng_container_0_Conditional_14_mat_option_13_Template, 3, 4, "mat-option", 16);
    \u0275\u0275pipe(14, "getAisle");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r4.rentForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Rent Residential");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vm_r4.rentAisleList);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", "Property type");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r4.rentFc["stand"] == null ? null : ctx_r4.rentFc["stand"].value) === "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("All");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_10_0 = \u0275\u0275pipeBind2(14, 7, vm_r4.aisleList, ctx_r4.rentFc["aisle"] == null ? null : ctx_r4.rentFc["aisle"].value)) == null ? null : tmp_10_0.stands);
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_15_mat_select_trigger_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-select-trigger");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", "Property type", " ");
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_15_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stand_r6 = ctx.$implicit;
    \u0275\u0275property("value", stand_r6.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, stand_r6.translationKey), " ");
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275element(1, "findqo-location-search", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "mat-form-field", 14)(5, "mat-select", 17);
    \u0275\u0275template(6, FiltersTabsComponent_ng_container_0_Conditional_15_mat_select_trigger_6_Template, 2, 1, "mat-select-trigger", 1);
    \u0275\u0275elementStart(7, "mat-option", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FiltersTabsComponent_ng_container_0_Conditional_15_mat_option_9_Template, 3, 4, "mat-option", 16);
    \u0275\u0275pipe(10, "getAisle");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r4.shareForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Property type");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r4.shareFc["stand"] == null ? null : ctx_r4.shareFc["stand"].value) === "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("All");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_8_0 = \u0275\u0275pipeBind2(10, 5, vm_r4.aisleList, ctx_r4.shareFc["aisle"] == null ? null : ctx_r4.shareFc["aisle"].value)) == null ? null : tmp_8_0.stands);
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_16_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aisle_r7 = ctx.$implicit;
    \u0275\u0275property("value", aisle_r7.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, aisle_r7.translationKey));
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_16_mat_select_trigger_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-select-trigger");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", "Property type", " ");
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_16_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stand_r8 = ctx.$implicit;
    \u0275\u0275property("value", stand_r8.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, stand_r8.translationKey), " ");
  }
}
function FiltersTabsComponent_ng_container_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275element(1, "findqo-location-search", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "mat-form-field", 14)(5, "mat-select", 15);
    \u0275\u0275template(6, FiltersTabsComponent_ng_container_0_Conditional_16_mat_option_6_Template, 3, 4, "mat-option", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 13)(8, "mat-form-field", 14)(9, "mat-select", 17);
    \u0275\u0275template(10, FiltersTabsComponent_ng_container_0_Conditional_16_mat_select_trigger_10_Template, 2, 1, "mat-select-trigger", 1);
    \u0275\u0275elementStart(11, "mat-option", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FiltersTabsComponent_ng_container_0_Conditional_16_mat_option_13_Template, 3, 4, "mat-option", 16);
    \u0275\u0275pipe(14, "getAisle");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r4.buyForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", "Residential");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vm_r4.buyAisleList);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", "Property type");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r4.buyFc["stand"] == null ? null : ctx_r4.buyFc["stand"].value) === "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("All");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_10_0 = \u0275\u0275pipeBind2(14, 7, vm_r4.aisleList, ctx_r4.buyFc["aisle"] == null ? null : ctx_r4.buyFc["aisle"].value)) == null ? null : tmp_10_0.stands);
  }
}
function FiltersTabsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "h1", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "button", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5)(9, "button", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "button", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, FiltersTabsComponent_ng_container_0_Conditional_14_Template, 15, 10, "form", 9)(15, FiltersTabsComponent_ng_container_0_Conditional_15_Template, 11, 8, "form", 9)(16, FiltersTabsComponent_ng_container_0_Conditional_16_Template, 15, 10, "form", 9);
    \u0275\u0275elementStart(17, "findqo-button", 10);
    \u0275\u0275listener("clicked", function FiltersTabsComponent_ng_container_0_Template_findqo_button_clicked_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onGotoAdList());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.headingTitle);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, ctx_r4.router.url === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", "Buy", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Rent", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", "Share", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.routeSection === "rent" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.routeSection === "share" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.routeSection === "sale" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("label", "Start Your Property Search");
  }
}
function FiltersTabsComponent_ng_template_6_Template(rf, ctx) {
}
var FiltersTabsComponent = class _FiltersTabsComponent {
  constructor(platformId, fb, commonFacade, filtersTabsFacade, router, filterService) {
    this.platformId = platformId;
    this.fb = fb;
    this.commonFacade = commonFacade;
    this.filtersTabsFacade = filtersTabsFacade;
    this.router = router;
    this.filterService = filterService;
    this.tabChange = new EventEmitter();
    this.aisleList$ = this.commonFacade.getAiseList$(SectionType.PROPERTIES_FOR_RENT);
    this.countyList$ = this.filtersTabsFacade.getCountyList$();
    this.rentAisleList$ = this.filtersTabsFacade.getRentAisleList$();
    this.buyAisleList$ = this.filtersTabsFacade.getBuyAisleList$();
    this.recentSearches$ = this.commonFacade.recentSearches$;
    this.selectedTab = HomeTab.RENT;
    this.headingTitle = "Properties to rent in Ireland";
    this.aisleType = AisleType;
  }
  set section(value) {
    const index = value === "sale" ? 2 : value === "rent" ? 0 : 1;
    this.initDeclarations();
    this.routeSection = value;
    this.onSectionTabChange(index);
  }
  get rentFc() {
    return this.rentForm.controls;
  }
  get shareFc() {
    return this.shareForm.controls;
  }
  get buyFc() {
    return this.buyForm.controls;
  }
  get locations() {
    return this.filterService.locations;
  }
  onGotoAdList() {
    const PARAMS = this.formMapper(this.selectedTab).value;
    const UNIQUES_LOCATIONS = [...new Set(this.locations.value.join(",").split(","))];
    const [FIRST_LOCATION, ...OTHER_LOCATIONS] = UNIQUES_LOCATIONS;
    const COMMANDS = [PARAMS[FilterType.SECTION], FIRST_LOCATION ? FIRST_LOCATION : CountyType.DEFAULT, PARAMS[FilterType.AISLE]];
    if (PARAMS[FilterType.STAND]) {
      COMMANDS.push(PARAMS[FilterType.STAND]);
    }
    this.router.navigate([...COMMANDS], { queryParams: OTHER_LOCATIONS.length ? { location: OTHER_LOCATIONS.join(",") } : {} });
  }
  onSectionTabChange(index) {
    this.aisleList$ = this.commonFacade.getAiseList$(index === HomeTab.BUY ? SectionType.PROPERTIES_FOR_SALE : SectionType.PROPERTIES_FOR_RENT);
    this.selectedTab = index;
    this.headingTitle = index === HomeTab.BUY ? "Search Properties for Sale in Ireland \u2013 Houses, Apartments, and Commercial Spaces" : index === HomeTab.RENT ? "Find Apartments, Houses, and Offices for Rent in Ireland" : "Affordable Shared Accommodations and Rooms for Rent in Ireland";
    this.tabChange.emit(index);
  }
  formMapper(tab) {
    const FORM_MAPPER = {
      [HomeTab.RENT]: this.rentForm,
      [HomeTab.SHARE]: this.shareForm,
      [HomeTab.BUY]: this.buyForm
    };
    return FORM_MAPPER[tab];
  }
  createRentForm() {
    this.rentForm = this.fb.group({
      [FilterType.SECTION]: [SectionType.PROPERTIES_FOR_RENT],
      [FilterType.AISLE]: [AisleType.RENT_RESIDENTIAL],
      [FilterType.STAND]: [""],
      [FilterType.LOCATION_REFERENCE]: [""]
    });
  }
  createShareForm() {
    this.shareForm = this.fb.group({
      [FilterType.SECTION]: [SectionType.PROPERTIES_FOR_RENT],
      [FilterType.AISLE]: [AisleType.SHARE_RESIDENTIAL],
      [FilterType.STAND]: [""],
      [FilterType.LOCATION_REFERENCE]: [""]
    });
  }
  createBuyForm() {
    this.buyForm = this.fb.group({
      [FilterType.SECTION]: [SectionType.PROPERTIES_FOR_SALE],
      [FilterType.AISLE]: [AisleType.SALE_RESIDENTIAL],
      [FilterType.STAND]: [""],
      [FilterType.LOCATION_REFERENCE]: [""]
    });
  }
  initDeclarations() {
    if (isPlatformBrowser(this.platformId)) {
      this.fetchRecentSearch();
    }
    this.createRentForm();
    this.createShareForm();
    this.createBuyForm();
  }
  fetchRecentSearch() {
    this.commonFacade.fetchRecentSearch();
  }
  static {
    this.\u0275fac = function FiltersTabsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersTabsComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(FiltersTabsFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FiltersService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiltersTabsComponent, selectors: [["findqo-filters-tabs"]], inputs: { section: "section" }, outputs: { tabChange: "tabChange" }, standalone: false, decls: 8, vars: 17, consts: [["matOptionTemplate", ""], [4, "ngIf"], [1, "container"], [1, "heading-2", "fg-basic-1", "mb-4", "text-center"], [1, "row", "align-items-center", "mb-4"], [1, "col", "px-2"], ["mat-flat-button", "", "routerLink", "/properties-for-sale", "routerLinkActive", "active", 1, "tab-button", "w-100", 3, "ngClass"], ["mat-flat-button", "", "routerLink", "/properties-for-rent", "routerLinkActive", "active", 1, "tab-button", "w-100"], ["mat-flat-button", "", "routerLink", "/properties-for-sharing", "routerLinkActive", "active", 1, "tab-button", "w-100"], [3, "formGroup"], ["btnClass", "w-100 rounded-pill", 1, "submit", "d-block", "mt-4", 3, "clicked", "label"], ["containerClass", "home-page"], [1, "row", "justify-content-center", "gap-3", "mt-3"], [1, "col-md"], ["appearance", "outline", 1, "no-subscript"], ["formControlName", "aisle", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "stand", 3, "placeholder"], ["value", ""], [3, "value"]], template: function FiltersTabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FiltersTabsComponent_ng_container_0_Template, 18, 11, "ng-container", 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275template(6, FiltersTabsComponent_ng_template_6_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction5(11, _c0, \u0275\u0275pipeBind1(1, 1, ctx.aisleList$), \u0275\u0275pipeBind1(2, 3, ctx.countyList$), \u0275\u0275pipeBind1(3, 5, ctx.rentAisleList$), \u0275\u0275pipeBind1(4, 7, ctx.buyAisleList$), \u0275\u0275pipeBind1(5, 9, ctx.recentSearches$)));
      }
    }, dependencies: [RouterLink, RouterLinkActive, NgClass, NgForOf, NgIf, MatButton, MatFormField, MatSelect, MatSelectTrigger, MatOption, ButtonComponent, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LocationSearchComponent, AsyncPipe, TranslationsPipe, GetAislePipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  background: var(--basic-1);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 500px !important;\n}\n.tab-button[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border-bottom: 2px solid transparent;\n  color: rgba(255, 255, 255, 0.7647058824) !important;\n  height: 48px !important;\n  border-radius: 0 !important;\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--basic-1);\n  color: var(--basic-1) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-tabs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersTabsComponent, [{
    type: Component,
    args: [{ selector: "findqo-filters-tabs", standalone: false, template: `<ng-container
	*ngIf="{
		aisleList: aisleList$ | async,
		countyList: countyList$ | async,
		rentAisleList: rentAisleList$ | async,
		buyAisleList: buyAisleList$ | async,
		recentSearches: recentSearches$ | async
	} as vm"
>
	<div class="container">
		<h1 class="heading-2 fg-basic-1 mb-4 text-center">{{ headingTitle }}</h1>

		<div class="row align-items-center mb-4">
			<div class="col px-2">
				<button class="tab-button w-100" mat-flat-button routerLink="/properties-for-sale" routerLinkActive="active" [ngClass]="{ active: router.url === '/' }">
					{{ 'Buy' }}
				</button>
			</div>

			<div class="col px-2">
				<button class="tab-button w-100" mat-flat-button routerLink="/properties-for-rent" routerLinkActive="active">
					{{ 'Rent' }}
				</button>
			</div>

			<div class="col px-2">
				<button class="tab-button w-100" mat-flat-button routerLink="/properties-for-sharing" routerLinkActive="active">
					{{ 'Share' }}
				</button>
			</div>
		</div>

		@if (routeSection === 'rent') {
		<form [formGroup]="rentForm">
			<findqo-location-search containerClass="home-page"></findqo-location-search>

			<div class="row justify-content-center gap-3 mt-3">
				<div class="col-md">
					<!-- Residential -->
					<mat-form-field class="no-subscript" appearance="outline">
						<mat-select formControlName="aisle" [placeholder]="'Rent Residential'">
							<mat-option *ngFor="let aisle of vm.rentAisleList" [value]="aisle.reference">{{ aisle.translationKey | translations }}</mat-option>
						</mat-select>
					</mat-form-field>
				</div>

				<div class="col-md">
					<!-- Property Type -->
					<mat-form-field class="no-subscript" appearance="outline">
						<mat-select formControlName="stand" [placeholder]="'Property type'">
							<mat-select-trigger *ngIf="rentFc['stand']?.value === ''">
								{{ 'Property type' }}
							</mat-select-trigger>

							<mat-option value="">{{ 'All' }}</mat-option>
							<mat-option *ngFor="let stand of (vm.aisleList | getAisle : rentFc['aisle']?.value)?.stands" [value]="stand.reference">
								{{ stand.translationKey | translations }}
							</mat-option>
						</mat-select>
					</mat-form-field>
				</div>
			</div>
		</form>
		} @if (routeSection === 'share') {
		<form [formGroup]="shareForm">
			<findqo-location-search containerClass="home-page"></findqo-location-search>

			<div class="row justify-content-center gap-3 mt-3">
				<div class="col-md">
					<!-- Property Type -->
					<mat-form-field class="no-subscript" appearance="outline">
						<mat-select formControlName="stand" [placeholder]="'Property type'">
							<mat-select-trigger *ngIf="shareFc['stand']?.value === ''">
								{{ 'Property type' }}
							</mat-select-trigger>

							<mat-option value="">{{ 'All' }}</mat-option>
							<mat-option *ngFor="let stand of (vm.aisleList | getAisle : shareFc['aisle']?.value)?.stands" [value]="stand.reference">
								{{ stand.translationKey | translations }}
							</mat-option>
						</mat-select>
					</mat-form-field>
				</div>
			</div>
		</form>
		} @if (routeSection === 'sale') {
		<form [formGroup]="buyForm">
			<findqo-location-search containerClass="home-page"></findqo-location-search>

			<div class="row justify-content-center gap-3 mt-3">
				<div class="col-md">
					<!-- Aisle type -->
					<mat-form-field class="no-subscript" appearance="outline">
						<mat-select formControlName="aisle" [placeholder]="'Residential'">
							<mat-option *ngFor="let aisle of vm.buyAisleList" [value]="aisle.reference">{{ aisle.translationKey | translations }}</mat-option>
						</mat-select>
					</mat-form-field>
				</div>

				<div class="col-md">
					<!-- Property Type -->
					<mat-form-field class="no-subscript" appearance="outline">
						<mat-select formControlName="stand" [placeholder]="'Property type'">
							<mat-select-trigger *ngIf="buyFc['stand']?.value === ''">
								{{ 'Property type' }}
							</mat-select-trigger>

							<mat-option value="">{{ 'All' }}</mat-option>
							<mat-option *ngFor="let stand of (vm.aisleList | getAisle : buyFc['aisle']?.value)?.stands" [value]="stand.reference">
								{{ stand.translationKey | translations }}
							</mat-option>
						</mat-select>
					</mat-form-field>
				</div>
			</div>
		</form>
		}

		<!-- Submit -->
		<findqo-button class="submit d-block mt-4" btnClass="w-100 rounded-pill" [label]="'Start Your Property Search'" (clicked)="onGotoAdList()"></findqo-button>
	</div>
</ng-container>

<ng-template #matOptionTemplate></ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/filters-tabs/filters-tabs.component.scss */\nmat-form-field {\n  background: var(--basic-1);\n}\n.container {\n  max-width: 500px !important;\n}\n.tab-button {\n  background-color: transparent !important;\n  border-bottom: 2px solid transparent;\n  color: rgba(255, 255, 255, 0.7647058824) !important;\n  height: 48px !important;\n  border-radius: 0 !important;\n}\n.tab-button.active {\n  border-bottom: 2px solid var(--basic-1);\n  color: var(--basic-1) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-tabs.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: FormBuilder }, { type: CommonFacade }, { type: FiltersTabsFacade }, { type: Router }, { type: FiltersService }], { tabChange: [{
    type: Output
  }], section: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiltersTabsComponent, { className: "FiltersTabsComponent", filePath: "apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/filters-tabs/filters-tabs.component.ts", lineNumber: 17 });
})();

// apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/home-banner-v2.component.ts
function HomeBannerv2Component_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "findqo-button", 20);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 3, "n4075"))("btnType", ctx_r1.buttonType.FILLED)("routerLink", "/" + ctx_r1.appRoute.agentHub.dashboard);
  }
}
function HomeBannerv2Component_findqo_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 21);
    \u0275\u0275listener("clicked", function HomeBannerv2Component_findqo_button_22_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPlaceAd());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", "Place FREE Ad")("btnType", ctx_r1.buttonType.FILLED);
  }
}
function HomeBannerv2Component_ng_template_24_Template(rf, ctx) {
}
function HomeBannerv2Component_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 22);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function HomeBannerv2Component_ng_template_27_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("label", \u0275\u0275pipeBind1(1, 2, "n11"));
  }
}
function HomeBannerv2Component_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-header-account-menu", 23);
  }
}
var HomeBannerv2Component = class _HomeBannerv2Component {
  constructor(platformId, authService, commonFacade, homeTabService, routeService, intercomService, ngbOffCanvas, viewport, amplitude, commonPlaceAdService) {
    this.platformId = platformId;
    this.authService = authService;
    this.commonFacade = commonFacade;
    this.homeTabService = homeTabService;
    this.routeService = routeService;
    this.intercomService = intercomService;
    this.ngbOffCanvas = ngbOffCanvas;
    this.viewport = viewport;
    this.amplitude = amplitude;
    this.commonPlaceAdService = commonPlaceAdService;
    this.containerClass = "";
    this.isFilterDialog = false;
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
    this.user$ = this.commonFacade.getUser$();
    this.routeData$ = this.routeService.routeData$;
    this.sectionList$ = this.commonFacade.getSectionList$();
    this.selectedTab = HomeTab.RENT;
    this.buttonType = ButtonType;
    this.appRoute = APP_ROUTE;
    this.tab = HomeTab;
  }
  onLogin() {
    this.authService.openAuthDialog();
  }
  goToPlaceAd() {
    this.amplitude.trackPlaceAdButtonClicked("Place FREE Ad");
    this.commonPlaceAdService.gotoPlaceAd();
  }
  onTabChange(tab) {
    const SECTION = tab === HomeTab.BUY ? SectionType.PROPERTIES_FOR_SALE : SectionType.PROPERTIES_FOR_RENT;
    this.selectedTab = tab;
    this.homeTabService.setSelectedSection(SECTION);
  }
  onOpenHeaderSidenav() {
    this.intercomService.toggelIntercomPopup(true);
    this.ngbOffCanvas.open(HeaderSidenavComponent, OFFCANVAS_HEADER_SIDENAV);
  }
  static {
    this.\u0275fac = function HomeBannerv2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeBannerv2Component)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(HomeTabService), \u0275\u0275directiveInject(RouteService), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(NgbOffcanvas), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(AmplitudeService), \u0275\u0275directiveInject(CommonPlaceAdService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeBannerv2Component, selectors: [["findqo-home-banner-v2"]], inputs: { section: "section", containerClass: "containerClass", isFilterDialog: "isFilterDialog" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 31, vars: 24, consts: [["btnLoginTemplate", ""], ["headerAccountMenuTemplate", ""], [1, "home-filters", "px-3", "pb-3"], [1, "banner-gradient"], [1, "header-tabs", "mb-3", "mb-sm-4", "row", "mx-auto", "align-items-center", "justify-content-center", "gap-4"], ["routerLink", "./", 1, "col-auto", "px-0"], [1, "d-block", "d-lg-none"], ["mat-tab-link", "", 1, "tab", "disable-ripple", "menu-header", 3, "click"], [1, "link-content"], [1, "icn-menu"], [1, "fg-general-1", "fw-700", "lh-28px", "fs-24px", "website-logo"], [1, "col", "d-none", "d-lg-block"], [1, "home-banner-nav-items", 3, "userData", "sectionList", "routeData"], [1, "col-auto", "px-0", "d-none", "d-lg-block"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-4"], [4, "ngIf"], ["btnClass", "text-body-regular lh-18px fg-basic-1", 3, "label", "btnType", "clicked", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "filters", "pb-3"], [3, "tabChange", "section"], ["materialIconPrefix", "autorenew", "btnClass", "rounded-pill", 3, "label", "btnType", "routerLink"], ["btnClass", "text-body-regular lh-18px fg-basic-1", 3, "clicked", "label", "btnType"], ["btnClass", "text-small-14px-regular fg-basic-1", 3, "clicked", "btnType", "label"], [1, "home-account-menu"]], template: function HomeBannerv2Component_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275element(1, "div", 3);
        \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "button", 7);
        \u0275\u0275listener("click", function HomeBannerv2Component_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOpenHeaderSidenav());
        });
        \u0275\u0275elementStart(6, "div", 8)(7, "mat-icon", 9);
        \u0275\u0275text(8, "menu");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "span", 10);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 11);
        \u0275\u0275element(13, "findqo-header-nav-items", 12);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275pipe(15, "async");
        \u0275\u0275pipe(16, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
        \u0275\u0275template(19, HomeBannerv2Component_div_19_Template, 3, 5, "div", 15);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275pipe(21, "async");
        \u0275\u0275template(22, HomeBannerv2Component_findqo_button_22_Template, 1, 2, "findqo-button", 16);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275template(24, HomeBannerv2Component_ng_template_24_Template, 0, 0, "ng-template", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 18)(26, "findqo-filters-tabs", 19);
        \u0275\u0275listener("tabChange", function HomeBannerv2Component_Template_findqo_filters_tabs_tabChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTabChange($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, HomeBannerv2Component_ng_template_27_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(29, HomeBannerv2Component_ng_template_29_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        const btnLoginTemplate_r5 = \u0275\u0275reference(28);
        const headerAccountMenuTemplate_r6 = \u0275\u0275reference(30);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "n3786"));
        \u0275\u0275advance(3);
        \u0275\u0275property("userData", \u0275\u0275pipeBind1(14, 12, ctx.user$))("sectionList", \u0275\u0275pipeBind1(15, 14, ctx.sectionList$))("routeData", \u0275\u0275pipeBind1(16, 16, ctx.routeData$));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isPlatformBrowser && \u0275\u0275pipeBind1(20, 18, ctx.user$) && +((tmp_6_0 = \u0275\u0275pipeBind1(21, 20, ctx.user$)) == null ? null : tmp_6_0.hasBusinessProfile));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isPlatformBrowser && !+((tmp_7_0 = \u0275\u0275pipeBind1(23, 22, ctx.user$)) == null ? null : tmp_7_0.hasBusinessProfile));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.isPlatformBrowser && (ctx.authService == null ? null : ctx.authService.user()) ? headerAccountMenuTemplate_r6 : btnLoginTemplate_r5);
        \u0275\u0275advance();
        \u0275\u0275classProp("filters--share", ctx.selectedTab === ctx.tab.SHARE);
        \u0275\u0275advance();
        \u0275\u0275property("section", ctx.section);
      }
    }, dependencies: [RouterLink, NgIf, NgTemplateOutlet, MatIcon, HeaderAccountMenuComponent, HeaderNavItemsComponent, ButtonComponent, FiltersTabsComponent, AsyncPipe, TranslationsPipe], styles: ["\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  cursor: pointer;\n}\n.background-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom;\n}\n.header-tabs[_ngcontent-%COMP%] {\n  height: 60px;\n}\ndiv.filters[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  max-width: 708px;\n}\ndiv.filters--share[_ngcontent-%COMP%] {\n  max-width: 488px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.fa-solid[_ngcontent-%COMP%] {\n  color: var(--basic-1);\n}\n.home-filters[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 375px;\n}\n.home-filters[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  z-index: var(--z-index-home-hero-banner);\n}\n@media (min-width: 768px) {\n  .header-tabs[_ngcontent-%COMP%] {\n    max-width: 1068px;\n  }\n  .background-image[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .website-logo[_ngcontent-%COMP%] {\n    font-size: 32px !important;\n    line-height: 36px !important;\n  }\n}\n.menu-header[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  left: 10px;\n  position: absolute;\n}\n.icn-menu[_ngcontent-%COMP%] {\n  color: var(--general-1) !important;\n}\n.banner-gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(26, 31, 46, 0.75) 0%,\n      rgba(26, 31, 46, 0.75) 100%),\n    rgba(238, 0, 136, 0.15);\n  min-height: 200px;\n  z-index: -1;\n}\n@media (min-width: 768px) {\n  .banner-gradient[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home-banner-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeBannerv2Component, [{
    type: Component,
    args: [{ selector: "findqo-home-banner-v2", providers: [DestroyService], standalone: false, template: `<div class="home-filters px-3 pb-3">
	<!-- Original desktop banner -->
	<!-- <img ngSrc="assets/images/banners/home-banner-new.webp" alt="Home Page Banner" class="d-lg-block d-none" priority fill /> -->
	<!-- Original mobile banner -->
	<!-- <img ngSrc="assets/images/banners/home-banner-mobile-new.webp" class="d-lg-none" alt="Home Page Banner" priority fill /> -->

	<div class="banner-gradient"></div>


	<div class="header-tabs mb-3 mb-sm-4 row mx-auto align-items-center justify-content-center gap-4">
		<div class="col-auto px-0" routerLink="./">
			<div class="d-block d-lg-none">
				<button mat-tab-link class="tab disable-ripple menu-header" (click)="onOpenHeaderSidenav()">
					<div class="link-content">
						<mat-icon class="icn-menu">menu</mat-icon>
					</div>
				</button>
			</div>
			<span class="fg-general-1 fw-700 lh-28px fs-24px website-logo">{{ 'n3786' | translations }}</span>
		</div>

		<div class="col d-none d-lg-block">
			<findqo-header-nav-items
				class="home-banner-nav-items"
				[userData]="user$ | async"
				[sectionList]="sectionList$ | async"
				[routeData]="routeData$ | async"
			></findqo-header-nav-items>
		</div>

		<div class="col-auto px-0 d-none d-lg-block">
			<div class="d-flex align-items-center justify-content-between gap-4">
				<div *ngIf="isPlatformBrowser && (user$ | async) && +(user$ | async)?.hasBusinessProfile">
					<findqo-button
						[label]="'n4075' | translations"
						[btnType]="buttonType.FILLED"
						[routerLink]="'/' + appRoute.agentHub.dashboard"
						materialIconPrefix="autorenew"
						btnClass="rounded-pill"
					></findqo-button>
				</div>

				<findqo-button
					btnClass="text-body-regular lh-18px fg-basic-1"
					[label]="'Place FREE Ad'"
					[btnType]="buttonType.FILLED"
					(clicked)="goToPlaceAd()"
					*ngIf="isPlatformBrowser && !+(user$ | async)?.hasBusinessProfile"
				></findqo-button>

				<ng-template [ngTemplateOutlet]="isPlatformBrowser && authService?.user() ? headerAccountMenuTemplate : btnLoginTemplate"></ng-template>
			</div>
		</div>
	</div>

	<div class="filters pb-3" [class.filters--share]="selectedTab === tab.SHARE">
		<findqo-filters-tabs [section]="section" (tabChange)="onTabChange($event)"></findqo-filters-tabs>
	</div>
</div>

<!-- Header login -->
<ng-template #btnLoginTemplate>
	<findqo-button
		btnClass="text-small-14px-regular fg-basic-1"
		[btnType]="buttonType.BASIC"
		[label]="'n11' | translations"
		(clicked)="onLogin()"
	></findqo-button>
</ng-template>

<!-- Header account menu -->
<ng-template #headerAccountMenuTemplate>
	<findqo-header-account-menu class="home-account-menu"></findqo-header-account-menu>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/home-banner-v2.component.scss */\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n.background-image {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom;\n}\n.header-tabs {\n  height: 60px;\n}\ndiv.filters {\n  width: 100%;\n  margin: auto;\n  max-width: 708px;\n}\ndiv.filters--share {\n  max-width: 488px;\n}\n.close-btn {\n  width: 30px;\n  height: 30px;\n}\n.fa-solid {\n  color: var(--basic-1);\n}\n.home-filters {\n  position: relative;\n  min-height: 375px;\n}\n.home-filters img {\n  object-fit: cover;\n  z-index: var(--z-index-home-hero-banner);\n}\n@media (min-width: 768px) {\n  .header-tabs {\n    max-width: 1068px;\n  }\n  .background-image {\n    height: 350px;\n  }\n  .website-logo {\n    font-size: 32px !important;\n    line-height: 36px !important;\n  }\n}\n.menu-header {\n  background: none;\n  border: none;\n  left: 10px;\n  position: absolute;\n}\n.icn-menu {\n  color: var(--general-1) !important;\n}\n.banner-gradient {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      0deg,\n      rgba(26, 31, 46, 0.75) 0%,\n      rgba(26, 31, 46, 0.75) 100%),\n    rgba(238, 0, 136, 0.15);\n  min-height: 200px;\n  z-index: -1;\n}\n@media (min-width: 768px) {\n  .banner-gradient {\n    min-height: 300px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home-banner-v2.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: AuthService }, { type: CommonFacade }, { type: HomeTabService }, { type: RouteService }, { type: IntercomService }, { type: NgbOffcanvas }, { type: ViewportService }, { type: AmplitudeService }, { type: CommonPlaceAdService }], { section: [{
    type: Input
  }], containerClass: [{
    type: Input
  }], isFilterDialog: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeBannerv2Component, { className: "HomeBannerv2Component", filePath: "apps/findqo-ireland/src/app/feature/home/components/home-banner-v2/home-banner-v2.component.ts", lineNumber: 26 });
})();

// apps/findqo-ireland/src/app/feature/home/home.page.ts
var _c02 = (a0) => ({ vm: a0 });
var _c12 = (a0) => ({ businessVm: a0 });
function HomePage_ng_container_0_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "findqo-advertise-agent");
    \u0275\u0275elementEnd();
  }
}
function HomePage_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HomePage_ng_container_0_ng_container_14_div_1_Template, 2, 0, "div", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const loader_r1 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPlatformBrowser)("ngIfElse", loader_r1);
  }
}
function HomePage_ng_container_0_ng_template_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "ngx-skeleton-loader", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("theme", theme_r3);
  }
}
function HomePage_ng_container_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275template(2, HomePage_ng_container_0_ng_template_16_div_2_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 20);
    \u0275\u0275element(5, "ngx-skeleton-loader", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.themeList);
    \u0275\u0275advance(3);
    \u0275\u0275property("theme", ctx_r1.themeListMobile);
  }
}
function HomePage_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function HomePage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275element(2, "findqo-home-banner-v2", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2", 7);
    \u0275\u0275text(7, "Estate Agents on FindQo.ie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "a", 10);
    \u0275\u0275text(11, " LIST YOUR BUSINESS FOR FREE ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 11);
    \u0275\u0275text(13, "arrow_forward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(14, HomePage_ng_container_0_ng_container_14_Template, 2, 2, "ng-container", 1);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275template(16, HomePage_ng_container_0_ng_template_16_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(18, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14);
    \u0275\u0275template(21, HomePage_ng_container_0_div_21_Template, 1, 0, "div", 15);
    \u0275\u0275elementStart(22, "a", 16);
    \u0275\u0275element(23, "div", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("section", ctx_r1.routeSection);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", "/" + ctx_r1.appRoute.agentHub.landing);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(7, _c12, \u0275\u0275pipeBind1(15, 5, ctx_r1.bussinessListVm$)));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", data_r4.vm == null ? null : data_r4.vm.aisleList);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.appRoute.apps);
  }
}
var HomePage = class _HomePage {
  constructor(platformId, homeFacade, route, intercom, structuredDataService, authFacade, destroyService) {
    this.platformId = platformId;
    this.homeFacade = homeFacade;
    this.route = route;
    this.intercom = intercom;
    this.structuredDataService = structuredDataService;
    this.authFacade = authFacade;
    this.destroyService = destroyService;
    this.vm$ = this.homeFacade.getHomeVm$();
    this.routeSection = "rent";
    this.sectionType = SectionType;
    this.aisleType = AisleType;
    this.appRoute = APP_ROUTE;
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
    this.themeListMobile = { border: "4", width: "100%", height: "220px" };
    this.themeList = Array(3).fill({ border: "4", width: "100%", margin: "32px", height: "266px" });
  }
  //to check the invitation link
  checkForAgentEmailInvitation() {
    if (!this.isPlatformBrowser)
      return;
    this.route.queryParams.pipe(takeUntil(this.destroyService)).subscribe((queryParams) => {
      const { token, reference, parentToken, type, authToken, purpose } = queryParams;
      if (token && reference && parentToken) {
        const EMAIL_INVITATION_DATA = { token, reference, parentToken };
        if (type)
          EMAIL_INVITATION_DATA.type = type;
        if (this.homeFacade.isNewEmailInvitation(EMAIL_INVITATION_DATA)) {
          this.homeFacade.setEmailInvitation(EMAIL_INVITATION_DATA);
          if (type) {
            this.authFacade.acceptAgentInvitation(EMAIL_INVITATION_DATA, void 0, purpose);
          } else {
            this.homeFacade.verifyEmailInvitation(EMAIL_INVITATION_DATA);
          }
        }
      } else if (authToken && type) {
        this.authFacade.instantLoginAndRedirect(queryParams);
      }
    });
  }
  ngOnInit() {
    this.route.data.pipe(takeUntil(this.destroyService)).subscribe((res) => {
      this.routeSection = res?.["section"] ?? "sale";
    });
    if (isPlatformBrowser(this.platformId)) {
      this.intercom.bootIntercom();
    }
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.intercom.shutdownIntercom();
    }
    this.structuredDataService.destroyScript();
  }
  static {
    this.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(HomeFacade), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(StructuredDataService), \u0275\u0275directiveInject(AuthFacade), \u0275\u0275directiveInject(DestroyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["ng-component"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 2, vars: 5, consts: [["loader", ""], [4, "ngIf"], [1, "container-fluid", "p-0"], [3, "section"], [1, "container", "my-32px"], [1, "row", "justify-content-between"], [1, "col-auto"], [1, "heading-2-medium", "fg-general-5"], [1, "col-auto", "mt-1", "mt-md-0"], [1, "d-flex", "gap-2", "align-items-center"], [1, "text-body-regular", "fg-prim-2", 3, "routerLink"], [1, "fg-prim-2", "fs-18px"], [1, "horizontal-line", "mx-auto"], [1, "container"], [1, "section-spacing"], ["class", "section-spacing", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "gradient-banner"], [4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-block"], [1, "py-0", "row", "gap-3", "justify-content-center"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "d-block", "d-md-none"], ["ngSkipHydration", "", 3, "theme"], [1, "col-3"]], template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomePage_ng_container_0_Template, 24, 9, "ng-container", 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c02, \u0275\u0275pipeBind1(1, 1, ctx.vm$)));
      }
    }, dependencies: [RouterLink, NgForOf, NgIf, MatIcon, AdvertiseAgentComponent, NgxSkeletonLoaderComponent, HomeBannerv2Component, AsyncPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.section-spacing[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nfindqo-other-ad-list[_ngcontent-%COMP%], \nfindqo-other-ad-list-skeleton-loader[_ngcontent-%COMP%] {\n  display: block;\n  margin: 16px 0;\n}\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 5px;\n  opacity: 15%;\n  background-color: var(--prim-2);\n  border-radius: 100px;\n}\n.my-32px[_ngcontent-%COMP%] {\n  margin-top: 32px !important;\n  margin-bottom: 32px !important;\n}\n@media (min-width: 768px) {\n  .section-spacing[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  findqo-other-ad-list[_ngcontent-%COMP%], \n   findqo-other-ad-list-skeleton-loader[_ngcontent-%COMP%] {\n    margin: 32px 0;\n  }\n}\n.download-app[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n@media (min-width: 576px) {\n  .download-app[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n    margin-top: 32px;\n  }\n}\n.gradient-banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--prim-2) 0%,\n      var(--prim-1) 20%,\n      var(--prim-3) 800%);\n  transition: transform 0.3s ease;\n}\n.gradient-banner[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n@media (min-width: 768px) {\n  .gradient-banner[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ standalone: false, providers: [DestroyService], template: `<ng-container
	*ngIf="{
		vm: vm$ | async
	} as data"
>
	<div class="container-fluid p-0">
		<findqo-home-banner-v2 [section]="routeSection"></findqo-home-banner-v2>
	</div>

	<div class="container my-32px">
		<div class="row justify-content-between">
			<div class="col-auto">
				<h2 class="heading-2-medium fg-general-5">Estate Agents on FindQo.ie</h2>
			</div>

			<div class="col-auto mt-1 mt-md-0">
				<div class="d-flex gap-2 align-items-center">
					<a class="text-body-regular fg-prim-2" [routerLink]="'/' + appRoute.agentHub.landing">
						LIST YOUR BUSINESS FOR FREE
					</a>
					<mat-icon class="fg-prim-2 fs-18px">arrow_forward</mat-icon>
				</div>
			</div>
		</div>

		<ng-container *ngIf="{ businessVm: bussinessListVm$ | async } as businessData">
			<div *ngIf="isPlatformBrowser; else loader">
				<findqo-advertise-agent></findqo-advertise-agent>
			</div>
		</ng-container>

		<ng-template #loader>
			<div class="d-none d-md-block">
				<div class="py-0 row gap-3 justify-content-center">
					<div class="col-3" *ngFor="let theme of themeList">
						<ngx-skeleton-loader ngSkipHydration [theme]="theme"></ngx-skeleton-loader>
					</div>
				</div>
			</div>

			<div class="d-block d-md-none">
				<div class="py-0 row gap-3 justify-content-center">
					<ngx-skeleton-loader ngSkipHydration [theme]="themeListMobile"></ngx-skeleton-loader>
				</div>
			</div>
		</ng-template>

		<div class="horizontal-line mx-auto"></div>
	</div>

	<div class="container">
		<div class="section-spacing">
			<div *ngFor="let aisle of data.vm?.aisleList" class="section-spacing">
				<!-- <findqo-home-sections-v2 [aisle]="aisle"></findqo-home-sections-v2> -->
			</div>

			<a [routerLink]="appRoute.apps">
				<!-- Mobile -->
				<!-- <img
					fill
					class="img-fluid position-relative d-md-none"
					ngSrc="assets/images/banners/ireland-mobile-app-download-banner.webp"
					alt="Download mobile app"
					loading="lazy"
				/> -->
				<!-- Desktop -->
				<!-- <img
					fill
					class="img-fluid position-relative d-none d-md-block"
					ngSrc="assets/images/banners/ireland-mobile-app-download-banner-desktop.webp"
					alt="Download mobile app"
					loading="lazy"
				/> -->
				<div class="gradient-banner"></div>
			</a>

			<!-- @defer (on viewport; when isPlatformBrowser) {
			<findqo-other-ad-list
				*ngIf="data.vm.adsForRent?.rent?.length"
				[title]="'Latest properties for rent'"
				[subTitle]="
					'Explore the newest rental properties across Ireland, from cozy apartments and spacious family homes to well-located office spaces. Each rental listing includes essential details, pricing, and contact options to help you find your ideal rental property quickly and easily.'
				"
				[adList]="data.vm.adsForRent.rent"
				[section]="sectionType.PROPERTIES_FOR_RENT"
				[aisle]="aisleType.RENT_RESIDENTIAL"
			></findqo-other-ad-list>

			<findqo-other-ad-list
				*ngIf="data.vm.adsForRent?.share?.length"
				[title]="'Latest properties for sharing'"
				[subTitle]="
					'Search available rooms and shared properties in Ireland, perfect for students, young professionals, or anyone seeking a shared living arrangement. Browse listings with information on amenities, location, and monthly costs to find the best property share options near you.'
				"
				[adList]="data.vm.adsForRent.share"
				[section]="sectionType.PROPERTIES_FOR_RENT"
				[aisle]="aisleType.SHARE_RESIDENTIAL"
			></findqo-other-ad-list>

			<findqo-other-ad-list
				*ngIf="data.vm.adsForRent?.commercial?.length"
				[title]="'Latest properties for commercials (To Let)'"
				[subTitle]="
					'Discover the latest commercial properties for rent across Ireland, ranging from modern office spaces to versatile retail units. Each listing provides essential details, pricing, and contact options to assist you in finding the perfect commercial property swiftly and efficiently.'
				"
				[adList]="data.vm.adsForRent.commercial"
				[section]="sectionType.PROPERTIES_FOR_RENT"
				[aisle]="aisleType.RENT_COMMERCIAL"
			></findqo-other-ad-list>
			} @placeholder {
			<div>
				<div class="col-12 col-md-8">
					<h3 class="heading-3 text-nowrap text-truncate">{{ 'Latest properties for rent' }}</h3>

					<p class="fs-12px fw-400 fg-genral-5 mt-2">
						Explore the newest rental properties across Ireland, from cozy apartments and spacious family homes to well-located office spaces. Each rental
						listing includes essential details, pricing, and contact options to help you find your ideal rental property quickly and easily.
					</p>
				</div>

				<div class="col-12 col-md-8">
					<h3 class="heading-3 text-nowrap text-truncate">{{ 'Latest properties for sharing' }}</h3>

					<p class="fs-12px fw-400 fg-genral-5 mt-2">
						Search available rooms and shared properties in Ireland, perfect for students, young professionals, or anyone seeking a shared living arrangement.
						Browse listings with information on amenities, location, and monthly costs to find the best property share options near you.
					</p>
				</div>

				<div class="col-12 col-md-8">
					<h3 class="heading-3 text-nowrap text-truncate">{{ 'Latest properties for commercials (To Let)' }}</h3>

					<p class="fs-12px fw-400 fg-genral-5 mt-2">
						Discover the latest commercial properties for rent across Ireland, ranging from modern office spaces to versatile retail units. Each listing
						provides essential details, pricing, and contact options to assist you in finding the perfect commercial property swiftly and efficiently.
					</p>
				</div>
			</div>
			} @defer (on viewport; when isPlatformBrowser) {
			<findqo-other-ad-list
				*ngIf="data.vm.adsForSell?.rent?.length"
				[title]="'Latest residential properties for sale'"
				[subTitle]="
					'Explore Ireland\\'s latest residential properties for sale, featuring houses, apartments, and land in sought-after locations. Each listing includes key details on amenities, pricing, and neighborhood insights to help you make an informed decision on your next home purchase.'
				"
				[adList]="data.vm.adsForSell.rent"
				[section]="sectionType.PROPERTIES_FOR_SALE"
				[aisle]="aisleType.SALE_RESIDENTIAL"
			></findqo-other-ad-list>

			<findqo-other-ad-list
				*ngIf="data.vm.adsForSell?.commercial?.length"
				[title]="'Latest commercial properties for sale'"
				[subTitle]="
					'Find prime commercial properties for sale across Ireland, including office spaces, retail units, and industrial sites. Each commercial listing is equipped with detailed specifications, pricing, and location insights, helping you make an informed investment in your business\\'s future.'
				"
				[adList]="data.vm.adsForSell.commercial"
				[section]="sectionType.PROPERTIES_FOR_SALE"
				[aisle]="aisleType.SALE_COMMERCIAL"
			></findqo-other-ad-list>
			} @placeholder {
			<div>
				<div class="col-12 col-md-8">
					<h3 class="heading-3 text-nowrap text-truncate">{{ 'Latest residential properties for sale' }}</h3>

					<p class="fs-12px fw-400 fg-genral-5 mt-2">
						Explore Ireland's latest residential properties for sale, featuring houses, apartments, and land in sought-after locations. Each listing includes
						key details on amenities, pricing, and neighborhood insights to help you make an informed decision on your next home purchase.
					</p>
				</div>

				<div class="col-12 col-md-8">
					<h3 class="heading-3 text-nowrap text-truncate">{{ 'Latest commercial properties for sale' }}</h3>

					<p class="fs-12px fw-400 fg-genral-5 mt-2">
						Find prime commercial properties for sale across Ireland, including office spaces, retail units, and industrial sites. Each commercial listing is
						equipped with detailed specifications, pricing, and location insights, helping you make an informed investment in your business's future.
					</p>
				</div>
			</div>
			} -->
		</div>
	</div>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/home/home.page.scss */\n.container {\n  max-width: 1000px;\n}\n.section-spacing {\n  margin-bottom: 16px;\n}\nfindqo-other-ad-list,\nfindqo-other-ad-list-skeleton-loader {\n  display: block;\n  margin: 16px 0;\n}\n.horizontal-line {\n  width: 100px;\n  height: 5px;\n  opacity: 15%;\n  background-color: var(--prim-2);\n  border-radius: 100px;\n}\n.my-32px {\n  margin-top: 32px !important;\n  margin-bottom: 32px !important;\n}\n@media (min-width: 768px) {\n  .section-spacing {\n    margin-bottom: 32px;\n  }\n  findqo-other-ad-list,\n  findqo-other-ad-list-skeleton-loader {\n    margin: 32px 0;\n  }\n}\n.download-app {\n  margin-bottom: 16px;\n}\n@media (min-width: 576px) {\n  .download-app {\n    margin-bottom: 32px;\n    margin-top: 32px;\n  }\n}\n.gradient-banner {\n  width: 100%;\n  height: 200px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--prim-2) 0%,\n      var(--prim-1) 20%,\n      var(--prim-3) 800%);\n  transition: transform 0.3s ease;\n}\n.gradient-banner:hover {\n  transform: scale(1.02);\n}\n@media (min-width: 768px) {\n  .gradient-banner {\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home.page.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: HomeFacade }, { type: ActivatedRoute }, { type: IntercomService }, { type: StructuredDataService }, { type: AuthFacade }, { type: DestroyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "apps/findqo-ireland/src/app/feature/home/home.page.ts", lineNumber: 20 });
})();

// apps/findqo-ireland/src/app/feature/home/home-routing.module.ts
var routes = [
  {
    path: "",
    component: HomePage,
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_MOBILE_HEADER_VISIBLE]: false
    }
  }
];
var HomePageRoutingModule = class _HomePageRoutingModule {
  static {
    this.\u0275fac = function HomePageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomePageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/home/components/unable-accept-invite-dialog/unable-accept-invite-dialog.module.ts
var UnableAcceptInviteDialogModule = class _UnableAcceptInviteDialogModule {
  static {
    this.\u0275fac = function UnableAcceptInviteDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnableAcceptInviteDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UnableAcceptInviteDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnableAcceptInviteDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [UnableAcceptInviteDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [UnableAcceptInviteDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/home/components/home-download-app/home-download-app.component.ts
var HomeDownloadAppComponent = class _HomeDownloadAppComponent {
  constructor() {
    this.appRoute = APP_ROUTE;
  }
  static {
    this.\u0275fac = function HomeDownloadAppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeDownloadAppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeDownloadAppComponent, selectors: [["findqo-home-download-app"]], standalone: false, decls: 22, vars: 8, consts: [[1, "row", "align-items-center", "app-download", "gap-1", "px-sm-5", "py-3", "px-3", "justify-content-between", "justify-content-sm-center", "justify-content-md-between"], [1, "col-auto", "download-app"], [1, "row", "align-items-center", "justify-content-center", "justify-content-lg-start", "gap-3", "gap-sm-4"], [1, "col-lg-auto", "text-center"], [1, "fg-general-5", "text-body-regular"], [1, "col-auto", "text-center", "sm:text-unset"], ["mat-flat-button", "", "findqoAnchor", "", "target", "_blank", 1, "m-2", "me-sm-3", 3, "href"], ["width", "111", "height", "32", "ngSrc", "assets/images/app-download/app-store.svg", "alt", "Download in App Store"], ["mat-flat-button", "", "mat-flat-button", "", "target", "_blank", 1, "my-2", 3, "href"], ["ngSrc", "assets/images/app-download/google-play.svg", "alt", "Download in Google Play", "width", "111", "height", "32"], [1, "col-auto", "d-none", "d-sm-block", "qr-code-container"], [1, "row", "align-items-center", "justify-content-center", "justify-content-lg-start", "gap-2"], [1, "fg-general-4", "text-body-regular"], [1, "col-auto"], ["width", "80", "height", "80", "ngSrc", "assets/images/app-download/qr-code.png", "alt", "Scan QR Code", 1, "d-inline-block", "qr-code"]], template: function HomeDownloadAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275element(10, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 8);
        \u0275\u0275element(12, "img", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 3)(16, "span", 12);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13)(20, "div");
        \u0275\u0275element(21, "img", 14);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "n3584"));
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.appRoute.external.appStoreApp, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.appRoute.external.googlePlayStoreApp, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 6, "n3585"));
      }
    }, dependencies: [MatAnchor, NgOptimizedImage, AnchorDirective, TranslationsPipe], styles: ["\n\n.app-download[_ngcontent-%COMP%] {\n  background-color: rgba(240, 0, 136, 0.025);\n}\na.mdc-button[_ngcontent-%COMP%] {\n  height: auto;\n  padding: 8px 24px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 18px -2px rgba(238, 0, 136, 0.12);\n}\nimg.qr-code[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0px 2px 18px -2px rgba(238, 0, 136, 0.12);\n}\n@media (min-width: 576px) {\n  .download-app[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n}\n@media (min-width: 992px) {\n  .download-app[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n.qr-code-container[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n@media (min-width: 768px) {\n  .qr-code-container[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home-download-app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeDownloadAppComponent, [{
    type: Component,
    args: [{ selector: "findqo-home-download-app", standalone: false, template: `<!-- Download App UI -->
<div>
	<div class="row align-items-center app-download gap-1 px-sm-5 py-3 px-3 justify-content-between justify-content-sm-center justify-content-md-between">
		<div class="col-auto download-app">
			<div class="row align-items-center justify-content-center justify-content-lg-start gap-3 gap-sm-4">
				<div class="col-lg-auto text-center">
					<span class="fg-general-5 text-body-regular">{{ 'n3584' | translations }}</span>
				</div>

				<div class="col-auto text-center sm:text-unset">
					<a mat-flat-button findqoAnchor class="m-2 me-sm-3" target="_blank" [href]="appRoute.external.appStoreApp">
						<img width="111" height="32" ngSrc="assets/images/app-download/app-store.svg" alt="Download in App Store" />
					</a>

					<a mat-flat-button class="my-2" mat-flat-button target="_blank" [href]="appRoute.external.googlePlayStoreApp">
						<img ngSrc="assets/images/app-download/google-play.svg" alt="Download in Google Play" width="111" height="32" />
					</a>
				</div>
			</div>
		</div>

		<div class="col-auto d-none d-sm-block qr-code-container">
			<div class="row align-items-center justify-content-center justify-content-lg-start gap-2">
				<div class="col-lg-auto text-center">
					<span class="fg-general-4 text-body-regular">{{ 'n3585' | translations }}</span>
				</div>

				<div class="col-auto">
					<div>
						<img class="d-inline-block qr-code" width="80" height="80" ngSrc="assets/images/app-download/qr-code.png" alt="Scan QR Code" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/home/components/home-download-app/home-download-app.component.scss */\n.app-download {\n  background-color: rgba(240, 0, 136, 0.025);\n}\na.mdc-button {\n  height: auto;\n  padding: 8px 24px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 18px -2px rgba(238, 0, 136, 0.12);\n}\nimg.qr-code {\n  border-radius: 10px;\n  box-shadow: 0px 2px 18px -2px rgba(238, 0, 136, 0.12);\n}\n@media (min-width: 576px) {\n  .download-app {\n    max-width: 350px;\n  }\n}\n@media (min-width: 992px) {\n  .download-app {\n    max-width: unset;\n  }\n}\n.qr-code-container {\n  max-width: 200px;\n}\n@media (min-width: 768px) {\n  .qr-code-container {\n    max-width: unset;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home-download-app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeDownloadAppComponent, { className: "HomeDownloadAppComponent", filePath: "apps/findqo-ireland/src/app/feature/home/components/home-download-app/home-download-app.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/home/components/home-download-app/home-download-app.module.ts
var HomeDownloadAppModule = class _HomeDownloadAppModule {
  static {
    this.\u0275fac = function HomeDownloadAppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeDownloadAppModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeDownloadAppModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeDownloadAppModule, [{
    type: NgModule,
    args: [{
      declarations: [HomeDownloadAppComponent],
      imports: [SharedModule],
      exports: [HomeDownloadAppComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/home/components/home-sections-v2/home-sections-v2.component.ts
var _c03 = (a0) => ({ section: a0 });
var _c13 = (a0, a1, a2, a3) => ["/", a0, a1, a2, a3];
var _c2 = (a0, a1, a2) => ["/", a0, a1, a2];
function HomeSectionsV2Component_ng_container_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 8)(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 10);
    \u0275\u0275element(5, "findqo-chevron-icon");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stand_r1 = ctx.$implicit;
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction4(2, _c13, vm_r2.section, ctx_r2.countyType.DEFAULT, ctx_r2.aisle == null ? null : ctx_r2.aisle.reference, stand_r1 == null ? null : stand_r1.reference));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stand_r1.name);
  }
}
function HomeSectionsV2Component_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 10);
    \u0275\u0275element(6, "findqo-chevron-icon");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction3(4, _c2, vm_r2.section, ctx_r2.countyType.DEFAULT, ctx_r2.aisle == null ? null : ctx_r2.aisle.reference));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "n2396"));
  }
}
function HomeSectionsV2Component_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "mat-icon", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275template(8, HomeSectionsV2Component_ng_container_0_div_8_Template, 6, 7, "div", 5);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275template(10, HomeSectionsV2Component_ng_container_0_div_10_Template, 7, 8, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.aisle.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx_r2.aisle.translationKey));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(9, 6, ctx_r2.aisle.stands, 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.aisle.stands.length > 5);
  }
}
var HomeSectionsV2Component = class _HomeSectionsV2Component {
  constructor(route, homeTabService) {
    this.route = route;
    this.homeTabService = homeTabService;
    this.selectedSection$ = this.homeTabService.selectedSection$;
    this.sectionType = SectionType;
    this.countyType = CountyType;
  }
  static {
    this.\u0275fac = function HomeSectionsV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeSectionsV2Component)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HomeTabService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeSectionsV2Component, selectors: [["findqo-home-sections-v2"]], inputs: { aisle: "aisle" }, standalone: false, decls: 2, vars: 5, consts: [[4, "ngIf"], [1, "mb-3", "d-flex", "align-items-center"], [1, "material-icons-two-tone"], [1, "ps-2", "text-small-14px-regular", "lh-20px", "fg-general-5"], [1, "row", "gy-3"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-4"], ["mat-button", "", 1, "border", "justify-content-between", "text-start", "w-100", 3, "routerLink"], [1, "text-small-14px-regular", "lh-18px", "fg-general-5"], ["iconPositionEnd", "", 1, "arrow", "mx-0"], ["mat-button", "", 1, "border", "w-100", "justify-content-between", "text-start", 3, "routerLink"], [1, "fg-prim-2", "text-small-14px-regular", "lh-18px"]], template: function HomeSectionsV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomeSectionsV2Component_ng_container_0_Template, 11, 10, "ng-container", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c03, \u0275\u0275pipeBind1(1, 1, ctx.selectedSection$)));
      }
    }, dependencies: [RouterLink, NgForOf, NgIf, MatAnchor, MatIcon, ChevronIconComponent, AsyncPipe, SlicePipe, TranslationsPipe], styles: ["\n\n.mat-icon.arrow[_ngcontent-%COMP%] {\n  height: 18px !important;\n  width: 18px !important;\n}\n.mat-mdc-button.mat-mdc-button-base[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n.mat-mdc-button[_ngcontent-%COMP%]:not(:disabled):hover, \n.mat-mdc-button[_ngcontent-%COMP%]:not(:disabled):active {\n  color: var(--general-5) !important;\n  background-color: transparent !important;\n  box-shadow: none;\n}\n.mat-mdc-button[_ngcontent-%COMP%] {\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--general-use-neutral-2);\n}\n@media (min-width: 768px) {\n  div.row[_ngcontent-%COMP%]   div.col-md-4[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  div.row[_ngcontent-%COMP%]   div.col-md-4[_ngcontent-%COMP%]:nth-child(1), \n   div.row[_ngcontent-%COMP%]   div.col-md-4[_ngcontent-%COMP%]:nth-child(4) {\n    padding-left: 0;\n  }\n  div.row[_ngcontent-%COMP%]   div.col-md-4[_ngcontent-%COMP%]:nth-child(3), \n   div.row[_ngcontent-%COMP%]   div.col-md-4[_ngcontent-%COMP%]:nth-child(6) {\n    padding-right: 0;\n  }\n  div.row[_ngcontent-%COMP%]   a.mat-mdc-button.mat-mdc-button-base[_ngcontent-%COMP%] {\n    height: 50px !important;\n  }\n}\nmat-icon.material-icons-two-tone[_ngcontent-%COMP%] {\n  filter: invert(10%) sepia(94%) saturate(5206%) hue-rotate(321deg) brightness(86%) contrast(104%);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home-sections-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeSectionsV2Component, [{
    type: Component,
    args: [{ selector: "findqo-home-sections-v2", standalone: false, template: `<ng-container
	*ngIf="{
		section: selectedSection$ | async
	} as vm"
>
	<div class="mb-3 d-flex align-items-center">
		<mat-icon class="material-icons-two-tone">{{ aisle.icon }}</mat-icon>
		<span class="ps-2 text-small-14px-regular lh-20px fg-general-5">{{ aisle.translationKey | translations }}</span>
	</div>

	<div class="row gy-3">
		<div *ngFor="let stand of aisle.stands | slice: 0 : 5" class="col-md-4">
			<a
				mat-button
				class="border justify-content-between text-start w-100"
				[routerLink]="['/', vm.section, countyType.DEFAULT, aisle?.reference, stand?.reference]"
			>
				<span class="text-small-14px-regular lh-18px fg-general-5">{{ stand.name }}</span>

				<mat-icon iconPositionEnd class="arrow mx-0">
					<findqo-chevron-icon></findqo-chevron-icon>
				</mat-icon>
			</a>
		</div>

		<!-- Show the See All button if there are more than 6 stands -->
		<div class="col-md-4" *ngIf="aisle.stands.length > 5">
			<a mat-button class="border w-100 justify-content-between text-start" [routerLink]="['/', vm.section, countyType.DEFAULT, aisle?.reference]">
				<span class="fg-prim-2 text-small-14px-regular lh-18px">{{ 'n2396' | translations }}</span>

				<mat-icon iconPositionEnd class="arrow mx-0">
					<findqo-chevron-icon></findqo-chevron-icon>
				</mat-icon>
			</a>
		</div>
	</div>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/home/components/home-sections-v2/home-sections-v2.component.scss */\n.mat-icon.arrow {\n  height: 18px !important;\n  width: 18px !important;\n}\n.mat-mdc-button.mat-mdc-button-base {\n  height: 40px !important;\n}\n.mat-mdc-button:not(:disabled):hover,\n.mat-mdc-button:not(:disabled):active {\n  color: var(--general-5) !important;\n  background-color: transparent !important;\n  box-shadow: none;\n}\n.mat-mdc-button {\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n.border {\n  border-radius: 4px;\n  border: 1px solid var(--general-use-neutral-2);\n}\n@media (min-width: 768px) {\n  div.row div.col-md-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  div.row div.col-md-4:nth-child(1),\n  div.row div.col-md-4:nth-child(4) {\n    padding-left: 0;\n  }\n  div.row div.col-md-4:nth-child(3),\n  div.row div.col-md-4:nth-child(6) {\n    padding-right: 0;\n  }\n  div.row a.mat-mdc-button.mat-mdc-button-base {\n    height: 50px !important;\n  }\n}\nmat-icon.material-icons-two-tone {\n  filter: invert(10%) sepia(94%) saturate(5206%) hue-rotate(321deg) brightness(86%) contrast(104%);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/home-sections-v2.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: HomeTabService }], { aisle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeSectionsV2Component, { className: "HomeSectionsV2Component", filePath: "apps/findqo-ireland/src/app/feature/home/components/home-sections-v2/home-sections-v2.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/home/home.module.ts
var HomePageModule = class _HomePageModule {
  static {
    this.\u0275fac = function HomePageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomePageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [HomeFacade, HomeTabService, FiltersTabsFacade, HomeTabService], imports: [
      HomePageRoutingModule,
      SharedModule,
      HomePageRoutingModule,
      UnableAcceptInviteDialogModule,
      HomeDownloadAppModule,
      AdvertiseAgentModule,
      HeaderAccountMenuModule,
      HeaderNavItemsModule,
      MatInputModule,
      MatSelectModule,
      ButtonModule,
      FormsModule,
      ReactiveFormsModule,
      PropertySizeIconModule,
      OtherAdListModule,
      ShowerIconModule,
      BedroomIconModule,
      ChevronIconModule,
      LocationSearchModule,
      NgxSkeletonLoaderModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageModule, [{
    type: NgModule,
    args: [{
      declarations: [HomePage, HomeBannerv2Component, FiltersTabsComponent, HomeSectionsV2Component, AcceptInviteDialogComponent],
      imports: [
        HomePageRoutingModule,
        SharedModule,
        HomePageRoutingModule,
        UnableAcceptInviteDialogModule,
        HomeDownloadAppModule,
        AdvertiseAgentModule,
        HeaderAccountMenuModule,
        HeaderNavItemsModule,
        MatInputModule,
        MatSelectModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        PropertySizeIconModule,
        OtherAdListModule,
        ShowerIconModule,
        BedroomIconModule,
        ChevronIconModule,
        LocationSearchModule,
        NgxSkeletonLoaderModule
      ],
      providers: [HomeFacade, HomeTabService, FiltersTabsFacade, HomeTabService]
    }]
  }], null, null);
})();
export {
  HomePageModule
};
//# sourceMappingURL=chunk-I5NJOHFM.js.map
