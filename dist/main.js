function kr(j, q) {
  const T = new URLSearchParams({
    pathname: window.location.pathname,
    siteKey: j
  });
  fetch(`${q}?${T}`).then((_) => _.json()).then((_) => {
    _.reactions && _.reactions.map((m) => {
      const w = document.querySelectorAll(`.response-rocket-button[data-reaction="${m.reaction}"]`);
      for (let x = 0; x < w.length; x++)
        m.clicks && (w[x].querySelector("span.response-rocket-count").innerHTML = m.clicks);
    });
  }).catch((_) => console.error(_));
}
const $r = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>`, Nr = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
`, Tr = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
`, Lr = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
`;
var ut = { exports: {} };
(function(j, q) {
  (function(T) {
    j.exports = T();
  })(function() {
    var T = ["navigation", "request", "process", "log", "user", "state", "error", "manual"], _ = function(e, t, n) {
      for (var r = n, a = 0, o = e.length; a < o; a++)
        r = t(r, e[a], a, e);
      return r;
    }, m = function(e, t) {
      return _(e, function(n, r, a, o) {
        return t(r, a, o) ? n.concat(r) : n;
      }, []);
    }, w = function(e, t) {
      return _(e, function(n, r, a, o) {
        return n === !0 || r === t;
      }, !1);
    }, x = function(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    }, M = !{
      toString: null
    }.propertyIsEnumerable("toString"), A = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], k = function(e) {
      var t = [], n;
      for (n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
      if (!M)
        return t;
      for (var r = 0, a = A.length; r < a; r++)
        Object.prototype.hasOwnProperty.call(e, A[r]) && t.push(A[r]);
      return t;
    }, I = function(e, t) {
      return e === void 0 && (e = 1), t === void 0 && (t = 1 / 0), function(n) {
        return typeof n == "number" && parseInt("" + n, 10) === n && n >= e && n <= t;
      };
    }, ae = function(e) {
      return typeof e == "function" || x(e) && m(e, function(t) {
        return typeof t == "function";
      }).length === e.length;
    }, V = function(e) {
      return typeof e == "string" && !!e.length;
    }, z = {}, Oe = function() {
      return {
        unhandledExceptions: !0,
        unhandledRejections: !0
      };
    };
    z.schema = {
      apiKey: {
        defaultValue: function() {
          return null;
        },
        message: "is required",
        validate: V
      },
      appVersion: {
        defaultValue: function() {
        },
        message: "should be a string",
        validate: function(e) {
          return e === void 0 || V(e);
        }
      },
      appType: {
        defaultValue: function() {
        },
        message: "should be a string",
        validate: function(e) {
          return e === void 0 || V(e);
        }
      },
      autoDetectErrors: {
        defaultValue: function() {
          return !0;
        },
        message: "should be true|false",
        validate: function(e) {
          return e === !0 || e === !1;
        }
      },
      enabledErrorTypes: {
        defaultValue: function() {
          return Oe();
        },
        message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
        allowPartialObject: !0,
        validate: function(e) {
          if (typeof e != "object" || !e)
            return !1;
          var t = k(e), n = k(Oe());
          return !(m(t, function(r) {
            return w(n, r);
          }).length < t.length || m(k(e), function(r) {
            return typeof e[r] != "boolean";
          }).length > 0);
        }
      },
      onError: {
        defaultValue: function() {
          return [];
        },
        message: "should be a function or array of functions",
        validate: ae
      },
      onSession: {
        defaultValue: function() {
          return [];
        },
        message: "should be a function or array of functions",
        validate: ae
      },
      onBreadcrumb: {
        defaultValue: function() {
          return [];
        },
        message: "should be a function or array of functions",
        validate: ae
      },
      endpoints: {
        defaultValue: function() {
          return {
            notify: "https://notify.bugsnag.com",
            sessions: "https://sessions.bugsnag.com"
          };
        },
        message: "should be an object containing endpoint URLs { notify, sessions }",
        validate: function(e) {
          return e && typeof e == "object" && V(e.notify) && V(e.sessions) && m(k(e), function(t) {
            return !w(["notify", "sessions"], t);
          }).length === 0;
        }
      },
      autoTrackSessions: {
        defaultValue: function(e) {
          return !0;
        },
        message: "should be true|false",
        validate: function(e) {
          return e === !0 || e === !1;
        }
      },
      enabledReleaseStages: {
        defaultValue: function() {
          return null;
        },
        message: "should be an array of strings",
        validate: function(e) {
          return e === null || x(e) && m(e, function(t) {
            return typeof t == "string";
          }).length === e.length;
        }
      },
      releaseStage: {
        defaultValue: function() {
          return "production";
        },
        message: "should be a string",
        validate: function(e) {
          return typeof e == "string" && e.length;
        }
      },
      maxBreadcrumbs: {
        defaultValue: function() {
          return 25;
        },
        message: "should be a number \u2264100",
        validate: function(e) {
          return I(0, 100)(e);
        }
      },
      enabledBreadcrumbTypes: {
        defaultValue: function() {
          return T;
        },
        message: "should be null or a list of available breadcrumb types (" + T.join(",") + ")",
        validate: function(e) {
          return e === null || x(e) && _(e, function(t, n) {
            return t === !1 ? t : w(T, n);
          }, !0);
        }
      },
      context: {
        defaultValue: function() {
        },
        message: "should be a string",
        validate: function(e) {
          return e === void 0 || typeof e == "string";
        }
      },
      user: {
        defaultValue: function() {
          return {};
        },
        message: "should be an object with { id, email, name } properties",
        validate: function(e) {
          return e === null || e && _(k(e), function(t, n) {
            return t && w(["id", "email", "name"], n);
          }, !0);
        }
      },
      metadata: {
        defaultValue: function() {
          return {};
        },
        message: "should be an object",
        validate: function(e) {
          return typeof e == "object" && e !== null;
        }
      },
      logger: {
        defaultValue: function() {
        },
        message: "should be null or an object with methods { debug, info, warn, error }",
        validate: function(e) {
          return !e || e && _(["debug", "info", "warn", "error"], function(t, n) {
            return t && typeof e[n] == "function";
          }, !0);
        }
      },
      redactedKeys: {
        defaultValue: function() {
          return ["password"];
        },
        message: "should be an array of strings|regexes",
        validate: function(e) {
          return x(e) && e.length === m(e, function(t) {
            return typeof t == "string" || t && typeof t.test == "function";
          }).length;
        }
      },
      plugins: {
        defaultValue: function() {
          return [];
        },
        message: "should be an array of plugin objects",
        validate: function(e) {
          return x(e) && e.length === m(e, function(t) {
            return t && typeof t == "object" && typeof t.load == "function";
          }).length;
        }
      },
      featureFlags: {
        defaultValue: function() {
          return [];
        },
        message: 'should be an array of objects that have a "name" property',
        validate: function(e) {
          return x(e) && e.length === m(e, function(t) {
            return t && typeof t == "object" && typeof t.name == "string";
          }).length;
        }
      }
    };
    var S = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }, $ = function(e, t) {
      return _(e, function(n, r, a, o) {
        return n.concat(t(r, a, o));
      }, []);
    };
    function oe() {
      return oe = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }, oe.apply(this, arguments);
    }
    var ie = z.schema, ft = {
      releaseStage: S({}, ie.releaseStage, {
        defaultValue: function() {
          return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
        }
      }),
      appType: oe({}, ie.appType, {
        defaultValue: function() {
          return "browser";
        }
      }),
      logger: S({}, ie.logger, {
        defaultValue: function() {
          return typeof console < "u" && typeof console.debug == "function" ? lt() : void 0;
        }
      })
    }, lt = function() {
      var e = {}, t = console.log;
      return $(["debug", "info", "warn", "error"], function(n) {
        var r = console[n];
        e[n] = typeof r == "function" ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]");
      }), e;
    }, dt = /* @__PURE__ */ function() {
      function e(n, r, a, o) {
        o === void 0 && (o = new Date()), this.type = a, this.message = n, this.metadata = r, this.timestamp = o;
      }
      var t = e.prototype;
      return t.toJSON = function() {
        return {
          type: this.type,
          name: this.message,
          timestamp: this.timestamp,
          metaData: this.metadata
        };
      }, e;
    }(), se = dt, G = {};
    (function(e, t) {
      typeof G == "object" ? G = t() : e.StackFrame = t();
    })(this, function() {
      function e(c) {
        return !isNaN(parseFloat(c)) && isFinite(c);
      }
      function t(c) {
        return c.charAt(0).toUpperCase() + c.substring(1);
      }
      function n(c) {
        return function() {
          return this[c];
        };
      }
      var r = ["isConstructor", "isEval", "isNative", "isToplevel"], a = ["columnNumber", "lineNumber"], o = ["fileName", "functionName", "source"], i = ["args"], u = r.concat(a, o, i);
      function s(c) {
        if (c instanceof Object)
          for (var h = 0; h < u.length; h++)
            c.hasOwnProperty(u[h]) && c[u[h]] !== void 0 && this["set" + t(u[h])](c[u[h]]);
      }
      s.prototype = {
        getArgs: function() {
          return this.args;
        },
        setArgs: function(c) {
          if (Object.prototype.toString.call(c) !== "[object Array]")
            throw new TypeError("Args must be an Array");
          this.args = c;
        },
        getEvalOrigin: function() {
          return this.evalOrigin;
        },
        setEvalOrigin: function(c) {
          if (c instanceof s)
            this.evalOrigin = c;
          else if (c instanceof Object)
            this.evalOrigin = new s(c);
          else
            throw new TypeError("Eval Origin must be an Object or StackFrame");
        },
        toString: function() {
          var c = this.getFunctionName() || "{anonymous}", h = "(" + (this.getArgs() || []).join(",") + ")", v = this.getFileName() ? "@" + this.getFileName() : "", y = e(this.getLineNumber()) ? ":" + this.getLineNumber() : "", d = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
          return c + h + v + y + d;
        }
      };
      for (var l = 0; l < r.length; l++)
        s.prototype["get" + t(r[l])] = n(r[l]), s.prototype["set" + t(r[l])] = function(c) {
          return function(h) {
            this[c] = Boolean(h);
          };
        }(r[l]);
      for (var f = 0; f < a.length; f++)
        s.prototype["get" + t(a[f])] = n(a[f]), s.prototype["set" + t(a[f])] = function(c) {
          return function(h) {
            if (!e(h))
              throw new TypeError(c + " must be a Number");
            this[c] = Number(h);
          };
        }(a[f]);
      for (var g = 0; g < o.length; g++)
        s.prototype["get" + t(o[g])] = n(o[g]), s.prototype["set" + t(o[g])] = function(c) {
          return function(h) {
            this[c] = String(h);
          };
        }(o[g]);
      return s;
    });
    var ue = {};
    (function(e, t) {
      typeof ue == "object" ? ue = t(G) : e.ErrorStackParser = t(e.StackFrame);
    })(this, function(t) {
      var n = /(^|@)\S+\:\d+/, r = /^\s*at .*(\S+\:\d+|\(native\))/m, a = /^(eval@)?(\[native code\])?$/;
      return {
        parse: function(i) {
          if (typeof i.stacktrace < "u" || typeof i["opera#sourceloc"] < "u")
            return this.parseOpera(i);
          if (i.stack && i.stack.match(r))
            return this.parseV8OrIE(i);
          if (i.stack)
            return this.parseFFOrSafari(i);
          throw new Error("Cannot parse given Error object");
        },
        extractLocation: function(i) {
          if (i.indexOf(":") === -1)
            return [i];
          var u = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/, s = u.exec(i.replace(/[\(\)]/g, ""));
          return [s[1], s[2] || void 0, s[3] || void 0];
        },
        parseV8OrIE: function(i) {
          var u = i.stack.split(`
`).filter(function(s) {
            return !!s.match(r);
          }, this);
          return u.map(function(s) {
            s.indexOf("(eval ") > -1 && (s = s.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
            var l = s.replace(/^\s+/, "").replace(/\(eval code/g, "("), f = l.match(/ (\((.+):(\d+):(\d+)\)$)/);
            l = f ? l.replace(f[0], "") : l;
            var g = l.split(/\s+/).slice(1), c = this.extractLocation(f ? f[1] : g.pop()), h = g.join(" ") || void 0, v = ["eval", "<anonymous>"].indexOf(c[0]) > -1 ? void 0 : c[0];
            return new t({
              functionName: h,
              fileName: v,
              lineNumber: c[1],
              columnNumber: c[2],
              source: s
            });
          }, this);
        },
        parseFFOrSafari: function(i) {
          var u = i.stack.split(`
`).filter(function(s) {
            return !s.match(a);
          }, this);
          return u.map(function(s) {
            if (s.indexOf(" > eval") > -1 && (s = s.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), s.indexOf("@") === -1 && s.indexOf(":") === -1)
              return new t({
                functionName: s
              });
            var l = /((.*".+"[^@]*)?[^@]*)(?:@)/, f = s.match(l), g = f && f[1] ? f[1] : void 0, c = this.extractLocation(s.replace(l, ""));
            return new t({
              functionName: g,
              fileName: c[0],
              lineNumber: c[1],
              columnNumber: c[2],
              source: s
            });
          }, this);
        },
        parseOpera: function(i) {
          return !i.stacktrace || i.message.indexOf(`
`) > -1 && i.message.split(`
`).length > i.stacktrace.split(`
`).length ? this.parseOpera9(i) : i.stack ? this.parseOpera11(i) : this.parseOpera10(i);
        },
        parseOpera9: function(i) {
          for (var u = /Line (\d+).*script (?:in )?(\S+)/i, s = i.message.split(`
`), l = [], f = 2, g = s.length; f < g; f += 2) {
            var c = u.exec(s[f]);
            c && l.push(new t({
              fileName: c[2],
              lineNumber: c[1],
              source: s[f]
            }));
          }
          return l;
        },
        parseOpera10: function(i) {
          for (var u = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, s = i.stacktrace.split(`
`), l = [], f = 0, g = s.length; f < g; f += 2) {
            var c = u.exec(s[f]);
            c && l.push(new t({
              functionName: c[3] || void 0,
              fileName: c[2],
              lineNumber: c[1],
              source: s[f]
            }));
          }
          return l;
        },
        parseOpera11: function(i) {
          var u = i.stack.split(`
`).filter(function(s) {
            return !!s.match(n) && !s.match(/^Error created at/);
          }, this);
          return u.map(function(s) {
            var l = s.split("@"), f = this.extractLocation(l.pop()), g = l.shift() || "", c = g.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0, h;
            g.match(/\(([^\)]*)\)/) && (h = g.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
            var v = h === void 0 || h === "[arguments not available]" ? void 0 : h.split(",");
            return new t({
              functionName: c,
              args: v,
              fileName: f[0],
              lineNumber: f[1],
              columnNumber: f[2],
              source: s
            });
          }, this);
        }
      };
    });
    var xe = ue, J = function(e, t, n, r) {
      var a = r && r.redactedKeys ? r.redactedKeys : [], o = r && r.redactedPaths ? r.redactedPaths : [];
      return JSON.stringify(Et(e, a, o), t, n);
    }, gt = 20, ht = 25e3, pt = 8, W = "...";
    function vt(e) {
      return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e));
    }
    function ke(e) {
      return "[Throws: " + (e ? e.message : "?") + "]";
    }
    function _t(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return !0;
      return !1;
    }
    function mt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        if (t.indexOf(e[n]) === 0)
          return !0;
      return !1;
    }
    function yt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        if (typeof e[n] == "string" && e[n].toLowerCase() === t.toLowerCase() || e[n] && typeof e[n].test == "function" && e[n].test(t))
          return !0;
      return !1;
    }
    function bt(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    }
    function St(e, t) {
      try {
        return e[t];
      } catch (n) {
        return ke(n);
      }
    }
    function Et(e, t, n) {
      var r = [], a = 0;
      function o(i, u) {
        function s() {
          return u.length > pt && a > ht;
        }
        if (a++, u.length > gt || s())
          return W;
        if (i === null || typeof i != "object")
          return i;
        if (_t(r, i))
          return "[Circular]";
        if (r.push(i), typeof i.toJSON == "function")
          try {
            a--;
            var l = o(i.toJSON(), u);
            return r.pop(), l;
          } catch (p) {
            return ke(p);
          }
        var f = vt(i);
        if (f) {
          a--;
          var g = o({
            name: i.name,
            message: i.message
          }, u);
          return r.pop(), g;
        }
        if (bt(i)) {
          for (var c = [], h = 0, v = i.length; h < v; h++) {
            if (s()) {
              c.push(W);
              break;
            }
            c.push(o(i[h], u.concat("[]")));
          }
          return r.pop(), c;
        }
        var y = {};
        try {
          for (var d in i)
            if (!!Object.prototype.hasOwnProperty.call(i, d)) {
              if (mt(n, u.join(".")) && yt(t, d)) {
                y[d] = "[REDACTED]";
                continue;
              }
              if (s()) {
                y[d] = W;
                break;
              }
              y[d] = o(St(i, d), u.concat(d));
            }
        } catch {
        }
        return r.pop(), y;
      }
      return o(e, []);
    }
    function $e(e, t, n, r) {
      if (typeof n == "string") {
        r === void 0 ? r = null : r !== null && typeof r != "string" && (r = J(r));
        var a = t[n];
        if (typeof a == "number") {
          e[a] = {
            name: n,
            variant: r
          };
          return;
        }
        e.push({
          name: n,
          variant: r
        }), t[n] = e.length - 1;
      }
    }
    function wt(e, t, n) {
      if (!!x(t)) {
        for (var r = 0; r < t.length; ++r) {
          var a = t[r];
          a === null || typeof a != "object" || $e(e, n, a.name, a.variant);
        }
        return e;
      }
    }
    function Ot(e) {
      return $(m(e, Boolean), function(t) {
        var n = t.name, r = t.variant, a = {
          featureFlag: n
        };
        return typeof r == "string" && (a.variant = r), a;
      });
    }
    function xt(e, t, n) {
      var r = t[n];
      typeof r == "number" && (e[r] = null, delete t[n]);
    }
    var R = {
      add: $e,
      clear: xt,
      merge: wt,
      toEventApi: Ot
    }, Y = function(e) {
      return !!e && (!!e.stack || !!e.stacktrace || !!e["opera#sourceloc"]) && typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) == "string" && e.stack !== e.name + ": " + e.message;
    }, kt = $t;
    function $t(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
          return !0;
        case "[object Exception]":
          return !0;
        case "[object DOMException]":
          return !0;
        default:
          return e instanceof Error;
      }
    }
    var Q = kt, Nt = function(e, t, n, r) {
      var a;
      if (!!t) {
        var o;
        if (n === null)
          return Ne(e, t);
        typeof n == "object" && (o = n), typeof n == "string" && (o = (a = {}, a[n] = r, a)), o && (e[t] || (e[t] = {}), e[t] = S({}, e[t], o));
      }
    }, Tt = function(e, t, n) {
      if (typeof t == "string") {
        if (!n)
          return e[t];
        if (e[t])
          return e[t][n];
      }
    }, Ne = function(e, t, n) {
      if (typeof t == "string") {
        if (!n) {
          delete e[t];
          return;
        }
        e[t] && delete e[t][n];
      }
    }, D = {
      add: Nt,
      get: Tt,
      clear: Ne
    }, ce = {};
    (function(e, t) {
      typeof ce == "object" ? ce = t(G) : e.StackGenerator = t(e.StackFrame);
    })(this, function(e) {
      return {
        backtrace: function(n) {
          var r = [], a = 10;
          typeof n == "object" && typeof n.maxStackSize == "number" && (a = n.maxStackSize);
          for (var o = arguments.callee; o && r.length < a && o.arguments; ) {
            for (var i = new Array(o.arguments.length), u = 0; u < i.length; ++u)
              i[u] = o.arguments[u];
            /function(?:\s+([\w$]+))+\s*\(/.test(o.toString()) ? r.push(new e({
              functionName: RegExp.$1 || void 0,
              args: i
            })) : r.push(new e({
              args: i
            }));
            try {
              o = o.caller;
            } catch {
              break;
            }
          }
          return r;
        }
      };
    });
    var B = /* @__PURE__ */ function() {
      function e(n, r, a, o, i) {
        a === void 0 && (a = []), o === void 0 && (o = Bt()), this.apiKey = void 0, this.context = void 0, this.groupingHash = void 0, this.originalError = i, this._handledState = o, this.severity = this._handledState.severity, this.unhandled = this._handledState.unhandled, this.app = {}, this.device = {}, this.request = {}, this.breadcrumbs = [], this.threads = [], this._metadata = {}, this._features = [], this._featuresIndex = {}, this._user = {}, this._session = void 0, this.errors = [Le(n, r, e.__type, a)];
      }
      var t = e.prototype;
      return t.addMetadata = function(r, a, o) {
        return D.add(this._metadata, r, a, o);
      }, t.getMetadata = function(r, a) {
        return D.get(this._metadata, r, a);
      }, t.clearMetadata = function(r, a) {
        return D.clear(this._metadata, r, a);
      }, t.addFeatureFlag = function(r, a) {
        a === void 0 && (a = null), R.add(this._features, this._featuresIndex, r, a);
      }, t.addFeatureFlags = function(r) {
        R.merge(this._features, r, this._featuresIndex);
      }, t.getFeatureFlags = function() {
        return R.toEventApi(this._features);
      }, t.clearFeatureFlag = function(r) {
        R.clear(this._features, this._featuresIndex, r);
      }, t.clearFeatureFlags = function() {
        this._features = [], this._featuresIndex = {};
      }, t.getUser = function() {
        return this._user;
      }, t.setUser = function(r, a, o) {
        this._user = {
          id: r,
          email: a,
          name: o
        };
      }, t.toJSON = function() {
        return {
          payloadVersion: "4",
          exceptions: $(this.errors, function(r) {
            return S({}, r, {
              message: r.errorMessage
            });
          }),
          severity: this.severity,
          unhandled: this._handledState.unhandled,
          severityReason: this._handledState.severityReason,
          app: this.app,
          device: this.device,
          request: this.request,
          breadcrumbs: this.breadcrumbs,
          context: this.context,
          groupingHash: this.groupingHash,
          metaData: this._metadata,
          user: this._user,
          session: this._session,
          featureFlags: this.getFeatureFlags()
        };
      }, e;
    }(), Lt = function(e) {
      var t = {
        file: e.fileName,
        method: Mt(e.functionName),
        lineNumber: e.lineNumber,
        columnNumber: e.columnNumber,
        code: void 0,
        inProject: void 0
      };
      return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t;
    }, Mt = function(e) {
      return /^global code$/i.test(e) ? "global code" : e;
    }, Bt = function() {
      return {
        unhandled: !1,
        severity: "warning",
        severityReason: {
          type: "handledException"
        }
      };
    }, Te = function(e) {
      return typeof e == "string" ? e : "";
    };
    function Le(e, t, n, r) {
      return {
        errorClass: Te(e),
        errorMessage: Te(t),
        type: n,
        stacktrace: _(r, function(a, o) {
          var i = Lt(o);
          try {
            return JSON.stringify(i) === "{}" ? a : a.concat(i);
          } catch {
            return a;
          }
        }, [])
      };
    }
    function Me(e) {
      return e.cause ? [e].concat(Me(e.cause)) : [e];
    }
    B.getStacktrace = function(e, t, n) {
      if (Y(e))
        return xe.parse(e).slice(t);
      try {
        return m(ce.backtrace(), function(r) {
          return (r.functionName || "").indexOf("StackGenerator$$") === -1;
        }).slice(1 + n);
      } catch {
        return [];
      }
    }, B.create = function(e, t, n, r, a, o) {
      a === void 0 && (a = 0);
      var i = Ce(e, t, r, o), u = i[0], s = i[1], l;
      try {
        var f = B.getStacktrace(
          u,
          s > 0 ? 1 + s + a : 0,
          1 + a
        );
        l = new B(u.name, u.message, f, n, e);
      } catch {
        l = new B(u.name, u.message, [], n, e);
      }
      if (u.name === "InvalidError" && l.addMetadata("" + r, "non-error parameter", Be(e)), u.cause) {
        var g, c = Me(u).slice(1), h = $(c, function(v) {
          var y = Q(v) && Y(v) ? xe.parse(v) : [], d = Ce(v, !0, "error cause"), p = d[0];
          return p.name === "InvalidError" && l.addMetadata("error cause", Be(v)), Le(p.name, p.message, B.__type, y);
        });
        (g = l.errors).push.apply(g, h);
      }
      return l;
    };
    var Be = function(e) {
      return e === null ? "null" : e === void 0 ? "undefined" : e;
    }, Ce = function(e, t, n, r) {
      var a, o = 0, i = function(u) {
        var s = n === "error cause" ? "was" : "received";
        r && r.warn(n + " " + s + ' a non-error: "' + u + '"');
        var l = new Error(n + " " + s + ' a non-error. See "' + n + '" tab for more detail.');
        return l.name = "InvalidError", l;
      };
      if (!t)
        Q(e) ? a = e : (a = i(typeof e), o += 2);
      else
        switch (typeof e) {
          case "string":
          case "number":
          case "boolean":
            a = new Error(String(e)), o += 1;
            break;
          case "function":
            a = i("function"), o += 2;
            break;
          case "object":
            e !== null && Q(e) ? a = e : e !== null && Ct(e) ? (a = new Error(e.message || e.errorMessage), a.name = e.name || e.errorClass, o += 1) : (a = i(e === null ? "null" : "unsupported object"), o += 2);
            break;
          default:
            a = i("nothing"), o += 2;
        }
      if (!Y(a))
        try {
          throw a;
        } catch (u) {
          Y(u) && (a = u, o = 1);
        }
      return [a, o];
    };
    B.__type = "browserjs";
    var Ct = function(e) {
      return (typeof e.name == "string" || typeof e.errorClass == "string") && (typeof e.message == "string" || typeof e.errorMessage == "string");
    }, fe = B, At = function(e, t, n) {
      var r = 0, a = function() {
        if (r >= e.length)
          return n(null, !0);
        t(e[r], function(o, i) {
          if (o)
            return n(o);
          if (i === !1)
            return n(null, !1);
          r++, a();
        });
      };
      a();
    }, Rt = function(e, t, n, r) {
      var a = function(o, i) {
        if (typeof o != "function")
          return i(null);
        try {
          if (o.length !== 2) {
            var u = o(t);
            return u && typeof u.then == "function" ? u.then(
              function(s) {
                return setTimeout(function() {
                  return i(null, s);
                });
              },
              function(s) {
                setTimeout(function() {
                  return n(s), i(null, !0);
                });
              }
            ) : i(null, u);
          }
          o(t, function(s, l) {
            if (s)
              return n(s), i(null);
            i(null, l);
          });
        } catch (s) {
          n(s), i(null);
        }
      };
      At(e, a, r);
    }, Ae = function(e, t, n, r) {
      for (var a = !1, o = e.slice(); !a && o.length; )
        try {
          a = o.pop()(t) === !1;
        } catch (i) {
          r.error("Error occurred in " + n + " callback, continuing anyway\u2026"), r.error(i);
        }
      return a;
    }, le = function(t, n) {
      var r = "000000000" + t;
      return r.substr(r.length - n);
    }, Re = typeof window == "object" ? window : self, Pe = 0;
    for (var Pt in Re)
      Object.hasOwnProperty.call(Re, Pt) && Pe++;
    var jt = navigator.mimeTypes ? navigator.mimeTypes.length : 0, It = le((jt + navigator.userAgent.length).toString(36) + Pe.toString(36), 4), je = function() {
      return It;
    }, U = 0, de = 4, Z = 36, Ie = Math.pow(Z, de);
    function De() {
      return le((Math.random() * Ie << 0).toString(Z), de);
    }
    function Dt() {
      return U = U < Ie ? U : 0, U++, U - 1;
    }
    function Fe() {
      var e = "c", t = new Date().getTime().toString(Z), n = le(Dt().toString(Z), de), r = je(), a = De() + De();
      return e + t + n + r + a;
    }
    Fe.fingerprint = je;
    var Ft = Fe, Ht = /* @__PURE__ */ function() {
      function e() {
        this.id = Ft(), this.startedAt = new Date(), this._handled = 0, this._unhandled = 0, this._user = {}, this.app = {}, this.device = {};
      }
      var t = e.prototype;
      return t.getUser = function() {
        return this._user;
      }, t.setUser = function(r, a, o) {
        this._user = {
          id: r,
          email: a,
          name: o
        };
      }, t.toJSON = function() {
        return {
          id: this.id,
          startedAt: this.startedAt,
          events: {
            handled: this._handled,
            unhandled: this._unhandled
          }
        };
      }, t._track = function(r) {
        this[r._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
      }, e;
    }(), ge = Ht, qt = R.add, Vt = R.clear, he = R.merge, C = function() {
    }, Ut = /* @__PURE__ */ function() {
      function e(n, r, a, o) {
        var i = this;
        r === void 0 && (r = z.schema), a === void 0 && (a = []), this._notifier = o, this._config = {}, this._schema = r, this._delivery = {
          sendSession: C,
          sendEvent: C
        }, this._logger = {
          debug: C,
          info: C,
          warn: C,
          error: C
        }, this._plugins = {}, this._breadcrumbs = [], this._session = null, this._metadata = {}, this._featuresIndex = {}, this._features = [], this._context = void 0, this._user = {}, this._cbs = {
          e: [],
          s: [],
          sp: [],
          b: []
        }, this.Client = e, this.Event = fe, this.Breadcrumb = se, this.Session = ge, this._config = this._configure(n, a), $(a.concat(this._config.plugins), function(l) {
          l && i._loadPlugin(l);
        }), this._depth = 1;
        var u = this, s = this.notify;
        this.notify = function() {
          return s.apply(u, arguments);
        };
      }
      var t = e.prototype;
      return t.addMetadata = function(r, a, o) {
        return D.add(this._metadata, r, a, o);
      }, t.getMetadata = function(r, a) {
        return D.get(this._metadata, r, a);
      }, t.clearMetadata = function(r, a) {
        return D.clear(this._metadata, r, a);
      }, t.addFeatureFlag = function(r, a) {
        a === void 0 && (a = null), qt(this._features, this._featuresIndex, r, a);
      }, t.addFeatureFlags = function(r) {
        he(this._features, r, this._featuresIndex);
      }, t.clearFeatureFlag = function(r) {
        Vt(this._features, this._featuresIndex, r);
      }, t.clearFeatureFlags = function() {
        this._features = [], this._featuresIndex = {};
      }, t.getContext = function() {
        return this._context;
      }, t.setContext = function(r) {
        this._context = r;
      }, t._configure = function(r, a) {
        var o = _(a, function(l, f) {
          return f && f.configSchema ? S({}, l, f.configSchema) : l;
        }, this._schema), i = _(k(o), function(l, f) {
          var g = o[f].defaultValue(r[f]);
          if (r[f] !== void 0) {
            var c = o[f].validate(r[f]);
            c ? o[f].allowPartialObject ? l.config[f] = S(g, r[f]) : l.config[f] = r[f] : (l.errors[f] = o[f].message, l.config[f] = g);
          } else
            l.config[f] = g;
          return l;
        }, {
          errors: {},
          config: {}
        }), u = i.errors, s = i.config;
        if (o.apiKey) {
          if (!s.apiKey)
            throw new Error("No Bugsnag API Key set");
          /^[0-9a-f]{32}$/i.test(s.apiKey) || (u.apiKey = "should be a string of 32 hexadecimal characters");
        }
        return this._metadata = S({}, s.metadata), he(this._features, s.featureFlags, this._featuresIndex), this._user = S({}, s.user), this._context = s.context, s.logger && (this._logger = s.logger), s.onError && (this._cbs.e = this._cbs.e.concat(s.onError)), s.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(s.onBreadcrumb)), s.onSession && (this._cbs.s = this._cbs.s.concat(s.onSession)), k(u).length && this._logger.warn(Kt(u, r)), s;
      }, t.getUser = function() {
        return this._user;
      }, t.setUser = function(r, a, o) {
        this._user = {
          id: r,
          email: a,
          name: o
        };
      }, t._loadPlugin = function(r) {
        var a = r.load(this);
        return r.name && (this._plugins["~" + r.name + "~"] = a), this;
      }, t.getPlugin = function(r) {
        return this._plugins["~" + r + "~"];
      }, t._setDelivery = function(r) {
        this._delivery = r(this);
      }, t.startSession = function() {
        var r = new ge();
        r.app.releaseStage = this._config.releaseStage, r.app.version = this._config.appVersion, r.app.type = this._config.appType, r._user = S({}, this._user);
        var a = Ae(this._cbs.s, r, "onSession", this._logger);
        return a ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, r);
      }, t.addOnError = function(r, a) {
        a === void 0 && (a = !1), this._cbs.e[a ? "unshift" : "push"](r);
      }, t.removeOnError = function(r) {
        this._cbs.e = m(this._cbs.e, function(a) {
          return a !== r;
        });
      }, t._addOnSessionPayload = function(r) {
        this._cbs.sp.push(r);
      }, t.addOnSession = function(r) {
        this._cbs.s.push(r);
      }, t.removeOnSession = function(r) {
        this._cbs.s = m(this._cbs.s, function(a) {
          return a !== r;
        });
      }, t.addOnBreadcrumb = function(r, a) {
        a === void 0 && (a = !1), this._cbs.b[a ? "unshift" : "push"](r);
      }, t.removeOnBreadcrumb = function(r) {
        this._cbs.b = m(this._cbs.b, function(a) {
          return a !== r;
        });
      }, t.pauseSession = function() {
        return this._sessionDelegate.pauseSession(this);
      }, t.resumeSession = function() {
        return this._sessionDelegate.resumeSession(this);
      }, t.leaveBreadcrumb = function(r, a, o) {
        if (r = typeof r == "string" ? r : "", o = typeof o == "string" && w(T, o) ? o : "manual", a = typeof a == "object" && a !== null ? a : {}, !!r) {
          var i = new se(r, a, o), u = Ae(this._cbs.b, i, "onBreadcrumb", this._logger);
          if (u) {
            this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");
            return;
          }
          this._breadcrumbs.push(i), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs));
        }
      }, t._isBreadcrumbTypeEnabled = function(r) {
        var a = this._config.enabledBreadcrumbTypes;
        return a === null || w(a, r);
      }, t.notify = function(r, a, o) {
        o === void 0 && (o = C);
        var i = fe.create(r, !0, void 0, "notify()", this._depth + 1, this._logger);
        this._notify(i, a, o);
      }, t._notify = function(r, a, o) {
        var i = this;
        if (o === void 0 && (o = C), r.app = S({}, r.app, {
          releaseStage: this._config.releaseStage,
          version: this._config.appVersion,
          type: this._config.appType
        }), r.context = r.context || this._context, r._metadata = S({}, r._metadata, this._metadata), r._user = S({}, r._user, this._user), r.breadcrumbs = this._breadcrumbs.slice(), he(r._features, this._features, r._featuresIndex), this._config.enabledReleaseStages !== null && !w(this._config.enabledReleaseStages, this._config.releaseStage))
          return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), o(null, r);
        var u = r.severity, s = function(f) {
          i._logger.error("Error occurred in onError callback, continuing anyway\u2026"), i._logger.error(f);
        }, l = [].concat(this._cbs.e).concat(a);
        Rt(l, r, s, function(f, g) {
          if (f && s(f), !g)
            return i._logger.debug("Event not sent due to onError callback"), o(null, r);
          i._isBreadcrumbTypeEnabled("error") && e.prototype.leaveBreadcrumb.call(i, r.errors[0].errorClass, {
            errorClass: r.errors[0].errorClass,
            errorMessage: r.errors[0].errorMessage,
            severity: r.severity
          }, "error"), u !== r.severity && (r._handledState.severityReason = {
            type: "userCallbackSetSeverity"
          }), r.unhandled !== r._handledState.unhandled && (r._handledState.severityReason.unhandledOverridden = !0, r._handledState.unhandled = r.unhandled), i._session && (i._session._track(r), r._session = i._session), i._delivery.sendEvent({
            apiKey: r.apiKey || i._config.apiKey,
            notifier: i._notifier,
            events: [r]
          }, function(c) {
            return o(c, r);
          });
        });
      }, e;
    }(), Kt = function(e, t) {
      var n = new Error(`Invalid configuration
` + $(k(e), function(r) {
        return "  - " + r + " " + e[r] + ", got " + Xt(t[r]);
      }).join(`

`));
      return n;
    }, Xt = function(e) {
      switch (typeof e) {
        case "string":
        case "number":
        case "object":
          return JSON.stringify(e);
        default:
          return String(e);
      }
    }, pe = Ut, F = {}, He = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
    F.event = function(e, t) {
      var n = J(e, null, null, {
        redactedPaths: He,
        redactedKeys: t
      });
      if (n.length > 1e6 && (e.events[0]._metadata = {
        notifier: `WARNING!
Serialized payload was ` + n.length / 1e6 + `MB (limit = 1MB)
metadata was removed`
      }, n = J(e, null, null, {
        redactedPaths: He,
        redactedKeys: t
      }), n.length > 1e6))
        throw new Error("payload exceeded 1MB limit");
      return n;
    }, F.session = function(e, t) {
      var n = J(e, null, null);
      if (n.length > 1e6)
        throw new Error("payload exceeded 1MB limit");
      return n;
    };
    var ve = {};
    ve = function(e, t) {
      return t === void 0 && (t = window), {
        sendEvent: function(n, r) {
          r === void 0 && (r = function() {
          });
          var a = qe(e._config, "notify", "4", t), o = new t.XDomainRequest();
          o.onload = function() {
            r(null);
          }, o.open("POST", a), setTimeout(function() {
            try {
              o.send(F.event(n, e._config.redactedKeys));
            } catch (i) {
              e._logger.error(i), r(i);
            }
          }, 0);
        },
        sendSession: function(n, r) {
          r === void 0 && (r = function() {
          });
          var a = qe(e._config, "sessions", "1", t), o = new t.XDomainRequest();
          o.onload = function() {
            r(null);
          }, o.open("POST", a), setTimeout(function() {
            try {
              o.send(F.session(n, e._config.redactedKeys));
            } catch (i) {
              e._logger.error(i), r(i);
            }
          }, 0);
        }
      };
    };
    var qe = function(e, t, n, r) {
      var a = JSON.parse(JSON.stringify(new Date())), o = zt(e.endpoints[t], r.location.protocol);
      return o + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(a);
    }, zt = ve._matchPageProtocol = function(e, t) {
      return t === "http:" ? e.replace(/^https:/, "http:") : e;
    }, Gt = function(e, t) {
      return t === void 0 && (t = window), {
        sendEvent: function(n, r) {
          r === void 0 && (r = function() {
          });
          try {
            var a = e._config.endpoints.notify, o = new t.XMLHttpRequest();
            o.onreadystatechange = function() {
              o.readyState === t.XMLHttpRequest.DONE && r(null);
            }, o.open("POST", a), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", n.apiKey || e._config.apiKey), o.setRequestHeader("Bugsnag-Payload-Version", "4"), o.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()), o.send(F.event(n, e._config.redactedKeys));
          } catch (i) {
            e._logger.error(i);
          }
        },
        sendSession: function(n, r) {
          r === void 0 && (r = function() {
          });
          try {
            var a = e._config.endpoints.sessions, o = new t.XMLHttpRequest();
            o.onreadystatechange = function() {
              o.readyState === t.XMLHttpRequest.DONE && r(null);
            }, o.open("POST", a), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey), o.setRequestHeader("Bugsnag-Payload-Version", "1"), o.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()), o.send(F.session(n, e._config.redactedKeys));
          } catch (i) {
            e._logger.error(i);
          }
        }
      };
    }, Ve = new Date(), Jt = function() {
      Ve = new Date();
    }, Wt = {
      name: "appDuration",
      load: function(e) {
        return e.addOnError(function(t) {
          var n = new Date();
          t.app.duration = n - Ve;
        }, !0), {
          reset: Jt
        };
      }
    }, Yt = function(e) {
      return e === void 0 && (e = window), {
        load: function(t) {
          t.addOnError(function(n) {
            n.context === void 0 && (n.context = e.location.pathname);
          }, !0);
        }
      };
    }, _e = function(t, n) {
      var r = "000000000" + t;
      return r.substr(r.length - n);
    }, Ue = typeof window == "object" ? window : self, Ke = 0;
    for (var Qt in Ue)
      Object.hasOwnProperty.call(Ue, Qt) && Ke++;
    var Zt = navigator.mimeTypes ? navigator.mimeTypes.length : 0, er = _e((Zt + navigator.userAgent.length).toString(36) + Ke.toString(36), 4), Xe = function() {
      return er;
    }, K = 0, me = 4, ee = 36, ze = Math.pow(ee, me);
    function Ge() {
      return _e((Math.random() * ze << 0).toString(ee), me);
    }
    function tr() {
      return K = K < ze ? K : 0, K++, K - 1;
    }
    function Je() {
      var e = "c", t = new Date().getTime().toString(ee), n = _e(tr().toString(ee), me), r = Xe(), a = Ge() + Ge();
      return e + t + n + r + a;
    }
    Je.fingerprint = Xe;
    var rr = Je, We = "bugsnag-anonymous-id", nr = function() {
      try {
        var e = window.localStorage, t = e.getItem(We);
        return t && /^c[a-z0-9]{20,32}$/.test(t) || (t = rr(), e.setItem(We, t)), t;
      } catch {
      }
    }, ar = function(e, t) {
      return e === void 0 && (e = navigator), t === void 0 && (t = window.screen), {
        load: function(n) {
          var r = {
            locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
            userAgent: e.userAgent
          };
          t && t.orientation && t.orientation.type ? r.orientation = t.orientation.type : r.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait", n._config.generateAnonymousId && (r.id = nr()), n.addOnSession(function(a) {
            a.device = S({}, a.device, r), n._config.collectUserIp || Ye(a);
          }), n.addOnError(function(a) {
            a.device = S({}, a.device, r, {
              time: new Date()
            }), n._config.collectUserIp || Ye(a);
          }, !0);
        },
        configSchema: {
          generateAnonymousId: {
            validate: function(n) {
              return n === !0 || n === !1;
            },
            defaultValue: function() {
              return !0;
            },
            message: "should be true|false"
          }
        }
      };
    }, Ye = function(e) {
      var t = e.getUser();
      (!t || !t.id) && e.setUser(e.device.id);
    }, or = function(e) {
      return e === void 0 && (e = window), {
        load: function(t) {
          t.addOnError(function(n) {
            n.request && n.request.url || (n.request = S({}, n.request, {
              url: e.location.href
            }));
          }, !0);
        }
      };
    }, ir = {
      load: function(e) {
        e._sessionDelegate = sr;
      }
    }, sr = {
      startSession: function(e, t) {
        var n = e;
        return n._session = t, n._pausedSession = null, n._config.enabledReleaseStages !== null && !w(n._config.enabledReleaseStages, n._config.releaseStage) ? (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), n) : (n._delivery.sendSession({
          notifier: n._notifier,
          device: t.device,
          app: t.app,
          sessions: [{
            id: t.id,
            startedAt: t.startedAt,
            user: t._user
          }]
        }), n);
      },
      resumeSession: function(e) {
        return e._session ? e : e._pausedSession ? (e._session = e._pausedSession, e._pausedSession = null, e) : e.startSession();
      },
      pauseSession: function(e) {
        e._pausedSession = e._session, e._session = null;
      }
    }, ur = {
      load: function(e) {
        e._config.collectUserIp || e.addOnError(function(t) {
          t._user && typeof t._user.id > "u" && delete t._user.id, t._user = S({
            id: "[REDACTED]"
          }, t._user), t.request = S({
            clientIp: "[REDACTED]"
          }, t.request);
        });
      },
      configSchema: {
        collectUserIp: {
          defaultValue: function() {
            return !0;
          },
          message: "should be true|false",
          validate: function(e) {
            return e === !0 || e === !1;
          }
        }
      }
    }, Qe = {};
    Qe.load = function(e) {
      var t = /^(local-)?dev(elopment)?$/.test(e._config.releaseStage);
      t || !e._isBreadcrumbTypeEnabled("log") || $(cr, function(n) {
        var r = console[n];
        console[n] = function() {
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
            o[i] = arguments[i];
          e.leaveBreadcrumb("Console output", _(o, function(u, s, l) {
            var f = "[Unknown value]";
            try {
              f = String(s);
            } catch {
            }
            if (f === "[object Object]")
              try {
                f = JSON.stringify(s);
              } catch {
              }
            return u["[" + l + "]"] = f, u;
          }, {
            severity: n.indexOf("group") === 0 ? "log" : n
          }), "log"), r.apply(console, o);
        }, console[n]._restore = function() {
          console[n] = r;
        };
      });
    };
    var cr = m(["log", "debug", "info", "warn", "error"], function(e) {
      return typeof console < "u" && typeof console[e] == "function";
    }), Ze = 200, et = 5e5, fr = function(e, t) {
      return e === void 0 && (e = document), t === void 0 && (t = window), {
        load: function(n) {
          if (!n._config.trackInlineScripts)
            return;
          var r = t.location.href, a = "", o = !!e.attachEvent, i = o ? e.readyState === "complete" : e.readyState !== "loading", u = function() {
            return e.documentElement.outerHTML;
          };
          a = u();
          var s = e.onreadystatechange;
          e.onreadystatechange = function() {
            e.readyState === "interactive" && (a = u(), i = !0);
            try {
              s.apply(this, arguments);
            } catch {
            }
          };
          var l = null, f = function(d) {
            l = d;
          }, g = function() {
            var d = e.currentScript || l;
            if (!d && !i) {
              var p = e.scripts || e.getElementsByTagName("script");
              d = p[p.length - 1];
            }
            return d;
          }, c = function(d) {
            (!i || !a) && (a = u());
            var p = ["<!-- DOC START -->"].concat(a.split(`
`)), E = d - 1, b = Math.max(E - 3, 0), N = Math.min(E + 3, p.length);
            return _(p.slice(b, N), function(L, X, Ee) {
              return L[b + 1 + Ee] = X.length <= Ze ? X : X.substr(0, Ze), L;
            }, {});
          };
          n.addOnError(function(d) {
            d.errors[0].stacktrace = m(d.errors[0].stacktrace, function(N) {
              return !/__trace__$/.test(N.method);
            });
            var p = d.errors[0].stacktrace[0];
            if (!(p && p.file && p.file.replace(/#.*$/, "") !== r.replace(/#.*$/, ""))) {
              var E = g();
              if (E) {
                var b = E.innerHTML;
                d.addMetadata("script", "content", b.length <= et ? b : b.substr(0, et)), p && p.lineNumber && (p.code = c(p.lineNumber));
              }
            }
          }, !0);
          var h = $(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function(d) {
            return ye(t, d, function(p) {
              return y(p, function(E) {
                return {
                  get: function() {
                    return E[0];
                  },
                  replace: function(b) {
                    E[0] = b;
                  }
                };
              });
            });
          }), v = h[0];
          $(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], function(d) {
            !t[d] || !t[d].prototype || !Object.prototype.hasOwnProperty.call(t[d].prototype, "addEventListener") || (ye(t[d].prototype, "addEventListener", function(p) {
              return y(p, tt);
            }), ye(t[d].prototype, "removeEventListener", function(p) {
              return y(p, tt, !0);
            }));
          });
          function y(d, p, E) {
            return E === void 0 && (E = !1), function() {
              var b = [].slice.call(arguments);
              try {
                var N = p(b), L = N.get();
                if (E && d.apply(this, b), typeof L != "function")
                  return d.apply(this, b);
                if (L.__trace__)
                  N.replace(L.__trace__);
                else {
                  var X = g();
                  L.__trace__ = function() {
                    f(X), v(function() {
                      f(null);
                    }, 0);
                    var xr = L.apply(this, arguments);
                    return f(null), xr;
                  }, L.__trace__.__trace__ = L.__trace__, N.replace(L.__trace__);
                }
              } catch {
              }
              if (d.apply)
                return d.apply(this, b);
              switch (b.length) {
                case 1:
                  return d(b[0]);
                case 2:
                  return d(b[0], b[1]);
                default:
                  return d();
              }
            };
          }
        },
        configSchema: {
          trackInlineScripts: {
            validate: function(n) {
              return n === !0 || n === !1;
            },
            defaultValue: function() {
              return !0;
            },
            message: "should be true|false"
          }
        }
      };
    };
    function ye(e, t, n) {
      var r = e[t];
      if (!r)
        return r;
      var a = n(r);
      return e[t] = a, r;
    }
    function tt(e) {
      var t = !!e[1] && typeof e[1].handleEvent == "function";
      return {
        get: function() {
          return t ? e[1].handleEvent : e[1];
        },
        replace: function(n) {
          t ? e[1].handleEvent = n : e[1] = n;
        }
      };
    }
    var lr = function(e) {
      return e === void 0 && (e = window), {
        load: function(t) {
          "addEventListener" in e && (!t._isBreadcrumbTypeEnabled("user") || e.addEventListener("click", function(n) {
            var r, a;
            try {
              r = dr(n.target), a = rt(n.target, e);
            } catch {
              r = "[hidden]", a = "[hidden]", t._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z");
            }
            t.leaveBreadcrumb("UI click", {
              targetText: r,
              targetSelector: a
            }, "user");
          }, !0));
        }
      };
    }, dr = function(e) {
      var t = e.textContent || e.innerText || "";
      return !t && (e.type === "submit" || e.type === "button") && (t = e.value), t = t.replace(/^\s+|\s+$/g, ""), gr(t, 140);
    };
    function rt(e, t) {
      var n = [e.tagName];
      if (e.id && n.push("#" + e.id), e.className && e.className.length && n.push("." + e.className.split(" ").join(".")), !t.document.querySelectorAll || !Array.prototype.indexOf)
        return n.join("");
      try {
        if (t.document.querySelectorAll(n.join("")).length === 1)
          return n.join("");
      } catch {
        return n.join("");
      }
      if (e.parentNode.childNodes.length > 1) {
        var r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
        n.push(":nth-child(" + r + ")");
      }
      return t.document.querySelectorAll(n.join("")).length === 1 ? n.join("") : e.parentNode ? rt(e.parentNode, t) + " > " + n.join("") : n.join("");
    }
    function gr(e, t) {
      var n = "(...)";
      return e && e.length <= t ? e : e.slice(0, t - n.length) + n;
    }
    var nt = {};
    nt = function(e) {
      e === void 0 && (e = window);
      var t = {
        load: function(n) {
          if ("addEventListener" in e && !!n._isBreadcrumbTypeEnabled("navigation")) {
            var r = function(a) {
              return function() {
                return n.leaveBreadcrumb(a, {}, "navigation");
              };
            };
            e.addEventListener("pagehide", r("Page hidden"), !0), e.addEventListener("pageshow", r("Page shown"), !0), e.addEventListener("load", r("Page loaded"), !0), e.document.addEventListener("DOMContentLoaded", r("DOMContentLoaded"), !0), e.addEventListener("load", function() {
              return e.addEventListener("popstate", r("Navigated back"), !0);
            }), e.addEventListener("hashchange", function(a) {
              var o = a.oldURL ? {
                from: te(a.oldURL, e),
                to: te(a.newURL, e),
                state: ot(e)
              } : {
                to: te(e.location.href, e)
              };
              n.leaveBreadcrumb("Hash changed", o, "navigation");
            }, !0), e.history.replaceState && at(n, e.history, "replaceState", e), e.history.pushState && at(n, e.history, "pushState", e);
          }
        }
      };
      return t;
    };
    var te = function(e, t) {
      var n = t.document.createElement("A");
      return n.href = e, "" + n.pathname + n.search + n.hash;
    }, hr = function(e, t, n, r) {
      var a = te(e.location.href, e);
      return {
        title: n,
        state: t,
        prevState: ot(e),
        to: r || a,
        from: a
      };
    }, at = function(e, t, n, r) {
      var a = t[n];
      t[n] = function(o, i, u) {
        e.leaveBreadcrumb("History " + n, hr(r, o, i, u), "navigation"), typeof e.resetEventCount == "function" && e.resetEventCount(), e._config.autoTrackSessions && e.startSession(), a.apply(t, [o, i].concat(u !== void 0 ? u : []));
      };
    }, ot = function(e) {
      try {
        return e.history.state;
      } catch {
      }
    }, H = "request", pr = function(e, t) {
      e === void 0 && (e = []), t === void 0 && (t = window);
      var n = {
        load: function(r) {
          if (!r._isBreadcrumbTypeEnabled("request"))
            return;
          var a = [r._config.endpoints.notify, r._config.endpoints.sessions].concat(e);
          o(), s();
          function o() {
            if ("addEventListener" in t.XMLHttpRequest.prototype) {
              var g = t.XMLHttpRequest.prototype.open;
              t.XMLHttpRequest.prototype.open = function(h, v) {
                var y = this, d = !1, p = function() {
                  return u(h, v);
                }, E = function() {
                  return i(h, v, y.status);
                };
                d && (this.removeEventListener("load", E), this.removeEventListener("error", p)), this.addEventListener("load", E), this.addEventListener("error", p), d = !0, g.apply(this, arguments);
              };
            }
          }
          function i(g, c, h) {
            if (c === void 0) {
              r._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
              return;
            }
            if (!(typeof c == "string" && w(a, c.replace(/\?.*$/, "")))) {
              var v = {
                status: h,
                request: g + " " + c
              };
              h >= 400 ? r.leaveBreadcrumb("XMLHttpRequest failed", v, H) : r.leaveBreadcrumb("XMLHttpRequest succeeded", v, H);
            }
          }
          function u(g, c) {
            if (c === void 0) {
              r._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
              return;
            }
            typeof c == "string" && w(a, c.replace(/\?.*$/, "")) || r.leaveBreadcrumb("XMLHttpRequest error", {
              request: g + " " + c
            }, H);
          }
          function s() {
            if (!(!("fetch" in t) || t.fetch.polyfill)) {
              var g = t.fetch;
              t.fetch = function() {
                var h = arguments, v = arguments[0], y = arguments[1], d, p = null;
                return v && typeof v == "object" ? (p = v.url, y && "method" in y ? d = y.method : v && "method" in v && (d = v.method)) : (p = v, y && "method" in y && (d = y.method)), d === void 0 && (d = "GET"), new Promise(function(E, b) {
                  g.apply(void 0, h).then(function(N) {
                    l(N, d, p), E(N);
                  }).catch(function(N) {
                    f(d, p), b(N);
                  });
                });
              };
            }
          }
          var l = function(g, c, h) {
            var v = {
              status: g.status,
              request: c + " " + h
            };
            g.status >= 400 ? r.leaveBreadcrumb("fetch() failed", v, H) : r.leaveBreadcrumb("fetch() succeeded", v, H);
          }, f = function(g, c) {
            r.leaveBreadcrumb("fetch() error", {
              request: g + " " + c
            }, H);
          };
        }
      };
      return n;
    }, vr = {
      load: function(e) {
        var t = 0;
        e.addOnError(function(n) {
          if (t >= e._config.maxEvents)
            return e._logger.warn("Cancelling event send due to maxEvents per session limit of " + e._config.maxEvents + " being reached"), !1;
          t++;
        }), e.resetEventCount = function() {
          t = 0;
        };
      },
      configSchema: {
        maxEvents: {
          defaultValue: function() {
            return 10;
          },
          message: "should be a positive integer \u2264100",
          validate: function(e) {
            return I(1, 100)(e);
          }
        }
      }
    }, be = {};
    be = {
      load: function(e) {
        e.addOnError(function(t) {
          var n = _(t.errors, function(r, a) {
            return r.concat(a.stacktrace);
          }, []);
          $(n, function(r) {
            r.file = _r(r.file);
          });
        });
      }
    };
    var _r = be._strip = function(e) {
      return typeof e == "string" ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e;
    }, mr = function(e) {
      return e === void 0 && (e = window), {
        load: function(t) {
          if (!t._config.autoDetectErrors || !t._config.enabledErrorTypes.unhandledExceptions)
            return;
          function n(a, o, i, u, s) {
            if (i === 0 && /Script error\.?/.test(a))
              t._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
            else {
              var l = {
                severity: "error",
                unhandled: !0,
                severityReason: {
                  type: "unhandledException"
                }
              }, f;
              if (s)
                f = t.Event.create(s, !0, l, "window onerror", 1), it(f.errors[0].stacktrace, o, i, u);
              else if (typeof a == "object" && a !== null && (!o || typeof o != "string") && !i && !u && !s) {
                var g = a.type ? "Event: " + a.type : "Error", c = a.message || a.detail || "";
                f = t.Event.create({
                  name: g,
                  message: c
                }, !0, l, "window onerror", 1), f.originalError = a, f.addMetadata("window onerror", {
                  event: a,
                  extraParameters: o
                });
              } else
                f = t.Event.create(a, !0, l, "window onerror", 1), it(f.errors[0].stacktrace, o, i, u);
              t._notify(f);
            }
            typeof r == "function" && r.apply(this, arguments);
          }
          var r = e.onerror;
          e.onerror = n;
        }
      };
    }, it = function(e, t, n, r) {
      e[0] || e.push({});
      var a = e[0];
      !a.file && typeof t == "string" && (a.file = t), !a.lineNumber && Se(n) && (a.lineNumber = n), a.columnNumber || (Se(r) ? a.columnNumber = r : window.event && Se(window.event.errorCharacter) && (a.columnNumber = window.event.errorCharacter));
    }, Se = function(e) {
      return typeof e == "number" && String.call(e) !== "NaN";
    }, yr = function(e) {
      e === void 0 && (e = window);
      var t = {
        load: function(n) {
          if (!(!n._config.autoDetectErrors || !n._config.enabledErrorTypes.unhandledRejections)) {
            var r = function(a) {
              var o = a.reason, i = !1;
              try {
                a.detail && a.detail.reason && (o = a.detail.reason, i = !0);
              } catch {
              }
              var u = n.Event.create(o, !1, {
                severity: "error",
                unhandled: !0,
                severityReason: {
                  type: "unhandledPromiseRejection"
                }
              }, "unhandledrejection handler", 1, n._logger);
              i && $(u.errors[0].stacktrace, br(o)), n._notify(u, function(s) {
                if (Q(s.originalError) && !s.originalError.stack) {
                  var l;
                  s.addMetadata("unhandledRejection handler", (l = {}, l[Object.prototype.toString.call(s.originalError)] = {
                    name: s.originalError.name,
                    message: s.originalError.message,
                    code: s.originalError.code
                  }, l));
                }
              });
            };
            "addEventListener" in e ? e.addEventListener("unhandledrejection", r) : e.onunhandledrejection = function(a, o) {
              r({
                detail: {
                  reason: a,
                  promise: o
                }
              });
            };
          }
        }
      };
      return t;
    }, br = function(e) {
      return function(t) {
        t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""));
      };
    }, P = {}, Sr = "Bugsnag JavaScript", Er = "7.17.4", wr = "https://github.com/bugsnag/bugsnag-js", Or = S({}, z.schema, ft), O = {
      _client: null,
      createClient: function(e) {
        typeof e == "string" && (e = {
          apiKey: e
        }), e || (e = {});
        var t = [
          Wt,
          ar(),
          Yt(),
          or(),
          vr,
          ir,
          ur,
          be,
          mr(),
          yr(),
          nt(),
          lr(),
          pr(),
          Qe,
          fr()
        ], n = new pe(e, Or, t, {
          name: Sr,
          version: Er,
          url: wr
        });
        return n._setDelivery(window.XDomainRequest ? ve : Gt), n._logger.debug("Loaded!"), n.leaveBreadcrumb("Bugsnag loaded", {}, "state"), n._config.autoTrackSessions ? n.startSession() : n;
      },
      start: function(e) {
        return O._client ? (O._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), O._client) : (O._client = O.createClient(e), O._client);
      },
      isStarted: function() {
        return O._client != null;
      }
    };
    return $(["resetEventCount"].concat(k(pe.prototype)), function(e) {
      /^_/.test(e) || (O[e] = function() {
        if (!O._client)
          return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
        O._client._depth += 1;
        var t = O._client[e].apply(O._client, arguments);
        return O._client._depth -= 1, t;
      });
    }), P = O, P.Client = pe, P.Event = fe, P.Session = ge, P.Breadcrumb = se, P.default = O, P;
  });
})(ut);
const Mr = ut.exports;
Mr.start({ apiKey: "dfd83c36b883dd3e3efc000c00b1c709" });
const ne = document.querySelector("script[data-key]"), st = ne.getAttribute("data-key"), re = document.body.classList.contains("darkMode") || ne.getAttribute("darkMode"), we = document.getElementsByClassName("response-rocket");
let ct = "https://responserocket.app/api/increment";
ne.getAttribute("data-dev") && (ct = "https://responserocket.test/api/increment");
if (we.length) {
  for (let _ = 0; _ < we.length; _++)
    we[_].innerHTML = `
      <div class="rr-flex rr-justify-center">
        <div class="rr-flex shrink rr-rounded-full rr-py-2 rr-px-4 rr-justify-center rr-shadow ${re ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}">
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-flex rr-items-center"
              data-reaction="rocket"
            >
              ${$r}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${re ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
              data-reaction="smile"
            >
              ${Nr}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${re ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
              data-reaction="heart"
            >
              ${Lr}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${re ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
              data-reaction="thumbsUp"
            >
              ${Tr}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
          </div>
        </div>
      `;
  const j = document.getElementsByClassName("response-rocket-button");
  let q = !1;
  for (let _ = 0; _ < j.length; _++)
    j[_].addEventListener("click", function() {
      const { hash: m, pathname: w } = window.location, x = this.getAttribute("data-reaction");
      q || fetch(ct, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          siteKey: st,
          hash: m,
          pathname: w,
          reaction: x
        })
      }).then((M) => M.json()).then((M) => {
        q = M.exceededClickLimit, M.reactions && M.reactions.map((A) => {
          const k = document.querySelectorAll(`.response-rocket-button[data-reaction="${A.reaction}"]`);
          for (let I = 0; I < k.length; I++)
            A.clicks && (k[I].querySelector("span.response-rocket-count").innerHTML = A.clicks);
        });
      }).catch((M) => console.error(M));
    });
  let T = "https://responserocket.app/api/page";
  ne.getAttribute("data-dev") && (T = "https://responserocket.test/api/page"), kr(st, T);
}
