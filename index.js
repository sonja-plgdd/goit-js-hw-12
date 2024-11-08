import{a as f,S as w,i as v}from"./assets/vendor-Qob_5Ba8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}})();const p="https://pixabay.com/api/";f.defaults.baseURL=p;let b=1;async function m(r){try{return(await f.get(p,{params:{key:"46844024-31822d2c5a5dcad2dc3c03c6f",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:b}})).data}catch(o){throw new Error(o)}}const S=document.querySelector(".gallery");function h(r){const o=r.hits.map(e=>`<li class="gallery-item">
    <div class="img-wrapper">
  <a class="gallery-link" href=${e.largeImageURL}>
  <img class='gallery-image' src=${e.webformatURL} data-source=${e.largeImageURL} alt='${e.tags}'/>
  </a></div>
  <ul class="card">
  <li>
  <h3>Likes</h3>
  <p>${e.likes}</p></li>
  <li>
  <h3>Views</h3>
  <p>${e.views}</p>
  </li>
  <li>
  <h3>Comments</h3>
  <p>${e.comments}</p></li>
  <li><h3>Downloads</h3>
  <p>${e.downloads}</p></li>
  </ul>
  </li>`).join("");S.insertAdjacentHTML("beforeend",o),new w(".gallery a")}const $=document.querySelector(".form"),M=document.querySelector(".gallery"),d=document.querySelector(".load-btn");let n="";const g=document.querySelector(".loader");function y(){g.classList.add("active")}function L(){g.classList.remove("active")}function q(){d.classList.add("active")}function l(){d.classList.remove("active")}let s=1,c=1;$.addEventListener("submit",O);async function O(r){r.preventDefault();const o=r.target.elements[0].value.trim();if(o!==""){n=o,M.innerHTML="",s=1,y();try{const e=await m(n,s);e.hits.length===0?(v.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",maxWidth:432}),l()):(h(e),c=Math.ceil(e.totalHits/15),s<c?q():l())}catch(e){console.log(e)}finally{L()}}}d.addEventListener("click",P);async function P(){s+=1,y();try{const r=await m(n,s);h(r),s>=c&&l()}catch(r){console.log(r)}finally{L()}}
//# sourceMappingURL=index.js.map
