import {
  SeoService
} from "./chunk-5JBKTQLQ.js";
import {
  RouterModule,
  SharedModule,
  TranslationsPipe,
  environment
} from "./chunk-DMGY2MF4.js";
import "./chunk-7YCEKZKP.js";
import "./chunk-P7GEPQ2C.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/place-ad-guide/place-ad-guide.component.ts
var PlaceAdGuideComponent = class _PlaceAdGuideComponent {
  constructor(seoService) {
    this.seoService = seoService;
    this.appUrl = environment.appUrl;
    this.tenantInUrl = environment.tenantIn;
  }
  ngOnInit() {
    this.seoService.setSeo({
      title: "Advertise Property in Ireland",
      description: "FindQo - website & mobile app to sell/rent real estate properties in Ireland. Post ads Free and get Unlimited Enquiries. Advertise to rent or sell and save."
    });
  }
  static {
    this.\u0275fac = function PlaceAdGuideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdGuideComponent)(\u0275\u0275directiveInject(SeoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceAdGuideComponent, selectors: [["findqo-place-ad-guide"]], standalone: false, decls: 206, vars: 190, consts: [[1, "container", "py-4", "py-lg-5"], [1, "fg-general-5", "heading-1"], ["target", "_blank", 1, "fg-prim-2", 3, "href"], [1, "fg-general-5", "heading-2-medium", "mt-1"], [1, "text-paragraph-regular", "fg-general-5", "mt-4"], [1, "text-paragraph-regular", "fg-general-5", "mt-3"], [1, "text-center"], ["src", "assets/images/place-ad-guide/homepage.webp", "alt", "findqo home page", "width", "100%", "height", "547", 1, "mt-3", "d-none", "d-md-block", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/homepage-mobile.webp", "alt", "findqo home page", "width", "328", "height", "684", 1, "mt-3", "d-md-none", "mx-auto", "rounded"], [1, "text-body-medium", "fg-general-5"], ["src", "assets/images/place-ad-guide/account-type.webp", "alt", "findqo home page", "width", "100%", "height", "547", 1, "mt-3", "d-none", "d-md-block", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/account-type-mobile.webp", "alt", "findqo home page", "width", "328", "height", "500", 1, "mt-3", "d-md-none", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/choose-ad-type.webp", "alt", "findqo home page", "width", "100%", "height", "547", 1, "mt-3", "d-none", "d-md-block", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/choose-ad-type-mobile.webp", "alt", "findqo home page", "width", "328", "height", "500", 1, "mt-3", "d-md-none", "mx-auto", "rounded"], [1, "text-body-medium"], [1, "text-paragraph-regular", "fg-general-5"], ["src", "assets/images/place-ad-guide/location.webp", "alt", "findqo home page", "width", "100%", "height", "547", 1, "mt-3", "d-none", "d-md-block", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/location-mobile.webp", "alt", "findqo home page", "width", "328", "height", "656", 1, "mt-3", "d-md-none", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/select-plan.webp", "alt", "findqo home page", "width", "100%", "height", "547", 1, "mt-3", "d-none", "d-md-block", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/select-plan-mobile.webp", "alt", "findqo home page", "width", "328", "height", "656", 1, "mt-3", "d-md-none", "mx-auto", "rounded"], [1, "mt-3"], ["src", "assets/images/place-ad-guide/ad-submitted.webp", "alt", "findqo home page", "width", "100%", "height", "547", 1, "mt-3", "d-none", "d-md-block", "mx-auto", "rounded"], ["src", "assets/images/place-ad-guide/ad-submitted-mobile.webp", "alt", "findqo home page", "width", "328", "height", "585", 1, "mt-3", "d-md-none", "mx-auto", "rounded"], [1, "divider-line", "my-3"], [1, "heading-3-medium"], [1, "text-paragraph-regular", "fg-general-5", "mt-2"], ["href", "tel:+3530851859159", "data-rel", "external", 1, "text-body-medium", "fg-general-5"], ["href", "mailto:kara@findqo.ie", 1, "text-body-medium", "fg-general-5"], [1, "heading-3-medium", "mt-3"]], template: function PlaceAdGuideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translations");
        \u0275\u0275elementStart(4, "a", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h2", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 4);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementStart(13, "a", 2);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementStart(18, "a", 2);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p", 5);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 6);
        \u0275\u0275element(27, "img", 7)(28, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 5);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translations");
        \u0275\u0275elementStart(32, "span", 9);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p", 5);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "translations");
        \u0275\u0275elementStart(40, "span", 9);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 6);
        \u0275\u0275element(46, "img", 10)(47, "img", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 5);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 6);
        \u0275\u0275element(52, "img", 12)(53, "img", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p", 5);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 5)(58, "b", 14);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "ul")(64, "li", 15)(65, "b", 14);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "li", 15)(71, "b", 14);
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li", 15)(77, "b", 14);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "p", 5)(83, "b", 14);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86);
        \u0275\u0275pipe(87, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "ul")(89, "li", 15)(90, "b", 14);
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93);
        \u0275\u0275pipe(94, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li", 15)(96, "b", 14);
        \u0275\u0275text(97);
        \u0275\u0275pipe(98, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "p", 5);
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 6);
        \u0275\u0275element(105, "img", 16)(106, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "p", 5);
        \u0275\u0275text(108);
        \u0275\u0275pipe(109, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "p", 5);
        \u0275\u0275text(111);
        \u0275\u0275pipe(112, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "p", 5);
        \u0275\u0275text(114);
        \u0275\u0275pipe(115, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 5);
        \u0275\u0275text(117);
        \u0275\u0275pipe(118, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "div", 6);
        \u0275\u0275element(120, "img", 18)(121, "img", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "p", 5);
        \u0275\u0275text(123);
        \u0275\u0275pipe(124, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "ul", 20)(126, "li", 15)(127, "b", 14);
        \u0275\u0275text(128);
        \u0275\u0275pipe(129, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translations");
        \u0275\u0275elementStart(132, "a", 2);
        \u0275\u0275text(133);
        \u0275\u0275pipe(134, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(135, " . ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "li", 15)(137, "b", 14);
        \u0275\u0275text(138);
        \u0275\u0275pipe(139, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140);
        \u0275\u0275pipe(141, "translations");
        \u0275\u0275elementStart(142, "a", 2);
        \u0275\u0275text(143);
        \u0275\u0275pipe(144, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(145, "p", 5);
        \u0275\u0275text(146);
        \u0275\u0275pipe(147, "translations");
        \u0275\u0275elementStart(148, "span", 14);
        \u0275\u0275text(149, "2 FREE ad listings under the Standard Plan.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "p", 5);
        \u0275\u0275text(151);
        \u0275\u0275pipe(152, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "p", 5);
        \u0275\u0275text(154);
        \u0275\u0275pipe(155, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "p", 5);
        \u0275\u0275text(157);
        \u0275\u0275pipe(158, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 6);
        \u0275\u0275element(160, "img", 21)(161, "img", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "p", 5);
        \u0275\u0275text(163);
        \u0275\u0275pipe(164, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "p", 5);
        \u0275\u0275text(166);
        \u0275\u0275pipe(167, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275element(168, "div", 23);
        \u0275\u0275elementStart(169, "h3", 24);
        \u0275\u0275text(170);
        \u0275\u0275pipe(171, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "p", 25);
        \u0275\u0275text(173);
        \u0275\u0275pipe(174, "translations");
        \u0275\u0275elementStart(175, "a", 2);
        \u0275\u0275text(176);
        \u0275\u0275pipe(177, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(178);
        \u0275\u0275pipe(179, "translations");
        \u0275\u0275elementStart(180, "a", 26);
        \u0275\u0275text(181);
        \u0275\u0275pipe(182, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(183);
        \u0275\u0275pipe(184, "translations");
        \u0275\u0275elementStart(185, "a", 27);
        \u0275\u0275text(186);
        \u0275\u0275pipe(187, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(188, " . ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "h3", 28);
        \u0275\u0275text(190);
        \u0275\u0275pipe(191, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "p", 25);
        \u0275\u0275text(193);
        \u0275\u0275pipe(194, "translations");
        \u0275\u0275elementStart(195, "span", 14);
        \u0275\u0275text(196);
        \u0275\u0275pipe(197, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "a", 2);
        \u0275\u0275text(199);
        \u0275\u0275pipe(200, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(201, " . ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(202, "div", 23);
        \u0275\u0275elementStart(203, "p", 15);
        \u0275\u0275text(204);
        \u0275\u0275pipe(205, "translations");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 68, "n3787"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 70, "n3786"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 72, "n3788"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 74, "n3789"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 76, "n3786"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" . ", \u0275\u0275pipeBind1(17, 78, "n3790"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 80, "n3786"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ! ", \u0275\u0275pipeBind1(22, 82, "n3791"), "\xA0 ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 84, "n3792"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 86, "n3793"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 88, "n3474"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 90, "n3794"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 92, "n3803"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 94, "n3804"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" , ", \u0275\u0275pipeBind1(44, 96, "n3805"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 98, "n3806"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 100, "n3807"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 102, "n3808"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" , ", \u0275\u0275pipeBind1(62, 104, "n3809"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 106, "n794"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 108, "n3810"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 110, "n793"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 112, "n3811"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 114, "n3316"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 116, "n3812"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 118, "n3813"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" , ", \u0275\u0275pipeBind1(87, 120, "n3814"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 122, "n3592"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(94, 124, "n3815"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 126, "n3593"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 128, "n3812"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 130, "n3816"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 132, "n3817"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(112, 134, "n3818"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(115, 136, "n3819"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(118, 138, "n3820"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 140, "n3821"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 142, "n3822"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(131, 144, "n3823"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.tenantInUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 146, "n3398"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 148, "n3824"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(141, 150, "n3825"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.tenantInUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 152, "n3398"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(147, 154, "n3826"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(152, 156, "n3831"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(155, 158, "n3832"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(158, 160, "n3833"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(164, 162, "n3834"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(167, 164, "n3835"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 166, "n3836"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(174, 168, "n3837"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(177, 170, "n3786"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" , ", \u0275\u0275pipeBind1(179, 172, "n3838"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(182, 174, "n3839"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(184, 176, "n3840"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(187, 178, "n3841"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(191, 180, "n3842"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(194, 182, "n3843"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(197, 184, "n3844"), " \xA0");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.appUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(200, 186, "n3786"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(205, 188, "n3845"), " ");
      }
    }, dependencies: [TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px !important;\n}\n.divider-line[_ngcontent-%COMP%] {\n  width: 120px;\n  border-top: 3px solid var(--prim-2) !important;\n}\nimg[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-1) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-guide.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdGuideComponent, [{
    type: Component,
    args: [{ selector: "findqo-place-ad-guide", standalone: false, template: `<div class="container py-4 py-lg-5">
	<h1 class="fg-general-5 heading-1">
		{{ 'n3787' | translations }}
		<a [href]="appUrl" class="fg-prim-2" target="_blank">{{ 'n3786' | translations }}</a>
	</h1>
	<h2 class="fg-general-5 heading-2-medium mt-1">{{ 'n3788' | translations }}</h2>

	<p class="text-paragraph-regular fg-general-5 mt-4">
		{{ 'n3789' | translations }}
		<a [href]="appUrl" class="fg-prim-2" target="_blank">{{ 'n3786' | translations }}</a>
		.
		{{ 'n3790' | translations }}
		<a [href]="appUrl" class="fg-prim-2" target="_blank">{{ 'n3786' | translations }}</a>
		!
		{{ 'n3791' | translations }}&nbsp;
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">{{ 'n3792' | translations }}</p>

	<div class="text-center">
		<img src="assets/images/place-ad-guide/homepage.webp" class="mt-3 d-none d-md-block mx-auto rounded" alt="findqo home page" width="100%" height="547" />

		<img src="assets/images/place-ad-guide/homepage-mobile.webp" class="mt-3 d-md-none mx-auto rounded" alt="findqo home page" width="328" height="684" />
	</div>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3793' | translations }}
		<span class="text-body-medium fg-general-5">{{ 'n3474' | translations }}</span>
		{{ 'n3794' | translations }}
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3803' | translations }}
		<span class="text-body-medium fg-general-5">{{ 'n3804' | translations }}</span>
		, {{ 'n3805' | translations }}
	</p>

	<div class="text-center">
		<img src="assets/images/place-ad-guide/account-type.webp" class="mt-3 d-none d-md-block mx-auto rounded" alt="findqo home page" width="100%" height="547" />

		<img src="assets/images/place-ad-guide/account-type-mobile.webp" class="mt-3 d-md-none mx-auto rounded" alt="findqo home page" width="328" height="500" />
	</div>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3806' | translations }}
	</p>

	<div class="text-center">
		<img
			src="assets/images/place-ad-guide/choose-ad-type.webp"
			class="mt-3 d-none d-md-block mx-auto rounded"
			alt="findqo home page"
			width="100%"
			height="547"
		/>

		<img src="assets/images/place-ad-guide/choose-ad-type-mobile.webp" class="mt-3 d-md-none mx-auto rounded" alt="findqo home page" width="328" height="500" />
	</div>

	<p class="text-paragraph-regular fg-general-5 mt-3">{{ 'n3807' | translations }}</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		<b class="text-body-medium">{{ 'n3808' | translations }}</b>
		, {{ 'n3809' | translations }}
	</p>

	<ul>
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n794' | translations }}</b>
			{{ 'n3810' | translations }}
		</li>
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n793' | translations }}</b>
			{{ 'n3811' | translations }}
		</li>
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n3316' | translations }}</b>
			{{ 'n3812' | translations }}
		</li>
	</ul>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		<b class="text-body-medium">{{ 'n3813' | translations }}</b>
		, {{ 'n3814' | translations }}
	</p>

	<ul>
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n3592' | translations }}</b>
			{{ 'n3815' | translations }}
		</li>
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n3593' | translations }}</b>
			{{ 'n3812' | translations }}
		</li>
	</ul>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3816' | translations }}
	</p>

	<div class="text-center">
		<img src="assets/images/place-ad-guide/location.webp" class="mt-3 d-none d-md-block mx-auto rounded" alt="findqo home page" width="100%" height="547" />

		<img src="assets/images/place-ad-guide/location-mobile.webp" class="mt-3 d-md-none mx-auto rounded" alt="findqo home page" width="328" height="656" />
	</div>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3817' | translations }}
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3818' | translations }}
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3819' | translations }}
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3820' | translations }}
	</p>

	<div class="text-center">
		<img src="assets/images/place-ad-guide/select-plan.webp" class="mt-3 d-none d-md-block mx-auto rounded" alt="findqo home page" width="100%" height="547" />

		<img src="assets/images/place-ad-guide/select-plan-mobile.webp" class="mt-3 d-md-none mx-auto rounded" alt="findqo home page" width="328" height="656" />
	</div>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3821' | translations }}
	</p>

	<ul class="mt-3">
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n3822' | translations }}</b>
			{{ 'n3823' | translations }}
			<a [href]="tenantInUrl" target="_blank" class="fg-prim-2">{{ 'n3398' | translations }}</a>
			.
		</li>
		<li class="text-paragraph-regular fg-general-5">
			<b class="text-body-medium">{{ 'n3824' | translations }}</b>
			{{ 'n3825' | translations }}
			<a [href]="tenantInUrl" target="_blank" class="fg-prim-2">{{ 'n3398' | translations }}</a>
		</li>
	</ul>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3826' | translations }}
		<span class="text-body-medium">2 FREE ad listings under the Standard Plan.</span>
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">{{ 'n3831' | translations }}</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3832' | translations }}
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">{{ 'n3833' | translations }}</p>

	<div class="text-center">
		<img src="assets/images/place-ad-guide/ad-submitted.webp" class="mt-3 d-none d-md-block mx-auto rounded" alt="findqo home page" width="100%" height="547" />

		<img src="assets/images/place-ad-guide/ad-submitted-mobile.webp" class="mt-3 d-md-none mx-auto rounded" alt="findqo home page" width="328" height="585" />
	</div>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3834' | translations }}
	</p>

	<p class="text-paragraph-regular fg-general-5 mt-3">
		{{ 'n3835' | translations }}
	</p>

	<div class="divider-line my-3"></div>

	<h3 class="heading-3-medium">{{ 'n3836' | translations }}</h3>

	<p class="text-paragraph-regular fg-general-5 mt-2">
		{{ 'n3837' | translations }}
		<a target="_blank" [href]="appUrl" class="fg-prim-2">{{ 'n3786' | translations }}</a>
		, {{ 'n3838' | translations }}
		<a class="text-body-medium fg-general-5" href="tel:+3530851859159" data-rel="external">{{ 'n3839' | translations }}</a>
		{{ 'n3840' | translations }}
		<a href="mailto:kara@findqo.ie" class="text-body-medium fg-general-5">{{ 'n3841' | translations }}</a>
		.
	</p>

	<h3 class="heading-3-medium mt-3">{{ 'n3842' | translations }}</h3>

	<p class="text-paragraph-regular fg-general-5 mt-2">
		{{ 'n3843' | translations }}
		<span class="text-body-medium">{{ 'n3844' | translations }} &nbsp;</span>

		<a target="_blank" [href]="appUrl" class="fg-prim-2">{{ 'n3786' | translations }}</a>
		.
	</p>

	<div class="divider-line my-3"></div>

	<p class="text-paragraph-regular fg-general-5">
		{{ 'n3845' | translations }}
	</p>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/place-ad-guide/place-ad-guide.component.scss */\n.container {\n  max-width: 1000px !important;\n}\n.divider-line {\n  width: 120px;\n  border-top: 3px solid var(--prim-2) !important;\n}\nimg {\n  border: 1px solid var(--neutral-1) !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/place-ad-guide.component.css.map */\n"] }]
  }], () => [{ type: SeoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceAdGuideComponent, { className: "PlaceAdGuideComponent", filePath: "apps/findqo-ireland/src/app/feature/place-ad-guide/place-ad-guide.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/feature/place-ad-guide/place-ad-guide-routing.module.ts
var routes = [
  {
    path: "",
    component: PlaceAdGuideComponent
  }
];
var PlaceAdGuideRoutingModule = class _PlaceAdGuideRoutingModule {
  static {
    this.\u0275fac = function PlaceAdGuideRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdGuideRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdGuideRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdGuideRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/place-ad-guide/place-ad-guide.module.ts
var PlaceAdGuideModule = class _PlaceAdGuideModule {
  static {
    this.\u0275fac = function PlaceAdGuideModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaceAdGuideModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PlaceAdGuideModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, PlaceAdGuideRoutingModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceAdGuideModule, [{
    type: NgModule,
    args: [{
      declarations: [PlaceAdGuideComponent],
      imports: [SharedModule, PlaceAdGuideRoutingModule]
    }]
  }], null, null);
})();
export {
  PlaceAdGuideModule
};
//# sourceMappingURL=chunk-RDVEU6B5.js.map
