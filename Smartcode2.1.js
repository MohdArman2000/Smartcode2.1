window._vwo_code ||
  (function () {
    var account_id = 8000025, // replace 1 with ${accountId} in release string
      version = 2.1,
      settings_tolerance = 2000,
      hide_element = "body",
      hide_element_style =
        "opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important",
      /* DO NOT EDIT BELOW THIS LINE */
      f = false,
      w = window,
      d = document,
      v = d.querySelector("#vwoCode"),
      cK = "_vwo_" + account_id + "_settings",
      cc = {};
    try {
      var c = JSON.parse(
        localStorage.getItem("_vwo_" + account_id + "_config")
      );
      cc = c && typeof c === "object" ? c : {};
    } catch (e) {}
    var stT = cc.stT === "session" ? w.sessionStorage : w.localStorage;
    code = {
      use_existing_jquery: function () {
        return typeof use_existing_jquery !== "undefined"
          ? use_existing_jquery
          : undefined;
      },
      library_tolerance: function () {
        return typeof library_tolerance !== "undefined"
          ? library_tolerance
          : undefined;
      },
      settings_tolerance: function () {
        return cc.sT || settings_tolerance;
      },
      hide_element_style: function () {
        return "{" + (cc.hES || hide_element_style) + "}";
      },
      hide_element: function () {
        if (performance.getEntriesByName("first-contentful-paint")[0]) {
          hide_element = "";
        }
        return typeof cc.hE === "string" ? cc.hE : hide_element;
      },
      getVersion: function () {
        return version;
      },
      finish: function () {
        if (!f) {
          f = true;
          var e = d.getElementById("_vis_opt_path_hides");
          if (e) e.parentNode.removeChild(e);
        }
      },
      finished: function () {
        return f;
      },
      load: function (e) {
        var t = this.getSettings(),
          n = d.createElement("script"),
          i = this;
        if (t) {
          n.textContent = t;
          d.getElementsByTagName("head")[0].appendChild(n);
          if (!w.VWO || VWO.caE) {
            stT.removeItem(cK);
            i.load(e);
          }
        } else {
          var s = new XMLHttpRequest();
          s.open("GET", e, true);
          s.responseType = "text";
          s.onload = function () {
            if (s.status === 200) {
              var e = document.createElement("script");
              e.type = "text/javascript";
              e.text = s.responseText;
              d.getElementsByTagName("head")[0].appendChild(e);
            } else {
              _vwo_code.finish();
            }
          };
          s.onerror = function () {
            _vwo_code.finish();
          };
          s.send();
        }
      },
      getSettings: function () {
        try {
          var e = stT.getItem(cK);
          if (!e) {
            return;
          }
          e = JSON.parse(e);
          if (Date.now() > e.e) {
            stT.removeItem(cK);
            return;
          }
          return e.s;
        } catch (e) {
          return;
        }
      },
      init: function () {
        if (d.URL.indexOf("__vwo_disable__") > -1) return;
        var e = this.settings_tolerance();
        w._vwo_settings_timer = setTimeout(function () {
          _vwo_code.finish();
          stT.removeItem(cK);
        }, e);
        var t = d.createElement("style"),
          n = this.hide_element(),
          i = n ? n + this.hide_element_style() : "",
          s = d.getElementsByTagName("head")[0];
        t.setAttribute("id", "_vis_opt_path_hides");
        v && t.setAttribute("nonce", v.nonce);
        t.setAttribute("type", "text/css");
        if (t.styleSheet) t.styleSheet.cssText = i;
        else t.appendChild(d.createTextNode(i));
        s.appendChild(t);
        this.load(
          "https://dev.visualwebsiteoptimizer.com/j.php?a=" +
            account_id +
            "&u=" +
            encodeURIComponent(d.URL) +
            "&vn=" +
            version
        );
      },
    };
    w._vwo_code = code;
    code.init();
  })();
window._vwo_pc_custom = {
  a: 100,
  t: 100,
};
