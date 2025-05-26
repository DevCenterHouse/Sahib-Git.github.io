import {
  MatTableModule
} from "./chunk-62PZKBP3.js";
import {
  EDIT_DIALOG_STATIC_DATA
} from "./chunk-LUIRD62T.js";
import {
  AgentProfileAction,
  AgentStatus
} from "./chunk-YL2NNRDT.js";
import {
  BottomsheetComponent,
  BottomsheetModule
} from "./chunk-CM73RVW6.js";
import {
  MatBottomSheet,
  MatBottomSheetModule
} from "./chunk-2KWNZOXB.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AppEmailValidator,
  AuthDialogV2Component,
  AuthFacade,
  AuthService,
  AuthType,
  BooleanStatus,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatHint,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatPrefix,
  MyProfileFacade,
  NgControlStatus,
  ProfileInfoField,
  ReactiveFormsModule,
  Router,
  SharedModule,
  TranslationsPipe,
  VALIDATOR,
  Validators,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/remove-agent-dialog/remove-agent-dialog.component.ts
var RemoveAgentDialogComponent = class _RemoveAgentDialogComponent {
  constructor(agent, dialogRef, myProfileFacade) {
    this.agent = agent;
    this.dialogRef = dialogRef;
    this.myProfileFacade = myProfileFacade;
    this.buttonType = ButtonType;
  }
  removeAgent() {
    this.dialogRef.close();
    this.myProfileFacade.deleteAgent(this.agent);
  }
  cancel() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function RemoveAgentDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoveAgentDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyProfileFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoveAgentDialogComponent, selectors: [["findqo-remove-agent-dialog"]], standalone: false, decls: 29, vars: 16, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "px-3", "py-4"], [1, "text-paragraph-regular", "fg-general-4", "mb-4"], [1, "agent-name", "bg-error-1", "text-body-regular", "fg-error-3", "text-truncate"], [1, "material-icons-round", "mx-2", "alert-icon"], [1, "p-3", "dialog-actions", "row", "gap-2"], [1, "col"], ["mat-stroked-button", "", 1, "text-body-regular", "w-100", "cancel-btn", "fg-general-4", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "text-body-regular", "w-100", 3, "click"]], template: function RemoveAgentDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4)(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "mat-icon", 9);
        \u0275\u0275text(16, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "button", 12);
        \u0275\u0275listener("click", function RemoveAgentDialogComponent_Template_button_click_22_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 11)(26, "button", 13);
        \u0275\u0275listener("click", function RemoveAgentDialogComponent_Template_button_click_26_listener() {
          return ctx.removeAgent();
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translations");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "n3511"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "n3512"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(19, 10, "n3486"), ": ", (ctx.agent == null ? null : ctx.agent.name) || (ctx.agent == null ? null : ctx.agent.email), "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 12, "n112"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 14, "n91"));
      }
    }, dependencies: [MatButton, MatIconButton, MatIcon, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.agent-name[_ngcontent-%COMP%] {\n  border: 1px solid var(--error-3);\n  border-radius: 4px;\n  height: 40px;\n  line-height: 40px;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  vertical-align: sub;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-4) !important;\n  color: unset !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/remove-agent-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveAgentDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-remove-agent-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3511' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="px-3 py-4">
		<p class="text-paragraph-regular fg-general-4 mb-4">{{ 'n3512' | translations }}</p>

		<div class="agent-name bg-error-1 text-body-regular fg-error-3 text-truncate">
			<mat-icon class="material-icons-round mx-2 alert-icon">warning</mat-icon>

			<!-- Note: if agent name is not available we will show agent email -->
			<span>{{ 'n3486' | translations }}: {{ agent?.name || agent?.email }}</span>
		</div>
	</div>

	<div class="p-3 dialog-actions row gap-2">
		<div class="col">
			<button mat-stroked-button class="text-body-regular w-100 cancel-btn fg-general-4" (click)="cancel()">{{ 'n112' | translations }}</button>
		</div>

		<div class="col">
			<button mat-flat-button class="text-body-regular w-100" color="warn" (click)="removeAgent()">{{ 'n91' | translations }}</button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/remove-agent-dialog/remove-agent-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.agent-name {\n  border: 1px solid var(--error-3);\n  border-radius: 4px;\n  height: 40px;\n  line-height: 40px;\n}\n.alert-icon {\n  display: inline-block !important;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  vertical-align: sub;\n}\n.cancel-btn {\n  border: 1px solid var(--general-4) !important;\n  color: unset !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/remove-agent-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: MyProfileFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoveAgentDialogComponent, { className: "RemoveAgentDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/remove-agent-dialog/remove-agent-dialog.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/cannot-remove-agent-dialog/cannot-remove-agent-dialog.component.ts
function CannotRemoveAgentDialogComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "mat-icon", 14);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "n3485"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "n3483"));
  }
}
function CannotRemoveAgentDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 16);
    \u0275\u0275listener("click", function CannotRemoveAgentDialogComponent_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToAds());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "n3482"), " ");
  }
}
function CannotRemoveAgentDialogComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "h4", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22)(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", (tmp_2_0 = ctx_r2.data == null ? null : ctx_r2.data.businessProfile == null ? null : ctx_r2.data.businessProfile.picture) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ctx_r2.defaultImage)("alt", ctx_r2.data == null ? null : ctx_r2.data.businessProfile == null ? null : ctx_r2.data.businessProfile.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data == null ? null : ctx_r2.data.businessProfile == null ? null : ctx_r2.data.businessProfile.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data == null ? null : ctx_r2.data.assignedAdCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "n4062"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 9, "n4063"), "!");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "n4064"));
  }
}
var CannotRemoveAgentDialogComponent = class _CannotRemoveAgentDialogComponent {
  constructor(dialogRef, router, data) {
    this.dialogRef = dialogRef;
    this.router = router;
    this.data = data;
    this.defaultImage = "assets/images/profile/business-account-photo.svg";
  }
  goToAds() {
    this.dialogRef.close();
    this.router.navigate([APP_ROUTE.agentHub.dashboard]);
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function CannotRemoveAgentDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CannotRemoveAgentDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CannotRemoveAgentDialogComponent, selectors: [["findqo-cannot-remove-agent-dialog"]], standalone: false, decls: 20, vars: 9, consts: [["isAgentLeaving", ""], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "px-3", "py-4"], [4, "ngIf", "ngIfElse"], [1, "p-3", "dialog-actions", "row", "gap-2"], ["class", "col", 4, "ngIf"], [1, "col"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", "w-100", 3, "click"], [1, "error-msg", "bg-error-1", "text-body-regular", "fg-error-3", "d-flex", "align-items-center"], [1, "material-icons-round", "mx-2", "alert-icon"], [1, "text-paragraph-regular", "fg-general-4", "mt-4"], ["mat-stroked-button", "", "disableRipple", "", 1, "text-body-regular", "w-100", "go-ads", "fg-general-4", "disabled-ripple", 3, "click"], [1, "row", "align-items-center", "gap-3"], [1, "col-lg-auto", "text-center", "text-lg-start"], ["width", "132", "height", "96", "priority", "", 1, "rounded-10px", 3, "ngSrc", "alt"], [1, "col-lg", "text-center", "text-lg-start"], [1, "heading-4-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-2"], [1, "text-body-medium"], [1, "text-body-medium", "fg-general-5", "mt-4"], [1, "text-body-regular", "fg-general-5", "mt-1"]], template: function CannotRemoveAgentDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 5)(8, "mat-icon", 6);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, CannotRemoveAgentDialogComponent_ng_container_11_Template, 10, 6, "ng-container", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275template(13, CannotRemoveAgentDialogComponent_div_13_Template, 4, 3, "div", 10);
        \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
        \u0275\u0275listener("click", function CannotRemoveAgentDialogComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(18, CannotRemoveAgentDialogComponent_ng_template_18_Template, 17, 13, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const isAgentLeaving_r4 = \u0275\u0275reference(19);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx.data.isAgentLeaving ? "n4057" : "n3484"));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !(ctx.data == null ? null : ctx.data.isAgentLeaving))("ngIfElse", isAgentLeaving_r4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.data.isAgentLeaving);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 7, ctx.data.isAgentLeaving ? "n112" : "n97"), " ");
      }
    }, dependencies: [NgIf, MatButton, MatIconButton, MatIcon, NgOptimizedImage, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.error-msg[_ngcontent-%COMP%] {\n  border: 1px solid var(--error-3);\n  border-radius: 4px;\n  height: 40px;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  vertical-align: sub;\n  overflow: unset;\n}\n.go-ads[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-4) !important;\n  color: unset !important;\n}\n.rounded-10px[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/cannot-remove-agent-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CannotRemoveAgentDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-cannot-remove-agent-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ (data.isAgentLeaving ? 'n4057' : 'n3484') | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="px-3 py-4">
		<ng-container *ngIf="!data?.isAgentLeaving; else isAgentLeaving">
			<div class="error-msg bg-error-1 text-body-regular fg-error-3 d-flex align-items-center">
				<mat-icon class="material-icons-round mx-2 alert-icon">warning</mat-icon>

				<span>{{ 'n3485' | translations }}</span>
			</div>

			<p class="text-paragraph-regular fg-general-4 mt-4">{{ 'n3483' | translations }}</p>
		</ng-container>
	</div>

	<div class="p-3 dialog-actions row gap-2">
		<div class="col" *ngIf="!data.isAgentLeaving">
			<button mat-stroked-button class="text-body-regular w-100 go-ads fg-general-4 disabled-ripple" (click)="goToAds()" disableRipple>
				{{ 'n3482' | translations }}
			</button>
		</div>

		<div class="col">
			<button mat-flat-button class="text-body-regular w-100" (click)="close()" color="primary">
				{{ (data.isAgentLeaving ? 'n112' : 'n97') | translations }}
			</button>
		</div>
	</div>
</div>

<ng-template #isAgentLeaving>
	<div class="row align-items-center gap-3">
		<div class="col-lg-auto text-center text-lg-start">
			<img [ngSrc]="data?.businessProfile?.picture ?? defaultImage" [alt]="data?.businessProfile?.name" width="132" height="96" priority class="rounded-10px" />
		</div>

		<div class="col-lg text-center text-lg-start">
			<h4 class="heading-4-medium fg-general-5">{{ data?.businessProfile?.name }}</h4>

			<p class="text-body-regular fg-general-5 mt-2">
				<span class="text-body-medium">{{ data?.assignedAdCount }}</span>
				{{ 'n4062' | translations }}
			</p>
		</div>
	</div>

	<p class="text-body-medium fg-general-5 mt-4">{{ 'n4063' | translations }}!</p>

	<p class="text-body-regular fg-general-5 mt-1">{{ 'n4064' | translations }}</p>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/cannot-remove-agent-dialog/cannot-remove-agent-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.error-msg {\n  border: 1px solid var(--error-3);\n  border-radius: 4px;\n  height: 40px;\n}\n.alert-icon {\n  display: inline-block !important;\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  vertical-align: sub;\n  overflow: unset;\n}\n.go-ads {\n  border: 1px solid var(--general-4) !important;\n  color: unset !important;\n}\n.rounded-10px {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/cannot-remove-agent-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: Router }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CannotRemoveAgentDialogComponent, { className: "CannotRemoveAgentDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/cannot-remove-agent-dialog/cannot-remove-agent-dialog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/edit-profile-info-dialog/edit-profile-info-dialog.component.ts
function EditProfileInfoDialogComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "n3991"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.email);
  }
}
function EditProfileInfoDialogComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "button", 14);
    \u0275\u0275listener("click", function EditProfileInfoDialogComponent_ng_container_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateEmail());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "n91"));
  }
}
function EditProfileInfoDialogComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "button", 16);
    \u0275\u0275listener("click", function EditProfileInfoDialogComponent_ng_template_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.dialogRef.close(ctx_r0.itemControl.value));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "n112"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.itemControl.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "n3096"), " ");
  }
}
function EditProfileInfoDialogComponent_ng_template_16_label_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.data.label));
  }
}
function EditProfileInfoDialogComponent_ng_template_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r0.data == null ? null : ctx_r0.data.phoneCode) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "+353", " ");
  }
}
function EditProfileInfoDialogComponent_ng_template_16_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n303"));
  }
}
function EditProfileInfoDialogComponent_ng_template_16_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.data.patternError));
  }
}
function EditProfileInfoDialogComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditProfileInfoDialogComponent_ng_template_16_label_0_Template, 3, 3, "label", 17);
    \u0275\u0275elementStart(1, "mat-form-field", 18);
    \u0275\u0275template(2, EditProfileInfoDialogComponent_ng_template_16_span_2_Template, 3, 1, "span", 19);
    \u0275\u0275element(3, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EditProfileInfoDialogComponent_ng_template_16_mat_error_4_Template, 3, 3, "mat-error", 21)(5, EditProfileInfoDialogComponent_ng_template_16_mat_error_5_Template, 3, 3, "mat-error", 21);
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.data.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.data.target === ctx_r0.profileInfoField.PHONE);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.data.type)("formControl", ctx_r0.itemControl)("maxLength", ctx_r0.data.maxLength)("minLength", ctx_r0.data.minLength);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.itemControl.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.itemControl.hasError("pattern"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 9, ctx_r0.data == null ? null : ctx_r0.data.hint), ".");
  }
}
var EditProfileInfoDialogComponent = class _EditProfileInfoDialogComponent {
  constructor(data, dialog, authFacade, dialogRef) {
    this.data = data;
    this.dialog = dialog;
    this.authFacade = authFacade;
    this.dialogRef = dialogRef;
    this.itemControl = new FormControl("", Validators.required);
    this.profileInfoField = ProfileInfoField;
  }
  updateEmail() {
    this.authFacade.changeEmailRequestOtp();
    this.dialogRef.close();
    this.dialog.open(AuthDialogV2Component, {
      data: { authType: AuthType.UPDATE_EMAIL_OTP, email: this.data.email },
      panelClass: "auth-dialog",
      disableClose: true
    });
  }
  ngOnInit() {
    switch (this.data?.target) {
      case ProfileInfoField.NAME:
        this.itemControl.addValidators([VALIDATOR.pattern.name, Validators.maxLength(80), Validators.minLength(3)]);
        break;
      case ProfileInfoField.PHONE:
        this.itemControl.addValidators([Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(10)]);
        break;
      default:
    }
    this.itemControl.patchValue(this.data[this.data.target]);
  }
  static {
    this.\u0275fac = function EditProfileInfoDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditProfileInfoDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AuthFacade), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfileInfoDialogComponent, selectors: [["findqo-edit-profile-info-dialog"]], standalone: false, decls: 18, vars: 7, consts: [["actionButtons", ""], ["formControl", ""], [1, "container", "px-0"], [1, "row", "px-3", "align-items-center", "dialog-header", "border-bottom"], [1, "col"], [1, "heading-4-regular", "fg-general-5"], [1, "col-auto"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "py-4", "px-3"], [4, "ngIf", "ngIfElse"], [1, "border-top", "p-3", "row", "align-items-center", "justify-content-between"], [1, "text-body-regular", "fg-general-5"], [1, "text-body-mediium", "fg-general-5", "mt-2"], ["mat-flat-button", "", "color", "primary", 1, "w-100", "text-body-regular", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "fg-general-4", "text-body-regular"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", 3, "click", "disabled"], ["class", "text-body-regular fg-general-4 mb-2", 4, "ngIf"], ["appearance", "outline", 1, "no-subscript"], ["matTextPrefix", "", "class", "d-inline-flex align-items-center me-2 gap-1 align-middle fg-general-5", 4, "ngIf"], ["matInput", "", 3, "type", "formControl", "maxLength", "minLength"], ["class", "text-caption-regular", 4, "ngIf"], [1, "text-caption-regular", "fg-general-3", "mt-2"], [1, "text-body-regular", "fg-general-4", "mb-2"], ["matTextPrefix", "", 1, "d-inline-flex", "align-items-center", "me-2", "gap-1", "align-middle", "fg-general-5"], ["width", "24px", "height", "18px", "alt", "Country code flag", "src", "https://flagcdn.com/ie.svg", 1, "rounded"], [1, "text-caption-regular"]], template: function EditProfileInfoDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h4", 5);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "button", 7)(8, "mat-icon", 8);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275template(11, EditProfileInfoDialogComponent_ng_container_11_Template, 6, 4, "ng-container", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 11);
        \u0275\u0275template(13, EditProfileInfoDialogComponent_ng_container_13_Template, 5, 3, "ng-container", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, EditProfileInfoDialogComponent_ng_template_14_Template, 8, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, EditProfileInfoDialogComponent_ng_template_16_Template, 9, 11, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const actionButtons_r4 = \u0275\u0275reference(15);
        const formControl_r5 = \u0275\u0275reference(17);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx.data == null ? null : ctx.data.title));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.data.target === ctx.profileInfoField.EMAIL)("ngIfElse", formControl_r5);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.data.target === ctx.profileInfoField.EMAIL)("ngIfElse", actionButtons_r4);
      }
    }, dependencies: [NgIf, MatButton, MatIconButton, MatIcon, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatInput, MatFormField, MatError, MatPrefix, MatDialogClose, TranslationsPipe], styles: ["\n\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/edit-profile-info-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProfileInfoDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-edit-profile-info-dialog", standalone: false, template: `<div class="container px-0">
	<div class="row px-3 align-items-center dialog-header border-bottom">
		<div class="col">
			<h4 class="heading-4-regular fg-general-5">{{ data?.title | translations }}</h4>
		</div>

		<div class="col-auto">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="py-4 px-3">
		<ng-container *ngIf="data.target === profileInfoField.EMAIL; else formControl">
			<p class="text-body-regular fg-general-5">{{ 'n3991' | translations }}:</p>
			<p class="text-body-mediium fg-general-5 mt-2">{{ data?.email }}</p>
		</ng-container>
	</div>

	<div class="border-top p-3 row align-items-center justify-content-between">
		<ng-container *ngIf="data.target === profileInfoField.EMAIL; else actionButtons">
			<div class="col">
				<button mat-flat-button color="primary" class="w-100 text-body-regular" (click)="updateEmail()">{{ 'n91' | translations }}</button>
			</div>
		</ng-container>
	</div>
</div>

<ng-template #actionButtons>
	<div class="col-auto">
		<button mat-button mat-dialog-close class="fg-general-4 text-body-regular">{{ 'n112' | translations }}</button>
	</div>

	<div class="col-auto">
		<button mat-flat-button color="primary" class="text-body-regular" (click)="dialogRef.close(itemControl.value)" [disabled]="itemControl.invalid">
			{{ 'n3096' | translations }}
		</button>
	</div>
</ng-template>

<ng-template #formControl>
	<label *ngIf="data.label" class="text-body-regular fg-general-4 mb-2">{{ data.label | translations }}</label>
	<mat-form-field appearance="outline" class="no-subscript">
		<span *ngIf="data.target === profileInfoField.PHONE" matTextPrefix class="d-inline-flex align-items-center me-2 gap-1 align-middle fg-general-5">
			<img width="24px" height="18px" class="rounded" alt="Country code flag" src="https://flagcdn.com/ie.svg" />
			{{ data?.phoneCode ?? '+353' }}
		</span>

		<input [type]="data.type" matInput [formControl]="itemControl" [maxLength]="data.maxLength" [minLength]="data.minLength" />
	</mat-form-field>

	<mat-error *ngIf="itemControl.hasError('required')" class="text-caption-regular">{{ 'n303' | translations }}</mat-error>
	<mat-error *ngIf="itemControl.hasError('pattern')" class="text-caption-regular">{{ data.patternError | translations }}</mat-error>

	<p class="text-caption-regular fg-general-3 mt-2">{{ data?.hint | translations }}.</p>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/edit-profile-info-dialog/edit-profile-info-dialog.component.scss */\n.dialog-header {\n  height: 60px;\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/edit-profile-info-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialog }, { type: AuthFacade }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfileInfoDialogComponent, { className: "EditProfileInfoDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/edit-profile-info-dialog/edit-profile-info-dialog.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/leave-agency-dialog/leave-agency-dialog.component.ts
var LeaveAgencyDialogComponent = class _LeaveAgencyDialogComponent {
  constructor(agent, auth, dialogRef, myProfileFacade) {
    this.agent = agent;
    this.auth = auth;
    this.dialogRef = dialogRef;
    this.myProfileFacade = myProfileFacade;
    this.user = this.auth.user();
    this.defaultImage = "assets/images/profile/business-account-photo.svg";
  }
  removeAgent() {
    this.dialogRef.close();
    this.myProfileFacade.deleteAgent(this.agent);
  }
  cancel() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function LeaveAgencyDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeaveAgencyDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyProfileFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveAgencyDialogComponent, selectors: [["findqo-leave-agency-dialog"]], standalone: false, decls: 40, vars: 25, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "px-3", "py-4"], [1, "row", "align-items-center", "gap-3"], [1, "col-lg-auto", "text-center", "text-lg-start"], ["width", "132", "height", "96", "priority", "", 1, "rounded-10px", 3, "ngSrc", "alt"], [1, "col-lg", "text-center", "text-lg-start"], [1, "heading-4-medium", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "mt-2"], [1, "text-body-medium"], [1, "text-body-medium", "fg-general-5", "mt-4"], [1, "text-body-regular", "fg-general-5", "mt-1"], [1, "text-body-regular", "fg-general-5", "mt-3"], [1, "p-3", "dialog-actions", "row", "gap-2"], [1, "col"], ["mat-stroked-button", "", 1, "text-body-regular", "w-100", "cancel-btn", "fg-general-4", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "text-body-regular", "w-100", 3, "click"]], template: function LeaveAgencyDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4)(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8);
        \u0275\u0275element(13, "img", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "h4", 11);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 12)(18, "span", 13);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "p", 14);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 15);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 16);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 17)(32, "div", 18)(33, "button", 19);
        \u0275\u0275listener("click", function LeaveAgencyDialogComponent_Template_button_click_33_listener() {
          return ctx.removeAgent();
        });
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 18)(37, "button", 20);
        \u0275\u0275listener("click", function LeaveAgencyDialogComponent_Template_button_click_37_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translations");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "n4057"));
        \u0275\u0275advance(9);
        \u0275\u0275property("ngSrc", (tmp_1_0 = ctx.agent == null ? null : ctx.agent.businessProfile == null ? null : ctx.agent.businessProfile.picture) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ctx.defaultImage)("alt", ctx.agent == null ? null : ctx.agent.businessProfile == null ? null : ctx.agent.businessProfile.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.agent == null ? null : ctx.agent.businessProfile == null ? null : ctx.agent.businessProfile.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.agent == null ? null : ctx.agent.assignedAdCount);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "n4062"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 15, "n4065"), "!");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 17, "n4066"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 19, "n4067"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 21, "n4057"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 23, "n112"));
      }
    }, dependencies: [MatButton, MatIconButton, MatIcon, NgOptimizedImage, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.rounded-10px[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/leave-agency-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveAgencyDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-leave-agency-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n4057' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="px-3 py-4">
		<div class="row align-items-center gap-3">
			<div class="col-lg-auto text-center text-lg-start">
				<img
					[ngSrc]="agent?.businessProfile?.picture ?? defaultImage"
					[alt]="agent?.businessProfile?.name"
					width="132"
					height="96"
					priority
					class="rounded-10px"
				/>
			</div>

			<div class="col-lg text-center text-lg-start">
				<h4 class="heading-4-medium fg-general-5">{{ agent?.businessProfile?.name }}</h4>

				<p class="text-body-regular fg-general-5 mt-2">
					<span class="text-body-medium">{{ agent?.assignedAdCount }}</span>
					{{ 'n4062' | translations }}
				</p>
			</div>
		</div>

		<p class="text-body-medium fg-general-5 mt-4">{{ 'n4065' | translations }}!</p>

		<p class="text-body-regular fg-general-5 mt-1">{{ 'n4066' | translations }}</p>

		<p class="text-body-regular fg-general-5 mt-3">{{ 'n4067' | translations }}</p>
	</div>

	<div class="p-3 dialog-actions row gap-2">
		<div class="col">
			<button mat-stroked-button class="text-body-regular w-100 cancel-btn fg-general-4" (click)="removeAgent()">{{ 'n4057' | translations }}</button>
		</div>

		<div class="col">
			<button mat-flat-button class="text-body-regular w-100" color="warn" (click)="cancel()">{{ 'n112' | translations }}</button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/leave-agency-dialog/leave-agency-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.rounded-10px {\n  border-radius: 10px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/leave-agency-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: AuthService }, { type: MatDialogRef }, { type: MyProfileFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveAgencyDialogComponent, { className: "LeaveAgencyDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/leave-agency-dialog/leave-agency-dialog.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/agent-profile/agent-profile.component.ts
var _c0 = (a0, a1, a2) => ({ active: a0, pending: a1, rejected: a2 });
var _c1 = (a0, a1) => ({ "mt-3": a0, "mt-1": a1 });
function AgentProfileComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, " Assigned Ads: ");
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.agent.assignedAdCount);
  }
}
function AgentProfileComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "n3926"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (tmp_3_0 = ctx_r1.agent == null ? null : ctx_r1.agent.phoneCode) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "+353", " ", ctx_r1.agent.phone, "");
  }
}
function AgentProfileComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3531"));
  }
}
function AgentProfileComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n198"), " ");
  }
}
function AgentProfileComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n4056"));
  }
}
function AgentProfileComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AgentProfileComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editPhoneNumber.emit(ctx_r1.agent));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n4058"));
  }
}
function AgentProfileComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AgentProfileComponent_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewAssignedAds.emit(ctx_r1.agent));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n4059"));
  }
}
function AgentProfileComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AgentProfileComponent_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAgent.emit(ctx_r1.agent));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n4057"));
  }
}
function AgentProfileComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function AgentProfileComponent_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reInviteAgent.emit(ctx_r1.agent.email));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3802"), " ");
  }
}
function AgentProfileComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AgentProfileComponent_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAgent.emit(ctx_r1.agent));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r1.agent.status === ctx_r1.agentStatus.PENDING ? "n4061" : "n3511"));
  }
}
var AgentProfileComponent = class _AgentProfileComponent {
  constructor(bottomSheet, auth) {
    this.bottomSheet = bottomSheet;
    this.auth = auth;
    this.removeAgent = new EventEmitter();
    this.reInviteAgent = new EventEmitter();
    this.editPhoneNumber = new EventEmitter();
    this.viewAssignedAds = new EventEmitter();
    this.isAgent = this.auth.user()?.roles.some((role) => role === "isAgentUser");
    this.isAdmin = +this.auth.user()?.hasBusinessProfile && !this.isAgent;
    this.defaultUserImg = environment.defaultAvatarImg;
    this.agentStatus = AgentStatus;
    this.appRoute = APP_ROUTE;
  }
  openBottomSheet() {
    const OPTIONS = [
      this.agent.status === this.agentStatus.ACCEPTED && {
        translationKey: "n4059",
        textClass: "border-bottom fg-general-5",
        action: AgentProfileAction.VIEW_ASSIGNED_ADS
      },
      this.agent.status === this.agentStatus.ACCEPTED && this.isAdmin && { translationKey: "n4058", textClass: "border-bottom fg-general-5", action: AgentProfileAction.EDIT_PHONE },
      this.agent.status === this.agentStatus.REJECTED && this.isAdmin && { translationKey: "n3802", textClass: "border-bottom fg-general-5", action: AgentProfileAction.REINVITE },
      !+this.agent?.isAdmin && this.isAdmin && {
        translationKey: this.agent.status === this.agentStatus.PENDING ? "n4061" : "n3511",
        textClass: "fg-error-3 border-bottom",
        action: AgentProfileAction.REMOVE
      },
      !+this.agent?.isAdmin && this.agent?.userId === this.auth.user()?.id && {
        translationKey: "n4057",
        textClass: "fg-error-3 border-bottom",
        action: AgentProfileAction.REMOVE
      }
    ].filter(Boolean);
    this.bottomSheet.open(BottomsheetComponent, {
      data: { options: OPTIONS, title: "n4060", headerClass: "border-bottom", titleClass: "text-body-regular" },
      panelClass: ["agent-action-menu"]
    }).afterDismissed().subscribe((res) => {
      if (res) {
        switch (res.action) {
          case AgentProfileAction.EDIT_PHONE:
            this.editPhoneNumber.emit(this.agent);
            break;
          case AgentProfileAction.VIEW_ASSIGNED_ADS:
            this.viewAssignedAds.emit(this.agent);
            break;
          case AgentProfileAction.REINVITE:
            this.reInviteAgent.emit(this.agent.email);
            break;
          case AgentProfileAction.REMOVE:
            this.removeAgent.emit(this.agent);
            break;
          default:
        }
      }
    });
  }
  static {
    this.\u0275fac = function AgentProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentProfileComponent)(\u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentProfileComponent, selectors: [["findqo-agent-profile"]], inputs: { agent: "agent" }, outputs: { removeAgent: "removeAgent", reInviteAgent: "reInviteAgent", editPhoneNumber: "editPhoneNumber", viewAssignedAds: "viewAssignedAds" }, standalone: false, decls: 36, vars: 32, consts: [["actionMenu", "matMenu"], [1, "agent-card", "px-2", "py-3", "rounded", 3, "ngClass"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto"], ["width", "40", "height", "40", "alt", "agent profile", 1, "rounded-circle", "object-fit", 3, "ngSrc"], ["mat-icon-button", "", 1, "fg-general-4", "align-middle", "bg-general-1", "rounded-circle", "menu-icon", "d-none", "d-lg-flex", 3, "matMenuTriggerFor"], [1, "material-icons-outlined"], ["mat-icon-button", "", 1, "fg-general-4", "d-flex", "d-lg-none", "align-middle", "bg-general-1", "rounded-circle", "menu-icon", 3, "click"], [1, "fg-general-5", "text-body-medium", "mt-1"], [1, "fg-general-5", "text-body-regular", "mt-1"], ["class", "text-body-regular fg-general-5 mt-3", 4, "ngIf"], ["class", "text-body-regular fg-general-5 mt-1", 4, "ngIf"], [1, "row", "justify-content-between", "align-items-center", 3, "ngClass"], [1, "text-body-regular", "fg-general-5"], [1, "fg-general-5", "text-body-medium"], ["class", "text-caption-regular fg-general-4", 4, "ngIf"], ["class", "text-caption-regular px-2 py-1 rounded-pill bg-error-3 fg-basic-1 text-capitalize", 4, "ngIf"], ["class", "text-caption-regular px-2 py-1 rounded-pill bg-prim-2 fg-basic-1", 4, "ngIf"], [3, "overlapTrigger", "xPosition"], ["mat-menu-item", "", "class", "fg-general-5 text-body-regular", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "class", "fg-error-3 text-body-regular", 3, "click", 4, "ngIf"], ["class", "fg-general-5 text-body-regular", "mat-menu-item", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "text-body-regular", "fg-general-5", "mt-3"], [1, "text-body-regular", "fg-general-5", "mt-1"], [1, "text-caption-regular", "fg-general-4"], [1, "px-2", "py-1", "rounded-pill", "bg-neutral-1"], [1, "text-caption-regular", "px-2", "py-1", "rounded-pill", "bg-error-3", "fg-basic-1", "text-capitalize"], [1, "text-caption-regular", "px-2", "py-1", "rounded-pill", "bg-prim-2", "fg-basic-1"], ["mat-menu-item", "", 1, "fg-general-5", "text-body-regular", 3, "click"], ["mat-menu-item", "", 1, "fg-error-3", "text-body-regular", 3, "click"], ["mat-menu-item", "", "color", "primary", 1, "fg-general-5", "text-body-regular", 3, "click"]], template: function AgentProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275element(3, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 5)(6, "mat-icon", 6);
        \u0275\u0275text(7, "more_horiz");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 7);
        \u0275\u0275listener("click", function AgentProfileComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openBottomSheet());
        });
        \u0275\u0275elementStart(9, "mat-icon", 6);
        \u0275\u0275text(10, "more_horiz");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "p", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, AgentProfileComponent_p_15_Template, 4, 1, "p", 10)(16, AgentProfileComponent_p_16_Template, 5, 5, "p", 11);
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 3)(19, "p", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementStart(22, "span", 14);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 3);
        \u0275\u0275template(26, AgentProfileComponent_p_26_Template, 4, 3, "p", 15)(27, AgentProfileComponent_p_27_Template, 3, 3, "p", 16)(28, AgentProfileComponent_p_28_Template, 3, 3, "p", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "mat-menu", 18, 0);
        \u0275\u0275template(31, AgentProfileComponent_button_31_Template, 4, 3, "button", 19)(32, AgentProfileComponent_button_32_Template, 4, 3, "button", 19)(33, AgentProfileComponent_button_33_Template, 4, 3, "button", 20)(34, AgentProfileComponent_button_34_Template, 3, 3, "button", 21)(35, AgentProfileComponent_button_35_Template, 4, 3, "button", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_18_0;
        const actionMenu_r8 = \u0275\u0275reference(30);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(25, _c0, ctx.agent.status === ctx.agentStatus.ACCEPTED, ctx.agent.status === ctx.agentStatus.PENDING, ctx.agent.status === ctx.agentStatus.REJECTED));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngSrc", (tmp_2_0 = ctx.agent.picture) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ctx.defaultUserImg);
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", actionMenu_r8);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.agent.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.agent.email);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.ACCEPTED);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.ACCEPTED && (ctx.agent == null ? null : ctx.agent.phone));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(29, _c1, ctx.agent.status !== ctx.agentStatus.ACCEPTED, !+ctx.agent.isAdmin && ctx.agent.status === ctx.agentStatus.ACCEPTED));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 20, "n3800"), ": ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 22, +ctx.agent.createdAt * 1e3, "MMM dd, yyyy"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.PENDING);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.REJECTED);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", +(ctx.agent == null ? null : ctx.agent.isAdmin));
        \u0275\u0275advance();
        \u0275\u0275property("overlapTrigger", false)("xPosition", "before");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.ACCEPTED && ctx.isAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.ACCEPTED);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !+(ctx.agent == null ? null : ctx.agent.isAdmin) && (ctx.agent == null ? null : ctx.agent.userId) === ((tmp_18_0 = ctx.auth.user()) == null ? null : tmp_18_0.id));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agent.status === ctx.agentStatus.REJECTED && ctx.isAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !+(ctx.agent == null ? null : ctx.agent.isAdmin) && ctx.isAdmin);
      }
    }, dependencies: [NgClass, NgIf, MatIconButton, MatIcon, NgOptimizedImage, MatMenu, MatMenuItem, MatMenuTrigger, DatePipe, TranslationsPipe], styles: ["\n\n.agent-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.agent-card.active[_ngcontent-%COMP%] {\n  border: 1px;\n  border-top: 7px;\n  border-style: solid;\n  border-color: rgba(238, 0, 136, 0.5);\n}\n.agent-card.pending[_ngcontent-%COMP%] {\n  border: 1px;\n  border-top: 7px;\n  border-style: solid;\n  border-color: var(--general-2);\n}\n.agent-card.rejected[_ngcontent-%COMP%] {\n  border: 1px;\n  border-top: 7px;\n  border-style: solid;\n  border-color: var(--error-2);\n}\n.lh-36px[_ngcontent-%COMP%] {\n  line-height: 36px !important;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 34px !important;\n  height: 34px !important;\n  justify-content: center !important;\n  align-items: center !important;\n}\n.menu-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: fit-content !important;\n  margin: 0 !important;\n}\nimg.object-fit[_ngcontent-%COMP%] {\n  object-fit: cover !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentProfileComponent, [{
    type: Component,
    args: [{ selector: "findqo-agent-profile", standalone: false, template: `<div
	class="agent-card px-2 py-3 rounded"
	[ngClass]="{
		active: agent.status === agentStatus.ACCEPTED,
		pending: agent.status === agentStatus.PENDING,
		rejected: agent.status === agentStatus.REJECTED
	}"
