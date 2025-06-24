import{a as b,S as q,i as s}from"./assets/vendor-frHSA4Lh.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const S="50839747-8e280c8a680bf22042cf2c364";async function h(r,n=1){const t={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:15},{data:a}=await b.get("https://pixabay.com/api/",{params:t});return a}const f=document.querySelector(".loader"),m=document.querySelector(".load-more"),v=document.querySelector(".gallery");let d=null;function g(r){const n=r.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:c,comments:L,downloads:w})=>`
        <li class="photo-card">
            <a href="${a}">
                <img src="${t}" width="300" alt="${e}">
                <ul>
                    <li>
                        <h2>Likes</h2>
                        <p>${o}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${c}</p>
                    </li>
                    <li>
                        <h2>Comments</h2>
                        <p>${L}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${w}</p>
                    </li>
                </ul>
            </a>
        </li>
    `).join("");v.insertAdjacentHTML("beforeend",n),M()}function P(r){r.innerHTML=""}function M(){d?d.refresh():d=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function $(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function x(){m.classList.remove("load-more-hidden")}function l(){m.classList.add("load-more-hidden")}const B=document.querySelector(".form"),p=document.querySelector('[name="search-text"]'),C=document.querySelector(".gallery"),u=document.querySelector(".load-more");let i;const y=15;B.addEventListener("submit",H);async function H(r){r.preventDefault();const n=p.value.trim();if(i=1,l(),n===""){s.warning({title:"Warning",message:"Please enter your query",position:"topCenter"});return}P(C),$();try{const t=await h(n,i);console.log(t);const a=Math.ceil(t.totalHits/y);t.hits.length>0?(g(t.hits),i<a?x():(s.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l())):t.hits.length===0&&(s.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l())}catch{s.error({message:"Oops, something went wrong"})}finally{O()}}u.addEventListener("click",D);async function D(){i+=1,u.disabled=!0;try{const r=await h(p.value.trim(),i);u.disabled=!1,g(r.hits);const t=document.querySelector(".photo-card").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"});const a=Math.ceil(r.totalHits/y);i>=a&&(l(),s.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Oops, something went wrong"})}}
//# sourceMappingURL=index.js.map
