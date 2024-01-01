// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ones=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,P=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||U.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var N=I;function Y(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&X.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=G()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[q]=t:delete r[q],n}:function(r){return Z.call(r)},H=Number,K=H.prototype.toString;var Q=G();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function er(r){return W(r)||rr(r)}function tr(r,e){if(!(this instanceof tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(er,"isPrimitive",W),Y(er,"isObject",rr),Y(tr,"BYTES_PER_ELEMENT",8),Y(tr.prototype,"BYTES_PER_ELEMENT",8),Y(tr.prototype,"byteLength",16),Y(tr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(tr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var nr="function"==typeof Math.fround?Math.fround:null,ir="function"==typeof Float32Array;var or=Number.POSITIVE_INFINITY,ar="function"==typeof Float32Array?Float32Array:null;var ur="function"==typeof Float32Array?Float32Array:void 0;var fr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,5e40]),t=e,r=(ir&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===or}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")},lr=new fr(1);var cr="function"==typeof nr?nr:function(r){return lr[0]=r,lr[0]};function sr(r,e){if(!(this instanceof sr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:cr(r)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:cr(e)}),this}Y(sr,"BYTES_PER_ELEMENT",4),Y(sr.prototype,"BYTES_PER_ELEMENT",4),Y(sr.prototype,"byteLength",8),Y(sr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(sr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var yr=H.NEGATIVE_INFINITY,pr=Math.floor;function hr(r){return pr(r)===r}function gr(r){return r<or&&r>yr&&hr(r)}function mr(r){return W(r)&&gr(r)}function wr(r){return rr(r)&&gr(r.valueOf())}function br(r){return mr(r)||wr(r)}function vr(r){return mr(r)&&r>=0}function dr(r){return wr(r)&&r.valueOf()>=0}function Er(r){return vr(r)||dr(r)}Y(br,"isPrimitive",mr),Y(br,"isObject",wr),Y(Er,"isPrimitive",vr),Y(Er,"isObject",dr);var Ar="function"==typeof Float64Array;var Tr="function"==typeof Float64Array?Float64Array:null;var _r="function"==typeof Float64Array?Float64Array:void 0;var xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,NaN]),t=e,r=(Ar&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")},jr="function"==typeof Int16Array;var Vr="function"==typeof Int16Array?Int16Array:null;var kr="function"==typeof Int16Array?Int16Array:void 0;var Lr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,32768]),t=e,r=(jr&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Rr="function"==typeof Int32Array;var Sr="function"==typeof Int32Array?Int32Array:null;var Br="function"==typeof Int32Array?Int32Array:void 0;var Ir=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,2147483648]),t=e,r=(Rr&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")},Cr="function"==typeof Int8Array;var Fr="function"==typeof Int8Array?Int8Array:null;var Or="function"==typeof Int8Array?Int8Array:void 0;var Mr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr([1,3.14,-3.14,128]),t=e,r=(Cr&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")},Pr="function"==typeof Uint16Array;var Ur="function"==typeof Uint16Array?Uint16Array:null;var Nr="function"==typeof Uint16Array?Uint16Array:void 0;var Yr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Pr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Wr="function"==typeof Uint32Array;var $r="function"==typeof Uint32Array?Uint32Array:null;var Gr="function"==typeof Uint32Array?Uint32Array:void 0;var Zr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Wr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")},Xr="function"==typeof Uint8Array;var zr="function"==typeof Uint8Array?Uint8Array:null;var Jr="function"==typeof Uint8Array?Uint8Array:void 0;var qr=function(){var r,e,t;if("function"!=typeof zr)return!1;try{e=new zr(e=[1,3.14,-3.14,256,257]),t=e,r=(Xr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},Dr="function"==typeof Uint8ClampedArray;var Hr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Kr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Qr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Dr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};function re(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=4294967295}function ee(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=9007199254740991}var te="function"==typeof ArrayBuffer;function ne(r){return te&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===D(r)}var ie=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function oe(r){return"object"==typeof r&&null!==r&&!ie(r)}var ae=/./;function ue(r){return"boolean"==typeof r}var fe=Boolean,le=Boolean.prototype.toString;var ce=G();function se(r){return"object"==typeof r&&(r instanceof fe||(ce?function(r){try{return le.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function ye(r){return ue(r)||se(r)}function pe(){return new Function("return this;")()}Y(ye,"isPrimitive",ue),Y(ye,"isObject",se);var he="object"==typeof self?self:null,ge="object"==typeof window?window:null,me="object"==typeof global?global:null,we="object"==typeof globalThis?globalThis:null;var be=function(r){if(arguments.length){if(!ue(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return pe()}if(we)return we;if(he)return he;if(ge)return ge;if(me)return me;throw new Error("unexpected error. Unable to resolve global object.")}(),ve=be.document&&be.document.childNodes,de=Int8Array;function Ee(){return/^\s*function\s*([^(]*)/i}var Ae=/^\s*function\s*([^(]*)/i;function Te(r){return null!==r&&"object"==typeof r}function _e(r){return Te(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function xe(r){var e,t,n;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ae.exec(n.toString()))return e[1]}return _e(r)?"Buffer":t}Y(Ee,"REGEXP",Ae),Y(Te,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ie(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Te));var je="function"==typeof ae||"object"==typeof de||"function"==typeof ve?function(r){return xe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?xe(r).toLowerCase():e};function Ve(r){return"function"===je(r)}function ke(r){return r instanceof tr||r instanceof sr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Le(r){return hr(r/2)}function Re(){return"function"==typeof J&&"symbol"==typeof J("foo")&&z(J,"iterator")&&"symbol"==typeof J.iterator}var Se=Re()?Symbol.iterator:null;function Be(r,e,t){N(r,e,{configurable:!1,enumerable:!1,get:t})}function Ie(r){return r.re}function Ce(r){return r.im}function Fe(r,e){return new fr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Oe(r,e){return new xr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var Me={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Pe(r){var e=Me[r];return"function"==typeof e?e:Me.default}var Ue={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Ne(r){var e=Ue[r];return"function"==typeof e?e:Ue.default}function Ye(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(re(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ke(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ie(n),Ce(n))}return e}function We(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,re(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ke(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ie(o),Ce(o))}return n}function $e(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!ke(n=e[i]))return null;r[o]=Ie(n),r[o+1]=Ce(n),o+=2}return r}var Ge=2*fr.BYTES_PER_ELEMENT,Ze=Re();function Xe(r){return r instanceof De||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ze(r){return r===De||"Complex128Array"===r.name}function Je(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ge}function qe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Ge}function De(){var r,e,t,n;if(e=arguments.length,!(this instanceof De))return 0===e?new De:1===e?new De(arguments[0]):2===e?new De(arguments[0],arguments[1]):new De(arguments[0],arguments[1],arguments[2]);if(0===e)t=new fr(0);else if(1===e)if(vr(arguments[0]))t=new fr(2*arguments[0]);else if(ee(arguments[0]))if((n=(t=arguments[0]).length)&&ie(t)&&ke(t[0])){if(null===(t=$e(new fr(2*n),t))){if(!Le(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new fr(arguments[0])}}else{if(Je(t))t=Fe(t,0);else if(qe(t))t=Oe(t,0);else if(!Le(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new fr(t)}else if(ne(arguments[0])){if(!hr((t=arguments[0]).byteLength/Ge))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new fr(t)}else{if(!oe(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Ze)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Se]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Se]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Ye(t))instanceof Error)throw t;t=new fr(t)}else{if(!ne(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!vr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!hr(r/Ge))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(2===e){if(!hr((n=t.byteLength-r)/Ge))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,n));t=new fr(t,r)}else{if(!vr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Ge>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Ge));t=new fr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function He(r){return r.re}function Ke(r){return r.im}function Qe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(re(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ke(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(He(n),Ke(n))}return e}function rt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,re(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ke(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(He(o),Ke(o))}return n}function et(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!ke(n=e[i]))return null;r[o]=He(n),r[o+1]=Ke(n),o+=2}return r}Y(De,"BYTES_PER_ELEMENT",Ge),Y(De,"name","Complex64Array"),Y(De,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ve(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Xe(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(ke(c=n.call(e,r.get(s),s)))o[y]=Ie(c),o[y+1]=Ce(c);else{if(!(re(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ee(r)){if(n){for(f=r.length,u=r.get&&r.set?Ne("default"):Pe("default"),s=0;s<f;s++)if(!ke(u(r,s))){l=!0;break}if(l){if(!Le(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(ke(c=n.call(e,u(r,s),s)))o[y]=Ie(c),o[y+1]=Ce(c);else{if(!(re(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(oe(r)&&Ze&&Ve(r[Se])){if(!Ve((o=r[Se]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?We(o,n,e):Ye(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(De,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Be(De.prototype,"buffer",(function(){return this._buffer.buffer})),Be(De.prototype,"byteLength",(function(){return this._buffer.byteLength})),Be(De.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(De.prototype,"BYTES_PER_ELEMENT",De.BYTES_PER_ELEMENT),Y(De.prototype,"copyWithin",(function(r,e){if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(De.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new sr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Se&&Y(t,Se,(function(){return e.entries()})),t})),Y(De.prototype,"get",(function(r){var e;if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new sr((e=this._buffer)[r*=2],e[r+1])})),Be(De.prototype,"length",(function(){return this._length})),Y(De.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!vr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(ke(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ie(r),void(n[t+1]=Ce(r))}if(Xe(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new fr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ee(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!ke(r[f])){o=!0;break}if(o){if(!Le(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new fr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ie(u),n[t+1]=Ce(u),t+=2}}));var tt=2*xr.BYTES_PER_ELEMENT,nt=Re();function it(r){return r instanceof ft||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ot(r){return r===ft||"Complex64Array"===r.name}function at(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===tt/2}function ut(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===tt}function ft(){var r,e,t,n;if(e=arguments.length,!(this instanceof ft))return 0===e?new ft:1===e?new ft(arguments[0]):2===e?new ft(arguments[0],arguments[1]):new ft(arguments[0],arguments[1],arguments[2]);if(0===e)t=new xr(0);else if(1===e)if(vr(arguments[0]))t=new xr(2*arguments[0]);else if(ee(arguments[0]))if((n=(t=arguments[0]).length)&&ie(t)&&ke(t[0])){if(null===(t=et(new xr(2*n),t))){if(!Le(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new xr(arguments[0])}}else{if(at(t))t=Fe(t,0);else if(ut(t))t=Oe(t,0);else if(!Le(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new xr(t)}else if(ne(arguments[0])){if(!hr((t=arguments[0]).byteLength/tt))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",tt,t.byteLength));t=new xr(t)}else{if(!oe(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===nt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Se]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Se]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Qe(t))instanceof Error)throw t;t=new xr(t)}else{if(!ne(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!vr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!hr(r/tt))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",tt,r));if(2===e){if(!hr((n=t.byteLength-r)/tt))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",tt,n));t=new xr(t,r)}else{if(!vr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*tt>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*tt));t=new xr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ft,"BYTES_PER_ELEMENT",tt),Y(ft,"name","Complex128Array"),Y(ft,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ve(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(it(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(ke(c=n.call(e,r.get(s),s)))o[y]=He(c),o[y+1]=Ke(c);else{if(!(re(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ee(r)){if(n){for(f=r.length,u=r.get&&r.set?Ne("default"):Pe("default"),s=0;s<f;s++)if(!ke(u(r,s))){l=!0;break}if(l){if(!Le(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(ke(c=n.call(e,u(r,s),s)))o[y]=He(c),o[y+1]=Ke(c);else{if(!(re(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(oe(r)&&nt&&Ve(r[Se])){if(!Ve((o=r[Se]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?rt(o,n,e):Qe(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(ft,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Be(ft.prototype,"buffer",(function(){return this._buffer.buffer})),Be(ft.prototype,"byteLength",(function(){return this._buffer.byteLength})),Be(ft.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ft.prototype,"BYTES_PER_ELEMENT",ft.BYTES_PER_ELEMENT),Y(ft.prototype,"copyWithin",(function(r,e){if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(ft.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new tr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Se&&Y(t,Se,(function(){return e.entries()})),t})),Y(ft.prototype,"get",(function(r){var e;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new tr((e=this._buffer)[r*=2],e[r+1])})),Be(ft.prototype,"length",(function(){return this._length})),Y(ft.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!vr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(ke(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=He(r),void(n[t+1]=Ke(r))}if(it(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*tt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new xr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!ee(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!ke(r[f])){o=!0;break}if(o){if(!Le(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*tt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new xr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=He(u),n[t+1]=Ke(u),t+=2}}));var lt={float64:xr,float32:fr,generic:Array,int16:Lr,int32:Ir,int8:Mr,uint16:Yr,uint32:Zr,uint8:qr,uint8c:Qr,complex64:De,complex128:ft};function ct(r){return lt[r]||null}function st(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}var yt="function";var pt={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function ht(r){var e=pt[r];return"function"==typeof e?e:pt.default}var gt={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function mt(r){var e=gt[r];return"function"==typeof e?e:gt.default}var wt={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},bt=[xr,fr,Ir,Zr,Lr,Yr,Mr,qr,Qr,De,ft],vt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dt=vt.length;function Et(r){var e,t=function(r){var e;if(ie(r))return"generic";if(_e(r))return null;for(e=0;e<dt;e++)if(r instanceof bt[e])return vt[e];return wt[xe(r)]||null}(r);return typeof(e=r).get===yt&&typeof e.set===yt?{accessorProtocol:!0,accessors:[Ne(t),mt(t)]}:{accessorProtocol:!1,accessors:[Pe(t),ht(t)]}}function At(r){var e=Et(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function Tt(r,e,t,n,i){var o,a,u,f;for(o=t.data,a=t.accessors[1],u=i,f=0;f<r;f++)a(o,u,e),u+=n;return t}function _t(r,e,t,n){var i,o,a,u;if(r<=0)return t;if((u=At(t)).accessorProtocol)return Tt(r,e,u,n,i=n<0?(1-r)*n:0),u.data;if(1===n){if((a=r%8)>0)for(o=0;o<a;o++)t[o]=e;if(r<8)return t;for(o=a;o<r;o+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e;return t}for(i=n<0?(1-r)*n:0,o=0;o<r;o++)t[i]=e,i+=n;return t}function xt(r,e){var t,n,i;if(!vr(r))throw new TypeError(B("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r));if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return st(e,r);if(null===(n=ct(t)))throw new TypeError(B("invalid argument. Third argument must be a recognized data type. Value: `%s`.",t));return _t(r,e,i=new n(r),1),i}Y(_t,"ndarray",(function(r,e,t,n,i){var o,a,u,f;if(r<=0)return t;if((u=At(t)).accessorProtocol)return Tt(r,e,u,n,i),u.data;if(o=i,1===n){if((a=r%8)>0)for(f=0;f<a;f++)t[o]=e,o+=n;if(r<8)return t;for(f=a;f<r;f+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e,o+=8;return t}for(f=0;f<r;f++)t[o]=e,o+=n;return t}));var jt=new tr(1,0),Vt=new sr(1,0);return function(r){var e;return xt(r,"complex128"===(e=arguments.length>1?arguments[1]:"float64")?jt:"complex64"===e?Vt:1,e)}}));
//# sourceMappingURL=index.js.map
