import {
  APP_ROUTE,
  RouteService,
  Router
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/guards/public.guard.ts
var PublicGuard = class _PublicGuard {
  constructor(routeService, router) {
    this.routeService = routeService;
    this.router = router;
  }
  canActivate(_route, state) {
    const PREVIOUS_ROUTE_DATA = this.routeService.getRouteData();
    if (PREVIOUS_ROUTE_DATA?.isPublicPage) {
      this.router.navigateByUrl(`${APP_ROUTE.public.base}${state.url}`);
      return false;
    }
    return true;
  }
  static {
    this.\u0275fac = function PublicGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PublicGuard)(\u0275\u0275inject(RouteService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PublicGuard, factory: _PublicGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: RouteService }, { type: Router }], null);
})();

export {
  PublicGuard
};
//# sourceMappingURL=chunk-OZPLB4T5.js.map
