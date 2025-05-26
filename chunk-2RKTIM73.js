import {
  FiltersService,
  FiltersState,
  FiltersUtil
} from "./chunk-C3BHYCVX.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  ADS_FILTERS,
  ADS_FILTER_ORDERS,
  ADS_OTHER_FILTERS,
  AisleType,
  CommonUtil,
  ConfigState,
  CountyType,
  FilterType,
  FiltersApi,
  SectionType,
  SectionsState
} from "./chunk-DMGY2MF4.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  filter,
  finalize,
  firstValueFrom,
  forkJoin,
  map,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/constants/pricing.constants.ts
var PRICE_VALUES = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "0"
  },
  {
    id: "12",
    name: "25,000"
  },
  {
    id: "13",
    name: "50,000"
  },
  {
    id: "24",
    name: "75,000"
  },
  {
    id: "21",
    name: "100,000"
  },
  {
    id: "25",
    name: "125,000"
  },
  {
    id: "26",
    name: "150,000"
  },
  {
    id: "27",
    name: "175,000"
  },
  {
    id: "28",
    name: "200,000"
  },
  {
    id: "29",
    name: "225,000"
  },
  {
    id: "22",
    name: "250,000"
  },
  {
    id: "30",
    name: "275,000"
  },
  {
    id: "31",
    name: "300,000"
  },
  {
    id: "32",
    name: "325,000"
  },
  {
    id: "33",
    name: "350,000"
  },
  {
    id: "34",
    name: "375,000"
  },
  {
    id: "35",
    name: "400,000"
  },
  {
    id: "36",
    name: "425,000"
  },
  {
    id: "37",
    name: "450,000"
  },
  {
    id: "38",
    name: "475,000"
  },
  {
    id: "23",
    name: "500,000"
  },
  {
    id: "39",
    name: "525,000"
  },
  {
    id: "40",
    name: "550,000"
  },
  {
    id: "41",
    name: "575,000"
  },
  {
    id: "42",
    name: "600,000"
  },
  {
    id: "43",
    name: "625,000"
  },
  {
    id: "44",
    name: "650,000"
  },
  {
    id: "45",
    name: "675,000"
  },
  {
    id: "46",
    name: "700,000"
  },
  {
    id: "47",
    name: "725,000"
  },
  {
    id: "48",
    name: "750,000"
  },
  {
    id: "49",
    name: "775,000"
  },
  {
    id: "50",
    name: "800,000"
  },
  {
    id: "51",
    name: "825,000"
  },
  {
    id: "52",
    name: "850,000"
  },
  {
    id: "53",
    name: "875,000"
  },
  {
    id: "54",
    name: "900,000"
  },
  {
    id: "55",
    name: "925,000"
  },
  {
    id: "56",
    name: "950,000"
  },
  {
    id: "57",
    name: "975,000"
  },
  {
    id: "58",
    name: "1,000,000"
  },
  {
    id: "59",
    name: "1,100,000"
  },
  {
    id: "60",
    name: "1,200,000"
  },
  {
    id: "61",
    name: "1,300,000"
  },
  {
    id: "62",
    name: "1,400,000"
  },
  {
    id: "63",
    name: "1,500,000"
  },
  {
    id: "64",
    name: "1,600,000"
  },
  {
    id: "65",
    name: "1,700,000"
  },
  {
    id: "66",
    name: "1,800,000"
  },
  {
    id: "67",
    name: "1,900,000"
  },
  {
    id: "68",
    name: "2,000,000"
  },
  {
    id: "69",
    name: "2,100,000"
  },
  {
    id: "70",
    name: "2,200,000"
  },
  {
    id: "71",
    name: "2,300,000"
  },
  {
    id: "72",
    name: "2,400,000"
  },
  {
    id: "73",
    name: "2,500,000"
  },
  {
    id: "74",
    name: "2,600,000"
  },
  {
    id: "75",
    name: "2,700,000"
  },
  {
    id: "76",
    name: "2,800,000"
  },
  {
    id: "77",
    name: "2,900,000"
  },
  {
    id: "78",
    name: "3,000,000"
  },
  {
    id: "79",
    name: "3,100,000"
  },
  {
    id: "80",
    name: "3,200,000"
  },
  {
    id: "81",
    name: "3,300,000"
  },
  {
    id: "82",
    name: "3,400,000"
  },
  {
    id: "83",
    name: "3,500,000"
  },
  {
    id: "84",
    name: "3,600,000"
  },
  {
    id: "85",
    name: "3,700,000"
  },
  {
    id: "86",
    name: "3,800,000"
  },
  {
    id: "87",
    name: "3,900,000"
  },
  {
    id: "88",
    name: "4,000,000"
  },
  {
    id: "89",
    name: "4,100,000"
  },
  {
    id: "90",
    name: "4,200,000"
  },
  {
    id: "91",
    name: "4,300,000"
  },
  {
    id: "92",
    name: "4,400,000"
  },
  {
    id: "93",
    name: "4,500,000"
  },
  {
    id: "94",
    name: "4,600,000"
  },
  {
    id: "95",
    name: "4,700,000"
  },
  {
    id: "96",
    name: "4,800,000"
  },
  {
    id: "97",
    name: "4,900,000"
  },
  {
    id: "98",
    name: "5,000,000"
  },
  {
    id: "99",
    name: "5,100,000"
  },
  {
    id: "100",
    name: "5,200,000"
  },
  {
    id: "101",
    name: "5,300,000"
  },
  {
    id: "102",
    name: "5,400,000"
  },
  {
    id: "103",
    name: "5,500,000"
  }
];
var PRICING_FILTER_VALUES = Object.assign(PRICE_VALUES, {
  populars: [],
  all: PRICE_VALUES
});

