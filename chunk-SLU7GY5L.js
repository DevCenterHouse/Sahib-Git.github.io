import {
  LimitReachedDialogComponent
} from "./chunk-ZUTZZPFZ.js";
import {
  SubscriptionOfferDialogComponent
} from "./chunk-QRKYK676.js";
import {
  PlaceAdShowAgentsListModule
} from "./chunk-SOESUKBF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  LIMITED_COUPON_CODE,
  MatDialog,
  MatDivider,
  MatDividerModule,
  MyProfileFacade,
  PlaceAdFacade,
  PlaceAdService,
  Router,
  RouterModule,
  SellerType,
  SharedModule,
  StorageService,
  SubscriptionTier,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-select-account/place-ad-select-account.component.ts
var PlaceAdSelectAccountComponent = class _PlaceAdSelectAccountComponent {
  constructor(route, router, placeAdService, destroy, myProfileFacade, placeAdFacade, dialog) {
    this.route = route;
    this.router = router;
    this.placeAdService = placeAdService;
    this.destroy = destroy;
    this.myProfileFacade = myProfileFacade;
    this.placeAdFacade = placeAdFacade;
    this.dialog = dialog;
    this.hasBusinessProfile = false;
    this.buttonType = ButtonType;
    this.user$ = myProfileFacade.getUser$();
    this.subscription$ = this.myProfileFacade.getSubscriptionInfo$();
  }
  //check if user has businsess profile or not based on selection and navigate accordingly
  gotoSelection(isBusinessAccount = false) {
    if (isBusinessAccount) {
      this.subscription$.pipe(takeUntil(this.destroy)).subscribe((subscription) => {
        this.subscription = subscription;
      });
      if (this.subscription.status === "cancelled" && new Date(this.subscription.dates.expired) < /* @__PURE__ */ new Date()) {
        this.dialog.open(SubscriptionOfferDialogComponent, {
          disableClose: true,
          width: "500px",
          height: "600px"
        });
        return;
      }
    }
    if (!isBusinessAccount || this.hasBusinessProfile) {
      if (isBusinessAccount && this.userInfo.businessProfile?.subscription.reference === SubscriptionTier.LIMITED_YEARLY) {
        this.placeAdFacade.getPaymentCount({
          userId: this.userInfo?.id,
          sellerTypeId: "2",
          couponCode: LIMITED_COUPON_CODE
        }).pipe().subscribe((meta) => {
          this.hasPlanAdsLeft = +(meta?.total ?? 0) < 2;
          if (this.hasPlanAdsLeft) {
            this.router.navigate([APP_ROUTE.placeAdCategory], {
              queryParams: { sellerTypeId: 2 }
            });
          } else {
            this.dialog.open(LimitReachedDialogComponent, {
              disableClose: true,
              maxWidth: "500px",
              maxHeight: "354px"
            });
          }
        });
        return;
      }
      this.router.navigate([APP_ROUTE.placeAdCategory], {
        queryParams: { sellerTypeId: isBusinessAccount ? SellerType.BUSINESS : SellerType.INDIVIDUAL }
      });
    } else {
      if (!(this.hasBusinessProfile && this.hasAgents)) {
        this.router.navigate([APP_ROUTE.placeAdBusiness]);
      }
    }
  }
  getUserDetails() {
    this.user$.pipe(takeUntil(this.destroy)).subscribe((user) => {
      this.userInfo = user;
      this.hasBusinessProfile = !!user?.businessProfile;
    });
  }
  ngOnInit() {
    this.getUserDetails();
    this.placeAdService.setCurrentSellerId(void 0);
  }
  static {
    this.\u0275fac = function PlaceAdSelectAccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSelectAccountComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PlaceAdService), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAdSelectAccountComponent, selectors: [["findqo-place-ad-select-account"]], inputs: { hasAgents: "hasAgents" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 48, vars: 29, consts: [[1, "container"], [1, "heading-4-medium", "heading-3-lg-medium", "text-center", "pt-3", "pt-sm-4", "pb-48px"], [1, "row", "align-items-center", "gap-32px", "justify-content-start", "justify-content-sm-center"], [1, "col-auto", "account-section"], [1, "justify-content-between", "align-items-center", "h-100", "w-100", "account-link", "p-sm-3"], [1, "icon-logo", "align-middle", "place-ad-two-tone", "material-icons-two-tone"], [1, "fs-14px", "lh-18px", "fg-general-5", "fw-500", "ms-1", "d-inline-block"], [1, "pt-3", "pb-1"], [1, "fg-prim-2", "check-icon", "align-middle", "fs-18px"], [1, "d-inline-block", "fg-general-4", "fs-12px", "fw-400", "lh-16px", "ps-2"], [1, "pb-3"], ["btnClass", "w-100 text-small-14px-regular", 1, "post-btn", "mw-375px", "mx-auto", 3, "clicked", "btnType", "label"], [1, "fg-neutral-2", "w-100", "my-4", "d-md-none"]], template: function PlaceAdSelectAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "mat-icon", 5);
        \u0275\u0275text(8, "business_center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 7)(13, "mat-icon", 8);
        \u0275\u0275text(14, "check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "p", 10)(19, "mat-icon", 8);
        \u0275\u0275text(20, "check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 9);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "findqo-button", 11);
        \u0275\u0275pipe(25, "translations");
        \u0275\u0275listener("clicked", function PlaceAdSelectAccountComponent_Template_findqo_button_clicked_24_listener() {
          return ctx.gotoSelection(true);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(26, "mat-divider", 12);
        \u0275\u0275elementStart(27, "div", 3)(28, "div", 4)(29, "mat-icon", 5);
        \u0275\u0275text(30, "person_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 6);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 7)(35, "mat-icon", 8);
        \u0275\u0275text(36, "check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 9);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "p", 10)(41, "mat-icon", 8);
        \u0275\u0275text(42, "check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 9);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "findqo-button", 11);
        \u0275\u0275pipe(47, "translations");
        \u0275\u0275listener("clicked", function PlaceAdSelectAccountComponent_Template_findqo_button_clicked_46_listener() {
          return ctx.gotoSelection(false);
        });
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "n2965"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "n2966"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "n2968"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 17, "n2969"));
        \u0275\u0275advance(2);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(25, 19, "n3571"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 21, "n2967"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 23, "n2970"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 25, "n2971"));
        \u0275\u0275advance(2);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(47, 27, "n3572"));
      }
    }, dependencies: [MatIcon, ButtonComponent, MatDivider, TranslationsPipe], styles: ['\n\n.icon-logo[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  display: inline-block !important;\n}\n.account-link[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-1);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.account-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 407px;\n}\n.account-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.account-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  content: "\\e5ca";\n  font-family: "Material Icons";\n  color: var(--prim-2);\n  font-size: 18px;\n}\n.check-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.gap-32px[_ngcontent-%COMP%] {\n  gap: 32px;\n}\n.pb-48px[_ngcontent-%COMP%] {\n  padding-bottom: 48px;\n}\nfindqo-button.post-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\nfindqo-button.post-btn.mw-375px[_ngcontent-%COMP%] {\n  max-width: 375px;\n}\n@media (max-width: 767.98px) {\n  .check-icon[_ngcontent-%COMP%] {\n    height: 18px;\n    width: 18px;\n  }\n  .account-link[_ngcontent-%COMP%] {\n    border: 0px;\n  }\n  .gap-32px[_ngcontent-%COMP%] {\n    gap: 0px;\n  }\n  .pb-48px[_ngcontent-%COMP%] {\n    padding-bottom: 24px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-select-account.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSelectAccountComponent, [{
    type: Component,
    args: [{ selector: "findqo-place-ad-select-account", providers: [DestroyService], standalone: false, template: `<div class="container">
	<h3 class="heading-4-medium heading-3-lg-medium text-center pt-3 pt-sm-4 pb-48px">{{ 'n2965' | translations }}</h3>

	<div class="row align-items-center gap-32px justify-content-start justify-content-sm-center">
		<div class="col-auto account-section">
			<div class="justify-content-between align-items-center h-100 w-100 account-link p-sm-3">
				<mat-icon class="icon-logo align-middle place-ad-two-tone material-icons-two-tone">business_center</mat-icon>

				<span class="fs-14px lh-18px fg-general-5 fw-500 ms-1 d-inline-block">{{ 'n2966' | translations }}</span>

				<p class="pt-3 pb-1">
					<mat-icon class="fg-prim-2 check-icon align-middle fs-18px">check</mat-icon>

					<span class="d-inline-block fg-general-4 fs-12px fw-400 lh-16px ps-2">{{ 'n2968' | translations }}</span>
				</p>
				<p class="pb-3">
					<mat-icon class="fg-prim-2 check-icon align-middle fs-18px">check</mat-icon>

					<span class="d-inline-block fg-general-4 fs-12px fw-400 lh-16px ps-2">{{ 'n2969' | translations }}</span>
				</p>

				<findqo-button
					btnClass="w-100 text-small-14px-regular"
					class="post-btn mw-375px mx-auto"
					[btnType]="buttonType.FILLED"
					[label]="'n3571' | translations"
					(clicked)="gotoSelection(true)"
				></findqo-button>
			</div>
		</div>

		<mat-divider class="fg-neutral-2 w-100 my-4 d-md-none"></mat-divider>

		<div class="col-auto account-section">
			<div class="justify-content-between align-items-center h-100 w-100 account-link p-sm-3">
				<mat-icon class="icon-logo align-middle place-ad-two-tone material-icons-two-tone">person_2</mat-icon>

				<span class="fs-14px lh-18px fg-general-5 fw-500 ms-1 d-inline-block">{{ 'n2967' | translations }}</span>

				<p class="pt-3 pb-1">
					<mat-icon class="fg-prim-2 check-icon align-middle fs-18px">check</mat-icon>

					<span class="d-inline-block fg-general-4 fs-12px fw-400 lh-16px ps-2">{{ 'n2970' | translations }}</span>
				</p>

				<p class="pb-3">
					<mat-icon class="fg-prim-2 check-icon align-middle fs-18px">check</mat-icon>

					<span class="d-inline-block fg-general-4 fs-12px fw-400 lh-16px ps-2">{{ 'n2971' | translations }}</span>
				</p>

				<findqo-button
					btnClass="w-100 text-small-14px-regular"
					class="post-btn mw-375px mx-auto"
					[btnType]="buttonType.FILLED"
					[label]="'n3572' | translations"
					(clicked)="gotoSelection(false)"
				></findqo-button>
			</div>
		</div>
	</div>
</div>
`, styles: ['/* apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-select-account/place-ad-select-account.component.scss */\n.icon-logo {\n  width: 25px;\n  height: 25px;\n  display: inline-block !important;\n}\n.account-link {\n  border: 1px solid var(--general-1);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.account-section {\n  width: 100%;\n  max-width: 407px;\n}\n.account-list li {\n  list-style-type: none;\n}\n.account-list li::marker {\n  content: "\\e5ca";\n  font-family: "Material Icons";\n  color: var(--prim-2);\n  font-size: 18px;\n}\n.check-icon {\n  display: inline-block !important;\n}\n.gap-32px {\n  gap: 32px;\n}\n.pb-48px {\n  padding-bottom: 48px;\n}\nfindqo-button.post-btn {\n  width: 100%;\n  height: 40px;\n}\nfindqo-button.post-btn.mw-375px {\n  max-width: 375px;\n}\n@media (max-width: 767.98px) {\n  .check-icon {\n    height: 18px;\n    width: 18px;\n  }\n  .account-link {\n    border: 0px;\n  }\n  .gap-32px {\n    gap: 0px;\n  }\n  .pb-48px {\n    padding-bottom: 24px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-select-account.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: PlaceAdService }, { type: DestroyService }, { type: MyProfileFacade }, { type: PlaceAdFacade }, { type: MatDialog }], { hasAgents: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAdSelectAccountComponent, { className: "PlaceAdSelectAccountComponent", filePath: "apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-select-account/place-ad-select-account.component.ts", lineNumber: 25 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-page/place-ad.page.ts
var _c0 = (a0) => ({ agentsList: a0 });
function PlaceAd_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "findqo-place-ad-select-account", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("hasAgents", (vm_r1 == null ? null : vm_r1.agentsList == null ? null : vm_r1.agentsList.length) > 1);
  }
}
var PlaceAd = class _PlaceAd {
  constructor(placeAdFacade, storageService) {
    this.placeAdFacade = placeAdFacade;
    this.storageService = storageService;
    this.agents$ = this.placeAdFacade.getAgents$();
  }
  ngOnInit() {
    this.storageService.removeItem("agentId");
  }
  static {
    this.\u0275fac = function PlaceAd_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAd)(\u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(StorageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAd, selectors: [["ng-component"]], standalone: false, decls: 2, vars: 5, consts: [[4, "ngIf"], [3, "hasAgents"]], template: function PlaceAd_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlaceAd_ng_container_0_Template, 2, 1, "ng-container", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.agents$)));
      }
    }, dependencies: [NgIf, PlaceAdSelectAccountComponent, AsyncPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAd, [{
    type: Component,
    args: [{ standalone: false, template: '<ng-container *ngIf="{agentsList: agents$ | async  } as vm ">\n	<findqo-place-ad-select-account [hasAgents]="vm?.agentsList?.length> 1"></findqo-place-ad-select-account>\n</ng-container>\n' }]
  }], () => [{ type: PlaceAdFacade }, { type: StorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAd, { className: "PlaceAd", filePath: "apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-page/place-ad.page.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-page/place-ad-routing.module.ts
var routes = [
  {
    path: "",
    component: PlaceAd
  }
];
var PlaceAdRoutingModule = class _PlaceAdRoutingModule {
  static {
    this.\u0275fac = function PlaceAdRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-select-account/place-ad-select-account.module.ts
var PlaceAdSelectAccountModule = class _PlaceAdSelectAccountModule {
  static {
    this.\u0275fac = function PlaceAdSelectAccountModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSelectAccountModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdSelectAccountModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDividerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSelectAccountModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAdSelectAccountComponent],
      imports: [SharedModule, ButtonModule, MatDividerModule],
      exports: [PlaceAdSelectAccountComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/pages/place-ad-page/place-ad.module.ts
var PlaceAdModule = class _PlaceAdModule {
  static {
    this.\u0275fac = function PlaceAdModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [PlaceAdRoutingModule, SharedModule, PlaceAdShowAgentsListModule, PlaceAdSelectAccountModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAd],
      imports: [PlaceAdRoutingModule, SharedModule, PlaceAdShowAgentsListModule, PlaceAdSelectAccountModule],
      exports: [PlaceAd]
    }]
  }], null, null);
})();
export {
  PlaceAdModule
};
//# sourceMappingURL=chunk-SLU7GY5L.js.map
