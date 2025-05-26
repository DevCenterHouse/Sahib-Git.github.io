import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/pages/leads/commercial-lead-details/typeof.pipe.ts
var TypeofPipe = class _TypeofPipe {
  transform(value) {
    return String(typeof value);
  }
  static {
    this.\u0275fac = function TypeofPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypeofPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "typeof", type: _TypeofPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypeofPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "typeof"
    }]
  }], null, null);
})();
export {
  TypeofPipe
};
//# sourceMappingURL=chunk-RRRJF3YD.js.map
