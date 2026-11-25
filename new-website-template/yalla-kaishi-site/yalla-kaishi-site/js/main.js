(function () {
  "use strict";
  var C = window.SITE_CONFIG || {}, T = window.I18N, KEY = "yk-lang", lang = "en";

  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || ""; }
  function reply() { return (C.replyTime && C.replyTime[lang]) || ""; }

  function apply() {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.classList.toggle("zh", lang === "zh");
    document.title = t("title");
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", t("desc"));
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); el.textContent = t(k).replace("{reply}", reply());
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    document.querySelectorAll(".lg button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    var s = document.getElementById("status"); if (s) { s.textContent = ""; s.className = "status"; }
  }

  function setLang(v) { lang = v === "zh" ? "zh" : "en"; save(lang); apply(); }

  function contactLine() {
    var box = document.getElementById("contact-line"); if (!box) return;
    var parts = [];
    function add(label, value, href) {
      var wrap = document.createElement("span");
      wrap.appendChild(document.createTextNode(label + " "));
      if (href) { var a = document.createElement("a"); a.href = href; a.textContent = value; a.style.color = "#fff"; wrap.appendChild(a); }
      else wrap.appendChild(document.createTextNode(value));
      parts.push(wrap);
    }
    if (C.email) add("Email", C.email, "mailto:" + C.email);
    if (C.wechat) add("WeChat", C.wechat);
    if (C.whatsapp) add("WhatsApp", "+" + C.whatsapp, "https://wa.me/" + C.whatsapp);
    parts.forEach(function (p, i) { if (i) box.appendChild(document.createTextNode(" · ")); box.appendChild(p); });
  }

  function setStatus(msg, cls) { var s = document.getElementById("status"); s.textContent = msg; s.className = "status " + (cls || ""); }

  function onSubmit(e) {
    e.preventDefault();
    var f = e.target, d = new FormData(f);
    if (d.get("_gotcha")) return;
    var name = (d.get("name") || "").trim(), email = (d.get("email") || "").trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus(t("miss"), "err"); return; }
    var data = { name: name, company: d.get("company"), email: email, need: d.get("need"), language: lang };
    if (C.formEndpoint) {
      setStatus(t("sending"));
      fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); setStatus(t("ok"), "ok"); })
        .catch(function () { setStatus(t("err"), "err"); });
    } else if (C.email) {
      var body = "Name: " + name + "\nCompany/product: " + (data.company || "") + "\nEmail: " + email + "\nNeed: " + data.need + "\nLanguage: " + lang;
      setStatus(t("mail"), "ok");
      window.location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Yalla Kaishi enquiry") + "&body=" + encodeURIComponent(body);
    } else { setStatus(t("err"), "err"); }
  }

  var s0 = saved();
  lang = s0 ? s0 : ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
  document.querySelectorAll(".lg button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
  var form = document.getElementById("contact"); if (form) form.addEventListener("submit", onSubmit);
  contactLine(); apply();
})();
