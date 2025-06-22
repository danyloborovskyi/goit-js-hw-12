import{a as d,S as m,i as l}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50839747-8e280c8a680bf22042cf2c364";function y(i){const r={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get("https://pixabay.com/api/",{params:r}).then(o=>o.data)}const u=document.querySelector(".loader");let a=null;function g(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:h})=>`
        <li>
            <a href="${o}">
                <img src="${r}" width="300" alt="${s}">
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
                        <p>${n}</p>
                    </li>
                    <li>
                        <h2>Downloads</h2>
                        <p>${h}</p>
                    </li>
                </ul>
            </a>
        </li>
    `).join("")}function L(i){i.innerHTML=""}function f(){a?a.refresh():a=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const S=document.querySelector(".form"),w=document.querySelector('[name="search-text"]'),c=document.querySelector(".gallery");S.addEventListener("submit",$);function $(i){i.preventDefault();const r=w.value.trim();if(console.log(`[query]: "${r}"`),r===""){l.warning({title:"Warning",message:"Please enter your query",position:"topCenter"});return}L(c),b(),y(r).then(o=>{o.hits.length>0?(console.log(o),c.innerHTML=g(o.hits),f()):l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(()=>{l.error({message:"Oops, something went south"})}).finally(()=>{q()})}f();
//# sourceMappingURL=index.js.map
