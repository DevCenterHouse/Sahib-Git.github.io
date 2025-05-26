import {
  AdDetailFacade
} from "./chunk-AJZ7THAU.js";
import {
  ResponseService
} from "./chunk-VSJWKDDR.js";
import {
  AdDescriptionComponent,
  AdExtrasComponent,
  AdSubDetailsComponent,
  AdVideoComponent
} from "./chunk-MZUUJAB7.js";
import {
  Clipboard
} from "./chunk-6CJCVRJS.js";
import {
  GoogleAdComponent
} from "./chunk-OA73AKNS.js";
import {
  SsoPostLoginService
} from "./chunk-AH5EFBPI.js";
import {
  AdBerComponent,
  AdReportDialogComponent,
  AdShareDialogComponent
} from "./chunk-235SP5Y4.js";
import {
  BrowserUtility,
  MyAdStampComponent,
  require_relativeTime
} from "./chunk-UNPSDH5C.js";
import {
  require_dayjs_min
} from "./chunk-HTJPCHOJ.js";
import {
  SeoService
} from "./chunk-5JBKTQLQ.js";
import {
  CanonicalService
} from "./chunk-ZM4NPOC4.js";
import {
  AdBreadcrumbsComponent
} from "./chunk-JF4CZBE5.js";
import {
  AdPhotoViewerComponent,
  AdsImageCarouselComponent
} from "./chunk-7LQ3PONV.js";
import {
  EnquiryService,
  SendInquiryDialogComponent
} from "./chunk-PLN2PSBG.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  IconService
} from "./chunk-DYYJHWVN.js";
import {
  OtherAdListComponent
} from "./chunk-5NSY5PGP.js";
import {
  StructuredDataService
} from "./chunk-5EVZ7EBP.js";
import {
  PropertyAlertDialogComponent
} from "./chunk-THEU3YGZ.js";
import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  MatTooltip
} from "./chunk-34NPCBBY.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AdElementVisibleDirective,
  AdImagePipe,
  AdImagePreloadDirective,
  AdPricePipe,
  AdStatusTooltipPipe,
  AdTitlePipe,
  AdTransfromPipe,
  AdsService,
  AisleType,
  AmplitudeEvent,
  AuthService,
  BER_EXEMPT,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  CommonFacade,
  FeatureIfDirective,
  FeatureVersion,
  LinkifyPipe,
  MaskPhonePipe,
  MatAnchor,
  MatButton,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatDivider,
  MatFabButton,
  MatIconButton,
  PostLoginAction,
  RemoveLastLetterPipe,
  RouteService,
  Router,
  RouterLink,
  SectionType,
  SellerType,
  SharedModule,
  SnackService,
  StorageType,
  TranslationsPipe,
  ViewportService,
  WindowService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  CommonModule,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  HostListener,
  Inject,
  Injectable,
  Input,
  PLATFORM_ID,
  ViewChild,
  __spreadProps,
  __spreadValues,
  __toESM,
  catchError,
  finalize,
  inject,
  of,
  setClassMetadata,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/ads/components/ad-header/ad-header.component.ts
