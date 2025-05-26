import {
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import {
  FiltersFacade
} from "./chunk-2RKTIM73.js";
import {
  FiltersService
} from "./chunk-C3BHYCVX.js";
import {
  BreadcrumbsState
} from "./chunk-5CLAA2MT.js";
import {
  ActivatedRoute,
  AisleType,
  AuthService,
  CountyType,
  FilterType,
  MatAnchor,
  Router,
  RouterLink,
  SectionType,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Input,
  NgModule,
  PLATFORM_ID,
  Pipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/components/header/pipes/nav-items.pipe.ts
var NavItemsPipe = class _NavItemsPipe {
  transform(sectionList, type) {
    let navItemList = [];
    switch (type) {
      case AisleType.SHARE_RESIDENTIAL:
        navItemList = sectionList.find((section) => section.reference === SectionType.PROPERTIES_FOR_RENT).aisles.find((aisle) => aisle.reference === AisleType.SHARE_RESIDENTIAL)?.stands || [];
        break;
      case AisleType.RENT_RESIDENTIAL:
        navItemList = sectionList.find((section) => section.reference === SectionType.PROPERTIES_FOR_RENT).aisles.filter((aisle) => aisle.reference === AisleType.RENT_RESIDENTIAL || aisle.reference === AisleType.RENT_COMMERCIAL);
        break;
      case SectionType.PROPERTIES_FOR_SALE:
        navItemList = sectionList.find((section) => section.reference === SectionType.PROPERTIES_FOR_SALE).aisles || [];
        break;
      default:
    }
    return navItemList;
  }
  static {
    this.\u0275fac = function NavItemsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavItemsPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "navItems", type: _NavItemsPipe, pure: true, standalone: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemsPipe, [{
    type: Pipe,
    args: [{
      name: "navItems",
      standalone: false
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/components/header/pipes/active-nav-item.pipe.ts
var ActiveNavItemPipe = class _ActiveNavItemPipe {
  transform(navItem, route) {
    let isMatch = false;
    switch (navItem) {
      case AisleType.SHARE_RESIDENTIAL:
        isMatch = route === AisleType.SHARE_RESIDENTIAL;
        break;
      case AisleType.RENT_RESIDENTIAL:
        isMatch = route === AisleType.RENT_RESIDENTIAL || route === AisleType.RENT_COMMERCIAL;
        break;
      case SectionType.PROPERTIES_FOR_SALE:
        isMatch = route === SectionType.PROPERTIES_FOR_SALE;
        break;
      default:
    }
    return isMatch;
  }
  static {
    this.\u0275fac = function ActiveNavItemPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActiveNavItemPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "activeNavItem", type: _ActiveNavItemPipe, pure: true, standalone: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveNavItemPipe, [{
    type: Pipe,
    args: [{
      name: "activeNavItem",
      standalone: false
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/components/header/pipes/nav-item-route.pipe.ts
var NavItemRoutePipe = class _NavItemRoutePipe {
  transform(routes, reference) {
    return [...routes, reference].filter((route) => !!route);
  }
  static {
    this.\u0275fac = function NavItemRoutePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavItemRoutePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "navItemRoute", type: _NavItemRoutePipe, pure: true, standalone: false });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavItemRoutePipe, [{
    type: Pipe,
    args: [{
      name: "navItemRoute",
      standalone: false
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/components/header/components/header-nav-items/header-nav-items.component.ts
var _c0 = (a0, a1, a2) => ["/", a0, a1, a2];
var _c1 = (a0, a1, a2) => ({ isActive: a0, route: a1, label: "n250", menu: a2 });
var _c2 = (a0) => ({ $implicit: a0 });
var _c3 = (a0, a1, a2) => ({ isActive: a0, route: a1, label: "n251", menu: a2 });
var _c4 = (a0, a1, a2) => ({ isActive: a0, route: a1, label: "n794", menu: a2 });
var _c5 = () => ["/free-property-valuation"];
var _c6 = (a0) => ({ route: a0, label: "n4093", isNew: true });
var _c7 = (a0) => ({ navItemTrigger: a0 });
var _c8 = (a0, a1, a2) => ({ sectionList: a0, routes: a1, navItemTrigger: a2 });
var _c9 = (a0, a1) => ["/", a0, a1];
function HeaderNavItemsComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const navItemTemplate_r1 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", navItemTemplate_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c2, \u0275\u0275pureFunction1(3, _c6, \u0275\u0275pureFunction0(2, _c5))));
  }
}
function HeaderNavItemsComponent_ng_template_7_sup_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "sup", 12);
    \u0275\u0275text(1, "NEW!");
    \u0275\u0275elementEnd();
  }
}
function HeaderNavItemsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10, 5);
    \u0275\u0275listener("mouseenter", function HeaderNavItemsComponent_ng_template_7_Template_a_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const navItemTrigger_r3 = \u0275\u0275reference(1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onParentMenuMouseEnter(navItemTrigger_r3));
    })("mouseleave", function HeaderNavItemsComponent_ng_template_7_Template_a_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const navItemTrigger_r3 = \u0275\u0275reference(1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.isParentMenuActive = false;
      return \u0275\u0275resetView(ctx_r3.onMenuMouseLeave(navItemTrigger_r3));
    })("click", function HeaderNavItemsComponent_ng_template_7_Template_a_click_0_listener() {
      const data_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onClickNavItem(data_r5.route));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275template(4, HeaderNavItemsComponent_ng_template_7_sup_4_Template, 2, 0, "sup", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const navItemTrigger_r3 = \u0275\u0275reference(1);
    \u0275\u0275classProp("head-link-active", data_r5.isActive);
    \u0275\u0275property("matMenuTriggerFor", data_r5.menu)("matMenuTriggerData", \u0275\u0275pureFunction1(9, _c7, navItemTrigger_r3))("routerLink", data_r5.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 7, data_r5.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", data_r5 == null ? null : data_r5.isNew);
  }
}
function HeaderNavItemsComponent_ng_template_9_For_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275pipe(1, "navItemRoute");
    \u0275\u0275listener("click", function HeaderNavItemsComponent_ng_template_9_For_2_a_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r9 = \u0275\u0275nextContext().$implicit;
      const data_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onClickNavItem(data_r7.routes, item_r9.reference));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const data_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind2(1, 2, data_r7.routes, item_r9.reference));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, item_r9.translationKey), " ");
  }
}
function HeaderNavItemsComponent_ng_template_9_For_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function HeaderNavItemsComponent_ng_template_9_For_2_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onClickNavItem(["/", ctx_r3.sectionType.PROPERTIES_FOR_RENT, ctx_r3.countyType.DEFAULT], item_r9.reference));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r3.currentRoute(\u0275\u0275pureFunction3(4, _c0, ctx_r3.sectionType.PROPERTIES_FOR_RENT, ctx_r3.countyType.DEFAULT, item_r9.reference)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, item_r9.translationKey), " ");
  }
}
function HeaderNavItemsComponent_ng_template_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderNavItemsComponent_ng_template_9_For_2_a_0_Template, 4, 7, "a", 14)(1, HeaderNavItemsComponent_ng_template_9_For_2_a_1_Template, 3, 8, "a", 14);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r9.reference !== "rent-commercial");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.reference === "rent-commercial");
  }
}
function HeaderNavItemsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("mouseenter", function HeaderNavItemsComponent_ng_template_9_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.isParentMenuPanelOpen = true);
    })("mouseleave", function HeaderNavItemsComponent_ng_template_9_Template_div_mouseleave_0_listener() {
      const data_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.isParentMenuPanelOpen = false;
      return \u0275\u0275resetView(ctx_r3.onMenuMouseLeave(data_r7.navItemTrigger));
    });
    \u0275\u0275repeaterCreate(1, HeaderNavItemsComponent_ng_template_9_For_2_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r7.sectionList);
  }
}
function HeaderNavItemsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
    \u0275\u0275pipe(1, "navItems");
  }
  if (rf & 2) {
    const navItemTrigger_r11 = ctx.navItemTrigger;
    const ctx_r3 = \u0275\u0275nextContext();
    const menuItemTemplate_r12 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", menuItemTemplate_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c2, \u0275\u0275pureFunction3(9, _c8, \u0275\u0275pipeBind2(1, 2, ctx_r3.sectionList, ctx_r3.aisleType.SHARE_RESIDENTIAL), \u0275\u0275pureFunction3(5, _c0, ctx_r3.sectionType.PROPERTIES_FOR_RENT, ctx_r3.currentLocation(ctx_r3.aisleType == null ? null : ctx_r3.aisleType.SHARE_RESIDENTIAL), ctx_r3.aisleType.SHARE_RESIDENTIAL), navItemTrigger_r11)));
  }
}
function HeaderNavItemsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
    \u0275\u0275pipe(1, "navItems");
  }
  if (rf & 2) {
    const navItemTrigger_r13 = ctx.navItemTrigger;
    const ctx_r3 = \u0275\u0275nextContext();
    const menuItemTemplate_r12 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", menuItemTemplate_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c2, \u0275\u0275pureFunction3(8, _c8, \u0275\u0275pipeBind2(1, 2, ctx_r3.sectionList, ctx_r3.aisleType.RENT_RESIDENTIAL), \u0275\u0275pureFunction2(5, _c9, ctx_r3.sectionType.PROPERTIES_FOR_RENT, ctx_r3.currentLocation(ctx_r3.aisleType == null ? null : ctx_r3.aisleType.RENT_RESIDENTIAL)), navItemTrigger_r13)));
  }
}
function HeaderNavItemsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
    \u0275\u0275pipe(1, "navItems");
  }
  if (rf & 2) {
    const navItemTrigger_r14 = ctx.navItemTrigger;
    const ctx_r3 = \u0275\u0275nextContext();
    const menuItemTemplate_r12 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", menuItemTemplate_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(12, _c2, \u0275\u0275pureFunction3(8, _c8, \u0275\u0275pipeBind2(1, 2, ctx_r3.sectionList, ctx_r3.sectionType.PROPERTIES_FOR_SALE), \u0275\u0275pureFunction2(5, _c9, ctx_r3.sectionType.PROPERTIES_FOR_SALE, ctx_r3.countyType.DEFAULT), navItemTrigger_r14)));
  }
}
var HeaderNavItemsComponent = class _HeaderNavItemsComponent {
  constructor(breadcrubmsState, platformId, authService, filterFacade, router, filterService, route) {
    this.breadcrubmsState = breadcrubmsState;
    this.platformId = platformId;
    this.authService = authService;
    this.filterFacade = filterFacade;
    this.router = router;
    this.filterService = filterService;
    this.route = route;
    this.sectionList = [];
    this.isParentMenuActive = false;
    this.isParentMenuPanelOpen = false;
    this.sectionType = SectionType;
    this.aisleType = AisleType;
    this.countyType = CountyType;
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
  }
  onParentMenuMouseEnter(menuTrigger) {
    if (!!this.activeNavMenutTrigger && this.activeNavMenutTrigger !== menuTrigger) {
      this.activeNavMenutTrigger.closeMenu();
    }
    menuTrigger.openMenu();
    this.activeNavMenutTrigger = menuTrigger;
    this.isParentMenuActive = true;
  }
  currentLocation(aisle) {
    const params = this.filterFacade.getParams();
    if ((aisle === AisleType.RENT_RESIDENTIAL || aisle === AisleType.SHARE_RESIDENTIAL) && (params?.[FilterType.AISLE] === AisleType.RENT_RESIDENTIAL || params?.[FilterType.AISLE] === AisleType.SHARE_RESIDENTIAL)) {
      const CURRENT_ROUTE = this.router.routerState.root.firstChild;
      const location = CURRENT_ROUTE.snapshot.params?.[FilterType.LOCATION_REFERENCE] || CURRENT_ROUTE.snapshot.data?.[FilterType.LOCATION_REFERENCE] || this.countyType.DEFAULT;
      return location;
    }
    return this.countyType.DEFAULT;
  }
  currentRoute(route) {
    if (route[3] === AisleType.RENT_COMMERCIAL) {
      route[2] = CountyType.DEFAULT;
      return route;
    }
    return route;
  }
  onMenuMouseLeave(menuTrigger) {
    setTimeout(() => {
      if (!this.isParentMenuActive && !this.isParentMenuPanelOpen) {
        menuTrigger.closeMenu();
      }
    });
  }
  onClickNavItem(routes, reference) {
    const params = this.filterFacade.getParams();
    if (params?.["section"]?.includes("properties-for-sale") && !routes[1]?.includes("properties-for-sale") || routes[1]?.includes("properties-for-sale") && !params?.["section"]?.includes("properties-for-sale") || reference?.includes("rent-commercial")) {
      this.router.navigate([...routes, ...reference ? [reference] : []]);
      this.breadcrubmsState.setbreadcrumbsParams(["/", ...routes, ...reference ? [reference] : []]);
      return;
    }
    if (["apartments", "houses"].includes(reference)) {
      const stand2 = null;
      const updatedRoutes2 = [...routes, ...reference ? [reference] : [], ...stand2 ? [stand2] : []];
      const queryParams2 = this.route?.snapshot?.queryParams;
      this.router.navigate([...updatedRoutes2], {
        queryParams: queryParams2,
        queryParamsHandling: "merge"
      });
      this.breadcrubmsState.setbreadcrumbsParams(["/", ...updatedRoutes2]);
      return;
    }
    const stand = [void 0, "apartments", "houses"].includes(params?.["stand"]) ? params?.["stand"] : null;
    const updatedRoutes = [...routes, ...reference ? [reference] : [], ...stand ? [stand] : []];
    this.breadcrubmsState.setbreadcrumbsParams(["/", ...updatedRoutes]);
    const queryParams = this.route?.snapshot?.queryParams;
    this.router.navigate([...updatedRoutes], {
      queryParams,
      queryParamsHandling: "merge"
    });
  }
  static {
    this.\u0275fac = function HeaderNavItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderNavItemsComponent)(\u0275\u0275directiveInject(BreadcrumbsState), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FiltersFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FiltersService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderNavItemsComponent, selectors: [["findqo-header-nav-items"]], inputs: { sectionList: "sectionList", routeData: "routeData", userData: "userData" }, standalone: false, features: [\u0275\u0275ProvidersFeature([NavItemRoutePipe])], decls: 20, vars: 49, consts: [["navItemTemplate", ""], ["menuItemTemplate", ""], ["shareMenu", "matMenu"], ["rentMenu", "matMenu"], ["buyMenu", "matMenu"], ["navItemTrigger", "matMenuTrigger"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "hasBackdrop"], ["matMenuContent", ""], ["mat-button", "", "disableRipple", "", 1, "h-100", "text-small-14px-regular", "fg-general-4", "disabled-ripple", "head-link", 3, "mouseenter", "mouseleave", "click", "matMenuTriggerFor", "matMenuTriggerData", "routerLink"], ["class", "bg-prim-2 px-2 rounded fg-basic-1 text-caption-medium ms-2 new-sup", 4, "ngIf"], [1, "bg-prim-2", "px-2", "rounded", "fg-basic-1", "text-caption-medium", "ms-2", "new-sup"], [3, "mouseenter", "mouseleave"], ["mat-menu-item", "", "class", "text-body-regular fg-general-5 item-link", 3, "routerLink", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "text-body-regular", "fg-general-5", "item-link", 3, "click", "routerLink"]], template: function HeaderNavItemsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 6);
        \u0275\u0275pipe(1, "activeNavItem");
        \u0275\u0275elementContainer(2, 6);
        \u0275\u0275pipe(3, "activeNavItem");
        \u0275\u0275elementContainer(4, 6);
        \u0275\u0275pipe(5, "activeNavItem");
        \u0275\u0275template(6, HeaderNavItemsComponent_ng_container_6_Template, 1, 7, "ng-container", 7)(7, HeaderNavItemsComponent_ng_template_7_Template, 5, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, HeaderNavItemsComponent_ng_template_9_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(11, "mat-menu", 8, 2);
        \u0275\u0275template(13, HeaderNavItemsComponent_ng_template_13_Template, 2, 15, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-menu", 8, 3);
        \u0275\u0275template(16, HeaderNavItemsComponent_ng_template_16_Template, 2, 14, "ng-template", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-menu", 8, 4);
        \u0275\u0275template(19, HeaderNavItemsComponent_ng_template_19_Template, 2, 14, "ng-template", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_11_0;
        const navItemTemplate_r1 = \u0275\u0275reference(8);
        const shareMenu_r15 = \u0275\u0275reference(12);
        const rentMenu_r16 = \u0275\u0275reference(15);
        const buyMenu_r17 = \u0275\u0275reference(18);
        \u0275\u0275property("ngTemplateOutlet", navItemTemplate_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction1(27, _c2, \u0275\u0275pureFunction3(23, _c1, \u0275\u0275pipeBind2(1, 10, ctx.sectionType.PROPERTIES_FOR_SALE, ctx.routeData == null ? null : ctx.routeData.section), \u0275\u0275pureFunction3(19, _c0, ctx.sectionType.PROPERTIES_FOR_SALE, ctx.countyType.DEFAULT, ctx.aisleType.SALE_RESIDENTIAL), buyMenu_r17)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", navItemTemplate_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction1(37, _c2, \u0275\u0275pureFunction3(33, _c3, \u0275\u0275pipeBind2(3, 13, ctx.aisleType.RENT_RESIDENTIAL, ctx.routeData == null ? null : ctx.routeData.aisle), \u0275\u0275pureFunction3(29, _c0, ctx.sectionType.PROPERTIES_FOR_RENT, ctx.currentLocation(ctx.aisleType == null ? null : ctx.aisleType.RENT_RESIDENTIAL), ctx.aisleType.RENT_RESIDENTIAL), rentMenu_r16)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", navItemTemplate_r1)("ngTemplateOutletContext", \u0275\u0275pureFunction1(47, _c2, \u0275\u0275pureFunction3(43, _c4, \u0275\u0275pipeBind2(5, 16, ctx.aisleType.SHARE_RESIDENTIAL, ctx.routeData == null ? null : ctx.routeData.aisle), \u0275\u0275pureFunction3(39, _c0, ctx.sectionType.PROPERTIES_FOR_RENT, ctx.currentLocation(ctx.aisleType == null ? null : ctx.aisleType.SHARE_RESIDENTIAL), ctx.aisleType.SHARE_RESIDENTIAL), shareMenu_r15)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isPlatformBrowser && (!ctx.authService.user() || (ctx.authService == null ? null : ctx.authService.user()) && (ctx.authService == null ? null : (tmp_11_0 = ctx.authService.user()) == null ? null : tmp_11_0.hasBusinessProfile) !== "1"));
        \u0275\u0275advance(5);
        \u0275\u0275property("hasBackdrop", false);
        \u0275\u0275advance(3);
        \u0275\u0275property("hasBackdrop", false);
        \u0275\u0275advance(3);
        \u0275\u0275property("hasBackdrop", false);
      }
    }, dependencies: [NgIf, NgTemplateOutlet, MatAnchor, RouterLink, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, TranslationsPipe, NavItemsPipe, ActiveNavItemPipe, NavItemRoutePipe], styles: ["\n\n.home-banner-nav-items[_nghost-%COMP%]   a.head-link[_ngcontent-%COMP%] {\n  color: var(--basic-1) !important;\n}\na.item-link[_ngcontent-%COMP%] {\n  width: 280px !important;\n  min-height: 45px;\n  color: var(--general-5);\n}\na.item-link[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--neutral-1);\n}\na.head-link-active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid var(--prim-2);\n  border-radius: 0;\n  color: var(--prim-2) !important;\n  transition: 0.2s ease-in-out;\n}\n.new-sup[_ngcontent-%COMP%] {\n  right: 3rem;\n  position: relative;\n  top: -15px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/header-nav-items.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderNavItemsComponent, [{
    type: Component,
    args: [{ selector: "findqo-header-nav-items", providers: [NavItemRoutePipe], standalone: false, template: `<!-- Nav items  -->

<ng-container
	[ngTemplateOutlet]="navItemTemplate"
	[ngTemplateOutletContext]="{
		$implicit: {
			isActive: sectionType.PROPERTIES_FOR_SALE | activeNavItem: routeData?.section,
			route: ['/', sectionType.PROPERTIES_FOR_SALE, countyType.DEFAULT, aisleType.SALE_RESIDENTIAL],
			label: 'n250',
			menu: buyMenu
		}
	}"
></ng-container>

<ng-container
	[ngTemplateOutlet]="navItemTemplate"
	[ngTemplateOutletContext]="{
		$implicit: {
			isActive: aisleType.RENT_RESIDENTIAL | activeNavItem: routeData?.aisle,
			route: ['/', sectionType.PROPERTIES_FOR_RENT, currentLocation(aisleType?.RENT_RESIDENTIAL), aisleType.RENT_RESIDENTIAL],
			label: 'n251',
			menu: rentMenu
		}
	}"
></ng-container>

<ng-container
	[ngTemplateOutlet]="navItemTemplate"
	[ngTemplateOutletContext]="{
		$implicit: {
			isActive: aisleType.SHARE_RESIDENTIAL | activeNavItem: routeData?.aisle,
			route: ['/', sectionType.PROPERTIES_FOR_RENT, currentLocation(aisleType?.SHARE_RESIDENTIAL), aisleType.SHARE_RESIDENTIAL],
			label: 'n794',
			menu: shareMenu
		}
	}"
></ng-container>

<ng-container
	*ngIf="isPlatformBrowser && (!authService.user() || (authService?.user() && authService?.user()?.hasBusinessProfile !== '1'))"
	[ngTemplateOutlet]="navItemTemplate"
	[ngTemplateOutletContext]="{
		$implicit: {
			route: ['/free-property-valuation'],
			label: 'n4093',
			isNew: true
		}
	}"
></ng-container>
<!-- end - Nav items -->

<!-- TEMPLATES -->

<!-- Nav item template -->
<ng-template #navItemTemplate let-data>
	<a
		mat-button
		disableRipple
		#navItemTrigger="matMenuTrigger"
		class="h-100 text-small-14px-regular fg-general-4 disabled-ripple head-link"
		[class.head-link-active]="data.isActive"
		[matMenuTriggerFor]="data.menu"
		[matMenuTriggerData]="{ navItemTrigger }"
		(mouseenter)="onParentMenuMouseEnter(navItemTrigger)"
		(mouseleave)="isParentMenuActive = false; onMenuMouseLeave(navItemTrigger)"
		(click)="onClickNavItem(data.route)"
		[routerLink]="data.route"
	>
		{{ data.label | translations }}
		<sup *ngIf="data?.isNew" class="bg-prim-2 px-2 rounded fg-basic-1 text-caption-medium ms-2 new-sup">NEW!</sup>
	</a>
</ng-template>

<!-- Menu item template -->
<ng-template #menuItemTemplate let-data>
	<div (mouseenter)="isParentMenuPanelOpen = true" (mouseleave)="isParentMenuPanelOpen = false; onMenuMouseLeave(data.navItemTrigger)">
		@for (item of data.sectionList; track item) {
			<a
				*ngIf="item.reference !== 'rent-commercial'"
				mat-menu-item
				class="text-body-regular fg-general-5 item-link"
				[routerLink]="data.routes | navItemRoute: item.reference"
				(click)="onClickNavItem(data.routes, item.reference)"
			>
				{{ item.translationKey | translations }}
			</a>
			<a
				*ngIf="item.reference === 'rent-commercial'"
				mat-menu-item
				class="text-body-regular fg-general-5 item-link"
				[routerLink]="currentRoute(['/', sectionType.PROPERTIES_FOR_RENT, countyType.DEFAULT, item.reference])"
				(click)="onClickNavItem(['/', sectionType.PROPERTIES_FOR_RENT, countyType.DEFAULT], item.reference)"
			>
				{{ item.translationKey | translations }}
			</a>
		}
	</div>
</ng-template>
<!-- end - Templates -->

<!-- MENUS -->

<!-- Share menu -->
<mat-menu #shareMenu="matMenu" [hasBackdrop]="false">
	<ng-template matMenuContent let-navItemTrigger="navItemTrigger">
		<ng-container
			[ngTemplateOutlet]="menuItemTemplate"
			[ngTemplateOutletContext]="{
				$implicit: {
					sectionList: sectionList | navItems: aisleType.SHARE_RESIDENTIAL,
					routes: ['/', sectionType.PROPERTIES_FOR_RENT, currentLocation(aisleType?.SHARE_RESIDENTIAL), aisleType.SHARE_RESIDENTIAL],
					navItemTrigger
				}
			}"
		></ng-container>
	</ng-template>
</mat-menu>

<!-- Rent menu -->
<mat-menu #rentMenu="matMenu" [hasBackdrop]="false">
	<ng-template matMenuContent let-navItemTrigger="navItemTrigger">
		<ng-container
			[ngTemplateOutlet]="menuItemTemplate"
			[ngTemplateOutletContext]="{
				$implicit: {
					sectionList: sectionList | navItems: aisleType.RENT_RESIDENTIAL,
					routes: ['/', sectionType.PROPERTIES_FOR_RENT, currentLocation(aisleType?.RENT_RESIDENTIAL)],
					navItemTrigger
				}
			}"
		></ng-container>
	</ng-template>
</mat-menu>

<!-- Buy menu -->
<mat-menu #buyMenu="matMenu" [hasBackdrop]="false">
	<ng-template matMenuContent let-navItemTrigger="navItemTrigger">
		<ng-container
			[ngTemplateOutlet]="menuItemTemplate"
			[ngTemplateOutletContext]="{
				$implicit: {
					sectionList: sectionList | navItems: sectionType.PROPERTIES_FOR_SALE,
					routes: ['/', sectionType.PROPERTIES_FOR_SALE, countyType.DEFAULT],
					navItemTrigger
				}
			}"
		></ng-container>
	</ng-template>
</mat-menu>
<!-- end - Menus -->
`, styles: ["/* apps/findqo-ireland/src/app/core/components/header/components/header-nav-items/header-nav-items.component.scss */\n:host.home-banner-nav-items a.head-link {\n  color: var(--basic-1) !important;\n}\na.item-link {\n  width: 280px !important;\n  min-height: 45px;\n  color: var(--general-5);\n}\na.item-link:not(:last-child) {\n  border-bottom: 1px solid var(--neutral-1);\n}\na.head-link-active {\n  border-bottom: 3px solid var(--prim-2);\n  border-radius: 0;\n  color: var(--prim-2) !important;\n  transition: 0.2s ease-in-out;\n}\n.new-sup {\n  right: 3rem;\n  position: relative;\n  top: -15px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/header-nav-items.component.css.map */\n"] }]
  }], () => [{ type: BreadcrumbsState }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: AuthService }, { type: FiltersFacade }, { type: Router }, { type: FiltersService }, { type: ActivatedRoute }], { sectionList: [{
    type: Input
  }], routeData: [{
    type: Input
  }], userData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderNavItemsComponent, { className: "HeaderNavItemsComponent", filePath: "apps/findqo-ireland/src/app/core/components/header/components/header-nav-items/header-nav-items.component.ts", lineNumber: 23 });
})();

// apps/findqo-ireland/src/app/core/components/header/components/header-nav-items/header-nav-item.module.ts
var HeaderNavItemsModule = class _HeaderNavItemsModule {
  static {
    this.\u0275fac = function HeaderNavItemsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderNavItemsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HeaderNavItemsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatMenuModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderNavItemsModule, [{
    type: NgModule,
    args: [{
      declarations: [HeaderNavItemsComponent, NavItemsPipe, ActiveNavItemPipe, NavItemRoutePipe],
      imports: [SharedModule, MatMenuModule],
      exports: [HeaderNavItemsComponent]
    }]
  }], null, null);
})();

export {
  HeaderNavItemsComponent,
  HeaderNavItemsModule
};
//# sourceMappingURL=chunk-EL7AU6Y6.js.map
