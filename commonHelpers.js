import{a as w,S as q,i as d}from"./assets/vendor-c145bea9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=document.querySelector(".search"),S=document.querySelector(".input"),h=document.querySelector(".loader-container"),g=document.querySelector(".loader"),f=document.querySelector(".gallery"),k="40999949-91c7d6cea5390f79fde95dcf3";let n=1;const y=40;let L="";function $(){h.style.display="block",g.style.display="block"}function m(){h.style.display="none",g.style.display="none"}async function b(i,o){const a={key:k,q:L,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:y},l=new URLSearchParams(a);$();try{const e=await w.get(`https://pixabay.com/api/?${l}`);m();const{hits:t,totalHits:r}=e.data,u=new q(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});u.refresh(),o===1&&(f.innerHTML="");const v=t.reduce((c,s)=>c+`<a class="gallery-link" href="${s.largeImageURL}">
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
        </a>`,"");if(f.insertAdjacentHTML("beforeend",v),u.refresh(),o*y>=r)loadMoreButton.style.display="none",d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{loadMoreButton.style.display="block";const c=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}}catch(e){m(),d.error({title:"Error",message:e.message,position:"topRight"})}}p.addEventListener("submit",i=>{i.preventDefault();const o=S.value.trim();n=1,loadMoreButton.style.display="none",b(o,n),p.reset()});loadMoreButton.addEventListener("click",()=>{n+=1,b(L,n)});
//# sourceMappingURL=commonHelpers.js.map