var _c0 = (a0) => ({ user: a0 });
function AdHeaderComponent_ng_container_0_findqo_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 7);
    \u0275\u0275listener("clicked", function AdHeaderComponent_ng_container_0_findqo_button_5_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isFavoritesBtnClicked(ctx_r1.ad.isFavorite === "1"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("add-favorite", ctx_r1.ad.isFavorite === "1");
    \u0275\u0275property("btnType", ctx_r1.buttonType.ICON)("materialIconPrefix", ctx_r1.ad.isFavorite === "1" ? "favorite" : "favorite_border");
  }
}
function AdHeaderComponent_ng_container_0_findqo_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 8);
    \u0275\u0275listener("clicked", function AdHeaderComponent_ng_container_0_findqo_button_7_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReportAd());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("btnType", ctx_r1.buttonType.ICON);
  }
}
function AdHeaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "findqo-button", 3);
    \u0275\u0275listener("clicked", function AdHeaderComponent_ng_container_0_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275template(5, AdHeaderComponent_ng_container_0_findqo_button_5_Template, 1, 4, "findqo-button", 4);
    \u0275\u0275elementStart(6, "findqo-button", 5);
    \u0275\u0275listener("clicked", function AdHeaderComponent_ng_container_0_Template_findqo_button_clicked_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shareAd());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdHeaderComponent_ng_container_0_findqo_button_7_Template, 1, 1, "findqo-button", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("materialIconPrefix", "arrow_back")("label", "Back")("btnType", ctx_r1.buttonType.BASIC);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isPublicPage && (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r1.buttonType.ICON)("materialIconPrefix", "ios_share");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPublicPage && (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
  }
}
var AdHeaderComponent = class _AdHeaderComponent {
  constructor(platformId, window2, utility, matDialog, auth, commonFacade, sharedAdsFacade, location, ssoPostLoginService, router) {
    this.platformId = platformId;
    this.window = window2;
    this.utility = utility;
    this.matDialog = matDialog;
    this.auth = auth;
    this.commonFacade = commonFacade;
    this.sharedAdsFacade = sharedAdsFacade;
    this.location = location;
    this.ssoPostLoginService = ssoPostLoginService;
    this.router = router;
    this.isPublicPage = false;
    this.user$ = this.commonFacade.getUser$();
    this.buttonType = ButtonType;
  }
  //TODO:needs to implement after discussing with UI Team
  shareAd() {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    const AVALABLE_FROM = this.ad.availableFrom ? TRANSLATIONS?.["n3111"] + ": " + this.commonFacade.getFormattedDate(this.ad.availableFrom) : "";
    if (this.utility.isWebShareSupported()) {
      const AVAILABLE_FROM = navigator.share({
        title: this.ad?.title,
        text: `${this.ad?.title}
${TRANSLATIONS?.["n152"]}:  ${+this.ad.price.isPriceOnApplication ? TRANSLATIONS?.["n3311"] : this.ad.price.symbol + this.ad.price.minValue + " " + (this.ad.price.maxValue ? " - " + this.ad.price.maxValue : "")}
${AVALABLE_FROM}
${TRANSLATIONS?.["n3953"]}
`,
        url: this.ad?.adlink ?? this.window.reference.location.href
      }).then(() => {
        console.log("Content shared successfully!");
      }).catch((error) => {
        console.error("Error sharing content:", error);
      });
    } else {
      this.matDialog.open(AdShareDialogComponent, {
        width: "343px",
        data: {
          title: TRANSLATIONS?.["n195"],
          messageHeading: TRANSLATIONS?.["n720"],
          message: this.currentRoute,
          confirmButton: TRANSLATIONS?.["n226"],
          snackbarText: TRANSLATIONS?.["n809"],
          adLink: this.ad.adlink
        },
        panelClass: "share-ad"
      });
    }
  }
  back() {
    const INSIDE_SITE = document.referrer.includes("findqo.ie");
    if (window.history.length > 1 && INSIDE_SITE) {
      this.location.back();
    } else {
      this.router.navigate([this.ad?.section?.reference, "ireland", this.ad?.aisle?.reference]);
    }
  }
  isFavoritesBtnClicked(isFavoritesBtnEnable) {
    if (isFavoritesBtnEnable) {
      this.sharedAdsFacade.deleteFavouriteAd(this.ad);
    } else {
      this.saveFavorites();
    }
  }
  addToFav() {
    if (this.auth.user()?.id !== this.ad.seller.id) {
      this.ad = __spreadProps(__spreadValues({}, this.ad), {
        isFavorite: "1"
      });
      this.sharedAdsFacade.saveFavouriteAd(this.ad);
    }
  }
  saveFavorites() {
    const IS_LOGGED_IN = this.auth.user()?.accessToken;
    if (IS_LOGGED_IN) {
      this.addToFav();
    } else {
      sessionStorage.setItem(StorageType.POST_LOGIN_SESSION, JSON.stringify({
        type: PostLoginAction.ADD_TO_FAVORITE
      }));
      this.auth.openAuthDialog({ onLogin: this.addToFav.bind(this) });
    }
  }
  openReportDialog() {
    this.matDialog.open(AdReportDialogComponent, {
      width: "343px",
      height: "auto",
      maxWidth: "unset",
      data: {
        adId: this.ad?.id
      },
      backdropClass: "inquiry-backdrop"
    });
  }
  onReportAd() {
    if (this.auth.user()) {
      this.openReportDialog();
    } else {
      sessionStorage.setItem(StorageType.POST_LOGIN_SESSION, JSON.stringify({
        type: PostLoginAction.REPORT_AD
      }));
      this.auth.openAuthDialog({ onLogin: this.openReportDialog.bind(this) });
    }
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentRoute = this.window.reference.location.href;
      this.ssoPostLoginService.handlePostLoginWithAction({
        [PostLoginAction.ADD_TO_FAVORITE]: this.addToFav.bind(this),
        [PostLoginAction.REPORT_AD]: this.openReportDialog.bind(this)
      });
    }
  }
  static {
    this.\u0275fac = function AdHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdHeaderComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(BrowserUtility), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(SsoPostLoginService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdHeaderComponent, selectors: [["findqo-ad-header"]], inputs: { ad: "ad", isPublicPage: "isPublicPage" }, decls: 2, vars: 5, consts: [[4, "ngIf"], [1, "row", "px-3", "py-10px", "justify-content-between", "align-items-center", "w-100", "top-0", "bg-basic-1"], [1, "col-auto"], ["ariaLabel", "back button", "btnClass", "fs-14px lh-18px fw-400 fg-general-4", 3, "clicked", "materialIconPrefix", "label", "btnType"], ["class", "ads-btn", "btnClass", "ad-header-btn d-none d-md-inline-block", "ariaLabel", "favorites ad button", 3, "btnType", "materialIconPrefix", "add-favorite", "clicked", 4, "ngIf"], ["btnClass", "ad-header-btn d-inline-block", "ariaLabel", "share ad button", 1, "ads-btn", 3, "clicked", "btnType", "materialIconPrefix"], ["class", "ads-btn", "btnClass", "ad-header-btn d-none d-md-inline-block", "materialIconPrefix", "outlined_flag", "ariaLabel", "report ad button", 3, "btnType", "clicked", 4, "ngIf"], ["btnClass", "ad-header-btn d-none d-md-inline-block", "ariaLabel", "favorites ad button", 1, "ads-btn", 3, "clicked", "btnType", "materialIconPrefix"], ["btnClass", "ad-header-btn d-none d-md-inline-block", "materialIconPrefix", "outlined_flag", "ariaLabel", "report ad button", 1, "ads-btn", 3, "clicked", "btnType"]], template: function AdHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdHeaderComponent_ng_container_0_Template, 8, 7, "ng-container", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.user$)));
      }
    }, dependencies: [CommonModule, NgIf, AsyncPipe, ButtonModule, ButtonComponent], styles: ["\n\ndiv.position-sticky[_ngcontent-%COMP%] {\n  z-index: var(--z-index-ad-detail-header);\n}\n.py-10px[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdHeaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-header", standalone: true, imports: [CommonModule, ButtonModule], template: `<ng-container
	*ngIf="{
		user: user$ | async
	} as vm"
>
	<div class="row px-3 py-10px justify-content-between align-items-center w-100 top-0 bg-basic-1">
		<div class="col-auto">
			<findqo-button
				[materialIconPrefix]="'arrow_back'"
				[label]="'Back'"
				ariaLabel="back button"
				[btnType]="buttonType.BASIC"
				(clicked)="back()"
				btnClass="fs-14px lh-18px fw-400 fg-general-4"
			></findqo-button>
		</div>

		<div class="col-auto">
			<findqo-button
				*ngIf="!isPublicPage && vm.user?.id !== ad.seller?.id"
				class="ads-btn"
				btnClass="ad-header-btn d-none d-md-inline-block"
				ariaLabel="favorites ad button"
				[btnType]="buttonType.ICON"
				[materialIconPrefix]="ad.isFavorite === '1' ? 'favorite' : 'favorite_border'"
				[class.add-favorite]="ad.isFavorite === '1'"
				(clicked)="isFavoritesBtnClicked(ad.isFavorite === '1')"
			></findqo-button>

			<findqo-button
				class="ads-btn"
				btnClass="ad-header-btn d-inline-block"
				ariaLabel="share ad button"
				[btnType]="buttonType.ICON"
				[materialIconPrefix]="'ios_share'"
				(clicked)="shareAd()"
			></findqo-button>

			<findqo-button
				*ngIf="!isPublicPage && vm.user?.id !== ad.seller?.id"
				class="ads-btn"
				btnClass="ad-header-btn d-none d-md-inline-block"
				materialIconPrefix="outlined_flag"
				ariaLabel="report ad button"
				[btnType]="buttonType.ICON"
				(clicked)="onReportAd()"
			></findqo-button>
		</div>
	</div>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ads/components/ad-header/ad-header.component.scss */\ndiv.position-sticky {\n  z-index: var(--z-index-ad-detail-header);\n}\n.py-10px {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-header.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: WindowService }, { type: BrowserUtility }, { type: MatDialog }, { type: AuthService }, { type: CommonFacade }, { type: SharedAdsFacade }, { type: Location }, { type: SsoPostLoginService }, { type: Router }], { ad: [{
    type: Input
  }], isPublicPage: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdHeaderComponent, { className: "AdHeaderComponent", filePath: "apps/findqo-ireland/src/app/feature/ads/components/ad-header/ad-header.component.ts", lineNumber: 27 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-summary-header/ad-summary-header.component.ts
function AdSummaryHeaderComponent_findqo_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 11);
    \u0275\u0275listener("clicked", function AdSummaryHeaderComponent_findqo_button_14_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWhatsappMessage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("label", "Chat")("btnType", ctx_r1.buttonType.FILLED);
  }
}
var AdSummaryHeaderComponent = class _AdSummaryHeaderComponent {
  constructor(adsService) {
    this.adsService = adsService;
    this.buttonType = ButtonType;
  }
  onWhatsappMessage() {
    this.adsService.onWhatsappMessage(this.ad);
  }
  onCall() {
    this.adsService.onPhoneCall(this.ad);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function AdSummaryHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdSummaryHeaderComponent)(\u0275\u0275directiveInject(AdsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdSummaryHeaderComponent, selectors: [["findqo-ad-summary-header"]], inputs: { ad: "ad" }, decls: 15, vars: 9, consts: [[1, "container-fluid", "bg-basic-1", "position-fixed", "top-0", "border-bottom", "w-100", "p-3", "summary-header"], [1, "row", "gap-2", "justify-content-between", "w-100", "summary", "align-items-center", "mx-auto"], [1, "col"], [1, "text-title-20px-medium", "lh-24px", "fg-general-5", "pb-2"], [1, "text-title-20px-medium", "lh-24px", "fg-prim-2", "pb-2"], [1, "d-block", "fg-general-4", "fw-400", "fs-14px", "lh-18px"], ["src", "assets/images/location-icon.svg", "alt", "Property location"], [1, "d-inline-block", "align-middle"], [1, "col-auto", "ad-style"], ["btnClass", "text-small-14px-regular w-100 h-100", "iconPrefix", "phone-solid", 1, "phone", "d-inline-block", "me-3", 3, "clicked", "label", "btnType"], ["btnClass", "text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn", "class", "phone d-inline-block", "iconPrefix", "whatsapp", 3, "label", "btnType", "clicked", 4, "ngIf"], ["btnClass", "text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn", "iconPrefix", "whatsapp", 1, "phone", "d-inline-block", 3, "clicked", "label", "btnType"]], template: function AdSummaryHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "adPrice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "findqo-button", 9);
        \u0275\u0275listener("clicked", function AdSummaryHeaderComponent_Template_findqo_button_clicked_13_listener() {
          return ctx.onCall();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, AdSummaryHeaderComponent_findqo_button_14_Template, 1, 2, "findqo-button", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.ad == null ? null : ctx.ad.title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, ctx.ad == null ? null : ctx.ad.price, ctx.ad == null ? null : ctx.ad.rentalPeriod), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ad == null ? null : ctx.ad.city);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", 0 + (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.phone))("btnType", ctx.buttonType.FILLED);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.isWhatsapp) === "1");
      }
    }, dependencies: [ButtonModule, ButtonComponent, SharedModule, NgIf, AdPricePipe], styles: ["\n\n.summary-header[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);\n  z-index: var(--z-index-ad-detail-header);\n}\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 40px;\n}\n@media (min-width: 576px) {\n  .summary[_ngcontent-%COMP%] {\n    max-width: 1100px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-summary-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdSummaryHeaderComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-summary-header", standalone: true, imports: [ButtonModule, SharedModule], template: `<div class="container-fluid bg-basic-1 position-fixed top-0 border-bottom w-100 p-3 summary-header">
	<div class="row gap-2 justify-content-between w-100 summary align-items-center mx-auto">
		<div class="col">
			<p class="text-title-20px-medium lh-24px fg-general-5 pb-2">
				{{ ad?.title }}
			</p>

			<p class="text-title-20px-medium lh-24px fg-prim-2 pb-2">
				{{ ad?.price | adPrice: ad?.rentalPeriod }}
			</p>

			<p class="d-block fg-general-4 fw-400 fs-14px lh-18px">
				<img src="assets/images/location-icon.svg" alt="Property location" />

				<span class="d-inline-block align-middle">{{ ad?.city }}</span>
			</p>
		</div>

		<div class="col-auto ad-style">
			<findqo-button
				btnClass="text-small-14px-regular w-100 h-100"
				class="phone d-inline-block me-3"
				iconPrefix="phone-solid"
				[label]="0 + ad?.seller?.phone"
				[btnType]="buttonType.FILLED"
				(clicked)="onCall()"
			></findqo-button>

			<findqo-button
				btnClass="text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn"
				class="phone d-inline-block"
				iconPrefix="whatsapp"
				[label]="'Chat'"
				[btnType]="buttonType.FILLED"
				(clicked)="onWhatsappMessage()"
				*ngIf="ad?.seller?.isWhatsapp === '1'"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-summary-header/ad-summary-header.component.scss */\n.summary-header {\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);\n  z-index: var(--z-index-ad-detail-header);\n}\nfindqo-button.phone {\n  height: 40px;\n}\n@media (min-width: 576px) {\n  .summary {\n    max-width: 1100px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-summary-header.component.css.map */\n"] }]
  }], () => [{ type: AdsService }], { ad: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdSummaryHeaderComponent, { className: "AdSummaryHeaderComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-summary-header/ad-summary-header.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-desktop-photo/ad-desktop-photo.component.ts
var _c02 = () => [1, 2];
function AdDesktopPhotoComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "mat-icon", 8);
    \u0275\u0275text(3, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "Verified");
    \u0275\u0275elementEnd()()();
  }
}
function AdDesktopPhotoComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "findqo-button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.STROKED)("label", "View all photos")("btnClass", "fs-14px lh-18px w-100 view-photo");
  }
}
function AdDesktopPhotoComponent_Conditional_6_div_0_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "findqo-button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.STROKED)("label", "View all photos")("btnClass", "fs-14px lh-18px w-100 view-photo");
  }
}
function AdDesktopPhotoComponent_Conditional_6_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275pipe(2, "adImagePipe");
    \u0275\u0275template(3, AdDesktopPhotoComponent_Conditional_6_div_0_div_1_div_3_Template, 2, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(2, 3, ctx_r0.ad == null ? null : ctx_r0.ad.images[i_r2 + 1] == null ? null : ctx_r0.ad.images[i_r2 + 1].url))("alt", ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r2 === 1);
  }
}
function AdDesktopPhotoComponent_Conditional_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, AdDesktopPhotoComponent_Conditional_6_div_0_div_1_Template, 4, 5, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c02));
  }
}
function AdDesktopPhotoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdDesktopPhotoComponent_Conditional_6_div_0_Template, 2, 2, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.images == null ? null : ctx_r0.ad.images.length) > 1);
  }
}
var AdDesktopPhotoComponent = class _AdDesktopPhotoComponent {
  constructor(dialog, sharedAdsFacade) {
    this.dialog = dialog;
    this.sharedAdsFacade = sharedAdsFacade;
    this.buttonType = ButtonType;
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
  static {
    this.\u0275fac = function AdDesktopPhotoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDesktopPhotoComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SharedAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdDesktopPhotoComponent, selectors: [["findqo-ad-desktop-photo"]], inputs: { ad: "ad" }, decls: 7, vars: 7, consts: [[1, "row", "justify-content-between", "gap-3", "align-items-center", "mb-3", "px-4", "px-xl-0", "cursor-pointer", 3, "click"], [1, "col-sm", "bg-general-1", "rounded", "image-container", "position-relative"], ["findqoAdImage", "", "fill", "", "priority", "", 1, "image-1", "h-100", 3, "ngSrc", "alt"], ["class", "position-absolute p-2 top-0", 4, "ngIf"], ["class", "position-absolute bottom-left ad-style", 4, "ngIf"], [1, "col-sm-auto", "small-photos", "ad-style"], [1, "position-absolute", "p-2", "top-0"], [1, "p-2", "rounded", "bg-success-1", "d-inline-flex", "align-items-center", "border-verified", "h-25px"], [1, "icon-14px", "fg-success-3", "me-1"], [1, "text-caption-medium", "fg-success-3"], [1, "position-absolute", "bottom-left", "ad-style"], ["iconPrefix", "view-photo", 3, "btnType", "label", "btnClass"], ["class", "col-sm-auto small-photos ad-style", 4, "ngIf"], ["class", "rounded mb-3 bg-general-2 sub-image position-relative", 4, "ngFor", "ngForOf"], [1, "rounded", "mb-3", "bg-general-2", "sub-image", "position-relative"], ["findqoAdImage", "", "fill", "", "priority", "", 1, "other-images", 3, "ngSrc", "alt"], ["class", "position-absolute centered", 4, "ngIf"], [1, "position-absolute", "centered"]], template: function AdDesktopPhotoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275listener("click", function AdDesktopPhotoComponent_Template_a_click_0_listener() {
          return ctx.openImageGallery();
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275pipe(3, "adImagePipe");
        \u0275\u0275template(4, AdDesktopPhotoComponent_div_4_Template, 6, 0, "div", 3)(5, AdDesktopPhotoComponent_div_5_Template, 2, 3, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, AdDesktopPhotoComponent_Conditional_6_Template, 1, 1, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 5, ctx.ad == null ? null : ctx.ad.images[0] == null ? null : ctx.ad.images[0].url))("alt", ctx.ad == null ? null : ctx.ad.title);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.isVerified) === "1");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.images == null ? null : ctx.ad.images.length) === 2);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.ad == null ? null : ctx.ad.images == null ? null : ctx.ad.images.length) > 2 ? 6 : -1);
      }
    }, dependencies: [ButtonModule, ButtonComponent, MatIconModule, MatIcon, SharedModule, NgForOf, NgIf, NgOptimizedImage, AdImagePreloadDirective, AdImagePipe], styles: ["\n\n.image-1[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: contain;\n}\n.small-photos[_ngcontent-%COMP%] {\n  width: 325px;\n  height: 400px;\n}\n.other-images[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: contain;\n  height: 192px;\n}\n.image-container[_ngcontent-%COMP%] {\n  height: 400px;\n}\n.sub-image[_ngcontent-%COMP%] {\n  height: 192px;\n}\n.gallery-img[_ngcontent-%COMP%] {\n  filter: brightness(0.65);\n}\n.centered[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bottom-left[_ngcontent-%COMP%] {\n  bottom: 5%;\n  left: 5%;\n  transform: none;\n}\n.border-verified[_ngcontent-%COMP%] {\n  border: 1px solid var(--success-3);\n}\n.icon-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.h-25px[_ngcontent-%COMP%] {\n  height: 25px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-desktop-photo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDesktopPhotoComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-desktop-photo", standalone: true, imports: [ButtonModule, MatIconModule, SharedModule], template: `<a class="row justify-content-between gap-3 align-items-center mb-3 px-4 px-xl-0 cursor-pointer" (click)="openImageGallery()">
	<div class="col-sm bg-general-1 rounded image-container position-relative">
		<img findqoAdImage fill priority class="image-1 h-100" [ngSrc]="ad?.images[0]?.url | adImagePipe" [alt]="ad?.title" />

		<div *ngIf="ad?.seller?.isVerified === '1'" class="position-absolute p-2 top-0">
			<div class="p-2 rounded bg-success-1 d-inline-flex align-items-center border-verified h-25px">
				<mat-icon class="icon-14px fg-success-3 me-1">verified_user</mat-icon>
				<span class="text-caption-medium fg-success-3">Verified</span>
			</div>
		</div>

		<div class="position-absolute bottom-left ad-style" *ngIf="ad?.images?.length === 2">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'View all photos'"
				iconPrefix="view-photo"
				[btnClass]="'fs-14px lh-18px w-100 view-photo'"
			></findqo-button>
		</div>
	</div>

	@if (ad?.images?.length > 2) {
		<div *ngIf="ad?.images?.length > 1" class="col-sm-auto small-photos ad-style">
			<div *ngFor="let img of [1, 2]; let i = index" class="rounded mb-3 bg-general-2 sub-image position-relative">
				<img findqoAdImage fill priority class="other-images" [ngSrc]="ad?.images[i + 1]?.url | adImagePipe" [alt]="ad?.title" />

				<div class="position-absolute centered" *ngIf="i === 1">
					<findqo-button
						[btnType]="buttonType.STROKED"
						[label]="'View all photos'"
						iconPrefix="view-photo"
						[btnClass]="'fs-14px lh-18px w-100 view-photo'"
					></findqo-button>
				</div>
			</div>
		</div>
	}
</a>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-desktop-photo/ad-desktop-photo.component.scss */\n.image-1 {\n  width: 100%;\n  object-fit: contain;\n}\n.small-photos {\n  width: 325px;\n  height: 400px;\n}\n.other-images {\n  width: 100%;\n  object-fit: contain;\n  height: 192px;\n}\n.image-container {\n  height: 400px;\n}\n.sub-image {\n  height: 192px;\n}\n.gallery-img {\n  filter: brightness(0.65);\n}\n.centered {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bottom-left {\n  bottom: 5%;\n  left: 5%;\n  transform: none;\n}\n.border-verified {\n  border: 1px solid var(--success-3);\n}\n.icon-14px {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.h-25px {\n  height: 25px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-desktop-photo.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: SharedAdsFacade }], { ad: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdDesktopPhotoComponent, { className: "AdDesktopPhotoComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-desktop-photo/ad-desktop-photo.component.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/core/services/ad-tracking.service.ts
var AdTrackingService = class _AdTrackingService {
  constructor() {
    this.key = "recentAds";
    this.maxAds = 5;
  }
  saveClickedAd(ad) {
    let ads = JSON.parse(localStorage.getItem(this.key) || "[]");
    ads = ads.filter((existing) => existing.id !== ad.id);
    ads.unshift(ad);
    ads = ads.slice(0, this.maxAds);
    localStorage.setItem(this.key, JSON.stringify(ads));
  }
  getRecentAds() {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  }
  static {
    this.\u0275fac = function AdTrackingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdTrackingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdTrackingService, factory: _AdTrackingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdTrackingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/ad-detail/pages/ad-detail/ad-detail.page.ts
var import_dayjs2 = __toESM(require_dayjs_min());
var import_relativeTime2 = __toESM(require_relativeTime());

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-main-headings/ad-main-headings.component.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_relativeTime = __toESM(require_relativeTime());

// apps/findqo-ireland/src/app/shared/components/ads/ad-icon/ad-icon.component.ts
var AdIconComponent = class _AdIconComponent {
  constructor(viewport) {
    this.viewport = viewport;
    this.imagePath = "assets/images/ad-icons/";
  }
  static {
    this.\u0275fac = function AdIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdIconComponent)(\u0275\u0275directiveInject(ViewportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdIconComponent, selectors: [["findqo-ad-icon"]], inputs: { image: "image", label: "label", value: "value", property: "property", translations: "translations" }, standalone: false, decls: 9, vars: 11, consts: [[1, "row", "align-items-center", "gap-2"], [1, "col-lg-auto", "px-0", 3, "ngClass"], ["alt", "Ad Icon", 3, "src"], [1, "col-lg", "text-lg-start", "px-0"], [1, "fs-14px", "lh-18px", "fw-400", "fg-general-3"], [1, "ms-2", "fs-14px", "lh-18px", "fw-400", "fg-general-5"]], template: function AdIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "adTransform");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.viewport.desktop ? "img-container bg-general-1" : "");
        \u0275\u0275advance();
        \u0275\u0275classProp("large-img", ctx.viewport.desktop);
        \u0275\u0275property("src", ctx.imagePath + ctx.image, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.label, ":");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 6, ctx.value, ctx.property, ctx.translations == null ? null : ctx.translations["n176"], ctx.translations == null ? null : ctx.translations["n177"]));
      }
    }, dependencies: [NgClass, AdTransfromPipe], styles: ["\n\n.large-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: var(--general-1);\n}\n.img-container[_ngcontent-%COMP%] {\n  padding: 7px !important;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdIconComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-icon", standalone: false, template: `<div class="row align-items-center gap-2">
	<div class="col-lg-auto px-0" [ngClass]="viewport.desktop ? 'img-container bg-general-1' : ''">
		<img [src]="imagePath + image" [class.large-img]="viewport.desktop" alt="Ad Icon" />
	</div>

	<div class="col-lg text-lg-start px-0">
		<span class="fs-14px lh-18px fw-400 fg-general-3">{{ label }}:</span>

		<span class="ms-2 fs-14px lh-18px fw-400 fg-general-5">{{ value | adTransform : property : translations?.['n176'] : translations?.['n177'] }}</span>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-icon/ad-icon.component.scss */\n.large-img {\n  width: 20px;\n  height: 20px;\n  background-color: var(--general-1);\n}\n.img-container {\n  padding: 7px !important;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-icon.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }], { image: [{
    type: Input
  }], label: [{
    type: Input
  }], value: [{
    type: Input
  }], property: [{
    type: Input
  }], translations: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdIconComponent, { className: "AdIconComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-icon/ad-icon.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-main-headings/ad-main-headings.component.ts
var _c03 = (a0) => ({ user: a0 });
function AdMainHeadingsComponent_div_0_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "adTitle");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.ad), " ");
  }
}
function AdMainHeadingsComponent_div_0_findqo_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 23);
    \u0275\u0275listener("clicked", function AdMainHeadingsComponent_div_0_findqo_button_10_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isFavoritesBtnClicked(ctx_r1.ad.isFavorite === "1"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("add-favorite", ctx_r1.ad.isFavorite === "1");
    \u0275\u0275property("btnType", ctx_r1.buttonType.ICON)("materialIconPrefix", ctx_r1.ad.isFavorite === "1" ? "favorite" : "favorite_border");
  }
}
function AdMainHeadingsComponent_div_0_div_11_ng_container_1_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "removeLastLetter");
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4, "|");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.translations == null ? null : ctx_r1.translations[data_r4 == null ? null : data_r4.name]), " ");
  }
}
function AdMainHeadingsComponent_div_0_div_11_ng_container_1_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3, "|");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translations == null ? null : ctx_r1.translations[data_r4 == null ? null : data_r4.name], " ");
  }
}
function AdMainHeadingsComponent_div_0_div_11_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdMainHeadingsComponent_div_0_div_11_ng_container_1_div_1_span_4_Template, 5, 3, "span", 30)(5, AdMainHeadingsComponent_div_0_div_11_ng_container_1_div_1_span_5_Template, 4, 1, "span", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (data_r4 == null ? null : data_r4.property2) ? (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property] == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property][data_r4 == null ? null : data_r4.property2]) + " " + (ctx_r1.ad == null ? null : ctx_r1.ad.propertySize == null ? null : ctx_r1.ad.propertySize.parameter) : ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (data_r4 == null ? null : data_r4.name) && (data_r4 == null ? null : data_r4.property2) ? (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property] == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property][data_r4 == null ? null : data_r4.property2]) + " " + (ctx_r1.ad == null ? null : ctx_r1.ad.propertySize == null ? null : ctx_r1.ad.propertySize.parameter) : (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property]) === "1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (data_r4 == null ? null : data_r4.name) && (data_r4 == null ? null : data_r4.property2) ? (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property] == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property][data_r4 == null ? null : data_r4.property2]) + " " + (ctx_r1.ad == null ? null : ctx_r1.ad.propertySize == null ? null : ctx_r1.ad.propertySize.parameter) : (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property]) > "1");
  }
}
function AdMainHeadingsComponent_div_0_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdMainHeadingsComponent_div_0_div_11_ng_container_1_div_1_Template, 6, 3, "div", 26);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property]) && (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property]) > "0" && (ctx_r1.ad == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property] == null ? null : ctx_r1.ad[data_r4 == null ? null : data_r4.property][data_r4 == null ? null : data_r4.property2]) !== "0");
  }
}
function AdMainHeadingsComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, AdMainHeadingsComponent_div_0_div_11_ng_container_1_Template, 2, 1, "ng-container", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.badgeProperties);
  }
}
function AdMainHeadingsComponent_div_0_div_15_findqo_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 37);
    \u0275\u0275listener("clicked", function AdMainHeadingsComponent_div_0_div_15_findqo_button_1_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.isFavoritesBtnClicked(ctx_r1.ad.isFavorite === "1"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("add-favorite", ctx_r1.ad.isFavorite === "1");
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("materialIconPrefix", ctx_r1.ad.isFavorite === "1" ? "favorite" : "favorite_border");
  }
}
function AdMainHeadingsComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, AdMainHeadingsComponent_div_0_div_15_findqo_button_1_Template, 1, 4, "findqo-button", 34);
    \u0275\u0275elementStart(2, "findqo-button", 35);
    \u0275\u0275listener("clicked", function AdMainHeadingsComponent_div_0_div_15_Template_findqo_button_clicked_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.shareAd());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "findqo-button", 36);
    \u0275\u0275listener("clicked", function AdMainHeadingsComponent_div_0_div_15_Template_findqo_button_clicked_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReportAd());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r7.user == null ? null : vm_r7.user.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("materialIconPrefix", "share");
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("materialIconPrefix", "flag");
  }
}
function AdMainHeadingsComponent_div_0_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "findqo-ad-icon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badgeDetails_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.translations == null ? null : ctx_r1.translations[badgeDetails_r8 == null ? null : badgeDetails_r8.name])("value", ctx_r1.ad == null ? null : ctx_r1.ad[badgeDetails_r8.property])("image", badgeDetails_r8 == null ? null : badgeDetails_r8.image)("property", badgeDetails_r8 == null ? null : badgeDetails_r8.property)("translations", ctx_r1.translations);
  }
}
function AdMainHeadingsComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, AdMainHeadingsComponent_div_0_div_25_div_1_Template, 2, 5, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (ctx_r1.ad == null ? null : ctx_r1.ad.aisle == null ? null : ctx_r1.ad.aisle.name) === "Motorcylces" ? ctx_r1.badgeMotorCycle : ctx_r1.badgeMotors);
  }
}
function AdMainHeadingsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275template(3, AdMainHeadingsComponent_div_0_h1_3_Template, 3, 3, "h1", 4);
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "adPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275template(10, AdMainHeadingsComponent_div_0_findqo_button_10_Template, 1, 4, "findqo-button", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdMainHeadingsComponent_div_0_div_11_Template, 2, 1, "div", 10);
    \u0275\u0275elementStart(12, "div", 11);
    \u0275\u0275element(13, "findqo-my-ad-stamp", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13);
    \u0275\u0275template(15, AdMainHeadingsComponent_div_0_div_15_Template, 4, 5, "div", 14);
    \u0275\u0275elementStart(16, "span", 15);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275element(20, "findqo-my-ad-stamp", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "findqo-button", 18);
    \u0275\u0275listener("clicked", function AdMainHeadingsComponent_div_0_Template_findqo_button_clicked_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onShowAlertsDialog());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 19)(24, "findqo-button", 20);
    \u0275\u0275listener("clicked", function AdMainHeadingsComponent_div_0_Template_findqo_button_clicked_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onShowAlertsDialog());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(25, AdMainHeadingsComponent_div_0_div_25_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("findqoAdElementVisible", "title");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.ad == null ? null : ctx_r1.ad.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 21, ctx_r1.ad == null ? null : ctx_r1.ad.price, ctx_r1.ad == null ? null : ctx_r1.ad.rentalPeriod), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isPublicPage && (vm_r7.user == null ? null : vm_r7.user.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.ad == null ? null : ctx_r1.ad.aisle == null ? null : ctx_r1.ad.aisle.reference) === (ctx_r1.aisleType == null ? null : ctx_r1.aisleType.RENT_RESIDENTIAL) || (ctx_r1.ad == null ? null : ctx_r1.ad.aisle == null ? null : ctx_r1.ad.aisle.reference) === (ctx_r1.aisleType == null ? null : ctx_r1.aisleType.SALE_RESIDENTIAL));
    \u0275\u0275advance();
    \u0275\u0275classProp("order-1", ctx_r1.viewport.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("adStatus", ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isPublicPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(18, 24, "n677"), " ", ctx_r1.datePosted, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("order-1", ctx_r1.viewport.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("adStatus", ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", "ALERT ME OF SIMILAR PROPERTIES")("btnType", ctx_r1.buttonType.STROKED)("isStopPropagation", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", "ALERT ME")("btnType", ctx_r1.buttonType.STROKED)("isStopPropagation", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.ad == null ? null : ctx_r1.ad.section == null ? null : ctx_r1.ad.section.name) === "Motors");
  }
}
var AdMainHeadingsComponent = class _AdMainHeadingsComponent {
  constructor(platformId, icon, viewport, matDialog, auth, commonFacade, sharedAdsFacade, window2, utility, authService, dialog, ssoPostLoginService) {
    this.platformId = platformId;
    this.icon = icon;
    this.viewport = viewport;
    this.matDialog = matDialog;
    this.auth = auth;
    this.commonFacade = commonFacade;
    this.sharedAdsFacade = sharedAdsFacade;
    this.window = window2;
    this.utility = utility;
    this.authService = authService;
    this.dialog = dialog;
    this.ssoPostLoginService = ssoPostLoginService;
    this.isPublicPage = false;
    this.user$ = this.commonFacade.getUser$();
    this.aisleType = AisleType;
    this.buttonType = ButtonType;
    this.badgeMotors = [
      { property: "kilometer", image: "kilometers.svg", name: "n304" },
      { property: "regionalSpec", image: "region.svg", name: "n425" },
      { property: "isWarranty", image: "warranty.svg", name: "n171" },
      { property: "year", image: "year.svg", name: "n161" },
      { property: "color", image: "color.svg", name: "n178" }
    ];
    this.badgeMotorCycle = [
      { property: "kilometer", image: "kilometers.svg", name: "n304" },
      { property: "engineSizeCc", image: "engine.svg", name: "n722" },
      { property: "color", image: "color.svg", name: "n178" }
    ];
    this.badgeProperties = [
      { property: "bedroomCount", icon: "bedroom", iconClass: "material-icons-outlined", name: "n347" },
      { property: "bathroomCount", icon: "shower", name: "n659" },
      { property: "propertySize", property2: "value", icon: "select_all" }
    ];
  }
  shareAd() {
    const TRANSLATIONS = this.commonFacade.getTranslations();
    const AVALABLE_FROM = this.ad.availableFrom ? TRANSLATIONS?.["n3111"] + ": " + this.commonFacade.getFormattedDate(this.ad.availableFrom) : "";
    if (this.utility.isWebShareSupported()) {
      navigator.share({
        title: this.ad?.title,
        text: `${this.ad?.title}
${TRANSLATIONS?.["n152"]}:  ${+this.ad.price.isPriceOnApplication ? TRANSLATIONS?.["n3311"] : this.ad.price.symbol + this.ad.price.minValue + " " + (this.ad.price.maxValue ? " - " + this.ad.price.maxValue : "")}
${AVALABLE_FROM}
${TRANSLATIONS?.["n3953"]}
`,
        url: this.ad?.adlink ?? this.window.reference.location.href
      }).then(() => {
        console.log("Content shared successfully!");
      }).catch((error) => {
        console.error("Error sharing content:", error);
      });
    } else {
      this.matDialog.open(AdShareDialogComponent, {
        disableClose: true,
        maxWidth: "407px",
        data: { adLink: this.ad.adlink }
      }).afterClosed();
    }
  }
  isFavoritesBtnClicked(isFavoritesBtnEnable) {
    if (isFavoritesBtnEnable) {
      this.sharedAdsFacade.deleteFavouriteAd(this.ad);
    } else {
      this.saveFavorites();
    }
  }
  addToFav() {
    if (this.auth.user()?.id !== this.ad.seller.id) {
      this.ad = __spreadProps(__spreadValues({}, this.ad), {
        isFavorite: "1"
      });
      this.sharedAdsFacade.saveFavouriteAd(this.ad);
    }
  }
  saveFavorites() {
    const IS_LOGGED_IN = this.auth.user()?.accessToken;
    if (IS_LOGGED_IN) {
      this.addToFav();
    } else {
      sessionStorage.setItem(StorageType.POST_LOGIN_SESSION, JSON.stringify({
        type: PostLoginAction.ADD_TO_FAVORITE
      }));
      this.auth.openAuthDialog({ onLogin: this.addToFav.bind(this) });
    }
  }
  onReportAd() {
    if (this.auth.user()) {
      this.openReportDialog();
    } else {
      sessionStorage.setItem(StorageType.POST_LOGIN_SESSION, JSON.stringify({
        type: PostLoginAction.REPORT_AD
      }));
      this.auth.openAuthDialog({ onLogin: this.openReportDialog.bind(this) });
    }
  }
  openReportDialog() {
    this.matDialog.open(AdReportDialogComponent, {
      width: "343px",
      height: "auto",
      maxWidth: "unset",
      data: {
        adId: this.ad?.id
      },
      backdropClass: "inquiry-backdrop"
    });
  }
  onShowAlertsDialog() {
    if (!this.authService.user()) {
      this.authService.openAuthDialog();
      return;
    }
    this.dialog.open(PropertyAlertDialogComponent, {
      disableClose: true,
      panelClass: "property-alert-dialog",
      data: { section: this.ad?.section?.reference, aisle: this.ad?.aisle?.reference, location: this.ad?.location }
    });
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ssoPostLoginService.handlePostLoginWithAction({
        [PostLoginAction.ADD_TO_FAVORITE]: this.addToFav.bind(this),
        [PostLoginAction.REPORT_AD]: this.openReportDialog.bind(this)
      });
    }
    import_dayjs.default.extend(import_relativeTime.default);
    this.datePosted = (0, import_dayjs.default)(+this.ad?.createdAt * 1e3).fromNow();
  }
  static {
    this.\u0275fac = function AdMainHeadingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdMainHeadingsComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(WindowService), \u0275\u0275directiveInject(BrowserUtility), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SsoPostLoginService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdMainHeadingsComponent, selectors: [["findqo-ad-main-headings"]], inputs: { translations: "translations", ad: "ad", isPublicPage: "isPublicPage" }, standalone: false, decls: 2, vars: 5, consts: [["class", "px-3 ps-md-4 ps-xl-0 pe-md-3", 4, "ngIf"], [1, "px-3", "ps-md-4", "ps-xl-0", "pe-md-3"], [1, "row", "mb-2", "justify-content-start", "justify-content-lg-between", "ad-style", 3, "findqoAdElementVisible"], [1, "col-auto", "col-lg-7", "text-start"], ["class", "d-block lh-24px fw-500 fg-general-5 fs-lg-24px lh-lg-28px text-title-20px-medium text-title-lg-24px-medium", 4, "ngIf"], [1, "row", "align-items-center", "gap-2"], [1, "col"], [1, "d-block", "lh-24px", "fg-general-5", "fs-lg-24px", "lh-lg-28px", "text-title-20px-medium", "text-title-lg-24px-medium"], [1, "col-auto", "d-md-none"], ["class", "ads-btn", "btnClass", "ad-header-btn d-inline-block", "ariaLabel", "favorites ad button", 3, "btnType", "materialIconPrefix", "add-favorite", "clicked", 4, "ngIf"], ["class", "row align-items-center mt-3 gap-2 justify-content-start", 4, "ngIf"], [1, "d-lg-block", "d-none", "col-sm-auto", "ms-auto", "px-0", "mt-2"], [3, "adStatus"], [1, "col-lg-5", "text-start", "text-lg-end"], ["class", "d-none d-lg-block", 4, "ngIf"], [1, "d-block", "lh-20px", "fg-general-4", "text-small-12px-regular", "mt-1", "mt-lg-2"], [1, "d-lg-none", "d-block", "col-sm-auto", "ms-auto", "px-0", "mt-2"], [1, "mt-3", "d-none", "d-lg-block"], ["btnClass", "text-body-regular h-100 py-2 w-100 alert-btn-hover", "btnIconClass", "material-symbols-outlined", "materialIconPrefix", "notifications", 3, "clicked", "label", "btnType", "isStopPropagation"], [1, "mt-3", "d-block", "d-lg-none"], ["btnClass", "text-caption-regular py-2 alert-btn-hover", "btnIconClass", "material-symbols-outlined fs-14px", "materialIconPrefix", "notifications", 3, "clicked", "label", "btnType", "isStopPropagation"], ["class", "row gap-0 gap-lg-48 align-items-center", 4, "ngIf"], [1, "d-block", "lh-24px", "fw-500", "fg-general-5", "fs-lg-24px", "lh-lg-28px", "text-title-20px-medium", "text-title-lg-24px-medium"], ["btnClass", "ad-header-btn d-inline-block", "ariaLabel", "favorites ad button", 1, "ads-btn", 3, "clicked", "btnType", "materialIconPrefix"], [1, "row", "align-items-center", "mt-3", "gap-2", "justify-content-start"], [4, "ngFor", "ngForOf"], ["class", "col-auto text-center", 4, "ngIf"], [1, "col-auto", "text-center"], [1, "d-flex", "align-items-center", "text-caption-regular", "text-small-sm-14px-regular"], [1, "fg-general-5", "fs-14px"], ["class", "fg-general-5 ms-1 fs-14px", 4, "ngIf"], [1, "fg-general-5", "ms-1", "fs-14px"], [1, "fg-general-2"], [1, "d-none", "d-lg-block"], ["btnIconClass", "m-0", "btnClass", "fs-14px lh-18px px-0 fg-general-4 share-btn rounded-circle bg-neutral-2", 3, "btnType", "materialIconPrefix", "add-favorite", "clicked", 4, "ngIf"], ["btnIconClass", "m-0", "btnClass", "fs-14px lh-18px px-0 fg-general-4 share-btn ms-lg-2 rounded-circle bg-neutral-2", 3, "clicked", "btnType", "materialIconPrefix"], ["btnIconClass", "m-0 material-icons-outlined", "btnClass", "fs-14px lh-18px px-0 fg-general-4 share-btn ms-lg-2 rounded-circle bg-neutral-2", 3, "clicked", "btnType", "materialIconPrefix"], ["btnIconClass", "m-0", "btnClass", "fs-14px lh-18px px-0 fg-general-4 share-btn rounded-circle bg-neutral-2", 3, "clicked", "btnType", "materialIconPrefix"], [1, "row", "gap-0", "gap-lg-48", "align-items-center"], ["class", "col-4 col-lg-auto text-center mt-2 pe-lg-2", 4, "ngFor", "ngForOf"], [1, "col-4", "col-lg-auto", "text-center", "mt-2", "pe-lg-2"], [1, "d-inline-block", "align-middle", "fs-12px", "fs-lg-14px", 3, "label", "value", "image", "property", "translations"]], template: function AdMainHeadingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdMainHeadingsComponent_div_0_Template, 26, 26, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c03, \u0275\u0275pipeBind1(1, 1, ctx.user$)));
      }
    }, dependencies: [NgForOf, NgIf, AdElementVisibleDirective, ButtonComponent, AdIconComponent, MyAdStampComponent, AsyncPipe, RemoveLastLetterPipe, TranslationsPipe, AdPricePipe, AdTitlePipe], styles: ["\n\n.item-spacing[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .item-spacing[_ngcontent-%COMP%] {\n    gap: 48px;\n  }\n}\n@media (min-width: 992px) {\n  .icon-bg[_ngcontent-%COMP%] {\n    padding: 7.5px;\n    border-radius: 4px;\n    background: var(--general-1);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-main-headings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdMainHeadingsComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-main-headings", standalone: false, template: `<div
	*ngIf="{
		user: user$ | async
	} as vm"
	class="px-3 ps-md-4 ps-xl-0 pe-md-3"
>
	<div class="row mb-2 justify-content-start justify-content-lg-between ad-style" [findqoAdElementVisible]="'title'">
		<div class="col-auto col-lg-7 text-start">
			<h1 class="d-block lh-24px fw-500 fg-general-5 fs-lg-24px lh-lg-28px text-title-20px-medium text-title-lg-24px-medium" *ngIf="ad?.title">
				{{ ad | adTitle }}
			</h1>

			<div class="row align-items-center gap-2">
				<div class="col">
					<span class="d-block lh-24px fg-general-5 fs-lg-24px lh-lg-28px text-title-20px-medium text-title-lg-24px-medium">
						{{ ad?.price | adPrice: ad?.rentalPeriod }}
					</span>
				</div>

				<div class="col-auto d-md-none">
					<findqo-button
						*ngIf="!isPublicPage && vm.user?.id !== ad.seller?.id"
						class="ads-btn"
						btnClass="ad-header-btn d-inline-block"
						ariaLabel="favorites ad button"
						[btnType]="buttonType.ICON"
						[materialIconPrefix]="ad.isFavorite === '1' ? 'favorite' : 'favorite_border'"
						[class.add-favorite]="ad.isFavorite === '1'"
						(clicked)="isFavoritesBtnClicked(ad.isFavorite === '1')"
					></findqo-button>
				</div>
			</div>

			<div
				class="row align-items-center mt-3 gap-2 justify-content-start"
				*ngIf="ad?.aisle?.reference === aisleType?.RENT_RESIDENTIAL || ad?.aisle?.reference === aisleType?.SALE_RESIDENTIAL"
			>
				<ng-container *ngFor="let data of badgeProperties">
					<div class="col-auto text-center" *ngIf="ad?.[data?.property] && ad?.[data?.property] > '0' && ad?.[data?.property]?.[data?.property2] !== '0'">
						<div class="d-flex align-items-center text-caption-regular text-small-sm-14px-regular">
							<span class="fg-general-5 fs-14px">
								{{ data?.property2 ? ad?.[data?.property]?.[data?.property2] + ' ' + ad?.propertySize?.parameter : ad?.[data?.property] }}
							</span>
							<span
								class="fg-general-5 ms-1 fs-14px"
								*ngIf="
									data?.name && data?.property2 ? ad?.[data?.property]?.[data?.property2] + ' ' + ad?.propertySize?.parameter : ad?.[data?.property] === '1'
								"
							>
								{{ translations?.[data?.name] | removeLastLetter }}
								<span class="fg-general-2">|</span>
							</span>
							<span
								class="fg-general-5 ms-1 fs-14px"
								*ngIf="data?.name && data?.property2 ? ad?.[data?.property]?.[data?.property2] + ' ' + ad?.propertySize?.parameter : ad?.[data?.property] > '1'"
							>
								{{ translations?.[data?.name] }}
								<span class="fg-general-2">|</span>
							</span>
						</div>
					</div>
				</ng-container>
			</div>

			<div class="d-lg-block d-none col-sm-auto ms-auto px-0 mt-2" [class.order-1]="viewport.mobile">
				<findqo-my-ad-stamp [adStatus]="ad?.adStatus?.status"></findqo-my-ad-stamp>
			</div>
		</div>

		<div class="col-lg-5 text-start text-lg-end">
			<div class="d-none d-lg-block" *ngIf="!isPublicPage">
				<findqo-button
					[btnType]="buttonType.BASIC"
					[materialIconPrefix]="ad.isFavorite === '1' ? 'favorite' : 'favorite_border'"
					(clicked)="isFavoritesBtnClicked(ad.isFavorite === '1')"
					btnIconClass="m-0"
					btnClass="fs-14px lh-18px px-0 fg-general-4 share-btn rounded-circle bg-neutral-2"
					[class.add-favorite]="ad.isFavorite === '1'"
					*ngIf="vm.user?.id !== ad.seller?.id"
				></findqo-button>

				<findqo-button
					[btnType]="buttonType.BASIC"
					[materialIconPrefix]="'share'"
					(clicked)="shareAd()"
					btnIconClass="m-0"
					btnClass="fs-14px lh-18px px-0 fg-general-4 share-btn ms-lg-2 rounded-circle bg-neutral-2"
				></findqo-button>

				<findqo-button
					[btnType]="buttonType.BASIC"
					[materialIconPrefix]="'flag'"
					(clicked)="onReportAd()"
					btnIconClass="m-0 material-icons-outlined"
					btnClass="fs-14px lh-18px px-0 fg-general-4 share-btn ms-lg-2 rounded-circle bg-neutral-2"
				></findqo-button>
			</div>

			<span class="d-block lh-20px fg-general-4 text-small-12px-regular mt-1 mt-lg-2">{{ 'n677' | translations }} {{ datePosted }}</span>

			<div class="d-lg-none d-block col-sm-auto ms-auto px-0 mt-2" [class.order-1]="viewport.mobile">
				<findqo-my-ad-stamp [adStatus]="ad?.adStatus?.status"></findqo-my-ad-stamp>
			</div>

			<div class="mt-3 d-none d-lg-block">
				<findqo-button
					btnClass="text-body-regular h-100 py-2 w-100 alert-btn-hover"
					btnIconClass="material-symbols-outlined"
					[label]="'ALERT ME OF SIMILAR PROPERTIES'"
					[btnType]="buttonType.STROKED"
					materialIconPrefix="notifications"
					[isStopPropagation]="true"
					(clicked)="onShowAlertsDialog()"
				></findqo-button>
			</div>
			<div class="mt-3 d-block d-lg-none">
				<findqo-button
					btnClass="text-caption-regular py-2 alert-btn-hover"
					btnIconClass="material-symbols-outlined fs-14px"
					[label]="'ALERT ME'"
					[btnType]="buttonType.STROKED"
					materialIconPrefix="notifications"
					[isStopPropagation]="true"
					(clicked)="onShowAlertsDialog()"
				></findqo-button>
			</div>
		</div>
	</div>

	<div class="row gap-0 gap-lg-48 align-items-center" *ngIf="ad?.section?.name === 'Motors'">
		<div
			class="col-4 col-lg-auto text-center mt-2 pe-lg-2"
			*ngFor="let badgeDetails of ad?.aisle?.name === 'Motorcylces' ? badgeMotorCycle : badgeMotors; let last = last"
		>
			<findqo-ad-icon
				class="d-inline-block align-middle fs-12px fs-lg-14px"
				[label]="translations?.[badgeDetails?.name]"
				[value]="ad?.[badgeDetails.property]"
				[image]="badgeDetails?.image"
				[property]="badgeDetails?.property"
				[translations]="translations"
			></findqo-ad-icon>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-main-headings/ad-main-headings.component.scss */\n.item-spacing {\n  gap: 16px;\n}\n@media (min-width: 768px) {\n  .item-spacing {\n    gap: 48px;\n  }\n}\n@media (min-width: 992px) {\n  .icon-bg {\n    padding: 7.5px;\n    border-radius: 4px;\n    background: var(--general-1);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-main-headings.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: IconService }, { type: ViewportService }, { type: MatDialog }, { type: AuthService }, { type: CommonFacade }, { type: SharedAdsFacade }, { type: WindowService }, { type: BrowserUtility }, { type: AuthService }, { type: MatDialog }, { type: SsoPostLoginService }], { translations: [{
    type: Input
  }], ad: [{
    type: Input
  }], isPublicPage: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdMainHeadingsComponent, { className: "AdMainHeadingsComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-main-headings/ad-main-headings.component.ts", lineNumber: 37 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-contacts/ad-contacts.component.ts
function AdContactsComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "adPrice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.ad == null ? null : ctx_r0.ad.price, ctx_r0.ad == null ? null : ctx_r0.ad.rentalPeriod), " ");
  }
}
function AdContactsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function AdContactsComponent_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onWhatsappMessage());
    });
    \u0275\u0275element(2, "mat-icon", 12);
    \u0275\u0275elementEnd()();
  }
}
var AdContactsComponent = class _AdContactsComponent {
  constructor(adsService) {
    this.adsService = adsService;
    this.buttonType = ButtonType;
    this.addPrice$ = this.adsService.isTitleInvisible$();
  }
  onWhatsappMessage() {
    this.adsService.onWhatsappMessage(this.ad);
  }
  onCall() {
    this.adsService.onPhoneCall(this.ad);
  }
  static {
    this.\u0275fac = function AdContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdContactsComponent)(\u0275\u0275directiveInject(AdsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdContactsComponent, selectors: [["findqo-ad-contacts"]], inputs: { ad: "ad", translations: "translations" }, standalone: false, decls: 13, vars: 15, consts: [[1, "bg-basic-1", "position-fixed", "bottom-0", "border-top", "mobile-contacts", "w-100", "p-3", "d-block", "d-lg-none"], ["class", "d-block fs-14px lh-18px fw-400 fg-prim-2 text-center pb-2", 4, "ngIf"], [1, "row", "gap-2", "justify-content-center", "w-100"], [1, "col", "mobile-call"], ["btnClass", "text-small-14px-regular w-100 h-100", "iconPrefix", "phone-solid", 1, "phone", "d-block", 3, "clicked", "label", "btnType"], ["class", "col-auto", 4, "ngIf"], [1, "w-100", "bg-basic-1", "p-sm-3", "desktop-contacts", "ad-style", "mt-3", "d-none", "d-lg-block", 3, "findqoAdElementVisible"], [1, "mt-sm-3"], ["btnClass", "text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn", "iconPrefix", "whatsapp", 1, "phone", "d-block", 3, "clicked", "label", "btnType"], [1, "d-block", "fs-14px", "lh-18px", "fw-400", "fg-prim-2", "text-center", "pb-2"], [1, "col-auto"], ["mat-fab", "", "aria-label", "Whatsapp message", "disableRipple", "true", 1, "whats-app", "bg-general-1", 3, "click"], ["svgIcon", "whatsapp"]], template: function AdContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275template(2, AdContactsComponent_span_2_Template, 3, 4, "span", 1);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "findqo-button", 4);
        \u0275\u0275listener("clicked", function AdContactsComponent_Template_findqo_button_clicked_6_listener() {
          return ctx.onCall();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AdContactsComponent_div_7_Template, 3, 0, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div")(10, "findqo-button", 4);
        \u0275\u0275listener("clicked", function AdContactsComponent_Template_findqo_button_clicked_10_listener() {
          return ctx.onCall();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "findqo-button", 8);
        \u0275\u0275listener("clicked", function AdContactsComponent_Template_findqo_button_clicked_12_listener() {
          return ctx.onWhatsappMessage();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("custom-shadow", \u0275\u0275pipeBind1(1, 11, ctx.addPrice$));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 13, ctx.addPrice$));
        \u0275\u0275advance(4);
        \u0275\u0275property("label", 0 + (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.phone))("btnType", ctx.buttonType.FILLED);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.isWhatsapp) === "1");
        \u0275\u0275advance();
        \u0275\u0275property("findqoAdElementVisible", "contacts");
        \u0275\u0275advance(2);
        \u0275\u0275property("label", 0 + (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.phone))("btnType", ctx.buttonType.FILLED);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", "Chat")("btnType", ctx.buttonType.FILLED);
      }
    }, dependencies: [NgIf, MatFabButton, MatIcon, AdElementVisibleDirective, ButtonComponent, AsyncPipe, AdPricePipe], styles: ["\n\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 40px;\n}\nfindqo-button.phone.w-343px[_ngcontent-%COMP%] {\n  max-width: 343px !important;\n}\n.desktop-contacts[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.mobile-call[_ngcontent-%COMP%] {\n  max-width: 283px;\n}\n.mobile-contacts[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.custom-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-contacts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdContactsComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-contacts", standalone: false, template: `<div class="bg-basic-1 position-fixed bottom-0 border-top mobile-contacts w-100 p-3 d-block d-lg-none" [class.custom-shadow]="addPrice$ | async">
	<!-- TODO:check the price value  -->
	<span class="d-block fs-14px lh-18px fw-400 fg-prim-2 text-center pb-2" *ngIf="addPrice$ | async">
		{{ ad?.price | adPrice: ad?.rentalPeriod }}
	</span>

	<div class="row gap-2 justify-content-center w-100">
		<div class="col mobile-call">
			<findqo-button
				btnClass="text-small-14px-regular w-100 h-100"
				class="phone d-block"
				iconPrefix="phone-solid"
				[label]="0 + ad?.seller?.phone"
				[btnType]="buttonType.FILLED"
				(clicked)="onCall()"
			></findqo-button>
		</div>

		<div class="col-auto" *ngIf="ad?.seller?.isWhatsapp === '1'">
			<button mat-fab aria-label="Whatsapp message" class="whats-app bg-general-1" disableRipple="true" (click)="onWhatsappMessage()">
				<mat-icon svgIcon="whatsapp"></mat-icon>
			</button>
		</div>
	</div>
</div>

<div class="w-100 bg-basic-1 p-sm-3 desktop-contacts ad-style mt-3 d-none d-lg-block" [findqoAdElementVisible]="'contacts'">
	<div>
		<findqo-button
			btnClass="text-small-14px-regular w-100 h-100"
			class="phone d-block"
			iconPrefix="phone-solid"
			[label]="0 + ad?.seller?.phone"
			[btnType]="buttonType.FILLED"
			(clicked)="onCall()"
		></findqo-button>
	</div>

	<div class="mt-sm-3">
		<findqo-button
			btnClass="text-small-14px-regular w-100 h-100 bg-general-1 fg-general-5 chat-btn"
			class="phone d-block"
			iconPrefix="whatsapp"
			[label]="'Chat'"
			[btnType]="buttonType.FILLED"
			(clicked)="onWhatsappMessage()"
		></findqo-button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-contacts/ad-contacts.component.scss */\nfindqo-button.phone {\n  height: 40px;\n}\nfindqo-button.phone.w-343px {\n  max-width: 343px !important;\n}\n.desktop-contacts {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.mobile-call {\n  max-width: 283px;\n}\n.mobile-contacts {\n  z-index: 2;\n}\n.custom-shadow {\n  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-contacts.component.css.map */\n"] }]
  }], () => [{ type: AdsService }], { ad: [{
    type: Input
  }], translations: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdContactsComponent, { className: "AdContactsComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-contacts/ad-contacts.component.ts", lineNumber: 14 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/no-enquiry-dialog/no-enquiry-dialog.component.ts
var NoEnquiryDialogComponent = class _NoEnquiryDialogComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  static {
    this.\u0275fac = function NoEnquiryDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoEnquiryDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoEnquiryDialogComponent, selectors: [["findqo-no-enquiry-dialog"]], standalone: false, decls: 16, vars: 9, consts: [[1, "container", "p-3"], [1, "row", "mx-0", "px-3", "justify-content-end", "align-items-center"], [1, "col-auto", "px-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "align-middle"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "px-4", "py-4", "text-center"], ["ngSrc", "assets/images/enquiries/enquiry-guide.webp", "width", "200", "height", "207", "alt", "", "priority", ""], [1, "mt-4", "heading-3"], [1, "text-body-regular", "fg-general-4", "mt-2"], ["mat-flat-button", "", "color", "primary", 1, "enquiry-button", "text-body-regular", "mt-4", 3, "click"]], template: function NoEnquiryDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275element(4, "mat-icon", 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "img", 6);
        \u0275\u0275elementStart(7, "h3", 7);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function NoEnquiryDialogComponent_Template_button_click_13_listener() {
          return ctx.dialogRef.close(true);
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "n3911"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "n3912"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 7, "n2963"), " ");
      }
    }, dependencies: [MatButton, MatIconButton, MatIcon, NgOptimizedImage, MatDialogClose, TranslationsPipe], styles: ["\n\n.enquiry-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/no-enquiry-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoEnquiryDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-no-enquiry-dialog", standalone: false, template: `<div class="container p-3">
	<div class="row mx-0 px-3 justify-content-end align-items-center">
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="align-middle">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="px-4 py-4 text-center">
		<img ngSrc="assets/images/enquiries/enquiry-guide.webp" width="200" height="207" alt="" priority />

		<h3 class="mt-4 heading-3">{{ 'n3911' | translations }}</h3>
		<p class="text-body-regular fg-general-4 mt-2">{{ 'n3912' | translations }}</p>

		<button mat-flat-button color="primary" class="enquiry-button text-body-regular mt-4" (click)="dialogRef.close(true)">
			{{ 'n2963' | translations }}
		</button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/no-enquiry-dialog/no-enquiry-dialog.component.scss */\n.enquiry-button {\n  width: 100%;\n  max-width: 250px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/no-enquiry-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoEnquiryDialogComponent, { className: "NoEnquiryDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/no-enquiry-dialog/no-enquiry-dialog.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-dealer-summary/ad-dealer-summary.component.ts
function AdDealerSummaryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "p", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", (ctx_r0.ad == null ? null : ctx_r0.ad.agent == null ? null : ctx_r0.ad.agent.picture) || ctx_r0.defaultUserImg);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.ad == null ? null : ctx_r0.ad.contact == null ? null : ctx_r0.ad.contact.name) || (ctx_r0.ad == null ? null : ctx_r0.ad.agent == null ? null : ctx_r0.ad.agent.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 3, "n3641"));
  }
}
var AdDealerSummaryComponent = class _AdDealerSummaryComponent {
  constructor(adDetailFacade, matDialog, adsApi, sharedAdsFacade, adsState, enquiryService) {
    this.adDetailFacade = adDetailFacade;
    this.matDialog = matDialog;
    this.adsApi = adsApi;
    this.sharedAdsFacade = sharedAdsFacade;
    this.adsState = adsState;
    this.enquiryService = enquiryService;
    this.isPublicPage = false;
    this.defaultUserImg = environment.defaultAvatarImg;
    this.isPhoneClicked = false;
    this.appRoute = APP_ROUTE;
    this.sectionType = SectionType;
  }
  onSendInquiry() {
    this.enquiryService.onOpenSendEnquiryDialog(AmplitudeEvent.AD_DETAILS_SEND_ENQUIRY_CLICKED, () => this.openSendInquiryDialog());
  }
  openSendInquiryDialog() {
    this.matDialog.open(SendInquiryDialogComponent, {
      width: "100%",
      height: "100%",
      position: {
        right: "0"
      },
      data: {
        ad: this.ad,
        sharedAdsFacade: this.sharedAdsFacade
      },
      panelClass: "inquiry-form"
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.adsApi.getAdDetail(this.ad.id).subscribe((ad) => {
          this.adsState.setAd(ad);
        });
      }
    });
  }
  showPhoneNumber() {
    this.isPhoneClicked = true;
    this.matDialog.open(NoEnquiryDialogComponent, {
      width: "100%",
      maxWidth: "400px",
      height: "auto"
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.onSendInquiry();
      }
    });
  }
  onCall(adId) {
    this.adDetailFacade.trackPhoneCall(adId);
  }
  ngOnInit() {
    this.isBussinessAccount = this.ad?.seller?.sellerTypeId === SellerType.BUSINESS;
  }
  static {
    this.\u0275fac = function AdDealerSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDealerSummaryComponent)(\u0275\u0275directiveInject(AdDetailFacade), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AdsApi), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(AdsState), \u0275\u0275directiveInject(EnquiryService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdDealerSummaryComponent, selectors: [["findqo-ad-dealer-summary"]], inputs: { ad: "ad", isPublicPage: "isPublicPage" }, standalone: false, decls: 15, vars: 16, consts: [["class", "row gap-2 justify-content-start align-items-center px-3", 4, "ngIf"], [1, "row", "m-3", "justify-content-start", "align-items-start", "gap-3", "p-0", "ps-md-4", "ps-xl-0", "pe-md-3", 3, "ngClass"], [1, "col-auto", "px-0"], ["alt", "Seller profile photo", 3, "src", "ngClass"], [1, "col", "px-0", "overflow-hidden"], [1, "fw-400", "fs-14px", "lh-18px", "fg-general-5", "text-truncate"], [1, "fw-400", "fs-12px", "lh-20px", "fg-general-3"], [1, "text-decoration-none", "d-block", "cursor-pointer", "text-body-regular", "fg-prim-2", "mt-2", "view-list", 3, "routerLink"], [1, "mb-2"], [1, "row", "gap-2", "justify-content-start", "align-items-center", "px-3"], [1, "col-auto"], ["alt", "Agent profile photo", "width", "60", "height", "60", "fetchPriority", "high", 1, "agent-img", 3, "ngSrc"], [1, "col"], [1, "text-body-medium", "fg-general-5", "text-truncate"], [1, "text-small-12px-regular", "fg-general-3"]], template: function AdDealerSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdDealerSummaryComponent_div_0_Template, 9, 5, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "p", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translations");
        \u0275\u0275pipe(10, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(14, "mat-divider", 8);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.agent) && ctx.isBussinessAccount);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.isBussinessAccount ? "dealer-summary p-2" : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("src", (ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller["picture"]) || ctx.defaultUserImg, \u0275\u0275sanitizeUrl)("ngClass", ctx.isBussinessAccount ? "business-img" : "individual-img");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isBussinessAccount ? ctx.ad.seller == null ? null : ctx.ad.seller.name : (ctx.ad == null ? null : ctx.ad.section == null ? null : ctx.ad.section.reference) === ctx.sectionType.PROPERTIES_FOR_SALE ? ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.name : ctx.ad.seller == null ? null : ctx.ad.seller.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate3(" ", ctx.isBussinessAccount ? ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.tagline : \u0275\u0275pipeBind1(9, 10, "n3139"), " (", ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller["liveAds"], " ", \u0275\u0275pipeBind1(10, 12, "n3140"), ") ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", "/" + ctx.appRoute.seller(ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.id, ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.profileId, ctx.ad == null ? null : ctx.ad.seller == null ? null : ctx.ad.seller.sellerTypeId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, "n3138"), " ");
      }
    }, dependencies: [NgClass, NgIf, RouterLink, NgOptimizedImage, MatDivider, TranslationsPipe], styles: ["\n\n.individual-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n  border-radius: 50%;\n}\n.business-img[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.view-list[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 40px;\n  line-height: 40px;\n}\n.agent-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n}\n.dealer-summary[_ngcontent-%COMP%] {\n  background-color: var(--general-1);\n  border-radius: 4px;\n}\n.mat-icon.phone-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-inline-end: 8px;\n  font-size: 18px;\n}\n.mw-343px[_ngcontent-%COMP%] {\n  max-width: 343px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-dealer-summary.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDealerSummaryComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-dealer-summary", standalone: false, template: `<div class="row gap-2 justify-content-start align-items-center px-3" *ngIf="ad?.agent && isBussinessAccount">
	<div class="col-auto">
		<img [ngSrc]="ad?.agent?.picture || defaultUserImg" alt="Agent profile photo" class="agent-img" width="60" height="60" fetchPriority="high" />
	</div>

	<div class="col">
		<p class="text-body-medium fg-general-5 text-truncate">
			{{ ad?.contact?.name || ad?.agent?.name }}
		</p>

		<p class="text-small-12px-regular fg-general-3">{{ 'n3641' | translations }}</p>
	</div>
</div>

<div class="row m-3 justify-content-start align-items-start gap-3 p-0 ps-md-4 ps-xl-0 pe-md-3" [ngClass]="isBussinessAccount ? 'dealer-summary p-2' : ''">
	<div class="col-auto px-0">
		<img [src]="ad?.seller?.['picture'] || defaultUserImg" alt="Seller profile photo" [ngClass]="isBussinessAccount ? 'business-img' : 'individual-img'" />
	</div>

	<div class="col px-0 overflow-hidden">
		<p class="fw-400 fs-14px lh-18px fg-general-5 text-truncate">
			{{ isBussinessAccount ? ad.seller?.name : ad?.section?.reference === sectionType.PROPERTIES_FOR_SALE ? ad?.contact?.name : ad.seller?.name }}
		</p>

		<p class="fw-400 fs-12px lh-20px fg-general-3">
			{{ isBussinessAccount ? ad?.seller?.tagline : ('n3139' | translations) }} ({{ ad?.seller?.['liveAds'] }} {{ 'n3140' | translations }})
		</p>

		<a
			class="text-decoration-none d-block cursor-pointer text-body-regular fg-prim-2 mt-2 view-list"
			[routerLink]="'/' + appRoute.seller(ad?.seller?.id, ad?.seller?.profileId, ad?.seller?.sellerTypeId)"
		>
			{{ 'n3138' | translations }}
		</a>
	</div>
</div>

<mat-divider class="mb-2"></mat-divider>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-dealer-summary/ad-dealer-summary.component.scss */\n.individual-img {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n  border-radius: 50%;\n}\n.business-img {\n  width: 54px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.view-list {\n  width: fit-content;\n  height: 40px;\n  line-height: 40px;\n}\n.agent-img {\n  object-fit: cover;\n  border-radius: 50%;\n}\n.dealer-summary {\n  background-color: var(--general-1);\n  border-radius: 4px;\n}\n.mat-icon.phone-icon {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-inline-end: 8px;\n  font-size: 18px;\n}\n.mw-343px {\n  max-width: 343px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-dealer-summary.component.css.map */\n"] }]
  }], () => [{ type: AdDetailFacade }, { type: MatDialog }, { type: AdsApi }, { type: SharedAdsFacade }, { type: AdsState }, { type: EnquiryService }], { ad: [{
    type: Input
  }], isPublicPage: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdDealerSummaryComponent, { className: "AdDealerSummaryComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-dealer-summary/ad-dealer-summary.component.ts", lineNumber: 21 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/v2/components/ad-contacts-v2/ad-contacts-v2.component.ts
var _c04 = (a0) => ({ user: a0 });
var _c1 = () => ["sold", "property-occupied", "sale-agreed", "expired"];
function AdContactsV2Component_ng_container_0_div_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "adPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, ctx_r1.ad == null ? null : ctx_r1.ad.price, ctx_r1.ad == null ? null : ctx_r1.ad.rentalPeriod));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.ad == null ? null : ctx_r1.ad.title);
  }
}
function AdContactsV2Component_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AdContactsV2Component_ng_container_0_div_1_Conditional_1_Template, 6, 5, "div", 18);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementStart(3, "div", 19)(4, "findqo-button", 20);
    \u0275\u0275pipe(5, "translations");
    \u0275\u0275listener("clicked", function AdContactsV2Component_ng_container_0_div_1_Template_findqo_button_clicked_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendInquiry(ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contactNumberMobile_r3 = \u0275\u0275reference(24);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPrice ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone) && !+(ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.isEmailOnly) ? contactNumberMobile_r3 : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone) ? "col" : "");
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 6, "n2963"))("btnType", ctx_r1.buttonType.FILLED)("isStopPropagation", true);
  }
}
function AdContactsV2Component_ng_container_0_ng_container_3_ng_template_10_Template(rf, ctx) {
}
function AdContactsV2Component_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 7);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "p", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AdContactsV2Component_ng_container_0_ng_container_3_ng_template_10_Template, 0, 0, "ng-template", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contactNumber_r4 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSrc", (ctx_r1.ad == null ? null : ctx_r1.ad.agent == null ? null : ctx_r1.ad.agent.picture) || ctx_r1.defaultAvatarImg);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.name) || (ctx_r1.ad == null ? null : ctx_r1.ad.agent == null ? null : ctx_r1.ad.agent.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "n3641"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone) && !+(ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.isEmailOnly) ? contactNumber_r4 : null);
  }
}
function AdContactsV2Component_ng_container_0_findqo_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 27);
    \u0275\u0275pipe(1, "adStatusTooltip");
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275listener("clicked", function AdContactsV2Component_ng_container_0_findqo_button_18_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendInquiry(ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(1, 3, ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status, ctx_r1.getMessage))("label", \u0275\u0275pipeBind1(2, 6, "n2963"))("btnType", ctx_r1.buttonType.FILLED);
  }
}
function AdContactsV2Component_ng_container_0_ng_template_19_Template(rf, ctx) {
}
function AdContactsV2Component_ng_container_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "findqo-google-ad");
    \u0275\u0275elementEnd();
  }
}
function AdContactsV2Component_ng_container_0_ng_template_21_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AdContactsV2Component_ng_container_0_ng_template_21_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showPhoneNumber(ctx_r1.ad == null ? null : ctx_r1.ad.id));
    });
    \u0275\u0275elementStart(1, "mat-icon", 30);
    \u0275\u0275text(2, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "maskPhone");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", \u0275\u0275pureFunction0(6, _c1).includes(ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status))("ngClass", ctx_r1.isBussinessAccount ? "mb-3" : " mt-1 mb-2");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.defaultCountryCode, " ", \u0275\u0275pipeBind1(5, 4, ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone), "");
  }
}
function AdContactsV2Component_ng_container_0_ng_template_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275listener("click", function AdContactsV2Component_ng_container_0_ng_template_21_ng_template_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCall(ctx_r1.ad.id));
    });
    \u0275\u0275elementStart(1, "span", 32)(2, "mat-icon", 30);
    \u0275\u0275text(3, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r8 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("display-none", \u0275\u0275pureFunction0(6, _c1).includes(ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status) || (vm_r8.user == null ? null : vm_r8.user.businessProfile == null ? null : vm_r8.user.businessProfile.id) === (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275property("href", "tel:" + ctx_r1.defaultCountryCode + (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone), \u0275\u0275sanitizeUrl)("ngClass", ctx_r1.isBussinessAccount ? "mb-3" : " mt-1 mb-2");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.defaultCountryCode, " ", ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone, "");
  }
}
function AdContactsV2Component_ng_container_0_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdContactsV2Component_ng_container_0_ng_template_21_button_0_Template, 6, 7, "button", 28)(1, AdContactsV2Component_ng_container_0_ng_template_21_ng_template_1_Template, 6, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const showPhoneNumberTemplate_r9 = \u0275\u0275reference(2);
    const vm_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.isPhoneClicked && (vm_r8.user == null ? null : vm_r8.user.businessProfile == null ? null : vm_r8.user.businessProfile.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id))("ngIfElse", showPhoneNumberTemplate_r9);
  }
}
function AdContactsV2Component_ng_container_0_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275listener("click", function AdContactsV2Component_ng_container_0_ng_template_23_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCall(ctx_r1.ad.id));
    });
    \u0275\u0275elementStart(1, "span", 32)(2, "mat-icon", 30);
    \u0275\u0275text(3, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Call");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r8 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("display-none", \u0275\u0275pureFunction0(4, _c1).includes(ctx_r1.ad == null ? null : ctx_r1.ad.adStatus == null ? null : ctx_r1.ad.adStatus.status) || (vm_r8.user == null ? null : vm_r8.user.businessProfile == null ? null : vm_r8.user.businessProfile.id) === (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275property("href", "tel:" + ctx_r1.defaultCountryCode + (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone), \u0275\u0275sanitizeUrl)("ngClass", ctx_r1.isBussinessAccount ? "mb-3" : " mt-lg-1 mb-2");
  }
}
function AdContactsV2Component_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdContactsV2Component_ng_container_0_div_1_Template, 6, 8, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275template(3, AdContactsV2Component_ng_container_0_ng_container_3_Template, 11, 6, "ng-container", 3);
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7);
    \u0275\u0275element(6, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "p", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translations");
    \u0275\u0275pipe(13, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275template(18, AdContactsV2Component_ng_container_0_findqo_button_18_Template, 3, 8, "findqo-button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdContactsV2Component_ng_container_0_ng_template_19_Template, 0, 0, "ng-template", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdContactsV2Component_ng_container_0_Conditional_20_Template, 2, 0, "div", 16)(21, AdContactsV2Component_ng_container_0_ng_template_21_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, AdContactsV2Component_ng_container_0_ng_template_23_Template, 6, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r8 = ctx.ngIf;
    const contactNumber_r4 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r8.user == null ? null : vm_r8.user.businessProfile == null ? null : vm_r8.user.businessProfile.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.ad == null ? null : ctx_r1.ad.agent) && ctx_r1.isBussinessAccount);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.isBussinessAccount ? "dealer-summary p-2" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (ctx_r1.ad == null ? null : ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.picture) || ctx_r1.defaultAvatarImg, \u0275\u0275sanitizeUrl)("ngClass", ctx_r1.isBussinessAccount ? "business-img" : "individual-img");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isBussinessAccount ? ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.name : (ctx_r1.ad == null ? null : ctx_r1.ad.section == null ? null : ctx_r1.ad.section.reference) === ctx_r1.sectionType.PROPERTIES_FOR_SALE ? ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.name : ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.isBussinessAccount ? ctx_r1.ad == null ? null : ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.tagline : \u0275\u0275pipeBind1(12, 14, "n3139"), " (", ctx_r1.ad == null ? null : ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller["liveAds"], " ", \u0275\u0275pipeBind1(13, 16, "n3140"), ") ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/" + ctx_r1.appRoute.seller(ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id, ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.profileId, ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.sellerTypeId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "n3138"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (vm_r8.user == null ? null : vm_r8.user.businessProfile == null ? null : vm_r8.user.businessProfile.id) !== (ctx_r1.ad.seller == null ? null : ctx_r1.ad.seller.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.phone) && !ctx_r1.isBussinessAccount && !+(ctx_r1.ad == null ? null : ctx_r1.ad.contact == null ? null : ctx_r1.ad.contact.isEmailOnly) ? contactNumber_r4 : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isProduction && !ctx_r1.isPublicPage ? 20 : -1);
  }
}
var AdContactsV2Component = class _AdContactsV2Component {
  constructor(viewport, matDialog, commonFacade, adsApi, adsState, sharedAdsFacade, enquiryService, snackService) {
    this.viewport = viewport;
    this.matDialog = matDialog;
    this.commonFacade = commonFacade;
    this.adsApi = adsApi;
    this.adsState = adsState;
    this.sharedAdsFacade = sharedAdsFacade;
    this.enquiryService = enquiryService;
    this.snackService = snackService;
    this.isPublicPage = false;
    this.user$ = this.commonFacade.getUser$();
    this.defaultAvatarImg = environment.defaultAvatarImg;
    this.sectionType = SectionType;
    this.buttonType = ButtonType;
    this.appRoute = APP_ROUTE;
    this.isPhoneClicked = false;
    this.isProduction = environment.production;
    this.defaultCountryCode = "+353";
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
  openSendInquiryDialog() {
    this.matDialog.open(SendInquiryDialogComponent, {
      width: "100%",
      height: "100%",
      position: {
        right: "0"
      },
      data: {
        ad: this.ad,
        sharedAdsFacade: this.sharedAdsFacade
      },
      panelClass: "inquiry-form"
    }).afterClosed().subscribe((res) => {
      if (res) {
        this.inquiryData = res?.inquiryData;
        this.adsApi.getAdDetail(this.ad.id).subscribe((ad) => {
          this.adsState.setAd(ad);
        });
      }
    });
  }
  showPhoneNumber(adId) {
    this.adsApi.trackPhoneCall(adId).subscribe();
    this.isPhoneClicked = true;
  }
  onCall(adId) {
    if (!this.isPhoneClicked) {
      this.adsApi.trackPhoneCall(adId).subscribe();
    }
  }
  ngOnInit() {
    this.isPhoneClicked = false;
    this.isBussinessAccount = this.ad?.seller?.sellerTypeId === SellerType.BUSINESS;
  }
  static {
    this.\u0275fac = function AdContactsV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdContactsV2Component)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(AdsApi), \u0275\u0275directiveInject(AdsState), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(EnquiryService), \u0275\u0275directiveInject(SnackService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdContactsV2Component, selectors: [["findqo-ad-contacts-v2"]], inputs: { ad: "ad", isPublicPage: "isPublicPage", showPrice: "showPrice" }, standalone: false, decls: 2, vars: 5, consts: [["contactNumber", ""], ["contactNumberMobile", ""], ["showPhoneNumberTemplate", ""], [4, "ngIf"], ["class", "d-flex d-lg-none row p-3 bg-basic-1 position-fixed bottom-0 border-top mobile-contacts w-100 gap-1", 4, "ngIf"], [1, "d-none", "d-lg-block", "w-100", "bg-basic-1", "p-sm-3", "desktop-contacts", "ad-style", "mt-3"], [1, "row", "justify-content-start", "align-items-start", "gap-3", 3, "ngClass"], [1, "col-auto"], ["alt", "Seller profile photo", 3, "src", "ngClass"], [1, "col", "overflow-hidden"], [1, "text-body-regular", "fg-general-5", "text-truncate"], [1, "text-caption-regular", "fg-general-3"], [1, "text-decoration-none", "d-block", "text-body-regular", "view-listing", "cursor-pointer", "fg-prim-2", "mt-2", 3, "routerLink"], [1, "mt-sm-3"], ["id", "ad-detail-send-enquiry", "btnClass", "text-body-regular w-100 h-100", "class", "phone d-block", 3, "matTooltip", "label", "btnType", "clicked", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "m-3"], [1, "d-flex", "d-lg-none", "row", "p-3", "bg-basic-1", "position-fixed", "bottom-0", "border-top", "mobile-contacts", "w-100", "gap-1"], [1, "d-flex", "d-md-none", "flex-column", "align-items-center", "gap-1", "justify-content-center"], [3, "ngClass"], ["id", "ad-detail-send-enquiry", "btnClass", "text-small-14px-regular w-100 h-100", 1, "phone", "d-block", "w-100", "mx-auto", 3, "clicked", "label", "btnType", "isStopPropagation"], [1, "fg-prim-2", "text-small-14px-regular", "fw-400"], [1, "fg-general-5", "text-small-14px-regular", "fw-400", "text-center"], [1, "row", "gap-3", "justify-content-start", "align-items-center", "mb-3"], ["alt", "Agent profile photo", "width", "60", "height", "60", "fetchPriority", "high", 1, "agent-img", 3, "ngSrc"], [1, "text-body-medium", "fg-general-5", "text-truncate"], [1, "text-small-12px-regular", "fg-general-3"], ["id", "ad-detail-send-enquiry", "btnClass", "text-body-regular w-100 h-100", 1, "phone", "d-block", 3, "clicked", "matTooltip", "label", "btnType"], ["id", "ad-detail-phone-number", "mat-stroked-button", "", "color", "primary", "class", "mx-auto d-block w-100 text-body-regular ph-call", 3, "disabled", "ngClass", "click", 4, "ngIf", "ngIfElse"], ["id", "ad-detail-phone-number", "mat-stroked-button", "", "color", "primary", 1, "mx-auto", "d-block", "w-100", "text-body-regular", "ph-call", 3, "click", "disabled", "ngClass"], ["matPrefix", "", 1, "material-icons", "phone-icon"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "mx-auto", "w-100", "ph-call", 3, "click", "href", "ngClass"], [1, "d-block", "align-middle", "text-body-regular"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "mx-auto", "w-50", "ph-call", 3, "click", "href", "ngClass"]], template: function AdContactsV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdContactsV2Component_ng_container_0_Template, 25, 20, "ng-container", 3);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c04, \u0275\u0275pipeBind1(1, 1, ctx.user$)));
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatAnchor, MatButton, MatIcon, RouterLink, NgOptimizedImage, ButtonComponent, GoogleAdComponent, MatTooltip, AsyncPipe, AdStatusTooltipPipe, TranslationsPipe, AdPricePipe, MaskPhonePipe], styles: ["\n\n.individual-img[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.business-img[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 100%;\n}\nfindqo-button.phone.w-343px[_ngcontent-%COMP%] {\n  max-width: 343px !important;\n}\n.desktop-contacts[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-2);\n  border-radius: 4px;\n}\n.mobile-contacts[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.report-ad[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-top: 16px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n.report-ad[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-inline-end: 8px;\n}\n.agent-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 50%;\n}\n.dealer-summary[_ngcontent-%COMP%] {\n  background-color: var(--general-1);\n  border-radius: 8px;\n}\n.mat-icon.phone-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-inline-end: 8px;\n  font-size: 18px;\n}\na.view-listing[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n}\n.display-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-contacts-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdContactsV2Component, [{
    type: Component,
    args: [{ selector: "findqo-ad-contacts-v2", standalone: false, template: `<ng-container
	*ngIf="{
		user: user$ | async
	} as vm"
>
	<div
		class="d-flex d-lg-none row p-3 bg-basic-1 position-fixed bottom-0 border-top mobile-contacts w-100 gap-1"
		*ngIf="vm.user?.businessProfile?.id !== ad.seller?.id"
	>
		@if (showPrice) {
			<div class="d-flex d-md-none flex-column align-items-center gap-1 justify-content-center">
				<span class="fg-prim-2 text-small-14px-regular fw-400">{{ ad?.price | adPrice: ad?.rentalPeriod }}</span>
				<span class="fg-general-5 text-small-14px-regular fw-400 text-center">{{ ad?.title }}</span>
			</div>
		}

		<div [ngTemplateOutlet]="ad?.contact?.phone && !+ad?.contact?.isEmailOnly ? contactNumberMobile : null"></div>
		<div [ngClass]="ad?.contact?.phone ? 'col' : ''">
			<findqo-button
				id="ad-detail-send-enquiry"
				btnClass="text-small-14px-regular w-100 h-100"
				class="phone d-block w-100 mx-auto"
				[label]="'n2963' | translations"
				[btnType]="buttonType.FILLED"
				(clicked)="onSendInquiry(ad?.adStatus?.status)"
				[isStopPropagation]="true"
			></findqo-button>
		</div>
	</div>
	<div class="d-none d-lg-block w-100 bg-basic-1 p-sm-3 desktop-contacts ad-style mt-3">
		<ng-container *ngIf="ad?.agent && isBussinessAccount">
			<div class="row gap-3 justify-content-start align-items-center mb-3">
				<div class="col-auto">
					<img [ngSrc]="ad?.agent?.picture || defaultAvatarImg" alt="Agent profile photo" class="agent-img" width="60" height="60" fetchPriority="high" />
				</div>

				<div class="col overflow-hidden">
					<p class="text-body-medium fg-general-5 text-truncate">
						{{ ad?.contact?.name || ad?.agent?.name }}
					</p>

					<p class="text-small-12px-regular fg-general-3">{{ 'n3641' | translations }}</p>
				</div>
			</div>

			<ng-template [ngTemplateOutlet]="ad?.contact?.phone && !+ad?.contact?.isEmailOnly ? contactNumber : null"></ng-template>
		</ng-container>

		<div class="row justify-content-start align-items-start gap-3" [ngClass]="isBussinessAccount ? 'dealer-summary p-2' : ''">
			<div class="col-auto">
				<img [src]="ad?.seller?.picture || defaultAvatarImg" alt="Seller profile photo" [ngClass]="isBussinessAccount ? 'business-img' : 'individual-img'" />
			</div>
			<div class="col overflow-hidden">
				<p class="text-body-regular fg-general-5 text-truncate">
					{{ isBussinessAccount ? ad.seller?.name : ad?.section?.reference === sectionType.PROPERTIES_FOR_SALE ? ad?.contact?.name : ad.seller?.name }}
				</p>

				<p class="text-caption-regular fg-general-3">
					{{ isBussinessAccount ? ad?.seller?.tagline : ('n3139' | translations) }} ({{ ad?.seller?.['liveAds'] }} {{ 'n3140' | translations }})
				</p>

				<a
					class="text-decoration-none d-block text-body-regular view-listing cursor-pointer fg-prim-2 mt-2"
					[routerLink]="'/' + appRoute.seller(ad.seller?.id, ad.seller?.profileId, ad.seller?.sellerTypeId)"
				>
					{{ 'n3138' | translations }}
				</a>
			</div>
		</div>

		<div class="mt-sm-3">
			<findqo-button
				id="ad-detail-send-enquiry"
				[matTooltip]="ad?.adStatus?.status | adStatusTooltip: getMessage"
				btnClass="text-body-regular w-100 h-100"
				class="phone d-block"
				[label]="'n2963' | translations"
				[btnType]="buttonType.FILLED"
				(clicked)="onSendInquiry(ad?.adStatus?.status)"
				*ngIf="vm.user?.businessProfile?.id !== ad.seller?.id"
			></findqo-button>
		</div>
		<ng-template [ngTemplateOutlet]="ad?.contact?.phone && !isBussinessAccount && !+ad?.contact?.isEmailOnly ? contactNumber : null"></ng-template>
	</div>

	@if (isProduction && !isPublicPage) {
		<div class="m-3">
			<findqo-google-ad></findqo-google-ad>
		</div>
	}

	<ng-template #contactNumber>
		<button
			id="ad-detail-phone-number"
			[disabled]="['sold', 'property-occupied', 'sale-agreed', 'expired'].includes(ad?.adStatus?.status)"
			mat-stroked-button
			color="primary"
			*ngIf="!isPhoneClicked && vm.user?.businessProfile?.id !== ad.seller?.id; else showPhoneNumberTemplate"
			(click)="showPhoneNumber(ad?.id)"
			class="mx-auto d-block w-100 text-body-regular ph-call"
			[ngClass]="isBussinessAccount ? 'mb-3' : ' mt-1 mb-2'"
		>
			<mat-icon class="material-icons phone-icon" matPrefix>call</mat-icon>
			<span>{{ defaultCountryCode }} {{ ad?.contact?.phone | maskPhone }}</span>
		</button>

		<ng-template #showPhoneNumberTemplate>
			<a
				[class.display-none]="
					['sold', 'property-occupied', 'sale-agreed', 'expired'].includes(ad?.adStatus?.status) || vm.user?.businessProfile?.id === ad.seller?.id
				"
				mat-stroked-button
				color="primary"
				[href]="'tel:' + defaultCountryCode + ad?.contact?.phone"
				class="mx-auto w-100 ph-call"
				type="button"
				[ngClass]="isBussinessAccount ? 'mb-3' : ' mt-1 mb-2'"
				(click)="onCall(ad.id)"
			>
				<span class="d-block align-middle text-body-regular">
					<mat-icon class="material-icons phone-icon" matPrefix>call</mat-icon>

					<span>{{ defaultCountryCode }} {{ ad?.contact?.phone }}</span>
				</span>
			</a>
		</ng-template>
	</ng-template>
	<ng-template #contactNumberMobile>
		<a
			[class.display-none]="
				['sold', 'property-occupied', 'sale-agreed', 'expired'].includes(ad?.adStatus?.status) || vm.user?.businessProfile?.id === ad.seller?.id
			"
			mat-stroked-button
			color="primary"
			[href]="'tel:' + defaultCountryCode + ad?.contact?.phone"
			class="mx-auto w-50 ph-call"
			type="button"
			[ngClass]="isBussinessAccount ? 'mb-3' : ' mt-lg-1 mb-2'"
			(click)="onCall(ad.id)"
		>
			<span class="d-block align-middle text-body-regular">
				<mat-icon class="material-icons phone-icon" matPrefix>call</mat-icon>

				<span>Call</span>
			</span>
		</a>
	</ng-template>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/v2/components/ad-contacts-v2/ad-contacts-v2.component.scss */\n.individual-img {\n  width: 60px;\n  height: 60px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.business-img {\n  width: 54px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\nfindqo-button.phone {\n  height: 36px;\n  width: 100%;\n}\nfindqo-button.phone.w-343px {\n  max-width: 343px !important;\n}\n.desktop-contacts {\n  border: 1px solid var(--neutral-2);\n  border-radius: 4px;\n}\n.mobile-contacts {\n  z-index: 2;\n}\n.report-ad {\n  height: 40px;\n  margin-top: 16px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n.report-ad .mat-icon {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-inline-end: 8px;\n}\n.agent-img {\n  object-fit: cover;\n  border-radius: 50%;\n}\n.dealer-summary {\n  background-color: var(--general-1);\n  border-radius: 8px;\n}\n.mat-icon.phone-icon {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  margin-inline-end: 8px;\n  font-size: 18px;\n}\na.view-listing {\n  height: 40px;\n  line-height: 40px;\n}\n.display-none {\n  display: none !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-contacts-v2.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: MatDialog }, { type: CommonFacade }, { type: AdsApi }, { type: AdsState }, { type: SharedAdsFacade }, { type: EnquiryService }, { type: SnackService }], { ad: [{
    type: Input
  }], isPublicPage: [{
    type: Input
  }], showPrice: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdContactsV2Component, { className: "AdContactsV2Component", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/v2/components/ad-contacts-v2/ad-contacts-v2.component.ts", lineNumber: 23 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-not-found/ad-not-found.component.ts
var _c05 = () => ({ translation: "n3701" });
var AdNotFoundComponent = class _AdNotFoundComponent {
  static {
    this.\u0275fac = function AdNotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdNotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdNotFoundComponent, selectors: [["findqo-ad-not-found"]], standalone: false, decls: 12, vars: 14, consts: [[1, "container", "d-flex", "justify-content-center", "align-items-center", "w-100", "h-100", "py-sm-0"], [1, "py-5", "text-center"], ["width", "150", "height", "150", "alt", "ad not found", 3, "ngSrc"], [1, "fg-general-5", "text-title-24px-medium", "mt-4", "mb-2"], [1, "text-body-regular", "fg-general-4"], [1, "mt-4", "text-body-regular", "fg-general-4", "text-link", 3, "innerHTML"]], template: function AdNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementStart(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "p", 5);
        \u0275\u0275pipe(10, "translations");
        \u0275\u0275pipe(11, "linkify");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngSrc", "assets/images/ad-not-found/ad-not-found.webp");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "n3700"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "n3699"));
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind2(11, 10, \u0275\u0275pipeBind1(10, 8, "n3701"), \u0275\u0275pureFunction0(13, _c05)), \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [NgOptimizedImage, TranslationsPipe, LinkifyPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-not-found.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdNotFoundComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-not-found", standalone: false, template: `<div class="container d-flex justify-content-center align-items-center w-100 h-100 py-sm-0">
	<div class="py-5 text-center">
		<img [ngSrc]="'assets/images/ad-not-found/ad-not-found.webp'" width="150" height="150" alt="ad not found" />

		<p class="fg-general-5 text-title-24px-medium mt-4 mb-2">{{ 'n3700' | translations }}</p>

		<p class="text-body-regular fg-general-4">{{ 'n3699' | translations }}</p>

		<p class="mt-4 text-body-regular fg-general-4 text-link" [innerHTML]="'n3701' | translations | linkify: { translation: 'n3701' }"></p>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-not-found/ad-not-found.component.scss */\n.container {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-not-found.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdNotFoundComponent, { className: "AdNotFoundComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-not-found/ad-not-found.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/pages/ad-detail/ad-detail.page.ts
var _c06 = ["subDetails"];
var _c12 = (a0, a1) => ({ ad: a0, user: a1 });
var _c2 = (a0) => [a0];
function AdDetailPage_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function AdDetailPage_ng_container_0_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "findqo-ad-breadcrumbs", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ad", vm_r2.ad);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_findqo_ad_summary_header_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-summary-header", 12);
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ad", vm_r2.ad);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "findqo-ad-extras", 46);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("extras", ctx_r2.extras)("section", vm_r2.ad == null ? null : vm_r2.ad.section == null ? null : vm_r2.ad.section.name)("translations", \u0275\u0275pipeBind1(2, 3, ctx_r2.translations$));
  }
}
function AdDetailPage_ng_container_0_ng_template_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "mat-divider", 16)(2, "findqo-ad-video", 47);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("translations", \u0275\u0275pipeBind1(3, 2, ctx_r2.translations$))("ad", vm_r2.ad);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_mat_divider_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 16);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 50);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "findqo-button", 51);
    \u0275\u0275pipe(8, "translations");
    \u0275\u0275listener("clicked", function AdDetailPage_ng_container_0_ng_template_2_div_37_Template_findqo_button_clicked_7_listener() {
      \u0275\u0275restoreView(_r4);
      const vm_r2 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDownloadBrochure(vm_r2.ad.brochure));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "n3426"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "n3427"));
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r2.buttonType.BASIC)("label", \u0275\u0275pipeBind1(8, 9, "n3428"))("btnClass", "text-body-regular fg-prim-2 px-0 py-0 ");
  }
}
function AdDetailPage_ng_container_0_ng_template_2_mat_divider_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 16);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "findqo-ad-ber", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "n3429"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ber", vm_r2.ad.ber);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_findqo_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 53);
    \u0275\u0275listener("clicked", function AdDetailPage_ng_container_0_ng_template_2_findqo_button_60_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const vm_r2 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReportAd(vm_r2 == null ? null : vm_r2.ad));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("btnType", ctx_r2.buttonType.BASIC)("label", "Report Ad");
  }
}
function AdDetailPage_ng_container_0_ng_template_2_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "findqo-google-ad");
    \u0275\u0275elementEnd();
  }
}
function AdDetailPage_ng_container_0_ng_template_2_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275element(2, "findqo-other-ad-list", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", "Recently Viewed Ads")("adList", ctx_r2.recentAds)("section", vm_r2.ad.section.reference)("aisle", vm_r2.ad.aisle.reference);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 57);
    \u0275\u0275element(2, "findqo-other-ad-list", 56);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 4, "n685"))("adList", \u0275\u0275pipeBind1(4, 6, ctx_r2.relatedAdList$))("section", vm_r2.ad.section.reference)("aisle", vm_r2.ad.aisle.reference);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_findqo_ad_contacts_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-contacts", 17);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ad", vm_r2.ad)("translations", \u0275\u0275pipeBind1(1, 2, ctx_r2.translations$));
  }
}
function AdDetailPage_ng_container_0_ng_template_2_findqo_ad_contacts_v2_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-contacts-v2", 58);
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ad", vm_r2.ad)("isPublicPage", ctx_r2.isPublicPage)("showPrice", ctx_r2.showFooterContent);
  }
}
function AdDetailPage_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "findqo-ad-header", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, AdDetailPage_ng_container_0_ng_template_2_div_2_Template, 2, 1, "div", 7)(3, AdDetailPage_ng_container_0_ng_template_2_findqo_ad_summary_header_3_Template, 1, 1, "findqo-ad-summary-header", 8);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275element(7, "findqo-ad-image-carousel", 11)(8, "findqo-ad-desktop-photo", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14);
    \u0275\u0275element(11, "findqo-ad-main-headings", 15);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275element(13, "mat-divider", 16);
    \u0275\u0275elementStart(14, "div", null, 2);
    \u0275\u0275element(16, "findqo-ad-sub-details", 17);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdDetailPage_ng_container_0_ng_template_2_div_18_Template, 3, 5, "div", 3);
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275element(20, "mat-divider", 16);
    \u0275\u0275elementStart(21, "div", 19)(22, "h2", 20);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "span", 23);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 24)(30, "mat-icon", 25);
    \u0275\u0275listener("click", function AdDetailPage_ng_container_0_ng_template_2_Template_mat_icon_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const vm_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCopyLocation(vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.location == null ? null : vm_r2.ad.location.address));
    })("keydown.enter", function AdDetailPage_ng_container_0_ng_template_2_Template_mat_icon_keydown_enter_30_listener() {
      \u0275\u0275restoreView(_r1);
      const vm_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCopyLocation(vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.location == null ? null : vm_r2.ad.location.address));
    })("keydown.space", function AdDetailPage_ng_container_0_ng_template_2_Template_mat_icon_keydown_space_30_listener() {
      \u0275\u0275restoreView(_r1);
      const vm_r2 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCopyLocation(vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.location == null ? null : vm_r2.ad.location.address));
    });
    \u0275\u0275text(31, " content_copy ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(32, "mat-divider", 26)(33, "findqo-ad-description", 27);
    \u0275\u0275pipe(34, "async");
    \u0275\u0275template(35, AdDetailPage_ng_container_0_ng_template_2_div_35_Template, 4, 4, "div", 3)(36, AdDetailPage_ng_container_0_ng_template_2_mat_divider_36_Template, 1, 0, "mat-divider", 28)(37, AdDetailPage_ng_container_0_ng_template_2_div_37_Template, 9, 11, "div", 29)(38, AdDetailPage_ng_container_0_ng_template_2_mat_divider_38_Template, 1, 0, "mat-divider", 28)(39, AdDetailPage_ng_container_0_ng_template_2_div_39_Template, 5, 4, "div", 29);
    \u0275\u0275element(40, "mat-divider", 16);
    \u0275\u0275elementStart(41, "div", 30)(42, "div", 31)(43, "div", 32)(44, "p", 33);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 34);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 35)(50, "div", 32)(51, "p", 33);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 34);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(56, "mat-divider", 16)(57, "findqo-ad-dealer-summary", 36);
    \u0275\u0275elementStart(58, "div", 18)(59, "div", 37);
    \u0275\u0275template(60, AdDetailPage_ng_container_0_ng_template_2_findqo_button_60_Template, 1, 2, "findqo-button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "mat-divider", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, AdDetailPage_ng_container_0_ng_template_2_Conditional_62_Template, 2, 0, "div", 39)(63, AdDetailPage_ng_container_0_ng_template_2_div_63_Template, 3, 4, "div", 40)(64, AdDetailPage_ng_container_0_ng_template_2_div_64_Template, 5, 8, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 41);
    \u0275\u0275template(66, AdDetailPage_ng_container_0_ng_template_2_findqo_ad_contacts_66_Template, 2, 4, "findqo-ad-contacts", 42)(67, AdDetailPage_ng_container_0_ng_template_2_findqo_ad_contacts_v2_67_Template, 1, 3, "findqo-ad-contacts-v2", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ad", vm_r2.ad)("isPublicPage", ctx_r2.isPublicPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isPublicPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(4, 37, ctx_r2.showHeader$));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ad-detail-container--public", ctx_r2.isPublicPage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ad", vm_r2.ad)("isAdDetail", true);
    \u0275\u0275advance();
    \u0275\u0275property("ad", vm_r2.ad);
    \u0275\u0275advance(3);
    \u0275\u0275property("translations", \u0275\u0275pipeBind1(12, 39, ctx_r2.translations$))("ad", vm_r2.ad)("isPublicPage", ctx_r2.isPublicPage);
    \u0275\u0275advance(5);
    \u0275\u0275property("ad", vm_r2.ad)("translations", \u0275\u0275pipeBind1(17, 41, ctx_r2.translations$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.extras && ctx_r2.extras.length >= 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 43, "n3053"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.location == null ? null : vm_r2.ad.location.address, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", vm_r2.ad.location && !ctx_r2.extras ? "my-4 my-lg-5" : "my-2 my-lg-4");
    \u0275\u0275advance();
    \u0275\u0275property("description", vm_r2.ad == null ? null : vm_r2.ad.description)("translations", \u0275\u0275pipeBind1(34, 45, ctx_r2.translations$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vm_r2.ad == null ? null : vm_r2.ad.youtubeVideoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.brochure == null ? null : vm_r2.ad.brochure.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.brochure == null ? null : vm_r2.ad.brochure.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r2.ad == null ? null : vm_r2.ad.ber) && (vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.ber) !== ctx_r2.berExempt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r2.ad == null ? null : vm_r2.ad.ber) && (vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.ber) !== ctx_r2.berExempt);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 47, "n3310"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r2.ad == null ? null : vm_r2.ad.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 49, "n3846"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vm_r2.ad == null ? null : vm_r2.ad.adViewCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ad", vm_r2.ad)("isPublicPage", ctx_r2.isPublicPage);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isPublicPage && (vm_r2 == null ? null : vm_r2.user == null ? null : vm_r2.user.id) !== (vm_r2 == null ? null : vm_r2.ad == null ? null : vm_r2.ad.seller == null ? null : vm_r2.ad.seller.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isProduction && !ctx_r2.isPublicPage ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isPublicPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isPublicPage);
    \u0275\u0275advance(2);
    \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(51, _c2, ctx_r2.featureVersion.V1));
    \u0275\u0275advance();
    \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(53, _c2, ctx_r2.featureVersion.V2));
  }
}
function AdDetailPage_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-not-found");
  }
}
function AdDetailPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdDetailPage_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 4)(2, AdDetailPage_ng_container_0_ng_template_2_Template, 68, 55, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, AdDetailPage_ng_container_0_ng_template_4_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r2 = ctx.ngIf;
    const adDetailsTemplate_r6 = \u0275\u0275reference(3);
    const adNotFoundTemplate_r7 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", (vm_r2 == null ? null : vm_r2.ad) ? adDetailsTemplate_r6 : adNotFoundTemplate_r7);
  }
}
var AdDetailPage = class _AdDetailPage {
  constructor(platformId, route, adDetailFacade, commonFacade, viewport, destroyService, adsService, seoService, canonicalService, schemaService, sharedAdsFacade, routeService, adTracker, snackService, clipboard, matDialog, auth) {
    this.platformId = platformId;
    this.route = route;
    this.adDetailFacade = adDetailFacade;
    this.commonFacade = commonFacade;
    this.viewport = viewport;
    this.destroyService = destroyService;
    this.adsService = adsService;
    this.seoService = seoService;
    this.canonicalService = canonicalService;
    this.schemaService = schemaService;
    this.sharedAdsFacade = sharedAdsFacade;
    this.routeService = routeService;
    this.adTracker = adTracker;
    this.snackService = snackService;
    this.clipboard = clipboard;
    this.matDialog = matDialog;
    this.auth = auth;
    this.isPublicPage = false;
    this.extras = [];
    this.user$ = this.commonFacade.getUser$();
    this.isProduction = environment.production;
    this.sectionType = SectionType;
    this.featureVersion = FeatureVersion;
    this.buttonType = ButtonType;
    this.berExempt = BER_EXEMPT;
    this.showFooterContent = false;
    this.translations$ = this.commonFacade.getTranslations$();
    this.showHeader$ = this.adsService.isDesktopContactsInvisibile$();
    this.relatedAdList$ = this.adDetailFacade.getRelatedAdList$();
    this.ad$ = this.sharedAdsFacade.getAd$();
  }
  onWindowScroll() {
    if (!this.subDetails)
      return;
    const rect = this.subDetails?.nativeElement?.getBoundingClientRect();
    this.showFooterContent = rect?.top < 0;
  }
  onReportAd(ad) {
    if (this.auth.user()) {
      this.openReportDialog(ad);
    } else {
      sessionStorage.setItem(StorageType.POST_LOGIN_SESSION, JSON.stringify({
        type: PostLoginAction.REPORT_AD
      }));
      this.auth.openAuthDialog({ onLogin: this.openReportDialog.bind(this) });
    }
  }
  openReportDialog(ad) {
    this.matDialog.open(AdReportDialogComponent, {
      width: "343px",
      height: "auto",
      maxWidth: "unset",
      data: {
        adId: ad?.id
      },
      backdropClass: "inquiry-backdrop"
    });
  }
  // TODO: Move this on separate service
  setMetaInformation(ad) {
    let propertyAmenities = [];
    const includedAmenities = [];
    const matchingAmenities = [];
    import_dayjs2.default.extend(import_relativeTime2.default);
    const AVAILABLE_FROM = (0, import_dayjs2.default)(+ad?.availableFrom * 1e3).fromNow(true);
    const amenities = ["Great Location", "Parking", "Heating", "Pets Allowed", "Stylish Bathrooms"];
    const AD_AMENETIES = ad.propertyExtras;
    if (!AD_AMENETIES || AD_AMENETIES.length === 0) {
      propertyAmenities = amenities.slice(0, 5);
    } else {
      for (let i = 0; i < amenities.length; i++) {
        const AMENITY = amenities[i];
        if (AD_AMENETIES.includes(AMENITY) && !includedAmenities.includes(AMENITY)) {
          matchingAmenities.push(AMENITY);
          includedAmenities.push(AMENITY);
        }
      }
      propertyAmenities = [...matchingAmenities];
      let remainingAmenitiesCount = 5 - propertyAmenities.length;
      if (remainingAmenitiesCount > 0) {
        for (let i = 0; i < AD_AMENETIES.length && remainingAmenitiesCount > 0; i++) {
          const AMENITY = AD_AMENETIES[i];
          if (!includedAmenities.includes(AMENITY)) {
            propertyAmenities.push(AMENITY);
            includedAmenities.push(AMENITY);
            remainingAmenitiesCount--;
          }
        }
      }
    }
    const PROPERTY_PRICE = ` | Price: ${ad?.price?.symbol}${ad?.price?.minValue}${ad?.price?.maxValue ? " - " + ad?.price?.symbol + ad?.price?.maxValue : ""} ${ad?.rentalPeriod || ""}${+ad?.bedroomCount > 0 ? ` | Beds: ${ad?.bedroomCount}` : ""}${+ad?.bathroomCount > 0 ? ` | Baths: ${ad?.bathroomCount}` : ""}${ad?.propertySize && ad?.propertySize?.value !== "0" ? ` | size: ${ad?.propertySize?.value} ${ad?.propertySize?.parameter}` : ""}`;
    let propertyDetals = "";
    if (ad?.section?.reference === "properties-for-sale" && ad?.furnishing) {
      propertyDetals = ` | Furnishing: ${ad.furnishing}`;
    } else {
      propertyDetals = ` | Available from: ${AVAILABLE_FROM} ${ad?.leaseTerm ? ` | Lease Term: ${ad.leaseTerm}` : ""}${ad?.furnishing ? ` | Furnishing: ${ad.furnishing}` : ""}`;
    }
    const AMENITIES = propertyAmenities?.length ? ` | Amenities: ${propertyAmenities.join(", ")}` : "";
    const FORMATTED_DATE = new Date(+ad?.createdAt * 1e3).toLocaleDateString("en-IE", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    const CREATED_AT = ` | Posted on: ${FORMATTED_DATE}`;
    const AD_ID = ad?.id ? ` | Ad ID: ${ad.id}` : "";
    const EIR_CODE = ad?.location?.eirCode;
    const TITLE = EIR_CODE && !ad?.title?.includes(EIR_CODE) ? `${ad.title}, ${EIR_CODE} | FindQo.ie` : `${ad.title} | FindQo.ie`;
    this.seoService.setSeo({
      title: TITLE,
      description: ad?.title + PROPERTY_PRICE + propertyDetals + AMENITIES + CREATED_AT + AD_ID,
      image: ad?.images[0]?.url
    });
  }
  onCopyLocation(location) {
    this.clipboard.copy(location);
    this.snackService.open({
      data: { message: "Address copied!", type: "success" },
      panelClass: "snackbar-success"
    });
  }
  // TODO: PDF link will be coming from API, added agent pdf for testing
  onDownloadBrochure(brochure) {
    window.open(brochure?.name, "_blank");
  }
  setSeo(ad) {
    this.canonicalService.createCannonicaUrl(ad.adlink, true);
  }
  ngOnInit() {
    this.route.data.pipe(takeUntil(this.destroyService)).subscribe((pageData) => {
      if (pageData.ad) {
        this.adTracker.saveClickedAd(pageData.ad);
      }
      this.recentAds = this.adTracker.getRecentAds().filter((a) => a.id !== pageData.ad.id);
      if (pageData.ad) {
        const AD = pageData.ad;
        this.extras = AD?.propertyExtras;
        this.setMetaInformation(AD);
        this.setSeo(AD);
        this.schemaService.createProductSchema(AD, AD.adlink);
        if (isPlatformBrowser(this.platformId)) {
          this.adDetailFacade.loadRelatedAdList(AD);
        }
      } else {
        this.seoService.robotsNoindex();
        this.routeService.setRouteData(__spreadProps(__spreadValues({}, this.routeService.getRouteData()), { pageReference: "ad-not-found" }));
      }
    });
  }
  ngAfterViewInit() {
    this.onWindowScroll();
  }
  static {
    this.\u0275fac = function AdDetailPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDetailPage)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AdDetailFacade), \u0275\u0275directiveInject(CommonFacade), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(AdsService), \u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(CanonicalService), \u0275\u0275directiveInject(StructuredDataService), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(RouteService), \u0275\u0275directiveInject(AdTrackingService), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdDetailPage, selectors: [["ng-component"]], viewQuery: function AdDetailPage_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.subDetails = _t.first);
      }
    }, hostBindings: function AdDetailPage_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function AdDetailPage_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { isPublicPage: "isPublicPage" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 3, vars: 8, consts: [["adDetailsTemplate", ""], ["adNotFoundTemplate", ""], ["subDetails", ""], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "mobileHeader"], [3, "ad", "isPublicPage"], ["class", "breadcrumbs mx-auto my-3 px-4 px-xl-0 desktopHeader", 4, "ngIf"], ["class", "d-none d-lg-block", 3, "ad", 4, "ngIf"], [1, "ad-detail-container", "mx-auto", "position-relative"], [1, "image-container", "overflow-hidden"], [1, "d-block", "d-lg-none", 3, "ad", "isAdDetail"], [1, "d-none", "d-lg-block", 3, "ad"], [1, "row"], [1, "col-md", "px-0", "pe-lg-3", "mt-3", "detail-container"], [3, "translations", "ad", "isPublicPage"], [1, "my-3", "my-lg-4"], [3, "ad", "translations"], [1, "d-md-none"], [1, "px-3"], [1, "d-block", "fw-500", "fs-16px", "lh-22px", "mb-2", "text-title-16px-medium'"], [1, "row", "align-items-center", "justify-content-between", "gap-2"], [1, "col"], [1, "fg-general-5", "fs-12px", "fs-sm-14px", "fw-400"], [1, "col-auto"], ["role", "button", "tabindex", "0", 1, "copy-icon", "cursor-pointer", 3, "click", "keydown.enter", "keydown.space"], [3, "ngClass"], [3, "description", "translations"], ["class", "my-3 my-lg-4", 4, "ngIf"], ["class", "px-3 px-xl-0", 4, "ngIf"], [1, "row", "px-3", "px-md-0", "gap-1", "gap-lg-4", "justify-content-between", "align-items-center"], [1, "col-lg"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-body-regular", "fg-general-5", "ps-md-4", "ps-xl-0"], [1, "text-body-medium", "ms-2", "fg-general-5", "pe-md-3"], [1, "col-lg", "text-lg-end"], [1, "d-block", "d-lg-none", 3, "ad", "isPublicPage"], [1, "px-3", "pt-2"], ["class", "ads-btn", "btnClass", "fg-general-4", "materialIconPrefix", "outlined_flag", "ariaLabel", "report ad button", 3, "btnType", "label", "clicked", 4, "ngIf"], [1, "m-3", "d-lg-none"], ["class", "related-ads-width", 4, "ngIf"], [1, "col-lg-auto", "px-0", "me-lg-4", "me-xl-0", "contacts-container"], [3, "ad", "translations", 4, "findqoFeatureIf"], [3, "ad", "isPublicPage", "showPrice", 4, "findqoFeatureIf"], [1, "breadcrumbs", "mx-auto", "my-3", "px-4", "px-xl-0", "desktopHeader"], [3, "ad"], [3, "extras", "section", "translations"], [3, "translations", "ad"], [1, "px-3", "px-xl-0"], [1, "heading-4-medium", "fg-general-5", "pb-3", "d-block"], [1, "text-body-regular", "fg-general-5", "pb-3"], ["materialIconPrefix", "download", "btnIconClass", "material-icons-outlined download-icon ", 3, "clicked", "btnType", "label", "btnClass"], [3, "ber"], ["btnClass", "fg-general-4", "materialIconPrefix", "outlined_flag", "ariaLabel", "report ad button", 1, "ads-btn", 3, "clicked", "btnType", "label"], [1, "related-ads-width"], [1, "col-12", "ps-3", "ps-md-4", "ps-xl-0", "pe-0", "pb-4"], [3, "title", "adList", "section", "aisle"], [1, "col-12", "ps-3", "ps-md-4", "ps-xl-0", "pe-0", "pb-3"], [3, "ad", "isPublicPage", "showPrice"]], template: function AdDetailPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdDetailPage_ng_container_0_Template, 6, 1, "ng-container", 3);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c12, \u0275\u0275pipeBind1(1, 1, ctx.ad$), \u0275\u0275pipeBind1(2, 3, ctx.user$)));
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatIcon, FeatureIfDirective, AdMainHeadingsComponent, AdSubDetailsComponent, AdDescriptionComponent, AdExtrasComponent, ButtonComponent, AdVideoComponent, AdContactsComponent, AdDealerSummaryComponent, AdContactsV2Component, OtherAdListComponent, AdBerComponent, AdNotFoundComponent, GoogleAdComponent, MatDivider, AdHeaderComponent, AdBreadcrumbsComponent, AdSummaryHeaderComponent, AdsImageCarouselComponent, AdDesktopPhotoComponent, AsyncPipe, TranslationsPipe], styles: ["\n\n.ad-detail-container[_ngcontent-%COMP%] {\n  padding-bottom: 72px;\n}\n@media (min-width: 576px) {\n  .ad-detail-container[_ngcontent-%COMP%] {\n    max-width: 1100px;\n  }\n  .ad-detail-container--public[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n  }\n}\n.breadcrumbs[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n@media (min-width: 992px) {\n  .contacts-container[_ngcontent-%COMP%] {\n    width: 325px;\n    position: relative;\n  }\n}\n.contacts-container[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.contacts-container[_ngcontent-%COMP%]   findqo-ad-contacts[_ngcontent-%COMP%], \n.contacts-container[_ngcontent-%COMP%]   findqo-ad-contacts-v2[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 118px !important;\n}\n.detail-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  .detail-container[_ngcontent-%COMP%] {\n    width: calc(100% - 325px);\n  }\n}\n@media (min-width: 992px) {\n  .image-container[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n@media (min-width: 992px) {\n  .related-ads-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.status[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  height: 25px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--info-1);\n}\n@media (min-width: 992px) {\n  .badge-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.desktopHeader[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media (min-width: 992px) {\n  .desktopHeader[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.mobileHeader[_ngcontent-%COMP%] {\n  display: block !important;\n}\n@media (min-width: 992px) {\n  .mobileHeader[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.copy-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--prim-2);\n}\n.copy-icon[_ngcontent-%COMP%]:focus:not(:focus-visible) {\n  outline: none !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-detail.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDetailPage, [{
    type: Component,
    args: [{ providers: [DestroyService], standalone: false, template: `<ng-container
	*ngIf="{
		ad: ad$ | async,
		user: user$ | async
	} as vm"
>
	<ng-template [ngTemplateOutlet]="vm?.ad ? adDetailsTemplate : adNotFoundTemplate"></ng-template>

	<ng-template #adDetailsTemplate>
		<div class="mobileHeader">
			<findqo-ad-header [ad]="vm.ad" [isPublicPage]="isPublicPage"></findqo-ad-header>
		</div>

		<div *ngIf="!isPublicPage" class="breadcrumbs mx-auto my-3 px-4 px-xl-0 desktopHeader">
			<findqo-ad-breadcrumbs [ad]="vm.ad"></findqo-ad-breadcrumbs>
		</div>

		<findqo-ad-summary-header class="d-none d-lg-block" *ngIf="showHeader$ | async" [ad]="vm.ad"></findqo-ad-summary-header>

		<div class="ad-detail-container mx-auto position-relative" [class.ad-detail-container--public]="isPublicPage">
			<div class="image-container overflow-hidden">
				<findqo-ad-image-carousel class="d-block d-lg-none" [ad]="vm.ad" [isAdDetail]="true"></findqo-ad-image-carousel>

				<findqo-ad-desktop-photo class="d-none d-lg-block" [ad]="vm.ad"></findqo-ad-desktop-photo>
			</div>

			<div class="row">
				<div class="col-md px-0 pe-lg-3 mt-3 detail-container">
					<findqo-ad-main-headings [translations]="translations$ | async" [ad]="vm.ad" [isPublicPage]="isPublicPage"></findqo-ad-main-headings>

					<mat-divider class="my-3 my-lg-4"></mat-divider>

					<div #subDetails>
						<findqo-ad-sub-details [ad]="vm.ad" [translations]="translations$ | async"></findqo-ad-sub-details>
					</div>

					<div *ngIf="extras && extras.length >= 1">
						<findqo-ad-extras [extras]="extras" [section]="vm.ad?.section?.name" [translations]="translations$ | async"></findqo-ad-extras>
					</div>

					<div class="d-md-none">
						<mat-divider class="my-3 my-lg-4"></mat-divider>
						<div class="px-3">
							<h2 class="d-block fw-500 fs-16px lh-22px mb-2 text-title-16px-medium'">{{ 'n3053' | translations }}</h2>

							<div class="row align-items-center justify-content-between gap-2">
								<div class="col">
									<span class="fg-general-5 fs-12px fs-sm-14px fw-400">
										{{ vm?.ad?.location?.address }}
									</span>
								</div>

								<div class="col-auto">
									<mat-icon
										class="copy-icon cursor-pointer"
										role="button"
										tabindex="0"
										(click)="onCopyLocation(vm?.ad?.location?.address)"
										(keydown.enter)="onCopyLocation(vm?.ad?.location?.address)"
										(keydown.space)="onCopyLocation(vm?.ad?.location?.address)"
									>
										content_copy
									</mat-icon>
								</div>
							</div>
						</div>
					</div>

					<mat-divider [ngClass]="vm.ad.location && !extras ? 'my-4 my-lg-5' : 'my-2 my-lg-4'"></mat-divider>

					<findqo-ad-description [description]="vm.ad?.description" [translations]="translations$ | async"></findqo-ad-description>

					<div *ngIf="vm.ad?.youtubeVideoUrl">
						<mat-divider class="my-3 my-lg-4"></mat-divider>

						<findqo-ad-video [translations]="translations$ | async" [ad]="vm.ad"></findqo-ad-video>
					</div>

					<mat-divider class="my-3 my-lg-4" *ngIf="vm?.ad?.brochure?.id"></mat-divider>

					<div class="px-3 px-xl-0" *ngIf="vm?.ad?.brochure?.id">
						<span class="heading-4-medium fg-general-5 pb-3 d-block">{{ 'n3426' | translations }}</span>

						<p class="text-body-regular fg-general-5 pb-3">{{ 'n3427' | translations }}</p>

						<findqo-button
							[btnType]="buttonType.BASIC"
							[label]="'n3428' | translations"
							materialIconPrefix="download"
							[btnClass]="'text-body-regular fg-prim-2 px-0 py-0 '"
							btnIconClass="material-icons-outlined download-icon "
							(clicked)="onDownloadBrochure(vm.ad.brochure)"
						></findqo-button>
					</div>

					<mat-divider class="my-3 my-lg-4" *ngIf="vm.ad?.ber && vm?.ad?.ber !== berExempt"></mat-divider>

					<div class="px-3 px-xl-0" *ngIf="vm.ad?.ber && vm?.ad?.ber !== berExempt">
						<span class="heading-4-medium fg-general-5 pb-3 d-block">{{ 'n3429' | translations }}</span>
						<findqo-ad-ber [ber]="vm.ad.ber"></findqo-ad-ber>
					</div>

					<mat-divider class="my-3 my-lg-4"></mat-divider>

					<div class="row px-3 px-md-0 gap-1 gap-lg-4 justify-content-between align-items-center">
						<div class="col-lg">
							<!-- Ad id -->
							<div class="d-flex justify-content-between align-items-center">
								<p class="text-body-regular fg-general-5 ps-md-4 ps-xl-0">{{ 'n3310' | translations }}</p>
								<p class="text-body-medium ms-2 fg-general-5 pe-md-3">{{ vm.ad?.id }}</p>
							</div>
						</div>

						<div class="col-lg text-lg-end">
							<!-- Ad total views -->
							<div class="d-flex justify-content-between align-items-center">
								<p class="text-body-regular fg-general-5 ps-md-4 ps-xl-0">{{ 'n3846' | translations }}</p>
								<p class="text-body-medium ms-2 fg-general-5 pe-md-3">{{ vm.ad?.adViewCount }}</p>
							</div>
						</div>
					</div>

					<mat-divider class="my-3 my-lg-4"></mat-divider>

					<findqo-ad-dealer-summary [ad]="vm.ad" class="d-block d-lg-none" [isPublicPage]="isPublicPage"></findqo-ad-dealer-summary>

					<div class="d-md-none">
						<div class="px-3 pt-2">
							<findqo-button
								*ngIf="!isPublicPage && vm?.user?.id !== vm?.ad?.seller?.id"
								class="ads-btn"
								btnClass="fg-general-4"
								materialIconPrefix="outlined_flag"
								ariaLabel="report ad button"
								[btnType]="buttonType.BASIC"
								[label]="'Report Ad'"
								(clicked)="onReportAd(vm?.ad)"
							></findqo-button>
						</div>

						<mat-divider class="my-3 my-lg-4"></mat-divider>
					</div>

					@if (isProduction && !isPublicPage) {
						<div class="m-3 d-lg-none">
							<findqo-google-ad></findqo-google-ad>
						</div>
					}

					<div *ngIf="!isPublicPage" class="row justify-content-center align-items-center" class="related-ads-width">
						<div class="col-12 ps-3 ps-md-4 ps-xl-0 pe-0 pb-4">
							<findqo-other-ad-list
								[title]="'Recently Viewed Ads'"
								[adList]="recentAds"
								[section]="vm.ad.section.reference"
								[aisle]="vm.ad.aisle.reference"
							></findqo-other-ad-list>
						</div>
					</div>
					<div *ngIf="!isPublicPage" class="row justify-content-center align-items-center" class="related-ads-width">
						<div class="col-12 ps-3 ps-md-4 ps-xl-0 pe-0 pb-3">
							<findqo-other-ad-list
								[title]="'n685' | translations"
								[adList]="relatedAdList$ | async"
								[section]="vm.ad.section.reference"
								[aisle]="vm.ad.aisle.reference"
							></findqo-other-ad-list>
						</div>
					</div>
				</div>

				<div class="col-lg-auto px-0 me-lg-4 me-xl-0 contacts-container">
					<findqo-ad-contacts [ad]="vm.ad" [translations]="translations$ | async" *findqoFeatureIf="[featureVersion.V1]"></findqo-ad-contacts>
					<findqo-ad-contacts-v2
						*findqoFeatureIf="[featureVersion.V2]"
						[ad]="vm.ad"
						[isPublicPage]="isPublicPage"
						[showPrice]="showFooterContent"
					></findqo-ad-contacts-v2>
				</div>
			</div>
		</div>
	</ng-template>
	<ng-template #adNotFoundTemplate>
		<findqo-ad-not-found></findqo-ad-not-found>
	</ng-template>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/pages/ad-detail/ad-detail.page.scss */\n.ad-detail-container {\n  padding-bottom: 72px;\n}\n@media (min-width: 576px) {\n  .ad-detail-container {\n    max-width: 1100px;\n  }\n  .ad-detail-container--public {\n    margin-top: 1.5rem;\n  }\n}\n.breadcrumbs {\n  max-width: 1100px;\n}\n@media (min-width: 992px) {\n  .contacts-container {\n    width: 325px;\n    position: relative;\n  }\n}\n.contacts-container {\n  z-index: 1;\n}\n.contacts-container findqo-ad-contacts,\n.contacts-container findqo-ad-contacts-v2 {\n  position: sticky !important;\n  top: 118px !important;\n}\n.detail-container {\n  width: 100%;\n}\n@media (min-width: 992px) {\n  .detail-container {\n    width: calc(100% - 325px);\n  }\n}\n@media (min-width: 992px) {\n  .image-container {\n    height: 400px;\n  }\n}\n@media (min-width: 992px) {\n  .related-ads-width {\n    width: 100%;\n  }\n}\n.status {\n  padding: 0px 12px;\n  height: 25px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--info-1);\n}\n@media (min-width: 992px) {\n  .badge-divider {\n    display: none;\n  }\n}\n.desktopHeader {\n  display: none !important;\n}\n@media (min-width: 992px) {\n  .desktopHeader {\n    display: block !important;\n  }\n}\n.mobileHeader {\n  display: block !important;\n}\n@media (min-width: 992px) {\n  .mobileHeader {\n    display: none !important;\n  }\n}\n.spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.copy-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--prim-2);\n}\n.copy-icon:focus:not(:focus-visible) {\n  outline: none !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-detail.page.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ActivatedRoute }, { type: AdDetailFacade }, { type: CommonFacade }, { type: ViewportService }, { type: DestroyService }, { type: AdsService }, { type: SeoService }, { type: CanonicalService }, { type: StructuredDataService }, { type: SharedAdsFacade }, { type: RouteService }, { type: AdTrackingService }, { type: SnackService }, { type: Clipboard }, { type: MatDialog }, { type: AuthService }], { isPublicPage: [{
    type: Input
  }], subDetails: [{
    type: ViewChild,
    args: ["subDetails"]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdDetailPage, { className: "AdDetailPage", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/pages/ad-detail/ad-detail.page.ts", lineNumber: 36 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/resolvers/ad-detail.resolver.ts
var AdDetailResolver = (route, _state, adsApi = inject(AdsApi), adsState = inject(AdsState), snack = inject(SnackService), responseService = inject(ResponseService)) => {
  adsState.setIsLoading(true);
  return adsApi.getAdDetail(route.params["adId"]).pipe(catchError((error) => {
    if (error?.error?.error?.id === "adNotLive") {
      snack.open({
        data: {
          message: "This listing is not live yet. Please check again later or contact FindQo support"
        },
        panelClass: "snackbar-error",
        duration: 5e3
      });
    }
    responseService.setStatusCode(404);
    adsState.setAd(void 0);
    return of(null);
  }), tap((ad) => {
    let ad_title = "";
    if (ad?.title) {
      const AD_URL = ad?.adlink.split("/");
      ad_title = AD_URL[AD_URL.length - 1];
    }
    if (route?.params?.["title"] !== ad_title) {
      responseService.setStatusCode(404);
      adsState.setAd(void 0);
    } else {
      adsState.setAd(ad);
    }
  }), finalize(() => adsState.setIsLoading(false)));
};

export {
  AdIconComponent,
  AdMainHeadingsComponent,
  AdContactsComponent,
  NoEnquiryDialogComponent,
  AdDealerSummaryComponent,
  AdContactsV2Component,
  AdNotFoundComponent,
  AdHeaderComponent,
  AdSummaryHeaderComponent,
  AdDesktopPhotoComponent,
  AdDetailPage,
  AdDetailResolver
};
//# sourceMappingURL=chunk-CES6MYIN.js.map
