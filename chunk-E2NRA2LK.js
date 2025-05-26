import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  BehaviorSubject,
  Injectable,
  finalize,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-enquiries/enquiries.state.ts
var EnquiriesState = class _EnquiriesState {
  constructor() {
    this._enquiryList$ = new BehaviorSubject(void 0);
    this._enquiryListMetaData$ = new BehaviorSubject(void 0);
    this._isLoadingEnquiryList$ = new BehaviorSubject(false);
  }
  get isLoadingEnquiryList$() {
    return this._isLoadingEnquiryList$.asObservable();
  }
  setIsLoadingEnquiryList(isLoading) {
    this._isLoadingEnquiryList$.next(isLoading);
  }
  get enquiryListMetaData$() {
    return this._enquiryListMetaData$.asObservable();
  }
  getEnquiryListMetaData() {
    return this._enquiryListMetaData$.getValue();
  }
  setEnquiryListMetaData(metaData) {
    this._enquiryListMetaData$.next(metaData);
  }
  get enquiryList$() {
    return this._enquiryList$.asObservable();
  }
  setEnquiryList(enquiries) {
    this._enquiryList$.next(enquiries);
  }
  static {
    this.\u0275fac = function EnquiriesState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiriesState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnquiriesState, factory: _EnquiriesState.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiriesState, [{
    type: Injectable
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-enquiries/my-enquiries.facade.ts
var MyEnquiriesFacade = class _MyEnquiriesFacade {
  constructor(enquiryState, adsApi) {
    this.enquiryState = enquiryState;
    this.adsApi = adsApi;
  }
  getEnquiryListMetaData$() {
    return this.enquiryState.enquiryListMetaData$;
  }
  getEnquiryListMetaData() {
    return this.enquiryState.getEnquiryListMetaData();
  }
  setEnquiryListMetaData(metaData) {
    this.enquiryState.setEnquiryListMetaData(metaData);
  }
  getEnquiryList$() {
    return this.enquiryState.enquiryList$;
  }
  setEnquiryList(enquiries) {
    this.enquiryState.setEnquiryList(enquiries);
  }
  loadEnquiryList(params) {
    this.setIsLoading(true);
    this.adsApi.getInquiryList(params).pipe(finalize(() => this.setIsLoading(false))).subscribe((enquiryListData) => {
      this.setEnquiryList(enquiryListData?.data);
      this.setEnquiryListMetaData(enquiryListData?.meta);
    });
  }
  getIsLoading$() {
    return this.enquiryState.isLoadingEnquiryList$;
  }
  setIsLoading(isLoading) {
    this.enquiryState.setIsLoadingEnquiryList(isLoading);
  }
  static {
    this.\u0275fac = function MyEnquiriesFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyEnquiriesFacade)(\u0275\u0275inject(EnquiriesState), \u0275\u0275inject(AdsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MyEnquiriesFacade, factory: _MyEnquiriesFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyEnquiriesFacade, [{
    type: Injectable
  }], () => [{ type: EnquiriesState }, { type: AdsApi }], null);
})();

export {
  EnquiriesState,
  MyEnquiriesFacade
};
//# sourceMappingURL=chunk-E2NRA2LK.js.map
