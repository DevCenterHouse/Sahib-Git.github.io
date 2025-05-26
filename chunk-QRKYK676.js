import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer-dialog/subscription-offer-dialog.component.ts
var _c0 = [[["", "subscriptionDialog", ""]]];
var _c1 = ["[subscriptionDialog]"];
var SubscriptionOfferDialogComponent = class _SubscriptionOfferDialogComponent {
  static {
    this.\u0275fac = function SubscriptionOfferDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionOfferDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionOfferDialogComponent, selectors: [["findqo-subscription-offer-dialog"]], standalone: false, ngContentSelectors: _c1, decls: 6, vars: 1, consts: [[1, "container", "p-0"], [1, "dialog-header", "align-items-center", "justify-content-end", "w-100", "d-inline-flex", "pe-3", "pt-3"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", "border-0", "bg-general-1"], ["svgIcon", "close-2", 1, "justify-content-center", "fg-general-4"], [3, "isSubscriptionDialog"]], template: function SubscriptionOfferDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275element(3, "mat-icon", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "findqo-subscription-offer", 4);
        \u0275\u0275projection(5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("isSubscriptionDialog", true);
      }
    }, styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  position: absolute;\n}\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-offer-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionOfferDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-subscription-offer-dialog", standalone: false, template: '<div class="container p-0">\n	<div class="dialog-header align-items-center justify-content-end w-100 d-inline-flex pe-3 pt-3">\n		<button mat-icon-button mat-dialog-close class="close-btn border-0 bg-general-1">\n			<mat-icon svgIcon="close-2" class="justify-content-center fg-general-4"></mat-icon>\n		</button>\n	</div>\n\n	<findqo-subscription-offer [isSubscriptionDialog]="true">\n		<ng-content select="[subscriptionDialog]"></ng-content>\n	</findqo-subscription-offer>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer-dialog/subscription-offer-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n}\n.dialog-header {\n  height: 60px;\n  position: absolute;\n}\n.container {\n  position: relative;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/subscription-offer-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionOfferDialogComponent, { className: "SubscriptionOfferDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/subscription-offer-dialog/subscription-offer-dialog.component.ts", lineNumber: 9 });
})();

export {
  SubscriptionOfferDialogComponent
};
//# sourceMappingURL=chunk-QRKYK676.js.map
