import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/guards/confirm-leave.guard.ts
var ConfirmLeaveGuard = class _ConfirmLeaveGuard {
  canDeactivate(component, _route) {
    return component.canDeactivate ? component.canDeactivate(_route) : true;
  }
  static {
    this.\u0275fac = function ConfirmLeaveGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmLeaveGuard)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmLeaveGuard, factory: _ConfirmLeaveGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmLeaveGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ConfirmLeaveGuard
};
//# sourceMappingURL=chunk-KPHUBYEC.js.map
