import {
  BreadcrumbsState
} from "./chunk-5CLAA2MT.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  FilterType,
  RouteDataType,
  RouterLink,
  RouterModule
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/ads/ad-breadcrumbs/ad-breadcrumbs.component.ts
function AdBreadcrumbsComponent_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r1.link)("queryParams", item_r1.queryParams);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.name, " ");
  }
}
function AdBreadcrumbsComponent_li_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.name, " ");
  }
}
function AdBreadcrumbsComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275template(1, AdBreadcrumbsComponent_li_2_a_1_Template, 4, 3, "a", 5)(2, AdBreadcrumbsComponent_li_2_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const last_r2 = ctx.last;
    const lastItem_r3 = \u0275\u0275reference(3);
    \u0275\u0275classProp("active", last_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2)("ngIfElse", lastItem_r3);
  }
}
var AdBreadcrumbsComponent = class _AdBreadcrumbsComponent {
  constructor(route, breadcrumbsState) {
    this.route = route;
    this.breadcrumbsState = breadcrumbsState;
    this.breadcrumbs = [];
    this.home = {
      name: "Home",
      link: [APP_ROUTE.home]
    };
  }
  createBreadcrumbs(ad) {
    if (ad) {
      this.createBreadcrumbsFromAd(ad);
    } else {
      this.createBreadcrumbsFromAdList();
    }
  }
  createBreadcrumbsFromAd(ad) {
    const DEFAULT_LINK = ["/", ad.section.reference, "ireland", ad.aisle.reference];
    const QUERY_PARAMS = this.breadcrumbsState.getbreadcrumbsParams().queryParams;
    this.breadcrumbs.push(
      // Home
      this.home,
      // Aisle
      {
        name: ad.aisle.name,
        link: DEFAULT_LINK,
        queryParams: QUERY_PARAMS
      },
      // Ad title
      {
        name: ad.title
      }
    );
  }
  createBreadcrumbsFromAdList() {
    const isSeoFriendlyUrl = this.route.snapshot.data?.[RouteDataType.IS_AD_LISTING_SEO_FRIENDLY_URL];
    const aisleObservable = isSeoFriendlyUrl ? this.route.data : this.route.params;
    aisleObservable.subscribe((params) => {
      const AISLE = params[FilterType.AISLE]?.split("-").map((aisle) => this.toCapitalize(aisle)) || [];
      this.breadcrumbs = [];
      this.breadcrumbs.push(this.home, {
        name: AISLE.join(" ")
      });
    });
  }
  toCapitalize(value) {
    return value.charAt(0).toLocaleUpperCase() + value.substring(1);
  }
  ngOnInit() {
    this.createBreadcrumbs(this.ad);
  }
  static {
    this.\u0275fac = function AdBreadcrumbsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdBreadcrumbsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BreadcrumbsState));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdBreadcrumbsComponent, selectors: [["findqo-ad-breadcrumbs"]], inputs: { ad: "ad" }, decls: 3, vars: 1, consts: [["lastItem", ""], ["aria-label", "breadcrumb"], [1, "breadcrumb", "align-items-center"], ["class", "breadcrumb-item v-center px-0", 3, "active", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "v-center", "px-0"], ["class", "v-center gap-1 text-caption-regular fg-info-3", 3, "routerLink", "queryParams", 4, "ngIf", "ngIfElse"], [1, "v-center", "gap-1", "text-caption-regular", "fg-info-3", 3, "routerLink", "queryParams"], [1, "fg-general-2"], [1, "text-caption-regular", "fg-general-4"]], template: function AdBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 1)(1, "ol", 2);
        \u0275\u0275template(2, AdBreadcrumbsComponent_li_2_Template, 4, 4, "li", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.breadcrumbs);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, RouterModule, RouterLink], styles: ['\n\nli.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  content: "";\n  padding-right: 0.25rem;\n}\nli.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 18px;\n  text-decoration: none;\n}\nli.breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-breadcrumbs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdBreadcrumbsComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-breadcrumbs", standalone: true, imports: [CommonModule, MatIconModule, RouterModule], template: '<nav aria-label="breadcrumb">\n	<ol class="breadcrumb align-items-center">\n		<li class="breadcrumb-item v-center px-0" *ngFor="let item of breadcrumbs; let last = last" [class.active]="last">\n			<a *ngIf="!last; else lastItem" class="v-center gap-1 text-caption-regular fg-info-3" [routerLink]="item.link" [queryParams]="item.queryParams">\n				{{ item.name }}\n				<mat-icon class="fg-general-2">chevron_right</mat-icon>\n			</a>\n\n			<ng-template #lastItem>\n				<span class="text-caption-regular fg-general-4">\n					{{ item.name }}\n				</span>\n			</ng-template>\n		</li>\n	</ol>\n</nav>\n', styles: ['/* apps/findqo-ireland/src/app/shared/components/ads/ad-breadcrumbs/ad-breadcrumbs.component.scss */\nli.breadcrumb-item + .breadcrumb-item::before {\n  content: "";\n  padding-right: 0.25rem;\n}\nli.breadcrumb-item a {\n  line-height: 18px;\n  text-decoration: none;\n}\nli.breadcrumb-item a mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-breadcrumbs.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: BreadcrumbsState }], { ad: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdBreadcrumbsComponent, { className: "AdBreadcrumbsComponent", filePath: "apps/findqo-ireland/src/app/shared/components/ads/ad-breadcrumbs/ad-breadcrumbs.component.ts", lineNumber: 24 });
})();

export {
  AdBreadcrumbsComponent
};
//# sourceMappingURL=chunk-JF4CZBE5.js.map
