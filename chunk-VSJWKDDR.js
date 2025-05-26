import {
  isPlatformServer
} from "./chunk-P7GEPQ2C.js";
import {
  Inject,
  Injectable,
  Optional,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/services/response.service.ts
var ResponseService = class _ResponseService {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.platformId = inject(PLATFORM_ID);
  }
  setStatusCode(code) {
    if (isPlatformServer(this.platformId) && this.res?.statusCode) {
      this.res.statusCode = code;
    }
  }
  static {
    this.\u0275fac = function ResponseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResponseService)(\u0275\u0275inject("REQUEST", 8), \u0275\u0275inject("RESPONSE", 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResponseService, factory: _ResponseService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponseService, [{
    type: Injectable
  }], () => [{ type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: ["REQUEST"]
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: ["RESPONSE"]
  }] }], null);
})();

export {
  ResponseService
};
//# sourceMappingURL=chunk-VSJWKDDR.js.map