>
	<div class="row justify-content-between align-items-center">
		<div class="col-auto">
			<img [ngSrc]="agent.picture ?? defaultUserImg" width="40" height="40" alt="agent profile" class="rounded-circle object-fit" />
		</div>

		<div class="col-auto">
			<button mat-icon-button [matMenuTriggerFor]="actionMenu" class="fg-general-4 align-middle bg-general-1 rounded-circle menu-icon d-none d-lg-flex">
				<mat-icon class="material-icons-outlined">more_horiz</mat-icon>
			</button>

			<button mat-icon-button class="fg-general-4 d-flex d-lg-none align-middle bg-general-1 rounded-circle menu-icon" (click)="openBottomSheet()">
				<mat-icon class="material-icons-outlined">more_horiz</mat-icon>
			</button>
		</div>
	</div>

	<p class="fg-general-5 text-body-medium mt-1">{{ agent.name }}</p>
	<p class="fg-general-5 text-body-regular mt-1">{{ agent.email }}</p>

	<p class="text-body-regular fg-general-5 mt-3" *ngIf="agent.status === agentStatus.ACCEPTED">
		<!-- {{ 'n3801' | translations }} -->
		Assigned Ads:
		<span class="fg-general-5 text-body-medium">{{ agent.assignedAdCount }}</span>
	</p>

	<p class="text-body-regular fg-general-5 mt-1" *ngIf="agent.status === agentStatus.ACCEPTED && agent?.phone">
		{{ 'n3926' | translations }}
		<span class="fg-general-5 text-body-medium">{{ agent?.phoneCode ?? '+353' }} {{ agent.phone }}</span>
	</p>

	<div
		class="row justify-content-between align-items-center"
		[ngClass]="{ 'mt-3': agent.status !== agentStatus.ACCEPTED, 'mt-1': !+agent.isAdmin && agent.status === agentStatus.ACCEPTED }"
	>
		<div class="col-auto">
			<p class="text-body-regular fg-general-5">
				{{ 'n3800' | translations }}:
				<span class="fg-general-5 text-body-medium">{{ +agent.createdAt * 1000 | date: 'MMM dd, yyyy' }}</span>
			</p>
		</div>

		<div class="col-auto">
			<p class="text-caption-regular fg-general-4" *ngIf="agent.status === agentStatus.PENDING">
				<span class="px-2 py-1 rounded-pill bg-neutral-1">{{ 'n3531' | translations }}</span>
			</p>

			<p class="text-caption-regular px-2 py-1 rounded-pill bg-error-3 fg-basic-1 text-capitalize" *ngIf="agent.status === agentStatus.REJECTED">
				{{ 'n198' | translations }}
			</p>

			<p class="text-caption-regular px-2 py-1 rounded-pill bg-prim-2 fg-basic-1" *ngIf="+agent?.isAdmin">{{ 'n4056' | translations }}</p>
		</div>
	</div>
