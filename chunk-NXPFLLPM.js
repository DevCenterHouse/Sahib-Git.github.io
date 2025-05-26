import {
  SubscriptionOffersComponent
} from "./chunk-RG2UJM2Z.js";
import {
  MatSlideToggleModule
} from "./chunk-JSBFZMNA.js";
import {
  SeoGuard
} from "./chunk-44A3ZODA.js";
import {
  CanonicalGuard
} from "./chunk-AK7V3HRG.js";
import "./chunk-5JBKTQLQ.js";
import "./chunk-ZM4NPOC4.js";
import {
  BedroomIconComponent,
  BedroomIconModule,
  PropertySizeIconComponent,
  PropertySizeIconModule,
  ShowerIconComponent,
  ShowerIconModule
} from "./chunk-UNCX2CTW.js";
import {
  SignUpSectionPage
} from "./chunk-NW3E66SE.js";
import "./chunk-2G7JVEJI.js";
import {
  PricingListComponent,
  PricingListModule
} from "./chunk-76XBNLIX.js";
import {
  ToggleComponent
} from "./chunk-HPH4IAIR.js";
import {
  SubscriptionButtonComponent
} from "./chunk-6I3UIAZY.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-34NPCBBY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HIMS7BZ4.js";
import "./chunk-5J2JGDL5.js";
import "./chunk-VZJAPMN6.js";
import {
  AGENT_SIGNUP_META_CONTENTS,
  APP_ROUTE,
  AdImagePreloadDirective,
  AdPricePipe,
  AgentsApi,
  AppEmailValidator,
  AuthService,
  ButtonModule,
  ButtonType,
  FormBuilder,
  FormsModule,
  MatButton,
  MatDialog,
  MatInputModule,
  PremiumUnlimitedPlan,
  ProfileState,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  SnackService,
  Validators
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  BehaviorSubject,
  Component,
  ElementRef,
  Inject,
  Injectable,
  Input,
  NgModule,
  PLATFORM_ID,
  ViewChild,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-landing/agent-landing.facade.ts
var AgentLandingFacade = class _AgentLandingFacade {
  constructor(agentApi) {
    this.agentApi = agentApi;
    this._agentLandingData$ = new BehaviorSubject(null);
    this._agentLandingMetaData$ = new BehaviorSubject(null);
  }
  get getAgentLandingData$() {
    return this._agentLandingData$.asObservable();
  }
  get getAgentLandingMetaData$() {
    return this._agentLandingMetaData$.asObservable();
  }
  getAgentData() {
    return this._agentLandingData$.getValue();
  }
  getMetaData() {
    return this._agentLandingMetaData$.getValue();
  }
  setAgentData(data) {
    return this._agentLandingData$.next(data);
  }
  setMetaData(metaData) {
    this._agentLandingMetaData$.next(metaData);
  }
  singupAgent(body) {
    return this.agentApi.agentSignUp(body);
  }
  getAgentLandingList(params) {
    this.agentApi.getList(params).subscribe((res) => {
      this._agentLandingData$.next(res?.data);
      this._agentLandingMetaData$.next(res?.meta);
    });
  }
  static {
    this.\u0275fac = function AgentLandingFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLandingFacade)(\u0275\u0275inject(AgentsApi));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AgentLandingFacade, factory: _AgentLandingFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLandingFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AgentsApi }], null);
})();

