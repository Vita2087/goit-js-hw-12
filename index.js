import{a as m,S as y,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="50519901-1dec8c4abba0943f2b3355c3a",h="https://pixabay.com/api/";async function L(s,r){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(h,{params:o})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${o}" alt="${e}" class="gallery-img" />
      </a>
      <div class="ul-info">
        <p class="ul-info-li">Likes:<span class="ul-info-li-p"> ${t}</span></p>
        <p class="ul-info-li">Views:<span class="ul-info-li-p"> ${i}</span></p>
        <p class="ul-info-li">Comments:<span class="ul-info-li-p"> ${f}</span></p>
        <p class="ul-info-li">Downloads:<span class="ul-info-li-p"> ${d}</span></p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function v(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}showLoadMoreButton();hideLoadMoreButton();const p=document.querySelector(".form"),l=p.querySelector("input");p.addEventListener("submit",async s=>{s.preventDefault();const r=l.value.trim();if(!r){n.warning({message:"Please enter a search term!",position:"topRight"});return}S(),v();try{const o=await L(r);o.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):w(o.hits)}catch(o){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{q(),l.value=""}});
//# sourceMappingURL=index.js.map
