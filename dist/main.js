function f(d, i) {
  const l = document.querySelectorAll(".rocket-widget[data-rocket-widget]"), r = [];
  l.length && l.forEach((t) => {
    r.push(t.dataset.rocketWidget);
  }), console.log("Rocket Widgets To The Rescue", r);
  const e = new URLSearchParams({
    pathname: window.location.pathname,
    siteKey: d,
    widgetIds: r
  });
  fetch(`${i}/widgets?${e}`).then((t) => t.json()).then((t) => {
    t.map((n) => {
      const c = n.public_id;
      n.reactions.map((s) => {
        const o = document.querySelectorAll(`.response-rocket-button[data-widget-id="${c}"][data-reaction="${s.reaction}"]`);
        for (let a = 0; a < o.length; a++)
          s.clicks && (o[a].querySelector("span.response-rocket-count").innerHTML = s.clicks);
      });
    });
  }).catch((t) => console.error(t)), fetch(`${i}/page?${e}`).then((t) => t.json()).then((t) => {
    t.reactions && t.reactions.map((n) => {
      let c = document.querySelectorAll(`.response-rocket-button:not([data-widget-id])[data-reaction="${n.reaction}"]`);
      for (let s = 0; s < c.length; s++)
        n.clicks && (c[s].querySelector("span.response-rocket-count").innerHTML = n.clicks);
    });
  }).catch((t) => console.error(t));
}
const v = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>`, y = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
`, x = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
`, $ = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
`;
console.log("Reaction Rocket v1.0.7");
const k = document.querySelector("script[data-rocket-key]"), w = k.getAttribute("data-rocket-key"), p = document.body.classList.contains("darkMode") || k.getAttribute("darkMode"), h = document.getElementsByClassName("rocket-widget");
let b = "https://responserocket.app/api/";
k.getAttribute("data-dev") && (b = "https://responserocket.test/api/");
if (h.length) {
  for (let r = 0; r < h.length; r++) {
    const e = h[r].dataset.rocketWidget;
    h[r].innerHTML = `
      <div class="rr-flex rr-justify-center">
        <div class="rr-flex shrink rr-rounded-full rr-py-2 rr-px-4 rr-justify-center rr-shadow ${p ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}">
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-flex rr-items-center"
              data-reaction="rocket"
              ${e ? "data-widget-id=" + e : ""}
            >
              ${v}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${p ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
              data-reaction="smile"
              ${e ? "data-widget-id=" + e : ""}
            >
              ${y}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${p ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
              data-reaction="heart"
              ${e ? "data-widget-id=" + e : ""}
            >
              ${$}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${p ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
              data-reaction="thumbsUp"
              ${e ? "data-widget-id=" + e : ""}
            >
              ${x}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
          </div>
        </div>
      `;
  }
  const d = document.getElementsByClassName("response-rocket-button");
  let i = !1;
  for (let r = 0; r < d.length; r++)
    d[r].addEventListener("click", function() {
      const { hash: e, pathname: t } = window.location, n = this.getAttribute("data-reaction"), c = this.getAttribute("data-widget-id");
      let s = "increment";
      c && (s = "widgets/increment"), fetch(`${b}${s}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          siteKey: w,
          hash: e,
          pathname: t,
          reaction: n,
          widgetId: c
        })
      }).then((o) => o.json()).then((o) => {
        i = o.exceededClickLimit;
        const a = o.public_id;
        o.reactions && o.reactions.map((u) => {
          let g = document.querySelectorAll(`.response-rocket-button:not([data-widget-id])[data-reaction="${u.reaction}"]`);
          a && (g = document.querySelectorAll(`.response-rocket-button[data-widget-id="${a}"][data-reaction="${u.reaction}"]`));
          for (let m = 0; m < g.length; m++)
            u.clicks && (g[m].querySelector("span.response-rocket-count").innerHTML = u.clicks);
        });
      }).catch((o) => console.error(o));
    });
  let l = "https://responserocket.app/api";
  k.getAttribute("data-dev") && (l = "https://responserocket.test/api"), f(w, l);
}
