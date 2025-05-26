import {
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Pipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/pipes/rich-text.ts
var RichTextPipe = class _RichTextPipe {
  transform(value) {
    if (!value)
      return "";
    let formatted = value.replace(/\n/g, "<br>");
    formatted = formatted.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    return formatted;
  }
  static {
    this.\u0275fac = function RichTextPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RichTextPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "richText", type: _RichTextPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RichTextPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "richText"
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/shared/components/ads/ad-list-skeleton-loading/ad-list-skeleton-loading.component.ts
function AdListSkeletonLoadingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
var AdListSkeletonLoadingComponent = class _AdListSkeletonLoadingComponent {
  constructor(viewport) {
    this.viewport = viewport;
  }
  static {
    this.\u0275fac = function AdListSkeletonLoadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdListSkeletonLoadingComponent)(\u0275\u0275directiveInject(ViewportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdListSkeletonLoadingComponent, selectors: [["findqo-ad-list-skeleton-loading"]], standalone: false, decls: 12, vars: 1, consts: [[1, "row", "my-3", "mx-0"], [1, "col-sm-auto", "px-0", "placeholder-wave", "h-100", "w-100", "w-sm-280px", "h-sm-158px", "gradient", "placeholder"], [1, "col-sm", "px-0", "ps-xl-3", "ps-lg-3", "ps-sm-3", "placeholder-wave", "align-self-center", "mt-3", "mt-sm-0"], [1, "row", "mx-0"], [1, "placeholder", "col-5", "col-md-3", "pe-0", "gradient", "h-20px"], [1, "row", "mx-0", "mt-2"], [1, "placeholder", "col-4", "col-md-4", "pe-0", "gradient", "h-20px"], ["class", "row mx-0 mt-3", 4, "ngIf"], [1, "placeholder", "col-8", "col-md-7", "pe-0", "gradient", "h-20px"], [1, "row", "mx-0", "mt-3"], [1, "placeholder", "col-7", "col-md-5", "pe-0", "gradient", "h-20px"], [1, "placeholder", "col-4", "col-md-6", "pe-0", "gradient", "h-20px"]], template: function AdListSkeletonLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, AdListSkeletonLoadingComponent_div_7_Template, 2, 0, "div", 7);
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275element(11, "div", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.viewport.desktop || ctx.viewport.tablet);
      }
    }, dependencies: [NgIf], styles: ["\n\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--general-1) 25.12%,\n      var(--general-2) 126.12%);\n  border-radius: 5px;\n}\n.h-20px[_ngcontent-%COMP%] {\n  height: 20px;\n}\n@media (min-width: 576px) {\n  .w-sm-280px[_ngcontent-%COMP%] {\n    max-width: 280px;\n  }\n  .h-sm-158px[_ngcontent-%COMP%] {\n    min-height: 158px;\n  }\n}\n@media (max-width: 575.98px) {\n  .h-sm-158px[_ngcontent-%COMP%] {\n    min-height: 158px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-list-skeleton-loading.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdListSkeletonLoadingComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-list-skeleton-loading", standalone: false, template: '<div class="row my-3 mx-0">\n	<div class="col-sm-auto px-0 placeholder-wave h-100 w-100 w-sm-280px h-sm-158px gradient placeholder"></div>\n\n	<div class="col-sm px-0 ps-xl-3 ps-lg-3 ps-sm-3 placeholder-wave align-self-center mt-3 mt-sm-0">\n		<div class="row mx-0">\n			<div class="placeholder col-5 col-md-3 pe-0 gradient h-20px"></div>\n		</div>\n\n		<div class="row mx-0 mt-2">\n			<div class="placeholder col-4 col-md-4 pe-0 gradient h-20px"></div>\n		</div>\n\n		<div *ngIf="viewport.desktop || viewport.tablet" class="row mx-0 mt-3">\n			<div class="placeholder col-4 col-md-6 pe-0 gradient h-20px"></div>\n		</div>\n\n		<div class="row mx-0 mt-2">\n			<div class="placeholder col-8 col-md-7 pe-0 gradient h-20px"></div>\n		</div>\n\n		<div class="row mx-0 mt-3">\n			<div class="placeholder col-7 col-md-5 pe-0 gradient h-20px"></div>\n		</div>\n	</div>\n</div>\n', styles: ["/* apps/findqo-ireland/src/app/shared/components/ads/ad-list-skeleton-loading/ad-list-skeleton-loading.component.scss */\n.gradient {\n  background:\n    linear-gradient(\n      90deg,\n      var(--general-1) 25.12%,\n      var(--general-2) 126.12%);\n  border-radius: 5px;\n}\n.h-20px {\n  height: 20px;\n}\n@media (min-width: 576px) {\n  .w-sm-280px {\n    max-width: 280px;\n  }\n  .h-sm-158px {\n    min-height: 158px;\n  }\n}\n@media (max-width: 575.98px) {\n  .h-sm-158px {\n    min-height: 158px;\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-list-skeleton-loading.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdListSkeletonLoadingComponent, { className: "AdListSkeletonLoadingComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-list-skeleton-loading/ad-list-skeleton-loading.component.ts", lineNumber: 10 });
})();

export {
  AdListSkeletonLoadingComponent,
  RichTextPipe
};
//# sourceMappingURL=chunk-L6WIR66L.js.map
