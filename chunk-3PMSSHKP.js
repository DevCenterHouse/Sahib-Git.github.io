import {
  CommonUtil,
  RouterLink,
  SharedModule
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7YCEKZKP.js";
import {
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Input,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/pagination/pagination.component.ts
var _c0 = () => ["./"];
var _c1 = (a0) => ({ page: a0 });
function PaginationComponent_ul_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentPage === page_r1);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.currentPage === page_r1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0))("queryParams", \u0275\u0275pureFunction1(8, _c1, page_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r1);
  }
}
function PaginationComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 2)(1, "li", 3)(2, "a", 4)(3, "mat-icon", 5);
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, PaginationComponent_ul_1_li_5_Template, 3, 10, "li", 6);
    \u0275\u0275elementStart(6, "li", 7)(7, "a", 8)(8, "mat-icon", 5);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", ctx_r1.currentPage === 1 ? -1 : 0)("routerLink", \u0275\u0275pureFunction0(11, _c0))("queryParams", \u0275\u0275pureFunction1(12, _c1, ctx_r1.currentPage - 1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", ctx_r1.currentPage === ctx_r1.totalPages ? -1 : 0)("routerLink", \u0275\u0275pureFunction0(14, _c0))("queryParams", \u0275\u0275pureFunction1(15, _c1, ctx_r1.currentPage + 1));
  }
}
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.pages = [];
  }
  updatePageNumbers() {
    this.pages = [];
    let startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, startPage + 4);
    if (endPage - startPage < 4) {
      const adjustment = 4 - (endPage - startPage);
      if (startPage - adjustment > 0) {
        startPage -= adjustment;
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  }
  setPageMetaData(pageMetaData) {
    if (pageMetaData) {
      this.currentPage = Number.parseInt(pageMetaData?.currentPage);
      this.totalPages = Number.parseInt(pageMetaData?.totalPages);
      this.total = Number.parseInt(pageMetaData?.total);
      this.perPage = Number.parseInt(pageMetaData?.perPage);
      this.totalPages = Math.ceil(this.total / this.perPage);
      this.updatePageNumbers();
    }
  }
  ngOnInit() {
    this.setPageMetaData(this.pageMetaData);
  }
  ngOnChanges(changes) {
    CommonUtil.handleNgOnChanges(changes["pageMetaData"], (pageMetaData) => {
      this.setPageMetaData(pageMetaData);
    });
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["findqo-pagination"]], inputs: { pageMetaData: "pageMetaData" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "text-center", "justify-content-center"], ["class", "pagination-list", 4, "ngIf"], [1, "pagination-list"], [1, "pagination-item", "pagination-item--prev", "cursor-pointer"], ["rel", "prev", "queryParamsHandling", "merge", 1, "pagination-link", "d-flex", "align-items-center", "justify-content-center", "h-100", 3, "tabIndex", "routerLink", "queryParams"], [1, "fg-general-5"], ["class", "pagination-item cursor-pointer", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-item", "pagination-item--next", "cursor-pointer"], ["rel", "next", "queryParamsHandling", "merge", 1, "pagination-link", "d-flex", "align-items-center", "justify-content-center", "h-100", 3, "tabIndex", "routerLink", "queryParams"], [1, "pagination-item", "cursor-pointer"], ["queryParamsHandling", "merge", 1, "pagination-link", 3, "routerLink", "queryParams"]], template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0);
        \u0275\u0275template(1, PaginationComponent_ul_1_Template, 10, 17, "ul", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pages.length > 1);
      }
    }, dependencies: [NgForOf, NgIf, MatIcon, RouterLink], styles: ["\n\n.pagination-item.active[_ngcontent-%COMP%] {\n  z-index: 99;\n  background-color: var(--info-1);\n  border: 1px solid var(--info-3);\n}\n.pagination-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\n.pagination-item[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: var(--general-1);\n  margin: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n.pagination-item--next[_ngcontent-%COMP%] {\n  margin-inline-start: 12px;\n}\n.pagination-item--prev[_ngcontent-%COMP%] {\n  margin-inline-end: 12px;\n}\n.pagination-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: var(--general-5);\n  text-decoration: none;\n  font-size: 14px;\n}\n.pagination-link.active[_ngcontent-%COMP%] {\n  color: var(--info-3) !important;\n}\n.pagination-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.pagination-link[_ngcontent-%COMP%]:hover {\n  color: var(--info-3);\n}\n.pagination-item.disabled[_ngcontent-%COMP%]   .pagination-link[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: var(--general-3);\n  opacity: 0.5;\n}\n.pagination-link[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.pagination-dots[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pagination.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{ selector: "findqo-pagination", standalone: false, template: `<nav class="text-center justify-content-center">
	<ul class="pagination-list" *ngIf="pages.length > 1">
		<li class="pagination-item pagination-item--prev cursor-pointer" [class.disabled]="currentPage === 1">
			<a
				rel="prev"
				class="pagination-link d-flex align-items-center justify-content-center h-100"
				[tabIndex]="currentPage === 1 ? -1 : 0"
				[routerLink]="['./']"
				[queryParams]="{ page: currentPage - 1 }"
				queryParamsHandling="merge"
			>
				<mat-icon class="fg-general-5">chevron_left</mat-icon>
			</a>
		</li>

		<li class="pagination-item cursor-pointer" *ngFor="let page of pages" [class.active]="currentPage === page">
			<a class="pagination-link" [class.active]="currentPage === page" [routerLink]="['./']" [queryParams]="{ page }" queryParamsHandling="merge">{{ page }}</a>
		</li>

		<li class="pagination-item pagination-item--next cursor-pointer" [class.disabled]="currentPage === totalPages">
			<a
				rel="next"
				class="pagination-link d-flex align-items-center justify-content-center h-100"
				[tabIndex]="currentPage === totalPages ? -1 : 0"
				[routerLink]="['./']"
				[queryParams]="{ page: currentPage + 1 }"
				queryParamsHandling="merge"
			>
				<mat-icon class="fg-general-5">chevron_right</mat-icon>
			</a>
		</li>
	</ul>
</nav>
`, styles: ["/* apps/findqo-ireland/src/app/shared/components/pagination/pagination.component.scss */\n.pagination-item.active {\n  z-index: 99;\n  background-color: var(--info-1);\n  border: 1px solid var(--info-3);\n}\n.pagination-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n}\n.pagination-item {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: var(--general-1);\n  margin: 4px;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n.pagination-item--next {\n  margin-inline-start: 12px;\n}\n.pagination-item--prev {\n  margin-inline-end: 12px;\n}\n.pagination-link {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: var(--general-5);\n  text-decoration: none;\n  font-size: 14px;\n}\n.pagination-link.active {\n  color: var(--info-3) !important;\n}\n.pagination-link i {\n  display: inline-block;\n}\n.pagination-link:hover {\n  color: var(--info-3);\n}\n.pagination-item.disabled .pagination-link {\n  pointer-events: none;\n  color: var(--general-3);\n  opacity: 0.5;\n}\n.pagination-link:focus {\n  box-shadow: none;\n}\n.pagination-dots {\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/pagination.component.css.map */\n"] }]
  }], null, { pageMetaData: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "apps/findqo-ireland/src/app/shared/components/pagination/pagination.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/shared/components/pagination/pagination.module.ts
var PaginationModule = class _PaginationModule {
  static {
    this.\u0275fac = function PaginationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PaginationModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatIconModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      declarations: [PaginationComponent],
      imports: [SharedModule, MatIconModule],
      exports: [PaginationComponent]
    }]
  }], null, null);
})();

export {
  PaginationComponent,
  PaginationModule
};
//# sourceMappingURL=chunk-3PMSSHKP.js.map
