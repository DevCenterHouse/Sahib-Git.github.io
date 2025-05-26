import {
  MyAdsFacade
} from "./chunk-ZVA7FJ7A.js";
import {
  ButtonComponent,
  ButtonModule,
  ButtonType,
  IconType,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatIconButton,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-delete-dialog/my-ad-delete-dialog.component.ts
var MyAdDeleteDialogComponent = class _MyAdDeleteDialogComponent {
  constructor(data, dialogRef, myAdsFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.myAdsFacade = myAdsFacade;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  deleteAd() {
    this.myAdsFacade.deleteAd(this.data.adId, this.dialogRef, this.data.myAdHeaderStatusId);
  }
  static {
    this.\u0275fac = function MyAdDeleteDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdDeleteDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdDeleteDialogComponent, selectors: [["findqo-my-ad-delete-dialog"]], standalone: false, decls: 29, vars: 24, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], [1, "text-body-regular", "fg-general-4"], [1, "alert-danger", "p-1", "mt-4"], [1, "d-inline-block", "align-middle"], ["svgIcon", "warning-amber", 1, "me-2"], [1, "text-body-regular", "fg-error-3", "text-start", "align-middle"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function MyAdDeleteDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
        \u0275\u0275element(18, "mat-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "findqo-button", 15);
        \u0275\u0275pipe(25, "translations");
        \u0275\u0275listener("clicked", function MyAdDeleteDialogComponent_Template_findqo_button_clicked_24_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14)(27, "findqo-button", 15);
        \u0275\u0275pipe(28, "translations");
        \u0275\u0275listener("clicked", function MyAdDeleteDialogComponent_Template_findqo_button_clicked_27_listener() {
          return ctx.deleteAd();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "n230"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "n3141"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "n3133"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "n3142"));
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(25, 20, "n112"))("isStopPropagation", true)("btnClass", "text-body-regular w-100");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(28, 22, "n230"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-delete-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdDeleteDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-delete-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n230' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="text-body-regular fg-general-4 mb-3">{{ 'n3141' | translations }}</p>
		<p class="text-body-regular fg-general-4">{{ 'n3133' | translations }}</p>

		<div class="alert-danger p-1 mt-4">
			<div class="d-inline-block align-middle">
				<mat-icon svgIcon="warning-amber" class="me-2"></mat-icon>
			</div>

			<span class="text-body-regular fg-error-3 text-start align-middle">{{ 'n3142' | translations }}</span>
		</div>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n112' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onCloseDialog()"
			></findqo-button>
		</div>

		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n230' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
				(clicked)="deleteAd()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-delete-dialog/my-ad-delete-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-delete-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: MyAdsFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdDeleteDialogComponent, { className: "MyAdDeleteDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-delete-dialog/my-ad-delete-dialog.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-delete-dialog/my-ad-delete-dialog.module.ts
var MyAdDeleteDialogModule = class _MyAdDeleteDialogModule {
  static {
    this.\u0275fac = function MyAdDeleteDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdDeleteDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdDeleteDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdDeleteDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdDeleteDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [MyAdDeleteDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-unpublish-dialog/my-ad-unpublish-dialog.component.ts
var MyAdUnPublishDialogComponent = class _MyAdUnPublishDialogComponent {
  constructor(data, dialogRef, myAdsFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.myAdsFacade = myAdsFacade;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  unpublishAd() {
    this.myAdsFacade.unpublishAd(this.data.adId, this.data.updatestatus, this.dialogRef, this.data.myAdHeaderStatusId);
  }
  static {
    this.\u0275fac = function MyAdUnPublishDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdUnPublishDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdUnPublishDialogComponent, selectors: [["findqo-my-ad-unpublish-dialog"]], standalone: false, decls: 22, vars: 18, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], [1, "text-body-regular", "fg-general-4"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function MyAdUnPublishDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4, "Unpublish Ad");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "button", 4);
        \u0275\u0275element(7, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 6)(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "findqo-button", 11);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275listener("clicked", function MyAdUnPublishDialogComponent_Template_findqo_button_clicked_17_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 10)(20, "findqo-button", 11);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275listener("clicked", function MyAdUnPublishDialogComponent_Template_findqo_button_clicked_20_listener() {
          return ctx.unpublishAd();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "n4096"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "n4097"));
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(18, 14, "n112"))("isStopPropagation", true)("btnClass", "text-body-regular w-100");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(21, 16, "n4099"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-unpublish-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdUnPublishDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-unpublish-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">Unpublish Ad</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="text-body-regular fg-general-4 mb-3">{{ 'n4096' | translations }}</p>
		<p class="text-body-regular fg-general-4">{{ 'n4097' | translations }}</p>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n112' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onCloseDialog()"
			></findqo-button>
		</div>

		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n4099' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
				(clicked)="unpublishAd()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-unpublish-dialog/my-ad-unpublish-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-unpublish-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: MyAdsFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdUnPublishDialogComponent, { className: "MyAdUnPublishDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-unpublish-dialog/my-ad-unpublish-dialog.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-unpublish-dialog/my-ad-unpublish-dialog.module.ts
var MyAdUnPublishDialogModule = class _MyAdUnPublishDialogModule {
  static {
    this.\u0275fac = function MyAdUnPublishDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdUnPublishDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdUnPublishDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdUnPublishDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdUnPublishDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [MyAdUnPublishDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/google-feedback-dialog/google-feedback-dialog.component.ts
var GoogleFeedbackDialogComponent = class _GoogleFeedbackDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  onReviewUsOnGoogle() {
    window.open("https://www.google.com/search?q=findqo#lrd=0x8bd57843910f7fb9:0xccd9d9a51a0c9159,1,,,,", "_blank");
    this.dialogRef.close(true);
  }
  static {
    this.\u0275fac = function GoogleFeedbackDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleFeedbackDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoogleFeedbackDialogComponent, selectors: [["findqo-google-feedback-dialog"]], standalone: false, decls: 15, vars: 3, consts: [[1, "container", "p-0"], [1, "d-inline-block", "position-absolute", "close-container", "px-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "row", "mt-4"], [1, "text-center", "pt-2", "col-12"], ["alt", "Feedback", "src", "assets/images/feedbackImage.webp"], [1, "p-3"], [1, "text-title-20px-medium", "text-center", "fg-general-5", "mb-2"], [1, "text-body-regular", "text-center", "fg-general-3"], [1, "row", "mx-0", "gap-3", "p-3"], [1, "col-12", "px-0"], ["label", "Review Us on Google ", 3, "clicked", "btnType", "isStopPropagation", "btnClass"]], template: function GoogleFeedbackDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275element(3, "mat-icon", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7)(8, "p", 8);
        \u0275\u0275text(9, "We Value Your Feedback");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 9);
        \u0275\u0275text(11, " We'd love to hear about your experience with FindQo.ie. Your feedback helps us improve. Please take a moment to leave a review. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "findqo-button", 12);
        \u0275\u0275listener("clicked", function GoogleFeedbackDialogComponent_Template_findqo_button_clicked_14_listener() {
          return ctx.onReviewUsOnGoogle();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("isStopPropagation", true)("btnClass", "text-body-regular w-100");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatDialogClose], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.close-container[_ngcontent-%COMP%] {\n  right: 8px;\n  top: 8px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/google-feedback-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleFeedbackDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-google-feedback-dialog", standalone: false, template: `<div class="container p-0">
	<div class="d-inline-block position-absolute close-container px-0">
		<button mat-icon-button mat-dialog-close class="close-btn">
			<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
		</button>
	</div>

	<div class="row mt-4">
		<div class="text-center pt-2 col-12">
			<img alt="Feedback" src="assets/images/feedbackImage.webp" />
		</div>
	</div>

	<div class="p-3">
		<p class="text-title-20px-medium text-center fg-general-5 mb-2">We Value Your Feedback</p>
		<p class="text-body-regular text-center fg-general-3">
			We'd love to hear about your experience with FindQo.ie. Your feedback helps us improve. Please take a moment to leave a review.
		</p>
	</div>

	<div class="row mx-0 gap-3 p-3">
		<div class="col-12 px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				label="Review Us on Google "
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onReviewUsOnGoogle()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/google-feedback-dialog/google-feedback-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.close-container {\n  right: 8px;\n  top: 8px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/google-feedback-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoogleFeedbackDialogComponent, { className: "GoogleFeedbackDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/google-feedback-dialog/google-feedback-dialog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/updateStatusDialog/update-status-dialog.component.ts
function UpdateStatusDialogComponent_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 14);
    \u0275\u0275text(1, "Confirm Mark as Occupied");
    \u0275\u0275elementEnd();
  }
}
function UpdateStatusDialogComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 14);
    \u0275\u0275text(1, "Confirm Mark as Available");
    \u0275\u0275elementEnd();
  }
}
function UpdateStatusDialogComponent_h4_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 14);
    \u0275\u0275text(1, "Confirm Mark as Sale Agreed");
    \u0275\u0275elementEnd();
  }
}
function UpdateStatusDialogComponent_h4_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 14);
    \u0275\u0275text(1, "Confirm Mark as Sold");
    \u0275\u0275elementEnd();
  }
}
function UpdateStatusDialogComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2, "Are you sure you want to mark this property as 'Occupied'?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "You will no longer receive enquiries for this property.");
    \u0275\u0275elementEnd()();
  }
}
function UpdateStatusDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2, "Are you sure you want to change property\u2019s status to 'Available'?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "The property will become available for enquiries again.");
    \u0275\u0275elementEnd()();
  }
}
function UpdateStatusDialogComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2, "Are you sure you want to mark this property as Sale Agreed?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "You will no longer receive enquiries for this property.");
    \u0275\u0275elementEnd()();
  }
}
function UpdateStatusDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 16);
    \u0275\u0275text(2, "Are you sure you want to mark this property as Sold?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "You will no longer receive enquiries for this property.");
    \u0275\u0275elementEnd()();
  }
}
function UpdateStatusDialogComponent_findqo_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 18);
    \u0275\u0275listener("clicked", function UpdateStatusDialogComponent_findqo_button_19_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateStatus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("isStopPropagation", true)("btnClass", "text-body-regular w-100");
  }
}
function UpdateStatusDialogComponent_findqo_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 9);
    \u0275\u0275listener("clicked", function UpdateStatusDialogComponent_findqo_button_20_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateStatus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("label", "Mark as Available")("isStopPropagation", true)("btnClass", "text-body-regular w-100");
  }
}
function UpdateStatusDialogComponent_findqo_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 19);
    \u0275\u0275listener("clicked", function UpdateStatusDialogComponent_findqo_button_21_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateStatus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("isStopPropagation", true)("btnClass", "text-body-regular w-100");
  }
}
function UpdateStatusDialogComponent_findqo_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 20);
    \u0275\u0275listener("clicked", function UpdateStatusDialogComponent_findqo_button_22_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpdateStatus());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("isStopPropagation", true)("btnClass", "text-body-regular w-100");
  }
}
var UpdateStatusDialogComponent = class _UpdateStatusDialogComponent {
  constructor(data, dialogRef, myAdsFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.myAdsFacade = myAdsFacade;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  onUpdateStatus() {
    this.myAdsFacade.updateAdStatus(this.data.adId, this.data.status).subscribe(() => {
      this.dialogRef.close(true);
    });
  }
  static {
    this.\u0275fac = function UpdateStatusDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateStatusDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateStatusDialogComponent, selectors: [["findqo-my-ad-mark-occupied-dialog"]], standalone: false, decls: 23, vars: 18, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], ["class", "heading-4 fw-400 fg-general-5 m-0", 4, "ngIf"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], ["class", "p-3", 4, "ngIf"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], ["label", "Mark as Occupied", 3, "btnType", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], [3, "btnType", "label", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], ["label", "Mark as Sale Agreed", 3, "btnType", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], ["label", "Mark as Sold", 3, "btnType", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], [1, "heading-4", "fw-400", "fg-general-5", "m-0"], [1, "p-3"], [1, "text-body-regular", "fg-general-5", "mb-3"], [1, "text-body-regular", "fg-general-4"], ["label", "Mark as Occupied", 3, "clicked", "btnType", "isStopPropagation", "btnClass"], ["label", "Mark as Sale Agreed", 3, "clicked", "btnType", "isStopPropagation", "btnClass"], ["label", "Mark as Sold", 3, "clicked", "btnType", "isStopPropagation", "btnClass"]], template: function UpdateStatusDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, UpdateStatusDialogComponent_h4_3_Template, 2, 0, "h4", 3)(4, UpdateStatusDialogComponent_h4_4_Template, 2, 0, "h4", 3)(5, UpdateStatusDialogComponent_h4_5_Template, 2, 0, "h4", 3)(6, UpdateStatusDialogComponent_h4_6_Template, 2, 0, "h4", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 2)(8, "button", 4);
        \u0275\u0275element(9, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, UpdateStatusDialogComponent_div_10_Template, 5, 0, "div", 6)(11, UpdateStatusDialogComponent_div_11_Template, 5, 0, "div", 6)(12, UpdateStatusDialogComponent_div_12_Template, 5, 0, "div", 6)(13, UpdateStatusDialogComponent_div_13_Template, 5, 0, "div", 6);
        \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "findqo-button", 9);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275listener("clicked", function UpdateStatusDialogComponent_Template_findqo_button_clicked_16_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275template(19, UpdateStatusDialogComponent_findqo_button_19_Template, 1, 3, "findqo-button", 10)(20, UpdateStatusDialogComponent_findqo_button_20_Template, 1, 4, "findqo-button", 11)(21, UpdateStatusDialogComponent_findqo_button_21_Template, 1, 3, "findqo-button", 12)(22, UpdateStatusDialogComponent_findqo_button_22_Template, 1, 3, "findqo-button", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.data.status === "property-occupied");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "live");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "sale-agreed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "sold");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.data.status === "property-occupied");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "live");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "sale-agreed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "sold");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.BASIC)("label", \u0275\u0275pipeBind1(17, 16, "n112"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 close-dialog-btn");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.data.status === "property-occupied");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "live");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "sale-agreed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.status === "sold");
      }
    }, dependencies: [NgIf, MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/update-status-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateStatusDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-mark-occupied-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 *ngIf="data.status === 'property-occupied'" class="heading-4 fw-400 fg-general-5 m-0">Confirm Mark as Occupied</h4>

			<h4 *ngIf="data.status === 'live'" class="heading-4 fw-400 fg-general-5 m-0">Confirm Mark as Available</h4>

			<h4 *ngIf="data.status === 'sale-agreed'" class="heading-4 fw-400 fg-general-5 m-0">Confirm Mark as Sale Agreed</h4>

			<h4 *ngIf="data.status === 'sold'" class="heading-4 fw-400 fg-general-5 m-0">Confirm Mark as Sold</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div *ngIf="data.status === 'property-occupied'" class="p-3">
		<p class="text-body-regular fg-general-5 mb-3">Are you sure you want to mark this property as 'Occupied'?</p>
		<p class="text-body-regular fg-general-4">You will no longer receive enquiries for this property.</p>
	</div>

	<div *ngIf="data.status === 'live'" class="p-3">
		<p class="text-body-regular fg-general-5 mb-3">Are you sure you want to change property\u2019s status to 'Available'?</p>
		<p class="text-body-regular fg-general-4">The property will become available for enquiries again.</p>
	</div>

	<div *ngIf="data.status === 'sale-agreed'" class="p-3">
		<p class="text-body-regular fg-general-5 mb-3">Are you sure you want to mark this property as Sale Agreed?</p>
		<p class="text-body-regular fg-general-4">You will no longer receive enquiries for this property.</p>
	</div>

	<div *ngIf="data.status === 'sold'" class="p-3">
		<p class="text-body-regular fg-general-5 mb-3">Are you sure you want to mark this property as Sold?</p>
		<p class="text-body-regular fg-general-4">You will no longer receive enquiries for this property.</p>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.BASIC"
				[label]="'n112' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 close-dialog-btn'"
				(clicked)="onCloseDialog()"
			></findqo-button>
		</div>
		<div class="col px-0">
			<findqo-button
				*ngIf="data.status === 'property-occupied'"
				[btnType]="buttonType.FILLED"
				label="Mark as Occupied"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onUpdateStatus()"
			></findqo-button>

			<findqo-button
				*ngIf="data.status === 'live'"
				[btnType]="buttonType.FILLED"
				[label]="'Mark as Available'"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onUpdateStatus()"
			></findqo-button>

			<findqo-button
				*ngIf="data.status === 'sale-agreed'"
				[btnType]="buttonType.FILLED"
				label="Mark as Sale Agreed"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onUpdateStatus()"
			></findqo-button>

			<findqo-button
				*ngIf="data.status === 'sold'"
				[btnType]="buttonType.FILLED"
				label="Mark as Sold"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onUpdateStatus()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/updateStatusDialog/update-status-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/update-status-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: MyAdsFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateStatusDialogComponent, { className: "UpdateStatusDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/updatestatusdialog/update-status-dialog.component.ts", lineNumber: 13 });
})();

export {
  MyAdDeleteDialogComponent,
  MyAdDeleteDialogModule,
  GoogleFeedbackDialogComponent,
  MyAdUnPublishDialogComponent,
  UpdateStatusDialogComponent,
  MyAdUnPublishDialogModule
};
//# sourceMappingURL=chunk-DBVABVQ2.js.map
