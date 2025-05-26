import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  API,
  AgentsState,
  CommonUtil,
  SnackService
} from "./chunk-DMGY2MF4.js";
import {
  HttpClient
} from "./chunk-7YCEKZKP.js";
import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  finalize,
  map,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/data-access/states/enquiry.state.ts
var EnquiryState = class _EnquiryState {
  constructor() {
    this._isLoading$ = new BehaviorSubject(false);
    this._enquiry$ = new BehaviorSubject(void 0);
  }
  get isLoading$() {
    return this._isLoading$.asObservable();
  }
  get enquiry$() {
    return this._enquiry$.asObservable();
  }
  setLoading(status) {
    this._isLoading$.next(status);
  }
  setEnquiry(enquiry) {
    this._enquiry$.next(enquiry);
  }
  static {
    this.\u0275fac = function EnquiryState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnquiryState)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnquiryState, factory: _EnquiryState.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnquiryState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/core/data-access/apis/agent-hub.ts
var AgentHubApi = class _AgentHubApi {
  constructor(http) {
    this.http = http;
  }
  getAgentAds(request) {
    return this.http.get(API.agentHub.ads, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  getAgentList() {
    return this.http.get(API.agents.agentList, {
      params: {
        status: "2"
      }
    }).pipe(map((response) => response?.data));
  }
  getAgentsList(request) {
    return this.http.get(API.agents.base, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  getAgentEnquiries(request) {
    return this.http.get(API.agentHub.enquiries, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  static {
    this.\u0275fac = function AgentHubApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentHubApi)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentHubApi, factory: _AgentHubApi.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentHubApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/agent-hub.facade.ts
var AgentHubFacade = class _AgentHubFacade {
  constructor(agentHubApi, adsApi, adState, agentState, enquiryState, snackService) {
    this.agentHubApi = agentHubApi;
    this.adsApi = adsApi;
    this.adState = adState;
    this.agentState = agentState;
    this.enquiryState = enquiryState;
    this.snackService = snackService;
    this._agencyList$ = new BehaviorSubject([]);
    this._enquiryList$ = new BehaviorSubject([]);
    this._agentsList$ = new BehaviorSubject([]);
    this._pageMetaData$ = new BehaviorSubject(void 0);
    this._aisleList$ = new BehaviorSubject([]);
    this._agentList$ = new BehaviorSubject([]);
    this._isLoading$ = new BehaviorSubject(false);
  }
  get agentsList$() {
    return this._agentsList$.asObservable();
  }
  get enquiryList$() {
    return this._enquiryList$.asObservable();
  }
  get agencyList$() {
    return this._agencyList$.asObservable();
  }
  get pageMetaData$() {
    return this.agentState.agentsMetaData$;
  }
  getAgentList$() {
    return this._agentList$.asObservable();
  }
  getAisleList$() {
    return this._aisleList$.asObservable();
  }
  getAdsStatusList$() {
    return this.adState.adStatusList$;
  }
  isLoading$() {
    return this._isLoading$.asObservable();
  }
  setIsLoading(isLoading) {
    this._isLoading$.next(isLoading);
  }
  setAisleList(aisles) {
    this._aisleList$.next(aisles);
  }
  setAgencyList(agencyList) {
    this._agencyList$.next(agencyList);
  }
  setEnquiryList(enquiryList) {
    this._enquiryList$.next(enquiryList);
  }
  setAgentsList(enquiryList) {
    this._agentsList$.next(enquiryList);
  }
  setPageMetaData(pageMetaData) {
    return this._pageMetaData$.next(pageMetaData);
  }
  setAgentList(agent) {
    this._agentList$.next(agent);
  }
  loadAgentList() {
    this.agentHubApi.getAgentList().subscribe((agents) => {
      this.setAgentList(agents);
    });
  }
  loadAdStatusList() {
    this.adsApi.getAdsStatusList().subscribe((adStatusList) => {
      const filteredAdStatusList = adStatusList.filter((status) => status?.reference !== "all");
      this.adState.setAdStatusList(filteredAdStatusList);
    });
  }
  loadAgencyList$(params) {
    this.setIsLoading(true);
    return this.agentHubApi.getAgentAds(params).pipe(finalize(() => {
      this.setIsLoading(false);
    }), map((response) => {
      this.setAgencyList(response?.data);
      this.setPageMetaData(response.meta);
      return __spreadProps(__spreadValues({}, response), {
        data: response.data
      });
    }));
  }
  loadEnquiryList$(params) {
    this.setIsLoading(true);
    return this.agentHubApi.getAgentEnquiries(params).pipe(finalize(() => {
      this.setIsLoading(false);
    }), map((response) => {
      this.setEnquiryList(response?.data);
      this.setPageMetaData(response.meta);
      return __spreadProps(__spreadValues({}, response), {
        data: response.data
      });
    }));
  }
  loadAgentsList$(params) {
    this.setIsLoading(true);
    return this.agentHubApi.getAgentsList(params).pipe(finalize(() => {
      this.setIsLoading(false);
    }), map((response) => {
      this.setAgentsList(response?.data);
      this.setPageMetaData(response.meta);
      return __spreadProps(__spreadValues({}, response), {
        data: response.data
      });
    }));
  }
  getEnquiry$() {
    return this.enquiryState.enquiry$;
  }
  getIsLoading$() {
    return this.enquiryState.isLoading$;
  }
  markAsPending(enquiryId, body) {
    this.adsApi.changeEnquiryStatus(enquiryId, body).pipe(catchError((response) => {
      const ERROR_MESSAGE = response?.error?.error?.errors[0]?.messages[0];
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }), switchMap(() => this.adsApi.getEnquiryById(enquiryId)), map((res) => res.data)).subscribe((enquiry) => this.enquiryState.setEnquiry(enquiry));
  }
  static {
    this.\u0275fac = function AgentHubFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentHubFacade)(\u0275\u0275inject(AgentHubApi), \u0275\u0275inject(AdsApi), \u0275\u0275inject(AdsState), \u0275\u0275inject(AgentsState), \u0275\u0275inject(EnquiryState), \u0275\u0275inject(SnackService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentHubFacade, factory: _AgentHubFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentHubFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AgentHubApi }, { type: AdsApi }, { type: AdsState }, { type: AgentsState }, { type: EnquiryState }, { type: SnackService }], null);
})();

export {
  EnquiryState,
  AgentHubFacade
};
//# sourceMappingURL=chunk-XVUCQVKR.js.map
