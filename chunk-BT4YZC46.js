import {
  CommonPlaceAdService
} from "./chunk-YMEB42LH.js";
import {
  MatDivider,
  MatDividerModule,
  RouterModule,
  SharedModule,
  ViewportService,
  environment
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgOptimizedImage
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/about/about.page.ts
var _c0 = (a0) => ({ "mb-4": a0 });
function AboutPage_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function AboutPage_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, AboutPage_For_23_Conditional_5_Template, 1, 0, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_37_r2 = ctx.$index;
    const \u0275$count_37_r3 = ctx.$count;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275$index_37_r2 + 1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_37_r2 === \u0275$count_37_r3 - 1) ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, !(\u0275$index_37_r2 === \u0275$count_37_r3 - 1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.message);
  }
}
var AboutPage = class _AboutPage {
  constructor(viewport, commonPlaceAdService) {
    this.viewport = viewport;
    this.commonPlaceAdService = commonPlaceAdService;
    this.environment = environment;
    this.benefits = [
      {
        title: "User Friendly Interface",
        message: "Our intuitive website and mobile app design ensures that users can easily navigate the platform, making property searches and enquiries effortless."
      },
      {
        title: "Comprehensive Listings",
        message: "FindQo.ie offers a vast array of property listings, from residential and commercial rentals to properties for sale, ensuring that you find exactly what you\u2019re looking for."
      },
      {
        title: "Advanced Search Filters",
        message: "Effortlessly narrow down results with powerful filters based on location, price, property type, and more for a personalised search experience."
      },
      {
        title: "Expert Support",
        message: "This is where we win. Our team of professionals is always available to provide guidance and support, ensuring a seamless experience from start to finish."
      },
      {
        title: "Community Focused",
        message: "We foster a community-centric approach, encouraging transparent communication and collaboration between agents, buyers, and sellers."
      }
    ];
  }
  onPlaceAd() {
    this.commonPlaceAdService.gotoPlaceAd();
  }
  static {
    this.\u0275fac = function AboutPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutPage)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(CommonPlaceAdService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutPage, selectors: [["findqo-about-us"]], standalone: false, decls: 38, vars: 6, consts: [[1, "main-container"], [1, "container", "text-start", "px-lg-0"], [1, "heading-1", "fg-general-5", "d-block", "mb-3"], [1, "text-paragraph-regular", "fg-general-5"], ["target", "_blank", 1, "fg-prim-2", "text-deconration-none", 3, "href"], [1, "header-img"], ["alt", "Website Image", "fetchpriority", "high", "fill", "", 1, "hero-header-img", "w-100", "position-relative", 3, "ngSrc"], [1, "mt-5", "px-0"], [1, "heading-3", "fg-general-5"], [1, "mt-4", "ps-0"], [1, "d-flex", "gap-2"], [1, "text-center", "w-100"], [1, "d-inline-block", "divider", "rounded-pill", "w-100px", "divider-opacity", "divider-margin", "mx-auto"], [1, "pb-56px"], [1, "d-block", "heading-3", "fg-general-5"], ["href", "mailto:hello@findqo.ie", 1, "fg-prim-2", "text-deconration-none"], [1, "mt-2", "d-block", "text-paragraph-regular", "fg-general-5"], ["alt", "Website Image", "fetchpriority", "high", "fill", "", 1, "mt-5", "w-100", "position-relative", "cursor-pointer", 3, "click", "ngSrc"], [1, "d-flex", "flex-column", "align-items-center"], [1, "numbered-item", "d-flex", "align-items-center", "justify-content-center", "rounded-circle"], [1, "caption-regular", "fg-prim-2"], [1, "w-0", "h-100", "list-line"], [1, "fg-genral-5", "mb-2", "fw-500"], [1, "fg-genral-5", 3, "ngClass"]], template: function AboutPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Properties to Buy, Sell and Rent in Ireland");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3)(5, "a", 4);
        \u0275\u0275text(6, "FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " \u2019s mission is clear: to meet Ireland's real estate needs with innovative solutions that empower buyers and sellers to connect effortlessly. Our aim is to be Ireland's leading property platform. ");
        \u0275\u0275element(8, "br")(9, "br");
        \u0275\u0275elementStart(10, "a", 4);
        \u0275\u0275text(11, "FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " is a new property platform entirely devoted to the real estate market, offering Residential Rent, Commercial Rent, Property Shares, and Properties for Sale. It provides a seamless experience for Buyers, Renters, and Agents through a meticulously curated platform. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 5);
        \u0275\u0275element(14, "img", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
        \u0275\u0275text(17, " Top 5 Qualities that Sets ");
        \u0275\u0275elementStart(18, "a", 4);
        \u0275\u0275text(19, "FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Apart: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ol", 9);
        \u0275\u0275repeaterCreate(22, AboutPage_For_23_Template, 11, 7, "li", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275element(25, "mat-divider", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 1)(27, "div", 13)(28, "span", 14);
        \u0275\u0275text(29, " Join Us; say ");
        \u0275\u0275elementStart(30, "a", 15);
        \u0275\u0275text(31, "hello@findqo.ie");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "span", 16);
        \u0275\u0275text(33, " Experience the future of real estate with ");
        \u0275\u0275elementStart(34, "a", 4);
        \u0275\u0275text(35, "FindQo.ie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " , where connecting agents, buyers, and sellers is easier and more efficient than ever. Join us today and discover a world of opportunities tailored to your real estate needs. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "img", 17);
        \u0275\u0275listener("click", function AboutPage_Template_img_click_37_listener() {
          return ctx.onPlaceAd();
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("href", ctx.environment == null ? null : ctx.environment.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275property("href", ctx.environment == null ? null : ctx.environment.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngSrc", ctx.viewport.mobile ? "assets/images/about/about-hero-banner-mobile.webp" : "assets/images/about/about-hero-banner.webp");
        \u0275\u0275advance(4);
        \u0275\u0275property("href", ctx.environment == null ? null : ctx.environment.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.benefits);
        \u0275\u0275advance(12);
        \u0275\u0275property("href", ctx.environment == null ? null : ctx.environment.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngSrc", ctx.viewport.mobile ? "assets/images/about/post-ad-banner-mobile.webp" : "assets/images/about/post-ad-banner.webp");
      }
    }, dependencies: [NgClass, NgOptimizedImage, MatDivider], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.main-container[_ngcontent-%COMP%] {\n  padding-top: 64px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 5px;\n  background: var(--prim-2);\n  opacity: 0.15 !important;\n}\n.divider-margin[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n.w-34px[_ngcontent-%COMP%] {\n  width: 34px;\n}\n.w-52px[_ngcontent-%COMP%] {\n  width: 52px;\n}\n.w-68px[_ngcontent-%COMP%] {\n  width: 68px;\n}\n.w-100px[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.mt-48px[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.pb-56px[_ngcontent-%COMP%] {\n  padding-bottom: 56px;\n}\n.connect-btn[_ngcontent-%COMP%] {\n  max-width: 250px;\n  height: 40px;\n  padding: 0px 16px;\n  background: var(--prim-2);\n  border: none;\n}\n.section-margin[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.section-content[_ngcontent-%COMP%] {\n  max-width: 450px;\n  min-width: 300px;\n}\n.founders-img[_ngcontent-%COMP%] {\n  max-width: 400px;\n  max-height: 250px;\n}\n.empowering-img[_ngcontent-%COMP%] {\n  max-width: 400px;\n  max-height: 290px;\n}\n.tenantin-img[_ngcontent-%COMP%] {\n  max-width: 423px;\n  max-height: 265px;\n}\n.header-img[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.header-img[_ngcontent-%COMP%]   .hero-header-img[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.footer-section[_ngcontent-%COMP%] {\n  margin-top: 72px;\n  margin-bottom: 32px;\n  height: 280px;\n}\n.footer-section[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n  width: 459px;\n}\n.section-background-image[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/about/circle-left.svg), url(/assets/images/about/circle-right.svg);\n  background-position: top left, bottom right;\n  background-repeat: no-repeat, no-repeat;\n}\n@media (min-width: 768px) {\n  .hero-header-img[_ngcontent-%COMP%] {\n    max-height: 375px;\n  }\n}\n@media (max-width: 767.98px) {\n  .divider-margin[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .footer-section[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .hero-header-img[_ngcontent-%COMP%] {\n    max-height: 375px;\n  }\n}\n@media (max-width: 991.98px) {\n  .section-margin[_ngcontent-%COMP%] {\n    margin-top: 48px;\n  }\n}\n.numbered-item[_ngcontent-%COMP%] {\n  min-width: 40px;\n  min-height: 40px;\n  background-color: rgba(238, 0, 136, 0.0784313725);\n}\n.list-line[_ngcontent-%COMP%] {\n  border: 1px solid rgba(238, 0, 136, 0.0784313725);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about.page.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutPage, [{
    type: Component,
    args: [{ selector: "findqo-about-us", standalone: false, template: `<!-- FIXME: Mobile and Desktop view can be easily implement by just using CSS styling. -->

<div class="main-container">
	<div class="container text-start px-lg-0">
		<h1 class="heading-1 fg-general-5 d-block mb-3">Properties to Buy, Sell and Rent in Ireland</h1>
		<p class="text-paragraph-regular fg-general-5">
			<a [href]="environment?.appUrl" target="_blank" class="fg-prim-2 text-deconration-none">FindQo.ie</a>
			\u2019s mission is clear: to meet Ireland's real estate needs with innovative solutions that empower buyers and sellers to connect effortlessly. Our aim is to
			be Ireland's leading property platform.
			<br />
			<br />

			<a [href]="environment?.appUrl" target="_blank" class="fg-prim-2 text-deconration-none">FindQo.ie</a>
			is a new property platform entirely devoted to the real estate market, offering Residential Rent, Commercial Rent, Property Shares, and Properties for
			Sale. It provides a seamless experience for Buyers, Renters, and Agents through a meticulously curated platform.
		</p>

		<div class="header-img">
			<img
				[ngSrc]="viewport.mobile ? 'assets/images/about/about-hero-banner-mobile.webp' : 'assets/images/about/about-hero-banner.webp'"
				alt="Website Image"
				fetchpriority="high"
				fill
				class="hero-header-img w-100 position-relative"
			/>
		</div>

		<div class="mt-5 px-0">
			<span class="heading-3 fg-general-5">
				Top 5 Qualities that Sets
				<a [href]="environment?.appUrl" target="_blank" class="fg-prim-2 text-deconration-none">FindQo.ie</a>
				Apart:
			</span>

			<ol class="mt-4 ps-0">
				@for (item of benefits; track item; let idx = $index; let last = $last) {
				<li class="d-flex gap-2">
					<div class="d-flex flex-column align-items-center">
						<div class="numbered-item d-flex align-items-center justify-content-center rounded-circle">
							<span class="caption-regular fg-prim-2">{{idx + 1}}</span>
						</div>

						@if (!last) {
						<!-- Divider -->
						<div class="w-0 h-100 list-line"></div>
						}
					</div>

					<div>
						<p class="fg-genral-5 mb-2 fw-500">{{item.title}}</p>

						<p class="fg-genral-5" [ngClass]="{'mb-4': !last}">{{item.message}}</p>
					</div>
				</li>
				}
			</ol>
		</div>
	</div>

	<div class="text-center w-100">
		<mat-divider class="d-inline-block divider rounded-pill w-100px divider-opacity divider-margin mx-auto"></mat-divider>
	</div>

	<div class="container text-start px-lg-0">
		<div class="pb-56px">
			<span class="d-block heading-3 fg-general-5">
				Join Us; say
				<a href="mailto:hello@findqo.ie" class="fg-prim-2 text-deconration-none">hello&#64;findqo.ie</a>
			</span>

			<span class="mt-2 d-block text-paragraph-regular fg-general-5">
				Experience the future of real estate with
				<a [href]="environment?.appUrl" target="_blank" class="fg-prim-2 text-deconration-none">FindQo.ie</a>
				, where connecting agents, buyers, and sellers is easier and more efficient than ever. Join us today and discover a world of opportunities tailored to
				your real estate needs.
			</span>

			<img
				[ngSrc]="viewport.mobile ? 'assets/images/about/post-ad-banner-mobile.webp':'assets/images/about/post-ad-banner.webp'"
				alt="Website Image"
				fetchpriority="high"
				fill
				class="mt-5 w-100 position-relative cursor-pointer"
				(click)="onPlaceAd()"
			/>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/about/about.page.scss */\n.container {\n  max-width: 900px;\n}\n.main-container {\n  padding-top: 64px;\n}\n.divider {\n  height: 5px;\n  background: var(--prim-2);\n  opacity: 0.15 !important;\n}\n.divider-margin {\n  margin-top: 48px;\n  margin-bottom: 48px;\n}\n.w-34px {\n  width: 34px;\n}\n.w-52px {\n  width: 52px;\n}\n.w-68px {\n  width: 68px;\n}\n.w-100px {\n  width: 100px;\n}\n.mt-48px {\n  margin-top: 48px;\n}\n.pb-56px {\n  padding-bottom: 56px;\n}\n.connect-btn {\n  max-width: 250px;\n  height: 40px;\n  padding: 0px 16px;\n  background: var(--prim-2);\n  border: none;\n}\n.section-margin {\n  margin-top: 100px;\n}\n.section-content {\n  max-width: 450px;\n  min-width: 300px;\n}\n.founders-img {\n  max-width: 400px;\n  max-height: 250px;\n}\n.empowering-img {\n  max-width: 400px;\n  max-height: 290px;\n}\n.tenantin-img {\n  max-width: 423px;\n  max-height: 265px;\n}\n.header-img {\n  margin-top: 40px;\n}\n.header-img .hero-header-img {\n  max-width: 900px;\n}\n.footer-section {\n  margin-top: 72px;\n  margin-bottom: 32px;\n  height: 280px;\n}\n.footer-section .img-content {\n  width: 459px;\n}\n.section-background-image {\n  background-image: url(/assets/images/about/circle-left.svg), url(/assets/images/about/circle-right.svg);\n  background-position: top left, bottom right;\n  background-repeat: no-repeat, no-repeat;\n}\n@media (min-width: 768px) {\n  .hero-header-img {\n    max-height: 375px;\n  }\n}\n@media (max-width: 767.98px) {\n  .divider-margin {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .footer-section {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n  .hero-header-img {\n    max-height: 375px;\n  }\n}\n@media (max-width: 991.98px) {\n  .section-margin {\n    margin-top: 48px;\n  }\n}\n.numbered-item {\n  min-width: 40px;\n  min-height: 40px;\n  background-color: rgba(238, 0, 136, 0.0784313725);\n}\n.list-line {\n  border: 1px solid rgba(238, 0, 136, 0.0784313725);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/about.page.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: CommonPlaceAdService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutPage, { className: "AboutPage", filePath: "apps/findqo-ireland/src/app/feature/about/about.page.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/feature/about/about-routing.module.ts
var routes = [
  {
    path: "",
    component: AboutPage
  }
];
var AboutRoutingModule = class _AboutRoutingModule {
  static {
    this.\u0275fac = function AboutRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/about/about.module.ts
var AboutModule = class _AboutModule {
  static {
    this.\u0275fac = function AboutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, AboutRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutModule, [{
    type: NgModule,
    args: [{
      declarations: [AboutPage],
      imports: [SharedModule, MatDividerModule, AboutRoutingModule]
    }]
  }], null, null);
})();
export {
  AboutModule
};
//# sourceMappingURL=chunk-BT4YZC46.js.map
