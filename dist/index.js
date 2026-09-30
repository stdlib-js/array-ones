"use strict";var n=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var u=n(function(D,t){"use strict";var s=require("@stdlib/array-base-assert-contains").factory,o=require("@stdlib/complex-float64-ctor"),l=require("@stdlib/complex-float32-ctor"),v=require("@stdlib/array-full"),f=require("@stdlib/array-dtypes"),m=require("@stdlib/array-defaults"),p=require("@stdlib/array-base-join"),c=require("@stdlib/string-format"),d=new o(1,0),q=new l(1,0),i=f("numeric_and_generic"),g=s(i),x=m.get("dtypes.default");function y(a){var e,r;if(arguments.length>1){if(e=arguments[1],!g(e))throw new TypeError(c('invalid argument. Second argument must be one of the following: "%s". Value: `%s`.',p(i,'", "'),e))}else e=x;return e==="complex128"?r=d:e==="complex64"?r=q:r=1,v(a,r,e)}t.exports=y});var w=u();module.exports=w;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
