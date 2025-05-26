import {
  CancelSubscriptionDialogModule,
  IndividualAccountV2Component,
  IndividualAccountV2Module,
  SubscriptionOfferDialogModule,
  SubscriptionOfferModule
} from "./chunk-HIUU22W6.js";
import {
  ConfettiService
} from "./chunk-P5MOHOFP.js";
import {
  DeleteBusinessDialogComponent,
  SubscriptionModule
} from "./chunk-BW46TJNW.js";
import "./chunk-3KQDGRMW.js";
import {
  SeoGuard
} from "./chunk-44A3ZODA.js";
import {
  BusinessAccountV2Module
} from "./chunk-RNOQXJDC.js";
import {
  BusinessAgentListModule
} from "./chunk-6Z3MPJNO.js";
import "./chunk-62PZKBP3.js";
import "./chunk-LUIRD62T.js";
import "./chunk-YL2NNRDT.js";
import "./chunk-CM73RVW6.js";
import "./chunk-QRKYK676.js";
import "./chunk-3VDTWW5F.js";
import {
  MatTabsModule
} from "./chunk-T6P2TQWL.js";
import "./chunk-5JBKTQLQ.js";
import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-6TIUDW4S.js";
import "./chunk-2KWNZOXB.js";
import {
  MatMenuModule
} from "./chunk-5DPLTTSV.js";
import "./chunk-UWPIFTDN.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-76XBNLIX.js";
import "./chunk-HPH4IAIR.js";
import "./chunk-6I3UIAZY.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import {
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ButtonComponent,
  ButtonModule,
  FeatureIfDirective,
  FeatureVersion,
  FormsModule,
  MAT_DIALOG_DATA,
  MatCardModule,
  MatDialogClose,
  MatDialogModule,
  MatDividerModule,
  MatIconButton,
  MatInputModule,
  MatListModule,
  MyProfileChangeAvatarComponent,
  MyProfileFacade,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  RouteDataType,
  Router,
  RouterModule,
  SharedModule,
  TranslationsPipe,
  UntypedFormBuilder,
  VALIDATOR,
  Validators,
  ViewportService,
  environment
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsetComponentScope,
  ɵɵtemplate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/my-profile-v2/my-profile-v2.component.ts
