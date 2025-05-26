import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/toggle/toggle.component.ts
function ToggleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.leftLabel);
  }
}
function ToggleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.rightLabel);
  }
}
var ToggleComponent = class _ToggleComponent {
  constructor() {
    this.checked = true;
    this.toggled = new EventEmitter();
  }
  onToggle() {
    this.checked = !this.checked;
    this.toggled.emit(this.checked);
  }
  static {
    this.\u0275fac = function ToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToggleComponent, selectors: [["findqo-toggle"]], inputs: { leftLabel: "leftLabel", rightLabel: "rightLabel", checked: "checked" }, outputs: { toggled: "toggled" }, decls: 6, vars: 4, consts: [[1, "d-flex", "align-items-center"], [1, "text-body-regular", "fg-general-5"], [1, "toggle-switch", "bg-prim-2", "mx-2", 3, "click"], [1, "toggle-circle", "bg-basic-1", "d-flex", "align-items-center", "justify-content-center"], ["src", "assets/icons/check-toggle.svg", "height", "12px", "width", "12px", "alt", "Toggle icon"]], template: function ToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ToggleComponent_Conditional_1_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275listener("click", function ToggleComponent_Template_div_click_2_listener() {
          return ctx.onToggle();
        });
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, ToggleComponent_Conditional_5_Template, 2, 1, "span", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.leftLabel ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.checked);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.rightLabel ? 5 : -1);
      }
    }, styles: ["\n\n.toggle-switch[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 2px;\n  position: relative;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-circle[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: absolute;\n  left: 3px;\n  transition: left 0.3s;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-circle.active[_ngcontent-%COMP%] {\n  left: 17px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/toggle.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "findqo-toggle", template: `
		<div class="d-flex align-items-center">
			@if (leftLabel) {
				<span class="text-body-regular fg-general-5">{{ leftLabel }}</span>
			}

			<div class="toggle-switch bg-prim-2 mx-2" (click)="onToggle()">
				<div class="toggle-circle bg-basic-1 d-flex align-items-center justify-content-center" [class.active]="checked">
					<img src="assets/icons/check-toggle.svg" height="12px" width="12px" alt="Toggle icon" />
				</div>
			</div>

			@if (rightLabel) {
				<span class="text-body-regular fg-general-5">{{ rightLabel }}</span>
			}
		</div>
	`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;ec1ec97ef8f3c9142e70775751ee38aa47afbfeaee628747f707972193f2c9f5;/Users/sahibsingh/Documents/Workspace/FindQO/findqo-website/apps/findqo-ireland/src/app/shared/components/toggle/toggle.component.ts */\n.toggle-switch {\n  width: 36px;\n  height: 20px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 2px;\n  position: relative;\n}\n.toggle-switch .toggle-circle {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: absolute;\n  left: 3px;\n  transition: left 0.3s;\n}\n.toggle-switch .toggle-circle.active {\n  left: 17px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/toggle.component.css.map */\n"] }]
  }], null, { leftLabel: [{
    type: Input
  }], rightLabel: [{
    type: Input
  }], checked: [{
    type: Input
  }], toggled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToggleComponent, { className: "ToggleComponent", filePath: "apps/findqo-ireland/src/app/shared/components/toggle/toggle.component.ts", lineNumber: 51 });
})();

export {
  ToggleComponent
};
//# sourceMappingURL=chunk-HPH4IAIR.js.map
