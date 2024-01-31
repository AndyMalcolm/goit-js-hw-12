import{a as g,S as L,i as b}from"./assets/vendor-c145bea9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector(".search");document.querySelector(".input");const f=document.querySelector(".loader-container"),d=document.querySelector(".loader"),n=document.querySelector(".gallery"),w="40999949-91c7d6cea5390f79fde95dcf3";let c=1;const q=40;let p="";function S(){f.style.display="block",d.style.display="block"}function u(){f.style.display="none",d.style.display="none"}async function v(y,s){const i={key:w,q:p,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:q},r=new URLSearchParams(i);S();try{const e=await g.get(`https://pixabay.com/api/?${r}`);u();const{hits:t,totalHits:l}=e.data,a=new L(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});a.refresh(),s===1&&(n.innerHTML="");const m=t.reduce((h,o)=>h+`<a class="gallery-link" href="${o.largeImageURL}">
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
        </a>`,"");n.insertAdjacentHTML("beforeend",m),a.refresh()}catch(e){u(),b.error({title:"Error",message:e.message,position:"topRight"})}}loadMoreButton.addEventListener("click",()=>{c+=1,v(p,c)});
//# sourceMappingURL=commonHelpers.js.map
