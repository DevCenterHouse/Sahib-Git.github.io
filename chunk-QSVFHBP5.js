import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/pages/leads/hot-lead-info/hot-lead-info.component.ts
var HotLeadInfoComponent = class _HotLeadInfoComponent {
  static {
    this.\u0275fac = function HotLeadInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HotLeadInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HotLeadInfoComponent, selectors: [["findqo-hot-lead-info"]], inputs: { title: "title", subTitle: "subTitle" }, decls: 10, vars: 2, consts: [[1, "hot-lead", "bg-alert-1", "row", "align-items-start", "gap-1"], [1, "col-auto", "p-0"], [1, "material-symbols-outlined", "fg-alert-3", "fs-20px"], [1, "col", "p-0"], [1, "fg-alert-3", "text-small-14px-regular"], [1, "fg-alert-3", "text-small-10px-regular"]], template: function HotLeadInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon")(3, "span", 2);
        \u0275\u0275text(4, "info");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 3)(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.subTitle);
      }
    }, dependencies: [MatIconModule, MatIcon], styles: ["\n\n.hot-lead[_ngcontent-%COMP%] {\n  border: 1px solid var(--alert-3);\n  border-radius: 4px;\n  padding: 8px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/hot-lead-info.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HotLeadInfoComponent, [{
    type: Component,
    args: [{ selector: "findqo-hot-lead-info", imports: [MatIconModule], template: `
		<div class="hot-lead bg-alert-1 row align-items-start gap-1">
			<div class="col-auto p-0">
				<mat-icon>
					<span class="material-symbols-outlined fg-alert-3 fs-20px">info</span>
				</mat-icon>
			</div>

			<div class="col p-0">
				<p class="fg-alert-3 text-small-14px-regular">{{ title }}</p>
				<p class="fg-alert-3 text-small-10px-regular">{{ subTitle }}</p>
			</div>
		</div>
	`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;5b10fd01810eeef50ad268c0a206c36fccfbc65eceb9791c41aa9802d6f18a7b;/Users/sahibsingh/Documents/Workspace/FindQO/findqo-website/apps/findqo-ireland/src/app/feature/agent-hub/pages/leads/hot-lead-info/hot-lead-info.component.ts */\n.hot-lead {\n  border: 1px solid var(--alert-3);\n  border-radius: 4px;\n  padding: 8px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/hot-lead-info.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], subTitle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HotLeadInfoComponent, { className: "HotLeadInfoComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/leads/hot-lead-info/hot-lead-info.component.ts", lineNumber: 30 });
})();

export {
  HotLeadInfoComponent
};
//# sourceMappingURL=chunk-QSVFHBP5.js.map
