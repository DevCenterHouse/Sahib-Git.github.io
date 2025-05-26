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
  AdPhotoViewerComponent
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
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  ActivatedRoute,
  AdDetailRoutePipe,
  AdImagePipe,
  AdImagePreloadDirective,
  AdPricePipe,
  AdStatusTooltipPipe,
  AdsService,
  AisleType,
  AmplitudeEvent,
  AuthService,
  BER_EXEMPT,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  CommonFacade,
  IconType,
  MAT_DIALOG_DATA,
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
  RouteDataType,
  Router,
  RouterLink,
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
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgClass,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Input,
  __spreadProps,
  __spreadValues,
  __toESM,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/favorites/components/remove-favorites-dialog/remove-favorites-dialog.component.ts
var RemoveFavoritesDialogComponent = class _RemoveFavoritesDialogComponent {
  constructor(ad, dialogRef, sharedAdsFacade) {
    this.ad = ad;
    this.dialogRef = dialogRef;
    this.sharedAdsFacade = sharedAdsFacade;
    this.buttonType = ButtonType;
  }
  onDismiss() {
    this.dialogRef.close(false);
  }
  onDeleteFavoriesAd(ad) {
    this.sharedAdsFacade.deleteFavouriteAdFromList(ad, this.dialogRef);
  }
  static {
    this.\u0275fac = function RemoveFavoritesDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RemoveFavoritesDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SharedAdsFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoveFavoritesDialogComponent, selectors: [["findqo-remove-favorites-dialog"]], standalone: false, decls: 24, vars: 18, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "fs-14px", "fw-400", "lh-18px", "fg-general-4", "mb-2"], [1, "fs-14px", "fw-400", "lh-18px", "fg-general-4"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], ["mat-button", "", "disableRipple", "", 1, "cancel-btn", "w-100", 3, "click"], [3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"]], template: function RemoveFavoritesDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4);
        \u0275\u0275element(8, "mat-icon", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "p", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "button", 11);
        \u0275\u0275listener("click", function RemoveFavoritesDialogComponent_Template_button_click_18_listener() {
          return ctx.onDismiss();
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "findqo-button", 12);
        \u0275\u0275pipe(23, "translations");
        \u0275\u0275listener("clicked", function RemoveFavoritesDialogComponent_Template_findqo_button_clicked_22_listener() {
          return ctx.onDeleteFavoriesAd(ctx.ad);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "n3134"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "n3131"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "n3133"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "n112"));
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(23, 16, "n3132"))("isStopPropagation", true)("btnClass", "text-body-regular w-100");
      }
    }, dependencies: [MatButton, MatIconButton, MatIcon, ButtonComponent, MatDialogClose, TranslationsPipe], styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 72px;\n  border-top: 1px solid var(--neutral-2);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/remove-favorites-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoveFavoritesDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-remove-favorites-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3134' | translations }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="fs-14px fw-400 lh-18px fg-general-4 mb-2">{{ 'n3131' | translations }}</p>
		<p class="fs-14px fw-400 lh-18px fg-general-4">{{ 'n3133' | translations }}</p>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<button mat-button disableRipple (click)="onDismiss()" class="cancel-btn w-100">{{ 'n112' | translations }}</button>
		</div>

		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n3132' | translations"
				[isStopPropagation]="true"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onDeleteFavoriesAd(ad)"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/favorites/components/remove-favorites-dialog/remove-favorites-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 72px;\n  border-top: 1px solid var(--neutral-2);\n}\n.cancel-btn {\n  color: var(--general-4) !important;\n  border: 1px solid var(--general-4) !important;\n  height: 40px;\n  --mat-mdc-button-persistent-ripple-color: transparent !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/remove-favorites-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: SharedAdsFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoveFavoritesDialogComponent, { className: "RemoveFavoritesDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/favorites/components/remove-favorites-dialog/remove-favorites-dialog.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-item/abstracts/ad-item.abstract.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_relativeTime = __toESM(require_relativeTime());
