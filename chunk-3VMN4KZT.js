import {
  Injectable,
  Observable,
  ReplaySubject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/services/destroy.service.ts
var DestroyService = class _DestroyService extends Observable {
  constructor() {
    super((subscriber) => this.destroySubject.subscribe(subscriber));
    this.destroySubject = new ReplaySubject(1);
  }
  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
  static {
    this.\u0275fac = function DestroyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DestroyService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DestroyService, factory: _DestroyService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DestroyService, [{
    type: Injectable
  }], () => [], null);
})();

export {
  DestroyService
};
//# sourceMappingURL=chunk-3VMN4KZT.js.map
