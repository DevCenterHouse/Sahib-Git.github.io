import {
  AisleType,
  RouteDataType,
  SectionType,
  StandType,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  DOCUMENT
} from "./chunk-P7GEPQ2C.js";
import {
  Inject,
  Injectable,
  RendererFactory2,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/ads.route.ts
var PropertyType;
(function(PropertyType2) {
  PropertyType2[PropertyType2["SALE"] = 0] = "SALE";
  PropertyType2[PropertyType2["RENT"] = 1] = "RENT";
  PropertyType2[PropertyType2["SHARE"] = 2] = "SHARE";
})(PropertyType || (PropertyType = {}));
var createPropertyAdRoute = (path, location, type, stand) => {
  const sectionMap = {
    [PropertyType.SALE]: SectionType.PROPERTIES_FOR_SALE,
    [PropertyType.RENT]: SectionType.PROPERTIES_FOR_RENT,
    [PropertyType.SHARE]: SectionType.PROPERTIES_FOR_RENT
    // Share uses the rent section
  };
  const aisleMap = {
    [PropertyType.SALE]: AisleType.SALE_RESIDENTIAL,
    [PropertyType.RENT]: AisleType.RENT_RESIDENTIAL,
    [PropertyType.SHARE]: AisleType.SHARE_RESIDENTIAL
  };
  return __spreadValues({
    path,
    loadChildren: () => import("./chunk-SBVFD66F.js").then((m) => m.AdsModule),
    data: __spreadValues({
      [RouteDataType.IS_AD_LISTING_SEO_FRIENDLY_URL]: true,
      [RouteDataType.SECTION]: sectionMap[type],
      [RouteDataType.AISLE]: aisleMap[type],
      [RouteDataType.LOCATION]: location
    }, stand && { [RouteDataType.STAND]: stand })
  }, false ? { \u0275entryName: "src/app/feature/ads/ads.module.ts" } : {});
};
var adsPredefinedRoutes = [
  // Property For Sale
  {
    seoFriendlyUrl: "properties-for-sale-in-dublin-county",
    originalUrl: "properties-for-sale/dublin-county/sell-residential",
    location: "dublin-county",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-cork",
    originalUrl: "properties-for-sale/cork/sell-residential",
    location: "cork",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-galway",
    originalUrl: "properties-for-sale/galway/sell-residential",
    location: "galway",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-donegal",
    originalUrl: "properties-for-sale/donegal/sell-residential",
    location: "donegal",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-wexford",
    originalUrl: "properties-for-sale/wexford/sell-residential",
    location: "wexford",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-kerry",
    originalUrl: "properties-for-sale/kerry/sell-residential",
    location: "kerry",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-dublin",
    originalUrl: "properties-for-sale/dublin/sell-residential",
    location: "dublin",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "properties-for-sale-in-cavan",
    originalUrl: "properties-for-sale/cavan/sell-residential",
    location: "cavan",
    type: PropertyType.SALE
  },
  {
    seoFriendlyUrl: "houses-for-sale-in-ireland",
    originalUrl: "properties-for-sale/ireland/sell-residential/houses",
    location: "ireland",
    type: PropertyType.SALE,
    stand: StandType.HOUSES
  },
  {
    seoFriendlyUrl: "houses-for-sale-in-dublin",
    originalUrl: "properties-for-sale/dublin/sell-residential/houses",
    location: "dublin",
    type: PropertyType.SALE,
    stand: StandType.HOUSES
  },
  {
    seoFriendlyUrl: "houses-for-sale-in-cork",
    originalUrl: "properties-for-sale/cork/sell-residential/houses",
    location: "cork",
    type: PropertyType.SALE,
    stand: StandType.HOUSES
  },
  {
    seoFriendlyUrl: "houses-for-sale-in-wexford",
    originalUrl: "properties-for-sale/wexford/sell-residential/houses",
    location: "wexford",
    type: PropertyType.SALE,
    stand: StandType.HOUSES
  },
  {
    seoFriendlyUrl: "houses-for-sale-in-cavan",
    originalUrl: "properties-for-sale/cavan/sell-residential/houses",
    location: "cavan",
    type: PropertyType.SALE,
    stand: StandType.HOUSES
  },
  {
    seoFriendlyUrl: "houses-for-sale-in-dublin-county",
    originalUrl: "properties-for-sale/dublin-county/sell-residential/houses",
    location: "dublin-county",
    type: PropertyType.SALE,
    stand: StandType.HOUSES
  },
  // Properties for Share
  {
    seoFriendlyUrl: "properties-for-share-in-dublin",
    originalUrl: "properties-for-rent/dublin/share-residential",
    location: "dublin",
    type: PropertyType.SHARE
  },
  {
    seoFriendlyUrl: "apartments-for-share-in-dublin",
    originalUrl: "properties-for-rent/dublin/share-residential/apartments",
    location: "dublin",
    type: PropertyType.SHARE,
    stand: StandType.APARTMENTS
  },
  {
    seoFriendlyUrl: "houses-for-share-in-dublin",
    originalUrl: "properties-for-rent/dublin/share-residential/houses",
    location: "dublin",
    type: PropertyType.SHARE,
    stand: StandType.HOUSES
  },
  // Properties for Rent
  {
    seoFriendlyUrl: "properties-for-rent-in-dublin",
    originalUrl: "properties-for-rent/dublin/rent-residential",
    location: "dublin",
    type: PropertyType.RENT
  },
  {
    seoFriendlyUrl: "apartments-for-rent-in-dublin",
    originalUrl: "properties-for-rent/dublin/rent-residential/apartments",
    location: "dublin",
    type: PropertyType.RENT,
    stand: StandType.APARTMENTS
  },
  {
    seoFriendlyUrl: "houses-for-rent-in-dublin",
    originalUrl: "properties-for-rent/dublin/rent-residential/houses",
    location: "dublin",
    type: PropertyType.RENT,
    stand: StandType.HOUSES
  }
];
var adsRoutes = adsPredefinedRoutes.map(({ seoFriendlyUrl, location, type, stand }) => createPropertyAdRoute(seoFriendlyUrl, location, type, stand));

// apps/findqo-ireland/src/app/core/services/canonical.service.ts
var CanonicalService = class _CanonicalService {
  constructor(document, rendererFactory) {
    this.document = document;
    this.rendererFactory = rendererFactory;
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  // TODO: Check if this needs to be removed as it's doing nothing.
  createCannonicaUrl(url, hasDomain = false) {
    return;
  }
  // TODO: Consider moving this to an Angular Guard.
  updateCanonicalUrlForAdRoutes(url) {
    const fullUrl = new URL(`${environment.appUrl}/${url}`);
    const params = new URLSearchParams(fullUrl.search);
    const page = params.get("page");
    const path = url.split("?")[0];
    const head = this.document.head;
    let canonicalLink = this.document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = this.document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      head.appendChild(canonicalLink);
    }
    const adRoute = adsPredefinedRoutes.find((route) => [`/${route.originalUrl}`, `/${route.seoFriendlyUrl}`].includes(path));
    const canonicalPath = adRoute ? adRoute.seoFriendlyUrl : path;
    const canonicalUrl = `${environment.appUrl}/${canonicalPath}${page && page !== "1" ? `?page=${page}` : ""}`;
    canonicalLink.setAttribute("href", canonicalUrl);
  }
  /**
   * Remove canonical link element
   */
  removeCanonicalLinkElement() {
    const EXISTING_LINK = this.document.head.querySelector('[rel="canonical"]');
    if (EXISTING_LINK) {
      EXISTING_LINK.remove();
    }
  }
  static {
    this.\u0275fac = function CanonicalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CanonicalService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(RendererFactory2));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CanonicalService, factory: _CanonicalService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanonicalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: RendererFactory2 }], null);
})();

export {
  adsRoutes,
  CanonicalService
};
//# sourceMappingURL=chunk-ZM4NPOC4.js.map
