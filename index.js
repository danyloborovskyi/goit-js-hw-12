import{a as q,S as v,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="50839747-8e280c8a680bf22042cf2c364";async function f(r,n=1){const o={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:15},{data:i}=await q.get("https://pixabay.com/api/",{params:o});return i}const m=document.querySelector(".loader"),p=document.querySelector(".load-more");let l=null;function y(r){return r.map(({webformatURL:n,largeImageURL:o,tags:i,likes:e,views:t,comments:c,downloads:b})=>`
        <li class="photo-card">
            <a href="${o}">
                <img src="${n}" width="300" alt="${i}">
                <ul>
                    <li>
                        <h2>Likes</h2>
                        <p>${e}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${t}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${c}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${b}</p>
                    </li>
                </ul>
            </a>
        </li>
    `).join("")}function M(r){r.innerHTML=""}function h(){l?l.refresh():l=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function O(){m.classList.remove("hidden")}function P(){m.classList.add("hidden")}function $(){p.classList.remove("load-more-hidden")}function g(){p.classList.add("load-more-hidden")}const x=document.querySelector(".form"),L=document.querySelector('[name="search-text"]'),u=document.querySelector(".gallery"),d=document.querySelector(".load-more");let s=1;const w=15;x.addEventListener("submit",H);async function H(r){r.preventDefault();const n=L.value.trim();if(s=1,n===""){a.warning({title:"Warning",message:"Please enter your query",position:"topCenter"});return}M(u),O();try{const o=await f(n,s);o.hits.length>0?(u.innerHTML=y(o.hits),h(),$()):a.error({message:"Sorry, there are no images matching your search query. Please try again!"}),w*s>=o.totalHits&&(a.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),g())}catch{a.error({message:"Oops, something went wrong"})}finally{P()}}h();d.addEventListener("click",B);async function B(){s+=1,d.disabled=!0;try{const r=await f(L.value.trim(),s);d.disabled=!1,u.insertAdjacentHTML("beforeend",y(r.hits)),h();const o=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"}),s*w>=r.totalHits&&(g(),a.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Oops, something went wrong"})}}
//# sourceMappingURL=index.js.map
