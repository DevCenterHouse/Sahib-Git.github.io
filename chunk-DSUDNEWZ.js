import {
  MeetingScheduleFacade
} from "./chunk-6K6PKNF2.js";
import {
  Clipboard
} from "./chunk-6CJCVRJS.js";
import {
  AuthGuard
} from "./chunk-YWVMQOIU.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-34NPCBBY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  AuthService,
  MatButton,
  MatDivider,
  MatDividerModule,
  MatFormField,
  MatIconButton,
  MatInputModule,
  MatOption,
  Router,
  RouterLink,
  RouterModule,
  SharedModule,
  TimeIntervalNamePipe,
  TranslationsPipe
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  Inject,
  Injectable,
  Input,
  NgModule,
  PLATFORM_ID,
  __spreadValues,
  map,
  setClassMetadata,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-card/meeting-card.component.ts
var _c0 = (a0) => ({ inactive: a0 });
function MeetingCardComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.meeting.agents);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r1.meeting.agents == null ? null : (tmp_5_0 = ctx_r1.meeting.agents.split(",")) == null ? null : tmp_5_0.length, " ");
  }
}
function MeetingCardComponent_p_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "span", 11);
    \u0275\u0275text(2, "End Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, +ctx_r1.meeting.endDate * 1e3, "dd MMMM, yyyy"));
  }
}
function MeetingCardComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function MeetingCardComponent_ng_template_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyUrl());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !+ctx_r1.meeting.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "n226"), " ");
  }
}
function MeetingCardComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 28)(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !+ctx_r1.meeting.active);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "n712"), " ");
  }
}
var MeetingCardComponent = class _MeetingCardComponent {
  constructor(clipboard, destroy, meetingFacade, authService) {
    this.clipboard = clipboard;
    this.destroy = destroy;
    this.meetingFacade = meetingFacade;
    this.authService = authService;
    this.isCopied = false;
    this.user = this.authService.user();
    this.appRoute = APP_ROUTE;
  }
  set _meeting(data) {
    this.meeting = data;
  }
  openUrl(url) {
    window?.open(url, "_blank");
  }
  copyUrl() {
    this.clipboard.copy(this.meeting.link);
    this.isCopied = true;
    timer(1e4).pipe(takeUntil(this.destroy), tap(() => this.isCopied = false)).subscribe();
  }
  handleStatus(meeting) {
    this.meetingFacade.updateMeetingStatus(meeting.id, +meeting.active ? "0" : "1").subscribe();
  }
  handleDelete(meeting) {
    this.meeting.active = "0";
    this.meetingFacade.deleteMeeting(meeting.id).subscribe();
  }
  static {
    this.\u0275fac = function MeetingCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingCardComponent)(\u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(MeetingScheduleFacade), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingCardComponent, selectors: [["findqo-meeting-card"]], inputs: { _meeting: [0, "meeting", "_meeting"] }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService])], decls: 72, vars: 49, consts: [["copyLink", ""], ["linkCopied", ""], ["menu", "matMenu"], [1, "meeting-card", "mt-3", "p-3", 3, "ngClass"], [1, "row", "justify-content-between", "align-items-center"], [1, "col"], [1, "heading-3-medium"], [1, "col-auto"], ["mat-icon-button", "", 1, "border", "p-2", "bg-general-2", 3, "matMenuTriggerFor"], [1, "mt-3"], [1, "text-body-regular"], [1, "fg-general-4"], [1, "fg-general-5", "ms-1"], [1, "text-body-regular", "mt-2"], ["class", "fg-general-4 bg-neutral-1 px-2 rounded-pill ms-1 cursor-pointer", 3, "matTooltip", 4, "ngIf"], ["class", "text-body-regular mt-2", 4, "ngIf"], [1, "row", "justify-content-between", "align-items-center", "mt-3"], ["mat-button", "", "color", "primary", 1, "text-body-regular", 3, "click", "disabled"], [3, "ngTemplateOutlet"], ["xPosition", "before"], ["mat-menu-item", "", 3, "routerLink"], [1, "material-icons-outlined", "fg-general-4"], [1, "fg-general-5", "text-body-regular"], ["mat-menu-item", "", 3, "click"], [1, "material-icons-outlined", "fg-error-3"], [1, "fg-error-3", "text-body-regular"], [1, "fg-general-4", "bg-neutral-1", "px-2", "rounded-pill", "ms-1", "cursor-pointer", 3, "matTooltip"], ["mat-flat-button", "", "color", "primary", 1, "text-body-regular", 3, "click", "disabled"], ["mat-button", "", "color", "primary", 1, "text-body-regular", 3, "disabled"]], template: function MeetingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h3", 6);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 7)(6, "button", 8)(7, "mat-icon");
        \u0275\u0275text(8, "more_horiz");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 9)(10, "p", 10)(11, "span", 11);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 12);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 13)(17, "span", 11);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 12);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translations");
        \u0275\u0275pipe(23, "timeIntervalName");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "p", 13)(25, "span", 11);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 12);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, MeetingCardComponent_span_30_Template, 2, 2, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 13)(32, "span", 11);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 12);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, MeetingCardComponent_p_38_Template, 6, 4, "p", 15);
        \u0275\u0275element(39, "mat-divider", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 16)(41, "div", 7)(42, "button", 17);
        \u0275\u0275listener("click", function MeetingCardComponent_Template_button_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openUrl(ctx.meeting.link));
        });
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 7);
        \u0275\u0275elementContainer(46, 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(47, MeetingCardComponent_ng_template_47_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(49, MeetingCardComponent_ng_template_49_Template, 5, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(51, "mat-menu", 19, 2)(53, "button", 20)(54, "mat-icon", 21);
        \u0275\u0275text(55, "edit_calendar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 22);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "button", 23);
        \u0275\u0275listener("click", function MeetingCardComponent_Template_button_click_59_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleStatus(ctx.meeting));
        });
        \u0275\u0275elementStart(60, "mat-icon", 21);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 22);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translations");
        \u0275\u0275pipe(65, "translations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "button", 23);
        \u0275\u0275listener("click", function MeetingCardComponent_Template_button_click_66_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.handleDelete(ctx.meeting));
        });
        \u0275\u0275elementStart(67, "mat-icon", 24);
        \u0275\u0275text(68, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span", 25);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translations");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        const copyLink_r4 = \u0275\u0275reference(48);
        const linkCopied_r5 = \u0275\u0275reference(50);
        const menu_r6 = \u0275\u0275reference(52);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(47, _c0, !+ctx.meeting.active));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_4_0 = ctx.meeting == null ? null : ctx.meeting.title) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx.meeting.meetingType.name);
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", menu_r6);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 22, "n3771"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.meeting.address);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 24, "n3919"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 26, "n3920"), " ", \u0275\u0275pipeBind1(23, 28, ctx.meeting.intervals), "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 30, "n3874"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.user.email);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.meeting == null ? null : ctx.meeting.agents);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 32, "n3382"), ":");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 34, +ctx.meeting.startDate * 1e3, "dd MMMM, yyyy"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.meeting == null ? null : ctx.meeting.endDate);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !+ctx.meeting.active);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 37, "n3873"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.isCopied ? linkCopied_r5 : copyLink_r4);
        \u0275\u0275advance(7);
        \u0275\u0275property("routerLink", ctx.appRoute.meetingSchedule.edit + "/" + ctx.meeting.id);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 39, "n3881"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(+ctx.meeting.active ? "block" : "check_circle");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(+ctx.meeting.active ? \u0275\u0275pipeBind1(64, 41, "n3882") : \u0275\u0275pipeBind1(65, 43, "n3918"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 45, "n3883"));
      }
    }, dependencies: [NgClass, NgIf, NgTemplateOutlet, MatButton, MatIconButton, MatIcon, RouterLink, MatDivider, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, DatePipe, TranslationsPipe, TimeIntervalNamePipe], styles: ["\n\n.meeting-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--neutral-2);\n  border-radius: 8px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-left: -16px;\n  margin-right: -16px;\n  border-color: var(--neutral-1) !important;\n}\n.inactive[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingCardComponent, [{
    type: Component,
    args: [{ selector: "findqo-meeting-card", providers: [DestroyService], standalone: false, template: `<div class="meeting-card mt-3 p-3" [ngClass]="{ inactive: !+meeting.active }">
	<div class="row justify-content-between align-items-center">
		<div class="col">
			<h3 class="heading-3-medium">{{ meeting?.title ?? meeting.meetingType.name }}</h3>
		</div>

		<div class="col-auto">
			<button mat-icon-button class="border p-2 bg-general-2" [matMenuTriggerFor]="menu">
				<mat-icon>more_horiz</mat-icon>
			</button>
		</div>
	</div>

	<div class="mt-3">
		<p class="text-body-regular">
			<span class="fg-general-4">{{ 'n3771' | translations }}:</span>
			<span class="fg-general-5 ms-1">{{ meeting.address }}</span>
		</p>

		<p class="text-body-regular mt-2">
			<span class="fg-general-4">{{ 'n3919' | translations }}:</span>
			<span class="fg-general-5 ms-1">{{ 'n3920' | translations }} {{ meeting.intervals | timeIntervalName }}</span>
		</p>

		<p class="text-body-regular mt-2">
			<span class="fg-general-4">{{ 'n3874' | translations }}:</span>
			<span class="fg-general-5 ms-1">{{ user.email }}</span>
			<span *ngIf="meeting?.agents" class="fg-general-4 bg-neutral-1 px-2 rounded-pill ms-1 cursor-pointer" [matTooltip]="meeting.agents">
				+{{ meeting.agents?.split(',')?.length }}
			</span>
		</p>

		<p class="text-body-regular mt-2">
			<span class="fg-general-4">{{ 'n3382' | translations }}:</span>
			<span class="fg-general-5 ms-1">{{ +meeting.startDate * 1000 | date: 'dd MMMM, yyyy' }}</span>
		</p>

		<p *ngIf="meeting?.endDate" class="text-body-regular mt-2">
			<span class="fg-general-4">End Date:</span>
			<span class="fg-general-5 ms-1">{{ +meeting.endDate * 1000 | date: 'dd MMMM, yyyy' }}</span>
		</p>

		<mat-divider class="mt-3"></mat-divider>
	</div>

	<div class="row justify-content-between align-items-center mt-3">
		<div class="col-auto">
			<button mat-button color="primary" [disabled]="!+meeting.active" class="text-body-regular" (click)="openUrl(meeting.link)">
				{{ 'n3873' | translations }}
			</button>
		</div>

		<div class="col-auto">
			<ng-container [ngTemplateOutlet]="isCopied ? linkCopied : copyLink"></ng-container>
		</div>
	</div>
</div>

<ng-template #copyLink>
	<button mat-flat-button color="primary" class="text-body-regular" (click)="copyUrl()" [disabled]="!+meeting.active">
		<mat-icon>content_copy</mat-icon>
		{{ 'n226' | translations }}
	</button>
</ng-template>

<ng-template #linkCopied>
	<button mat-button color="primary" class="text-body-regular" [disabled]="!+meeting.active">
		<mat-icon>check</mat-icon>
		{{ 'n712' | translations }}
	</button>
</ng-template>

<mat-menu #menu="matMenu" xPosition="before">
	<button mat-menu-item [routerLink]="appRoute.meetingSchedule.edit + '/' + meeting.id">
		<mat-icon class="material-icons-outlined fg-general-4">edit_calendar</mat-icon>
		<span class="fg-general-5 text-body-regular">{{ 'n3881' | translations }}</span>
	</button>

	<button mat-menu-item (click)="handleStatus(meeting)">
		<mat-icon class="material-icons-outlined fg-general-4">{{ +meeting.active ? 'block' : 'check_circle' }}</mat-icon>
		<span class="fg-general-5 text-body-regular">{{ +meeting.active ? ('n3882' | translations) : ('n3918' | translations) }}</span>
	</button>

	<button mat-menu-item (click)="handleDelete(meeting)">
		<mat-icon class="material-icons-outlined fg-error-3">delete</mat-icon>
		<span class="fg-error-3 text-body-regular">{{ 'n3883' | translations }}</span>
	</button>
</mat-menu>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-card/meeting-card.component.scss */\n.meeting-card {\n  border: 1px solid var(--neutral-2);\n  border-radius: 8px;\n}\nmat-divider {\n  margin-left: -16px;\n  margin-right: -16px;\n  border-color: var(--neutral-1) !important;\n}\n.inactive {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-card.component.css.map */\n"] }]
  }], () => [{ type: Clipboard }, { type: DestroyService }, { type: MeetingScheduleFacade }, { type: AuthService }], { _meeting: [{
    type: Input,
    args: [{
      alias: "meeting"
    }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingCardComponent, { className: "MeetingCardComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-card/meeting-card.component.ts", lineNumber: 17 });
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/meeting-schedule.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MeetingScheduleComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "findqo-meeting-card", 12);
  }
  if (rf & 2) {
    const meeting_r1 = ctx.$implicit;
    \u0275\u0275property("meeting", meeting_r1);
  }
}
var MeetingScheduleComponent = class _MeetingScheduleComponent {
  constructor(meetingFacade) {
    this.meetingFacade = meetingFacade;
    this.meetingList$ = this.meetingFacade.meetingList$;
    this.appRoute = APP_ROUTE;
  }
  handleFilter($event) {
    this.meetingFacade.loadMeetingList($event.value).subscribe();
  }
  static {
    this.\u0275fac = function MeetingScheduleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleComponent)(\u0275\u0275directiveInject(MeetingScheduleFacade));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingScheduleComponent, selectors: [["findqo-meeting-schedule"]], standalone: false, decls: 30, vars: 24, consts: [[1, "container", "px-3"], [1, "heading-3", "fg-general-5"], [1, "text-paragraph-regular", "fg-general-5", "mt-1"], [1, "row", "justify-content-between", "align-items-center", "mt-3"], [1, "col-auto"], ["appearance", "outline", 1, "no-border", "no-subscript"], ["panelClass", "meeting-filters", 3, "selectionChange", "placeholder"], ["value", ""], ["value", "1"], ["value", "0"], ["mat-stroked-button", "", 1, "rounded-pill", "text", 3, "routerLink"], [1, "fg-prim-2"], [3, "meeting"]], template: function MeetingScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "mat-form-field", 5)(10, "mat-select", 6);
        \u0275\u0275pipe(11, "translations");
        \u0275\u0275listener("selectionChange", function MeetingScheduleComponent_Template_mat_select_selectionChange_10_listener($event) {
          return ctx.handleFilter($event);
        });
        \u0275\u0275elementStart(12, "mat-option", 7);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-option", 8);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-option", 9);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translations");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 4)(22, "button", 10)(23, "mat-icon", 11);
        \u0275\u0275text(24, "add_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "translations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(27, MeetingScheduleComponent_For_28_Template, 1, 1, "findqo-meeting-card", 12, _forTrack0);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "n3922"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 10, "n3923"), ".");
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 12, "n3878"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "n3878"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "n3879"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 18, "n3880"));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", ctx.appRoute.meetingSchedule.add);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "n3921"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(29, 22, ctx.meetingList$));
      }
    }, dependencies: [MatButton, MatIcon, RouterLink, MeetingCardComponent, MatFormField, MatSelect, MatOption, AsyncPipe, TranslationsPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 628px !important;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-schedule.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleComponent, [{
    type: Component,
    args: [{ selector: "findqo-meeting-schedule", standalone: false, template: `<div class="container px-3">
	<h3 class="heading-3 fg-general-5">{{ 'n3922' | translations }}</h3>
	<p class="text-paragraph-regular fg-general-5 mt-1">{{ 'n3923' | translations }}.</p>

	<div class="row justify-content-between align-items-center mt-3">
		<div class="col-auto">
			<mat-form-field appearance="outline" class="no-border no-subscript">
				<mat-select [placeholder]="'n3878' | translations" (selectionChange)="handleFilter($event)" panelClass="meeting-filters">
					<mat-option value="">{{ 'n3878' | translations }}</mat-option>
					<mat-option value="1">{{ 'n3879' | translations }}</mat-option>
					<mat-option value="0">{{ 'n3880' | translations }}</mat-option>
				</mat-select>
			</mat-form-field>
		</div>

		<div class="col-auto">
			<button mat-stroked-button class="rounded-pill text" [routerLink]="appRoute.meetingSchedule.add">
				<mat-icon class="fg-prim-2">add_circle</mat-icon>
				{{ 'n3921' | translations }}
			</button>
		</div>
	</div>

	@for (meeting of meetingList$ | async; track meeting.id) {
		<findqo-meeting-card [meeting]="meeting"></findqo-meeting-card>
	}
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/meeting-schedule/meeting-schedule.component.scss */\n.container {\n  max-width: 628px !important;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/meeting-schedule.component.css.map */\n"] }]
  }], () => [{ type: MeetingScheduleFacade }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingScheduleComponent, { className: "MeetingScheduleComponent", filePath: "apps/findqo-ireland/src/app/feature/meeting-schedule/meeting-schedule.component.ts", lineNumber: 11 });
})();

