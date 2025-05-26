import {
  EnquiryService,
  SendInquiryDialogComponent
} from "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  Keyboard,
  Navigation,
  Pagination,
  Zoom,
  core_default,
  register
} from "./chunk-TDH4RB3F.js";
import {
  AdsService,
  AmplitudeEvent,
  AuthService,
  ButtonType,
  CommonFacade,
  FeatureVersion,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  SnackService,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/ad-photo-viewer/ad-photo-viewer.component.ts
var _c0 = (a0) => ({ user: a0 });
var _c1 = (a0) => [a0];
function AdPhotoViewerComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function AdPhotoViewerComponent_div_0_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275elementStart(2, "mat-icon", 24);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()()();
  }
}
function AdPhotoViewerComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 23);
    \u0275\u0275listener("click", function AdPhotoViewerComponent_div_0_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275elementStart(2, "mat-icon", 24);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()()();
  }
}
function AdPhotoViewerComponent_div_0_findqo_ad_image_carousel_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-image-carousel", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ad", ctx_r2.data == null ? null : ctx_r2.data.ad);
  }
}
function AdPhotoViewerComponent_div_0_ng_template_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("resize-img", !ctx_r2.viewport.mobile);
    \u0275\u0275property("src", image_r5 == null ? null : image_r5.url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.title);
  }
}
function AdPhotoViewerComponent_div_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AdPhotoViewerComponent_div_0_ng_template_21_div_1_Template, 2, 4, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.images);
  }
}
function AdPhotoViewerComponent_div_0_div_23_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function AdPhotoViewerComponent_div_0_div_23_div_3_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onWhatsappMessage());
    });
    \u0275\u0275element(1, "mat-icon", 36);
    \u0275\u0275elementEnd();
  }
}
function AdPhotoViewerComponent_div_0_div_23_div_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 37);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function AdPhotoViewerComponent_div_0_div_23_div_3_ng_template_2_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onCall());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "n719"))("btnType", ctx_r2.buttonType.FILLED);
  }
}
function AdPhotoViewerComponent_div_0_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, AdPhotoViewerComponent_div_0_div_23_div_3_button_1_Template, 2, 0, "button", 34)(2, AdPhotoViewerComponent_div_0_div_23_div_3_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const desktopChat_r9 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewport.mobile)("ngIfElse", desktopChat_r9);
  }
}
function AdPhotoViewerComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 6)(2, "findqo-button", 32);
    \u0275\u0275listener("clicked", function AdPhotoViewerComponent_div_0_div_23_Template_findqo_button_clicked_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCall());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, AdPhotoViewerComponent_div_0_div_23_div_3_Template, 4, 2, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("max-520px", !ctx_r2.viewport.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("label", 0 + (ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.seller == null ? null : ctx_r2.data.ad.seller.phone))("btnType", ctx_r2.buttonType.FILLED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.seller == null ? null : ctx_r2.data.ad.seller.isWhatsapp) === "1");
  }
}
function AdPhotoViewerComponent_div_0_div_24_findqo_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 39);
    \u0275\u0275pipe(1, "adStatusTooltip");
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function AdPhotoViewerComponent_div_0_div_24_findqo_button_2_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onSendInquiry(ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.adStatus == null ? null : ctx_r2.data.ad.adStatus.status));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 3, ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.adStatus == null ? null : ctx_r2.data.ad.adStatus.status, ctx_r2.getMessage))("label", \u0275\u0275pipeBind1(2, 6, "n2963"))("btnType", ctx_r2.buttonType.FILLED);
  }
}
function AdPhotoViewerComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 6);
    \u0275\u0275template(2, AdPhotoViewerComponent_div_0_div_24_findqo_button_2_Template, 3, 8, "findqo-button", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r11 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("max-520px", !ctx_r2.viewport.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r11.user == null ? null : vm_r11.user.id) !== (ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.seller == null ? null : ctx_r2.data.ad.seller.id));
  }
}
function AdPhotoViewerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    \u0275\u0275template(5, AdPhotoViewerComponent_div_0_div_5_Template, 4, 0, "div", 8);
    \u0275\u0275elementStart(6, "div", 9)(7, "span", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "adPrice");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "button", 14);
    \u0275\u0275listener("click", function AdPhotoViewerComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePhotoView(true));
    });
    \u0275\u0275element(15, "mat-icon", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function AdPhotoViewerComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePhotoView(false));
    });
    \u0275\u0275element(17, "mat-icon", 17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(18, AdPhotoViewerComponent_div_0_div_18_Template, 4, 0, "div", 18);
    \u0275\u0275elementStart(19, "div", 19);
    \u0275\u0275template(20, AdPhotoViewerComponent_div_0_findqo_ad_image_carousel_20_Template, 1, 1, "findqo-ad-image-carousel", 20)(21, AdPhotoViewerComponent_div_0_ng_template_21_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdPhotoViewerComponent_div_0_div_23_Template, 4, 5, "div", 21)(24, AdPhotoViewerComponent_div_0_div_24_Template, 3, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const showVerticalGallery_r12 = \u0275\u0275reference(22);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.viewport.mobile ? "" : "desktop-header");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.viewport.mobile);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 13, ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.price, ctx_r2.data == null ? null : ctx_r2.data.ad == null ? null : ctx_r2.data.ad.rentalPeriod), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-info-3", ctx_r2.showCarousel);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-info-3", !ctx_r2.showCarousel);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.viewport.mobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.showCarousel)("ngIfElse", showVerticalGallery_r12);
    \u0275\u0275advance(3);
    \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(16, _c1, ctx_r2.featureVersion.V1));
    \u0275\u0275advance();
    \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(18, _c1, ctx_r2.featureVersion.V2));
  }
}
var AdPhotoViewerComponent = class _AdPhotoViewerComponent {
  constructor(data, dialogRef, adsService, viewport, matDialog, auth, commonFacade, enquiryService, snackService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.adsService = adsService;
    this.viewport = viewport;
    this.matDialog = matDialog;
    this.auth = auth;
    this.commonFacade = commonFacade;
    this.enquiryService = enquiryService;
    this.snackService = snackService;
    this.showCarousel = true;
    this.buttonType = ButtonType;
    this.featureVersion = FeatureVersion;
    this.user$ = this.commonFacade.getUser$();
  }
  onCall() {
    this.adsService.onPhoneCall(this.data.ad);
  }
  onWhatsappMessage() {
    this.adsService.onWhatsappMessage(this.data.ad);
  }
  back() {
    this.dialogRef.close();
  }
  togglePhotoView(show) {
    this.showCarousel = show;
  }
  openSendInquiryDialog() {
    this.matDialog.open(SendInquiryDialogComponent, {
      width: "100%",
      height: "100%",
      position: {
        right: "0"
      },
      data: {
        ad: this.data.ad,
        sharedAdsFacade: this.data.sharedAdsFacade
      },
      panelClass: "inquiry-form",
      backdropClass: "inquiry-backdrop"
    });
  }
  getMessage(status) {
    if (status === "sold") {
      return "This property is sold";
    } else if (status === "property-occupied") {
      return "This property is occupied";
    } else if (status === "sale-agreed") {
      return "This property is sale agreed";
    } else {
      return "";
    }
  }
  onSendInquiry(status) {
    if (["sold", "property-occupied", "sale-agreed", "expired"].includes(status) && this.viewport.desktop) {
      return null;
    }
    if (["sold", "property-occupied", "sale-agreed", "expired"].includes(status) && !this.viewport.desktop) {
      this.snackService.open({
        data: { message: this.getMessage(status) },
        panelClass: "snackbar-error",
        duration: 3e3
      });
      return;
    }
    this.enquiryService.onOpenSendEnquiryDialog(AmplitudeEvent.AD_DETAILS_SEND_ENQUIRY_CLICKED, () => this.openSendInquiryDialog());
  }
  static {
    this.\u0275fac = function AdPhotoViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdPhotoViewerComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(AdsService), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(EnquiryService), \u0275\u0275directiveInject(SnackService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdPhotoViewerComponent, selectors: [["findqo-ad-photo-viewer"]], standalone: false, decls: 2, vars: 5, consts: [["showVerticalGallery", ""], ["desktopChat", ""], ["class", "px-0 bg-general-5 w-100 h-100 position-relative ad-photo-viewer mx-auto bg-general-5", 4, "ngIf"], [1, "px-0", "bg-general-5", "w-100", "h-100", "position-relative", "ad-photo-viewer", "mx-auto", "bg-general-5"], [1, "position-fixed", "px-3", "h-65px", "bg-general-5", "mx-auto", "w-100", "top-0"], [1, "row", "justify-content-between", "align-items-center", "mx-auto", "h-100", 3, "ngClass"], [1, "col"], [1, "row", "justify-content-start", "align-items-center"], ["class", "col-auto pe-3", 4, "ngIf"], [1, "col", "ps-2"], [1, "d-block", "fg-general-1", "fs-14px", "lh-18px", "text-truncate", "advertisement-title"], [1, "d-block", "fg-prim-2", "fs-14px", "lh-18px"], [1, "col-auto"], ["role", "group", "aria-label", "Image scroll", 1, "button-group"], ["mat-fab", "", "aria-label", "Image carousel button", "disableRipple", "true", 1, "photo-view", "bg-general-5", "horizontal-img", 3, "click"], ["svgIcon", "carousel-horizontal"], ["mat-fab", "", "aria-label", "Image vertical scroll", "disableRipple", "true", 1, "photo-view", "bg-general-5", "img-gallery", 3, "click"], ["svgIcon", "vertical-swiper"], ["class", "position-fixed desktop-close", 4, "ngIf"], [1, "image-container", "h-100"], [3, "ad", 4, "ngIf", "ngIfElse"], ["class", "row position-fixed bottom-0 gap-2 p-3 justify-content-center align-items-center ad-style bg-general-5 mx-0 w-100", 4, "findqoFeatureIf"], [1, "col-auto", "pe-3"], ["mat-mini-fab", "", "aria-label", "close button", 1, "bg-general-4", "close-btn", 3, "click"], [1, "fg-basic-1"], [1, "position-fixed", "desktop-close"], [3, "ad"], [1, "pb-72px"], ["class", "mb-3 w-100", 4, "ngFor", "ngForOf"], [1, "mb-3", "w-100"], [1, "d-block", "bg-general-5", "mx-auto", "vertical-img", 3, "src", "alt"], [1, "row", "position-fixed", "bottom-0", "gap-2", "p-3", "justify-content-center", "align-items-center", "ad-style", "bg-general-5", "mx-0", "w-100"], ["btnClass", "text-small-14px-regular w-100 h-100", "iconPrefix", "phone-solid", 1, "phone", "d-block", 3, "clicked", "label", "btnType"], ["class", "col-auto", 4, "ngIf"], ["mat-fab", "", "aria-label", "Whatsapp message", "class", "whats-app bg-general-5", "disableRipple", "true", 3, "click", 4, "ngIf", "ngIfElse"], ["mat-fab", "", "aria-label", "Whatsapp message", "disableRipple", "true", 1, "whats-app", "bg-general-5", 3, "click"], ["svgIcon", "whatsapp"], ["btnClass", "text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn", "iconPrefix", "whatsapp", 1, "phone", "d-block", 3, "clicked", "label", "btnType"], ["class", "phone d-block", "btnClass", "text-small-14px-regular w-100 h-100", 3, "matTooltip", "label", "btnType", "clicked", 4, "ngIf"], ["btnClass", "text-small-14px-regular w-100 h-100", 1, "phone", "d-block", 3, "clicked", "matTooltip", "label", "btnType"]], template: function AdPhotoViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdPhotoViewerComponent_div_0_Template, 25, 20, "div", 2);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.user$)));
      }
    }, styles: ["\n\n.h-65px[_ngcontent-%COMP%] {\n  height: 65px;\n}\n.image-container[_ngcontent-%COMP%] {\n  padding: 65px 0 72px;\n}\n.btn-radius[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.pb-72px[_ngcontent-%COMP%] {\n  padding-bottom: 72px;\n}\n.vertical-img[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: contain !important;\n}\n.horizontal-img[_ngcontent-%COMP%] {\n  border-start-start-radius: 4px !important;\n  border-start-end-radius: 0 !important;\n  border-end-start-radius: 4px !important;\n  border-end-end-radius: 0 !important;\n}\n.img-gallery[_ngcontent-%COMP%] {\n  border-start-start-radius: 0 !important;\n  border-start-end-radius: 4px !important;\n  border-end-start-radius: 0 !important;\n  border-end-end-radius: 4px !important;\n}\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.desktop-header[_ngcontent-%COMP%] {\n  width: 550px !important;\n}\n.resize-img[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.max-520px[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px !important;\n  height: 30px !important;\n}\n.desktop-close[_ngcontent-%COMP%] {\n  top: 24px;\n  inset-inline-end: 26px;\n}\n.advertisement-title[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n@media (max-width: 575.98px) {\n  .advertisement-title[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-photo-viewer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdPhotoViewerComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-photo-viewer", standalone: false, template: `<div class="px-0 bg-general-5 w-100 h-100 position-relative ad-photo-viewer mx-auto bg-general-5" *ngIf="{ user: user$ | async } as vm">
	<div class="position-fixed px-3 h-65px bg-general-5 mx-auto w-100 top-0">
		<div class="row justify-content-between align-items-center mx-auto h-100" [ngClass]="viewport.mobile ? '' : 'desktop-header'">
			<div class="col">
				<div class="row justify-content-start align-items-center">
					<div class="col-auto pe-3" *ngIf="viewport.mobile">
						<button mat-mini-fab class="bg-general-4 close-btn" aria-label="close button" (click)="back()">
							<mat-icon class="fg-basic-1">close</mat-icon>
						</button>
					</div>

					<div class="col ps-2">
						<span class="d-block fg-general-1 fs-14px lh-18px text-truncate advertisement-title">{{ data?.ad?.title }}</span>

						<span class="d-block fg-prim-2 fs-14px lh-18px">
							{{ data?.ad?.price | adPrice: data?.ad?.rentalPeriod }}
						</span>
					</div>
				</div>
			</div>

			<div class="col-auto">
				<div class="button-group" role="group" aria-label="Image scroll">
					<button
						mat-fab
						aria-label="Image carousel button"
						class="photo-view bg-general-5 horizontal-img"
						disableRipple="true"
						(click)="togglePhotoView(true)"
						[class.bg-info-3]="showCarousel"
					>
						<mat-icon svgIcon="carousel-horizontal"></mat-icon>
					</button>

					<button
						mat-fab
						aria-label="Image vertical scroll"
						class="photo-view bg-general-5 img-gallery"
						disableRipple="true"
						(click)="togglePhotoView(false)"
						[class.bg-info-3]="!showCarousel"
					>
						<mat-icon svgIcon="vertical-swiper"></mat-icon>
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="position-fixed desktop-close" *ngIf="!viewport.mobile">
		<button mat-mini-fab class="bg-general-4 close-btn" aria-label="close button" (click)="back()">
			<mat-icon class="fg-basic-1">close</mat-icon>
		</button>
	</div>

	<div class="image-container h-100">
		<findqo-ad-image-carousel [ad]="data?.ad" *ngIf="showCarousel; else showVerticalGallery"></findqo-ad-image-carousel>

		<ng-template #showVerticalGallery>
			<div class="pb-72px">
				<div *ngFor="let image of data?.ad?.images" class="mb-3 w-100">
					<img [src]="image?.url" class="d-block bg-general-5 mx-auto vertical-img" [alt]="data?.ad?.title" [class.resize-img]="!viewport.mobile" />
				</div>
			</div>
		</ng-template>
	</div>

	<div
		class="row position-fixed bottom-0 gap-2 p-3 justify-content-center align-items-center ad-style bg-general-5 mx-0 w-100"
		*findqoFeatureIf="[featureVersion.V1]"
	>
		<div class="col" [class.max-520px]="!viewport.mobile">
			<findqo-button
				class="phone d-block"
				btnClass="text-small-14px-regular w-100 h-100"
				iconPrefix="phone-solid"
				[label]="0 + data?.ad?.seller?.phone"
				[btnType]="buttonType.FILLED"
				(clicked)="onCall()"
			></findqo-button>
		</div>

		<div class="col-auto" *ngIf="data?.ad?.seller?.isWhatsapp === '1'">
			<button
				mat-fab
				aria-label="Whatsapp message"
				class="whats-app bg-general-5"
				disableRipple="true"
				(click)="onWhatsappMessage()"
				*ngIf="viewport.mobile; else desktopChat"
			>
				<mat-icon svgIcon="whatsapp"></mat-icon>
			</button>

			<ng-template #desktopChat>
				<findqo-button
					class="phone d-block"
					btnClass="text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn"
					iconPrefix="whatsapp"
					[label]="'n719' | translations"
					[btnType]="buttonType.FILLED"
					(clicked)="onCall()"
				></findqo-button>
			</ng-template>
		</div>
	</div>

	<div
		class="row position-fixed bottom-0 gap-2 p-3 justify-content-center align-items-center ad-style bg-general-5 mx-0 w-100"
		*findqoFeatureIf="[featureVersion.V2]"
	>
		<div class="col" [class.max-520px]="!viewport.mobile">
			<findqo-button
				[matTooltip]="data?.ad?.adStatus?.status | adStatusTooltip: getMessage"
				class="phone d-block"
				btnClass="text-small-14px-regular w-100 h-100"
				[label]="'n2963' | translations"
				[btnType]="buttonType.FILLED"
				(clicked)="onSendInquiry(data?.ad?.adStatus?.status)"
				*ngIf="vm.user?.id !== data?.ad?.seller?.id"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-photo-viewer/ad-photo-viewer.component.scss */\n.h-65px {\n  height: 65px;\n}\n.image-container {\n  padding: 65px 0 72px;\n}\n.btn-radius {\n  border-radius: 4px;\n}\n.pb-72px {\n  padding-bottom: 72px;\n}\n.vertical-img {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: contain !important;\n}\n.horizontal-img {\n  border-start-start-radius: 4px !important;\n  border-start-end-radius: 0 !important;\n  border-end-start-radius: 4px !important;\n  border-end-end-radius: 0 !important;\n}\n.img-gallery {\n  border-start-start-radius: 0 !important;\n  border-start-end-radius: 4px !important;\n  border-end-start-radius: 0 !important;\n  border-end-end-radius: 4px !important;\n}\nfindqo-button.phone {\n  height: 40px;\n}\n.desktop-header {\n  width: 550px !important;\n}\n.resize-img {\n  max-width: 1000px;\n}\n.max-520px {\n  max-width: 520px;\n}\n.close-btn {\n  width: 30px !important;\n  height: 30px !important;\n}\n.desktop-close {\n  top: 24px;\n  inset-inline-end: 26px;\n}\n.advertisement-title {\n  max-width: 450px;\n}\n@media (max-width: 575.98px) {\n  .advertisement-title {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-photo-viewer.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: AdsService }, { type: ViewportService }, { type: MatDialog }, { type: AuthService }, { type: CommonFacade }, { type: EnquiryService }, { type: SnackService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdPhotoViewerComponent, { className: "AdPhotoViewerComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-photo-viewer/ad-photo-viewer.component.ts", lineNumber: 27 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-image-carousel/ad-image-carousel.component.ts
var _c02 = ["swiperContainer"];
var _c12 = (a0) => ({ "advertisement-detail": a0 });
function AdsImageCarouselComponent_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5, "Verified");
    \u0275\u0275elementEnd()()();
  }
}
function AdsImageCarouselComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "img", 9);
    \u0275\u0275listener("click", function AdsImageCarouselComponent_div_3_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickImage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdsImageCarouselComponent_div_3_div_3_Template, 6, 0, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r3.url, \u0275\u0275sanitizeUrl)("alt", ctx_r1.ad == null ? null : ctx_r1.ad.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 === 0 && (ctx_r1.ad == null ? null : ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.isVerified) === "1");
  }
}
var AdsImageCarouselComponent = class _AdsImageCarouselComponent {
  constructor(dialog, sharedAdsFacade, platformId) {
    this.dialog = dialog;
    this.sharedAdsFacade = sharedAdsFacade;
    this.platformId = platformId;
  }
  onClickImage() {
    if (this.isAdDetail) {
      this.openImageGallery();
    }
  }
  openImageGallery() {
    this.dialog.open(AdPhotoViewerComponent, {
      width: "100%",
      height: "100%",
      data: {
        ad: this.ad,
        sharedAdsFacade: this.sharedAdsFacade
      },
      panelClass: "ad-images"
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      this.mySwiper = new core_default(this.swiperContainer.nativeElement, {
        modules: [Keyboard, Pagination, Navigation, Zoom],
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        zoom: {
          toggle: true
        },
        loop: true
      });
    }
  }
  static {
    this.\u0275fac = function AdsImageCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdsImageCarouselComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdsImageCarouselComponent, selectors: [["findqo-ad-image-carousel"]], viewQuery: function AdsImageCarouselComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.swiperContainer = _t.first);
      }
    }, inputs: { isAdDetail: "isAdDetail", ad: "ad" }, decls: 11, vars: 4, consts: [["swiperContainer", ""], [1, "swiper-container", "h-100", "position-relative", 3, "ngClass"], [1, "swiper-wrapper", "align-items-center"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-pagination", "bottom-0", "fg-basic-1", "d-block"], [1, "swiper-slide"], [1, "swiper-zoom-container"], [3, "click", "src", "alt"], ["class", "position-absolute p-3 top-0 left-0 w-100 d-inline-flex align-items-start", 4, "ngIf"], [1, "position-absolute", "p-3", "top-0", "left-0", "w-100", "d-inline-flex", "align-items-start"], [1, "p-2", "rounded", "bg-success-1", "d-inline-flex", "align-items-center", "border-verified", "h-25px"], [1, "icon-14px", "fg-success-3", "me-1"], [1, "text-caption-medium", "fg-success-3"]], template: function AdsImageCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2);
        \u0275\u0275template(3, AdsImageCarouselComponent_div_3_Template, 4, 3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "mat-icon");
        \u0275\u0275text(6, "navigate_next");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "mat-icon");
        \u0275\u0275text(9, "navigate_before");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c12, ctx.isAdDetail));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.ad == null ? null : ctx.ad.images);
      }
    }, dependencies: [MatIconModule, MatIcon, NgClass, CommonModule, NgForOf, NgIf], styles: ['\n\n@font-face {\n  font-family: "swiper-icons";\n  src: url(data:application/font-woff;charset=utf-8;base64,\\ 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);\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper[_ngcontent-%COMP%], \nswiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], \n.swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%], \nswiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.swiper-autoheight[_ngcontent-%COMP%], \n.swiper-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-3d.swiper-css-mode[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], \n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: none;\n}\n.swiper-centered[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  content: "";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-centered.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%]:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-lazy-preloader[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper[_ngcontent-%COMP%]:not(.swiper-watch-progress)   .swiper-lazy-preloader[_ngcontent-%COMP%], \nswiper-container[_ngcontent-%COMP%]:not(.swiper-watch-progress)   .swiper-lazy-preloader[_ngcontent-%COMP%], \n.swiper-watch-progress[_ngcontent-%COMP%]   .swiper-slide-visible[_ngcontent-%COMP%]   .swiper-lazy-preloader[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #000;\n}\n@keyframes _ngcontent-%COMP%_swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.swiper-virtual[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%]::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-navigation-size: 44px;\n}\n.swiper-button-prev[_ngcontent-%COMP%], \n.swiper-button-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%], \n.swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden[_ngcontent-%COMP%], \n.swiper-button-next.swiper-button-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%], \n.swiper-navigation-disabled[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, \n.swiper-button-next[_ngcontent-%COMP%]:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev[_ngcontent-%COMP%], \n.swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, \n.swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after {\n  content: "prev";\n}\n.swiper-button-next[_ngcontent-%COMP%], \n.swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next[_ngcontent-%COMP%]:after, \n.swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n  content: "next";\n}\n.swiper-button-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n}\n.swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.swiper-pagination-disabled[_ngcontent-%COMP%]    > .swiper-pagination[_ngcontent-%COMP%], \n.swiper-pagination.swiper-pagination-disabled[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.swiper-pagination-fraction[_ngcontent-%COMP%], \n.swiper-pagination-custom[_ngcontent-%COMP%], \n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%], \n.swiper-pagination-bullets.swiper-pagination-horizontal[_ngcontent-%COMP%] {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%]:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%], \n.swiper-pagination-vertical.swiper-pagination-bullets[_ngcontent-%COMP%] {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], \n.swiper-pagination-vertical.swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%], \n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], \n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], \n.swiper-pagination-horizontal.swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%], \n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], \n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-horizontal.swiper-rtl[_ngcontent-%COMP%]    > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%], \n.swiper-horizontal.swiper-rtl[_nghost-%COMP%]   .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms right;\n}\n.swiper-pagination-fraction[_ngcontent-%COMP%] {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  transform-origin: right top;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], \n.swiper-pagination-progressbar.swiper-pagination-horizontal[_ngcontent-%COMP%], \n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], \n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], \n.swiper-pagination-progressbar.swiper-pagination-vertical[_ngcontent-%COMP%], \n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%], \n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n}\n.swiper-scrollbar[_ngcontent-%COMP%] {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  -ms-touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%], \n.swiper-scrollbar.swiper-scrollbar-disabled[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.swiper-horizontal[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%], \n.swiper-scrollbar.swiper-scrollbar-horizontal[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%], \n.swiper-scrollbar.swiper-scrollbar-vertical[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.swiper-scrollbar-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n.swiper-zoom-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], \n.swiper-zoom-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], \n.swiper-zoom-container[_ngcontent-%COMP%]    > canvas[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed[_ngcontent-%COMP%] {\n  cursor: move;\n  touch-action: none;\n}\n.swiper[_ngcontent-%COMP%]   .swiper-notification[_ngcontent-%COMP%], \nswiper-container[_ngcontent-%COMP%]   .swiper-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-grid-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n}\n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], \n.swiper-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-cube[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform-origin: 100% 0;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-prev[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%]    + .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], \n.swiper-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%]:before {\n  content: "";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-flip[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], \n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], \n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], \n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], \n.swiper-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-creative[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow: hidden;\n  transition-property:\n    transform,\n    opacity,\n    height;\n}\n.swiper-cards[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-cards[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow: hidden;\n}\n\n\n\n.swiper-pagination[_ngcontent-%COMP%] {\n  bottom: 100px;\n}\n.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.h-25px[_ngcontent-%COMP%] {\n  height: 25px;\n}\n.border-verified[_ngcontent-%COMP%] {\n  border: 1px solid var(--success-3);\n}\n.icon-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n@media (max-width: 991.98px) {\n  .advertisement-detail[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .advertisement-detail[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-image-carousel.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdsImageCarouselComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-image-carousel", standalone: true, imports: [MatIconModule, NgClass, CommonModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div #swiperContainer class="swiper-container h-100 position-relative" [ngClass]="{ 'advertisement-detail': isAdDetail }">
	<div class="swiper-wrapper align-items-center">
		<div *ngFor="let image of ad?.images; let i = index" class="swiper-slide">
			<div class="swiper-zoom-container">
				<img [src]="image.url" [alt]="ad?.title" (click)="onClickImage()" />

				<div *ngIf="i === 0 && ad?.seller?.isVerified === '1'" class="position-absolute p-3 top-0 left-0 w-100 d-inline-flex align-items-start">
					<div class="p-2 rounded bg-success-1 d-inline-flex align-items-center border-verified h-25px">
						<mat-icon class="icon-14px fg-success-3 me-1">verified_user</mat-icon>
						<span class="text-caption-medium fg-success-3">Verified</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="swiper-button-next">
		<mat-icon>navigate_next</mat-icon>
	</div>

	<div class="swiper-button-prev">
		<mat-icon>navigate_before</mat-icon>
	</div>

	<div class="swiper-pagination bottom-0 fg-basic-1 d-block"></div>
</div>
`, styles: ['/* node_modules/swiper/swiper-bundle.css */\n@font-face {\n  font-family: "swiper-icons";\n  src: url(data:application/font-woff;charset=utf-8;base64,\\ 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);\n  font-weight: 400;\n  font-style: normal;\n}\n:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper,\nswiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide,\nswiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image:\n    linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image:\n    linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.5),\n      rgba(0, 0, 0, 0));\n}\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-horizontal.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-vertical.swiper-css-mode > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-centered > .swiper-wrapper::before {\n  content: "";\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\nswiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: "prev";\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: "next";\n}\n.swiper-button-lock {\n  display: none;\n}\n:root {\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n:root {\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  -ms-touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-vertical {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n  touch-action: none;\n}\n.swiper .swiper-notification,\nswiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active,\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev,\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: "";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-flip .swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow: hidden;\n  transition-property:\n    transform,\n    opacity,\n    height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow: hidden;\n}\n\n/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-image-carousel/ad-image-carousel.component.scss */\n.swiper-pagination {\n  bottom: 100px;\n}\n.swiper-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.h-25px {\n  height: 25px;\n}\n.border-verified {\n  border: 1px solid var(--success-3);\n}\n.icon-14px {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n@media (max-width: 991.98px) {\n  .advertisement-detail .swiper-wrapper {\n    height: 250px;\n  }\n  .advertisement-detail .swiper-container {\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-image-carousel.component.css.map */\n'] }]
  }], () => [{ type: MatDialog }, { type: SharedAdsFacade }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { swiperContainer: [{
    type: ViewChild,
    args: ["swiperContainer", { static: true }]
  }], isAdDetail: [{
    type: Input
  }], ad: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdsImageCarouselComponent, { className: "AdsImageCarouselComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-image-carousel/ad-image-carousel.component.ts", lineNumber: 19 });
})();

export {
  AdPhotoViewerComponent,
  AdsImageCarouselComponent
};
//# sourceMappingURL=chunk-7LQ3PONV.js.map
