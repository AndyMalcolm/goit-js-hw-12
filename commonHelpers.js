import{a as v,S as w,i as d}from"./assets/vendor-c145bea9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=document.querySelector(".search"),S=document.querySelector(".input"),h=document.querySelector(".loader-container"),g=document.querySelector(".loader"),f=document.querySelector(".gallery"),q="40999949-91c7d6cea5390f79fde95dcf3";let n=1;const y=15;let L="";function k(){h.style.display="block",g.style.display="block"}function m(){h.style.display="none",g.style.display="none"}async function b(){const i={key:q,q:L,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:y},s=new URLSearchParams(i);k();try{const r=await v.get(`https://pixabay.com/api/?${s}`);m();const{hits:a,totalHits:e}=r.data,t=new w(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});t.refresh(),n===1&&(f.innerHTML="");const l=a.reduce((u,o)=>u+`<a class="gallery-link" href="${o.largeImageURL}">
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
        </a>`,"");if(f.insertAdjacentHTML("beforeend",l),t.refresh(),n*y>=e)c.style.display="none",d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{c.style.display="block";const u=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:u*2,behavior:"smooth"})}}catch(r){m(),d.error({title:"Error",message:r.message,position:"topRight"})}}p.addEventListener("submit",i=>{i.preventDefault(),L=S.value.trim(),n=1,c.style.display="none",b(),p.reset()});const c=document.querySelector(".lm-button");c.addEventListener("click",()=>{n+=1,b()});
//# sourceMappingURL=commonHelpers.js.map