// apps/findqo-ireland/src/app/core/constants/bedroom.constants.ts
var BEDROOM_VALUES = [
  {
    id: "8",
    name: "0"
  },
  {
    id: "1",
    name: "1"
  },
  {
    id: "2",
    name: "2"
  },
  {
    id: "3",
    name: "3"
  },
  {
    id: "4",
    name: "4"
  },
  {
    id: "5",
    name: "5"
  },
  {
    id: "6",
    name: "6"
  },
  {
    id: "7",
    name: "7+"
  }
];
var BEDROOM_FILTER_VALUES = Object.assign(BEDROOM_VALUES, {
  populars: [],
  all: BEDROOM_VALUES
});

// apps/findqo-ireland/src/app/core/constants/bathroom.constants.ts
var BATHROOM_VALUES = [
  {
    id: "1",
    name: "1"
  },
  {
    id: "2",
    name: "2"
  },
  {
    id: "3",
    name: "3"
  },
  {
    id: "4",
    name: "4"
  },
  {
    id: "5",
    name: "5"
  },
  {
    id: "6",
    name: "6+"
  }
];
var BATHROOM_FILTER_VALUES = Object.assign(BATHROOM_VALUES, {
  populars: [],
  all: BATHROOM_VALUES
});

// apps/findqo-ireland/src/app/core/constants/property-size.constants.ts
var PROPERTY_SIZE_VALUES = [
  {
    id: "1",
    name: "All"
  },
  {
    id: "2",
    name: "10"
  },
  {
    id: "3",
    name: "20"
  },
  {
    id: "4",
    name: "30"
  },
  {
    id: "5",
    name: "40"
  },
  {
    id: "6",
    name: "50"
  },
  {
    id: "7",
    name: "60"
  },
  {
    id: "8",
    name: "70"
  },
  {
    id: "9",
    name: "80"
  },
  {
    id: "10",
    name: "90"
  },
  {
    id: "11",
    name: "100"
  },
  {
    id: "12",
    name: "125"
  },
  {
    id: "13",
    name: "150"
  },
  {
    id: "14",
    name: "175"
  },
  {
    id: "15",
    name: "200"
  },
  {
    id: "16",
    name: "225"
  },
  {
    id: "17",
    name: "250"
  },
  {
    id: "18",
    name: "300"
  },
  {
    id: "19",
    name: "400"
  },
  {
    id: "20",
    name: "500"
  },
  {
    id: "21",
    name: "750"
  },
  {
    id: "22",
    name: "1,000"
  },
  {
    id: "23",
    name: "2,500"
  },
  {
    id: "24",
    name: "5,000"
  },
  {
    id: "25",
    name: "10,000"
  }
];
var PROPERTY_SIZE_FILTER_VALUES = Object.assign(PROPERTY_SIZE_VALUES, {
  populars: [],
  all: PROPERTY_SIZE_VALUES
});

