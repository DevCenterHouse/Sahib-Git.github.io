import {
  APP_ROUTE,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  Router,
  RouterModule,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/company-policy/company-policy.route.ts
var COMPANY_POLICY_NAV_LIST = [
  {
    path: APP_ROUTE.terms,
    data: {
      title: "n61",
      pageContent: "n3163",
      pageContent2: "n3190",
      pageContent3: "n3164",
      companyLink: "http://findqo.ie",
      readText: "n3165",
      pdfLink: "assets/policies-pdf/terms-of-service.pdf"
    }
  },
  {
    path: APP_ROUTE.privacyPolicy,
    data: {
      title: "n62",
      pageContent: "n3191",
      pageContent2: "n3167",
      pageContent3: "n3189",
      companyEmail: "n2316",
      readText: "n3168",
      pdfLink: "assets/policies-pdf/privacy-statement.pdf"
    }
  },
  {
    path: APP_ROUTE.cookiePolicy,
    data: {
      title: "n3124",
      pageContent: "n3169",
      pageContent2: "",
      readText: "n3170",
      pdfLink: "assets/policies-pdf/cookies-policy.pdf"
    }
  }
];

// apps/findqo-ireland/src/app/feature/company-policy/company-policy.page.ts
function CompanyPolicyPage_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, " ( ");
    \u0275\u0275elementStart(2, "a", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " ) ");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("href", ctx_r1.pageData["data"]["companyLink"], \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageData["data"]["companyLink"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, ctx_r1.pageData["data"]["pageContent2"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, ctx_r1.pageData["data"]["pageContent3"]));
  }
}
function CompanyPolicyPage_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, ctx_r1.pageData["data"]["pageContent2"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r1.pageData["data"]["companyEmail"]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, ctx_r1.pageData["data"]["pageContent3"]));
  }
}
function CompanyPolicyPage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CompanyPolicyPage_div_0_span_10_Template, 11, 8, "span", 6)(11, CompanyPolicyPage_div_0_div_11_Template, 10, 9, "div", 6);
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "findqo-button", 8);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275listener("click", function CompanyPolicyPage_div_0_Template_findqo_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPdf(ctx_r1.pageData["data"]["pdfLink"]));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, ctx_r1.pageData["data"]["title"]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, ctx_r1.pageData["data"]["pageContent"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showCompanyUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, ctx_r1.pageData["data"]["readText"]));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r1.buttonType.STROKED)("label", \u0275\u0275pipeBind1(16, 13, ctx_r1.pageData["data"]["title"]));
  }
}
var CompanyPolicyPage = class _CompanyPolicyPage {
  constructor(router) {
    this.router = router;
    this.showCompanyUrl = false;
    this.showEmail = false;
    this.buttonType = ButtonType;
    this.companyPolicyNavList = COMPANY_POLICY_NAV_LIST;
  }
  openPdf(pdfLink) {
    window.open(pdfLink, "_blank");
  }
  initDeclarations() {
    this.currentUrl = this.router.url.replaceAll("/", "");
    this.pageData = this.companyPolicyNavList.find((i) => i.path === this.currentUrl);
    if (this.currentUrl === APP_ROUTE.terms) {
      this.showCompanyUrl = true;
    } else if (this.currentUrl === APP_ROUTE.privacyPolicy) {
      this.showEmail = true;
    }
  }
  ngOnInit() {
    this.initDeclarations();
  }
  static {
    this.\u0275fac = function CompanyPolicyPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyPolicyPage)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyPolicyPage, selectors: [["findqo-company-policy"]], standalone: false, decls: 1, vars: 1, consts: [["class", "container px-3 py-4 w-700px h-100", 4, "ngIf"], [1, "container", "px-3", "py-4", "w-700px", "h-100"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], [1, "heading-3-medium", "fg-general-5"], [1, "fs-14px", "fw-400", "lh-22px", "fg-general-4", "my-4"], [1, "mb-1"], ["class", "my-3", 4, "ngIf"], [1, "my-3"], [1, "section", 3, "click", "btnType", "label"], [3, "href"], [1, "me-1"], ["href", "mailto:hello@findqo.ie"], [1, "ms-1"]], template: function CompanyPolicyPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CompanyPolicyPage_div_0_Template, 17, 15, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.pageData);
      }
    }, dependencies: [NgIf, ButtonComponent, TranslationsPipe], styles: ["\n\n.w-700px[_ngcontent-%COMP%] {\n  max-width: 700px;\n  width: 100%;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: underline !important;\n  color: var(--general-4) !important;\n}\np[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/company-policy.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyPolicyPage, [{
    type: Component,
    args: [{ selector: "findqo-company-policy", standalone: false, template: `<div *ngIf="pageData" class="container px-3 py-4 w-700px h-100">
	<div class="d-flex align-items-center justify-content-center h-100">
		<div>
			<h3 class="heading-3-medium fg-general-5">{{ pageData['data']['title'] | translations }}</h3>
			<div class="fs-14px fw-400 lh-22px fg-general-4 my-4">
				<p class="mb-1">{{ pageData['data']['pageContent'] | translations }}</p>

				<span *ngIf="showCompanyUrl" class="my-3">
					&#40;
					<a href="{{ pageData['data']['companyLink'] }}">{{ pageData['data']['companyLink'] }}</a>
					&#41;
					<span>{{ pageData['data']['pageContent2'] | translations }}</span>

					<p class="my-3">{{ pageData['data']['pageContent3'] | translations }}</p>
				</span>

				<div *ngIf="showEmail" class="my-3">
					<span class="me-1">{{ pageData['data']['pageContent2'] | translations }}</span>

					<a href="mailto:hello@findqo.ie">{{ pageData['data']['companyEmail'] | translations }}</a>

					<span class="ms-1">{{ pageData['data']['pageContent3'] | translations }}</span>
				</div>

				<p class="my-3">{{ pageData['data']['readText'] | translations }}</p>
			</div>

			<findqo-button
				class="section"
				[btnType]="buttonType.STROKED"
				[label]="pageData['data']['title'] | translations"
				(click)="openPdf(pageData['data']['pdfLink'])"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/company-policy/company-policy.page.scss */\n.w-700px {\n  max-width: 700px;\n  width: 100%;\n}\na {\n  text-decoration: underline !important;\n  color: var(--general-4) !important;\n}\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/company-policy.page.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyPolicyPage, { className: "CompanyPolicyPage", filePath: "apps/findqo-ireland/src/app/feature/company-policy/company-policy.page.ts", lineNumber: 27 });
})();

// apps/findqo-ireland/src/app/feature/company-policy/company-policy-routing.module.ts
var routes = [
  {
    path: "",
    component: CompanyPolicyPage
  }
];
var CompanyPolicyRoutingModule = class _CompanyPolicyRoutingModule {
  static {
    this.\u0275fac = function CompanyPolicyRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyPolicyRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CompanyPolicyRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyPolicyRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/company-policy/company-policy.module.ts
var CompanyPolicyModule = class _CompanyPolicyModule {
  static {
    this.\u0275fac = function CompanyPolicyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompanyPolicyModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CompanyPolicyModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, CompanyPolicyRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyPolicyModule, [{
    type: NgModule,
    args: [{
      declarations: [CompanyPolicyPage],
      imports: [SharedModule, ButtonModule, CompanyPolicyRoutingModule]
    }]
  }], null, null);
})();
export {
  CompanyPolicyModule
};
//# sourceMappingURL=chunk-FJUYLTSF.js.map
