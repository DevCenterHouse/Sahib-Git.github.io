import {
  SortMenuComponent,
  SortMenuModule
} from "./chunk-5BXPKUE4.js";
import {
  AgentAdItemComponent,
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule
} from "./chunk-O7H3FI37.js";
import {
  AgentHubFacade
} from "./chunk-XVUCQVKR.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-62PZKBP3.js";
import {
  LimitReachedDialogComponent
} from "./chunk-ZUTZZPFZ.js";
import {
  SubscriptionOfferDialogComponent
} from "./chunk-QRKYK676.js";
import {
  MatMenu,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-34NPCBBY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AdStatusFormatPipe,
  AuthService,
  ButtonModule,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  LIMITED_COUPON_CODE,
  MatBadgeModule,
  MatButton,
  MatDialog,
  MatDialogRef,
  MatDivider,
  MatDividerModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatMiniFabButton,
  MatOption,
  MyProfileFacade,
  NgControlStatus,
  NgControlStatusGroup,
  PlaceAdFacade,
  ReactiveFormsModule,
  Router,
  RouterModule,
  SectionsState,
  SharedModule,
  SubscriptionTier,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  ElementRef,
  NgModule,
  Subject,
  ViewChild,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  map,
  setClassMetadata,
  switchMap,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/components/filters-listings/filters-listings.component.ts
function FiltersListingsComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aisle_r1 = ctx.$implicit;
    \u0275\u0275property("value", aisle_r1 == null ? null : aisle_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(aisle_r1 == null ? null : aisle_r1.name);
  }
}
function FiltersListingsComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    \u0275\u0275property("value", status_r2 == null ? null : status_r2.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r2 == null ? null : status_r2.name, " ");
  }
}
var FiltersListingsComponent = class _FiltersListingsComponent {
  constructor(dialogRef, agentHubFacade, router, route, sectionState) {
    this.dialogRef = dialogRef;
    this.agentHubFacade = agentHubFacade;
    this.router = router;
    this.route = route;
    this.sectionState = sectionState;
    this.statusList$ = this.agentHubFacade.getAdsStatusList$();
    this.agentList$ = this.agentHubFacade.getAgentList$();
    this.form = new FormGroup({
      aisleId: new FormControl(),
      agentId: new FormControl(),
      isFeatured: new FormControl(),
      status: new FormControl()
    });
  }
  onApplyFilters() {
    const values = this.form.value;
    const queryParams = {};
    queryParams.page = 1;
    queryParams.perPage = 25;
    if (values?.aisleId) {
      queryParams.aisleId = values?.aisleId === "clear" ? null : values?.aisleId;
    } else {
      queryParams.aisleId = null;
    }
    if (values?.agentId) {
      const agentId = values?.agentId.join(",");
      queryParams.agentId = agentId ? agentId : null;
    } else {
      queryParams.agentId = null;
    }
    if (values?.status) {
      queryParams.status = values?.status === "clear" ? null : values?.status;
    } else {
      queryParams.status = null;
    }
    if (values?.isFeatured) {
      queryParams.isFeatured = values?.isFeatured === "clear" ? null : values?.isFeatured;
    } else {
      queryParams.businessUserId = null;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: "merge"
    });
    this.dialogRef.close();
  }
  onClearFilters() {
    this.form.reset();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        aisleId: null,
        agentId: null,
        isFeatured: null,
        status: null
      },
      queryParamsHandling: "merge"
    });
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
  getAisleList() {
    const rentAisles = this.sectionState.getSection("properties-for-rent").aisles;
    const saleAisles = this.sectionState.getSection("properties-for-sale").aisles;
    rentAisles.forEach((aisle) => {
      if (aisle.reference === "rent-commercial" && !aisle.name.startsWith("Rent ")) {
        aisle.name = "Rent " + aisle.name;
      }
    });
    saleAisles.forEach((aisle) => {
      if (!aisle.name.startsWith("Buy ")) {
        aisle.name = "Buy " + aisle.name;
      }
    });
    this.aisleList = [...rentAisles, ...saleAisles];
  }
  ngOnInit() {
    this.getAisleList();
    this.route.queryParams.subscribe((params) => {
      this.form.patchValue({
        aisleId: params["aisleId"] ? params["aisleId"] : null,
        agentId: params["agentId"] ? params["agentId"].split(",") : [],
        status: params["status"] ? params["status"] : null,
        isFeatured: params["isFeatured"] ? params["isFeatured"] : null
      });
    });
  }
  static {
    this.\u0275fac = function FiltersListingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersListingsComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SectionsState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiltersListingsComponent, selectors: [["findqo-filters-listings"]], standalone: false, decls: 46, vars: 14, consts: [[1, "inquiry-container", "h-100", "bg-general-1"], [1, "row", "justify-content-between", "align-items-center", "position-fixed", "top-0", "inquiry-header", "border-bottom", "w-100", "bg-general-1", "px-3"], [1, "col"], [1, "heading-4-regular", "fg-general-5"], [1, "col-auto"], ["mat-mini-fab", "", "aria-label", "close button", "disableRipple", "", "type", "button", 1, "bg-general-1", "close-btn", 3, "click"], [1, "fg-general-4", "icon-20px"], [1, "p-3", 3, "formGroup"], [1, "p-3", "rounded", "bg-basic-1", "mb-3"], [1, "fg-general-5", "text-body-regular", "d-block", "mb-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "text-body-regular"], ["formControlName", "aisleId", 3, "placeholder"], [1, "fs-14px", "lh-18px", "fw-400", 3, "value"], [3, "value"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "isFeatured", 1, "text-body-regular", 3, "panelClass", "placeholder"], ["formControlName", "status", 1, "text-body-regular", 3, "panelClass", "placeholder"], ["class", "fs-14px lh-18px fw-400", 3, "value", 4, "ngFor", "ngForOf"], [1, "row", "border-top", "p-3", "gap-3", "bg-general-1"], ["mat-button", "", 1, "fg-prim-2", "text-body-regular", 3, "click"], ["mat-button", "", 1, "bg-prim-2", "fg-basic-1", "text-body-regular", "w-100", 3, "click"]], template: function FiltersListingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275listener("click", function FiltersListingsComponent_Template_button_click_6_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(7, "mat-icon", 6);
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "mat-label", 9);
        \u0275\u0275text(12, "Ad type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 10)(14, "mat-select", 11)(15, "mat-option", 12);
        \u0275\u0275text(16, "Any");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(17, FiltersListingsComponent_For_18_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 8)(20, "mat-label", 9);
        \u0275\u0275text(21, "Ad tier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 14)(23, "mat-select", 15)(24, "mat-option", 12);
        \u0275\u0275text(25, "Any");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 12);
        \u0275\u0275text(27, "Standard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 12);
        \u0275\u0275text(29, "Featured");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 8)(31, "mat-label", 9);
        \u0275\u0275text(32, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 14)(34, "mat-select", 16)(35, "mat-option", 12);
        \u0275\u0275text(36, "Any");
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, FiltersListingsComponent_mat_option_37_Template, 2, 2, "mat-option", 17);
        \u0275\u0275pipe(38, "async");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 18)(40, "div", 4)(41, "button", 19);
        \u0275\u0275listener("click", function FiltersListingsComponent_Template_button_click_41_listener() {
          return ctx.onClearFilters();
        });
        \u0275\u0275text(42, "Clear filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 2)(44, "button", 20);
        \u0275\u0275listener("click", function FiltersListingsComponent_Template_button_click_44_listener() {
          return ctx.onApplyFilters();
        });
        \u0275\u0275text(45, "Show results");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", "Any");
        \u0275\u0275advance();
        \u0275\u0275property("value", "clear");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.aisleList);
        \u0275\u0275advance(6);
        \u0275\u0275property("panelClass", "search-dropdown-selection")("placeholder", "Any");
        \u0275\u0275advance();
        \u0275\u0275property("value", "clear");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "0");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "1");
        \u0275\u0275advance(6);
        \u0275\u0275property("panelClass", "search-dropdown-selection")("placeholder", "Any");
        \u0275\u0275advance();
        \u0275\u0275property("value", "clear");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(38, 12, ctx.statusList$));
      }
    }, dependencies: [NgForOf, MatButton, MatMiniFabButton, MatIcon, MatFormField, MatLabel, MatSelect, MatOption, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AsyncPipe], styles: ["\n\n.inquiry-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-top: 60px;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.inquiry-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.inquiry-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.inquiry-header[_ngcontent-%COMP%] {\n  height: 60px;\n  max-width: 400px;\n  z-index: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset !important;\n}\n.icon-20px[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.filter[_ngcontent-%COMP%] {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-listings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersListingsComponent, [{
    type: Component,
    args: [{ selector: "findqo-filters-listings", standalone: false, template: `<div class="inquiry-container h-100 bg-general-1">
	<div class="row justify-content-between align-items-center position-fixed top-0 inquiry-header border-bottom w-100 bg-general-1 px-3">
		<div class="col">
			<span class="heading-4-regular fg-general-5">Filters</span>
		</div>

		<div class="col-auto">
			<button mat-mini-fab class="bg-general-1 close-btn" aria-label="close button" disableRipple type="button" (click)="close()">
				<mat-icon class="fg-general-4 icon-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div [formGroup]="form" class="p-3">
		<div class="p-3 rounded bg-basic-1 mb-3">
			<mat-label class="fg-general-5 text-body-regular d-block mb-2">Ad type</mat-label>

			<mat-form-field appearance="outline" class="text-body-regular" subscriptSizing="dynamic">
				<mat-select formControlName="aisleId" [placeholder]="'Any'">
					<mat-option [value]="'clear'" class="fs-14px lh-18px fw-400">Any</mat-option>
					@for (aisle of aisleList; track aisle) {
						<mat-option [value]="aisle?.id">{{ aisle?.name }}</mat-option>
					}
				</mat-select>
			</mat-form-field>
		</div>

		<div class="p-3 rounded bg-basic-1 mb-3">
			<mat-label class="fg-general-5 text-body-regular d-block mb-2">Ad tier</mat-label>

			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<mat-select [panelClass]="'search-dropdown-selection'" class="text-body-regular" formControlName="isFeatured" [placeholder]="'Any'">
					<mat-option [value]="'clear'" class="fs-14px lh-18px fw-400">Any</mat-option>
					<mat-option [value]="'0'" class="fs-14px lh-18px fw-400">Standard</mat-option>
					<mat-option [value]="'1'" class="fs-14px lh-18px fw-400">Featured</mat-option>
				</mat-select>
			</mat-form-field>
		</div>

		<div class="p-3 rounded bg-basic-1 mb-3">
			<mat-label class="fg-general-5 text-body-regular d-block mb-2">Status</mat-label>

			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<mat-select [panelClass]="'search-dropdown-selection'" class="text-body-regular" formControlName="status" [placeholder]="'Any'">
					<mat-option [value]="'clear'" class="fs-14px lh-18px fw-400">Any</mat-option>
					<mat-option *ngFor="let status of statusList$ | async" [value]="status?.reference" class="fs-14px lh-18px fw-400">
						{{ status?.name }}
					</mat-option>
				</mat-select>
			</mat-form-field>
		</div>

		<!-- <div class="p-3 rounded bg-basic-1 mb-3">
			<mat-label class="fg-general-5 text-body-regular d-block mb-2">Assigned to</mat-label>

			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<mat-select [panelClass]="'search-dropdown-selection'" class="text-body-regular" multiple formControlName="agentId" [placeholder]="'Any'">
					<mat-option *ngFor="let agent of agentList$ | async" [value]="agent?.id" class="fs-14px lh-18px fw-400">{{ agent?.name }}</mat-option>
				</mat-select>
			</mat-form-field>
		</div> -->
	</div>
</div>

<div class="row border-top p-3 gap-3 bg-general-1">
	<div class="col-auto">
		<button mat-button class="fg-prim-2 text-body-regular" (click)="onClearFilters()">Clear filters</button>
	</div>

	<div class="col">
		<button mat-button class="bg-prim-2 fg-basic-1 text-body-regular w-100" (click)="onApplyFilters()">Show results</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/components/filters-listings/filters-listings.component.scss */\n.inquiry-container {\n  overflow-y: auto;\n  padding-top: 60px;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.inquiry-container::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.inquiry-container::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.inquiry-header {\n  height: 60px;\n  max-width: 400px;\n  z-index: 2;\n}\n.close-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset !important;\n}\n.icon-20px {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.filter {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-listings.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: AgentHubFacade }, { type: Router }, { type: ActivatedRoute }, { type: SectionsState }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiltersListingsComponent, { className: "FiltersListingsComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/components/filters-listings/filters-listings.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/listings.component.ts
var _c0 = (a0, a1) => ({ usersMetaData: a0, isLoading: a1 });
var _c1 = () => ["live", "property-occupied", "sale-agreed", "sold"];
function ListingsComponent_ng_container_0_ng_container_1_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2);
  }
}
function ListingsComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 8);
    \u0275\u0275text(2, "Your Listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "span", 11);
    \u0275\u0275text(6, "You do not have any listings yet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ListingsComponent_ng_container_0_ng_container_1_div_1_div_7_Template, 5, 1, "div", 12);
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_container_1_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPlaceAd());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Add New Listing ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.noItems);
  }
}
function ListingsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ListingsComponent_ng_container_0_ng_container_1_div_1_Template, 12, 1, "div", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r4.isLoading);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 59);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_template_2_mat_icon_12_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onClearSearch());
    });
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.filterCount);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-icon", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.columnType == null ? null : ctx_r2.columnType.direction) === "asc" ? "arrow_upward" : "arrow_downward");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_Conditional_31_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_template_2_Conditional_31_ng_container_0_Template_div_click_1_listener() {
      const listing_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onViewAd(listing_r9));
    });
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275element(3, "findqo-agent-ad-item", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "mat-icon", 66);
    \u0275\u0275text(6, "arrow_forward_ios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const listing_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("listing", listing_r9);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListingsComponent_ng_container_0_ng_template_2_Conditional_31_ng_container_0_Template, 7, 1, "ng-container", 62);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngForOf", ctx_r2.dataSource == null ? null : ctx_r2.dataSource.data);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_Conditional_32_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ListingsComponent_ng_container_0_ng_template_2_Conditional_32_span_0_Template, 2, 0, "span", 67);
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !vm_r4.isLoading && (ctx_r2.dataSource == null ? null : ctx_r2.dataSource.data == null ? null : ctx_r2.dataSource.data.length) === 0);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_37_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-icon", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.columnType == null ? null : ctx_r2.columnType.direction) === "asc" ? "arrow_upward" : "arrow_downward");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 68)(1, "div", 69)(2, "span");
    \u0275\u0275text(3, "Listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 70);
    \u0275\u0275text(5, "keyboard_arrow_down");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ListingsComponent_ng_container_0_ng_template_2_th_37_div_6_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const listingsMenu_r10 = \u0275\u0275reference(39);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", listingsMenu_r10);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (ctx_r2.columnType == null ? null : ctx_r2.columnType.colName) === "listings");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_td_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 71);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_template_2_td_41_Template_td_click_0_listener() {
      const listing_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onViewAd(listing_r12));
    });
    \u0275\u0275element(1, "findqo-agent-ad-item", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("listing", listing_r12);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 72);
    \u0275\u0275text(1, "Ad Tier");
    \u0275\u0275elementEnd();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((listing_r13 == null ? null : listing_r13.isFeatured) === "0" ? "Standard" : "Featured");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 72);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74)(1, "span", 75);
    \u0275\u0275pipe(2, "adStatusFormat");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "adStatusFormat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const listing_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(\u0275\u0275pipeBind1(2, 2, listing_r14 == null ? null : listing_r14.adStatus == null ? null : listing_r14.adStatus.status)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (listing_r14 == null ? null : listing_r14.adStatus == null ? null : listing_r14.adStatus.status) ? \u0275\u0275pipeBind1(4, 4, listing_r14 == null ? null : listing_r14.adStatus == null ? null : listing_r14.adStatus.status) : "N/A", " ");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 72);
    \u0275\u0275text(1, "Assigned to");
    \u0275\u0275elementEnd();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_td_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((listing_r15 == null ? null : listing_r15.agent == null ? null : listing_r15.agent.name) || "N/A");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 72);
    \u0275\u0275text(1, "Expiry");
    \u0275\u0275elementEnd();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_td_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r16 = ctx.$implicit;
    \u0275\u0275classProp("fg-error-3", (listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.status) === "expired" || (listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.expireInDays) <= 3 && (listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.expireInDays) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (listing_r16 == null ? null : listing_r16.isMigrated) === "1" ? "N/A" : (listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.status) === "expired" ? "Ad expired!" : (listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.expireInDays) && \u0275\u0275pureFunction0(3, _c1).includes(listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.status) ? (listing_r16 == null ? null : listing_r16.adStatus == null ? null : listing_r16.adStatus.expireInDays) + " days" : "N/A", " ");
  }
}
function ListingsComponent_ng_container_0_ng_template_2_th_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 72);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_td_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 76)(1, "mat-icon", 77);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_template_2_td_56_Template_mat_icon_click_1_listener() {
      const listing_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onViewAd(listing_r18));
    });
    \u0275\u0275text(2, "arrow_forward_ios");
    \u0275\u0275elementEnd()();
  }
}
function ListingsComponent_ng_container_0_ng_template_2_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 78);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 79);
  }
  if (rf & 2) {
    const listing_r19 = ctx.$implicit;
    \u0275\u0275property("id", listing_r19 == null ? null : listing_r19.id);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_tr_59_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 81);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("colspan", ctx_r2.displayColumns.length);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, ListingsComponent_ng_container_0_ng_template_2_tr_59_td_1_Template, 2, 1, "td", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r4 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r4.isLoading);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "mat-paginator", 83, 3);
    \u0275\u0275listener("page", function ListingsComponent_ng_container_0_ng_template_2_div_61_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const vm_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event, vm_r4.usersMetaData));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.pageMetadata.total)("pageSize", ctx_r2.pageMetadata.perPage)("pageIndex", +ctx_r2.pageMetadata.currentPage - 1);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "mat-paginator", 85, 3);
    \u0275\u0275listener("page", function ListingsComponent_ng_container_0_ng_template_2_div_67_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const vm_r4 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event, vm_r4.usersMetaData));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.pageMetadata.total)("pageSize", ctx_r2.pageMetadata.perPage)("pageIndex", +ctx_r2.pageMetadata.currentPage - 1)("pageSizeOptions", ctx_r2.pageSizeOptions);
  }
}
function ListingsComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "h3", 8);
    \u0275\u0275text(5, "Your Listings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "mat-form-field", 22)(8, "mat-icon", 23);
    \u0275\u0275text(9, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 24, 1);
    \u0275\u0275listener("keyup", function ListingsComponent_ng_container_0_ng_template_2_Template_input_keyup_10_listener() {
      \u0275\u0275restoreView(_r5);
      const searchInput_r6 = \u0275\u0275reference(11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSearch(searchInput_r6.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ListingsComponent_ng_container_0_ng_template_2_mat_icon_12_Template, 2, 0, "mat-icon", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26)(14, "button", 27);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_template_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFilter());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Filter ");
    \u0275\u0275template(18, ListingsComponent_ng_container_0_ng_template_2_span_18_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 29);
    \u0275\u0275listener("click", function ListingsComponent_ng_container_0_ng_template_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPlaceAd());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " New listing ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 30)(24, "span", 31);
    \u0275\u0275text(25, "Listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-icon", 32);
    \u0275\u0275text(27, "keyboard_arrow_down");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ListingsComponent_ng_container_0_ng_template_2_div_28_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18)(30, "div", 33);
    \u0275\u0275template(31, ListingsComponent_ng_container_0_ng_template_2_Conditional_31_Template, 1, 1, "ng-container")(32, ListingsComponent_ng_container_0_ng_template_2_Conditional_32_Template, 1, 1, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 18)(34, "div", 35)(35, "table", 36);
    \u0275\u0275elementContainerStart(36, 37);
    \u0275\u0275template(37, ListingsComponent_ng_container_0_ng_template_2_th_37_Template, 7, 2, "th", 38);
    \u0275\u0275elementStart(38, "mat-menu", null, 2)(40, "findqo-sort-menu", 39);
    \u0275\u0275listener("sortChange", function ListingsComponent_ng_container_0_ng_template_2_Template_findqo_sort_menu_sortChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMenuSort($event.column, $event.direction));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, ListingsComponent_ng_container_0_ng_template_2_td_41_Template, 2, 1, "td", 40);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(42, 41);
    \u0275\u0275template(43, ListingsComponent_ng_container_0_ng_template_2_th_43_Template, 2, 0, "th", 42)(44, ListingsComponent_ng_container_0_ng_template_2_td_44_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(45, 44);
    \u0275\u0275template(46, ListingsComponent_ng_container_0_ng_template_2_th_46_Template, 2, 0, "th", 42)(47, ListingsComponent_ng_container_0_ng_template_2_td_47_Template, 5, 6, "td", 45);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(48, 46);
    \u0275\u0275template(49, ListingsComponent_ng_container_0_ng_template_2_th_49_Template, 2, 0, "th", 42)(50, ListingsComponent_ng_container_0_ng_template_2_td_50_Template, 2, 1, "td", 43);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(51, 47);
    \u0275\u0275template(52, ListingsComponent_ng_container_0_ng_template_2_th_52_Template, 2, 0, "th", 42)(53, ListingsComponent_ng_container_0_ng_template_2_td_53_Template, 2, 4, "td", 48);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(54, 49);
    \u0275\u0275template(55, ListingsComponent_ng_container_0_ng_template_2_th_55_Template, 1, 0, "th", 42)(56, ListingsComponent_ng_container_0_ng_template_2_td_56_Template, 3, 0, "td", 50);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(57, ListingsComponent_ng_container_0_ng_template_2_tr_57_Template, 1, 0, "tr", 51)(58, ListingsComponent_ng_container_0_ng_template_2_tr_58_Template, 1, 1, "tr", 52)(59, ListingsComponent_ng_container_0_ng_template_2_tr_59_Template, 2, 1, "tr", 53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 18);
    \u0275\u0275template(61, ListingsComponent_ng_container_0_ng_template_2_div_61_Template, 3, 3, "div", 54);
    \u0275\u0275elementStart(62, "div", 55);
    \u0275\u0275element(63, "mat-divider");
    \u0275\u0275elementStart(64, "div", 56)(65, "span", 57);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, ListingsComponent_ng_container_0_ng_template_2_div_67_Template, 3, 4, "div", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const listingsMenu_r10 = \u0275\u0275reference(39);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.searchValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.searchValue);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.filterCount > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("matMenuTriggerFor", listingsMenu_r10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.columnType == null ? null : ctx_r2.columnType.colName) === "listings");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r2.dataSource == null ? null : ctx_r2.dataSource.data == null ? null : ctx_r2.dataSource.data.length) > 0 ? 31 : 32);
    \u0275\u0275advance(4);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(5);
    \u0275\u0275property("columnName", "listings")("ascText", "Oldest to newest")("descText", "Newest to oldest")("activeColumn", ctx_r2.columnType)("direction", "asc");
    \u0275\u0275advance(17);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayColumns);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.pageMetadata);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pageMetadata);
  }
}
function ListingsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ListingsComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 5)(2, ListingsComponent_ng_container_0_ng_template_2_Template, 68, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const hasData_r22 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.searchSubject && ctx_r2.filterCount === 0 && ctx_r2.dataSource.data.length === 0)("ngIfElse", hasData_r22);
  }
}
var MyCustomPaginatorIntl = class extends MatPaginatorIntl {
  constructor() {
    super(...arguments);
    this.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return `Page 1 of ${length}`;
      }
      length = Math.max(length, 0);
      return `Page ${page + 1} of ${Math.ceil(length / pageSize)}`;
    };
  }
};
var ListingsComponent = class _ListingsComponent {
  constructor(viewport, dialog, agentHubFacade, destory, route, adStatusFormatPipe, router, placeAdFacade, auth, myProfileFacade, destroy) {
    this.viewport = viewport;
    this.dialog = dialog;
    this.agentHubFacade = agentHubFacade;
    this.destory = destory;
    this.route = route;
    this.adStatusFormatPipe = adStatusFormatPipe;
    this.router = router;
    this.placeAdFacade = placeAdFacade;
    this.auth = auth;
    this.myProfileFacade = myProfileFacade;
    this.destroy = destroy;
    this.user = this.auth.user();
    this.pageSizeOptions = [25, 50, 100, 250, 500];
    this.dataSource = new MatTableDataSource();
    this.selectedRowId = "";
    this.pageLabel = "";
    this.isLoading = false;
    this.searchValue = "";
    this.searchSubject = new Subject();
    this.displayColumns = ["listings", "adTier", "status", "assignedTo", "expiry", "view"];
    this.filterCount = 0;
    this.noItems = [
      "Enjoy your First 2 Months of Property Listings for FREE",
      "Benefit from unlimited ad views and dedicated support",
      "Showcase your brand by advertising under your business name and brand logo on the ad list"
    ];
    this.sortMap = {
      listings: {
        asc: "date-oldest",
        desc: "date-latest"
      }
    };
    this.usersMetaData$ = this.agentHubFacade.pageMetaData$;
    this.statusList$ = this.agentHubFacade.getAdsStatusList$();
    this.isLoading$ = this.agentHubFacade.isLoading$();
    this.subscription$ = this.myProfileFacade.getSubscriptionInfo$();
  }
  onViewAd(ad) {
    this.router.navigate([APP_ROUTE.agentHub.detail, ad?.id]);
  }
  onMenuSort(colName, sortDirection) {
    const sortKey = sortDirection === "clear" ? null : this.sortMap[colName]?.[sortDirection];
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sort: sortKey },
      queryParamsHandling: "merge"
    });
  }
  onPlaceAd() {
    if (this.user.businessProfile.subscription.reference === SubscriptionTier.LIMITED_YEARLY) {
      this.placeAdFacade.getPaymentCount({
        userId: this.user?.id,
        sellerTypeId: "2",
        couponCode: LIMITED_COUPON_CODE
      }).pipe().subscribe((meta) => {
        this.adsCount = +(meta?.total ?? 0);
        this.hasPlanAdsLeft = this.adsCount < 2;
        if (this.hasPlanAdsLeft) {
          this.router.navigate([APP_ROUTE.placeAdCategory], {
            queryParams: { sellerTypeId: 2 }
          });
        } else {
          this.dialog.open(LimitReachedDialogComponent, {
            disableClose: true,
            maxWidth: "500px",
            maxHeight: "354px"
          });
        }
      });
      return;
    }
    this.subscription$.pipe(takeUntil(this.destroy)).subscribe((subscription) => {
      this.subscription = subscription;
    });
    if (this.subscription.status === "cancelled" && new Date(this.subscription.dates.expired) < /* @__PURE__ */ new Date()) {
      this.dialog.open(SubscriptionOfferDialogComponent, {
        disableClose: true,
        width: "500px",
        height: "600px"
      });
      return;
    }
    this.router.navigate([APP_ROUTE.placeAdCategory], {
      queryParams: { sellerTypeId: 2 }
    });
  }
  onClearSearch() {
    this.agentHubFacade.setIsLoading(true);
    this.searchValue = "";
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: null },
      queryParamsHandling: "merge"
    });
  }
  onFilter() {
    this.agentHubFacade.loadAgentList();
    this.dialog.open(FiltersListingsComponent, {
      disableClose: true,
      width: "500px",
      height: "100%",
      panelClass: "filter-form"
    });
  }
  onSearch(keyword) {
    keyword = keyword.trim();
    this.searchSubject.next(keyword);
    this.searchValue = keyword;
  }
  getStatusClass(status) {
    const formattedStatus = this.adStatusFormatPipe.transform(status);
    switch (formattedStatus) {
      case "Live":
        return "badge-live";
      case "Payment Failed":
        return "badge-payment-failed";
      case "Expired":
        return "badge-expired";
      case "Edit Under Review":
        return "badge-edit-under-review";
      case "Draft":
        return "badge-default";
      case "Under Review":
        return "badge-edit-under-review";
      case "Payment Pending":
        return "badge-edit-under-review";
      case "Sold":
        return "badge-sold";
      case "Property Occupied":
        return "badge-property-occupied";
      case "Sale Agreed":
        return "badge-sale-agreed";
      default:
        return "badge-default";
    }
  }
  onPageChange(paginator, metaData) {
    const currentQueryParams = this.route.snapshot.queryParams;
    this.router.navigate([APP_ROUTE.agentHub.dashboard, APP_ROUTE.agentHub.listings], {
      queryParams: __spreadProps(__spreadValues({}, currentQueryParams), {
        page: paginator.pageIndex + 1,
        perPage: paginator.pageSize
      }),
      queryParamsHandling: "merge"
    });
  }
  scrollToIndex(id) {
    setTimeout(() => {
      this.selectedRowId = id;
      const ELEMENT = this.rows.find((row) => row.nativeElement.id === id);
      if (ELEMENT) {
        ELEMENT.nativeElement.scrollIntoView({
          block: "center",
          behavior: "auto"
        });
      }
    });
  }
  updatePaginator(metaData) {
    const startIndex = (Number.parseInt(metaData.currentPage) - 1) * Number.parseInt(metaData.perPage) + 1;
    const endIndex = Math.min(startIndex + Number.parseInt(metaData.perPage) - 1, Number.parseInt(metaData.total));
    this.pageLabel = `Showing ${startIndex} to ${endIndex} of ${metaData.total} item(s)`;
  }
  getTypeFromSort(sort) {
    for (const [colName, directions] of Object.entries(this.sortMap)) {
      if (directions.asc === sort) {
        return { colName, direction: "asc" };
      } else if (directions.desc === sort) {
        return { colName, direction: "desc" };
      }
    }
    return null;
  }
  getFilterCount() {
    this.route.queryParams.subscribe((params) => {
      const filterKeys = ["aisleId", "agentId", "status", "isFeatured"];
      this.filterCount = filterKeys.reduce((count, key) => {
        return params[key] ? count + 1 : count;
      }, 0);
    });
  }
  ngOnInit() {
    this.getFilterCount();
    this.searchSubject.pipe(debounceTime(1e3), distinctUntilChanged(), tap((search) => {
      if (search?.length === 0)
        search = null;
      const currentQueryParams = this.route.snapshot.queryParams;
      this.router.navigate([APP_ROUTE.agentHub.dashboard, APP_ROUTE.agentHub.listings], {
        queryParams: __spreadProps(__spreadValues({}, currentQueryParams), {
          page: 1,
          perPage: this.pageMetadata.perPage,
          search
        }),
        queryParamsHandling: "merge"
      });
    }), takeUntil(this.destory)).subscribe();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.route.queryParams.pipe(switchMap((params) => {
      return this.agentHubFacade.loadAgencyList$(params).pipe(map((response) => {
        return __spreadProps(__spreadValues({}, response), {
          params
        });
      }));
    })).subscribe((response) => {
      this.dataSource = new MatTableDataSource(response.data);
      this.pageMetadata = response?.meta;
      this.queryParams = response?.params;
      this.updatePaginator(response?.meta);
      if (this.dataSource?.paginator) {
        this.dataSource.paginator.firstPage();
      }
      if (response?.params?.agencyId) {
        this.scrollToIndex(response.params.agencyId);
      } else {
        this.selectedRowId = "";
      }
      if (response?.params?.search) {
        this.searchValue = response?.params?.search ?? "";
      }
      if (response?.params?.sort) {
        this.columnType = this.getTypeFromSort(response?.params?.sort);
      } else {
        this.columnType = {};
      }
      this.agentHubFacade.setPageMetaData(response?.params);
    });
  }
  static {
    this.\u0275fac = function ListingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListingsComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AdStatusFormatPipe), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PlaceAdFacade), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(DestroyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListingsComponent, selectors: [["findqo-listings"]], viewQuery: function ListingsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 7);
        \u0275\u0275viewQuery(MatRow, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rows = _t);
      }
    }, standalone: false, features: [\u0275\u0275ProvidersFeature([AdStatusFormatPipe, DestroyService, { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }])], decls: 3, vars: 8, consts: [["hasData", ""], ["searchInput", ""], ["listingsMenu", "matMenu"], ["paginator", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "container mt-4 container-height", 4, "ngIf"], [1, "container", "mt-4", "container-height"], [1, "heading-3-regular"], [1, "d-inline-flex", "justify-content-center", "w-100", "mt-48px"], [1, "border", "rounded", "p-3", "w-390px"], [1, "d-block", "text-body-medium", "fg-general-5", "mb-3"], ["class", "d-inline-flex align-content-center gap-2 mb-1", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "rounded-pill", "bg-prim-2", "fg-basic-1", "h-40px", "w-100", "mt-3", 3, "click"], [1, "d-inline-flex", "align-content-center", "gap-2", "mb-1"], [1, "icon-18px", "fg-prim-2"], [1, "text-caption-regular", "fg-general-4"], [1, "mt-4", "container-height"], [1, "container"], [1, "row", "align-items-center", "gap-3", "mb-4"], [1, "col"], [1, "col-12", "col-md-auto"], ["appearance", "outline", 1, "no-subscript", "w-350"], [1, "icon-18px", "fg-general-4", "me-2"], ["matInput", "", "placeholder", "Search listings by name or location", 1, "search", "text-body-regular", 3, "keyup", "value"], ["class", "icon-18px fg-general-4 me-2 cursor-pointer", 3, "click", 4, "ngIf"], [1, "col", "col-md-auto", "d-inline-flex", "align-content-center", "justify-content-end", "gap-3"], ["mat-button", "", 1, "rounded-pill", "bg-neutral-2", "fg-general-4", "h-40px", 3, "click"], ["class", "text-caption-regular filter-count", 4, "ngIf"], ["mat-button", "", 1, "rounded-pill", "bg-prim-2", "fg-basic-1", "h-40px", 3, "click"], [1, "d-inline-flex", "ps-3", "d-md-none", "header-height", "align-items-center", "w-100"], [1, "text-body-regular", "fg-general-5"], [1, "icon-18px", "ms-1", 3, "matMenuTriggerFor"], [1, "d-block", "d-md-none"], [1, "d-block", "text-body-regular", "mb-65px"], [1, "table-container", "position-relative", "border", "border-1", "border-solid", "rounded-3", "my-9", "mx-13", "d-none", "d-md-block"], ["mat-table", "", "aria-describedby", "Ad list table", "matSort", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "listings", "sticky", ""], ["mat-header-cell", "", "class", "cursor-pointer", 3, "matMenuTriggerFor", 4, "matHeaderCellDef"], [3, "sortChange", "columnName", "ascText", "descText", "activeColumn", "direction"], ["mat-cell", "", "class", "cursor-pointer", 3, "click", 4, "matCellDef"], ["matColumnDef", "adTier"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-body-regular fg-general-5", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "assignedTo"], ["matColumnDef", "expiry"], ["mat-cell", "", "class", "text-body-regular fg-general-5", 3, "fg-error-3", 4, "matCellDef"], ["matColumnDef", "view", "stickyEnd", ""], ["mat-cell", "", "class", "p-0", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["class", "element-row", "mat-row", "", 3, "id", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "d-inline-flex w-100 align-items-center justify-content-center d-md-none border-top mb-65px", 4, "ngIf"], [1, "row", "mx-0", "py-9", "align-items-center", "paginator", "justify-content-between", "align-content-center", "w-100", "bottom-0", "bg-basic-1", "d-none", "d-md-flex"], [1, "col-auto", "ps-13"], [1, "fg-general-3", "text-body-regular"], ["class", "col-auto pe-13", 4, "ngIf"], [1, "icon-18px", "fg-general-4", "me-2", "cursor-pointer", 3, "click"], [1, "text-caption-regular", "filter-count"], [1, "fg-general-3", "icon-18px"], [4, "ngFor", "ngForOf"], [1, "row", "align-items-center", "justify-content-end", "border-bottom", "pe-2", 3, "click"], [3, "listing"], [1, "col-auto"], [1, "icon-20px", "fg-general-4"], ["class", "d-block text-body-regular mb-65px", 4, "ngIf"], ["mat-header-cell", "", 1, "cursor-pointer", 3, "matMenuTriggerFor"], [1, "d-inline-flex", "align-items-center", "w-100"], [1, "icon-18px", "ms-1"], ["mat-cell", "", 1, "cursor-pointer", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-body-regular", "fg-general-5"], ["mat-cell", ""], [1, "text-caption-regular", "rounded", "px-2", "py-1", "no-wrap", 3, "ngClass"], ["mat-cell", "", 1, "p-0"], [1, "icon-20px", "fg-general-4", "cursor-pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row", 3, "id"], ["class", "p-9", 4, "ngIf"], [1, "p-9"], [1, "d-inline-flex", "w-100", "align-items-center", "justify-content-center", "d-md-none", "border-top", "mb-65px"], ["showFirstLastButtons", "", 1, "text-body-regular", "fg-general-3", 3, "page", "length", "pageSize", "pageIndex"], [1, "col-auto", "pe-13"], ["showFirstLastButtons", "", 1, "text-body-regular", "fg-general-3", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"]], template: function ListingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ListingsComponent_ng_container_0_Template, 4, 2, "ng-container", 4);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c0, \u0275\u0275pipeBind1(1, 1, ctx.usersMetaData$), \u0275\u0275pipeBind1(2, 3, ctx.isLoading$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIcon, MatFormField, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, AgentAdItemComponent, MatDivider, MatPaginator, MatMenu, MatMenuTrigger, SortMenuComponent, AsyncPipe, AdStatusFormatPipe], styles: ['\n\n.badge-live[_ngcontent-%COMP%] {\n  background-color: var(--success-1);\n  border: 1px solid var(--success-3);\n  color: var(--success-3);\n}\n.badge-edit-under-review[_ngcontent-%COMP%] {\n  background-color: var(--info-1);\n  border: 1px solid var(--info-3);\n  color: var(--info-3);\n}\n.badge-payment-failed[_ngcontent-%COMP%] {\n  background-color: var(--error-1);\n  border: 1px solid var(--error-3);\n  color: var(--error-3);\n}\n.badge-sold[_ngcontent-%COMP%], \n.badge-property-occupied[_ngcontent-%COMP%], \n.badge-sale-agreed[_ngcontent-%COMP%], \n.badge-expired[_ngcontent-%COMP%] {\n  background-color: var(--warn-1);\n  border: 1px solid var(--warn-3);\n  color: var(--warn-3);\n}\n.badge-default[_ngcontent-%COMP%] {\n  background-color: var(--general-1);\n  border: 1px solid var(--general-4);\n  color: var(--general-4);\n}\n.icon-18px[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n}\n.icon-20px[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.ad-image[_ngcontent-%COMP%] {\n  width: 97px;\n  height: 61px;\n}\n.no-wrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.paginator[_ngcontent-%COMP%] {\n  height: 67px;\n}\n.table-container[_ngcontent-%COMP%] {\n  max-height: calc(100dvh - 222px);\n  font-family: "Poppins", sans-serif !important;\n  overflow: auto;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: initial;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  background: var(--general-1) !important;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  height: 60px;\n}\n.mat-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.w-350[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.filter-count[_ngcontent-%COMP%] {\n  background-color: var(--sec-3);\n  color: var(--basic-1);\n  border-radius: 50%;\n  padding: 2px 8px;\n  position: absolute;\n  top: -16px;\n  right: -10px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n}\n.mt-48px[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.w-390px[_ngcontent-%COMP%] {\n  width: 390px;\n}\n.header-height[_ngcontent-%COMP%] {\n  height: 56px;\n  background-color: var(--general-1);\n  align-content: center;\n}\n.mb-65px[_ngcontent-%COMP%] {\n  margin-bottom: 65px;\n}\n@media (min-width: 768px) {\n  .container-height[_ngcontent-%COMP%] {\n    height: calc(100dvh - 160px);\n  }\n  .w-350[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/listings.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListingsComponent, [{
    type: Component,
    args: [{ selector: "findqo-listings", providers: [AdStatusFormatPipe, DestroyService, { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }], standalone: false, template: `<ng-container *ngIf="{ usersMetaData: usersMetaData$ | async, isLoading: isLoading$ | async } as vm">
	<ng-container *ngIf="!searchSubject && filterCount === 0 && dataSource.data.length === 0; else hasData">
		<div *ngIf="!vm.isLoading" class="container mt-4 container-height">
			<h3 class="heading-3-regular">Your Listings</h3>

			<div class="d-inline-flex justify-content-center w-100 mt-48px">
				<div class="border rounded p-3 w-390px">
					<span class="d-block text-body-medium fg-general-5 mb-3">You do not have any listings yet</span>

					<div *ngFor="let item of noItems" class="d-inline-flex align-content-center gap-2 mb-1">
						<mat-icon class="icon-18px fg-prim-2">check</mat-icon>
						<span class="text-caption-regular fg-general-4">{{ item }}</span>
					</div>

					<button mat-button class="rounded-pill bg-prim-2 fg-basic-1 h-40px w-100 mt-3" (click)="onPlaceAd()">
						<mat-icon>add_circle</mat-icon>
						Add New Listing
					</button>
				</div>
			</div>
		</div>
	</ng-container>

	<ng-template #hasData>
		<div class="mt-4 container-height">
			<div class="container">
				<div class="row align-items-center gap-3 mb-4">
					<div class="col">
						<h3 class="heading-3-regular">Your Listings</h3>
					</div>

					<div class="col-12 col-md-auto">
						<mat-form-field appearance="outline" class="no-subscript w-350">
							<mat-icon class="icon-18px fg-general-4 me-2">search</mat-icon>
							<input
								#searchInput
								matInput
								class="search text-body-regular"
								placeholder="Search listings by name or location"
								[value]="searchValue"
								(keyup)="onSearch(searchInput.value)"
							/>
							<mat-icon *ngIf="searchValue" class="icon-18px fg-general-4 me-2 cursor-pointer" (click)="onClearSearch()">cancel</mat-icon>
						</mat-form-field>
					</div>

					<div class="col col-md-auto d-inline-flex align-content-center justify-content-end gap-3">
						<button mat-button class="rounded-pill bg-neutral-2 fg-general-4 h-40px" (click)="onFilter()">
							<mat-icon>tune</mat-icon>
							Filter

							<span *ngIf="filterCount > 0" class="text-caption-regular filter-count">{{ filterCount }}</span>
						</button>

						<button mat-button class="rounded-pill bg-prim-2 fg-basic-1 h-40px" (click)="onPlaceAd()">
							<mat-icon>add_circle</mat-icon>
							New listing
						</button>
					</div>
				</div>
			</div>

			<div class="d-inline-flex ps-3 d-md-none header-height align-items-center w-100">
				<span class="text-body-regular fg-general-5">Listings</span>
				<mat-icon class="icon-18px ms-1" [matMenuTriggerFor]="listingsMenu">keyboard_arrow_down</mat-icon>

				<div *ngIf="columnType?.colName === 'listings'">
					<mat-icon class="fg-general-3 icon-18px">{{ columnType?.direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</mat-icon>
				</div>
			</div>

			<div class="container">
				<div class="d-block d-md-none">
					@if (dataSource?.data?.length > 0) {
						<ng-container *ngFor="let listing of dataSource?.data">
							<div class="row align-items-center justify-content-end border-bottom pe-2" (click)="onViewAd(listing)">
								<div class="col">
									<findqo-agent-ad-item [listing]="listing"></findqo-agent-ad-item>
								</div>

								<div class="col-auto">
									<mat-icon class="icon-20px fg-general-4">arrow_forward_ios</mat-icon>
								</div>
							</div>
						</ng-container>
					} @else {
						<span *ngIf="!vm.isLoading && dataSource?.data?.length === 0" class="d-block text-body-regular mb-65px">No records found.</span>
					}
				</div>
			</div>

			<div class="container">
				<div class="table-container position-relative border border-1 border-solid rounded-3 my-9 mx-13 d-none d-md-block">
					<table mat-table class="w-100" aria-describedby="Ad list table" [dataSource]="dataSource" matSort>
						<ng-container matColumnDef="listings" sticky>
							<th mat-header-cell *matHeaderCellDef class="cursor-pointer" [matMenuTriggerFor]="listingsMenu">
								<div class="d-inline-flex align-items-center w-100">
									<span>Listings</span>
									<mat-icon class="icon-18px ms-1">keyboard_arrow_down</mat-icon>

									<div *ngIf="columnType?.colName === 'listings'">
										<mat-icon class="fg-general-3 icon-18px">{{ columnType?.direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</mat-icon>
									</div>
								</div>
							</th>

							<mat-menu #listingsMenu="matMenu">
								<findqo-sort-menu
									[columnName]="'listings'"
									[ascText]="'Oldest to newest'"
									[descText]="'Newest to oldest'"
									[activeColumn]="columnType"
									[direction]="'asc'"
									(sortChange)="onMenuSort($event.column, $event.direction)"
								></findqo-sort-menu>
							</mat-menu>

							<td mat-cell *matCellDef="let listing" class="cursor-pointer" (click)="onViewAd(listing)">
								<findqo-agent-ad-item [listing]="listing"></findqo-agent-ad-item>
							</td>
						</ng-container>

						<ng-container matColumnDef="adTier">
							<th mat-header-cell *matHeaderCellDef>Ad Tier</th>
							<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">{{ listing?.isFeatured === '0' ? 'Standard' : 'Featured' }}</td>
						</ng-container>

						<ng-container matColumnDef="status">
							<th mat-header-cell *matHeaderCellDef>Status</th>
							<td mat-cell *matCellDef="let listing">
								<span class="text-caption-regular rounded px-2 py-1 no-wrap" [ngClass]="getStatusClass(listing?.adStatus?.status | adStatusFormat)">
									{{ listing?.adStatus?.status ? (listing?.adStatus?.status | adStatusFormat) : 'N/A' }}
								</span>
							</td>
						</ng-container>

						<ng-container matColumnDef="assignedTo">
							<th mat-header-cell *matHeaderCellDef>Assigned to</th>
							<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">{{ listing?.agent?.name || 'N/A' }}</td>
						</ng-container>

						<ng-container matColumnDef="expiry">
							<th mat-header-cell *matHeaderCellDef>Expiry</th>
							<td
								mat-cell
								*matCellDef="let listing"
								[class.fg-error-3]="listing?.adStatus?.status === 'expired' || (listing?.adStatus?.expireInDays <= 3 && listing?.adStatus?.expireInDays > 0)"
								class="text-body-regular fg-general-5"
							>
								{{
									listing?.isMigrated === '1'
										? 'N/A'
										: listing?.adStatus?.status === 'expired'
											? 'Ad expired!'
											: listing?.adStatus?.expireInDays && ['live', 'property-occupied', 'sale-agreed', 'sold'].includes(listing?.adStatus?.status)
												? listing?.adStatus?.expireInDays + ' days'
												: 'N/A'
								}}
							</td>
						</ng-container>

						<ng-container matColumnDef="view" stickyEnd>
							<th mat-header-cell *matHeaderCellDef></th>
							<td mat-cell *matCellDef="let listing" class="p-0">
								<mat-icon class="icon-20px fg-general-4 cursor-pointer" (click)="onViewAd(listing)">arrow_forward_ios</mat-icon>
							</td>
						</ng-container>

						<!-- Main header row -->
						<tr mat-header-row *matHeaderRowDef="displayColumns; sticky: true"></tr>

						<!-- Data rows -->
						<tr class="element-row" mat-row *matRowDef="let listing; columns: displayColumns" [id]="listing?.id"></tr>

						<tr *matNoDataRow>
							<td *ngIf="!vm.isLoading" class="p-9" [attr.colspan]="displayColumns.length">No records found.</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<div class="container">
			<div *ngIf="pageMetadata" class="d-inline-flex w-100 align-items-center justify-content-center d-md-none border-top mb-65px">
				<mat-paginator
					#paginator
					showFirstLastButtons
					class="text-body-regular fg-general-3"
					[length]="pageMetadata.total"
					[pageSize]="pageMetadata.perPage"
					[pageIndex]="+pageMetadata.currentPage - 1"
					(page)="onPageChange($event, vm.usersMetaData)"
				></mat-paginator>
			</div>

			<div class="row mx-0 py-9 align-items-center paginator justify-content-between align-content-center w-100 bottom-0 bg-basic-1 d-none d-md-flex">
				<mat-divider></mat-divider>
				<div class="col-auto ps-13">
					<span class="fg-general-3 text-body-regular">{{ pageLabel }}</span>
				</div>

				<div *ngIf="pageMetadata" class="col-auto pe-13">
					<mat-paginator
						#paginator
						showFirstLastButtons
						class="text-body-regular fg-general-3"
						[length]="pageMetadata.total"
						[pageSize]="pageMetadata.perPage"
						[pageIndex]="+pageMetadata.currentPage - 1"
						[pageSizeOptions]="pageSizeOptions"
						(page)="onPageChange($event, vm.usersMetaData)"
					></mat-paginator>
				</div>
			</div>
		</div>
	</ng-template>
</ng-container>
`, styles: ['/* apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/listings.component.scss */\n.badge-live {\n  background-color: var(--success-1);\n  border: 1px solid var(--success-3);\n  color: var(--success-3);\n}\n.badge-edit-under-review {\n  background-color: var(--info-1);\n  border: 1px solid var(--info-3);\n  color: var(--info-3);\n}\n.badge-payment-failed {\n  background-color: var(--error-1);\n  border: 1px solid var(--error-3);\n  color: var(--error-3);\n}\n.badge-sold,\n.badge-property-occupied,\n.badge-sale-agreed,\n.badge-expired {\n  background-color: var(--warn-1);\n  border: 1px solid var(--warn-3);\n  color: var(--warn-3);\n}\n.badge-default {\n  background-color: var(--general-1);\n  border: 1px solid var(--general-4);\n  color: var(--general-4);\n}\n.icon-18px {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n}\n.icon-20px {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.ad-image {\n  width: 97px;\n  height: 61px;\n}\n.no-wrap {\n  white-space: nowrap;\n}\n.paginator {\n  height: 67px;\n}\n.table-container {\n  max-height: calc(100dvh - 222px);\n  font-family: "Poppins", sans-serif !important;\n  overflow: auto;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: initial;\n}\n.table-container::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.mat-mdc-header-cell {\n  background: var(--general-1) !important;\n}\nth,\ntd {\n  font-family: "Poppins", sans-serif !important;\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  height: 60px;\n}\n.mat-cell {\n  white-space: nowrap;\n}\n.w-350 {\n  width: 100%;\n}\n.h-40px {\n  height: 40px;\n}\n.filter-count {\n  background-color: var(--sec-3);\n  color: var(--basic-1);\n  border-radius: 50%;\n  padding: 2px 8px;\n  position: absolute;\n  top: -16px;\n  right: -10px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n}\n.mt-48px {\n  margin-top: 48px;\n}\n.w-390px {\n  width: 390px;\n}\n.header-height {\n  height: 56px;\n  background-color: var(--general-1);\n  align-content: center;\n}\n.mb-65px {\n  margin-bottom: 65px;\n}\n@media (min-width: 768px) {\n  .container-height {\n    height: calc(100dvh - 160px);\n  }\n  .w-350 {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/listings.component.css.map */\n'] }]
  }], () => [{ type: ViewportService }, { type: MatDialog }, { type: AgentHubFacade }, { type: DestroyService }, { type: ActivatedRoute }, { type: AdStatusFormatPipe }, { type: Router }, { type: PlaceAdFacade }, { type: AuthService }, { type: MyProfileFacade }, { type: DestroyService }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator, { static: true }]
  }], rows: [{
    type: ViewChildren,
    args: [MatRow, { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListingsComponent, { className: "ListingsComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/listings.component.ts", lineNumber: 40 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/listings-routing.module.ts
var routes = [
  {
    path: "",
    component: ListingsComponent
  }
];
var ListingsRoutingModule = class _ListingsRoutingModule {
  static {
    this.\u0275fac = function ListingsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListingsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ListingsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListingsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/listings/listings.module.ts
var ListingsModule = class _ListingsModule {
  static {
    this.\u0275fac = function ListingsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListingsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ListingsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      ListingsRoutingModule,
      ButtonModule,
      MatBadgeModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      AgentAdItemComponent,
      MatDividerModule,
      MatPaginatorModule,
      MatSelectModule,
      MatMenuModule,
      SortMenuModule,
      ReactiveFormsModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListingsModule, [{
    type: NgModule,
    args: [{
      declarations: [ListingsComponent, FiltersListingsComponent],
      imports: [
        SharedModule,
        ListingsRoutingModule,
        ButtonModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        AgentAdItemComponent,
        MatDividerModule,
        MatPaginatorModule,
        MatSelectModule,
        MatMenuModule,
        SortMenuModule,
        ReactiveFormsModule
      ]
    }]
  }], null, null);
})();
export {
  ListingsModule
};
//# sourceMappingURL=chunk-W4SVT6FO.js.map