var AbstractAdItemComponent = class _AbstractAdItemComponent {
  constructor() {
    this.matDialog = inject(MatDialog);
    this.adsService = inject(AdsService);
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.viewport = inject(ViewportService);
    this.icon = inject(IconService);
    this.snackbarService = inject(SnackService);
    this.commonFacade = inject(CommonFacade);
    this.sharedAdsFacade = inject(SharedAdsFacade);
    this.window = inject(WindowService);
    this.utility = inject(BrowserUtility);
    this.enquiryService = inject(EnquiryService);
    this.isPublicPage = false;
    this.isAgentHub = false;
    this.showFavoritesIcon = false;
    this.showSellerInfoForBusinessAds = false;
    this.iconType = IconType;
    this.buttonType = ButtonType;
    this.isSellerModuleEnabled = environment.isSellerModuleEnabled;
    this.sellerType = SellerType;
  }
  // TODO: Remove this code if it's not being used.
  onReportAd() {
    if (this.auth.user()) {
      this.openReportDialog();
    } else {
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
  moreOptions(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  showAllPhotos() {
    this.matDialog.open(AdPhotoViewerComponent, {
      width: "100%",
      height: "100%",
      data: {
        ad: this.ad,
        sharedAdsFacade: this.sharedAdsFacade
      },
      panelClass: "ad-images"
    });
  }
  onWhatsappMessage() {
    this.adsService.onWhatsappMessage(this.ad);
  }
  onCall() {
    this.adsService.onPhoneCall(this.ad);
  }
  isFavoritesBtnClicked(ad, isFavoritesBtnEnable) {
    if (ad.isFavorite === "1") {
      if (isFavoritesBtnEnable) {
        this.openRemoveFavoritesDialog(ad);
      } else {
        this.sharedAdsFacade.deleteFavouriteAdFromList(ad);
      }
    } else {
      this.saveFavorites();
    }
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
        width: "343px",
        data: {
          title: TRANSLATIONS?.["n195"],
          messageHeading: TRANSLATIONS?.["n720"],
          confirmButton: TRANSLATIONS?.["n226"],
          snackbarText: TRANSLATIONS?.["n809"],
          adLink: this.ad.adlink
        },
        panelClass: "share-ad"
      });
    }
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
      this.snackbarService.open({
        data: { message: this.getMessage(status) },
        panelClass: "snackbar-error",
        duration: 3e3
      });
      return;
    }
    this.enquiryService.onOpenSendEnquiryDialog(AmplitudeEvent.AD_DETAILS_SEND_ENQUIRY_CLICKED, () => this.openSendInquiryDialog());
  }
  addToFav() {
    if (this.auth.user()?.id !== this.ad.seller.id) {
      this.ad = __spreadProps(__spreadValues({}, this.ad), {
        isFavorite: "1"
      });
      this.sharedAdsFacade.addFavouriteAdFromList(this.ad);
    }
  }
  saveFavorites() {
    const IS_LOGGED_IN = this.auth.user()?.accessToken;
    if (IS_LOGGED_IN) {
      this.addToFav();
    } else {
      sessionStorage.setItem(StorageType.POST_LOGIN_SESSION, JSON.stringify({
        type: PostLoginAction.ADD_TO_FAVORITE,
        payload: __spreadProps(__spreadValues({}, this.ad), {
          isFavorite: "1"
        })
      }));
      this.auth.openAuthDialog({ onLogin: this.addToFav.bind(this) });
    }
  }
  openRemoveFavoritesDialog(ad) {
    this.matDialog.open(RemoveFavoritesDialogComponent, {
      maxWidth: "343px",
      width: "100%",
      data: ad,
      panelClass: "remove-favorites-dialog"
    });
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
      panelClass: "inquiry-form",
      backdropClass: "inquiry-backdrop"
    });
  }
  showSellerDetailsForBusinessAds() {
    if (this.ad?.seller?.sellerTypeId === "2") {
      this.showSellerInfoForBusinessAds = true;
    }
  }
  ngOnInit() {
    import_dayjs.default.extend(import_relativeTime.default);
    this.datePosted = (0, import_dayjs.default)(+this.ad?.createdAt * 1e3).fromNow();
    this.user$ = this.commonFacade.getUser$();
    this.showSellerDetailsForBusinessAds();
  }
  static {
    this.\u0275fac = function AbstractAdItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractAdItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbstractAdItemComponent, selectors: [["ng-component"]], inputs: { translations: "translations", ad: "ad", section: "section", isPublicPage: "isPublicPage", isAgentHub: "isAgentHub" }, standalone: false, decls: 0, vars: 0, template: function AbstractAdItemComponent_Template(rf, ctx) {
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractAdItemComponent, [{
    type: Component,
    args: [{
      template: "",
      standalone: false
    }]
  }], null, { translations: [{
    type: Input
  }], ad: [{
    type: Input
  }], section: [{
    type: Input
  }], isPublicPage: [{
    type: Input
  }], isAgentHub: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbstractAdItemComponent, { className: "AbstractAdItemComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-item/abstracts/ad-item.abstract.ts", lineNumber: 32 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-actions/ad-actions.component.ts
var _c0 = () => ["sold", "property-occupied", "sale-agreed", "expired"];
function AdActionsComponent_ng_template_2_Template(rf, ctx) {
}
function AdActionsComponent_ng_template_7_Template(rf, ctx) {
}
function AdActionsComponent_ng_template_10_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function AdActionsComponent_ng_template_10_button_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showPhoneNumber(ctx_r2.ad, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 12);
    \u0275\u0275text(2, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "maskPhone");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", \u0275\u0275pureFunction0(4, _c0).includes(ctx_r2.ad == null ? null : ctx_r2.ad.adStatus == null ? null : ctx_r2.ad.adStatus.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("0", \u0275\u0275pipeBind1(5, 2, ctx_r2.ad == null ? null : ctx_r2.ad.contact == null ? null : ctx_r2.ad.contact.phone), "");
  }
}
function AdActionsComponent_ng_template_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function AdActionsComponent_ng_template_10_ng_template_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCallPhone(ctx_r2.ad, $event));
    });
    \u0275\u0275elementStart(1, "span", 14)(2, "mat-icon", 12);
    \u0275\u0275text(3, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("display-none", \u0275\u0275pureFunction0(3, _c0).includes(ctx_r2.ad == null ? null : ctx_r2.ad.adStatus == null ? null : ctx_r2.ad.adStatus.status) || (ctx_r2.user == null ? null : ctx_r2.user.businessProfile == null ? null : ctx_r2.user.businessProfile.id) === (ctx_r2.ad.seller == null ? null : ctx_r2.ad.seller.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("0", ctx_r2.ad == null ? null : ctx_r2.ad.contact == null ? null : ctx_r2.ad.contact.phone, "");
  }
}
function AdActionsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdActionsComponent_ng_template_10_button_0_Template, 6, 5, "button", 10)(1, AdActionsComponent_ng_template_10_ng_template_1_Template, 6, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const showPhoneNumberTemplate_r5 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.businessProfile == null ? null : ctx_r2.user.businessProfile.id) !== (ctx_r2.ad.seller == null ? null : ctx_r2.ad.seller.id) && !ctx_r2.isPhoneClicked)("ngIfElse", showPhoneNumberTemplate_r5);
  }
}
function AdActionsComponent_ng_template_12_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function AdActionsComponent_ng_template_12_button_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCallPhone(ctx_r2.ad, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 12);
    \u0275\u0275text(2, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Call");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", \u0275\u0275pureFunction0(1, _c0).includes(ctx_r2.ad == null ? null : ctx_r2.ad.adStatus == null ? null : ctx_r2.ad.adStatus.status));
  }
}
function AdActionsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AdActionsComponent_ng_template_12_button_0_Template, 5, 2, "button", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", (ctx_r2.user == null ? null : ctx_r2.user.businessProfile == null ? null : ctx_r2.user.businessProfile.id) !== (ctx_r2.ad.seller == null ? null : ctx_r2.ad.seller.id));
  }
}
var AdActionsComponent = class _AdActionsComponent extends AbstractAdItemComponent {
  constructor(adsApi) {
    super();
    this.adsApi = adsApi;
    this.berExempt = BER_EXEMPT;
    this.aisleType = AisleType;
    this.defaultCountryCode = "+353";
    this.isPhoneClicked = false;
  }
  showPhoneNumber(ad, event) {
    event.preventDefault();
    event.stopPropagation();
    this.adsApi.trackPhoneCall(ad?.id).subscribe();
    this.isPhoneClicked = true;
  }
  onCallPhone(ad, event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.isPhoneClicked) {
      this.adsApi.trackPhoneCall(ad?.id).subscribe();
    }
    const phoneNumber = `tel:${this.defaultCountryCode}${ad?.contact?.phone}`;
    window.location.href = phoneNumber;
  }
  ngOnInit() {
    this.isPhoneClicked = false;
    super.ngOnInit();
  }
  static {
    this.\u0275fac = function AdActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdActionsComponent)(\u0275\u0275directiveInject(AdsApi));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdActionsComponent, selectors: [["findqo-ad-actions"]], inputs: { ad: "ad", user: "user" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 18, consts: [["contactNumberDesktop", ""], ["contactNumberMobile", ""], ["showPhoneNumberTemplate", ""], [1, "d-none", "d-sm-block"], [3, "ngTemplateOutlet"], [1, "col-auto", "submit-btn", "d-none", "d-sm-inline-block", "ms-2"], ["id", "ad-listing-send-enquiry", "btnClass", "text-body-regular w-100 h-100 ", 3, "clicked", "matTooltip", "label", "btnType", "isStopPropagation", "isDisabled"], [1, "d-flex", "align-items-end", "d-sm-none"], [1, "mt-2", "h-40px", "submit-btn", "d-sm-none", "d-inline-block", "mobile-button"], ["id", "ad-listing-send-enquiry", "btnClass", " text-body-regular w-100 h-100 ", 3, "clicked", "label", "btnType", "isDisabled", "isStopPropagation"], ["id", "ad-listing-phone-number", "mat-stroked-button", "", "color", "primary", "class", "text-body-regular phone-btn d-none d-sm-inline-block", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], ["id", "ad-listing-phone-number", "mat-stroked-button", "", "color", "primary", 1, "text-body-regular", "phone-btn", "d-none", "d-sm-inline-block", 3, "click", "disabled"], ["matPrefix", "", 1, "material-icons", "phone-icon"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "phone-btn", "d-none", "d-sm-inline-flex", 3, "click"], [1, "d-block", "align-middle", "text-body-regular"], ["mat-stroked-button", "", "color", "primary", "class", "text-body-regular submit-btn d-inline-block d-sm-none mobile-button", 3, "disabled", "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "text-body-regular", "submit-btn", "d-inline-block", "d-sm-none", "mobile-button", 3, "click", "disabled"]], template: function AdActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementContainerStart(0);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275template(2, AdActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 4);
        \u0275\u0275elementStart(3, "div", 5)(4, "findqo-button", 6);
        \u0275\u0275pipe(5, "adStatusTooltip");
        \u0275\u0275listener("clicked", function AdActionsComponent_Template_findqo_button_clicked_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSendInquiry(ctx.ad == null ? null : ctx.ad.adStatus == null ? null : ctx.ad.adStatus.status));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 7);
        \u0275\u0275template(7, AdActionsComponent_ng_template_7_Template, 0, 0, "ng-template", 4);
        \u0275\u0275elementStart(8, "div", 8)(9, "findqo-button", 9);
        \u0275\u0275listener("clicked", function AdActionsComponent_Template_findqo_button_clicked_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSendInquiry(ctx.ad == null ? null : ctx.ad.adStatus == null ? null : ctx.ad.adStatus.status));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, AdActionsComponent_ng_template_10_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(12, AdActionsComponent_ng_template_12_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        const contactNumberDesktop_r7 = \u0275\u0275reference(11);
        const contactNumberMobile_r8 = \u0275\u0275reference(13);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", (ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.phone) && !+(ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.isEmailOnly) ? contactNumberDesktop_r7 : null);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(5, 15, ctx.ad == null ? null : ctx.ad.adStatus == null ? null : ctx.ad.adStatus.status, ctx.getMessage))("label", "Send Enquiry")("btnType", ctx.buttonType.FILLED)("isStopPropagation", true)("isDisabled", ctx.isAgentHub);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("justify-content-end", !(ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.phone) || (ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.isEmailOnly))("justify-content-between", (ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.phone) && !+(ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.isEmailOnly));
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", (ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.phone) && !+(ctx.ad == null ? null : ctx.ad.contact == null ? null : ctx.ad.contact.isEmailOnly) ? contactNumberMobile_r8 : null);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", "Send Enquiry")("btnType", ctx.buttonType.FILLED)("isDisabled", ctx.isAgentHub)("isStopPropagation", true);
      }
    }, dependencies: [ButtonModule, ButtonComponent, SharedModule, NgIf, NgTemplateOutlet, MatAnchor, MatButton, MatIcon, AdStatusTooltipPipe, MaskPhonePipe, MatTooltipModule, MatTooltip], styles: ["\n\n.mat-icon.phone-icon[_ngcontent-%COMP%] {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: sub;\n  margin-inline-end: 8px;\n  font-size: 18px;\n}\n.mobile-button[_ngcontent-%COMP%] {\n  width: 170px !important;\n}\n.display-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.phone-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 150px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-actions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdActionsComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-actions", imports: [ButtonModule, SharedModule, MatTooltipModule], template: `<ng-container>
	<div class="d-none d-sm-block">
		<ng-template [ngTemplateOutlet]="ad?.contact?.phone && !+ad?.contact?.isEmailOnly ? contactNumberDesktop : null"></ng-template>

		<div class="col-auto submit-btn d-none d-sm-inline-block ms-2">
			<findqo-button
				id="ad-listing-send-enquiry"
				btnClass="text-body-regular w-100 h-100 "
				[matTooltip]="ad?.adStatus?.status | adStatusTooltip: getMessage"
				[label]="'Send Enquiry'"
				[btnType]="buttonType.FILLED"
				(clicked)="onSendInquiry(ad?.adStatus?.status)"
				[isStopPropagation]="true"
				[isDisabled]="isAgentHub"
			></findqo-button>
		</div>
	</div>
	<div
		class="d-flex align-items-end d-sm-none"
		[class.justify-content-end]="!ad?.contact?.phone || ad?.contact?.isEmailOnly"
		[class.justify-content-between]="ad?.contact?.phone && !+ad?.contact?.isEmailOnly"
	>
		<ng-template [ngTemplateOutlet]="ad?.contact?.phone && !+ad?.contact?.isEmailOnly ? contactNumberMobile : null"></ng-template>
		<div class="mt-2 h-40px submit-btn d-sm-none d-inline-block mobile-button">
			<findqo-button
				id="ad-listing-send-enquiry"
				btnClass=" text-body-regular w-100 h-100 "
				[label]="'Send Enquiry'"
				[btnType]="buttonType.FILLED"
				(clicked)="onSendInquiry(ad?.adStatus?.status)"
				[isDisabled]="isAgentHub"
				[isStopPropagation]="true"
			></findqo-button>
		</div>
	</div>
	<ng-template #contactNumberDesktop>
		<button
			id="ad-listing-phone-number"
			[disabled]="['sold', 'property-occupied', 'sale-agreed', 'expired'].includes(ad?.adStatus?.status)"
			mat-stroked-button
			color="primary"
			*ngIf="user?.businessProfile?.id !== ad.seller?.id && !isPhoneClicked; else showPhoneNumberTemplate"
			(click)="showPhoneNumber(ad, $event)"
			class="text-body-regular phone-btn d-none d-sm-inline-block"
		>
			<mat-icon class="material-icons phone-icon" matPrefix>call</mat-icon>
			<span>0{{ ad?.contact?.phone | maskPhone }}</span>
		</button>

		<ng-template #showPhoneNumberTemplate>
			<a
				[class.display-none]="
					['sold', 'property-occupied', 'sale-agreed', 'expired'].includes(ad?.adStatus?.status) || user?.businessProfile?.id === ad.seller?.id
				"
				mat-stroked-button
				color="primary"
				class="phone-btn d-none d-sm-inline-flex"
				type="button"
				(click)="onCallPhone(ad, $event)"
			>
				<span class="d-block align-middle text-body-regular">
					<mat-icon class="material-icons phone-icon" matPrefix>call</mat-icon>
					<span>0{{ ad?.contact?.phone }}</span>
				</span>
			</a>
		</ng-template>
	</ng-template>
	<ng-template #contactNumberMobile>
		<button
			[disabled]="['sold', 'property-occupied', 'sale-agreed', 'expired'].includes(ad?.adStatus?.status)"
			mat-stroked-button
			color="primary"
			*ngIf="user?.businessProfile?.id !== ad.seller?.id"
			(click)="onCallPhone(ad, $event)"
			class="text-body-regular submit-btn d-inline-block d-sm-none mobile-button"
		>
			<mat-icon class="material-icons phone-icon" matPrefix>call</mat-icon>
			<span>Call</span>
		</button>
	</ng-template>
</ng-container>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-actions/ad-actions.component.scss */\n.mat-icon.phone-icon {\n  display: inline-block !important;\n  width: 18px;\n  height: 18px;\n  vertical-align: sub;\n  margin-inline-end: 8px;\n  font-size: 18px;\n}\n.mobile-button {\n  width: 170px !important;\n}\n.display-none {\n  display: none !important;\n}\n.phone-btn {\n  height: 40px;\n  width: auto;\n}\n.submit-btn {\n  height: 40px;\n  width: 150px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-actions.component.css.map */\n"] }]
  }], () => [{ type: AdsApi }], { ad: [{
    type: Input
  }], user: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdActionsComponent, { className: "AdActionsComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-actions/ad-actions.component.ts", lineNumber: 21 });
})();

// apps/findqo-ireland/src/app/shared/components/icons/heart-icon/heart-icon.component.ts
var HeartIconComponent = class _HeartIconComponent {
  static {
    this.\u0275fac = function HeartIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeartIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeartIconComponent, selectors: [["findqo-heart-icon"]], standalone: false, decls: 2, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none"], ["d", "M11.1133 5.65476L11.471 6.04148L11.8577 5.65541C12.9373 4.60321 14.4326 4.12432 15.9021 4.36892C18.1226 4.73888 19.75 6.66023 19.75 8.91287V9.09978C19.75 10.4372 19.1957 11.7166 18.216 12.6286L12.3927 18.0652C12.151 18.2908 11.8319 18.4165 11.5 18.4165C11.1681 18.4165 10.849 18.2908 10.6073 18.0652L4.78366 12.6286C3.80526 11.7166 3.25 10.4372 3.25 9.09978V8.91287C3.25 6.66023 4.87809 4.73888 7.09785 4.36892C8.53838 4.12432 10.0627 4.60321 11.1133 5.65476C11.1133 5.65508 11.0843 5.65476 11.1133 5.65476ZM11.471 8.22966L10.0208 6.72146C9.32148 6.0505 8.32891 5.73211 7.35244 5.89453C5.87808 6.14042 4.79688 7.41756 4.79688 8.91287V9.09978C4.79688 10.0086 5.17425 10.8787 5.83908 11.4974L11.5 16.7826L17.1622 11.4974C17.8261 10.8787 18.2031 10.0086 18.2031 9.09978V8.91287C18.2031 7.41756 17.1203 6.14042 15.6476 5.89453C14.6711 5.73211 13.6785 6.0505 12.9792 6.72146L11.471 8.22966Z", "fill", "#F3F4F6"]], template: function HeartIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
    }, styles: ["\n\n*[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/heart-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeartIconComponent, [{
    type: Component,
    args: [{ selector: "findqo-heart-icon", standalone: false, template: `
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
			<path
				d="M11.1133 5.65476L11.471 6.04148L11.8577 5.65541C12.9373 4.60321 14.4326 4.12432 15.9021 4.36892C18.1226 4.73888 19.75 6.66023 19.75 8.91287V9.09978C19.75 10.4372 19.1957 11.7166 18.216 12.6286L12.3927 18.0652C12.151 18.2908 11.8319 18.4165 11.5 18.4165C11.1681 18.4165 10.849 18.2908 10.6073 18.0652L4.78366 12.6286C3.80526 11.7166 3.25 10.4372 3.25 9.09978V8.91287C3.25 6.66023 4.87809 4.73888 7.09785 4.36892C8.53838 4.12432 10.0627 4.60321 11.1133 5.65476C11.1133 5.65508 11.0843 5.65476 11.1133 5.65476ZM11.471 8.22966L10.0208 6.72146C9.32148 6.0505 8.32891 5.73211 7.35244 5.89453C5.87808 6.14042 4.79688 7.41756 4.79688 8.91287V9.09978C4.79688 10.0086 5.17425 10.8787 5.83908 11.4974L11.5 16.7826L17.1622 11.4974C17.8261 10.8787 18.2031 10.0086 18.2031 9.09978V8.91287C18.2031 7.41756 17.1203 6.14042 15.6476 5.89453C14.6711 5.73211 13.6785 6.0505 12.9792 6.72146L11.471 8.22966Z"
				fill="#F3F4F6"
			/>
		</svg>
	`, styles: ["/* apps/findqo-ireland/src/app/shared/components/icons/heart-icon/heart-icon.component.scss */\n* {\n  display: flex;\n  overflow: hidden;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/heart-icon.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeartIconComponent, { className: "HeartIconComponent", filePath: "apps/findqo-ireland/src/app/shared/components/icons/heart-icon/heart-icon.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/shared/components/icons/favorite/favorite-icon.component.ts
var FavoriteIconComponent = class _FavoriteIconComponent {
  static {
    this.\u0275fac = function FavoriteIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoriteIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoriteIconComponent, selectors: [["findqo-favorite-icon"]], standalone: false, decls: 2, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "23", "height", "23", "viewBox", "0 0 23 23", "fill", "none"], ["d", "M11.5 20.2927L10.1104 19.0277C5.17496 14.5523 1.91663 11.6006 1.91663 7.97811C1.91663 5.02644 4.23579 2.70728 7.18746 2.70728C8.85496 2.70728 10.4554 3.48353 11.5 4.71019C12.5445 3.48353 14.145 2.70728 15.8125 2.70728C18.7641 2.70728 21.0833 5.02644 21.0833 7.97811C21.0833 11.6006 17.825 14.5523 12.8895 19.0373L11.5 20.2927Z", "fill", "#EE0088"]], template: function FavoriteIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "path", 1);
        \u0275\u0275elementEnd();
      }
    }, styles: ["\n\n*[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/favorite-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FavoriteIconComponent, [{
    type: Component,
    args: [{ selector: "findqo-favorite-icon", standalone: false, template: `
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
			<path
				d="M11.5 20.2927L10.1104 19.0277C5.17496 14.5523 1.91663 11.6006 1.91663 7.97811C1.91663 5.02644 4.23579 2.70728 7.18746 2.70728C8.85496 2.70728 10.4554 3.48353 11.5 4.71019C12.5445 3.48353 14.145 2.70728 15.8125 2.70728C18.7641 2.70728 21.0833 5.02644 21.0833 7.97811C21.0833 11.6006 17.825 14.5523 12.8895 19.0373L11.5 20.2927Z"
				fill="#EE0088"
			/>
		</svg>
	`, styles: ["/* apps/findqo-ireland/src/app/shared/components/icons/favorite/favorite-icon.component.scss */\n* {\n  display: flex;\n  overflow: hidden;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/favorite-icon.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoriteIconComponent, { className: "FavoriteIconComponent", filePath: "apps/findqo-ireland/src/app/shared/components/icons/favorite/favorite-icon.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-item/v2/ad-item-v2.component.ts
var _c02 = (a0) => ({ user: a0 });
var _c1 = (a0, a1, a2, a3) => ({ "col-lg": a0, "col-sm": a1, "px-0 ps-lg-3": a2, "ad-detail-padding": a3 });
var _c2 = (a0, a1) => ({ text: a0, label: a1 });
var _c3 = (a0) => ({ $implicit: a0 });
var _c4 = (a0) => ({ text: "Bathrooms", label: a0 });
var _c5 = (a0) => ({ text: "Bathroom", label: a0 });
function AdItemV2Component_ng_container_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275pipe(3, "adImagePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(3, 4, ctx_r0.ad == null ? null : ctx_r0.ad.seller.picture))("alt", ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.ad.seller.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ad.seller.tagline);
  }
}
function AdItemV2Component_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdItemV2Component_ng_container_0_div_2_div_1_Template, 9, 6, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.sellerTypeId) === ctx_r0.sellerType.BUSINESS);
  }
}
function AdItemV2Component_ng_container_0_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275pipe(1, "adDetailRoute");
    \u0275\u0275elementContainer(2, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const adDetails_r2 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hide-border-top", !ctx_r0.showSellerInfoForBusinessAds || ctx_r0.showSellerInfo);
    \u0275\u0275property("routerLink", \u0275\u0275pipeBind1(1, 4, ctx_r0.ad));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", adDetails_r2);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_5_findqo_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 39);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function AdItemV2Component_ng_container_0_ng_template_4_div_5_findqo_button_2_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.showAllPhotos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("btnType", ctx_r0.buttonType.STROKED)("label", \u0275\u0275pipeBind1(1, 4, "n626"))("isStopPropagation", true)("btnClass", "text-caption-regular view-photo-v2 w-100 fg-general-1 rounded-pill");
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-favorite-icon");
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 41);
    \u0275\u0275element(1, "findqo-heart-icon");
    \u0275\u0275elementEnd();
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(4);
      ctx_r0.isFavoritesBtnClicked(ctx_r0.ad, ctx_r0.isFavoritesBtnEnable);
      $event.preventDefault();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(1, AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Conditional_1_Template, 1, 0, "findqo-favorite-icon")(2, AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Conditional_2_Template, 2, 0, "mat-icon", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ad.isFavorite === "1" ? 1 : 2);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 8);
    \u0275\u0275template(2, AdItemV2Component_ng_container_0_ng_template_4_div_5_findqo_button_2_Template, 2, 6, "findqo-button", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275template(4, AdItemV2Component_ng_container_0_ng_template_4_div_5_button_4_Template, 3, 1, "button", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.ad.images.length !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.id) && !ctx_r0.isPublicPage);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ad == null ? null : ctx_r0.ad.ad_address, " ");
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_15_ng_template_1_Template(rf, ctx) {
}
function AdItemV2Component_ng_container_0_ng_template_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, AdItemV2Component_ng_container_0_ng_template_4_div_15_ng_template_1_Template, 0, 0, "ng-template", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r6 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, \u0275\u0275pureFunction2(2, _c2, (ctx_r0.ad.aisle == null ? null : ctx_r0.ad.aisle.reference) === ctx_r0.aisleType.SHARE_RESIDENTIAL ? "Bedrooms available" : "Bedrooms", ctx_r0.ad.bedroomCount)));
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_16_ng_template_1_Template(rf, ctx) {
}
function AdItemV2Component_ng_container_0_ng_template_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, AdItemV2Component_ng_container_0_ng_template_4_div_16_ng_template_1_Template, 0, 0, "ng-template", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r6 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c3, \u0275\u0275pureFunction2(2, _c2, (ctx_r0.ad.aisle == null ? null : ctx_r0.ad.aisle.reference) === ctx_r0.aisleType.SHARE_RESIDENTIAL ? "Bedroom available" : "Bedroom", ctx_r0.ad.bedroomCount)));
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_18_ng_template_1_Template(rf, ctx) {
}
function AdItemV2Component_ng_container_0_ng_template_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, AdItemV2Component_ng_container_0_ng_template_4_div_18_ng_template_1_Template, 0, 0, "ng-template", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r6 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c3, \u0275\u0275pureFunction1(2, _c4, ctx_r0.ad.bathroomCount)));
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_19_ng_template_1_Template(rf, ctx) {
}
function AdItemV2Component_ng_container_0_ng_template_4_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, AdItemV2Component_ng_container_0_ng_template_4_div_19_ng_template_1_Template, 0, 0, "ng-template", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    const adFeatureBadgeTemplate_r6 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c3, \u0275\u0275pureFunction1(2, _c5, ctx_r0.ad.bathroomCount)));
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.ad.propertySize == null ? null : ctx_r0.ad.propertySize.value, " ", ctx_r0.ad.propertySize.parameter, "");
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "findqo-ad-ber", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ber", ctx_r0.ad.ber);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "findqo-ad-ber", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ber", ctx_r0.ad == null ? null : ctx_r0.ad.ber);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_findqo_ad_actions_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-actions", 49);
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ad", ctx_r0.ad)("user", vm_r5.user);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_findqo_ad_actions_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-actions", 50);
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ad", ctx_r0.ad)("user", vm_r5.user);
  }
}
function AdItemV2Component_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275element(4, "findqo-my-ad-stamp", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdItemV2Component_ng_container_0_ng_template_4_div_5_Template, 5, 2, "div", 20);
    \u0275\u0275element(6, "img", 21);
    \u0275\u0275pipe(7, "adImagePipe");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 22)(9, "div", 23)(10, "div")(11, "h2", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdItemV2Component_ng_container_0_ng_template_4_div_13_Template, 3, 1, "div", 2);
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275template(15, AdItemV2Component_ng_container_0_ng_template_4_div_15_Template, 2, 7, "div", 26)(16, AdItemV2Component_ng_container_0_ng_template_4_div_16_Template, 2, 7, "div", 26)(17, AdItemV2Component_ng_container_0_ng_template_4_div_17_Template, 1, 0, "div", 27)(18, AdItemV2Component_ng_container_0_ng_template_4_div_18_Template, 2, 6, "div", 26)(19, AdItemV2Component_ng_container_0_ng_template_4_div_19_Template, 2, 6, "div", 26)(20, AdItemV2Component_ng_container_0_ng_template_4_div_20_Template, 1, 0, "div", 27)(21, AdItemV2Component_ng_container_0_ng_template_4_div_21_Template, 3, 2, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdItemV2Component_ng_container_0_ng_template_4_div_22_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 29)(24, "div", 30)(25, "h4", 31);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "adPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, AdItemV2Component_ng_container_0_ng_template_4_div_28_Template, 2, 1, "div", 32)(29, AdItemV2Component_ng_container_0_ng_template_4_findqo_ad_actions_29_Template, 1, 2, "findqo-ad-actions", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, AdItemV2Component_ng_container_0_ng_template_4_findqo_ad_actions_30_Template, 1, 2, "findqo-ad-actions", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vm_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.isSellerPage ? "col-lg-auto" : "col-sm-auto");
    \u0275\u0275advance(3);
    \u0275\u0275property("adStatus", ctx_r0.ad == null ? null : ctx_r0.ad.adStatus == null ? null : ctx_r0.ad.adStatus.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub);
    \u0275\u0275advance();
    \u0275\u0275classProp("remove-border-start-radius", ctx_r0.showSellerInfoForBusinessAds);
    \u0275\u0275property("ngSrc", \u0275\u0275pipeBind1(7, 22, ctx_r0.ad == null ? null : ctx_r0.ad.images[0] == null ? null : ctx_r0.ad.images[0].url))("alt", ctx_r0.ad == null ? null : ctx_r0.ad.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(27, _c1, ctx_r0.isSellerPage, !ctx_r0.isSellerPage, ctx_r0.isAgentHub, !ctx_r0.isAgentHub));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.ad == null ? null : ctx_r0.ad.aisle == null ? null : ctx_r0.ad.aisle.reference) === "share-residential" ? ctx_r0.ad.ad_address : ctx_r0.ad.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((ctx_r0.ad == null ? null : ctx_r0.ad.aisle == null ? null : ctx_r0.ad.aisle.reference) === "share-residential"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) > 1 || (ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) === "7+");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (+(ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) > 0 || (ctx_r0.ad == null ? null : ctx_r0.ad.bedroomCount) === "7+") && +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ctx_r0.ad == null ? null : ctx_r0.ad.bathroomCount) > 0 && (ctx_r0.ad == null ? null : ctx_r0.ad.propertySize) && +(ctx_r0.ad == null ? null : ctx_r0.ad.propertySize == null ? null : ctx_r0.ad.propertySize.value) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.propertySize) && (ctx_r0.ad.propertySize == null ? null : ctx_r0.ad.propertySize.value) !== "0");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.ber) && (ctx_r0.ad == null ? null : ctx_r0.ad.ber) !== ctx_r0.berExempt);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 24, ctx_r0.ad == null ? null : ctx_r0.ad.price, ctx_r0.ad == null ? null : ctx_r0.ad.rentalPeriod), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.ad == null ? null : ctx_r0.ad.ber) && (ctx_r0.ad == null ? null : ctx_r0.ad.ber) !== ctx_r0.berExempt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r0.ad == null ? null : ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (vm_r5.user == null ? null : vm_r5.user.id) !== (ctx_r0.ad == null ? null : ctx_r0.ad.seller == null ? null : ctx_r0.ad.seller.id));
  }
}
function AdItemV2Component_ng_container_0_mat_divider_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 51);
  }
}
function AdItemV2Component_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275template(2, AdItemV2Component_ng_container_0_div_2_Template, 2, 1, "div", 2)(3, AdItemV2Component_ng_container_0_a_3_Template, 3, 6, "a", 4)(4, AdItemV2Component_ng_container_0_ng_template_4_Template, 31, 32, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdItemV2Component_ng_container_0_mat_divider_6_Template, 1, 0, "mat-divider", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const adDetails_r2 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", !ctx_r0.isAgentHub ? "border-lg mb-4" : "p-3 bg-basic-1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showSellerInfo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub)("ngIfElse", adDetails_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isAgentHub);
  }
}
function AdItemV2Component_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ad_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ad_r7.label, " ", ad_r7.text, "");
  }
}
var AdItemV2Component = class _AdItemV2Component extends AbstractAdItemComponent {
  constructor(adsApi) {
    super();
    this.adsApi = adsApi;
    this.showSellerInfo = false;
    this.isFavoritesBtnEnable = false;
    this.berExempt = BER_EXEMPT;
    this.isSellerPage = false;
    this.aisleType = AisleType;
    this.isPhoneClicked = false;
  }
  checkRouteData() {
    this.showSellerInfo = this.route.snapshot.data[RouteDataType.SHOW_SELLER_INFO];
    this.isFavoritesBtnEnable = this.route.snapshot.data[RouteDataType.IS_FAVORITE_BTN_ENABLE];
    this.isSellerPage = this.route.snapshot.data[RouteDataType.IS_SELLER_PAGE];
  }
  ngOnInit() {
    this.isPhoneClicked = false;
    super.ngOnInit();
    this.checkRouteData();
  }
  static {
    this.\u0275fac = function AdItemV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdItemV2Component)(\u0275\u0275directiveInject(AdsApi));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdItemV2Component, selectors: [["findqo-ad-item-v2"]], standalone: false, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 5, consts: [["adFeatureBadgeTemplate", ""], ["adDetails", ""], [4, "ngIf"], [1, "desktop-advertisement", 3, "ngClass"], ["class", "cursor-pointer row-max-height", 3, "hide-border-top", "routerLink", 4, "ngIf", "ngIfElse"], ["class", "my-3 on-desktop", 4, "ngIf"], ["class", "row mx-0 gap-2 ps-0 ps-sm-2 py-2", 4, "ngIf"], [1, "row", "mx-0", "gap-2", "ps-0", "ps-sm-2", "py-2"], [1, "col-auto", "px-0"], ["findqoAdImage", "", "loading", "lazy", "width", "55", "height", "40", "alt", "Seller profile photo", 1, "business-information", "object-fit-cover", "image-skeleton-loader", 3, "ngSrc", "alt"], [1, "col", "px-0", "text-truncate"], [1, "text-small-14px-regular", "lh-18px", "fg-general-5"], [1, "text-caption-regular", "fg-general-4", "d-block"], [1, "cursor-pointer", "row-max-height", 3, "routerLink"], [3, "ngTemplateOutlet"], [1, "row", "ad-style"], [1, "px-0", "position-relative", "image-width", "col-max-height", 3, "ngClass"], [1, "image-container", "image-width"], [1, "position-absolute", "p-2", "top-0"], [3, "adStatus"], ["class", "row mx-0 justify-content-sm-between position-absolute w-100 bottom-0 p-2", 4, "ngIf"], ["findqoAdImage", "", "fill", "", "priority", "", 1, "ad-image", "w-100", "h-100", "image-skeleton-loader", "position-static", 3, "ngSrc", "alt"], [3, "ngClass"], [1, "d-flex", "flex-column", "justify-content-between", "gap-3", "col-height"], [1, "fg-general-5", "mb-0", "mt-2", "mt-sm-0", "heading-4-regular"], [1, "row", "gap-2", "mt-2", "align-items-center"], ["class", "col-auto", 4, "ngIf"], ["class", "line", 4, "ngIf"], ["class", "on-mobile mt-2", 4, "ngIf"], [1, "row", "justify-content-sm-between", "align-items-center", "gap-2", "pe-3", "pe-sm-0"], [1, "col", "px-0"], [1, "fg-general-5", "heading-4-medium", "d-block"], ["class", "col-auto px-0 on-desktop", 4, "ngIf"], ["class", "d-none d-sm-block col-auto", 3, "ad", "user", 4, "ngIf"], ["class", "d-block d-sm-none", 3, "ad", "user", 4, "ngIf"], [1, "row", "mx-0", "justify-content-sm-between", "position-absolute", "w-100", "bottom-0", "p-2"], ["iconPrefix", "view-photo", 3, "btnType", "label", "isStopPropagation", "btnClass", "clicked", 4, "ngIf"], [1, "col", "text-end", "px-0"], ["mat-fab", "", "class", "me-2 ad-img-btn", 3, "click", 4, "ngIf"], ["iconPrefix", "view-photo", 3, "clicked", "btnType", "label", "isStopPropagation", "btnClass"], ["mat-fab", "", 1, "me-2", "ad-img-btn", 3, "click"], [1, "favorite-icon"], [1, "text-caption-regular", "fg-general-5"], [1, "col-auto"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "line"], [1, "on-mobile", "mt-2"], [3, "ber"], [1, "col-auto", "px-0", "on-desktop"], [1, "d-none", "d-sm-block", "col-auto", 3, "ad", "user"], [1, "d-block", "d-sm-none", 3, "ad", "user"], [1, "my-3", "on-desktop"], [1, "d-flex", "align-items-center", "gap-1"]], template: function AdItemV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AdItemV2Component_ng_container_0_Template, 7, 5, "ng-container", 2);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275template(2, AdItemV2Component_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c02, \u0275\u0275pipeBind1(1, 1, ctx.user$)));
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatFabButton, MatIcon, RouterLink, NgOptimizedImage, AdImagePreloadDirective, ButtonComponent, MatDivider, AdBerComponent, HeartIconComponent, FavoriteIconComponent, MyAdStampComponent, AdActionsComponent, AsyncPipe, AdImagePipe, TranslationsPipe, AdDetailRoutePipe, AdPricePipe], styles: ["\n\n.col-max-height[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n.image-container[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.ad-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  border-radius: 4px;\n  z-index: -1;\n}\n.line[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 1px;\n  background: var(--neutral-2);\n}\n.border-verified[_ngcontent-%COMP%] {\n  border: 1px solid var(--success-3);\n}\n.icon-14px[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.h-25px[_ngcontent-%COMP%] {\n  height: 25px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-item-v2.component.css.map */", "\n\nbutton[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\ndiv.col.position-relative[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.icon-size[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\nfindqo-button.icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px !important;\n  height: 20px !important;\n}\nfindqo-button.phone[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.phone-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 150px;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.ad-img-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  background: rgba(26, 31, 46, 0.65);\n}\n.ad-detail-padding[_ngcontent-%COMP%] {\n  padding: 10px 0px 0px 0px;\n}\n.business-information[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 40px;\n  border-radius: 4px;\n}\n.favorite-icon[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n}\n.badge-icons[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%] {\n  width: 177px !important;\n  height: 40px !important;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n  height: 20px !important;\n  width: 20px !important;\n  margin-right: 8px !important;\n}\n.mat-mdc-menu-item[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%] {\n  color: var(--general-4) !important;\n}\n@media (min-width: 576px) {\n  .desktop-advertisement[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .ad-detail-padding[_ngcontent-%COMP%] {\n    padding: 24px 16px 16px 16px;\n  }\n  findqo-button.phone[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 150px;\n  }\n  button[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    width: 325px;\n  }\n  .ad-image[_ngcontent-%COMP%] {\n    width: 325px;\n    height: 200px;\n    border-start-end-radius: 0 !important;\n    border-end-end-radius: 0 !important;\n  }\n  .remove-border-start-radius[_ngcontent-%COMP%] {\n    border-start-start-radius: 0 !important;\n  }\n  .on-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .col-height[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media (max-width: 767.98px) {\n  .image-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 991.98px) {\n  .ad-image[_ngcontent-%COMP%] {\n    border-end-start-radius: 0;\n  }\n}\n@media (min-width: 992px) {\n  .desktop-advertisement.border-lg[_ngcontent-%COMP%] {\n    border: 1px solid var(--general-2);\n    border-radius: 4px;\n  }\n  .row-max-height[_ngcontent-%COMP%] {\n    min-height: 200px;\n    max-height: 270px;\n    border-top: 1px solid var(--general-2);\n  }\n  .image-container[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .hide-border-top[_ngcontent-%COMP%] {\n    border-top: 0px !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ad-image[_ngcontent-%COMP%] {\n    border-end-start-radius: 4px;\n  }\n  .ms-19px[_ngcontent-%COMP%] {\n    margin-inline-start: 20px;\n  }\n  .on-mobile[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdItemV2Component, [{
    type: Component,
    args: [{ selector: "findqo-ad-item-v2", standalone: false, template: `<ng-container
	*ngIf="{
		user: user$ | async
	} as vm"
