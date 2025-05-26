import {
  ConfettiService
} from "./chunk-P5MOHOFP.js";
import {
  APP_ROUTE,
  AuthService,
  MatButton,
  MyProfileFacade,
  RouterLink,
  SharedModule,
  SubscriptionTier,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  NgClass,
  NgIf,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  filter,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/my-profile/pages/welcome-business/welcome-business.page.ts
var _c0 = (a0) => ({ businessProfile: a0 });
var _c1 = (a0) => ({ "mb-2": a0 });
function WelcomeBusinessPage_div_0_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("ngSrc", vm_r1.businessProfile == null ? null : vm_r1.businessProfile.picture);
  }
}
function WelcomeBusinessPage_div_0_ng_container_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 12)(2, "mat-icon", 13);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "p", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c1, $index_r3 < 0));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", $index_r3 === 0 ? "text-body-medium" : "text-body-regular");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, item_r2));
  }
}
function WelcomeBusinessPage_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WelcomeBusinessPage_div_0_ng_container_1_img_1_Template, 1, 1, "img", 3);
    \u0275\u0275elementStart(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275repeaterCreate(7, WelcomeBusinessPage_div_0_ng_container_1_For_8_Template, 8, 7, "div", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translations");
    \u0275\u0275elementStart(12, "mat-icon", 9);
    \u0275\u0275text(13, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vm_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r1.businessProfile == null ? null : vm_r1.businessProfile.picture);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Welcome ", vm_r1.businessProfile == null ? null : vm_r1.businessProfile.name, "!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (vm_r1.businessProfile == null ? null : vm_r1.businessProfile.subscription == null ? null : vm_r1.businessProfile.subscription.reference) === ctx_r3.subscriptionTier.LIMITED_YEARLY ? ctx_r3.subTitle.limited : ctx_r3.subTitle.unlimitedPremium, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater((vm_r1.businessProfile == null ? null : vm_r1.businessProfile.subscription == null ? null : vm_r1.businessProfile.subscription.reference) === ctx_r3.subscriptionTier.LIMITED_YEARLY ? ctx_r3.featureList.limited : ctx_r3.featureList.unlimitedPremium);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/" + ctx_r3.appRoute.agentHub.dashboard + "/" + ctx_r3.appRoute.businessProfile.agentList);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "n3997"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/" + ctx_r3.appRoute.agentHub.dashboard + "/" + ctx_r3.appRoute.businessProfile.base);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 9, "n3998"), " ");
  }
}
function WelcomeBusinessPage_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, WelcomeBusinessPage_div_0_ng_container_1_Template, 17, 11, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vm_r1.businessProfile);
  }
}
var WelcomeBusinessPage = class _WelcomeBusinessPage {
  constructor(confetti, auth, myProfileFacade) {
    this.confetti = confetti;
    this.auth = auth;
    this.myProfileFacade = myProfileFacade;
    this.featureList = {
      limited: ["Add your estate agents to assign properties", "Post 2 standard ads", "Get unlimited enquiries", "See previews of seller leads"],
      unlimitedPremium: [
        "Add your estate agents to assign properties",
        "Post 5 featured and unlimited standard ads",
        "Get seller, rental, and commercial leads",
        "Hot Leads + Bonus leads",
        "Includes in-person valuation seller leads",
        "Dedicated Marketing + CRM Integration"
      ]
    };
    this.subTitle = {
      limited: "Enjoy the benefits of having an agency account:",
      unlimitedPremium: "Enjoy the benefits of Premium Unlimited"
    };
    this.appRoute = APP_ROUTE;
    this.user = this.auth.user();
    this.subscriptionTier = SubscriptionTier;
    this.businessProfile$ = myProfileFacade.getBusinessProfile$();
  }
  ngOnInit() {
    this.businessProfile$.pipe(filter((profile) => !!profile), take(1)).subscribe(() => {
      this.confetti.celebrate();
    });
  }
  static {
    this.\u0275fac = function WelcomeBusinessPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WelcomeBusinessPage)(\u0275\u0275directiveInject(ConfettiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MyProfileFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeBusinessPage, selectors: [["findqo-welcome-business"]], decls: 2, vars: 5, consts: [["class", "container w-100 d-flex flex-column align-items-center justify-content-center", 4, "ngIf"], [1, "container", "w-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [4, "ngIf"], ["alt", "Welcome Image", "width", "120", "height", "120", "priority", "", "class", "object-fit-contain rounded", 3, "ngSrc", 4, "ngIf"], [1, "heading-2-medium", "fg-general-5", "mt-3", "text-center"], [1, "text-body-regular", "fg-general-5", "my-2"], [1, "feature-container", "py-3", "px-lg-3"], [1, "row", "align-items-start", "gap-1", "justify-content-start", 3, "ngClass"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", "w-100", "rounded-pill", "continue-button", 3, "routerLink"], ["iconPositionEnd", ""], ["mat-button", "", 1, "text-body-regular", "fg-general-4", "w-100", "mt-2", "rounded-pill", 3, "routerLink"], ["alt", "Welcome Image", "width", "120", "height", "120", "priority", "", 1, "object-fit-contain", "rounded", 3, "ngSrc"], [1, "col-auto"], [1, "fg-prim-2", "fs-18px"], [1, "col"], [1, "fg-general-5", "text-start", 3, "ngClass"]], template: function WelcomeBusinessPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WelcomeBusinessPage_div_0_Template, 2, 1, "div", 0);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.businessProfile$)));
      }
    }, dependencies: [SharedModule, NgClass, NgIf, MatButton, MatIcon, RouterLink, NgOptimizedImage, AsyncPipe, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 600px !important;\n  height: calc(100vh - 64px);\n}\n.feature-container[_ngcontent-%COMP%] {\n  max-width: 375px !important;\n}\n.feature-container[_ngcontent-%COMP%]   .continue-button[_ngcontent-%COMP%] {\n  margin-top: 32px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/welcome-business.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeBusinessPage, [{
    type: Component,
    args: [{ selector: "findqo-welcome-business", imports: [SharedModule], template: `<div *ngIf="{ businessProfile: businessProfile$ | async } as vm" class="container w-100 d-flex flex-column align-items-center justify-content-center">
	<ng-container *ngIf="vm.businessProfile">
		<img
			*ngIf="vm.businessProfile?.picture"
			[ngSrc]="vm.businessProfile?.picture"
			alt="Welcome Image"
			width="120"
			height="120"
			priority
			class="object-fit-contain rounded"
		/>

		<h2 class="heading-2-medium fg-general-5 mt-3 text-center">Welcome {{ vm.businessProfile?.name }}!</h2>
		<p class="text-body-regular fg-general-5 my-2">
			{{ vm.businessProfile?.subscription?.reference === subscriptionTier.LIMITED_YEARLY ? subTitle.limited : subTitle.unlimitedPremium }}
		</p>

		<div class="feature-container py-3 px-lg-3">
			@for (
				item of vm.businessProfile?.subscription?.reference === subscriptionTier.LIMITED_YEARLY ? featureList.limited : featureList.unlimitedPremium;
				track $index
			) {
				<div class="row align-items-start gap-1 justify-content-start" [ngClass]="{ 'mb-2': $index < 0 }">
					<div class="col-auto">
						<mat-icon class="fg-prim-2 fs-18px">check</mat-icon>
					</div>

					<div class="col">
						<p class="fg-general-5 text-start" [ngClass]="$index === 0 ? 'text-body-medium' : 'text-body-regular'">{{ item | translations }}</p>
					</div>
				</div>
			}

			<button
				mat-flat-button
				color="primary"
				class="text-body-regular w-100 rounded-pill continue-button"
				[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.agentList"
			>
				{{ 'n3997' | translations }}
				<mat-icon iconPositionEnd>arrow_forward</mat-icon>
			</button>

			<button
				mat-button
				class="text-body-regular fg-general-4 w-100 mt-2 rounded-pill"
				[routerLink]="'/' + appRoute.agentHub.dashboard + '/' + appRoute.businessProfile.base"
			>
				{{ 'n3998' | translations }}
			</button>
		</div>
	</ng-container>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-profile/pages/welcome-business/welcome-business.page.scss */\n.container {\n  max-width: 600px !important;\n  height: calc(100vh - 64px);\n}\n.feature-container {\n  max-width: 375px !important;\n}\n.feature-container .continue-button {\n  margin-top: 32px !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/welcome-business.page.css.map */\n"] }]
  }], () => [{ type: ConfettiService }, { type: AuthService }, { type: MyProfileFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeBusinessPage, { className: "WelcomeBusinessPage", filePath: "apps/findqo-ireland/src/app/feature/my-profile/pages/welcome-business/welcome-business.page.ts", lineNumber: 17 });
})();
export {
  WelcomeBusinessPage
};
//# sourceMappingURL=chunk-X2TFZ5E2.js.map
