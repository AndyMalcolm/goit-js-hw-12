import{S as m,i as h}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const i=document.querySelector(".search"),g=document.querySelector(".input"),c=document.querySelector(".loader-container"),u=document.querySelector(".loader"),L="40999949-91c7d6cea5390f79fde95dcf3";let a=1;const v=40;let d="";function f(){c.style.display="block",u.style.display="block"}function w(){c.style.display="none",u.style.display="none"}const p={key:L,q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:v},b=new URLSearchParams(p);f();function y(r){p.q=r,f(),fetch(`https://pixabay.com/api/?${b}`).then(o=>{if(w(),!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(({hits:o})=>{const s=document.querySelector(".gallery"),n=new m(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});s.innerHTML="",s.innerHTML=o.reduce((t,e)=>t+`<a class="gallery-link" href="${e.largeImageURL}">
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
        </a>`,""),n.refresh()}).catch(o=>{h.error({title:"Error",message:o.message,position:"topRight"})})}i.addEventListener("submit",r=>{r.preventDefault();const o=g.value.trim();a=1,loadMoreButton.style.display="none",y(o),i.reset()});loadMoreButton.addEventListener("click",()=>{a+=1,y(d)});
//# sourceMappingURL=commonHelpers.js.map
