/**
 * crisp-client
 * @version v2.7.0 f68192b
 * @author Crisp IM SARL
 * @date 1/12/2022
 */
(function () {
  try {
    var t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    (i.prototype.init = function () {
      var i,
        n,
        s = this,
        r = "init";
      try {
        this.c &&
          !0 !== this.f &&
          ((this.f = !0),
          ((i = document.createElement("div")).id = "crisp-loader"),
          document.getElementsByTagName("body")[0].appendChild(i),
          (n = function () {
            return (
              "none" === window.getComputedStyle(i).getPropertyValue("display")
            );
          }),
          (function t() {
            setTimeout(function () {
              (s.p -= s.m),
                void 0 !== window[s.y] &&
                "function" == typeof window[s.y].__init &&
                !0 === n()
                  ? (s.x.info(s.ns + "." + r, "Dependencies loaded"),
                    i.parentNode.removeChild(i),
                    window[s.y].__init({
                      dollar_crisp: window[s.y],
                      project_name: s.$,
                      url_go: s.on,
                      url_image: s.fn,
                      url_game: s._n,
                      url_relay_client: s.fs,
                      url_relay_stream: s.ms,
                      url_website: s.ws,
                      url_assets: s._e,
                      rtc_ice: s.io,
                      client_environment: s.do,
                      client_revision: s.ca,
                      website_domain: s._a,
                      website_id: s.c,
                      token_id: s._f,
                      cookie_expire: s.Id,
                      cookie_domain: s.Pp,
                      page_url: s.Tp,
                      page_domain: s.Kp,
                      browser_useragent: s.Gp,
                      browser_timezone: s.Lp,
                      browser_capabilities: s.Yp,
                      browser_locales: s.Xp,
                      ready_trigger: s.Jp,
                      runtime_configuration: s.Wp,
                      reset_handler: function () {
                        s.reset();
                      },
                    }))
                  : 0 < s.p
                  ? t()
                  : s.x.error(s.ns + "." + r, "Could not load dependencies");
            }, s.m);
          })());
      } catch (t) {}
    }),
      (i.prototype.reset = function () {
        try {
          this.u(), this.init();
        } catch (t) {}
      }),
      (i.prototype.Hp = function () {
        try {
          this.Qp("dns-prefetch", this.fs),
            this.Qp("preconnect", this._e),
            this.Vp(),
            this.Zp();
        } catch (t) {}
      }),
      (i.prototype.Qp = function (t, i) {
        try {
          var n = document.createElement("link");
          n.setAttribute("href", i),
            n.setAttribute("rel", t),
            n.setAttribute("crossorigin", ""),
            this.$p(n),
            document.getElementsByTagName("head")[0].appendChild(n);
        } catch (t) {}
      }),
      (i.prototype.Vp = function () {
        try {
          var t = document.createElement("script");
          (t.src = [this._e + "/", this.t_ + "/", "client.js?" + this.ca].join(
            ""
          )),
            (t.type = "text/javascript"),
            (t.async = 1),
            this.$p(t),
            document.getElementsByTagName("head")[0].appendChild(t);
        } catch (t) {}
      }),
    //   (i.prototype.Zp = function () {
    //     try {
    //       var t = this.i_(),
    //         i = document.createElement("link");
    //       (i.href = [
    //         this._e + "/",
    //         this.n_ + "/",
    //         "client_" + t + ".css?" + this.ca,
    //       ].join("")),
    //         (i.type = "text/css"),
    //         (i.rel = "stylesheet"),
    //         this.$p(i),
    //         document.getElementsByTagName("head")[0].appendChild(i);
    //     } catch (t) {}
    //   }),
      (i.prototype.u = function () {
        this.s_(), this.r_(), this.e_();
      }),
      (i.prototype.s_ = function () {
        (this.f = !1),
          (this.p = this.o_),
          (this._a = document.domain),
          (this.Tp = document.location.href),
          (this.Kp = document.location.hostname),
          (this.Gp = window.navigator.userAgent),
          (this.Lp = new Date().getTimezoneOffset()),
          (this.Xp = this.c_()),
          "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID
            ? (this.c = CRISP_WEBSITE_ID)
            : (this.c = this.h_()),
          "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this._f = CRISP_TOKEN_ID)
            : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this._f = CRISP_TOKEN_ID.toString())
            : (this._f = null),
          "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE
            ? (this.Id = CRISP_COOKIE_EXPIRE)
            : (this.Id = null),
          "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN
            ? (this.Pp = CRISP_COOKIE_DOMAIN)
            : (this.Pp = null),
          "function" == typeof CRISP_READY_TRIGGER
            ? (this.Jp = CRISP_READY_TRIGGER)
            : (this.Jp = {}),
          "object" ===
          ("undefined" == typeof CRISP_RUNTIME_CONFIG
            ? "undefined"
            : t(CRISP_RUNTIME_CONFIG))
            ? (this.Wp = CRISP_RUNTIME_CONFIG)
            : (this.Wp = {}),
          "object" ===
          ("undefined" == typeof CRISP_INCLUDE_ATTRS
            ? "undefined"
            : t(CRISP_INCLUDE_ATTRS))
            ? (this.a_ = CRISP_INCLUDE_ATTRS)
            : (this.a_ = {});
      }),
      (i.prototype.r_ = function () {
        try {
          (this.Yp = []),
            "function" == typeof window.MutationObserver &&
              "function" == typeof JSON.stringify &&
              this.Yp.push("browsing"),
            (("function" == typeof window.RTCPeerConnection &&
              "object" === t(navigator.mediaDevices) &&
              "https:" === document.location.protocol &&
              (window.innerWidth || 0) >= this.u_ &&
              (window.innerHeight || 0) >= this.d_) ||
              !0 === this.f_) &&
              this.Yp.push("call");
        } catch (t) {}
      }),
      (i.prototype.e_ = function () {
        var t;
        try {
          this.Wp.locale &&
            (-1 !== (t = this.Xp.indexOf(this.Wp.locale)) &&
              this.Xp.splice(t, 1),
            this.Xp.unshift(this.Wp.locale));
        } catch (t) {}
      }),
      (i.prototype.$p = function (t) {
        try {
          for (var i in this.a_)
            this.a_.hasOwnProperty(i) && t.setAttribute(i, this.a_[i]);
        } catch (t) {}
      }),
      (i.prototype.h_ = function () {
        var t = null;
        try {
          for (
            var i = document.querySelectorAll("script[src]"), n = 0;
            n < i.length;
            n++
          ) {
            var s = this.p_.exec(i[n].src);
            if (s && "string" == typeof s[1]) {
              t = s[1];
              break;
            }
          }
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.i_ = function () {
        var t = "default";
        try {
          var i = (navigator.userAgent || "").toLowerCase(),
            n = (navigator.appVersion || "").toLowerCase(),
            s = !1;
          if (
            (!0 !== s &&
              ((-1 === i.indexOf("opera mini/") &&
                -1 === i.indexOf("msie") &&
                -1 === n.indexOf("trident/")) ||
                (s = !0)),
            !0 !== s)
          )
            for (var r = 0; r < this.l_.length; r++) {
              var e = this.l_[r],
                o = i.match(e.pattern);
              if (o && o[1] && parseInt(o[1], 10) <= e.version) {
                s = !0;
                break;
              }
            }
          !0 === s && (t = "legacy");
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.__ = function () {
        var t = !0;
        try {
          (!(window.innerWidth && window.innerWidth < this.m_) &&
            !0 === navigator.cookieEnabled &&
            !0 !== this.y_(this.Kp) &&
            !0 !== this.I_(this.Gp) &&
            window.WebSocket) ||
            (t = !1);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.y_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.v_.domains.length; n++) {
              var s = this.v_.domains[n],
                r = "." + s;
              if (t === s || t.slice(-1 * r.length) === r) {
                i = !0;
                break;
              }
            }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.I_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.v_.agents.length; n++)
              if (-1 !== t.indexOf(this.v_.agents[n])) {
                i = !0;
                break;
              }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.c_ = function () {
        var t = [];
        try {
          for (
            var i =
                navigator.languages && 0 < navigator.languages.length
                  ? navigator.languages
                  : [navigator.language || navigator.userLanguage],
              n = 0;
            n < i.length;
            n++
          )
            i[n] && t.push(i[n]);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      new i();
  } catch (t) {}
  function i() {
    var t,
      i = this;
    try {
      (this.ns = "CrispLoader"),
        (this.x = {
          warn: function () {},
          error: function () {},
          info: function () {},
          log: function () {},
          debug: function () {},
        }),
        (this.f_ = !1),
        (this.$ = "crisp-client"),
        (this.w_ = "client.crisp.chat"),
        (this.C_ = "client.relay.crisp.chat"),
        (this.R_ = "stream.relay.crisp.chat"),
        (this.ca = "f68192b"),
        (this.do = "production"),
        (this.g_ = "https:"),
        (this.ws = "https://crisp.chat"),
        (this.on = "https://go.crisp.chat"),
        (this.fn = "https://image.crisp.chat"),
        (this._n = "https://game.crisp.chat"),
        (this.fs = this.g_ + "//" + this.C_),
        (this.ms = this.g_ + "//" + this.R_),
        (this._e = this.g_ + "//" + this.w_),
        (this.io = [
          {
            urls: [
              "stun:stun.media.crisp.chat:3478?transport=udp",
              "stun:stun.media.crisp.chat:3478?transport=tcp",
              "stun:stun.media.crisp.chat:3479?transport=udp",
              "stun:stun.media.crisp.chat:3479?transport=tcp",
            ],
          },
          {
            urls: [
              "turn:turn.media.crisp.chat:3478?transport=udp",
              "turn:turn.media.crisp.chat:3478?transport=tcp",
              "turn:turn.media.crisp.chat:3479?transport=udp",
              "turn:turn.media.crisp.chat:3479?transport=tcp",
              "turns:turn.media.crisp.chat:443?transport=tcp",
            ],
            username: "client_9F9kh",
            credential:
              "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p",
          },
        ]),
        (this.v_ = {
          domains: [],
          agents: [
            "Googlebot",
            "Bingbot",
            "Slurp",
            "DuckDuckBot",
            "Baiduspider",
            "YandexBot",
            "GTmetrix",
            "Lighthouse",
          ],
        }),
        (this.t_ = "static/javascripts"),
        (this.n_ = "static/stylesheets"),
        (this.y = "$crisp"),
        (this.m = 100),
        (this.o_ = 3e4),
        (this.S_ = 1e3),
        (this.m_ = 280),
        (this.u_ = 320),
        (this.d_ = 420),
        (this.l_ = [
          { pattern: /edg(?:e)?\/([0-9\.]+)/, version: 79 },
          { pattern: /chrom(?:e|ium)\/([0-9\.]+)/, version: 57 },
          { pattern: /firefox\/([0-9\.]+)/, version: 51 },
          {
            pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
            version: 11,
          },
          { pattern: /android ([0-9\.]+)/, version: 7 },
        ]),
        (this.p_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i),
        this.u(),
        !0 === this.__() &&
          ("interactive" === document.readyState ||
          "complete" === document.readyState
            ? this.init()
            : ((t = document.onreadystatechange || function () {}),
              window.addEventListener("DOMContentLoaded", function () {
                i.init();
              }),
              (document.onreadystatechange = function () {
                "function" == typeof t && t(),
                  ("interactive" !== document.readyState &&
                    "complete" !== document.readyState) ||
                    setTimeout(function () {
                      i.init();
                    }, i.S_);
              })),
          (void 0 !== window[this.y] &&
            "function" == typeof window[this.y].__init) ||
            this.Hp());
    } catch (t) {}
  }
})();