</div>

<mat-menu #actionMenu="matMenu" [overlapTrigger]="false" [xPosition]="'before'">
	<button mat-menu-item (click)="editPhoneNumber.emit(agent)" class="fg-general-5 text-body-regular" *ngIf="agent.status === agentStatus.ACCEPTED && isAdmin">
		<span>{{ 'n4058' | translations }}</span>
	</button>

	<button mat-menu-item (click)="viewAssignedAds.emit(agent)" class="fg-general-5 text-body-regular" *ngIf="agent.status === agentStatus.ACCEPTED">
		<span>{{ 'n4059' | translations }}</span>
	</button>

	<button mat-menu-item (click)="removeAgent.emit(agent)" class="fg-error-3 text-body-regular" *ngIf="!+agent?.isAdmin && agent?.userId === auth.user()?.id">
		<span>{{ 'n4057' | translations }}</span>
	</button>

	<button
		class="fg-general-5 text-body-regular"
		mat-menu-item
		color="primary"
		*ngIf="agent.status === agentStatus.REJECTED && isAdmin"
		(click)="reInviteAgent.emit(agent.email)"
	>
		{{ 'n3802' | translations }}
	</button>

	<button mat-menu-item (click)="removeAgent.emit(agent)" class="fg-error-3 text-body-regular" *ngIf="!+agent?.isAdmin && isAdmin">
		<span>{{ (agent.status === agentStatus.PENDING ? 'n4061' : 'n3511') | translations }}</span>
	</button>
