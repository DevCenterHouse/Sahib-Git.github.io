import {
  ConfirmLeaveGuard
} from "./chunk-KPHUBYEC.js";
import {
  PropertyWorthState
} from "./chunk-OL2TDOFF.js";
import {
  APP_ROUTE,
  AuthService,
  MatDialog,
  MyProfileFacade,
  PlaceAdService,
  ProfileDisabledDialogComponent,
  ROUTE_PATH,
  Router,
  RouterModule,
  SECTION_LIST
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  Location
} from "./chunk-P7GEPQ2C.js";
import {
  Injectable,
  NgModule,
  __spreadValues,
  of,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/guards/place-ad/place-ad-business-account.guard.ts
var PlaceAdSBusinessAccountGuard = class _PlaceAdSBusinessAccountGuard {
  constructor(router, userFacade, authService) {
    this.router = router;
    this.userFacade = userFacade;
    this.authService = authService;
  }
  // to prevent user from going to place ad business account
  canActivate(_route, _state) {
    return this.authService.user() ? this.userFacade.getProfile().pipe(switchMap((res) => {
      if (!+res?.hasBusinessProfile) {
        this.router.navigate([APP_ROUTE.placeAdCategory], { queryParams: { sellerTypeId: "1" } });
        return of(false);
      }
      return of(true);
    })) : of(null).pipe(switchMap(() => {
      this.router.navigate([APP_ROUTE.placeAdCategory], { queryParams: { sellerTypeId: "1" } });
      return of(false);
    }));
  }
  static {
    this.\u0275fac = function PlaceAdSBusinessAccountGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSBusinessAccountGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(MyProfileFacade), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceAdSBusinessAccountGuard, factory: _PlaceAdSBusinessAccountGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSBusinessAccountGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: MyProfileFacade }, { type: AuthService }], null);
})();

// apps/findqo-ireland/src/app/core/guards/place-ad/place-ad-disabled-account.guard.ts
var PlaceAdDisabledAccountGuard = class _PlaceAdDisabledAccountGuard {
  constructor(dialog, userFacade, authService) {
    this.dialog = dialog;
    this.userFacade = userFacade;
    this.authService = authService;
  }
  canActivate(route) {
    return this.authService.user() ? this.userFacade.getProfile().pipe(switchMap((res) => {
      const IS_BUSINESS_POSTING_AD_ROUTE = route.routeConfig.path === "category" && route.queryParams?.["sellerTypeId"] === "2";
      const IS_INDIVIDUAL_POSTING_AD_ROUTE = route.routeConfig.path === "category" && route.queryParams?.["sellerTypeId"] === "1";
      const IS_ACCOUNT_DISABLED = +res.isDisabled;
      const IS_BUSINESS_PROFILE_DISABLED = +res?.businessProfile?.isDisabled;
      if (IS_INDIVIDUAL_POSTING_AD_ROUTE && IS_ACCOUNT_DISABLED) {
        this.dialog.open(ProfileDisabledDialogComponent, {
          panelClass: "profile-disabled-dialog"
        });
        return of(false);
      }
      if (IS_BUSINESS_POSTING_AD_ROUTE && IS_BUSINESS_PROFILE_DISABLED) {
        this.dialog.open(ProfileDisabledDialogComponent, {
          panelClass: "profile-disabled-dialog"
        });
        return of(false);
      }
      return of(true);
    })) : of(true);
  }
  static {
    this.\u0275fac = function PlaceAdDisabledAccountGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdDisabledAccountGuard)(\u0275\u0275inject(MatDialog), \u0275\u0275inject(MyProfileFacade), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceAdDisabledAccountGuard, factory: _PlaceAdDisabledAccountGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdDisabledAccountGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: MatDialog }, { type: MyProfileFacade }, { type: AuthService }], null);
})();

