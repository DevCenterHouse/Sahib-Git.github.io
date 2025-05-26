import {
  APP_ROUTE,
  MatButton,
  RouterLink,
  RouterModule,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/inactive-meeting/inactive-meeting.component.ts
var InactiveMeetingComponent = class _InactiveMeetingComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.appRoute = APP_ROUTE;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  static {
    this.\u0275fac = function InactiveMeetingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InactiveMeetingComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InactiveMeetingComponent, selectors: [["findqo-inactive-meeting"]], standalone: false, decls: 18, vars: 13, consts: [[1, "container", "h-100"], [1, "w-100", "h-100", "d-flex", "align-items-start", "align-items-md-center", "justify-content-center"], [1, "inactive-card", "text-center", "position-relative"], [1, "fg-prim-2", "heading-1"], [1, "py-5", "px-2"], [1, "heading-4-medium", "fg-general-5"], [1, "fg-general-5", "text-body-regular", "mt-2"], ["mat-button", "", "color", "primary", 1, "position-absolute", "findqo-button", 3, "routerLink"], ["iconPositionEnd", ""]], template: function InactiveMeetingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "h4", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementStart(16, "mat-icon", 8);
        \u0275\u0275text(17, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "n3786"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 7, "n3943"), ".");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 9, "n3944"), ".");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", ctx.appRoute.home);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 11, "n3941"), " ");
      }
    }, dependencies: [MatButton, MatIcon, RouterLink, TranslationsPipe], styles: ["\n\n.inactive-card[_ngcontent-%COMP%] {\n  padding: 24px 0px;\n  border-radius: 8px;\n  height: 400px;\n  width: 800px;\n}\n@media (min-width: 768px) {\n  .inactive-card[_ngcontent-%COMP%] {\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n  }\n}\n.findqo-button[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(-50%);\n  bottom: 24px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/inactive-meeting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InactiveMeetingComponent, [{
    type: Component,
    args: [{ selector: "findqo-inactive-meeting", standalone: false, template: `<div class="container h-100">
	<div class="w-100 h-100 d-flex align-items-start align-items-md-center justify-content-center">
		<div class="inactive-card text-center position-relative">
			<h1 class="fg-prim-2 heading-1">{{ 'n3786' | translations }}</h1>

			<div class="py-5 px-2">
				<h4 class="heading-4-medium fg-general-5">{{ 'n3943' | translations }}.</h4>
				<p class="fg-general-5 text-body-regular mt-2">{{ 'n3944' | translations }}.</p>
			</div>

			<button mat-button color="primary" class="position-absolute findqo-button" [routerLink]="appRoute.home">
				{{ 'n3941' | translations }}
				<mat-icon iconPositionEnd>arrow_forward</mat-icon>
			</button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/pages/inactive-meeting/inactive-meeting.component.scss */\n.inactive-card {\n  padding: 24px 0px;\n  border-radius: 8px;\n  height: 400px;\n  width: 800px;\n}\n@media (min-width: 768px) {\n  .inactive-card {\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n  }\n}\n.findqo-button {\n  left: 50%;\n  transform: translate(-50%);\n  bottom: 24px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/inactive-meeting.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InactiveMeetingComponent, { className: "InactiveMeetingComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/pages/inactive-meeting/inactive-meeting.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/inactive-meeting/inactive-meeting-routing.module.ts
var routes = [
  {
    path: "",
    component: InactiveMeetingComponent
  }
];
var InactiveMeetingRoutingModule = class _InactiveMeetingRoutingModule {
  static {
    this.\u0275fac = function InactiveMeetingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InactiveMeetingRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InactiveMeetingRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InactiveMeetingRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/pages/inactive-meeting/inactive-meeting.module.ts
var InactiveMeetingModule = class _InactiveMeetingModule {
  static {
    this.\u0275fac = function InactiveMeetingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InactiveMeetingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _InactiveMeetingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, InactiveMeetingRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InactiveMeetingModule, [{
    type: NgModule,
    args: [{
      declarations: [InactiveMeetingComponent],
      imports: [SharedModule, InactiveMeetingRoutingModule],
      exports: [InactiveMeetingComponent]
    }]
  }], null, null);
})();
export {
  InactiveMeetingModule
};
//# sourceMappingURL=chunk-AEOY2FO7.js.map
