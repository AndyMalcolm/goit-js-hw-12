import{S as d,i as f}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const i=document.querySelector(".search"),p=document.querySelector(".input"),a=document.querySelector(".loader-container"),c=document.querySelector(".loader");let y="";function m(){a.style.display="block",c.style.display="block"}function h(){a.style.display="none",c.style.display="none"}function u(r){requestParams.q=r,m(),fetch(`https://pixabay.com/api/?${searchParams}`).then(o=>{if(h(),!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(({hits:o})=>{const s=document.querySelector(".gallery"),l=new d(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});s.innerHTML="",s.innerHTML=o.reduce((t,e)=>t+`<a class="gallery-link" href="${e.largeImageURL}">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${e.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${e.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${e.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${e.downloads}</p>
              </li>
            </ul>
        </a>`,""),l.refresh()}).catch(o=>{f.error({title:"Error",message:o.message,position:"topRight"})})}i.addEventListener("submit",r=>{r.preventDefault();const o=p.value.trim();loadMoreButton.style.display="none",u(o),i.reset()});loadMoreButton.addEventListener("click",()=>{u(y)});
//# sourceMappingURL=commonHelpers.js.map
