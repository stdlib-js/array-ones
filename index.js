// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ones=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(e){return"number"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&p.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[w],r=g(e,w);try{e[w]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[w]=t:delete e[w],n}:function(e){return m.call(e)},v=Number,d=v.prototype.toString;var E=h();function _(e){return"object"==typeof e&&(e instanceof v||(E?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function T(e){return y(e)||_(e)}function A(e,r){if(!(this instanceof A))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!y(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(T,"isPrimitive",y),c(T,"isObject",_),c(A,"BYTES_PER_ELEMENT",8),c(A.prototype,"BYTES_PER_ELEMENT",8),c(A.prototype,"byteLength",16),c(A.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(A.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var j="function"==typeof Math.fround?Math.fround:null,x="function"==typeof Float32Array;var B=Number.POSITIVE_INFINITY,L="function"==typeof Float32Array?Float32Array:null;var V="function"==typeof Float32Array?Float32Array:void 0;var S=function(){var e,r,t;if("function"!=typeof L)return!1;try{r=new L([1,3.14,-3.14,5e40]),t=r,e=(x&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===B}catch(r){e=!1}return e}()?V:function(){throw new Error("not implemented")},R=new S(1);var k="function"==typeof j?j:function(e){return R[0]=e,R[0]};function I(e,r){if(!(this instanceof I))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!y(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:k(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:k(r)}),this}c(I,"BYTES_PER_ELEMENT",4),c(I.prototype,"BYTES_PER_ELEMENT",4),c(I.prototype,"byteLength",8),c(I.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(I.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var O=v.NEGATIVE_INFINITY,M=Math.floor;function C(e){return M(e)===e}function N(e){return e<B&&e>O&&C(e)}function F(e){return y(e)&&N(e)}function P(e){return _(e)&&N(e.valueOf())}function U(e){return F(e)||P(e)}function Y(e){return F(e)&&e>=0}function W(e){return P(e)&&e.valueOf()>=0}function G(e){return Y(e)||W(e)}c(U,"isPrimitive",F),c(U,"isObject",P),c(G,"isPrimitive",Y),c(G,"isObject",W);var J="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null;var X="function"==typeof Float64Array?Float64Array:void 0;var q=function(){var e,r,t;if("function"!=typeof z)return!1;try{r=new z([1,3.14,-3.14,NaN]),t=r,e=(J&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?X:function(){throw new Error("not implemented")},D="function"==typeof Int16Array;var H="function"==typeof Int16Array?Int16Array:null;var K="function"==typeof Int16Array?Int16Array:void 0;var Q=function(){var e,r,t;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,32768]),t=r,e=(D&&t instanceof Int16Array||"[object Int16Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?K:function(){throw new Error("not implemented")},Z="function"==typeof Int32Array;var $="function"==typeof Int32Array?Int32Array:null;var ee="function"==typeof Int32Array?Int32Array:void 0;var re=function(){var e,r,t;if("function"!=typeof $)return!1;try{r=new $([1,3.14,-3.14,2147483648]),t=r,e=(Z&&t instanceof Int32Array||"[object Int32Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?ee:function(){throw new Error("not implemented")},te="function"==typeof Int8Array;var ne="function"==typeof Int8Array?Int8Array:null;var oe="function"==typeof Int8Array?Int8Array:void 0;var ie=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,128]),t=r,e=(te&&t instanceof Int8Array||"[object Int8Array]"===b(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")},ae="function"==typeof Uint16Array;var ue="function"==typeof Uint16Array?Uint16Array:null;var fe="function"==typeof Uint16Array?Uint16Array:void 0;var le=function(){var e,r,t;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,65536,65537]),t=r,e=(ae&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")},ce="function"==typeof Uint32Array;var ye="function"==typeof Uint32Array?Uint32Array:null;var se="function"==typeof Uint32Array?Uint32Array:void 0;var he=function(){var e,r,t;if("function"!=typeof ye)return!1;try{r=new ye(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ce&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")},me="function"==typeof Uint8Array;var pe="function"==typeof Uint8Array?Uint8Array:null;var ge="function"==typeof Uint8Array?Uint8Array:void 0;var we=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe(r=[1,3.14,-3.14,256,257]),t=r,e=(me&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")},be="function"==typeof Uint8ClampedArray;var ve="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var de="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Ee=function(){var e,r,t;if("function"!=typeof ve)return!1;try{r=new ve([-1,0,1,3.14,4.99,255,256]),t=r,e=(be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};function _e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&C(e.length)&&e.length>=0&&e.length<=4294967295}function Te(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&C(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ae="function"==typeof ArrayBuffer;function je(e){return Ae&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===b(e)}var xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};function Be(e){return"object"==typeof e&&null!==e&&!xe(e)}var Le=/./;function Ve(e){return"boolean"==typeof e}var Se=Boolean.prototype.toString;var Re=h();function ke(e){return"object"==typeof e&&(e instanceof Boolean||(Re?function(e){try{return Se.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function Ie(e){return Ve(e)||ke(e)}function Oe(){return new Function("return this;")()}c(Ie,"isPrimitive",Ve),c(Ie,"isObject",ke);var Me="object"==typeof self?self:null,Ce="object"==typeof window?window:null,Ne="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Fe="object"==typeof Ne?Ne:null;var Pe=function(e){if(arguments.length){if(!Ve(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Oe()}if(Me)return Me;if(Ce)return Ce;if(Fe)return Fe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ue=Pe.document&&Pe.document.childNodes,Ye=Int8Array;function We(){return/^\s*function\s*([^(]*)/i}var Ge=/^\s*function\s*([^(]*)/i;function Je(e){return null!==e&&"object"==typeof e}function ze(e){var r,t,n,o;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ge.exec(n.toString()))return r[1]}return Je(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(We,"REGEXP",Ge),c(Je,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!xe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Je));var Xe="function"==typeof Le||"object"==typeof Ye||"function"==typeof Ue?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ze(e).toLowerCase():r};function qe(e){return"function"===Xe(e)}function De(e){return e instanceof A||e instanceof I||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function He(e){return C(e/2)}function Ke(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var Qe=Ke()?Symbol.iterator:null;function Ze(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function $e(e){return e.re}function er(e){return e.im}function rr(e,r){return new S(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function tr(e,r){return new q(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function nr(e,r){return e[r]}function or(e,r){return e.get(r)}function ir(e,r,t){e[r]=t}function ar(e,r,t){e.set(t,r)}function ur(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?or:nr,setter:r?ar:ir}}function fr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(_e(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!De(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push($e(n),er(n))}return r}function lr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,_e(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!De(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push($e(i),er(i))}return n}function cr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!De(n=r[o]))return null;e[i]=$e(n),e[i+1]=er(n),i+=2}return e}var yr=2*S.BYTES_PER_ELEMENT,sr=Ke();function hr(e){return e instanceof wr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function mr(e){return e===wr||"Complex128Array"===e.name}function pr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===yr}function gr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*yr}function wr(){var e,r,t,n;if(r=arguments.length,!(this instanceof wr))return 0===r?new wr:1===r?new wr(arguments[0]):2===r?new wr(arguments[0],arguments[1]):new wr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new S(0);else if(1===r)if(Y(arguments[0]))t=new S(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&xe(t)&&De(t[0])){if(null===(t=cr(new S(2*n),t))){if(!He(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new S(arguments[0])}}else{if(pr(t))t=rr(t,0);else if(gr(t))t=tr(t,0);else if(!He(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new S(t)}else if(je(arguments[0])){if(!C((t=arguments[0]).byteLength/yr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+yr+". Byte length: `"+t.byteLength+"`.");t=new S(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===sr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!qe(t[Qe]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!qe((t=t[Qe]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=fr(t))instanceof Error)throw t;t=new S(t)}else{if(!je(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Y(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!C(e/yr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+yr+". Value: `"+e+"`.");if(2===r){if(!C((n=t.byteLength-e)/yr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+yr+". View byte length: `"+n+"`.");t=new S(t,e)}else{if(!Y(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*yr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*yr+"`.");t=new S(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function br(e){return e.re}function vr(e){return e.im}function dr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(_e(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!De(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(br(n),vr(n))}return r}function Er(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,_e(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!De(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(br(i),vr(i))}return n}function _r(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!De(n=r[o]))return null;e[i]=br(n),e[i+1]=vr(n),i+=2}return e}c(wr,"BYTES_PER_ELEMENT",yr),c(wr,"name","Complex64Array"),c(wr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!qe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!qe(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(hr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(De(l=n.call(r,e.get(c),c)))i[y]=$e(l),i[y+1]=er(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=ur(e),c=0;c<u;c++)if(!De(a.getter(e,c))){f=!0;break}if(f){if(!He(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(De(l=n.call(r,a.getter(e,c),c)))i[y]=$e(l),i[y+1]=er(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Be(e)&&sr&&qe(e[Qe])){if(!qe((i=e[Qe]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?lr(i,n,r):fr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(wr,"of",(function(){var e,r;if(!qe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ze(wr.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(wr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(wr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(wr.prototype,"BYTES_PER_ELEMENT",wr.BYTES_PER_ELEMENT),c(wr.prototype,"copyWithin",(function(e,r){if(!hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(wr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new I(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Qe&&c(t,Qe,(function(){return r.entries()})),t})),c(wr.prototype,"get",(function(e){var r;if(!hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Y(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new I((r=this._buffer)[e*=2],r[e+1])})),Ze(wr.prototype,"length",(function(){return this._length})),c(wr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Y(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(De(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=$e(e),void(n[t+1]=er(e))}if(hr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*yr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new S(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!De(e[f])){i=!0;break}if(i){if(!He(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*yr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new S(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=$e(u),n[t+1]=er(u),t+=2}}));var Tr=2*q.BYTES_PER_ELEMENT,Ar=Ke();function jr(e){return e instanceof Vr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function xr(e){return e===Vr||"Complex64Array"===e.name}function Br(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Tr/2}function Lr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Tr}function Vr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Vr))return 0===r?new Vr:1===r?new Vr(arguments[0]):2===r?new Vr(arguments[0],arguments[1]):new Vr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new q(0);else if(1===r)if(Y(arguments[0]))t=new q(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&xe(t)&&De(t[0])){if(null===(t=_r(new q(2*n),t))){if(!He(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new q(arguments[0])}}else{if(Br(t))t=rr(t,0);else if(Lr(t))t=tr(t,0);else if(!He(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new q(t)}else if(je(arguments[0])){if(!C((t=arguments[0]).byteLength/Tr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Tr+". Byte length: `"+t.byteLength+"`.");t=new q(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ar)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!qe(t[Qe]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!qe((t=t[Qe]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=dr(t))instanceof Error)throw t;t=new q(t)}else{if(!je(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Y(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!C(e/Tr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Tr+". Value: `"+e+"`.");if(2===r){if(!C((n=t.byteLength-e)/Tr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Tr+". View byte length: `"+n+"`.");t=new q(t,e)}else{if(!Y(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Tr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Tr+"`.");t=new q(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Vr,"BYTES_PER_ELEMENT",Tr),c(Vr,"name","Complex128Array"),c(Vr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!qe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!qe(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(jr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(De(l=n.call(r,e.get(c),c)))i[y]=br(l),i[y+1]=vr(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Te(e)){if(n){for(u=e.length,a=ur(e),c=0;c<u;c++)if(!De(a.getter(e,c))){f=!0;break}if(f){if(!He(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(De(l=n.call(r,a.getter(e,c),c)))i[y]=br(l),i[y+1]=vr(l);else{if(!(_e(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Be(e)&&Ar&&qe(e[Qe])){if(!qe((i=e[Qe]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Er(i,n,r):dr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Vr,"of",(function(){var e,r;if(!qe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Ze(Vr.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(Vr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(Vr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Vr.prototype,"BYTES_PER_ELEMENT",Vr.BYTES_PER_ELEMENT),c(Vr.prototype,"copyWithin",(function(e,r){if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Vr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new A(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Qe&&c(t,Qe,(function(){return r.entries()})),t})),c(Vr.prototype,"get",(function(e){var r;if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Y(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new A((r=this._buffer)[e*=2],r[e+1])})),Ze(Vr.prototype,"length",(function(){return this._length})),c(Vr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Y(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(De(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=br(e),void(n[t+1]=vr(e))}if(jr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Tr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new q(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Te(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!De(e[f])){i=!0;break}if(i){if(!He(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Tr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new q(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=br(u),n[t+1]=vr(u),t+=2}}));var Sr={float64:q,float32:S,generic:Array,int16:Q,int32:re,int8:ie,uint16:le,uint32:he,uint8:we,uint8c:Ee,complex64:wr,complex128:Vr};function Rr(e){return Sr[e]||null}function kr(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}function Ir(e,r,t,n,o){var i,a,u,f;for(i=t.data,a=t.setter,u=o,f=0;f<e;f++)a(i,u,r),u+=n;return t}function Or(e,r,t,n){var o,i,a,u;if(e<=0)return t;if((u=ur(t)).accessors)return Ir(e,r,u,n,o=n<0?(1-e)*n:0),u.data;if(1===n){if((a=e%8)>0)for(i=0;i<a;i++)t[i]=r;if(e<8)return t;for(i=a;i<e;i+=8)t[i]=r,t[i+1]=r,t[i+2]=r,t[i+3]=r,t[i+4]=r,t[i+5]=r,t[i+6]=r,t[i+7]=r;return t}for(o=n<0?(1-e)*n:0,i=0;i<e;i++)t[o]=r,o+=n;return t}function Mr(e,r){var t,n,o;if(!Y(e))throw new TypeError("invalid argument. First argument must be a nonnegative integer. Value: `"+e+"`.");if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return kr(r,e);if(null===(n=Rr(t)))throw new TypeError("invalid argument. Third argument must be a recognized data type. Value: `"+t+"`.");return Or(e,r,o=new n(e),1),o}c(Or,"ndarray",(function(e,r,t,n,o){var i,a,u,f;if(e<=0)return t;if((u=ur(t)).accessors)return Ir(e,r,u,n,o),u.data;if(i=o,1===n){if((a=e%8)>0)for(f=0;f<a;f++)t[i]=r,i+=n;if(e<8)return t;for(f=a;f<e;f+=8)t[i]=r,t[i+1]=r,t[i+2]=r,t[i+3]=r,t[i+4]=r,t[i+5]=r,t[i+6]=r,t[i+7]=r,i+=8;return t}for(f=0;f<e;f++)t[i]=r,i+=n;return t}));var Cr=new A(1,0),Nr=new I(1,0);return function(e){var r;return Mr(e,"complex128"===(r=arguments.length>1?arguments[1]:"float64")?Cr:"complex64"===r?Nr:1,r)}}));
//# sourceMappingURL=index.js.map
