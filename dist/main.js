function i(o) {
  const e = new URLSearchParams({
    pathname: window.location.pathname,
    siteKey: o
  });
  fetch(`https://responserocket.test/api/page?${e}`).then((n) => n.json()).then((n) => {
    const r = document.getElementsByClassName("response-rocket-count");
    for (let t = 0; t < r.length; t++)
      r[t].innerHTML = n.reactions;
  }).catch((n) => console.error(n));
}
const l = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>`, h = "https://responserocket.test/api/increment", a = document.querySelector("script[site_key]"), c = a.getAttribute("site_key"), m = document.body.classList.contains("darkMode") || a.getAttribute("darkMode"), s = document.querySelector(".response-rocket");
if (s.length) {
  for (let e = 0; e < s.length; e++)
    s[e].innerHTML = `
        <button
          type="button"
          class="response-rocket-button rr-button-reset rr-rounded-full rr-p-4 rr-shadow rr-flex rr-items-center ${m ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
        >
          ${l}
          <span class="response-rocket-count">0</span>
        </button>
      `;
  const o = document.getElementsByClassName("response-rocket-button");
  for (let e = 0; e < o.length; e++)
    o[e].addEventListener("click", function() {
      const { hash: n, pathname: r } = window.location;
      fetch(h, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          siteKey: c,
          hash: n,
          pathname: r
        })
      }).then((t) => t.json()).then((t) => this.getElementsByTagName("span")[0].innerHTML = t.reactions).catch((t) => console.error(t));
    });
  i(c);
}
