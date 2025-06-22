import{a as q,S as v,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="50839747-8e280c8a680bf22042cf2c364";async function f(t,r=1){const n={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15},{data:i}=await q.get("https://pixabay.com/api/",{params:n});return i}const m=document.querySelector(".loader"),p=document.querySelector(".load-more");let l=null;function g(t){return t.map(({webformatURL:r,largeImageURL:n,tags:i,likes:e,views:o,comments:a,downloads:b})=>`
        <li class="photo-card">
            <a href="${n}">
                <img src="${r}" width="300" alt="${i}">
                <ul>
                    <li>
                        <h2>Likes</h2>
                        <p>${e}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${o}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${a}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${b}</p>
                    </li>
                </ul>
            </a>
        </li>
    `).join("")}function M(t){t.innerHTML=""}function h(){l?l.refresh():l=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function O(){m.classList.remove("hidden")}function P(){m.classList.add("hidden")}function $(){p.classList.remove("load-more-hidden")}function y(){p.classList.add("load-more-hidden")}const x=document.querySelector(".form"),L=document.querySelector('[name="search-text"]'),u=document.querySelector(".gallery"),d=document.querySelector(".load-more");let c=1;const w=15;x.addEventListener("submit",H);function H(t){t.preventDefault();const r=L.value.trim();if(c=1,r===""){s.warning({title:"Warning",message:"Please enter your query",position:"topCenter"});return}M(u),O(),f(r,c).then(n=>{n.hits.length>0?(u.innerHTML=g(n.hits),h(),$()):s.error({message:"Sorry, there are no images matching your search query. Please try again!"}),w>=n.totalHits&&(s.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),y())}).catch(()=>{s.error({message:"Oops, something went wrong"})}).finally(()=>{P()})}h();d.addEventListener("click",B);async function B(){c+=1,d.disabled=!0;try{const t=await f(L.value.trim(),c);console.log(t),d.disabled=!1,u.insertAdjacentHTML("beforeend",g(t.hits)),h();const n=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({left:0,top:n*2,behavior:"smooth"});const i=c*w;console.log(i),i>=t.totalHits&&(y(),s.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Oops, something went wrong"})}}
//# sourceMappingURL=index.js.map
