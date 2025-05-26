import {
  SeoService
} from "./chunk-5JBKTQLQ.js";
import {
  environment
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/guards/seo/seo.guard.ts
var SeoGuard = class _SeoGuard {
  constructor(seoService) {
    this.seoService = seoService;
  }
  canActivate(route, state) {
    this.seoService.setSeo({
      title: route.data["title"],
      description: route.data["description"],
      includeTitleSuffix: route.data["includeTitleSuffix"],
      url: `${environment.appUrl}${state.url}`
    });
    return true;
  }
  static {
    this.\u0275fac = function SeoGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeoGuard)(\u0275\u0275inject(SeoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoGuard, factory: _SeoGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: SeoService }], null);
})();

export {
  SeoGuard
};
//# sourceMappingURL=chunk-44A3ZODA.js.map
