import {
  API,
  SnackService
} from "./chunk-DMGY2MF4.js";
import {
  HttpClient
} from "./chunk-7YCEKZKP.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  combineLatest,
  distinctUntilChanged,
  finalize,
  map,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/data-access/apis/meeting-schedule.api.ts
var MeetingScheduleApi = class _MeetingScheduleApi {
  constructor(http) {
    this.http = http;
  }
  getMeetingTypes() {
    return this.http.get(API.meetingSchedule.getMeetingTypes).pipe(map((res) => res.data));
  }
  getMeetingDays() {
    return this.http.get(API.meetingSchedule.getMeetingDays);
  }
  getTimeSlots(params) {
    return this.http.get(API.meetingSchedule.getTimeSlots, { params });
  }
  getTimeZone() {
    return this.http.get(API.meetingSchedule.getTimeZone);
  }
  getMeetingList(isActive) {
    return this.http.get(API.meetingSchedule.base, { params: isActive ? { isActive } : {} });
  }
  saveMeeting(body) {
    return this.http.post(API.meetingSchedule.base, body);
  }
  editMeeting(body, id) {
    return this.http.patch(API.meetingSchedule.meeting(id), body);
  }
  getMeeting(id) {
    return this.http.get(API.meetingSchedule.meeting(id));
  }
  getMeetingEvent(params) {
    return this.http.get(API.meetingSchedule.meetingEvent, { params });
  }
  updateMeetingStatus(id, status) {
    return this.http.patch(API.meetingSchedule.updateStatus(id, status), {});
  }
  deleteMeeting(id) {
    return this.http.delete(API.meetingSchedule.deleteMeeting(id));
  }
  getAdsList() {
    return this.http.get(API.meetingSchedule.getAdsList);
  }
  acceptMeeting(body) {
    return this.http.post(API.meetingSchedule.acceptMeeting, body);
  }
  static {
    this.\u0275fac = function MeetingScheduleApi_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleApi)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeetingScheduleApi, factory: _MeetingScheduleApi.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// apps/findqo-ireland/src/app/feature/meeting-schedule/meeting-schedule.facade.ts
var MeetingScheduleFacade = class _MeetingScheduleFacade {
  constructor(meetingApi, snackService) {
    this.meetingApi = meetingApi;
    this.snackService = snackService;
    this._meetingList = new BehaviorSubject([]);
    this._adsList = new BehaviorSubject(null);
  }
  get meetingList$() {
    return this._meetingList.asObservable();
  }
  getMeetingListData() {
    return this._meetingList.getValue();
  }
  getMeetingTypes$() {
    return this.meetingApi.getMeetingTypes().pipe(catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }), map((response) => response.filter((i) => i.id === "1")));
  }
  myAdList$() {
    return this._adsList.asObservable();
  }
  getMeetingDays$() {
    return this.meetingApi.getMeetingDays().pipe(map((res) => res.data), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  getTimeSlots$(params) {
    return this.meetingApi.getTimeSlots(params).pipe(map((res) => res.data), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  getTimeZone$() {
    return this.meetingApi.getTimeZone().pipe(map((res) => res.data), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  timesVm$() {
    return combineLatest({
      meetingDays: this.getMeetingDays$().pipe(distinctUntilChanged()),
      timeSlots: this.getTimeSlots$().pipe(distinctUntilChanged()),
      timeZones: this.getTimeZone$().pipe(distinctUntilChanged())
    }).pipe(map(({ meetingDays, timeSlots, timeZones }) => {
      return {
        meetingDays,
        timeSlots,
        timeZones
      };
    }));
  }
  saveMeeting(body) {
    return this.meetingApi.saveMeeting(body).pipe(catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  editMeeting(body, id) {
    return this.meetingApi.editMeeting(body, id).pipe(catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  updateMeetingStatus(id, status) {
    return this.meetingApi.updateMeetingStatus(id, status).pipe(finalize(() => this.loadMeetingList().subscribe()), map((res) => res.data), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  deleteMeeting(id) {
    return this.meetingApi.deleteMeeting(id).pipe(finalize(() => this.loadMeetingList().subscribe()), map((res) => res.data), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  getMeeting(id) {
    return this.meetingApi.getMeeting(id).pipe(map((res) => res.data), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  getMeetingEvent(params) {
    return this.meetingApi.getMeetingEvent(params).pipe(map((res) => res.data));
  }
  loadAdList() {
    return this.meetingApi.getAdsList().pipe(map((ads) => {
      const ALL_ADS = ads.data.reduce((acc, curr) => [...curr.ads, ...acc], []);
      return {
        isEmpty: !ALL_ADS.length,
        allAds: ALL_ADS,
        data: ads.data
      };
    }), tap((myAds) => {
      this._adsList.next(myAds);
    }), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  loadMeetingList(isActive) {
    return this.meetingApi.getMeetingList(isActive).pipe(map((res) => res.data), tap((data) => this._meetingList.next(data)), catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  acceptMeeting(body) {
    return this.meetingApi.acceptMeeting(body).pipe(catchError((response) => {
      const ERROR_MESSAGE = response?.error?.message;
      this.snackService.open({
        data: { message: ERROR_MESSAGE },
        panelClass: ["snackbar-error"]
      });
      throw new Error(ERROR_MESSAGE);
    }));
  }
  static {
    this.\u0275fac = function MeetingScheduleFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingScheduleFacade)(\u0275\u0275inject(MeetingScheduleApi), \u0275\u0275inject(SnackService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeetingScheduleFacade, factory: _MeetingScheduleFacade.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingScheduleFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: MeetingScheduleApi }, { type: SnackService }], null);
})();

export {
  MeetingScheduleFacade
};
//# sourceMappingURL=chunk-6K6PKNF2.js.map
