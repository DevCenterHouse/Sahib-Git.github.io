import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef
} from "./chunk-2KWNZOXB.js";
import {
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  MatIconButton,
  MatOption,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/bottomsheet/bottomsheet.component.ts
function BottomsheetComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275listener("click", function BottomsheetComponent_For_10_Template_mat_option_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bottomsheetRef.dismiss(item_r2));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", (tmp_10_0 = item_r2.textClass) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : "fg-general-5");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = item_r2.name) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : \u0275\u0275pipeBind1(3, 2, item_r2.translationKey));
  }
}
var BottomsheetComponent = class _BottomsheetComponent {
  constructor(data, bottomsheetRef) {
    this.data = data;
    this.bottomsheetRef = bottomsheetRef;
  }
  static {
    this.\u0275fac = function BottomsheetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BottomsheetComponent)(\u0275\u0275directiveInject(MAT_BOTTOM_SHEET_DATA), \u0275\u0275directiveInject(MatBottomSheetRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BottomsheetComponent, selectors: [["findqo-bottomsheet"]], standalone: false, decls: 11, vars: 5, consts: [[1, "row", "mx-0", "px-0", "justify-content-between", "align-items-center", "dialog-header", "py-2", 3, "ngClass"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0", 3, "ngClass"], ["mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "justify-content-center", "fg-general-2", "mx-auto", "fs-20px"], [1, "text-body-regular", "px-0", 3, "ngClass"], [1, "text-body-regular", "px-0", 3, "click", "ngClass"]], template: function BottomsheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 1)(6, "button", 3);
        \u0275\u0275listener("click", function BottomsheetComponent_Template_button_click_6_listener() {
          return ctx.bottomsheetRef.dismiss();
        });
        \u0275\u0275elementStart(7, "mat-icon", 4);
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275repeaterCreate(9, BottomsheetComponent_For_10_Template, 4, 4, "mat-option", 5, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.data.headerClass);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.data.titleClass);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, ctx.data.title));
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.data.options);
      }
    }, dependencies: [NgClass, MatIconButton, MatIcon, MatOption, TranslationsPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomsheetComponent, [{
    type: Component,
    args: [{ selector: "findqo-bottomsheet", standalone: false, template: `<div class="row mx-0 px-0 justify-content-between align-items-center dialog-header py-2" [ngClass]="data.headerClass">
	<div class="col-auto px-0">
		<h4 class="heading-4-regular fg-general-5 m-0" [ngClass]="data.titleClass">{{ data.title | translations }}</h4>
	</div>

	<div class="col-auto px-0">
		<button mat-icon-button (click)="bottomsheetRef.dismiss()" class="close-btn">
			<mat-icon class="justify-content-center fg-general-2 mx-auto fs-20px">close</mat-icon>
		</button>
	</div>
</div>

@for (item of data.options; track $index) {
	<mat-option (click)="bottomsheetRef.dismiss(item)" class="text-body-regular px-0" [ngClass]="item.textClass ?? 'fg-general-5'">
		<span>{{ item.name ?? (item.translationKey | translations) }}</span>
	</mat-option>
}
` }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_BOTTOM_SHEET_DATA]
  }] }, { type: MatBottomSheetRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BottomsheetComponent, { className: "BottomsheetComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/bottomsheet/bottomsheet.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/bottomsheet/bottomsheet.module.ts
var BottomsheetModule = class _BottomsheetModule {
  static {
    this.\u0275fac = function BottomsheetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BottomsheetModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BottomsheetModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatSelectModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BottomsheetModule, [{
    type: NgModule,
    args: [{
      declarations: [BottomsheetComponent],
      imports: [SharedModule, MatSelectModule]
    }]
  }], null, null);
})();

export {
  BottomsheetComponent,
  BottomsheetModule
};
//# sourceMappingURL=chunk-CM73RVW6.js.map
