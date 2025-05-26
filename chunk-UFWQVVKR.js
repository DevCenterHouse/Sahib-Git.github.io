import {
  PropertyWorthsApi
} from "./chunk-PVESVPHH.js";
import {
  FiltersApi,
  SectionsState
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/property-worth/property-worth.facade.ts
var PropertyWorthFacade = class _PropertyWorthFacade {
  constructor(filterApi, propertyWorth, sectionState) {
    this.filterApi = filterApi;
    this.propertyWorth = propertyWorth;
    this.sectionState = sectionState;
  }
  getSectionList() {
    return this.sectionState.getSortedAisleList$("properties-for-sale");
  }
  getFilterUnits() {
    return this.filterApi.getFilterValue("property-units", { aisle: "rent-commercial" });
  }
  postPropertyWorth(data) {
    return this.propertyWorth.postPropertyWorth(data);
  }
  postCommercialEstimation(data) {
    return this.propertyWorth.postCommercialEstimation(data);
  }
  getPurposeOptions() {
    return this.propertyWorth.getPurposeOptions();
  }
  postInPersonValuation(id) {
    return this.propertyWorth.postInPersonValuation(id);
  }
  static {
    this.\u0275fac = function PropertyWorthFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyWorthFacade)(\u0275\u0275inject(FiltersApi), \u0275\u0275inject(PropertyWorthsApi), \u0275\u0275inject(SectionsState));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertyWorthFacade, factory: _PropertyWorthFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyWorthFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: FiltersApi }, { type: PropertyWorthsApi }, { type: SectionsState }], null);
})();

export {
  PropertyWorthFacade
};
//# sourceMappingURL=chunk-UFWQVVKR.js.map
