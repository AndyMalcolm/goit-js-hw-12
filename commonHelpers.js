import{a as w,S,i as p}from"./assets/vendor-c145bea9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=document.querySelector(".search"),q=document.querySelector(".input"),g=document.querySelector(".loader-container"),L=document.querySelector(".loader"),y=document.querySelector(".gallery"),k="40999949-91c7d6cea5390f79fde95dcf3";let u=1;const m=15;let d="";function $(){g.style.display="block",L.style.display="block"}function h(){g.style.display="none",L.style.display="none"}async function b(s){const n={key:k,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:m},a=new URLSearchParams(n);$();try{const r=await w.get(`https://pixabay.com/api/?${a}`);h();const{hits:e,totalHits:t}=r.data,l=new S(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});l.refresh(),s===1&&(y.innerHTML="");const v=e.reduce((c,o)=>c+`<a class="gallery-link" href="${o.largeImageURL}">
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
        </a>`,"");if(y.insertAdjacentHTML("beforeend",v),l.refresh(),s*m>=t)i.style.display="none",p.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{i.style.display="block";const c=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}}catch(r){h(),p.error({title:"Error",message:r.message,position:"topRight"})}}f.addEventListener("submit",s=>{s.preventDefault(),d=q.value.trim(),u=1,i.style.display="none",b(u),f.reset()});const i=document.querySelector(".lm-button");i.addEventListener("click",()=>{u+=1,b(d)});
//# sourceMappingURL=commonHelpers.js.map
