(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),s=n.n(i)()(r());s.push([t.id,"* {\n    padding:0;\n    margin:0;\n}\n\nbody {\n    width: 100vw;\n    height: 200vh;\n    display: grid;\n    justify-items: center;\n    background: white;\n}\n\ncanvas {\n    opacity: 1;\n    position: fixed;\n    align-self: top;\n}",""]);const a=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},s=[],a=0;a<t.length;a++){var c=t[a],u=o.base?c[0]+o.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=r(h,o);o.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}s.push(d)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<i.length;s++){var a=n(i[s]);e[a].references--}for(var c=o(t,r),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{class t{constructor(...t){for(let e=0;e<t.length;e++)this[`x${e}`]=t[e];this.dim=t.length}add(t){if(t.dim!==this.dim)throw new Error("Cannot sum vectors of different dimension.");for(let e=0;e<this.dim;e++)this[`x${e}`]+=t[`x${e}`]}subtract(t){if(t.dim!==this.dim)throw new Error("Cannot sum vectors of different dimension.");for(let e=0;e<this.dim;e++)this[`x${e}`]-=t[`x${e}`]}scale(t){for(let e=0;e<this.dim;e++)this[`x${e}`]*=t}dotProduct(t){if(t.dim!==this.dim)throw new Error("Cannot sum vectors of different dimension.");{let e=0;for(let n=0;n<this.dim;n++)e+=this[`x${n}`]*t[`x${n}`];return e}}map(t){for(let e=0;e<this.dim;e++)this[`x${e}`]=t(this[`x${e}`])}toArray(){const t=[];for(let e=0;e<this.dim;e++)t.push(this[`x${e}`]);return t}distSquared(t=!1){if(0==t){let t=0;for(let e=0;e<this.dim;e++)t+=this[`x${e}`]**2;return t}{let e=0;for(let n=0;n<this.dim;n++)e+=(this[`x${n}`]-t[`x${n}`])**2;return e}}extendDim(t){this.dim+=1,this["x"+(this.dim-1)]=t}}class e{constructor(...t){this.array=[];for(let e=0;e<t.length;e++)this.array.push(t[e]);this.rows=t.length,this.cols=t[0].dim}transpose(){const n=[];for(let e=0;e<this.cols;e++){const o=[];for(let t=0;t<this.rows;t++)o.push(this.array[t][`x${e}`]);n.push(new t(...o))}return new e(...n)}leftMultBy(n){const o=this.transpose(),r=[];for(let e=0;e<n.array.length;e++){const i=[];for(let t=0;t<o.array.length;t++)i.push(n.array[e].dotProduct(o.array[t]));r.push(new t(...i))}return new e(...r)}}const o={create4DCube:function(){const e=[-1,1],n={points:[]};for(let o of e)for(let r of e)for(let i of e)for(let s of e)n.points.push(new t(o,r,i,s));const o={};function r(t,e){let n=0;for(let o=0;o<4;o++)t[`x${o}`]===e[`x${o}`]&&(n+=1);return 3===n}n.drawLines=[];for(let t=0;t<n.points.length;t++)for(let e=0;e<n.points.length;e++)t===e||`${t},${e}`in o||`${e},${t}`in o||r(n.points[t],n.points[e])&&(n.drawLines.push([t,e]),o[`${t},${e}`]=null);return n.center=new t(0,0,0,0),n.twoDMap=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],n},create4DTetrahedron:function(){const e={};e.points=[new t(-1.5),new t(1.5)];let n=1;for(let o=2;o<=4;o++){let o=0;for(let t=0;t<n;t++)o+=e.points[0][`x${t}`]**2;const r=Math.sqrt(9-o);for(let t of e.points)t.extendDim(0);n+=1;const i=[];for(let t=0;t<n-1;t++)i.push(0);i.push(r),e.points.push(new t(...i));const s=new t(...e.points[0].toArray());for(let t=1;t<e.points.length;t++)s.add(e.points[t]);s.scale(-1/e.points.length);for(let t of e.points)t.add(s)}e.drawLines=[];for(let t=0;t<e.points.length;t++)for(let n=t+1;n<e.points.length;n++)e.drawLines.push([t,n]);return e.center=new t(0,0,0,0),e.twoDMap=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],e},cubeShift:function(t,e){for(let n of t.points)n.add(e);t.center.add(e)},createRotationMatrix:function(n){const o=[],r=Math.cos(n),i=Math.sin(n);return o.push(new t(r,-i,0,0)),o.push(new t(i,r,0,0)),o.push(new t(0,0,r,-i)),o.push(new t(0,0,i,r)),new e(...o)},rotatePoint:function(e,n){const o=[];for(let t of n.array)o.push(t.dotProduct(e));return new t(...o)},cubeRotate:function(t,e){for(let n of t.points){n.subtract(t.center);const o=this.rotatePoint(n,e);n.x0=o.x0,n.x1=o.x1,n.x2=o.x2,n.x3=o.x3,n.add(t.center)}},projectToThree:function(e,n,o){const r=e.x0*((o-n)/(e.x3-n)),i=e.x1*((o-n)/(e.x3-n)),s=e.x2*((o-n)/(e.x3-n));return new t(r,i,s)},projectToTwo:function(e,n,o){const r=e.x0*((o-n)/(e.x2-n)),i=e.x1*((o-n)/(e.x2-n));return new t(r,i)},cubeToTwo:function(t,e,n,o,r){for(let i=0;i<t.points.length;i++){const s=this.projectToTwo(this.projectToThree(t.points[i],e,n),o,r);t.twoDMap[i][0]=s.x0,t.twoDMap[i][1]=s.x1}},cubeToFlatProjection:function(t,e,n){for(let o=0;o<t.points.length;o++){const r=this.projectToThree(t.points[o],e,n);t.twoDMap[o][0]=r.x0,t.twoDMap[o][1]=r.x1}}},r=function(t,e,n,o,r,i,s,a,c){const u=(r-e)/a,l=(i-n)/a,d=5+(o-2)/4*3,f=(5+(s-2)/4*3-d)/a;for(let o=0;o<a;o++)t.beginPath(),t.moveTo(e+o*u,n+o*l),t.lineTo(e+(o+1)*u,n+(o+1)*l),t.strokeStyle="black",t.lineWidth=(d+o*f)*(c/700),t.stroke(),t.closePath()};o.drawCube=function(t,e,n){t.clearRect(0,0,e.width,e.height);for(let o of n.drawLines){const i=n.twoDMap[o[0]],s=n.points[o[0]].x2,a=n.twoDMap[o[1]],c=n.points[o[1]].x2;r(t,i[0]*(2*e.width)+e.width/2,i[1]*(2*e.width)+e.width/2,s,a[0]*(2*e.width)+e.width/2,a[1]*(2*e.width)+e.width/2,c,5,e.width)}};const i=o;var s=n(379),a=n.n(s),c=n(795),u=n.n(c),l=n(569),d=n.n(l),f=n(565),h=n.n(f),p=n(216),w=n.n(p),m=n(589),x=n.n(m),v=n(426),y={};y.styleTagTransform=x(),y.setAttributes=h(),y.insert=d().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=w(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const g=document.createElement("canvas");document.body.appendChild(g),g.width=700,g.height=700;const b=g.getContext("2d"),M=i.create4DCube();console.log(M.twoDMap),console.log(M.drawLines);const T=i.createRotationMatrix(.0025);let $=Math.PI/2,C=Math.cos($),D=Math.sin($),P=new e(...[new t(C,0,0,-D),new t(0,1,0,0),new t(0,0,1,0),new t(D,0,0,C)]);const j=new e(...[new t(C,0,0,D),new t(0,1,0,0),new t(0,0,1,0),new t(-D,0,0,C)]).leftMultBy(T).leftMultBy(P);window.addEventListener("resize",(()=>{const t=Math.min(window.innerHeight,window.innerWidth);g.width=t,g.height=t})),setInterval((function(){i.cubeRotate(M,j),i.cubeToTwo(M,3,2.5,2,1),i.drawCube(b,g,M)}),10)})()})();