>
	<div class="desktop-advertisement" [ngClass]="!isAgentHub ? 'border-lg mb-4' : 'p-3 bg-basic-1'">
		<div *ngIf="!showSellerInfo">
			<div class="row mx-0 gap-2 ps-0 ps-sm-2 py-2" *ngIf="ad.seller?.sellerTypeId === sellerType.BUSINESS">
				<div class="col-auto px-0">
					<img
						findqoAdImage
						class="business-information object-fit-cover image-skeleton-loader"
						loading="lazy"
						width="55"
						height="40"
						alt="Seller profile photo"
						[ngSrc]="ad?.seller.picture | adImagePipe"
						[alt]="ad?.title"
					/>
				</div>

				<div class="col px-0 text-truncate">
					<span class="text-small-14px-regular lh-18px fg-general-5">{{ ad.seller.name }}</span>
					<span class="text-caption-regular fg-general-4 d-block">{{ ad.seller.tagline }}</span>
				</div>
			</div>
		</div>

		<a
			class="cursor-pointer row-max-height"
			[class.hide-border-top]="!showSellerInfoForBusinessAds || showSellerInfo"
			[routerLink]="ad | adDetailRoute"
			*ngIf="!isAgentHub; else adDetails"
		>
			<ng-container [ngTemplateOutlet]="adDetails"></ng-container>
		</a>

		<ng-template #adDetails>
			<div class="row ad-style">
				<div class="px-0 position-relative image-width col-max-height" [ngClass]="isSellerPage ? 'col-lg-auto' : 'col-sm-auto'">
					<div class="image-container image-width">
						<div class="position-absolute p-2 top-0">
							<findqo-my-ad-stamp [adStatus]="ad?.adStatus?.status"></findqo-my-ad-stamp>
						</div>

						<div class="row mx-0 justify-content-sm-between position-absolute w-100 bottom-0 p-2" *ngIf="!isAgentHub">
							<div class="col-auto px-0">
								<findqo-button
									*ngIf="ad.images.length !== 0"
									[btnType]="buttonType.STROKED"
									[label]="'n626' | translations"
									iconPrefix="view-photo"
									(clicked)="showAllPhotos()"
									[isStopPropagation]="true"
									[btnClass]="'text-caption-regular view-photo-v2 w-100 fg-general-1 rounded-pill'"
								></findqo-button>
							</div>

							<div class="col text-end px-0">
								<button
									*ngIf="vm.user?.id !== ad.seller?.id && !isPublicPage"
									mat-fab
									class="me-2 ad-img-btn"
									(click)="isFavoritesBtnClicked(ad, isFavoritesBtnEnable); $event.preventDefault(); $event.stopPropagation()"
								>
									@if (ad.isFavorite === '1') {
										<findqo-favorite-icon></findqo-favorite-icon>
									} @else {
										<mat-icon class="favorite-icon">
											<findqo-heart-icon></findqo-heart-icon>
										</mat-icon>
									}
								</button>
							</div>
						</div>

						<img
							findqoAdImage
							fill
							priority
							class="ad-image w-100 h-100 image-skeleton-loader position-static"
							[ngSrc]="ad?.images[0]?.url | adImagePipe"
							[class.remove-border-start-radius]="showSellerInfoForBusinessAds"
							[alt]="ad?.title"
						/>
					</div>
				</div>

				<div [ngClass]="{ 'col-lg': isSellerPage, 'col-sm': !isSellerPage, 'px-0 ps-lg-3': isAgentHub, 'ad-detail-padding': !isAgentHub }">
					<div class="d-flex flex-column justify-content-between gap-3 col-height">
						<div>
							<h2 class="fg-general-5 mb-0 mt-2 mt-sm-0 heading-4-regular">
								{{ ad?.aisle?.reference === 'share-residential' ? ad.ad_address : ad.title }}
							</h2>
							<div *ngIf="!(ad?.aisle?.reference === 'share-residential')">
								<span class="text-caption-regular fg-general-5">
									{{ ad?.ad_address }}
								</span>
							</div>

							<div class="row gap-2 mt-2 align-items-center">
								<!-- Bedroom -->
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
									<!-- Using slice so we ge the correct spelling for singular form of the noun -->
								</div>

								<div class="line" *ngIf="(+ad?.bedroomCount > 0 || ad?.bedroomCount === '7+') && +ad?.bathroomCount > 0"></div>

								<!-- Bathroom -->
								<div *ngIf="+ad?.bathroomCount > 1" class="col-auto">
									<ng-template
										[ngTemplateOutlet]="adFeatureBadgeTemplate"
										[ngTemplateOutletContext]="{ $implicit: { text: 'Bathrooms', label: ad.bathroomCount } }"
									></ng-template>
								</div>
								<div *ngIf="+ad?.bathroomCount === 1" class="col-auto">
									<ng-template
										[ngTemplateOutlet]="adFeatureBadgeTemplate"
										[ngTemplateOutletContext]="{ $implicit: { text: 'Bathroom', label: ad.bathroomCount } }"
									></ng-template>
								</div>

								<div class="line" *ngIf="+ad?.bathroomCount > 0 && ad?.propertySize && +ad?.propertySize?.value > 0"></div>

								<!-- Property size -->
								<div *ngIf="ad?.propertySize && ad.propertySize?.value !== '0'" class="col-auto">
									<span class="text-caption-regular fg-general-5">{{ ad.propertySize?.value }} {{ ad.propertySize.parameter }}</span>
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
								<findqo-ad-ber [ber]="ad?.ber"></findqo-ad-ber>
							</div>
							<findqo-ad-actions class="d-none d-sm-block col-auto" [ad]="ad" [user]="vm.user" *ngIf="vm.user?.id !== ad?.seller?.id"></findqo-ad-actions>
						</div>
					</div>

					<findqo-ad-actions class="d-block d-sm-none" [ad]="ad" [user]="vm.user" *ngIf="vm.user?.id !== ad?.seller?.id"></findqo-ad-actions>
				</div>
			</div>
		</ng-template>
	</div>

	<mat-divider class="my-3 on-desktop" *ngIf="!isAgentHub"></mat-divider>
