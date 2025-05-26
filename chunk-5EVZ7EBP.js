import {
  StructureDataId
} from "./chunk-DMGY2MF4.js";
import {
  DOCUMENT
} from "./chunk-P7GEPQ2C.js";
import {
  Inject,
  Injectable,
  RendererFactory2,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/services/structured-data.service.ts
var StructuredDataService = class _StructuredDataService {
  constructor(document, rendererFactory) {
    this.document = document;
    this.rendererFactory = rendererFactory;
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  /**
   * Generates structured data for real estate listings and adds it to the document head.
   * @param ads - Array of ad objects containing the property details.
   * @param mainEntityOfPage - The main entity of the page (e.g., the page URL).
   */
  generateRealEstateList(ads, seo, mainEntityOfPage) {
    const existingScriptElement = this.document.getElementById(StructureDataId.PROPERTY_LISTING);
    if (existingScriptElement) {
      this.renderer.removeChild(this.document.head, existingScriptElement);
    }
    const json = this.createSchemaJson(ads, seo, mainEntityOfPage);
    const scriptContent = JSON.stringify(json);
    const scriptElement = this.renderer.createElement("script");
    this.renderer.setAttribute(scriptElement, "type", "application/ld+json");
    this.renderer.setAttribute(scriptElement, "id", StructureDataId.PROPERTY_LISTING);
    const text = this.renderer.createText(scriptContent);
    this.renderer.appendChild(scriptElement, text);
    this.renderer.appendChild(this.document.head, scriptElement);
  }
  generateWebsite(section) {
    const existingScriptElement = this.document.getElementById(StructureDataId.FINDQO_WEBSITE);
    if (existingScriptElement) {
      this.renderer.removeChild(this.document.head, existingScriptElement);
    }
    const alternateName = section === "rent" ? "Discover Properties for Rent in Ireland \u2013 Apartments, Houses & More" : section === "sale" ? "Affordable Homes and Properties for Sale \u2013 Search Listings Now" : "Shared Accommodation \u2013 Rooms and Flats for Sharing in Ireland";
    const json = {
      "@context": "http://schema.org",
      "@type": "Website",
      name: "FindQo.ie",
      alternateName,
      url: "https://findqo.ie"
    };
    const scriptContent = JSON.stringify(json);
    const scriptElement = this.renderer.createElement("script");
    this.renderer.setAttribute(scriptElement, "type", "application/ld+json");
    this.renderer.setAttribute(scriptElement, "id", StructureDataId.FINDQO_WEBSITE);
    const text = this.renderer.createText(scriptContent);
    this.renderer.appendChild(scriptElement, text);
    this.renderer.appendChild(this.document.head, scriptElement);
  }
  /**
   * Removes the structured data script element from the document head.
   */
  destroyScript() {
    const scriptElements = this.document.querySelectorAll('script[type="application/ld+json"]');
    scriptElements.forEach((script) => {
      this.renderer.removeChild(this.document.head, script);
    });
  }
  /**
   * Creates a JSON-LD structured data object for the given ads.
   * @param ads - Array of ad objects.
   * @param mainEntityOfPage - The main entity of the page (e.g., the page URL).
   * @returns A JSON object representing the structured data.
   */
  createSchemaJson(ads, seo, mainEntityOfPage) {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: seo.title,
      description: seo.description,
      "@graph": [this.createBreadcrumbListSchema(seo.title, mainEntityOfPage)]
    };
  }
  /**
   * Creates a structured data object for a single ad.
   * @param ad - An ad object containing property details.
   * @param mainEntityOfPage - The main entity of the page (e.g., the page URL).
   * @returns A structured data object for the ad.
   */
  createProductSchema(ad, mainEntityOfPage) {
    const { title, adlink, description, price, images, seller, bedroomCount, bathroomCount, propertySize, ber } = ad;
    const additionalProperties = [
      bedroomCount && {
        "@type": "PropertyValue",
        name: "Number of Bedrooms",
        value: bedroomCount
      },
      bathroomCount && {
        "@type": "PropertyValue",
        name: "Number of Bathrooms",
        value: bathroomCount
      },
      propertySize && {
        "@type": "QuantitativeValue",
        name: "Size",
        value: propertySize,
        unitCode: "MTR"
      },
      ber && {
        "@type": "PropertyValue",
        name: "Building Energy Rating (BER)",
        value: ber
      }
    ].filter(Boolean);
    const offers = {
      "@context": "https://schema.org",
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      price: price.minValue,
      seller: {
        "@type": "Organization",
        name: seller?.name
      }
    };
    const existingScriptElement = this.document.getElementById(StructureDataId.PROPERTY_DETAIL);
    if (existingScriptElement) {
      this.renderer.removeChild(this.document.head, existingScriptElement);
    }
    const json = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: title,
      // alternatName: section === 'properties-for-rent' ? 'Properties for Rent in Ireland' : 'Properties for Sale in Ireland',
      url: adlink,
      mainEntityOfPage: `${mainEntityOfPage}`,
      image: images.slice(0, 4).map((image) => image.url),
      description,
      offers,
      additionalProperty: additionalProperties
    };
    const scriptContent = JSON.stringify(json);
    const scriptElement = this.renderer.createElement("script");
    this.renderer.setAttribute(scriptElement, "type", "application/ld+json");
    this.renderer.setAttribute(scriptElement, "id", StructureDataId.PROPERTY_DETAIL);
    const text = this.renderer.createText(scriptContent);
    this.renderer.appendChild(scriptElement, text);
    this.renderer.appendChild(this.document.head, scriptElement);
  }
  // TODO: When the Ad list breadcrumb is improved, we can add more items in the list.
  createBreadcrumbListSchema(name, mainEntityOfPage) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://findqo.ie/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: `https://findqo.ie${mainEntityOfPage}`
        }
      ]
    };
  }
  static {
    this.\u0275fac = function StructuredDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StructuredDataService)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(RendererFactory2));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StructuredDataService, factory: _StructuredDataService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StructuredDataService, [{
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
  StructuredDataService
};
//# sourceMappingURL=chunk-5EVZ7EBP.js.map
