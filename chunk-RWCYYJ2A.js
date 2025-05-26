import {
  GoogleFeedbackDialogComponent,
  MyAdDeleteDialogComponent,
  MyAdDeleteDialogModule,
  MyAdUnPublishDialogComponent,
  MyAdUnPublishDialogModule,
  UpdateStatusDialogComponent
} from "./chunk-DBVABVQ2.js";
import {
  MyAdsFacade
} from "./chunk-ZVA7FJ7A.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-T6P2TQWL.js";
import {
  GoogleAdModule
} from "./chunk-GV7UKQB5.js";
import "./chunk-OA73AKNS.js";
import {
  AdStampModule
} from "./chunk-744QYGBS.js";
import {
  BrowserUtility,
  MyAdStampComponent,
  require_relativeTime
} from "./chunk-UNPSDH5C.js";
import {
  require_dayjs_min
} from "./chunk-HTJPCHOJ.js";
import "./chunk-VGENAY26.js";
import {
  AdPhotoViewerModule
} from "./chunk-NHXE4UA3.js";
import {
  AdPhotoViewerComponent
} from "./chunk-7LQ3PONV.js";
import "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import "./chunk-KTGQE5R4.js";
import {
  IconService
} from "./chunk-DYYJHWVN.js";
import {
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-GOW5C4RI.js";
import "./chunk-TDH4RB3F.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  CommonPlaceAdService
} from "./chunk-YMEB42LH.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  AdDetailRoutePipe,
  AdImagePipe,
  AdImagePreloadDirective,
  AdPricePipe,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  CommonFacade,
  CommonUtil,
  FeatureIfDirective,
  FeatureVersion,
  FilterStatusPipe,
  FormsModule,
  IconType,
  MAT_DIALOG_DATA,
  MY_ADS_HEADER_STATUS_MAPPING,
  MatAnchor,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDivider,
  MatDividerModule,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatOption,
  NgControlStatus,
  NgModel,
  PlaceAdService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SectionType,
  SharedModule,
  SnackService,
  StorageService,
  ToLocaleUpperCase,
  TranslationsPipe,
  ViewportService,
  WindowService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  SlicePipe,
  TitleCasePipe
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  ViewChild,
  __spreadProps,
  __spreadValues,
  __toESM,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-filter/my-ad-filter.component.ts
