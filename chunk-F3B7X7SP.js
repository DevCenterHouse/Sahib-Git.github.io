import {
  AgentAdItemComponent,
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule
} from "./chunk-O7H3FI37.js";
import {
  AgentHubFacade
} from "./chunk-XVUCQVKR.js";
import {
  AddAgentsDialogComponent,
  BusinessAgentListModule,
  BusinessAgentsListComponent,
  BusinessInfoDialogComponent,
  CannotRemoveAgentDialogComponent,
  EditProfileInfoDialogComponent,
  LeaveAgencyDialogComponent,
  RemoveAgentDialogComponent
} from "./chunk-6Z3MPJNO.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-62PZKBP3.js";
import {
  EDIT_DIALOG_STATIC_DATA
} from "./chunk-LUIRD62T.js";
import {
  AgentStatus
} from "./chunk-YL2NNRDT.js";
import "./chunk-CM73RVW6.js";
import "./chunk-2KWNZOXB.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-5DPLTTSV.js";
import "./chunk-3GNTPSH6.js";
import "./chunk-NQD7YOJF.js";
import {
  DestroyService
} from "./chunk-3VMN4KZT.js";
import "./chunk-34NPCBBY.js";
import "./chunk-VZJAPMN6.js";
import {
  APP_ROUTE,
  ActivatedRoute,
  AuthService,
  BooleanStatus,
  ButtonModule,
  MatBadgeModule,
  MatButton,
  MatDialog,
  MatDivider,
  MatDividerModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MyProfileFacade,
  Router,
  RouterModule,
  SharedModule,
  TranslationsPipe,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  MatIcon
} from "./chunk-7YCEKZKP.js";
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  Component,
  ElementRef,
  NgModule,
  Subject,
  ViewChild,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/feature/agent-hub/pages/agents/agents.component.ts
