import {
  data
} from "./chunk-SPRKI5MA.js";
import {
  NgbOffcanvas
} from "./chunk-FFTGLPS5.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-ZRK6DKBO.js";
import {
  PropertyAlertDialogComponent
} from "./chunk-THEU3YGZ.js";
import {
  FiltersService
} from "./chunk-C3BHYCVX.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-5J2JGDL5.js";
import {
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AisleType,
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  CommonFacade,
  CountyType,
  FilterAction,
  FilterType,
  FiltersPanelClass,
  FormControl,
  IntercomService,
  MAT_DIALOG_DATA,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFabButton,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  MatList,
  MatListItem,
  MatListModule,
  MatOption,
  RouteService,
  Router,
  SectionType,
  SharedModule,
  TranslationsPipe,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Input,
  NgModule,
  PLATFORM_ID,
  ViewChild,
  __spreadValues,
  filter,
  inject,
  map,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/filters/components/location-search-dialog/location-search-dialog.component.ts
var _c0 = (a0) => ({ "px-3 pb-3": a0 });
function LocationSearchDialogComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row")(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function LocationSearchDialogComponent_For_19_Template_button_click_3_listener() {
      const loc_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(loc_r3));
    });
    \u0275\u0275elementStart(4, "mat-icon", 19);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const loc_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r3 == null ? null : (tmp_12_0 = loc_r3.split("-")) == null ? null : tmp_12_0.join(" "));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "remove " + loc_r3);
  }
}
function LocationSearchDialogComponent_ng_container_21_mat_list_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 21);
    \u0275\u0275listener("click", function LocationSearchDialogComponent_ng_container_21_mat_list_item_4_Template_mat_list_item_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      const search_r7 = \u0275\u0275reference(14);
      ctx_r3.updateLocation(option_r6 == null ? null : option_r6.location == null ? null : option_r6.location.reference);
      return \u0275\u0275resetView(search_r7.value = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const first_r8 = ctx.first;
    \u0275\u0275classProp("mt-2", first_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r6 == null ? null : option_r6.location == null ? null : option_r6.location.name, " ");
  }
}
function LocationSearchDialogComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-option", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LocationSearchDialogComponent_ng_container_21_mat_list_item_4_Template, 2, 3, "mat-list-item", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "n3936"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.recentSearch);
  }
}
function LocationSearchDialogComponent_mat_list_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 21);
    \u0275\u0275listener("click", function LocationSearchDialogComponent_mat_list_item_22_Template_mat_list_item_click_0_listener() {
      const option_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      const search_r7 = \u0275\u0275reference(14);
      ctx_r3.updateLocation(option_r10.reference);
      return \u0275\u0275resetView(search_r7.value = "");
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const first_r11 = ctx.first;
    \u0275\u0275classProp("mt-2", first_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r10 == null ? null : option_r10.name, " ");
  }
}
function LocationSearchDialogComponent_mat_list_item_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n3948"), " ");
  }
}
var LocationSearchDialogComponent = class _LocationSearchDialogComponent {
  constructor(data2, commonFacade, dialogRef, destroy) {
    this.data = data2;
    this.commonFacade = commonFacade;
    this.dialogRef = dialogRef;
    this.destroy = destroy;
    this.selectedLocations = [];
    this.locationControl = new FormControl("");
    this.counties = data.all;
    this.selectedLocations = data2?.selected ?? [];
  }
  updateLocation(value) {
    this.locationControl.reset();
    this.autoTrigger?.openPanel();
    if (!this.selectedLocations?.find((sl) => sl === value)) {
      this.selectedLocations.push(value);
    }
  }
  handleInput(event) {
    this.locationControl.patchValue(event.target.value);
  }
  remove(loc) {
    const INDEX = this.selectedLocations.findIndex((lc) => lc === loc);
    this.selectedLocations.splice(INDEX, 1);
  }
  fetchLocations() {
    this.locationControl.valueChanges.pipe(filter(Boolean), map((searchText) => this.counties.filter((county) => county.name.toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase()))), takeUntil(this.destroy)).subscribe((locations) => this.locations = locations);
  }
  submit() {
    this.dialogRef.close(this.selectedLocations);
  }
  ngOnInit() {
    this.commonFacade.recentSearches$.subscribe((res) => {
      this.recentSearch = res;
    });
    this.fetchLocations();
  }
  static {
    this.\u0275fac = function LocationSearchDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocationSearchDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(DestroyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationSearchDialogComponent, selectors: [["findqo-location-search-dialog"]], viewQuery: function LocationSearchDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatAutocompleteTrigger, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.autoTrigger = _t.first);
      }
    }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 28, vars: 16, consts: [["search", ""], ["chipGrid", ""], [1, "row", "border-bottom", "p-3", "align-items-center"], [1, "col"], [1, "text-body-regular", "fg-general-5"], [1, "col-auto"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "bg-basic-1", 3, "click"], [1, "pb-72px"], ["appearance", "outline", 1, "no-subscript", "p-3", "pb-2"], ["type", "text", "matInput", "", 3, "input", "matChipInputFor", "placeholder"], ["aria-label", "Location selection", 3, "ngClass"], ["role", "list"], [4, "ngIf"], ["role", "listitem", "class", "mb-1 py-5px fg-general-4 text-paragraph-regular lh-22px", 3, "mt-2", "click", 4, "ngFor", "ngForOf"], ["role", "listitem", 3, "disabled", 4, "ngIf"], [1, "p-3", "border-top", "position-absolute", "bottom-0", "w-100", "bg-basic-1"], ["color", "primary", "mat-flat-button", "", 1, "w-100", 3, "click"], [1, "text-capitalize"], ["matChipRemove", "", 3, "click"], [1, "fg-info-3", "material-icons-outlined"], [1, "text-body-regular", "fg-general-3", "bg-neutral-1", 3, "disabled"], ["role", "listitem", 1, "mb-1", "py-5px", "fg-general-4", "text-paragraph-regular", "lh-22px", 3, "click"], ["role", "listitem", 3, "disabled"]], template: function LocationSearchDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "p", 4);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
        \u0275\u0275listener("click", function LocationSearchDialogComponent_Template_button_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.dialogRef.close());
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "mat-form-field", 8)(11, "mat-icon");
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 9, 0);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275listener("input", function LocationSearchDialogComponent_Template_input_input_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleInput($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "mat-chip-grid", 10, 1);
        \u0275\u0275repeaterCreate(18, LocationSearchDialogComponent_For_19_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-list", 11);
        \u0275\u0275template(21, LocationSearchDialogComponent_ng_container_21_Template, 5, 5, "ng-container", 12)(22, LocationSearchDialogComponent_mat_list_item_22_Template, 2, 3, "mat-list-item", 13)(23, LocationSearchDialogComponent_mat_list_item_23_Template, 3, 4, "mat-list-item", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 15)(25, "button", 16);
        \u0275\u0275listener("click", function LocationSearchDialogComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translations");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const chipGrid_r12 = \u0275\u0275reference(17);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "n3053"));
        \u0275\u0275advance(10);
        \u0275\u0275property("matChipInputFor", chipGrid_r12)("placeholder", \u0275\u0275pipeBind1(15, 10, "n3938") + "...");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c0, ctx.selectedLocations.length));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.selectedLocations);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", (ctx.recentSearch == null ? null : ctx.recentSearch.length) && !(ctx.locations == null ? null : ctx.locations.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.locations);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.locations == null ? null : ctx.locations.length) && !(ctx.recentSearch == null ? null : ctx.recentSearch.length));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 12, "n3952"));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatIconButton, MatIcon, MatInput, MatFormField, MatList, MatListItem, MatOption, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, MatDialogClose, TranslationsPipe], styles: ["\n\n.pb-72px[_ngcontent-%COMP%] {\n  padding-bottom: 88px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/location-search-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationSearchDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-location-search-dialog", providers: [DestroyService], standalone: false, template: `<div class="row border-bottom p-3 align-items-center">
	<div class="col">
		<p class="text-body-regular fg-general-5">{{ 'n3053' | translations }}</p>
	</div>

	<div class="col-auto">
		<button mat-icon-button mat-dialog-close class="bg-basic-1" (click)="dialogRef.close()"><mat-icon>close</mat-icon></button>
	</div>
</div>

<div class="pb-72px">
	<mat-form-field appearance="outline" class="no-subscript p-3 pb-2">
		<mat-icon>search</mat-icon>

		<input #search type="text" [matChipInputFor]="chipGrid" (input)="handleInput($event)" matInput [placeholder]="('n3938' | translations) + '...'" />
	</mat-form-field>

	<mat-chip-grid #chipGrid aria-label="Location selection" [ngClass]="{ 'px-3 pb-3': selectedLocations.length }">
		@for (loc of selectedLocations; track $index) {
			<mat-chip-row>
				<span class="text-capitalize">{{ loc?.split('-')?.join(' ') }}</span>
				<button matChipRemove [attr.aria-label]="'remove ' + loc" (click)="remove(loc)">
					<mat-icon class="fg-info-3 material-icons-outlined">close</mat-icon>
				</button>
			</mat-chip-row>
		}
	</mat-chip-grid>

	<mat-list role="list">
		<!-- Recent history result -->
		<ng-container *ngIf="recentSearch?.length && !locations?.length">
			<mat-option [disabled]="true" class="text-body-regular fg-general-3 bg-neutral-1">
				{{ 'n3936' | translations }}
			</mat-option>

			<mat-list-item
				role="listitem"
				*ngFor="let option of recentSearch; let first = first"
				class="mb-1 py-5px fg-general-4 text-paragraph-regular lh-22px"
				[class.mt-2]="first"
				(click)="updateLocation(option?.location?.reference); search.value = ''"
			>
				{{ option?.location?.name }}
			</mat-list-item>
		</ng-container>

		<!-- Locations result -->
		<mat-list-item
			role="listitem"
			*ngFor="let option of locations; let first = first"
			class="mb-1 py-5px fg-general-4 text-paragraph-regular lh-22px"
			[class.mt-2]="first"
			(click)="updateLocation(option.reference); search.value = ''"
		>
			{{ option?.name }}
		</mat-list-item>

		<mat-list-item role="listitem" *ngIf="!locations?.length && !recentSearch?.length" [disabled]="true">
			{{ 'n3948' | translations }}
		</mat-list-item>
	</mat-list>
</div>

<div class="p-3 border-top position-absolute bottom-0 w-100 bg-basic-1">
	<button class="w-100" color="primary" mat-flat-button (click)="submit()">{{ 'n3952' | translations }}</button>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/filters/components/location-search-dialog/location-search-dialog.component.scss */\n.pb-72px {\n  padding-bottom: 88px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/location-search-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: CommonFacade }, { type: MatDialogRef }, { type: DestroyService }], { autoTrigger: [{
    type: ViewChild,
    args: [MatAutocompleteTrigger]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationSearchDialogComponent, { className: "LocationSearchDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/filters/components/location-search-dialog/location-search-dialog.component.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/feature/general/filters/components/location-search/location-search.component.ts
var _c02 = ["search"];
var _c1 = (a0) => ({ "px-2 pb-3": a0 });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = (a0) => [a0];
function LocationSearchComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row")(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 30);
    \u0275\u0275listener("click", function LocationSearchComponent_For_13_Template_button_click_3_listener() {
      const loc_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.remove(loc_r4));
    });
    \u0275\u0275elementStart(4, "mat-icon", 31);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loc_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(loc_r4 == null ? null : loc_r4.split("-").join(" "));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "remove " + loc_r4);
  }
}
function LocationSearchComponent_ng_container_14_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const first_r7 = ctx.first;
    \u0275\u0275classProp("mt-2", first_r7);
    \u0275\u0275property("value", option_r6 == null ? null : option_r6.location == null ? null : option_r6.location.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r6 == null ? null : option_r6.location == null ? null : option_r6.location.name, " ");
  }
}
function LocationSearchComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-option", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LocationSearchComponent_ng_container_14_mat_option_4_Template, 2, 4, "mat-option", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "n3936"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.recentSearch);
  }
}
function LocationSearchComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const first_r9 = ctx.first;
    \u0275\u0275classProp("mt-2", first_r9);
    \u0275\u0275property("value", option_r8 == null ? null : option_r8.reference);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8 == null ? null : option_r8.name, " ");
  }
}
function LocationSearchComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n3948"), " ");
  }
}
function LocationSearchComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedLocations == null ? null : ctx_r4.selectedLocations.value[0] == null ? null : ctx_r4.selectedLocations.value[0].split("-").join(" "), "\xA0 ");
  }
}
function LocationSearchComponent_mat_icon_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 36);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function LocationSearchComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function LocationSearchComponent_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      const offCanvasPropertyType_r12 = \u0275\u0275reference(41);
      return \u0275\u0275resetView(ctx_r4.onOpenFiltersforRent(offCanvasPropertyType_r12));
    });
    \u0275\u0275elementStart(1, "p", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 39);
    \u0275\u0275text(5, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r4.propertyFor));
  }
}
function LocationSearchComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3053"));
  }
}
function LocationSearchComponent_mat_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 41);
    \u0275\u0275text(1, "location_pin");
    \u0275\u0275elementEnd();
  }
}
function LocationSearchComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.selectedLocations == null ? null : ctx_r4.selectedLocations.value[0] == null ? null : ctx_r4.selectedLocations.value[0].split("-").join(" "), "\xA0 ");
  }
}
function LocationSearchComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "mat-icon", 43);
    \u0275\u0275text(2, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ms-0", ctx_r4.isFilterDialog);
  }
}
function LocationSearchComponent_mat_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 44);
    \u0275\u0275text(1, "location_pin");
    \u0275\u0275elementEnd();
  }
}
function LocationSearchComponent_div_37_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 43);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function LocationSearchComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function LocationSearchComponent_div_37_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleClearSelection($event));
    })("keyup.enter", function LocationSearchComponent_div_37_Template_div_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.handleClearSelection($event));
    });
    \u0275\u0275template(1, LocationSearchComponent_div_37_mat_icon_1_Template, 2, 0, "mat-icon", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.selectedLocations == null ? null : ctx_r4.selectedLocations.value.length);
  }
}
function LocationSearchComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c3, ctx_r4.viewport.desktop ? "text-body-regular fg-general-4" : ctx_r4.containerClass.includes("home-page") ? "text-body-regular fg-general-4" : "text-caption-regular fg-general-3"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "n3938"), "... ");
  }
}
function LocationSearchComponent_ng_template_40_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon", 60);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function LocationSearchComponent_ng_template_40_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon", 60);
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function LocationSearchComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "span", 51);
    \u0275\u0275text(4, "Purpose");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 50)(6, "findqo-button", 52);
    \u0275\u0275listener("clicked", function LocationSearchComponent_ng_template_40_Template_findqo_button_clicked_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onClose());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "div", 53);
    \u0275\u0275elementStart(8, "div", 54)(9, "p", 55);
    \u0275\u0275listener("click", function LocationSearchComponent_ng_template_40_Template_p_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onPropertyclick("Rent"));
    });
    \u0275\u0275text(10, " Rent ");
    \u0275\u0275template(11, LocationSearchComponent_ng_template_40_span_11_Template, 3, 0, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54)(13, "p", 55);
    \u0275\u0275listener("click", function LocationSearchComponent_ng_template_40_Template_p_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onPropertyclick("Buy"));
    });
    \u0275\u0275text(14, " Buy ");
    \u0275\u0275template(15, LocationSearchComponent_ng_template_40_span_15_Template, 3, 0, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 56)(17, "div", 57)(18, "findqo-button", 58);
    \u0275\u0275listener("clicked", function LocationSearchComponent_ng_template_40_Template_findqo_button_clicked_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onResetFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 57)(20, "findqo-button", 59);
    \u0275\u0275listener("clicked", function LocationSearchComponent_ng_template_40_Template_findqo_button_clicked_20_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onSubmit());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("btnType", ctx_r4.buttonType.FILLED);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r4.propertyFor === "RENT");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r4.propertyFor === "BUY");
    \u0275\u0275advance(3);
    \u0275\u0275property("btnType", ctx_r4.buttonType.BASIC);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", "Done");
  }
}
var LocationSearchComponent = class _LocationSearchComponent {
  constructor(destroy, dialog, platformId, filtersService, commonFacade, viewport, route, authService, ngbOffCanvas, router, intercomService, routeService) {
    this.destroy = destroy;
    this.dialog = dialog;
    this.platformId = platformId;
    this.filtersService = filtersService;
    this.commonFacade = commonFacade;
    this.viewport = viewport;
    this.route = route;
    this.authService = authService;
    this.ngbOffCanvas = ngbOffCanvas;
    this.router = router;
    this.intercomService = intercomService;
    this.routeService = routeService;
    this.offcanvas = inject(NgbOffcanvas);
    this.counties = data.all;
    this.buttonCss = "";
    this.mobileContainerClass = "";
    this.containerClass = "";
    this.isFilterDialog = false;
    this.propertyFor = "RENT";
    this.locationControl = new FormControl("");
    this.isSearchBarOpened = false;
    this.buttonType = ButtonType;
  }
  get selectedLocations() {
    return this.filtersService.locations;
  }
  updateLocation(event) {
    this.locationControl.reset();
    const LOCATION_VALUE = event?.option?.value;
    if (!this.selectedLocations?.value.find((sl) => sl === LOCATION_VALUE)) {
      const LOCATION = this.filtersService.locations.controls.find((l) => l.value === LOCATION_VALUE);
      if (!LOCATION) {
        this.filtersService.locations.push(new FormControl(LOCATION_VALUE));
      }
      this.filtersService.updateRoute();
    }
  }
  handleInput(event) {
    this.locationControl.patchValue(event.target.value);
  }
  handlePanel(event, trigger) {
    event.stopPropagation();
    this.isSearchBarOpened = true;
    setTimeout(() => {
      if (this.search) {
        this.search.value = "";
        trigger.openPanel();
        this.search?.focus();
      }
    }, 0);
  }
  handleClearSelection($event) {
    $event.stopImmediatePropagation();
    this.filtersService.locations.clear();
    this.filtersService.updateRoute();
  }
  openDialog() {
    this.dialog.open(LocationSearchDialogComponent, {
      width: "100%",
      height: "100%",
      maxWidth: "500px",
      panelClass: ["overflow-hidden"],
      data: {
        recentSearch: this.recentSearch,
        selected: this.selectedLocations?.value
      }
    }).afterClosed().subscribe((res) => {
      if (res) {
        res.forEach((element) => {
          this.updateLocation({ option: { value: element } });
        });
        this.filtersService.updateRoute();
      }
    });
  }
  remove(loc) {
    const INDEX = this.filtersService.locations.controls.findIndex((l) => l.value === loc);
    this.filtersService.locations.removeAt(INDEX);
    this.filtersService.updateRoute();
  }
  fetchLocations() {
    this.locationControl.valueChanges.pipe(filter(Boolean), map((searchText) => this.counties.filter((county) => county.name.toLocaleLowerCase().includes(searchText.trim().toLocaleLowerCase()))), takeUntil(this.destroy)).subscribe((locations) => this.locations = locations);
  }
  onShowAlertsDialog() {
    if (!this.authService.user()) {
      this.authService.openAuthDialog();
      return;
    }
    this.dialog.open(PropertyAlertDialogComponent, {
      disableClose: true,
      panelClass: "property-alert-dialog",
      data: {
        section: this.route.snapshot.params["section"],
        aisle: this.route.snapshot.params["aisle"],
        location: __spreadValues({}, this.filtersService.locations.value.length ? { countyReference: this.filtersService.locations.value[0] } : {})
      }
    });
  }
  onOpenFiltersforRent(content) {
    const offCanvasRef = this.ngbOffCanvas.open(content, { position: "bottom", panelClass: FiltersPanelClass.BASE_MIN_MAX_FILTER });
    offCanvasRef.dismissed.subscribe((action) => {
      switch (action) {
        case FilterAction.UPDATE:
          this.filtersService.updateRoute();
      }
    });
  }
  onResetFilters() {
    this.propertyFor = "RENT";
    this.onSubmit();
  }
  onPropertyclick(value) {
    if (value == "Rent") {
      this.propertyFor = "RENT";
    } else {
      this.propertyFor = "BUY";
    }
  }
  onClose() {
    this.offcanvas.dismiss();
    if (this.router.url === "/") {
      this.intercomService.toggelIntercomPopup(false);
    }
  }
  currentLocation() {
    const CURRENT_ROUTE = this.router.routerState.root.firstChild;
    return CURRENT_ROUTE.snapshot.params?.[FilterType.LOCATION_REFERENCE] || CURRENT_ROUTE.snapshot.data?.[FilterType.LOCATION_REFERENCE] || CountyType.DEFAULT;
  }
  onSubmit() {
    this.ngbOffCanvas.dismiss(FilterAction.UPDATE);
    if (this.propertyFor == "RENT") {
      this.router.navigate([APP_ROUTE.rentAdsList]);
      this.router.navigate([SectionType.PROPERTIES_FOR_RENT, CountyType.DEFAULT, AisleType.RENT_RESIDENTIAL]);
    } else {
      this.router.navigate([APP_ROUTE.sellresidential]);
      this.router.navigate([SectionType.PROPERTIES_FOR_SALE, CountyType.DEFAULT, AisleType.SALE_RESIDENTIAL]);
    }
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.fetchLocations();
      this.commonFacade.recentSearches$.subscribe((res) => this.recentSearch = res);
      this.route.params.subscribe((res) => {
        if (res["section"] == "properties-for-sale") {
          this.onPropertyclick("Buy");
        } else {
          this.onPropertyclick("Rent");
        }
      });
    }
  }
  static {
    this.\u0275fac = function LocationSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocationSearchComponent)(\u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(FiltersService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NgbOffcanvas), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IntercomService), \u0275\u0275directiveInject(RouteService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationSearchComponent, selectors: [["findqo-location-search"]], viewQuery: function LocationSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.search = _t.first);
      }
    }, inputs: { buttonCss: "buttonCss", mobileContainerClass: "mobileContainerClass", containerClass: "containerClass", isFilterDialog: "isFilterDialog" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 42, vars: 40, consts: [["search", "matInput", "trigger", "matAutocompleteTrigger"], ["auto", "matAutocomplete"], ["chipGrid", ""], ["noLocationSelected", ""], ["offCanvasPropertyType", ""], [1, "d-flex", "justify-content-between", 3, "ngClass"], ["appearance", "outline", 1, "bg-basic-1", "no-subscript", "d-none", "target-field", 3, "ngClass"], [1, "fg-prim-2"], ["type", "text", "matInput", "", 3, "input", "matChipInputFor", "placeholder", "matAutocomplete"], ["hideSingleSelectionIndicator", "", 1, "location-filter", 3, "closed", "optionSelected"], ["aria-label", "Location selection", 3, "ngClass"], [4, "ngIf"], ["class", "mb-1 py-5px fg-general-5 text-paragraph-regular lh-22px", 3, "value", "mt-2", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], ["mat-button", "", "disableRipple", "", 1, "bg-basic-1", "w-100", "target-button", "fg-general-5", "d-none", "justify-content-between", "text-body-regular", "align-items-center", 3, "click", "ngClass"], [1, "d-flex", "align-items-center"], ["class", "text-capitalize fg-general-5", 4, "ngIf", "ngIfElse"], ["tabindex", "0", 3, "click", "keyup.enter"], ["class", "fg-general-3", "iconPositionEnd", "", 4, "ngIf"], [1, "d-flex", 3, "ngClass"], ["class", "btn-property me-2", "mat-fab", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "disableRipple", "", 1, "bg-basic-1", "d-lg-none", "w-100", "justify-content-start", 3, "click", "ngClass"], ["class", "align-self-center", 4, "ngIf"], [1, "d-flex", "w-100", "align-items-center", "ps-1", "fg-general-5"], ["class", "fg-prim-2 pe-1", 4, "ngIf"], ["class", "text-capitalize", 4, "ngIf", "ngIfElse"], ["class", "d-flex align-items-center ms-2", 3, "ms-0", 4, "ngIf"], ["class", "fg-prim-2 pe-1 ms-auto", 4, "ngIf"], ["tabindex", "0", "class", "d-flex align-items-center", 3, "click", "keyup.enter", 4, "ngIf"], [1, "text-capitalize"], ["matChipRemove", "", 3, "click"], [1, "fg-info-3", "material-icons-outlined"], [1, "text-body-regular", "fg-general-5", 3, "disabled"], [1, "mb-1", "py-5px", "fg-general-5", "text-paragraph-regular", "lh-22px", 3, "value"], [3, "disabled"], [1, "text-capitalize", "fg-general-5"], ["iconPositionEnd", "", 1, "fg-general-3"], ["mat-fab", "", "color", "primary", 1, "btn-property", "me-2", 3, "click"], [1, "menu", "lbl-property"], [1, "icn-property"], [1, "align-self-center"], [1, "fg-prim-2", "pe-1"], [1, "d-flex", "align-items-center", "ms-2"], ["iconPositionEnd", "", 1, "fg-general-3", "align-middle"], [1, "fg-prim-2", "pe-1", "ms-auto"], ["tabindex", "0", 1, "d-flex", "align-items-center", 3, "click", "keyup.enter"], ["class", "fg-general-3 align-middle", "iconPositionEnd", "", 4, "ngIf"], [3, "ngClass"], [1, "container-fluid", "p-0"], [1, "row", "px-2", "mt-2", "align-items-center", "justify-content-between"], [1, "col-6"], [1, "text-caption-2-large"], ["btnClass", "close-round", "materialIconSuffix", "close", 1, "float-end", 3, "clicked", "btnType"], [1, "border-bottom", "py-2"], [1, "element-row", "panel-hgh"], [1, "opt-style", 3, "click"], [1, "row", "pb-2"], [1, "col-6", "px-2"], ["btnClass", "w-100 h-150", "label", "Reset", 3, "clicked", "btnType"], ["btnClass", "w-100 h-150 ", 3, "clicked", "label"], [1, "icn-chk", "float-end"]], template: function LocationSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 5)(1, "mat-form-field", 6)(2, "mat-icon", 7);
        \u0275\u0275text(3, "location_pin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 8, 0);
        \u0275\u0275pipe(7, "translations");
        \u0275\u0275listener("input", function LocationSearchComponent_Template_input_input_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleInput($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-autocomplete", 9, 1);
        \u0275\u0275listener("closed", function LocationSearchComponent_Template_mat_autocomplete_closed_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isSearchBarOpened = false);
        })("optionSelected", function LocationSearchComponent_Template_mat_autocomplete_optionSelected_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          const search_r2 = \u0275\u0275reference(5);
          ctx.updateLocation($event);
          return \u0275\u0275resetView(search_r2.value = "");
        });
        \u0275\u0275elementStart(10, "mat-chip-grid", 10, 2);
        \u0275\u0275repeaterCreate(12, LocationSearchComponent_For_13_Template, 6, 2, "mat-chip-row", null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, LocationSearchComponent_ng_container_14_Template, 5, 5, "ng-container", 11)(15, LocationSearchComponent_mat_option_15_Template, 2, 4, "mat-option", 12)(16, LocationSearchComponent_mat_option_16_Template, 3, 4, "mat-option", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 14);
        \u0275\u0275listener("click", function LocationSearchComponent_Template_button_click_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          const trigger_r10 = \u0275\u0275reference(6);
          return \u0275\u0275resetView(ctx.handlePanel($event, trigger_r10));
        });
        \u0275\u0275elementStart(18, "span", 15)(19, "mat-icon", 7);
        \u0275\u0275text(20, "location_pin");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, LocationSearchComponent_span_21_Template, 2, 1, "span", 16);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 17);
        \u0275\u0275listener("click", function LocationSearchComponent_Template_div_click_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleClearSelection($event));
        })("keyup.enter", function LocationSearchComponent_Template_div_keyup_enter_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleClearSelection($event));
        });
        \u0275\u0275template(25, LocationSearchComponent_mat_icon_25_Template, 2, 0, "mat-icon", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 19);
        \u0275\u0275template(27, LocationSearchComponent_button_27_Template, 6, 3, "button", 20);
        \u0275\u0275elementStart(28, "button", 21);
        \u0275\u0275listener("click", function LocationSearchComponent_Template_button_click_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openDialog());
        });
        \u0275\u0275template(29, LocationSearchComponent_span_29_Template, 3, 3, "span", 22);
        \u0275\u0275elementStart(30, "span", 23);
        \u0275\u0275template(31, LocationSearchComponent_mat_icon_31_Template, 2, 0, "mat-icon", 24)(32, LocationSearchComponent_span_32_Template, 2, 1, "span", 25);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translations");
        \u0275\u0275template(35, LocationSearchComponent_div_35_Template, 3, 2, "div", 26)(36, LocationSearchComponent_mat_icon_36_Template, 2, 0, "mat-icon", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, LocationSearchComponent_div_37_Template, 2, 1, "div", 28);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, LocationSearchComponent_ng_template_38_Template, 3, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(40, LocationSearchComponent_ng_template_40_Template, 21, 5, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const auto_r15 = \u0275\u0275reference(9);
        const chipGrid_r16 = \u0275\u0275reference(11);
        const noLocationSelected_r17 = \u0275\u0275reference(39);
        \u0275\u0275property("ngClass", ctx.containerClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.isSearchBarOpened ? "d-lg-flex" : "d-none");
        \u0275\u0275advance(3);
        \u0275\u0275property("matChipInputFor", chipGrid_r16)("placeholder", \u0275\u0275pipeBind1(7, 29, "n3938") + "...")("matAutocomplete", auto_r15);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c1, ctx.selectedLocations == null ? null : ctx.selectedLocations.length));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.selectedLocations == null ? null : ctx.selectedLocations.value);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.recentSearch == null ? null : ctx.recentSearch.length) && !(ctx.locations == null ? null : ctx.locations.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.locations);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.locations == null ? null : ctx.locations.length) && !(ctx.recentSearch == null ? null : ctx.recentSearch.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c2, ctx.isSearchBarOpened ? "d-none" : "d-lg-flex", ctx.buttonCss));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.selectedLocations == null ? null : ctx.selectedLocations.value == null ? null : ctx.selectedLocations.value.length)("ngIfElse", noLocationSelected_r17);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (ctx.selectedLocations == null ? null : ctx.selectedLocations.value == null ? null : ctx.selectedLocations.value.length) - 1 > 0 ? "  & " + ((ctx.selectedLocations == null ? null : ctx.selectedLocations.value == null ? null : ctx.selectedLocations.value.length) - 1) + " " + \u0275\u0275pipeBind1(23, 31, "n2135") : "", " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.selectedLocations == null ? null : ctx.selectedLocations.value == null ? null : ctx.selectedLocations.value.length);
        \u0275\u0275advance();
        \u0275\u0275classProp("w-100", !ctx.viewport.desktop);
        \u0275\u0275property("ngClass", ctx.mobileContainerClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isFilterDialog && !ctx.containerClass.includes("home-page") && !ctx.viewport.desktop);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.buttonCss);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isFilterDialog);
        \u0275\u0275advance();
        \u0275\u0275classProp("textDialog", ctx.isFilterDialog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isFilterDialog && ctx.containerClass.includes("home-page") && !ctx.viewport.desktop);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.selectedLocations == null ? null : ctx.selectedLocations.value.length) || ctx.isFilterDialog)("ngIfElse", noLocationSelected_r17);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (ctx.selectedLocations == null ? null : ctx.selectedLocations.value.length) - 1 > 0 ? "  & " + ((ctx.selectedLocations == null ? null : ctx.selectedLocations.value.length) - 1) + " " + \u0275\u0275pipeBind1(34, 33, "n2135") : "", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isFilterDialog);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isFilterDialog && !ctx.containerClass.includes("home-page") && !ctx.viewport.desktop);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isFilterDialog);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatButton, MatFabButton, MatIcon, MatInput, MatFormField, MatOption, MatAutocomplete, MatAutocompleteTrigger, MatChipGrid, MatChipInput, MatChipRemove, MatChipRow, ButtonComponent, TitleCasePipe, TranslationsPipe], styles: ["\n\n.btn-property[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--prim-2) !important;\n  color: var(--prim-2) !important;\n  height: 32px !important;\n  border-radius: 30px !important;\n  width: 70px !important;\n  box-shadow: none !important;\n}\n.lbl-property[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: -15px !important;\n}\n.icn-property[_ngcontent-%COMP%] {\n  color: #ee0088;\n  height: 10px !important;\n  left: 43px !important;\n  position: absolute !important;\n}\n.btn-cls[_ngcontent-%COMP%] {\n  padding-left: 310px !important;\n  top: 6px !important;\n  position: relative !important;\n}\n.panel-hgh[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n.opt-style[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n  margin-top: 10px !important;\n}\n.icn-chk[_ngcontent-%COMP%] {\n  color: #ee0088;\n  left: -15px !important;\n  position: relative !important;\n}\n.ms-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-inline-start: 0 !important;\n}\n.textDialog[_ngcontent-%COMP%] {\n  color: var(--general-3) !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  justify-content: end !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/location-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationSearchComponent, [{
    type: Component,
    args: [{ selector: "findqo-location-search", providers: [DestroyService], standalone: false, template: `<div [ngClass]="containerClass" class="d-flex justify-content-between">
	<mat-form-field [ngClass]="isSearchBarOpened ? 'd-lg-flex' : 'd-none'" appearance="outline" class="bg-basic-1 no-subscript d-none target-field">
		<mat-icon class="fg-prim-2">location_pin</mat-icon>

		<input
			#search="matInput"
			type="text"
			[matChipInputFor]="chipGrid"
			(input)="handleInput($event)"
			matInput
			[placeholder]="('n3938' | translations) + '...'"
			#trigger="matAutocompleteTrigger"
			[matAutocomplete]="auto"
		/>

		<mat-autocomplete
			(closed)="isSearchBarOpened = false"
			#auto="matAutocomplete"
			(optionSelected)="updateLocation($event); search.value = ''"
			class="location-filter"
			hideSingleSelectionIndicator
		>
			<mat-chip-grid #chipGrid aria-label="Location selection" [ngClass]="{ 'px-2 pb-3': selectedLocations?.length }">
				@for (loc of selectedLocations?.value; track $index) {
					<mat-chip-row>
						<span class="text-capitalize">{{ loc?.split('-').join(' ') }}</span>
						<button matChipRemove [attr.aria-label]="'remove ' + loc" (click)="remove(loc)">
							<mat-icon class="fg-info-3 material-icons-outlined">close</mat-icon>
						</button>
					</mat-chip-row>
				}
			</mat-chip-grid>

			<!-- Recent history result -->
			<ng-container *ngIf="recentSearch?.length && !locations?.length">
				<mat-option [disabled]="true" class="text-body-regular fg-general-5">
					{{ 'n3936' | translations }}
				</mat-option>

				<mat-option
					*ngFor="let option of recentSearch; let first = first"
					[value]="option?.location?.reference"
					class="mb-1 py-5px fg-general-5 text-paragraph-regular lh-22px"
					[class.mt-2]="first"
				>
					{{ option?.location?.name }}
				</mat-option>
			</ng-container>

			<!-- Locations result -->
			<mat-option
				*ngFor="let option of locations; let first = first"
				[value]="option?.reference"
				class="mb-1 py-5px fg-general-5 text-paragraph-regular lh-22px"
				[class.mt-2]="first"
			>
				{{ option?.name }}
			</mat-option>

			<mat-option *ngIf="!locations?.length && !recentSearch?.length" [disabled]="true">
				{{ 'n3948' | translations }}
			</mat-option>
		</mat-autocomplete>
	</mat-form-field>

	<button
		class="bg-basic-1 w-100 target-button fg-general-5 d-none justify-content-between text-body-regular align-items-center"
		[ngClass]="[isSearchBarOpened ? 'd-none' : 'd-lg-flex', buttonCss]"
		mat-button
		disableRipple
		(click)="handlePanel($event, trigger)"
	>
		<span class="d-flex align-items-center">
			<mat-icon class="fg-prim-2">location_pin</mat-icon>

			<span class="text-capitalize fg-general-5" *ngIf="selectedLocations?.value?.length; else noLocationSelected">
				{{ selectedLocations?.value[0]?.split('-').join(' ') }}&nbsp;
			</span>

			{{ selectedLocations?.value?.length - 1 > 0 ? ' ' + ' & ' + (selectedLocations?.value?.length - 1) + ' ' + ('n2135' | translations) : '' }}
		</span>

		<div tabindex="0" (click)="handleClearSelection($event)" (keyup.enter)="handleClearSelection($event)">
			<mat-icon *ngIf="selectedLocations?.value?.length" class="fg-general-3" iconPositionEnd>cancel</mat-icon>
		</div>
	</button>

	<div [ngClass]="mobileContainerClass" class="d-flex" [class.w-100]="!viewport.desktop">
		<button
			*ngIf="!isFilterDialog && !containerClass.includes('home-page') && !viewport.desktop"
			(click)="onOpenFiltersforRent(offCanvasPropertyType)"
			class="btn-property me-2"
			mat-fab
			color="primary"
		>
			<p class="menu lbl-property">{{ propertyFor | titlecase }}</p>
			<mat-icon class="icn-property">keyboard_arrow_down</mat-icon>
		</button>

		<button class="bg-basic-1 d-lg-none w-100 justify-content-start" mat-button disableRipple (click)="openDialog()" [ngClass]="buttonCss">
			<span class="align-self-center" *ngIf="isFilterDialog">{{ 'n3053' | translations }}</span>

			<span class="d-flex w-100 align-items-center ps-1 fg-general-5" [class.textDialog]="isFilterDialog">
				<mat-icon class="fg-prim-2 pe-1" *ngIf="!isFilterDialog && containerClass.includes('home-page') && !viewport.desktop">location_pin</mat-icon>
				<span class="text-capitalize" *ngIf="selectedLocations?.value.length || isFilterDialog; else noLocationSelected">
					{{ selectedLocations?.value[0]?.split('-').join(' ') }}&nbsp;
				</span>

				{{ selectedLocations?.value.length - 1 > 0 ? ' ' + ' & ' + (selectedLocations?.value.length - 1) + ' ' + ('n2135' | translations) : '' }}

				<div *ngIf="isFilterDialog" class="d-flex align-items-center ms-2" [class.ms-0]="isFilterDialog">
					<mat-icon class="fg-general-3 align-middle" iconPositionEnd>chevron_right</mat-icon>
				</div>
				<mat-icon class="fg-prim-2 pe-1 ms-auto" *ngIf="!isFilterDialog && !containerClass.includes('home-page') && !viewport.desktop">location_pin</mat-icon>
			</span>

			<div
				*ngIf="!isFilterDialog"
				tabindex="0"
				(click)="handleClearSelection($event)"
				(keyup.enter)="handleClearSelection($event)"
				class="d-flex align-items-center"
			>
				<mat-icon *ngIf="selectedLocations?.value.length" class="fg-general-3 align-middle" iconPositionEnd>cancel</mat-icon>
			</div>
		</button>
	</div>
</div>

<ng-template #noLocationSelected>
	<span
		[ngClass]="[
			viewport.desktop
				? 'text-body-regular fg-general-4'
				: containerClass.includes('home-page')
					? 'text-body-regular fg-general-4'
					: 'text-caption-regular fg-general-3'
		]"
	>
		{{ 'n3938' | translations }}...
	</span>
</ng-template>

<ng-template #offCanvasPropertyType let-offcanvas>
	<div class="container-fluid p-0">
		<div class="row px-2 mt-2 align-items-center justify-content-between">
			<div class="col-6">
				<span class="text-caption-2-large">Purpose</span>
			</div>
			<div class="col-6">
				<findqo-button class="float-end" btnClass="close-round" materialIconSuffix="close" [btnType]="buttonType.FILLED" (clicked)="onClose()"></findqo-button>
			</div>
		</div>

		<div class="border-bottom py-2"></div>

		<div class="element-row panel-hgh">
			<p class="opt-style" (click)="onPropertyclick('Rent')">
				Rent
				<span *ngIf="propertyFor === 'RENT'">
					<mat-icon class="icn-chk float-end">check</mat-icon>
				</span>
			</p>
		</div>
		<div class="element-row panel-hgh">
			<p class="opt-style" (click)="onPropertyclick('Buy')">
				Buy
				<span *ngIf="propertyFor === 'BUY'">
					<mat-icon class="icn-chk float-end">check</mat-icon>
				</span>
			</p>
		</div>

		<div class="row pb-2">
			<div class="col-6 px-2">
				<findqo-button btnClass="w-100 h-150" label="Reset" [btnType]="buttonType.BASIC" (clicked)="onResetFilters()"></findqo-button>
			</div>
			<div class="col-6 px-2">
				<findqo-button btnClass="w-100 h-150 " [label]="'Done'" (clicked)="onSubmit()"></findqo-button>
			</div>
		</div>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/filters/components/location-search/location-search.component.scss */\n.btn-property {\n  background: none;\n  border: 1px solid var(--prim-2) !important;\n  color: var(--prim-2) !important;\n  height: 32px !important;\n  border-radius: 30px !important;\n  width: 70px !important;\n  box-shadow: none !important;\n}\n.lbl-property {\n  font-size: 13px;\n  margin-left: -15px !important;\n}\n.icn-property {\n  color: #ee0088;\n  height: 10px !important;\n  left: 43px !important;\n  position: absolute !important;\n}\n.btn-cls {\n  padding-left: 310px !important;\n  top: 6px !important;\n  position: relative !important;\n}\n.panel-hgh {\n  height: 50px !important;\n}\n.opt-style {\n  margin-left: 10px !important;\n  margin-top: 10px !important;\n}\n.icn-chk {\n  color: #ee0088;\n  left: -15px !important;\n  position: relative !important;\n}\n.ms-0 {\n  margin-left: 0 !important;\n  margin-inline-start: 0 !important;\n}\n.textDialog {\n  color: var(--general-3) !important;\n  font-size: 0.75rem !important;\n  font-weight: 400 !important;\n  justify-content: end !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/location-search.component.css.map */\n"] }]
  }], () => [{ type: DestroyService }, { type: MatDialog }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: FiltersService }, { type: CommonFacade }, { type: ViewportService }, { type: ActivatedRoute }, { type: AuthService }, { type: NgbOffcanvas }, { type: Router }, { type: IntercomService }, { type: RouteService }], { search: [{
    type: ViewChild,
    args: ["search"]
  }], buttonCss: [{
    type: Input
  }], mobileContainerClass: [{
    type: Input
  }], containerClass: [{
    type: Input
  }], isFilterDialog: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationSearchComponent, { className: "LocationSearchComponent", filePath: "apps/findqo-ireland/src/app/feature/general/filters/components/location-search/location-search.component.ts", lineNumber: 33 });
})();

// apps/findqo-ireland/src/app/feature/general/filters/components/location-search-dialog/location-search-dialog.module.ts
var LocationSearchDialogModule = class _LocationSearchDialogModule {
  static {
    this.\u0275fac = function LocationSearchDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocationSearchDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LocationSearchDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatInputModule, MatListModule, MatSelectModule, MatChipsModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationSearchDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [LocationSearchDialogComponent],
      imports: [SharedModule, MatInputModule, MatListModule, MatSelectModule, MatChipsModule, MatDialogModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/general/filters/components/location-search/location-search.module.ts
var LocationSearchModule = class _LocationSearchModule {
  static {
    this.\u0275fac = function LocationSearchModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocationSearchModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LocationSearchModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatInputModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatChipsModule, LocationSearchDialogModule, ButtonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationSearchModule, [{
    type: NgModule,
    args: [{
      declarations: [LocationSearchComponent],
      imports: [SharedModule, MatInputModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatChipsModule, LocationSearchDialogModule, ButtonModule],
      exports: [LocationSearchComponent]
    }]
  }], null, null);
})();

export {
  LocationSearchComponent,
  LocationSearchModule
};
//# sourceMappingURL=chunk-YBOP6AON.js.map
