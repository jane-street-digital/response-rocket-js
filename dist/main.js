function p(o) {
  const s = new URLSearchParams({
    pathname: window.location.pathname,
    siteKey: o
  });
  let e = "https://responserocket.test/api/page";
  process.env.NODE_ENV === "production" && (e = "https://responserocket.app/api/page"), fetch(`${e}?${s}`).then((n) => n.json()).then((n) => {
    const r = document.getElementsByClassName("response-rocket-count");
    for (let t = 0; t < r.length; t++)
      r[t].innerHTML = n.reactions;
  }).catch((n) => console.error(n));
}
const m = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>`;
let i = "https://responserocket.test/api/increment";
process.env.NODE_ENV === "production" && (i = "https://responserocket.app/api/increment");
const l = document.querySelector("script[site_key]"), a = l.getAttribute("site_key"), h = document.body.classList.contains("darkMode") || l.getAttribute("darkMode"), c = document.getElementsByClassName("response-rocket");
if (c.length) {
  for (let e = 0; e < c.length; e++)
    c[e].innerHTML = `
        <button
          type="button"
          class="response-rocket-button rr-button-reset rr-rounded-full rr-p-4 rr-shadow rr-flex rr-items-center ${h ? "rr-bg-white rr-text-black" : "rr-bg-black rr-text-white"}"
        >
          ${m}
          <span class="response-rocket-count"></span>
        </button>
      `;
  const o = document.getElementsByClassName("response-rocket-button");
  let s = !1;
  for (let e = 0; e < o.length; e++)
    o[e].addEventListener("click", function() {
      const { hash: n, pathname: r } = window.location;
      s || fetch(i, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          siteKey: a,
          hash: n,
          pathname: r
        })
      }).then((t) => t.json()).then((t) => {
        s = t.exceededClickLimit, this.getElementsByTagName("span")[0].innerHTML = t.reactions;
      }).catch((t) => console.error(t));
    });
  p(a);
}
