!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var i=a("bpxeT"),s=a("2TvXO"),o=a("b7ONl");function l(e){return e.map((function(e){var t=e.id,r=e.title,n=e.poster_path,a=e.genres,i=e.release_date,s=new Date(i).getFullYear(),o=a.map((function(e){return e.name})).slice(0,3).join(", ");return'<li class="gallery__item" id="'.concat(t,'">\n        <div class="gallery__film-box">\n          <img src="').concat("https://image.tmdb.org/t/p/w500").concat(n,'" alt="').concat(r,'" class="gallery__film-poster"/>\n          <button type="button" class="gallery__trailer">\n            <span class="trailer-text">Watch trailer</span>\n          </button>\n        </div>\n        <div class="gallery__title-box">\n          <h2 class="gallery__title-film">').concat(r,'</h2>\n          <h3 class="gallery__genre-film">').concat(o," | ").concat(s,"</h3>\n        </div>\n      </li>")}))}var c=a("czDmN"),u=a("6JpON"),d=a("4smAb"),p=new(0,o.default),f=document.querySelector(".library__button-watched"),g=document.querySelector(".library__button-queue"),v=document.querySelector(".gallery__list"),_="library__button-active",m=document.querySelector(".nothing_yet"),y=[];function b(){return h.apply(this,arguments)}function h(){return h=e(i)(e(s).mark((function t(){var r,n,a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g.classList.remove(_),f.classList.add(_),localStorage.getItem(c.KEY_WATCHED)){t.next=8;break}return v.innerHTML="",m.classList.add("nothing_yet-visible"),t.abrupt("return");case 8:return(0,d.addPreloader)(),r=JSON.parse(localStorage.getItem(c.KEY_WATCHED)),n=r.map(function(){var t=e(i)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getMovieDetails(r.id);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=13,Promise.all(n);case 13:y=t.sent,u.Loading.remove(300),a=l(y),v.innerHTML=a.join(""),m.classList.remove("nothing_yet-visible");case 18:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function x(){return x=e(i)(e(s).mark((function t(){var r,n,a;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f.classList.remove(_),g.classList.add(_),localStorage.getItem(c.KEY_QUEUE)){t.next=8;break}return v.innerHTML="",m.classList.add("nothing_yet-visible"),t.abrupt("return");case 8:return(0,d.addPreloader)(),r=JSON.parse(localStorage.getItem(c.KEY_QUEUE)),n=r.map(function(){var t=e(i)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getMovieDetails(r.id);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=13,Promise.all(n);case 13:y=t.sent,u.Loading.remove(300),a=l(y),v.innerHTML=a.join(""),m.classList.remove("nothing_yet-visible");case 18:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}f.addEventListener("click",b),g.addEventListener("click",(function(){return x.apply(this,arguments)})),b(),a("5xtVg"),a("cDXQO")}();
//# sourceMappingURL=library.33bfc616.js.map
