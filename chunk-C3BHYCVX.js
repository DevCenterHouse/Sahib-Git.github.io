import {
  BreadcrumbsState
} from "./chunk-5CLAA2MT.js";
import {
  ADS_FILTERS,
  ActivatedRoute,
  CommonUtil,
  CountyType,
  FilterTemplateType,
  FilterType,
  FormArray,
  FormBuilder,
  FormControl,
  RouteDataType,
  RouteService,
  Router
} from "./chunk-DMGY2MF4.js";
import {
  BehaviorSubject,
  Injectable,
  __async,
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/states/filters.state.ts
var FiltersState = class _FiltersState {
  constructor() {
    this._filters$ = new BehaviorSubject([]);
    this._selectedFilterCount$ = new BehaviorSubject(0);
    this._isFiltersValueLoading$ = new BehaviorSubject(false);
    this._isLoading$ = new BehaviorSubject(false);
    this._countyList$ = new BehaviorSubject([]);
  }
  get filters$() {
    return this._filters$.asObservable();
  }
  get selectedFilterCount$() {
    return this._selectedFilterCount$.asObservable();
  }
  get isFiltersValueLoading$() {
    return this._isFiltersValueLoading$.asObservable();
  }
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  get countyList$() {
    return this._countyList$.asObservable();
  }
  getFilters() {
    return this._filters$.getValue();
  }
  setFilters(filters) {
    this._filters$.next(filters);
  }
  setIsFilterValueLoading(isLoading) {
    this._isFiltersValueLoading$.next(isLoading);
  }
  setIsLoading(isLoading) {
    this._isLoading$.next(isLoading);
  }
  setCountyList(countyList) {
    this._countyList$.next(countyList);
  }
  setSelectedFilterCount(params) {
    this._selectedFilterCount$.next(this.countNonEmptyKeys(params));
  }
  removeFilterValues(paramName) {
    const CURRENT_FILTERS = this._filters$.getValue();
    const FILTERS_INDEX = CURRENT_FILTERS.findIndex((filter) => filter.paramName === paramName);
    CURRENT_FILTERS[FILTERS_INDEX] = __spreadProps(__spreadValues({}, CURRENT_FILTERS[FILTERS_INDEX]), { values: [] });
    this.setFilters([...CURRENT_FILTERS]);
  }
  updateFilter(updateFilter) {
    const NEW_FILTERS = this._filters$.getValue();
    const FILTER_INDEX = NEW_FILTERS.findIndex((filter) => filter.paramName === updateFilter.paramName);
    NEW_FILTERS[FILTER_INDEX] = __spreadValues(__spreadValues({}, NEW_FILTERS[FILTER_INDEX]), updateFilter);
    this.setFilters([...NEW_FILTERS]);
  }
  countNonEmptyKeys(obj) {
    const UN_COUNTED_KEYS = [FilterType.SECTION, FilterType.AISLE, FilterType.SORT, "perPage"];
    let count = 0;
    for (const key in obj) {
      const IS_INCLUDED = !UN_COUNTED_KEYS.toString().includes(key);
      if (IS_INCLUDED && obj.hasOwnProperty(key) && obj[key] && obj[key] !== "" && !(Array.isArray(obj[key]) && obj[key].length === 0)) {
        count++;
      }
    }
    return count === 0 ? null : count;
  }
  static {
    this.\u0275fac = function FiltersState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FiltersState, factory: _FiltersState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersState, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/general/filters/utils/filters.utils.ts
var FiltersUtil = class {
  static {
    this.createQueryParams = (formValue) => {
      return Object.keys(formValue).reduce((accumulator, key) => {
        if (key === FilterType.STAND || key === FilterType.SHELF || key === FilterType.LOCATION_REFERENCE) {
          return accumulator;
        }
        if (CommonUtil.isTypeOfObject(formValue[key])) {
          accumulator[key] = formValue[key].map((value) => value.id);
        } else if (formValue[key]) {
          accumulator[key] = formValue[key];
        }
        return accumulator;
      }, {});
    };
  }
  static {
    this.createAdListRequetParams = (formValue) => {
      return Object.keys(formValue).reduce((accumulator, key) => {
        if (CommonUtil.isTypeOfObject(formValue[key])) {
          accumulator[key] = formValue[key].map((value) => value.id);
        } else if (formValue[key]) {
          accumulator[key] = formValue[key];
        }
        return accumulator;
      }, {});
    };
  }
  static {
    this.queryParamsToMultiSelectionControlValue = (queryParams) => {
      let controlValue = [];
      if (Array.isArray(queryParams)) {
        controlValue = queryParams.map((id) => {
          return {
            id
          };
        });
      } else if (queryParams) {
        controlValue = [
          {
            id: queryParams
          }
        ];
      }
      return controlValue;
    };
  }
  static {
    this.updateFormValueFromQueryParams = (queryParams) => {
      const MULTI_SELECTION_FILTER_LIST = ADS_FILTERS.filter((filter) => filter.templateType === FilterTemplateType.MULTI_SELECTION).map((filter) => filter.paramName);
      return Object.keys(queryParams).reduce((accumulator, key) => {
        if (MULTI_SELECTION_FILTER_LIST.includes(key) && Array.isArray(queryParams[key])) {
          accumulator[key] = queryParams[key].map((id) => {
            return {
              id
            };
          });
        } else if (queryParams[key] && MULTI_SELECTION_FILTER_LIST.includes(key)) {
          accumulator[key] = [
            {
              id: queryParams[key]
            }
          ];
        } else if (queryParams[key]) {
          accumulator[key] = queryParams[key];
        }
        return accumulator;
      }, {});
    };
  }
  static {
    this.getFilterDropdownValue = (filterValueList, key, value) => {
      return filterValueList.find((filterValue) => filterValue[key] === value);
    };
  }
  static {
    this.isFilterListChanged = (previousFilterList, filterList) => {
      const FILTER_KEY_LIST = filterList.map((filter) => filter.paramName);
      return previousFilterList.some((filter) => !FILTER_KEY_LIST.includes(filter) && filter !== FilterType.SORT);
    };
  }
};

// apps/findqo-ireland/src/app/feature/general/filters/services/filters.service.ts
var FiltersService = class _FiltersService {
  constructor(router, route, fb, breadcrumbState, filterState, routeService) {
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.breadcrumbState = breadcrumbState;
    this.filterState = filterState;
    this.routeService = routeService;
    this._locations = new FormArray([]);
  }
  // Easy getter for the form controls
  get fc() {
    return this._filtersForm.controls;
  }
  get othersFc() {
    return this._othersForm.controls;
  }
  get locations() {
    return this._locations;
  }
  updateForm(queryParams) {
    const NEW_FORM_VALUE = FiltersUtil.updateFormValueFromQueryParams(queryParams);
    this._filtersForm.reset(NEW_FORM_VALUE);
    this._filtersForm.updateValueAndValidity();
  }
  updateControlValue(filter, value) {
    this.fc[filter.paramName].patchValue(value);
    if (filter?.childReferenceParamName) {
      if (filter.paramName === FilterType.MANUFACTURER) {
        if (this.fc[FilterType.PRODUCT]?.value) {
          this.fc[FilterType.PRODUCT].clear();
        }
      } else {
        this.fc[filter.childReferenceParamName].patchValue("");
      }
    }
  }
  updateControlArrayValue(filter, selectedFilterValue) {
    const SELECTED_OPTION_LIST = this.fc[filter.paramName].value;
    const IS_FILTER_VALUE_SELECTED = SELECTED_OPTION_LIST.some((filterValue) => filterValue.id === selectedFilterValue.id);
    if (IS_FILTER_VALUE_SELECTED) {
      const INDEX = this.fc[filter.paramName].value.findIndex((filterValue) => filterValue.id === selectedFilterValue.id);
      this.fc[filter.paramName].removeAt(INDEX);
    } else {
      this.fc[filter.paramName].push(this.fb.group(__spreadValues({}, selectedFilterValue)));
    }
  }
  /**
   * Update location
   */
  updateLocation(position) {
    this.fc[FilterType.RANGE].patchValue("100");
    this.othersFc[FilterType.LATITUDE].patchValue(position.coords.latitude);
    this.othersFc[FilterType.LONGTITUDE].patchValue(position.coords.longitude);
    this.othersFc[FilterType.IS_SEARCH_NEAR_ME].patchValue(true);
  }
  /**
   * Update min max form control value
   */
  updateMinMaxValue(filter, min, max) {
    const MIN_HOLDER = Math.min(min, max);
    max = Math.max(min, max);
    min = MIN_HOLDER;
    this.fc[filter.paramName].patchValue(`${min},${max}`);
  }
  updateLocationField(value) {
    this.locations.clear();
    if (value?.length) {
      const UNIQUE_VALUES = [...new Set(value.join(",").split(","))].filter((val) => !!val);
      UNIQUE_VALUES.forEach((val) => {
        if (val !== CountyType.DEFAULT) {
          this.locations.push(new FormControl(val));
        }
      });
    }
  }
  updateRoute() {
    const CURRENT_ROUTE = this.router.routerState.root.firstChild;
    let firstLocation;
    let otherLocations;
    if (this.locations?.value.length) {
      const UNIQUES_LOCATIONS = [...new Set(this.locations?.value.join(",").split(","))];
      const [FIRST_LOCATION, ...OTHER_LOCATIONS] = UNIQUES_LOCATIONS;
      firstLocation = FIRST_LOCATION;
      otherLocations = OTHER_LOCATIONS.length ? OTHER_LOCATIONS?.join(",") : "";
    }
    this.updateLocationField([firstLocation, otherLocations]);
    if (!this._filtersForm)
      return;
    const FORM_VALUE = CommonUtil.removeEmptyQueryParams(__spreadValues(__spreadValues({}, this._filtersForm?.value), this.fc[FilterType.RANGE]?.value && {
      [FilterType.LATITUDE]: this.othersFc[FilterType.LATITUDE].value,
      [FilterType.LONGTITUDE]: this.othersFc[FilterType.LONGTITUDE].value,
      [FilterType.LOCATION_REFERENCE]: CURRENT_ROUTE.snapshot.queryParams[FilterType.LOCATION_REFERENCE]
    }));
    const QUERY_PARAMS = FiltersUtil.createQueryParams(FORM_VALUE);
    if (otherLocations) {
      QUERY_PARAMS[FilterType.LOCATION_REFERENCE] = otherLocations;
    }
    const URL_FRAGMENTS = [
      "/",
      CURRENT_ROUTE.snapshot.params?.[FilterType.SECTION] || CURRENT_ROUTE.snapshot.data?.[FilterType.SECTION],
      firstLocation ? firstLocation : CountyType.DEFAULT,
      CURRENT_ROUTE.snapshot.params?.[FilterType.AISLE] || CURRENT_ROUTE.snapshot?.data[FilterType.AISLE]
    ];
    if (this.fc[FilterType.STAND]?.value) {
      URL_FRAGMENTS.push(this.fc[FilterType.STAND].value);
    }
    if (this.fc[FilterType.SHELF]?.value) {
      URL_FRAGMENTS.push([...this.fc[FilterType.STAND].value, ...this.fc[FilterType.SHELF].value]);
    }
    this.breadcrumbState.setbreadcrumbsParams(URL_FRAGMENTS, QUERY_PARAMS);
    this.filterState.setSelectedFilterCount(this._filtersForm.value);
    this.router.navigate(URL_FRAGMENTS, {
      relativeTo: CURRENT_ROUTE,
      queryParams: QUERY_PARAMS
    });
  }
  getFormValue() {
    const FORM_VALUE = CommonUtil.removeEmptyQueryParams(__spreadValues(__spreadValues({}, this._filtersForm.value), this.fc[FilterType.RANGE]?.value && {
      [FilterType.LATITUDE]: this.othersFc[FilterType.LATITUDE].value,
      [FilterType.LONGTITUDE]: this.othersFc[FilterType.LONGTITUDE].value
    }));
    return FiltersUtil.createQueryParams(FORM_VALUE);
  }
  createGetAdListRequestParams() {
    return FiltersUtil.createAdListRequetParams(CommonUtil.removeEmptyQueryParams(__spreadValues({}, this._filtersForm.value)));
  }
  /**
   * If the selected Filter value didn't saved (via closing the menu) then restore the previous Filter value
   */
  restorePreviousFilterValue(filter, currentControlValue) {
    if (filter.isMinMax) {
      const SAVED_MINMAX = currentControlValue && currentControlValue?.split(",");
      if (SAVED_MINMAX) {
        this.updateMinMaxValue(filter, +SAVED_MINMAX[0], +SAVED_MINMAX[1]);
      } else {
        this.fc[filter.paramName].patchValue("");
      }
    } else if (filter.templateType === FilterTemplateType.MULTI_SELECTION) {
      const SAVED_OPTION_LIST = currentControlValue;
      this.resetFormArray(filter.paramName);
      SAVED_OPTION_LIST.forEach((savedOption) => this.fc[filter.paramName].push(this.fb.group({
        id: savedOption.id
      })));
    }
  }
  /**
   * Restore the form values from the original values
   *
   * @param formValue Current form value
   */
  restoreAllPreviousFilterValue(currentFormValue) {
    Object.keys(currentFormValue).forEach((paramName) => {
      if (Array.isArray(currentFormValue[paramName])) {
        const SAVED_OPTION_LIST = [...currentFormValue[paramName]];
        this.resetFormArray(paramName);
        SAVED_OPTION_LIST.forEach((savedOption) => this.fc[paramName].push(this.fb.group({
          id: savedOption.id
        })));
      } else {
        this.fc[paramName].patchValue(currentFormValue[paramName]);
      }
    });
  }
  selectAllFilterDropdownMultiOption(filter, filterValueList, isSelectedAll) {
    const SELECTED_VALUE_LIST = this.fc[filter.paramName].value;
    if (isSelectedAll) {
      this.resetFormArray(filter.paramName);
    } else {
      filterValueList.forEach((filterValue) => {
        const IS_SELECTED = SELECTED_VALUE_LIST.some((selected) => selected.id === filterValue.id);
        if (!IS_SELECTED) {
          this.fc[filter.paramName].push(this.fb.group(__spreadValues({}, filterValue)));
        }
      });
    }
  }
  clearFilterControl(filter) {
    switch (filter.templateType) {
      case FilterTemplateType.MULTI_SELECTION:
        this.resetFormArray(filter.paramName);
        break;
      case FilterTemplateType.SINGLE_SELECTION:
      case FilterTemplateType.MIN_MAX_DROPDOWN:
      case FilterTemplateType.MIN_MAX_INPUT:
        this.fc[filter.paramName].patchValue(null);
        break;
      default:
    }
  }
  /**
   * Reset the Filters
   *
   * Clear all values in the form and query params and navigate back on the original route with only section and aisle params.
   */
  clearAllFilterControl() {
    if (this._filtersForm) {
      this._filtersForm?.reset();
      const FORM_VALUE = __spreadValues({}, this._filtersForm.value);
      Object.keys(FORM_VALUE).forEach((paramName) => {
        const CONTROL = this._filtersForm.controls[paramName];
        if (Array.isArray(FORM_VALUE[paramName])) {
          this.resetFormArray(paramName);
        } else {
          this.fc[paramName].patchValue(FORM_VALUE[paramName]);
        }
        CONTROL.markAsPristine();
        CONTROL.markAsUntouched();
        CONTROL.setErrors(null);
      });
    }
    this.locations?.clear();
    const CURRENT_ROUTE_PARAMS = this.router.routerState.root.firstChild.snapshot.params;
    this.router.navigate([CURRENT_ROUTE_PARAMS["section"], CountyType.DEFAULT, CURRENT_ROUTE_PARAMS["aisle"]]);
  }
  /**
   * Create Filters form
   *
   * @param filterList
   */
  createFilterForm(filterList, params) {
    var _a, _b, _c;
    const PREVIOUS_FORM_VALUE = this._filtersForm?.value;
    if (!this._filtersForm) {
      this._filtersForm = void 0;
    }
    const _d = CommonUtil.removeEmptyQueryParams(__spreadValues(__spreadValues({}, this.route.snapshot.queryParams), this.route.snapshot.params)), { [_a = FilterType.RANGE]: _, [_b = FilterType.LATITUDE]: __, [_c = FilterType.LONGTITUDE]: ___ } = _d, QUERY_PARAMS = __objRest(_d, [__restKey(_a), __restKey(_b), __restKey(_c)]);
    this._filtersForm = this.fb.group({
      [FilterType.SORT]: [QUERY_PARAMS?.[FilterType.SORT] ? QUERY_PARAMS?.[FilterType.SORT] : ""]
      // [FilterType.RANGE]: [], // Only for Iraq version (V1)
    });
    this._othersForm = this.fb.group({
      [FilterType.LATITUDE]: [],
      [FilterType.LONGTITUDE]: [],
      [FilterType.IS_SEARCH_NEAR_ME]: []
    });
    filterList.forEach((filter) => __async(this, null, function* () {
      const FILTER_VALUE = PREVIOUS_FORM_VALUE?.[filter.paramName];
      if (filter.paramName === FilterType.STAND) {
        this._filtersForm.addControl(filter.paramName, this.fb.control(PREVIOUS_FORM_VALUE ? FILTER_VALUE : params[RouteDataType.STAND]));
      } else if (filter.paramName === FilterType.SHELF) {
        this._filtersForm.addControl(filter.paramName, this.fb.control(PREVIOUS_FORM_VALUE ? FILTER_VALUE : params[RouteDataType.SHELF]));
      } else if (filter.isMinMax) {
        this._filtersForm.addControl(filter.paramName, this.fb.control(FILTER_VALUE || QUERY_PARAMS?.[filter.paramName] || ""));
      } else if (filter.templateType === FilterTemplateType.MULTI_SELECTION) {
        const CONTROL_VALUE_LIST = FiltersUtil.queryParamsToMultiSelectionControlValue(QUERY_PARAMS?.[filter.paramName]);
        this._filtersForm.addControl(filter.paramName, this.fb.array(PREVIOUS_FORM_VALUE ? FILTER_VALUE || [] : CONTROL_VALUE_LIST));
      } else {
        this._filtersForm.addControl(filter.paramName, this.fb.control(PREVIOUS_FORM_VALUE ? FILTER_VALUE : QUERY_PARAMS?.[filter.paramName]));
      }
    }));
  }
  /**
   * Reset the form array value
   */
  resetFormArray(paramName) {
    if (this.fc[paramName]?.value) {
      this.fc[paramName].clear();
    }
  }
  /**
   * If the filter has a child or dependent filter, then reset the value of the child filter.
   */
  resetFilterChildValue(filter) {
    switch (filter.paramName) {
      case FilterType.MANUFACTURER:
        this.resetFormArray(filter.childReferenceParamName);
        break;
      case FilterType.STAND:
        this.fc[filter.childReferenceParamName].patchValue("");
        break;
      default:
    }
  }
  resetService() {
    this._filtersForm = void 0;
    this._othersForm = void 0;
  }
  /**
   * Getters and setters
   */
  getFiltersForm() {
    return this._filtersForm;
  }
  getOthersForm() {
    return this._othersForm;
  }
  static {
    this.\u0275fac = function FiltersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersService)(\u0275\u0275inject(Router), \u0275\u0275inject(ActivatedRoute), \u0275\u0275inject(FormBuilder), \u0275\u0275inject(BreadcrumbsState), \u0275\u0275inject(FiltersState), \u0275\u0275inject(RouteService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FiltersService, factory: _FiltersService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: FormBuilder }, { type: BreadcrumbsState }, { type: FiltersState }, { type: RouteService }], null);
})();

export {
  FiltersState,
  FiltersUtil,
  FiltersService
};
//# sourceMappingURL=chunk-C3BHYCVX.js.map
