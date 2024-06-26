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

'use strict';

// MODULES //

var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var full = require( '@stdlib/array-full' );
var defaults = require( '@stdlib/array-defaults' );


// VARIABLES //

var Z128 = new Complex128( 1.0, 0.0 );
var Z64 = new Complex64( 1.0, 0.0 );
var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// MAIN //

/**
* Creates an array filled with ones and having a specified length.
*
* @param {NonNegativeInteger} length - array length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = ones( 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = ones( 2, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
function ones( length ) {
	var dtype;
	var value;

	if ( arguments.length > 1 ) {
		dtype = arguments[ 1 ];
	} else {
		dtype = DEFAULT_DTYPE;
	}
	if ( dtype === 'complex128' ) {
		value = Z128;
	} else if ( dtype === 'complex64' ) {
		value = Z64;
	} else {
		value = 1;
	}
	return full( length, value, dtype );
}


// EXPORTS //

module.exports = ones;