var _c0 = (a0) => ({ tabIndex: a0 });
function MyProfileV2Component_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "findqo-individual-account-v2");
    \u0275\u0275elementEnd();
  }
}
var MyProfileV2Component = class _MyProfileV2Component {
  constructor(myProfileFacade, destroy, router) {
    this.myProfileFacade = myProfileFacade;
    this.destroy = destroy;
    this.router = router;
    this.isSubscribed = false;
    this.hasBusinessAccount = false;
    this.user$ = myProfileFacade.getUser$();
    this.showBusinessAcc$ = myProfileFacade.getShowBusinessAcc$();
    this.tabIndex$ = myProfileFacade.getProfileTabIndex$();
  }
  handleTabChange(index) {
    if (index !== 1) {
      this.router.navigate([APP_ROUTE.myProfile]);
    }
  }
  ngOnInit() {
    this.user$.pipe(takeUntil(this.destroy)).subscribe((user) => {
      this.hasBusinessAccount = user?.businessProfile?.name ? true : false;
    });
    this.showBusinessAcc$.pipe(takeUntil(this.destroy)).subscribe((showSubscribe) => {
      this.hasBusinessAccount = showSubscribe;
    });
    this.router.routerState.root.queryParams.pipe(takeUntil(this.destroy)).subscribe((params) => {
      this.myProfileFacade.setProfileTabIndex(params["tab"] ? params["tab"] : 0);
    });
  }
  static {
    this.\u0275fac = function MyProfileV2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfileV2Component)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyProfileV2Component, selectors: [["findqo-my-profile-v2"]], standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 3, vars: 5, consts: [[1, "bg-neutral-1", "w-100", "h-100", "py-4"], ["class", "container px-3 py-4 w-600px bg-basic-1 rounded profile-container", 4, "ngIf"], [1, "container", "px-3", "py-4", "w-600px", "bg-basic-1", "rounded", "profile-container"]], template: function MyProfileV2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, MyProfileV2Component_div_1_Template, 2, 0, "div", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(2, 1, ctx.tabIndex$)));
      }
    }, dependencies: [NgIf, IndividualAccountV2Component, AsyncPipe], styles: ["\n\n.w-600px[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\n.profile-container[_ngcontent-%COMP%] {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding-bottom: 24px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-profile-v2.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfileV2Component, [{
    type: Component,
    args: [{ selector: "findqo-my-profile-v2", providers: [DestroyService], standalone: false, template: '<div class="bg-neutral-1 w-100 h-100 py-4">\n	<div class="container px-3 py-4 w-600px bg-basic-1 rounded profile-container" *ngIf="{ tabIndex: tabIndex$ | async } as vm">\n		<findqo-individual-account-v2></findqo-individual-account-v2>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/v2/components/my-profile-v2/my-profile-v2.component.scss */\n.w-600px {\n  max-width: 600px;\n}\n.h-100 {\n  height: 100vh !important;\n}\n.profile-container {\n  padding-bottom: 89px !important;\n}\n@media (min-width: 992px) {\n  .profile-container {\n    padding-bottom: 24px !important;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-profile-v2.component.css.map */\n"] }]
  }], () => [{ type: MyProfileFacade }, { type: DestroyService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyProfileV2Component, { className: "MyProfileV2Component", filePath: "apps/findqo-ireland/src/app/feature/my-profile/v2/components/my-profile-v2/my-profile-v2.component.ts", lineNumber: 16 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/pages/my-profile/my-profile.page.ts
var _c02 = (a0) => [a0];
function MyProfilePage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "findqo-my-profile-v2");
    \u0275\u0275elementEnd();
  }
}
var MyProfilePage = class _MyProfilePage {
  constructor(viewport, fb, myProfileFacade, destroyService) {
    this.viewport = viewport;
    this.fb = fb;
    this.myProfileFacade = myProfileFacade;
    this.destroyService = destroyService;
    this.featureVersion = FeatureVersion;
    this.loading = false;
    this.phone = "";
    this.newPhone = "";
    this.selectedFile = null;
    this.isPhotoUploading = false;
    this.defaultUserImg = environment.defaultAvatarImg;
    this.isPhotoUploaded = false;
    this.form = this.fb.group({
      name: ["", [Validators.required, VALIDATOR.pattern.name]]
    });
    this.isLoading$ = myProfileFacade.getIsLoading$();
    this.user$ = myProfileFacade.getUser$();
  }
  onSubmit() {
    this.myProfileFacade.updateProfile(this.form.value);
  }
  showUserDetails() {
    this.user$.pipe(takeUntil(this.destroyService)).subscribe((response) => {
      if (response) {
        this.userDetails = response;
        this.form.get("name").setValue(response?.name || "");
        this.checkEmailPreference = response?.preference?.marketingEmailAlerts === "1";
      }
    });
  }
  ngOnInit() {
    this.showUserDetails();
    this.myProfileFacade.loadUser();
  }
  static {
    this.\u0275fac = function MyProfilePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfilePage)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(DestroyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyProfilePage, selectors: [["ng-component"]], standalone: false, features: [\u0275\u0275ProvidersFeature([{ provide: MAT_DIALOG_DATA, useValue: {} }, DestroyService])], decls: 1, vars: 3, consts: [[4, "findqoFeatureIf"]], template: function MyProfilePage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MyProfilePage_div_0_Template, 2, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("findqoFeatureIf", \u0275\u0275pureFunction1(1, _c02, ctx.featureVersion.V2));
      }
    }, dependencies: [FeatureIfDirective, MyProfileV2Component], styles: ["\n\na[_ngcontent-%COMP%] {\n  color: var(--info-3);\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.my-32px[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  margin-top: 32px;\n}\n.profile-save-btn.mat-mdc-unelevated-button.mat-mdc-button-base[_ngcontent-%COMP%] {\n  height: 38px !important;\n}\n.img-fluid[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n}\n.border-color[_ngcontent-%COMP%] {\n  border-color: var(--general-2) !important;\n}\n.user-profile-picture[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2) !important;\n  border-radius: 4px;\n  text-align: center;\n  padding-inline-start: 52.5px;\n  padding-inline-end: 52.5px;\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n@media (min-width: 992px) {\n  .ms-32px[_ngcontent-%COMP%] {\n    margin-inline-start: 32px !important;\n  }\n  .me-lg-32px[_ngcontent-%COMP%] {\n    margin-inline-end: 32px !important;\n  }\n  .custom-border[_ngcontent-%COMP%] {\n    border-inline-start: 1px solid var(--general-2);\n  }\n}\n@media (max-width: 575.98px) {\n  .px-sm-120px[_ngcontent-%COMP%] {\n    padding-inline-start: 120px;\n    padding-inline-end: 120px;\n  }\n  .custom-border[_ngcontent-%COMP%] {\n    border: none;\n  }\n}\n.mat-mdc-outlined-button.mat-warn[_ngcontent-%COMP%] {\n  color: var(--error-3) !important;\n}\n.mat-mdc-unelevated-button[_ngcontent-%COMP%]:disabled.mat-warn {\n  background-color: var(--error-3) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-profile.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfilePage, [{
    type: Component,
    args: [{ providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }, DestroyService], standalone: false, template: '<div *findqoFeatureIf="[featureVersion.V2]">\n	<findqo-my-profile-v2></findqo-my-profile-v2>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/pages/my-profile/my-profile.page.scss */\na {\n  color: var(--info-3);\n}\n.mat-mdc-form-field {\n  width: 100%;\n}\n.my-32px {\n  margin-bottom: 32px;\n  margin-top: 32px;\n}\n.profile-save-btn.mat-mdc-unelevated-button.mat-mdc-button-base {\n  height: 38px !important;\n}\n.img-fluid {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n}\n.border-color {\n  border-color: var(--general-2) !important;\n}\n.user-profile-picture {\n  border: 1px solid var(--general-2) !important;\n  border-radius: 4px;\n  text-align: center;\n  padding-inline-start: 52.5px;\n  padding-inline-end: 52.5px;\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n@media (min-width: 992px) {\n  .ms-32px {\n    margin-inline-start: 32px !important;\n  }\n  .me-lg-32px {\n    margin-inline-end: 32px !important;\n  }\n  .custom-border {\n    border-inline-start: 1px solid var(--general-2);\n  }\n}\n@media (max-width: 575.98px) {\n  .px-sm-120px {\n    padding-inline-start: 120px;\n    padding-inline-end: 120px;\n  }\n  .custom-border {\n    border: none;\n  }\n}\n.mat-mdc-outlined-button.mat-warn {\n  color: var(--error-3) !important;\n}\n.mat-mdc-unelevated-button:disabled.mat-warn {\n  background-color: var(--error-3) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-profile.page.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: UntypedFormBuilder }, { type: MyProfileFacade }, { type: DestroyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyProfilePage, { className: "MyProfilePage", filePath: "apps/findqo-ireland/src/app/feature/my-profile/pages/my-profile/my-profile.page.ts", lineNumber: 19 });
})();

