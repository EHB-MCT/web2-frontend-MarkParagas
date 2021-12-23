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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let html = '';\r\n\r\nwindow.onload = () => {\r\n  document.body.appendChild(component());\r\n\r\n  // When User scroll down - Background changes\r\n  window.addEventListener(\"scroll\", function () {\r\n    let nav = document.querySelector(\"nav\");\r\n    nav.classList.toggle(\"hover\", window.scrollY > 0);\r\n  })\r\n\r\n  // Shows Api on the page\r\n  fetch('https://tea-api-vic-lo.herokuapp.com/tea')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      console.log('Getting data');\r\n      console.log(data);\r\n\r\n      data.forEach(data => {\r\n        // Once It click it should link to next page by selected items\r\n        html += `\r\n                <section class=\"container\">\r\n                  <a href=\"info.html\">\r\n                    <div class=\"image_wrapper\">\r\n                        <img src=\"../${data.image}\">\r\n                          <div class=\"flex overlay\">\r\n                              <h2>\r\n                                ${data.name}\r\n                              </h2>\r\n                              <p>\r\n                                ${data.description}\r\n                              </p>\r\n                          </div>\r\n                    </div>\r\n                  </a>\r\n                </section>\r\n                `;\r\n\r\n      })\r\n\r\n      document.getElementById(\"container\").innerHTML = html;\r\n\r\n    });\r\n}\r\n\r\n/*\r\n\r\nlet html = '';\r\n// Testing\r\n\r\nwindow.onload = () => {\r\n\r\n  fetch('https://tea-api-vic-lo.herokuapp.com/tea')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      console.log('Getting data');\r\n      console.log(data);\r\n        data.forEach(data => {\r\n          // Once It click it should link to next page by selected items\r\n          html += `\r\n              <section class=\"container\">\r\n                <div class=\"edited\">\r\n                  <i class=\"fas fa-bookmark\"></i>\r\n                </div>\r\n                <div>\r\n                  <a href=\"info.html\">\r\n                     <img src=\"./${data.image}\">\r\n                  </a>\r\n                </div>\r\n              </section>\r\n              `;\r\n  \r\n        })\r\n        \r\n      document.getElementById(\"bookmarks\").innerHTML = html;\r\n\r\n    });\r\n}\r\n\r\n*/\n\n//# sourceURL=webpack://web2-frontend-markparagas/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;