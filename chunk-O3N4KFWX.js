import {
  SellerFacade
} from "./chunk-ZM7LEXHZ.js";
import {
  ClipboardModule
} from "./chunk-6CJCVRJS.js";
import {
  AdListSkeletonLoadingComponent,
  RichTextPipe
} from "./chunk-L6WIR66L.js";
import {
  EmptyAdListComponent
} from "./chunk-MNKMPSFA.js";
import {
  SsoPostLoginService
} from "./chunk-AH5EFBPI.js";
import {
  AdItemV2Component
} from "./chunk-DYDGEZIA.js";
import {
  BrowserUtility
} from "./chunk-UNPSDH5C.js";
import {
  SeoService
} from "./chunk-5JBKTQLQ.js";
import {
  CanonicalService
} from "./chunk-ZM4NPOC4.js";
import {
  CdkDropdownComponent,
  FiltersSortComponent
} from "./chunk-5VDMSC62.js";
import {
  MatBottomSheet
} from "./chunk-2KWNZOXB.js";
import {
  FindqoAdComponent
} from "./chunk-OZKRZICA.js";
import {
  SharedAdsFacade
} from "./chunk-XBIIKIQC.js";
import {
  FiltersFacade
} from "./chunk-2RKTIM73.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import {
  MatProgressSpinner
} from "./chunk-HIMS7BZ4.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AuthService,
  ButtonComponent,
  ButtonModule,
  ButtonType,
  DeviceDetectorService,
  FiltersPanelClass,
  MAT_DIALOG_DATA,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDivider,
  MatFormField,
  MatIconButton,
  MatInput,
  MatInputModule,
  PostLoginAction,
  Router,
  SELLER_META_CONTENTS,
  SellerType,
  SellerTypeSlug,
  SharedModule,
  SortLabelPipe,
  TranslationsPipe,
  ViewportService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  __spreadProps,
  __spreadValues,
  filter,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/seller/component/share-profile-dialog/share-profile-dialog.component.ts
