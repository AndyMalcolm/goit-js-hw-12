import{a as q,S,i as p}from"./assets/vendor-c145bea9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=document.querySelector(".search"),k=document.querySelector(".input"),g=document.querySelector(".loader-container"),L=document.querySelector(".loader"),y=document.querySelector(".gallery"),$="40999949-91c7d6cea5390f79fde95dcf3";let i=1;const m=40;let b="";function E(){g.style.display="block",L.style.display="block"}function h(){g.style.display="none",L.style.display="none"}async function v(l,o){const c={key:$,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:m},n=new URLSearchParams(c);E();try{const e=await q.get(`https://pixabay.com/api/?${n}`);h();const{hits:t,totalHits:r}=e.data,d=new S(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});d.refresh(),o===1&&(y.innerHTML="");const w=t.reduce((u,s)=>u+`<a class="gallery-link" href="${s.largeImageURL}">
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
        </a>`,"");if(y.insertAdjacentHTML("beforeend",w),d.refresh(),o*m>=r)a.style.display="none",p.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{a.style.display="block";const u=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:u*2,behavior:"smooth"})}}catch(e){h(),p.error({title:"Error",message:e.message,position:"topRight"})}}f.addEventListener("submit",l=>{l.preventDefault(),b=k.value.trim(),i=1,a.style.display="none",v(query,i),f.reset()});const a=document.querySelector(".lm-button");a.addEventListener("click",()=>{i+=1,v(b,i)});
//# sourceMappingURL=commonHelpers.js.map
