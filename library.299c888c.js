var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i);var l=i("7rYDH");function n(e){return e.map((({id:e,title:t,poster_path:a,genres:i,release_date:l})=>{const n=new Date(l).getFullYear();return`<li class="gallery__item" id="${e}">\n        <div class="gallery__film-box">\n          <img src="https://image.tmdb.org/t/p/w500${a}" alt="${t}" class="gallery__film-poster"/>\n          <button type="button" class="gallery__trailer">\n            <span class="trailer-text">Watch trailer</span>\n          </button>\n        </div>\n        <div class="gallery__title-box">\n          <h2 class="gallery__title-film">${t}</h2>\n          <h3 class="gallery__genre-film">${i.map((e=>e.name)).slice(0,3).join(", ")} | ${n}</h3>\n        </div>\n      </li>`}))}var r=i("79MDI"),o=i("7Y9D8"),s=i("ioBS9");const c=new(0,l.default),d=document.querySelector(".library__button-watched"),_=document.querySelector(".library__button-queue"),u=document.querySelector(".gallery__list"),g=document.querySelector(".nothing_yet");let y=[];async function v(){if(_.classList.remove("library__button-active"),d.classList.add("library__button-active"),!localStorage.getItem(r.KEY_WATCHED))return u.innerHTML="",void g.classList.add("nothing_yet-visible");{(0,s.addPreloader)();const e=JSON.parse(localStorage.getItem(r.KEY_WATCHED)).map((async e=>await c.getMovieDetails(e.id)));y=await Promise.all(e),o.Loading.remove(300);const t=n(y);u.innerHTML=t.join(""),g.classList.remove("nothing_yet-visible")}}d.addEventListener("click",v),_.addEventListener("click",(async function(){if(d.classList.remove("library__button-active"),_.classList.add("library__button-active"),!localStorage.getItem(r.KEY_QUEUE))return u.innerHTML="",void g.classList.add("nothing_yet-visible");{(0,s.addPreloader)();const e=JSON.parse(localStorage.getItem(r.KEY_QUEUE)).map((async e=>await c.getMovieDetails(e.id)));y=await Promise.all(e),o.Loading.remove(300);const t=n(y);u.innerHTML=t.join(""),g.classList.remove("nothing_yet-visible")}})),v(),i("bTcpz"),i("37v9V");
//# sourceMappingURL=library.299c888c.js.map