</mat-menu>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/agent-profile/agent-profile.component.scss */\n.agent-card {\n  width: 100%;\n}\n.agent-card.active {\n  border: 1px;\n  border-top: 7px;\n  border-style: solid;\n  border-color: rgba(238, 0, 136, 0.5);\n}\n.agent-card.pending {\n  border: 1px;\n  border-top: 7px;\n  border-style: solid;\n  border-color: var(--general-2);\n}\n.agent-card.rejected {\n  border: 1px;\n  border-top: 7px;\n  border-style: solid;\n  border-color: var(--error-2);\n}\n.lh-36px {\n  line-height: 36px !important;\n}\n.menu-icon {\n  width: 34px !important;\n  height: 34px !important;\n  justify-content: center !important;\n  align-items: center !important;\n}\n.menu-icon mat-icon {\n  width: fit-content !important;\n  margin: 0 !important;\n}\nimg.object-fit {\n  object-fit: cover !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-profile.component.css.map */\n"] }]
  }], () => [{ type: MatBottomSheet }, { type: AuthService }], { agent: [{
    type: Input
  }], removeAgent: [{
    type: Output
  }], reInviteAgent: [{
    type: Output
  }], editPhoneNumber: [{
    type: Output
  }], viewAssignedAds: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentProfileComponent, { className: "AgentProfileComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/agent-profile/agent-profile.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-agents-list/business-agents-list.component.ts
var _c02 = (a0) => ({ agentsList: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function BusinessAgentsListComponent_div_0_ng_container_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "findqo-agent-profile", 7);
    \u0275\u0275listener("removeAgent", function BusinessAgentsListComponent_div_0_ng_container_1_For_7_Template_findqo_agent_profile_removeAgent_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeAgent($event));
    })("reInviteAgent", function BusinessAgentsListComponent_div_0_ng_container_1_For_7_Template_findqo_agent_profile_reInviteAgent_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reInviteAgent($event));
    })("editPhoneNumber", function BusinessAgentsListComponent_div_0_ng_container_1_For_7_Template_findqo_agent_profile_editPhoneNumber_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editPhoneNumber($event));
    })("viewAssignedAds", function BusinessAgentsListComponent_div_0_ng_container_1_For_7_Template_findqo_agent_profile_viewAssignedAds_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewAssignedAds($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const agent_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("agent", agent_r3);
  }
}
function BusinessAgentsListComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275repeaterCreate(6, BusinessAgentsListComponent_div_0_ng_container_1_For_7_Template, 2, 1, "div", 6, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(3, 3, "n3109"), " ", vm_r4 == null ? null : vm_r4.agentsList == null ? null : vm_r4.agentsList.length, " ", \u0275\u0275pipeBind1(4, 5, "n4005"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(vm_r4 == null ? null : vm_r4.agentsList);
  }
}
function BusinessAgentsListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, BusinessAgentsListComponent_div_0_ng_container_1_Template, 8, 7, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r4 = ctx.ngIf;
    \u0275\u0275nextContext();
    const noAgentsTemplate_r5 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r4 == null ? null : vm_r4.agentsList == null ? null : vm_r4.agentsList.length) > 0)("ngIfElse", noAgentsTemplate_r5);
  }
}
function BusinessAgentsListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.hasSearch ? "No agents found" : \u0275\u0275pipeBind1(3, 1, "n3503"));
  }
}
var BusinessAgentsListComponent = class _BusinessAgentsListComponent {
  constructor(myProfileFacade, dialog, router, auth, route) {
    this.myProfileFacade = myProfileFacade;
    this.dialog = dialog;
    this.router = router;
    this.auth = auth;
    this.route = route;
    this.displayedColumns = ["name", "email", "status", "action"];
    this.agentStatus = AgentStatus;
    this.isRemoveAgentClicked = false;
    this.hasSearch = false;
    this.agentsList$ = myProfileFacade.getAgents$();
  }
  reInviteAgent(email) {
    this.myProfileFacade.addAgents([email]);
  }
  removeAgent(agent) {
    if (!this.isRemoveAgentClicked) {
      this.isRemoveAgentClicked = true;
      const IS_AGENT_LEAVING = agent.userId === this.auth.user()?.id;
      const CONFIG_DATA = {
        width: "95%",
        height: "auto",
        maxHeight: "unset",
        maxWidth: IS_AGENT_LEAVING ? "600px" : "375px",
        panelClass: "remove-agent",
        disableClose: true,
        data: __spreadProps(__spreadValues({}, agent), { businessProfile: this.auth.user()?.businessProfile })
      };
      if (agent.status !== this.agentStatus.ACCEPTED) {
        if (IS_AGENT_LEAVING) {
          this.leaveAgency(agent, CONFIG_DATA);
        } else {
          this.removeAgentRequest(agent, CONFIG_DATA);
        }
        return;
      }
      this.myProfileFacade.canRemoveAgent(agent?.id).then((response) => {
        this.isRemoveAgentClicked = false;
        if (response?.hasAssignedAd === BooleanStatus.FALSE) {
          if (IS_AGENT_LEAVING) {
            this.leaveAgency(agent, CONFIG_DATA);
          } else {
            this.removeAgentRequest(agent, CONFIG_DATA);
          }
        } else {
          if (IS_AGENT_LEAVING) {
            this.dialog.open(CannotRemoveAgentDialogComponent, __spreadProps(__spreadValues({}, CONFIG_DATA), {
              data: __spreadProps(__spreadValues({}, CONFIG_DATA.data), { isAgentLeaving: IS_AGENT_LEAVING })
            }));
          } else {
            this.dialog.open(CannotRemoveAgentDialogComponent, CONFIG_DATA);
          }
        }
      }).catch(() => {
        this.isRemoveAgentClicked = false;
      });
    }
  }
  removeAgentRequest(agent, configData) {
    this.dialog.open(RemoveAgentDialogComponent, __spreadValues({
      data: agent
    }, configData)).afterClosed().subscribe(() => this.isRemoveAgentClicked = false);
  }
  leaveAgency(agent, configData) {
    this.dialog.open(LeaveAgencyDialogComponent, __spreadValues({
      data: agent
    }, configData)).afterClosed().subscribe(() => this.isRemoveAgentClicked = false);
  }
  editPhoneNumber(agent) {
    if (agent.isAdmin && this.auth.user()?.id === agent?.userId) {
      this.router.navigate([APP_ROUTE.myProfile]);
      return;
    }
    const DATA = __spreadProps(__spreadValues(__spreadValues({}, EDIT_DIALOG_STATIC_DATA.phone), agent), {
      target: "phone",
      hint: "Updating the phone number will also update the contact number throughout all ads assigned to this agent."
    });
    this.dialog.open(EditProfileInfoDialogComponent, {
      disableClose: false,
      maxWidth: "375px",
      width: "95%",
      height: "auto",
      maxHeight: "100%",
      data: DATA
    }).afterClosed().subscribe((value) => {
      if (value && value !== DATA?.["phone"]) {
        this.myProfileFacade.patchAgentPhone(agent.id, {
          phone: value
        }).subscribe(() => this.myProfileFacade.loadAgents());
      }
    });
  }
  viewAssignedAds(agent) {
    this.router.navigate([`/agent/${agent.id}/${agent.profileId}`]);
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const searchParam = params["search"];
      if (searchParam) {
        this.hasSearch = true;
      }
    });
  }
  static {
    this.\u0275fac = function BusinessAgentsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessAgentsListComponent)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessAgentsListComponent, selectors: [["findqo-business-agents-list"]], standalone: false, decls: 4, vars: 5, consts: [["noAgentsTemplate", ""], ["class", "container px-0", 4, "ngIf"], [1, "container", "px-0"], [4, "ngIf", "ngIfElse"], [1, "text-body-medium", "fg-general-5", "mt-3", "mb-2", "mt-lg-0", "mb-lg-3", "agent-count"], ["tabindex", "0", 1, "row", "gap-3", "row-cols-md-3", "row-cols-1", "flex-wrap", "mb-4", "w-100"], [1, "col"], [3, "removeAgent", "reInviteAgent", "editPhoneNumber", "viewAssignedAds", "agent"], [1, "text-center", "my-4"], [1, "fg-general-4", "text-body-medium", "d-block", "mb-2"]], template: function BusinessAgentsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BusinessAgentsListComponent_div_0_Template, 2, 2, "div", 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275template(2, BusinessAgentsListComponent_ng_template_2_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c02, \u0275\u0275pipeBind1(1, 1, ctx.agentsList$)));
      }
    }, dependencies: [NgIf, AgentProfileComponent, AsyncPipe, TranslationsPipe], styles: ["\n\n.agents-table-container[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow: auto;\n  width: 100%;\n}\n.agents-table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 5px;\n}\n.agents-table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--general-3);\n  border-radius: 20px;\n}\n.pending-status[_ngcontent-%COMP%] {\n  background-color: var(--general-1);\n  color: var(--general-4);\n}\n.accepted-status[_ngcontent-%COMP%] {\n  background-color: var(--success-1);\n  color: var(--success-3);\n}\n.agent-status[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  width: 75px;\n  height: 22px;\n  line-height: 22px;\n}\n.remove-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.w-200px[_ngcontent-%COMP%] {\n  width: 200px;\n}\nfindqo-agent-profile[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  findqo-agent-profile[_ngcontent-%COMP%] {\n    width: fit-content;\n  }\n}\n@media (min-width: 768px) {\n  .row-cols-md-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: 32.23%;\n  }\n}\n.agent-count[_ngcontent-%COMP%] {\n  height: fit-content !important;\n}\n@media (min-width: 768px) {\n  .agent-count[_ngcontent-%COMP%] {\n    height: 48px !important;\n    display: inline-flex;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-agents-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessAgentsListComponent, [{
    type: Component,
    args: [{ selector: "findqo-business-agents-list", standalone: false, template: `<div class="container px-0" *ngIf="{ agentsList: agentsList$ | async } as vm">
	<ng-container *ngIf="vm?.agentsList?.length > 0; else noAgentsTemplate">
		<p class="text-body-medium fg-general-5 mt-3 mb-2 mt-lg-0 mb-lg-3 agent-count">
			{{ 'n3109' | translations }} {{ vm?.agentsList?.length }} {{ 'n4005' | translations }}
		</p>

		<div class="row gap-3 row-cols-md-3 row-cols-1 flex-wrap mb-4 w-100" tabindex="0">
			@for (agent of vm?.agentsList; track agent.id) {
				<div class="col">
					<findqo-agent-profile
						[agent]="agent"
						(removeAgent)="removeAgent($event)"
						(reInviteAgent)="reInviteAgent($event)"
						(editPhoneNumber)="editPhoneNumber($event)"
						(viewAssignedAds)="viewAssignedAds($event)"
					></findqo-agent-profile>
				</div>
			}
		</div>
	</ng-container>
</div>

<ng-template #noAgentsTemplate>
	<div class="text-center my-4">
		<span class="fg-general-4 text-body-medium d-block mb-2">{{ hasSearch ? 'No agents found' : ('n3503' | translations) }}</span>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-agents-list/business-agents-list.component.scss */\n.agents-table-container {\n  max-height: 600px;\n  overflow: auto;\n  width: 100%;\n}\n.agents-table-container::-webkit-scrollbar {\n  width: 0;\n  height: 5px;\n}\n.agents-table-container::-webkit-scrollbar-thumb {\n  background: var(--general-3);\n  border-radius: 20px;\n}\n.pending-status {\n  background-color: var(--general-1);\n  color: var(--general-4);\n}\n.accepted-status {\n  background-color: var(--success-1);\n  color: var(--success-3);\n}\n.agent-status {\n  border-radius: 100px;\n  width: 75px;\n  height: 22px;\n  line-height: 22px;\n}\n.remove-icon {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.w-200px {\n  width: 200px;\n}\nfindqo-agent-profile {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  findqo-agent-profile {\n    width: fit-content;\n  }\n}\n@media (min-width: 768px) {\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 32.23%;\n  }\n}\n.agent-count {\n  height: fit-content !important;\n}\n@media (min-width: 768px) {\n  .agent-count {\n    height: 48px !important;\n    display: inline-flex;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-agents-list.component.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }, { type: MatDialog }, { type: Router }, { type: AuthService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessAgentsListComponent, { className: "BusinessAgentsListComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-agents-list/business-agents-list.component.ts", lineNumber: 23 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/add-agents-dialog/add-agents-dialog.component.ts
function AddAgentsDialogComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3529"), " ");
  }
}
function AddAgentsDialogComponent_ng_template_20_mat_error_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3487"), " ");
  }
}
function AddAgentsDialogComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddAgentsDialogComponent_ng_template_20_mat_error_0_Template, 3, 3, "mat-error", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.agentEmailControl.hasError("emailPattern") || ctx_r1.agentEmailControl.hasError("emailRequired"));
  }
}
function AddAgentsDialogComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function AddAgentsDialogComponent_div_26_Template_button_click_3_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteAgent(i_r4));
    });
    \u0275\u0275elementStart(4, "mat-icon", 23);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(email_r5);
  }
}
function AddAgentsDialogComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon", 25);
    \u0275\u0275text(2, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "n3750"));
  }
}
function AddAgentsDialogComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "findqo-button", 28);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function AddAgentsDialogComponent_div_28_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendInvite());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("label", \u0275\u0275pipeBind1(2, 3, "n3494"))("btnClass", "text-body-regular w-100 delete-dialog-btn");
  }
}
var AddAgentsDialogComponent = class _AddAgentsDialogComponent {
  constructor(data, dialogRef, profileFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.profileFacade = profileFacade;
    this.buttonType = ButtonType;
    this.agents = [];
    this.agentEmailControl = new FormControl("", [AppEmailValidator.validateEmailPattern()]);
  }
  sendInvite() {
    this.onAddAgent();
    if (this.agents.length > 0) {
      this.dialogRef.close();
      this.profileFacade.addAgents(this.agents);
    } else {
      if (!this.agentEmailControl.value) {
        this.agentEmailControl.setErrors({ emailRequired: true });
      }
    }
  }
  onAddAgent() {
    this.agentEmailControl.markAsTouched();
    if (!this.agentEmailControl.hasError("emailPattern")) {
      this.agentEmailControl.setErrors(null);
    }
    if (!this.agentEmailControl.value) {
      this.agentEmailControl.setErrors({ emailRequired: true });
    }
    if (this.agentEmailControl.value && this.agentEmailControl.valid) {
      const EXISTING_AGENTS = this.profileFacade.getAgents();
      if (this.agentEmailControl.value.toLowerCase() === this.profileFacade.getUser()?.email) {
        this.agentEmailControl.setErrors({ emailPattern: true });
      } else {
        if (this.agents.findIndex((agent) => agent === this.agentEmailControl.value.toLowerCase()) === -1 && EXISTING_AGENTS.findIndex((agent) => agent.email === this.agentEmailControl.value.toLowerCase()) === -1) {
          this.agents.push(this.agentEmailControl.value);
          this.agentEmailControl.reset();
          this.agentEmailControl.markAsUntouched();
        } else {
          this.agentEmailControl.setErrors({ existingEmail: true });
        }
      }
    }
  }
  deleteAgent(index) {
    this.agents.splice(index, 1);
  }
  static {
    this.\u0275fac = function AddAgentsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddAgentsDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyProfileFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddAgentsDialogComponent, selectors: [["findqo-add-agents-dialog"]], standalone: false, decls: 29, vars: 18, consts: [["otherError", ""], [1, "container", "p-0", "h-100"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "p-3"], ["appearance", "outline", 1, "w-100", "text-body-regular"], ["matInput", "", 1, "h-48px", 3, "keydown.enter", "formControl", "placeholder"], ["mat-button", "", "color", "primary", "disableRipple", "", "type", "submit", 1, "fg-prim-2", "text-body-regular", "lh-40px", "bg-basic-1", "disabled-ripple", 3, "click"], [1, "material-icons-round", "d-inline-block", "fs-18px"], ["class", "text-small-12px-regular", 4, "ngIf", "ngIfElse"], [1, "text-caption-regular"], [1, "mt-3", "email-container"], ["class", "agent-email text-caption-regular fg-general-5 mb-2", 4, "ngFor", "ngForOf"], ["class", "h-100 w-100 d-flex flex-column p-5 justify-content-center align-items-center", 4, "ngIf"], ["class", "p-3 dialog-actions", 4, "ngIf"], [1, "text-small-12px-regular"], ["class", "text-small-12px-regular", 4, "ngIf"], [1, "agent-email", "text-caption-regular", "fg-general-5", "mb-2"], [1, "ms-1", "me-2", "lh-27px", "d-inline-block"], ["mat-icon-button", "", "aria-label", "delete", "type", "button", 1, "d-inline-block", "w-auto", "align-middle", "me-2", 3, "click"], [1, "fs-16px", "fg-general-4"], [1, "h-100", "w-100", "d-flex", "flex-column", "p-5", "justify-content-center", "align-items-center"], [1, "fg-prim-2"], [1, "text-body-regular", "fg-general-4", "text-center", "mt-1"], [1, "p-3", "dialog-actions"], [3, "clicked", "btnType", "label", "btnClass"]], template: function AddAgentsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 5)(8, "mat-icon", 6);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "mat-form-field", 8)(12, "input", 9);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275listener("keydown.enter", function AddAgentsDialogComponent_Template_input_keydown_enter_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAddAgent());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 10);
        \u0275\u0275listener("click", function AddAgentsDialogComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAddAgent());
        });
        \u0275\u0275elementStart(15, "mat-icon", 11);
        \u0275\u0275text(16, "add_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, AddAgentsDialogComponent_mat_error_19_Template, 3, 3, "mat-error", 12)(20, AddAgentsDialogComponent_ng_template_20_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(22, "mat-hint", 13);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14);
        \u0275\u0275template(26, AddAgentsDialogComponent_div_26_Template, 6, 1, "div", 15)(27, AddAgentsDialogComponent_div_27_Template, 6, 3, "div", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, AddAgentsDialogComponent_div_28_Template, 3, 5, "div", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const otherError_r7 = \u0275\u0275reference(21);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "n3498"));
        \u0275\u0275advance(8);
        \u0275\u0275property("formControl", ctx.agentEmailControl)("placeholder", \u0275\u0275pipeBind1(13, 12, "n3496"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "n3488"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.agentEmailControl.hasError("existingEmail") && ctx.agentEmailControl.touched)("ngIfElse", otherError_r7);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "n3495"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.agents);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.agents.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agents.length);
      }
    }, dependencies: [NgForOf, NgIf, MatButton, MatIconButton, MatIcon, ButtonComponent, MatInput, MatFormField, MatHint, MatError, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n@media (max-width: 767.98px) {\n  .dialog-actions[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n  }\n}\n.disabled-ripple[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: unset;\n}\n.agent-email[_ngcontent-%COMP%] {\n  border-inline-start: 4px solid var(--prim-2);\n  border-radius: 4px;\n  background-color: rgba(255, 90, 184, 0.1);\n  width: fit-content;\n}\n.lh-27px[_ngcontent-%COMP%] {\n  line-height: 27px;\n}\n.email-container[_ngcontent-%COMP%] {\n  height: 318px;\n  overflow-y: auto;\n}\n.email-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 0;\n}\n.email-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--general-3);\n  border-radius: 20px;\n}\n.h-48px[_ngcontent-%COMP%] {\n  height: 48px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/add-agents-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddAgentsDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-add-agents-dialog", standalone: false, template: `<div class="container p-0 h-100">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3498' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<mat-form-field appearance="outline" class="w-100 text-body-regular">
			<input matInput [formControl]="agentEmailControl" (keydown.enter)="onAddAgent()" [placeholder]="'n3496' | translations" class="h-48px" />

			<button
				class="fg-prim-2 text-body-regular lh-40px bg-basic-1 disabled-ripple"
				mat-button
				color="primary"
				disableRipple
				(click)="onAddAgent()"
				type="submit"
			>
				<mat-icon class="material-icons-round d-inline-block fs-18px">add_circle</mat-icon>
				{{ 'n3488' | translations }}
			</button>

			<mat-error *ngIf="agentEmailControl.hasError('existingEmail') && agentEmailControl.touched; else otherError" class="text-small-12px-regular">
				{{ 'n3529' | translations }}
			</mat-error>

			<ng-template #otherError>
				<mat-error *ngIf="agentEmailControl.hasError('emailPattern') || agentEmailControl.hasError('emailRequired')" class="text-small-12px-regular">
					{{ 'n3487' | translations }}
				</mat-error>
			</ng-template>

			<mat-hint class="text-caption-regular">{{ 'n3495' | translations }}</mat-hint>
		</mat-form-field>

		<div class="mt-3 email-container">
			<div *ngFor="let email of agents; let i = index" class="agent-email text-caption-regular fg-general-5 mb-2">
				<span class="ms-1 me-2 lh-27px d-inline-block">{{ email }}</span>

				<button mat-icon-button aria-label="delete" class="d-inline-block w-auto align-middle me-2" (click)="deleteAgent(i)" type="button">
					<mat-icon class="fs-16px fg-general-4">close</mat-icon>
				</button>
			</div>

			<div *ngIf="!agents.length" class="h-100 w-100 d-flex flex-column p-5 justify-content-center align-items-center">
				<mat-icon class="fg-prim-2">add_circle</mat-icon>
				<p class="text-body-regular fg-general-4 text-center mt-1">{{ 'n3750' | translations }}</p>
			</div>
		</div>
	</div>

	<div class="p-3 dialog-actions" *ngIf="agents.length">
		<findqo-button
			[btnType]="buttonType.FILLED"
			[label]="'n3494' | translations"
			[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
			(clicked)="sendInvite()"
		></findqo-button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/add-agents-dialog/add-agents-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n@media (max-width: 767.98px) {\n  .dialog-actions {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n  }\n}\n.disabled-ripple {\n  height: 40px;\n  min-width: unset;\n}\n.agent-email {\n  border-inline-start: 4px solid var(--prim-2);\n  border-radius: 4px;\n  background-color: rgba(255, 90, 184, 0.1);\n  width: fit-content;\n}\n.lh-27px {\n  line-height: 27px;\n}\n.email-container {\n  height: 318px;\n  overflow-y: auto;\n}\n.email-container::-webkit-scrollbar {\n  width: 4px;\n  height: 0;\n}\n.email-container::-webkit-scrollbar-thumb {\n  background: var(--general-3);\n  border-radius: 20px;\n}\n.h-48px {\n  height: 48px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/add-agents-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: MyProfileFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddAgentsDialogComponent, { className: "AddAgentsDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/add-agents-dialog/add-agents-dialog.component.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/add-agents-dialog/add-agents-dialog.module.ts
var AddAgentsDialogModule = class _AddAgentsDialogModule {
  static {
    this.\u0275fac = function AddAgentsDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddAgentsDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AddAgentsDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddAgentsDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [AddAgentsDialogComponent],
      imports: [SharedModule, ButtonModule, MatInputModule, FormsModule, ReactiveFormsModule, MatDialogModule],
      exports: [AddAgentsDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/remove-agent-dialog/remove-agent-dialog.module.ts
var RemoveAgentDialogModule = class _RemoveAgentDialogModule {
  static {
    this.\u0275fac = function RemoveAgentDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoveAgentDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RemoveAgentDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveAgentDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [RemoveAgentDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [RemoveAgentDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-dialog/business-info-dialog.component.ts
var BusinessInfoDialogComponent = class _BusinessInfoDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function BusinessInfoDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessInfoDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessInfoDialogComponent, selectors: [["findqo-business-info-dialog"]], standalone: false, decls: 25, vars: 14, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "px-3", "py-4"], [1, "text-paragraph-regular", "fg-general-5"], [1, "row", "align-items-center", "fg-info-3", "p-2", "bg-info-1", "alert-info", "mt-4", "gap-2"], [1, "col-auto"], [1, "material-icons-outlined"], [1, "col", "text-body-regular"], [1, "p-3", "dialog-actions"], [3, "clicked", "btnType", "label", "btnClass"]], template: function BusinessInfoDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4)(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "mat-icon", 10);
        \u0275\u0275text(17, "info");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "span");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 12)(23, "findqo-button", 13);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275listener("clicked", function BusinessInfoDialogComponent_Template_findqo_button_clicked_23_listener() {
          return ctx.closeDialog();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "n3501"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "n3500"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 10, "n3499"));
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(24, 12, "n97"))("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.alert-info[_ngcontent-%COMP%] {\n  border: 1px solid var(--info-3);\n  border-radius: 4px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-info-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessInfoDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-business-info-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3501' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="px-3 py-4">
		<p class="text-paragraph-regular fg-general-5">{{ 'n3500' | translations }}</p>

		<div class="row align-items-center fg-info-3 p-2 bg-info-1 alert-info mt-4 gap-2">
			<div class="col-auto"><mat-icon class="material-icons-outlined">info</mat-icon></div>

			<div class="col text-body-regular">
				<span>{{ 'n3499' | translations }}</span>
			</div>
		</div>
	</div>

	<div class="p-3 dialog-actions">
		<findqo-button
			[btnType]="buttonType.FILLED"
			[label]="'n97' | translations"
			[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
			(clicked)="closeDialog()"
		></findqo-button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-dialog/business-info-dialog.component.scss */\n.alert-info {\n  border: 1px solid var(--info-3);\n  border-radius: 4px;\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/business-info-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessInfoDialogComponent, { className: "BusinessInfoDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-dialog/business-info-dialog.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-info-dialog/business-info-dialog.module.ts
var BusinessInfoDialogModule = class _BusinessInfoDialogModule {
  static {
    this.\u0275fac = function BusinessInfoDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessInfoDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BusinessInfoDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessInfoDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [BusinessInfoDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [BusinessInfoDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/cannot-remove-agent-dialog/cannot-remove-agent.module.ts
var CannotRemoveAgentDialogModule = class _CannotRemoveAgentDialogModule {
  static {
    this.\u0275fac = function CannotRemoveAgentDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CannotRemoveAgentDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CannotRemoveAgentDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CannotRemoveAgentDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [CannotRemoveAgentDialogComponent],
      imports: [SharedModule, MatDialogModule],
      exports: [CannotRemoveAgentDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/agent-profile/agent-profile.module.ts
var AgentProfileModule = class _AgentProfileModule {
  static {
    this.\u0275fac = function AgentProfileModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentProfileModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentProfileModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatMenuModule, BottomsheetModule, MatBottomSheetModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentProfileModule, [{
    type: NgModule,
    args: [{
      declarations: [AgentProfileComponent],
      imports: [SharedModule, MatMenuModule, BottomsheetModule, MatBottomSheetModule],
      exports: [AgentProfileComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/edit-profile-info-dialog/edit-profile-info-dialog.module.ts
var EditProfileInfoDialogModule = class _EditProfileInfoDialogModule {
  static {
    this.\u0275fac = function EditProfileInfoDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditProfileInfoDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditProfileInfoDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatIconModule, ReactiveFormsModule, FormsModule, MatInputModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProfileInfoDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [EditProfileInfoDialogComponent],
      imports: [SharedModule, MatIconModule, ReactiveFormsModule, FormsModule, MatInputModule, MatDialogModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/leave-agency-dialog/leave-agency-dialog.module.ts
var LeaveAgencyDialogModule = class _LeaveAgencyDialogModule {
  static {
    this.\u0275fac = function LeaveAgencyDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeaveAgencyDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LeaveAgencyDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveAgencyDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [LeaveAgencyDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [LeaveAgencyDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/business-agents-list/business-agents-list.module.ts
var BusinessAgentListModule = class _BusinessAgentListModule {
  static {
    this.\u0275fac = function BusinessAgentListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessAgentListModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _BusinessAgentListModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      MatTableModule,
      AddAgentsDialogModule,
      RemoveAgentDialogModule,
      BusinessInfoDialogModule,
      CannotRemoveAgentDialogModule,
      AgentProfileModule,
      EditProfileInfoDialogModule,
      LeaveAgencyDialogModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessAgentListModule, [{
    type: NgModule,
    args: [{
      declarations: [BusinessAgentsListComponent],
      imports: [
        SharedModule,
        MatTableModule,
        AddAgentsDialogModule,
        RemoveAgentDialogModule,
        BusinessInfoDialogModule,
        CannotRemoveAgentDialogModule,
        AgentProfileModule,
        EditProfileInfoDialogModule,
        LeaveAgencyDialogModule
      ],
      exports: [BusinessAgentsListComponent]
    }]
  }], null, null);
})();

export {
  EditProfileInfoDialogComponent,
  EditProfileInfoDialogModule,
  RemoveAgentDialogComponent,
  CannotRemoveAgentDialogComponent,
  LeaveAgencyDialogComponent,
  BusinessAgentsListComponent,
  AddAgentsDialogComponent,
  BusinessInfoDialogComponent,
  BusinessAgentListModule
};
//# sourceMappingURL=chunk-6Z3MPJNO.js.map
