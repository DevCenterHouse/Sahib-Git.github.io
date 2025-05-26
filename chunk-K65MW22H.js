import {
  AgentHubActions,
  EnquiryStatus
} from "./chunk-YL2NNRDT.js";
import {
  AdStampModule
} from "./chunk-744QYGBS.js";
import {
  MyAdStampComponent
} from "./chunk-UNPSDH5C.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  APP_ROUTE,
  AdPricePipe,
  AdStatus,
  MatButton,
  MatDivider,
  MatDividerModule,
  MatIconButton,
  RouterLink,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgIf,
  NgTemplateOutlet
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/components/ad-overview/ad-overview.component.ts
function AdOverviewComponent_button_10_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 16);
  }
}
function AdOverviewComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function AdOverviewComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick(ctx_r1.item, ctx_r1.dialogRef));
    });
    \u0275\u0275elementStart(1, "mat-icon", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275template(5, AdOverviewComponent_button_10_mat_spinner_5_Template, 1, 1, "mat-spinner", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("renew_ad", (ctx_r1.item == null ? null : ctx_r1.item.name) === "Renew Ad");
    \u0275\u0275property("ngClass", ctx_r1.item.textClass)("routerLink", ctx_r1.item == null ? null : ctx_r1.item.routerLink)("disabled", ctx_r1.isLoading && ctx_r1.loaderRef === ctx_r1.item.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.item == null ? null : ctx_r1.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.item == null ? null : ctx_r1.item.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading && ctx_r1.loaderRef === ctx_r1.item.reference);
  }
}
var AdOverviewComponent = class _AdOverviewComponent {
  constructor() {
    this.click = new EventEmitter();
    this.dialogRef = null;
    this.isLoading = false;
    this.loaderRef = null;
  }
  set options(data) {
    this.item = data.find((item) => item.name === "Renew Ad");
  }
  handleClick(item, ref) {
    if (ref) {
      ref?.dismiss(item);
    } else {
      this.click.emit(item);
    }
  }
  static {
    this.\u0275fac = function AdOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdOverviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdOverviewComponent, selectors: [["findqo-ad-overview"]], inputs: { ad: "ad", options: "options", isLoading: "isLoading", loaderRef: "loaderRef" }, outputs: { click: "click" }, standalone: false, decls: 11, vars: 7, consts: [[1, "p-3", "bg-basic-1", "rounded-8px"], [1, "heading-4-medium", "fg-general-5"], [1, "heading-3-medium", "fg-general-5", "mt-3"], [1, "heading-4-medium", "fg-prim-2", "my-2"], [1, "d-inline-flex", "d-md-none", "align-items-center", "gap-3"], [3, "adStatus"], ["mat-button", "", "class", "w-100 justify-content-start", 3, "ngClass", "renew_ad", "routerLink", "disabled", "click", 4, "ngIf"], ["mat-button", "", 1, "w-100", "justify-content-start", 3, "click", "ngClass", "routerLink", "disabled"], [1, "material-symbols-outlined"], [1, "d-inline-flex", "gap-1"], ["class", "spinner", 3, "diameter", 4, "ngIf"], [1, "spinner", 3, "diameter"]], template: function AdOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
        \u0275\u0275text(2, "Ad Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "h3", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h4", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "adPrice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275element(9, "findqo-my-ad-stamp", 5);
        \u0275\u0275template(10, AdOverviewComponent_button_10_Template, 6, 8, "button", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.ad.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, ctx.ad == null ? null : ctx.ad.price, ctx.ad == null ? null : ctx.ad.rentalPeriod));
        \u0275\u0275advance(3);
        \u0275\u0275property("adStatus", (tmp_2_0 = ctx.ad == null ? null : ctx.ad.adStatus == null ? null : ctx.ad.adStatus.status) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : "live");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ad.adStatus.status === "expired");
      }
    }, dependencies: [NgClass, NgIf, MatButton, MatIcon, RouterLink, MyAdStampComponent, MatProgressSpinner, AdPricePipe], styles: ["\n\n.renew_ad[_ngcontent-%COMP%] {\n  background-color: var(--prim-2) !important;\n  color: var(--basic-1) !important;\n  height: 27px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-overview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdOverviewComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-overview", standalone: false, template: `<div class="p-3 bg-basic-1 rounded-8px">
	<h4 class="heading-4-medium fg-general-5">Ad Overview</h4>

	<h3 class="heading-3-medium fg-general-5 mt-3">{{ ad.title }}</h3>
	<h4 class="heading-4-medium fg-prim-2 my-2">{{ ad?.price | adPrice: ad?.rentalPeriod }}</h4>

	<div class="d-inline-flex d-md-none align-items-center gap-3">
		<findqo-my-ad-stamp [adStatus]="ad?.adStatus?.status ?? 'live'"></findqo-my-ad-stamp>
		<button
			*ngIf="ad.adStatus.status === 'expired'"
			mat-button
			class="w-100 justify-content-start"
			[ngClass]="item.textClass"
			[class.renew_ad]="item?.name === 'Renew Ad'"
			[routerLink]="item?.routerLink"
			(click)="handleClick(item, dialogRef)"
			[disabled]="isLoading && loaderRef === item.reference"
		>
			<mat-icon class="material-symbols-outlined">{{ item?.icon }}</mat-icon>
			<span class="d-inline-flex gap-1">
				{{ item?.name }}
				<mat-spinner *ngIf="isLoading && loaderRef === item.reference" class="spinner" [diameter]="16"></mat-spinner>
			</span>
		</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/components/ad-overview/ad-overview.component.scss */\n.renew_ad {\n  background-color: var(--prim-2) !important;\n  color: var(--basic-1) !important;\n  height: 27px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-overview.component.css.map */\n"] }]
  }], null, { ad: [{
    type: Input
  }], click: [{
    type: Output
  }], options: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], loaderRef: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdOverviewComponent, { className: "AdOverviewComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/components/ad-overview/ad-overview.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/components/ad-overview/ad-overview.module.ts
var AdOverviewModule = class _AdOverviewModule {
  static {
    this.\u0275fac = function AdOverviewModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdOverviewModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdOverviewModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, AdStampModule, MatProgressSpinnerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdOverviewModule, [{
    type: NgModule,
    args: [{
      declarations: [AdOverviewComponent],
      imports: [SharedModule, AdStampModule, MatProgressSpinnerModule],
      exports: [AdOverviewComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/components/actions/actions.component.ts
var _c0 = (a0) => ({ "pt-3": a0 });
var _c1 = (a0) => ({ item: a0 });
function ActionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 7);
    \u0275\u0275listener("click", function ActionsComponent_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogRef == null ? null : ctx_r1.dialogRef.dismiss());
    });
    \u0275\u0275elementStart(2, "mat-icon", 8);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()()();
  }
}
function ActionsComponent_mat_divider_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 9);
  }
}
function ActionsComponent_For_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 5);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const routerLinkButton_r4 = \u0275\u0275reference(6);
    const actionButton_r5 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", item_r3.routerLink ? routerLinkButton_r4 : actionButton_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, item_r3));
  }
}
function ActionsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActionsComponent_For_4_ng_container_0_Template, 1, 4, "ng-container", 10);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", !item_r3.isHidden);
  }
}
function ActionsComponent_ng_template_5_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 16);
  }
}
function ActionsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ActionsComponent_ng_template_5_Template_button_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick(item_r7, ctx_r1.dialogRef));
    });
    \u0275\u0275elementStart(1, "mat-icon", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275template(5, ActionsComponent_ng_template_5_mat_spinner_5_Template, 1, 1, "mat-spinner", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("renew_ad", (item_r7 == null ? null : item_r7.name) === "Renew Ad");
    \u0275\u0275property("ngClass", item_r7.textClass)("routerLink", item_r7 == null ? null : item_r7.routerLink)("disabled", ctx_r1.isLoading && ctx_r1.loaderRef === item_r7.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7 == null ? null : item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7 == null ? null : item_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading && ctx_r1.loaderRef === item_r7.reference);
  }
}
function ActionsComponent_ng_template_7_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 16);
  }
}
function ActionsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ActionsComponent_ng_template_7_Template_button_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).item;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick(item_r9, ctx_r1.dialogRef));
    });
    \u0275\u0275elementStart(1, "mat-icon", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275template(5, ActionsComponent_ng_template_7_mat_spinner_5_Template, 1, 1, "mat-spinner", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", item_r9.textClass)("disabled", ctx_r1.isLoading && ctx_r1.loaderRef === item_r9.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9 == null ? null : item_r9.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r9 == null ? null : item_r9.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading && ctx_r1.loaderRef === item_r9.reference);
  }
}
var ActionsComponent = class _ActionsComponent {
  constructor() {
    this.isLoading = false;
    this.loaderRef = null;
    this.click = new EventEmitter();
    this.isBottomActionbar = false;
    this.appRoute = APP_ROUTE;
    this.dialogRef = null;
  }
  handleClick(item, ref) {
    if (ref) {
      ref?.dismiss(item);
    } else {
      this.click.emit(item);
    }
  }
  static {
    this.\u0275fac = function ActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionsComponent, selectors: [["findqo-actions"]], inputs: { ad: "ad", options: "options", isLoading: "isLoading", loaderRef: "loaderRef" }, outputs: { click: "click" }, standalone: false, decls: 9, vars: 5, consts: [["routerLinkButton", ""], ["actionButton", ""], [1, "bg-basic-1", "rounded-8px", "px-3", "pb-3", 3, "ngClass"], ["class", "bottombar-header text-end", 4, "ngIf"], ["class", "-mx-3", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "bottombar-header", "text-end"], ["mat-icon-button", "", "disableRipple", "", 1, "justify-content-start", "text-body-regular", "fg-error-3", 3, "click"], [1, "material-symbols-outlined", "fg-general-2"], [1, "-mx-3"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["mat-button", "", 1, "w-100", "justify-content-start", 3, "click", "ngClass", "routerLink", "disabled"], [1, "material-symbols-outlined"], [1, "d-inline-flex", "gap-1"], ["class", "spinner", 3, "diameter", 4, "ngIf"], [1, "spinner", 3, "diameter"], ["mat-button", "", 1, "w-100", "justify-content-start", 3, "click", "ngClass", "disabled"]], template: function ActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, ActionsComponent_div_1_Template, 4, 0, "div", 3)(2, ActionsComponent_mat_divider_2_Template, 1, 0, "mat-divider", 4);
        \u0275\u0275repeaterCreate(3, ActionsComponent_For_4_Template, 1, 1, "ng-container", 5, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ActionsComponent_ng_template_5_Template, 6, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, ActionsComponent_ng_template_7_Template, 6, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, !ctx.isBottomActionbar));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isBottomActionbar);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isBottomActionbar);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.options);
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatButton, MatIconButton, MatIcon, RouterLink, MatDivider, MatProgressSpinner], styles: ["\n\n.rounded-8px[_ngcontent-%COMP%] {\n  border-radius: 8px !important;\n}\n.bottombar-header[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n.bottombar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n}\n.bottombar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.-mx-3[_ngcontent-%COMP%] {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n@media (min-width: 768px) {\n  .renew_ad[_ngcontent-%COMP%] {\n    background-color: var(--prim-2) !important;\n    color: var(--basic-1) !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/actions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsComponent, [{
    type: Component,
    args: [{ selector: "findqo-actions", standalone: false, template: `<div class="bg-basic-1 rounded-8px px-3 pb-3" [ngClass]="{ 'pt-3': !isBottomActionbar }">
	<div class="bottombar-header text-end" *ngIf="isBottomActionbar">
		<button mat-icon-button class="justify-content-start text-body-regular fg-error-3" disableRipple (click)="dialogRef?.dismiss()">
			<mat-icon class="material-symbols-outlined fg-general-2">close</mat-icon>
		</button>
	</div>

	<mat-divider class="-mx-3" *ngIf="isBottomActionbar"></mat-divider>

	@for (item of options; track $index) {
		<ng-container
			*ngIf="!item.isHidden"
			[ngTemplateOutlet]="item.routerLink ? routerLinkButton : actionButton"
			[ngTemplateOutletContext]="{ item }"
		></ng-container>
	}
</div>

<ng-template #routerLinkButton let-item="item">
	<button
		mat-button
		class="w-100 justify-content-start"
		[ngClass]="item.textClass"
		[class.renew_ad]="item?.name === 'Renew Ad'"
		[routerLink]="item?.routerLink"
		(click)="handleClick(item, dialogRef)"
		[disabled]="isLoading && loaderRef === item.reference"
	>
		<mat-icon class="material-symbols-outlined">{{ item?.icon }}</mat-icon>
		<span class="d-inline-flex gap-1">
			{{ item?.name }}
			<mat-spinner *ngIf="isLoading && loaderRef === item.reference" class="spinner" [diameter]="16"></mat-spinner>
		</span>
	</button>
</ng-template>

<ng-template #actionButton let-item="item">
	<button
		mat-button
		class="w-100 justify-content-start"
		[ngClass]="item.textClass"
		(click)="handleClick(item, dialogRef)"
		[disabled]="isLoading && loaderRef === item.reference"
	>
		<mat-icon class="material-symbols-outlined">{{ item?.icon }}</mat-icon>
		<span class="d-inline-flex gap-1">
			{{ item?.name }}
			<mat-spinner *ngIf="isLoading && loaderRef === item.reference" class="spinner" [diameter]="16"></mat-spinner>
		</span>
	</button>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/components/actions/actions.component.scss */\n.rounded-8px {\n  border-radius: 8px !important;\n}\n.bottombar-header {\n  height: 50px;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n.bottombar-header button {\n  width: fit-content;\n  height: fit-content;\n}\n.bottombar-header button mat-icon {\n  font-size: 18px !important;\n}\n.-mx-3 {\n  margin-left: -16px !important;\n  margin-right: -16px !important;\n}\n@media (min-width: 768px) {\n  .renew_ad {\n    background-color: var(--prim-2) !important;\n    color: var(--basic-1) !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/actions.component.css.map */\n"] }]
  }], () => [], { ad: [{
    type: Input
  }], options: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], loaderRef: [{
    type: Input
  }], click: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionsComponent, { className: "ActionsComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/components/actions/actions.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/components/actions/actions.module.ts
var ActionsModule = class _ActionsModule {
  static {
    this.\u0275fac = function ActionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ActionsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, MatProgressSpinnerModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsModule, [{
    type: NgModule,
    args: [{
      declarations: [ActionsComponent],
      imports: [SharedModule, MatDividerModule, MatProgressSpinnerModule],
      exports: [ActionsComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/constants/agent-hub-actions.constant.ts
var AD_DETAIL_ACTIONS = (ad) => [
  {
    name: "Renew Ad",
    routerLink: `/${APP_ROUTE?.editAd}/${ad?.id}`,
    icon: "sync",
    canCloseDialog: true,
    reference: AgentHubActions.RENEW_AD,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ![AdStatus.EXPIRED].includes(ad.adStatus.status)
  },
  {
    name: "Edit Ad",
    routerLink: `/${APP_ROUTE?.editAd}/${ad?.id}`,
    icon: "edit",
    canCloseDialog: true,
    reference: AgentHubActions.EDIT,
    textClass: "fg-general-5 text-body-regular",
    isHidden: [AdStatus.PROPERTY_OCCUPIED].includes(ad.adStatus.status) || [AdStatus.EXPIRED].includes(ad.adStatus.status)
  },
  {
    name: "View ad on web",
    link: ad?.adlink,
    icon: "language",
    isExternal: true,
    canCloseDialog: false,
    reference: AgentHubActions.VIEW_AD_ON_WEB,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ![AdStatus.LIVE, AdStatus.PROPERTY_OCCUPIED].includes(ad.adStatus.status)
  },
  {
    name: "Share Ad",
    icon: "share",
    canCloseDialog: true,
    reference: AgentHubActions.SHARE_AD,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ![AdStatus.LIVE, AdStatus.PROPERTY_OCCUPIED].includes(ad.adStatus.status)
  },
  {
    name: "See all activities",
    icon: "open_in_new",
    isHidden: true,
    isExternal: true,
    canCloseDialog: false,
    reference: AgentHubActions.SEE_ACTIVITY,
    textClass: "fg-general-5 text-body-regular"
  },
  {
    name: "Unpublish Ad",
    icon: "pause_circle_outline",
    canCloseDialog: false,
    reference: AgentHubActions.UNPUBLISH_AD,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ![AdStatus.LIVE, AdStatus.PROPERTY_OCCUPIED].includes(ad.adStatus.status)
  },
  {
    name: "Publish Ad",
    icon: "play_circle_outline",
    canCloseDialog: false,
    reference: AgentHubActions.PUBLISH_AD,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ad.adStatus.status !== AdStatus.UNPUBLISH
  },
  {
    name: "Mark as Occupied",
    icon: "check_box",
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_OCCUPIED,
    textClass: "fg-general-5 text-body-regular",
    isHidden: !(["properties-for-rent"].includes(ad.section.reference) && ad.adStatus.status !== AdStatus.PROPERTY_OCCUPIED) || [AdStatus.EXPIRED].includes(ad.adStatus.status)
  },
  {
    name: "Mark as Available",
    icon: "timer",
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_AVAILABLE,
    textClass: "fg-general-5 text-body-regular",
    isHidden: !(["properties-for-rent"].includes(ad.section.reference) && ad.adStatus.status === AdStatus.PROPERTY_OCCUPIED)
  },
  {
    name: "Mark as Sale Agreed",
    icon: "check_box",
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_SALE_AGREED,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ["properties-for-rent"].includes(ad.section.reference) || ["properties-for-sale"].includes(ad.section.reference) && ad.adStatus.status === AdStatus.SALE_AGREED || [AdStatus.EXPIRED].includes(ad.adStatus.status)
  },
  {
    name: "Mark as Available",
    icon: "timer",
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_AVAILABLE,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ["properties-for-rent"].includes(ad.section.reference) || ["properties-for-sale"].includes(ad.section.reference) && ad.adStatus.status !== AdStatus.SALE_AGREED
  },
  {
    name: "Mark as Sold",
    icon: "sell",
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_SOLD,
    textClass: "fg-general-5 text-body-regular",
    isHidden: ["properties-for-rent"].includes(ad.section.reference) || ["properties-for-sale"].includes(ad.section.reference) && ad.adStatus.status === AdStatus.SOLD || [AdStatus.EXPIRED].includes(ad.adStatus.status)
  },
  {
    name: "Delete Ad",
    icon: "archive",
    canCloseDialog: false,
    reference: AgentHubActions.DELETE_AD,
    textClass: "fg-error-3 text-body-regular"
  }
];
var ENQUIRY_DETAIL_ACTIONS = (enquiry) => [
  {
    name: "View tenancy resume",
    icon: "open_in_new",
    link: enquiry?.tenantin?.tenantResumeUrl,
    isHidden: !enquiry?.tenantin?.tenantResumeUrl,
    isExternal: true,
    canCloseDialog: false,
    reference: AgentHubActions.VIEW_TENANCY_RESUME,
    textClass: "fg-general-5 text-body-regular"
  },
  {
    name: "View ad on web",
    link: enquiry?.ad?.adlink,
    icon: "language",
    isExternal: true,
    canCloseDialog: false,
    reference: AgentHubActions.VIEW_AD_ON_WEB,
    textClass: "fg-general-5 text-body-regular"
  },
  {
    name: "Mark as pending",
    icon: "timer",
    isExternal: false,
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_PENDING,
    isHidden: enquiry.completionStatus === EnquiryStatus.PENDING,
    value: EnquiryStatus.PENDING,
    textClass: "fg-general-5 text-body-regular"
  },
  {
    name: "Mark as completed",
    icon: "check_box",
    isExternal: false,
    canCloseDialog: false,
    reference: AgentHubActions.MARK_AS_COMPLETED,
    isHidden: enquiry.completionStatus === EnquiryStatus.COMPLETED,
    value: EnquiryStatus.COMPLETED,
    textClass: "fg-general-5 text-body-regular"
  }
];

export {
  ActionsComponent,
  AD_DETAIL_ACTIONS,
  ENQUIRY_DETAIL_ACTIONS,
  AdOverviewComponent,
  AdOverviewModule,
  ActionsModule
};
//# sourceMappingURL=chunk-K65MW22H.js.map
