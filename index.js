import{a as L,S as w,i as f}from"./assets/vendor-Qob_5Ba8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const v="https://pixabay.com/api/",b="46844024-31822d2c5a5dcad2dc3c03c6f";async function h(a,o){try{return(await L.get(v,{params:{key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}})).data}catch(e){throw new Error(e)}}const S=document.querySelector(".gallery");function m(a){const o=a.hits.map(e=>`<li class="gallery-item">
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
  </li>`).join("");S.insertAdjacentHTML("beforeend",o),new w(".gallery a")}const q=document.querySelector(".form"),M=document.querySelector(".gallery"),d=document.querySelector(".load-btn");let c="";const g=document.querySelector(".loader");function p(){g.classList.add("active")}function y(){g.classList.remove("active")}function $(){d.classList.add("active")}function l(){d.classList.remove("active")}let s=1,i=1;q.addEventListener("submit",C);async function C(a){a.preventDefault();const o=a.target.elements[0].value.trim();if(o!==""){c=o,M.innerHTML="",s=1,p();try{const e=await h(c,s);e.hits.length===0?(f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",maxWidth:432}),l()):(m(e),i=Math.ceil(e.totalHits/15),s<i?$():(s>i||s===i)&&(l(),f.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",maxWidth:432})))}catch(e){console.log(e)}finally{y()}}}d.addEventListener("click",P);async function P(){s+=1,p();try{const e=await h(c,s);m(e),s>=i&&l()}catch(e){console.log(e)}finally{y()}const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*3-72,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
