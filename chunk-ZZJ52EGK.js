import {
  AgentHubFacade
} from "./chunk-XVUCQVKR.js";
import {
  ConfettiService
} from "./chunk-P5MOHOFP.js";
import {
  SeoGuard
} from "./chunk-44A3ZODA.js";
import {
  ActiveRoute,
  BussinessProfileGuard,
  MatToolbarModule,
  RobotsGuard
} from "./chunk-44CXTGZO.js";
import {
  AuthGuard
} from "./chunk-YWVMQOIU.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-T6P2TQWL.js";
import "./chunk-5JBKTQLQ.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  HeaderAccountMenuComponent,
  HeaderAccountMenuModule,
  HeaderSidenavComponent,
  OFFCANVAS_HEADER_SIDENAV
} from "./chunk-FD6IYBQU.js";
import {
  MatMenuModule
} from "./chunk-5DPLTTSV.js";
import {
  NgbOffcanvas
} from "./chunk-FFTGLPS5.js";
import "./chunk-2RKTIM73.js";
import "./chunk-QNQ2AX2B.js";
import "./chunk-C3BHYCVX.js";
import "./chunk-5CLAA2MT.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import "./chunk-3VMN4KZT.js";
import {
  APP_ROUTE,
  AuthService,
  ButtonModule,
  IntercomService,
  NavigationEnd,
  RouteDataType,
  RouteService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SharedModule,
  ViewportService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  Component,
  Injectable,
  Input,
  NgModule,
  __spreadValues,
  filter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/agent-hub.component.ts
var BOTTOMBAR_HIDDEN_ROUTES = ["meeting-schedule/create", "meeting-schedule/edit", "enquiry-detail", "ad-detail", "matching-tenants"];
var AgentHubComponent = class _AgentHubComponent {
  constructor(router, agentHubFacade, viewport, intercomService, ngbOffCanvas) {
    this.router = router;
    this.agentHubFacade = agentHubFacade;
    this.viewport = viewport;
    this.intercomService = intercomService;
    this.ngbOffCanvas = ngbOffCanvas;
    this.appRoute = APP_ROUTE;
    this.defaultAvatar = environment.defaultAvatarImg;
    this.activeRoute = "";
    this.isAgentBottomNavbarHidden = false;
  }
  getTabSelected(url) {
    this.isAgentBottomNavbarHidden = BOTTOMBAR_HIDDEN_ROUTES.some((route) => {
      return url.includes(route);
    });
    this.activeRoute = url;
  }
  ngOnInit() {
    this.agentHubFacade.loadAdStatusList();
    this.getTabSelected(this.router.url);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.getTabSelected(event.urlAfterRedirects);
    });
  }
  onOpenHeaderSidenav() {
    this.intercomService.toggelIntercomPopup(true);
    this.ngbOffCanvas.open(HeaderSidenavComponent, OFFCANVAS_HEADER_SIDENAV);
  }
  static {
    this.\u0275fac = function AgentHubComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentHubComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(NgbOffcanvas));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentHubComponent, selectors: [["findqo-agent-hub"]], standalone: false, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [[1, "overflow-hidden"]], template: function AgentHubComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "router-outlet");
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet], styles: ["\n\nbutton.menu-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\nbutton.menu-trigger[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\ndiv.menu[_ngcontent-%COMP%] {\n  width: 250px;\n  padding: 8px 0;\n}\ndiv.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 40px;\n}\ndiv.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n.agenthub-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: var(--z-index-bottom-navbar);\n}\n.home-banner-nav-items[_nghost-%COMP%]   a.head-link[_ngcontent-%COMP%] {\n  color: var(--basic-1) !important;\n  padding: 1rem 0;\n}\na.item-link[_ngcontent-%COMP%] {\n  width: 280px !important;\n  min-height: 45px;\n  color: var(--general-5);\n}\na.item-link[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--neutral-1);\n}\na.head-link-active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid var(--prim-2);\n  border-radius: 0;\n  color: var(--prim-2) !important;\n  transition: 0.2s ease-in-out;\n}\n.mob-header[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-right: 13px;\n}\n.header-panel[_ngcontent-%COMP%] {\n  margin-bottom: -40px !important;\n  top: 8px;\n  position: relative;\n}\n.menu-header[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  left: 10px;\n}\n.header-redirect[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n.icn-menu[_ngcontent-%COMP%] {\n  background: var(--basic-1) !important;\n  color: var(--basic-2) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-hub.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentHubComponent, [{
    type: Component,
    args: [{ selector: "findqo-agent-hub", providers: [], standalone: false, template: '<div class="overflow-hidden">\n	<router-outlet></router-outlet>\n\n	<!-- <ng-container *ngIf="!isAgentBottomNavbarHidden">\n		<findqo-bottom-navbar class="d-md-none agenthub-footer" [isAgentHub]="true"></findqo-bottom-navbar>\n	</ng-container> -->\n	<!-- Nav item template -->\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/agent-hub.component.scss */\nbutton.menu-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\nbutton.menu-trigger img.avatar {\n  height: 28px;\n  width: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\ndiv.menu {\n  width: 250px;\n  padding: 8px 0;\n}\ndiv.menu a {\n  height: 40px;\n}\ndiv.menu a mat-icon {\n  margin-right: 8px !important;\n}\n.agenthub-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: var(--z-index-bottom-navbar);\n}\n:host.home-banner-nav-items a.head-link {\n  color: var(--basic-1) !important;\n  padding: 1rem 0;\n}\na.item-link {\n  width: 280px !important;\n  min-height: 45px;\n  color: var(--general-5);\n}\na.item-link:not(:last-child) {\n  border-bottom: 1px solid var(--neutral-1);\n}\na.head-link-active {\n  border-bottom: 3px solid var(--prim-2);\n  border-radius: 0;\n  color: var(--prim-2) !important;\n  transition: 0.2s ease-in-out;\n}\n.mob-header {\n  font-size: 26px;\n  margin-right: 13px;\n}\n.header-panel {\n  margin-bottom: -40px !important;\n  top: 8px;\n  position: relative;\n}\n.menu-header {\n  background: none;\n  border: none;\n  left: 10px;\n}\n.header-redirect {\n  z-index: 1000;\n}\n.icn-menu {\n  background: var(--basic-1) !important;\n  color: var(--basic-2) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-hub.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AgentHubFacade }, { type: ViewportService }, { type: IntercomService }, { type: NgbOffcanvas }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentHubComponent, { className: "AgentHubComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/agent-hub.component.ts", lineNumber: 23 });
})();

// apps/findqo-ireland/src/app/core/guards/agent.guard.ts
var AgentGuard = class _AgentGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    const IS_AGENT = this.auth.user()?.roles.some((role) => role === "isAgentUser");
    if (!IS_AGENT) {
      return true;
    }
    this.router.navigate([`${APP_ROUTE.myProfile}/${APP_ROUTE.businessProfile.base}`]);
    return false;
  }
  static {
    this.\u0275fac = function AgentGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentGuard, factory: _AgentGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/agent-hub-routing.module.ts
var routes = [
  {
    path: "",
    component: AgentHubComponent,
    children: [
      {
        path: "",
        redirectTo: APP_ROUTE.agentHub.listings,
        pathMatch: "full"
      },
      __spreadValues({
        path: APP_ROUTE.agentHub.listings,
        loadChildren: () => import("./chunk-W4SVT6FO.js").then((m) => m.ListingsModule)
      }, false ? { \u0275entryName: "src/app/feature/agent-hub/pages/listings/listings.module.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.agentHub.enquiries,
        loadChildren: () => import("./chunk-CJQ6PT2P.js").then((m) => m.EnquiriesModule)
      }, false ? { \u0275entryName: "src/app/feature/agent-hub/pages/enquiries/enquiries.module.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.agentHub.agents,
        loadChildren: () => import("./chunk-F3B7X7SP.js").then((m) => m.AgentsModule)
      }, false ? { \u0275entryName: "src/app/feature/agent-hub/pages/agents/agents.module.ts" } : {}),
      {
        path: APP_ROUTE.businessProfile.agentList,
        redirectTo: APP_ROUTE.agentHub.agents,
        pathMatch: "full"
      },
      __spreadValues({
        path: APP_ROUTE.agentHub.adDetail,
        data: { title: "n476" },
        loadChildren: () => import("./chunk-HRXOKTGK.js").then((m) => m.AdDetailPageModule),
        canActivate: [SeoGuard]
      }, false ? { \u0275entryName: "src/app/feature/agent-hub/pages/ad-detail/ad-detail.module.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.agentHub.enquiryDetail,
        data: { title: "n4074" },
        loadChildren: () => import("./chunk-HW6EBXZN.js").then((m) => m.EnquiryDetailPageModule),
        canActivate: [SeoGuard]
      }, false ? { \u0275entryName: "src/app/feature/agent-hub/pages/enquiry-detail/enquiry-detail.module.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.meetingSchedule.base,
        data: { title: "n3917", [RouteDataType.IS_HEADER_VISIBLE]: false, [RouteDataType.IS_FOOTER_VISIBLE]: false },
        loadChildren: () => import("./chunk-DSUDNEWZ.js").then((m) => m.MeetingScheduleModule),
        canActivate: [AuthGuard, SeoGuard, RobotsGuard]
      }, false ? { \u0275entryName: "src/app/feature/meeting-schedule/meeting-schedule.module.ts" } : {}),
      {
        path: APP_ROUTE.myProfile,
        redirectTo: "/" + APP_ROUTE.myProfile,
        pathMatch: "full"
      },
      __spreadValues({
        path: APP_ROUTE.businessProfile.base,
        loadComponent: () => import("./chunk-QEKE4AQF.js").then((c) => c.BusinessProfilePage),
        data: { title: "n4042" },
        canActivate: [SeoGuard, BussinessProfileGuard]
      }, false ? { \u0275entryName: "src/app/feature/my-profile/pages/business-profile/business-profile.page.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.businessProfile.edit,
        loadChildren: () => import("./chunk-RWKLVF3E.js").then((c) => c.BusinessAccountV2Module),
        canActivate: [BussinessProfileGuard, AgentGuard]
      }, false ? { \u0275entryName: "src/app/feature/my-profile/v2/components/business-account-v2/business-account-v2.module.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.businessProfile.subscription,
        loadComponent: () => import("./chunk-5RGLXM4I.js").then((c) => c.SubscriptionPlanComponent),
        data: { title: "n4032" },
        canActivate: [SeoGuard, BussinessProfileGuard, AgentGuard]
      }, false ? { \u0275entryName: "src/app/feature/my-profile/pages/subscription-plan/subscription-plan.component.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.businessProfile.paymentPlan,
        loadComponent: () => import("./chunk-LBDYA63U.js").then((c) => c.PaymentPlanComponent),
        data: { title: "n4032" },
        canActivate: [SeoGuard, BussinessProfileGuard, AgentGuard]
      }, false ? { \u0275entryName: "src/app/feature/my-profile/pages/payment-plan/payment-plan.component.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.businessProfile.paymentSuccess,
        loadComponent: () => import("./chunk-JPAYLN5L.js").then((c) => c.PaymentSucessPage)
      }, false ? { \u0275entryName: "src/app/feature/my-profile/pages/payment-sucess/payment-sucess.page.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.businessProfile.welcome,
        loadComponent: () => import("./chunk-X2TFZ5E2.js").then((c) => c.WelcomeBusinessPage)
      }, false ? { \u0275entryName: "src/app/feature/my-profile/pages/welcome-business/welcome-business.page.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.myAdmatchingTenants,
        loadChildren: () => import("./chunk-3USTETRK.js").then((m) => m.MyAdMatchingTenantListPageModule),
        canActivate: [AuthGuard, SeoGuard]
      }, false ? { \u0275entryName: "src/app/feature/my-ads/pages/my-ad-matching-tenant-list/my-ad-matching-tenant-list.module.ts" } : {}),
      __spreadValues({
        path: APP_ROUTE.agentHub.leads,
        loadChildren: () => import("./chunk-I72VYRVL.js").then((m) => m.LeadsModule)
      }, false ? { \u0275entryName: "src/app/feature/agent-hub/pages/leads/leads.module.ts" } : {})
    ]
  }
];
var AgentHubRoutingModule = class _AgentHubRoutingModule {
  static {
    this.\u0275fac = function AgentHubRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentHubRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentHubRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule, RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentHubRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/components/bottom-navbar/bottom-navbar.component.ts
function BottomNavbarComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 5)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedRoute == null ? null : ctx_r2.selectedRoute.includes(item_r2.route));
    \u0275\u0275property("routerLink", item_r2.route)("queryParams", item_r2.queryParams);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
function BottomNavbarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-header-account-menu");
  }
}
var BottomNavbarComponent = class _BottomNavbarComponent {
  constructor(ngbOffCanvas, routeService, intercomService, router) {
    this.ngbOffCanvas = ngbOffCanvas;
    this.routeService = routeService;
    this.intercomService = intercomService;
    this.router = router;
    this.isAgentHub = false;
    this.routeDataType = RouteDataType;
    this.selectedRoute = null;
    this.navItems = [
      {
        label: "Listings",
        icon: "summarize",
        route: `${APP_ROUTE.agentHub.listings}`
      },
      {
        label: "Enquiries",
        icon: "mail",
        route: `${APP_ROUTE.agentHub.enquiries}`
      },
      {
        label: "List Property",
        icon: "add_circle",
        route: `/${APP_ROUTE.placeAdCategory}`,
        queryParams: { sellerTypeId: 2 }
      },
      {
        label: "Agents",
        icon: "person",
        route: `${APP_ROUTE.agentHub.agents}`
      }
    ];
  }
  onOpenHeaderSidenav() {
    this.intercomService.toggelIntercomPopup(true);
    const OPENED_REF = this.ngbOffCanvas.open(HeaderSidenavComponent, OFFCANVAS_HEADER_SIDENAV);
    OPENED_REF.componentInstance.isAgentHub = true;
  }
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.selectedRoute = this.router.url;
    });
  }
  static {
    this.\u0275fac = function BottomNavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BottomNavbarComponent)(\u0275\u0275directiveInject(NgbOffcanvas), \u0275\u0275directiveInject(RouteService), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomNavbarComponent, selectors: [["findqo-bottom-navbar"]], inputs: { isAgentHub: "isAgentHub" }, decls: 13, vars: 1, consts: [["tabPanel", ""], ["headerAccountMenuTemplate", ""], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 1, "tab", "disable-ripple", 3, "active", "routerLink", "queryParams"], ["mat-tab-link", "", 1, "tab", "disable-ripple", 3, "click"], [1, "link-content"], [1, "text-caption-2-regular"], ["mat-tab-link", "", 1, "tab", "disable-ripple", 3, "routerLink", "queryParams"]], template: function BottomNavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "nav", 2);
        \u0275\u0275repeaterCreate(1, BottomNavbarComponent_For_2_Template, 6, 6, "a", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(3, "button", 4);
        \u0275\u0275listener("click", function BottomNavbarComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onOpenHeaderSidenav());
        });
        \u0275\u0275elementStart(4, "div", 5)(5, "mat-icon");
        \u0275\u0275text(6, "menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "Menu");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(9, "mat-tab-nav-panel", null, 0);
        \u0275\u0275template(11, BottomNavbarComponent_ng_template_11_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const tabPanel_r4 = \u0275\u0275reference(10);
        \u0275\u0275property("tabPanel", tabPanel_r4);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.navItems);
      }
    }, dependencies: [SharedModule, MatIcon, RouterLink, MatTabsModule, MatTabNav, MatTabNavPanel, MatTabLink, HeaderAccountMenuModule, HeaderAccountMenuComponent], styles: ["\n\nnav[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background: var(--basic-1);\n  border-top: 1px solid var(--general-1);\n}\na.tab[_ngcontent-%COMP%], \nbutton.tab[_ngcontent-%COMP%] {\n  min-width: 59px;\n  padding: 0;\n}\na.tab[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%], \nbutton.tab[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 0.25rem;\n  column-gap: 1rem;\n}\na.tab[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \nbutton.tab[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--general-4);\n}\na.tab[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.tab[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--general-3);\n}\na.tab.active[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \na.tab.active[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.tab.active[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \nbutton.tab.active[_ngcontent-%COMP%]   div.link-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/bottom-navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomNavbarComponent, [{
    type: Component,
    args: [{ imports: [SharedModule, MatTabsModule, HeaderAccountMenuModule], selector: "findqo-bottom-navbar", template: '<nav mat-tab-nav-bar [tabPanel]="tabPanel">\n	@for (item of navItems; track item) {\n		<a mat-tab-link class="tab disable-ripple" [class.active]="selectedRoute?.includes(item.route)" [routerLink]="item.route" [queryParams]="item.queryParams">\n			<div class="link-content">\n				<mat-icon>{{ item.icon }}</mat-icon>\n\n				<span class="text-caption-2-regular">\n					{{ item.label }}\n				</span>\n			</div>\n		</a>\n	}\n\n	<button mat-tab-link class="tab disable-ripple" (click)="onOpenHeaderSidenav()">\n		<div class="link-content">\n			<mat-icon>menu</mat-icon>\n\n			<span class="text-caption-2-regular">Menu</span>\n		</div>\n	</button>\n</nav>\n\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n\n<ng-template #headerAccountMenuTemplate>\n	<findqo-header-account-menu></findqo-header-account-menu>\n</ng-template>\n', styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/components/bottom-navbar/bottom-navbar.component.scss */\nnav {\n  padding: 0.5rem;\n  background: var(--basic-1);\n  border-top: 1px solid var(--general-1);\n}\na.tab,\nbutton.tab {\n  min-width: 59px;\n  padding: 0;\n}\na.tab div.link-content,\nbutton.tab div.link-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 0.25rem;\n  column-gap: 1rem;\n}\na.tab div.link-content mat-icon,\nbutton.tab div.link-content mat-icon {\n  color: var(--general-4);\n}\na.tab div.link-content span,\nbutton.tab div.link-content span {\n  display: block;\n  color: var(--general-3);\n}\na.tab.active div.link-content mat-icon,\na.tab.active div.link-content span,\nbutton.tab.active div.link-content mat-icon,\nbutton.tab.active div.link-content span {\n  color: var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/bottom-navbar.component.css.map */\n"] }]
  }], () => [{ type: NgbOffcanvas }, { type: RouteService }, { type: IntercomService }, { type: Router }], { isAgentHub: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomNavbarComponent, { className: "BottomNavbarComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/components/bottom-navbar/bottom-navbar.component.ts", lineNumber: 27 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/agent-hub.module.ts
var AgentHubModule = class _AgentHubModule {
  static {
    this.\u0275fac = function AgentHubModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentHubModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentHubModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ConfettiService, SharedAdsFacade], imports: [SharedModule, AgentHubRoutingModule, ButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, BottomNavbarComponent, HeaderAccountMenuModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentHubModule, [{
    type: NgModule,
    args: [{
      declarations: [AgentHubComponent],
      imports: [SharedModule, ActiveRoute, AgentHubRoutingModule, ButtonModule, MatToolbarModule, MatMenuModule, MatTabsModule, BottomNavbarComponent, HeaderAccountMenuModule],
      providers: [ConfettiService, SharedAdsFacade]
    }]
  }], null, null);
})();
export {
  AgentHubModule
};
//# sourceMappingURL=chunk-ZZJ52EGK.js.map