// apps/findqo-ireland/src/app/feature/agent-landing/components/signup-banner/signup-banner.component.ts
var SignupBannerComponent = class _SignupBannerComponent {
  static {
    this.\u0275fac = function SignupBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignupBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupBannerComponent, selectors: [["findqo-signup-banner"]], standalone: false, decls: 9, vars: 0, consts: [["routerLink", "/agent-hub", 1, "main", "row", "justify-content-center", "align-items-center", "px-4", "py-5", "p-md-5"], [1, "col-12", "col-md-6", "text-center", "text-md-start"], [1, "fg-prim-3", "fw-600"], [1, "fg-general-4", "px-3", "px-md-0"], [1, "col-12", "col-md-5", "text-center"], ["routerLink", "/agent-hub", "mat-flat-button", "", "color", "primary", 1, "rounded-pill", "mt-4", "p-4"]], template: function SignupBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Join the 100+ Estate Agents in Ireland who are on\xA0FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Join us today, and Get 2 Months FREE Trial.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275text(8, "SIGN UP TODAY");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [MatButton, RouterLink], styles: ['\n\n.main[_ngcontent-%COMP%] {\n  background-color: rgba(238, 0, 136, 0.025);\n  background-image: url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/bottom-left-shape.png"), url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/top-right-shape.png");\n  background-position: bottom left, top right;\n  background-repeat: no-repeat, no-repeat;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/signup-banner.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupBannerComponent, [{
    type: Component,
    args: [{ selector: "findqo-signup-banner", standalone: false, template: '<a routerLink="/agent-hub" class="main row justify-content-center align-items-center px-4 py-5 p-md-5">\n	<div class="col-12 col-md-6 text-center text-md-start">\n		<h2 class="fg-prim-3 fw-600">Join the 100+ Estate Agents in Ireland who are on\xA0FindQo.ie</h2>\n\n		<p class="fg-general-4 px-3 px-md-0">Join us today, and Get 2 Months FREE Trial.</p>\n	</div>\n\n	<div class="col-12 col-md-5 text-center">\n		<button routerLink="/agent-hub" mat-flat-button color="primary" class="rounded-pill mt-4 p-4">SIGN UP TODAY</button>\n	</div>\n</a>\n', styles: ['/* apps/findqo-ireland/src/app/feature/agent-landing/components/signup-banner/signup-banner.component.scss */\n.main {\n  background-color: rgba(238, 0, 136, 0.025);\n  background-image: url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/bottom-left-shape.png"), url("https://devcenterhouse.github.io/Sahib-Git.github.io/media/top-right-shape.png");\n  background-position: bottom left, top right;\n  background-repeat: no-repeat, no-repeat;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/signup-banner.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupBannerComponent, { className: "SignupBannerComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-landing/components/signup-banner/signup-banner.component.ts", lineNumber: 9 });
})();

// apps/findqo-ireland/src/app/feature/agent-landing/components/agent-item/agent-item.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _c1 = (a0) => ({ icon: "bedroom", label: a0 });
var _c2 = (a0) => ({ icon: "shower", label: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function AgentItemComponent_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 23);
    \u0275\u0275text(1, "verified_user");
    \u0275\u0275elementEnd();
  }
}
function AgentItemComponent_For_34_ng_template_5_Template(rf, ctx) {
}
function AgentItemComponent_For_34_ng_template_9_Template(rf, ctx) {
}
function AgentItemComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275element(1, "img", 24);
    \u0275\u0275elementStart(2, "div", 25)(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AgentItemComponent_For_34_ng_template_5_Template, 0, 0, "ng-template", 27);
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "adPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AgentItemComponent_For_34_ng_template_9_Template, 0, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r1 = ctx.$implicit;
    \u0275\u0275nextContext();
    const adFeatureFlagTemplate_r2 = \u0275\u0275reference(38);
    const propertiesAdFeatureTemplate_r3 = \u0275\u0275reference(40);
    \u0275\u0275property("href", ad_r1.adlink, \u0275\u0275sanitizeUrl)("title", ad_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", (ad_r1 == null ? null : ad_r1.images == null ? null : ad_r1.images.length) > 0 ? ad_r1 == null ? null : ad_r1.images[0] == null ? null : ad_r1.images[0].url : "assets/images/ad-not-available.svg")("alt", ad_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ad_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", propertiesAdFeatureTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c0, ad_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 10, ad_r1 == null ? null : ad_r1.price, ad_r1 == null ? null : ad_r1.rentalPeriod), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", adFeatureFlagTemplate_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(15, _c0, ad_r1));
  }
}
function AgentItemComponent_ng_template_35_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-bedroom-icon");
  }
}
function AgentItemComponent_ng_template_35_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-shower-icon");
  }
}
function AgentItemComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon", 29);
    \u0275\u0275template(2, AgentItemComponent_ng_template_35_Conditional_2_Template, 1, 0, "findqo-bedroom-icon")(3, AgentItemComponent_ng_template_35_Conditional_3_Template, 1, 0, "findqo-shower-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ad_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ad_r4.icon === "bedroom" || ad_r4.icon === "shower" ? "" : ad_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional((ad_r4 == null ? null : ad_r4.icon) === "bedroom" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ad_r4 == null ? null : ad_r4.icon) === "shower" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ad_r4.label);
  }
}
function AgentItemComponent_ng_template_37_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 33);
    \u0275\u0275text(2, "FEATURED");
    \u0275\u0275elementEnd()();
  }
}
function AgentItemComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AgentItemComponent_ng_template_37_div_0_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const ad_r5 = ctx.$implicit;
    \u0275\u0275property("ngIf", +(ad_r5 == null ? null : ad_r5.isFeatured));
  }
}
function AgentItemComponent_ng_template_39_div_1_ng_template_1_Template(rf, ctx) {
}
function AgentItemComponent_ng_template_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, AgentItemComponent_ng_template_39_div_1_ng_template_1_Template, 0, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const adFeatureBadgeTemplate_r7 = \u0275\u0275reference(36);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c0, \u0275\u0275pureFunction1(2, _c1, ad_r6.bedroomCount.trim().slice(0, 1))));
  }
}
function AgentItemComponent_ng_template_39_div_2_ng_template_1_Template(rf, ctx) {
}
function AgentItemComponent_ng_template_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, AgentItemComponent_ng_template_39_div_2_ng_template_1_Template, 0, 0, "ng-template", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const adFeatureBadgeTemplate_r7 = \u0275\u0275reference(36);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", adFeatureBadgeTemplate_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c0, \u0275\u0275pureFunction1(2, _c2, ad_r6.bathroomCount)));
  }
}
function AgentItemComponent_ng_template_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 28)(2, "mat-icon");
    \u0275\u0275element(3, "findqo-property-size-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ad_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ad_r6.propertySize.value, " ", ad_r6.propertySize.parameter, "");
  }
}
function AgentItemComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, AgentItemComponent_ng_template_39_div_1_Template, 2, 6, "div", 35)(2, AgentItemComponent_ng_template_39_div_2_Template, 2, 6, "div", 35)(3, AgentItemComponent_ng_template_39_div_3_Template, 6, 2, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ad_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ad_r6 == null ? null : ad_r6.bedroomCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", +(ad_r6 == null ? null : ad_r6.bathroomCount) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ad_r6 == null ? null : ad_r6.propertySize == null ? null : ad_r6.propertySize.value) && (ad_r6.propertySize == null ? null : ad_r6.propertySize.value) !== 0);
  }
}
var AgentItemComponent = class _AgentItemComponent {
  static {
    this.\u0275fac = function AgentItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentItemComponent, selectors: [["findqo-agent-item"]], inputs: { agent: "agent" }, standalone: false, decls: 41, vars: 9, consts: [["adFeatureBadgeTemplate", ""], ["adFeatureFlagTemplate", ""], ["propertiesAdFeatureTemplate", ""], [1, "agent-item", "py-3", "mb-3", "mb-md-4"], [1, "bg-general-1", "d-flex", "px-2", "px-md-3", "py-2", "gap-md-3", "align-items-center"], ["width", "85px", "height", "60px", 1, "agent-logo", 3, "src"], [1, "text-truncate", "ms-2", "ms-md-0"], [1, "d-flex", "gap-md-2", "pe-2", "pe-md-0", "align-items-center"], [1, "agent-name", "fg-general-5", "text-truncate"], ["class", "verify-icon fg-success-3 align-center fs-18px ms-1", 4, "ngIf"], [1, "d-flex", "align-items-center", "fs-12px", "mt-md-1"], [1, "fg-general-5"], [1, "fw-500"], [1, "divider", "mx-2", "d-none", "d-md-block"], [1, "fg-general-5", "d-none", "d-md-block"], [1, "view-all", "me-0", "ms-auto"], [1, "fs-14px", "fg-prim-2", 3, "href"], [1, "d-flex", "align-items-center", "gap-2"], [1, "d-none", "d-md-block"], [1, "fs-18px"], [1, "mt-2", "mt-md-3"], [1, "d-flex", "gap-3", "flex-nowrap", "overflow-auto", "hide-scrollbar"], ["target", "_blank", "data-bs-toggle", "tooltip", 1, "list-item", "rounded", "position-relative", 3, "href", "title"], [1, "verify-icon", "fg-success-3", "align-center", "fs-18px", "ms-1"], ["findqoAdImage", "", "loading", "lazy", "width", "187", "height", "150", 1, "agent-ad", "image-skeleton-loader", "w-100", "bg-neutral-1", "rounded", 3, "ngSrc", "alt"], [1, "d-flex", "flex-column", "mt-2"], [1, "text-body-regular", "fg-general-5", "text-truncate"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "align-items-center"], [3, "svgIcon"], [1, "text-caption-2-regular", "fg-general-5"], ["class", "featured-tag bg-info-1 d-flex align-items-center px-2 position-absolute top-0 end-0", 4, "ngIf"], [1, "featured-tag", "bg-info-1", "d-flex", "align-items-center", "px-2", "position-absolute", "top-0", "end-0"], [1, "fg-info-3", "fs-12px", "fw-500"], [1, "row", "gap-2", "mt-1", "mb-2"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"]], template: function AgentItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
        \u0275\u0275element(2, "img", 5);
        \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "p", 8);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AgentItemComponent_mat_icon_7_Template, 2, 0, "mat-icon", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 10)(9, "p", 11);
        \u0275\u0275text(10, " Date Joined: ");
        \u0275\u0275elementStart(11, "span", 12);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "div", 13);
        \u0275\u0275elementStart(15, "p", 14)(16, "span", 12);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Properties for Rent ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "div", 13);
        \u0275\u0275elementStart(20, "p", 14)(21, "span", 12);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Properties for Sale ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 15)(25, "a", 16)(26, "div", 17);
        \u0275\u0275text(27, " View all ");
        \u0275\u0275elementStart(28, "span", 18)(29, "mat-icon", 19);
        \u0275\u0275text(30, "arrow_forward");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(31, "div", 20)(32, "div", 21);
        \u0275\u0275repeaterCreate(33, AgentItemComponent_For_34_Template, 10, 17, "a", 22, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, AgentItemComponent_ng_template_35_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(37, AgentItemComponent_ng_template_37_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(39, AgentItemComponent_ng_template_39_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("src", (ctx.agent == null ? null : ctx.agent.picture) || "/assets/images/profile/business-account-photo.svg", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.agent.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.agent.isVerified);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 7, +ctx.agent.createdAt * 1e3));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.agent.count.rentProperty);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.agent.count.saleProperty);
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.agent.profileUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.agent.ads);
      }
    }, dependencies: [NgIf, NgTemplateOutlet, MatIcon, NgOptimizedImage, AdImagePreloadDirective, PropertySizeIconComponent, BedroomIconComponent, ShowerIconComponent, DatePipe, AdPricePipe], styles: ["\n\n.agent-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--neutral-2);\n}\n.list-item[_ngcontent-%COMP%] {\n  width: 25%;\n}\n@media (max-width: 767.98px) {\n  .list-item[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n.agent-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n@media (max-width: 767.98px) {\n  .agent-name[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 500;\n  }\n}\n.agent-logo[_ngcontent-%COMP%] {\n  width: 85px;\n  height: 100%;\n  max-height: 60px;\n  object-fit: contain;\n}\n@media (max-width: 767.98px) {\n  .agent-logo[_ngcontent-%COMP%] {\n    width: 55px;\n  }\n}\n@media (max-width: 767.98px) {\n  .view-all[_ngcontent-%COMP%] {\n    min-width: 55px;\n  }\n}\nimg.rounded[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\nimg.agent-ad[_ngcontent-%COMP%] {\n  object-fit: contain !important;\n}\n.divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 15px;\n  background-color: var(--neutral-2);\n}\n.featured-tag[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.verify-icon[_ngcontent-%COMP%] {\n  min-width: 20px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-item.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentItemComponent, [{
    type: Component,
    args: [{ selector: "findqo-agent-item", standalone: false, template: `<div class="agent-item py-3 mb-3 mb-md-4">
	<div class="bg-general-1 d-flex px-2 px-md-3 py-2 gap-md-3 align-items-center">
		<img class="agent-logo" width="85px" height="60px" [src]="agent?.picture || '/assets/images/profile/business-account-photo.svg'" />

		<div class="text-truncate ms-2 ms-md-0">
			<div class="d-flex gap-md-2 pe-2 pe-md-0 align-items-center">
				<p class="agent-name fg-general-5 text-truncate">{{ agent.name }}</p>

				<mat-icon *ngIf="agent.isVerified" class="verify-icon fg-success-3 align-center fs-18px ms-1">verified_user</mat-icon>
			</div>

			<div class="d-flex align-items-center fs-12px mt-md-1">
				<p class="fg-general-5">
					Date Joined:
					<span class="fw-500">{{ +agent.createdAt * 1000 | date }}</span>
				</p>

				<div class="divider mx-2 d-none d-md-block"></div>

				<p class="fg-general-5 d-none d-md-block">
					<span class="fw-500">{{ agent.count.rentProperty }}</span>
					Properties for Rent
				</p>

				<div class="divider mx-2 d-none d-md-block"></div>

				<p class="fg-general-5 d-none d-md-block">
					<span class="fw-500">{{ agent.count.saleProperty }}</span>
					Properties for Sale
				</p>
			</div>
		</div>

		<div class="view-all me-0 ms-auto">
			<a class="fs-14px fg-prim-2" [href]="agent.profileUrl">
				<div class="d-flex align-items-center gap-2">
					View all

					<span class="d-none d-md-block">
						<mat-icon class="fs-18px">arrow_forward</mat-icon>
					</span>
				</div>
			</a>
		</div>
	</div>

	<div class="mt-2 mt-md-3">
		<div class="d-flex gap-3 flex-nowrap overflow-auto hide-scrollbar">
			@for (ad of agent.ads; track ad.id) {
				<a class="list-item rounded position-relative" [href]="ad.adlink" target="_blank" data-bs-toggle="tooltip" [title]="ad.title">
					<img
						findqoAdImage
						loading="lazy"
						class="agent-ad image-skeleton-loader w-100 bg-neutral-1 rounded"
						width="187"
						height="150"
						[ngSrc]="ad?.images?.length > 0 ? ad?.images[0]?.url : 'assets/images/ad-not-available.svg'"
						[alt]="ad.title"
					/>

					<div class="d-flex flex-column mt-2">
						<!-- Ad title -->
						<span class="text-body-regular fg-general-5 text-truncate">{{ ad.title }}</span>

						<!-- Ad feature -->
						<ng-template [ngTemplateOutlet]="propertiesAdFeatureTemplate" [ngTemplateOutletContext]="{ $implicit: ad }"></ng-template>

						<!-- Price -->
						<span class="text-body-regular fg-general-5 text-truncate">
							{{ ad?.price | adPrice: ad?.rentalPeriod }}
						</span>
					</div>

					<!-- Ad feature -->
					<ng-template [ngTemplateOutlet]="adFeatureFlagTemplate" [ngTemplateOutletContext]="{ $implicit: ad }"></ng-template>
				</a>
			}
		</div>

		<!-- Ad feature badges template -->
		<ng-template #adFeatureBadgeTemplate let-ad>
			<div class="d-flex align-items-center">
				<mat-icon [svgIcon]="ad.icon === 'bedroom' || ad.icon === 'shower' ? '' : ad.icon">
					@if (ad?.icon === 'bedroom') {
						<findqo-bedroom-icon></findqo-bedroom-icon>
					}
					@if (ad?.icon === 'shower') {
						<findqo-shower-icon></findqo-shower-icon>
					}
				</mat-icon>
				<span class="text-caption-2-regular fg-general-5">{{ ad.label }}</span>
			</div>
		</ng-template>

		<!-- Ad feature flage template -->
		<ng-template #adFeatureFlagTemplate let-ad>
			<div *ngIf="+ad?.isFeatured" class="featured-tag bg-info-1 d-flex align-items-center px-2 position-absolute top-0 end-0">
				<span class="fg-info-3 fs-12px fw-500">FEATURED</span>
			</div>
		</ng-template>

		<!-- Properties ad feature template -->
		<ng-template #propertiesAdFeatureTemplate let-ad>
			<div class="row gap-2 mt-1 mb-2">
				<!-- Bedroom -->

				<div *ngIf="+ad?.bedroomCount > 0" class="col-auto">
					<ng-template
						[ngTemplateOutlet]="adFeatureBadgeTemplate"
						[ngTemplateOutletContext]="{ $implicit: { icon: 'bedroom', label: ad.bedroomCount.trim().slice(0, 1) } }"
					></ng-template>
				</div>

				<!-- Bathroom -->
				<div *ngIf="+ad?.bathroomCount > 0" class="col-auto">
					<ng-template
						[ngTemplateOutlet]="adFeatureBadgeTemplate"
						[ngTemplateOutletContext]="{ $implicit: { icon: 'shower', label: ad.bathroomCount } }"
					></ng-template>
				</div>

				<!-- Property size -->
				<div *ngIf="ad?.propertySize?.value && ad.propertySize?.value !== 0" class="col-auto">
					<div class="d-flex align-items-center">
						<mat-icon>
							<findqo-property-size-icon></findqo-property-size-icon>
						</mat-icon>
						<span class="text-caption-2-regular fg-general-5">{{ ad.propertySize.value }} {{ ad.propertySize.parameter }}</span>
					</div>
				</div>
			</div>
		</ng-template>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-landing/components/agent-item/agent-item.component.scss */\n.agent-item {\n  border-bottom: 1px solid var(--neutral-2);\n}\n.list-item {\n  width: 25%;\n}\n@media (max-width: 767.98px) {\n  .list-item {\n    width: 200px;\n  }\n}\n.agent-name {\n  font-size: 16px;\n  font-weight: 600;\n}\n@media (max-width: 767.98px) {\n  .agent-name {\n    font-size: 14px;\n    font-weight: 500;\n  }\n}\n.agent-logo {\n  width: 85px;\n  height: 100%;\n  max-height: 60px;\n  object-fit: contain;\n}\n@media (max-width: 767.98px) {\n  .agent-logo {\n    width: 55px;\n  }\n}\n@media (max-width: 767.98px) {\n  .view-all {\n    min-width: 55px;\n  }\n}\nimg.rounded {\n  object-fit: cover;\n}\nimg.agent-ad {\n  object-fit: contain !important;\n}\n.divider {\n  width: 1px;\n  height: 15px;\n  background-color: var(--neutral-2);\n}\n.featured-tag {\n  border-bottom-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.verify-icon {\n  min-width: 20px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-item.component.css.map */\n"] }]
  }], null, { agent: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentItemComponent, { className: "AgentItemComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-landing/components/agent-item/agent-item.component.ts", lineNumber: 10 });
})();

// apps/findqo-ireland/src/app/feature/agent-landing/agent-landing.component.ts
var _c02 = ["scrollTrigger"];
var _c12 = ["adListTemplate"];
var _c22 = () => ["assets/images/agent-hub/agent-logo-bubbles.webp"];
var _c3 = () => ["assets/images/agent-hub/agent-logo-bubbles-mobile.webp"];
var _c4 = (a0, a1) => ({ data: a0, metaData: a1 });
function AgentLandingComponent_div_14_Conditional_14_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-signup-banner");
  }
}
function AgentLandingComponent_div_14_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-agent-item", 22);
    \u0275\u0275template(1, AgentLandingComponent_div_14_Conditional_14_For_1_Conditional_1_Template, 1, 0, "findqo-signup-banner");
  }
  if (rf & 2) {
    const agent_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275property("agent", agent_r1);
    \u0275\u0275advance();
    \u0275\u0275conditional(($index_r2 + 1) % 5 === 0 ? 1 : -1);
  }
}
function AgentLandingComponent_div_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AgentLandingComponent_div_14_Conditional_14_For_1_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const vm_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275repeater(vm_r3.data);
  }
}
function AgentLandingComponent_div_14_mat_progress_spinner_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 23);
  }
}
function AgentLandingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 0)(2, "div", 12)(3, "div", 13)(4, "h2", 14);
    \u0275\u0275text(5, " Top 100 Estate Agents listed on ");
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "FindQo.ie");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 16)(9, "div", 17)(10, "a", 18);
    \u0275\u0275text(11, "LIST YOUR BUSINESS FOR FREE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-icon", 19);
    \u0275\u0275text(13, "arrow_forward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(14, AgentLandingComponent_div_14_Conditional_14_Template, 2, 0);
    \u0275\u0275elementStart(15, "div", 20, 1);
    \u0275\u0275template(17, AgentLandingComponent_div_14_mat_progress_spinner_17_Template, 1, 0, "mat-progress-spinner", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r3.isBrowser ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.loadingAds);
  }
}
var AgentLandingComponent = class _AgentLandingComponent {
  constructor(platformId, fb, dialog, snack, agentLandingFacade, agentsApi, snackService, router, authService, profileState) {
    this.platformId = platformId;
    this.fb = fb;
    this.dialog = dialog;
    this.snack = snack;
    this.agentLandingFacade = agentLandingFacade;
    this.agentsApi = agentsApi;
    this.snackService = snackService;
    this.router = router;
    this.authService = authService;
    this.profileState = profileState;
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(80), Validators.minLength(3)]],
      email: ["", [Validators.required, AppEmailValidator.validateEmailPattern()]],
      phone: ["", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      companyName: [""]
    });
    this.btnType = ButtonType;
    this.data = this.agentLandingFacade.getAgentLandingData$;
    this.metaData = this.agentLandingFacade.getAgentLandingMetaData$;
    this.pageNumber = 1;
    this.submitLoading = false;
    this.loadingAds = false;
    this.paymentPlan = signal(PremiumUnlimitedPlan.MONTHLY);
    this.isBrowser = isPlatformBrowser(this.platformId);
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
    const PAGE_META_DATA = this.agentLandingFacade.getMetaData();
    if (+PAGE_META_DATA?.totalPages > this.pageNumber) {
      this.loadingAds = true;
      this.pageNumber += 1;
      this.agentsApi.getList({
        page: this.pageNumber
      }).subscribe((res) => {
        this.loadingAds = false;
        this.agentLandingFacade.setAgentData([...this.agentLandingFacade?.getAgentData(), ...res.data]);
        this.agentLandingFacade.setMetaData(res.meta);
      });
    }
  }
  onTogglePaymentPlan() {
    this.paymentPlan.set(this.paymentPlan() === PremiumUnlimitedPlan.MONTHLY ? PremiumUnlimitedPlan.YEARLY : PremiumUnlimitedPlan.MONTHLY);
  }
  ngAfterViewInit() {
    this.initIntersectionObserver();
  }
  ngOnInit() {
    if (!this.agentLandingFacade?.getAgentData()?.length && this.isBrowser) {
      this.agentLandingFacade.getAgentLandingList();
    }
  }
  static {
    this.\u0275fac = function AgentLandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLandingComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(AgentLandingFacade), \u0275\u0275directiveInject(AgentsApi), \u0275\u0275directiveInject(SnackService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProfileState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentLandingComponent, selectors: [["findqo-agent-landing"]], viewQuery: function AgentLandingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5, ElementRef);
        \u0275\u0275viewQuery(_c12, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollTrigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.adListTemplate = _t.first);
      }
    }, standalone: false, decls: 17, vars: 12, consts: [["adListTemplate", ""], ["scrollTrigger", ""], [1, "agent-banner"], [1, "container", "px-3", "px-lg-0", "py-4"], [1, "heading-1", "fg-general-5", "mb-2", "text-start"], [1, "fg-general-5", "mb-4", "fs-14px"], [1, "heading-2-medium", "mb-4", "mt-5"], ["priority", "", 1, "img-fluid", "d-none", "d-md-block", 3, "src"], ["priority", "", 1, "img-fluid", "d-block", "d-md-none", 3, "src"], [1, "mt-5", "mb-2"], ["class", "container px-3 px-md-0", 4, "ngIf"], [1, "container", "px-3", "px-md-0"], [1, "row", "justify-content-between", "mt-5", "mb-4"], [1, "col-auto"], [1, "heading-2-medium", "fg-general-5"], [1, "fg-prim-2"], [1, "col-auto", "mt-3", "mt-md-0"], [1, "d-flex", "gap-2", "align-items-center"], ["routerLink", "/agent-hub", 1, "text-body-regular", "fg-prim-2"], ["aria-hidden", "true", 1, "mat-icon", "notranslate", "fg-prim-2", "fs-18px"], [1, "trigger-element", "d-flex", "justify-content-center"], ["mode", "indeterminate", "diameter", "50", "color", "primary", 4, "ngIf"], [3, "agent"], ["mode", "indeterminate", "diameter", "50", "color", "primary"]], template: function AgentLandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h1", 4);
        \u0275\u0275text(3, "Irish Property Platform Built for Estate Agents");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 5);
        \u0275\u0275text(5, "Showcase your property listings across Ireland to maximize reach and drive enquiries");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "findqo-sign-up-section-page");
        \u0275\u0275elementStart(7, "div")(8, "h2", 6);
        \u0275\u0275text(9, "Join Top Estate Agents on FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "img", 7)(11, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275element(13, "findqo-pricing-list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, AgentLandingComponent_div_14_Template, 18, 2, "div", 10);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275pipe(16, "async");
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("src", \u0275\u0275pureFunction0(7, _c22), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275property("src", \u0275\u0275pureFunction0(8, _c3), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction2(9, _c4, \u0275\u0275pipeBind1(15, 3, ctx.data), \u0275\u0275pipeBind1(16, 5, ctx.metaData)));
      }
    }, dependencies: [NgIf, MatIcon, RouterLink, MatProgressSpinner, PricingListComponent, SignUpSectionPage, SignupBannerComponent, AgentItemComponent, AsyncPipe], styles: ["\n\n.signup-container[_ngcontent-%COMP%] {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.horizontal-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 5px;\n  opacity: 15%;\n  background-color: var(--prim-2);\n  border-radius: 100px;\n}\n.check-circle[_ngcontent-%COMP%] {\n  background: rgba(255, 90, 184, 0.149);\n}\n.badge-text[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n  background-color: var(--general-5);\n  color: var(--basic-1);\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-2) !important;\n  padding: 16px 12px 16px 16px !important;\n}\ntable[_ngcontent-%COMP%]   th.subscription-offers[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td.subscription-offers[_ngcontent-%COMP%] {\n  max-width: 638px;\n  word-wrap: break-word;\n}\ntable[_ngcontent-%COMP%]   td.subscription-offers[_ngcontent-%COMP%]    > findqo-subscription-offers[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 180px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-landing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLandingComponent, [{
    type: Component,
    args: [{ selector: "findqo-agent-landing", standalone: false, template: `<div class="agent-banner">
	<div class="container px-3 px-lg-0 py-4">
		<h1 class="heading-1 fg-general-5 mb-2 text-start">Irish Property Platform Built for Estate Agents</h1>

		<p class="fg-general-5 mb-4 fs-14px">Showcase your property listings across Ireland to maximize reach and drive enquiries</p>

		<findqo-sign-up-section-page></findqo-sign-up-section-page>

		<!-- Agent Logos section -->
		<div>
			<h2 class="heading-2-medium mb-4 mt-5">Join Top Estate Agents on FindQo.ie</h2>

			<img [src]="['assets/images/agent-hub/agent-logo-bubbles.webp']" priority class="img-fluid d-none d-md-block" />
			<img [src]="['assets/images/agent-hub/agent-logo-bubbles-mobile.webp']" priority class="img-fluid d-block d-md-none" />
		</div>
		<!-- End - Agent Logos section -->

		<!--    Subscription Pricing-->
		<div class="mt-5 mb-2">
			<findqo-pricing-list />
		</div>
		<!--    Subscription pricing end-->
	</div>
</div>

<!-- TEMPLATES -->

<div #adListTemplate class="container px-3 px-md-0" *ngIf="{ data: data | async, metaData: metaData | async } as vm">
	<div class="row justify-content-between mt-5 mb-4">
		<div class="col-auto">
			<h2 class="heading-2-medium fg-general-5">
				Top 100 Estate Agents listed on
				<span class="fg-prim-2">FindQo.ie</span>
			</h2>
		</div>

		<div class="col-auto mt-3 mt-md-0">
			<div class="d-flex gap-2 align-items-center">
				<a class="text-body-regular fg-prim-2" routerLink="/agent-hub">LIST YOUR BUSINESS FOR FREE</a>

				<mat-icon class="mat-icon notranslate fg-prim-2 fs-18px" aria-hidden="true">arrow_forward</mat-icon>
			</div>
		</div>
	</div>

	@if (isBrowser) {
		@for (agent of vm.data; track $index) {
			<findqo-agent-item [agent]="agent"></findqo-agent-item>

			@if (($index + 1) % 5 === 0) {
				<findqo-signup-banner></findqo-signup-banner>
			}
		}
	}

	<div #scrollTrigger class="trigger-element d-flex justify-content-center">
		<mat-progress-spinner *ngIf="loadingAds" mode="indeterminate" diameter="50" color="primary"></mat-progress-spinner>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/agent-landing/agent-landing.component.scss */\n.signup-container {\n  border: 1px solid var(--general-2);\n  border-radius: 4px;\n}\n.horizontal-line {\n  width: 100px;\n  height: 5px;\n  opacity: 15%;\n  background-color: var(--prim-2);\n  border-radius: 100px;\n}\n.check-circle {\n  background: rgba(255, 90, 184, 0.149);\n}\n.badge-text {\n  padding-left: 8px;\n  padding-right: 8px;\n  background-color: var(--general-5);\n  color: var(--basic-1);\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.full-width-table {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable td,\ntable th {\n  border: 1px solid var(--neutral-2) !important;\n  padding: 16px 12px 16px 16px !important;\n}\ntable th.subscription-offers,\ntable td.subscription-offers {\n  max-width: 638px;\n  word-wrap: break-word;\n}\ntable td.subscription-offers > findqo-subscription-offers {\n  display: block;\n  margin-right: 180px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agent-landing.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: FormBuilder }, { type: MatDialog }, { type: SnackService }, { type: AgentLandingFacade }, { type: AgentsApi }, { type: SnackService }, { type: Router }, { type: AuthService }, { type: ProfileState }], { scrollTrigger: [{
    type: ViewChild,
    args: ["scrollTrigger", { read: ElementRef }]
  }], adListTemplate: [{
    type: ViewChild,
    args: ["adListTemplate", { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentLandingComponent, { className: "AgentLandingComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-landing/agent-landing.component.ts", lineNumber: 21 });
})();

// apps/findqo-ireland/src/app/feature/agent-landing/agent-landing-routing.module.ts
var routes = [
  {
    path: "",
    component: AgentLandingComponent
  },
  __spreadValues({
    path: APP_ROUTE.agentHub.agentSignup,
    redirectTo: "",
    data: { title: AGENT_SIGNUP_META_CONTENTS.title, description: AGENT_SIGNUP_META_CONTENTS.description },
    loadChildren: () => import("./chunk-TN3MQZBW.js").then((m) => m.AgentModule),
    canActivate: [SeoGuard, CanonicalGuard]
  }, false ? { \u0275entryName: "src/app/feature/agent/agent.module.ts" } : {})
];
var AgentLandingRoutingModule = class _AgentLandingRoutingModule {
  static {
    this.\u0275fac = function AgentLandingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLandingRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentLandingRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLandingRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-landing/agent-landing.module.ts
var AgentLandingModule = class _AgentLandingModule {
  static {
    this.\u0275fac = function AgentLandingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentLandingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentLandingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      MatInputModule,
      AgentLandingRoutingModule,
      ButtonModule,
      FormsModule,
      ReactiveFormsModule,
      PropertySizeIconModule,
      BedroomIconModule,
      ShowerIconModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      SubscriptionButtonComponent,
      SubscriptionOffersComponent,
      PricingListModule,
      SignUpSectionPage
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentLandingModule, [{
    type: NgModule,
    args: [{
      declarations: [AgentLandingComponent, SignupBannerComponent, AgentItemComponent],
      imports: [
        SharedModule,
        MatInputModule,
        AgentLandingRoutingModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        PropertySizeIconModule,
        BedroomIconModule,
        ShowerIconModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        SubscriptionButtonComponent,
        SubscriptionOffersComponent,
        ToggleComponent,
        PricingListModule,
        SignUpSectionPage
      ]
    }]
  }], null, null);
})();
export {
  AgentLandingModule
};
//# sourceMappingURL=chunk-NXPFLLPM.js.map
