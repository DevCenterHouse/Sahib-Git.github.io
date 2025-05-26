import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import {
  NgbOffcanvas
} from "./chunk-FFTGLPS5.js";
import {
  FiltersFacade
} from "./chunk-2RKTIM73.js";
import {
  BreakpointObserverService
} from "./chunk-QNQ2AX2B.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AmplitudeService,
  ButtonComponent,
  ButtonType,
  CommonFacade,
  CountyType,
  FeatureVersion,
  FilterType,
  HEADER_ACCOUNT_NAV_LIST,
  HEADER_OTHER_NAV_LIST,
  HeaderFacade,
  IntercomService,
  LocaleType,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatIconButton,
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatNavList,
  NavMenuItemsPipe,
  Router,
  RouterLink,
  SharedModule,
  TranslationsPipe,
  ViewportService,
  environment
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
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Input,
  NgModule,
  ViewChild,
  filter,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/components/header/components/logout-dialog/logout-dialog.component.ts
var LogoutDialogComponent = class _LogoutDialogComponent {
  constructor(data, dailogRef) {
    this.data = data;
    this.dailogRef = dailogRef;
  }
  static {
    this.\u0275fac = function LogoutDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LogoutDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogoutDialogComponent, selectors: [["findqo-logout-dialog"]], standalone: false, decls: 14, vars: 4, consts: [[1, "container-fluid", "p-3", "p-lg-4"], [1, "d-block", "fs-16px", "fw-500", "mb-1", "lh-22px"], [1, "d-block", "fs-16px", "fw-400", "lh-22px", "fg-general-4"], [1, "row", "mx-0", "align-items-center", "mt-4"], [1, "col", "px-0"], ["mat-dialog-close", "", "mat-flat-button", "", "color", "primary", 1, "w-100", "px-0", 3, "click"], [1, "fs-16px"], [1, "col-auto", "px-0"], ["mat-flat-button", "", 3, "click"], [1, "fs-16px", "fg-prim-2"]], template: function LogoutDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function LogoutDialogComponent_Template_button_click_7_listener() {
          return ctx.dailogRef.close(false);
        });
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
        \u0275\u0275listener("click", function LogoutDialogComponent_Template_button_click_11_listener() {
          return ctx.dailogRef.close(true);
        });
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.message);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.data.cancelButton);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.data.confirmButton);
      }
    }, dependencies: [MatButton, MatDialogClose], styles: ["\n\n.row[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n.row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 38px !important;\n  line-height: 38px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/logout-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoutDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-logout-dialog", standalone: false, template: '<div class="container-fluid p-3 p-lg-4">\n	<span class="d-block fs-16px fw-500 mb-1 lh-22px">{{ data.title }}</span>\n\n	<span class="d-block fs-16px fw-400 lh-22px fg-general-4">{{ data.message }}</span>\n\n	<div class="row mx-0 align-items-center mt-4">\n		<div class="col px-0">\n			<button mat-dialog-close mat-flat-button color="primary" class="w-100 px-0" (click)="dailogRef.close(false)">\n				<span class="fs-16px">{{ data.cancelButton }}</span>\n			</button>\n		</div>\n\n		<div class="col-auto px-0">\n			<button mat-flat-button (click)="dailogRef.close(true)">\n				<span class="fs-16px fg-prim-2">{{ data.confirmButton }}</span>\n			</button>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/core/components/header/components/logout-dialog/logout-dialog.component.scss */\n.row {\n  gap: 8px;\n}\n.row button {\n  height: 38px !important;\n  line-height: 38px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/logout-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogoutDialogComponent, { className: "LogoutDialogComponent", filePath: "apps/findqo-ireland/src/app/core/components/header/components/logout-dialog/logout-dialog.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/core/components/header/abstracts/header.abstract.ts
var LANGUAGE_NAVS = [
  {
    locale: LocaleType.ENGLISH,
    value: "English"
  },
  {
    locale: LocaleType.KURDISTAN,
    value: "\u06A9\u0648\u0631\u062F\u06CC"
  },
  {
    locale: LocaleType.ARABIC,
    value: "\u0639\u0631\u0628\u0649"
  }
];
var AbstractHeaderComponent = class _AbstractHeaderComponent {
  constructor() {
    this.headerFacade = inject(HeaderFacade);
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.viewportService = inject(ViewportService);
    this.offcanvas = inject(NgbOffcanvas);
    this.commonFacade = inject(CommonFacade);
    this.bpoService = inject(BreakpointObserverService);
    this.amplitude = inject(AmplitudeService);
    this.isAgentHub = false;
    this.localeType = LocaleType;
    this.languageNavs = LANGUAGE_NAVS;
    this.isSellerModuleEnabled = environment.isSellerModuleEnabled;
    this.buttonType = ButtonType;
    this.featureVersion = FeatureVersion;
    this.defaultAvatar = environment.defaultAvatarImg;
    this.accountNavList = HEADER_ACCOUNT_NAV_LIST;
    this.appRoute = APP_ROUTE;
  }
  onLogout() {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    const DIALOG_DATA = {
      title: TRANSLATIONS["n15"],
      message: TRANSLATIONS["n16"],
      confirmButton: TRANSLATIONS["n18"],
      cancelButton: TRANSLATIONS["n17"]
    };
    this.dialog.open(LogoutDialogComponent, { data: DIALOG_DATA, height: "auto", width: "auto", maxWidth: "353px" }).afterClosed().subscribe((res) => {
      if (res) {
        if (this.getCurrentRoute() === "/about") {
          this.headerFacade.logout(false);
          this.offcanvas.dismiss();
        } else {
          this.headerFacade.logout(true);
          this.offcanvas.dismiss();
        }
      }
    });
  }
  onLogin() {
    this.headerFacade.openAuthDialog();
  }
  onNavigate(url) {
    if (!this.user) {
      this.onLogin();
      return;
    }
    if (this.viewportService.mobile) {
      this.offcanvas.dismiss();
    }
    this.router.navigate([url]);
  }
  redirectTo(url) {
    if (this.viewportService.mobile) {
      this.offcanvas.dismiss();
    }
    this.router.navigate([url]);
  }
  onSelectLanguage(locale) {
    this.headerFacade.setLocale(locale);
  }
  getCurrentRoute() {
    return this.router.url;
  }
  initDeclarations() {
    this.sectionList$ = this.commonFacade.getSectionList$();
    this.user$ = this.headerFacade.getUser$();
  }
  ngOnInit() {
    this.initDeclarations();
  }
  trackEvent(nav) {
    if (nav.path === "/place-ad") {
      this.amplitude.trackPlaceAdButtonClicked(nav.data?.title);
    }
  }
  static {
    this.\u0275fac = function AbstractHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbstractHeaderComponent, selectors: [["ng-component"]], inputs: { sections: "sections", locale: "locale", translations: "translations", user: "user", isAgentHub: "isAgentHub" }, standalone: false, decls: 0, vars: 0, template: function AbstractHeaderComponent_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractHeaderComponent, [{
    type: Component,
    args: [{
      template: "",
      standalone: false
    }]
  }], null, { sections: [{
    type: Input
  }], locale: [{
    type: Input
  }], translations: [{
    type: Input
  }], user: [{
    type: Input
  }], isAgentHub: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbstractHeaderComponent, { className: "AbstractHeaderComponent", filePath: "apps/findqo-ireland/src/app/core/components/header/abstracts/header.abstract.ts", lineNumber: 40 });
})();

// apps/findqo-ireland/src/app/core/components/header/components/header-account-menu/header-account-menu.component.ts
var _c0 = (a0, a1, a2) => [a0, false, a1, true, a2];
function HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const nav_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngSrc", "assets/images/" + nav_r2.data.iconImage + ".svg");
  }
}
function HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(nav_r2.data.icon);
  }
}
function HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "NEW!");
    \u0275\u0275elementEnd();
  }
}
function HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275template(1, HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_img_1_Template, 1, 1, "img", 13)(2, HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_mat_icon_2_Template, 2, 1, "mat-icon", 14);
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_span_6_Template, 2, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", nav_r2.path);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nav_r2.data.iconImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nav_r2.data.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, nav_r2.data.title));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", nav_r2.data == null ? null : nav_r2.data.isNew);
  }
}
function HeaderAccountMenuComponent_ng_container_0_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderAccountMenuComponent_ng_container_0_For_11_Conditional_0_Template, 7, 7, "a", 12);
  }
  if (rf & 2) {
    const nav_r2 = ctx.$implicit;
    const user_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(("/" + ctx_r3.appRoute.placeAd === nav_r2.path ? !!+user_r3.hasBusinessProfile : true) ? 0 : -1);
  }
}
function HeaderAccountMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 2);
    \u0275\u0275element(2, "img", 3);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "mat-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-menu", 6, 0)(8, "div", 7)(9, "div", 8);
    \u0275\u0275repeaterCreate(10, HeaderAccountMenuComponent_ng_container_0_For_11_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(12, "navMenuItems");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function HeaderAccountMenuComponent_ng_container_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onLogout());
    });
    \u0275\u0275elementStart(14, "mat-icon", 10);
    \u0275\u0275text(15, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translations");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.ngIf;
    const accountMenu_r5 = \u0275\u0275reference(7);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", accountMenu_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", (user_r3 == null ? null : user_r3.picture) ? user_r3.picture : ctx_r3.defaultAvatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.name);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBindV(12, 4, \u0275\u0275pureFunction3(12, _c0, user_r3, ctx_r3.isAgentHub, ctx_r3.viewportService)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 10, "n14"));
  }
}
var HeaderAccountMenuComponent = class _HeaderAccountMenuComponent extends AbstractHeaderComponent {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HeaderAccountMenuComponent_BaseFactory;
      return function HeaderAccountMenuComponent_Factory(__ngFactoryType__) {
        return (\u0275HeaderAccountMenuComponent_BaseFactory || (\u0275HeaderAccountMenuComponent_BaseFactory = \u0275\u0275getInheritedFactory(_HeaderAccountMenuComponent)))(__ngFactoryType__ || _HeaderAccountMenuComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderAccountMenuComponent, selectors: [["findqo-header-account-menu"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 3, consts: [["accountMenu", "matMenu"], [4, "ngIf"], ["mat-icon-button", "", 1, "menu-trigger", 3, "matMenuTriggerFor"], ["width", "40", "height", "40", "alt", "user profile picture", 1, "avatar", 3, "ngSrc"], [1, "text-body-regular", "fg-general-4", "text-capitalize", "text-truncate"], ["svgIcon", "arrow-drop-down"], [1, "mt-2", "home-header-menu-dropdown"], [1, "menu"], [1, "border-bottom"], ["mat-menu-item", "", 3, "click"], [1, "material-icons-outlined", "fg-general-4"], [1, "text-body-regular", "fg-general-5"], ["mat-menu-item", "", 3, "routerLink"], ["width", "24", "height", "24", "alt", "business profile", "class", "me-2", 3, "ngSrc", 4, "ngIf"], ["class", "material-icons-outlined fg-general-4", 4, "ngIf"], ["class", "bg-prim-2 px-2 rounded fg-basic-1 text-caption-medium ms-2", 4, "ngIf"], ["width", "24", "height", "24", "alt", "business profile", 1, "me-2", 3, "ngSrc"], [1, "bg-prim-2", "px-2", "rounded", "fg-basic-1", "text-caption-medium", "ms-2"]], template: function HeaderAccountMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HeaderAccountMenuComponent_ng_container_0_Template, 19, 16, "ng-container", 1);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.user$));
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, RouterLink, NgOptimizedImage, MatMenu, MatMenuItem, MatMenuTrigger, AsyncPipe, TranslationsPipe, NavMenuItemsPipe], styles: ["\n\n.home-account-menu[_nghost-%COMP%]   button.menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--basic-1) !important;\n}\nbutton.menu-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\nbutton.menu-trigger[_ngcontent-%COMP%]   img.avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\nbutton.menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\ndiv.menu[_ngcontent-%COMP%] {\n  width: 290px !important;\n  max-width: 290px !important;\n  padding: 8px 0;\n}\ndiv.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 40px;\n}\ndiv.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/header-account-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderAccountMenuComponent, [{
    type: Component,
    args: [{ selector: "findqo-header-account-menu", standalone: false, template: `<ng-container *ngIf="user$ | async as user">
	<button mat-icon-button class="menu-trigger" [matMenuTriggerFor]="accountMenu">
		<img class="avatar" width="40" height="40" alt="user profile picture" [ngSrc]="user?.picture ? user.picture : defaultAvatar" />

		<span class="text-body-regular fg-general-4 text-capitalize text-truncate">{{ user.name }}</span>

		<mat-icon svgIcon="arrow-drop-down"></mat-icon>
	</button>

	<mat-menu #accountMenu="matMenu" class="mt-2 home-header-menu-dropdown">
		<div class="menu">
			<div class="border-bottom">
				@for (nav of user | navMenuItems: false : isAgentHub : true : viewportService; track nav) {
					@if ('/' + appRoute.placeAd === nav.path ? !!+user.hasBusinessProfile : true) {
						<a mat-menu-item [routerLink]="nav.path">
							<img
								*ngIf="nav.data.iconImage"
								[ngSrc]="'assets/images/' + nav.data.iconImage + '.svg'"
								width="24"
								height="24"
								alt="business profile"
								class="me-2"
							/>

							<mat-icon class="material-icons-outlined fg-general-4" *ngIf="nav.data.icon">{{ nav.data.icon }}</mat-icon>

							<span class="text-body-regular fg-general-5">{{ nav.data.title | translations }}</span>
							<span *ngIf="nav.data?.isNew" class="bg-prim-2 px-2 rounded fg-basic-1 text-caption-medium ms-2">NEW!</span>
						</a>
					}
				}
			</div>

			<button mat-menu-item (click)="onLogout()">
				<mat-icon class="material-icons-outlined fg-general-4">logout</mat-icon>
				<span class="text-body-regular fg-general-5">{{ 'n14' | translations }}</span>
			</button>
		</div>
	</mat-menu>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/core/components/header/components/header-account-menu/header-account-menu.component.scss */\n:host.home-account-menu button.menu-trigger span {\n  color: var(--basic-1) !important;\n}\nbutton.menu-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\nbutton.menu-trigger img.avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\nbutton.menu-trigger span {\n  max-width: 150px;\n}\ndiv.menu {\n  width: 290px !important;\n  max-width: 290px !important;\n  padding: 8px 0;\n}\ndiv.menu a {\n  height: 40px;\n}\ndiv.menu a mat-icon {\n  margin-right: 8px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/header-account-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderAccountMenuComponent, { className: "HeaderAccountMenuComponent", filePath: "apps/findqo-ireland/src/app/core/components/header/components/header-account-menu/header-account-menu.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/core/components/header/components/header-account-menu/header-account-menu.module.ts
var HeaderAccountMenuModule = class _HeaderAccountMenuModule {
  static {
    this.\u0275fac = function HeaderAccountMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderAccountMenuModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HeaderAccountMenuModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatMenuModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderAccountMenuModule, [{
    type: NgModule,
    args: [{
      declarations: [HeaderAccountMenuComponent],
      imports: [SharedModule, MatMenuModule],
      exports: [HeaderAccountMenuComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/components/header/components/header-sidenav/header-sidenav.component.ts
var _c02 = ["hiddenButton"];
var _c1 = (a0) => ({ user: a0 });
var _c2 = (a0, a1, a2) => [a0, true, a1, true, a2];
var _c3 = (a0) => ({ $implicit: a0 });
function HeaderSidenavComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", (vm_r1.user == null ? null : vm_r1.user.picture) ? vm_r1.user.picture : ctx_r1.defaultAvatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r1.user.email);
  }
}
function HeaderSidenavComponent_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3786"));
  }
}
function HeaderSidenavComponent_div_2_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3252"));
  }
}
function HeaderSidenavComponent_div_2_findqo_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 21);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function HeaderSidenavComponent_div_2_findqo_button_5_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLogin());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "n11"))("btnType", ctx_r1.buttonType.FILLED);
  }
}
function HeaderSidenavComponent_div_2_8_ng_template_0_Template(rf, ctx) {
}
function HeaderSidenavComponent_div_2_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderSidenavComponent_div_2_8_ng_template_0_Template, 0, 0, "ng-template", 22);
  }
  if (rf & 2) {
    const nav_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const listItemTemplate_r5 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", listItemTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, nav_r4));
  }
}
function HeaderSidenavComponent_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-list-item", 24);
    \u0275\u0275listener("click", function HeaderSidenavComponent_div_2_div_10_Template_mat_list_item_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275elementStart(2, "mat-icon", 25);
    \u0275\u0275text(3, "logout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "n14"));
  }
}
function HeaderSidenavComponent_div_2_12_ng_template_0_Template(rf, ctx) {
}
function HeaderSidenavComponent_div_2_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderSidenavComponent_div_2_12_ng_template_0_Template, 0, 0, "ng-template", 22);
  }
  if (rf & 2) {
    const nav_r7 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const listItemTemplate_r5 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", listItemTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, nav_r7));
  }
}
function HeaderSidenavComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div");
    \u0275\u0275template(2, HeaderSidenavComponent_div_2_div_2_Template, 7, 3, "div", 5)(3, HeaderSidenavComponent_div_2_span_3_Template, 3, 3, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HeaderSidenavComponent_div_2_p_4_Template, 3, 3, "p", 7)(5, HeaderSidenavComponent_div_2_findqo_button_5_Template, 2, 4, "findqo-button", 8);
    \u0275\u0275elementStart(6, "mat-nav-list", 9)(7, "div", 10);
    \u0275\u0275template(8, HeaderSidenavComponent_div_2_8_Template, 1, 4, null, 11);
    \u0275\u0275pipe(9, "navMenuItems");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, HeaderSidenavComponent_div_2_div_10_Template, 7, 3, "div", 12);
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275template(12, HeaderSidenavComponent_div_2_12_Template, 1, 4, null, 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r1.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r1.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r1.user);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r1.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBindV(9, 7, \u0275\u0275pureFunction3(13, _c2, vm_r1.user, ctx_r1.isAgentHub, ctx_r1.viewportService)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r1.user);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.otherNavList);
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 29)(1, "a", 30)(2, "mat-icon", 31);
    \u0275\u0275text(3, "feedback");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nav_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", nav_r8.path, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "n3278"), " ");
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const nav_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngSrc", "assets/images/" + nav_r8.data.iconImage + ".svg");
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", (nav_r8.data == null ? null : nav_r8.data.isOther) ? "fg-general-3 material-symbols-outlined" : "fg-general-4");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", nav_r8.data.icon, " ");
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_1_span_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "NEW!");
    \u0275\u0275elementEnd();
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275template(3, HeaderSidenavComponent_ng_template_4_mat_list_item_1_span_3_span_3_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", (nav_r8.data == null ? null : nav_r8.data.isOther) ? "fg-general-3" : (nav_r8.data == null ? null : nav_r8.data.isSubmenu) ? "fg-general-4" : "fg-general-5");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, nav_r8.data.title), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", nav_r8.data == null ? null : nav_r8.data.isNew);
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_1_findqo_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 42);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function HeaderSidenavComponent_ng_template_4_mat_list_item_1_findqo_button_4_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showIntercom());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("label", \u0275\u0275pipeBind1(1, 3, "n3073"))("btnClass", "fg-general-3");
  }
}
function HeaderSidenavComponent_ng_template_4_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 32);
    \u0275\u0275listener("click", function HeaderSidenavComponent_ng_template_4_mat_list_item_1_Template_mat_list_item_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const nav_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.offcanvas.dismiss();
      return \u0275\u0275resetView(ctx_r1.trackEvent(nav_r8));
    });
    \u0275\u0275template(1, HeaderSidenavComponent_ng_template_4_mat_list_item_1_img_1_Template, 1, 1, "img", 33)(2, HeaderSidenavComponent_ng_template_4_mat_list_item_1_mat_icon_2_Template, 2, 2, "mat-icon", 34)(3, HeaderSidenavComponent_ng_template_4_mat_list_item_1_span_3_Template, 4, 5, "span", 35)(4, HeaderSidenavComponent_ng_template_4_mat_list_item_1_findqo_button_4_Template, 2, 5, "findqo-button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const nav_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r1.getRoute(nav_r8.path))("queryParams", ctx_r1.getQueryParams(nav_r8 == null ? null : nav_r8.path, nav_r8 == null ? null : nav_r8.queryParams));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nav_r8.data.iconImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nav_r8.data.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !nav_r8.data.isPopup);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", nav_r8.data.isPopup);
  }
}
function HeaderSidenavComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderSidenavComponent_ng_template_4_mat_list_item_0_Template, 6, 4, "mat-list-item", 27)(1, HeaderSidenavComponent_ng_template_4_mat_list_item_1_Template, 5, 6, "mat-list-item", 28);
  }
  if (rf & 2) {
    const nav_r8 = ctx.$implicit;
    \u0275\u0275property("ngIf", nav_r8.data == null ? null : nav_r8.data.newTab);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(nav_r8.data == null ? null : nav_r8.data.newTab));
  }
}
var HeaderSidenavComponent = class _HeaderSidenavComponent extends AbstractHeaderComponent {
  constructor(destroyService, intercomService, filterFacade) {
    super();
    this.destroyService = destroyService;
    this.intercomService = intercomService;
    this.filterFacade = filterFacade;
    this.otherNavList = HEADER_OTHER_NAV_LIST;
  }
  onClose() {
    this.offcanvas.dismiss();
    if (this.router.url === "/") {
      this.intercomService.toggelIntercomPopup(false);
    }
  }
  onBreakpointChange() {
    this.bpoService.isDesktop$.pipe(takeUntil(this.destroyService), filter((isDesktop) => isDesktop)).subscribe(() => this.offcanvas.dismiss());
  }
  ngOnInit() {
    super.ngOnInit();
    this.onBreakpointChange();
    if (this.hiddenButton && this.hiddenButton.nativeElement) {
      this.hiddenButton.nativeElement.focus();
    }
  }
  showIntercom() {
    this.intercomService.showIntercom();
  }
  getRoute(route) {
    const CURRENT_ROUTE = this.router.routerState.root.firstChild;
    const location = CURRENT_ROUTE.snapshot.params?.[FilterType.LOCATION_REFERENCE] || CURRENT_ROUTE.snapshot.data?.[FilterType.LOCATION_REFERENCE] || CountyType.DEFAULT;
    const params = this.filterFacade.getParams();
    if (route?.includes("apartments") || route?.includes("houses")) {
      route = route.replace("ireland", location);
      return route;
    }
    if ((route?.includes("share-residential") || route?.includes("rent-residential")) && (params?.["aisle"].includes("share-residential") || params?.["aisle"].includes("rent-residential"))) {
      route = route.replace("ireland", location);
      if (["houses", "apartments"].includes(params["stand"])) {
        const updatedRoute = route + "/" + params["stand"];
        return updatedRoute;
      }
      return route;
    }
    return route;
  }
  getQueryParams(route, query) {
    const params = this.filterFacade.getParams();
    if ((route?.includes("share-residential") || route?.includes("rent-residential")) && (params?.["aisle"].includes("share-residential") || params?.["aisle"].includes("rent-residential"))) {
      const queryParams = this.route.snapshot.queryParams;
      return queryParams;
    }
    return query;
  }
  static {
    this.\u0275fac = function HeaderSidenavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderSidenavComponent)(\u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(FiltersFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderSidenavComponent, selectors: [["findqo-header-offcanvas"]], viewQuery: function HeaderSidenavComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hiddenButton = _t.first);
      }
    }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService]), \u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [["hiddenButton", ""], ["listItemTemplate", ""], ["id", "button-hide", 2, "position", "absolute", "opacity", "0", "pointer-events", "none"], ["class", "px-3 py-4", 4, "ngIf"], [1, "px-3", "py-4"], ["class", "header profile mh-200", 4, "ngIf"], ["class", "brand-name brand-position", 4, "ngIf"], ["class", "text-body-regular fg-general-4 mt-3 text-center", 4, "ngIf"], ["class", "d-block mt-3", "btnClass", "w-100 rounded-corner", 3, "label", "btnType", "clicked", 4, "ngIf"], [1, "p-0"], [1, "border-bottom", "py-3"], [4, "ngFor", "ngForOf"], ["class", "border-bottom border-top py-3", 4, "ngIf"], [1, "py-3"], [1, "header", "profile", "mh-200"], ["alt", "user profile picture", "width", "40", "height", "40", 1, "img-profile", 3, "ngSrc"], [1, "mw-200px"], [1, "text-body-regular", "fg-general-5", "d-block", "text-truncate"], [1, "text-caption-regular", "fg-general-5", "text-truncate", "text-wrap"], [1, "brand-name", "brand-position"], [1, "text-body-regular", "fg-general-4", "mt-3", "text-center"], ["btnClass", "w-100 rounded-corner", 1, "d-block", "mt-3", 3, "clicked", "label", "btnType"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "border-bottom", "border-top", "py-3"], [1, "logout", 3, "click"], ["matListItemIcon", "", 1, "material-icons-outlined", "fg-general-4"], ["matListItemTitle", "", 1, "text-body-regular", "fg-general-5"], ["class", "ps-0", 4, "ngIf"], [3, "routerLink", "queryParams", "click", 4, "ngIf"], [1, "ps-0"], ["target", "_blank", 1, "social-icons", "fg-general-3", 3, "href"], [1, "material-symbols-outlined", "icon-size"], [3, "click", "routerLink", "queryParams"], ["matListItemIcon", "", "width", "18", "height", "18", "alt", "business profile", "class", "m-0 me-2 icon-image", 3, "ngSrc", 4, "ngIf"], ["matListItemIcon", "", 3, "ngClass", 4, "ngIf"], ["matListItemTitle", "", "class", "text-body-regular", 3, "ngClass", 4, "ngIf"], ["id", "intercom-chat", "class", "fg-general-3 btn-help", 3, "btnType", "label", "btnClass", "clicked", 4, "ngIf"], ["matListItemIcon", "", "width", "18", "height", "18", "alt", "business profile", 1, "m-0", "me-2", "icon-image", 3, "ngSrc"], ["matListItemIcon", "", 3, "ngClass"], ["matListItemTitle", "", 1, "text-body-regular", 3, "ngClass"], ["class", "bg-prim-2 px-2 rounded fg-basic-1 text-caption-medium ms-2", 4, "ngIf"], [1, "bg-prim-2", "px-2", "rounded", "fg-basic-1", "text-caption-medium", "ms-2"], ["id", "intercom-chat", 1, "fg-general-3", "btn-help", 3, "clicked", "btnType", "label", "btnClass"]], template: function HeaderSidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "button", 2, 0);
        \u0275\u0275template(2, HeaderSidenavComponent_div_2_Template, 13, 17, "div", 3);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275template(4, HeaderSidenavComponent_ng_template_4_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c1, \u0275\u0275pipeBind1(3, 1, ctx.user$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, MatIcon, RouterLink, NgOptimizedImage, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle, ButtonComponent, AsyncPipe, TranslationsPipe, NavMenuItemsPipe], styles: ["\n\ndiv.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  bottom: 10px !important;\n}\ndiv.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  min-height: 40px !important;\n  height: auto !important;\n  margin: 4px 0;\n  box-sizing: content-box;\n}\nmat-list-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  margin-left: 0;\n  color: var(--fg-general-4);\n}\nmat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--fg-general-5);\n}\nmat-list-item[_ngcontent-%COMP%]   .icon-image[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px !important;\n}\ndiv.banner[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 370px;\n  width: 100%;\n  height: 100%;\n}\ndiv.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n@media (max-width: 991.98px) {\n  .mw-200px[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n.social-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  color: var(--general-3);\n  display: block;\n  margin-top: 10px;\n  display: inline-flex;\n}\n.icon-size[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px !important;\n  width: 20px !important;\n}\n.profile[_ngcontent-%COMP%] {\n  background: var(--general-1);\n  right: 7px !important;\n  position: relative !important;\n  border-radius: 3px !important;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.img-profile[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n.brand-position[_ngcontent-%COMP%] {\n  left: 45px !important;\n  position: relative !important;\n}\n.btn-help[_ngcontent-%COMP%] {\n  margin-left: -7px !important;\n}\n.text-wrap[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/header-sidenav.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderSidenavComponent, [{
    type: Component,
    args: [{ selector: "findqo-header-offcanvas", providers: [DestroyService], standalone: false, template: `<!--
Below button is used for removing the focus from the list.
-->

<button id="button-hide" #hiddenButton style="position: absolute; opacity: 0; pointer-events: none"></button>

<div
	*ngIf="{
		user: user$ | async
	} as vm"
	class="px-3 py-4"
>
	<div>
		<!-- Avatar -->
		<div *ngIf="vm.user" class="header profile mh-200">
			<img [ngSrc]="vm.user?.picture ? vm.user.picture : defaultAvatar" alt="user profile picture" width="40" height="40" class="img-profile" />

			<div class="mw-200px">
				<span class="text-body-regular fg-general-5 d-block text-truncate">{{ vm.user.name }}</span>
				<span class="text-caption-regular fg-general-5 text-truncate text-wrap">{{ vm.user.email }}</span>
			</div>
		</div>

		<!-- FindQo brand name -->
		<span *ngIf="!vm.user" class="brand-name brand-position">{{ 'n3786' | translations }}</span>
	</div>
	<p *ngIf="!vm.user" class="text-body-regular fg-general-4 mt-3 text-center">{{ 'n3252' | translations }}</p>

	<!-- Login -->
	<findqo-button
		*ngIf="!vm.user"
		class="d-block mt-3"
		btnClass="w-100 rounded-corner"
		[label]="'n11' | translations"
		[btnType]="buttonType.FILLED"
		(clicked)="onLogin()"
	></findqo-button>

	<mat-nav-list class="p-0">
		<!-- Account nav list -->
		<div class="border-bottom py-3">
			<ng-template
				*ngFor="let nav of vm.user | navMenuItems: true : isAgentHub : true : viewportService"
				[ngTemplateOutlet]="listItemTemplate"
				[ngTemplateOutletContext]="{ $implicit: nav }"
			></ng-template>
		</div>

		<!-- Logout -->
		<div *ngIf="vm.user" class="border-bottom border-top py-3">
			<mat-list-item class="logout" (click)="onLogout()">
				<mat-icon matListItemIcon class="material-icons-outlined fg-general-4">logout</mat-icon>
				<span matListItemTitle class="text-body-regular fg-general-5">{{ 'n14' | translations }}</span>
			</mat-list-item>
		</div>

		<!-- Other nav list -->
		<div class="py-3">
			<ng-template *ngFor="let nav of otherNavList" [ngTemplateOutlet]="listItemTemplate" [ngTemplateOutletContext]="{ $implicit: nav }"></ng-template>
		</div>
	</mat-nav-list>
</div>

<!-- Nav item -->
<ng-template #listItemTemplate let-nav>
	<mat-list-item *ngIf="nav.data?.newTab" class="ps-0">
		<a class="social-icons fg-general-3" [href]="nav.path" target="_blank">
			<mat-icon class="material-symbols-outlined icon-size">feedback</mat-icon>
			{{ 'n3278' | translations }}
		</a>
	</mat-list-item>

	<mat-list-item
		[routerLink]="getRoute(nav.path)"
		[queryParams]="getQueryParams(nav?.path, nav?.queryParams)"
		(click)="offcanvas.dismiss(); trackEvent(nav)"
		*ngIf="!nav.data?.newTab"
	>
		<img
			matListItemIcon
			*ngIf="nav.data.iconImage"
			[ngSrc]="'assets/images/' + nav.data.iconImage + '.svg'"
			width="18"
			height="18"
			alt="business profile"
			class="m-0 me-2 icon-image"
		/>
		<mat-icon matListItemIcon [ngClass]="nav.data?.isOther ? 'fg-general-3 material-symbols-outlined' : 'fg-general-4'" *ngIf="nav.data.icon">
			{{ nav.data.icon }}
		</mat-icon>

		<span
			*ngIf="!nav.data.isPopup"
			matListItemTitle
			class="text-body-regular"
			[ngClass]="nav.data?.isOther ? 'fg-general-3' : nav.data?.isSubmenu ? 'fg-general-4' : 'fg-general-5'"
		>
			{{ nav.data.title | translations }}
			<span *ngIf="nav.data?.isNew" class="bg-prim-2 px-2 rounded fg-basic-1 text-caption-medium ms-2">NEW!</span>
		</span>

		<findqo-button
			*ngIf="nav.data.isPopup"
			id="intercom-chat"
			class="fg-general-3 btn-help"
			[btnType]="buttonType.BASIC"
			[label]="'n3073' | translations"
			[btnClass]="'fg-general-3'"
			(clicked)="showIntercom()"
		></findqo-button>
	</mat-list-item>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/core/components/header/components/header-sidenav/header-sidenav.component.scss */\ndiv.header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  bottom: 10px !important;\n}\ndiv.header img {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n}\nmat-list-item {\n  min-height: 40px !important;\n  height: auto !important;\n  margin: 4px 0;\n  box-sizing: content-box;\n}\nmat-list-item mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  margin-left: 0;\n  color: var(--fg-general-4);\n}\nmat-list-item span {\n  color: var(--fg-general-5);\n}\nmat-list-item .icon-image {\n  width: 20px !important;\n  height: 20px !important;\n}\ndiv.banner {\n  position: relative;\n  min-height: 370px;\n  width: 100%;\n  height: 100%;\n}\ndiv.banner img {\n  object-fit: cover;\n}\n@media (max-width: 991.98px) {\n  .mw-200px {\n    max-width: 200px;\n  }\n}\n.social-icons {\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  color: var(--general-3);\n  display: block;\n  margin-top: 10px;\n  display: inline-flex;\n}\n.icon-size {\n  font-size: 20px;\n  height: 20px !important;\n  width: 20px !important;\n}\n.profile {\n  background: var(--general-1);\n  right: 7px !important;\n  position: relative !important;\n  border-radius: 3px !important;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.img-profile {\n  margin-left: 10px !important;\n}\n.brand-position {\n  left: 45px !important;\n  position: relative !important;\n}\n.btn-help {\n  margin-left: -7px !important;\n}\n.text-wrap {\n  word-wrap: break-word !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/header-sidenav.component.css.map */\n"] }]
  }], () => [{ type: DestroyService }, { type: IntercomService }, { type: FiltersFacade }], { hiddenButton: [{
    type: ViewChild,
    args: ["hiddenButton", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderSidenavComponent, { className: "HeaderSidenavComponent", filePath: "apps/findqo-ireland/src/app/core/components/header/components/header-sidenav/header-sidenav.component.ts", lineNumber: 18 });
})();

// apps/findqo-ireland/src/app/core/constants/offcanvas.constant.ts
var OFFCANVAS_HEADER_SIDENAV = {};

export {
  LogoutDialogComponent,
  AbstractHeaderComponent,
  HeaderSidenavComponent,
  OFFCANVAS_HEADER_SIDENAV,
  HeaderAccountMenuComponent,
  HeaderAccountMenuModule
};
//# sourceMappingURL=chunk-FD6IYBQU.js.map
