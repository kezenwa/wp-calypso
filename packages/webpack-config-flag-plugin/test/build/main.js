(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./config.js
function isEnabled( flag ) {
	return 'argh';
}

/* harmony default export */ var config = ({ isEnabled });

// CONCATENATED MODULE: ./default-import/config/module.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./default-import/config/function.js


function fn() {
	// Should be replaced with true
	if ( true ) {
	}
}

// CONCATENATED MODULE: ./default-import/config/wrong-flag.js


// Should NOT be replaced with true.
if ( config.isEnabled( 'bar' ) ) {
}

// CONCATENATED MODULE: ./default-import/config/rename.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./default-import/config/wrong-path.js


// Should NOT be replaced with true
if ( /* Cannot get final name for export "default" in "./default-import/config/index.js" (known exports: , known reexports: ) */ undefined.isEnabled( 'foo' ) ) {
}

// CONCATENATED MODULE: ./default-import/config/shadowed-by-param.js


function shadowed_by_param_fn( config ) {
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./default-import/config/shadowed-by-var.js


function shadowed_by_var_fn() {
	const config = { isEnabled: () => false };
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./default-import/config/index.js








// CONCATENATED MODULE: ./default-import/calypso-config/function.js


function function_fn() {
	// Should be replaced with true
	if ( true ) {
	}
}

// CONCATENATED MODULE: ./default-import/calypso-config/module.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./default-import/calypso-config/rename.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./default-import/calypso-config/shadowed-by-param.js


function calypso_config_shadowed_by_param_fn( config ) {
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./default-import/calypso-config/shadowed-by-var.js


function calypso_config_shadowed_by_var_fn() {
	const config = { isEnabled: () => false };
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./default-import/calypso-config/wrong-flag.js


// Should NOT be replaced with true.
if ( config.isEnabled( 'bar' ) ) {
}

// CONCATENATED MODULE: ./default-import/calypso-config/index.js







// CONCATENATED MODULE: ./default-import/index.js



// CONCATENATED MODULE: ./named-import/config/module.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./named-import/config/function.js


function config_function_fn() {
	// Should be replaced with true
	if ( true ) {
	}
}

// CONCATENATED MODULE: ./named-import/config/wrong-flag.js


// Should NOT be replaced with true.
if ( isEnabled( 'bar' ) ) {
}

// CONCATENATED MODULE: ./named-import/config/rename.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./named-import/config/wrong-path.js


// Should NOT be replaced with true
if ( /* Cannot get final name for export "isEnabled" in "./named-import/config/index.js" (known exports: , known reexports: ) */ undefined( 'foo' ) ) {
}

// CONCATENATED MODULE: ./named-import/config/shadowed-by-param.js


function config_shadowed_by_param_fn( isEnabled ) {
	// Should NOT be replaced with true
	if ( isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./named-import/config/shadowed-by-var.js


function config_shadowed_by_var_fn() {
	const isEnabled = () => false;
	// Should NOT be replaced with true
	if ( isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./named-import/config/index.js








// CONCATENATED MODULE: ./named-import/calypso-config/function.js


function calypso_config_function_fn() {
	// Should be replaced with true
	if ( true ) {
	}
}

// CONCATENATED MODULE: ./named-import/calypso-config/module.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./named-import/calypso-config/rename.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./named-import/calypso-config/shadowed-by-param.js


function named_import_calypso_config_shadowed_by_param_fn( isEnabled ) {
	// Should NOT be replaced with true
	if ( isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./named-import/calypso-config/shadowed-by-var.js


function named_import_calypso_config_shadowed_by_var_fn() {
	const isEnabled = () => false;
	// Should NOT be replaced with true
	if ( isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./named-import/calypso-config/wrong-flag.js


// Should NOT be replaced with true.
if ( isEnabled( 'bar' ) ) {
}

// CONCATENATED MODULE: ./named-import/calypso-config/index.js







// CONCATENATED MODULE: ./named-import/index.js



// CONCATENATED MODULE: ./namespace-import/config/module.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./namespace-import/config/function.js


function namespace_import_config_function_fn() {
	// Should be replaced with true
	if ( true ) {
	}
}

// CONCATENATED MODULE: ./namespace-import/config/wrong-flag.js


// Should NOT be replaced with true.
if ( isEnabled( 'bar' ) ) {
}

// CONCATENATED MODULE: ./namespace-import/config/rename.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./namespace-import/config/wrong-path.js


// Should NOT be replaced with true
if ( /* Cannot get final name for export "isEnabled" in "./namespace-import/config/index.js" (known exports: , known reexports: ) */ undefined( 'foo' ) ) {
}

// CONCATENATED MODULE: ./namespace-import/config/shadowed-by-param.js


function namespace_import_config_shadowed_by_param_fn( config ) {
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./namespace-import/config/shadowed-by-var.js


function namespace_import_config_shadowed_by_var_fn() {
	const config = { isEnabled: () => false };
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./namespace-import/config/index.js








// CONCATENATED MODULE: ./namespace-import/calypso-config/function.js


function namespace_import_calypso_config_function_fn() {
	// Should be replaced with true
	if ( true ) {
	}
}

// CONCATENATED MODULE: ./namespace-import/calypso-config/module.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./namespace-import/calypso-config/rename.js


// Should be replaced with true
if ( true ) {
}

// CONCATENATED MODULE: ./namespace-import/calypso-config/shadowed-by-param.js


function namespace_import_calypso_config_shadowed_by_param_fn( config ) {
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./namespace-import/calypso-config/shadowed-by-var.js


function namespace_import_calypso_config_shadowed_by_var_fn() {
	const config = { isEnabled: () => false };
	// Should NOT be replaced with true
	if ( config.isEnabled( 'foo' ) ) {
	}
}

// CONCATENATED MODULE: ./namespace-import/calypso-config/wrong-flag.js


// Should NOT be replaced with true.
if ( isEnabled( 'bar' ) ) {
}

// CONCATENATED MODULE: ./namespace-import/calypso-config/index.js







// CONCATENATED MODULE: ./namespace-import/index.js



// CONCATENATED MODULE: ./main.js





/***/ })

},[["./main.js","runtime~main"]]]);