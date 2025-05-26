import {
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  AbstractFormControlValueAccessorComponent,
  FormControlDirective,
  FormErrorMessagePipe,
  FormsModule,
  MatError,
  MatFormField,
  MatHint,
  MatInputModule,
  MatOption,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  PriceSuffixPipe,
  ReactiveFormsModule,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  NgClass,
  NgForOf,
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
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/form/dropdown/dropdown.component.ts
function DropdownComponent_mat_option_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "priceSuffix");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelKey_r1 = ctx.$implicit;
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2[labelKey_r1] ? \u0275\u0275pipeBind2(2, 1, item_r2[labelKey_r1], ctx_r2.type) + " " : "", " ");
  }
}
function DropdownComponent_mat_option_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, DropdownComponent_mat_option_2_ng_template_1_ng_container_1_Template, 3, 4, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.bindLabelKeyArray);
  }
}
function DropdownComponent_mat_option_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2[ctx_r2.bindLabelKey]);
  }
}
function DropdownComponent_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275template(1, DropdownComponent_mat_option_2_ng_template_1_Template, 2, 1, "ng-template", 6)(2, DropdownComponent_mat_option_2_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const singleLabelKey_r4 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r2[ctx_r2.bindValueKey]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bindLabelKeyArray.length)("ngIfElse", singleLabelKey_r4);
  }
}
function DropdownComponent_mat_hint_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.hint);
  }
}
function DropdownComponent_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "formErrorMessage");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.control.errors), " ");
  }
}
var DropdownComponent = class _DropdownComponent extends AbstractFormControlValueAccessorComponent {
  constructor() {
    super(...arguments);
    this.items = [];
    this.bindValueKey = "key";
    this.bindLabelKey = "value";
    this.bindLabelKeyArray = [];
    this.placeholder = "";
    this.changed = new EventEmitter();
  }
  onChange(event) {
    this.changed.emit(event.value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DropdownComponent_BaseFactory;
      return function DropdownComponent_Factory(__ngFactoryType__) {
        return (\u0275DropdownComponent_BaseFactory || (\u0275DropdownComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DropdownComponent)))(__ngFactoryType__ || _DropdownComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownComponent, selectors: [["findqo-dropdown"]], inputs: { items: "items", bindValueKey: "bindValueKey", bindLabelKey: "bindLabelKey", bindLabelKeyArray: "bindLabelKeyArray", placeholder: "placeholder", hint: "hint", selectClass: "selectClass", wrapperClass: "wrapperClass", type: "type" }, outputs: { changed: "changed" }, standalone: false, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: _DropdownComponent,
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature], decls: 5, vars: 7, consts: [["singleLabelKey", ""], ["appearance", "outline", 3, "ngClass"], [3, "selectionChange", "click", "ngClass", "formControl", "placeholder"], ["class", "text-body-16px-regular", 3, "value", 4, "ngFor", "ngForOf"], ["class", "text-small-12px-regular", 4, "ngIf"], [1, "text-body-16px-regular", 3, "value"], [3, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "text-small-12px-regular"]], template: function DropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 2);
        \u0275\u0275listener("selectionChange", function DropdownComponent_Template_mat_select_selectionChange_1_listener($event) {
          return ctx.onChange($event);
        })("click", function DropdownComponent_Template_mat_select_click_1_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275template(2, DropdownComponent_mat_option_2_Template, 4, 3, "mat-option", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, DropdownComponent_mat_hint_3_Template, 2, 1, "mat-hint", 4)(4, DropdownComponent_mat_error_4_Template, 3, 3, "mat-error", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.wrapperClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.selectClass)("formControl", ctx.control)("placeholder", ctx.placeholder);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.items);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.hint);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.control == null ? null : ctx.control.hasError);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatFormField, MatHint, MatError, MatSelect, MatOption, NgControlStatus, FormControlDirective, FormErrorMessagePipe, PriceSuffixPipe], styles: ["\n\n.mat-mdc-option[_ngcontent-%COMP%] {\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/dropdown.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownComponent, [{
    type: Component,
    args: [{ selector: "findqo-dropdown", providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: DropdownComponent,
        multi: true
      }
    ], standalone: false, template: `<mat-form-field appearance="outline" [ngClass]="wrapperClass">
	<mat-select
		[ngClass]="selectClass"
		[formControl]="control"
		[placeholder]="placeholder"
		(selectionChange)="onChange($event)"
		(click)="$event.stopPropagation()"
	>
		<mat-option class="text-body-16px-regular" *ngFor="let item of items" [value]="item[bindValueKey]">
			<ng-template [ngIf]="bindLabelKeyArray.length" [ngIfElse]="singleLabelKey">
				<span>
					<ng-container *ngFor="let labelKey of bindLabelKeyArray">
						{{ item[labelKey] ? (item[labelKey] | priceSuffix: type) + ' ' : '' }}
					</ng-container>
				</span>
			</ng-template>

			<ng-template #singleLabelKey>
				<span>{{ item[bindLabelKey] }}</span>
			</ng-template>
		</mat-option>
	</mat-select>

	<!-- Hint -->
	<mat-hint class="text-small-12px-regular" *ngIf="hint">{{ hint }}</mat-hint>

	<!-- Error -->
	<mat-error *ngIf="control?.hasError" class="text-small-12px-regular">
		{{ control.errors | formErrorMessage }}
	</mat-error>
</mat-form-field>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/form/dropdown/dropdown.component.scss */\n.mat-mdc-option {\n  padding-left: 12px !important;\n  padding-right: 12px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/dropdown.component.css.map */\n"] }]
  }], null, { items: [{
    type: Input
  }], bindValueKey: [{
    type: Input
  }], bindLabelKey: [{
    type: Input
  }], bindLabelKeyArray: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], hint: [{
    type: Input
  }], selectClass: [{
    type: Input
  }], wrapperClass: [{
    type: Input
  }], type: [{
    type: Input
  }], changed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownComponent, { className: "DropdownComponent", filePath: "apps/findqo-ireland/src/app/shared/components/form/dropdown/dropdown.component.ts", lineNumber: 20 });
})();

// apps/findqo-ireland/src/app/shared/components/form/dropdown/dropdown.module.ts
var DropdownModule = class _DropdownModule {
  static {
    this.\u0275fac = function DropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DropdownModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DropdownModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      declarations: [DropdownComponent],
      imports: [SharedModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
      exports: [DropdownComponent]
    }]
  }], null, null);
})();

export {
  DropdownComponent,
  DropdownModule
};
//# sourceMappingURL=chunk-4SOKQ3BD.js.map
