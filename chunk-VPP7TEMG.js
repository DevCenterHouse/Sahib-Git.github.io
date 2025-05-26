import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ABFZREUC.js";
import {
  ActivatedRoute,
  AuthFacade,
  Router,
  RouterModule,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  NgModule,
  PLATFORM_ID,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/instant-login/instant-login.page.ts
var InstantLoginPage = class _InstantLoginPage {
  constructor(platformId, route, authFacade, router) {
    this.platformId = platformId;
    this.route = route;
    this.authFacade = authFacade;
    this.router = router;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.route.queryParams.subscribe((queryParams) => {
        if (queryParams["authToken"] && queryParams["type"]) {
          this.authFacade.instantLoginAndRedirect(queryParams);
        } else {
          this.router.navigate(["/"]);
        }
      });
    }
  }
  static {
    this.\u0275fac = function InstantLoginPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InstantLoginPage)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthFacade), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstantLoginPage, selectors: [["findqo-instant-login"]], standalone: false, decls: 3, vars: 0, consts: [["mode", "indeterminate"], [1, "d-flex", "justify-content-center", "align-items-center", "w-100", "h-100", "py-4", "py-md-0"], [1, "text-center", "custom-height"]], template: function InstantLoginPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementEnd();
      }
    }, dependencies: [MatProgressBar], styles: ["\n\n.custom-height[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/instant-login.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstantLoginPage, [{
    type: Component,
    args: [{ selector: "findqo-instant-login", standalone: false, template: '<mat-progress-bar mode="indeterminate"></mat-progress-bar>\n\n<div class="d-flex justify-content-center align-items-center w-100 h-100 py-4 py-md-0">\n	<div class="text-center custom-height"></div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/instant-login/instant-login.page.scss */\n.custom-height {\n  min-height: 500px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/instant-login.page.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ActivatedRoute }, { type: AuthFacade }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstantLoginPage, { className: "InstantLoginPage", filePath: "apps/findqo-ireland/src/app/feature/instant-login/instant-login.page.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/instant-login/instant-login-routing.module.ts
var routes = [
  {
    path: "",
    component: InstantLoginPage
  }
];
var InstantLoginPageRoutingModule = class _InstantLoginPageRoutingModule {
  static {
    this.\u0275fac = function InstantLoginPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InstantLoginPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InstantLoginPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstantLoginPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/instant-login/instant-login.module.ts
var InstantLoginPageModule = class _InstantLoginPageModule {
  static {
    this.\u0275fac = function InstantLoginPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InstantLoginPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InstantLoginPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, InstantLoginPageRoutingModule, MatProgressBarModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstantLoginPageModule, [{
    type: NgModule,
    args: [{
      declarations: [InstantLoginPage],
      imports: [SharedModule, InstantLoginPageRoutingModule, MatProgressBarModule]
    }]
  }], null, null);
})();
export {
  InstantLoginPageModule
};
//# sourceMappingURL=chunk-VPP7TEMG.js.map
