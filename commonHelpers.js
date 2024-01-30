import{a as m,S as h,i as g}from"./assets/vendor-c145bea9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector(".search");document.querySelector(".input");const u=document.querySelector(".loader-container"),f=document.querySelector(".loader"),a=document.querySelector(".gallery"),L="40999949-91c7d6cea5390f79fde95dcf3";let n=1;const b=40;let d="";function w(){u.style.display="block",f.style.display="block"}function c(){u.style.display="none",f.style.display="none"}async function q(p,s){const i={key:L,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:b},r=new URLSearchParams(i);w();try{const e=await m.get(`https://pixabay.com/api/?${r}`);c();const{hits:t,totalHits:l}=e.data;new h(".gallery a",{captionDelay:250,captionsData:"alt",close:!0}).refresh(),s===1&&(a.innerHTML=""),a.innerHTML=t.reduce((y,o)=>y+`<a class="gallery-link" href="${o.largeImageURL}">
            <img
                class="gallery-image"
                src="${o.webformatURL}"
                alt="${o.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${o.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${o.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${o.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${o.downloads}</p>
              </li>
            </ul>
        </a>`,"")}catch(e){c(),g.error({title:"Error",message:e.message,position:"topRight"})}}loadMoreButton.addEventListener("click",()=>{n+=1,q(d,n)});
//# sourceMappingURL=commonHelpers.js.map
