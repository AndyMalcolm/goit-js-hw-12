import{a as w,S,i as y}from"./assets/vendor-c145bea9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const m=document.querySelector(".search"),k=document.querySelector(".input"),b=document.querySelector(".loader-container"),v=document.querySelector(".loader"),h=document.querySelector(".gallery"),$="40999949-91c7d6cea5390f79fde95dcf3";let l=1;const g=40;let i="";function E(){b.style.display="block",v.style.display="block"}function L(){b.style.display="none",v.style.display="none"}async function p(c,o){const u={key:$,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:g},n=new URLSearchParams(u);E();try{const e=await w.get(`https://pixabay.com/api/?${n}`);L();const{hits:t,totalHits:r}=e.data,f=new S(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});f.refresh(),o===1&&(h.innerHTML="");const q=t.reduce((d,s)=>d+`<a class="gallery-link" href="${s.largeImageURL}">
            <img  
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${s.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${s.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${s.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${s.downloads}</p>
              </li>
            </ul>
        </a>`,"");if(h.insertAdjacentHTML("beforeend",q),f.refresh(),o*g>=r)a.style.display="none",y.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{a.style.display="block";const d=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:d*2,behavior:"smooth"})}}catch(e){L(),y.error({title:"Error",message:e.message,position:"topRight"})}}m.addEventListener("submit",c=>{c.preventDefault(),i=k.value.trim(),l=1,a.style.display="none",p(query,l),m.reset(),p(i,l)});const a=document.querySelector(".lm-button");a.addEventListener("click",()=>{l+=1,p(i,l)});
//# sourceMappingURL=commonHelpers.js.map
