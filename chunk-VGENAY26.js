import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/enums/device-plateform.enum.ts
var DevicePlateform;
(function(DevicePlateform2) {
  DevicePlateform2["IOS"] = "iOS";
  DevicePlateform2["ANDROID"] = "Android";
  DevicePlateform2["HUAWEI"] = "Huawei";
  DevicePlateform2["WINDOWS_DESKTOP"] = "Windows Desktop";
  DevicePlateform2["MAC_OS"] = "MacOS";
  DevicePlateform2["LINUX"] = "Linux";
  DevicePlateform2["DESKTOP"] = "Desktop";
  DevicePlateform2["UNKNOWN"] = "unknown";
})(DevicePlateform || (DevicePlateform = {}));

// apps/findqo-ireland/src/app/core/services/device-plateform.service.ts
var DevicePlateformService = class _DevicePlateformService {
  getPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return DevicePlateform.IOS;
    }
    if (/Macintosh|Mac OS X/.test(userAgent)) {
      return "MacOS";
    }
    if (/android/i.test(userAgent)) {
      if (/huawei/i.test(userAgent) || /honor/i.test(userAgent)) {
        return DevicePlateform.HUAWEI;
      }
      return DevicePlateform.ANDROID;
    }
    if (!/mobile/i.test(userAgent)) {
      if (/win/i.test(userAgent)) {
        return DevicePlateform.WINDOWS_DESKTOP;
      } else if (/linux/i.test(userAgent)) {
        return DevicePlateform.LINUX;
      }
      return DevicePlateform.DESKTOP;
    }
    return DevicePlateform.UNKNOWN;
  }
  static {
    this.\u0275fac = function DevicePlateformService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevicePlateformService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DevicePlateformService, factory: _DevicePlateformService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevicePlateformService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DevicePlateform,
  DevicePlateformService
};
//# sourceMappingURL=chunk-VGENAY26.js.map