// apps/findqo-ireland/src/app/core/guards/place-ad/place-ad-section.guard.ts
var PlaceAdSectionGuard = class _PlaceAdSectionGuard {
  constructor(location) {
    this.location = location;
  }
  //to allow go to place ad sections page only if sellertypeId and valid section is there so that to prevent user from going to thsi route manually without completing previous steps
  canActivate(route, state) {
    const IS_SECTION_VALID = !!route.params["section"] && !!SECTION_LIST.find((value) => value === route.params["section"]);
    if (route.queryParams?.["sellerTypeId"] && IS_SECTION_VALID) {
      return true;
    } else {
      this.location.back();
      return false;
    }
  }
  static {
    this.\u0275fac = function PlaceAdSectionGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdSectionGuard)(\u0275\u0275inject(Location));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceAdSectionGuard, factory: _PlaceAdSectionGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdSectionGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Location }], null);
})();

// apps/findqo-ireland/src/app/core/guards/place-ad/place-ad-steps.guard.ts
var PlaceAdStepsGuard = class _PlaceAdStepsGuard {
  constructor(placeAdService, location, propertyWorthState) {
    this.placeAdService = placeAdService;
    this.location = location;
    this.propertyWorthState = propertyWorthState;
  }
  //to allow routing to place ad steps page only if sectioId and aisleId is there so that to prevent user from going to thsi route manually without completing previous steps
  canActivate(_route, _state) {
    const DATA = this.placeAdService.getPlaceAdData();
    const propertyWorthData = this.propertyWorthState.getValuationInfo();
    if (DATA?.sectionId && DATA?.aisleId || propertyWorthData) {
      return true;
    } else {
      this.location.back();
      return false;
    }
  }
  static {
    this.\u0275fac = function PlaceAdStepsGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdStepsGuard)(\u0275\u0275inject(PlaceAdService), \u0275\u0275inject(Location), \u0275\u0275inject(PropertyWorthState));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlaceAdStepsGuard, factory: _PlaceAdStepsGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdStepsGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: PlaceAdService }, { type: Location }, { type: PropertyWorthState }], null);
})();

// apps/findqo-ireland/src/app/feature/place-ad/place-ad-routing.module.ts
var routes = [
  __spreadValues({
    path: "",
    loadChildren: () => import("./chunk-SLU7GY5L.js").then((m) => m.PlaceAdModule),
    canActivate: [PlaceAdSBusinessAccountGuard]
  }, false ? { \u0275entryName: "src/app/feature/place-ad/pages/place-ad-page/place-ad.module.ts" } : {}),
  __spreadValues({
    path: ROUTE_PATH.placeAd.category,
    loadChildren: () => import("./chunk-7AB6KX6A.js").then((m) => m.PlaceAdCategoryModule),
    canActivate: [PlaceAdDisabledAccountGuard]
  }, false ? { \u0275entryName: "src/app/feature/place-ad/pages/place-ad-category/place-ad-category.module.ts" } : {}),
  __spreadValues({
    path: ROUTE_PATH.placeAd.section,
    loadChildren: () => import("./chunk-WZOCMRTS.js").then((m) => m.PlaceAdSectionModule),
    canActivate: [PlaceAdSectionGuard]
  }, false ? { \u0275entryName: "src/app/feature/place-ad/pages/place-ad-section/place-ad-section.module.ts" } : {}),
  __spreadValues({
    path: ROUTE_PATH.placeAd.steps,
    loadComponent: () => import("./chunk-R7H4GH7K.js").then((c) => c.PlaceAdFormPage),
    canActivate: [PlaceAdStepsGuard],
    canDeactivate: [ConfirmLeaveGuard]
  }, false ? { \u0275entryName: "src/app/feature/place-ad/pages/place-ad-form-page/place-ad-form-page.component.ts" } : {})
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

// apps/findqo-ireland/src/app/feature/place-ad/place-ad.module.ts
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
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [PlaceAdRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [PlaceAdRoutingModule]
    }]
  }], null, null);
})();
export {
  PlaceAdModule
};
//# sourceMappingURL=chunk-744UTT2Y.js.map
