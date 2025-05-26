import {
  CanonicalService
} from "./chunk-ZM4NPOC4.js";
import {
  environment
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/guards/seo/canonical.guard.ts
var CanonicalGuard = class _CanonicalGuard {
  constructor(canonicalService) {
    this.canonicalService = canonicalService;
  }
  canActivate(_route, state) {
    if (environment.production) {
      const URL = state.url.split("?")[0];
      if (URL.startsWith("/public")) {
        this.canonicalService.createCannonicaUrl(URL.replace("/public/", ""));
      } else {
        this.canonicalService.createCannonicaUrl(URL);
      }
    }
    return true;
  }
  static {
    this.\u0275fac = function CanonicalGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CanonicalGuard)(\u0275\u0275inject(CanonicalService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CanonicalGuard, factory: _CanonicalGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanonicalGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CanonicalService }], null);
})();

export {
  CanonicalGuard
};
//# sourceMappingURL=chunk-AK7V3HRG.js.map
