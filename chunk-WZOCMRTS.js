import {
  PlaceAdShowAgentsListModule
} from "./chunk-SOESUKBF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-VZJAPMN6.js";
import {
  ActivatedRoute,
  AuthService,
  PlaceAdFacade,
  PlaceAdService,
  PlaceAdType,
  RouteDataType,
  Router,
  RouterLink,
  RouterModule,
  SectionType,
  SellerType,
  SharedModule,
  StandFormatPipe,
  StorageService,
  TOTAL_STEPS,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-section/place-ad-section.page.ts
function PlaceAdSectionPage_a_8_span_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275pipe(4, "standFormatPipe");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const aisle_r5 = ctx_r3.$implicit;
    const j_r6 = ctx_r3.index;
    const aisleList_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(4, 5, \u0275\u0275pipeBind1(2, 1, aisle_r5 == null ? null : aisle_r5.translationKey), j_r6, aisleList_r2 == null ? null : aisleList_r2.description == null ? null : aisleList_r2.description.length, \u0275\u0275pipeBind1(3, 3, "n3638")));
  }
}
function PlaceAdSectionPage_a_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, PlaceAdSectionPage_a_8_span_10_span_1_Template, 5, 10, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const j_r6 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", j_r6 < 3);
  }
}
function PlaceAdSectionPage_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function PlaceAdSectionPage_a_8_Template_a_click_0_listener() {
      const aisleList_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAisleData(aisleList_r2 == null ? null : aisleList_r2.reference));
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "mat-icon", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 10);
    \u0275\u0275template(10, PlaceAdSectionPage_a_8_span_10_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "mat-icon", 12);
    \u0275\u0275text(13, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const aisleList_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", aisleList_r2 == null ? null : aisleList_r2.reference);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(aisleList_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, aisleList_r2 == null ? null : aisleList_r2.translationKey));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", aisleList_r2 == null ? null : aisleList_r2.description);
  }
}
var PlaceAdSectionPage = class _PlaceAdSectionPage {
  constructor(router, route, placeAdService, placeAdFacade, destroy, storageService, auth) {
    this.router = router;
    this.route = route;
    this.placeAdService = placeAdService;
    this.placeAdFacade = placeAdFacade;
    this.destroy = destroy;
    this.storageService = storageService;
    this.auth = auth;
    this.showAgentsList = false;
    this.sectionType = SectionType;
  }
  updateAisleData(aisle) {
    const AISLE = this.placeAdFacade.getAisle(this.section, aisle);
    this.placeAdFacade.setAisle(AISLE);
    this.placeAdService.addIndividualControlData(PlaceAdType?.AISLE, AISLE?.id);
    this.placeAdService.setTotalTabs(TOTAL_STEPS(this.section));
    if (this.storageService.getItem("agentId") && !this.placeAdService.getPlaceAdIndividualData("agentId")) {
      this.placeAdService.addIndividualControlData("agentId", this.storageService.getItem("agentId"));
    }
  }
  //to add section and sellertype data
  updtePlaceAdData() {
    const SECTION = this.placeAdFacade.getSection(this.section);
    this.placeAdFacade.setSection(SECTION);
    this.placeAdService.addIndividualControlData(PlaceAdType?.SECTION, SECTION?.id);
    const SELLER_TYPE = +this.auth.user()?.hasBusinessProfile ? this.route.snapshot.queryParams?.["sellerTypeId"] : SellerType.INDIVIDUAL;
    if (SELLER_TYPE) {
      this.placeAdService.addIndividualControlData(PlaceAdType.SELLER_TYPE, SELLER_TYPE);
      this.placeAdService.setCurrentSellerId(SELLER_TYPE);
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.sellerType = +this.auth.user()?.hasBusinessProfile ? params["sellerTypeId"] : SellerType.INDIVIDUAL;
    });
    this.route.params.subscribe((params) => {
      this.section = params?.["section"];
      this.aisleList$ = this.placeAdFacade.getAiseList$(this.section);
      this.updtePlaceAdData();
    });
  }
  static {
    this.\u0275fac = function PlaceAdSectionPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSectionPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PlaceAdService), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAdSectionPage, selectors: [["findqo-place-ad-section"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 10, vars: 11, consts: [[1, "container", "mt-4"], [1, "heading-3", "mb-2", "fg-general-5"], [1, "text-caption-regular", "mb-4", "fg-general-4"], ["class", "d-block my-3 stand-link cursor-pointer", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "d-block", "my-3", "stand-link", "cursor-pointer", 3, "click", "routerLink"], [1, "row", "justify-content-between", "align-items-center", "h-100", "px-3", "gap-3"], [1, "col-auto"], [1, "icon-logo", "align-middle", "place-ad-two-tone", "material-icons-two-tone"], [1, "col", "pe-2"], [1, "text-body-regular", "fg-general-5"], [1, "text-caption-regular", "fg-general-3"], [4, "ngFor", "ngForOf"], [1, "fg-prim-2"], [4, "ngIf"]], template: function PlaceAdSectionPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translations");
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, PlaceAdSectionPage_a_8_Template, 14, 6, "a", 3);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.section === ctx.sectionType.PROPERTIES_FOR_RENT ? \u0275\u0275pipeBind1(3, 3, "n3628") : \u0275\u0275pipeBind1(4, 5, "n3608"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "n2972"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 9, ctx.aisleList$));
      }
    }, dependencies: [NgForOf, NgIf, MatIcon, RouterLink, AsyncPipe, TranslationsPipe, StandFormatPipe], styles: ["\n\n.icon-logo[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  display: inline-block !important;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 343px;\n}\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 400px;\n  }\n}\n.stand-link[_ngcontent-%COMP%] {\n  height: 90px;\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.stand-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-section.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSectionPage, [{
    type: Component,
    args: [{ selector: "findqo-place-ad-section", providers: [DestroyService], standalone: false, template: `<div class="container mt-4">
	<h3 class="heading-3 mb-2 fg-general-5">{{section === sectionType.PROPERTIES_FOR_RENT ? ('n3628' | translations) :'n3608' | translations}}</h3>

	<p class="text-caption-regular mb-4 fg-general-4">{{ 'n2972' | translations }}</p>

	<a
		class="d-block my-3 stand-link cursor-pointer"
		[routerLink]="aisleList?.reference"
		(click)="updateAisleData(aisleList?.reference)"
		*ngFor="let aisleList of aisleList$ | async"
	>
		<div class="row justify-content-between align-items-center h-100 px-3 gap-3">
			<div class="col-auto">
				<mat-icon class="icon-logo align-middle place-ad-two-tone material-icons-two-tone">{{ aisleList.icon }}</mat-icon>
			</div>

			<div class="col pe-2">
				<p class="text-body-regular fg-general-5">{{ aisleList?.translationKey | translations }}</p>

				<p class="text-caption-regular fg-general-3">
					<span *ngFor=" let aisle of aisleList?.description; let j=index;">
						<span *ngIf="j< 3">{{aisle?.translationKey | translations | standFormatPipe : j:aisleList?.description?.length:('n3638'|translations) }}</span>
					</span>
				</p>
			</div>

			<div class="col-auto">
				<mat-icon class="fg-prim-2">arrow_forward</mat-icon>
			</div>
		</div>
	</a>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-section/place-ad-section.page.scss */\n.icon-logo {\n  width: 25px;\n  height: 25px;\n  display: inline-block !important;\n}\n.container {\n  max-width: 343px;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 400px;\n  }\n}\n.stand-link {\n  height: 90px;\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.stand-link:hover {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-section.page.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: PlaceAdService }, { type: PlaceAdFacade }, { type: DestroyService }, { type: StorageService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAdSectionPage, { className: "PlaceAdSectionPage", filePath: "apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-section/place-ad-section.page.ts", lineNumber: 20 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-section/place-ad-section-routing.module.ts
var routes = [
  {
    path: "",
    component: PlaceAdSectionPage,
    data: {
      [RouteDataType.IS_HEADER_VISIBLE]: false,
      [RouteDataType.IS_FOOTER_VISIBLE]: false
    }
  }
];
var PlaceAdSectionRoutingModule = class _PlaceAdSectionRoutingModule {
  static {
    this.\u0275fac = function PlaceAdSectionRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSectionRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdSectionRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSectionRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-section/place-ad-section.module.ts
var PlaceAdSectionModule = class _PlaceAdSectionModule {
  static {
    this.\u0275fac = function PlaceAdSectionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSectionModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdSectionModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, PlaceAdSectionRoutingModule, PlaceAdShowAgentsListModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSectionModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAdSectionPage],
      imports: [SharedModule, PlaceAdSectionRoutingModule, PlaceAdShowAgentsListModule],
      exports: [PlaceAdSectionPage]
    }]
  }], null, null);
})();
export {
  PlaceAdSectionModule
};
//# sourceMappingURL=chunk-WZOCMRTS.js.map
