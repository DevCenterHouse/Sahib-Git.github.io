import {
  Breakpoint
} from "./chunk-DMGY2MF4.js";
import {
  BreakpointObserver
} from "./chunk-7YCEKZKP.js";
import {
  BehaviorSubject,
  Injectable,
  ReplaySubject,
  distinctUntilChanged,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/services/breakpoint-observer.service.ts
var BreakpointObserverService = class _BreakpointObserverService {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this._breakpoints$ = new ReplaySubject(1);
    this._isDesktop$ = new BehaviorSubject(false);
    this._isMobile$ = new BehaviorSubject(false);
  }
  get breakpoints$() {
    return this._breakpoints$.asObservable();
  }
  get isDesktop$() {
    return this._isDesktop$.asObservable();
  }
  get isMobile$() {
    return this._isMobile$.asObservable();
  }
  setIsDesktop(isDesktop) {
    this._isDesktop$.next(isDesktop);
  }
  setIsMobile(isMobile) {
    this._isMobile$.next(isMobile);
  }
  isMobile() {
    return this._isMobile$.getValue();
  }
  init() {
    this.breakpointObserver.observe(Object.values(Breakpoint)).pipe(distinctUntilChanged()).subscribe((state) => {
      this._breakpoints$.next(state.breakpoints);
      this.setIsDesktop(state.breakpoints[Breakpoint.LG]);
      this.setIsMobile(state.breakpoints[Breakpoint.XS] && !state.breakpoints[Breakpoint.SM]);
    });
  }
  static {
    this.\u0275fac = function BreakpointObserverService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreakpointObserverService)(\u0275\u0275inject(BreakpointObserver));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BreakpointObserverService, factory: _BreakpointObserverService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserverService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: BreakpointObserver }], null);
})();

export {
  BreakpointObserverService
};
//# sourceMappingURL=chunk-QNQ2AX2B.js.map