var _c0 = (a0) => ({ usersMetaData: a0 });
function AgentsComponent_ng_container_0_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 19);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_mat_icon_12_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onClearSearch());
    });
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 20);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addNewAgents());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " New Agent ");
    \u0275\u0275elementEnd()();
  }
}
function AgentsComponent_ng_container_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "findqo-business-agents-list");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (listing_r6 == null ? null : listing_r6.name) || "N/A", " ");
  }
}
function AgentsComponent_ng_container_0_div_20_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Assigned Ads");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((listing_r7 == null ? null : listing_r7.assignedAdCount) || "0");
  }
}
function AgentsComponent_ng_container_0_div_20_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((listing_r8 == null ? null : listing_r8.email) || "N/A");
  }
}
function AgentsComponent_ng_container_0_div_20_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Phone number");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (listing_r9 == null ? null : listing_r9.phone) ? ((listing_r9 == null ? null : listing_r9.phoneCode) || "") + " " + (listing_r9 == null ? null : listing_r9.phone) : "N/A", " ");
  }
}
function AgentsComponent_ng_container_0_div_20_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Admin ");
  }
}
function AgentsComponent_ng_container_0_div_20_td_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Pending ");
  }
}
function AgentsComponent_ng_container_0_div_20_td_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Accepted ");
  }
}
function AgentsComponent_ng_container_0_div_20_td_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Rejected ");
  }
}
function AgentsComponent_ng_container_0_div_20_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43)(1, "span", 46);
    \u0275\u0275template(2, AgentsComponent_ng_container_0_div_20_td_17_Conditional_2_Template, 1, 0)(3, AgentsComponent_ng_container_0_div_20_td_17_Conditional_3_Template, 1, 0)(4, AgentsComponent_ng_container_0_div_20_td_17_Conditional_4_Template, 1, 0)(5, AgentsComponent_ng_container_0_div_20_td_17_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const listing_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatusClass(listing_r10 == null ? null : listing_r10.status, listing_r10 == null ? null : listing_r10.isAdmin));
    \u0275\u0275advance();
    \u0275\u0275conditional((listing_r10 == null ? null : listing_r10.status) === "2" && (listing_r10 == null ? null : listing_r10.isAdmin) === "1" ? 2 : (listing_r10 == null ? null : listing_r10.status) === "1" ? 3 : (listing_r10 == null ? null : listing_r10.status) === "2" ? 4 : 5);
  }
}
function AgentsComponent_ng_container_0_div_20_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Date added");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (listing_r11 == null ? null : listing_r11.createdAt) ? \u0275\u0275pipeBind2(2, 1, (listing_r11 == null ? null : listing_r11.createdAt) * 1e3, "dd-MMM-yyyy") : "N/A", " ");
  }
}
function AgentsComponent_ng_container_0_div_20_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function AgentsComponent_ng_container_0_div_20_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 44)(1, "div", 47);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_20_td_23_Template_div_click_1_listener() {
      const listing_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectedItem = listing_r13);
    });
    \u0275\u0275elementStart(2, "mat-icon", 48);
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const actionMenu_r14 = \u0275\u0275reference(28);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionMenu_r14);
  }
}
function AgentsComponent_ng_container_0_div_20_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 49);
  }
}
function AgentsComponent_ng_container_0_div_20_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function AgentsComponent_ng_container_0_div_20_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
  }
}
function AgentsComponent_ng_container_0_div_20_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_20_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editPhoneNumber(ctx_r2.selectedItem));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n4058"));
  }
}
function AgentsComponent_ng_container_0_div_20_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_20_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewAssignedAds(ctx_r2.selectedItem));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n4059"));
  }
}
function AgentsComponent_ng_container_0_div_20_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_20_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeAgent(ctx_r2.selectedItem));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "n4057"));
  }
}
function AgentsComponent_ng_container_0_div_20_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_20_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.reInviteAgent(ctx_r2.selectedItem.email));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translations");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "n3802"), " ");
  }
}
function AgentsComponent_ng_container_0_div_20_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_div_20_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeAgent(ctx_r2.selectedItem));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, (ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.status) === ctx_r2.agentStatus.PENDING ? "n4061" : "n3511"));
  }
}
function AgentsComponent_ng_container_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerStart(3, 24);
    \u0275\u0275template(4, AgentsComponent_ng_container_0_div_20_th_4_Template, 2, 0, "th", 25)(5, AgentsComponent_ng_container_0_div_20_td_5_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 27);
    \u0275\u0275template(7, AgentsComponent_ng_container_0_div_20_th_7_Template, 2, 0, "th", 25)(8, AgentsComponent_ng_container_0_div_20_td_8_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 29);
    \u0275\u0275template(10, AgentsComponent_ng_container_0_div_20_th_10_Template, 2, 0, "th", 25)(11, AgentsComponent_ng_container_0_div_20_td_11_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 31);
    \u0275\u0275template(13, AgentsComponent_ng_container_0_div_20_th_13_Template, 2, 0, "th", 25)(14, AgentsComponent_ng_container_0_div_20_td_14_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 32);
    \u0275\u0275template(16, AgentsComponent_ng_container_0_div_20_th_16_Template, 2, 0, "th", 25)(17, AgentsComponent_ng_container_0_div_20_td_17_Template, 6, 2, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 33);
    \u0275\u0275template(19, AgentsComponent_ng_container_0_div_20_th_19_Template, 2, 0, "th", 25)(20, AgentsComponent_ng_container_0_div_20_td_20_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 34);
    \u0275\u0275template(22, AgentsComponent_ng_container_0_div_20_th_22_Template, 2, 0, "th", 25)(23, AgentsComponent_ng_container_0_div_20_td_23_Template, 4, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(24, AgentsComponent_ng_container_0_div_20_tr_24_Template, 1, 0, "tr", 35)(25, AgentsComponent_ng_container_0_div_20_tr_25_Template, 1, 0, "tr", 36)(26, AgentsComponent_ng_container_0_div_20_tr_26_Template, 3, 1, "tr", 37);
    \u0275\u0275elementStart(27, "mat-menu", 38, 1);
    \u0275\u0275template(29, AgentsComponent_ng_container_0_div_20_button_29_Template, 4, 3, "button", 39)(30, AgentsComponent_ng_container_0_div_20_button_30_Template, 4, 3, "button", 39)(31, AgentsComponent_ng_container_0_div_20_button_31_Template, 4, 3, "button", 40)(32, AgentsComponent_ng_container_0_div_20_button_32_Template, 3, 3, "button", 41)(33, AgentsComponent_ng_container_0_div_20_button_33_Template, 4, 3, "button", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", \u0275\u0275pipeBind1(2, 11, ctx_r2.agentsList$));
    \u0275\u0275advance(23);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("overlapTrigger", false)("xPosition", "before");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.status) === ctx_r2.agentStatus.ACCEPTED && ctx_r2.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.status) === ctx_r2.agentStatus.ACCEPTED);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !+(ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.isAdmin) && (ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.userId) === ((tmp_13_0 = ctx_r2.auth.user()) == null ? null : tmp_13_0.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.status) === ctx_r2.agentStatus.REJECTED && ctx_r2.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !+(ctx_r2.selectedItem == null ? null : ctx_r2.selectedItem.isAdmin) && ctx_r2.isAdmin);
  }
}
function AgentsComponent_ng_container_0_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-paginator", 61, 2);
    \u0275\u0275listener("page", function AgentsComponent_ng_container_0_div_21_div_6_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const vm_r21 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event, vm_r21.usersMetaData));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.pageMetadata == null ? null : ctx_r2.pageMetadata.total)("pageSize", ctx_r2.pageMetadata == null ? null : ctx_r2.pageMetadata.perPage)("pageIndex", +(ctx_r2.pageMetadata == null ? null : ctx_r2.pageMetadata.currentPage) - 1)("pageSizeOptions", ctx_r2.pageSizeOptions);
  }
}
function AgentsComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275element(2, "mat-divider");
    \u0275\u0275elementStart(3, "div", 57)(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AgentsComponent_ng_container_0_div_21_div_6_Template, 3, 4, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.pageLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pageMetadata);
  }
}
function AgentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h3", 7);
    \u0275\u0275text(5, "Manage Agents");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "mat-form-field", 9)(8, "mat-icon", 10);
    \u0275\u0275text(9, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 11, 0);
    \u0275\u0275listener("keyup", function AgentsComponent_ng_container_0_Template_input_keyup_10_listener() {
      \u0275\u0275restoreView(_r1);
      const searchInput_r2 = \u0275\u0275reference(11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch(searchInput_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AgentsComponent_ng_container_0_mat_icon_12_Template, 2, 0, "mat-icon", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "button", 14);
    \u0275\u0275listener("click", function AgentsComponent_ng_container_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isCardView = !ctx_r2.isCardView);
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, AgentsComponent_ng_container_0_div_18_Template, 5, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AgentsComponent_ng_container_0_div_19_Template, 2, 0, "div", 16)(20, AgentsComponent_ng_container_0_div_20_Template, 34, 13, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AgentsComponent_ng_container_0_div_21_Template, 7, 2, "div", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.searchValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.searchValue);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.isCardView ? "menu" : "grid_view");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isCardView ? "List view" : "Card view", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isCardView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isCardView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isCardView);
  }
}
var MyCustomPaginatorIntl = class extends MatPaginatorIntl {
  constructor() {
    super(...arguments);
    this.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return `Page 1 of ${length}`;
      }
      length = Math.max(length, 0);
      return `Page ${page + 1} of ${Math.ceil(length / pageSize)}`;
    };
  }
};
var AgentsComponent = class _AgentsComponent {
  constructor(myProfileFacade, viewport, dialog, agentHubFacade, destory, route, router, auth) {
    this.myProfileFacade = myProfileFacade;
    this.viewport = viewport;
    this.dialog = dialog;
    this.agentHubFacade = agentHubFacade;
    this.destory = destory;
    this.route = route;
    this.router = router;
    this.auth = auth;
    this.pageSizeOptions = [25, 50, 100, 250, 500];
    this.agentStatus = AgentStatus;
    this.isAgent = this.auth.user()?.roles.some((role) => role === "isAgentUser");
    this.isAdmin = +this.auth.user()?.hasBusinessProfile && !this.isAgent;
    this.dataSource = new MatTableDataSource();
    this.selectedRowId = "";
    this.pageLabel = "";
    this.isLoading = false;
    this.searchValue = "";
    this.searchSubject = new Subject();
    this.isCardView = true;
    this.displayedColumns = ["name", "assignedAds", "email", "phone", "status", "dateAdded", "action"];
    this.isRemoveAgentClicked = false;
    this.usersMetaData$ = this.agentHubFacade.pageMetaData$;
    this.agentsList$ = this.myProfileFacade.getAgents$();
  }
  reInviteAgent(email) {
    this.myProfileFacade.addAgents([email]);
  }
  viewAssignedAds(agent) {
    this.router.navigate([`/agent/${agent.id}/${agent.profileId}`]);
  }
  editPhoneNumber(agent) {
    if (agent.isAdmin && this.auth.user()?.id === agent?.userId) {
      this.router.navigate([APP_ROUTE.myProfile]);
      return;
    }
    const DATA = __spreadProps(__spreadValues(__spreadValues({}, EDIT_DIALOG_STATIC_DATA.phone), agent), {
      target: "phone",
      hint: "Updating the phone number will also update the contact number throughout all ads assigned to this agent."
    });
    this.dialog.open(EditProfileInfoDialogComponent, {
      disableClose: false,
      maxWidth: "375px",
      width: "95%",
      height: "auto",
      maxHeight: "100%",
      data: DATA
    }).afterClosed().subscribe((value) => {
      if (value && value !== DATA?.["phone"]) {
        this.myProfileFacade.patchAgentPhone(agent.id, {
          phone: value
        }).subscribe(() => this.myProfileFacade.loadAgents());
      }
    });
  }
  removeAgentRequest(agent, configData) {
    this.dialog.open(RemoveAgentDialogComponent, __spreadValues({
      data: agent
    }, configData)).afterClosed().subscribe(() => this.isRemoveAgentClicked = false);
  }
  leaveAgency(agent, configData) {
    this.dialog.open(LeaveAgencyDialogComponent, __spreadValues({
      data: agent
    }, configData)).afterClosed().subscribe(() => this.isRemoveAgentClicked = false);
  }
  removeAgent(agent) {
    if (!this.isRemoveAgentClicked) {
      this.isRemoveAgentClicked = true;
      const IS_AGENT_LEAVING = agent.userId === this.auth.user()?.id;
      const CONFIG_DATA = {
        width: "95%",
        height: "auto",
        maxHeight: "unset",
        maxWidth: IS_AGENT_LEAVING ? "600px" : "375px",
        panelClass: "remove-agent",
        disableClose: true,
        data: __spreadProps(__spreadValues({}, agent), { businessProfile: this.auth.user()?.businessProfile })
      };
      if (agent.status !== this.agentStatus.ACCEPTED) {
        if (IS_AGENT_LEAVING) {
          this.leaveAgency(agent, CONFIG_DATA);
        } else {
          this.removeAgentRequest(agent, CONFIG_DATA);
        }
        return;
      }
      this.myProfileFacade.canRemoveAgent(agent?.id).then((response) => {
        this.isRemoveAgentClicked = false;
        if (response?.hasAssignedAd === BooleanStatus.FALSE) {
          if (IS_AGENT_LEAVING) {
            this.leaveAgency(agent, CONFIG_DATA);
          } else {
            this.removeAgentRequest(agent, CONFIG_DATA);
          }
        } else {
          if (IS_AGENT_LEAVING) {
            this.dialog.open(CannotRemoveAgentDialogComponent, __spreadProps(__spreadValues({}, CONFIG_DATA), {
              data: __spreadProps(__spreadValues({}, CONFIG_DATA.data), { isAgentLeaving: IS_AGENT_LEAVING })
            }));
          } else {
            this.dialog.open(CannotRemoveAgentDialogComponent, CONFIG_DATA);
          }
        }
      }).catch(() => {
        this.isRemoveAgentClicked = false;
      });
    }
  }
  onClearSearch() {
    this.searchValue = "";
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: null },
      queryParamsHandling: "merge"
    });
  }
  addNewAgents() {
    const USER = this.myProfileFacade.getUser();
    const CONFIG_DATA = {
      width: "100%",
      maxWidth: "500px",
      height: "auto",
      disableClose: true,
      maxHeight: "unset"
    };
    if (+USER.hasBusinessProfile) {
      this.dialog.open(AddAgentsDialogComponent, __spreadProps(__spreadValues({}, CONFIG_DATA), { panelClass: "agent-dialog" }));
    } else {
      this.dialog.open(BusinessInfoDialogComponent, __spreadValues({ panelClass: "business-info" }, CONFIG_DATA));
    }
  }
  onSearch(keyword) {
    keyword = keyword.trim();
    this.searchSubject.next(keyword);
    this.searchValue = keyword;
  }
  getStatusClass(status, isAdmin) {
    if (isAdmin === "1")
      status = "admin";
    switch (status) {
      case "1":
        return "badge-pending";
      case "2":
        return "badge-accepted";
      case "3":
        return "badge-rejected";
      case "admin":
        return "badge-admin";
      default:
        return "";
    }
  }
  onPageChange(paginator, metaData) {
    const currentQueryParams = this.route.snapshot.queryParams;
    this.router.navigate([APP_ROUTE.agentHub.dashboard, APP_ROUTE.agentHub.agents], {
      queryParams: __spreadProps(__spreadValues({}, currentQueryParams), {
        page: paginator.pageIndex + 1,
        perPage: paginator.pageSize
      }),
      queryParamsHandling: "merge"
    });
  }
  scrollToIndex(id) {
    setTimeout(() => {
      this.selectedRowId = id;
      const ELEMENT = this.rows.find((row) => row.nativeElement.id === id);
      if (ELEMENT) {
        ELEMENT.nativeElement.scrollIntoView({
          block: "center",
          behavior: "auto"
        });
      }
    });
  }
  updatePaginator(metaData) {
    const startIndex = (Number.parseInt(metaData?.currentPage) - 1) * Number.parseInt(metaData?.perPage) + 1;
    const endIndex = Math.min(startIndex + Number.parseInt(metaData?.perPage) - 1, Number.parseInt(metaData?.total));
    this.pageLabel = `Showing ${startIndex} to ${endIndex} of ${metaData?.total} item(s)`;
  }
  ngOnInit() {
    this.agentHubFacade.pageMetaData$.subscribe((metaData) => {
      this.pageMetadata = metaData;
      this.updatePaginator(metaData);
    });
    this.searchSubject.pipe(debounceTime(1e3), distinctUntilChanged(), tap((search) => {
      if (search?.length === 0)
        search = null;
      const currentQueryParams = this.route.snapshot.queryParams;
      this.router.navigate([APP_ROUTE.agentHub.dashboard, APP_ROUTE.agentHub.agents], {
        queryParams: __spreadProps(__spreadValues({}, currentQueryParams), {
          page: 1,
          perPage: this.pageMetadata.perPage,
          search
        }),
        queryParamsHandling: "merge"
      });
    }), takeUntil(this.destory)).subscribe();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.route.queryParams.subscribe((response) => {
      this.myProfileFacade.loadUser(response);
      if (response?.search) {
        this.searchValue = response?.search ?? "";
      }
    });
  }
  static {
    this.\u0275fac = function AgentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentsComponent)(\u0275\u0275directiveInject(MyProfileFacade), \u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(AgentHubFacade), \u0275\u0275directiveInject(DestroyService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgentsComponent, selectors: [["findqo-agents"]], viewQuery: function AgentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 7);
        \u0275\u0275viewQuery(MatRow, 5, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rows = _t);
      }
    }, standalone: false, features: [\u0275\u0275ProvidersFeature([DestroyService, { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }])], decls: 2, vars: 5, consts: [["searchInput", ""], ["actionMenu", "matMenu"], ["paginator", ""], [4, "ngIf"], [1, "container", "mt-4"], [1, "row", "align-items-center", "justify-content-end", "gap-3", "mb-4"], [1, "col"], [1, "heading-3-regular", "flex-nowrap"], [1, "col-12", "col-md-auto"], ["appearance", "outline", 1, "no-subscript", "w-350"], [1, "icon-18px", "fg-general-4", "me-2"], ["matInput", "", "placeholder", "Search agent name", 1, "search", "text-body-regular", 3, "keyup", "value"], ["class", "icon-18px fg-general-4 me-2 cursor-pointer", 3, "click", 4, "ngIf"], [1, "col-auto"], ["mat-button", "", 1, "rounded-pill", "bg-neutral-2", "fg-general-4", "h-40px", 3, "click"], ["class", "col-auto", 4, "ngIf"], ["class", "mb-75px", 4, "ngIf"], ["class", "table-container position-relative border rounded-3", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "icon-18px", "fg-general-4", "me-2", "cursor-pointer", 3, "click"], ["mat-button", "", 1, "rounded-pill", "bg-prim-2", "fg-basic-1", "h-40px", 3, "click"], [1, "mb-75px"], [1, "table-container", "position-relative", "border", "rounded-3"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "assignedAds"], ["mat-cell", "", "class", "text-body-regular fg-general-5 text-center", 4, "matCellDef"], ["matColumnDef", "email"], ["mat-cell", "", "class", "text-body-regular fg-general-5", 4, "matCellDef"], ["matColumnDef", "phone"], ["matColumnDef", "status"], ["matColumnDef", "dateAdded"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], [3, "overlapTrigger", "xPosition"], ["mat-menu-item", "", "class", "fg-general-5 text-body-regular", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "class", "fg-error-3 text-body-regular", 3, "click", 4, "ngIf"], ["class", "fg-general-5 text-body-regular", "mat-menu-item", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "text-body-regular", "fg-general-5", "text-center"], ["mat-cell", "", 1, "text-body-regular", "fg-general-5"], [1, "text-caption-regular", "status-badge", "px-2", "py-1", "no-wrap", "text-center", 3, "ngClass"], [1, "d-inline-flex", "align-items-center", "justify-content-center", "border", "rounded", "action-btn", "cursor-pointer", 3, "click", "matMenuTriggerFor"], [1, "icon-18px", "fg-prim-2"], ["mat-header-row", ""], ["mat-row", ""], [1, "p-9"], ["mat-menu-item", "", 1, "fg-general-5", "text-body-regular", 3, "click"], ["mat-menu-item", "", 1, "fg-error-3", "text-body-regular", 3, "click"], ["mat-menu-item", "", "color", "primary", 1, "fg-general-5", "text-body-regular", 3, "click"], [1, "container"], [1, "row", "mx-0", "py-9", "align-items-center", "paginator", "justify-content-between", "align-content-center", "w-100", "bottom-0", "bg-basic-1", "d-none", "d-md-flex"], [1, "col-auto", "ps-13"], [1, "fg-general-3", "text-body-regular"], ["class", "col-auto pe-13", 4, "ngIf"], [1, "col-auto", "pe-13"], ["showFirstLastButtons", "", 1, "text-body-regular", "fg-general-3", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"]], template: function AgentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AgentsComponent_ng_container_0_Template, 22, 8, "ng-container", 3);
        \u0275\u0275pipe(1, "async");
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", \u0275\u0275pureFunction1(3, _c0, \u0275\u0275pipeBind1(1, 1, ctx.usersMetaData$)));
      }
    }, dependencies: [NgClass, NgIf, MatButton, MatIcon, MatFormField, MatInput, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, BusinessAgentsListComponent, MatMenu, MatMenuItem, MatMenuTrigger, MatDivider, MatPaginator, AsyncPipe, DatePipe, TranslationsPipe], styles: ['\n\n.badge-admin[_ngcontent-%COMP%] {\n  background-color: var(--prim-2);\n  color: var(--basic-1);\n}\n.badge-accepted[_ngcontent-%COMP%] {\n  background-color: var(--success-1);\n  color: var(--success-3);\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background-color: var(--general-1);\n  color: var(--general-3);\n}\n.badge-rejected[_ngcontent-%COMP%] {\n  background-color: var(--error-3);\n  color: var(--basic-1);\n}\n.icon-18px[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n}\n.icon-20px[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.no-wrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.table-container[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n  max-height: calc(100dvh - 320px);\n  overflow: auto;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.mat-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.w-350[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  background: var(--general-1) !important;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  height: 60px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 22px;\n  border: none !important;\n  border-radius: 100px !important;\n}\n.h-40px[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.mb-75px[_ngcontent-%COMP%] {\n  margin-bottom: 75px;\n}\n@media (min-width: 768px) {\n  .mb-65px[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n  .w-350[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .table-container[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 222px);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agents.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentsComponent, [{
    type: Component,
    args: [{ selector: "findqo-agents", providers: [DestroyService, { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }], standalone: false, template: `<ng-container *ngIf="{ usersMetaData: usersMetaData$ | async } as vm">
	<div class="container mt-4">
		<div class="row align-items-center justify-content-end gap-3 mb-4">
			<div class="col">
				<h3 class="heading-3-regular flex-nowrap">Manage Agents</h3>
			</div>

			<div class="col-12 col-md-auto">
				<mat-form-field appearance="outline" class="no-subscript w-350">
					<mat-icon class="icon-18px fg-general-4 me-2">search</mat-icon>
					<input
						#searchInput
						matInput
						class="search text-body-regular"
						placeholder="Search agent name"
						[value]="searchValue"
						(keyup)="onSearch(searchInput.value)"
					/>
					<mat-icon *ngIf="searchValue" class="icon-18px fg-general-4 me-2 cursor-pointer" (click)="onClearSearch()">cancel</mat-icon>
				</mat-form-field>
			</div>

			<div class="col-auto">
				<button mat-button class="rounded-pill bg-neutral-2 fg-general-4 h-40px" (click)="isCardView = !isCardView">
					<mat-icon>{{ isCardView ? 'menu' : 'grid_view' }}</mat-icon>
					{{ isCardView ? 'List view' : 'Card view' }}
				</button>
			</div>

			<div class="col-auto" *ngIf="isAdmin">
				<button mat-button class="rounded-pill bg-prim-2 fg-basic-1 h-40px" (click)="addNewAgents()">
					<mat-icon>add_circle</mat-icon>
					New Agent
				</button>
			</div>
		</div>

		<div *ngIf="isCardView" class="mb-75px">
			<findqo-business-agents-list></findqo-business-agents-list>
		</div>

		<div *ngIf="!isCardView" class="table-container position-relative border rounded-3">
			<table mat-table [dataSource]="agentsList$ | async" class="w-100">
				<ng-container matColumnDef="name">
					<th mat-header-cell *matHeaderCellDef>Name</th>
					<td mat-cell *matCellDef="let listing">
						{{ listing?.name || 'N/A' }}
					</td>
				</ng-container>

				<ng-container matColumnDef="assignedAds">
					<th mat-header-cell *matHeaderCellDef>Assigned Ads</th>
					<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5 text-center">{{ listing?.assignedAdCount || '0' }}</td>
				</ng-container>

				<ng-container matColumnDef="email">
					<th mat-header-cell *matHeaderCellDef>Email</th>
					<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">{{ listing?.email || 'N/A' }}</td>
				</ng-container>

				<ng-container matColumnDef="phone">
					<th mat-header-cell *matHeaderCellDef>Phone number</th>
					<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">
						{{ listing?.phone ? (listing?.phoneCode || '') + ' ' + listing?.phone : 'N/A' }}
					</td>
				</ng-container>

				<ng-container matColumnDef="status">
					<th mat-header-cell *matHeaderCellDef>Status</th>
					<td mat-cell *matCellDef="let listing">
						<span class="text-caption-regular status-badge px-2 py-1 no-wrap text-center" [ngClass]="getStatusClass(listing?.status, listing?.isAdmin)">
							@if (listing?.status === '2' && listing?.isAdmin === '1') {
								Admin
							} @else if (listing?.status === '1') {
								Pending
							} @else if (listing?.status === '2') {
								Accepted
							} @else {
								Rejected
							}
						</span>
					</td>
				</ng-container>

				<ng-container matColumnDef="dateAdded">
					<th mat-header-cell *matHeaderCellDef>Date added</th>
					<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5">
						{{ listing?.createdAt ? (listing?.createdAt * 1000 | date: 'dd-MMM-yyyy') : 'N/A' }}
					</td>
				</ng-container>

				<ng-container matColumnDef="action">
					<th mat-header-cell *matHeaderCellDef>Actions</th>
					<td mat-cell *matCellDef="let listing" class="text-body-regular fg-general-5 text-center">
						<div
							[matMenuTriggerFor]="actionMenu"
							class="d-inline-flex align-items-center justify-content-center border rounded action-btn cursor-pointer"
							(click)="selectedItem = listing"
						>
							<mat-icon class="icon-18px fg-prim-2">more_horiz</mat-icon>
						</div>
					</td>
				</ng-container>

				<tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>

				<tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

				<tr *matNoDataRow>
					<td class="p-9" [attr.colspan]="displayedColumns.length">No records found.</td>
				</tr>

				<mat-menu #actionMenu="matMenu" [overlapTrigger]="false" [xPosition]="'before'">
					<button
						mat-menu-item
						(click)="editPhoneNumber(selectedItem)"
						class="fg-general-5 text-body-regular"
						*ngIf="selectedItem?.status === agentStatus.ACCEPTED && isAdmin"
					>
						<span>{{ 'n4058' | translations }}</span>
					</button>

					<button
						mat-menu-item
						(click)="viewAssignedAds(selectedItem)"
						class="fg-general-5 text-body-regular"
						*ngIf="selectedItem?.status === agentStatus.ACCEPTED"
					>
						<span>{{ 'n4059' | translations }}</span>
					</button>

					<button
						mat-menu-item
						(click)="removeAgent(selectedItem)"
						class="fg-error-3 text-body-regular"
						*ngIf="!+selectedItem?.isAdmin && selectedItem?.userId === auth.user()?.id"
					>
						<span>{{ 'n4057' | translations }}</span>
					</button>

					<button
						class="fg-general-5 text-body-regular"
						mat-menu-item
						color="primary"
						*ngIf="selectedItem?.status === agentStatus.REJECTED && isAdmin"
						(click)="reInviteAgent(selectedItem.email)"
					>
						{{ 'n3802' | translations }}
					</button>

					<button mat-menu-item (click)="removeAgent(selectedItem)" class="fg-error-3 text-body-regular" *ngIf="!+selectedItem?.isAdmin && isAdmin">
						<span>{{ (selectedItem?.status === agentStatus.PENDING ? 'n4061' : 'n3511') | translations }}</span>
					</button>
				</mat-menu>
			</table>
		</div>
	</div>

	<div *ngIf="!isCardView" class="container">
		<div class="row mx-0 py-9 align-items-center paginator justify-content-between align-content-center w-100 bottom-0 bg-basic-1 d-none d-md-flex">
			<mat-divider></mat-divider>
			<div class="col-auto ps-13">
				<span class="fg-general-3 text-body-regular">{{ pageLabel }}</span>
			</div>

			<div *ngIf="pageMetadata" class="col-auto pe-13">
				<mat-paginator
					#paginator
					showFirstLastButtons
					class="text-body-regular fg-general-3"
					[length]="pageMetadata?.total"
					[pageSize]="pageMetadata?.perPage"
					[pageIndex]="+pageMetadata?.currentPage - 1"
					[pageSizeOptions]="pageSizeOptions"
					(page)="onPageChange($event, vm.usersMetaData)"
				></mat-paginator>
			</div>
		</div>
	</div>
</ng-container>
`, styles: ['/* apps/findqo-ireland/src/app/feature/agent-hub/pages/agents/agents.component.scss */\n.badge-admin {\n  background-color: var(--prim-2);\n  color: var(--basic-1);\n}\n.badge-accepted {\n  background-color: var(--success-1);\n  color: var(--success-3);\n}\n.badge-pending {\n  background-color: var(--general-1);\n  color: var(--general-3);\n}\n.badge-rejected {\n  background-color: var(--error-3);\n  color: var(--basic-1);\n}\n.icon-18px {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n}\n.icon-20px {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.no-wrap {\n  white-space: nowrap;\n}\n.table-container {\n  font-family: "Poppins", sans-serif !important;\n  max-height: calc(100dvh - 320px);\n  overflow: auto;\n  scrollbar-color: var(--general-2);\n  scrollbar-width: thin;\n}\n.table-container::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.table-container::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: var(--general-2);\n}\n.mat-cell {\n  white-space: nowrap;\n}\n.w-350 {\n  width: 100%;\n}\n.mat-mdc-header-cell {\n  background: var(--general-1) !important;\n}\nth,\ntd {\n  font-family: "Poppins", sans-serif !important;\n  overflow: hidden;\n  width: auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  height: 60px;\n}\n.action-btn {\n  width: 30px;\n  height: 30px;\n}\n.status-badge {\n  width: 75px;\n  height: 22px;\n  border: none !important;\n  border-radius: 100px !important;\n}\n.h-40px {\n  height: 40px;\n}\n.mb-75px {\n  margin-bottom: 75px;\n}\n@media (min-width: 768px) {\n  .mb-65px {\n    margin-bottom: 0px;\n  }\n  .w-350 {\n    width: 350px;\n  }\n  .table-container {\n    max-height: calc(100dvh - 222px);\n  }\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/agents.component.css.map */\n'] }]
  }], () => [{ type: MyProfileFacade }, { type: ViewportService }, { type: MatDialog }, { type: AgentHubFacade }, { type: DestroyService }, { type: ActivatedRoute }, { type: Router }, { type: AuthService }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator, { static: true }]
  }], rows: [{
    type: ViewChildren,
    args: [MatRow, { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgentsComponent, { className: "AgentsComponent", filePath: "apps/findqo-ireland/src/app/feature/agent-hub/pages/agents/agents.component.ts", lineNumber: 42 });
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/agents/agents-routing.module.ts
var routes = [
  {
    path: "",
    component: AgentsComponent
  }
];
var AgentsRoutingModule = class _AgentsRoutingModule {
  static {
    this.\u0275fac = function AgentsRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentsRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentsRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// apps/findqo-ireland/src/app/feature/agent-hub/pages/agents/agents.module.ts
var AgentsModule = class _AgentsModule {
  static {
    this.\u0275fac = function AgentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgentsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AgentsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      SharedModule,
      AgentsRoutingModule,
      ButtonModule,
      MatBadgeModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      AgentAdItemComponent,
      BusinessAgentListModule,
      MatMenuModule,
      MatDividerModule,
      MatPaginatorModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgentsModule, [{
    type: NgModule,
    args: [{
      declarations: [AgentsComponent],
      imports: [
        SharedModule,
        AgentsRoutingModule,
        ButtonModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        AgentAdItemComponent,
        BusinessAgentListModule,
        MatMenuModule,
        MatDividerModule,
        MatPaginatorModule
      ]
    }]
  }], null, null);
})();
export {
  AgentsModule
};
//# sourceMappingURL=chunk-F3B7X7SP.js.map
