import {
  NgTemplateOutlet
} from "./chunk-P7GEPQ2C.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/shared/components/commercial-lead-ai-response/commercial-lead-ai-response.component.ts
var _c0 = (a0, a1) => ({ item: a0, i: a1 });
function CommercialLeadAIResponseComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.aiResponse, \u0275\u0275sanitizeHtml);
  }
}
function CommercialLeadAIResponseComponent_Conditional_1_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CommercialLeadAIResponseComponent_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CommercialLeadAIResponseComponent_Conditional_1_For_6_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_13_r3 = ctx.$index;
    \u0275\u0275nextContext();
    const officeBlock_r4 = \u0275\u0275reference(13);
    \u0275\u0275property("ngTemplateOutlet", officeBlock_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, item_r2, \u0275$index_13_r3));
  }
}
function CommercialLeadAIResponseComponent_Conditional_1_For_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CommercialLeadAIResponseComponent_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CommercialLeadAIResponseComponent_Conditional_1_For_11_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const \u0275$index_23_r6 = ctx.$index;
    \u0275\u0275nextContext();
    const officeBlock_r4 = \u0275\u0275reference(13);
    \u0275\u0275property("ngTemplateOutlet", officeBlock_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, item_r5, \u0275$index_23_r6));
  }
}
function CommercialLeadAIResponseComponent_Conditional_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "p", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 7)(4, "li");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li")(13, "a", 8);
    \u0275\u0275text(14, "View Listing");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    const i_r8 = ctx.i;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r8 + 1, ". ", item_r7.office_name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Monthly Rent: ", item_r7.monthly_rent, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Office Configuration: ", item_r7.configuration, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Area Insights: ", item_r7.area_insights, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Address: ", item_r7.address, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", item_r7.listing_link, \u0275\u0275sanitizeUrl);
  }
}
function CommercialLeadAIResponseComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section")(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, CommercialLeadAIResponseComponent_Conditional_1_For_6_Template, 1, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "section", 4)(8, "h2", 3);
    \u0275\u0275text(9, "Alternative Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, CommercialLeadAIResponseComponent_Conditional_1_For_11_Template, 1, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CommercialLeadAIResponseComponent_Conditional_1_ng_template_12_Template, 15, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.parsedResponse().summary);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Office Spaces in ", ctx_r0.parsedResponse().primary_location, "");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.parsedResponse().offices);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.parsedResponse().alternative_locations);
  }
}
var CommercialLeadAIResponseComponent = class _CommercialLeadAIResponseComponent {
  constructor() {
    this.isStringResponse = computed(() => typeof this.aiResponse === "string");
    this.parsedResponse = computed(() => {
      const val = this.aiResponse;
      return typeof val === "string" ? null : val;
    });
  }
  static {
    this.\u0275fac = function CommercialLeadAIResponseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommercialLeadAIResponseComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommercialLeadAIResponseComponent, selectors: [["findqo-commercial-lead-ai-response"]], inputs: { aiResponse: "aiResponse" }, decls: 2, vars: 1, consts: [["officeBlock", ""], [1, "ai-content", "ai-hub-lead", 3, "innerHTML"], [1, "mb-4"], [1, "mb-3"], [1, "mt-4"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mb-2"], [1, "mb-0"], ["target", "_blank", "rel", "noopener", 3, "href"]], template: function CommercialLeadAIResponseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CommercialLeadAIResponseComponent_Conditional_0_Template, 1, 1, "div", 1)(1, CommercialLeadAIResponseComponent_Conditional_1_Template, 14, 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isStringResponse() ? 0 : 1);
      }
    }, dependencies: [NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommercialLeadAIResponseComponent, [{
    type: Component,
    args: [{
      selector: "findqo-commercial-lead-ai-response",
      imports: [NgTemplateOutlet],
      template: `
		@if (isStringResponse()) {
			<div class="ai-content ai-hub-lead" [innerHTML]="aiResponse"></div>
		} @else {
			<p class="mb-4">{{ parsedResponse().summary }}</p>

			<section>
				<h2 class="mb-3">Office Spaces in {{ parsedResponse().primary_location }}</h2>
				@for (item of parsedResponse().offices; track item; let i = $index) {
					<ng-container *ngTemplateOutlet="officeBlock; context: { item: item, i: i }"></ng-container>
				}
			</section>

			<section class="mt-4">
				<h2 class="mb-3">Alternative Locations</h2>
				@for (item of parsedResponse().alternative_locations; track item; let i = $index) {
					<ng-container *ngTemplateOutlet="officeBlock; context: { item: item, i: i }"></ng-container>
				}
			</section>

			<ng-template #officeBlock let-item="item" let-i="i">
				<div class="mb-4">
					<p class="mb-2">{{ i + 1 }}. {{ item.office_name }}</p>
					<ul class="mb-0">
						<li>Monthly Rent: {{ item.monthly_rent }}</li>
						<li>Office Configuration: {{ item.configuration }}</li>
						<li>Area Insights: {{ item.area_insights }}</li>
						<li>Address: {{ item.address }}</li>
						<li>
							<a [href]="item.listing_link" target="_blank" rel="noopener">View Listing</a>
						</li>
					</ul>
				</div>
			</ng-template>
		}
	`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { aiResponse: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommercialLeadAIResponseComponent, { className: "CommercialLeadAIResponseComponent", filePath: "apps/findqo-ireland/src/app/shared/components/commercial-lead-ai-response/commercial-lead-ai-response.component.ts", lineNumber: 46 });
})();

export {
  CommercialLeadAIResponseComponent
};
//# sourceMappingURL=chunk-A3HYZPJI.js.map
