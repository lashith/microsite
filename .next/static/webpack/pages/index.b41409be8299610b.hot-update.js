"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ \"./components/Logo.tsx\");\n/* harmony import */ var _components_Slide1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Slide1 */ \"./components/Slide1.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Slide2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Slide2 */ \"./components/Slide2.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(1), 2), active = ref[0], setActive = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(0), 2), scrollPosition = ref1[0], setScrollPosition = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        window.addEventListener(\"wheel\", function(e) {\n            if (scrollPosition > e.deltaY) {\n                setActive(1);\n            } else {\n                setActive(2);\n            }\n            setScrollPosition(e.deltaY);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"microsite\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"This is a microsite\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"relative z-30\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__.Logo, {\n                            color: active\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative inset-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slide1__WEBPACK_IMPORTED_MODULE_3__.Slide1, {\n                                active: active === 1,\n                                setActive: setActive\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slide2__WEBPACK_IMPORTED_MODULE_6__.Slide2, {\n                                active: active === 2\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute z-30 top-[90%] md:top-1/2 -translate-y-1/2 right-0 flex flex-col items-end space-y-1\",\n                        children: [\n                            1,\n                            2\n                        ].map(function(i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"aria-label\": \"Go to slide 1\",\n                                onClick: function() {\n                                    return setActive(i);\n                                },\n                                className: \"h-9\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(\"block transition-all duration-500 cursor-pointer\", {\n                                        \"h-2 w-10 bg-black\": active !== i && active === 1,\n                                        \"h-2 w-10 bg-white\": active !== i && active === 2,\n                                        \"bg-blue-500 h-3 w-20\": active === i\n                                    }),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"opacity-0\",\n                                        children: [\n                                            \"go to slide \",\n                                            i\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Convertium\\\\micro-site\\\\microsite\\\\pages\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"E/nbYiF3O3Sh91wdUuqoTMER1dE=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJGQSxDQUFDOzs7O3NDQWlCQzt5QkFDVixDQUFDOzs7Ozs2QkFDRTs7Ozs7O3FCQUNEOzs7Ozs7YUFDSCxDQUNOO0NBQ0g7R0ExREt2QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE0RFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IExvZ28gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dvXCI7XG5pbXBvcnQgeyBTbGlkZTEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZTFcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjeCBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgU2xpZGUyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGUyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChlKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiBlLmRlbHRhWSkge1xuICAgICAgICBzZXRBY3RpdmUoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRBY3RpdmUoMik7XG4gICAgICB9XG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbihlLmRlbHRhWSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPm1pY3Jvc2l0ZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdUaGlzIGlzIGEgbWljcm9zaXRlJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdyZWxhdGl2ZSB6LTMwJz5cbiAgICAgICAgICA8TG9nbyBjb2xvcj17YWN0aXZlfSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGluc2V0LTAnPlxuICAgICAgICAgIDxTbGlkZTEgYWN0aXZlPXthY3RpdmUgPT09IDF9IHNldEFjdGl2ZT17c2V0QWN0aXZlfSAvPlxuICAgICAgICAgIDxTbGlkZTIgYWN0aXZlPXthY3RpdmUgPT09IDJ9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTMwIHRvcC1bOTAlXSAgbWQ6dG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHJpZ2h0LTAgZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgc3BhY2UteS0xJz5cbiAgICAgICAgICB7WzEsIDJdLm1hcCgoaSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0dvIHRvICBzbGlkZSAxJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoaSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0naC05J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICBcImJsb2NrIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImgtMiB3LTEwIGJnLWJsYWNrXCI6IGFjdGl2ZSAhPT0gaSAmJiBhY3RpdmUgPT09IDEsXG4gICAgICAgICAgICAgICAgICAgIFwiaC0yIHctMTAgYmctd2hpdGVcIjogYWN0aXZlICE9PSBpICYmIGFjdGl2ZSA9PT0gMixcbiAgICAgICAgICAgICAgICAgICAgXCJiZy1ibHVlLTUwMCBoLTMgdy0yMFwiOiBhY3RpdmUgPT09IGksXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS0wJz5nbyB0byBzbGlkZSB7aX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxvZ28iLCJTbGlkZTEiLCJSZWFjdCIsInVzZUVmZmVjdCIsImN4IiwiU2xpZGUyIiwiSG9tZSIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGVsdGFZIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJjb2xvciIsIm1hcCIsImkiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});