var _c0 = ["profileLink"];
function ShareProfileDialogComponent_findqo_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "findqo-button", 16);
    \u0275\u0275pipe(1, "translations");
    \u0275\u0275listener("clicked", function ShareProfileDialogComponent_findqo_button_26_Template_findqo_button_clicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const profileLink_r3 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(ctx_r1.copyAdLink(profileLink_r3.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.FILLED)("label", \u0275\u0275pipeBind1(1, 5, "n226"))("iconSuffix", "copy-link-basic-1")("btnClass", "text-body-regular w-100 cursor-pointer")("btnIconClass", "ms-1 align-middle");
  }
}
function ShareProfileDialogComponent_findqo_button_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-button", 17);
    \u0275\u0275pipe(1, "translations");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("btnType", ctx_r1.buttonType.STROKED)("label", \u0275\u0275pipeBind1(1, 4, "n809"))("materialIconSuffix", "check_circle")("btnClass", "text-body-regular w-100 cursor-pointer text-align");
  }
}
var ShareProfileDialogComponent = class _ShareProfileDialogComponent {
  constructor(data, destroyService) {
    this.data = data;
    this.destroyService = destroyService;
    this.buttonType = ButtonType;
    this.isCopied = false;
  }
  copyAdLink(profileLink) {
    navigator.clipboard.writeText(profileLink);
    this.isCopied = true;
    timer(5e3).pipe(takeUntil(this.destroyService), tap(() => this.isCopied = false)).subscribe();
  }
  ngAfterViewInit() {
    this.profileLink.nativeElement.value = this.data["profileUrl"];
  }
  static {
    this.\u0275fac = function ShareProfileDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShareProfileDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(DestroyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShareProfileDialogComponent, selectors: [["findqo-share-profile-dialog"]], viewQuery: function ShareProfileDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.profileLink = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 28, vars: 16, consts: [["profileLink", ""], [1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn", "cursor-pointer"], ["svgIcon", "close-2", 1, "justify-content-center"], [1, "p-3"], [1, "text-body-regular", "fg-general-5", "mb-3"], [1, "text-body-medium", "fg-general-5"], ["appearance", "outline", 1, "w-100", "no-subscript", "mt-3", "bg-neutral-1"], ["matInput", "", "disabled", "", 1, "text-body-regular", "fg-info-3", 3, "readonly"], [1, "row", "mx-0", "gap-3", "p-3", "dialog-actions"], [1, "col", "px-0"], [3, "btnType", "label", "iconSuffix", "btnClass", "btnIconClass", "clicked", 4, "ngIf"], [3, "btnType", "label", "materialIconSuffix", "btnClass", 4, "ngIf"], [3, "clicked", "btnType", "label", "iconSuffix", "btnClass", "btnIconClass"], [3, "btnType", "label", "materialIconSuffix", "btnClass"]], template: function ShareProfileDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h4", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 5);
        \u0275\u0275element(7, "mat-icon", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "p", 8);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translations");
        \u0275\u0275element(17, "br")(18, "br");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 10);
        \u0275\u0275element(22, "input", 11, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
        \u0275\u0275template(26, ShareProfileDialogComponent_findqo_button_26_Template, 2, 7, "findqo-button", 14)(27, ShareProfileDialogComponent_findqo_button_27_Template, 2, 6, "findqo-button", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate("Share Profile");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "n3974"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 10, "n3975"), ".");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 12, "n3976"), ". ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 14, "n3977"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("readonly", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isCopied);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isCopied);
      }
    }, dependencies: [SharedModule, NgIf, MatIconButton, MatIcon, TranslationsPipe, ButtonModule, ButtonComponent, MatInputModule, MatInput, MatFormField, ClipboardModule, MatDialogModule, MatDialogClose], styles: ["\n\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/share-profile-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareProfileDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-share-profile-dialog", imports: [SharedModule, ButtonModule, MatInputModule, ClipboardModule, MatDialogModule], providers: [DestroyService], template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'Share Profile' }}</h4>
		</div>
		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn cursor-pointer">
				<mat-icon svgIcon="close-2" class="justify-content-center"></mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<!-- TODO: change this message when figma is updated -->
		<p class="text-body-regular fg-general-5 mb-3">
			{{ 'n3974' | translations }}
			<span class="text-body-medium fg-general-5">{{ 'n3975' | translations }}.</span>
			{{ 'n3976' | translations }}.
			<br />
			<br />
			{{ 'n3977' | translations }}
		</p>

		<mat-form-field appearance="outline" class="w-100 no-subscript mt-3 bg-neutral-1">
			<input [readonly]="true" matInput disabled #profileLink class="text-body-regular fg-info-3" />
		</mat-form-field>
	</div>

	<div class="row mx-0 gap-3 p-3 dialog-actions">
		<div class="col px-0">
			<findqo-button
				*ngIf="!isCopied"
				[btnType]="buttonType.FILLED"
				[label]="'n226' | translations"
				[iconSuffix]="'copy-link-basic-1'"
				[btnClass]="'text-body-regular w-100 cursor-pointer'"
				(clicked)="copyAdLink(profileLink.value)"
				[btnIconClass]="'ms-1 align-middle'"
			></findqo-button>

			<findqo-button
				*ngIf="isCopied"
				[btnType]="buttonType.STROKED"
				[label]="'n809' | translations"
				[materialIconSuffix]="'check_circle'"
				[btnClass]="'text-body-regular w-100 cursor-pointer text-align'"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/seller/component/share-profile-dialog/share-profile-dialog.component.scss */\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/share-profile-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: DestroyService }], { profileLink: [{
    type: ViewChild,
    args: ["profileLink"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShareProfileDialogComponent, { className: "ShareProfileDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/seller/component/share-profile-dialog/share-profile-dialog.component.ts", lineNumber: 18 });
})();

// apps/findqo-ireland/src/app/feature/seller/component/seller-profile-card/seller-profile-card.component.ts
var _c02 = (a0, a1) => ({ "fg-success-3": a0, "material-symbols-outlined": a1 });
function SellerProfileCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 7);
    \u0275\u0275text(1, "verified_user");
    \u0275\u0275elementEnd();
  }
}
function SellerProfileCardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-content", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3, "Listings:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "address", 14)(6, "span", 13);
    \u0275\u0275text(7, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" For Sale (", ctx_r0.seller.ads.salePropertyCount, ") For Rent (", ctx_r0.seller.ads.rentPropertyCount, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.seller.location.address, ", ", ctx_r0.seller.location.countyArea, " ");
  }
}
var SellerProfileCardComponent = class _SellerProfileCardComponent {
  constructor() {
    this.browserUtilityService = inject(BrowserUtility);
    this.matDialog = inject(MatDialog);
    this.totalAdViews = 0;
    this.isAgent = false;
    this.isCopied = signal(false);
    this.isBussinessProfile = false;
    this.defaultProfileImage = "assets/images/profile/business-account-photo.svg";
  }
  onShare(seller) {
    if (this.browserUtilityService.isWebShareSupported()) {
      navigator.share({
        title: seller.name,
        text: seller.tagline,
        url: seller.profileUrl
      });
    } else if (this.isAgent) {
      this.openShareDialog(seller.profileUrl);
    } else {
      this.copyToClipboard(seller.profileUrl);
    }
  }
  openShareDialog(profileUrl) {
    this.matDialog.open(ShareProfileDialogComponent, {
      width: "95%",
      maxWidth: "500px",
      data: { profileUrl }
    });
  }
  copyToClipboard(profileUrl) {
    navigator.clipboard.writeText(profileUrl).then(() => {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2e3);
    });
  }
  ngOnInit() {
    this.isBussinessProfile = this.seller.sellerTypeId === SellerType.BUSINESS;
    this.defaultProfileImage = this.isBussinessProfile ? "assets/images/profile/business-account-photo.svg" : environment.defaultAvatarImg;
  }
  static {
    this.\u0275fac = function SellerProfileCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerProfileCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerProfileCardComponent, selectors: [["findqo-seller-profile-card"]], inputs: { seller: "seller", totalAdViews: "totalAdViews", isAgent: "isAgent" }, decls: 18, vars: 18, consts: [[1, "p-3", "p-md-4"], [1, "p-0", "align-items-center", "flex-column", "flex-md-row", "flex-wrap"], ["mat-card-avatar", "", 1, "profile-avatar", "mb-0", "position-relative"], ["alt", "Agent profile image", "fill", "", 3, "ngSrc"], [1, "my-3", "text-center", "text-md-start"], [1, "mb-1"], [1, "heading-3-medium", "fg-general-5", "text-break"], [1, "fg-success-3", "align-text-top"], [1, "text-caption-regular", "text-body-sm-regular", "fg-general-5"], ["mat-button", "", "color", "primary", 1, "text-body-regular", "p-0", "disabled-ripple", 3, "click", "disableRipple"], [3, "ngClass"], [1, "p-0"], [1, "text-body-regular", "fg-general-5"], [1, "text-body-medium"], [1, "text-body-regular", "fg-general-5", "mt-1", "text-break"]], template: function SellerProfileCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-header", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h1", 6);
        \u0275\u0275text(7);
        \u0275\u0275template(8, SellerProfileCardComponent_Conditional_8_Template, 2, 0, "mat-icon", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "button", 9);
        \u0275\u0275listener("click", function SellerProfileCardComponent_Template_button_click_12_listener() {
          return ctx.onShare(ctx.seller);
        });
        \u0275\u0275elementStart(13, "mat-icon", 10);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(17, SellerProfileCardComponent_Conditional_17_Template, 9, 4, "mat-card-content", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("profile-avatar--business", ctx.isBussinessProfile);
        \u0275\u0275advance();
        \u0275\u0275property("ngSrc", (ctx.seller == null ? null : ctx.seller.picture) || ctx.defaultProfileImage);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.seller.name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(+(ctx.seller == null ? null : ctx.seller.isVerified) ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate3(" ", ctx.seller.liveAds, " Active Listings | ", ctx.seller.agentCount, " Agents | ", ctx.totalAdViews, " Total Ad Views ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disableRipple", true);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c02, ctx.isCopied(), !ctx.isCopied()));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isCopied() ? "check_circle" : "share", " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("fg-success-3", ctx.isCopied());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isCopied() ? "Link copied!" : "Share Profile", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isBussinessProfile ? 17 : -1);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardAvatar, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatButtonModule, MatButton, NgOptimizedImage, NgClass], styles: ["\n\n.mat-mdc-card[_ngcontent-%COMP%] {\n  background: var(--neutral-1);\n  border-radius: 4px;\n  box-shadow: unset;\n}\n.mat-mdc-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n.mat-mdc-card[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  margin-inline-end: 12px;\n}\n.mat-mdc-card[_ngcontent-%COMP%]   .profile-avatar--business[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.mat-mdc-card[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller-profile-card.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerProfileCardComponent, [{
    type: Component,
    args: [{ selector: "findqo-seller-profile-card", imports: [MatCardModule, MatIconModule, MatButtonModule, NgOptimizedImage, NgClass], template: `
		<mat-card class="p-3 p-md-4">
			<mat-card-header class="p-0 align-items-center flex-column flex-md-row flex-wrap">
				<div mat-card-avatar class="profile-avatar mb-0 position-relative" [class.profile-avatar--business]="isBussinessProfile">
					<img [ngSrc]="seller?.picture || defaultProfileImage" alt="Agent profile image" fill />
				</div>
				<div class="my-3 text-center text-md-start">
					<div class="mb-1">
						<h1 class="heading-3-medium fg-general-5 text-break">
							{{ seller.name }}
							@if (+seller?.isVerified) {
								<mat-icon class="fg-success-3 align-text-top">verified_user</mat-icon>
							}
						</h1>
					</div>
					<span class="text-caption-regular text-body-sm-regular fg-general-5">
						{{ seller.liveAds }} Active Listings | {{ seller.agentCount }} Agents | {{ totalAdViews }} Total Ad Views
					</span>
					<div>
						<button mat-button class="text-body-regular p-0 disabled-ripple" color="primary" (click)="onShare(seller)" [disableRipple]="true">
							<mat-icon
								[ngClass]="{
									'fg-success-3': isCopied(),
									'material-symbols-outlined': !isCopied()
								}"
							>
								{{ isCopied() ? 'check_circle' : 'share' }}
							</mat-icon>
							<span [class.fg-success-3]="isCopied()">
								{{ isCopied() ? 'Link copied!' : 'Share Profile' }}
							</span>
						</button>
					</div>
				</div>
			</mat-card-header>

			@if (isBussinessProfile) {
				<mat-card-content class="p-0">
					<div class="text-body-regular fg-general-5">
						<span class="text-body-medium">Listings:</span>
						For Sale ({{ seller.ads.salePropertyCount }}) For Rent ({{ seller.ads.rentPropertyCount }})
					</div>
					<address class="text-body-regular fg-general-5 mt-1 text-break">
						<span class="text-body-medium">Address:</span>
						{{ seller.location.address }}, {{ seller.location.countyArea }}
					</address>
				</mat-card-content>
			}
		</mat-card>
	`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;120a495f66272bb7b46687e0a05c08b30e1c67205d6a3418fd1c085620f62d35;/Users/sahibsingh/Documents/Workspace/FindQO/findqo-website/apps/findqo-ireland/src/app/feature/seller/component/seller-profile-card/seller-profile-card.component.ts */\n.mat-mdc-card {\n  background: var(--neutral-1);\n  border-radius: 4px;\n  box-shadow: unset;\n}\n.mat-mdc-card h1 mat-icon {\n  display: inline !important;\n}\n.mat-mdc-card .profile-avatar {\n  width: 110px;\n  height: 110px;\n  margin-inline-end: 12px;\n}\n.mat-mdc-card .profile-avatar--business {\n  height: 80px;\n}\n.mat-mdc-card .profile-avatar img {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller-profile-card.component.css.map */\n"] }]
  }], null, { seller: [{
    type: Input
  }], totalAdViews: [{
    type: Input
  }], isAgent: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerProfileCardComponent, { className: "SellerProfileCardComponent", filePath: "apps/findqo-ireland/src/app/feature/seller/component/seller-profile-card/seller-profile-card.component.ts", lineNumber: 91 });
})();

// apps/findqo-ireland/src/app/feature/seller/component/seller-about/seller-about.component.ts
var _c03 = ["descriptionContainer"];
var _c1 = ["descriptionText"];
var _c2 = (a0, a1) => ({ collapsed: a0, expanded: a1 });
function SellerAboutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function SellerAboutComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleCollapse());
    });
    \u0275\u0275elementStart(1, "mat-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disableRipple", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCollapsed() ? "expand_more" : "expand_less", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCollapsed() ? "Show full description" : "Show less", " ");
  }
}
var SellerAboutComponent = class _SellerAboutComponent {
  constructor() {
    this.renderer = inject(Renderer2);
    this.isCollapsed = signal(true);
    this.canCollapse = signal(false);
  }
  onToggleCollapse() {
    this.isCollapsed.update((collapsed) => {
      const container = this.descriptionContainer.nativeElement;
      if (collapsed) {
        this.renderer.setStyle(container, "height", `${this.descriptionText.nativeElement.scrollHeight}px`);
      } else {
        this.renderer.setStyle(container, "height", `180px`);
      }
      return !collapsed;
    });
  }
  setContainerHeight() {
    const container = this.descriptionContainer.nativeElement;
    const descriptionText = this.descriptionText.nativeElement;
    const maxHeight = 180;
    const isCollapsible = descriptionText.scrollHeight > maxHeight;
    this.renderer.setStyle(container, "height", isCollapsible ? `${maxHeight}px` : "auto");
    this.canCollapse.set(isCollapsible);
  }
  ngAfterViewInit() {
    this.setContainerHeight();
  }
  static {
    this.\u0275fac = function SellerAboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerAboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerAboutComponent, selectors: [["findqo-seller-about"]], viewQuery: function SellerAboutComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.descriptionContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.descriptionText = _t.first);
      }
    }, inputs: { name: "name", description: "description" }, decls: 9, vars: 9, consts: [["descriptionContainer", ""], ["descriptionText", ""], [1, "heading-4-medium", "fg-general-5", "mb-2", "text-break"], [1, "description-container", "fg-general-5", 3, "ngClass"], [1, "description-text", "text-body-regular", 3, "innerHTML"], ["mat-button", "", "color", "primary", 1, "disabled-ripple", "p-0", "text-body-regular", 3, "disableRipple"], ["mat-button", "", "color", "primary", 1, "disabled-ripple", "p-0", "text-body-regular", 3, "click", "disableRipple"], ["iconPositionEnd", ""]], template: function SellerAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "h4", 2);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3, 0);
        \u0275\u0275element(5, "p", 4, 1);
        \u0275\u0275pipe(7, "richText");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, SellerAboutComponent_Conditional_8_Template, 4, 3, "button", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("About ", ctx.name, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c2, ctx.isCollapsed(), !ctx.isCollapsed()));
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(7, 4, ctx.description), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.canCollapse() ? 8 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, RichTextPipe, NgClass], styles: ["\n\n.description-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: height 0.3s ease-in-out;\n}\n.description-container.collapsed[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  -webkit-line-clamp: 10;\n}\n.description-container.expanded[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  -webkit-line-clamp: unset;\n}\n.description-container[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller-about.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerAboutComponent, [{
    type: Component,
    args: [{ selector: "findqo-seller-about", imports: [MatButtonModule, MatIconModule, RichTextPipe, NgClass], template: `
		<div>
			<h4 class="heading-4-medium fg-general-5 mb-2 text-break">About {{ name }}</h4>

			<div #descriptionContainer class="description-container fg-general-5" [ngClass]="{ collapsed: isCollapsed(), expanded: !isCollapsed() }">
				<p #descriptionText class="description-text text-body-regular" [innerHTML]="description | richText"></p>
			</div>

			@if (canCollapse()) {
				<button mat-button class="disabled-ripple p-0 text-body-regular" color="primary" [disableRipple]="true" (click)="onToggleCollapse()">
					<mat-icon iconPositionEnd>
						{{ isCollapsed() ? 'expand_more' : 'expand_less' }}
					</mat-icon>
					{{ isCollapsed() ? 'Show full description' : 'Show less' }}
				</button>
			}
		</div>
	`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;8afd043b901d4ba8d041f536f44ee2563d2c5ce1cf136a3eb5227f46fae3198b;/Users/sahibsingh/Documents/Workspace/FindQO/findqo-website/apps/findqo-ireland/src/app/feature/seller/component/seller-about/seller-about.component.ts */\n.description-container {\n  overflow: hidden;\n  transition: height 0.3s ease-in-out;\n}\n.description-container.collapsed .description-text {\n  -webkit-line-clamp: 10;\n}\n.description-container.expanded .description-text {\n  -webkit-line-clamp: unset;\n}\n.description-container .description-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller-about.component.css.map */\n"] }]
  }], null, { name: [{
    type: Input
  }], description: [{
    type: Input
  }], descriptionContainer: [{
    type: ViewChild,
    args: ["descriptionContainer"]
  }], descriptionText: [{
    type: ViewChild,
    args: ["descriptionText"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerAboutComponent, { className: "SellerAboutComponent", filePath: "apps/findqo-ireland/src/app/feature/seller/component/seller-about/seller-about.component.ts", lineNumber: 55 });
})();

// apps/findqo-ireland/src/app/feature/seller/component/seller-ad-list/seller-ad-list.component.ts
var _c04 = ["scrollTrigger"];
var _c12 = ["adListTemplate"];
var _c22 = (a0, a1) => ({ ads: a0, sortList: a1 });
var _c3 = (a0) => ({ "remove-background-color": a0 });
function SellerAdListComponent_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function SellerAdListComponent_ng_container_0_ng_template_2_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", vm_r2.ads.metadata == null ? null : vm_r2.ads.metadata.total, " ", \u0275\u0275pipeBind1(2, 2, "n9"), "");
  }
}
function SellerAdListComponent_ng_container_0_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, SellerAdListComponent_ng_container_0_ng_template_2_div_0_span_1_Template, 3, 4, "span", 13);
    \u0275\u0275elementStart(2, "div", 14, 4)(4, "findqo-button", 15);
    \u0275\u0275pipe(5, "sortLabel");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("clicked", function SellerAdListComponent_ng_container_0_ng_template_2_div_0_Template_findqo_button_clicked_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOpenSort());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "findqo-cdk-dropdown", 16)(8, "div", 17)(9, "findqo-filters-sort", 18);
    \u0275\u0275listener("selectSort", function SellerAdListComponent_ng_container_0_ng_template_2_div_0_Template_findqo_filters_sort_selectSort_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onCloseSort($event));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const dropdownSortRef_r4 = \u0275\u0275reference(3);
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c3, +(vm_r2.ads.metadata == null ? null : vm_r2.ads.metadata.total) === 0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.seller);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 8, \u0275\u0275pipeBind1(5, 6, vm_r2 == null ? null : vm_r2.sortList)))("btnType", ctx_r2.buttonType.BASIC);
    \u0275\u0275advance(3);
    \u0275\u0275property("reference", dropdownSortRef_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx_r2.toggleSort);
  }
}
function SellerAdListComponent_ng_container_0_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "findqo-empty-ad-list", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("pageName", "seller");
  }
}
function SellerAdListComponent_ng_container_0_ng_template_2_div_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "findqo-findqo-ad")(2, "mat-divider", 25);
    \u0275\u0275elementEnd();
  }
}
function SellerAdListComponent_ng_container_0_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "findqo-ad-item-v2", 23);
    \u0275\u0275template(2, SellerAdListComponent_ng_container_0_ng_template_2_div_2_Conditional_2_Template, 3, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const vm_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ad", ad_r5)("isPublicPage", ctx_r2.isPublicPage);
    \u0275\u0275advance();
    \u0275\u0275conditional((index_r6 + 1) % 5 === 0 || index_r6 === vm_r2.ads.adList.length - 1 && (index_r6 + 1) % 5 !== 0 && !ctx_r2.isPublicPage ? 2 : -1);
  }
}
function SellerAdListComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SellerAdListComponent_ng_container_0_ng_template_2_div_0_Template, 10, 12, "div", 9)(1, SellerAdListComponent_ng_container_0_ng_template_2_div_1_Template, 2, 1, "div", 10)(2, SellerAdListComponent_ng_container_0_ng_template_2_div_2_Template, 3, 3, "div", 11);
  }
  if (rf & 2) {
    const vm_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("ngIf", +(vm_r2.ads.metadata == null ? null : vm_r2.ads.metadata.total));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r2.ads.isEmptyList || !vm_r2.ads.adList.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vm_r2.ads.adList);
  }
}
function SellerAdListComponent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementEnd();
  }
}
function SellerAdListComponent_ng_container_0_ng_template_8_findqo_ad_list_skeleton_loading_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-ad-list-skeleton-loading");
  }
}
function SellerAdListComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SellerAdListComponent_ng_container_0_ng_template_8_findqo_ad_list_skeleton_loading_0_Template, 1, 0, "findqo-ad-list-skeleton-loading", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r2.adListSkeletonArray);
  }
}
function SellerAdListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SellerAdListComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 6)(2, SellerAdListComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(4, "div", 7, 2);
    \u0275\u0275template(6, SellerAdListComponent_ng_container_0_div_6_Template, 2, 0, "div", 8);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, SellerAdListComponent_ng_container_0_ng_template_8_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r2 = ctx.ngIf;
    const adListTemplate_r7 = \u0275\u0275reference(3);
    const adListSkeletonLoaderTemplate_r8 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", vm_r2.ads.isLoading ? adListSkeletonLoaderTemplate_r8 : adListTemplate_r7);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 2, ctx_r2.isLoadingMoreAds$));
  }
}
function SellerAdListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "n3589"));
  }
}
var SellerAdListComponent = class _SellerAdListComponent {
  constructor(platformId, viewport, sellerFacade, filtersFacade, matBottomSheet, device, router) {
    this.platformId = platformId;
    this.viewport = viewport;
    this.sellerFacade = sellerFacade;
    this.filtersFacade = filtersFacade;
    this.matBottomSheet = matBottomSheet;
    this.device = device;
    this.router = router;
    this.isPublicPage = false;
    this.buttonType = ButtonType;
    this.isLoadingMoreAds$ = this.sellerFacade.getIsLoadingMoreAds$();
    this.sortList$ = this.filtersFacade.getSortList$();
    this.adListSkeletonArray = Array(3);
    this.pageNumber = 1;
    this.toggleSort = false;
  }
  initIntersectionObserver() {
    if (isPlatformBrowser(this.platformId) && this.adListTemplate?.nativeElement) {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.fetchAdsOnScroll();
          }
        });
      }, { rootMargin: "0px", threshold: 0.1 });
      this.intersectionObserver.observe(this.scrollTrigger.nativeElement);
    }
  }
  fetchAdsOnScroll() {
    const PAGE_META_DATA = this.sellerFacade.getMetadata();
    if (+PAGE_META_DATA?.totalPages > this.pageNumber) {
      this.pageNumber += 1;
      this.sellerFacade.updateAdsList({
        page: this.pageNumber,
        userId: this.sellerFacade.getSeller().id,
        sellerTypeId: this.sellerFacade.getSeller().sellerTypeId
      });
    }
  }
  onOpenSortBottomSheet() {
    this.matBottomSheet.open(FiltersSortComponent, {
      panelClass: FiltersPanelClass.BASE_MIN_MAX_FILTER.split(/\s+/)
    }).afterDismissed().subscribe((res) => {
      if (res) {
        this.navigateTo(res);
      }
    });
  }
  onOpenSort() {
    if (this.device.isMobile()) {
      this.onOpenSortBottomSheet();
      return;
    }
    this.toggleSort = true;
    this.cdkDropdown.show();
  }
  onCloseSort(reference) {
    this.navigateTo(reference);
    this.toggleSort = false;
    this.cdkDropdown.hide();
  }
  navigateTo(reference) {
    if (this.isAgentPage) {
      this.router.navigate([`/agent/${this.agentId}/${this.agentName}`], {
        queryParams: { sort: reference }
      });
      return;
    }
    this.router.navigate(["/" + APP_ROUTE.seller(this.seller?.id, this.seller?.profileId, this.seller?.sellerTypeId)], {
      queryParams: { sort: reference }
    });
  }
  ngAfterViewInit() {
    this.initIntersectionObserver();
  }
  ngOnInit() {
    this.seller$.subscribe((res) => {
      this.seller = res;
    });
  }
  static {
    this.\u0275fac = function SellerAdListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerAdListComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(SellerFacade), \u0275\u0275directiveInject(FiltersFacade), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(DeviceDetectorService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerAdListComponent, selectors: [["findqo-seller-ad-list"]], viewQuery: function SellerAdListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5, ElementRef);
        \u0275\u0275viewQuery(_c12, 5, ElementRef);
        \u0275\u0275viewQuery(CdkDropdownComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollTrigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.adListTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkDropdown = _t.first);
      }
    }, inputs: { isPublicPage: "isPublicPage", adListVm$: "adListVm$", seller$: "seller$", isAgentPage: "isAgentPage", agentName: "agentName", agentId: "agentId" }, standalone: false, decls: 5, vars: 8, consts: [["noAdsList", ""], ["adListTemplate", ""], ["scrollTrigger", ""], ["adListSkeletonLoaderTemplate", ""], ["dropdownSortRef", ""], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "trigger-element"], ["class", "position-relative w-100", 4, "ngIf"], ["class", "h-40px align-self-center header-section text-truncate px-3 d-flex align-items-center my-2", 3, "ngClass", 4, "ngIf"], ["class", "empty-list", 4, "ngIf"], ["class", "mb-sm-4 p-3 p-sm-0", 4, "ngFor", "ngForOf"], [1, "h-40px", "align-self-center", "header-section", "text-truncate", "px-3", "d-flex", "align-items-center", "my-2", 3, "ngClass"], ["class", "fs-14px fw-400 lh-18px fg-general-5 px-sm-0", 4, "ngIf"], [1, "sort", "ms-auto"], ["materialIconSuffix", "sort", 1, "float-end", 3, "clicked", "label", "btnType"], [3, "reference"], [1, "filters-cdk-dropdown"], [3, "selectSort", "isOpen"], [1, "fs-14px", "fw-400", "lh-18px", "fg-general-5", "px-sm-0"], [1, "empty-list"], [3, "pageName"], [1, "mb-sm-4", "p-3", "p-sm-0"], [3, "ad", "isPublicPage"], [1, "d-lg-none", "text-center", "mb-sm-4"], [1, "my-3", "on-desktop", "d-sm-none"], [1, "position-relative", "w-100"], [1, "spinner-loading"], [4, "ngFor", "ngForOf"], [1, "heading-1", "fg-general-5", "text-center", "my-4"]], template: function SellerAdListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SellerAdListComponent_ng_container_0_Template, 10, 4, "ng-container", 5);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275pipe(2, "async");
        \u0275\u0275template(3, SellerAdListComponent_ng_template_3_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(5, _c22, \u0275\u0275pipeBind1(1, 1, ctx.adListVm$), \u0275\u0275pipeBind1(2, 3, ctx.sortList$)));
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, AdItemV2Component, EmptyAdListComponent, MatProgressSpinner, AdListSkeletonLoadingComponent, FiltersSortComponent, CdkDropdownComponent, ButtonComponent, FindqoAdComponent, MatDivider, AsyncPipe, SortLabelPipe, TranslationsPipe], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  height: 40px;\n  line-height: 40px;\n  background-color: var(--general-1);\n}\n.header[_ngcontent-%COMP%]   .remove-background-color[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: auto;\n}\n@media (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    background-color: transparent;\n    height: auto;\n  }\n  .header--public[_ngcontent-%COMP%] {\n    line-height: 0;\n  }\n  .header--public[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n}\n.trigger-element[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.position-relative.w-100[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.spinner-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  width: 50px !important;\n  height: 50px !important;\n}\ndiv.sort[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 250px;\n}\n.empty-list[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller-ad-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerAdListComponent, [{
    type: Component,
    args: [{ selector: "findqo-seller-ad-list", standalone: false, template: `<ng-container
  *ngIf="{
		ads: adListVm$ | async,
		sortList: sortList$ | async
	} as vm"
>
  <ng-template [ngTemplateOutlet]="vm.ads.isLoading ? adListSkeletonLoaderTemplate : adListTemplate"></ng-template>

  <ng-template #adListTemplate>
    <div
      class="h-40px align-self-center header-section text-truncate px-3 d-flex align-items-center my-2"
      [ngClass]="{ 'remove-background-color': +vm.ads.metadata?.total === 0 }"
      *ngIf="+vm.ads.metadata?.total"
    >
      <span class="fs-14px fw-400 lh-18px fg-general-5 px-sm-0" *ngIf="seller">{{ vm.ads.metadata?.total }} {{ 'n9' | translations }}</span>

      <div #dropdownSortRef class="sort ms-auto">
        <findqo-button
          class="float-end"
          materialIconSuffix="sort"
          [label]="vm?.sortList | sortLabel | async"
          [btnType]="buttonType.BASIC"
          (clicked)="onOpenSort()"
        ></findqo-button>

        <findqo-cdk-dropdown [reference]="dropdownSortRef">
          <div class="filters-cdk-dropdown">
            <findqo-filters-sort [isOpen]="toggleSort" (selectSort)="onCloseSort($event)"></findqo-filters-sort>
          </div>
        </findqo-cdk-dropdown>
      </div>
    </div>

    <div class="empty-list" *ngIf="vm.ads.isEmptyList || !vm.ads.adList.length">
      <findqo-empty-ad-list [pageName]="'seller'"></findqo-empty-ad-list>
    </div>

    <div class="mb-sm-4 p-3 p-sm-0" *ngFor="let ad of vm.ads.adList; let index = index">
      <findqo-ad-item-v2 [ad]="ad" [isPublicPage]="isPublicPage"></findqo-ad-item-v2>

      @if ((index + 1) % 5 === 0 || (index === vm.ads.adList.length - 1 && (index + 1) % 5 !== 0 && !isPublicPage)) {
        <div class="d-lg-none text-center mb-sm-4">
          <findqo-findqo-ad></findqo-findqo-ad>
          <mat-divider class="my-3 on-desktop d-sm-none"></mat-divider>
        </div>
      }
    </div>
  </ng-template>

  <div #scrollTrigger class="trigger-element"></div>

  <div class="position-relative w-100" *ngIf="isLoadingMoreAds$ | async">
    <mat-spinner class="spinner-loading"></mat-spinner>
  </div>

  <!-- Skeleton loader -->
  <ng-template #adListSkeletonLoaderTemplate>
    <findqo-ad-list-skeleton-loading *ngFor="let i of adListSkeletonArray"></findqo-ad-list-skeleton-loading>
  </ng-template>
</ng-container>

<!-- No ads -->
<ng-template #noAdsList>
  <h1 class="heading-1 fg-general-5 text-center my-4">{{ 'n3589' | translations }}</h1>
</ng-template>
`, styles: ["/* apps/findqo-ireland/src/app/feature/seller/component/seller-ad-list/seller-ad-list.component.scss */\n.header {\n  height: 40px;\n  line-height: 40px;\n  background-color: var(--general-1);\n}\n.header .remove-background-color {\n  background-color: transparent;\n  height: auto;\n}\n@media (min-width: 576px) {\n  .header {\n    background-color: transparent;\n    height: auto;\n  }\n  .header--public {\n    line-height: 0;\n  }\n  .header--public mat-divider {\n    margin-top: 0.5rem;\n  }\n}\n.trigger-element {\n  visibility: hidden;\n}\n.position-relative.w-100 {\n  height: 50px;\n}\n.spinner-loading {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  width: 50px !important;\n  height: 50px !important;\n}\ndiv.sort {\n  width: 100%;\n  max-width: 250px;\n}\n.empty-list {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller-ad-list.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ViewportService }, { type: SellerFacade }, { type: FiltersFacade }, { type: MatBottomSheet }, { type: DeviceDetectorService }, { type: Router }], { scrollTrigger: [{
    type: ViewChild,
    args: ["scrollTrigger", { read: ElementRef }]
  }], adListTemplate: [{
    type: ViewChild,
    args: ["adListTemplate", { read: ElementRef }]
  }], cdkDropdown: [{
    type: ViewChild,
    args: [CdkDropdownComponent]
  }], isPublicPage: [{
    type: Input
  }], adListVm$: [{
    type: Input
  }], seller$: [{
    type: Input
  }], isAgentPage: [{
    type: Input
  }], agentName: [{
    type: Input
  }], agentId: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerAdListComponent, { className: "SellerAdListComponent", filePath: "apps/findqo-ireland/src/app/feature/seller/component/seller-ad-list/seller-ad-list.component.ts", lineNumber: 24 });
})();

// apps/findqo-ireland/src/app/feature/seller/pages/seller.page.ts
var _c05 = ["class", "page"];
var _c13 = (a0, a1) => ({ seller: a0, adsVm: a1 });
function SellerPage_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "findqo-seller-about", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("name", vm_r1.seller.name)("description", vm_r1.seller.description);
  }
}
function SellerPage_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "findqo-seller-profile-card", 6);
    \u0275\u0275template(2, SellerPage_Conditional_1_Conditional_0_Conditional_2_Template, 2, 2, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seller", vm_r1.seller)("totalAdViews", +vm_r1.adsVm.metadata.sellerPageViewCount)("isAgent", ctx_r1.isAgentPage);
    \u0275\u0275advance();
    \u0275\u0275conditional((vm_r1.seller == null ? null : vm_r1.seller.description) ? 2 : -1);
  }
}
function SellerPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SellerPage_Conditional_1_Conditional_0_Template, 3, 4, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.seller ? 0 : -1);
  }
}
function SellerPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "findqo-findqo-ad");
    \u0275\u0275elementEnd();
  }
}
var SellerPage = class _SellerPage {
  constructor(document, platformId, sellerFacade, renderer, canonicalService, sharedAdsFacade, activatedRoute, destroyService, seoService, ssoPostLoginService, authService) {
    this.document = document;
    this.platformId = platformId;
    this.sellerFacade = sellerFacade;
    this.renderer = renderer;
    this.canonicalService = canonicalService;
    this.sharedAdsFacade = sharedAdsFacade;
    this.activatedRoute = activatedRoute;
    this.destroyService = destroyService;
    this.seoService = seoService;
    this.ssoPostLoginService = ssoPostLoginService;
    this.authService = authService;
    this.isPublicPage = false;
    this.isAgentPage = false;
    this.adsVm$ = this.sharedAdsFacade.getAdsVm$();
    this.seller$ = this.sellerFacade.getSeller$();
  }
  loadSellerAdList(queryParams) {
    this.isAgentPage = !!this.agentId;
    this.sellerFacade.loadAdList({
      userId: this.sellerId,
      sellerTypeId: this.sellerType === SellerTypeSlug.INDIVIDUAL ? SellerType.INDIVIDUAL : SellerType.BUSINESS,
      sort: queryParams["sort"],
      agentId: this.agentId
    });
  }
  setSEO() {
    const URL = this.isAgentPage ? `/agent/${this.agentId}/${this.agentName}` : `${APP_ROUTE.seller(this.sellerId, this.sellerName, this.sellerType === SellerTypeSlug.INDIVIDUAL ? SellerType.INDIVIDUAL : SellerType.BUSINESS)}`;
    this.canonicalService.createCannonicaUrl(URL);
    this.seller$.pipe(takeUntil(this.destroyService), filter((seller) => !!seller), tap((seller) => {
      if (seller.sellerTypeId === SellerType.INDIVIDUAL) {
        this.seoService.robotsNoindex();
      }
    })).subscribe((seller) => {
      this.seoService.setSeo(__spreadValues(__spreadValues({
        title: seller?.name
      }, !!seller?.location && { description: SELLER_META_CONTENTS.description(seller.name, seller.location.address) }), !!seller?.picture && { image: seller.picture }));
    });
  }
  addToFav(ad) {
    if (this.authService.user()?.id !== ad.seller.id) {
      ad = __spreadProps(__spreadValues({}, ad), {
        isFavorite: "1"
      });
      this.sharedAdsFacade.addFavouriteAdFromList(ad);
    }
  }
  ngOnInit() {
    this.setSEO();
    this.activatedRoute.queryParams.subscribe((qp) => {
      this.loadSellerAdList(qp);
    });
    this.renderer.addClass(this.document.body, "hide-scrollbar");
    if (isPlatformBrowser(this.platformId)) {
      this.ssoPostLoginService.handlePostLoginWithAction({
        [PostLoginAction.ADD_TO_FAVORITE]: this.addToFav.bind(this)
      });
    }
  }
  ngOnDestroy() {
    this.sellerFacade.clearData();
  }
  static {
    this.\u0275fac = function SellerPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerPage)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(SellerFacade), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(CanonicalService), \u0275\u0275directiveInject(SharedAdsFacade), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(SsoPostLoginService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerPage, selectors: [["findqo-seller", 8, "page"]], inputs: { sellerName: "sellerName", sellerType: "sellerType", sellerId: "sellerId", isPublicPage: "isPublicPage", agentId: "agentId", agentName: "agentName" }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], attrs: _c05, decls: 8, vars: 17, consts: [[1, "container", "p-0", "p-sm-2"], [1, "row", "gap-sm-4"], [1, "col", "overflow-hidden"], [3, "isPublicPage", "adListVm$", "seller$", "isAgentPage", "agentName", "agentId"], ["class", "col-auto overflow-hidden d-none d-lg-block position-sticky ad-container", 4, "ngIf"], [1, "p-2"], [3, "seller", "totalAdViews", "isAgent"], [1, "py-3"], [3, "name", "description"], [1, "col-auto", "overflow-hidden", "d-none", "d-lg-block", "position-sticky", "ad-container"]], template: function SellerPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SellerPage_Conditional_1_Template, 1, 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275pipe(3, "async");
        \u0275\u0275elementStart(4, "div", 1)(5, "div", 2);
        \u0275\u0275element(6, "findqo-seller-ad-list", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, SellerPage_div_7_Template, 2, 0, "div", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275classProp("public-container", ctx.isPublicPage);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pureFunction2(14, _c13, \u0275\u0275pipeBind1(2, 10, ctx.seller$), \u0275\u0275pipeBind1(3, 12, ctx.adsVm$))) ? 1 : -1, tmp_1_0);
        \u0275\u0275advance(5);
        \u0275\u0275property("isPublicPage", ctx.isPublicPage)("adListVm$", ctx.adsVm$)("seller$", ctx.seller$)("isAgentPage", ctx.isAgentPage)("agentName", ctx.agentName)("agentId", ctx.agentId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isPublicPage && !ctx.isAgentPage);
      }
    }, dependencies: [NgIf, SellerAdListComponent, FindqoAdComponent, SellerProfileCardComponent, SellerAboutComponent, AsyncPipe], styles: ["\n\ndiv.public-container[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding: 0;\n}\n@media (min-width: 992px) {\n  .left-section[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 70px;\n    height: calc(100vh - 20px);\n  }\n}\n.ad-container[_ngcontent-%COMP%] {\n  height: fit-content;\n  top: 48px !important;\n  padding-top: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SellerPage, [{
    type: Component,
    args: [{ selector: "findqo-seller.page", providers: [DestroyService], standalone: false, template: '<div class="container p-0 p-sm-2" [class.public-container]="isPublicPage">\n	@if (\n		{\n			seller: seller$ | async,\n			adsVm: adsVm$ | async\n		};\n		as vm\n	) {\n		@if (vm.seller) {\n			<div class="p-2">\n				<findqo-seller-profile-card\n					[seller]="vm.seller"\n					[totalAdViews]="+vm.adsVm.metadata.sellerPageViewCount"\n					[isAgent]="isAgentPage"\n				></findqo-seller-profile-card>\n\n				@if (vm.seller?.description) {\n					<div class="py-3">\n						<findqo-seller-about [name]="vm.seller.name" [description]="vm.seller.description"></findqo-seller-about>\n					</div>\n				}\n			</div>\n		}\n	}\n\n	<div class="row gap-sm-4">\n		<div class="col overflow-hidden">\n			<findqo-seller-ad-list\n				[isPublicPage]="isPublicPage"\n				[adListVm$]="adsVm$"\n				[seller$]="seller$"\n				[isAgentPage]="isAgentPage"\n				[agentName]="agentName"\n				[agentId]="agentId"\n			></findqo-seller-ad-list>\n		</div>\n\n		<div class="col-auto overflow-hidden d-none d-lg-block position-sticky ad-container" *ngIf="!isPublicPage && !isAgentPage">\n			<findqo-findqo-ad></findqo-findqo-ad>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/seller/pages/seller.page.scss */\ndiv.public-container {\n  margin-top: 0;\n  padding: 0;\n}\n@media (min-width: 992px) {\n  .left-section {\n    position: sticky;\n    top: 70px;\n    height: calc(100vh - 20px);\n  }\n}\n.ad-container {\n  height: fit-content;\n  top: 48px !important;\n  padding-top: 40px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/seller.page.css.map */\n"] }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: SellerFacade }, { type: Renderer2 }, { type: CanonicalService }, { type: SharedAdsFacade }, { type: ActivatedRoute }, { type: DestroyService }, { type: SeoService }, { type: SsoPostLoginService }, { type: AuthService }], { sellerName: [{
    type: Input
  }], sellerType: [{
    type: Input
  }], sellerId: [{
    type: Input
  }], isPublicPage: [{
    type: Input
  }], agentId: [{
    type: Input
  }], agentName: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerPage, { className: "SellerPage", filePath: "apps/findqo-ireland/src/app/feature/seller/pages/seller.page.ts", lineNumber: 23 });
})();

export {
  SellerAdListComponent,
  SellerProfileCardComponent,
  SellerAboutComponent,
  SellerPage
};
//# sourceMappingURL=chunk-O3N4KFWX.js.map
