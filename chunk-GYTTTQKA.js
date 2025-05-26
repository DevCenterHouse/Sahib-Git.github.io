import {
  APP_ROUTE,
  ActivatedRoute,
  MatButton,
  MatButtonModule,
  ProfileApi,
  RouterLink,
  RouterModule,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  NgOptimizedImage,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  NgModule,
  PLATFORM_ID,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/unsubscribe-email/unsubscribe-email.component.ts
function UnsubscribeEmailComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h4", 10);
    \u0275\u0275text(3, "Unsubscribe from property listing activity alerts only.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 11);
    \u0275\u0275text(5, "By unsubscribing, you will no longer receive property listing activity alerts emails.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275listener("click", function UnsubscribeEmailComponent_ng_template_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.unSubscribe());
    });
    \u0275\u0275text(7, "Unsubscribe from property listing activity alerts");
    \u0275\u0275elementEnd();
  }
}
function UnsubscribeEmailComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "h4", 10);
    \u0275\u0275text(3, "Successfully Unsubscribed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 11);
    \u0275\u0275text(5, "You have successfully unsubscribed from our property listing activity alerts.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275text(7, "Go to FindQo.ie");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r1.appRoutes.home);
  }
}
var UnsubscribeEmailComponent = class _UnsubscribeEmailComponent {
  constructor(profileApi, activatedRoute, platformId) {
    this.profileApi = profileApi;
    this.activatedRoute = activatedRoute;
    this.platformId = platformId;
    this.appRoutes = APP_ROUTE;
    this.isUnsubscribed = false;
    this.token = "";
  }
  unSubscribe() {
    this.profileApi.unSubscribeEmail({ token: this.token }).subscribe(() => {
      this.isUnsubscribed = true;
    }, () => {
      this.isUnsubscribed = false;
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.token = this.activatedRoute.snapshot.queryParams?.["token"];
    }
  }
  static {
    this.\u0275fac = function UnsubscribeEmailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnsubscribeEmailComponent)(\u0275\u0275directiveInject(ProfileApi), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnsubscribeEmailComponent, selectors: [["findqo-unsubscribe-email"]], standalone: false, decls: 12, vars: 5, consts: [["unsubscribe", ""], ["success", ""], [1, "w-100", "h-100", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "w-100", "position-fixed", "top-0", "border-bottom"], [1, "header", "mx-auto", "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "fg-general-5", "heading-1", "cursor-pointer", "fw-700", 3, "routerLink"], [1, "w-500px"], [3, "ngTemplateOutlet"], [1, "px-3", "px-md-0"], ["ngSrc", "assets/images/email-opened.svg", "alt", "message opened", "width", "100", "height", "100", "priority", ""], [1, "heading-4-medium", "fg-general-5", "text-center", "mt-4"], [1, "text-body-regular", "fg-general-5", "my-2", "text-center"], ["mat-button", "", "color", "primary", 1, "text-body-regular", 3, "click"], ["ngSrc", "assets/images/email-closed.svg", "alt", "message closed", "width", "100", "height", "100", "priority", ""], ["mat-button", "", "color", "primary", 1, "text-body-regular", 3, "routerLink"]], template: function UnsubscribeEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275elementContainer(7, 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, UnsubscribeEmailComponent_ng_template_8_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, UnsubscribeEmailComponent_ng_template_10_Template, 8, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const unsubscribe_r3 = \u0275\u0275reference(9);
        const success_r4 = \u0275\u0275reference(11);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", ctx.appRoutes.home);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "n3786"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.isUnsubscribed ? success_r4 : unsubscribe_r3);
      }
    }, dependencies: [RouterLink, MatButton, NgOptimizedImage, NgTemplateOutlet, TranslationsPipe], styles: ["\n\n.w-500px[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .w-500px[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/unsubscribe-email.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnsubscribeEmailComponent, [{
    type: Component,
    args: [{ selector: "findqo-unsubscribe-email", standalone: false, template: `<div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
	<div class="w-100 position-fixed top-0 border-bottom">
		<div class="header mx-auto d-flex align-items-center justify-content-center justify-content-lg-start">
			<h1 [routerLink]="appRoutes.home" class="fg-general-5 heading-1 cursor-pointer fw-700">{{ 'n3786' | translations }}</h1>
		</div>
	</div>

	<div class="w-500px">
		<ng-container [ngTemplateOutlet]="isUnsubscribed ? success : unsubscribe"></ng-container>
	</div>
</div>

<ng-template #unsubscribe>
	<div class="px-3 px-md-0">
		<img ngSrc="assets/images/email-opened.svg" alt="message opened" width="100" height="100" priority />
		<h4 class="heading-4-medium fg-general-5 text-center mt-4">Unsubscribe from property listing activity alerts only.</h4>
		<p class="text-body-regular fg-general-5 my-2 text-center">By unsubscribing, you will no longer receive property listing activity alerts emails.</p>
	</div>

	<button mat-button color="primary" class="text-body-regular" (click)="unSubscribe()">Unsubscribe from property listing activity alerts</button>
</ng-template>

<ng-template #success>
	<div class="px-3 px-md-0">
		<img ngSrc="assets/images/email-closed.svg" alt="message closed" width="100" height="100" priority />
		<h4 class="heading-4-medium fg-general-5 text-center mt-4">Successfully Unsubscribed</h4>
		<p class="text-body-regular fg-general-5 my-2 text-center">You have successfully unsubscribed from our property listing activity alerts.</p>
	</div>
	<button mat-button color="primary" class="text-body-regular" [routerLink]="appRoutes.home">Go to FindQo.ie</button>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/unsubscribe-email/unsubscribe-email.component.scss */\n.w-500px {\n  text-align: center;\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .w-500px {\n    width: 500px;\n  }\n}\n.header {\n  width: 100%;\n  max-width: 1000px !important;\n  height: 60px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/unsubscribe-email.component.css.map */\n"] }]
  }], () => [{ type: ProfileApi }, { type: ActivatedRoute }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnsubscribeEmailComponent, { className: "UnsubscribeEmailComponent", filePath: "apps/findqo-ireland/src/app/feature/unsubscribe-email/unsubscribe-email.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/unsubscribe-email/unsubscribe-email-routing.module.ts
var routes = [
  {
    path: "",
    component: UnsubscribeEmailComponent
  }
];
var UnsubscribeEmailRoutingModule = class _UnsubscribeEmailRoutingModule {
  static {
    this.\u0275fac = function UnsubscribeEmailRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnsubscribeEmailRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UnsubscribeEmailRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnsubscribeEmailRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/unsubscribe-email/unsubscribe-email.module.ts
var UnsubscribeEmailModule = class _UnsubscribeEmailModule {
  static {
    this.\u0275fac = function UnsubscribeEmailModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnsubscribeEmailModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UnsubscribeEmailModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [UnsubscribeEmailRoutingModule, MatButtonModule, SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnsubscribeEmailModule, [{
    type: NgModule,
    args: [{
      declarations: [UnsubscribeEmailComponent],
      imports: [UnsubscribeEmailRoutingModule, MatButtonModule, NgOptimizedImage, SharedModule]
    }]
  }], null, null);
})();
export {
  UnsubscribeEmailModule
};
//# sourceMappingURL=chunk-GYTTTQKA.js.map
