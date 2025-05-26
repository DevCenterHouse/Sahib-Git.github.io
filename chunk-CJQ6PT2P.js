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
  ButtonModule,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Router,
  RouterModule,
  SectionsState,
  SharedModule,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/components/filters-enquiries/filters-enquiries.component.ts
function FiltersEnquiriesComponent_For_18_Template(rf, ctx) {
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
function FiltersEnquiriesComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const agent_r2 = ctx.$implicit;
    \u0275\u0275property("value", agent_r2 == null ? null : agent_r2.userId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", agent_r2 == null ? null : agent_r2.name, " ");
  }
}
var FiltersEnquiriesComponent = class _FiltersEnquiriesComponent {
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
      userId: new FormControl(),
      completionStatus: new FormControl()
    });
  }
  onApplyFilters() {
    const values = this.form.value;
    const queryParams = {};
    queryParams.page = 1;
    queryParams.perPage = 25;
    if (values?.userId) {
      const userId = values?.userId.join(",");
      queryParams.userId = userId ? userId : null;
    } else {
      queryParams.userId = null;
    }
    if (values?.aisleId) {
      queryParams.aisleId = values?.aisleId === "clear" ? null : values?.aisleId;
    } else {
      queryParams.aisleId = null;
    }
    if (values?.completionStatus) {
      queryParams.completionStatus = values?.completionStatus === "clear" ? null : values?.completionStatus;
    } else {
      queryParams.completionStatus = null;
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
        userId: null,
        completionStatus: null
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
        aisleId: params["aisleId"] || null,
        userId: params["userId"] ? params["userId"].split(",") : [],
        completionStatus: params["completionStatus"] || null
      });
    });
  }
  static {
    this.\u0275fac = function FiltersEnquiriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersEnquiriesComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SectionsState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FiltersEnquiriesComponent, selectors: [["findqo-filters-enquiries"]], standalone: false, decls: 44, vars: 13, consts: [[1, "inquiry-container", "h-100", "bg-general-1"], [1, "row", "justify-content-between", "align-items-center", "position-fixed", "top-0", "inquiry-header", "border-bottom", "w-100", "bg-general-1", "px-3"], [1, "col"], [1, "heading-4-regular", "fg-general-5"], [1, "col-auto"], ["mat-mini-fab", "", "aria-label", "close button", "disableRipple", "", "type", "button", 1, "bg-general-1", "close-btn", 3, "click"], [1, "fg-general-4", "icon-20px"], [1, "p-3", 3, "formGroup"], [1, "p-3", "rounded", "bg-basic-1", "mb-3"], [1, "fg-general-5", "text-body-regular", "d-block", "mb-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "text-body-regular"], ["formControlName", "aisleId", 3, "placeholder"], [1, "fs-14px", "lh-18px", "fw-400", 3, "value"], [3, "value"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["formControlName", "completionStatus", 1, "text-body-regular", 3, "panelClass", "placeholder"], [1, "search-option", "fs-14px", "lh-18px", "fw-400", 3, "value"], ["multiple", "", "formControlName", "userId", 1, "text-body-regular", 3, "panelClass", "placeholder"], ["class", "search-option fs-14px lh-18px fw-400", 3, "value", 4, "ngFor", "ngForOf"], [1, "row", "border-top", "p-3", "gap-3", "bg-general-1"], ["mat-button", "", 1, "fg-prim-2", "text-body-regular", 3, "click"], ["mat-button", "", 1, "bg-prim-2", "fg-basic-1", "text-body-regular", "w-100", 3, "click"]], template: function FiltersEnquiriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275listener("click", function FiltersEnquiriesComponent_Template_button_click_6_listener() {
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
        \u0275\u0275repeaterCreate(17, FiltersEnquiriesComponent_For_18_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 8)(20, "mat-label", 9);
        \u0275\u0275text(21, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-form-field", 14)(23, "mat-select", 15)(24, "mat-option", 12);
        \u0275\u0275text(25, "Any");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-option", 16);
        \u0275\u0275text(27, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 16);
        \u0275\u0275text(29, "Completed");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 8)(31, "mat-label", 9);
        \u0275\u0275text(32, "Assigned to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 14)(34, "mat-select", 17);
        \u0275\u0275template(35, FiltersEnquiriesComponent_mat_option_35_Template, 2, 2, "mat-option", 18);
        \u0275\u0275pipe(36, "async");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(37, "div", 19)(38, "div", 4)(39, "button", 20);
        \u0275\u0275listener("click", function FiltersEnquiriesComponent_Template_button_click_39_listener() {
          return ctx.onClearFilters();
        });
        \u0275\u0275text(40, "Clear filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 2)(42, "button", 21);
        \u0275\u0275listener("click", function FiltersEnquiriesComponent_Template_button_click_42_listener() {
          return ctx.onApplyFilters();
        });
        \u0275\u0275text(43, "Show results");
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
        \u0275\u0275property("value", "pending");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "completed");
        \u0275\u0275advance(6);
        \u0275\u0275property("panelClass", "search-dropdown-selection")("placeholder", "Any");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(36, 11, ctx.agentList$));
      }
    }, dependencies: [NgForOf, MatButton, MatMiniFabButton, MatIcon, MatFormField, MatLabel, MatSelect, MatOption, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AsyncPipe], styles: ["\n\n.inquiry-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-top: 60px;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.inquiry-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.inquiry-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.inquiry-header[_ngcontent-%COMP%] {\n  height: 60px;\n  max-width: 400px;\n  z-index: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset !important;\n}\n.icon-20px[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.filter[_ngcontent-%COMP%] {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-enquiries.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersEnquiriesComponent, [{
    type: Component,
    args: [{ selector: "findqo-filters-enquiries", standalone: false, template: `<div class="inquiry-container h-100 bg-general-1">
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
			<mat-label class="fg-general-5 text-body-regular d-block mb-2">Status</mat-label>

			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<mat-select [panelClass]="'search-dropdown-selection'" class="text-body-regular" formControlName="completionStatus" [placeholder]="'Any'">
					<mat-option [value]="'clear'" class="fs-14px lh-18px fw-400">Any</mat-option>
					<mat-option [value]="'pending'" class="search-option fs-14px lh-18px fw-400">Pending</mat-option>
					<mat-option [value]="'completed'" class="search-option fs-14px lh-18px fw-400">Completed</mat-option>
				</mat-select>
			</mat-form-field>
		</div>

		<div class="p-3 rounded bg-basic-1 mb-3">
			<mat-label class="fg-general-5 text-body-regular d-block mb-2">Assigned to</mat-label>

			<mat-form-field appearance="outline" subscriptSizing="dynamic">
				<mat-select [panelClass]="'search-dropdown-selection'" class="text-body-regular" multiple formControlName="userId" [placeholder]="'Any'">
					<mat-option *ngFor="let agent of agentList$ | async" [value]="agent?.userId" class="search-option fs-14px lh-18px fw-400">
						{{ agent?.name }}
					</mat-option>
				</mat-select>
			</mat-form-field>
		</div>
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
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-hub/components/filters-enquiries/filters-enquiries.component.scss */\n.inquiry-container {\n  overflow-y: auto;\n  padding-top: 60px;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.inquiry-container::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.inquiry-container::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.inquiry-header {\n  height: 60px;\n  max-width: 400px;\n  z-index: 2;\n}\n.close-btn {\n  width: 40px !important;\n  height: 40px !important;\n  box-shadow: unset !important;\n}\n.icon-20px {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.filter {\n  border: 1px solid var(--prim-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/filters-enquiries.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: AgentHubFacade }, { type: Router }, { type: ActivatedRoute }, { type: SectionsState }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FiltersEnquiriesComponent, { className: "FiltersEnquiriesComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/components/filters-enquiries/filters-enquiries.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiries/enquiries.component.ts
var _c0 = (a0, a1) => ({ usersMetaData: a0, isLoading: a1 });
function EnquiriesComponent_ng_container_0_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 44);
    \u0275\u0275listener("click", function EnquiriesComponent_ng_container_0_mat_icon_13_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClearSearch());
    });
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function EnquiriesComponent_ng_container_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.filterCount);
  }
}
function EnquiriesComponent_ng_container_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-icon", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.columnType == null ? null : ctx_r2.columnType.direction) === "asc" ? "arrow_upward" : "arrow_downward");
  }
}
function EnquiriesComponent_ng_container_0_Conditional_28_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function EnquiriesComponent_ng_container_0_Conditional_28_ng_container_0_Template_div_click_1_listener() {
      const listing_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onViewEnquiry(listing_r6));
    });
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275element(3, "findqo-agent-ad-item", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50)(5, "mat-icon", 51);
    \u0275\u0275text(6, "arrow_forward_ios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const listing_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("listing", listing_r6)("isEnquiry", true);
  }
}
function EnquiriesComponent_ng_container_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EnquiriesComponent_ng_container_0_Conditional_28_ng_container_0_Template, 7, 2, "ng-container", 47);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r2.dataSource.data);
  }
}
function EnquiriesComponent_ng_container_0_Conditional_29_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
}
function EnquiriesComponent_ng_container_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EnquiriesComponent_ng_container_0_Conditional_29_span_0_Template, 2, 0, "span", 52);
  }
  if (rf & 2) {
    const vm_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !vm_r7.isLoading && (ctx_r2.dataSource == null ? null : ctx_r2.dataSource.data == null ? null : ctx_r2.dataSource.data.length) === 0);
  }
}
function EnquiriesComponent_ng_container_0_th_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-icon", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.columnType == null ? null : ctx_r2.columnType.direction) === "asc" ? "arrow_upward" : "arrow_downward");
  }
}
function EnquiriesComponent_ng_container_0_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53)(1, "div", 54)(2, "span");
    \u0275\u0275text(3, "Enquiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 55);
    \u0275\u0275text(5, "keyboard_arrow_down");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EnquiriesComponent_ng_container_0_th_34_div_6_Template, 3, 1, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const enquiryMenu_r8 = \u0275\u0275reference(36);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", enquiryMenu_r8);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (ctx_r2.columnType == null ? null : ctx_r2.columnType.colName) === "enquiry");
  }
}
function EnquiriesComponent_ng_container_0_td_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 56);
    \u0275\u0275listener("click", function EnquiriesComponent_ng_container_0_td_38_Template_td_click_0_listener() {
      const listing_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onViewEnquiry(listing_r10));
    });
    \u0275\u0275element(1, "findqo-agent-ad-item", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("listing", listing_r10.ad);
  }
}
function EnquiriesComponent_ng_container_0_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Date Received");
    \u0275\u0275elementEnd();
  }
}
function EnquiriesComponent_ng_container_0_td_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (listing_r11 == null ? null : listing_r11.updatedAt) ? \u0275\u0275pipeBind2(2, 1, (listing_r11 == null ? null : listing_r11.updatedAt) * 1e3, "MMMM dd, yyyy") : "N/A", " ");
  }
}
function EnquiriesComponent_ng_container_0_th_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function EnquiriesComponent_ng_container_0_td_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60)(1, "span", 61);
    \u0275\u0275pipe(2, "adStatusFormat");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "adStatusFormat");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const listing_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(\u0275\u0275pipeBind1(2, 2, listing_r12 == null ? null : listing_r12.completionStatus)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (listing_r12 == null ? null : listing_r12.completionStatus) ? \u0275\u0275pipeBind1(4, 4, listing_r12 == null ? null : listing_r12.completionStatus) : "N/A", " ");
  }
}
function EnquiriesComponent_ng_container_0_th_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Assigned to");
    \u0275\u0275elementEnd();
  }
}
function EnquiriesComponent_ng_container_0_td_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((listing_r13 == null ? null : listing_r13.ad == null ? null : listing_r13.ad.agent == null ? null : listing_r13.ad.agent.name) || "N/A");
  }
}
function EnquiriesComponent_ng_container_0_th_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 58);
  }
}
function EnquiriesComponent_ng_container_0_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 62)(1, "mat-icon", 63);
    \u0275\u0275listener("click", function EnquiriesComponent_ng_container_0_td_50_Template_mat_icon_click_1_listener() {
      const listing_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onViewEnquiry(listing_r15));
    });
    \u0275\u0275text(2, "arrow_forward_ios");
    \u0275\u0275elementEnd()();
  }
}
function EnquiriesComponent_ng_container_0_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 64);
  }
}
function EnquiriesComponent_ng_container_0_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 65);
  }
}
function EnquiriesComponent_ng_container_0_tr_53_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 67);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns == null ? null : ctx_r2.displayedColumns.length);
  }
}
function EnquiriesComponent_ng_container_0_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, EnquiriesComponent_ng_container_0_tr_53_td_1_Template, 2, 1, "td", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r7.isLoading);
  }
}
function EnquiriesComponent_ng_container_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-paginator", 69, 2);
    \u0275\u0275listener("page", function EnquiriesComponent_ng_container_0_div_55_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const vm_r7 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event, vm_r7.usersMetaData));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.pageMetadata.total)("pageSize", ctx_r2.pageMetadata.perPage)("pageIndex", +ctx_r2.pageMetadata.currentPage - 1);
  }
}
function EnquiriesComponent_ng_container_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "mat-paginator", 71, 2);
    \u0275\u0275listener("page", function EnquiriesComponent_ng_container_0_div_61_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const vm_r7 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event, vm_r7.usersMetaData));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.pageMetadata.total)("pageSize", ctx_r2.pageMetadata.perPage)("pageIndex", +ctx_r2.pageMetadata.currentPage - 1)("pageSizeOptions", ctx_r2.pageSizeOptions);
  }
}
function EnquiriesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "h3", 8);
    \u0275\u0275text(6, "Enquiries Received");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "mat-form-field", 10)(9, "mat-icon", 11);
    \u0275\u0275text(10, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 12, 0);
    \u0275\u0275listener("keyup", function EnquiriesComponent_ng_container_0_Template_input_keyup_11_listener() {
      \u0275\u0275restoreView(_r1);
      const searchInput_r2 = \u0275\u0275reference(12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch(searchInput_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, EnquiriesComponent_ng_container_0_mat_icon_13_Template, 2, 0, "mat-icon", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 14)(15, "button", 15);
    \u0275\u0275listener("click", function EnquiriesComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFilter());
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Filter ");
    \u0275\u0275template(19, EnquiriesComponent_ng_container_0_span_19_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 17)(21, "span", 18);
    \u0275\u0275text(22, "Enquiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-icon", 19);
    \u0275\u0275text(24, "keyboard_arrow_down");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, EnquiriesComponent_ng_container_0_div_25_Template, 3, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 5)(27, "div", 20);
    \u0275\u0275template(28, EnquiriesComponent_ng_container_0_Conditional_28_Template, 1, 1, "ng-container")(29, EnquiriesComponent_ng_container_0_Conditional_29_Template, 1, 1, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 5)(31, "div", 22)(32, "table", 23);
    \u0275\u0275elementContainerStart(33, 24);
    \u0275\u0275template(34, EnquiriesComponent_ng_container_0_th_34_Template, 7, 2, "th", 25);
    \u0275\u0275elementStart(35, "mat-menu", null, 1)(37, "findqo-sort-menu", 26);
    \u0275\u0275listener("sortChange", function EnquiriesComponent_ng_container_0_Template_findqo_sort_menu_sortChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMenuSort($event.column, $event.direction));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, EnquiriesComponent_ng_container_0_td_38_Template, 2, 1, "td", 27);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(39, 28);
    \u0275\u0275template(40, EnquiriesComponent_ng_container_0_th_40_Template, 2, 0, "th", 29)(41, EnquiriesComponent_ng_container_0_td_41_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(42, 31);
    \u0275\u0275template(43, EnquiriesComponent_ng_container_0_th_43_Template, 2, 0, "th", 29)(44, EnquiriesComponent_ng_container_0_td_44_Template, 5, 6, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(45, 33);
    \u0275\u0275template(46, EnquiriesComponent_ng_container_0_th_46_Template, 2, 0, "th", 29)(47, EnquiriesComponent_ng_container_0_td_47_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(48, 34);
    \u0275\u0275template(49, EnquiriesComponent_ng_container_0_th_49_Template, 1, 0, "th", 29)(50, EnquiriesComponent_ng_container_0_td_50_Template, 3, 0, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(51, EnquiriesComponent_ng_container_0_tr_51_Template, 1, 0, "tr", 36)(52, EnquiriesComponent_ng_container_0_tr_52_Template, 1, 0, "tr", 37)(53, EnquiriesComponent_ng_container_0_tr_53_Template, 2, 1, "tr", 38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 5);
    \u0275\u0275template(55, EnquiriesComponent_ng_container_0_div_55_Template, 3, 3, "div", 39);
    \u0275\u0275elementStart(56, "div", 40);
    \u0275\u0275element(57, "mat-divider");
    \u0275\u0275elementStart(58, "div", 41)(59, "span", 42);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, EnquiriesComponent_ng_container_0_div_61_Template, 3, 4, "div", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const enquiryMenu_r8 = \u0275\u0275reference(36);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r2.searchValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.searchValue);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.filterCount > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("matMenuTriggerFor", enquiryMenu_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.columnType == null ? null : ctx_r2.columnType.colName) === "enquiry");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r2.dataSource == null ? null : ctx_r2.dataSource.data == null ? null : ctx_r2.dataSource.data.length) > 0 ? 28 : 29);
    \u0275\u0275advance(4);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(5);
    \u0275\u0275property("columnName", "enquiry")("ascText", "Oldest to newest")("descText", "Newest to oldest")("activeColumn", ctx_r2.columnType)("direction", "asc");
    \u0275\u0275advance(14);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.pageMetadata);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pageMetadata);
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
var EnquiriesComponent = class _EnquiriesComponent {
  constructor(viewport, dialog, agentHubFacade, destory, route, router) {
    this.viewport = viewport;
    this.dialog = dialog;
    this.agentHubFacade = agentHubFacade;
    this.destory = destory;
    this.route = route;
    this.router = router;
    this.pageSizeOptions = [25, 50, 100, 250, 500];
    this.dataSource = new MatTableDataSource();
    this.selectedRowId = "";
    this.pageLabel = "";
    this.searchValue = "";
    this.searchSubject = new Subject();
    this.filterCount = 0;
    this.sortMap = {
      enquiry: {
        asc: "date-oldest",
        desc: "date-latest"
      }
    };
    this.displayedColumns = ["enquiry", "dateReceived", "status", "assignedTo", "view"];
    this.usersMetaData$ = this.agentHubFacade.pageMetaData$;
    this.statusList$ = this.agentHubFacade.getAdsStatusList$();
    this.isLoading$ = this.agentHubFacade.isLoading$();
  }
  onViewEnquiry(enquiry) {
    this.router.navigate([APP_ROUTE.agentHub.dashboard + "/" + APP_ROUTE.agentHub.enquiryDetail, enquiry?.id]);
  }
  onMenuSort(colName, sortDirection) {
    const sortKey = sortDirection === "clear" ? null : this.sortMap[colName]?.[sortDirection];
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sort: sortKey },
      queryParamsHandling: "merge"
    });
  }
  onClearSearch() {
    this.searchValue = "";
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: null },
      queryParamsHandling: "merge"
    });
  }
  onFilter() {
    this.agentHubFacade.loadAgentList();
    this.dialog.open(FiltersEnquiriesComponent, {
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
    switch (status) {
      case "Completed":
        return "badge-completed";
      case "Pending":
        return "badge-pending";
      default:
        return "";
    }
  }
  onPageChange(paginator, metaData) {
    const currentQueryParams = this.route.snapshot.queryParams;
    this.router.navigate([APP_ROUTE.agentHub.dashboard, APP_ROUTE.agentHub.enquiries], {
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
      const filterKeys = ["aisleId", "userId", "completionStatus"];
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
      this.router.navigate([APP_ROUTE.agentHub.dashboard, APP_ROUTE.agentHub.enquiries], {
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
      return this.agentHubFacade.loadEnquiryList$(params).pipe(map((response) => {
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
    this.\u0275fac = function EnquiriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiriesComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquiriesComponent, selectors: [["findqo-enquiries"]], viewQuery: function EnquiriesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 7);
        \u0275\u0275viewQuery(MatRow, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rows = _t);
      }
    }, standalone: false, features: [\u0275\u0275ProvidersFeature([AdStatusFormatPipe, DestroyService, { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }])], decls: 3, vars: 8, consts: [["searchInput", ""], ["enquiryMenu", "matMenu"], ["paginator", ""], [4, "ngIf"], [1, "container-height", "mt-4"], [1, "container"], [1, "row", "align-items-center", "gap-3", "mb-4"], [1, "col"], [1, "heading-3-regular"], [1, "col-12", "col-md-auto"], ["appearance", "outline", 1, "no-subscript", "w-350"], [1, "icon-18px", "fg-general-4", "me-2"], ["matInput", "", "placeholder", "Search enquiries by name or location", 1, "search", "text-body-regular", 3, "keyup", "value"], ["class", "icon-18px fg-general-4 me-2 cursor-pointer", 3, "click", 4, "ngIf"], [1, "col", "col-md-auto", "d-inline-flex", "justify-content-end"], ["mat-button", "", 1, "rounded-pill", "bg-neutral-2", "fg-general-4", "h-40px", 3, "click"], ["class", "text-caption-regular filter-count", 4, "ngIf"], [1, "d-inline-flex", "ps-3", "d-md-none", "header-height", "align-items-center", "w-100"], [1, "text-body-regular", "fg-general-5"], [1, "icon-18px", "ms-1", 3, "matMenuTriggerFor"], [1, "d-block", "d-md-none"], [1, "d-block", "text-body-regular", "mb-65px"], [1, "table-container", "position-relative", "d-none", "d-md-block", "border", "rounded-3"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "enquiry"], ["mat-header-cell", "", "class", "cursor-pointer", "matSort", "", 3, "matMenuTriggerFor", 4, "matHeaderCellDef"], [3, "sortChange", "columnName", "ascText", "descText", "activeColumn", "direction"], ["mat-cell", "", "class", "cursor-pointer", 3, "click", 4, "matCellDef"], ["matColumnDef", "dateReceived"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-body-regular fg-general-5", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "assignedTo"], ["matColumnDef", "view"], ["mat-cell", "", "class", "p-0", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], ["class", "d-inline-flex w-100 align-items-center justify-content-center d-md-none border-top mb-65px", 4, "ngIf"], [1, "row", "mx-0", "py-9", "align-items-center", "paginator", "justify-content-between", "align-content-center", "w-100", "bottom-0", "bg-basic-1", "d-none", "d-md-flex"], [1, "col-auto", "ps-13"], [1, "fg-general-3", "text-body-regular"], ["class", "col-auto pe-13", 4, "ngIf"], [1, "icon-18px", "fg-general-4", "me-2", "cursor-pointer", 3, "click"], [1, "text-caption-regular", "filter-count"], [1, "fg-general-3", "icon-18px"], [4, "ngFor", "ngForOf"], [1, "row", "align-items-center", "justify-content-end", "border-bottom", 3, "click"], [3, "listing", "isEnquiry"], [1, "col-auto"], [1, "icon-20px", "fg-general-4"], ["class", "d-block text-body-regular mb-65px", 4, "ngIf"], ["mat-header-cell", "", "matSort", "", 1, "cursor-pointer", 3, "matMenuTriggerFor"], [1, "d-inline-flex", "align-items-center", "w-100"], [1, "icon-18px", "ms-1"], ["mat-cell", "", 1, "cursor-pointer", 3, "click"], [3, "listing"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-body-regular", "fg-general-5"], ["mat-cell", ""], [1, "text-caption-regular", "rounded-pill", "px-2", "py-1", "no-wrap", 3, "ngClass"], ["mat-cell", "", 1, "p-0"], [1, "icon-20px", "fg-general-4", "cursor-pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["class", "p-9", 4, "ngIf"], [1, "p-9"], [1, "d-inline-flex", "w-100", "align-items-center", "justify-content-center", "d-md-none", "border-top", "mb-65px"], ["showFirstLastButtons", "", 1, "text-body-regular", "fg-general-3", 3, "page", "length", "pageSize", "pageIndex"], [1, "col-auto", "pe-13"], ["showFirstLastButtons", "", 1, "text-body-regular", "fg-general-3", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"]], template: function EnquiriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EnquiriesComponent_ng_container_0_Template, 62, 18, "ng-container", 3);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c0, \u0275\u0275pipeBind1(1, 1, ctx.usersMetaData$), \u0275\u0275pipeBind1(2, 3, ctx.isLoading$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIcon, MatFormField, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, AgentAdItemComponent, MatMenu, MatMenuTrigger, SortMenuComponent, MatDivider, MatPaginator, AsyncPipe, DatePipe, AdStatusFormatPipe], styles: ['\n\n.badge-completed[_ngcontent-%COMP%] {\n  background-color: var(--success-1);\n  color: var(--success-3);\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background-color: var(--general-1);\n  color: var(--general-3);\n}\n.icon-18px[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n}\n.icon-20px[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.ad-image[_ngcontent-%COMP%] {\n  width: 97px;\n  height: 61px;\n}\n.no-wrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.paginator[_ngcontent-%COMP%] {\n  height: 67px;\n}\n.table-container[_ngcontent-%COMP%] {\n  max-height: calc(100dvh - 222px);\n  font-family: "Poppins", sans-serif !important;\n  overflow: auto;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  height: 60px;\n}\n.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  background: var(--general-1) !important;\n}\n.mat-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.w-350[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.filter-count[_ngcontent-%COMP%] {\n  background-color: var(--sec-3);\n  color: var(--basic-1);\n  border-radius: 50%;\n  padding: 2px 8px;\n  position: absolute;\n  top: -16px;\n  right: -10px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n}\n.header-height[_ngcontent-%COMP%] {\n  height: 56px;\n  background-color: var(--general-1);\n  align-content: center;\n}\n.mb-65px[_ngcontent-%COMP%] {\n  margin-bottom: 65px;\n}\n@media (min-width: 768px) {\n  .container-height[_ngcontent-%COMP%] {\n    height: calc(100dvh - 160px);\n  }\n  .w-350[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/enquiries.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiriesComponent, [{
    type: Component,
    args: [{ selector: "findqo-enquiries", providers: [AdStatusFormatPipe, DestroyService, { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }], standalone: false, template: `<ng-container *ngIf="{ usersMetaData: usersMetaData$ | async, isLoading: isLoading$ | async } as vm">
	<div class="container-height mt-4">
		<div class="container">
			<div class="row align-items-center gap-3 mb-4">
				<div class="col">
					<h3 class="heading-3-regular">Enquiries Received</h3>
				</div>

				<div class="col-12 col-md-auto">
					<mat-form-field appearance="outline" class="no-subscript w-350">
						<mat-icon class="icon-18px fg-general-4 me-2">search</mat-icon>
						<input
							#searchInput
							matInput
							class="search text-body-regular"
							placeholder="Search enquiries by name or location"
							[value]="searchValue"
							(keyup)="onSearch(searchInput.value)"
						/>
						<mat-icon *ngIf="searchValue" class="icon-18px fg-general-4 me-2 cursor-pointer" (click)="onClearSearch()">cancel</mat-icon>
					</mat-form-field>
				</div>

				<div class="col col-md-auto d-inline-flex justify-content-end">
					<button mat-button class="rounded-pill bg-neutral-2 fg-general-4 h-40px" (click)="onFilter()">
						<mat-icon>tune</mat-icon>
						Filter

						<span *ngIf="filterCount > 0" class="text-caption-regular filter-count">{{ filterCount }}</span>
					</button>
				</div>
			</div>
		</div>

		<div class="d-inline-flex ps-3 d-md-none header-height align-items-center w-100">
			<span class="text-body-regular fg-general-5">Enquiry</span>
			<mat-icon class="icon-18px ms-1" [matMenuTriggerFor]="enquiryMenu">keyboard_arrow_down</mat-icon>

			<div *ngIf="columnType?.colName === 'enquiry'">
				<mat-icon class="fg-general-3 icon-18px">{{ columnType?.direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</mat-icon>
			</div>
		</div>

		<div class="container">
			<div class="d-block d-md-none">
				@if (dataSource?.data?.length > 0) {
					<ng-container *ngFor="let listing of dataSource.data">
						<div class="row align-items-center justify-content-end border-bottom" (click)="onViewEnquiry(listing)">
							<div class="col">
								<findqo-agent-ad-item [listing]="listing" [isEnquiry]="true"></findqo-agent-ad-item>
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
			<div class="table-container position-relative d-none d-md-block border rounded-3">
				<table mat-table [dataSource]="dataSource" class="w-100">
					<ng-container matColumnDef="enquiry">
						<th mat-header-cell *matHeaderCellDef class="cursor-pointer" [matMenuTriggerFor]="enquiryMenu" matSort>
							<div class="d-inline-flex align-items-center w-100">
								<span>Enquiry</span>
								<mat-icon class="icon-18px ms-1">keyboard_arrow_down</mat-icon>

								<div *ngIf="columnType?.colName === 'enquiry'">
									<mat-icon class="fg-general-3 icon-18px">{{ columnType?.direction === 'asc' ? 'arrow_upward' : 'arrow_downward' }}</mat-icon>
								</div>
							</div>
						</th>

						<mat-menu #enquiryMenu="matMenu">
							<findqo-sort-menu
								[columnName]="'enquiry'"
								[ascText]="'Oldest to newest'"
								[descText]="'Newest to oldest'"
								[activeColumn]="columnType"
								[direction]="'asc'"
								(sortChange)="onMenuSort($event.column, $event.direction)"
							></findqo-sort-menu>
						</mat-menu>

						<td mat-cell *matCellDef="let listing" class="cursor-pointer" (click)="onViewEnquiry(listing)">
							<findqo-agent-ad-item [listing]="listing.ad"></findqo-agent-ad-item>
						</td>
					</ng-container>

					<ng-container matColumnDef="dateReceived">
						<th mat-header-cell *matHeaderCellDef>Date Received</th>
						<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">
							{{ listing?.updatedAt ? (listing?.updatedAt * 1000 | date: 'MMMM dd, yyyy') : 'N/A' }}
						</td>
					</ng-container>

					<ng-container matColumnDef="status">
						<th mat-header-cell *matHeaderCellDef>Status</th>
						<td mat-cell *matCellDef="let listing">
							<span class="text-caption-regular rounded-pill px-2 py-1 no-wrap" [ngClass]="getStatusClass(listing?.completionStatus | adStatusFormat)">
								{{ listing?.completionStatus ? (listing?.completionStatus | adStatusFormat) : 'N/A' }}
							</span>
						</td>
					</ng-container>

					<ng-container matColumnDef="assignedTo">
						<th mat-header-cell *matHeaderCellDef>Assigned to</th>
						<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">{{ listing?.ad?.agent?.name || 'N/A' }}</td>
					</ng-container>

					<ng-container matColumnDef="view">
						<th mat-header-cell *matHeaderCellDef></th>
						<td mat-cell *matCellDef="let listing" class="p-0">
							<mat-icon class="icon-20px fg-general-4 cursor-pointer" (click)="onViewEnquiry(listing)">arrow_forward_ios</mat-icon>
						</td>
					</ng-container>

					<tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>

					<tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

					<tr *matNoDataRow>
						<td *ngIf="!vm.isLoading" class="p-9" [attr.colspan]="displayedColumns?.length">No records found.</td>
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
</ng-container>
`, styles: ['/* apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiries/enquiries.component.scss */\n.badge-completed {\n  background-color: var(--success-1);\n  color: var(--success-3);\n}\n.badge-pending {\n  background-color: var(--general-1);\n  color: var(--general-3);\n}\n.icon-18px {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n}\n.icon-20px {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.ad-image {\n  width: 97px;\n  height: 61px;\n}\n.no-wrap {\n  white-space: nowrap;\n}\n.paginator {\n  height: 67px;\n}\n.table-container {\n  max-height: calc(100dvh - 222px);\n  font-family: "Poppins", sans-serif !important;\n  overflow: auto;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.table-container::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\nth,\ntd {\n  font-family: "Poppins", sans-serif !important;\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  height: 60px;\n}\n.mat-mdc-header-cell {\n  background: var(--general-1) !important;\n}\n.mat-cell {\n  white-space: nowrap;\n}\n.w-350 {\n  width: 100%;\n}\n.h-40px {\n  height: 40px;\n}\n.filter-count {\n  background-color: var(--sec-3);\n  color: var(--basic-1);\n  border-radius: 50%;\n  padding: 2px 8px;\n  position: absolute;\n  top: -16px;\n  right: -10px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n}\n.header-height {\n  height: 56px;\n  background-color: var(--general-1);\n  align-content: center;\n}\n.mb-65px {\n  margin-bottom: 65px;\n}\n@media (min-width: 768px) {\n  .container-height {\n    height: calc(100dvh - 160px);\n  }\n  .w-350 {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/enquiries.component.css.map */\n'] }]
  }], () => [{ type: ViewportService }, { type: MatDialog }, { type: AgentHubFacade }, { type: DestroyService }, { type: ActivatedRoute }, { type: Router }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator, { static: true }]
  }], rows: [{
    type: ViewChildren,
    args: [MatRow, { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquiriesComponent, { className: "EnquiriesComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiries/enquiries.component.ts", lineNumber: 33 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiries/enquiries-routing.module.ts
var routes = [
  {
    path: "",
    component: EnquiriesComponent
  }
];
var EnquiriesRoutingModule = class _EnquiriesRoutingModule {
  static {
    this.\u0275fac = function EnquiriesRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiriesRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EnquiriesRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiriesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/enquiries/enquiries.module.ts
var EnquiriesModule = class _EnquiriesModule {
  static {
    this.\u0275fac = function EnquiriesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiriesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EnquiriesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      EnquiriesRoutingModule,
      ButtonModule,
      MatBadgeModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      AgentAdItemComponent,
      MatSelectModule,
      ReactiveFormsModule,
      MatMenuModule,
      SortMenuModule,
      MatDividerModule,
      MatPaginatorModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiriesModule, [{
    type: NgModule,
    args: [{
      declarations: [EnquiriesComponent, FiltersEnquiriesComponent],
      imports: [
        SharedModule,
        EnquiriesRoutingModule,
        ButtonModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        AgentAdItemComponent,
        MatSelectModule,
        ReactiveFormsModule,
        MatMenuModule,
        SortMenuModule,
        MatDividerModule,
        MatPaginatorModule
      ]
    }]
  }], null, null);
})();
export {
  EnquiriesModule
};
//# sourceMappingURL=chunk-CJQ6PT2P.js.map
