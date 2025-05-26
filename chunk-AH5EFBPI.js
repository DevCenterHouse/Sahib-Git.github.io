import {
  AuthApi,
  AuthService,
  IntercomService,
  MatDialog,
  ProfileState,
  StorageService,
  StorageType
} from "./chunk-DMGY2MF4.js";
import {
  Injectable,
  inject,
  of,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-JUYOWJV2.js";

// apps/findqo-ireland/src/app/core/services/sso-post-login.service.ts
var SsoPostLoginService = class _SsoPostLoginService {
  constructor() {
    this.authApi = inject(AuthApi);
    this.authService = inject(AuthService);
    this.profileState = inject(ProfileState);
    this.intercomService = inject(IntercomService);
    this.storageService = inject(StorageService);
    this.matDialog = inject(MatDialog);
  }
  handlePostLoginWithAction(handlers) {
    const actionRaw = sessionStorage.getItem(StorageType.POST_LOGIN_SESSION);
    if (!actionRaw)
      return;
    const action = JSON.parse(actionRaw);
    if (action?.userInitiatedSso) {
      const handler = handlers[action?.type];
      const payload = action?.payload;
      this.authApi.googleAuthenticate().subscribe((response) => {
        const user = response.data;
        this.processUserAfterLogin(user);
        if (handler) {
          handler(payload);
        }
      });
    }
    sessionStorage.removeItem(StorageType.POST_LOGIN_SESSION);
  }
  handlePostLoginWithoutAction$() {
    return this.authApi.googleAuthenticate().pipe(tap((response) => {
      const user = response.data;
      this.processUserAfterLogin(user);
    }), switchMap(() => of(null)));
  }
  processUserAfterLogin(user) {
    this.authService.login(user);
    this.profileState.setUser(user);
    this.intercomService.addIntercomUser(user);
  }
  static {
    this.\u0275fac = function SsoPostLoginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SsoPostLoginService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SsoPostLoginService, factory: _SsoPostLoginService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SsoPostLoginService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SsoPostLoginService
};
//# sourceMappingURL=chunk-AH5EFBPI.js.map
