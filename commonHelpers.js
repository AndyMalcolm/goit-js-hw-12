import{S as f,i as d}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".search"),p=document.querySelector(".input"),c=document.querySelector(".loader-container"),u=document.querySelector(".loader");function y(){c.style.display="block",u.style.display="block"}function m(){c.style.display="none",u.style.display="none"}let a={key:"40999949-91c7d6cea5390f79fde95dcf3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function h(n){a.q=n;const s=new URLSearchParams(a);y(),fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(m(),!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).then(({hits:r})=>{const l=document.querySelector(".gallery"),e=new f(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});l.innerHTML="",l.innerHTML=r.reduce((t,o)=>t+`<a class="gallery-link" href="${o.largeImageURL}">
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
        </a>`,""),e.refresh()}).catch(r=>{d.error({title:"Error",message:r.message,position:"topRight"})})}i.addEventListener("submit",n=>{n.preventDefault();const s=p.value.trim();currentPage=1,loadMoreButton.style.display="none",h(s,currentPage),i.reset()});
//# sourceMappingURL=commonHelpers.js.map