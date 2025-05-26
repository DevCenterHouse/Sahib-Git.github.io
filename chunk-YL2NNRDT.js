// apps/findqo-ireland/src/app/core/enums/agent.enum.ts
var AgentStatus;
(function(AgentStatus2) {
  AgentStatus2["PENDING"] = "1";
  AgentStatus2["ACCEPTED"] = "2";
  AgentStatus2["REJECTED"] = "3";
})(AgentStatus || (AgentStatus = {}));
var AgentProfileAction;
(function(AgentProfileAction2) {
  AgentProfileAction2[AgentProfileAction2["EDIT_PHONE"] = 0] = "EDIT_PHONE";
  AgentProfileAction2[AgentProfileAction2["VIEW_ASSIGNED_ADS"] = 1] = "VIEW_ASSIGNED_ADS";
  AgentProfileAction2[AgentProfileAction2["REMOVE"] = 2] = "REMOVE";
  AgentProfileAction2[AgentProfileAction2["REINVITE"] = 3] = "REINVITE";
})(AgentProfileAction || (AgentProfileAction = {}));
var AgentHubActions;
(function(AgentHubActions2) {
  AgentHubActions2["RENEW_AD"] = "renew_ad";
  AgentHubActions2["EDIT"] = "edit";
  AgentHubActions2["VIEW_AD_ON_WEB"] = "view-ad-on-web";
  AgentHubActions2["SHARE_AD"] = "share-ad";
  AgentHubActions2["SEE_ACTIVITY"] = "see-activity";
  AgentHubActions2["DELETE_AD"] = "delete-ad";
  AgentHubActions2["VIEW_TENANCY_RESUME"] = "view-tenancy-resume";
  AgentHubActions2["MARK_AS_PENDING"] = "mark-as-pending";
  AgentHubActions2["MARK_AS_COMPLETED"] = "mark-as-completed";
  AgentHubActions2["UNPUBLISH_AD"] = "unpublished";
  AgentHubActions2["PUBLISH_AD"] = "publish";
  AgentHubActions2["MARK_AS_OCCUPIED"] = "mark-as-occupied";
  AgentHubActions2["MARK_AS_AVAILABLE"] = "mark-as-available";
  AgentHubActions2["MARK_AS_SALE_AGREED"] = "mark-as-sale-agreed";
  AgentHubActions2["MARK_AS_SOLD"] = "sold";
})(AgentHubActions || (AgentHubActions = {}));
var EnquiryStatus;
(function(EnquiryStatus2) {
  EnquiryStatus2["COMPLETED"] = "completed";
  EnquiryStatus2["PENDING"] = "pending";
})(EnquiryStatus || (EnquiryStatus = {}));

export {
  AgentStatus,
  AgentProfileAction,
  AgentHubActions,
  EnquiryStatus
};
//# sourceMappingURL=chunk-YL2NNRDT.js.map
