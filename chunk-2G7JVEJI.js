import {
  MatButton,
  MatDialogClose,
  MatIconButton,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent/components/enquiry-sent-dialog/enquiry-sent-dialog.component.ts
var EnquirySentDialogComponent = class _EnquirySentDialogComponent {
  static {
    this.\u0275fac = function EnquirySentDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquirySentDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquirySentDialogComponent, selectors: [["findqo-enquiry-sent-dialog"]], standalone: false, decls: 21, vars: 12, consts: [[1, "container", "p-3"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "text-center", "py-4"], [1, "check-icon", "mx-auto"], [1, "heading-4-medium", "mt-2", "fg-general-5", "mt-3"], [1, "text-body-paragraph", "fg-general-5", "mt-3"], ["mat-button", "", "mat-dialog-close", "true", "dialogResult", "true", "color", "primary", 1, "mt-3"]], template: function EnquirySentDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "mat-icon", 7);
        \u0275\u0275text(11, "check");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h4", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "n3851"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 6, "n3852"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, "n3853"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 10, "n91"));
      }
    }, dependencies: [MatButton, MatIconButton, MatIcon, MatDialogClose, TranslationsPipe], styles: ["\n\nmat-icon.check-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 42px;\n  width: 60px;\n  height: 60px;\n  background: var(--prim-1);\n  border-radius: 100px;\n  color: var(--basic-1);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/enquiry-sent-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquirySentDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-enquiry-sent-dialog", standalone: false, template: `<div class="container p-3">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n3851' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="text-center py-4">
		<mat-icon class="check-icon mx-auto">check</mat-icon>
		<h4 class="heading-4-medium mt-2 fg-general-5 mt-3">{{ 'n3852' | translations }}</h4>
		<p class="text-body-paragraph fg-general-5 mt-3">{{ 'n3853' | translations }}</p>
		<button mat-button mat-dialog-close="true" dialogResult="true" color="primary" class="mt-3">{{ 'n91' | translations }}</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent/components/enquiry-sent-dialog/enquiry-sent-dialog.component.scss */\nmat-icon.check-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 42px;\n  width: 60px;\n  height: 60px;\n  background: var(--prim-1);\n  border-radius: 100px;\n  color: var(--basic-1);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/enquiry-sent-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquirySentDialogComponent, { className: "EnquirySentDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/agent/components/enquiry-sent-dialog/enquiry-sent-dialog.component.ts", lineNumber: 9 });
})();

export {
  EnquirySentDialogComponent
};
//# sourceMappingURL=chunk-2G7JVEJI.js.map
