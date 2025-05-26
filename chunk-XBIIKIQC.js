import {
  AdsState
} from "./chunk-3GNTPSH6.js";
import {
  AdsApi
} from "./chunk-NQD7YOJF.js";
import {
  AdListKind,
  AuthApi,
  BooleanStatus,
  ButtonType,
  ConfigState,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  SnackService
} from "./chunk-DMGY2MF4.js";
import {
  Component,
  Inject,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  distinctUntilChanged,
  firstValueFrom,
  map,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/general/send-inquiry/apply-tenantin-link-dialog/apply-tenantin-link-dialog.component.ts
var ApplyTenantinLinkDialogComponent = class _ApplyTenantinLinkDialogComponent {
  constructor(dialogData, dialogRef) {
    this.dialogData = dialogData;
    this.dialogRef = dialogRef;
    this.buttonType = ButtonType;
  }
  onReSubmitEnquiry(isApplyAll) {
    const UPDATED_ENQUIRY_DATA = __spreadProps(__spreadValues({}, this.dialogData.enquiryData), { applyToAll: isApplyAll ? BooleanStatus.TRUE : BooleanStatus.FALSE });
    this.dialogData.sharedAdsFacade.reSubmitEnquiry(this.dialogData?.adId, this.dialogData?.enquiryId, UPDATED_ENQUIRY_DATA, this.dialogData?.myEnquiriesFacade);
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function ApplyTenantinLinkDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApplyTenantinLinkDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyTenantinLinkDialogComponent, selectors: [["findqo-apply-tenantin-link-dialog"]], standalone: false, decls: 28, vars: 23, consts: [[1, "container", "p-0"], [1, "row", "mx-0", "px-3", "justify-content-between", "align-items-center", "dialog-header"], [1, "col-auto", "px-0"], [1, "heading-4-regular", "fg-general-5", "m-0"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close-btn"], [1, "justify-content-center", "fg-general-4", "mx-auto", "fs-20px"], [1, "p-3"], [1, "text-body-regular", "fg-general-5"], [1, "text-body-regular", "fg-general-5", "d-block", "mt-18px"], [1, "row", "mx-0", "gap-3", "px-3", "py-15px", "dialog-actions"], [1, "col", "px-0"], [3, "clicked", "btnType", "label", "btnClass"]], template: function ApplyTenantinLinkDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "button", 4)(8, "mat-icon", 5);
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 8);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "findqo-button", 11);
        \u0275\u0275pipe(24, "translations");
        \u0275\u0275listener("clicked", function ApplyTenantinLinkDialogComponent_Template_findqo_button_clicked_23_listener() {
          return ctx.onReSubmitEnquiry(false);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 10)(26, "findqo-button", 11);
        \u0275\u0275pipe(27, "translations");
        \u0275\u0275listener("clicked", function ApplyTenantinLinkDialogComponent_Template_findqo_button_clicked_26_listener() {
          return ctx.onReSubmitEnquiry(true);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "n3542"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "n3543"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(+(ctx.dialogData == null ? null : ctx.dialogData.noTenantinLinkCount) - 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "n3569"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "n3544"));
        \u0275\u0275advance(4);
        \u0275\u0275property("btnType", ctx.buttonType.STROKED)("label", \u0275\u0275pipeBind1(24, 19, "n3546"))("btnClass", "text-body-regular w-100");
        \u0275\u0275advance(3);
        \u0275\u0275property("btnType", ctx.buttonType.FILLED)("label", \u0275\u0275pipeBind1(27, 21, "n3545"))("btnClass", "text-body-regular w-100 delete-dialog-btn");
      }
    }, styles: ["\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.mt-18px[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.py-15px[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/apply-tenantin-link-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyTenantinLinkDialogComponent, [{
    type: Component,
    args: [{ selector: "findqo-apply-tenantin-link-dialog", standalone: false, template: `<div class="container p-0">
	<div class="row mx-0 px-3 justify-content-between align-items-center dialog-header">
		<div class="col-auto px-0">
			<h4 class="heading-4-regular fg-general-5 m-0">{{ 'n3542' | translations }}</h4>
		</div>

		<div class="col-auto px-0">
			<button mat-icon-button mat-dialog-close class="close-btn">
				<mat-icon class="justify-content-center fg-general-4 mx-auto fs-20px">close</mat-icon>
			</button>
		</div>
	</div>

	<div class="p-3">
		<p class="text-body-regular fg-general-5">
			{{ 'n3543' | translations }}
			<span>{{ +dialogData?.noTenantinLinkCount - 1 }}</span>
			{{ 'n3569' | translations }}
		</p>

		<span class="text-body-regular fg-general-5 d-block mt-18px">{{ 'n3544' | translations }}</span>
	</div>

	<div class="row mx-0 gap-3 px-3 py-15px dialog-actions">
		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.STROKED"
				[label]="'n3546' | translations"
				[btnClass]="'text-body-regular w-100'"
				(clicked)="onReSubmitEnquiry(false)"
			></findqo-button>
		</div>

		<div class="col px-0">
			<findqo-button
				[btnType]="buttonType.FILLED"
				[label]="'n3545' | translations"
				[btnClass]="'text-body-regular w-100 delete-dialog-btn'"
				(clicked)="onReSubmitEnquiry(true)"
			></findqo-button>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/general/send-inquiry/apply-tenantin-link-dialog/apply-tenantin-link-dialog.component.scss */\n.close-btn {\n  width: 40px;\n  height: 40px;\n  background: var(--general-1);\n  border: none;\n}\n.dialog-header {\n  height: 60px;\n  border-bottom: 1px solid var(--neutral-2);\n}\n.dialog-actions {\n  height: 70px;\n  border-top: 1px solid var(--neutral-2);\n}\n.mt-18px {\n  margin-top: 18px;\n}\n.py-15px {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/apply-tenantin-link-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyTenantinLinkDialogComponent, { className: "ApplyTenantinLinkDialogComponent", filePath: "apps/findqo-ireland/src/app/feature/general/send-inquiry/apply-tenantin-link-dialog/apply-tenantin-link-dialog.component.ts", lineNumber: 24 });
})();

// apps/findqo-ireland/src/app/shared/facades/shared-ads.facade.ts
var SharedAdsFacade = class _SharedAdsFacade {
  constructor(adsState, configState, adsApi, snackService, matDialog, authApi) {
    this.adsState = adsState;
    this.configState = configState;
    this.adsApi = adsApi;
    this.snackService = snackService;
    this.matDialog = matDialog;
    this.authApi = authApi;
  }
  /**
   * Ads View Model
   */
  getAdsVm$() {
    return combineLatest({
      adList: this.adsState.adList$.pipe(distinctUntilChanged()),
      metadata: this.adsState.pageMetaData$.pipe(distinctUntilChanged()),
      adsCount: this.adsState.adsCount$.pipe(distinctUntilChanged()),
      isLoading: this.adsState.isLoading$.pipe(distinctUntilChanged()),
      isEmptyList: this.isEmptyAdList$().pipe(distinctUntilChanged())
    }).pipe(map(({ adList, metadata, adsCount, isLoading, isEmptyList }) => {
      return { adList, metadata, adsCount, isLoading, isEmptyList };
    }));
  }
  getAdList$() {
    return this.adsState.adList$;
  }
  getAd$() {
    return this.adsState.ad$;
  }
  updateAd(data) {
    this.adsState.updateAd(data);
  }
  isEmptyAdList$() {
    return this.adsState.adListKind$.pipe(map((kind) => kind === AdListKind.SIMILAR));
  }
  isLoading$() {
    return this.adsState.isLoading$;
  }
  getAdsCount$() {
    return this.adsState.adsCount$;
  }
  getPageMetaData$() {
    return this.adsState.pageMetaData$;
  }
  getPageMetaData() {
    return this.adsState.getPageMetaData();
  }
  ////TODO: move all this to a new SharedEnquiriesFacade file
  loadInquiry(adId) {
    return firstValueFrom(this.adsApi.getInquiry({ adId }));
  }
  getReportAdReasons$() {
    return this.adsState.reportAdReasons$;
  }
  addFavouriteAdFromList(ads) {
    this.adsApi.saveFavoriteAd(ads).subscribe(() => {
      this.adsState.updateAdList(__spreadProps(__spreadValues({}, ads), {
        isFavorite: "1"
      }));
      this.snackService.open({ data: { message: "Added to favorites" }, panelClass: ["snackbar-success"] });
    });
  }
  deleteFavouriteAdFromList(ad, dialogRef) {
    this.adsApi.deleteFavoriteAd(ad).subscribe(() => {
      this.snackService.open({ data: { message: "Removed from favorites" }, panelClass: ["snackbar-success"] });
      this.adsState.updateAdList(__spreadProps(__spreadValues({}, ad), {
        isFavorite: "0"
      }));
      if (dialogRef) {
        dialogRef.close();
        this.adsState.deleteAd(ad);
      }
    });
  }
  deleteFavouriteAd(ad) {
    this.adsApi.deleteFavoriteAd(ad).subscribe(() => {
      this.snackService.open({ data: { message: "Removed from favorites", icon: "info" }, panelClass: ["snackbar-success"] });
      this.adsState.updateAd(__spreadProps(__spreadValues({}, ad), {
        isFavorite: "0"
      }));
    });
  }
  saveFavouriteAd(ad) {
    this.adsApi.saveFavoriteAd(ad).subscribe(() => {
      this.snackService.open({ data: { message: "Added to favorites", icon: "info" }, panelClass: ["snackbar-success"] });
      this.adsState.updateAd(__spreadProps(__spreadValues({}, ad), {
        isFavorite: "1"
      }));
    });
  }
  //TODO: move all this to a new SharedEnquiriesFacade file
  sendInquiry(adId, data) {
    return firstValueFrom(this.adsApi.sendInquiry(adId, data));
  }
  loadReportAdReasons() {
    this.adsApi.getReportAdReasons().subscribe((data) => this.adsState.setReportAdReasons(data));
  }
  reportAd(adId, request, matDialogRef) {
    this.adsApi.reportAd(request, adId).subscribe(() => {
      matDialogRef.close();
      this.snackService.open({
        data: { translationKey: "n3304", type: "success", icon: "check_circle" },
        panelClass: "snackbar-success"
      });
    });
  }
  //TODO: move all this to a new SharedEnquiriesFacade file
  reSubmitEnquiry(adId, enquiryId, body, myEnquiriesFacade) {
    if (myEnquiriesFacade) {
      myEnquiriesFacade.setIsLoading(true);
    }
    this.adsApi.reSubmitEnquiry(adId, enquiryId, body).pipe(catchError((error) => {
      if (myEnquiriesFacade) {
        myEnquiriesFacade.setIsLoading(false);
      }
      this.snackService.open({
        data: { translationKey: "n608" },
        panelClass: "snackbar-error"
      });
      throw new Error(error?.message);
    })).subscribe(() => {
      if (myEnquiriesFacade) {
        myEnquiriesFacade.loadEnquiryList({ page: 1, perPage: 20 });
      }
      this.snackService.open({
        data: { translationKey: "n3570", icon: "check_circle" },
        panelClass: "snackbar-success"
      });
    });
  }
  //TODO: move all this to a new SharedEnquiriesFacade file
  handleEnquiryReSubmit(sendInquiryValues, dialogData, isShowApplyAllPopup, dialogRef) {
    if (+dialogData?.noTenantLinkTotal > 1 && isShowApplyAllPopup && sendInquiryValues?.tenantinEmail) {
      dialogRef.close();
      this.matDialog.open(ApplyTenantinLinkDialogComponent, {
        height: "auto",
        disableClose: true,
        maxHeight: "unset",
        data: {
          noTenantinLinkCount: dialogData.noTenantLinkTotal,
          enquiryData: sendInquiryValues,
          adId: dialogData?.ad?.id,
          enquiryId: dialogData?.inquiryData?.id,
          myEnquiriesFacade: dialogData.myEnquiriesFacade,
          sharedAdsFacade: dialogData.sharedAdsFacade
        },
        panelClass: "apply-tenantin-link-dialog"
      });
    } else {
      dialogRef.close();
      const UPDATED_SEND_ENQUIRY = __spreadProps(__spreadValues({}, sendInquiryValues), { applyToAll: BooleanStatus.FALSE });
      this.reSubmitEnquiry(dialogData?.ad?.id, dialogData?.inquiryData?.id, UPDATED_SEND_ENQUIRY, dialogData.myEnquiriesFacade);
    }
  }
  sendTenantOtp(body) {
    return this.authApi.sendTenantOtp(body);
  }
  verifyTenantOtp(request) {
    return this.authApi.verifyTenantOtp(request);
  }
  //TODO: Add a appropriate type to the body, in future when we will pass something to body
  createTenantProfile(body = {}) {
    return this.authApi.createTenantProfile(body);
  }
  getPdfLocalUrl(pdfSignedUrl) {
    return this.adsApi.getPdfContent(pdfSignedUrl).pipe(map((res) => {
      return new Blob([res], { type: "application/pdf" });
    }), catchError((err) => {
      this.snackService.open({ data: { message: this.configState.getTranslations()["n608"] }, panelClass: ["snackbar-error"] });
      return throwError(err);
    }));
  }
  static {
    this.\u0275fac = function SharedAdsFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedAdsFacade)(\u0275\u0275inject(AdsState), \u0275\u0275inject(ConfigState), \u0275\u0275inject(AdsApi), \u0275\u0275inject(SnackService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(AuthApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SharedAdsFacade, factory: _SharedAdsFacade.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedAdsFacade, [{
    type: Injectable
  }], () => [{ type: AdsState }, { type: ConfigState }, { type: AdsApi }, { type: SnackService }, { type: MatDialog }, { type: AuthApi }], null);
})();

export {
  ApplyTenantinLinkDialogComponent,
  SharedAdsFacade
};
//# sourceMappingURL=chunk-XBIIKIQC.js.map
