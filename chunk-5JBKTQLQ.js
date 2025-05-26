import {
  ConfigState,
  DEFAULT_META_CONTENTS,
  Router,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  Meta,
  Title
} from "./chunk-7YCEKZKP.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/services/seo.service.ts
var SeoService = class _SeoService {
  constructor(metaService, titleService, configState, router) {
    this.metaService = metaService;
    this.titleService = titleService;
    this.configState = configState;
    this.router = router;
  }
  setSeo(content) {
    this.removeAllMetaTags();
    this.setTitle(content.title, content?.includeTitleSuffix);
    this.setUrl(content.url);
    this.setImage(content.image);
    this.setType(DEFAULT_META_CONTENTS.type);
    this.setSiteName(DEFAULT_META_CONTENTS.siteName);
    if (content.description) {
      this.setDescription(content.description);
    }
  }
  robotsNoindex() {
    this.metaService.addTag({
      name: "robots",
      content: "noindex, nofollow"
    });
  }
  setImage(image) {
    this.metaService.addTag({ property: "og:image", content: image || DEFAULT_META_CONTENTS.image });
  }
  setTitle(title, includeTitleSuffix) {
    const TRANSLATIONS = this.configState.getTranslations();
    const translatedTitle = TRANSLATIONS[title] || title || "FindQo.ie connects you to trusted property listings across Ireland, offering a wide range of homes, apartments, and commercial spaces for rent, share, and sale.";
    const pageTitle = `${translatedTitle} ${includeTitleSuffix ? `| FindQo.ie` : ``}`;
    this.titleService.setTitle(pageTitle);
    this.metaService.addTag({
      property: "og:title",
      content: pageTitle
    });
  }
  setDescription(description) {
    this.metaService.addTag({
      name: "description",
      content: description
    });
    this.metaService.addTag({
      property: "og:description",
      content: description
    });
  }
  setUrl(url) {
    this.metaService.addTag({
      property: "og:url",
      content: url || `${environment.appUrl}${this.router.url}`.split("?")[0]
    });
  }
  setType(type) {
    this.metaService.addTag({ property: "og:type", content: type ?? "website" });
  }
  setSiteName(siteName) {
    this.metaService.addTag({
      property: "og:site_name",
      content: siteName
    });
  }
  removeAllMetaTags() {
    this.metaService.removeTag('property="og:title"');
    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('property="og:description"');
    this.metaService.removeTag('property="og:url"');
    this.metaService.removeTag('property="og:site_name"');
    this.metaService.removeTag('property="og:image"');
    this.metaService.removeTag('property="og:image:width"');
    this.metaService.removeTag('property="og:image:height"');
    this.metaService.removeTag('property="og:image:type"');
    this.metaService.removeTag('property="og:type"');
    this.metaService.removeTag('property="og:locale"');
    this.metaService.removeTag('name="twitter:card"');
  }
  static {
    this.\u0275fac = function SeoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeoService)(\u0275\u0275inject(Meta), \u0275\u0275inject(Title), \u0275\u0275inject(ConfigState), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Meta }, { type: Title }, { type: ConfigState }, { type: Router }], null);
})();

export {
  SeoService
};
//# sourceMappingURL=chunk-5JBKTQLQ.js.map
