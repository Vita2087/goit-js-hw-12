import{a as m,S as y,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="50519901-1dec8c4abba0943f2b3355c3a",h="https://pixabay.com/api/";async function L(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(h,{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${s}" alt="${e}" class="gallery-img" />
      </a>
      <div class="ul-info">
        <p class="ul-info-li">Likes:<span class="ul-info-li-p"> ${t}</span></p>
        <p class="ul-info-li">Views:<span class="ul-info-li-p"> ${i}</span></p>
        <p class="ul-info-li">Comments:<span class="ul-info-li-p"> ${f}</span></p>
        <p class="ul-info-li">Downloads:<span class="ul-info-li-p"> ${d}</span></p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function v(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const p=document.querySelector(".form"),l=p.querySelector("input");p.addEventListener("submit",async o=>{o.preventDefault();const r=l.value.trim();if(!r){n.warning({message:"Please enter a search term!",position:"topRight"});return}S(),v();try{const s=await L(r);s.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):w(s.hits)}catch(s){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)}finally{q(),l.value=""}});
//# sourceMappingURL=index.js.map
