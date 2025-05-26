import {
  APP_ROUTE,
  AuthService,
  RouteService,
  Router,
  StorageType
} from "./chunk-DMGY2MF4.js";
import {
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Inject,
  Injectable,
  PLATFORM_ID,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(platformId, router, auth, routeService) {
    this.platformId = platformId;
    this.router = router;
    this.auth = auth;
    this.routeService = routeService;
  }
  canActivate(_route, state) {
    const IS_LOGGED_IN = this.auth.user()?.accessToken;
    if (IS_LOGGED_IN) {
      return true;
    } else if (isPlatformBrowser(this.platformId)) {
      const CURRENT_URL = state.url;
      sessionStorage.setItem(StorageType.AUTH_REDIRECT, CURRENT_URL);
      this.auth.openAuthDialog(__spreadValues({
        onLogin: () => {
          this.router.navigate([CURRENT_URL]);
        }
      }, (CURRENT_URL === this.routeService.getPreviousUrl() || !this.routeService?.getPreviousUrl()) && { navigateTo: APP_ROUTE.home }));
      return false;
    }
    return false;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(Router), \u0275\u0275inject(AuthService), \u0275\u0275inject(RouteService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Router }, { type: AuthService }, { type: RouteService }], null);
})();

export {
  AuthGuard
};
//# sourceMappingURL=chunk-YWVMQOIU.js.map
