import {
  API,
  AdListKind,
  CACHE_REQUEST,
  CommonUtil,
  SortType
} from "./chunk-DMGY2MF4.js";
import {
  HttpClient,
  HttpContext
} from "./chunk-7YCEKZKP.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/data-access/apis/ads.api.ts
var AdsApi = class _AdsApi {
  constructor(http) {
    this.http = http;
  }
  getAdList(request) {
    return this.http.get(API.ads.adList, {
      params: CommonUtil.createHttpParams(request)
    }).pipe(map((response) => {
      const { meta: metadata, kind } = response;
      const seoTitle = metadata?.seo?.title || "";
      const isListWithCount = +metadata?.total > 1 && kind === AdListKind.LIST && !seoTitle.toLowerCase().includes("bedroom");
      const titleWithCount = isListWithCount ? `${metadata.total} ${seoTitle}` : seoTitle;
      return __spreadProps(__spreadValues({}, response), {
        meta: __spreadProps(__spreadValues({}, metadata), {
          seo: __spreadProps(__spreadValues({}, metadata?.seo), {
            titleWithCount
          })
        })
      });
    }));
  }
  getAgentAdList(id, request) {
    return this.http.get(API.ads.agentAdList(id), {
      params: CommonUtil.createHttpParams(request)
    });
  }
  getMyAds(request) {
    return this.http.get(API.myAds.myAdList, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  getAdsStatusList() {
    return this.http.get(API.ads.adStatusList, {
      params: {
        withCount: 1
      }
    }).pipe(map((adStatusList) => adStatusList.data));
  }
  getLatestAdList(request) {
    return this.http.get(API.ads.adList, {
      params: CommonUtil.createHttpParams(__spreadProps(__spreadValues({}, request), {
        sort: SortType.DATE_LATEST
      }))
    }).pipe(map((response) => response.kind === AdListKind.LIST ? response.data.map((ad) => __spreadProps(__spreadValues({}, ad), { price: __spreadValues({}, ad.price) })) : []));
  }
  getLatestAds() {
    return this.http.get(API.ads.latestAdList, {
      context: new HttpContext().set(CACHE_REQUEST, {
        cached: true,
        ttl: 3e5
      })
    });
  }
  getAdDetail(id) {
    return this.http.get(API.ads.adDetail(id)).pipe(map((response) => response?.data));
  }
  getFavourtiesAds() {
    return this.http.get(API.favorites.favoritesList, {
      params: CommonUtil.createHttpParams({})
    }).pipe(map((response) => response.data));
  }
  deleteFavoriteAd(ad) {
    return this.http.delete(API.favorites.deleteFavoriteAd(ad.id));
  }
  saveFavoriteAd(ad) {
    return this.http.post(API.favorites.saveFavoriteAd(ad.id), {});
  }
  deleteAd(adId) {
    return this.http.delete(API.ads.deleteAd(adId));
  }
  soldAd(adId) {
    return this.http.post(API.ads.soldAd(adId), {});
  }
  sendInquiry(adId, body) {
    return this.http.post(API.inquiry.sendInquiry(adId), body);
  }
  getInquiry(request) {
    return this.http.get(API.inquiry.getInquiry, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  getReportAdReasons() {
    return this.http.get(API.reportAds.getReportReasons, {
      context: new HttpContext().set(CACHE_REQUEST, {
        cached: true,
        ttl: 3e5
      })
    }).pipe(map((response) => response?.data));
  }
  reportAd(reportAd, adId) {
    return this.http.post(API.reportAds.reportAd(adId), reportAd);
  }
  getAdsPrice() {
    return this.http.get(API.pricing.adsPricing).pipe(map((response) => {
      return response.data;
    }));
  }
  getInquiryList(request) {
    return this.http.get(API.inquiry.getInquiry, {
      params: CommonUtil.createHttpParams(request)
    });
  }
  reSubmitEnquiry(adId, enquiryId, body) {
    return this.http.patch(API.inquiry.reSubmitInquiry(adId, enquiryId), body);
  }
  getPdfContent(pdfSignedUrl) {
    return this.http.get(pdfSignedUrl, { responseType: "blob" });
  }
  trackPhoneCall(id, body = {}) {
    return this.http.post(API.trackPhoneCall(id), body);
  }
  getEnquiryById(id) {
    return this.http.get(API.inquiry.enquiryById(id));
  }
  changeEnquiryStatus(enquiryId, body) {
    return this.http.patch(API.inquiry.changeEnquiryStatus(enquiryId), body);
  }
  unpublishAd(adId, updatestatus) {
    return this.http.patch(API.ads.updateStatus(adId), {
      reference: updatestatus
    });
  }
  updateAdStatus(adId, updatestatus) {
    return this.http.patch(API.ads.updateStatus(adId), {
      reference: updatestatus
    });
  }
  static {
    this.\u0275fac = function AdsApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdsApi)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdsApi, factory: _AdsApi.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdsApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AdsApi
};
//# sourceMappingURL=chunk-NQD7YOJF.js.map
