import {
  PropertyAlertDialogComponent
} from "./chunk-THEU3YGZ.js";
import {
  PropertyAlertsFacade
} from "./chunk-VPQFLCQL.js";
import {
  MatCheckboxModule
} from "./chunk-GOW5C4RI.js";
import {
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  ButtonModule,
  FormsModule,
  MatDialogModule,
  ReactiveFormsModule,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/filters/components/property-alert-dialog/property-alert-dialog.module.ts
var PropertyAlertDialogModule = class _PropertyAlertDialogModule {
  static {
    this.\u0275fac = function PropertyAlertDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PropertyAlertDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [PropertyAlertsFacade], imports: [SharedModule, ButtonModule, MatDialogModule, MatSelectModule, MatCheckboxModule, FormsModule, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [PropertyAlertDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule, MatSelectModule, MatCheckboxModule, FormsModule, ReactiveFormsModule],
      exports: [PropertyAlertDialogComponent],
      providers: [PropertyAlertsFacade]
    }]
  }], null, null);
})();

export {
  PropertyAlertDialogModule
};
//# sourceMappingURL=chunk-QMD5Z7A4.js.map
