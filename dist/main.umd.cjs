(function(g){typeof define=="function"&&define.amd?define(g):g()})(function(){"use strict";const g="";function v(h,a){const l=document.querySelectorAll(".rocket-widget[data-rocket-widget]"),r=[];l.length&&l.forEach(t=>{r.push(t.dataset.rocketWidget)}),console.log("Rocket Widgets To The Rescue",r);const e=new URLSearchParams({pathname:window.location.pathname,siteKey:h,widgetIds:r});fetch(`${a}/widgets?${e}`).then(t=>t.json()).then(t=>{t.map(s=>{const c=s.public_id;s.reactions.map(n=>{const o=document.querySelectorAll(`.response-rocket-button[data-widget-id="${c}"][data-reaction="${n.reaction}"]`);for(let i=0;i<o.length;i++)n.clicks&&(o[i].querySelector("span.response-rocket-count").innerHTML=n.clicks)})})}).catch(t=>console.error(t)),fetch(`${a}/page?${e}`).then(t=>t.json()).then(t=>{t.reactions&&t.reactions.map(s=>{let c=document.querySelectorAll(`.response-rocket-button:not([data-widget-id])[data-reaction="${s.reaction}"]`);for(let n=0;n<c.length;n++)s.clicks&&(c[n].querySelector("span.response-rocket-count").innerHTML=s.clicks)})}).catch(t=>console.error(t))}const y=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg>`,x=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
`,$=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
`,S=`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rr-w-6 rr-h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
`;console.log("Reaction Rocket v1.0.7");const d=document.querySelector("script[data-rocket-key]"),b=d.getAttribute("data-rocket-key"),u=document.body.classList.contains("darkMode")||d.getAttribute("darkMode"),p=document.getElementsByClassName("rocket-widget");let f="https://responserocket.app/api/";if(d.getAttribute("data-dev")&&(f="https://responserocket.test/api/"),p.length){for(let r=0;r<p.length;r++){const e=p[r].dataset.rocketWidget;p[r].innerHTML=`
      <div class="rr-flex rr-justify-center">
        <div class="rr-flex shrink rr-rounded-full rr-py-2 rr-px-4 rr-justify-center rr-shadow ${u?"rr-bg-white rr-text-black":"rr-bg-black rr-text-white"}">
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-flex rr-items-center"
              data-reaction="rocket"
              ${e?"data-widget-id="+e:""}
            >
              ${y}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${u?"rr-bg-white rr-text-black":"rr-bg-black rr-text-white"}"
              data-reaction="smile"
              ${e?"data-widget-id="+e:""}
            >
              ${x}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${u?"rr-bg-white rr-text-black":"rr-bg-black rr-text-white"}"
              data-reaction="heart"
              ${e?"data-widget-id="+e:""}
            >
              ${S}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
            <button
              type="button"
              class="response-rocket-button rr-button-reset rr-ml-4 rr-flex rr-items-center ${u?"rr-bg-white rr-text-black":"rr-bg-black rr-text-white"}"
              data-reaction="thumbsUp"
              ${e?"data-widget-id="+e:""}
            >
              ${$}
              <span class="response-rocket-count rr-ml-1">0</span>
            </button>
          </div>
        </div>
      `}const h=document.getElementsByClassName("response-rocket-button");let a=!1;for(let r=0;r<h.length;r++)h[r].addEventListener("click",function(){const{hash:e,pathname:t}=window.location,s=this.getAttribute("data-reaction"),c=this.getAttribute("data-widget-id");let n="increment";c&&(n="widgets/increment"),fetch(`${f}${n}`,{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({siteKey:b,hash:e,pathname:t,reaction:s,widgetId:c})}).then(o=>o.json()).then(o=>{a=o.exceededClickLimit;const i=o.public_id;o.reactions&&o.reactions.map(k=>{let m=document.querySelectorAll(`.response-rocket-button:not([data-widget-id])[data-reaction="${k.reaction}"]`);i&&(m=document.querySelectorAll(`.response-rocket-button[data-widget-id="${i}"][data-reaction="${k.reaction}"]`));for(let w=0;w<m.length;w++)k.clicks&&(m[w].querySelector("span.response-rocket-count").innerHTML=k.clicks)})}).catch(o=>console.error(o))});let l="https://responserocket.app/api";d.getAttribute("data-dev")&&(l="https://responserocket.test/api"),v(b,l)}});
