import {
  MatBottomSheetRef
} from "./chunk-2KWNZOXB.js";
import {
  FiltersFacade
} from "./chunk-2RKTIM73.js";
import {
  FiltersService
} from "./chunk-C3BHYCVX.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  ButtonComponent,
  ButtonType,
  CdkPortal,
  CommonUtil,
  FilterType,
  FormBuilder,
  Overlay,
  OverlayConfig,
  TemplatePortalDirective
} from "./chunk-DMGY2MF4.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  SlicePipe
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Optional,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/cdk-dropdown/cdk-dropdown.component.ts
var _c0 = ["*"];
function CdkDropdownComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var CdkDropdownComponent = class _CdkDropdownComponent {
  constructor(overlay) {
    this.overlay = overlay;
    this.isDropdownOpen = false;
  }
  onWinResize() {
    this.syncWidth();
  }
  show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.isDropdownOpen = true;
  }
  hide() {
    this.overlayRef.detach();
    this.isDropdownOpen = false;
  }
  getOverlayConfig() {
    const POSITION_STRATEGY = this.overlay.position().flexibleConnectedTo(this.reference).withPush(false).withPositions([
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      }
    ]);
    const SCROLL_STRATEGY = this.overlay.scrollStrategies.reposition();
    return new OverlayConfig({
      positionStrategy: POSITION_STRATEGY,
      scrollStrategy: SCROLL_STRATEGY,
      hasBackdrop: true,
      backdropClass: "cdk-overlay-transparent-backdrop"
    });
  }
  syncWidth() {
    if (!this.overlayRef) {
      return;
    }
    const REF_RECT = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({ width: REF_RECT.width });
  }
  destroyDropdown() {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }
    this.isDropdownOpen = false;
    this.overlayRef.detach();
  }
  ngOnDestroy() {
    this.destroyDropdown();
  }
  static {
    this.\u0275fac = function CdkDropdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDropdownComponent)(\u0275\u0275directiveInject(Overlay));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CdkDropdownComponent, selectors: [["findqo-cdk-dropdown"]], viewQuery: function CdkDropdownComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkPortal, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
      }
    }, hostBindings: function CdkDropdownComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function CdkDropdownComponent_resize_HostBindingHandler() {
          return ctx.onWinResize();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { reference: "reference" }, standalone: false, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [["cdk-portal", ""]], template: function CdkDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, CdkDropdownComponent_ng_template_0_Template, 1, 0, "ng-template", 0);
      }
    }, dependencies: [TemplatePortalDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropdownComponent, [{
    type: Component,
    args: [{
      selector: "findqo-cdk-dropdown",
      template: `
		<ng-template cdk-portal>
			<ng-content></ng-content>
		</ng-template>
	`,
      standalone: false
    }]
  }], () => [{ type: Overlay }], { reference: [{
    type: Input
  }], contentTemplate: [{
    type: ViewChild,
    args: [CdkPortal]
  }], onWinResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CdkDropdownComponent, { className: "CdkDropdownComponent", filePath: "apps/findqo-ireland/src/app/shared/components/cdk-dropdown/cdk-dropdown.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/general/filters/components/filters-sort/filters-sort.component.ts
function FiltersSortComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header")(1, "div", 4)(2, "div", 5)(3, "span");
    \u0275\u0275text(4, "Sort");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "findqo-button", 6);
    \u0275\u0275listener("clicked", function FiltersSortComponent_header_2_Template_findqo_button_clicked_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("btnType", ctx_r1.buttonType.ICON);
  }
}
function FiltersSortComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "findqo-button", 8);
    \u0275\u0275listener("clicked", function FiltersSortComponent_div_3_Template_findqo_button_clicked_1_listener() {
      const sort_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSort(sort_r4));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sort_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("iconSuffix", sort_r4.reference === (ctx_r1.fc == null ? null : ctx_r1.fc["sort"].value) ? "check" : "")("label", sort_r4.name);
  }
}
var FiltersSortComponent = class _FiltersSortComponent {
  constructor(bottomSheetRef, filtersService, filtersFacade, fb) {
    this.bottomSheetRef = bottomSheetRef;
    this.filtersService = filtersService;
    this.filtersFacade = filtersFacade;
    this.fb = fb;
    this.isOpen = false;
    this.selectSort = new EventEmitter();
    this.form = this.fb.group({
      [FilterType.SORT]: []
    });
    this.hasHeader = false;
    this.buttonType = ButtonType;
    this.sortList$ = this.filtersFacade.getSortList$();
  }
  // Easy getter for the form controls
  get fc() {
    return this.form?.controls;
  }
  onSort(sort) {
    this.fc?.[FilterType.SORT].patchValue(sort?.reference);
    this.filtersService.updateRoute();
    if (this.bottomSheetRef) {
      this.bottomSheetRef.dismiss(sort?.reference);
    } else {
      this.selectSort.emit(sort?.reference);
    }
  }
  onClose() {
    this.bottomSheetRef.dismiss();
  }
  initDeclarations() {
    this.hasHeader = !!this.bottomSheetRef;
    if (this.bottomSheetRef) {
      this.form = this.filtersService.getFiltersForm();
    }
  }
  ngOnInit() {
    this.initDeclarations();
  }
  ngOnChanges(changes) {
    CommonUtil.handleNgOnChanges(changes["isOpen"], () => {
      if (this.isOpen) {
        this.form = this.filtersService.getFiltersForm();
      }
    });
  }
  static {
    this.\u0275fac = function FiltersSortComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersSortComponent)(\u0275\u0275directiveInject(MatBottomSheetRef, 8), \u0275\u0275directiveInject(FiltersService), \u0275\u0275directiveInject(FiltersFacade), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiltersSortComponent, selectors: [["findqo-filters-sort"]], inputs: { isOpen: "isOpen" }, outputs: { selectSort: "selectSort" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService]), \u0275\u0275NgOnChangesFeature], decls: 6, vars: 7, consts: [[1, "container-fluid", "h-100", "p-0"], [1, "d-flex", "flex-column", "h-100"], [4, "ngIf"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "option", "row", "justify-content-between", "align-items-center", "py-3"], [1, "col"], ["ariaLabel", "back", "iconPrefix", "xmark-solid", 1, "c-btn--icon", "back", "ms-auto", 3, "clicked", "btnType"], [1, "option"], ["btnClass", "w-100", "ariaLabel", "filter option", 1, "option", 3, "clicked", "btnType", "iconSuffix", "label"]], template: function FiltersSortComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, FiltersSortComponent_header_2_Template, 7, 1, "header", 2)(3, FiltersSortComponent_div_3_Template, 2, 3, "div", 3);
        \u0275\u0275pipe(4, "async");
        \u0275\u0275pipe(5, "slice");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hasHeader);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 4, \u0275\u0275pipeBind1(4, 2, ctx.sortList$), 1));
      }
    }, dependencies: [NgForOf, NgIf, ButtonComponent, AsyncPipe, SlicePipe], styles: ["\n\n.container-fluid[_ngcontent-%COMP%] {\n  min-width: 200px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-sort.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersSortComponent, [{
    type: Component,
    args: [{ selector: "findqo-filters-sort", providers: [DestroyService], standalone: false, template: `<div class="container-fluid h-100 p-0">
	<div class="d-flex flex-column h-100">
		<header *ngIf="hasHeader">
			<div class="option row justify-content-between align-items-center py-3">
				<div class="col">
					<span>Sort</span>
				</div>

				<!-- Close -->
				<div class="col">
					<findqo-button
						class="c-btn--icon back ms-auto"
						ariaLabel="back"
						iconPrefix="xmark-solid"
						[btnType]="buttonType.ICON"
						(clicked)="onClose()"
					></findqo-button>
				</div>
			</div>
		</header>

		<div *ngFor="let sort of sortList$ | async | slice: 1" class="option">
			<findqo-button
				class="option"
				btnClass="w-100"
				ariaLabel="filter option"
				[btnType]="buttonType.BASIC"
				[iconSuffix]="sort.reference === fc?.['sort'].value ? 'check' : ''"
				[label]="sort.name"
				(clicked)="onSort(sort)"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/filters/components/filters-sort/filters-sort.component.scss */\n.container-fluid {\n  min-width: 200px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-sort.component.css.map */\n"] }]
  }], () => [{ type: MatBottomSheetRef, decorators: [{
    type: Optional
  }] }, { type: FiltersService }, { type: FiltersFacade }, { type: FormBuilder }], { isOpen: [{
    type: Input
  }], selectSort: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiltersSortComponent, { className: "FiltersSortComponent", filePath: "apps/findqo-ireland/src/app/feature/general/filters/components/filters-sort/filters-sort.component.ts", lineNumber: 20 });
})();

export {
  CdkDropdownComponent,
  FiltersSortComponent
};
//# sourceMappingURL=chunk-5VDMSC62.js.map
