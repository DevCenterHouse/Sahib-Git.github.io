import {
  MatMenuItem,
  MatMenuModule
} from "./chunk-5DPLTTSV.js";
import {
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  CommonModule,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/sort-menu/sort-menu.component.ts
function SortMenuComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function SortMenuComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSort("clear"));
    });
    \u0275\u0275elementStart(1, "mat-icon", 1);
    \u0275\u0275text(2, "clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4, "Remove sort");
    \u0275\u0275elementEnd()();
  }
}
var SortMenuComponent = class _SortMenuComponent {
  constructor() {
    this.sortChange = new EventEmitter();
  }
  onSort(direction) {
    this.sortChange.emit({ column: this.columnName, direction });
  }
  static {
    this.\u0275fac = function SortMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SortMenuComponent, selectors: [["findqo-sort-menu"]], inputs: { columnName: "columnName", activeColumn: "activeColumn", ascText: "ascText", descText: "descText", direction: "direction" }, outputs: { sortChange: "sortChange" }, standalone: false, decls: 12, vars: 3, consts: [["mat-menu-item", "", 1, "align-items-center", 3, "click"], [1, "filter-menu-icon", "fg-general-3", "me-1"], [1, "text-caption-regular"], ["mat-menu-item", "", "class", "align-items-center", 3, "click", 4, "ngIf"]], template: function SortMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function SortMenuComponent_Template_button_click_1_listener() {
          return ctx.onSort("asc");
        });
        \u0275\u0275elementStart(2, "mat-icon", 1);
        \u0275\u0275text(3, "arrow_upward");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 0);
        \u0275\u0275listener("click", function SortMenuComponent_Template_button_click_6_listener() {
          return ctx.onSort("desc");
        });
        \u0275\u0275elementStart(7, "mat-icon", 1);
        \u0275\u0275text(8, "arrow_downward");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 2);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, SortMenuComponent_button_11_Template, 5, 0, "button", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ascText);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.descText);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.activeColumn == null ? null : ctx.activeColumn.colName) === ctx.columnName);
      }
    }, dependencies: [NgIf, MatIcon, MatMenuItem], styles: ["\n\n.filter-menu-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/sort-menu.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortMenuComponent, [{
    type: Component,
    args: [{ selector: "findqo-sort-menu", standalone: false, template: `<div>
	<button mat-menu-item (click)="onSort('asc')" class="align-items-center">
		<mat-icon class="filter-menu-icon fg-general-3 me-1">arrow_upward</mat-icon>
		<span class="text-caption-regular">{{ ascText }}</span>
	</button>

	<button mat-menu-item (click)="onSort('desc')" class="align-items-center">
		<mat-icon class="filter-menu-icon fg-general-3 me-1">arrow_downward</mat-icon>
		<span class="text-caption-regular">{{ descText }}</span>
	</button>

	<button *ngIf="activeColumn?.colName === columnName" mat-menu-item (click)="onSort('clear')" class="align-items-center">
		<mat-icon class="filter-menu-icon fg-general-3 me-1">clear</mat-icon>
		<span class="text-caption-regular">Remove sort</span>
	</button>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/sort-menu/sort-menu.component.scss */\n.filter-menu-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/sort-menu.component.css.map */\n"] }]
  }], null, { columnName: [{
    type: Input
  }], activeColumn: [{
    type: Input
  }], ascText: [{
    type: Input
  }], descText: [{
    type: Input
  }], direction: [{
    type: Input
  }], sortChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SortMenuComponent, { className: "SortMenuComponent", filePath: "apps/findqo-ireland/src/app/shared/components/sort-menu/sort-menu.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/shared/components/sort-menu/sort-menu.module.ts
var SortMenuModule = class _SortMenuModule {
  static {
    this.\u0275fac = function SortMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortMenuModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SortMenuModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatMenuModule, CommonModule, MatIconModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortMenuModule, [{
    type: NgModule,
    args: [{
      declarations: [SortMenuComponent],
      imports: [SharedModule, MatMenuModule, CommonModule, MatIconModule],
      exports: [SortMenuComponent]
    }]
  }], null, null);
})();

export {
  SortMenuComponent,
  SortMenuModule
};
//# sourceMappingURL=chunk-5BXPKUE4.js.map