// apps/findqo-ireland/src/app/feature/my-profile/my-profile-routing.module.ts
var routes = [
  {
    path: "",
    component: MyProfilePage,
    data: { title: "n12", [RouteDataType.IS_BOTTOM_NAVBAR_VISIBLE]: true },
    canActivate: [SeoGuard]
  }
];
var MyProfilePageRoutingModule = class _MyProfilePageRoutingModule {
  static {
    this.\u0275fac = function MyProfilePageRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfilePageRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyProfilePageRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfilePageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/components/my-profile-change-avatar-dialog/my-profile-change-avatar-dialog.module.ts
var MyProfileChangeAvatarDialogModule = class _MyProfileChangeAvatarDialogModule {
  static {
    this.\u0275fac = function MyProfileChangeAvatarDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfileChangeAvatarDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyProfileChangeAvatarDialogModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, ButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule, MatDialogModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfileChangeAvatarDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [MyProfileChangeAvatarComponent],
      imports: [SharedModule, ButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule, MatDialogModule],
      exports: [MyProfileChangeAvatarComponent]
    }]
  }], null, null);
})();
\u0275\u0275setComponentScope(MyProfileChangeAvatarComponent, [NgForOf, MatIconButton, MatIcon, ButtonComponent, MatRadioGroup, MatRadioButton, NgControlStatus, NgModel, MatDialogClose], [TranslationsPipe]);

// apps/findqo-ireland/src/app/feature/my-profile/v2/components/my-profile-v2/my-profile-v2.module.ts
var MyProfileV2Module = class _MyProfileV2Module {
  static {
    this.\u0275fac = function MyProfileV2Module_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfileV2Module)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyProfileV2Module });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatTabsModule, BusinessAccountV2Module, IndividualAccountV2Module, SubscriptionModule, SubscriptionOfferModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfileV2Module, [{
    type: NgModule,
    args: [{
      declarations: [MyProfileV2Component],
      imports: [SharedModule, MatTabsModule, BusinessAccountV2Module, IndividualAccountV2Module, SubscriptionModule, SubscriptionOfferModule],
      exports: [MyProfileV2Component]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/my-profile/my-profile.module.ts
var MyProfilePageModule = class _MyProfilePageModule {
  static {
    this.\u0275fac = function MyProfilePageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyProfilePageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyProfilePageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ConfettiService], imports: [
      SharedModule,
      MyProfilePageRoutingModule,
      MyProfileChangeAvatarDialogModule,
      MyProfileV2Module,
      BusinessAccountV2Module,
      IndividualAccountV2Module,
      SubscriptionModule,
      CancelSubscriptionDialogModule,
      SubscriptionOfferDialogModule,
      SubscriptionOfferModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatInputModule,
      MatMenuModule,
      BusinessAgentListModule,
      MatProgressSpinnerModule,
      ButtonModule,
      MatDividerModule,
      MatDialogModule,
      MatListModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProfilePageModule, [{
    type: NgModule,
    args: [{
      declarations: [MyProfilePage, DeleteBusinessDialogComponent],
      imports: [
        SharedModule,
        MyProfilePageRoutingModule,
        MyProfileChangeAvatarDialogModule,
        MyProfileV2Module,
        BusinessAccountV2Module,
        IndividualAccountV2Module,
        SubscriptionModule,
        CancelSubscriptionDialogModule,
        SubscriptionOfferDialogModule,
        SubscriptionOfferModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatMenuModule,
        BusinessAgentListModule,
        MatProgressSpinnerModule,
        ButtonModule,
        MatDividerModule,
        MatDialogModule,
        MatListModule
      ],
      exports: [MyProfilePage],
      providers: [ConfettiService]
    }]
  }], null, null);
})();
export {
  MyProfilePageModule
};
//# sourceMappingURL=chunk-P24BYRW5.js.map