function MyAdsFilterComponent_mat_divider_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 14);
  }
}
function MyAdsFilterComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const list_r1 = ctx.$implicit;
    \u0275\u0275property("value", list_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(list_r1.viewValue);
  }
}
function MyAdsFilterComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const list_r2 = ctx.$implicit;
    \u0275\u0275property("value", list_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(list_r2.viewValue);
  }
}
function MyAdsFilterComponent_div_19_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MyAdsFilterComponent_div_19_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSelectAd());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.translations == null ? null : ctx_r3.translations["n228"]);
  }
}
function MyAdsFilterComponent_div_19_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MyAdsFilterComponent_div_19_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancelSelection());
    });
    \u0275\u0275elementStart(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.translations == null ? null : ctx_r3.translations["n526"]);
  }
}
function MyAdsFilterComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-divider", 17);
    \u0275\u0275template(2, MyAdsFilterComponent_div_19_button_2_Template, 3, 1, "button", 18)(3, MyAdsFilterComponent_div_19_button_3_Template, 3, 1, "button", 18);
    \u0275\u0275element(4, "findqo-button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.isCancelselection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isCancelselection);
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r3.buttonType.BASIC)("iconSuffix", ctx_r3.iconType.TRASH_SOLID)("label", ctx_r3.translations == null ? null : ctx_r3.translations["n229"]);
  }
}
function MyAdsFilterComponent_mat_divider_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider");
  }
}
var MyAdsFilterComponent = class _MyAdsFilterComponent {
  constructor(viewport, icon) {
    this.viewport = viewport;
    this.icon = icon;
    this.selectAds = new EventEmitter();
    this.clearSelection = new EventEmitter();
    this.buttonType = ButtonType;
    this.iconType = IconType;
    this.toggleAdsSelection = false;
    this.isCancelselection = false;
    this.adListItems = [
      { value: "0", viewValue: "All Ads" },
      { value: "1", viewValue: "Live Ads" },
      { value: "2", viewValue: "Under Review Ads" },
      { value: "3", viewValue: "Pending Payment Ads" },
      { value: "4", viewValue: "Payment Failed Ads" }
    ];
    this.adListSection = [
      { value: "0", viewValue: "All Section" },
      { value: "1", viewValue: "Motors" },
      { value: "2", viewValue: "Properties" }
    ];
  }
  onSelectAd() {
    this.toggleAdsSelection = !this.toggleAdsSelection;
    this.isCancelselection = true;
    this.selectAds.emit(this.toggleAdsSelection);
  }
  cancelSelection() {
    this.toggleAdsSelection = !this.toggleAdsSelection;
    this.isCancelselection = false;
    this.selectAds.emit(this.toggleAdsSelection);
    this.clearSelection.emit();
  }
  static {
    this.\u0275fac = function MyAdsFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsFilterComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdsFilterComponent, selectors: [["findqo-my-ads-filter"]], inputs: { translations: "translations" }, outputs: { selectAds: "selectAds", clearSelection: "clearSelection" }, standalone: false, decls: 21, vars: 14, consts: [[1, "mb-2"], [1, "row", "mx-0", "align-items-end", "mb-3", "h-35px", "justify-content-between", "row-sm-cols-1"], [1, "col", "px-0"], ["class", "my-3", 4, "ngIf"], [1, "fs-16px", "fs-xl-24px", "fs-sm-24px", "fw-500", "fg-general-5"], ["vertical", "true", 1, "mx-2", "d-inline-block", "h-14px"], [1, "fs-14px", "fs-xl-16px", "fs-sm-16px", "fw-400", "fg-general-3"], [1, "col-md-auto", "px-0"], [1, "row", "mx-0", "gap-2", "row-sm-cols-1"], ["appearance", "outline", 1, "select-filter", "select-filter-value-margin", "no-subscript", "d-block"], ["name", "list", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-auto px-0", 4, "ngIf"], [4, "ngIf"], [1, "my-3"], [3, "value"], [1, "col-auto", "px-0"], ["vertical", "true", 1, "mx-2", "d-inline-block", "h-16px", "align-middle"], ["mat-flat-button", "", "class", "align-middle d-inline-block", 3, "click", 4, "ngIf"], [1, "align-middle", "d-inline-block", "fs-16px", "fw-500", 3, "btnType", "iconSuffix", "label"], ["mat-flat-button", "", 1, "align-middle", "d-inline-block", 3, "click"], [1, "fg-prim-2", "fs-16px", "fw-500"]], template: function MyAdsFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, MyAdsFilterComponent_mat_divider_3_Template, 1, 0, "mat-divider", 3);
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-divider", 5);
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 2)(12, "mat-form-field", 9)(13, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MyAdsFilterComponent_Template_mat_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedAd, $event) || (ctx.selectedAd = $event);
          return $event;
        });
        \u0275\u0275template(14, MyAdsFilterComponent_mat_option_14_Template, 2, 2, "mat-option", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 2)(16, "mat-form-field", 9)(17, "mat-select", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MyAdsFilterComponent_Template_mat_select_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedSection, $event) || (ctx.selectedSection = $event);
          return $event;
        });
        \u0275\u0275template(18, MyAdsFilterComponent_mat_option_18_Template, 2, 2, "mat-option", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(19, MyAdsFilterComponent_div_19_Template, 5, 5, "div", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, MyAdsFilterComponent_mat_divider_20_Template, 1, 0, "mat-divider", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("order-2", ctx.viewport.mobile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.mobile);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.translations == null ? null : ctx.translations["n5"]);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.translations == null ? null : ctx.translations["n187"], " 4 ", ctx.translations == null ? null : ctx.translations["n147"], "");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAd);
        \u0275\u0275property("placeholder", ctx.adListItems[0].viewValue);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.adListItems);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedSection);
        \u0275\u0275property("placeholder", ctx.adListSection[0].viewValue);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.adListSection);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.desktop);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.viewport.mobile);
      }
    }, dependencies: [NgForOf, NgIf, MatButton, MatFormField, MatSelect, MatOption, MatDivider, ButtonComponent, NgControlStatus, NgModel], styles: ["\n\n.h-14px[_ngcontent-%COMP%] {\n  height: 14px;\n}\n.h-16px[_ngcontent-%COMP%] {\n  height: 16px;\n}\n@media (min-width: 1200px) {\n  .h-35px[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-filter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsFilterComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ads-filter", standalone: false, template: `<div class="mb-2">
	<!-- NOTE: The old breadcrumbs was removed because it will not work now. -->
	<!-- <findqo-breadcrumbs></findqo-breadcrumbs> -->
</div>

<div class="row mx-0 align-items-end mb-3 h-35px justify-content-between row-sm-cols-1">
	<div class="col px-0" [class.order-2]="viewport.mobile">
		<mat-divider *ngIf="viewport.mobile" class="my-3"></mat-divider>
		<span class="fs-16px fs-xl-24px fs-sm-24px fw-500 fg-general-5">{{ translations?.['n5']}}</span>
		<mat-divider class="mx-2 d-inline-block h-14px" vertical="true"></mat-divider>
		<span class="fs-14px fs-xl-16px fs-sm-16px fw-400 fg-general-3">{{ translations?.['n187']}} 4 {{ translations?.['n147']}}</span>
	</div>

	<div class="col-md-auto px-0">
		<div class="row mx-0 gap-2 row-sm-cols-1">
			<div class="col px-0">
				<mat-form-field appearance="outline" class="select-filter select-filter-value-margin no-subscript d-block">
					<mat-select [(ngModel)]="selectedAd" name="list" [placeholder]="adListItems[0].viewValue">
						<mat-option *ngFor="let list of adListItems" [value]="list.value">{{ list.viewValue }}</mat-option>
					</mat-select>
				</mat-form-field>
			</div>

			<div class="col px-0">
				<mat-form-field appearance="outline" class="select-filter select-filter-value-margin no-subscript d-block">
					<mat-select [(ngModel)]="selectedSection" name="list" [placeholder]="adListSection[0].viewValue">
						<mat-option *ngFor="let list of adListSection" [value]="list.value">{{ list.viewValue }}</mat-option>
					</mat-select>
				</mat-form-field>
			</div>

			<div class="col-auto px-0" *ngIf="viewport.desktop">
				<mat-divider class="mx-2 d-inline-block h-16px align-middle" vertical="true"></mat-divider>
				<button *ngIf="!isCancelselection" mat-flat-button class="align-middle d-inline-block" (click)="onSelectAd()">
					<span class="fg-prim-2 fs-16px fw-500">{{ translations?.['n228']}}</span>
				</button>
				<button *ngIf="isCancelselection" mat-flat-button class="align-middle d-inline-block" (click)="cancelSelection()">
					<span class="fg-prim-2 fs-16px fw-500">{{ translations?.['n526']}}</span>
				</button>
				<findqo-button
					class="align-middle d-inline-block fs-16px fw-500"
					[btnType]="buttonType.BASIC"
					[iconSuffix]="iconType.TRASH_SOLID"
					[label]=" translations?.['n229']"
				></findqo-button>
			</div>
		</div>
	</div>
</div>

<mat-divider *ngIf="!viewport.mobile"></mat-divider>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-filter/my-ad-filter.component.scss */\n.h-14px {\n  height: 14px;\n}\n.h-16px {\n  height: 16px;\n}\n@media (min-width: 1200px) {\n  .h-35px {\n    height: 35px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-filter.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }], { translations: [{
    type: Input
  }], selectAds: [{
    type: Output
  }], clearSelection: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdsFilterComponent, { className: "MyAdsFilterComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-filter/my-ad-filter.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-filter/my-ad-filter.module.ts
var MyAdsFilterModule = class _MyAdsFilterModule {
  static {
    this.\u0275fac = function MyAdsFilterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsFilterModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdsFilterModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatInputModule, MatSelectModule, MatDividerModule, ButtonModule, FormsModule, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsFilterModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdsFilterComponent],
      imports: [SharedModule, MatInputModule, MatSelectModule, MatDividerModule, ButtonModule, FormsModule, ReactiveFormsModule],
      exports: [MyAdsFilterComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-share-dialog/my-ad-share-dialog.component.ts
var _c0 = ["adLink"];
var MyAdShareDialogComponent = class _MyAdShareDialogComponent {
  constructor(snackBarService, data, commonFacade) {
    this.snackBarService = snackBarService;
    this.data = data;
    this.commonFacade = commonFacade;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  copyAdLink(adLink) {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    navigator.clipboard.writeText(adLink);
    this.snackBarService.open({
      data: { message: TRANSLATIONS["n227"], type: "success" },
      panelClass: "snackbar-success"
    });
  }
  ngAfterViewInit() {
    this.adLink.nativeElement.value = this.data["myAdLink"];
  }
  static {
    this.\u0275fac = function MyAdShareDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdShareDialogComponent)(\u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdShareDialogComponent, selectors: [["findqo-my-ad-share-dialog"]], viewQuery: function MyAdShareDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.adLink = _t.first);
      }
    }, standalone: false, decls: 20, vars: 14, consts: [["adLink", ""], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], ["appearance", "outline", 1, "w-100", "no-subscript", "mt-3"], ["disabled", "", "matInput", "", 1, "text-body-regular", "fg-general-5", 3, "readonly"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "iconPrefix", "isStopPropagation", "btnClass"]], template: function MyAdShareDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "button", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 9);
        \u0275\u0275element(14, "input", 10, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "findqo-button", 13);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275listener("clicked", function MyAdShareDialogComponent_Template_findqo_button_clicked_18_listener() {
          \u0275\u0275restoreView(_r1);
          const adLink_r2 = \u0275\u0275reference(15);
          return \u0275\u0275resetView(ctx.copyAdLink(adLink_r2.value));
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "n195"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "n720"));
        \u0275\u0275advance(3);
        \u0275\u0275property("readonly", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(19, 12, "n226"))("iconPrefix", "copy-link-basic-1")("isStopPropagation", true)("btnClass", "text-body-regular w-100");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatInput, MatFormField, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-share-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdShareDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-share-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n195' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<span class="text-body-regular fg-general-4 mb-3">{{ 'n720' | translations }}</span>

		<mat-form-field appearance="outline" class="w-100 no-subscript mt-3">
			<input disabled [readonly]="true" matInput #adLink class="text-body-regular fg-general-5" />
		</mat-form-field>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n226' | translations"
				[iconPrefix]="'copy-link-basic-1'"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="copyAdLink(adLink.value)"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-share-dialog/my-ad-share-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-share-dialog.component.css.map */\n"] }]
  }], () => [{ type: SnackService }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: CommonFacade }], { adLink: [{
    type: ViewChild,
    args: ["adLink"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdShareDialogComponent, { className: "MyAdShareDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-share-dialog/my-ad-share-dialog.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-share-dialog/my-ad-share-dialog.module.ts
var MyAdShareDialogModule = class _MyAdShareDialogModule {
  static {
    this.\u0275fac = function MyAdShareDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdShareDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdShareDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatInputModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdShareDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdShareDialogComponent],
      imports: [SharedModule, ButtonModule, MatInputModule, MatDialogModule],
      exports: [MyAdShareDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-headers-v2/my-ad-headers-v2.component.ts
function MyAdHeadersv2Component_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementStart(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", (tab_r1 == null ? null : tab_r1.name.toLowerCase()) === ctx_r1.sold ? \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, "n538")) + "/" + \u0275\u0275pipeBind1(4, 8, \u0275\u0275pipeBind1(3, 6, "n3029")) : tab_r1.name, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(tab_r1.adCount);
  }
}
function MyAdHeadersv2Component_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-tab", 4);
    \u0275\u0275template(2, MyAdHeadersv2Component_ng_container_5_ng_template_2_Template, 7, 10, "ng-template", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var MyAdHeadersv2Component = class _MyAdHeadersv2Component {
  constructor(destroyService, myAdsFacade) {
    this.destroyService = destroyService;
    this.myAdsFacade = myAdsFacade;
    this.tabChange = new EventEmitter();
    this.sold = "sold";
    this.adStatusList$ = this.myAdsFacade.getAdsStatusList$();
  }
  onTabChanged(tabIndex) {
    this.tabChange.emit(tabIndex);
  }
  ngOnInit() {
    this.myAdsFacade.loadAdStatusList();
    this.adStatusList$.pipe(takeUntil(this.destroyService)).subscribe((adStatusList) => {
      const MY_ADS_HEADER_STATUS = [
        "all",
        "live",
        "under-review",
        "edit-under-review",
        "draft",
        "unpublished",
        "sold",
        "rejected",
        "payment-failed",
        "payment-pending",
        "expired",
        "property-occupied",
        "sale-agreed"
      ];
      this.myAdHeaderTabs = MY_ADS_HEADER_STATUS.map((reference) => {
        const AD_STATUS_ITEM = adStatusList.find((dataItem) => dataItem.reference === reference);
        return {
          reference,
          name: AD_STATUS_ITEM?.name || "",
          adCount: AD_STATUS_ITEM?.adCount || "0"
        };
      });
    });
  }
  static {
    this.\u0275fac = function MyAdHeadersv2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdHeadersv2Component)(\u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MyAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdHeadersv2Component, selectors: [["findqo-my-ad-headers-v2"]], outputs: { tabChange: "tabChange" }, standalone: false, decls: 6, vars: 4, consts: [[1, "container", "px-0", "mt-3", "mt-xl-4"], [1, "text-title-20px-regular", "fg-general-5", "ms-3", "ms-xl-5"], ["disableRipple", "", 1, "mt-2", 3, "selectedIndexChange"], [4, "ngFor", "ngForOf"], ["label", "item.name"], ["mat-tab-label", ""], [1, "my-ads-count", "ms-2", "fs-12px", "lh-16px", "fw-400", "fg-general-3"]], template: function MyAdHeadersv2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-tab-group", 2);
        \u0275\u0275listener("selectedIndexChange", function MyAdHeadersv2Component_Template_mat_tab_group_selectedIndexChange_4_listener($event) {
          return ctx.onTabChanged($event);
        });
        \u0275\u0275template(5, MyAdHeadersv2Component_ng_container_5_Template, 3, 0, "ng-container", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "n5"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.myAdHeaderTabs);
      }
    }, dependencies: [NgForOf, MatTabLabel, MatTab, MatTabGroup, TitleCasePipe, TranslationsPipe], styles: ["\n\n@media (min-width: 768px) {\n  .w-1280px[_ngcontent-%COMP%] {\n    width: 1280px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-headers-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdHeadersv2Component, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-headers-v2", standalone: false, template: `<div class="container px-0 mt-3 mt-xl-4">
	<h3 class="text-title-20px-regular fg-general-5 ms-3 ms-xl-5">{{ 'n5' | translations }}</h3>

	<mat-tab-group disableRipple class="mt-2" (selectedIndexChange)="onTabChanged($event)">
		<ng-container *ngFor="let tab of myAdHeaderTabs">
			<mat-tab label="item.name">
				<ng-template mat-tab-label>
					{{ tab?.name.toLowerCase() === sold ? ('n538' | translations | titlecase) + '/' + ('n3029' | translations | titlecase) : tab.name }}
					<span class="my-ads-count ms-2 fs-12px lh-16px fw-400 fg-general-3">{{ tab.adCount }}</span>
				</ng-template>
			</mat-tab>
		</ng-container>
	</mat-tab-group>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-headers-v2/my-ad-headers-v2.component.scss */\n@media (min-width: 768px) {\n  .w-1280px {\n    width: 1280px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-headers-v2.component.css.map */\n"] }]
  }], () => [{ type: DestroyService }, { type: MyAdsFacade }], { tabChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdHeadersv2Component, { className: "MyAdHeadersv2Component", filePath: "apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-headers-v2/my-ad-headers-v2.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-headers-v2/my-ad-headers-v2.module.ts
var MyAdHeadersv2Module = class _MyAdHeadersv2Module {
  static {
    this.\u0275fac = function MyAdHeadersv2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdHeadersv2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdHeadersv2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatTabsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdHeadersv2Module, [{
    type: NgModule,
    args: [{
      declarations: [MyAdHeadersv2Component],
      imports: [SharedModule, MatTabsModule],
      exports: [MyAdHeadersv2Component]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-cancel-edit-dialog/my-ad-cancel-edit-dialog.component.ts
var MyAdCancelEditDialogComponent = class _MyAdCancelEditDialogComponent {
  constructor(myAdsFacade, data, dialogRef) {
    this.myAdsFacade = myAdsFacade;
    this.data = data;
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  cancelEditAd() {
    this.myAdsFacade.deleteAd(this.data.adId, this.dialogRef, this.data.myAdHeaderStatusId);
  }
  static {
    this.\u0275fac = function MyAdCancelEditDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdCancelEditDialogComponent)(\u0275\u0275directiveInject(MyAdsFacade), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdCancelEditDialogComponent, selectors: [["findqo-my-ad-cancel-edit-dialog"]], standalone: false, decls: 23, vars: 21, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], [1, "text-body-regular", "fg-general-4"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function MyAdCancelEditDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "findqo-button", 11);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275listener("clicked", function MyAdCancelEditDialogComponent_Template_findqo_button_clicked_18_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 10)(21, "findqo-button", 11);
        \u0275\u0275pipe(22, "translations");
        \u0275\u0275listener("clicked", function MyAdCancelEditDialogComponent_Template_findqo_button_clicked_21_listener() {
          return ctx.cancelEditAd();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "n3143"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "n3144"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "n3133"));
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(19, 17, "n600"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 close-dialog-btn");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(22, 19, "n3145"))("isStopPropagation", true)("btnClass", "text-body-regular w-100");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-cancel-edit-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdCancelEditDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-cancel-edit-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n3143' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="text-body-regular fg-general-4 mb-3">{{ 'n3144' | translations }}</p>
		<p class="text-body-regular fg-general-4">{{ 'n3133' | translations }}</p>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n600' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 close-dialog-btn'"
				(clicked)="onCloseDialog()"
			></findqo-button>
		</div>
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n3145' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="cancelEditAd()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-cancel-edit-dialog/my-ad-cancel-edit-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.alert-danger {\n  border-radius: 4px;\n  border: 1px solid var(--error-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-cancel-edit-dialog.component.css.map */\n"] }]
  }], () => [{ type: MyAdsFacade }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdCancelEditDialogComponent, { className: "MyAdCancelEditDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-cancel-edit-dialog/my-ad-cancel-edit-dialog.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-item-v2/my-ad-item-v2.component.ts
var _c02 = (a0) => [a0];
var _c1 = (a0) => ({ ad: a0 });
function MyAdItemV2Component_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function MyAdItemV2Component_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "mat-icon", 42);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd()();
  }
}
function MyAdItemV2Component_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Ad expired!");
    \u0275\u0275elementEnd();
  }
}
function MyAdItemV2Component_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 44)(2, "mat-icon", 45);
    \u0275\u0275text(3, " schedule ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fg-error-3", +(ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.expireInDays) < 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("fg-error-3", +(ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.expireInDays) < 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(6, 7, "n189"), " ", ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.expireInDays, " ", \u0275\u0275pipeBind1(7, 9, "n190"), " ");
  }
}
function MyAdItemV2Component_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275element(2, "img", 36);
    \u0275\u0275pipe(3, "adImagePipe");
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MyAdItemV2Component_div_2_div_8_Template, 3, 0, "div", 38)(9, MyAdItemV2Component_div_2_span_9_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MyAdItemV2Component_div_2_div_10_Template, 8, 11, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 6, ctx_r0.ad == null ? null : ctx_r0.ad.images[0] == null ? null : ctx_r0.ad.images[0].url))("alt", ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.ad == null ? null : ctx_r0.ad.isFeatured) === "1" ? \u0275\u0275pipeBind1(6, 8, "n260") : \u0275\u0275pipeBind1(7, 10, "n815"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "expired");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "expired");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "live" || ctx_r0.ad.adStatus.status === "property-occupied" || ctx_r0.ad.adStatus.status === "sold" || ctx_r0.ad.adStatus.status === "sale-agreed");
  }
}
function MyAdItemV2Component_findqo_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 47);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_findqo_button_8_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAllPhotos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r0.buttonType.STROKED)("label", \u0275\u0275pipeBind1(1, 4, "n626") + ": " + ctx_r0.ad.images.length)("isStopPropagation", true)("btnClass", "text-small-12px-regular lh-20px my-ads-view-photo w-100 fg-general-1 rounded-pill");
  }
}
function MyAdItemV2Component_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275element(5, "img", 51);
    \u0275\u0275elementStart(6, "p", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "n3686"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSrc", (ctx_r0.ad == null ? null : ctx_r0.ad.agent == null ? null : ctx_r0.ad.agent.picture) || ctx_r0.defaultAvatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ad == null ? null : ctx_r0.ad.agent == null ? null : ctx_r0.ad.agent.name);
  }
}
function MyAdItemV2Component_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3);
  }
}
function MyAdItemV2Component_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, MyAdItemV2Component_div_30_div_1_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ad == null ? null : ctx_r0.ad.propertyExtras);
  }
}
function MyAdItemV2Component_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "span", 58);
    \u0275\u0275element(2, "mat-icon", 59);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "n3048"), " 10 days ");
  }
}
function MyAdItemV2Component_div_32_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "span", 74);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", +(ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants == null ? null : ctx_r0.ad.matchingTenants.length) - 4, "");
  }
}
function MyAdItemV2Component_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 69);
    \u0275\u0275element(2, "img", 70)(3, "img", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MyAdItemV2Component_div_32_div_3_div_4_Template, 3, 1, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", i_r5 > 3 ? "d-none" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", (tenant_r4 == null ? null : tenant_r4.picture) || ctx_r0.defaultAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", "assets/images/place-an-ad/on-hunt-badge.webp");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r5 === 4);
  }
}
function MyAdItemV2Component_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62);
    \u0275\u0275template(3, MyAdItemV2Component_div_32_div_3_Template, 5, 4, "div", 63);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementStart(5, "div", 64)(6, "p", 65);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 66)(11, "a", 67);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementStart(14, "mat-icon", 68);
    \u0275\u0275text(15, " arrow_right_alt ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants == null ? null : ctx_r0.ad.matchingTenants.length) > 0 ? "" : "bg-general-1");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 8, ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants, 0, 5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants == null ? null : ctx_r0.ad.matchingTenants.length, " ", (ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants == null ? null : ctx_r0.ad.matchingTenants.length) === 1 ? \u0275\u0275pipeBind1(8, 12, "n3688") : \u0275\u0275pipeBind1(9, 14, "n3669"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", (ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants == null ? null : ctx_r0.ad.matchingTenants.length) > 0 ? "fg-prim-2" : "fg-general-4")("routerLink", \u0275\u0275pureFunction1(18, _c02, ctx_r0.appRoute.myAdmatchingTenantsId(ctx_r0.ad == null ? null : ctx_r0.ad.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "n2396"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", (ctx_r0.ad == null ? null : ctx_r0.ad.matchingTenants == null ? null : ctx_r0.ad.matchingTenants.length) > 0 ? "fg-prim-2" : "fg-general-4");
  }
}
function MyAdItemV2Component_ng_template_33_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n3670"));
  }
}
function MyAdItemV2Component_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAdItemV2Component_ng_template_33_div_0_Template, 4, 3, "div", 75);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.section == null ? null : ctx_r0.ad.section.reference) === ctx_r0.sectionType.PROPERTIES_FOR_RENT);
  }
}
function MyAdItemV2Component_div_36_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementStart(4, "span", 82)(5, "mat-icon", 83);
    \u0275\u0275text(6, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Ad expired! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.ad == null ? null : ctx_r0.ad.isFeatured) === "1" ? \u0275\u0275pipeBind1(2, 1, "n260") : \u0275\u0275pipeBind1(3, 3, "n815"), " ");
  }
}
function MyAdItemV2Component_div_36_span_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86)(1, "span", 87);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 88);
    \u0275\u0275text(4, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("fg-error-3", +(ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.expireInDays) < 4);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fg-error-3", +(ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.expireInDays) < 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(6, 7, "n189"), " ", ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.expireInDays, " ", \u0275\u0275pipeBind1(7, 9, "n190"), " ");
  }
}
function MyAdItemV2Component_div_36_span_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86)(1, "span", 89);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 91);
    \u0275\u0275text(6, "We\u2019ll notify you by email when it\u2019s live");
    \u0275\u0275elementEnd()();
  }
}
function MyAdItemV2Component_div_36_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275template(4, MyAdItemV2Component_div_36_span_4_span_4_Template, 8, 11, "span", 84)(5, MyAdItemV2Component_div_36_span_4_span_5_Template, 7, 0, "span", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.ad == null ? null : ctx_r0.ad.isFeatured) === "1" ? \u0275\u0275pipeBind1(2, 3, "n260") : \u0275\u0275pipeBind1(3, 5, "n815"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "live" || ctx_r0.ad.adStatus.status === "property-occupied" || ctx_r0.ad.adStatus.status === "sold" || ctx_r0.ad.adStatus.status === "sale-agreed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "under-review");
  }
}
function MyAdItemV2Component_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "img", 79);
    \u0275\u0275pipe(2, "adImagePipe");
    \u0275\u0275template(3, MyAdItemV2Component_div_36_span_3_Template, 8, 5, "span", 80)(4, MyAdItemV2Component_div_36_span_4_Template, 6, 7, "span", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 4, ctx_r0.ad == null ? null : ctx_r0.ad.images[0] == null ? null : ctx_r0.ad.images[0].url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "expired");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status !== "expired");
  }
}
function MyAdItemV2Component_div_38_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 93);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_38_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r6);
      const button_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r7.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 94);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_38_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r6);
      const button_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r7.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r7.label))("iconPrefix", button_r7.iconPrefix)("materialIconPrefix", button_r7.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r7.iconPrefix)("materialIconPrefix", button_r7.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_38_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r7.isMobile);
  }
}
function MyAdItemV2Component_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_38_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "live" && !(button_r7.name === "markAsOccupied" && (ctx_r0.ad == null ? null : ctx_r0.ad.section.reference) === "properties-for-sale" || (button_r7.name === "saleAgreed" || button_r7.name === "sold") && (ctx_r0.ad == null ? null : ctx_r0.ad.section.reference) === "properties-for-rent"));
  }
}
function MyAdItemV2Component_div_39_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 95);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_39_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r8);
      const button_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r9.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 96);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_39_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r8);
      const button_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r9.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 9, button_r9.label))("iconPrefix", button_r9.iconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r9.iconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_39_div_1_ng_container_1_Template, 4, 11, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r9.isMobile);
  }
}
function MyAdItemV2Component_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_39_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "draft");
  }
}
function MyAdItemV2Component_div_40_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 97);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_40_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r10);
      const button_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r11.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 98);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_40_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r10);
      const button_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r11.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r11.label))("iconPrefix", button_r11.iconPrefix)("materialIconPrefix", button_r11.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r11.name === "reactivate" ? " fg-success-3" : " fg-general-4"));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r11.iconPrefix)("materialIconPrefix", button_r11.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r11.name === "reactivate" ? " fg-success-3" : " fg-general-4"));
  }
}
function MyAdItemV2Component_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_40_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r11.isMobile);
  }
}
function MyAdItemV2Component_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_40_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "sold");
  }
}
function MyAdItemV2Component_div_41_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 97);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_41_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r12);
      const button_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r13.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 98);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_41_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r12);
      const button_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r13.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r13.label))("iconPrefix", button_r13.iconPrefix)("materialIconPrefix", button_r13.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r13.name === "reactivate" ? " fg-success-3" : " fg-general-4"));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r13.iconPrefix)("materialIconPrefix", button_r13.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r13.name === "reactivate" ? " fg-success-3" : " fg-general-4"));
  }
}
function MyAdItemV2Component_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_41_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r13.isMobile);
  }
}
function MyAdItemV2Component_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_41_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "property-occupied");
  }
}
function MyAdItemV2Component_div_42_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 99);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_42_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r14);
      const button_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r15.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 98);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_42_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r14);
      const button_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r15.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r15.label))("iconPrefix", button_r15.iconPrefix)("materialIconPrefix", button_r15.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r15.name === "reactivate" ? " fg-success-3" : " fg-general-4"));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r15.iconPrefix)("materialIconPrefix", button_r15.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r15.name === "reactivate" ? " fg-success-3" : " fg-general-4"));
  }
}
function MyAdItemV2Component_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_42_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r15.isMobile);
  }
}
function MyAdItemV2Component_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_42_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "sale-agreed");
  }
}
function MyAdItemV2Component_div_43_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 95);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_43_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r16);
      const button_r17 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r17.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 96);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_43_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r16);
      const button_r17 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r17.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r17 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 9, button_r17.label))("iconPrefix", button_r17.iconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r17.iconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_43_div_1_ng_container_1_Template, 4, 11, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r17.isMobile);
  }
}
function MyAdItemV2Component_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_43_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "rejected");
  }
}
function MyAdItemV2Component_div_44_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 100);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_44_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r18);
      const button_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r19.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 101);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_44_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r18);
      const button_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r19.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r19.label))("iconPrefix", button_r19.iconPrefix)("materialIconPrefix", button_r19.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r19.iconPrefix)("materialIconPrefix", button_r19.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_44_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r19.isMobile);
  }
}
function MyAdItemV2Component_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_44_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "under-review");
  }
}
function MyAdItemV2Component_div_45_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 100);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_45_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r20);
      const button_r21 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r21.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 101);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_45_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r20);
      const button_r21 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r21.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r21 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r21.label))("iconPrefix", button_r21.iconPrefix)("materialIconPrefix", button_r21.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r21.iconPrefix)("materialIconPrefix", button_r21.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_45_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r21.isMobile);
  }
}
function MyAdItemV2Component_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_45_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "edit-under-review");
  }
}
function MyAdItemV2Component_div_46_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 100);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_46_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r22);
      const button_r23 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r23.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 101);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_46_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r22);
      const button_r23 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r23.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r23 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r23.label))("iconPrefix", button_r23.iconPrefix)("materialIconPrefix", button_r23.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r23.iconPrefix)("materialIconPrefix", button_r23.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_46_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r23.isMobile);
  }
}
function MyAdItemV2Component_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_46_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "payment-pending");
  }
}
function MyAdItemV2Component_div_47_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 102);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_47_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r24);
      const button_r25 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r25.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 103);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_47_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r24);
      const button_r25 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r25.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r25 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("d-block", button_r25.name === "renew-ad")("d-none", button_r25.name === "delete")("expired-button", button_r25.name === "renew-ad")("bg-prim-2", button_r25.name === "renew-ad");
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 26, button_r25.label))("iconPrefix", button_r25.name === "delete" ? button_r25.iconPrefix : null)("materialIconPrefix", button_r25.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center " + (button_r25.name === "renew-ad" ? " fg-basic-1  bg-primary-2 " : " fg-general-4"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("d-none", button_r25.name === "renew-ad")("expired-button", button_r25.name === "renew-ad")("bg-prim-2", button_r25.name === "renew-ad");
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r25.name === "delete" ? button_r25.iconPrefix : null)("materialIconPrefix", button_r25.materialIconPrefix)("iconPrefix", button_r25.iconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px align-self-center" + (button_r25.name === "renew-ad" ? " fg-basic-1 " : " fg-general-4"));
  }
}
function MyAdItemV2Component_div_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_47_div_1_ng_container_1_Template, 4, 28, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r25.isMobile);
  }
}
function MyAdItemV2Component_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_47_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "expired");
  }
}
function MyAdItemV2Component_div_48_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "findqo-button", 93);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_48_div_1_ng_container_1_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r26);
      const button_r27 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r27.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 94);
    \u0275\u0275listener("clicked", function MyAdItemV2Component_div_48_div_1_ng_container_1_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r26);
      const button_r27 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onButtonClick(button_r27.name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const button_r27 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("label", \u0275\u0275pipeBind1(2, 11, button_r27.label))("iconPrefix", button_r27.iconPrefix)("materialIconPrefix", button_r27.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.BASIC)("iconPrefix", button_r27.iconPrefix)("materialIconPrefix", button_r27.materialIconPrefix)("isStopPropagation", true)("btnClass", "fs-14px fw-400 lh-18px fg-general-4 align-self-center");
  }
}
function MyAdItemV2Component_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_48_div_1_ng_container_1_Template, 4, 13, "ng-container", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", button_r27.isMobile);
  }
}
function MyAdItemV2Component_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MyAdItemV2Component_div_48_div_1_Template, 2, 1, "div", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad.adStatus.status === "unpublished");
  }
}
function MyAdItemV2Component_button_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275element(1, "mat-icon", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r28 = \u0275\u0275reference(51);
    \u0275\u0275property("matMenuTriggerFor", menu_r28)("matMenuTriggerData", \u0275\u0275pureFunction1(2, _c1, ctx_r0.ad));
  }
}
function MyAdItemV2Component_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function MyAdItemV2Component_ng_template_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.shareAd());
    });
    \u0275\u0275element(1, "mat-icon", 107);
    \u0275\u0275elementStart(2, "span", 108);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 109);
    \u0275\u0275pipe(6, "adDetailRoute");
    \u0275\u0275element(7, "mat-icon", 110);
    \u0275\u0275elementStart(8, "span", 108);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 106);
    \u0275\u0275listener("click", function MyAdItemV2Component_ng_template_52_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteAd());
    });
    \u0275\u0275element(12, "mat-icon", 111);
    \u0275\u0275elementStart(13, "span", 108);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ad_r30 = ctx.ad;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "n195"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(6, 6, ad_r30));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "n3192"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "n193"));
  }
}
function MyAdItemV2Component_findqo_button_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-button", 112);
    \u0275\u0275pipe(1, "translations");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "n209"))("btnType", ctx_r0.buttonType.FILLED);
  }
}
function MyAdItemV2Component_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "div", 115);
    \u0275\u0275element(3, "mat-icon", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 117)(5, "span", 118);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, "n3966"));
  }
}
var MyAdItemV2Component = class _MyAdItemV2Component {
  constructor(viewport, icon, dialog, router, placeAdService, adDetailRoutePipe, sharedAdsFacade, window, utility, commonFacade, myAdsFacade, storage, snack, matDialog) {
    this.viewport = viewport;
    this.icon = icon;
    this.dialog = dialog;
    this.router = router;
    this.placeAdService = placeAdService;
    this.adDetailRoutePipe = adDetailRoutePipe;
    this.sharedAdsFacade = sharedAdsFacade;
    this.window = window;
    this.utility = utility;
    this.commonFacade = commonFacade;
    this.myAdsFacade = myAdsFacade;
    this.storage = storage;
    this.snack = snack;
    this.matDialog = matDialog;
    this.isAdRejected = false;
    this.iconType = IconType;
    this.buttonType = ButtonType;
    this.defaultAvatar = environment.defaultAvatarImg;
    this.sectionType = SectionType;
    this.appRoute = APP_ROUTE;
    this.buttonTypes = {
      live: [
        { name: "createViewing", label: "n3945", materialIconPrefix: "link", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true },
        { name: "unpublish", label: "n4099", materialIconPrefix: "pause_circle_outline", isMobile: true },
        { name: "markAsOccupied", label: "n3146", materialIconPrefix: "check_box", isMobile: true },
        { name: "saleAgreed", label: "n4106", materialIconPrefix: "check_box", isMobile: true },
        { name: "sold", label: "n552", materialIconPrefix: "sell", isMobile: true }
      ],
      draft: [
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true }
      ],
      rejected: [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true }
      ],
      "under-review": [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ],
      "edit-under-review": [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true },
        { name: "cancel-edit", label: "n234", iconPrefix: "cancel-edit", isMobile: true }
      ],
      "payment-pending": [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ],
      expired: [
        { name: "renew-ad", label: "Renew ad", materialIconPrefix: "replay", iconPrefix: "replay", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ],
      unpublish: [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true },
        { name: "publish", label: "n4098", materialIconPrefix: "play_circle_outline", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ],
      "property-occupied": [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "unpublish", label: "n4099", materialIconPrefix: "pause_circle_outline", isMobile: true },
        { name: "markAsAvailable", label: "n4105", materialIconPrefix: "timer", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ],
      "sale-agreed": [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "edit", label: "n192", iconPrefix: "edit", isMobile: true },
        { name: "unpublish", label: "n4099", materialIconPrefix: "pause_circle_outline", isMobile: true },
        { name: "markAsAvailable", label: "n4105", materialIconPrefix: "timer", isMobile: true },
        { name: "sold", label: "n552", materialIconPrefix: "sell", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ],
      sold: [
        { name: "preview", label: "n3192", iconPrefix: "preview", isMobile: true },
        { name: "markAsAvailable", label: "n4105", materialIconPrefix: "timer", isMobile: true },
        { name: "delete", label: "n193", iconPrefix: "delete", isMobile: true }
      ]
    };
  }
  onButtonClick(methodName) {
    switch (methodName) {
      case "markAsOccupied":
        this.markAsOccupied();
        break;
      case "delete":
        this.deleteAd();
        break;
      case "preview":
        this.previewAd();
        break;
      case "cancel-edit":
        this.cancelEditAd();
        break;
      case "edit":
        this.editAd();
        break;
      case "renew-ad":
      case "expired":
        this.reactivateAd();
        break;
      case "createViewing":
        this.router.navigate([APP_ROUTE.meetingSchedule.base, APP_ROUTE.meetingSchedule.add], { queryParams: { adId: this.ad.id } });
        break;
      case "unpublish":
        this.unpublishAd();
        break;
      case "publish":
        this.publishAd();
        break;
      case "markAsAvailable":
        this.markAsAvailable();
        break;
      case "saleAgreed":
        this.markAsSaleAgreed();
        break;
      case "sold":
        this.markAsSold();
        break;
      default:
    }
  }
  reactivateAd() {
    this.placeAdService.setTabIndex(7);
    this.router.navigate([APP_ROUTE.editAd, this.ad.id]);
  }
  editAd() {
    this.router.navigate([APP_ROUTE.editAd, this.ad.id]);
  }
  showAllPhotos() {
    this.dialog.open(AdPhotoViewerComponent, {
      width: "100%",
      height: "100%",
      data: {
        ad: this.ad,
        sharedAdsFacade: this.sharedAdsFacade
      },
      panelClass: "ad-images"
    });
  }
  cancelEditAd() {
    this.dialog.open(MyAdCancelEditDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, myAdHeaderStatusId: this.headerTabIndex }
    }).afterClosed();
  }
  shareAd() {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    const AVALABLE_FROM = this.ad.availableFrom ? TRANSLATIONS?.["n3111"] + ": " + this.commonFacade.getFormattedDate(this.ad.availableFrom) : "";
    if (this.utility.isWebShareSupported()) {
      navigator.share({
        title: this.ad?.title,
        text: `${this.ad?.title}
${TRANSLATIONS?.["n152"]}:  ${+this.ad.price.isPriceOnApplication ? TRANSLATIONS?.["n3311"] : this.ad.price.symbol + this.ad.price.minValue + " " + (this.ad.price.maxValue ? " - " + this.ad.price.maxValue : "")}
${AVALABLE_FROM}
${TRANSLATIONS?.["n3953"]}
`,
        url: this.ad?.adlink ?? this.window.reference.location.href
      }).then(() => {
        console.log("Content shared successfully!");
      }).catch((error) => {
        console.error("Error sharing content:", error);
      });
    } else {
      this.dialog.open(MyAdShareDialogComponent, {
        disableClose: true,
        maxWidth: "407px",
        data: { myAdLink: this.ad.adlink }
      }).afterClosed();
    }
  }
  previewAd() {
    this.router.navigate(this.adDetailRoutePipe.transform(this.ad));
  }
  deleteAd() {
    this.dialog.open(MyAdDeleteDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, myAdHeaderStatusId: this.headerTabIndex }
    }).afterClosed();
  }
  unpublishAd() {
    this.dialog.open(MyAdUnPublishDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, updatestatus: "unpublished", myAdHeaderStatusId: this.headerTabIndex }
    }).afterClosed();
  }
  publishAd() {
    this.myAdsFacade.publishAd(this.ad.id, "live", this.headerTabIndex);
  }
  markAsOccupied() {
    this.dialog.open(UpdateStatusDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, myAdHeaderStatusId: this.headerTabIndex, status: "property-occupied" }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.sharedAdsFacade.updateAd({ adStatus: { status: "property-occupied" } });
      this.snack.open({ data: { message: "This property is now marked as Occupied.", type: "success" }, panelClass: ["snackbar-success"] });
      this.myAdsFacade.loadAdList();
      if (this.storage.getItem("isAdFeedbackSet") !== "true") {
        this.matDialog.open(GoogleFeedbackDialogComponent, {
          disableClose: true,
          maxWidth: "350px"
        }).afterClosed().subscribe((res2) => {
          if (res2) {
            this.storage.setItem("isAdFeedbackSet", "true");
          }
        });
      }
    });
  }
  markAsAvailable() {
    this.dialog.open(UpdateStatusDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, myAdHeaderStatusId: this.headerTabIndex, status: "live" }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.sharedAdsFacade.updateAd({ adStatus: { status: "live" } });
      this.snack.open({ data: { message: "This property is now marked live.", type: "success" }, panelClass: ["snackbar-success"] });
      this.myAdsFacade.loadAdList();
      if (this.storage.getItem("isAdFeedbackSet") !== "true") {
        this.matDialog.open(GoogleFeedbackDialogComponent, {
          disableClose: true,
          maxWidth: "350px"
        }).afterClosed().subscribe((res2) => {
          if (res2) {
            this.storage.setItem("isAdFeedbackSet", "true");
          }
        });
      }
    });
  }
  markAsSaleAgreed() {
    this.dialog.open(UpdateStatusDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, myAdHeaderStatusId: this.headerTabIndex, status: "sale-agreed" }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.sharedAdsFacade.updateAd({ adStatus: { status: "sale-agreed" } });
      this.snack.open({ data: { message: "This property is now marked as Sale Agreed.", type: "success" }, panelClass: ["snackbar-success"] });
      this.myAdsFacade.loadAdList();
      if (this.storage.getItem("isAdFeedbackSet") !== "true") {
        this.matDialog.open(GoogleFeedbackDialogComponent, {
          disableClose: true,
          maxWidth: "350px"
        }).afterClosed().subscribe((res2) => {
          if (res2) {
            this.storage.setItem("isAdFeedbackSet", "true");
          }
        });
      }
    });
  }
  markAsSold() {
    this.dialog.open(UpdateStatusDialogComponent, {
      disableClose: true,
      maxWidth: "407px",
      data: { adId: this.ad.id, myAdHeaderStatusId: this.headerTabIndex, status: "sold" }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.sharedAdsFacade.updateAd({ adStatus: { status: "sold" } });
      this.snack.open({ data: { message: "This property is now marked Sold.", type: "success" }, panelClass: ["snackbar-success"] });
      this.myAdsFacade.loadAdList();
      if (this.storage.getItem("isAdFeedbackSet") !== "true") {
        this.matDialog.open(GoogleFeedbackDialogComponent, {
          disableClose: true,
          maxWidth: "350px"
        }).afterClosed().subscribe((res2) => {
          if (res2) {
            this.storage.setItem("isAdFeedbackSet", "true");
          }
        });
      }
    });
  }
  static {
    this.\u0275fac = function MyAdItemV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdItemV2Component)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PlaceAdService), \u0275\u0275directiveInject(AdDetailRoutePipe), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(BrowserUtility), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(MyAdsFacade), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdItemV2Component, selectors: [["findqo-my-ad-item-v2"]], inputs: { ad: "ad", headerTabIndex: "headerTabIndex" }, standalone: false, features: [\u0275\u0275ProvidersFeature([AdDetailRoutePipe])], decls: 55, vars: 41, consts: [["noMatchesTemplate", ""], ["menu", "matMenu"], ["class", "ad-item-divider", 4, "ngIf"], ["class", "row mx-0 px-3 justify-content-between h-55px", 4, "ngIf"], [1, "mb-sm-3"], [1, "row", "ad-style", "border-bottom"], [1, "col-md-auto", "px-0", "position-relative", "image-width"], [1, "image-container", "image-width"], [1, "position-absolute", "p-2", "bottom-0"], ["iconPrefix", "view-photo", 3, "btnType", "label", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], ["findqoAdImage", "", "priority", "", "fill", "", 1, "ad-image", "image-width", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "col-md", "p-3"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", "gap-4", "gap-md-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "flex-column", "flex-sm-row", "gap-2", "align-items-start", "align-items-sm-center"], [1, "fg-general-5", "lh-20px", "text-title-16px-regular"], [3, "adStatus"], [1, "text-body-regular", "fg-general-3", "w-auto", "d-inline-block"], [1, "d-block", "fs-16px", "fw-400", "lh-20px", "fg-general-5", "mb-1"], [1, "fg-general-3", "fs-14px", "lh-18px", "fw-400"], ["class", "d-flex gap-2 mt-1 mb-2", 4, "ngIf"], ["class", "row mx-0 gap-2", 4, "ngIf"], ["class", "top-0 position-absolute spotlight px-2 h-25px", 4, "ngIf"], ["class", "row align-items-center justify-content-between justify-content-sm-start gap-sm-2 tenant-list border-bottom border-top px-3", 3, "ngClass", 4, "ngIf", "ngIfElse"], [1, "row", "mx-0", "px-3", 3, "ngClass"], ["class", "col-auto px-0 align-self-center", 4, "ngIf"], [1, "col-auto", "px-0", "d-inline-flex", "h-50px", "align-items-center"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", "style", "width: 35px; height: 35px", "class", "bg-general-1 rounded-pill", 3, "matMenuTriggerFor", "matMenuTriggerData", 4, "ngIf"], ["yPosition", "above", "xPosition", "before"], ["matMenuContent", ""], ["class", "retry-payment-btn", "btnClass", "text-small-14px-regular", 3, "label", "btnType", 4, "ngIf"], ["class", "p-3 alert-border", 4, "ngIf"], [1, "ad-item-divider"], [1, "row", "mx-0", "px-3", "justify-content-between", "h-55px"], [1, "col-auto", "px-0", "align-self-center", "expiry-date"], ["loading", "lazy", "width", "45", "height", "30", "findqoAdImage", "", 1, "business-information", "rounded-pill", "me-2", "object-fit-cover", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "fg-general-3", "fs-14px", "fw-400", "lh-18px", "d-inline-flex"], ["class", "ms-2 d-inline-block", 4, "ngIf"], ["class", "fs-14px fw-400 lh-18px fg-error-3 d-inline-block align-middle", 4, "ngIf"], ["class", "col-auto px-0 align-self-center expiry-date", 4, "ngIf"], [1, "ms-2", "d-inline-block"], ["iconPositionEnd", "", "color", "fg-error-3", 1, "icon", "material-symbols-outlined", "schedule", "me-2", "fg-error-3"], [1, "fs-14px", "fw-400", "lh-18px", "fg-error-3", "d-inline-block", "align-middle"], [1, "d-inline-block"], ["iconPositionEnd", "", 1, "fg-general-3", "material-symbols-outlined", "schedule", "icon", "me-2"], [1, "fs-14px", "fw-400", "lh-18px", "fg-general-3", "d-inline-block", "align-middle"], ["iconPrefix", "view-photo", 3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], [1, "d-flex", "gap-2", "mt-1", "mb-2"], [1, "text-body-regular", "fg-general-3"], [1, "d-flex", "gap-1"], ["width", "18", "height", "18", 1, "agent-img", 3, "ngSrc"], [1, "text-body-regular", "fg-general-5"], [1, "row", "mx-0", "gap-2"], ["class", "col-auto status", 4, "ngFor", "ngForOf"], [1, "col-auto", "status"], [1, "fs-12px", "fw-400", "lh-16px", "fg-info-3"], [1, "top-0", "position-absolute", "spotlight", "px-2", "h-25px"], [1, "fs-12px", "fw-400", "lh-16px", "fg-prim-2", "d-inline-flex"], ["iconPositionEnd", "", "svgIcon", "timer", 1, "timer", "me-2"], [1, "row", "align-items-center", "justify-content-between", "justify-content-sm-start", "gap-sm-2", "tenant-list", "border-bottom", "border-top", "px-3", 3, "ngClass"], [1, "col", "col-sm-auto"], [1, "row", "align-items-center"], ["class", "col-auto", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "fg-general-3", "text-caption-regular", "ms-sm-3"], [1, "col-auto"], ["mat-button", "", 1, "text-body-regular", 3, "ngClass", "routerLink"], ["iconPositionEnd", "", 1, "material-icons", "align-middle", 3, "ngClass"], [1, "position-relative", "avatar", 3, "ngClass"], ["width", "36", "height", "36", "priority", "", 1, "border-radius-100", "tenant-img", 3, "ngSrc"], ["alt", "on hunt badge", "fill", "", 1, "on-hunt-badge", 3, "ngSrc"], ["class", "tenant-count bg-prim-2", 4, "ngIf"], [1, "tenant-count", "bg-prim-2"], [1, "text-body-medium", "fg-basic-1"], ["class", "justify-content-start border-bottom border-top px-3 py-2 col col-auto bg-general-1", 4, "ngIf"], [1, "justify-content-start", "border-bottom", "border-top", "px-3", "py-2", "col", "col-auto", "bg-general-1"], [1, "fg-general-4", "text-caption-medium"], [1, "col-auto", "px-0", "align-self-center"], ["loading", "lazy", "width", "45", "height", "30", "findqoAdImage", "", 1, "business-information", "rounded-pill", "me-2", "object-fit-cover", "image-skeleton-loader", 3, "src", "alt"], ["class", "expiry-date fg-general-3 fs-14px fw-400 lh-18px d-inline-flex", 4, "ngIf"], [1, "expiry-date", "fg-general-3", "fs-14px", "fw-400", "lh-18px", "d-inline-flex"], [1, "ms-2", "d-inline-flex", "fg-error-3", "expiry-date"], ["color", "fg-error-3", 1, "material-symbols-outlined", "schedule", "me-2", "fg-error-3"], ["class", "expiry-date d-inline-flex fg-general-3", 3, "fg-error-3", 4, "ngIf"], ["class", "expiry-date d-inline-flex fg-general-3", 4, "ngIf"], [1, "expiry-date", "d-inline-flex", "fg-general-3"], [1, "fg-general-2", "mx-2"], [1, "material-symbols-outlined", "schedule", "me-2"], [1, "fg-general-3", "mx-2"], [1, "fg-success-3", "text-body-regular"], [1, "text-body-regular", "fg-general-4", "ms-2"], [4, "ngIf"], ["btnIconClass", "material-symbols-outlined", 1, "fg-general-4", "d-none", "d-lg-block", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], ["btnIconClass", "material-symbols-outlined", 1, "fg-general-4", "d-block", "d-lg-none", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], [1, "fg-general-4", "d-none", "d-lg-block", 3, "clicked", "btnType", "label", "iconPrefix", "isStopPropagation", "btnClass"], [1, "fg-general-4", "d-block", "d-lg-none", 3, "clicked", "btnType", "label", "iconPrefix", "isStopPropagation", "btnClass"], ["btnIconClass", "material-symbols-outlined", 1, "d-none", "d-lg-block", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], ["btnIconClass", "material-symbols-outlined", 1, "d-block", "d-lg-none", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], ["btnIconClass", "material-symbols-outlined", "btnIconClass", "material-symbols-outlined", 1, "d-none", "d-lg-block", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], [1, "fg-general-4", "d-none", "d-lg-block", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], [1, "fg-general-4", "d-block", "d-lg-none", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], [1, "fg-general-4", "text-body-regular", "d-lg-block", 3, "clicked", "btnType", "label", "iconPrefix", "materialIconPrefix", "isStopPropagation", "btnClass"], [1, "fg-general-4", "text-body-regular", "d-block", "d-lg-none", 3, "clicked", "btnType", "iconPrefix", "label", "materialIconPrefix", "isStopPropagation", "btnClass"], ["mat-icon-button", "", 1, "bg-general-1", "rounded-pill", 2, "width", "35px", "height", "35px", 3, "matMenuTriggerFor", "matMenuTriggerData"], ["svgIcon", "more-general-4", 1, "justify-content-center"], ["mat-menu-item", "", 2, "height", "40px !important", "width", "100%", 3, "click"], ["svgIcon", "share-ad", 1, "me-2"], [1, "text-body-regular", "fg-general-4"], ["mat-menu-item", "", 2, "height", "40px !important", "width", "100%", 3, "routerLink"], ["svgIcon", "preview", 1, "me-2"], ["svgIcon", "delete", 1, "me-2"], ["btnClass", "text-small-14px-regular", 1, "retry-payment-btn", 3, "label", "btnType"], [1, "p-3", "alert-border"], [1, "row", "m-0", "alert", "alert-danger", "p-2", "gap-2", "align-items-center"], [1, "col-auto", "px-0"], ["svgIcon", "warning", 1, "warning-icon"], [1, "col", "px-0"], [1, "fs-14px", "fw-400", "lh-18px", "fg-error-3"]], template: function MyAdItemV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275template(1, MyAdItemV2Component_div_1_Template, 1, 0, "div", 2)(2, MyAdItemV2Component_div_2_Template, 11, 12, "div", 3);
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8);
        \u0275\u0275template(8, MyAdItemV2Component_findqo_button_8_Template, 2, 6, "findqo-button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "img", 10);
        \u0275\u0275pipe(10, "adImagePipe");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "span", 15);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "adPrice");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "findqo-my-ad-stamp", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 17);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementStart(22, "span");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div")(25, "h4", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 19);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, MyAdItemV2Component_div_29_Template, 8, 5, "div", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, MyAdItemV2Component_div_30_Template, 2, 1, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, MyAdItemV2Component_div_31_Template, 5, 3, "div", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, MyAdItemV2Component_div_32_Template, 16, 20, "div", 23)(33, MyAdItemV2Component_ng_template_33_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(35, "div", 24);
        \u0275\u0275template(36, MyAdItemV2Component_div_36_Template, 5, 6, "div", 25);
        \u0275\u0275elementStart(37, "div", 26);
        \u0275\u0275template(38, MyAdItemV2Component_div_38_Template, 2, 1, "div", 27)(39, MyAdItemV2Component_div_39_Template, 2, 1, "div", 27)(40, MyAdItemV2Component_div_40_Template, 2, 1, "div", 27)(41, MyAdItemV2Component_div_41_Template, 2, 1, "div", 27)(42, MyAdItemV2Component_div_42_Template, 2, 1, "div", 27)(43, MyAdItemV2Component_div_43_Template, 2, 1, "div", 27)(44, MyAdItemV2Component_div_44_Template, 2, 1, "div", 27)(45, MyAdItemV2Component_div_45_Template, 2, 1, "div", 27)(46, MyAdItemV2Component_div_46_Template, 2, 1, "div", 27)(47, MyAdItemV2Component_div_47_Template, 2, 1, "div", 27)(48, MyAdItemV2Component_div_48_Template, 2, 1, "div", 27)(49, MyAdItemV2Component_button_49_Template, 2, 4, "button", 28);
        \u0275\u0275elementStart(50, "mat-menu", 29, 1);
        \u0275\u0275template(52, MyAdItemV2Component_ng_template_52_Template, 16, 12, "ng-template", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275template(53, MyAdItemV2Component_findqo_button_53_Template, 2, 4, "findqo-button", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(54, MyAdItemV2Component_div_54_Template, 8, 3, "div", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        const noMatchesTemplate_r31 = \u0275\u0275reference(34);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.mobile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.mobile);
        \u0275\u0275advance();
        \u0275\u0275classProp("desktop-advertisement", !ctx.viewport.mobile);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.images.length) !== 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(10, 34, ctx.ad == null ? null : ctx.ad.images[0] == null ? null : ctx.ad.images[0].url))("alt", ctx.ad.title);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 36, ctx.ad == null ? null : ctx.ad.price, ctx.ad == null ? null : ctx.ad.rentalPeriod), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("adStatus", ctx.ad == null ? null : ctx.ad.adStatus == null ? null : ctx.ad.adStatus.status);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 39, "n3677"), ": ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\xA0", ctx.ad == null ? null : ctx.ad.id, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.ad == null ? null : ctx.ad.title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.ad == null ? null : ctx.ad.countyArea, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ad == null ? null : ctx.ad.agent == null ? null : ctx.ad.agent.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.propertyExtras) && (ctx.ad == null ? null : ctx.ad.propertyExtras == null ? null : ctx.ad.propertyExtras.length) >= 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.desktop && (ctx.ad == null ? null : ctx.ad.isSpotlight));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.section == null ? null : ctx.ad.section.reference) === ctx.sectionType.PROPERTIES_FOR_RENT && (ctx.ad == null ? null : ctx.ad.matchingTenants == null ? null : ctx.ad.matchingTenants.length) > 0)("ngIfElse", noMatchesTemplate_r31);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", !ctx.viewport.mobile ? "justify-content-between" : "justify-content-end");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.viewport.mobile);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.buttonTypes["live"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["draft"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["sold"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["property-occupied"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["sale-agreed"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["rejected"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["under-review"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["edit-under-review"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["payment-pending"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["expired"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.buttonTypes["unpublish"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ad.adStatus.status === "live");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.isAdRejected);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.adStatus == null ? null : ctx.ad.adStatus.status) === "rejected");
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatAnchor, MatIconButton, MatIcon, RouterLink, NgOptimizedImage, AdImagePreloadDirective, ButtonComponent, MyAdStampComponent, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger, SlicePipe, AdImagePipe, TranslationsPipe, AdDetailRoutePipe, AdPricePipe], styles: ["\n\n.expiry-date[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  align-items: center;\n  display: inline-flex;\n  align-items: center;\n}\n.icon[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.expired-button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\ndiv.col.position-relative[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\nfindqo-button.icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px !important;\n  height: 20px !important;\n}\n.ad-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n  border-top-left-radius: 4px;\n  z-index: -1;\n}\n.image-container[_ngcontent-%COMP%] {\n  height: 190px;\n}\n.view-photos[_ngcontent-%COMP%] {\n  bottom: 8px;\n  width: unset;\n  background-color: rgba(26, 31, 46, 0.65);\n  border: 1px solid var(--general-3) !important;\n}\n.view-photos[_ngcontent-%COMP%]   .fa-image[_ngcontent-%COMP%] {\n  height: 10px !important;\n  width: auto !important;\n}\n.view-photos[_ngcontent-%COMP%]:hover {\n  background-color: rgba(26, 31, 46, 0.5) !important;\n}\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.desktop-advertisement[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  position: relative;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--general-2);\n}\n.divider[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n}\n.ad-item-divider[_ngcontent-%COMP%] {\n  height: 16px;\n  background: var(--general-1);\n}\n.ad-img-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background: var(--general-1);\n}\n.spotlight[_ngcontent-%COMP%] {\n  inset-inline-end: 0;\n  border-radius: 0px 0px 0px 5px;\n  border: 1px solid var(--prim-2);\n  border-top: none;\n}\n.timer[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.access-timer[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  display: inline-block !important;\n}\n.business-information[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 30px;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  height: 25px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--info-1);\n}\n.h-50px[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.h-55px[_ngcontent-%COMP%] {\n  height: 55px;\n}\n.h-25px[_ngcontent-%COMP%] {\n  height: 25px;\n}\n.alert-border[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--general-2);\n}\n.warning-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.help-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\nfindqo-button.retry-payment-btn[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n.retry-payment-btn[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n@media (min-width: 576px) {\n  findqo-button.phone[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 150px;\n  }\n  button[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 150px;\n  }\n  .ad-image[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 150px;\n  }\n}\n@media (max-width: 767.98px) {\n  .image-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .ad-image[_ngcontent-%COMP%] {\n    border-radius: 0px !important;\n  }\n}\n.tenant-img[_ngcontent-%COMP%] {\n  border: 2px solid var(--basic-1);\n  margin-inline-end: -10px;\n  border-radius: 100px;\n}\n.tenant-count[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 100px;\n  line-height: 36px;\n  text-align: center;\n}\n.tenant-list[_ngcontent-%COMP%] {\n  background-color: rgba(255, 90, 184, 0.08);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 1px soild var(--general-1);\n}\n.on-hunt-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.agent-img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-item-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdItemV2Component, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-item-v2", providers: [AdDetailRoutePipe], standalone: false, template: `<ng-container>
	<div *ngIf="viewport.mobile" class="ad-item-divider"></div>
	<div class="row mx-0 px-3 justify-content-between h-55px" *ngIf="viewport.mobile">
		<div class="col-auto px-0 align-self-center expiry-date">
			<img
				[ngSrc]="ad?.images[0]?.url | adImagePipe"
				class="business-information rounded-pill me-2 object-fit-cover image-skeleton-loader"
				[alt]="ad?.title"
				loading="lazy"
				width="45"
				height="30"
				findqoAdImage
			/>
			<span class="fg-general-3 fs-14px fw-400 lh-18px d-inline-flex">
				{{ ad?.isFeatured === '1' ? ('n260' | translations) : ('n815' | translations) }}
			</span>
			<div *ngIf="ad.adStatus.status === 'expired'" class="ms-2 d-inline-block">
				<mat-icon iconPositionEnd color="fg-error-3" class="icon material-symbols-outlined schedule me-2 fg-error-3">schedule</mat-icon>
			</div>

			<span *ngIf="ad.adStatus.status === 'expired'" class="fs-14px fw-400 lh-18px fg-error-3 d-inline-block align-middle">Ad expired!</span>
		</div>

		<div
			class="col-auto px-0 align-self-center expiry-date"
			*ngIf="
				ad.adStatus.status === 'live' || ad.adStatus.status === 'property-occupied' || ad.adStatus.status === 'sold' || ad.adStatus.status === 'sale-agreed'
			"
		>
			<div class="d-inline-block">
				<mat-icon [class.fg-error-3]="+ad?.adStatus?.expireInDays < 4" iconPositionEnd class="fg-general-3 material-symbols-outlined schedule icon me-2">
					schedule
				</mat-icon>
			</div>

			<span [class.fg-error-3]="+ad?.adStatus?.expireInDays < 4" class="fs-14px fw-400 lh-18px fg-general-3 d-inline-block align-middle">
				{{ 'n189' | translations }} {{ ad?.adStatus?.expireInDays }} {{ 'n190' | translations }}
			</span>
		</div>
	</div>

	<div [class.desktop-advertisement]="!viewport.mobile" class="mb-sm-3">
		<div class="row ad-style border-bottom">
			<div class="col-md-auto px-0 position-relative image-width">
				<div class="image-container image-width">
					<div class="position-absolute p-2 bottom-0">
						<findqo-button
							*ngIf="ad?.images.length !== 0"
							[btnType]="buttonType.STROKED"
							[label]="('n626' | translations) + ': ' + ad.images.length"
							iconPrefix="view-photo"
							(clicked)="showAllPhotos()"
							[isStopPropagation]="true"
							[btnClass]="'text-small-12px-regular lh-20px my-ads-view-photo w-100 fg-general-1 rounded-pill'"
						></findqo-button>
					</div>

					<img findqoAdImage priority fill class="ad-image image-width image-skeleton-loader" [ngSrc]="ad?.images[0]?.url | adImagePipe" [alt]="ad.title" />
				</div>
			</div>

			<div class="col-md p-3">
				<div class="d-flex flex-column justify-content-between h-100 gap-4 gap-md-0">
					<div class="d-flex align-items-center justify-content-between">
						<div class="d-flex flex-column flex-sm-row gap-2 align-items-start align-items-sm-center">
							<span class="fg-general-5 lh-20px text-title-16px-regular">
								{{ ad?.price | adPrice: ad?.rentalPeriod }}
							</span>

							<findqo-my-ad-stamp [adStatus]="ad?.adStatus?.status"></findqo-my-ad-stamp>
						</div>

						<p class="text-body-regular fg-general-3 w-auto d-inline-block">
							{{ 'n3677' | translations }}:
							<span>&nbsp;{{ ad?.id }}</span>
						</p>
					</div>

					<div>
						<h4 class="d-block fs-16px fw-400 lh-20px fg-general-5 mb-1">
							{{ ad?.title }}
						</h4>

						<span class="fg-general-3 fs-14px lh-18px fw-400">
							{{ ad?.countyArea }}
						</span>

						<div *ngIf="ad?.agent?.name" class="d-flex gap-2 mt-1 mb-2">
							<span class="text-body-regular fg-general-3">{{ 'n3686' | translations }}:</span>

							<div class="d-flex gap-1">
								<img [ngSrc]="ad?.agent?.picture || defaultAvatar" width="18" height="18" class="agent-img" />

								<p class="text-body-regular fg-general-5">{{ ad?.agent?.name }}</p>
							</div>
						</div>
					</div>

					<div class="row mx-0 gap-2" *ngIf="ad?.propertyExtras && ad?.propertyExtras?.length >= 1">
						<div class="col-auto status" *ngFor="let item of ad?.propertyExtras">
							<span class="fs-12px fw-400 lh-16px fg-info-3">{{ item }}</span>
						</div>
					</div>
				</div>

				<div class="top-0 position-absolute spotlight px-2 h-25px" *ngIf="viewport.desktop && ad?.isSpotlight">
					<span class="fs-12px fw-400 lh-16px fg-prim-2 d-inline-flex">
						<mat-icon iconPositionEnd svgIcon="timer" class="timer me-2"></mat-icon>
						<!-- TODO: Add the no of days for spotlight from the API -->
						{{ 'n3048' | translations }} 10 days
					</span>
				</div>
			</div>
		</div>

		<div
			class="row align-items-center justify-content-between justify-content-sm-start gap-sm-2 tenant-list border-bottom border-top px-3"
			*ngIf="ad?.section?.reference === sectionType.PROPERTIES_FOR_RENT && ad?.matchingTenants?.length > 0; else noMatchesTemplate"
			[ngClass]="ad?.matchingTenants?.length > 0 ? '' : 'bg-general-1'"
		>
			<div class="col col-sm-auto">
				<div class="row align-items-center">
					<div *ngFor="let tenant of ad?.matchingTenants | slice: 0 : 5; let i = index" class="col-auto">
						<div class="position-relative avatar" [ngClass]="i > 3 ? 'd-none' : ''">
							<img [ngSrc]="tenant?.picture || defaultAvatar" width="36" height="36" class="border-radius-100 tenant-img" priority />

							<img [ngSrc]="'assets/images/place-an-ad/on-hunt-badge.webp'" alt="on hunt badge" class="on-hunt-badge" fill />
						</div>

						<div class="tenant-count bg-prim-2" *ngIf="i === 4">
							<span class="text-body-medium fg-basic-1">+{{ +ad?.matchingTenants?.length - 4 }}</span>
						</div>
					</div>

					<div class="col-sm">
						<p class="fg-general-3 text-caption-regular ms-sm-3">
							{{ ad?.matchingTenants?.length }} {{ ad?.matchingTenants?.length === 1 ? ('n3688' | translations) : ('n3669' | translations) }}
						</p>
					</div>
				</div>
			</div>

			<div class="col-auto">
				<a
					mat-button
					class="text-body-regular"
					[ngClass]="ad?.matchingTenants?.length > 0 ? 'fg-prim-2' : 'fg-general-4'"
					[routerLink]="[appRoute.myAdmatchingTenantsId(ad?.id)]"
				>
					{{ 'n2396' | translations }}

					<mat-icon class="material-icons align-middle" iconPositionEnd [ngClass]="ad?.matchingTenants?.length > 0 ? 'fg-prim-2' : 'fg-general-4'">
						arrow_right_alt
					</mat-icon>
				</a>
			</div>
		</div>
		<ng-template #noMatchesTemplate>
			<div
				*ngIf="ad?.section?.reference === sectionType.PROPERTIES_FOR_RENT"
				class="justify-content-start border-bottom border-top px-3 py-2 col col-auto bg-general-1"
			>
				<p class="fg-general-4 text-caption-medium">{{ 'n3670' | translations }}</p>
			</div>
		</ng-template>

		<div class="row mx-0 px-3" [ngClass]="!viewport.mobile ? 'justify-content-between' : 'justify-content-end'">
			<div class="col-auto px-0 align-self-center" *ngIf="!viewport.mobile">
				<img
					[src]="ad?.images[0]?.url | adImagePipe"
					class="business-information rounded-pill me-2 object-fit-cover image-skeleton-loader"
					[alt]="ad?.title"
					loading="lazy"
					width="45"
					height="30"
					findqoAdImage
				/>
				<span *ngIf="ad.adStatus.status === 'expired'" class="expiry-date fg-general-3 fs-14px fw-400 lh-18px d-inline-flex">
					{{ ad?.isFeatured === '1' ? ('n260' | translations) : ('n815' | translations) }}

					<span class="ms-2 d-inline-flex fg-error-3 expiry-date">
						<mat-icon color="fg-error-3" class="material-symbols-outlined schedule me-2 fg-error-3">schedule</mat-icon>

						Ad expired!
					</span>
				</span>

				<span *ngIf="ad.adStatus.status !== 'expired'" class="expiry-date fg-general-3 fs-14px fw-400 lh-18px d-inline-flex">
					{{ ad?.isFeatured === '1' ? ('n260' | translations) : ('n815' | translations) }}
					<span
						*ngIf="
							ad.adStatus.status === 'live' ||
							ad.adStatus.status === 'property-occupied' ||
							ad.adStatus.status === 'sold' ||
							ad.adStatus.status === 'sale-agreed'
						"
						class="expiry-date d-inline-flex fg-general-3"
						[class.fg-error-3]="+ad?.adStatus?.expireInDays < 4"
					>
						<span class="fg-general-2 mx-2">&bull;</span>

						<mat-icon [class.fg-error-3]="+ad?.adStatus?.expireInDays < 4" class="material-symbols-outlined schedule me-2">schedule</mat-icon>

						{{ 'n189' | translations }} {{ ad?.adStatus?.expireInDays }} {{ 'n190' | translations }}
					</span>
					<span *ngIf="ad.adStatus.status === 'under-review'" class="expiry-date d-inline-flex fg-general-3">
						<span class="fg-general-3 mx-2">&bull;</span>

						<span class="fg-success-3 text-body-regular">Submitted</span>
						<span class="text-body-regular fg-general-4 ms-2">We\u2019ll notify you by email when it\u2019s live</span>
					</span>
				</span>
			</div>

			<div class="col-auto px-0 d-inline-flex h-50px align-items-center">
				<!-- Live -->
				<div *ngFor="let button of buttonTypes['live']">
					<div
						*ngIf="
							ad.adStatus.status === 'live' &&
							!(
								(button.name === 'markAsOccupied' && this.ad?.section.reference === 'properties-for-sale') ||
								((button.name === 'saleAgreed' || button.name === 'sold') && this.ad?.section.reference === 'properties-for-rent')
							)
						"
					>
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>

							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								btnIconClass="material-symbols-outlined"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Draft -->
				<div *ngFor="let button of buttonTypes['draft']">
					<div *ngIf="ad.adStatus.status === 'draft'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Occupied -->
				<div *ngFor="let button of buttonTypes['sold']">
					<div *ngIf="ad.adStatus.status === 'sold'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'reactivate' ? ' fg-success-3' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'reactivate' ? ' fg-success-3' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Property Occupied -->
				<div *ngFor="let button of buttonTypes['property-occupied']">
					<div *ngIf="ad.adStatus.status === 'property-occupied'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								btnIconClass="material-symbols-outlined"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'reactivate' ? ' fg-success-3' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								btnIconClass="material-symbols-outlined"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'reactivate' ? ' fg-success-3' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Sale Agreed -->
				<div *ngFor="let button of buttonTypes['sale-agreed']">
					<div *ngIf="ad.adStatus.status === 'sale-agreed'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								btnIconClass="material-symbols-outlined"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'reactivate' ? ' fg-success-3' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'reactivate' ? ' fg-success-3' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Rejected  -->
				<div *ngFor="let button of buttonTypes['rejected']">
					<div *ngIf="ad.adStatus.status === 'rejected'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!--  Under-Review -->
				<div *ngFor="let button of buttonTypes['under-review']">
					<div *ngIf="ad.adStatus.status === 'under-review'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!--  Edit-Under-Review -->
				<div *ngFor="let button of buttonTypes['edit-under-review']">
					<div *ngIf="ad.adStatus.status === 'edit-under-review'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!--  payment-pending -->
				<div *ngFor="let button of buttonTypes['payment-pending']">
					<div *ngIf="ad.adStatus.status === 'payment-pending'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Expired -->
				<div *ngFor="let button of buttonTypes['expired']">
					<div *ngIf="ad.adStatus.status === 'expired'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								[class.d-block]="button.name === 'renew-ad'"
								[class.d-none]="button.name === 'delete'"
								[class.expired-button]="button.name === 'renew-ad'"
								[class.bg-prim-2]="button.name === 'renew-ad'"
								class="fg-general-4 text-body-regular d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.name === 'delete' ? button.iconPrefix : null"
								[materialIconPrefix]="button.materialIconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center ' + (button.name === 'renew-ad' ? ' fg-basic-1  bg-primary-2 ' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								[class.d-none]="button.name === 'renew-ad'"
								[class.expired-button]="button.name === 'renew-ad'"
								[class.bg-prim-2]="button.name === 'renew-ad'"
								class="fg-general-4 text-body-regular d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[iconPrefix]="button.name === 'delete' ? button.iconPrefix : null"
								[label]=""
								[materialIconPrefix]="button.materialIconPrefix"
								[iconPrefix]="button.iconPrefix"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px align-self-center' + (button.name === 'renew-ad' ? ' fg-basic-1 ' : ' fg-general-4')"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>
				<!-- UnPublish -->
				<div *ngFor="let button of buttonTypes['unpublish']">
					<div *ngIf="ad.adStatus.status === 'unpublished'">
						<ng-container *ngIf="button.isMobile">
							<findqo-button
								class="fg-general-4 d-none d-lg-block"
								[btnType]="buttonType.BASIC"
								[label]="button.label | translations"
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
							<findqo-button
								class="fg-general-4 d-block d-lg-none"
								[btnType]="buttonType.BASIC"
								[label]=""
								[iconPrefix]="button.iconPrefix"
								[materialIconPrefix]="button.materialIconPrefix"
								btnIconClass="material-symbols-outlined"
								[isStopPropagation]="true"
								[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
								(clicked)="onButtonClick(button.name)"
							></findqo-button>
						</ng-container>
					</div>
				</div>

				<!-- Publish -->
				<!-- <div *ngFor="let button of buttonTypes['publish']">
					<div *ngIf="ad.adStatus.status === 'unpublish'">
						<findqo-button
							class="fg-general-4"
							[btnType]="buttonType.BASIC"
							[label]="button.label | translations"
							[iconPrefix]="button.iconPrefix"
							[materialIconPrefix]="button.materialIconPrefix"
							[isStopPropagation]="true"
							[btnClass]="'fs-14px fw-400 lh-18px fg-general-4 align-self-center'"
							(clicked)="onButtonClick(button.name)"
						></findqo-button>
					</div>
				</div> -->
				<button
					mat-icon-button
					[matMenuTriggerFor]="menu"
					[matMenuTriggerData]="{ ad }"
					style="width: 35px; height: 35px"
					class="bg-general-1 rounded-pill"
					*ngIf="ad.adStatus.status === 'live'"
				>
					<mat-icon svgIcon="more-general-4" class="justify-content-center"></mat-icon>
				</button>

				<mat-menu #menu="matMenu" yPosition="above" xPosition="before">
					<ng-template matMenuContent let-ad="ad">
						<button mat-menu-item style="height: 40px !important; width: 100%" (click)="shareAd()">
							<mat-icon svgIcon="share-ad" class="me-2"></mat-icon>
							<span class="text-body-regular fg-general-4">{{ 'n195' | translations }}</span>
						</button>

						<a mat-menu-item style="height: 40px !important; width: 100%" [routerLink]="ad | adDetailRoute">
							<mat-icon svgIcon="preview" class="me-2"></mat-icon>
							<span class="text-body-regular fg-general-4">{{ 'n3192' | translations }}</span>
						</a>

						<button mat-menu-item style="height: 40px !important; width: 100%" (click)="deleteAd()">
							<mat-icon svgIcon="delete" class="me-2"></mat-icon>
							<span class="text-body-regular fg-general-4">{{ 'n193' | translations }}</span>
						</button>

						<!-- <button mat-menu-item style="height: 40px !important; width: 100%" (click)="onButtonClick('markAsOccupied')">
							<mat-icon svgIcon="inventory" class="me-2"></mat-icon>
							<span class="text-body-regular fg-general-4">{{ 'n3050' | translations }}</span>
						</button> -->
					</ng-template>
				</mat-menu>

				<findqo-button
					*ngIf="isAdRejected"
					class="retry-payment-btn"
					btnClass="text-small-14px-regular"
					[label]="'n209' | translations"
					[btnType]="buttonType.FILLED"
				></findqo-button>
			</div>
		</div>

		<!-- Alert message will be shown if ad is Rejected -->
		<div class="p-3 alert-border" *ngIf="ad?.adStatus?.status === 'rejected'">
			<div class="row m-0 alert alert-danger p-2 gap-2 align-items-center">
				<div class="col-auto px-0">
					<mat-icon svgIcon="warning" class="warning-icon"></mat-icon>
				</div>

				<!-- Rejected message will be coming from API -->
				<div class="col px-0">
					<span class="fs-14px fw-400 lh-18px fg-error-3">{{ 'n3966' | translations }}</span>
				</div>
			</div>
		</div>
	</div>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-item-v2/my-ad-item-v2.component.scss */\n.expiry-date {\n  vertical-align: middle;\n  align-items: center;\n  display: inline-flex;\n  align-items: center;\n}\n.icon {\n  overflow: visible !important;\n}\nbutton {\n  width: 34px;\n  height: 34px;\n}\n.expired-button {\n  border-radius: 4px;\n}\ndiv.col.position-relative {\n  padding: 0 !important;\n}\nfindqo-button.icon {\n  display: block;\n  width: 20px !important;\n  height: 20px !important;\n}\n.ad-image {\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n  border-top-left-radius: 4px;\n  z-index: -1;\n}\n.image-container {\n  height: 190px;\n}\n.view-photos {\n  bottom: 8px;\n  width: unset;\n  background-color: rgba(26, 31, 46, 0.65);\n  border: 1px solid var(--general-3) !important;\n}\n.view-photos .fa-image {\n  height: 10px !important;\n  width: auto !important;\n}\n.view-photos:hover {\n  background-color: rgba(26, 31, 46, 0.5) !important;\n}\nfindqo-button.phone {\n  height: 40px;\n}\n.desktop-advertisement {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n  position: relative;\n}\n.border-bottom {\n  border-bottom: 1px solid var(--general-2);\n}\n.divider {\n  width: 5px;\n  height: 5px;\n}\n.ad-item-divider {\n  height: 16px;\n  background: var(--general-1);\n}\n.ad-img-btn {\n  width: 35px;\n  height: 35px;\n  background: var(--general-1);\n}\n.spotlight {\n  inset-inline-end: 0;\n  border-radius: 0px 0px 0px 5px;\n  border: 1px solid var(--prim-2);\n  border-top: none;\n}\n.timer {\n  width: 15px;\n  height: 15px;\n}\n.access-timer {\n  width: 18px;\n  height: 18px;\n  display: inline-block !important;\n}\n.business-information {\n  width: 45px;\n  height: 30px;\n}\n.status {\n  padding: 0px 12px;\n  height: 25px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--info-1);\n}\n.h-50px {\n  height: 50px;\n}\n.h-55px {\n  height: 55px;\n}\n.h-25px {\n  height: 25px;\n}\n.alert-border {\n  border-top: 1px solid var(--general-2);\n}\n.warning-icon {\n  width: 20px;\n  height: 20px;\n}\n.help-icon {\n  width: 18px;\n  height: 18px;\n}\nfindqo-button.retry-payment-btn {\n  height: 40px !important;\n}\n.retry-payment-btn {\n  height: 40px !important;\n}\n@media (min-width: 576px) {\n  findqo-button.phone {\n    height: 40px;\n    width: 150px;\n  }\n  button {\n    width: 38px;\n    height: 38px;\n  }\n  .image-container {\n    width: 250px;\n    height: 150px;\n  }\n  .ad-image {\n    width: 250px;\n    height: 150px;\n  }\n}\n@media (max-width: 767.98px) {\n  .image-width {\n    width: 100%;\n  }\n  .ad-image {\n    border-radius: 0px !important;\n  }\n}\n.tenant-img {\n  border: 2px solid var(--basic-1);\n  margin-inline-end: -10px;\n  border-radius: 100px;\n}\n.tenant-count {\n  width: 36px;\n  height: 36px;\n  border-radius: 100px;\n  line-height: 36px;\n  text-align: center;\n}\n.tenant-list {\n  background-color: rgba(255, 90, 184, 0.08);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 1px soild var(--general-1);\n}\n.on-hunt-badge {\n  position: absolute;\n  bottom: 0;\n}\n.avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.agent-img {\n  border-radius: 50%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-item-v2.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }, { type: MatDialog }, { type: Router }, { type: PlaceAdService }, { type: AdDetailRoutePipe }, { type: SharedAdsFacade }, { type: WindowService }, { type: BrowserUtility }, { type: CommonFacade }, { type: MyAdsFacade }, { type: StorageService }, { type: SnackService }, { type: MatDialog }], { ad: [{
    type: Input
  }], headerTabIndex: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdItemV2Component, { className: "MyAdItemV2Component", filePath: "apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-item-v2/my-ad-item-v2.component.ts", lineNumber: 35 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-occupied-dialog/my-ad-occupied-dialog.component.ts
var MyAdOccupiedDialogComponent = class _MyAdOccupiedDialogComponent {
  constructor(data, dialogRef, myAdsFacade) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.myAdsFacade = myAdsFacade;
    this.iconType = IconType;
    this.buttonType = ButtonType;
  }
  onCloseDialog() {
    this.dialogRef.close();
  }
  markAsSold() {
    this.myAdsFacade.soldAd(this.data.adId, this.dialogRef, this.data.myAdHeaderStatusId);
  }
  static {
    this.\u0275fac = function MyAdOccupiedDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdOccupiedDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MyAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdOccupiedDialogComponent, selectors: [["findqo-my-ad-occupied-dialog"]], standalone: false, decls: 29, vars: 24, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-4", "mb-3"], [1, "text-body-regular", "fg-general-4"], [1, "alert", "alert-primary", "p-1", "mt-4", "mb-0"], [1, "d-inline-block", "align-middle"], ["svgIcon", "info-outlined", 1, "me-2"], [1, "text-body-regular", "fg-info-3", "text-start", "align-middle"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function MyAdOccupiedDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
        \u0275\u0275element(18, "mat-icon", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "findqo-button", 15);
        \u0275\u0275pipe(25, "translations");
        \u0275\u0275listener("clicked", function MyAdOccupiedDialogComponent_Template_findqo_button_clicked_24_listener() {
          return ctx.onCloseDialog();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 14)(27, "findqo-button", 15);
        \u0275\u0275pipe(28, "translations");
        \u0275\u0275listener("clicked", function MyAdOccupiedDialogComponent_Template_findqo_button_clicked_27_listener() {
          return ctx.markAsSold();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "n3146"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "n3147"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "n3133"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "n3148"));
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(25, 20, "n112"))("isStopPropagation", true)("btnClass", "text-body-regular w-100 close-dialog-btn");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(28, 22, "n3146"))("isStopPropagation", true)("btnClass", "text-body-regular w-100");
      }
    }, dependencies: [MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-occupied-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdOccupiedDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-occupied-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4 fg-general-5 m-0">{{ 'n3146' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="text-body-regular fg-general-4 mb-3">{{ 'n3147' | translations }}</p>
		<p class="text-body-regular fg-general-4">{{ 'n3133' | translations }}</p>

		<div class="alert alert-primary p-1 mt-4 mb-0">
			<div class="d-inline-block align-middle">
				<mat-icon svgIcon="info-outlined" class="me-2"></mat-icon>
			</div>

			<span class="text-body-regular fg-info-3 text-start align-middle">{{ 'n3148' | translations }}</span>
		</div>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n112' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100 close-dialog-btn'"
				(clicked)="onCloseDialog()"
			></findqo-button>
		</div>
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n3146' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="markAsSold()"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-occupied-dialog/my-ad-occupied-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-occupied-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: MyAdsFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdOccupiedDialogComponent, { className: "MyAdOccupiedDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-occupied-dialog/my-ad-occupied-dialog.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-occupied-dialog/my-ad-occupied-dialog.module.ts
var MyAdOccupiedDialogModule = class _MyAdOccupiedDialogModule {
  static {
    this.\u0275fac = function MyAdOccupiedDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdOccupiedDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdOccupiedDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdOccupiedDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdOccupiedDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [MyAdOccupiedDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-cancel-edit-dialog/my-ad-cancel-edit-dialog.module.ts
var MyAdCancelEditDialogModule = class _MyAdCancelEditDialogModule {
  static {
    this.\u0275fac = function MyAdCancelEditDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdCancelEditDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdCancelEditDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdCancelEditDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdCancelEditDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [MyAdCancelEditDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/updateStatusDialog/update-status-dialog.module.ts
var UpdateStatusDialogModule = class _UpdateStatusDialogModule {
  static {
    this.\u0275fac = function UpdateStatusDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdateStatusDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UpdateStatusDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateStatusDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [UpdateStatusDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [UpdateStatusDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-item-v2/my-ad-item-v2.module.ts
var MyAdItemV2Module = class _MyAdItemV2Module {
  static {
    this.\u0275fac = function MyAdItemV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdItemV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdItemV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      ButtonModule,
      AdPhotoViewerModule,
      AdStampModule,
      MyAdOccupiedDialogModule,
      MyAdCancelEditDialogModule,
      MatMenuModule,
      UpdateStatusDialogModule,
      GoogleAdModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdItemV2Module, [{
    type: NgModule,
    args: [{
      declarations: [MyAdItemV2Component],
      imports: [
        SharedModule,
        ButtonModule,
        AdPhotoViewerModule,
        AdStampModule,
        MyAdOccupiedDialogModule,
        MyAdCancelEditDialogModule,
        MatMenuModule,
        UpdateStatusDialogModule,
        GoogleAdModule
      ],
      exports: [MyAdItemV2Component]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-list-skeleton-v2/my-ad-list-skeleton-v2.component.ts
var MyAdListSkeletonComponentV2 = class _MyAdListSkeletonComponentV2 {
  static {
    this.\u0275fac = function MyAdListSkeletonComponentV2_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdListSkeletonComponentV2)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdListSkeletonComponentV2, selectors: [["findqo-my-ad-list-skeleton-v2"]], standalone: false, decls: 7, vars: 0, consts: [[1, "container", "px-0", "my-3"], [1, "row", "mx-0", "px-0", "px-xl-3"], [1, "col-sm-auto", "px-0", "placeholder-wave", "w-250px", "h-200px", "gradient", "placeholder"], [1, "col", "p-xl-3", "d-flex", "align-items-start", "flex-column", "h-200px"], [1, "placeholder", "pe-0", "gradient", "h-24px", "mb-auto", "w-162px", "mt-3", "mt-xl-0"], [1, "placeholder", "pe-0", "gradient", "h-24px", "w-314px"], [1, "placeholder", "pe-0", "gradient", "h-24px", "mt-12px", "w-187px"]], template: function MyAdListSkeletonComponentV2_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.gradient[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 0%,\n      #d1d5db 100%);\n}\n.h-24px[_ngcontent-%COMP%] {\n  height: 24px;\n}\n.mt-12px[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.h-200px[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.w-162px[_ngcontent-%COMP%] {\n  width: 168px;\n}\n.w-314px[_ngcontent-%COMP%] {\n  width: 314px;\n}\n.w-187px[_ngcontent-%COMP%] {\n  width: 187px;\n}\n@media (min-width: 576px) {\n  .w-250px[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n@media (max-width: 575.98px) {\n  .w-250x[_ngcontent-%COMP%] {\n    width: 375px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-list-skeleton-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdListSkeletonComponentV2, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-list-skeleton-v2", standalone: false, template: '<div class="container px-0 my-3">\n	<div class="row mx-0 px-0 px-xl-3">\n		<div class="col-sm-auto px-0 placeholder-wave w-250px h-200px gradient placeholder"></div>\n		<div class="col p-xl-3 d-flex align-items-start flex-column h-200px">\n			<div class="placeholder pe-0 gradient h-24px mb-auto w-162px mt-3 mt-xl-0"></div>\n\n			<div class="placeholder pe-0 gradient h-24px w-314px"></div>\n\n			<div class="placeholder pe-0 gradient h-24px mt-12px w-187px"></div>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-list-skeleton-v2/my-ad-list-skeleton-v2.component.scss */\n.gradient {\n  border-radius: 5px;\n  background:\n    linear-gradient(\n      90deg,\n      #f3f4f6 0%,\n      #d1d5db 100%);\n}\n.h-24px {\n  height: 24px;\n}\n.mt-12px {\n  margin-top: 12px;\n}\n.h-200px {\n  height: 200px;\n}\n.w-162px {\n  width: 168px;\n}\n.w-314px {\n  width: 314px;\n}\n.w-187px {\n  width: 187px;\n}\n@media (min-width: 576px) {\n  .w-250px {\n    width: 250px;\n  }\n}\n@media (max-width: 575.98px) {\n  .w-250x {\n    width: 375px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-list-skeleton-v2.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdListSkeletonComponentV2, { className: "MyAdListSkeletonComponentV2", filePath: "apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-list-skeleton-v2/my-ad-list-skeleton-v2.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/v2/components/my-ad-list-skeleton-v2/my-ad-list-skeleton-v2.module.ts
var MyAdListSkeletonV2Module = class _MyAdListSkeletonV2Module {
  static {
    this.\u0275fac = function MyAdListSkeletonV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdListSkeletonV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdListSkeletonV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MyAdHeadersv2Module] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdListSkeletonV2Module, [{
    type: NgModule,
    args: [{
      declarations: [MyAdListSkeletonComponentV2],
      imports: [SharedModule, MyAdHeadersv2Module],
      exports: [MyAdListSkeletonComponentV2]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item/my-ad-item.component.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_relativeTime = __toESM(require_relativeTime());

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item-actions/my-ad-item-actions.component.ts
function MyAdItemActionsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 5);
    \u0275\u0275listener("click", function MyAdItemActionsComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.unpublishAd());
    });
    \u0275\u0275elementStart(2, "mat-icon", 6);
    \u0275\u0275text(3, "pause_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewport.desktop ? ctx_r1.translations == null ? null : ctx_r1.translations["n230"] : ctx_r1.translations == null ? null : ctx_r1.translations["n193"], " ");
  }
}
function MyAdItemActionsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 5);
    \u0275\u0275listener("click", function MyAdItemActionsComponent_div_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.publishAd());
    });
    \u0275\u0275elementStart(2, "mat-icon", 6);
    \u0275\u0275text(3, "play_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewport.desktop ? ctx_r1.translations == null ? null : ctx_r1.translations["n230"] : ctx_r1.translations == null ? null : ctx_r1.translations["n193"], " ");
  }
}
function MyAdItemActionsComponent_div_14_div_1_mat_divider_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("vertical", true);
  }
}
function MyAdItemActionsComponent_div_14_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translations == null ? null : ctx_r1.translations["n196"]);
  }
}
function MyAdItemActionsComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 5);
    \u0275\u0275listener("click", function MyAdItemActionsComponent_div_14_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareAd());
    });
    \u0275\u0275elementStart(2, "mat-icon", 3);
    \u0275\u0275text(3, "ios_share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MyAdItemActionsComponent_div_14_div_1_mat_divider_6_Template, 1, 1, "mat-divider", 12)(7, MyAdItemActionsComponent_div_14_div_1_button_7_Template, 5, 1, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewport.desktop ? ctx_r1.translations == null ? null : ctx_r1.translations["n232"] : ctx_r1.translations == null ? null : ctx_r1.translations["n195"], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.viewport.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.viewport.mobile);
  }
}
function MyAdItemActionsComponent_div_14_button_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 14)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translations == null ? null : ctx_r1.translations["n200"]);
  }
}
function MyAdItemActionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, MyAdItemActionsComponent_div_14_div_1_Template, 8, 3, "div", 10)(2, MyAdItemActionsComponent_div_14_button_2_Template, 3, 1, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPaymentPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaymentPending);
  }
}
function MyAdItemActionsComponent_div_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 19)(1, "mat-icon", 15);
    \u0275\u0275text(2, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translations == null ? null : ctx_r1.translations["n196"]);
  }
}
function MyAdItemActionsComponent_div_15_button_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 19)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translations == null ? null : ctx_r1.translations["n200"]);
  }
}
function MyAdItemActionsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, MyAdItemActionsComponent_div_15_button_1_Template, 5, 1, "button", 18)(2, MyAdItemActionsComponent_div_15_button_2_Template, 3, 1, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPaymentPending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPaymentPending);
  }
}
var MyAdItemActionsComponent = class _MyAdItemActionsComponent {
  constructor(viewport, icon, matDialog, window, utility, commonFacade) {
    this.viewport = viewport;
    this.icon = icon;
    this.matDialog = matDialog;
    this.window = window;
    this.utility = utility;
    this.commonFacade = commonFacade;
    this.isPaymentPending = false;
    this.isDraft = false;
    this.isUnpublish = false;
    this.isPublish = false;
  }
  deleteAd() {
    this.matDialog.open(MyAdDeleteDialogComponent, {
      disableClose: true,
      maxWidth: "453px"
    }).afterClosed();
  }
  unpublishAd() {
    this.matDialog.open(MyAdUnPublishDialogComponent, {
      disableClose: true,
      maxWidth: "453px"
    }).afterClosed();
  }
  publishAd() {
    this.matDialog.open(MyAdUnPublishDialogComponent, {
      disableClose: true,
      maxWidth: "453px"
    }).afterClosed();
  }
  shareAd() {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    const AVALABLE_FROM = this.ad.availableFrom ? TRANSLATIONS?.["n3111"] + ": " + this.commonFacade.getFormattedDate(this.ad.availableFrom) : "";
    if (this.utility.isWebShareSupported()) {
      navigator.share({
        title: this.ad?.title,
        text: `${this.ad?.title}
${TRANSLATIONS?.["n152"]}:  ${+this.ad.price.isPriceOnApplication ? TRANSLATIONS?.["n3311"] : this.ad.price.symbol + this.ad.price.minValue + " " + (this.ad.price.maxValue ? " - " + this.ad.price.maxValue : "")}
${AVALABLE_FROM}
${TRANSLATIONS?.["n3953"]}
`,
        url: this.ad?.adlink ?? this.window.reference.location.href
      }).then(() => {
        console.log("Content shared successfully!");
      }).catch((error) => {
        console.error("Error sharing content:", error);
      });
    } else {
      this.matDialog.open(MyAdShareDialogComponent, {
        disableClose: true,
        maxWidth: "375px",
        data: { myAdLink: this.ad.adlink }
      }).afterClosed();
    }
  }
  ngOnInit() {
    this.isDraft = this.ad.adStatus.status === "draft";
    this.isUnpublish = this.ad.adStatus.status === "unpublished";
    this.isPublish = this.ad.adStatus.status === "live";
  }
  static {
    this.\u0275fac = function MyAdItemActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdItemActionsComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(BrowserUtility), \u0275\u0275directiveInject(CommonFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdItemActionsComponent, selectors: [["findqo-my-ad-item-actions"]], inputs: { translations: "translations", ad: "ad" }, standalone: false, decls: 16, vars: 6, consts: [[1, "row", "bottom-actions", "mt-3", "align-items-center", "justify-content-between", "m-0", "bg-general-1"], [1, "col-auto", "p-0"], ["mat-button", "", 1, "me-3", "p-0"], [1, "fg-prim-2", "me-1", "fs-20px"], ["mat-flat-button", "", 1, "fs-14px", "fw-400", "lh-20px", "fs-xl-16px", "fw-xl-500", "lh-xl-22px", "fg-prim-2"], ["mat-button", "", 1, "p-0", 3, "click"], [1, "fg-general-4", "me-1", "fs-20px"], ["mat-flat-button", "", 1, "fs-14px", "fw-400", "lh-20px", "fs-xl-16px", "fw-xl-500", "lh-xl-22px", "fg-general-4"], ["class", "col-auto p-0", 4, "ngIf"], ["class", "row mt-3 m-0", 4, "ngIf"], [4, "ngIf"], ["mat-flat-button", "", "class", "bg-color", 4, "ngIf"], ["class", "mx-3 d-inline-block align-middle mat-divider", 3, "vertical", 4, "ngIf"], [1, "mx-3", "d-inline-block", "align-middle", "mat-divider", 3, "vertical"], ["mat-flat-button", "", 1, "bg-color"], [1, "fg-basic-1", "me-1", "fs-20px"], [1, "fs-14px", "fw-400", "lh-20px", "fs-xl-16px", "fw-xl-500", "lh-xl-22px", "fg-basic-1"], [1, "row", "mt-3", "m-0"], ["mat-flat-button", "", "class", "w-100 bg-color", 4, "ngIf"], ["mat-flat-button", "", 1, "w-100", "bg-color"], [1, "fs-14px", "fw-400", "lh-20px", "fg-basic-1"], [1, "fs-14px", "fw-400", "lh-2px", "fg-basic-1"]], template: function MyAdItemActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon", 3);
        \u0275\u0275text(4, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function MyAdItemActionsComponent_Template_button_click_7_listener() {
          return ctx.deleteAd();
        });
        \u0275\u0275elementStart(8, "mat-icon", 6);
        \u0275\u0275text(9, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, MyAdItemActionsComponent_div_12_Template, 6, 1, "div", 8)(13, MyAdItemActionsComponent_div_13_Template, 6, 1, "div", 8)(14, MyAdItemActionsComponent_div_14_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, MyAdItemActionsComponent_div_15_Template, 3, 2, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.viewport.desktop ? ctx.translations == null ? null : ctx.translations["n231"] : ctx.translations == null ? null : ctx.translations["n192"], " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.viewport.desktop ? ctx.translations == null ? null : ctx.translations["n230"] : ctx.translations == null ? null : ctx.translations["n193"], " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isPublish);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isUnpublish);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isDraft);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.mobile && !ctx.isDraft);
      }
    }, dependencies: [NgIf, MatButton, MatIcon, MatDivider], styles: ["\n\n.bottom-actions[_ngcontent-%COMP%] {\n  max-height: 36px;\n  flex-flow: nowrap;\n  gap: 16px;\n  padding: 7.5px 16px;\n  border-radius: 4px;\n  margin: 0px;\n}\n.mat-mdc-button.mat-mdc-button-base[_ngcontent-%COMP%], \n.mat-mdc-raised-button.mat-mdc-button-base[_ngcontent-%COMP%], \n.mat-mdc-unelevated-button.mat-mdc-button-base[_ngcontent-%COMP%], \n.mat-mdc-outlined-button.mat-mdc-button-base[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.bg-color[_ngcontent-%COMP%] {\n  background-color: var(--prim-2) !important;\n}\n.mat-divider[_ngcontent-%COMP%] {\n  color: var(--general-2);\n  border: 1px solid;\n  height: 22px;\n}\n@media (min-width: 576px) {\n  .bottom-actions[_ngcontent-%COMP%] {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-item-actions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdItemActionsComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-item-actions", standalone: false, template: `<div class="row bottom-actions mt-3 align-items-center justify-content-between m-0 bg-general-1">
	<div class="col-auto p-0">
		<!-- Edit Ad -->
		<button mat-button class="me-3 p-0">
			<mat-icon class="fg-prim-2 me-1 fs-20px">edit</mat-icon>

			<span mat-flat-button class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-prim-2">
				{{ viewport.desktop ? translations?.['n231'] : translations?.['n192'] }}
			</span>
		</button>

		<!-- Delete Ad -->
		<button mat-button class="p-0" (click)="deleteAd()">
			<mat-icon class="fg-general-4 me-1 fs-20px">delete</mat-icon>

			<span mat-flat-button class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-general-4">
				{{ viewport.desktop ? translations?.['n230'] : translations?.['n193'] }}
			</span>
		</button>
	</div>
	<div class="col-auto p-0" *ngIf="isPublish">
		<!-- UnPublish Ad -->
		<button mat-button class="p-0" (click)="unpublishAd()">
			<mat-icon class="fg-general-4 me-1 fs-20px">pause_circle_outline</mat-icon>

			<span mat-flat-button class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-general-4">
				{{ viewport.desktop ? translations?.['n230'] : translations?.['n193'] }}
			</span>
		</button>
	</div>
	<div class="col-auto p-0" *ngIf="isUnpublish">
		<!-- Publish Ad -->
		<button mat-button class="p-0" (click)="publishAd()">
			<mat-icon class="fg-general-4 me-1 fs-20px">play_circle_outline</mat-icon>

			<span mat-flat-button class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-general-4">
				{{ viewport.desktop ? translations?.['n230'] : translations?.['n193'] }}
			</span>
		</button>
	</div>
	<div class="col-auto p-0" *ngIf="!isDraft">
		<!-- Share Ad -->
		<div *ngIf="!isPaymentPending">
			<button mat-button class="p-0" (click)="shareAd()">
				<mat-icon class="fg-prim-2 me-1 fs-20px">ios_share</mat-icon>

				<span mat-flat-button class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-prim-2">
					{{ viewport.desktop ? translations?.['n232'] : translations?.['n195'] }}
				</span>
			</button>

			<mat-divider *ngIf="!viewport.mobile" class="mx-3 d-inline-block align-middle mat-divider" [vertical]="true"></mat-divider>

			<!-- Boost Ad -->
			<button *ngIf="!viewport.mobile" mat-flat-button class="bg-color">
				<mat-icon class="fg-basic-1 me-1 fs-20px">rocket_launch</mat-icon>

				<span class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-basic-1">{{ translations?.['n196'] }}</span>
			</button>
		</div>

		<!-- Complete Ad -->
		<button *ngIf="isPaymentPending" mat-flat-button class="bg-color">
			<span class="fs-14px fw-400 lh-20px fs-xl-16px fw-xl-500 lh-xl-22px fg-basic-1">{{ translations?.['n200'] }}</span>
		</button>
	</div>
</div>

<div *ngIf="viewport.mobile && !isDraft" class="row mt-3 m-0">
	<!-- Boost Ad -->
	<button *ngIf="!isPaymentPending" mat-flat-button class="w-100 bg-color">
		<mat-icon class="fg-basic-1 me-1 fs-20px">rocket_launch</mat-icon>

		<span class="fs-14px fw-400 lh-20px fg-basic-1">{{ translations?.['n196'] }}</span>
	</button>

	<!-- Complete Ad -->
	<button *ngIf="isPaymentPending" mat-flat-button class="w-100 bg-color">
		<span class="fs-14px fw-400 lh-2px fg-basic-1">{{ translations?.['n200'] }}</span>
	</button>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item-actions/my-ad-item-actions.component.scss */\n.bottom-actions {\n  max-height: 36px;\n  flex-flow: nowrap;\n  gap: 16px;\n  padding: 7.5px 16px;\n  border-radius: 4px;\n  margin: 0px;\n}\n.mat-mdc-button.mat-mdc-button-base,\n.mat-mdc-raised-button.mat-mdc-button-base,\n.mat-mdc-unelevated-button.mat-mdc-button-base,\n.mat-mdc-outlined-button.mat-mdc-button-base {\n  height: 35px;\n}\n.bg-color {\n  background-color: var(--prim-2) !important;\n}\n.mat-divider {\n  color: var(--general-2);\n  border: 1px solid;\n  height: 22px;\n}\n@media (min-width: 576px) {\n  .bottom-actions {\n    max-height: 50px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-item-actions.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }, { type: MatDialog }, { type: WindowService }, { type: BrowserUtility }, { type: CommonFacade }], { translations: [{
    type: Input
  }], ad: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdItemActionsComponent, { className: "MyAdItemActionsComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item-actions/my-ad-item-actions.component.ts", lineNumber: 20 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item/my-ad-item.component.ts
var _c03 = (a0) => ({ "img-max-height": a0 });
function MyAdsInfoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-checkbox", 29);
    \u0275\u0275listener("change", function MyAdsInfoComponent_div_1_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAdSelection($event.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isChecked);
  }
}
function MyAdsInfoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-icon", 31);
    \u0275\u0275text(2, "photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.myAd == null ? null : ctx_r1.myAd.images.length);
  }
}
function MyAdsInfoComponent_ng_container_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-divider", 35);
    \u0275\u0275elementEnd();
  }
}
function MyAdsInfoComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "toLocalUpperCase");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, MyAdsInfoComponent_ng_container_19_div_5_Template, 2, 0, "div", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const badge_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, badge_r3 == null ? null : badge_r3.name));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !last_r4);
  }
}
function MyAdsInfoComponent_mat_divider_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 21);
  }
}
var MyAdsInfoComponent = class _MyAdsInfoComponent {
  constructor(viewport, icon) {
    this.viewport = viewport;
    this.icon = icon;
    this.checkboxChange = new EventEmitter();
  }
  onAdSelection(checked) {
    this.checkboxChange.emit({ index: this.index, value: checked });
  }
  ngOnInit() {
    import_dayjs.default.extend(import_relativeTime.default);
    this.datePosted = (0, import_dayjs.default)(+this.myAd?.createdAt * 1e3).fromNow();
  }
  static {
    this.\u0275fac = function MyAdsInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsInfoComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdsInfoComponent, selectors: [["findqo-my-ad-item"]], inputs: { index: "index", isChecked: "isChecked", isToggleSelection: "isToggleSelection", translations: "translations", myAd: "myAd" }, outputs: { checkboxChange: "checkboxChange" }, standalone: false, decls: 39, vars: 26, consts: [[1, "row", "mx-0"], ["class", "col-auto p-0 custom-checkbox", 4, "ngIf"], [1, "col-md-auto", "px-0"], [1, "h-100", "w-100", "w-xl-250px", "position-relative", 3, "ngClass"], ["alt", "No ads", 1, "rounded-2", "w-100", "h-100", "object-fit-cover", 3, "src"], ["class", "position-absolute bottom-0 start-0 m-3", 4, "ngIf"], [1, "col", "px-0", "ps-xl-3", "ps-lg-3", "ps-md-3"], [1, "row", "mx-0", "mt-3", "mt-lg-0", "mt-md-0"], [1, "col-sm-auto", "px-0", "h-22px", "mt-lg-0", "mt-2", "mt-sm-0"], [1, "fs-16px", "fw-500", "lh-22px", "fg-general-5"], [1, "col-sm-auto", "ms-auto", "px-0"], [3, "adStatus"], [1, "row", "mt-2", "mt-xl-1", "mb-3", "m-0", "h-22px", "gap-2", "mx-0"], [1, "col-auto", "p-0"], [1, "fs-16px", "fw-400", "lh-22px", "fg-general-5"], [1, "row", "m-0", "gap-2", "align-items-center", "mt-20px"], [4, "ngFor", "ngForOf"], [1, "row", "mx-0", "mt-xl-2", "h-xl-20px", "gap-2"], [1, "col-auto", "p-0", "h-20px"], [1, "fs-18px", "fg-general-4"], [1, "d-inline-block", "fs-14px", "fw-400", "lh-20px", "fg-general-4", "ps-1"], ["vertical", "true", 1, "ms-2", "h-12px", "d-inline-block"], [1, "fs-14px", "fw-400", "lh-20px", "fg-general-4", "ps-1", "d-inline-block"], ["class", "ms-2 h-12px d-inline-block", "vertical", "true", 4, "ngIf"], [1, "col-auto", "p-0", "mt-sm-0"], [1, "fs-14px", "fw-400", "lh-20px", "fg-general-3"], [3, "translations", "ad"], [1, "my-3", "mx-0"], [1, "col-auto", "p-0", "custom-checkbox"], ["color", "primary", 1, "me-3", 3, "change", "checked"], [1, "position-absolute", "bottom-0", "start-0", "m-3"], [1, "fs-20px", "fg-basic-1", "ms-1"], [1, "ms-1", "fs-14px", "fg-basic-1"], [1, "lh-20px", "fg-general-4", "fs-12px", "fw-500", "fs-xl-14px", "fw-xl-400"], ["class", "col-auto p-0", 4, "ngIf"], ["vertical", "true", 1, "h-12px"]], template: function MyAdsInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, MyAdsInfoComponent_div_1_Template, 2, 1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275template(5, MyAdsInfoComponent_div_5_Template, 5, 1, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "toLocalUpperCase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275element(13, "findqo-my-ad-stamp", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "span", 14);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275template(19, MyAdsInfoComponent_ng_container_19_Template, 6, 4, "ng-container", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 17)(21, "div", 18)(22, "mat-icon", 19);
        \u0275\u0275text(23, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 20);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "mat-divider", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 18)(28, "mat-icon", 19);
        \u0275\u0275text(29, "directions_car");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 22);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, MyAdsInfoComponent_mat_divider_32_Template, 1, 0, "mat-divider", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 24)(34, "span", 25);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(36, "findqo-my-ad-item-actions", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 27);
        \u0275\u0275element(38, "mat-divider");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.desktop && ctx.isToggleSelection);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c03, !(ctx.myAd == null ? null : ctx.myAd.badges)));
        \u0275\u0275advance();
        \u0275\u0275property("src", (ctx.myAd == null ? null : ctx.myAd.images.length) !== 0 ? ctx.myAd == null ? null : ctx.myAd.images[0].url : "/assets/images/advertisement-images/NoAdImage.png", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.myAd == null ? null : ctx.myAd.images.length) !== 0);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("order-2", ctx.viewport.mobile);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(11, 22, ctx.myAd == null ? null : ctx.myAd.price == null ? null : ctx.myAd.price.currency), " ", ctx.myAd == null ? null : ctx.myAd.price == null ? null : ctx.myAd.price.value, "");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("order-1", ctx.viewport.mobile);
        \u0275\u0275advance();
        \u0275\u0275property("adStatus", ctx.myAd == null ? null : ctx.myAd.adStatus == null ? null : ctx.myAd.adStatus.status);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", (ctx.myAd == null ? null : ctx.myAd.title) && (ctx.myAd == null ? null : ctx.myAd.title.trim()) !== "" ? ctx.myAd == null ? null : ctx.myAd.title : ctx.translations == null ? null : ctx.translations["n201"], " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.myAd == null ? null : ctx.myAd.badges);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate3(" ", ctx.translations == null ? null : ctx.translations["n189"], " ", ctx.myAd == null ? null : ctx.myAd.adStatus == null ? null : ctx.myAd.adStatus.expireInDays, " ", ctx.translations == null ? null : ctx.translations["n190"], " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.translations == null ? null : ctx.translations["n8"]);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.viewport.mobile);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.translations == null ? null : ctx.translations["n191"], " ", ctx.datePosted, "");
        \u0275\u0275advance();
        \u0275\u0275property("translations", ctx.translations)("ad", ctx.myAd);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatIcon, MatDivider, MatCheckbox, MyAdStampComponent, MyAdItemActionsComponent, ToLocaleUpperCase], styles: ["\n\n.mat-mdc-button.mat-mdc-button-base[_ngcontent-%COMP%], \n.mat-mdc-raised-button.mat-mdc-button-base[_ngcontent-%COMP%], \n.mat-mdc-unelevated-button.mat-mdc-button-base[_ngcontent-%COMP%], \n.mat-mdc-outlined-button.mat-mdc-button-base[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.h-20px[_ngcontent-%COMP%] {\n  max-height: 20px;\n}\n.h-22px[_ngcontent-%COMP%] {\n  max-height: 22px;\n}\n.h-12px[_ngcontent-%COMP%] {\n  height: 12px;\n}\n.mt-20px[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n@media (min-width: 768px) {\n  .img-max-height[_ngcontent-%COMP%] {\n    max-height: 160px;\n  }\n}\n@media (min-width: 576px) {\n  .h-xl-20px[_ngcontent-%COMP%] {\n    max-height: 20px;\n  }\n  .w-xl-250px[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsInfoComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-item", standalone: false, template: `<div class="row mx-0">
	<div *ngIf="viewport.desktop && isToggleSelection" class="col-auto p-0 custom-checkbox">
		<mat-checkbox class="me-3" color="primary" [checked]="isChecked" (change)="onAdSelection($event.checked)"></mat-checkbox>
	</div>

	<!-- Ad img -->
	<div class="col-md-auto px-0">
		<div class="h-100 w-100 w-xl-250px position-relative" [ngClass]="{ 'img-max-height': !myAd?.badges }">
			<img
				[src]="myAd?.images.length !== 0 ? myAd?.images[0].url : '/assets/images/advertisement-images/NoAdImage.png'"
				alt="No ads"
				class="rounded-2 w-100 h-100 object-fit-cover"
			/>
			<div *ngIf="myAd?.images.length !== 0" class="position-absolute bottom-0 start-0 m-3">
				<mat-icon class="fs-20px fg-basic-1 ms-1">photo</mat-icon>

				<span class="ms-1 fs-14px fg-basic-1">{{ myAd?.images.length }}</span>
			</div>
		</div>
	</div>

	<div class="col px-0 ps-xl-3 ps-lg-3 ps-md-3">
		<div class="row mx-0 mt-3 mt-lg-0 mt-md-0">
			<div class="col-sm-auto px-0 h-22px mt-lg-0 mt-2 mt-sm-0" [class.order-2]="viewport.mobile">
				<span class="fs-16px fw-500 lh-22px fg-general-5">{{ myAd?.price?.currency | toLocalUpperCase }} {{ myAd?.price?.value }}</span>
			</div>

			<!-- Add stamps -->
			<div class="col-sm-auto ms-auto px-0" [class.order-1]="viewport.mobile">
				<findqo-my-ad-stamp [adStatus]="myAd?.adStatus?.status"></findqo-my-ad-stamp>
			</div>
		</div>

		<!-- Add details -->
		<div class="row mt-2 mt-xl-1 mb-3 m-0 h-22px gap-2 mx-0">
			<div class="col-auto p-0">
				<span class="fs-16px fw-400 lh-22px fg-general-5">
					{{ myAd?.title && myAd?.title.trim() !== '' ? myAd?.title : translations?.['n201'] }}
				</span>
			</div>
		</div>

		<!-- Badge and details -->
		<div class="row m-0 gap-2 align-items-center mt-20px">
			<ng-container *ngFor="let badge of myAd?.badges; let last = last">
				<div class="col-auto p-0">
					<span class="lh-20px fg-general-4 fs-12px fw-500 fs-xl-14px fw-xl-400">{{ badge?.name | toLocalUpperCase }}</span>
				</div>

				<div class="col-auto p-0" *ngIf="!last">
					<mat-divider class="h-12px" vertical="true"></mat-divider>
				</div>
			</ng-container>
		</div>

		<div class="row mx-0 mt-xl-2 h-xl-20px gap-2">
			<!-- Expires in n days -->
			<div class="col-auto p-0 h-20px">
				<mat-icon class="fs-18px fg-general-4">schedule</mat-icon>

				<span class="d-inline-block fs-14px fw-400 lh-20px fg-general-4 ps-1">
					{{ translations?.['n189'] }} {{ myAd?.adStatus?.expireInDays }} {{ translations?.['n190'] }}
				</span>
				<mat-divider class="ms-2 h-12px d-inline-block" vertical="true"></mat-divider>
			</div>

			<!-- Motors -->
			<div class="col-auto p-0 h-20px">
				<mat-icon class="fs-18px fg-general-4">directions_car</mat-icon>

				<span class="fs-14px fw-400 lh-20px fg-general-4 ps-1 d-inline-block">{{ translations?.['n8'] }}</span>
				<mat-divider *ngIf="!viewport.mobile" class="ms-2 h-12px d-inline-block" vertical="true"></mat-divider>
			</div>

			<!-- Updated n hours ago -->
			<div class="col-auto p-0 mt-sm-0">
				<span class="fs-14px fw-400 lh-20px fg-general-3">{{ translations?.['n191'] }} {{ datePosted }}</span>
			</div>
		</div>

		<!-- Add actions -->
		<findqo-my-ad-item-actions [translations]="translations" [ad]="myAd"></findqo-my-ad-item-actions>
	</div>
</div>

<div class="my-3 mx-0">
	<mat-divider></mat-divider>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item/my-ad-item.component.scss */\n.mat-mdc-button.mat-mdc-button-base,\n.mat-mdc-raised-button.mat-mdc-button-base,\n.mat-mdc-unelevated-button.mat-mdc-button-base,\n.mat-mdc-outlined-button.mat-mdc-button-base {\n  height: 35px;\n}\n.h-20px {\n  max-height: 20px;\n}\n.h-22px {\n  max-height: 22px;\n}\n.h-12px {\n  height: 12px;\n}\n.mt-20px {\n  margin-top: 20px;\n}\n@media (min-width: 768px) {\n  .img-max-height {\n    max-height: 160px;\n  }\n}\n@media (min-width: 576px) {\n  .h-xl-20px {\n    max-height: 20px;\n  }\n  .w-xl-250px {\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-item.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }], { index: [{
    type: Input
  }], isChecked: [{
    type: Input
  }], isToggleSelection: [{
    type: Input
  }], translations: [{
    type: Input
  }], myAd: [{
    type: Input
  }], checkboxChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdsInfoComponent, { className: "MyAdsInfoComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item/my-ad-item.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item-actions/my-ad-item-actions.module.ts
var MyAdItemActionsModule = class _MyAdItemActionsModule {
  static {
    this.\u0275fac = function MyAdItemActionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdItemActionsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdItemActionsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, AdStampModule, ButtonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdItemActionsModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdItemActionsComponent],
      imports: [SharedModule, MatDividerModule, AdStampModule, ButtonModule],
      exports: [MyAdItemActionsComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-item/my-ad-item.module.ts
var MyAdsInfoModule = class _MyAdsInfoModule {
  static {
    this.\u0275fac = function MyAdsInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdsInfoModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdsInfoModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, MatCheckboxModule, AdStampModule, MyAdItemActionsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdsInfoModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdsInfoComponent],
      imports: [SharedModule, MatDividerModule, MatCheckboxModule, AdStampModule, MyAdItemActionsModule],
      exports: [MyAdsInfoComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/pagination/pagination.component.ts
function MyAdListPaginationComponent_ul_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275listener("click", function MyAdListPaginationComponent_ul_1_li_5_Template_li_click_0_listener() {
      const page_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.gotoPage(page_r4));
    });
    \u0275\u0275elementStart(1, "a", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentPage === page_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.currentPage === page_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r4);
  }
}
function MyAdListPaginationComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 2)(1, "li", 3);
    \u0275\u0275listener("click", function MyAdListPaginationComponent_ul_1_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275elementStart(2, "a", 4)(3, "mat-icon", 5);
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, MyAdListPaginationComponent_ul_1_li_5_Template, 3, 5, "li", 6);
    \u0275\u0275elementStart(6, "li", 7);
    \u0275\u0275listener("click", function MyAdListPaginationComponent_ul_1_Template_li_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementStart(7, "a", 4)(8, "mat-icon", 5);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tabIndex", ctx_r1.currentPage === 1 ? -1 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", ctx_r1.currentPage === ctx_r1.totalPages ? -1 : 0);
  }
}
var MyAdListPaginationComponent = class _MyAdListPaginationComponent {
  constructor(viewport, icon) {
    this.viewport = viewport;
    this.icon = icon;
    this.pageChange = new EventEmitter();
    this.pages = [];
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageNumbers();
      this.pageChange.emit(this.currentPage);
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageNumbers();
      this.pageChange.emit(this.currentPage);
    }
  }
  gotoPage(page) {
    if (page >= 1 && page <= this.totalPages && this.currentPage !== page) {
      this.currentPage = page;
      this.updatePageNumbers();
      this.pageChange.emit(this.currentPage);
    }
  }
  updatePageNumbers() {
    this.pages = [];
    let startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, startPage + 4);
    if (endPage - startPage < 4) {
      const adjustment = 4 - (endPage - startPage);
      if (startPage - adjustment > 0) {
        startPage -= adjustment;
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  }
  setPageMetaData(pageMetaData) {
    if (pageMetaData) {
      this.currentPage = Number.parseInt(pageMetaData?.currentPage);
      this.totalPages = Number.parseInt(pageMetaData?.totalPages);
      this.total = Number.parseInt(pageMetaData?.total);
      this.perPage = Number.parseInt(pageMetaData?.perPage);
      this.totalPages = Math.ceil(this.total / this.perPage);
      this.updatePageNumbers();
    }
  }
  ngOnInit() {
    this.setPageMetaData(this.pageMetaData);
  }
  ngOnChanges(changes) {
    CommonUtil.handleNgOnChanges(changes["pageMetaData"], (pageMetaData) => {
      this.setPageMetaData(pageMetaData);
    });
  }
  static {
    this.\u0275fac = function MyAdListPaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdListPaginationComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdListPaginationComponent, selectors: [["findqo-my-ad-list-pagination"]], inputs: { pageMetaData: "pageMetaData" }, outputs: { pageChange: "pageChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "text-center", "justify-content-center"], ["class", "pagination-list", 4, "ngIf"], [1, "pagination-list"], [1, "pagination-item", "pagination-item--prev", "cursor-pointer", 3, "click"], [1, "pagination-link", "d-flex", "align-items-center", "justify-content-center", "h-100", 3, "tabIndex"], [1, "fg-general-3"], ["class", "pagination-item cursor-pointer", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pagination-item", "pagination-item--next", "cursor-pointer", 3, "click"], [1, "pagination-item", "cursor-pointer", 3, "click"], [1, "pagination-link"]], template: function MyAdListPaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275template(1, MyAdListPaginationComponent_ul_1_Template, 10, 5, "ul", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pages.length > 1);
      }
    }, dependencies: [MatIconModule, MatIcon, RouterModule, NgForOf, NgIf], styles: ["\n\n.pagination-item.active[_ngcontent-%COMP%] {\n  z-index: 99;\n  background-color: var(--info-1);\n  border: 1px solid var(--info-3);\n}\n.pagination-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\n.pagination-item[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: var(--general-1);\n  margin: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n.pagination-item--next[_ngcontent-%COMP%] {\n  margin-inline-start: 12px;\n}\n.pagination-item--prev[_ngcontent-%COMP%] {\n  margin-inline-end: 12px;\n}\n.pagination-link[_ngcontent-%COMP%] {\n  color: var(--general-4);\n  text-decoration: none;\n  font-size: 14px;\n}\n.pagination-link.active[_ngcontent-%COMP%] {\n  color: var(--info-3) !important;\n}\n.pagination-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.pagination-link[_ngcontent-%COMP%]:hover {\n  color: var(--info-3);\n}\n.pagination-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%] {\n  color: var(--general-3);\n  opacity: 0.5;\n}\n.pagination-link[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.pagination-dots[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pagination.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdListPaginationComponent, [{
    type: Component,
    args: [{ imports: [MatIconModule, RouterModule, NgForOf, NgIf], selector: "findqo-my-ad-list-pagination", template: '<nav class="text-center justify-content-center">\n	<ul class="pagination-list" *ngIf="pages.length > 1">\n		<li class="pagination-item pagination-item--prev cursor-pointer" (click)="prevPage()">\n			<a class="pagination-link d-flex align-items-center justify-content-center h-100" [tabIndex]="currentPage === 1 ? -1 : 0">\n				<mat-icon class="fg-general-3">chevron_left</mat-icon>\n			</a>\n		</li>\n\n		<li class="pagination-item cursor-pointer" *ngFor="let page of pages" (click)="gotoPage(page)" [class.active]="currentPage === page">\n			<a class="pagination-link" [class.active]="currentPage === page">{{ page }}</a>\n		</li>\n\n		<li class="pagination-item pagination-item--next cursor-pointer" [class.disabled]="currentPage === totalPages" (click)="nextPage()">\n			<a class="pagination-link d-flex align-items-center justify-content-center h-100" [tabIndex]="currentPage === totalPages ? -1 : 0">\n				<mat-icon class="fg-general-3">chevron_right</mat-icon>\n			</a>\n		</li>\n	</ul>\n</nav>\n', styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/pagination/pagination.component.scss */\n.pagination-item.active {\n  z-index: 99;\n  background-color: var(--info-1);\n  border: 1px solid var(--info-3);\n}\n.pagination-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\n.pagination-item {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: var(--general-1);\n  margin: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n.pagination-item--next {\n  margin-inline-start: 12px;\n}\n.pagination-item--prev {\n  margin-inline-end: 12px;\n}\n.pagination-link {\n  color: var(--general-4);\n  text-decoration: none;\n  font-size: 14px;\n}\n.pagination-link.active {\n  color: var(--info-3) !important;\n}\n.pagination-link i {\n  display: inline-block;\n}\n.pagination-link:hover {\n  color: var(--info-3);\n}\n.pagination-item.disabled .pagination-link {\n  color: var(--general-3);\n  opacity: 0.5;\n}\n.pagination-link:focus {\n  box-shadow: none;\n}\n.pagination-dots {\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pagination.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }], { pageMetaData: [{
    type: Input
  }], pageChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdListPaginationComponent, { className: "MyAdListPaginationComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/pagination/pagination.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/my-ad-list.page.ts
var _c04 = (a0) => [a0];
function MyAdListPage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "findqo-my-ad-headers-v2", 4);
    \u0275\u0275listener("tabChange", function MyAdListPage_div_0_Template_findqo_my_ad_headers_v2_tabChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabchange($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function MyAdListPage_div_1_div_1_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275listener("click", function MyAdListPage_div_1_div_1_div_4_div_5_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.unSelectAllAds());
    });
    \u0275\u0275text(2, "Unselect all");
    \u0275\u0275elementEnd()();
  }
}
function MyAdListPage_div_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "mat-checkbox", 17);
    \u0275\u0275twoWayListener("ngModelChange", function MyAdListPage_div_1_div_1_div_4_Template_mat_checkbox_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.isAllAdsSelected, $event) || (ctx_r1.isAllAdsSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function MyAdListPage_div_1_div_1_div_4_Template_mat_checkbox_change_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSelectAllAds($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, MyAdListPage_div_1_div_1_div_4_div_5_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.isAllAdsSelected);
    \u0275\u0275property("checked", ctx_r1.isAllAdsSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.numberOfAdsSelected, " Ads Selected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCheckAllAdSelected);
  }
}
function MyAdListPage_div_1_div_1_findqo_my_ad_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-my-ad-item", 21);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("checkboxChange", function MyAdListPage_div_1_div_1_findqo_my_ad_item_5_Template_findqo_my_ad_item_checkboxChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleAdSelection($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("translations", \u0275\u0275pipeBind1(1, 5, ctx_r1.translations$))("myAd", item_r8)("isChecked", item_r8.isChecked)("index", item_r8.id)("isToggleSelection", ctx_r1.isSelectAd);
  }
}
function MyAdListPage_div_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275listener("click", function MyAdListPage_div_1_div_1_div_8_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.unSelectAllAds());
    });
    \u0275\u0275text(2, "Unselect all");
    \u0275\u0275elementEnd()();
  }
}
function MyAdListPage_div_1_div_1_findqo_my_ad_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-my-ad-item", 21);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("checkboxChange", function MyAdListPage_div_1_div_1_findqo_my_ad_item_9_Template_findqo_my_ad_item_checkboxChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.handleAdSelection($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("translations", \u0275\u0275pipeBind1(1, 5, ctx_r1.translations$))("myAd", item_r11)("isChecked", item_r11.isChecked)("index", item_r11.id)("isToggleSelection", ctx_r1.isSelectAd);
  }
}
function MyAdListPage_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "findqo-my-ads-filter", 11);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("selectAds", function MyAdListPage_div_1_div_1_Template_findqo_my_ads_filter_selectAds_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showSelectAd($event));
    })("clearSelection", function MyAdListPage_div_1_div_1_Template_findqo_my_ads_filter_clearSelection_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unSelectAllAds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MyAdListPage_div_1_div_1_div_4_Template, 6, 4, "div", 12)(5, MyAdListPage_div_1_div_1_findqo_my_ad_item_5_Template, 2, 7, "findqo-my-ad-item", 13);
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275element(7, "findqo-my-ad-list-pagination");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MyAdListPage_div_1_div_1_div_8_Template, 3, 0, "div", 14)(9, MyAdListPage_div_1_div_1_findqo_my_ad_item_9_Template, 2, 7, "findqo-my-ad-item", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("translations", \u0275\u0275pipeBind1(3, 7, ctx_r1.translations$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.viewport.desktop && ctx_r1.isSelectAd);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.myAdList)("ngForTrackBy", ctx_r1.trackByAdId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isCheckAllAdSelected);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.myAdList)("ngForTrackBy", ctx_r1.trackByAdId);
  }
}
function MyAdListPage_div_1_div_2_findqo_my_ad_item_v2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-my-ad-item-v2", 24);
  }
  if (rf & 2) {
    const ad_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ad", ad_r12)("headerTabIndex", ctx_r1.headerTabIndex);
  }
}
function MyAdListPage_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, MyAdListPage_div_1_div_2_findqo_my_ad_item_v2_1_Template, 1, 2, "findqo-my-ad-item-v2", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.myAdList);
  }
}
function MyAdListPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, MyAdListPage_div_1_div_1_Template, 10, 9, "div", 6)(2, MyAdListPage_div_1_div_2_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "findqo-my-ad-list-pagination", 9);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("pageChange", function MyAdListPage_div_1_Template_findqo_my_ad_list_pagination_pageChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(5, _c04, ctx_r1.featureVersion.V1));
    \u0275\u0275advance();
    \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(7, _c04, ctx_r1.featureVersion.V2));
    \u0275\u0275advance(2);
    \u0275\u0275property("pageMetaData", \u0275\u0275pipeBind1(5, 3, ctx_r1.pageMetaData$));
  }
}
function MyAdListPage_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div");
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4, "You haven\u2019t placed any ads yet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "findqo-button", 30);
    \u0275\u0275listener("clicked", function MyAdListPage_ng_template_2_div_0_Template_findqo_button_clicked_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPlaceAd());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED);
  }
}
function MyAdListPage_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div");
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4, "You haven\u2019t placed any ads yet");
    \u0275\u0275elementEnd()()();
  }
}
function MyAdListPage_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MyAdListPage_ng_template_2_div_0_Template, 6, 1, "div", 25)(1, MyAdListPage_ng_template_2_div_1_Template, 5, 0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.headerTabIndex === 0 || ctx_r1.headerTabIndex === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerTabIndex !== 0 && ctx_r1.headerTabIndex !== 1);
  }
}
var MyAdListPage = class _MyAdListPage {
  constructor(viewport, icon, destroyService, myAdsFacade, filterStatusPipe, sharedAdsFacade, commonPlaceAdService) {
    this.viewport = viewport;
    this.icon = icon;
    this.destroyService = destroyService;
    this.myAdsFacade = myAdsFacade;
    this.filterStatusPipe = filterStatusPipe;
    this.sharedAdsFacade = sharedAdsFacade;
    this.commonPlaceAdService = commonPlaceAdService;
    this.myAdListSkeletonArray = Array();
    this.headerTabIndex = 0;
    this.buttonType = ButtonType;
    this.featureVersion = FeatureVersion;
    this.myAds$ = this.sharedAdsFacade.getAdList$();
    this.pageMetaData$ = this.sharedAdsFacade.getPageMetaData$();
  }
  showSelectAd(toggleAdsSelection) {
    this.isSelectAd = toggleAdsSelection;
  }
  handleAdSelection(event) {
    const selectedAd = this.myAdList.find((element) => element.id === event.index);
    selectedAd.isChecked = event.value;
    this.numberOfAdsSelected = this.myAdList.filter((item) => item.isChecked).length;
    if (this.numberOfAdsSelected === this.myAdList.length) {
      this.isAllAdsSelected = true;
      this.isCheckAllAdSelected = true;
    } else {
      this.isAllAdsSelected = false;
      this.isCheckAllAdSelected = false;
    }
  }
  onSelectAllAds(isChecked) {
    if (isChecked.checked) {
      this.myAdList = this.myAdList.map((adItem) => {
        return __spreadProps(__spreadValues({}, adItem), { isChecked: true });
      });
      this.numberOfAdsSelected = this.myAdList.length;
      this.isCheckAllAdSelected = true;
    } else {
      this.numberOfAdsSelected = 0;
      this.isCheckAllAdSelected = false;
      this.myAdList = this.myAdList.map((adItem) => {
        return __spreadProps(__spreadValues({}, adItem), { isChecked: false });
      });
    }
  }
  goToPlaceAd() {
    this.commonPlaceAdService.gotoPlaceAd();
  }
  unSelectAllAds() {
    this.myAdList = this.myAdList.map((adItem) => {
      return __spreadProps(__spreadValues({}, adItem), { isChecked: false });
    });
    this.isAllAdsSelected = false;
    this.isCheckAllAdSelected = false;
    this.numberOfAdsSelected = 0;
  }
  trackByAdId(_index, ad) {
    return ad.id;
  }
  onPageChange(pageNumber) {
    if (this.headerTabIndex === 0) {
      this.myAdsFacade.loadAdList({ page: pageNumber, perPage: 10 });
    } else {
      this.myAdsFacade.loadAdList({ status: MY_ADS_HEADER_STATUS_MAPPING[this.headerTabIndex], page: pageNumber, perPage: 10 });
    }
  }
  onTabchange(tabIndex) {
    this.headerTabIndex = tabIndex;
    const TAB_NAME = MY_ADS_HEADER_STATUS_MAPPING[tabIndex];
    if (tabIndex === 0) {
      this.myAdsFacade.loadAdList({ page: 1, perPage: 10 });
    } else {
      this.myAdsFacade.loadAdList({ status: TAB_NAME, perPage: 10 });
    }
  }
  ngOnInit() {
    this.onTabchange(this.headerTabIndex);
    if (this.viewport.mobile) {
      this.myAdListSkeletonArray = Array(2);
    } else {
      this.myAdListSkeletonArray = Array(4);
    }
    this.myAds$.pipe(takeUntil(this.destroyService)).subscribe((adList) => {
      this.myAdList = adList.map((ad) => {
        return __spreadProps(__spreadValues({}, ad), {
          isChecked: false
        });
      });
      this.myAdListTemp = this.myAdList;
    });
  }
  static {
    this.\u0275fac = function MyAdListPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdListPage)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MyAdsFacade), \u0275\u0275directiveInject(FilterStatusPipe), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(CommonPlaceAdService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdListPage, selectors: [["ng-component"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService, FilterStatusPipe])], decls: 4, vars: 5, consts: [["noAds", ""], ["class", "container-fluid px-0 px-xl-3 border-bottom", 4, "findqoFeatureIf"], ["class", "container px-0 px-xl-3", 4, "ngIf", "ngIfElse"], [1, "container-fluid", "px-0", "px-xl-3", "border-bottom"], [3, "tabChange"], [1, "container", "px-0", "px-xl-3"], [4, "findqoFeatureIf"], ["class", "mt-3", 4, "findqoFeatureIf"], [1, "mb-4", "mt-2"], [3, "pageChange", "pageMetaData"], [1, "my-3"], [3, "selectAds", "clearSelection", "translations"], ["class", "row mb-3 mx-0 gap-3", 4, "ngIf"], [3, "translations", "myAd", "isChecked", "index", "isToggleSelection", "checkboxChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col p-0", 4, "ngIf"], [1, "row", "mb-3", "mx-0", "gap-3"], [1, "col-auto", "p-0"], ["color", "primary", 1, "me-3", 3, "ngModelChange", "change", "ngModel", "checked"], [1, "fs-16px", "fw-400", "fg-info-3"], [1, "col", "p-0"], [1, "fs-16px", "fw-500", "fg-prim-2", "cursor-pointer", 3, "click"], [3, "checkboxChange", "translations", "myAd", "isChecked", "index", "isToggleSelection"], [1, "mt-3"], [3, "ad", "headerTabIndex", 4, "ngFor", "ngForOf"], [3, "ad", "headerTabIndex"], ["class", "d-flex flex-column align-items-center justify-content-center container-ads container px-0 px-xl-3 py-5 gap-3 my-3", 4, "ngIf"], ["class", "container-ads d-flex flex-column align-items-center justify-content-center container px-0 px-xl-3 py-5 gap-3 my-3", 4, "ngIf"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "container-ads", "container", "px-0", "px-xl-3", "py-5", "gap-3", "my-3"], ["ngSrc", "/assets/images/no-ads-image.webp", "width", "200", "height", "200", "alt", "You have no ads yet", 1, "img-fluid", "d-block", "my-1"], [1, "text-body-regular", "fg-general-4"], ["label", "Post ad now", "btnClass", "w-100 h-100", 1, "text-body-regular", "noAdsButton", 3, "clicked", "btnType"], [1, "container-ads", "d-flex", "flex-column", "align-items-center", "justify-content-center", "container", "px-0", "px-xl-3", "py-5", "gap-3", "my-3"]], template: function MyAdListPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MyAdListPage_div_0_Template, 2, 0, "div", 1)(1, MyAdListPage_div_1_Template, 6, 9, "div", 2)(2, MyAdListPage_ng_template_2_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const noAds_r14 = \u0275\u0275reference(3);
        \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(3, _c04, ctx.featureVersion.V2));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.myAdList == null ? null : ctx.myAdList.length)("ngIfElse", noAds_r14);
      }
    }, dependencies: [NgForOf, NgIf, NgOptimizedImage, FeatureIfDirective, MatCheckbox, MyAdsInfoComponent, MyAdsFilterComponent, MyAdHeadersv2Component, MyAdItemV2Component, NgControlStatus, NgModel, MyAdListPaginationComponent, ButtonComponent, AsyncPipe], styles: ["\n\n.noAdsButton[_ngcontent-%COMP%] {\n  width: 311px;\n  height: 40px;\n}\n@media (max-width: 767.98px) {\n  .container-ads[_ngcontent-%COMP%] {\n    height: 651px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-list.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdListPage, [{
    type: Component,
    args: [{ providers: [DestroyService, FilterStatusPipe], standalone: false, template: '<div class="container-fluid px-0 px-xl-3 border-bottom" *findqoFeatureIf="[featureVersion.V2]">\n	<findqo-my-ad-headers-v2 (tabChange)="onTabchange($event)"></findqo-my-ad-headers-v2>\n</div>\n\n<div *ngIf="myAdList?.length; else noAds" class="container px-0 px-xl-3">\n	<div *findqoFeatureIf="[featureVersion.V1]">\n		<div class="my-3">\n			<findqo-my-ads-filter\n				[translations]="translations$ | async"\n				(selectAds)="showSelectAd($event)"\n				(clearSelection)="unSelectAllAds()"\n			></findqo-my-ads-filter>\n		</div>\n\n		<div *ngIf="viewport.desktop && isSelectAd" class="row mb-3 mx-0 gap-3">\n			<div class="col-auto p-0">\n				<mat-checkbox class="me-3" color="primary" [(ngModel)]="isAllAdsSelected" (change)="onSelectAllAds($event)" [checked]="isAllAdsSelected"></mat-checkbox>\n				<span class="fs-16px fw-400 fg-info-3">{{ numberOfAdsSelected }} Ads Selected</span>\n			</div>\n\n			<div class="col p-0" *ngIf="isCheckAllAdSelected">\n				<span class="fs-16px fw-500 fg-prim-2 cursor-pointer" (click)="unSelectAllAds()">Unselect all</span>\n			</div>\n		</div>\n\n		<findqo-my-ad-item\n			[translations]="translations$ | async"\n			*ngFor="let item of myAdList; trackBy: trackByAdId"\n			[myAd]="item"\n			[isChecked]="item.isChecked"\n			[index]="item.id"\n			[isToggleSelection]="isSelectAd"\n			(checkboxChange)="handleAdSelection($event)"\n		></findqo-my-ad-item>\n\n		<div class="mb-4 mt-2">\n			<findqo-my-ad-list-pagination></findqo-my-ad-list-pagination>\n		</div>\n\n		<div class="col p-0" *ngIf="isCheckAllAdSelected">\n			<span class="fs-16px fw-500 fg-prim-2 cursor-pointer" (click)="unSelectAllAds()">Unselect all</span>\n		</div>\n\n		<findqo-my-ad-item\n			[translations]="translations$ | async"\n			*ngFor="let item of myAdList; trackBy: trackByAdId"\n			[myAd]="item"\n			[isChecked]="item.isChecked"\n			[index]="item.id"\n			[isToggleSelection]="isSelectAd"\n			(checkboxChange)="handleAdSelection($event)"\n		></findqo-my-ad-item>\n	</div>\n\n	<div *findqoFeatureIf="[featureVersion.V2]" class="mt-3">\n		<!-- TODO: uncomment skeleton component after API call -->\n		<!-- <findqo-my-ad-list-skeleton-v2 *ngFor="let i of myAdListSkeletonArray"></findqo-my-ad-list-skeleton-v2> -->\n\n		<findqo-my-ad-item-v2 *ngFor="let ad of myAdList" [ad]="ad" [headerTabIndex]="headerTabIndex"></findqo-my-ad-item-v2>\n	</div>\n\n	<div class="mb-4 mt-2">\n		<findqo-my-ad-list-pagination (pageChange)="onPageChange($event)" [pageMetaData]="pageMetaData$ | async"></findqo-my-ad-list-pagination>\n	</div>\n</div>\n\n<ng-template #noAds>\n	<div\n		*ngIf="headerTabIndex === 0 || headerTabIndex === 1"\n		class="d-flex flex-column align-items-center justify-content-center container-ads container px-0 px-xl-3 py-5 gap-3 my-3"\n	>\n		<div>\n			<img class="img-fluid d-block my-1" ngSrc="/assets/images/no-ads-image.webp" width="200" height="200" alt="You have no ads yet" />\n			<p class="text-body-regular fg-general-4">You haven\u2019t placed any ads yet</p>\n		</div>\n		<findqo-button\n			label="Post ad now"\n			[btnType]="buttonType.FILLED"\n			(clicked)="goToPlaceAd()"\n			class="text-body-regular noAdsButton"\n			btnClass="w-100 h-100"\n		></findqo-button>\n	</div>\n	<div\n		*ngIf="headerTabIndex !== 0 && headerTabIndex !== 1"\n		class="container-ads d-flex flex-column align-items-center justify-content-center container px-0 px-xl-3 py-5 gap-3 my-3"\n	>\n		<div>\n			<img class="img-fluid d-block my-1" ngSrc="/assets/images/no-ads-image.webp" width="200" height="200" alt="You have no ads yet" />\n			<p class="text-body-regular fg-general-4">You haven\u2019t placed any ads yet</p>\n		</div>\n	</div>\n</ng-template>\n', styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/my-ad-list.page.scss */\n.noAdsButton {\n  width: 311px;\n  height: 40px;\n}\n@media (max-width: 767.98px) {\n  .container-ads {\n    height: 651px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-list.page.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }, { type: DestroyService }, { type: MyAdsFacade }, { type: FilterStatusPipe }, { type: SharedAdsFacade }, { type: CommonPlaceAdService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdListPage, { className: "MyAdListPage", filePath: "apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/my-ad-list.page.ts", lineNumber: 22 });
})();

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/my-ad-list-routing.module.ts
var routes = [
  {
    path: "",
    component: MyAdListPage
  }
];
var MyAdListPageRoutingModule = class _MyAdListPageRoutingModule {
  static {
    this.\u0275fac = function MyAdListPageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdListPageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdListPageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdListPageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/components/google-feedback-dialog/google-feedback-dialog.module.ts
var GoogleFeedbackDialogModule = class _GoogleFeedbackDialogModule {
  static {
    this.\u0275fac = function GoogleFeedbackDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoogleFeedbackDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GoogleFeedbackDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleFeedbackDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [GoogleFeedbackDialogComponent],
      imports: [SharedModule, ButtonModule, MatDialogModule],
      exports: [GoogleFeedbackDialogComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-ads/pages/my-ad-list/my-ad-list.page.module.ts
var MyAdListPageModule = class _MyAdListPageModule {
  static {
    this.\u0275fac = function MyAdListPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdListPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyAdListPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      MyAdListPageRoutingModule,
      SharedModule,
      MatCheckboxModule,
      AdStampModule,
      MyAdsInfoModule,
      MyAdDeleteDialogModule,
      MyAdUnPublishDialogModule,
      MyAdShareDialogModule,
      MyAdsFilterModule,
      MyAdHeadersv2Module,
      MyAdListSkeletonV2Module,
      MyAdItemV2Module,
      FormsModule,
      ReactiveFormsModule,
      UpdateStatusDialogModule,
      GoogleFeedbackDialogModule,
      MyAdListPaginationComponent,
      ButtonModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdListPageModule, [{
    type: NgModule,
    args: [{
      declarations: [MyAdListPage],
      imports: [
        MyAdListPageRoutingModule,
        SharedModule,
        MatCheckboxModule,
        AdStampModule,
        MyAdsInfoModule,
        MyAdDeleteDialogModule,
        MyAdUnPublishDialogModule,
        MyAdShareDialogModule,
        MyAdsFilterModule,
        MyAdHeadersv2Module,
        MyAdListSkeletonV2Module,
        MyAdItemV2Module,
        FormsModule,
        ReactiveFormsModule,
        UpdateStatusDialogModule,
        GoogleFeedbackDialogModule,
        MyAdListPaginationComponent,
        ButtonModule
      ]
    }]
  }], null, null);
})();
export {
  MyAdListPageModule
};
//# sourceMappingURL=chunk-RWCYYJ2A.js.map
