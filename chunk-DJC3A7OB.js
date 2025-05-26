import {
  FavoriteIconModule,
  HeartIconModule,
  Location2IconModule,
  MoreIconModule
} from "./chunk-GGIORZLS.js";
import {
  AdBerModule
} from "./chunk-GCFYHD3C.js";
import {
  AbstractAdItemComponent,
  AdActionsComponent,
  FavoriteIconComponent,
  HeartIconComponent
} from "./chunk-DYDGEZIA.js";
import {
  AdBerComponent
} from "./chunk-235SP5Y4.js";
import {
  AdStampModule
} from "./chunk-744QYGBS.js";
import {
  MyAdStampComponent
} from "./chunk-UNPSDH5C.js";
import {
  AdPhotoViewerModule
} from "./chunk-NHXE4UA3.js";
import {
  MatMenuModule
} from "./chunk-5DPLTTSV.js";
import {
  BedroomIconModule,
  PropertySizeIconModule,
  ShowerIconModule
} from "./chunk-UNCX2CTW.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  APP_ROUTE,
  AdDetailRoutePipe,
  AdImagePipe,
  AdImagePreloadDirective,
  AdPricePipe,
  AisleType,
  BER_EXEMPT,
  ButtonComponent,
  ButtonModule,
  MatDivider,
  MatDividerModule,
  MatFabButton,
  RouterLink,
  SharedModule,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
  UpperCasePipe
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/ad-item/ad-featured-item/ad-featured-item.component.ts
var _c0 = (a0) => ({ user: a0 });
var _c1 = (a0) => ({ "mb-4 border-lg": a0 });
var _c2 = (a0, a1) => ({ text: a0, label: a1 });
var _c3 = (a0) => ({ $implicit: a0 });
var _c4 = (a0) => ({ text: "Bathroom", label: a0 });
var _c5 = (a0) => ({ text: "Bathrooms", label: a0 });
function AdFeaturedItemComponent_ng_container_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275pipe(3, "adImagePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 4, ctx_r0.ad == null ? null : ctx_r0.ad.seller.picture))("alt", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.ad.seller.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ad.seller.tagline);
  }
}
function AdFeaturedItemComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_div_2_div_1_Template, 9, 6, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.sellerTypeId) === ctx_r0.sellerType.BUSINESS);
  }
}
function AdFeaturedItemComponent_ng_container_0_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275pipe(1, "adDetailRoute");
    \u0275\u0275elementContainer(2, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const adDesktopImages_r2 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, ctx_r0.ad));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", adDesktopImages_r2);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_findqo_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 30);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_findqo_button_2_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.showAllPhotos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("btnType", ctx_r0.buttonType.STROKED)("label", \u0275\u0275pipeBind1(1, 4, "n626"))("isStopPropagation", true)("btnClass", "text-caption-regular view-ad-photo w-100 fg-general-1 rounded-pill");
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-favorite-icon");
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-heart-icon");
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(4);
      ctx_r0.isFavoritesBtnClicked(ctx_r0.ad, ctx_r0.isFavoritesBtnEnable);
      $event.preventDefault();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Conditional_1_Template, 1, 0, "findqo-favorite-icon")(2, AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Conditional_2_Template, 1, 0, "findqo-heart-icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ad.isFavorite === "1" ? 1 : 2);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 11);
    \u0275\u0275template(2, AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_findqo_button_2_Template, 2, 6, "findqo-button", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275template(4, AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_button_4_Template, 3, 1, "button", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.images == null ? null : ctx_r0.ad.images.length) !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r0.ad == null ? null : ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.id));
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "img", 34);
    \u0275\u0275pipe(3, "adImagePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275element(5, "img", 34);
    \u0275\u0275pipe(6, "adImagePipe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 4, ctx_r0.ad == null ? null : ctx_r0.ad.images[1] == null ? null : ctx_r0.ad.images[1].url))("alt", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(6, 6, ctx_r0.ad == null ? null : ctx_r0.ad.images[2] == null ? null : ctx_r0.ad.images[2].url))("alt", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275element(3, "img", 21);
    \u0275\u0275pipe(4, "adImagePipe");
    \u0275\u0275elementStart(5, "div", 22);
    \u0275\u0275element(6, "findqo-my-ad-stamp", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdFeaturedItemComponent_ng_container_0_ng_template_4_div_7_Template, 5, 2, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdFeaturedItemComponent_ng_container_0_ng_template_4_div_8_Template, 7, 8, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", (ctx_r0.ad == null ? null : ctx_r0.ad.images == null ? null : ctx_r0.ad.images.length) <= 2 ? "object-fit-contain" : "main-img")("ngSrc", \u0275\u0275pipeBind1(4, 6, ctx_r0.ad == null ? null : ctx_r0.ad.images[0] == null ? null : ctx_r0.ad.images[0].url))("alt", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("adStatus", ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.images == null ? null : ctx_r0.ad.images.length) > 2);
  }
}
function AdFeaturedItemComponent_ng_container_0_a_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 17);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const adImages_r6 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", adImages_r6);
  }
}
function AdFeaturedItemComponent_ng_container_0_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275pipe(1, "adDetailRoute");
    \u0275\u0275template(2, AdFeaturedItemComponent_ng_container_0_a_6_ng_container_2_Template, 1, 1, "ng-container", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, ctx_r0.ad));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.images == null ? null : ctx_r0.ad.images.length) > 2);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275pipe(3, "adImagePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275element(5, "img", 39);
    \u0275\u0275pipe(6, "adImagePipe");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 4, ctx_r0.ad == null ? null : ctx_r0.ad.images[1] == null ? null : ctx_r0.ad.images[1].url))("alt", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(6, 6, ctx_r0.ad == null ? null : ctx_r0.ad.images[2] == null ? null : ctx_r0.ad.images[2].url))("alt", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title);
  }
}
function AdFeaturedItemComponent_ng_container_0_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275pipe(1, "adDetailRoute");
    \u0275\u0275elementContainer(2, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const adDetails_r7 = \u0275\u0275reference(11);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 2, ctx_r0.ad));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", adDetails_r7);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ad == null ? null : ctx_r0.ad.ad_address, " ");
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_15_ng_template_1_Template(rf, ctx) {
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_15_ng_template_1_Template, 0, 0, "ng-template", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, \u0275\u0275pureFunction2(2, _c2, (ctx_r0.ad.aisle == null ? null : ctx_r0.ad.aisle.reference) === ctx_r0.aisleType.SHARE_RESIDENTIAL ? "Bedroom available" : "Bedroom", ctx_r0.ad.bedroomCount)));
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_16_ng_template_1_Template(rf, ctx) {
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_16_ng_template_1_Template, 0, 0, "ng-template", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, \u0275\u0275pureFunction2(2, _c2, (ctx_r0.ad.aisle == null ? null : ctx_r0.ad.aisle.reference) === ctx_r0.aisleType.SHARE_RESIDENTIAL ? "Bedrooms available" : "Bedrooms", ctx_r0.ad.bedroomCount)));
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "p", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r0.ad.parkingAvailableSpaceCount, " ", \u0275\u0275pipeBind1(3, 3, "n3978"), " ", \u0275\u0275pipeBind1(4, 5, "n1991"), "");
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 63);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_19_ng_template_1_Template(rf, ctx) {
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_19_ng_template_1_Template, 0, 0, "ng-template", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c3, \u0275\u0275pureFunction1(2, _c4, ctx_r0.ad.bathroomCount)));
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_20_ng_template_1_Template(rf, ctx) {
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_20_ng_template_1_Template, 0, 0, "ng-template", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r8 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r8)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c3, \u0275\u0275pureFunction1(2, _c5, ctx_r0.ad.bathroomCount)));
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 63);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.ad.propertySize.value, " ", ctx_r0.ad.propertySize.parameter, "");
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const badges_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(badges_r9);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275template(1, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_23_div_1_Template, 3, 1, "div", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ad == null ? null : ctx_r0.ad.badges);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "findqo-ad-ber", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ber", ctx_r0.ad.ber);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "findqo-ad-ber", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ber", ctx_r0.ad.ber);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_findqo_ad_actions_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-actions", 71);
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ad", ctx_r0.ad)("user", vm_r5.user);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_findqo_ad_actions_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-actions", 72);
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ad", ctx_r0.ad)("user", vm_r5.user);
  }
}
function AdFeaturedItemComponent_ng_container_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div")(3, "div", 43)(4, "div", 44)(5, "h2", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "div", 47)(9, "span", 48);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275pipe(12, "uppercase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_13_Template, 3, 1, "div", 4);
    \u0275\u0275elementStart(14, "div", 49);
    \u0275\u0275template(15, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_15_Template, 2, 7, "div", 50)(16, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_16_Template, 2, 7, "div", 50)(17, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_17_Template, 5, 7, "div", 50)(18, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_18_Template, 1, 0, "div", 51)(19, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_19_Template, 2, 6, "div", 50)(20, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_20_Template, 2, 6, "div", 50)(21, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_21_Template, 1, 0, "div", 51)(22, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_22_Template, 3, 2, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_23_Template, 2, 1, "div", 52)(24, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_24_Template, 2, 1, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 54)(26, "div", 55)(27, "h4", 56);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "adPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, AdFeaturedItemComponent_ng_container_0_ng_template_10_div_30_Template, 2, 1, "div", 57)(31, AdFeaturedItemComponent_ng_container_0_ng_template_10_findqo_ad_actions_31_Template, 1, 2, "findqo-ad-actions", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, AdFeaturedItemComponent_ng_container_0_ng_template_10_findqo_ad_actions_32_Template, 1, 2, "findqo-ad-actions", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.isAgentHub ? "p-3" : "ad-detail-padding");
    \u0275\u0275advance();
    \u0275\u0275classProp("h-100", !ctx_r0.viewport.mobile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ad.aisle.reference === "share-residential" ? ctx_r0.ad == null ? null : ctx_r0.ad.ad_address : ctx_r0.ad == null ? null : ctx_r0.ad.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, \u0275\u0275pipeBind1(11, 20, "n260")));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx_r0.ad.aisle.reference === "share-residential"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) > 1 || (ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) === "7+");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.parkingAvailableSpaceCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (+(ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) > 0 || (ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) === "7+") && +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) > 0 && (ctx_r0.ad == null ? null : ctx_r0.ad.propertySize));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.propertySize) && (ctx_r0.ad.propertySize == null ? null : ctx_r0.ad.propertySize.value) !== "0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ad == null ? null : ctx_r0.ad.badges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.ber) && (ctx_r0.ad == null ? null : ctx_r0.ad.ber) !== ctx_r0.berExempt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 24, ctx_r0.ad == null ? null : ctx_r0.ad.price, ctx_r0.ad == null ? null : ctx_r0.ad.rentalPeriod), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.ber) && (ctx_r0.ad == null ? null : ctx_r0.ad.ber) !== ctx_r0.berExempt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r0.ad == null ? null : ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r0.ad == null ? null : ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.id));
  }
}
function AdFeaturedItemComponent_ng_container_0_mat_divider_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 73);
  }
}
function AdFeaturedItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275template(2, AdFeaturedItemComponent_ng_container_0_div_2_Template, 2, 1, "div", 4)(3, AdFeaturedItemComponent_ng_container_0_a_3_Template, 3, 4, "a", 6)(4, AdFeaturedItemComponent_ng_container_0_ng_template_4_Template, 9, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, AdFeaturedItemComponent_ng_container_0_a_6_Template, 3, 4, "a", 6)(7, AdFeaturedItemComponent_ng_container_0_ng_template_7_Template, 7, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, AdFeaturedItemComponent_ng_container_0_a_9_Template, 3, 4, "a", 7)(10, AdFeaturedItemComponent_ng_container_0_ng_template_10_Template, 33, 27, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdFeaturedItemComponent_ng_container_0_mat_divider_12_Template, 1, 0, "mat-divider", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const adDesktopImages_r2 = \u0275\u0275reference(5);
    const adImages_r6 = \u0275\u0275reference(8);
    const adDetails_r7 = \u0275\u0275reference(11);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, !ctx_r0.isAgentHub));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showSellerInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub)("ngIfElse", adDesktopImages_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub)("ngIfElse", adImages_r6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub)("ngIfElse", adDetails_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub);
  }
}
function AdFeaturedItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ad_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ad_r10.label, " ", ad_r10.text, "");
  }
}
var AdFeaturedItemComponent = class _AdFeaturedItemComponent extends AbstractAdItemComponent {
  constructor(adsApi) {
    super();
    this.adsApi = adsApi;
    this.showSellerInfo = false;
    this.isFavoritesBtnEnable = false;
    this.berExempt = BER_EXEMPT;
    this.aisleType = AisleType;
    this.defaultCountryCode = "+353";
    this.isPhoneClicked = false;
    this.badgeProperties = [
      { property: "bedroomCount", badgeType: "bedroom" },
      { property: "bathroomCount", badgeType: "shower" },
      { property: "propertySize", badgeType: "property-size" }
    ];
  }
  checkRoute() {
    if (this.router.url.includes(APP_ROUTE.favorites)) {
      this.showSellerInfo = true;
      this.isFavoritesBtnEnable = true;
    } else if (this.router.url.includes(APP_ROUTE.seller + "/")) {
      this.showSellerInfo = true;
    }
  }
  ngOnInit() {
    this.isPhoneClicked = false;
    super.ngOnInit();
    this.checkRoute();
  }
  static {
    this.\u0275fac = function AdFeaturedItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdFeaturedItemComponent)(\u0275\u0275directiveInject(AdsApi));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdFeaturedItemComponent, selectors: [["findqo-ad-featured-item"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 5, consts: [["adFeatureBadgeTemplate", ""], ["adDesktopImages", ""], ["adImages", ""], ["adDetails", ""], [4, "ngIf"], [1, "desktop-advertisement", 3, "ngClass"], [3, "routerLink", 4, "ngIf", "ngIfElse"], ["class", "row mx-0", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["class", "my-3 on-desktop", 4, "ngIf"], ["class", "row mx-0 gap-2 ps-0 ps-sm-2 py-2", 4, "ngIf"], [1, "row", "mx-0", "gap-2", "ps-0", "ps-sm-2", "py-2"], [1, "col-auto", "px-0"], ["findqoAdImage", "", "loading", "lazy", "width", "55", "height", "40", "alt", "Seller profile photo", 1, "business-information", "object-fit-cover", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "col", "px-0", "text-truncate"], [1, "text-body-regular", "fg-general-5"], [1, "text-caption-regular", "fg-general-4", "d-block"], [3, "routerLink"], [3, "ngTemplateOutlet"], [1, "row", "gap-2", "row-height"], [1, "col", "border-radius"], [1, "img-container", "position-relative", "h-100"], ["findqoAdImage", "", "fill", "", "priority", "", 1, "h-100", "row-height", "border-radius", "image-skeleton-loader", 3, "ngClass", "ngSrc", "alt"], [1, "position-absolute", "p-2", "top-0"], [3, "adStatus"], ["class", "row w-100 position-absolute p-2 justify-content-between align-items-center bottom-0", 4, "ngIf"], ["class", "col ad-style text-center on-mobile", 4, "ngIf"], [1, "row", "w-100", "position-absolute", "p-2", "justify-content-between", "align-items-center", "bottom-0"], ["iconPrefix", "view-photo", 3, "btnType", "label", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], [1, "col", "text-end", "px-0"], ["mat-fab", "", "class", "me-2 ad-img-btn", 3, "click", 4, "ngIf"], ["iconPrefix", "view-photo", 3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], ["mat-fab", "", 1, "me-2", "ad-img-btn", 3, "click"], [1, "col", "ad-style", "text-center", "on-mobile"], [1, "position-relative", "mb-2", "secound-img-max-height"], ["findqoAdImage", "", "fill", "", "loading", "lazy", 1, "other-images", "w-100", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "position-relative", "secound-img-max-height"], [3, "ngTemplateOutlet", 4, "ngIf"], [1, "row", "gap-1", "on-desktop", "mt-1"], [1, "col"], ["findqoAdImage", "", "fill", "", "loading", "lazy", 1, "position-relative", "w-100", "rounded", "secound-img-max-height", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "row", "mx-0", 3, "routerLink"], [1, "col-sm", 3, "ngClass"], [1, "d-flex", "flex-column", "justify-content-between", "gap-2"], [1, "row", "mx-0", "align-items-center", "gap-3"], [1, "col-12", "col-sm", "px-0", "order-2", "order-sm-1"], [1, "fg-general-5", "heading-4-regular"], [1, "col-12", "col-sm-auto", "px-0", "order-1", "order-sm-2"], [1, "px-2", "rounded", "bg-info-1", "d-inline-flex", "align-items-center", "h-25px"], [1, "text-caption-medium", "fg-info-3"], [1, "row", "gap-2", "mt-2", "align-items-center"], ["class", "col-auto", 4, "ngIf"], ["class", "line", 4, "ngIf"], ["class", "row mx-0 gap-2 mt-2", 4, "ngIf"], ["class", "on-mobile mt-2", 4, "ngIf"], [1, "row", "justify-content-sm-between", "align-items-center", "gap-2", "pe-3", "pe-sm-0"], [1, "col", "px-0"], [1, "fg-general-5", "heading-4-medium", "d-block"], ["class", "col-auto px-0 on-desktop", 4, "ngIf"], ["class", "d-none d-sm-block col-auto", 3, "ad", "user", 4, "ngIf"], ["class", "d-block d-sm-none", 3, "ad", "user", 4, "ngIf"], [1, "text-caption-regular", "fg-general-5"], [1, "col-auto"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "line"], [1, "row", "mx-0", "gap-2", "mt-2"], ["class", "col-auto px-2 rounded bg-info-1 d-inline-flex align-items-center h-25px", 4, "ngFor", "ngForOf"], [1, "col-auto", "px-2", "rounded", "bg-info-1", "d-inline-flex", "align-items-center", "h-25px"], [1, "text-caption-regular", "fg-info-3"], [1, "on-mobile", "mt-2"], [3, "ber"], [1, "col-auto", "px-0", "on-desktop"], [1, "d-none", "d-sm-block", "col-auto", 3, "ad", "user"], [1, "d-block", "d-sm-none", 3, "ad", "user"], [1, "my-3", "on-desktop"], [1, "d-flex", "align-items-center", "gap-1"], [1, "text-caption-regular", "fg-general-5", "text-capitalize"]], template: function AdFeaturedItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdFeaturedItemComponent_ng_container_0_Template, 13, 11, "ng-container", 4);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275template(2, AdFeaturedItemComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.user$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, MatFabButton, RouterLink, NgOptimizedImage, AdImagePreloadDirective, ButtonComponent, MatDivider, AdBerComponent, HeartIconComponent, FavoriteIconComponent, MyAdStampComponent, AdActionsComponent, AsyncPipe, UpperCasePipe, AdImagePipe, TranslationsPipe, AdDetailRoutePipe, AdPricePipe], styles: ["\n\n.main-img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n.other-images[_ngcontent-%COMP%] {\n  height: 121px;\n  object-fit: cover;\n}\n.row-height[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.h-25px[_ngcontent-%COMP%] {\n  height: 25px;\n}\n@media (max-width: 575.98px) {\n  .border-radius[_ngcontent-%COMP%] {\n    border-radius: 4px;\n  }\n  .secound-img-max-height[_ngcontent-%COMP%] {\n    height: 111px !important;\n  }\n}\n@media (min-width: 576px) {\n  .row-height[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .secound-img-max-height[_ngcontent-%COMP%] {\n    height: 121px;\n  }\n}\n.line[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 1px;\n  background: var(--neutral-2);\n}\n.border-verified[_ngcontent-%COMP%] {\n  border: 1px solid var(--success-3);\n}\n.icon-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-featured-item.component.css.map */", "\n\nbutton[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\ndiv.col.position-relative[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.icon-size[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\nfindqo-button.icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px !important;\n  height: 20px !important;\n}\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.phone-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 150px;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.ad-img-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background: rgba(26, 31, 46, 0.65);\n}\n.ad-detail-padding[_ngcontent-%COMP%] {\n  padding: 10px 0px 0px 0px;\n}\n.business-information[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 40px;\n  border-radius: 4px;\n}\n.favorite-icon[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n}\n.badge-icons[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%] {\n  width: 177px !important;\n  height: 40px !important;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n  height: 20px !important;\n  width: 20px !important;\n  margin-right: 8px !important;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n}\n@media (min-width: 576px) {\n  .desktop-advertisement[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .ad-detail-padding[_ngcontent-%COMP%] {\n    padding: 24px 16px 16px 16px;\n  }\n  findqo-button.phone[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 150px;\n  }\n  button[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    width: 325px;\n  }\n  .ad-image[_ngcontent-%COMP%] {\n    width: 325px;\n    height: 200px;\n    border-start-end-radius: 0 !important;\n    border-end-end-radius: 0 !important;\n  }\n  .remove-border-start-radius[_ngcontent-%COMP%] {\n    border-start-start-radius: 0 !important;\n  }\n  .on-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .col-height[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media (max-width: 767.98px) {\n  .image-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 991.98px) {\n  .ad-image[_ngcontent-%COMP%] {\n    border-end-start-radius: 0;\n  }\n}\n@media (min-width: 992px) {\n  .desktop-advertisement.border-lg[_ngcontent-%COMP%] {\n    border: 1px solid var(--general-2);\n    border-radius: 4px;\n  }\n  .row-max-height[_ngcontent-%COMP%] {\n    min-height: 200px;\n    max-height: 270px;\n    border-top: 1px solid var(--general-2);\n  }\n  .image-container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .hide-border-top[_ngcontent-%COMP%] {\n    border-top: 0px !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ad-image[_ngcontent-%COMP%] {\n    border-end-start-radius: 4px;\n  }\n  .ms-19px[_ngcontent-%COMP%] {\n    margin-inline-start: 20px;\n  }\n  .on-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdFeaturedItemComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-featured-item", standalone: false, template: `<ng-container
	*ngIf="{
		user: user$ | async
	} as vm"
>
	<div class="desktop-advertisement" [ngClass]="{ 'mb-4 border-lg': !isAgentHub }">
		<!-- Seller information -->
		<div *ngIf="!showSellerInfo">
			<div class="row mx-0 gap-2 ps-0 ps-sm-2 py-2" *ngIf="ad?.seller?.sellerTypeId === sellerType.BUSINESS">
				<div class="col-auto px-0">
					<img
						findqoAdImage
						class="business-information object-fit-cover image-skeleton-loader"
						loading="lazy"
						width="55"
						height="40"
						alt="Seller profile photo"
						[ngSrc]="ad?.seller.picture | adImagePipe"
						[alt]="ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title"
					/>
				</div>

				<div class="col px-0 text-truncate">
					<span class="text-body-regular fg-general-5">{{ ad.seller.name }}</span>
					<span class="text-caption-regular fg-general-4 d-block">{{ ad.seller.tagline }}</span>
				</div>
			</div>
		</div>

		<a [routerLink]="ad | adDetailRoute" *ngIf="!isAgentHub; else adDesktopImages">
			<ng-container [ngTemplateOutlet]="adDesktopImages"></ng-container>
		</a>

		<ng-template #adDesktopImages>
			<div class="row gap-2 row-height">
				<div class="col border-radius">
					<div class="img-container position-relative h-100">
						<img
							findqoAdImage
							fill
							priority
							[ngClass]="ad?.images?.length <= 2 ? 'object-fit-contain' : 'main-img'"
							class="h-100 row-height border-radius image-skeleton-loader"
							[ngSrc]="ad?.images[0]?.url | adImagePipe"
							[alt]="ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title"
						/>

						<div class="position-absolute p-2 top-0">
							<findqo-my-ad-stamp [adStatus]="ad?.adStatus?.status"></findqo-my-ad-stamp>
						</div>

						<div class="row w-100 position-absolute p-2 justify-content-between align-items-center bottom-0" *ngIf="!isAgentHub">
							<div class="col-auto px-0">
								<findqo-button
									*ngIf="ad?.images?.length !== 0"
									[btnType]="buttonType.STROKED"
									[label]="'n626' | translations"
									iconPrefix="view-photo"
									(clicked)="showAllPhotos()"
									[isStopPropagation]="true"
									[btnClass]="'text-caption-regular view-ad-photo w-100 fg-general-1 rounded-pill'"
								></findqo-button>
							</div>

							<div class="col text-end px-0">
								<button
									*ngIf="vm.user?.id !== ad?.seller?.id"
									mat-fab
									class="me-2 ad-img-btn"
									(click)="isFavoritesBtnClicked(ad, isFavoritesBtnEnable); $event.preventDefault(); $event.stopPropagation()"
								>
									@if (ad.isFavorite === '1') {
										<findqo-favorite-icon></findqo-favorite-icon>
									} @else {
										<findqo-heart-icon></findqo-heart-icon>
									}
								</button>
							</div>
						</div>
					</div>
				</div>

				<div *ngIf="ad?.images?.length > 2" class="col ad-style text-center on-mobile">
					<div class="position-relative mb-2 secound-img-max-height">
						<img
							findqoAdImage
							fill
							loading="lazy"
							class="other-images w-100 image-skeleton-loader"
							[ngSrc]="ad?.images[1]?.url | adImagePipe"
							[alt]="ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title"
						/>
					</div>

					<div class="position-relative secound-img-max-height">
						<img
							findqoAdImage
							fill
							loading="lazy"
							class="other-images w-100 image-skeleton-loader"
							[ngSrc]="ad?.images[2]?.url | adImagePipe"
							[alt]="ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title"
						/>
					</div>
				</div>
			</div>
		</ng-template>

		<a [routerLink]="ad | adDetailRoute" *ngIf="!isAgentHub; else adImages">
			<ng-container *ngIf="ad?.images?.length > 2" [ngTemplateOutlet]="adImages"></ng-container>
		</a>

		<ng-template #adImages>
			<div class="row gap-1 on-desktop mt-1">
				<div class="col">
					<img
						findqoAdImage
						fill
						loading="lazy"
						class="position-relative w-100 rounded secound-img-max-height image-skeleton-loader"
						[ngSrc]="ad?.images[1]?.url | adImagePipe"
						[alt]="ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title"
					/>
				</div>

				<div class="col">
					<img
						findqoAdImage
						fill
						loading="lazy"
						class="position-relative w-100 rounded secound-img-max-height image-skeleton-loader"
						[ngSrc]="ad?.images[2]?.url | adImagePipe"
						[alt]="ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title"
					/>
				</div>
			</div>
		</ng-template>

		<a class="row mx-0" [routerLink]="ad | adDetailRoute" *ngIf="!isAgentHub; else adDetails">
			<ng-container [ngTemplateOutlet]="adDetails"></ng-container>
		</a>

		<ng-template #adDetails>
			<div class="col-sm" [ngClass]="isAgentHub ? 'p-3' : 'ad-detail-padding'">
				<div class="d-flex flex-column justify-content-between gap-2" [class.h-100]="!viewport.mobile">
					<div>
						<div class="row mx-0 align-items-center gap-3">
							<div class="col-12 col-sm px-0 order-2 order-sm-1">
								<h2 class="fg-general-5 heading-4-regular">
									{{ ad.aisle.reference === 'share-residential' ? ad?.ad_address : ad?.title }}
								</h2>
							</div>

							<div class="col-12 col-sm-auto px-0 order-1 order-sm-2">
								<div class="px-2 rounded bg-info-1 d-inline-flex align-items-center h-25px">
									<span class="text-caption-medium fg-info-3">{{ 'n260' | translations | uppercase }}</span>
								</div>
							</div>
						</div>
						<div *ngIf="!(ad.aisle.reference === 'share-residential')">
							<span class="text-caption-regular fg-general-5">
								{{ ad?.ad_address }}
							</span>
						</div>

						<div class="row gap-2 mt-2 align-items-center">
							<!-- Bedroom -->
							<div *ngIf="+ad?.bedroomCount === 1" class="col-auto">
								<ng-template
									[ngTemplateOutlet]="adFeatureBadgeTemplate"
									[ngTemplateOutletContext]="{
										$implicit: {
											text: ad.aisle?.reference === aisleType.SHARE_RESIDENTIAL ? 'Bedroom available' : 'Bedroom',
											label: ad.bedroomCount
										}
									}"
								></ng-template>
							</div>
							<div *ngIf="+ad?.bedroomCount > 1 || ad?.bedroomCount === '7+'" class="col-auto">
								<ng-template
									[ngTemplateOutlet]="adFeatureBadgeTemplate"
									[ngTemplateOutletContext]="{
										$implicit: {
											text: ad.aisle?.reference === aisleType.SHARE_RESIDENTIAL ? 'Bedrooms available' : 'Bedrooms',
											label: ad.bedroomCount
										}
									}"
								></ng-template>
							</div>

							<!-- Parking spaces -->
							<div *ngIf="+ad?.parkingAvailableSpaceCount > 0" class="col-auto">
								<p class="text-body-regular fg-general-5">{{ ad.parkingAvailableSpaceCount }} {{ 'n3978' | translations }} {{ 'n1991' | translations }}</p>
							</div>

							<div class="line" *ngIf="(+ad?.bedroomCount > 0 || ad?.bedroomCount === '7+') && +ad?.bathroomCount > 0"></div>

							<!-- Bathroom -->
							<div *ngIf="+ad?.bathroomCount === 1" class="col-auto">
								<ng-template
									[ngTemplateOutlet]="adFeatureBadgeTemplate"
									[ngTemplateOutletContext]="{ $implicit: { text: 'Bathroom', label: ad.bathroomCount } }"
								></ng-template>
							</div>
							<div *ngIf="+ad?.bathroomCount > 1" class="col-auto">
								<ng-template
									[ngTemplateOutlet]="adFeatureBadgeTemplate"
									[ngTemplateOutletContext]="{ $implicit: { text: 'Bathrooms', label: ad.bathroomCount } }"
								></ng-template>
							</div>

							<div class="line" *ngIf="+ad?.bathroomCount > 0 && ad?.propertySize"></div>
							<!-- Property size -->
							<div *ngIf="ad?.propertySize && ad.propertySize?.value !== '0'" class="col-auto">
								<span class="text-caption-regular fg-general-5">{{ ad.propertySize.value }} {{ ad.propertySize.parameter }}</span>
							</div>
						</div>

						<div class="row mx-0 gap-2 mt-2" *ngIf="ad?.badges">
							<div class="col-auto px-2 rounded bg-info-1 d-inline-flex align-items-center h-25px" *ngFor="let badges of ad?.badges">
								<span class="text-caption-regular fg-info-3">{{ badges }}</span>
							</div>
						</div>

						<div class="on-mobile mt-2" *ngIf="ad?.ber && ad?.ber !== berExempt">
							<findqo-ad-ber [ber]="ad.ber"></findqo-ad-ber>
						</div>
					</div>

					<div class="row justify-content-sm-between align-items-center gap-2 pe-3 pe-sm-0">
						<div class="col px-0">
							<h4 class="fg-general-5 heading-4-medium d-block">
								{{ ad?.price | adPrice: ad?.rentalPeriod }}
							</h4>
						</div>

						<div class="col-auto px-0 on-desktop" *ngIf="ad?.ber && ad?.ber !== berExempt">
							<findqo-ad-ber [ber]="ad.ber"></findqo-ad-ber>
						</div>

						<findqo-ad-actions class="d-none d-sm-block col-auto" [ad]="ad" [user]="vm.user" *ngIf="vm.user?.id !== ad?.seller?.id"></findqo-ad-actions>
					</div>
				</div>

				<findqo-ad-actions class="d-block d-sm-none" [ad]="ad" [user]="vm.user" *ngIf="vm.user?.id !== ad?.seller?.id"></findqo-ad-actions>
			</div>
		</ng-template>
	</div>

	<mat-divider class="my-3 on-desktop" *ngIf="!isAgentHub"></mat-divider>
</ng-container>

<ng-template #adFeatureBadgeTemplate let-ad>
	<div class="d-flex align-items-center gap-1">
		<span class="text-caption-regular fg-general-5 text-capitalize">{{ ad.label }} {{ ad.text }}</span>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-item/ad-featured-item/ad-featured-item.component.scss */\n.main-img {\n  width: 100%;\n  object-fit: cover;\n}\n.other-images {\n  height: 121px;\n  object-fit: cover;\n}\n.row-height {\n  height: 200px;\n}\n.h-25px {\n  height: 25px;\n}\n@media (max-width: 575.98px) {\n  .border-radius {\n    border-radius: 4px;\n  }\n  .secound-img-max-height {\n    height: 111px !important;\n  }\n}\n@media (min-width: 576px) {\n  .row-height {\n    height: 250px;\n  }\n  .secound-img-max-height {\n    height: 121px;\n  }\n}\n.line {\n  height: 15px;\n  width: 1px;\n  background: var(--neutral-2);\n}\n.border-verified {\n  border: 1px solid var(--success-3);\n}\n.icon-14px {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-featured-item.component.css.map */\n", "/* apps/findqo-ireland/src/app/shared/components/ads/ad-item/styles/ad-item.component.scss */\nbutton {\n  width: 34px;\n  height: 34px;\n}\ndiv.col.position-relative {\n  padding: 0 !important;\n}\n.icon-size {\n  width: 16px;\n  height: 16px;\n}\nfindqo-button.icon {\n  display: block;\n  width: 20px !important;\n  height: 20px !important;\n}\nfindqo-button.phone {\n  height: 40px;\n}\n.phone-btn {\n  height: 40px;\n  width: 150px;\n}\n.h-40px {\n  height: 40px;\n}\n.ad-img-btn {\n  width: 35px;\n  height: 35px;\n  background: rgba(26, 31, 46, 0.65);\n}\n.ad-detail-padding {\n  padding: 10px 0px 0px 0px;\n}\n.business-information {\n  width: 55px;\n  height: 40px;\n  border-radius: 4px;\n}\n.favorite-icon {\n  width: 23px;\n  height: 23px;\n}\n.badge-icons {\n  width: 16px;\n  height: 16px;\n}\n.mat-mdc-menu-item {\n  width: 177px !important;\n  height: 40px !important;\n}\n.mat-mdc-menu-item .mat-icon {\n  color: var(--general-4) !important;\n  height: 20px !important;\n  width: 20px !important;\n  margin-right: 8px !important;\n}\n.mat-mdc-menu-item .mdc-list-item__primary-text {\n  color: var(--general-4) !important;\n}\n@media (min-width: 576px) {\n  .desktop-advertisement {\n    position: relative;\n  }\n  .ad-detail-padding {\n    padding: 24px 16px 16px 16px;\n  }\n  findqo-button.phone {\n    height: 40px;\n    width: 150px;\n  }\n  button {\n    width: 38px;\n    height: 38px;\n  }\n  .image-container {\n    width: 325px;\n  }\n  .ad-image {\n    width: 325px;\n    height: 200px;\n    border-start-end-radius: 0 !important;\n    border-end-end-radius: 0 !important;\n  }\n  .remove-border-start-radius {\n    border-start-start-radius: 0 !important;\n  }\n  .on-desktop {\n    display: none;\n  }\n  .col-height {\n    height: 100%;\n  }\n}\n@media (max-width: 767.98px) {\n  .image-width {\n    width: 100%;\n  }\n}\n@media (max-width: 991.98px) {\n  .ad-image {\n    border-end-start-radius: 0;\n  }\n}\n@media (min-width: 992px) {\n  .desktop-advertisement.border-lg {\n    border: 1px solid var(--general-2);\n    border-radius: 4px;\n  }\n  .row-max-height {\n    min-height: 200px;\n    max-height: 270px;\n    border-top: 1px solid var(--general-2);\n  }\n  .image-container {\n    height: 100%;\n  }\n  .hide-border-top {\n    border-top: 0px !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ad-image {\n    border-end-start-radius: 4px;\n  }\n  .ms-19px {\n    margin-inline-start: 20px;\n  }\n  .on-mobile {\n    display: none;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-item.component.css.map */\n"] }]
  }], () => [{ type: AdsApi }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdFeaturedItemComponent, { className: "AdFeaturedItemComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-item/ad-featured-item/ad-featured-item.component.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-item/ad-featured-item/ad-featured-item.module.ts
var AdFeaturedItemModule = class _AdFeaturedItemModule {
  static {
    this.\u0275fac = function AdFeaturedItemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdFeaturedItemModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdFeaturedItemModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      ButtonModule,
      MatMenuModule,
      MatDividerModule,
      AdBerModule,
      HeartIconModule,
      MoreIconModule,
      Location2IconModule,
      PropertySizeIconModule,
      BedroomIconModule,
      ShowerIconModule,
      FavoriteIconModule,
      AdPhotoViewerModule,
      AdStampModule,
      MatTooltipModule,
      AdActionsComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdFeaturedItemModule, [{
    type: NgModule,
    args: [{
      declarations: [AdFeaturedItemComponent],
      imports: [
        SharedModule,
        ButtonModule,
        MatMenuModule,
        MatDividerModule,
        AdBerModule,
        HeartIconModule,
        MoreIconModule,
        Location2IconModule,
        PropertySizeIconModule,
        BedroomIconModule,
        ShowerIconModule,
        FavoriteIconModule,
        AdPhotoViewerModule,
        AdStampModule,
        MatTooltipModule,
        AdActionsComponent
      ],
      exports: [AdFeaturedItemComponent]
    }]
  }], null, null);
})();

export {
  AdFeaturedItemComponent,
  AdFeaturedItemModule
};
//# sourceMappingURL=chunk-DJC3A7OB.js.map
