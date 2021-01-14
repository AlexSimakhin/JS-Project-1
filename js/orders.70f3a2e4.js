!function(){"use strict";var e={5037:function(e,t,n){n(9554),n(1249),n(4747),n(6992),n(9653),n(6977),n(1539),n(8783),n(4129),n(3948);var r=n(8319),i=n(8523);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}function s(e,t,n){var r=t.get(e);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(e,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}var c=new WeakMap,u=new WeakMap,l=new WeakMap,d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c.set(this,{writable:!0,value:void 0}),u.set(this,{writable:!0,value:void 0}),l.set(this,{writable:!0,value:void 0}),s(this,c,t.orders),s(this,u,t.checkout),s(this,l,t.restaurant),this.ifOrderFinished=this.getCheckoutTime()<0}var t,n;return t=e,(n=[{key:"getRestaurant",value:function(){return a(this,l)}},{key:"getCheckoutTime",value:function(){return((new Date(a(this,u)).getTime()+36e5-Date.now())/1e3/60).toFixed(0)}},{key:"getFormattedDate",value:function(){return(0,r.Z)(new Date(a(this,u)),"d MMMM yyyy",{locale:i.Z})}},{key:"getFormattedTime",value:function(){return(0,r.Z)(new Date(a(this,u)),"HH:mm a")}},{key:"getOrders",value:function(){return a(this,c)}},{key:"getCheckoutTimePercent",value:function(){var e=100-100*Number(this.getCheckoutTime())/60;return e<=100?e.toFixed(2):100}}])&&o(t.prototype,n),e}(),f=(n(2222),function(e){return'\n<div class="previous__item previous-item">\n    <div class="previous-item__header">\n        <h4 class="h4">'.concat(e.getRestaurant(),'</h4>\n        <div class="badge badge--green">Выполнен</div>\n    </div>\n\n    <div class="previous-item-info">\n        <div class="previous-item-info__date">').concat(e.getFormattedDate(),'</div>\n        <div class="previous-item-info__time">').concat(e.getFormattedTime(),'</div>\n    </div>\n\n    <ul class="previous-item-dishes">\n        ').concat(function(e){var t="";return e.getOrders().map((function(e){var n;t+='\n<li class="previous-item-dishes__item">\n    <span class="previous-item-dishes__quantity">'.concat((n=e).count,"</span>\n    ").concat(n.title,"\n</li>\n")})),t}(e),"\n    </ul>\n</div>\n")}),v=document.querySelector(".icon-button.icon-button--orange"),h=document.querySelector("#drawer"),p=document.querySelector("#drawer"),m=p.querySelector("#drawer-close");function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=document.querySelector("#active-orders"),b=document.querySelector("#previous-orders"),w=void 0===localStorage.orderOutput?new Array:JSON.parse(localStorage.getItem("orderOutput"));try{w.forEach((function(e){if(e.orders){if(e.orders.id<1||e.orders.price<1||e.orders.count<1)throw new Error("Не валидное значени.");e.orders.forEach((function(e){if(e.title.length<=5&&e.title.length>=30)throw new Error("Не валидное значение.")}))}if(e.checkout){var t=Date.parse(e.checkout);if(isNaN(t))throw new Error("Не валидная дата.");if(!(new Date(t)instanceof Date))throw new Error("Не валидная дата.");if(e.restaurant){if("string"!=typeof e.restaurant)throw new Error("Не валидное значение.");var n=["Domino’s Pizza","McDonald’s","KFC"];if(e.restaurant!==n[0]&&e.restaurant!==n[1]&&e.restaurant!==n[2])throw new Error("Не валидное название ресторана.")}}}))}catch(e){console.log(e.message)}var _=w.map((function(e){return new d(e)}));!function(){y.innerHTML=null,b.innerHTML=null;var e,t,n="",r="",i=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(_);try{for(i.s();!(e=i.n()).done;){var o=e.value;o.ifOrderFinished?r+=f(o):n+='\n<div class="coming-up__item coming-up-item">\n    <div class="coming-up-item__header">\n        <h4 class="h4">'.concat((t=o).getRestaurant(),'</h4>\n        <div class="badge badge--orange">Доставка</div>\n    </div>\n\n    <div class="coming-up-info">\n        <img src="img/icons/clock.svg" alt="">\n        <div class="coming-up-info__content">\n            <div>Заказ будет доставлен через</div>\n            <div class="coming-up-info__title">').concat(t.getCheckoutTime(),' мин</div>\n        </div>\n    </div>\n\n    <div class="progress-bar">\n        <div class="progress-bar__line" style="width: ').concat(t.getCheckoutTimePercent(),'%"></div>\n        <div class="progress-bar__overlay">\n            <div class="progress-bar__item progress-bar__item--first"></div>\n            <div class="progress-bar__item progress-bar__item--sec"></div>\n            <div class="progress-bar__item progress-bar__item--third"></div>\n        </div>\n    </div>\n</div>\n')}}catch(e){i.e(e)}finally{i.f()}y.insertAdjacentHTML("afterbegin",n),b.insertAdjacentHTML("afterbegin",r)}(),v.onclick=function(){h.classList.add("visible")},m.onclick=function(){p.classList.remove("visible")}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.x=function(){},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={486:0},t=[[5037,429,90]],r=function(){},i=function(i,o){for(var a,s,c=o[0],u=o[1],l=o[2],d=o[3],f=0,v=[];f<c.length;f++)s=c[f],n.o(e,s)&&e[s]&&v.push(e[s][0]),e[s]=0;for(a in u)n.o(u,a)&&(n.m[a]=u[a]);for(l&&l(n),i&&i(o);v.length;)v.shift()();return d&&t.push.apply(t,d),r()},o=self.webpackChunkjs_personal_projects=self.webpackChunkjs_personal_projects||[];function a(){for(var r,i=0;i<t.length;i++){for(var o=t[i],a=!0,s=1;s<o.length;s++){var c=o[s];0!==e[c]&&(a=!1)}a&&(t.splice(i--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=function(){}),r}o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o));var s=n.x;n.x=function(){return n.x=s||function(){},(r=a)()}}(),n.x()}();
//# sourceMappingURL=orders.70f3a2e4.js.map