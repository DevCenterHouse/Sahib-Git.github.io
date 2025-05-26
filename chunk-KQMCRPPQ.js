import {
  AdItemV2Module
} from "./chunk-GGIORZLS.js";
import "./chunk-GCFYHD3C.js";
import {
  AdItemV2Component,
  RemoveFavoritesDialogComponent
} from "./chunk-DYDGEZIA.js";
import "./chunk-235SP5Y4.js";
import "./chunk-744QYGBS.js";
import "./chunk-UNPSDH5C.js";
import "./chunk-HTJPCHOJ.js";
import "./chunk-VGENAY26.js";
import "./chunk-NHXE4UA3.js";
import "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import "./chunk-DYYJHWVN.js";
import "./chunk-5DPLTTSV.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-UNCX2CTW.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import "./chunk-VZJAPMN6.js";
import {
  ButtonModule,
  MatDialogModule,
  MatDivider,
  MatDividerModule,
  RouteDataType,
  RouterModule,
  SharedModule,
  TranslationsPipe,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Injectable,
  NgModule,
  finalize,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/favorites/components/no-favorties-ads/no-favorties-ads.component.ts
function NoFavourtiesAdsComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
}
function NoFavourtiesAdsComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
}
var NoFavourtiesAdsComponent = class _NoFavourtiesAdsComponent {
  constructor(viewport) {
    this.viewport = viewport;
  }
  static {
    this.\u0275fac = function NoFavourtiesAdsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoFavourtiesAdsComponent)(\u0275\u0275directiveInject(ViewportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoFavourtiesAdsComponent, selectors: [["findqo-no-favorties-ads"]], standalone: false, decls: 6, vars: 5, consts: [[1, "text-center", "mx-auto"], ["src", "assets/images/no-favourties-desktop.svg", "alt", "No favorites ads", "class", "img-fluid", 4, "ngIf"], ["src", "assets/images/no-favorites-mobile.svg", "alt", "No favorites ads", "class", "img-fluid mt-5", 4, "ngIf"], [1, "heading-4-regular", "fg-general-4", "text-center", "mt-4"], ["src", "assets/images/no-favourties-desktop.svg", "alt", "No favorites ads", 1, "img-fluid"], ["src", "assets/images/no-favorites-mobile.svg", "alt", "No favorites ads", 1, "img-fluid", "mt-5"]], template: function NoFavourtiesAdsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NoFavourtiesAdsComponent_img_1_Template, 1, 0, "img", 1)(2, NoFavourtiesAdsComponent_img_2_Template, 1, 0, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.viewport.mobile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.mobile);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "n3127"));
      }
    }, dependencies: [NgIf, TranslationsPipe], styles: ["\n\n.img-fluid[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 204px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/no-favorties-ads.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoFavourtiesAdsComponent, [{
    type: Component,
    args: [{ selector: "findqo-no-favorties-ads", standalone: false, template: `<div class="text-center mx-auto">
	<img *ngIf="!viewport.mobile" src="assets/images/no-favourties-desktop.svg" alt="No favorites ads" class="img-fluid" />

	<img *ngIf="viewport.mobile" src="assets/images/no-favorites-mobile.svg" alt="No favorites ads" class="img-fluid mt-5" />
</div>

<h4 class="heading-4-regular fg-general-4 text-center mt-4">{{ 'n3127' | translations }}</h4>
`, styles: ["/* apps/findqo-ireland/src/app/feature/favorites/components/no-favorties-ads/no-favorties-ads.component.scss */\n.img-fluid {\n  object-fit: cover;\n  height: 204px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/no-favorties-ads.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoFavourtiesAdsComponent, { className: "NoFavourtiesAdsComponent", filePath: "apps/findqo-ireland/src/app/feature/favorites/components/no-favorties-ads/no-favorties-ads.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/favorites/components/no-favorties-ads/no-favorties-ads.module.ts
var NoFavourtiesAdsModule = class _NoFavourtiesAdsModule {
  static {
    this.\u0275fac = function NoFavourtiesAdsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoFavourtiesAdsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NoFavourtiesAdsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoFavourtiesAdsModule, [{
    type: NgModule,
    args: [{
      declarations: [NoFavourtiesAdsComponent],
      imports: [SharedModule],
      exports: [NoFavourtiesAdsComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/favorites/components/remove-favorites-dialog/remove-favorites-dialog.module.ts
var RemoveFavoritesDialogModule = class _RemoveFavoritesDialogModule {
  static {
    this.\u0275fac = function RemoveFavoritesDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoveFavoritesDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RemoveFavoritesDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveFavoritesDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [RemoveFavoritesDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [RemoveFavoritesDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/favorites/favorites.facade.ts
var FavoritesFacade = class _FavoritesFacade {
  constructor(adsState, adsApi) {
    this.adsState = adsState;
    this.adsApi = adsApi;
  }
  loadFavouritesAdList() {
    this.adsState.setIsLoading(true);
    this.adsApi.getFavourtiesAds().pipe(finalize(() => this.adsState.setIsLoading(false))).subscribe((adList) => this.adsState.setAdList(adList));
  }
  static {
    this.\u0275fac = function FavoritesFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesFacade)(\u0275\u0275inject(AdsState), \u0275\u0275inject(AdsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FavoritesFacade, factory: _FavoritesFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesFacade, [{
    type: Injectable
  }], () => [{ type: AdsState }, { type: AdsApi }], null);
})();

// apps/findqo-ireland/src/app/feature/favorites/favorites.page.ts
var _c0 = ["class", "page"];
var _c1 = (a0, a1) => ({ adList: a0, isLoading: a1 });
function FavoritesPage_div_0_ng_template_10_Template(rf, ctx) {
}
function FavoritesPage_div_0_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "findqo-ad-item-v2", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ad", ad_r1)("section", ctx_r1.currentSection);
  }
}
function FavoritesPage_div_0_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FavoritesPage_div_0_ng_template_11_div_0_Template, 2, 2, "div", 9);
  }
  if (rf & 2) {
    const vm_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngForOf", vm_r3.adList);
  }
}
function FavoritesPage_div_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-no-favorties-ads");
  }
}
function FavoritesPage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h4", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-divider", 7);
    \u0275\u0275template(10, FavoritesPage_div_0_ng_template_10_Template, 0, 0, "ng-template", 8)(11, FavoritesPage_div_0_ng_template_11_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(13, FavoritesPage_div_0_ng_template_13_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r3 = ctx.ngIf;
    const adListTemplate_r4 = \u0275\u0275reference(12);
    const adListSkeletonLoaderTemplate_r5 = \u0275\u0275reference(14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "n3110"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(7, 7, "n3109"), " ", vm_r3.adList.length, " ", \u0275\u0275pipeBind1(8, 9, "n3128"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", vm_r3.isLoading || vm_r3.adList.length === 0 ? adListSkeletonLoaderTemplate_r5 : adListTemplate_r4);
  }
}
var FavoritesPage = class _FavoritesPage {
  constructor(sharedAdsFacade, favoritesFacade) {
    this.sharedAdsFacade = sharedAdsFacade;
    this.favoritesFacade = favoritesFacade;
    this.isLoading$ = of(true);
    this.adList$ = this.sharedAdsFacade.getAdList$();
    this.isLoading$ = this.sharedAdsFacade.isLoading$();
  }
  ngOnInit() {
    this.favoritesFacade.loadFavouritesAdList();
  }
  static {
    this.\u0275fac = function FavoritesPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesPage)(\u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(FavoritesFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesPage, selectors: [["findqo-favorites", 8, "page"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], attrs: _c0, decls: 3, vars: 8, consts: [["adListTemplate", ""], ["adListSkeletonLoaderTemplate", ""], ["class", "container p-0 py-sm-3", 4, "ngIf"], [1, "container", "p-0", "py-sm-3"], [1, "header", "p-3", "p-md-0", "mb-3", "mb-sm-0"], [1, "heading-4", "fg-general-5", "mt-1"], [1, "fs-12px", "lh-16px", "fw-400", "fg-general-3", "mb-1"], [1, "mb-4", "d-none", "d-lg-block"], [3, "ngTemplateOutlet"], ["class", "px-3 px-sm-0", 4, "ngFor", "ngForOf"], [1, "px-3", "px-sm-0"], [3, "ad", "section"]], template: function FavoritesPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FavoritesPage_div_0_Template, 15, 11, "div", 2);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c1, \u0275\u0275pipeBind1(1, 1, ctx.adList$), \u0275\u0275pipeBind1(2, 3, ctx.isLoading$)));
      }
    }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, AdItemV2Component, NoFavourtiesAdsComponent, MatDivider, AsyncPipe, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 750px;\n}\n.mat-mdc-dialog-container[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n@media (max-width: 575.98px) {\n  .header[_ngcontent-%COMP%] {\n    background-color: var(--general-1);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/favorites.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesPage, [{
    type: Component,
    args: [{ selector: "findqo-favorites.page", providers: [DestroyService], standalone: false, template: `<div
	class="container p-0 py-sm-3"
	*ngIf="{
	adList: adList$ | async,
	isLoading: isLoading$ | async,
} as vm"
>
	<div class="header p-3 p-md-0 mb-3 mb-sm-0">
		<h4 class="heading-4 fg-general-5 mt-1">{{'n3110' | translations}}</h4>
		<p class="fs-12px lh-16px fw-400 fg-general-3 mb-1">{{'n3109' | translations}} {{vm.adList.length }} {{'n3128'| translations}}</p>
	</div>

	<mat-divider class="mb-4 d-none d-lg-block"></mat-divider>

	<ng-template [ngTemplateOutlet]="vm.isLoading || vm.adList.length === 0 ? adListSkeletonLoaderTemplate : adListTemplate"></ng-template>

	<ng-template #adListTemplate>
		<div *ngFor="let ad of vm.adList" class="px-3 px-sm-0">
			<findqo-ad-item-v2 [ad]="ad" [section]="currentSection"></findqo-ad-item-v2>
		</div>
	</ng-template>

	<!-- Skeleton loader -->
	<ng-template #adListSkeletonLoaderTemplate>
		<findqo-no-favorties-ads></findqo-no-favorties-ads>
	</ng-template>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/favorites/favorites.page.scss */\n.container {\n  max-width: 750px;\n}\n.mat-mdc-dialog-container {\n  margin: 0px !important;\n}\n@media (max-width: 575.98px) {\n  .header {\n    background-color: var(--general-1);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/favorites.page.css.map */\n"] }]
  }], () => [{ type: SharedAdsFacade }, { type: FavoritesFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesPage, { className: "FavoritesPage", filePath: "apps/findqo-ireland/src/app/feature/favorites/favorites.page.ts", lineNumber: 15 });
})();

// apps/findqo-ireland/src/app/feature/favorites/favorites-routing.module.ts
var routes = [
  {
    path: "",
    component: FavoritesPage,
    data: { [RouteDataType.IS_FAVORITE_BTN_ENABLE]: true, [RouteDataType.SHOW_SELLER_INFO]: true, [RouteDataType.PAGE_REFERENCE]: "favorites" }
  }
];
var FavouritesAdsPageRoutingModule = class _FavouritesAdsPageRoutingModule {
  static {
    this.\u0275fac = function FavouritesAdsPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavouritesAdsPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FavouritesAdsPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavouritesAdsPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/favorites/favorites.module.ts
var FavoritesPageModule = class _FavoritesPageModule {
  static {
    this.\u0275fac = function FavoritesPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FavoritesPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [FavoritesFacade, AdsState, SharedAdsFacade], imports: [SharedModule, AdItemV2Module, FavouritesAdsPageRoutingModule, NoFavourtiesAdsModule, RemoveFavoritesDialogModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoritesPageModule, [{
    type: NgModule,
    args: [{
      declarations: [FavoritesPage],
      imports: [SharedModule, AdItemV2Module, FavouritesAdsPageRoutingModule, NoFavourtiesAdsModule, RemoveFavoritesDialogModule, MatDividerModule],
      providers: [FavoritesFacade, AdsState, SharedAdsFacade]
    }]
  }], null, null);
})();
export {
  FavoritesPageModule
};
//# sourceMappingURL=chunk-KQMCRPPQ.js.map
