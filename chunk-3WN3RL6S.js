import {
  ButtonModule,
  CommonFacade,
  DeviceDetectorService,
  IntercomService,
  MatDivider,
  MatDividerModule,
  RouterModule,
  SharedModule,
  SnackService,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
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
  ɵɵclassProp,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/contact-us/contact-us.page.ts
var _c0 = (a0, a1) => ({ "text-paragraph-regular fg-general-4": a0, "text-subheading-regular": a1 });
var _c1 = (a0) => ({ "mb-4 cursor-pointer": a0 });
function ContactUsPage_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
  }
}
function ContactUsPage_div_8_Conditional_7_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r2.value));
  }
}
function ContactUsPage_div_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContactUsPage_div_8_Conditional_7_ng_container_0_Template, 3, 3, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.isPlatformBrowser);
  }
}
function ContactUsPage_div_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translations");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r2.value), " ");
  }
}
function ContactUsPage_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275listener("click", function ContactUsPage_div_8_Template_div_click_4_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onContactUs(item_r2.icon));
    });
    \u0275\u0275template(5, ContactUsPage_div_8_div_5_Template, 3, 1, "div", 11);
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275template(7, ContactUsPage_div_8_Conditional_7_Template, 1, 1, "ng-container")(8, ContactUsPage_div_8_Conditional_8_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const lastItem_r4 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c0, item_r2.property === "n3419", item_r2.property !== "n3419"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, item_r2.property), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c1, !lastItem_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275classProp("fg-prim-2", item_r2.icon)("fg-general-4", !item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.icon === "mail" ? 7 : 8);
  }
}
var ContactUsPage = class _ContactUsPage {
  constructor(platformId, snackBarService, commonFacade, intercomService, deviceDetectorService) {
    this.platformId = platformId;
    this.snackBarService = snackBarService;
    this.commonFacade = commonFacade;
    this.intercomService = intercomService;
    this.deviceDetectorService = deviceDetectorService;
    this.contactInfo = [
      { property: "n82", icon: "mail", value: "n2316" },
      { property: "n80", icon: "call", value: "+353-19061509" },
      { property: "n3419", icon: "support_agent", value: "n3420" },
      { property: "n3058", value: "n3421" }
    ];
    this.isPlatformBrowser = isPlatformBrowser(this.platformId);
  }
  onContactUs(icon) {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    switch (icon) {
      case "mail":
        window.location.href = "mailto:hello@findqo.ie";
        break;
      case "call":
        navigator.clipboard.writeText("+35319061509");
        if (this.deviceDetectorService.isDesktop()) {
          this.snackBarService.open({
            data: { message: TRANSLATIONS["n712"], type: "success" },
            panelClass: "snackbar-success"
          });
        } else {
          window.location.href = "tel:+35319061509";
        }
        break;
      case "support_agent":
        this.showIntercom();
        break;
    }
  }
  showIntercom() {
    this.intercomService.showIntercom();
  }
  ngOnInit() {
    this.intercomService.bootIntercom();
  }
  ngOnDestroy() {
    this.intercomService.shutdownIntercom();
  }
  static {
    this.\u0275fac = function ContactUsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactUsPage)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(DeviceDetectorService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsPage, selectors: [["findqo-contact-us"]], standalone: false, decls: 11, vars: 5, consts: [[1, "container", "py-4", "h-100"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], [1, "row", "mx-0", "gap-48px"], [1, "col"], [1, "heading-2", "fg-general-5"], [1, "d-block", "divider", "rounded-pill", "mt-3", "mb-4", "w-34px"], [4, "ngFor", "ngForOf"], [1, "col-md", "px-0", "text-end", "align-self-center", "dch-img"], ["alt", "DCH", "fill", "", "fetchpriority", "high", 1, "w-100", "position-relative", 3, "ngSrc"], [1, "d-block", "fg-general-3", 3, "ngClass"], [1, "align-items-center", 3, "click", "ngClass"], ["class", "d-inline-block align-middle me-2", 4, "ngIf"], [1, "text-body-regular", "text-start", "align-middle"], [1, "d-inline-block", "align-middle", "me-2"], [1, "fg-prim-2", "icon-size", "material-symbols-outlined"], [4, "ngIf"]], template: function ContactUsPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "mat-divider", 5);
        \u0275\u0275template(8, ContactUsPage_div_8_Template, 9, 16, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275element(10, "img", 8);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "n60"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.contactInfo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", "assets/images/contact-us/dch-contact-us.webp");
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatIcon, NgOptimizedImage, MatDivider, TranslationsPipe], styles: ["\n\n.divider[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--prim-2);\n}\n.w-34px[_ngcontent-%COMP%] {\n  width: 34px;\n}\n.icon-size[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n}\n.gap-48px[_ngcontent-%COMP%] {\n  gap: 48px;\n}\n@media (min-width: 768px) {\n  .dch-img[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/contact-us.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactUsPage, [{
    type: Component,
    args: [{ selector: "findqo-contact-us", standalone: false, template: `<div class="container py-4 h-100">
	<div class="d-flex align-items-center justify-content-center h-100">
		<div class="row mx-0 gap-48px">
			<div class="col">
				<h1 class="heading-2 fg-general-5">{{ 'n60' | translations }}</h1>
				<mat-divider class="d-block divider rounded-pill mt-3 mb-4 w-34px"></mat-divider>

				<div *ngFor="let item of contactInfo; let lastItem = last">
					<span
						class="d-block fg-general-3"
						[ngClass]="{
							'text-paragraph-regular fg-general-4': item.property === 'n3419',
							'text-subheading-regular': item.property !== 'n3419'
						}"
					>
						{{ item.property | translations }}
					</span>

					<div class="align-items-center" [ngClass]="{ 'mb-4 cursor-pointer': !lastItem }" (click)="onContactUs(item.icon)">
						<div class="d-inline-block align-middle me-2" *ngIf="item.icon">
							<mat-icon class="fg-prim-2 icon-size material-symbols-outlined">{{ item.icon }}</mat-icon>
						</div>

						<span class="text-body-regular text-start align-middle" [class.fg-prim-2]="item.icon" [class.fg-general-4]="!item.icon">
							@if (item.icon === 'mail') {
							<ng-container *ngIf="isPlatformBrowser">{{ item.value | translations }}</ng-container>
							} @else { {{ item.value | translations }} }
						</span>
					</div>
				</div>
			</div>

			<div class="col-md px-0 text-end align-self-center dch-img">
				<img [ngSrc]="'assets/images/contact-us/dch-contact-us.webp'" class="w-100 position-relative" alt="DCH" fill fetchpriority="high" />
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/contact-us/contact-us.page.scss */\n.divider {\n  height: 5px;\n  background: var(--prim-2);\n}\n.w-34px {\n  width: 34px;\n}\n.icon-size {\n  font-size: 18px;\n  width: 18px;\n}\n.gap-48px {\n  gap: 48px;\n}\n@media (min-width: 768px) {\n  .dch-img {\n    width: 400px;\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/contact-us.page.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: SnackService }, { type: CommonFacade }, { type: IntercomService }, { type: DeviceDetectorService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsPage, { className: "ContactUsPage", filePath: "apps/findqo-ireland/src/app/feature/contact-us/contact-us.page.ts", lineNumber: 20 });
})();

// apps/findqo-ireland/src/app/feature/contact-us/contact-us-routing.module.ts
var routes = [
  {
    path: "",
    component: ContactUsPage
  }
];
var ContactUsRoutingModule = class _ContactUsRoutingModule {
  static {
    this.\u0275fac = function ContactUsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactUsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactUsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactUsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/contact-us/contact-us.module.ts
var ContactUsModule = class _ContactUsModule {
  static {
    this.\u0275fac = function ContactUsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactUsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactUsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ContactUsRoutingModule, ButtonModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactUsModule, [{
    type: NgModule,
    args: [{
      declarations: [ContactUsPage],
      imports: [SharedModule, ContactUsRoutingModule, ButtonModule, MatDividerModule]
    }]
  }], null, null);
})();
export {
  ContactUsModule
};
//# sourceMappingURL=chunk-3WN3RL6S.js.map