// apps/findqo-ireland/src/app/core/constants/tenant-preferences.constants.ts
var TENANT_PREFERENCES_VALUES = [
  {
    id: "1",
    name: "Males only"
  },
  {
    id: "2",
    name: "Females only"
  },
  {
    id: "3",
    name: "Either"
  }
];
var TENANT_PREFERENCES_FILTER_VALUES = Object.assign(TENANT_PREFERENCES_VALUES, {
  populars: [],
  all: TENANT_PREFERENCES_VALUES
});

// apps/findqo-ireland/src/app/core/constants/furnishing.constants.ts
var FURNISHING_VALUES = [
  {
    id: "1",
    name: "Furnished"
  },
  {
    id: "2",
    name: "Unfurnished"
  },
  {
    id: "3",
    name: "Semi-furnished"
  }
];
var FURNISHING_FILTER_VALUES = Object.assign(FURNISHING_VALUES, {
  populars: [],
  all: FURNISHING_VALUES
});

// apps/findqo-ireland/src/app/core/constants/room-types.constants.ts
var RESIDENTIAL_ROOM_TYPES = [
  {
    id: "1",
    name: "Single room"
  },
  {
    id: "2",
    name: "Double room"
  },
  {
    id: "3",
    name: "En Suite Double room"
  }
];
var SHARE_RESIDENTIAL_ROOM_TYPES = [
  ...RESIDENTIAL_ROOM_TYPES,
  {
    id: "4",
    name: "Shared room"
  }
];
var getRoomTypesFilterValues = (aisle) => {
  const roomTypes = aisle === AisleType.SHARE_RESIDENTIAL ? SHARE_RESIDENTIAL_ROOM_TYPES : RESIDENTIAL_ROOM_TYPES;
  return Object.assign(roomTypes, {
    populars: [],
    all: roomTypes
  });
};

// apps/findqo-ireland/src/app/core/constants/tenants.constants.ts
var TENANTS_VALUES = [
  {
    id: "1",
    name: "1"
  },
  {
    id: "2",
    name: "2"
  },
  {
    id: "3",
    name: "3"
  },
  {
    id: "4",
    name: "4"
  },
  {
    id: "5",
    name: "5"
  },
  {
    id: "6",
    name: "6"
  },
  {
    id: "7",
    name: "7"
  },
  {
    id: "8",
    name: "8"
  },
  {
    id: "9",
    name: "9"
  }
];
var TENANTS_FILTER_VALUES = Object.assign(TENANTS_VALUES, {
  populars: [],
  all: TENANTS_VALUES
});

