import {
  DevicePlateform,
  DevicePlateformService
} from "./chunk-VGENAY26.js";
import {
  IconService
} from "./chunk-DYYJHWVN.js";
import {
  CommonFacade,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  NgClass,
  NgIf,
  TitleCasePipe
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Injectable,
  Input,
  __commonJS,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "node_modules/dayjs/plugin/relativeTime.js"(exports, module) {
    !function(r, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
    }(exports, function() {
      "use strict";
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    });
  }
});

// apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-stamp/my-ad-stamp.component.ts
var _c0 = (a0) => ({ "rounded-pill": a0 });
function MyAdStampComponent_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.adStatusConfig == null ? null : ctx_r0.adStatusConfig.iconClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.adStatusConfig == null ? null : ctx_r0.adStatusConfig.iconType);
  }
}
var MyAdStampComponent = class _MyAdStampComponent {
  constructor(viewport, icon, commonFacade) {
    this.viewport = viewport;
    this.icon = icon;
    this.commonFacade = commonFacade;
    this.statusMappings = {
      live: {
        bgColor: "#E3FFE6",
        txtColor: "#2EB844",
        hasIcon: false,
        hasBorder: true
      },
      draft: {
        bgColor: "#F3F4F6",
        txtColor: "#6C7284",
        hasIcon: false,
        hasBorder: true
      },
      "payment-pending": {
        bgColor: "#E7F1FF",
        txtColor: "#0D6EFD",
        hasIcon: false,
        hasBorder: true
      },
      "payment-failed": {
        bgColor: "#FFE9EA",
        txtColor: "#ED4258",
        hasIcon: false,
        hasBorder: true
      },
      "under-review": {
        bgColor: "#E7F1FF",
        txtColor: "#0D6EFD",
        hasIcon: false,
        iconType: "cancel",
        iconClass: "fg-info-3",
        hasBorder: true
      },
      "edit-under-review": {
        bgColor: "#E7F1FF",
        txtColor: "#0D6EFD",
        hasIcon: false,
        iconType: "cancel",
        iconClass: "fg-info-3",
        hasBorder: true
      },
      rejected: {
        bgColor: "#FFE9EA",
        txtColor: "#ED4258",
        hasIcon: false,
        iconType: "help",
        iconClass: "fg-error-2",
        hasBorder: true
      },
      expired: {
        bgColor: "#FFEDD5",
        txtColor: "#EA580C",
        hasIcon: false,
        hasBorder: true
      },
      sold: {
        bgColor: "#FFEDD5",
        txtColor: "#EA580C",
        hasIcon: false,
        hasBorder: true
      },
      completed: {
        bgColor: "#E3FFE6",
        txtColor: "#2EB844",
        hasIcon: false,
        hasBorder: false,
        isRoundedPill: true
      },
      pending: {
        bgColor: "#F5F5F5",
        txtColor: "#6C7284",
        hasIcon: false,
        hasBorder: false,
        isRoundedPill: true
      },
      unpublished: {
        bgColor: "#FFEDD5",
        txtColor: "#EA580C",
        hasIcon: false,
        hasBorder: true
      },
      "property-occupied": {
        bgColor: "#FFEDD5",
        txtColor: "#EA580C",
        hasIcon: false,
        hasBorder: true
      },
      "sale-agreed": {
        bgColor: "#FFEDD5",
        txtColor: "#EA580C",
        hasIcon: false,
        hasBorder: true
      }
    };
  }
  set adStatus(status) {
    this.stampTxt = status;
    this.adStatusConfig = this.statusMappings[status];
  }
  removeHyphens(inputString) {
    return inputString.replace(/-/g, " ");
  }
  static {
    this.\u0275fac = function MyAdStampComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAdStampComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(IconService), \u0275\u0275directiveInject(CommonFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyAdStampComponent, selectors: [["findqo-my-ad-stamp"]], inputs: { adStatus: "adStatus" }, standalone: false, decls: 5, vars: 13, consts: [[1, "status", "d-inline-block", 3, "ngClass"], [1, "text-caption-regular", "align-middle"], ["class", "ps-1", 3, "ngClass", 4, "ngIf"], [1, "ps-1", 3, "ngClass"]], template: function MyAdStampComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MyAdStampComponent_mat_icon_4_Template, 2, 2, "mat-icon", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.adStatusConfig == null ? null : ctx.adStatusConfig.bgColor)("border-color", (ctx.adStatusConfig == null ? null : ctx.adStatusConfig.hasBorder) ? ctx.adStatusConfig == null ? null : ctx.adStatusConfig.txtColor : "transparent");
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c0, ctx.adStatusConfig == null ? null : ctx.adStatusConfig.isRoundedPill));
        \u0275\u0275advance();
        \u0275\u0275styleProp("color", ctx.adStatusConfig == null ? null : ctx.adStatusConfig.txtColor);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, ctx.removeHyphens(ctx.stampTxt)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.adStatusConfig == null ? null : ctx.adStatusConfig.hasIcon);
      }
    }, dependencies: [NgClass, NgIf, MatIcon, TitleCasePipe], styles: ["\n\n.status[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  gap: 4px;\n  border: 1px solid;\n  border-radius: 4px;\n  width: auto;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-stamp.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAdStampComponent, [{
    type: Component,
    args: [{ selector: "findqo-my-ad-stamp", standalone: false, template: `<div
	class="status d-inline-block"
	[ngClass]="{ 'rounded-pill': adStatusConfig?.isRoundedPill }"
	[style.background-color]="adStatusConfig?.bgColor"
	[style.border-color]="adStatusConfig?.hasBorder ? adStatusConfig?.txtColor : 'transparent'"
>
	<span class="text-caption-regular align-middle" [style.color]="adStatusConfig?.txtColor">{{ removeHyphens(stampTxt) | titlecase }}</span>
	<mat-icon class="ps-1" [ngClass]="adStatusConfig?.iconClass" *ngIf="adStatusConfig?.hasIcon">{{ adStatusConfig?.iconType }}</mat-icon>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-stamp/my-ad-stamp.component.scss */\n.status {\n  padding: 0px 8px;\n  gap: 4px;\n  border: 1px solid;\n  border-radius: 4px;\n  width: auto;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/my-ad-stamp.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: IconService }, { type: CommonFacade }], { adStatus: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyAdStampComponent, { className: "MyAdStampComponent", filePath: "apps/findqo-ireland/src/app/feature/my-ads/components/my-ad-stamp/my-ad-stamp.component.ts", lineNumber: 12 });
})();

// apps/findqo-ireland/src/app/core/services/browser-utility.service.ts
var BrowserUtility = class _BrowserUtility {
  constructor(devicePlatform) {
    this.devicePlatform = devicePlatform;
  }
  isWebShareSupported() {
    const PLATFORM = this.devicePlatform.getPlatform();
    return "share" in navigator && (PLATFORM === DevicePlateform.ANDROID || PLATFORM === DevicePlateform.IOS || PLATFORM === DevicePlateform.HUAWEI);
  }
  static {
    this.\u0275fac = function BrowserUtility_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserUtility)(\u0275\u0275inject(DevicePlateformService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrowserUtility, factory: _BrowserUtility.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserUtility, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: DevicePlateformService }], null);
})();

export {
  MyAdStampComponent,
  BrowserUtility,
  require_relativeTime
};
//# sourceMappingURL=chunk-UNPSDH5C.js.map
