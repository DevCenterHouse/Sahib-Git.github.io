import {
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  AuthService,
  ButtonModule,
  ButtonType,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatError,
  MatFormField,
  MatHint,
  MatInputModule,
  MatOption,
  NgControlStatus,
  NgControlStatusGroup,
  PlaceAdFacade,
  PlaceAdService,
  ReactiveFormsModule,
  RequiredValidator,
  SearchFilterPipe,
  SharedModule,
  StorageService,
  TranslationsPipe,
  Validators,
  ɵNgNoValidate
} from "./chunk-DMGY2MF4.js";
import {
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-show-agents-list/place-ad-show-agents-list.component.ts
var _c0 = () => ["name"];
var _c1 = (a0) => ({ agentsList: a0 });
function PlaceAdShowAgentsListComponent_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3534"));
  }
}
function PlaceAdShowAgentsListComponent_div_0_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", item_r3 == null ? null : item_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (item_r3 == null ? null : item_r3.name) || (item_r3 == null ? null : item_r3.email), " ", (item_r3 == null ? null : item_r3.userId) === ctx_r1.user.id ? " (" + \u0275\u0275pipeBind1(2, 3, "n3508") + ")" : "", " ");
  }
}
function PlaceAdShowAgentsListComponent_div_0_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3113"));
  }
}
function PlaceAdShowAgentsListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "form", 3)(2, "mat-form-field", 4)(3, "mat-select", 5);
    \u0275\u0275listener("selectionChange", function PlaceAdShowAgentsListComponent_div_0_Template_mat_select_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleAgent($event));
    })("closed", function PlaceAdShowAgentsListComponent_div_0_Template_mat_select_closed_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetSearchControl());
    });
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "input", 7, 0);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275template(8, PlaceAdShowAgentsListComponent_div_0_span_8_Template, 3, 3, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PlaceAdShowAgentsListComponent_div_0_mat_option_9_Template, 3, 5, "mat-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-hint", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PlaceAdShowAgentsListComponent_div_0_mat_error_13_Template, 3, 3, "mat-error", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.agentsListForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.searchAgentsName)("placeholder", \u0275\u0275pipeBind1(7, 7, "n681"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (vm_r4 == null ? null : vm_r4.agentsList == null ? null : vm_r4.agentsList.length) === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vm_r4 == null ? null : vm_r4.agentsList);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 9, "n3903"), ".");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.agentsListForm.get("agentsList").hasError("required"));
  }
}
var PlaceAdShowAgentsListComponent = class _PlaceAdShowAgentsListComponent {
  constructor(formBuilder, placeAdFacade, placeAdService, storageService, authService) {
    this.formBuilder = formBuilder;
    this.placeAdFacade = placeAdFacade;
    this.placeAdService = placeAdService;
    this.storageService = storageService;
    this.authService = authService;
    this.formSubmittedEvent = new EventEmitter();
    this.agentChange = new EventEmitter(null);
    this.searchAgentsName = new FormControl("");
    this.buttonType = ButtonType;
    this.agentsListForm = this.formBuilder.group({
      agentsList: ["", Validators.required]
    });
    this.user = this.authService.user();
  }
  set selectedAgent(data) {
    if (data) {
      this.agentsListForm.patchValue({ agentsList: data?.id });
      this.handleAgent({ value: data?.id });
    }
  }
  resetSearchControl() {
    this.searchAgentsName.patchValue("");
  }
  handleAgent($event) {
    const SELECTED_AGENT_ID = $event.value;
    this.agentChange.emit({ agentId: SELECTED_AGENT_ID });
    if (SELECTED_AGENT_ID !== "0") {
      this.placeAdService.addAgentsId(SELECTED_AGENT_ID);
      this.storageService.setItem("agentId", SELECTED_AGENT_ID);
    } else {
      this.placeAdService.addAgentsId(null);
      this.storageService.setItem("agentId", null);
    }
  }
  ngOnInit() {
    this.placeAdFacade.getAgents$().subscribe((res) => {
      this.agentsList = res;
      if (!this.agentsListForm.get("agentsList").value) {
        const CURRENT_USER_AGENT = res.find((it) => it.userId === this.user.id);
        this.agentsListForm.patchValue({ agentsList: CURRENT_USER_AGENT?.id });
        this.handleAgent({ value: CURRENT_USER_AGENT?.id });
      }
    });
  }
  static {
    this.\u0275fac = function PlaceAdShowAgentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdShowAgentsListComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(PlaceAdService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAdShowAgentsListComponent, selectors: [["findqo-place-ad-show-agents-list"]], inputs: { selectedAgent: "selectedAgent" }, outputs: { formSubmittedEvent: "formSubmittedEvent", agentChange: "agentChange" }, standalone: false, decls: 2, vars: 8, consts: [["searchInput", ""], ["class", "container mb-4 px-0", 4, "ngIf"], [1, "container", "mb-4", "px-0"], [1, "agent-form", "mt-2", 3, "formGroup"], ["appearance", "outline", "id", "agentsList", 1, "fs-14px", "lh-18px", "fw-400"], ["formControlName", "agentsList", "required", "", 3, "selectionChange", "closed"], [1, "pt-2", "pb-3", "border-bottom", "px-3"], ["type", "text", 1, "w-100", "search-agents", "px-2", "fs-14px", "lh-18px", "fw-400", "fg-general-4", 3, "formControl", "placeholder"], ["class", "text-caption-regular fg-general-3", 4, "ngIf"], ["class", "search-option fs-14px lh-18px fw-400", 3, "value", 4, "ngFor", "ngForOf"], [1, "mt-2", "text-caption-regular", "fg-general-3"], ["class", "text-caption-regular", 4, "ngIf"], [1, "text-caption-regular", "fg-general-3"], [1, "search-option", "fs-14px", "lh-18px", "fw-400", 3, "value"], [1, "text-caption-regular"]], template: function PlaceAdShowAgentsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PlaceAdShowAgentsListComponent_div_0_Template, 14, 11, "div", 1);
        \u0275\u0275pipe(1, "searchFilter");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(6, _c1, \u0275\u0275pipeBind3(1, 1, ctx.agentsList, ctx.searchAgentsName == null ? null : ctx.searchAgentsName.value, \u0275\u0275pureFunction0(5, _c0))));
      }
    }, dependencies: [NgForOf, NgIf, MatFormField, MatHint, MatError, MatSelect, MatOption, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, SearchFilterPipe, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: 375px;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\ninput.search-agents[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-agents[_ngcontent-%COMP%]:focus {\n  outline: unset !important;\n}\n.agent-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nfindqo-button[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-show-agents-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdShowAgentsListComponent, [{
    type: Component,
    args: [{ selector: "findqo-place-ad-show-agents-list", standalone: false, template: `<div class="container mb-4 px-0" *ngIf="{ agentsList: agentsList | searchFilter: searchAgentsName?.value : ['name'] } as vm">
	<form [formGroup]="agentsListForm" class="agent-form mt-2">
		<mat-form-field appearance="outline" id="agentsList" class="fs-14px lh-18px fw-400">
			<mat-select (selectionChange)="handleAgent($event)" formControlName="agentsList" (closed)="resetSearchControl()" required>
				<div class="pt-2 pb-3 border-bottom px-3">
					<input
						type="text"
						class="w-100 search-agents px-2 fs-14px lh-18px fw-400 fg-general-4"
						[formControl]="searchAgentsName"
						#searchInput
						[placeholder]="'n681' | translations"
					/>

					<span *ngIf="vm?.agentsList?.length === 0" class="text-caption-regular fg-general-3">{{ 'n3534' | translations }}</span>
				</div>

				<mat-option *ngFor="let item of vm?.agentsList" [value]="item?.id" class="search-option fs-14px lh-18px fw-400">
					{{ item?.name || item?.email }} {{ item?.userId === user.id ? ' (' + ('n3508' | translations) + ')' : '' }}
				</mat-option>
			</mat-select>

			<mat-hint class="mt-2 text-caption-regular fg-general-3">{{ 'n3903' | translations }}.</mat-hint>
			<mat-error *ngIf="agentsListForm.get('agentsList').hasError('required')" class="text-caption-regular">{{ 'n3113' | translations }}</mat-error>
		</mat-form-field>
	</form>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-show-agents-list/place-ad-show-agents-list.component.scss */\n.container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: 375px;\n}\n.mat-mdc-form-field {\n  height: 40px !important;\n}\ninput.search-agents {\n  border: 1px solid var(--general-2);\n  height: 40px !important;\n  border-radius: 4px;\n}\ninput.search-agents:focus {\n  outline: unset !important;\n}\n.agent-form {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nfindqo-button {\n  margin-top: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 600px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-show-agents-list.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: PlaceAdFacade }, { type: PlaceAdService }, { type: StorageService }, { type: AuthService }], { formSubmittedEvent: [{
    type: Output
  }], agentChange: [{
    type: Output
  }], selectedAgent: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAdShowAgentsListComponent, { className: "PlaceAdShowAgentsListComponent", filePath: "apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-show-agents-list/place-ad-show-agents-list.component.ts", lineNumber: 18 });
})();

// apps/findqo-ireland/src/app/feature/place-ad/components/place-ad-show-agents-list/place-ad-show-agents-list.module.ts
var PlaceAdShowAgentsListModule = class _PlaceAdShowAgentsListModule {
  static {
    this.\u0275fac = function PlaceAdShowAgentsListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdShowAgentsListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdShowAgentsListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdShowAgentsListModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAdShowAgentsListComponent],
      imports: [SharedModule, ButtonModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
      exports: [PlaceAdShowAgentsListComponent]
    }]
  }], null, null);
})();

export {
  PlaceAdShowAgentsListComponent,
  PlaceAdShowAgentsListModule
};
//# sourceMappingURL=chunk-SOESUKBF.js.map
