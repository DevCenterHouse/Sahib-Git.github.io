import {
  APP_ROUTE,
  MatButton,
  MatDialogClose,
  MatDialogModule,
  MatIconButton,
  Router,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/limit-reached-dialog/limit-reached-dialog.component.ts
var LimitReachedDialogComponent = class _LimitReachedDialogComponent {
  constructor(router) {
    this.router = router;
  }
  onContinue() {
    this.router.navigate([APP_ROUTE.placeAdCategory], {
      queryParams: { sellerTypeId: 2 }
    });
  }
  onUpgrade() {
    this.router.navigate([APP_ROUTE.agentHub.businessAccount], {
      queryParams: { pricing: true }
    });
  }
  static {
    this.\u0275fac = function LimitReachedDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LimitReachedDialogComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LimitReachedDialogComponent, selectors: [["findqo-limit-reached-dialog"]], decls: 27, vars: 0, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "px-sm-4", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "py-4", "dialog-text", "px-3", "px-sm-4"], [1, "feature-ad-count", "p-2", "row", "gap-2", "border-rounded"], [1, "col-auto"], [1, "fs-20px", "material-symbols-outlined"], [1, "col", "text-body-regular", "fg-info-3", "banner-text"], [1, "text-body-medium", "fg-general-5", "mt-3"], [1, "mt-3", "text-body-regular", "fg-general-5"], [1, "px-3", "px-sm-4", "py-3", "row", "gap-1", "d-flex", "justify-content-center", "px-3"], ["mat-stroked-button", "", "color", "primary", "mat-dialog-close", "", 1, "d-none", "d-sm-block", "col", "dialog-button", "px-2", "text-body-regular", 3, "click"], ["mat-stroked-button", "", "color", "primary", "mat-dialog-close", "", 1, "d-block", "d-sm-none", "col-auto", "dialog-button", "px-2", "text-body-regular", 3, "click"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "primary", 1, "col", "dialog-button", "px-2", "text-body-regular", 3, "click"]], template: function LimitReachedDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4, "Ad Limit Reached");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "button", 4)(7, "mat-icon", 5);
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "mat-icon", 9);
        \u0275\u0275text(13, "info");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "p", 10);
        \u0275\u0275text(15, "You've Reached Your Ad Limit!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 11);
        \u0275\u0275text(17, "Your current Limited Plan allows only 2 active ads.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 12);
        \u0275\u0275text(19, " To keep adding listings, upgrade to Premium Unlimited to post unlimited ads and access exclusive seller-leads, or pay per ad. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "button", 14);
        \u0275\u0275listener("click", function LimitReachedDialogComponent_Template_button_click_21_listener() {
          return ctx.onContinue();
        });
        \u0275\u0275text(22, " Continue Ad Listing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275listener("click", function LimitReachedDialogComponent_Template_button_click_23_listener() {
          return ctx.onContinue();
        });
        \u0275\u0275text(24, " Continue Listing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function LimitReachedDialogComponent_Template_button_click_25_listener() {
          return ctx.onUpgrade();
        });
        \u0275\u0275text(26, "Upgrade to Premium");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [MatDialogModule, MatDialogClose, SharedModule, MatButton, MatIconButton, MatIcon], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.feature-ad-count[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid var(--info-2) !important;\n  border-radius: 4px;\n  background-color: var(--info-1) !important;\n  align-content: center;\n}\n.feature-ad-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--info-3) !important;\n}\n.banner-text[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.dialog-text[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-button[_ngcontent-%COMP%] {\n  max-width: 222px !important;\n  height: 40px !important;\n  border: 1px transparent !important;\n}\n@media (max-width: 575.98px) {\n  .container[_ngcontent-%COMP%] {\n    width: 343px !important;\n  }\n}\n.container[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/limit-reached-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LimitReachedDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-limit-reached-dialog", imports: [MatDialogModule, SharedModule], template: `<div class="container p-0">
	<div class="row mx-0 px-3 px-sm-4 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">Ad Limit Reached</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="py-4 dialog-text px-3 px-sm-4">
		<div class="feature-ad-count p-2 row gap-2 border-rounded">
			<div class="col-auto">
				<mat-icon class="fs-20px material-symbols-outlined">info</mat-icon>
			</div>

			<p class="col text-body-regular fg-info-3 banner-text">You've Reached Your Ad Limit!</p>
		</div>
		<p class="text-body-medium fg-general-5 mt-3">Your current Limited Plan allows only 2 active ads.</p>
		<p class="mt-3 text-body-regular fg-general-5">
			To keep adding listings, upgrade to Premium Unlimited to post unlimited ads and access exclusive seller-leads, or pay per ad.
		</p>
	</div>

	<div class="px-3 px-sm-4 py-3 row gap-1 d-flex justify-content-center px-3">
		<button (click)="onContinue()" mat-stroked-button color="primary" mat-dialog-close class="d-none d-sm-block col dialog-button px-2 text-body-regular">
			Continue Ad Listing
		</button>
		<button (click)="onContinue()" mat-stroked-button color="primary" mat-dialog-close class="d-block d-sm-none col-auto dialog-button px-2 text-body-regular">
			Continue Listing
		</button>
		<button (click)="onUpgrade()" mat-flat-button mat-dialog-close color="primary" class="col dialog-button px-2 text-body-regular">Upgrade to Premium</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/limit-reached-dialog/limit-reached-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.feature-ad-count {\n  height: 36px;\n  border: 1px solid var(--info-2) !important;\n  border-radius: 4px;\n  background-color: var(--info-1) !important;\n  align-content: center;\n}\n.feature-ad-count mat-icon {\n  color: var(--info-3) !important;\n}\n.banner-text {\n  align-self: center;\n}\n.dialog-text {\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-button {\n  max-width: 222px !important;\n  height: 40px !important;\n  border: 1px transparent !important;\n}\n@media (max-width: 575.98px) {\n  .container {\n    width: 343px !important;\n  }\n}\n.container {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/limit-reached-dialog.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LimitReachedDialogComponent, { className: "LimitReachedDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/limit-reached-dialog/limit-reached-dialog.component.ts", lineNumber: 13 });
})();

export {
  LimitReachedDialogComponent
};
//# sourceMappingURL=chunk-ZUTZZPFZ.js.map
