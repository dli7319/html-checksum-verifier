(()=>{"use strict";var e,r,t={47:(e,r,t)=>{let s=(0,t(962).TX)().then((e=>e.init())),o=0;self.onmessage=e=>{let{data:{text:r,uint8Array:t,done:n}}=e;r?s=s.then((e=>(e.update(r.normalize("NFC")),o+=r.length,self.postMessage({progress:o}),e))):t&&(s=s.then((e=>(e.update(t),o+=t.byteLength,self.postMessage({progress:o}),e)))),n&&(s=s.then((e=>(self.postMessage({checksum:e.digest()}),e))))}}},s={};function o(e){var r=s[e];if(void 0!==r)return r.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,o.x=()=>{var e=o.O(void 0,[304],(()=>o(47)));return o.O(e)},e=[],o.O=(r,t,s,n)=>{if(!t){var i=1/0;for(l=0;l<e.length;l++){for(var[t,s,n]=e[l],a=!0,c=0;c<t.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(l--,1);var p=s();void 0!==p&&(r=p)}}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,s,n]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".main.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={47:1};o.f.i=(r,t)=>{e[r]||importScripts(o.p+o.u(r))};var r=self.webpackChunkhtml_checksum_verifier=self.webpackChunkhtml_checksum_verifier||[],t=r.push.bind(r);r.push=r=>{var[s,n,i]=r;for(var a in n)o.o(n,a)&&(o.m[a]=n[a]);for(i&&i(o);s.length;)e[s.pop()]=1;t(r)}})(),r=o.x,o.x=()=>o.e(304).then(r),o.x()})();