import {
  AdAisle,
  AdDetailTitlePipe,
  AdDetailsSlicePipe,
  AdTransfromPipe,
  AisleType,
  ButtonComponent,
  ButtonType,
  IconWithLinkDirective,
  MatDivider,
  TranslationsPipe,
  ViewportService
} from "./chunk-DMGY2MF4.js";
import {
  DomSanitizer
} from "./chunk-7YCEKZKP.js";
import {
  CurrencyPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-P7GEPQ2C.js";
import {
  ChangeDetectorRef,
  Component,
  Input,
  Renderer2,
  ViewChild,
  __commonJS,
  __toESM,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-JUYOWJV2.js";

// node_modules/sister/src/sister.js
var require_sister = __commonJS({
  "node_modules/sister/src/sister.js"(exports, module) {
    "use strict";
    var Sister;
    Sister = function() {
      var sister = {}, events = {};
      sister.on = function(name, handler) {
        var listener = {
          name,
          handler
        };
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
      };
      sister.off = function(listener) {
        var index = events[listener.name].indexOf(listener);
        if (index !== -1) {
          events[listener.name].splice(index, 1);
        }
      };
      sister.trigger = function(name, data) {
        var listeners = events[name], i;
        if (listeners) {
          i = listeners.length;
          while (i--) {
            listeners[i].handler(data);
          }
        }
      };
      return sister;
    };
    module.exports = Sister;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [...createDebug.names, ...createDebug.skips.map((namespace) => "-" + namespace)].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var {
      formatters
    } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/youtube-player/dist/constants/PlayerStates.js
var require_PlayerStates = __commonJS({
  "node_modules/youtube-player/dist/constants/PlayerStates.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/FunctionStateMap.js
var require_FunctionStateMap = __commonJS({
  "node_modules/youtube-player/dist/FunctionStateMap.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _PlayerStates = require_PlayerStates();
    var _PlayerStates2 = _interopRequireDefault(_PlayerStates);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = {
      pauseVideo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
        stateChangeRequired: false
      },
      playVideo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
        stateChangeRequired: false
      },
      seekTo: {
        acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
        stateChangeRequired: true,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        // eslint-disable-next-line unicorn/numeric-separators-style
        timeout: 3e3
      }
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/eventNames.js
var require_eventNames = __commonJS({
  "node_modules/youtube-player/dist/eventNames.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/functionNames.js
var require_functionNames = __commonJS({
  "node_modules/youtube-player/dist/functionNames.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe", "getSphericalProperties", "setSphericalProperties"];
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/YouTubePlayer.js
var require_YouTubePlayer = __commonJS({
  "node_modules/youtube-player/dist/YouTubePlayer.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _debug = require_browser();
    var _debug2 = _interopRequireDefault(_debug);
    var _FunctionStateMap = require_FunctionStateMap();
    var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);
    var _eventNames = require_eventNames();
    var _eventNames2 = _interopRequireDefault(_eventNames);
    var _functionNames = require_functionNames();
    var _functionNames2 = _interopRequireDefault(_functionNames);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var debug = (0, _debug2.default)("youtube-player");
    var YouTubePlayer2 = {};
    YouTubePlayer2.proxyEvents = (emitter) => {
      const events = {};
      for (const eventName of _eventNames2.default) {
        const onEventName = "on" + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);
        events[onEventName] = (event) => {
          debug('event "%s"', onEventName, event);
          emitter.trigger(eventName, event);
        };
      }
      return events;
    };
    YouTubePlayer2.promisifyPlayer = (playerAPIReady, strictState = false) => {
      const functions = {};
      for (const functionName of _functionNames2.default) {
        if (strictState && _FunctionStateMap2.default[functionName]) {
          functions[functionName] = (...args) => {
            return playerAPIReady.then((player) => {
              const stateInfo = _FunctionStateMap2.default[functionName];
              const playerState = player.getPlayerState();
              const value = player[functionName].apply(player, args);
              if (stateInfo.stateChangeRequired || // eslint-disable-next-line no-extra-parens
              Array.isArray(stateInfo.acceptableStates) && !stateInfo.acceptableStates.includes(playerState)) {
                return new Promise((resolve) => {
                  const onPlayerStateChange = () => {
                    const playerStateAfterChange = player.getPlayerState();
                    let timeout;
                    if (typeof stateInfo.timeout === "number") {
                      timeout = setTimeout(() => {
                        player.removeEventListener("onStateChange", onPlayerStateChange);
                        resolve();
                      }, stateInfo.timeout);
                    }
                    if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.includes(playerStateAfterChange)) {
                      player.removeEventListener("onStateChange", onPlayerStateChange);
                      clearTimeout(timeout);
                      resolve();
                    }
                  };
                  player.addEventListener("onStateChange", onPlayerStateChange);
                }).then(() => {
                  return value;
                });
              }
              return value;
            });
          };
        } else {
          functions[functionName] = (...args) => {
            return playerAPIReady.then((player) => {
              return player[functionName].apply(player, args);
            });
          };
        }
      }
      return functions;
    };
    exports.default = YouTubePlayer2;
    module.exports = exports["default"];
  }
});

// node_modules/load-script/index.js
var require_load_script = __commonJS({
  "node_modules/load-script/index.js"(exports, module) {
    module.exports = function load(src, opts, cb) {
      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      if (typeof opts === "function") {
        cb = opts;
        opts = {};
      }
      opts = opts || {};
      cb = cb || function() {
      };
      script.type = opts.type || "text/javascript";
      script.charset = opts.charset || "utf8";
      script.async = "async" in opts ? !!opts.async : true;
      script.src = src;
      if (opts.attrs) {
        setAttributes(script, opts.attrs);
      }
      if (opts.text) {
        script.text = "" + opts.text;
      }
      var onend = "onload" in script ? stdOnEnd : ieOnEnd;
      onend(script, cb);
      if (!script.onload) {
        stdOnEnd(script, cb);
      }
      head.appendChild(script);
    };
    function setAttributes(script, attrs) {
      for (var attr in attrs) {
        script.setAttribute(attr, attrs[attr]);
      }
    }
    function stdOnEnd(script, cb) {
      script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
      };
      script.onerror = function() {
        this.onerror = this.onload = null;
        cb(new Error("Failed to load " + this.src), script);
      };
    }
    function ieOnEnd(script, cb) {
      script.onreadystatechange = function() {
        if (this.readyState != "complete" && this.readyState != "loaded") return;
        this.onreadystatechange = null;
        cb(null, script);
      };
    }
  }
});

// node_modules/youtube-player/dist/loadYouTubeIframeApi.js
var require_loadYouTubeIframeApi = __commonJS({
  "node_modules/youtube-player/dist/loadYouTubeIframeApi.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _loadScript = require_load_script();
    var _loadScript2 = _interopRequireDefault(_loadScript);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = (emitter) => {
      const iframeAPIReady = new Promise((resolve) => {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          resolve(window.YT);
          return;
        } else {
          const protocol = window.location.protocol === "http:" ? "http:" : "https:";
          (0, _loadScript2.default)(protocol + "//www.youtube.com/iframe_api", (error) => {
            if (error) {
              emitter.trigger("error", error);
            }
          });
        }
        const previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (previous) {
            previous();
          }
          resolve(window.YT);
        };
      });
      return iframeAPIReady;
    };
    module.exports = exports["default"];
  }
});

// node_modules/youtube-player/dist/index.js
var require_dist = __commonJS({
  "node_modules/youtube-player/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _sister = require_sister();
    var _sister2 = _interopRequireDefault(_sister);
    var _YouTubePlayer = require_YouTubePlayer();
    var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
    var _loadYouTubeIframeApi = require_loadYouTubeIframeApi();
    var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var youtubeIframeAPI;
    exports.default = (maybeElementId, options = {}, strictState = false) => {
      const emitter = (0, _sister2.default)();
      if (!youtubeIframeAPI) {
        youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
      }
      if (options.events) {
        throw new Error("Event handlers cannot be overwritten.");
      }
      if (typeof maybeElementId === "string" && !document.getElementById(maybeElementId)) {
        throw new Error('Element "' + maybeElementId + '" does not exist.');
      }
      options.events = _YouTubePlayer2.default.proxyEvents(emitter);
      const playerAPIReady = new Promise((resolve) => {
        if (typeof maybeElementId === "object" && maybeElementId.playVideo instanceof Function) {
          const player = maybeElementId;
          resolve(player);
        } else {
          youtubeIframeAPI.then((YT) => {
            const player = new YT.Player(maybeElementId, options);
            emitter.on("ready", () => {
              resolve(player);
            });
            return null;
          });
        }
      });
      const playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
      playerApi.on = emitter.on;
      playerApi.off = emitter.off;
      return playerApi;
    };
    module.exports = exports["default"];
  }
});

// apps/findqo-ireland/src/app/feature/ad-detail/constants/ad-detail.constant.ts
var CAR_DETAILS = [
  { property: "trim", name: "n403" },
  { property: "bodyType", name: "n166" },
  { property: "fuelType", name: "n406" },
  { property: "transmission", name: "n312" },
  { property: "horsePower", name: "n416" },
  { property: "bodyCondition", name: "n360" },
  { property: "mechanicalCondition", name: "n414" },
  { property: "cylinderCount", name: "n413" },
  { property: "doorCount", name: "n430" },
  { property: "isSteeringSideLeft", name: "n525" }
];
var MOTOR_CYCLE_DETAILS = [
  { property: "finalDriveSystem", name: "n451" },
  { property: "usage", name: "n449" },
  { property: "wheelCount", name: "n687" },
  { property: "bodyCondition", name: "n360" },
  { property: "isWarranty", name: "n171" },
  { property: "mechanicalCondition", name: "n414" },
  { property: "sellerType", name: "n154" }
];
var NUMBER_PLATE_DETAILS = [
  { property: "stand", name: "n688" },
  { property: "plateDigitCount", name: "n689" },
  { property: "sellerType", name: "n154" }
];
var ACESSORIES_DETAILS = [
  { property: "condition", name: "n454" },
  { property: "usage", name: "n449" },
  { property: "isWarranty", name: "n171" }
];
var BUY_RESIDENTIAL_DETAILS = [
  { property: "furnishing", name: "n467" },
  { property: "isUnderConstruction", name: "n676" },
  { property: "sellerType", name: "n154" }
];
var BUY_COMMERCIAL_DETAILS = [
  { property: "isUnderConstruction", name: "n676" },
  { property: "sellerType", name: "n154" }
];
var RENT_RESIDENTIAL_DETAILS_APARTMENTS = [
  { property: "leaseTerm", name: "n690" },
  { property: "availableFrom", name: "n3111" },
  { property: "furnishing", name: "n467" },
  { property: "seller", name: "n154" }
];
var RENT_RESIDENTIAL_DETAILS_STUDIO = [
  { property: "propertySize", name: "n466" },
  { property: "leaseTerm", name: "n690" },
  { property: "seller", name: "n154" },
  { property: "availableFrom", name: "n3111" },
  { property: "furnishing", name: "n467" }
];
var RENT_RESIDENTIAL_DETAILS_PARKING = [
  { property: "parkingAccess", name: "n3265" },
  { property: "parkingAvailableSpaceCount", name: "n3263" },
  { property: "seller", name: "n154" }
];
var RENT_COMMERCIAL_DETAILS = [
  { property: "propertySize", name: "n466" },
  { property: "leaseTerm", name: "n690" },
  { property: "availableFrom", name: "n3111" },
  { property: "seller", name: "n154" }
];
var SHARE_RESIDENTIAL_DETAILS = [
  { property: "leaseTerm", name: "n690" },
  { property: "availableFrom", name: "n3111" },
  { property: "tenantPreference", name: "n3243" },
  { property: "bedroomCount", name: "n3307" },
  { property: "furnishing", name: "n467" },
  { property: "otherTenantShareCount", name: "n3308" },
  { property: "seller", name: "n154" },
  { property: "isOwnerOccupied", name: "n3242" }
];
var SALE_RESIDENTIAL_DETAILS = [
  { property: "seller", name: "n154" },
  { property: "taxDesignation", name: "n3639" }
];
var SALE_RESIDENTIAL_DETAILS_STUDIO = [
  { property: "propertySize", name: "n466" },
  { property: "seller", name: "n154" },
  { property: "taxDesignation", name: "n3639" }
];
var SALE_COMMERCIAL_DETAILS = [
  { property: "propertySize", name: "n466" },
  { property: "seller", name: "n154" }
];

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-sub-details/ad-sub-details.component.ts
var _c0 = () => [1, 2];
var _c1 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function AdSubDetailsComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "adTransform");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const details_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", !((ctx_r1.ad == null ? null : ctx_r1.ad[details_r1.property]) && (ctx_r1.ad == null ? null : ctx_r1.ad[details_r1.property] == null ? null : ctx_r1.ad[details_r1.property].value) !== "0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translations == null ? null : ctx_r1.translations[details_r1 == null ? null : details_r1.name]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBindV(8, 3, \u0275\u0275pureFunction6(10, _c1, ctx_r1.ad == null ? null : ctx_r1.ad[details_r1 == null ? null : details_r1.property], details_r1 == null ? null : details_r1.property, ctx_r1.translations == null ? null : ctx_r1.translations["n176"], ctx_r1.translations == null ? null : ctx_r1.translations["n177"], ctx_r1.translations == null ? null : ctx_r1.translations["n3139"], ctx_r1.translations == null ? null : ctx_r1.translations["n3160"])), " ");
  }
}
function AdSubDetailsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdSubDetailsComponent_ng_container_5_div_1_Template, 9, 17, "div", 11);
    \u0275\u0275pipe(2, "adDetailsSlice");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind4(2, 1, ctx_r1.details, ctx_r1.showMore, i_r3, !ctx_r1.viewport.desktop));
  }
}
function AdSubDetailsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    \u0275\u0275property("ngClass", room_r4.count === "0" ? "d-none" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, (room_r4 == null ? null : room_r4.roomType == null ? null : room_r4.roomType.id) === "1" ? "n3253" : (room_r4 == null ? null : room_r4.roomType == null ? null : room_r4.roomType.id) === "2" ? "n3254" : "n3255"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(room_r4 == null ? null : room_r4.count);
  }
}
function AdSubDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AdSubDetailsComponent_div_6_div_1_Template, 6, 5, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.ad == null ? null : ctx_r1.ad.bedrooms);
  }
}
function AdSubDetailsComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const room_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (ctx_r1.translations == null ? null : ctx_r1.translations["n3305"]) + "\xA0" + (i_r6 + 1), ":\xA0", room_r5 == null ? null : room_r5.roomType == null ? null : room_r5.roomType.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, room_r5 == null ? null : room_r5.price, (ctx_r1.ad == null ? null : ctx_r1.ad.bedrooms == null ? null : ctx_r1.ad.bedrooms.length) > 1 ? room_r5 == null ? null : room_r5.currency.toUpperCase() : ctx_r1.ad.price.currency));
  }
}
function AdSubDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, AdSubDetailsComponent_div_15_div_1_Template, 7, 6, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.ad == null ? null : ctx_r1.ad.bedrooms);
  }
}
var AdSubDetailsComponent = class _AdSubDetailsComponent {
  constructor(viewport, cdr) {
    this.viewport = viewport;
    this.cdr = cdr;
    this.isAgentHub = false;
    this.showMore = false;
    this.buttonType = ButtonType;
    this.aisleType = AisleType;
  }
  getDetails() {
    switch (this.ad.aisle?.reference?.toLowerCase()) {
      case AdAisle.CAR_DETAILS: {
        this.details = CAR_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.HEAVY_VEHICLES: {
        this.details = CAR_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.MOTOR_CYCLES: {
        this.details = MOTOR_CYCLE_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.NUMBER_PLATES: {
        this.details = NUMBER_PLATE_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.ACCESSORIES: {
        this.details = ACESSORIES_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.BUY_RESIDENTIAL: {
        this.details = BUY_RESIDENTIAL_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AisleType.RENT_RESIDENTIAL: {
        if (this.ad?.bedrooms?.length > 0) {
          this.details = RENT_RESIDENTIAL_DETAILS_APARTMENTS;
        } else if (this.ad?.parkingAvailableSpaceCount) {
          this.details = RENT_RESIDENTIAL_DETAILS_PARKING;
        } else {
          this.details = RENT_RESIDENTIAL_DETAILS_STUDIO;
        }
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AisleType.SHARE_RESIDENTIAL: {
        this.details = SHARE_RESIDENTIAL_DETAILS.filter((detail) => {
          if (detail.property === "bedroomCount" && this.ad?.bedroomCount === "0") {
            return false;
          }
          return true;
        });
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.BUY_COMMERCIAL: {
        this.details = BUY_COMMERCIAL_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AisleType.RENT_COMMERCIAL: {
        this.details = RENT_COMMERCIAL_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AdAisle.NEW_PROJECTS: {
        this.details = BUY_RESIDENTIAL_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AisleType.SALE_RESIDENTIAL: {
        if (this.ad?.bedrooms?.length > 0) {
          this.details = SALE_RESIDENTIAL_DETAILS;
        } else {
          this.details = SALE_RESIDENTIAL_DETAILS_STUDIO;
        }
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      case AisleType.SALE_COMMERCIAL: {
        this.details = SALE_COMMERCIAL_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
      default: {
        this.details = CAR_DETAILS;
        this.length = this.details.length / 2 > 4 ? this.details.length / 2 : 5;
        break;
      }
    }
  }
  ngOnInit() {
    this.getDetails();
    const filteredRooms = this.ad?.bedrooms?.filter((room) => room?.count !== "0");
    this.ad.bedrooms = filteredRooms;
  }
  static {
    this.\u0275fac = function AdSubDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdSubDetailsComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdSubDetailsComponent, selectors: [["findqo-ad-sub-details"]], inputs: { translations: "translations", ad: "ad", isAgentHub: "isAgentHub" }, standalone: false, decls: 16, vars: 14, consts: [[1, "px-3", 3, "ngClass"], [1, "mb-2", "fg-general-5", 3, "ngClass"], [1, "row", "justify-content-start"], [4, "ngFor", "ngForOf"], ["class", "row justify-content-between align-items-center text-caption-regular text-small-sm-14px-regular", 4, "ngIf"], [1, "d-none", "d-md-flex", "row", "justify-content-between", "align-items-center", "text-caption-regular", "text-small-sm-14px-regular"], [1, "col-lg-6", "col-sm-8"], [1, "row", "pe-lg-5", "justify-content-between"], [1, "col-5", "fg-general-5", "align-items-center", "h-35px"], [1, "col-7", "lh-16px", "lh-sm-18px", "text-end", "fg-general-5", "fw-500", "loc-style"], ["class", "row", 4, "ngIf"], ["class", "col-sm-8 col-lg-6", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "col-sm-8", "col-lg-6", 3, "hidden"], [1, "h-24px", "pe-lg-5", "d-flex", "justify-content-between", "align-items-center", "text-caption-regular", "text-small-sm-14px-regular"], [1, "col-auto", "fg-general-5"], [1, "d-inline-block", "lh-16px", "lh-sm-18px"], [1, "d-inline-block", "lh-16px", "lh-sm-18px", "fw-500"], [1, "row", "justify-content-between", "align-items-center", "text-caption-regular", "text-small-sm-14px-regular"], ["class", "h-24px pe-lg-5 col-sm-8 col-lg-6 fg-general-5 d-flex justify-content-between align-items-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "h-24px", "pe-lg-5", "col-sm-8", "col-lg-6", "fg-general-5", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass"], [1, "d-inline-block", "lh-16px", "lh-sm-18px", "fg-general-5"], [1, "row"], ["class", "pe-lg-5 col-sm-6", 4, "ngFor", "ngForOf"], [1, "pe-lg-5", "col-sm-6"], [1, "share-room", "d-flex", "justify-content-between", "align-items-center", "text-caption-regular", "px-3", "mt-2", "mt-sm-3"], [1, "fg-basic-2"], [1, "fg-prim-2"]], template: function AdSubDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "adDetailTitle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275template(5, AdSubDetailsComponent_ng_container_5_Template, 3, 6, "ng-container", 3)(6, AdSubDetailsComponent_div_6_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(15, AdSubDetailsComponent_div_15_Template, 2, 1, "div", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "px-lg-0" : "ps-md-4 ps-xl-0 pe-md-3");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "text-body-medium" : "heading-4-medium");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.translations == null ? null : ctx.translations[\u0275\u0275pipeBind2(3, 8, ctx.ad == null ? null : ctx.ad.section == null ? null : ctx.ad.section["reference"], ctx.ad.aisle == null ? null : ctx.ad.aisle.name)], " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ((ctx.ad == null ? null : ctx.ad.aisle == null ? null : ctx.ad.aisle.reference) === (ctx.aisleType == null ? null : ctx.aisleType.RENT_RESIDENTIAL) || (ctx.ad == null ? null : ctx.ad.aisle == null ? null : ctx.ad.aisle.reference) === (ctx.aisleType == null ? null : ctx.aisleType.SALE_RESIDENTIAL)) && (ctx.ad == null ? null : ctx.ad.bedrooms == null ? null : ctx.ad.bedrooms.length) > 0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "n3053"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.ad == null ? null : ctx.ad.location == null ? null : ctx.ad.location.address, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.ad == null ? null : ctx.ad.aisle == null ? null : ctx.ad.aisle.reference) === (ctx.aisleType == null ? null : ctx.aisleType.SHARE_RESIDENTIAL) && (ctx.ad == null ? null : ctx.ad.bedrooms == null ? null : ctx.ad.bedrooms.length) > 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, CurrencyPipe, AdDetailTitlePipe, AdDetailsSlicePipe, AdTransfromPipe, TranslationsPipe], styles: ["\n\n.h-24px[_ngcontent-%COMP%] {\n  height: 24px;\n}\n@media (min-width: 992px) {\n  .h-24px[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n}\n.h-35px[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.ps-32px[_ngcontent-%COMP%] {\n  padding-inline-start: 32px;\n}\n.rotate-180deg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n@media (min-width: 992px) {\n  .gap-32px[_ngcontent-%COMP%] {\n    gap: 32px;\n  }\n}\n@media (min-width: 576px) {\n  .ps-4[_ngcontent-%COMP%] {\n    padding-inline-start: 24px;\n  }\n}\n.share-room[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid var(--general-2);\n  height: 40px;\n}\n.loc-style[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-sub-details.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdSubDetailsComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-sub-details", standalone: false, template: `<div class="px-3" [ngClass]="isAgentHub ? 'px-lg-0' : 'ps-md-4 ps-xl-0 pe-md-3'">
	<h4 class="mb-2 fg-general-5" [ngClass]="isAgentHub ? 'text-body-medium' : 'heading-4-medium'">
		{{ translations?.[(ad?.section?.['reference'] | adDetailTitle: ad.aisle?.name)] }}
	</h4>

	<div class="row justify-content-start">
		<ng-container *ngFor="let colm of [1, 2]; let i = index">
			<div
				class="col-sm-8 col-lg-6"
				*ngFor="let details of details | adDetailsSlice: showMore : i : !viewport.desktop; let j = index; let odd = odd"
				[hidden]="!(ad?.[details.property] && ad?.[details.property]?.value !== '0')"
			>
				<div class="h-24px pe-lg-5 d-flex justify-content-between align-items-center text-caption-regular text-small-sm-14px-regular">
					<div class="col-auto fg-general-5">
						<span class="d-inline-block lh-16px lh-sm-18px">{{ translations?.[details?.name] }}</span>
					</div>

					<div class="col-auto fg-general-5">
						<span class="d-inline-block lh-16px lh-sm-18px fw-500">
							{{
								ad?.[details?.property]
									| adTransform: details?.property : translations?.['n176'] : translations?.['n177'] : translations?.['n3139'] : translations?.['n3160']
							}}
						</span>
					</div>
				</div>
			</div>
		</ng-container>
		<!-- For Rent residential bedrooms -->

		<div
			class="row justify-content-between align-items-center text-caption-regular text-small-sm-14px-regular"
			*ngIf="(ad?.aisle?.reference === aisleType?.RENT_RESIDENTIAL || ad?.aisle?.reference === aisleType?.SALE_RESIDENTIAL) && ad?.bedrooms?.length > 0"
		>
			<div
				class="h-24px pe-lg-5 col-sm-8 col-lg-6 fg-general-5 d-flex justify-content-between align-items-center"
				[ngClass]="room.count === '0' ? 'd-none' : ''"
				*ngFor="let room of ad?.bedrooms; let i = index"
			>
				<span class="d-inline-block lh-16px lh-sm-18px">
					{{ (room?.roomType?.id === '1' ? 'n3253' : room?.roomType?.id === '2' ? 'n3254' : 'n3255') | translations }}
				</span>

				<span class="d-inline-block lh-16px lh-sm-18px fg-general-5">{{ room?.count }}</span>
			</div>
		</div>

		<div class="d-none d-md-flex row justify-content-between align-items-center text-caption-regular text-small-sm-14px-regular">
			<div class="col-lg-6 col-sm-8">
				<div class="row pe-lg-5 justify-content-between">
					<span class="col-5 fg-general-5 align-items-center h-35px">
						{{ 'n3053' | translations }}
					</span>

					<span class="col-7 lh-16px lh-sm-18px text-end fg-general-5 fw-500 loc-style">
						{{ ad?.location?.address }}
					</span>
				</div>
			</div>
		</div>

		<!-- For Share residential -->
		<div *ngIf="ad?.aisle?.reference === aisleType?.SHARE_RESIDENTIAL && ad?.bedrooms?.length > 0" class="row">
			<div *ngFor="let room of ad?.bedrooms; let i = index; let odd = odd" class="pe-lg-5 col-sm-6">
				<div class="share-room d-flex justify-content-between align-items-center text-caption-regular px-3 mt-2 mt-sm-3">
					<span class="fg-basic-2">{{ translations?.['n3305'] + '&nbsp;' + (i + 1) }}:&nbsp;{{ room?.roomType?.name }}</span>

					<span class="fg-prim-2">{{ room?.price | currency: (ad?.bedrooms?.length > 1 ? room?.currency.toUpperCase() : ad.price.currency) }}</span>
				</div>
			</div>
		</div>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-sub-details/ad-sub-details.component.scss */\n.h-24px {\n  height: 24px;\n}\n@media (min-width: 992px) {\n  .h-24px {\n    height: 35px;\n  }\n}\n.h-35px {\n  height: 35px;\n}\n.ps-32px {\n  padding-inline-start: 32px;\n}\n.rotate-180deg {\n  transform: rotate(180deg);\n}\n@media (min-width: 992px) {\n  .gap-32px {\n    gap: 32px;\n  }\n}\n@media (min-width: 576px) {\n  .ps-4 {\n    padding-inline-start: 24px;\n  }\n}\n.share-room {\n  border-radius: 4px;\n  border: 1px solid var(--general-2);\n  height: 40px;\n}\n.loc-style {\n  max-width: 220px;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-sub-details.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: ChangeDetectorRef }], { translations: [{
    type: Input
  }], ad: [{
    type: Input
  }], isAgentHub: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdSubDetailsComponent, { className: "AdSubDetailsComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-sub-details/ad-sub-details.component.ts", lineNumber: 34 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-description/ad-description.component.ts
var _c02 = ["descriptionContainer"];
function AdDescriptionComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "findqo-button", 8);
    \u0275\u0275listener("clicked", function AdDescriptionComponent_ng_container_7_Template_findqo_button_clicked_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleShowMore());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r1.buttonType.BASIC)("label", ctx_r1.showMore ? ctx_r1.translations == null ? null : ctx_r1.translations["n4100"] : ctx_r1.translations == null ? null : ctx_r1.translations["n4101"])("iconSuffix", "down-arrow")("btnIconClass", ctx_r1.showMore ? "rotate-180deg" : "");
  }
}
var AdDescriptionComponent = class _AdDescriptionComponent {
  constructor(viewport, cdr, renderer2, sanitize) {
    this.viewport = viewport;
    this.cdr = cdr;
    this.renderer2 = renderer2;
    this.sanitize = sanitize;
    this.isAgentHub = false;
    this.buttonType = ButtonType;
    this.showMore = true;
  }
  set description(data) {
    this.descriptionContent = this.sanitizeHtml(data);
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.renderer2.setStyle(this.descriptionContainer.nativeElement, "max-height", "unset");
    } else {
      this.renderer2.setStyle(this.descriptionContainer.nativeElement, "max-height", "160px");
    }
  }
  checkContentHeight() {
    if (this.descriptionContainer.nativeElement.scrollHeight > 160) {
      this.overflowContent = true;
      this.cdr.detectChanges();
    }
  }
  sanitizeHtml(content) {
    return this.sanitize.bypassSecurityTrustHtml(content);
  }
  ngAfterViewInit() {
    this.checkContentHeight();
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function AdDescriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdDescriptionComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdDescriptionComponent, selectors: [["findqo-ad-description"]], viewQuery: function AdDescriptionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.descriptionContainer = _t.first);
      }
    }, inputs: { description: "description", translations: "translations", isAgentHub: "isAgentHub" }, standalone: false, decls: 8, vars: 5, consts: [["descriptionContainer", ""], [1, "px-3", 3, "ngClass"], [1, "d-block", "fw-500", "fs-16px", "lh-22px", "mb-3", 3, "ngClass"], [1, "description", "fg-general-5", "fs-12px", "fs-sm-14px", "fw-400"], [1, "fg-general-5", "format-description", "hyper-links"], ["iconLink", "", 3, "innerHTML"], [4, "ngIf"], [1, "w-100", "text-center", "pt-2", "ad-detail-icon", "ad-style"], ["btnClass", "fs-14px lh-18px px-0 fg-general-5 d-flex align-items-center gap-2 h-40 align-self-stretch", 1, "h-20px", 3, "clicked", "btnType", "label", "iconSuffix", "btnIconClass"]], template: function AdDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3, 0)(5, "div", 4);
        \u0275\u0275element(6, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AdDescriptionComponent_ng_container_7_Template, 3, 4, "ng-container", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "px-lg-0" : "ps-md-4 ps-xl-0 pe-md-3");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "text-body-medium fg-general-5" : "text-title-16px-medium");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.translations == null ? null : ctx.translations["n318"], " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("innerHTML", ctx.descriptionContent, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.overflowContent);
      }
    }, dependencies: [NgClass, NgIf, IconWithLinkDirective, ButtonComponent], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  max-height: unset;\n  overflow: hidden;\n}\n.format-description[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-description.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdDescriptionComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-description", standalone: false, template: `<div class="px-3" [ngClass]="isAgentHub ? 'px-lg-0' : 'ps-md-4 ps-xl-0 pe-md-3'">
	<h2 class="d-block fw-500 fs-16px lh-22px mb-3" [ngClass]="isAgentHub ? 'text-body-medium fg-general-5' : 'text-title-16px-medium'">
		{{ translations?.['n318'] }}
	</h2>

	<div class="description fg-general-5 fs-12px fs-sm-14px fw-400" #descriptionContainer>
		<div class="fg-general-5 format-description hyper-links">
			<div iconLink [innerHTML]="descriptionContent"></div>
		</div>
	</div>

	<ng-container *ngIf="overflowContent">
		<div class="w-100 text-center pt-2 ad-detail-icon ad-style">
			<findqo-button
				[btnType]="buttonType.BASIC"
				[label]="showMore ? translations?.['n4100'] : translations?.['n4101']"
				[iconSuffix]="'down-arrow'"
				(clicked)="toggleShowMore()"
				[btnIconClass]="showMore ? 'rotate-180deg' : ''"
				btnClass="fs-14px lh-18px px-0 fg-general-5 d-flex align-items-center gap-2 h-40 align-self-stretch"
				class="h-20px"
			></findqo-button>
		</div>
	</ng-container>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-description/ad-description.component.scss */\n.description {\n  max-height: unset;\n  overflow: hidden;\n}\n.format-description {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-description.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: DomSanitizer }], { description: [{
    type: Input
  }], translations: [{
    type: Input
  }], isAgentHub: [{
    type: Input
  }], descriptionContainer: [{
    type: ViewChild,
    args: ["descriptionContainer", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdDescriptionComponent, { className: "AdDescriptionComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-description/ad-description.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-extras/ad-extras.component.ts
var _c03 = () => [1, 2, 3];
var _c12 = (a0, a1, a2, a3) => [a0, a1, a2, a3, true];
function AdExtrasComponent_div_6_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1);
  }
}
function AdExtrasComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "ul", 7);
    \u0275\u0275template(2, AdExtrasComponent_div_6_li_2_Template, 3, 1, "li", 8);
    \u0275\u0275pipe(3, "adDetailsSlice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pe-40px", !ctx_r2.viewport.mobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBindV(3, 3, \u0275\u0275pureFunction4(9, _c12, ctx_r2.extras, ctx_r2.showMore, i_r2, ctx_r2.viewport.mobile)));
  }
}
function AdExtrasComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "findqo-button", 12);
    \u0275\u0275listener("clicked", function AdExtrasComponent_ng_container_7_Template_findqo_button_clicked_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleShowMore());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r2.buttonType.BASIC)("label", ctx_r2.showMore ? ctx_r2.translations == null ? null : ctx_r2.translations["n4100"] : ctx_r2.translations == null ? null : ctx_r2.translations["n4101"])("iconSuffix", "down-arrow")("btnIconClass", ctx_r2.showMore ? "rotate-180deg" : "");
  }
}
var AdExtrasComponent = class _AdExtrasComponent {
  constructor(viewport) {
    this.viewport = viewport;
    this.isAgentHub = false;
    this.showMore = true;
    this.buttonType = ButtonType;
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  ngOnInit() {
    if (this.section === "Motors") {
      this.titleId = "n545";
    } else {
      this.titleId = "n680";
    }
  }
  static {
    this.\u0275fac = function AdExtrasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdExtrasComponent)(\u0275\u0275directiveInject(ViewportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdExtrasComponent, selectors: [["findqo-ad-extras"]], inputs: { extras: "extras", section: "section", translations: "translations", isAgentHub: "isAgentHub" }, standalone: false, decls: 8, vars: 8, consts: [[1, "my-3", "my-sm-5"], [1, "px-3", 3, "ngClass"], [1, "d-block", "mb-2", 3, "ngClass"], [1, "row", "ad-style", "mx-0"], ["class", "col-sm-4 px-0", 3, "pe-40px", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-sm-4", "px-0"], [1, "extras-list", "p-0", "m-0", "ps-4", "fg-general-5", "text-caption-regular", "text-small-sm-14px-regular"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], [1, "d-block", "lh-20px", "lh-sm-22px", "fg-general-5"], [1, "col", "px-0", "text-center", "pt-2", "ad-detail-icon"], ["btnClass", "fs-14px lh-18px px-0 fg-general-5 float-start d-flex align-items-center gap-2 h-40 align-self-stretch", 3, "clicked", "btnType", "label", "iconSuffix", "btnIconClass"]], template: function AdExtrasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-divider", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, AdExtrasComponent_div_6_Template, 4, 14, "div", 4)(7, AdExtrasComponent_ng_container_7_Template, 3, 4, "ng-container", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "px-lg-0" : "ps-md-4 ps-xl-0 pe-md-3");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "text-body-medium fg-general-5" : "fw-500 fs-16px lh-22px lh-sm-20px");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "n3027"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c03));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewport.mobile && ctx.extras.length > 5);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatDivider, ButtonComponent, AdDetailsSlicePipe, TranslationsPipe], styles: ["\n\n.pe-40px[_ngcontent-%COMP%] {\n  padding-inline-end: 40px;\n}\n.extras-list[_ngcontent-%COMP%] {\n  list-style-type: disc !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-extras.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdExtrasComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-extras", standalone: false, template: `<mat-divider class="my-3 my-sm-5"></mat-divider>

<div class="px-3" [ngClass]="isAgentHub ? 'px-lg-0' : 'ps-md-4 ps-xl-0 pe-md-3'">
	<span class="d-block mb-2" [ngClass]="isAgentHub ? 'text-body-medium fg-general-5' : 'fw-500 fs-16px lh-22px lh-sm-20px'">{{ 'n3027' | translations }}</span>

	<div class="row ad-style mx-0">
		<div class="col-sm-4 px-0" *ngFor="let colm of [1, 2, 3]; let i = index" [class.pe-40px]="!viewport.mobile">
			<ul class="extras-list p-0 m-0 ps-4 fg-general-5 text-caption-regular text-small-sm-14px-regular">
				<li *ngFor="let item of extras | adDetailsSlice: showMore : i : viewport.mobile : true" class="">
					<span class="d-block lh-20px lh-sm-22px fg-general-5">{{ item }}</span>
				</li>
			</ul>
		</div>

		<ng-container *ngIf="viewport.mobile && extras.length > 5">
			<div class="col px-0 text-center pt-2 ad-detail-icon">
				<findqo-button
					[btnType]="buttonType.BASIC"
					[label]="showMore ? translations?.['n4100'] : translations?.['n4101']"
					[iconSuffix]="'down-arrow'"
					(clicked)="toggleShowMore()"
					[btnIconClass]="showMore ? 'rotate-180deg' : ''"
					btnClass="fs-14px lh-18px px-0 fg-general-5 float-start d-flex align-items-center gap-2 h-40 align-self-stretch"
				></findqo-button>
			</div>
		</ng-container>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-extras/ad-extras.component.scss */\n.pe-40px {\n  padding-inline-end: 40px;\n}\n.extras-list {\n  list-style-type: disc !important;\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-extras.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }], { extras: [{
    type: Input
  }], section: [{
    type: Input
  }], translations: [{
    type: Input
  }], isAgentHub: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdExtrasComponent, { className: "AdExtrasComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-extras/ad-extras.component.ts", lineNumber: 13 });
})();

// apps/findqo-ireland/src/app/feature/ad-detail/component/ad-video/ad-video.component.ts
var import_youtube_player = __toESM(require_dist());
var _c04 = ["videoPlayer"];
function AdVideoComponent_div_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.safeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function AdVideoComponent_div_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275elementStart(1, "div", 8)(2, "findqo-button", 9);
    \u0275\u0275listener("click", function AdVideoComponent_div_2_Conditional_4_Template_findqo_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.videoTour());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.ad == null ? null : ctx_r0.ad.images[0] == null ? null : ctx_r0.ad.images[0].url, \u0275\u0275sanitizeUrl)("alt", "Ads Video");
    \u0275\u0275advance(2);
    \u0275\u0275property("btnType", ctx_r0.buttonType.FILLED)("label", ctx_r0.translations == null ? null : ctx_r0.translations["n686"])("btnClass", "fs-14px lh-18px bg-basic-1 w-100 fg-prim-2 video-btn");
  }
}
function AdVideoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, AdVideoComponent_div_2_Conditional_3_Template, 1, 1, "iframe", 6)(4, AdVideoComponent_div_2_Conditional_4_Template, 3, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.viewport.desktop ? "bg-neutral-1 rounded" : "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isVideoPlaying ? 3 : 4);
  }
}
function AdVideoComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "findqo-button", 14);
    \u0275\u0275listener("clicked", function AdVideoComponent_div_3_div_2_Template_findqo_button_clicked_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.videoTour());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("btnType", ctx_r0.buttonType.FILLED)("label", ctx_r0.translations == null ? null : ctx_r0.translations["n686"])("btnClass", "fs-14px lh-18px bg-basic-1 w-100 fg-prim-2 video-btn");
  }
}
function AdVideoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275template(2, AdVideoComponent_div_3_div_2_Template, 2, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.viewport.desktop ? "bg-neutral-1 rounded" : "");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.ad == null ? null : ctx_r0.ad.images[0] == null ? null : ctx_r0.ad.images[0].url, \u0275\u0275sanitizeUrl)("alt", "Ads Video");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isVideoPlaying);
  }
}
var AdVideoComponent = class _AdVideoComponent {
  constructor(viewport, sanitizer) {
    this.viewport = viewport;
    this.sanitizer = sanitizer;
    this.isAgentHub = false;
    this.buttonType = ButtonType;
    this.isVideoPlaying = false;
    this.videoType = false;
  }
  checkVideoType() {
    const VIDEO_URL = this.ad?.youtubeVideoUrl;
    if (VIDEO_URL && (VIDEO_URL.includes("youtube") || VIDEO_URL.includes("youtu.be"))) {
      this.videoType = true;
    } else {
      this.videoType = false;
    }
  }
  videoTour() {
    let player;
    const VIDEO_URL = this.ad.youtubeVideoUrl;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(VIDEO_URL.includes("vimeo") ? this.parseVimeoUrl(VIDEO_URL) : VIDEO_URL);
    if (VIDEO_URL) {
      const YOUTUBE_URL = new URL(VIDEO_URL);
      try {
        if (this.videoType) {
          if (VIDEO_URL.includes("/shorts/") || VIDEO_URL.includes("/youtu.be/")) {
            this.videoId = this.extractYoutubeVideoId(VIDEO_URL);
          } else {
            this.videoId = YOUTUBE_URL.searchParams.get("v");
          }
          if (this.videoId) {
            player = (0, import_youtube_player.default)("video-player");
            player.loadVideoById(this.videoId);
            player.playVideo();
            this.isVideoPlaying = true;
          }
        } else {
          this.isVideoPlaying = true;
        }
      } catch (error) {
      }
    }
  }
  extractYoutubeVideoId(shortsUrl) {
    const MATCH = shortsUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return MATCH ? MATCH[1] : null;
  }
  parseVimeoUrl(url) {
    const REGEX = /https:\/\/(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/;
    const MATCHES = REGEX.exec(url);
    return MATCHES && "https://player.vimeo.com/video/" + MATCHES[1];
  }
  ngOnInit() {
    this.checkVideoType();
  }
  static {
    this.\u0275fac = function AdVideoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdVideoComponent)(\u0275\u0275directiveInject(ViewportService), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdVideoComponent, selectors: [["findqo-ad-video"]], viewQuery: function AdVideoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoplayer = _t.first);
      }
    }, inputs: { translations: "translations", ad: "ad", isAgentHub: "isAgentHub" }, standalone: false, decls: 4, vars: 4, consts: [[1, "d-block", "mb-3", "px-3", 3, "ngClass"], ["class", "py-lg-4 px-3 px-sm-0 position-relative", 3, "ngClass", 4, "ngIf"], ["class", "position-relative text-center ad-style py-lg-4", 3, "ngClass", 4, "ngIf"], [1, "py-lg-4", "px-3", "px-sm-0", "position-relative", 3, "ngClass"], [1, "d-flex", "justify-content-center", "align-item-center", "h-100"], [1, "video-wrapper"], ["allow", "autoplay", "allowfullscreen", "", 3, "src"], [1, "video-img", 3, "src", "alt"], [1, "position-absolute", "centered", "z-2"], ["materialIconPrefix", "play_circle_filled", 3, "click", "btnType", "label", "btnClass"], [1, "position-relative", "text-center", "ad-style", "py-lg-4", 3, "ngClass"], ["id", "video-player", 1, "video-img", 3, "src", "alt"], ["class", "position-absolute centered", 4, "ngIf"], [1, "position-absolute", "centered"], ["materialIconPrefix", "play_circle_filled", 3, "clicked", "btnType", "label", "btnClass"]], template: function AdVideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, AdVideoComponent_div_2_Template, 5, 2, "div", 1)(3, AdVideoComponent_div_3_Template, 3, 4, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.isAgentHub ? "px-lg-0 text-body-medium" : "ps-md-4 ps-xl-0 pe-md-3 fw-500 fs-16px lh-22px text-title-16px-medium");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.translations == null ? null : ctx.translations["n679"], "\n");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.videoType);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.videoType);
      }
    }, dependencies: [NgClass, NgIf, ButtonComponent], styles: ["\n\n.video-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  border-radius: 4px;\n  object-fit: cover;\n  filter: brightness(0.7);\n}\n@media (min-width: 576px) {\n  .video-img[_ngcontent-%COMP%] {\n    max-width: 450px;\n    height: 250px;\n  }\n}\n.centered[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n.video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n@media (min-width: 576px) {\n  .video-wrapper[_ngcontent-%COMP%] {\n    max-width: 450px;\n    height: 250px;\n  }\n}\n.video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n}\n@media (min-width: 576px) {\n  .video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    max-width: 450px;\n    height: 250px;\n  }\n}\n.video-wrapper[_ngcontent-%COMP%]   .video-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: var(--z-index-video-image);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-video.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdVideoComponent, [{
    type: Component,
    args: [{ selector: "findqo-ad-video", standalone: false, template: `<h3 class="d-block mb-3 px-3" [ngClass]="isAgentHub ? 'px-lg-0 text-body-medium' : 'ps-md-4 ps-xl-0 pe-md-3 fw-500 fs-16px lh-22px text-title-16px-medium'">
	{{ translations?.['n679'] }}
</h3>

<div class="py-lg-4 px-3 px-sm-0 position-relative" [ngClass]="viewport.desktop ? 'bg-neutral-1 rounded' : ''" *ngIf="!videoType">
	<div class="d-flex justify-content-center align-item-center h-100">
		<div class="video-wrapper">
			@if (isVideoPlaying) {
				<iframe [src]="safeUrl" allow="autoplay" allowfullscreen></iframe>
			} @else {
				<img [src]="ad?.images[0]?.url" class="video-img" [alt]="'Ads Video'" />
				<div class="position-absolute centered z-2">
					<findqo-button
						[btnType]="buttonType.FILLED"
						[label]="translations?.['n686']"
						materialIconPrefix="play_circle_filled"
						(click)="videoTour()"
						[btnClass]="'fs-14px lh-18px bg-basic-1 w-100 fg-prim-2 video-btn'"
					></findqo-button>
				</div>
			}
		</div>
	</div>
</div>

<div class="position-relative text-center ad-style py-lg-4" [ngClass]="viewport.desktop ? 'bg-neutral-1 rounded' : ''" *ngIf="videoType">
	<img [src]="ad?.images[0]?.url" class="video-img" [alt]="'Ads Video'" id="video-player" />
	<div class="position-absolute centered" *ngIf="!isVideoPlaying">
		<findqo-button
			[btnType]="buttonType.FILLED"
			[label]="translations?.['n686']"
			materialIconPrefix="play_circle_filled"
			(clicked)="videoTour()"
			[btnClass]="'fs-14px lh-18px bg-basic-1 w-100 fg-prim-2 video-btn'"
		></findqo-button>
	</div>
</div>
`, styles: ["/* apps/findqo-ireland/src/app/feature/ad-detail/component/ad-video/ad-video.component.scss */\n.video-img {\n  width: 100%;\n  height: 180px;\n  border-radius: 4px;\n  object-fit: cover;\n  filter: brightness(0.7);\n}\n@media (min-width: 576px) {\n  .video-img {\n    max-width: 450px;\n    height: 250px;\n  }\n}\n.centered {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  z-index: 1;\n}\n.video-wrapper {\n  position: relative;\n  width: 100%;\n  height: 180px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n@media (min-width: 576px) {\n  .video-wrapper {\n    max-width: 450px;\n    height: 250px;\n  }\n}\n.video-wrapper iframe {\n  width: 100%;\n  height: 180px;\n}\n@media (min-width: 576px) {\n  .video-wrapper iframe {\n    max-width: 450px;\n    height: 250px;\n  }\n}\n.video-wrapper .video-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: var(--z-index-video-image);\n}\n/*# sourceMappingURL=https://devcenterhouse.github.io/Sahib-Git.github.io/ad-video.component.css.map */\n"] }]
  }], () => [{ type: ViewportService }, { type: DomSanitizer }], { translations: [{
    type: Input
  }], ad: [{
    type: Input
  }], isAgentHub: [{
    type: Input
  }], videoplayer: [{
    type: ViewChild,
    args: ["videoPlayer", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdVideoComponent, { className: "AdVideoComponent", filePath: "apps/findqo-ireland/src/app/feature/ad-detail/component/ad-video/ad-video.component.ts", lineNumber: 16 });
})();

export {
  AdSubDetailsComponent,
  AdDescriptionComponent,
  AdExtrasComponent,
  AdVideoComponent
};
/*! Bundled license information:

sister/src/sister.js:
  (**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  *)
*/
//# sourceMappingURL=chunk-MZUUJAB7.js.map
