import {
  DevicePlateform,
  DevicePlateformService
} from "./chunk-VGENAY26.js";
import {
  APP_ROUTE,
  RouteDataType,
  RouterLink,
  RouterModule,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  NgOptimizedImage,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Injectable,
  NgModule,
  PLATFORM_ID,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/download-apps/download-apps.page.ts
var DownloadAppsPage = class _DownloadAppsPage {
  static {
    this.\u0275fac = function DownloadAppsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadAppsPage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadAppsPage, selectors: [["findqo-download-apps"]], standalone: false, decls: 29, vars: 21, consts: [[1, "container", "px-lg-0", "overflow-hidden", "position-relative"], [1, "row", "align-items-center", "apps-row", "justify-content-center"], [1, "col", "d-none", "d-md-block", "text-center"], ["ngSrc", "assets/images/app-download/app-preview.webp", "width", "460", "height", "460", "priority", "", 3, "alt"], [1, "col", "text-center"], [1, "heading-1", "fg-prim-2"], [1, "text-body-regular", "fg-genral-5", "mt-3"], [1, "row", "gap-3", "row-cols-1", "row-cols-lg-3", "mt-5", "mb-96px"], [1, "col"], ["href", "https://apps.apple.com/ph/app/findqo-irish-property-platform/id6449600854", "target", "_blank"], ["ngSrc", "assets/images/app-download/app-store-dark.svg", "width", "160", "height", "48", "priority", "", 3, "alt"], ["href", "https://play.google.com/store/apps/details?id=com.findqo.app", "target", "_blank"], ["ngSrc", "assets/images/app-download/google-play-dark.svg", "width", "160", "height", "48", "priority", "", 3, "alt"], ["href", "https://appgallery.huawei.com/app/C109420795", "target", "_blank"], ["ngSrc", "assets/images/app-download/huawei-app-dark.svg", "width", "160", "height", "48", "priority", "", 3, "alt"], ["routerLink", "/", 1, "text-decoration-none", "text-body-regular", "fg-general-3"], [1, "mobile-bottom-background", "d-md-none"]], template: function DownloadAppsPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "h1", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "a", 9);
        \u0275\u0275element(15, "img", 10);
        \u0275\u0275pipe(16, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "a", 11);
        \u0275\u0275element(19, "img", 12);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 8)(22, "a", 13);
        \u0275\u0275element(23, "img", 14);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(28, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("alt", \u0275\u0275pipeBind1(4, 7, "n3907"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "n3786"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 11, "n3905"), ".");
        \u0275\u0275advance(5);
        \u0275\u0275property("alt", \u0275\u0275pipeBind1(16, 13, "n3908"));
        \u0275\u0275advance(4);
        \u0275\u0275property("alt", \u0275\u0275pipeBind1(20, 15, "n3909"));
        \u0275\u0275advance(4);
        \u0275\u0275property("alt", \u0275\u0275pipeBind1(24, 17, "n3910"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 19, "n3906"));
      }
    }, dependencies: [RouterLink, NgOptimizedImage, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px !important;\n}\n.apps-row[_ngcontent-%COMP%] {\n  height: calc(100vh - 56px) !important;\n}\n.mb-96px[_ngcontent-%COMP%] {\n  margin-bottom: 96px !important;\n}\n.mobile-bottom-background[_ngcontent-%COMP%] {\n  width: 826px !important;\n  height: 826px !important;\n  background-color: var(--prim-1) !important;\n  opacity: 0.09;\n  border-radius: 50%;\n  position: fixed;\n  z-index: -1;\n  left: 50%;\n  transform: translate(-50%, 0);\n  top: 32%;\n}\n@media (min-width: 992px) {\n  .row-cols-lg-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 31%;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/download-apps.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DownloadAppsPage, [{
    type: Component,
    args: [{ selector: "findqo-download-apps", standalone: false, template: `<div class="container px-lg-0 overflow-hidden position-relative">
	<div class="row align-items-center apps-row justify-content-center">
		<div class="col d-none d-md-block text-center">
			<img ngSrc="assets/images/app-download/app-preview.webp" [alt]="'n3907' | translations" width="460" height="460" priority />
		</div>

		<div class="col text-center">
			<h1 class="heading-1 fg-prim-2">{{'n3786'|translations}}</h1>
			<p class="text-body-regular fg-genral-5 mt-3">{{'n3905'|translations}}.</p>

			<div class="row gap-3 row-cols-1 row-cols-lg-3 mt-5 mb-96px">
				<div class="col">
					<a href="https://apps.apple.com/ph/app/findqo-irish-property-platform/id6449600854" target="_blank">
						<img ngSrc="assets/images/app-download/app-store-dark.svg" [alt]="'n3908'|translations" width="160" height="48" priority />
					</a>
				</div>

				<div class="col">
					<a href="https://play.google.com/store/apps/details?id=com.findqo.app" target="_blank">
						<img ngSrc="assets/images/app-download/google-play-dark.svg" [alt]="'n3909'|translations" width="160" height="48" priority />
					</a>
				</div>

				<div class="col">
					<a href="https://appgallery.huawei.com/app/C109420795" target="_blank">
						<img ngSrc="assets/images/app-download/huawei-app-dark.svg" [alt]="'n3910'|translations" width="160" height="48" priority />
					</a>
				</div>
			</div>

			<a routerLink="/" class="text-decoration-none text-body-regular fg-general-3">{{'n3906'|translations}}</a>
		</div>
	</div>

	<div class="mobile-bottom-background d-md-none"></div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/download-apps/download-apps.page.scss */\n.container {\n  max-width: 1000px !important;\n}\n.apps-row {\n  height: calc(100vh - 56px) !important;\n}\n.mb-96px {\n  margin-bottom: 96px !important;\n}\n.mobile-bottom-background {\n  width: 826px !important;\n  height: 826px !important;\n  background-color: var(--prim-1) !important;\n  opacity: 0.09;\n  border-radius: 50%;\n  position: fixed;\n  z-index: -1;\n  left: 50%;\n  transform: translate(-50%, 0);\n  top: 32%;\n}\n@media (min-width: 992px) {\n  .row-cols-lg-3 > * {\n    width: 31%;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/download-apps.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadAppsPage, { className: "DownloadAppsPage", filePath: "apps/findqo-ireland/src/app/feature/download-apps/download-apps.page.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/core/guards/apps-page.guard.ts
var AppsPageGuard = class _AppsPageGuard {
  constructor(platformId, plateformService) {
    this.platformId = platformId;
    this.plateformService = plateformService;
  }
  openUrl(url) {
    window.location.href = url;
  }
  canActivate() {
    if (isPlatformBrowser(this.platformId)) {
      const PLATFORM = this.plateformService.getPlatform();
      switch (PLATFORM) {
        case DevicePlateform.ANDROID:
          this.openUrl(APP_ROUTE.external.googlePlayStoreApp);
          return false;
        case DevicePlateform.IOS:
          this.openUrl(APP_ROUTE.external.appStoreApp);
          return false;
        case DevicePlateform.HUAWEI:
          this.openUrl(APP_ROUTE.external.huaweiStoreApp);
          return false;
        default:
          return true;
      }
    }
    return false;
  }
  static {
    this.\u0275fac = function AppsPageGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppsPageGuard)(\u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(DevicePlateformService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppsPageGuard, factory: _AppsPageGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppsPageGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: DevicePlateformService }], null);
})();

// apps/findqo-ireland/src/app/feature/download-apps/download-apps-routing.module.ts
var routes = [
  {
    path: "",
    component: DownloadAppsPage,
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_MOBILE_HEADER_VISIBLE]: false,
      [RouteDataType.IS_FOOTER_VISIBLE]: false,
      [RouteDataType.IS_BOTTOM_NAVBAR_VISIBLE]: false
    },
    canActivate: [AppsPageGuard]
  }
];
var DownloadAppsPageRoutingModule = class _DownloadAppsPageRoutingModule {
  static {
    this.\u0275fac = function DownloadAppsPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadAppsPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DownloadAppsPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DownloadAppsPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/download-apps/download-apps.module.ts
var DownloadAppsPageModule = class _DownloadAppsPageModule {
  static {
    this.\u0275fac = function DownloadAppsPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadAppsPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DownloadAppsPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, DownloadAppsPageRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DownloadAppsPageModule, [{
    type: NgModule,
    args: [{
      declarations: [DownloadAppsPage],
      imports: [SharedModule, DownloadAppsPageRoutingModule]
    }]
  }], null, null);
})();
export {
  DownloadAppsPageModule
};
//# sourceMappingURL=chunk-D7SN6MZD.js.map