// apps/findqo-ireland/src/app/core/guards/meeting-list.guard.ts
var MeetingListGuard = class _MeetingListGuard {
  constructor(platformId, meetingFacade, router) {
    this.platformId = platformId;
    this.meetingFacade = meetingFacade;
    this.router = router;
  }
  canActivate() {
    if (isPlatformBrowser(this.platformId)) {
      return this.meetingFacade.loadMeetingList().pipe(map((res) => !!res.length), tap((res) => {
        if (!res) {
          this.router.navigate([`${APP_ROUTE.meetingSchedule.base}/${APP_ROUTE.meetingSchedule.add}`]);
        }
      }));
    }
    return false;
  }
  static {
    this.\u0275fac = function MeetingListGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingListGuard)(\u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(MeetingScheduleFacade), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeetingListGuard, factory: _MeetingListGuard.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingListGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: MeetingScheduleFacade }, { type: Router }], null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/meeting-schedule-routing.module.ts
var routes = [
  {
    path: "",
    component: MeetingScheduleComponent,
    canActivate: [AuthGuard, MeetingListGuard]
  },
  __spreadValues({
    path: APP_ROUTE.meetingSchedule.add,
    loadChildren: () => import("./chunk-YAPDXWQX.js").then((m) => m.ScheduleMeetingModule),
    canActivate: [AuthGuard]
  }, false ? { \u0275entryName: "src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting.module.ts" } : {}),
  __spreadValues({
    path: `${APP_ROUTE.meetingSchedule.edit}/:meetingId`,
    loadChildren: () => import("./chunk-YAPDXWQX.js").then((m) => m.ScheduleMeetingModule),
    canActivate: [AuthGuard]
  }, false ? { \u0275entryName: "src/app/feature/meeting-schedule/pages/schedule-meeting/schedule-meeting.module.ts" } : {})
];
var MeetingScheduleRoutingModule = class _MeetingScheduleRoutingModule {
  static {
    this.\u0275fac = function MeetingScheduleRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingScheduleRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/components/meeting-card/meeting-card.module.ts
var MeetingCardModule = class _MeetingCardModule {
  static {
    this.\u0275fac = function MeetingCardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingCardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingCardModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MatDividerModule, MatMenuModule, MatTooltipModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingCardModule, [{
    type: NgModule,
    args: [{
      declarations: [MeetingCardComponent],
      imports: [SharedModule, MatDividerModule, MatMenuModule, MatTooltipModule],
      exports: [MeetingCardComponent]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/meeting-schedule.module.ts
var MeetingScheduleModule = class _MeetingScheduleModule {
  static {
    this.\u0275fac = function MeetingScheduleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingScheduleModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, MeetingScheduleRoutingModule, MeetingCardModule, MatInputModule, MatSelectModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleModule, [{
    type: NgModule,
    args: [{
      declarations: [MeetingScheduleComponent],
      imports: [SharedModule, MeetingScheduleRoutingModule, MeetingCardModule, MatInputModule, MatSelectModule]
    }]
  }], null, null);
})();
export {
  MeetingScheduleModule
};
//# sourceMappingURL=chunk-DSUDNEWZ.js.map
