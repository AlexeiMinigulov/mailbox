/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var app = angular.module('app', ['ui.router']);

	app.config(function ($urlRouterProvider) {
	    $urlRouterProvider.otherwise("/home");
	});

	// services
	app.service('Configuration', __webpack_require__(1));
	app.service('Auth', __webpack_require__(2));

	// common
	__webpack_require__(3)(app);
	__webpack_require__(10)(app);
	__webpack_require__(15)(app);
	__webpack_require__(20)(app);
	__webpack_require__(23)(app);
	__webpack_require__(26)(app);
	__webpack_require__(30)(app);

	// modules
	__webpack_require__(35)(app);
	__webpack_require__(40)(app);
	__webpack_require__(45)(app);
	__webpack_require__(50)(app);

	app.run(function ($rootScope, Auth, $state) {
	    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
	        if (toState.name == 'login' && Auth.user()) {
	            event.preventDefault();
	        }
	        if (toState.data && toState.data.login && !Auth.user()) {
	            event.preventDefault();
	            $state.go('denied');
	        }
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function Configuration() {

	    return {

	        siteName: 'Apellsin Box',
	        copyRight: '© 2016 All right reserved',
	        author: 'Anatoly Vasilev',

	        getStorageData: function getStorageData(name) {
	            try {
	                return JSON.parse(localStorage.getItem(name));
	            } catch (e) {
	                throw e;
	            }
	        },

	        setStorageData: function setStorageData(name, value) {
	            try {
	                localStorage.setItem(name, JSON.stringify(value));
	            } catch (e) {
	                throw e;
	            }
	        },

	        removeStorageData: function removeStorageData(name, value) {
	            try {
	                localStorage.removeItem(name);
	            } catch (e) {
	                throw e;
	            }
	        }

	    };
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function Auth($q, $http, Configuration) {

	    var _user = Configuration.getStorageData('user');

	    return {

	        login: function login(_login, password) {
	            var d = $q.defer();
	            if (_login == 'admin' && password == 'admin') {
	                $http.get('http://jsonplaceholder.typicode.com/users/1').then(function (data) {
	                    _user = data.data;
	                    Configuration.setStorageData('user', _user);
	                    d.resolve(_user);
	                }, function (error) {
	                    d.reject(error);
	                });
	            } else {
	                d.reject("Sorry, we can't find user with this login and password!");
	            }
	            return d.promise;
	        },

	        logout: function logout() {
	            Configuration.removeStorageData('user');
	            _user = null;
	        },

	        user: function user() {
	            return _user;
	        }

	    };
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(4);

	module.exports = function (app) {

	    app.directive('siteHeader', __webpack_require__(8));
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".site-header .brand-logo{\r\n    font-size: 1.4rem;\r\n}\r\n.site-header .brand-logo span{\r\n    color: lightgray;\r\n    font-weight: 300;\r\n}", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function siteHeader(Configuration) {

	    return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	            user: '='
	        },
	        link: function link(scope) {
	            scope.panel = {
	                title: Configuration.siteName
	            };
	        },
	        template: __webpack_require__(9)
	    };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"black site-header\">\r\n    <div class=\"nav-wrapper container\">\r\n        <a href=\"#\" class=\"brand-logo\" ng-show=\"!user\">\r\n            <i class=\"large material-icons\" style=\"float:left;margin-right:5px;\">email</i>\r\n            {{panel.title}}\r\n        </a>\r\n        <a href=\"#\" class=\"brand-logo\" ng-show=\"user\">{{user.name}} <span>{{user.email}}</span></a>\r\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n            <li ng-show=\"user\"><a href=\"/#logout\" class=\"red darken-4 waves-effect waves-light btn\">Logout</a></li>\r\n            <li ng-show=\"!user\"><a  href=\"/#login\" class=\"green waves-effect waves-light btn\">Login</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(11);

	module.exports = function (app) {

	    app.directive('siteContainer', __webpack_require__(13));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".site-container{\r\n    padding-top: 20px;\r\n}", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function siteHeader(Configuration) {

	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        scope: {
	            user: '='
	        },
	        link: function link(scope) {
	            scope.panel = {
	                title: Configuration.siteName,
	                user: scope.user
	            };
	        },
	        template: __webpack_require__(14)
	    };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<main class=\"container site-container\" ng-transclude></main>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(16);

	module.exports = function (app) {

	    app.directive('siteFooter', __webpack_require__(18));
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "html{\r\n    height:100%;\r\n}\r\nbody{\r\n    min-height:100%;\r\n    position:relative;\r\n    padding-bottom:60px;\r\n}\r\n.page-footer{\r\n    margin-top:0!important;\r\n    bottom: 0;\r\n    position:absolute;\r\n    width:100%;\r\n    z-index:200;\r\n}", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function siteHeader(Configuration) {

	    return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        link: function link(scope) {
	            scope.panel = {
	                copy: Configuration.copyRight,
	                author: Configuration.author
	            };
	        },
	        template: __webpack_require__(19)
	    };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"page-footer grey lighten-3\">\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"container grey-text text-darken-2\">\r\n            {{panel.copy}}\r\n            <a class=\"grey-text text-darken-2 right\" href=\"#!\">{{panel.author}}</a>\r\n        </div>\r\n    </div>\r\n</footer>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (app) {
	    app.directive('siteLoader', __webpack_require__(21));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function loaderDirective() {

	    return {
	        restrict: 'E',
	        template: __webpack_require__(22)
	    };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"preloader-wrapper small active\">\r\n    <div class=\"spinner-layer spinner-green-only\">\r\n        <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (app) {
	    app.directive('siteHorizontalLoader', __webpack_require__(24));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function loaderDirective() {

	    return {
	        restrict: 'E',
	        template: __webpack_require__(25)
	    };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"progress blue\">\r\n    <div class=\"indeterminate blue lighten-3\"></div>\r\n</div>";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(27);

	module.exports = function (app) {

	    app.directive('siteMessage', __webpack_require__(29));
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".site-message{\r\n    margin: 10px auto;\r\n}", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function siteMessage() {

	    return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
	            type: '@'
	        },
	        link: function link(scope) {
	            var type = scope.type ? scope.type : 'info';
	            scope.panel = {};
	            switch (type) {
	                case 'error':
	                    scope.panel.type = 'red-text';
	                    break;
	                case 'success':
	                    scope.panel.type = 'green-text';
	                    break;
	                default:
	                    scope.panel.type = 'blue-text';
	                    break;
	            }
	        },
	        template: '<div class="site-message {{panel.type}}" ng-transclude></div>'
	    };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(31);

	module.exports = function (app) {
	    app.directive('siteLeftNav', __webpack_require__(33));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".site-left-nav{\r\n    width: 200px;\r\n    margin: 0;\r\n}", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function loaderDirective() {

	    return {
	        restrict: 'E',
	        scope: {
	            activeData: '='
	        },
	        link: function link(scope) {
	            scope.panel = {
	                menu: [{
	                    name: 'Messages',
	                    state: 'messages'
	                }]
	            };
	        },
	        template: __webpack_require__(34)
	    };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<div class=\"collection left site-left-nav\">\r\n    <a href=\"/#{{item.state}}\" class=\"collection-item\" ng-repeat=\"item in panel.menu\" ng-class=\"{'active blue': activeData.item == item.state}\">{{item.name}} <span ng-if=\"activeData.item == item.state && activeData.count\">({{activeData.count}})</span></a>\r\n</div>";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (app) {

	    app.config(function ($stateProvider) {

	        $stateProvider.state('home', {
	            url: '/home',
	            template: '<home />'
	        });
	    });

	    app.directive('home', __webpack_require__(36));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(37);

	module.exports = function home($timeout, Auth) {

	    return {
	        restrict: 'E',

	        link: function link(scope) {
	            scope.user = Auth.user();
	        },

	        template: __webpack_require__(39)
	    };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".home-panel{\r\n    text-align:center;\r\n}\r\n.home-content{\r\n    font-size: 2rem;\r\n    margin: 10px auto 25px auto;\r\n    font-weight: 300;\r\n}", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<site-header user=\"user\"/>\r\n<site-container>\r\n    <div class=\"home-panel\">\r\n        <div class=\"home-content\">\r\n            <b>Apellsin Box</b> is the simplest way for\r\n            any <br>small group to stay in touch via email\r\n        </div>\r\n        <a href=\"/#login\" ng-show=\"!user\" class=\"waves-effect waves-light btn green\" >\r\n            Get started\r\n            <svg style=\"width:24px;height:24px;top: 6px; position: relative; right: 2px;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"#ffffff\" d=\"M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z\"></path>\r\n            </svg>\r\n        </a>\r\n        <a href=\"/#messages\" ng-show=\"user\" class=\"waves-effect waves-light btn blue\" >\r\n            Go to messages\r\n            <svg style=\"width:24px;height:24px;top: 6px; position: relative; right: 2px;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"#ffffff\" d=\"M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z\"></path>\r\n            </svg>\r\n        </a>\r\n    </div>\r\n\r\n</site-container>\r\n<site-footer />";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (app) {

	    app.config(function ($stateProvider) {

	        $stateProvider.state('login', {
	            url: '/login',
	            template: '<login />'
	        }).state('logout', {
	            url: '/logout',
	            data: {
	                login: true
	            },
	            controller: function controller($scope, Auth, $state) {
	                Auth.logout();
	                $state.go('home');
	            }
	        });
	    });

	    app.directive('login', __webpack_require__(41));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(42);

	module.exports = function login($timeout, $state, Auth) {

	    var errorHideTime = 3000;

	    return {
	        restrict: 'E',

	        link: function link(scope) {

	            var panel = scope.panel = {
	                loginField: '',
	                passwordField: '',
	                loading: false,
	                user: null
	            };
	            panel.login = function () {
	                panel.loading = true;
	                Auth.login(panel.loginField, panel.passwordField).then(function (user) {
	                    panel.loading = false;
	                    panel.user = user;
	                    $state.go('home');
	                }, function (errorText) {
	                    panel.loading = false;
	                    panel.error = true;
	                    panel.errorText = errorText;
	                    $timeout(function () {
	                        panel.error = false;
	                    }, errorHideTime);
	                });
	            };
	        },

	        template: __webpack_require__(44)
	    };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".row.login-form{\r\n    max-width:400px;\r\n    margin-left:auto;\r\n    margin-right: auto;\r\n}\r\n.login-btn-wrapper{\r\n    text-align: center;\r\n}\r\n.login-loader{\r\n    position:absolute;\r\n    margin-left: 20px;\r\n}", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<site-header user=\"panel.user\"/>\r\n<site-container>\r\n    <div class=\"row login-form\">\r\n        <form class=\"col s12\">\r\n            <h4>Sign In</h4>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"login\" type=\"text\" class=\"validate\" ng-model=\"panel.loginField\">\r\n                    <label for=\"login\">Login</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"input-field col s12\">\r\n                    <input id=\"password\" type=\"password\" ng-model=\"panel.passwordField\">\r\n                    <label for=\"password\">Password</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"login-btn-wrapper\">\r\n                    <a class=\"waves-effect waves-light btn green\" ng-click=\"panel.login()\">Login</a>\r\n                    <site-loader ng-show=\"panel.loading\" class=\"login-loader\" />\r\n                    <site-message data-type=\"error\" ng-show=\"panel.error\">{{panel.errorText}}</site-message>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</site-container>\r\n<site-footer />";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function (app) {

	    app.config(function ($stateProvider) {

	        $stateProvider.state('denied', {
	            url: '/denied',
	            template: '<denied />'
	        });
	    });

	    app.directive('denied', __webpack_require__(46));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(47);

	module.exports = function denied($timeout, Auth) {

	    return {
	        restrict: 'E',

	        link: function link(scope) {
	            scope.user = Auth.user();
	        },

	        template: __webpack_require__(49)
	    };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".home-panel{\r\n    text-align:center;\r\n}\r\n.home-content{\r\n    font-size: 2rem;\r\n    margin: 10px auto 25px auto;\r\n    font-weight: 300;\r\n}", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<site-header user=\"user\"/> <!--data-user=\"{name: 'Anatoly Vasilev', email: 'mail@apellsin.com'}\"-->\r\n<site-container>\r\n    <div class=\"home-panel\">\r\n        <div class=\"home-content\">\r\n            You don't have access to this page.<br> Please try to login.\r\n        </div>\r\n        <a href=\"/#home\" class=\"waves-effect waves-light btn green\" >\r\n            Go to Main\r\n            <svg style=\"width:24px;height:24px;top: 6px; position: relative; right: 2px;\" viewBox=\"0 0 24 24\">\r\n                <path fill=\"#ffffff\" d=\"M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z\"></path>\r\n            </svg>\r\n        </a>\r\n    </div>\r\n\r\n</site-container>\r\n<site-footer />";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(51);

	module.exports = function (app) {

	    app.config(function ($stateProvider) {

	        $stateProvider.state('messages', {
	            template: '<messages />',
	            data: {
	                login: true
	            }
	        }).state('messages.list', {
	            url: '/messages',
	            template: '<messages-list />'
	        }).state('messages.item', {
	            url: "/messages/item/:messageId",
	            templateProvider: function templateProvider($timeout, $stateParams) {
	                return $timeout(function () {
	                    return '<message-item id="' + $stateParams.messageId + '"></message-item>';
	                }, 100);
	            }
	        });
	    });

	    app.directive('messages', __webpack_require__(53));
	    app.directive('messagesList', __webpack_require__(55));
	    app.directive('messageItem', __webpack_require__(57));
	    app.service('Messages', __webpack_require__(59));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".message-from{\r\n    display:inline-block;\r\n    width:25%;\r\n    padding-right:10px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n.message-subject{\r\n    display:inline-block;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width:50%;\r\n}\r\n.messages-list-panel{\r\n    margin-left: 210px;\r\n}", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function messages(Auth) {
	    return {
	        restrict: 'E',
	        scope: {},
	        link: function link(scope) {
	            scope.user = Auth.user();
	        },
	        template: __webpack_require__(54)
	    };
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<site-header user=\"user\"/>\r\n<site-container>\r\n    <ui-view />\r\n</site-container>\r\n<site-footer />";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function messagesList(Messages) {

	    return {
	        restrict: 'E',
	        link: function link(scope) {
	            scope.messages = [];
	            scope.panel = {
	                loading: true,
	                errorText: '',
	                leftMenuData: {
	                    item: 'messages'
	                }
	            };
	            Messages.getAll().then(function (messages) {
	                scope.messages = messages;
	                scope.panel.leftMenuData.count = messages.length;
	                scope.panel.loading = false;
	            }, function (error) {
	                scope.panel.loading = false;
	                scope.panel.errorText = e;
	            });
	        },
	        template: __webpack_require__(56)
	    };
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<h4>Messages</h4>\r\n<site-horizontal-loader ng-show=\"panel.loading\" />\r\n<site-left-nav data-active-data=\"panel.leftMenuData\"></site-left-nav>\r\n<div class=\"collection messages-list-panel\" ng-show=\"!panel.loading\">\r\n    <a href=\"/#messages/item/{{message.id}}\" class=\"collection-item\" ng-repeat=\"message in messages | orderBy : 'date' : true\">\r\n        <span class=\"message-from black-text\">{{message.email}}</span>\r\n        <span class=\"message-subject black-text\">{{message.name}}</span>\r\n        <span class=\"message-date right blue-text\">{{message.date | date}}</span>\r\n    </a>\r\n</div>";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function messageItem(Messages) {

	    return {
	        restrict: 'E',
	        scope: {
	            id: '='
	        },
	        link: function link(scope) {
	            scope.panel = {
	                loading: true,
	                errorText: ''
	            };
	            Messages.getById(scope.id).then(function (message) {
	                scope.message = message;
	                scope.panel.loading = false;
	            }, function (e) {
	                scope.panel.loading = false;
	                scope.panel.errorText = e;
	            });
	        },
	        template: __webpack_require__(58)
	    };
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<site-horizontal-loader ng-show=\"panel.loading\" />\r\n<div ng-show=\"!panel.loading\">\r\n    <a href=\"/#messages\" class=\"btn-floating btn-large waves-effect waves-light blue lighten-2 right\"><i class=\"material-icons\">replay</i></a>\r\n    <h4>{{message.name}}</h4>\r\n    <p>\r\n        <b>{{message.email}}</b> {{message.date | date}}\r\n    </p>\r\n    <p>\r\n        {{message.body}}\r\n    </p>\r\n</div>";

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function messagesService($q, $http) {

	    var messages = [];
	    var lastRequestTime = 0;

	    return {

	        getAll: function getAll() {
	            var d = $q.defer();
	            if (lastRequestTime && lastRequestTime > Date.now() - 60000) {
	                d.resolve(messages);
	            } else {
	                $http.get('http://jsonplaceholder.typicode.com/comments').then(function (data) {
	                    lastRequestTime = Date.now();
	                    messages = data.data.map(function (v, k) {
	                        v.date = new Date() - 24 * 3600 * 1000 * Math.random() * k;
	                        return v;
	                    });
	                    d.resolve(messages);
	                }, function (error) {
	                    d.reject(error);
	                });
	            }
	            return d.promise;
	        },

	        getById: function getById(id) {
	            var d = $q.defer();
	            this.getAll().then(function (messages) {
	                var message = null;
	                messages.forEach(function (m) {
	                    if (m.id == id) {
	                        message = m;
	                    }
	                });
	                d.resolve(message);
	            }, function (err) {
	                d.reject(err);
	            });
	            return d.promise;
	        }

	    };
	};

/***/ }
/******/ ]);