// apps/findqo-ireland/src/app/feature/general/filters/filters.facade.ts
var FiltersFacade = class _FiltersFacade {
  // TODO: Add more details or create README.md file
  constructor(filtersApi, filterService, filtersState, sectionState, adsState, adsApi, configState) {
    this.filtersApi = filtersApi;
    this.filterService = filterService;
    this.filtersState = filtersState;
    this.sectionState = sectionState;
    this.adsState = adsState;
    this.adsApi = adsApi;
    this.configState = configState;
    this._params$ = new BehaviorSubject(void 0);
    this._toggleProgressBar$ = new BehaviorSubject(false);
    this._isRangeSearchEnabled$ = new BehaviorSubject(false);
  }
  getFiltersViewModel$(routeData$) {
    return combineLatest({
      filterList: this.filtersState.filters$,
      sectionList: this.sectionState.sectionList$,
      toggleProgressBar: this._toggleProgressBar$.asObservable(),
      sortList: this.getSortList$(),
      routeData: routeData$
    }).pipe(map(({ filterList, sectionList, toggleProgressBar, sortList, routeData }) => {
      const aisles = sectionList.find((section) => section.reference === routeData[FilterType.SECTION])?.aisles || [];
      return {
        filterList,
        sectionList,
        toggleProgressBar,
        sortList,
        routeData,
        aisles
      };
    }));
  }
  loadFilterList(params) {
    this.filterService.updateLocationField([params[FilterType.LOCATION_REFERENCE]]);
    this.filtersState.setIsLoading(true);
    this.setToggleProgressBar(true);
    let PREVIOUS_FILTER_LIST = void 0;
    if (this.filterService.getFiltersForm()) {
      PREVIOUS_FILTER_LIST = Object.keys(this.filterService.getFiltersForm()?.value);
    }
    let filterList = [];
    let form;
    this.filtersApi.getFilters(params).pipe(map((response) => {
      const FILTER_LIST_WITH_CONSTANTS = response.map((filterFromResponse) => {
        return __spreadValues({}, this.getFilterConstant(filterFromResponse));
      }).filter((filter2) => ADS_FILTERS.some((savedFilter) => savedFilter.paramName === filter2.paramName));
      return [...FILTER_LIST_WITH_CONSTANTS, ...this.getOtherFilters(params?.[FilterType.AISLE])];
    }), switchMap((filterListResponse) => {
      filterList = filterListResponse;
      filterList = filterList.filter((filter2) => filter2?.templateType >= 0);
      filterList = filterList.filter((filter2) => filter2?.paramName !== FilterType.SELLER_TYPE);
      this.filterService.createFilterForm(filterList, params);
      form = this.filterService.getFiltersForm();
      return forkJoin(this.createHttpFilterValues(filterList, form));
    }), finalize(() => {
      this.filtersState.setIsLoading(false);
      this.setToggleProgressBar(false);
      if (PREVIOUS_FILTER_LIST && FiltersUtil.isFilterListChanged(PREVIOUS_FILTER_LIST, filterList)) {
        this.filterService.updateRoute();
      }
    })).subscribe((response) => {
      this.checkCountyAreaReference(params, response);
      this.filtersState.setFilters(filterList);
      this.setFiltersOrder(params?.[FilterType.AISLE], filterList);
      filterList.forEach((filter2, index) => {
        const FILTER_VALUE = response.find((filterResponse) => filterResponse.paramName === filter2.paramName);
        if (FILTER_VALUE) {
          this.filtersState.updateFilter(__spreadProps(__spreadValues({}, filter2), {
            values: FILTER_VALUE.values
          }));
        }
      });
    });
  }
  checkIsLocationCounty(countyList, location) {
    return countyList.some((c) => c.reference === location);
  }
  checkCountyAreaReference(params, response) {
    const COUNTY_LIST = response.find((i) => i.paramName === FilterType.COUNTY)?.values?.all;
    const URL_REFERENCE = params[FilterType?.LOCATION_REFERENCE];
    if (URL_REFERENCE === "ireland") {
      this.filterService.locations.clear();
      return;
    }
  }
  loadFilterListFromSelection(params) {
    this.loadFilterList(__spreadValues(__spreadValues({}, this._params$.getValue()), params));
  }
  /**
   * Create or build a http Observables of `GET: Filter values` for Filters dropdown options
   */
  createHttpFilterValues(filterList, form) {
    return filterList.reduce((obs, filter2) => {
      let parentParamValue = "";
      if (filter2.paramName === FilterType.STAND) {
        parentParamValue = this._params$.getValue()[filter2.requestParamName];
      } else if (form) {
        parentParamValue = form.get(filter2.parentReferenceParamName)?.value;
      }
      let params = filter2?.requestParamName ? { [filter2.requestParamName]: parentParamValue } : null;
      if (filter2?.requestParamName && !parentParamValue) {
        obs.push(of([]).pipe(map(() => {
          return {
            paramName: filter2.paramName,
            values: []
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.STAND) {
        const STANDS = this.sectionState.getStands(this._params$.getValue()[FilterType.SECTION], this._params$.getValue()[FilterType.AISLE]);
        obs.push(of(STANDS).pipe(map(() => {
          return {
            paramName: filter2.paramName,
            values: STANDS
          };
        })));
        return obs;
      }
      params = __spreadProps(__spreadValues({}, params), {
        [FilterType.SECTION]: this.getParams()[FilterType.SECTION],
        [FilterType.AISLE]: this.getParams()[FilterType.AISLE]
      });
      if (filter2.paramName === FilterType.COUNTY) {
        return obs;
      }
      if (filter2.paramName === FilterType.PRICE) {
        obs.push(of(PRICING_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.BEDROOM_COUNT) {
        obs.push(of(BEDROOM_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value.map((dropdownValue) => {
              return __spreadProps(__spreadValues({}, dropdownValue), {
                name: dropdownValue.name === "0" ? "Studio" : dropdownValue.name,
                id: dropdownValue.id === "8" ? "0" : dropdownValue.id
              });
            })
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.BATHROOM_COUNT) {
        obs.push(of(BATHROOM_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.PROPERTY_SIZES) {
        obs.push(of(PROPERTY_SIZE_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.TENANT_PREFERENCE) {
        obs.push(of(TENANT_PREFERENCES_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.FURNISHING) {
        obs.push(of(FURNISHING_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.ROOM_TYPE) {
        const aisle = this.getParams()[FilterType.AISLE];
        obs.push(of(getRoomTypesFilterValues(aisle)).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2.paramName === FilterType.OTHER_TENANT_SHARE_COUNT) {
        obs.push(of(TENANTS_FILTER_VALUES).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        })));
        return obs;
      }
      if (filter2?.valuesEndpoint) {
        obs.push(this.filtersApi.getFilterValue(filter2.valuesEndpoint, params).pipe(map((value) => {
          return {
            paramName: filter2.paramName,
            values: value
          };
        }), catchError(() => of([]))));
      }
      return obs;
    }, []);
  }
  getFilter(paramName) {
    const LAST_THREE_CHARS = paramName.substring(paramName.length - 3);
    if (LAST_THREE_CHARS === "Min" || LAST_THREE_CHARS === "Max") {
      paramName = paramName.substring(0, paramName.length - 3);
    }
    return this.getFilterList().find((filter2) => filter2.paramName === paramName);
  }
  getSection(section) {
    return this.sectionState.getSection(section);
  }
  updateFilter(filter2) {
    this.filtersState.updateFilter(filter2);
  }
  removeFilterValues(paramName) {
    this.filtersState.removeFilterValues(paramName);
  }
  /**
   * This is for Form controls
   *
   * @param http
   * @param form
   * @param paramName
   * @returns
   */
  httpGetControlValues(http, form, paramName) {
    return http.pipe(map((response) => response.data || []), tap((controlValues) => {
      if (controlValues.length) {
      } else {
      }
    }));
  }
  /**
   * Load Filter dropdown value list
   *
   * @param filter
   * @returns
   */
  loadFilterDropdownValueList(filter2, form) {
    return new Promise((resolve, reject) => {
      try {
        let parentParamValue = "";
        let response;
        if (filter2.paramName === FilterType.COUNTY) {
          resolve(response);
        }
        if (filter2.paramName === FilterType.STAND) {
          parentParamValue = this._params$.getValue()[filter2.requestParamName];
        } else {
          parentParamValue = form.get(filter2.parentReferenceParamName)?.value;
        }
        if (filter2.paramName === FilterType.PRICE) {
          response = PRICING_FILTER_VALUES;
        } else {
          firstValueFrom(this.filtersApi.getFilterValue(filter2.valuesEndpoint, __spreadValues({}, !!filter2?.requestParamName && { [filter2.requestParamName]: parentParamValue }))).then((response2) => {
            this.filtersState.updateFilter(__spreadProps(__spreadValues({}, filter2), {
              values: response2
            }));
            resolve(response2);
          }).catch((error) => {
            reject([]);
          });
          return;
        }
        this.filtersState.updateFilter(__spreadProps(__spreadValues({}, filter2), {
          values: response
        }));
        resolve(response);
      } catch (error) {
        reject([]);
      }
    });
  }
  /**
   * Load all Filters dropdown value List
   *
   * @param filterList
   */
  loadAllFilterDropdownValueList(filterList, form) {
    this.filtersState.setIsFilterValueLoading(true);
    forkJoin(this.createHttpFilterValues(filterList, form)).pipe(finalize(() => this.filtersState.setIsFilterValueLoading(false))).subscribe((response) => {
      filterList.forEach((filter2, index) => {
        this.filtersState.updateFilter(__spreadProps(__spreadValues({}, filter2), {
          values: response[index]
        }));
      });
    });
  }
  loadAdsCount(formValue) {
    this.setToggleProgressBar(true);
    const PARAMS = this._params$.getValue();
    const UNIQUES_LOCATIONS = [...new Set(this.filterService.locations.value.join(",").split(","))];
    this.adsApi.getAdList(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, CommonUtil.removeEmptyQueryParams(formValue)), {
      section: PARAMS[FilterType.SECTION],
      aisle: PARAMS[FilterType.AISLE]
    }), UNIQUES_LOCATIONS[0] === CountyType.DEFAULT ? {} : { location: UNIQUES_LOCATIONS.join(",") }), {
      count: 1
    })).pipe(map((response) => response.meta.total), catchError(() => of(0)), finalize(() => this.setToggleProgressBar(false))).subscribe((count) => this.adsState.setAdsCount(count));
  }
  /**
   * Set the Filter Shelve list based on the selected Stand.
   *
   * @param filter Stand Filter
   * @param selectedStand Selected Filter Stand
   */
  setFilterShelveList(filter2, selectedStand) {
    const CHILD_FILTER = this.getFilter(filter2?.childReferenceParamName);
    const STAND = filter2.values.find((stand) => stand.reference === selectedStand);
    this.updateFilter(__spreadProps(__spreadValues({}, CHILD_FILTER), {
      values: STAND?.shelves || []
    }));
  }
  resetFacade() {
    this.filtersState.setFilters([]);
    this._params$.next(void 0);
    this._toggleProgressBar$.next(false);
    this._isRangeSearchEnabled$.next(false);
  }
  /**
   * Getter and Setters
   */
  getFilterList() {
    return this.filtersState.getFilters();
  }
  isFiltersValueLoading$() {
    return this.filtersState.isFiltersValueLoading$;
  }
  isFiltersLoading$() {
    return this.filtersState.isLoading$;
  }
  setParams(params) {
    return this._params$.next(params);
  }
  getParams() {
    return this._params$.getValue();
  }
  getToggleProggresBar$() {
    return this._toggleProgressBar$.asObservable();
  }
  setToggleProgressBar(toggleProgressBar) {
    this._toggleProgressBar$.next(toggleProgressBar);
  }
  getIsRangeSearchEnabled$() {
    return this._isRangeSearchEnabled$.asObservable();
  }
  getIsRangeSearchEnabled() {
    return this._isRangeSearchEnabled$.getValue();
  }
  setIsRangeSearchEnabled(isRangeSearchEnabled) {
    this._isRangeSearchEnabled$.next(isRangeSearchEnabled);
  }
  getSelectedFilterCount$() {
    return this.filtersState.selectedFilterCount$;
  }
  getAdsCount$() {
    return this.adsState.adsCount$;
  }
  getSortList$() {
    return this.sectionState.sectionList$.pipe(filter((sectionList) => !!sectionList?.length), map(() => {
      const PARAMS = this._params$.getValue();
      return this.sectionState.getAisle(PARAMS?.[FilterType.SECTION] ?? SectionType.PROPERTIES_FOR_RENT, PARAMS?.[FilterType.AISLE] ?? AisleType.RENT_RESIDENTIAL)?.sorts || [];
    }));
  }
  setFilterList(filterList) {
    this.filtersState.setFilters(filterList);
  }
  /**
   * Private methods
   */
  getFilterConstant(currentFilter) {
    const UPDATED_FILTER = ADS_FILTERS.find((filter2) => filter2.paramName === currentFilter.paramName);
    return __spreadProps(__spreadValues(__spreadValues({}, UPDATED_FILTER), currentFilter), {
      isMinMax: !!+currentFilter.isMinMax
    });
  }
  /**
   * Get the other filters that need to be added to the UI if needed based on the selected aisle
   *
   * @param aisle
   * @returns
   */
  getOtherFilters(aisle) {
    const OTHER_FILTERS = ADS_OTHER_FILTERS.find((otherFilter) => otherFilter.aisle === aisle)?.filters || [];
    return OTHER_FILTERS;
  }
  /**
   * Set the order of filters
   */
  setFiltersOrder(currentAisle, filters) {
    if (currentAisle) {
      const ORDERS = ADS_FILTER_ORDERS.find((order) => order.aisle === currentAisle).orders;
      if (ORDERS) {
        const TO_BE_APPEND_FILTERS = filters.filter((filter2) => !ORDERS.includes(filter2.paramName));
        const TO_BE_SORT_FILTERS = filters.filter((filter2) => ORDERS.includes(filter2.paramName));
        const SORTED_FILTERS = TO_BE_SORT_FILTERS.sort((filterA, filterB) => ORDERS.indexOf(filterA.paramName) - ORDERS.indexOf(filterB.paramName));
        this.filtersState.setFilters([...SORTED_FILTERS, ...TO_BE_APPEND_FILTERS]);
      }
    }
  }
  // private async getFilterValues(filters: Filter[]): Promise<Filter[]> {
  // 	const HTTP_GET_FILTER_VALUES = this.httpGetFilterValues(filters);
  // 	const FILTER_VALUES = await firstValueFrom(forkJoin(HTTP_GET_FILTER_VALUES));
  // 	return filters.map((filter: Filter) => {
  // 		const FILTER_VALUE_INDEX = FILTER_VALUES.findIndex((value: any) => value.paramName === filter.paramName);
  // 		return {
  // 			...filter,
  // 			...(FILTER_VALUE_INDEX > -1 && { values: FILTER_VALUES[FILTER_VALUE_INDEX].values }),
  // 		};
  // 	});
  // }
  /**
   * This is for Filters
   *
   * @param filters
   * @returns
   */
  // private httpGetFilterValues(filters: Filter[]): Observable<any>[] {
  // 	return (
  // 		filters
  // 			.filter((filter: Filter) => !filter.isMinMax && filter?.valuesEndpoint && !filter?.hasReference)
  // 			.map((filter: Filter) => {
  // 				return this.filtersApi.getFilterValues(filter.valuesEndpoint).pipe(
  // 					map((response: any) => {
  // 						return {
  // 							values: [{ id: null, name: filter.placeholder }, ...response.data],
  // 							paramName: filter.paramName,
  // 						};
  // 					})
  // 				);
  // 			}) || []
  // 	);
  // }
  // getDynamicFormControl(controls: DynamicFormControl[], paramName: string): DynamicFormControl {
  // 	const LAST_THREE_CHARS = paramName.substring(paramName.length - 3);
  // 	if (LAST_THREE_CHARS === 'Min' || LAST_THREE_CHARS === 'Max') {
  // 		paramName = paramName.substring(0, paramName.length - 3);
  // 	}
  // 	return controls.find((control: DynamicFormControl) => control.paramName === paramName);
  // }
  // setFiltersChips(queryParams: Params, form: FormGroup): void {
  // 	const FILTERS_CHIPS = Object.entries(queryParams).reduce((filtersChips, [key, value]) => {
  // 		const CONTROL = this.getDynamicFormControl(this.filtersState.getFilters(), key);
  // 		if (value && !CONTROL?.isMinMax && CONTROL?.values) {
  // 			// Get the value name from the Control selected value.
  // 			const SELECTED_VALUE = CONTROL.values.find((controlValue) => controlValue.id === value);
  // 			filtersChips.push({ paramName: CONTROL.paramName, referenceId: CONTROL?.childReferenceParamName, label: SELECTED_VALUE?.name, isMinMax: false });
  // 		} else if (value && CONTROL?.isMinMax) {
  // 			const MAX_VALUE = form.get(`${CONTROL.paramName}Max`).value || 'Max';
  // 			const MIN_VALUE = form.get(`${CONTROL.paramName}Min`).value || '0';
  // 			const LABEL = `${MIN_VALUE} - ${MAX_VALUE} ${CONTROL.label}`;
  // 			const FILTERS_CHIP_INDEX = filtersChips.findIndex((filtersChip: FiltersChip) => filtersChip.paramName === CONTROL.paramName);
  // 			// If the Filters chip is exists, then just update the value, else push a new value.
  // 			if (FILTERS_CHIP_INDEX >= 0) {
  // 				filtersChips[FILTERS_CHIP_INDEX] = { paramName: CONTROL.paramName, label: LABEL, isMinMax: true };
  // 			} else {
  // 				filtersChips.push({ paramName: CONTROL.paramName, label: LABEL, isMinMax: true });
  // 			}
  // 		}
  // 		return filtersChips;
  // 	}, []);
  // 	this.filtersState.setFiltersChips([...FILTERS_CHIPS]);
  // }
  onControlChange(filter2, form) {
  }
  static {
    this.\u0275fac = function FiltersFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FiltersFacade)(\u0275\u0275inject(FiltersApi), \u0275\u0275inject(FiltersService), \u0275\u0275inject(FiltersState), \u0275\u0275inject(SectionsState), \u0275\u0275inject(AdsState), \u0275\u0275inject(AdsApi), \u0275\u0275inject(ConfigState));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FiltersFacade, factory: _FiltersFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FiltersFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: FiltersApi }, { type: FiltersService }, { type: FiltersState }, { type: SectionsState }, { type: AdsState }, { type: AdsApi }, { type: ConfigState }], null);
})();

export {
  FiltersFacade
};
//# sourceMappingURL=chunk-2RKTIM73.js.map