</ng-container>

<ng-template #adFeatureBadgeTemplate let-ad>
	<div class="d-flex align-items-center gap-1">
		<span class="text-caption-regular fg-general-5">{{ ad.label }} {{ ad.text }}</span>
	</div>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-item/v2/ad-item-v2.component.scss */\n.col-max-height {\n  max-height: 200px;\n}\n.image-container {\n  height: 200px;\n}\n.ad-image {\n  object-fit: cover;\n  border-radius: 4px;\n  z-index: -1;\n}\n.line {\n  height: 15px;\n  width: 1px;\n  background: var(--neutral-2);\n}\n.border-verified {\n  border: 1px solid var(--success-3);\n}\n.icon-14px {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.h-25px {\n  height: 25px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-item-v2.component.css.map */\n", "/* apps/findqo-ireland/src/app/shared/components/ads/ad-item/styles/ad-item.component.scss */\nbutton {\n  width: 34px;\n  height: 34px;\n}\ndiv.col.position-relative {\n  padding: 0 !important;\n}\n.icon-size {\n  width: 16px;\n  height: 16px;\n}\nfindqo-button.icon {\n  display: block;\n  width: 20px !important;\n  height: 20px !important;\n}\nfindqo-button.phone {\n  height: 40px;\n}\n.phone-btn {\n  height: 40px;\n  width: 150px;\n}\n.h-40px {\n  height: 40px;\n}\n.ad-img-btn {\n  width: 35px;\n  height: 35px;\n  background: rgba(26, 31, 46, 0.65);\n}\n.ad-detail-padding {\n  padding: 10px 0px 0px 0px;\n}\n.business-information {\n  width: 55px;\n  height: 40px;\n  border-radius: 4px;\n}\n.favorite-icon {\n  width: 23px;\n  height: 23px;\n}\n.badge-icons {\n  width: 16px;\n  height: 16px;\n}\n.mat-mdc-menu-item {\n  width: 177px !important;\n  height: 40px !important;\n}\n.mat-mdc-menu-item .mat-icon {\n  color: var(--general-4) !important;\n  height: 20px !important;\n  width: 20px !important;\n  margin-right: 8px !important;\n}\n.mat-mdc-menu-item .mdc-list-item__primary-text {\n  color: var(--general-4) !important;\n}\n@media (min-width: 576px) {\n  .desktop-advertisement {\n    position: relative;\n  }\n  .ad-detail-padding {\n    padding: 24px 16px 16px 16px;\n  }\n  findqo-button.phone {\n    height: 40px;\n    width: 150px;\n  }\n  button {\n    width: 38px;\n    height: 38px;\n  }\n  .image-container {\n    width: 325px;\n  }\n  .ad-image {\n    width: 325px;\n    height: 200px;\n    border-start-end-radius: 0 !important;\n    border-end-end-radius: 0 !important;\n  }\n  .remove-border-start-radius {\n    border-start-start-radius: 0 !important;\n  }\n  .on-desktop {\n    display: none;\n  }\n  .col-height {\n    height: 100%;\n  }\n}\n@media (max-width: 767.98px) {\n  .image-width {\n    width: 100%;\n  }\n}\n@media (max-width: 991.98px) {\n  .ad-image {\n    border-end-start-radius: 0;\n  }\n}\n@media (min-width: 992px) {\n  .desktop-advertisement.border-lg {\n    border: 1px solid var(--general-2);\n    border-radius: 4px;\n  }\n  .row-max-height {\n    min-height: 200px;\n    max-height: 270px;\n    border-top: 1px solid var(--general-2);\n  }\n  .image-container {\n    height: 100%;\n  }\n  .hide-border-top {\n    border-top: 0px !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ad-image {\n    border-end-start-radius: 4px;\n  }\n  .ms-19px {\n    margin-inline-start: 20px;\n  }\n  .on-mobile {\n    display: none;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-item.component.css.map */\n"] }]
  }], () => [{ type: AdsApi }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdItemV2Component, { className: "AdItemV2Component", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-item/v2/ad-item-v2.component.ts", lineNumber: 14 });
})();

export {
  FavoriteIconComponent,
  HeartIconComponent,
  RemoveFavoritesDialogComponent,
  AbstractAdItemComponent,
  AdActionsComponent,
  AdItemV2Component
};
//# sourceMappingURL=chunk-DYDGEZIA.js.map
