/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Import the Break Infinity library\r\nconst BI = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'break_infinity.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n\r\n// Define function to switch tabs\r\nfunction switchTab(tabName) {\r\n    // Hide all tabs\r\n    var tabs = document.querySelectorAll('.tab');\r\n    tabs.forEach(function(tab) {\r\n        tab.style.display = 'none';\r\n    });\r\n\r\n    // Show the selected tab\r\n    document.getElementById(tabName).style.display = 'block';\r\n}\r\n\r\n// Add event listeners to tab buttons\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    // Switch to the \"Main\" tab when the page is loaded\r\n    switchTab('main');\r\n\r\n    var tabButtons = document.querySelectorAll('.tab-button');\r\n    tabButtons.forEach(function(button) {\r\n        button.addEventListener('click', function() {\r\n            var tabName = this.getAttribute('data-tab');\r\n            switchTab(tabName);\r\n        });\r\n    });\r\n});\r\n\r\nlet soundEnabled = true; // Ensure sound is enabled by default\r\n\r\nfunction toggleSound() {\r\n    soundEnabled = !soundEnabled;\r\n    if (soundEnabled) {\r\n        // Play a sound effect\r\n        playSoundEffect();\r\n    }\r\n}\r\n\r\nfunction setNumberFormat(selectedFormat) {\r\n    numberFormat = selectedFormat.value;\r\n    // You can add additional logic here if needed\r\n}\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    initializeSoundEffects();\r\n});\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;