import {
  API,
  CommonUtil,
  FilterType,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  HttpClient
} from "./chunk-7YCEKZKP.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/data-access/apis/property-alerts.api.ts
var PropertyAlertsApi = class _PropertyAlertsApi {
  constructor(http) {
    this.http = http;
    this.featureVersion = environment.featureVersion;
    this.filterType = FilterType;
  }
  getPropertyAlerts(body) {
    return this.http.get(API.propertyAlerts.getAlerts, {
      params: CommonUtil.createHttpParams(body)
    });
  }
  addAlert(body) {
    return this.http.post(API.propertyAlerts.base, body);
  }
  deletePropertyAlert(alertId) {
    return this.http.delete(API.propertyAlerts.deleteAlert(alertId));
  }
  static {
    this.\u0275fac = function PropertyAlertsApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertsApi)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertyAlertsApi, factory: _PropertyAlertsApi.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertsApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// apps/findqo-ireland/src/app/feature/property-alerts/property-alerts.facade.ts
var PropertyAlertsFacade = class _PropertyAlertsFacade {
  constructor(propertyAlert) {
    this.propertyAlert = propertyAlert;
  }
  getPropertyAlerts(filter) {
    return this.propertyAlert.getPropertyAlerts(filter);
  }
  addAlert(body) {
    return this.propertyAlert.addAlert(body);
  }
  deleteAlert(alertId) {
    return this.propertyAlert.deletePropertyAlert(alertId);
  }
  static {
    this.\u0275fac = function PropertyAlertsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PropertyAlertsFacade)(\u0275\u0275inject(PropertyAlertsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PropertyAlertsFacade, factory: _PropertyAlertsFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyAlertsFacade, [{
    type: Injectable
  }], () => [{ type: PropertyAlertsApi }], null);
})();

export {
  PropertyAlertsFacade
};
//# sourceMappingURL=chunk-VPQFLCQL.js.map
