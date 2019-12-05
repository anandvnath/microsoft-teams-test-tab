/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(a,s,function(n){return e[n]}.bind(null,s));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(4),s=t(2),r=t(0),i=t(3);function o(e,n){return(!r.GlobalVars.currentWindow||e!==r.GlobalVars.currentWindow)&&(!!(r.GlobalVars.currentWindow&&r.GlobalVars.currentWindow.location&&n&&n===r.GlobalVars.currentWindow.location.origin)||!!(s.validOriginRegExp.test(n.toLowerCase())||r.GlobalVars.additionalValidOriginsRegexp&&r.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function l(e,n){r.GlobalVars.parentWindow&&e!==r.GlobalVars.parentWindow?r.GlobalVars.childWindow&&e!==r.GlobalVars.childWindow||(r.GlobalVars.childWindow=e,r.GlobalVars.childOrigin=n):(r.GlobalVars.parentWindow=e,r.GlobalVars.parentOrigin=n),r.GlobalVars.parentWindow&&r.GlobalVars.parentWindow.closed&&(r.GlobalVars.parentWindow=null,r.GlobalVars.parentOrigin=null),r.GlobalVars.childWindow&&r.GlobalVars.childWindow.closed&&(r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null),g(r.GlobalVars.parentWindow),g(r.GlobalVars.childWindow)}function u(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=r.GlobalVars.callbacks[n.id];t&&(t.apply(null,n.args),delete r.GlobalVars.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;var a=r.GlobalVars.handlers[n.func];a&&a.apply(this,n.args)}}function c(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=n.func?r.GlobalVars.handlers[n.func]:null;if(t){var a=t.apply(this,n.args);void 0!==a&&p(n.id,Array.isArray(a)?a:[a])}else{var s=b(n.func,n.args);r.GlobalVars.callbacks[s]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.GlobalVars.childWindow&&p(n.id,e)}}}}function d(e){return e===r.GlobalVars.parentWindow?r.GlobalVars.parentMessageQueue:e===r.GlobalVars.childWindow?r.GlobalVars.childMessageQueue:[]}function f(e){return e===r.GlobalVars.parentWindow?r.GlobalVars.parentOrigin:e===r.GlobalVars.childWindow?r.GlobalVars.childOrigin:null}function g(e){for(var n=f(e),t=d(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function b(e,n){var t=r.GlobalVars.parentWindow,a=v(e,n);if(r.GlobalVars.isFramelessWindow)r.GlobalVars.currentWindow&&r.GlobalVars.currentWindow.nativeInterface&&r.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(a));else{var s=f(t);t&&s?t.postMessage(a,s):d(t).push(a)}return a.id}function p(e,n){var t=r.GlobalVars.childWindow,a=V(e,n),s=f(t);t&&s&&t.postMessage(a,s)}function h(e,n){var t=r.GlobalVars.childWindow,a=G(e,n),s=f(t);t&&s?t.postMessage(a,s):d(t).push(a)}function v(e,n){return{id:r.GlobalVars.nextMessageId++,func:e,args:n||[]}}function V(e,n){return{id:e,args:n||[]}}function G(e,n){return{func:e,args:n||[]}}r.GlobalVars.handlers.themeChange=function(e){r.GlobalVars.themeChangeHandler&&r.GlobalVars.themeChangeHandler(e);r.GlobalVars.childWindow&&h("themeChange",[e])},r.GlobalVars.handlers.fullScreenChange=function(e){r.GlobalVars.fullScreenChangeHandler&&r.GlobalVars.fullScreenChangeHandler(e)},r.GlobalVars.handlers.backButtonPress=function(){r.GlobalVars.backButtonPressHandler&&r.GlobalVars.backButtonPressHandler()||a.navigateBack()},r.GlobalVars.handlers.load=function(e){r.GlobalVars.loadHandler&&r.GlobalVars.loadHandler(e);r.GlobalVars.childWindow&&h("load",[e])},r.GlobalVars.handlers.beforeUnload=function(){var e=function(){b("readyToUnload",[])};r.GlobalVars.beforeUnloadHandler&&r.GlobalVars.beforeUnloadHandler(e)||e()},r.GlobalVars.handlers.changeSettings=function(){r.GlobalVars.changeSettingsHandler&&r.GlobalVars.changeSettingsHandler()},r.GlobalVars.handlers.startConversation=function(e,n,t,a){r.GlobalVars.onStartConversationHandler&&r.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},r.GlobalVars.handlers.closeConversation=function(e,n,t,a){r.GlobalVars.onCloseConversationHandler&&r.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!r.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(r.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,a=0;a<e.length;a++)if(e[a]===r.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+r.GlobalVars.frameContext+"' context")}},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;o(n,t)&&(l(n,t),n===r.GlobalVars.parentWindow?u(e):n===r.GlobalVars.childWindow&&c(e))}},n.handleParentMessage=u,n.processAdditionalValidOrigins=function(e){var n=r.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&s.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),r.GlobalVars.additionalValidOrigins=n,r.GlobalVars.additionalValidOrigins.length>0?r.GlobalVars.additionalValidOriginsRegexp=i.generateRegExpFromUrls(r.GlobalVars.additionalValidOrigins):r.GlobalVars.additionalValidOriginsRegexp=null},n.waitForMessageQueue=function(e,n){var t=r.GlobalVars.currentWindow.setInterval(function(){0===d(e).length&&(clearInterval(t),n())},100)},n.sendMessageRequestToParent=b,n.sendMessageEventToChild=h},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);n.version="1.5.2",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com"],n.frameContexts={settings:"settings",content:"content",authentication:"authentication",remove:"remove",task:"task"},n.validOriginRegExp=a.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";function a(e){for(var n="^",t=e.split("."),a=0;a<t.length;a++)n+=(a>0?"[.]":"")+t[a].replace("*","[^/^.]+");return n+="$"}Object.defineProperty(n,"__esModule",{value:!0}),n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+a(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0),r=t(2),i=t(5),o=t(3),l=t(6);function u(e,n){if(!s.GlobalVars.initializeCalled){s.GlobalVars.initializeCalled=!0;var t=function(e){return a.processMessage(e)};s.GlobalVars.currentWindow=s.GlobalVars.currentWindow||window,s.GlobalVars.parentWindow=s.GlobalVars.currentWindow.parent!==s.GlobalVars.currentWindow.self?s.GlobalVars.currentWindow.parent:s.GlobalVars.currentWindow.opener,s.GlobalVars.parentWindow?s.GlobalVars.currentWindow.addEventListener("message",t,!1):(s.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=a.handleParentMessage);try{s.GlobalVars.parentOrigin="*";var o=a.sendMessageRequestToParent("initialize",[r.version]);s.GlobalVars.callbacks[o]=function(e,n){s.GlobalVars.frameContext=e,s.GlobalVars.hostClientType=n,s.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),s.GlobalVars.initializeCallbacks=[],s.GlobalVars.initializeCompleted=!0}}finally{s.GlobalVars.parentOrigin=null}this._uninitialize=function(){s.GlobalVars.frameContext&&(d(null),f(null),g(null),p(null),b(null),l.logs.registerGetLogHandler(null)),s.GlobalVars.frameContext===r.frameContexts.settings&&i.settings.registerOnSaveHandler(null),s.GlobalVars.frameContext===r.frameContexts.remove&&i.settings.registerOnRemoveHandler(null),s.GlobalVars.isFramelessWindow||s.GlobalVars.currentWindow.removeEventListener("message",t,!1),s.GlobalVars.initializeCalled=!1,s.GlobalVars.initializeCompleted=!1,s.GlobalVars.initializeCallbacks=[],s.GlobalVars.additionalValidOrigins=[],s.GlobalVars.parentWindow=null,s.GlobalVars.parentOrigin=null,s.GlobalVars.parentMessageQueue=[],s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null,s.GlobalVars.childMessageQueue=[],s.GlobalVars.nextMessageId=0,s.GlobalVars.callbacks={},s.GlobalVars.frameContext=null,s.GlobalVars.hostClientType=null,s.GlobalVars.isFramelessWindow=!1}}Array.isArray(n)&&a.processAdditionalValidOrigins(n),e&&(s.GlobalVars.initializeCompleted?e():s.GlobalVars.initializeCallbacks.push(e))}function c(){window.print()}function d(e){a.ensureInitialized(),s.GlobalVars.themeChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["themeChange"])}function f(e){a.ensureInitialized(),s.GlobalVars.fullScreenChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["fullScreen"])}function g(e){a.ensureInitialized(),s.GlobalVars.backButtonPressHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["backButton"])}function b(e){a.ensureInitialized(),s.GlobalVars.loadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["load"])}function p(e){a.ensureInitialized(),s.GlobalVars.beforeUnloadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["beforeUnload"])}function h(e){a.ensureInitialized(r.frameContexts.content),a.sendMessageRequestToParent("setFrameContext",[e])}n.initialize=u,n._initialize=function(e){s.GlobalVars.currentWindow=e},n._uninitialize=function(){},n.enablePrintCapability=function(){s.GlobalVars.printCapabilityEnabled||(s.GlobalVars.printCapabilityEnabled=!0,a.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(c(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},n.print=c,n.getContext=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getContext");s.GlobalVars.callbacks[n]=e},n.registerOnThemeChangeHandler=d,n.registerFullScreenHandler=f,n.registerBackButtonHandler=g,n.navigateBack=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("navigateBack",[]);s.GlobalVars.callbacks[n]=e||o.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")},n.registerOnLoadHandler=b,n.registerBeforeUnloadHandler=p,n.registerChangeSettingsHandler=function(e){a.ensureInitialized(r.frameContexts.content),s.GlobalVars.changeSettingsHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["changeSettings"])},n.navigateCrossDomain=function(e,n){a.ensureInitialized(r.frameContexts.content,r.frameContexts.settings,r.frameContexts.remove,r.frameContexts.task);var t=a.sendMessageRequestToParent("navigateCrossDomain",[e]);s.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.getTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getTabInstances",[n]);s.GlobalVars.callbacks[t]=e},n.getMruTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getMruTabInstances",[n]);s.GlobalVars.callbacks[t]=e},n.shareDeepLink=function(e){a.ensureInitialized(r.frameContexts.content),a.sendMessageRequestToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},n.executeDeepLink=function(e,n){a.ensureInitialized(r.frameContexts.content,r.frameContexts.task);var t=a.sendMessageRequestToParent("executeDeepLink",[e]);s.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler()},n.navigateToTab=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("navigateToTab",[e]);s.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")},n.setFrameContext=h,n.initializeWithFrameContext=function(e,n,t){u(n,t),h(e)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0),r=t(2),i=t(3);!function(e){var n,t;s.GlobalVars.handlers["settings.save"]=function(e){var t=new o(e);n?n(t):t.notifySuccess()},s.GlobalVars.handlers["settings.remove"]=function(){var e=new l;t?t(e):e.notifySuccess()},e.setValidityState=function(e){a.ensureInitialized(r.frameContexts.settings,r.frameContexts.remove),a.sendMessageRequestToParent("settings.setValidityState",[e])},e.getSettings=function(e){a.ensureInitialized(r.frameContexts.content,r.frameContexts.settings,r.frameContexts.remove);var n=a.sendMessageRequestToParent("settings.getSettings");s.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){a.ensureInitialized(r.frameContexts.content,r.frameContexts.settings);var t=a.sendMessageRequestToParent("settings.setSettings",[e]);s.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){a.ensureInitialized(r.frameContexts.settings),n=e,e&&a.sendMessageRequestToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){a.ensureInitialized(r.frameContexts.remove),t=e,e&&a.sendMessageRequestToParent("registerHandler",["remove"])};var o=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0);!function(e){s.GlobalVars.handlers["log.request"]=function(){if(s.GlobalVars.getLogHandler){var e=s.GlobalVars.getLogHandler();a.sendMessageRequestToParent("log.receive",[e])}},e.registerGetLogHandler=function(e){a.ensureInitialized(),s.GlobalVars.getLogHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0),r=t(2),i=t(3),o=function(){function e(){}return e.prototype.postMessage=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("messageForChild",[e]);s.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(s.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=o;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){a.ensureInitialized(r.frameContexts.task);var t=a.sendMessageRequestToParent("messageForParent",[e]);s.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(s.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),a(t(9)),a(t(14))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(10);n.bot=a.bot;var s=t(11);n.menus=s.menus;var r=t(6);n.logs=r.logs;var i=t(12);n.enterFullscreen=i.enterFullscreen,n.exitFullscreen=i.exitFullscreen,n.getChatMembers=i.getChatMembers,n.getConfigSetting=i.getConfigSetting,n.getUserJoinedTeams=i.getUserJoinedTeams,n.openFilePreview=i.openFilePreview,n.sendCustomMessage=i.sendCustomMessage,n.showNotification=i.showNotification,n.sendCustomEvent=i.sendCustomEvent,n.registerCustomHandler=i.registerCustomHandler,n.uploadCustomApp=i.uploadCustomApp;var o=t(13);n.conversations=o.conversations},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),s=t(1);!function(e){e.sendQuery=function(e,n,t){s.ensureInitialized();var r=s.sendMessageRequestToParent("bot.executeQuery",[e]);a.GlobalVars.callbacks[r]=function(e,a){e?n(a):t(a)}},e.getSupportedCommands=function(e,n){s.ensureInitialized();var t=s.sendMessageRequestToParent("bot.getSupportedCommands");a.GlobalVars.callbacks[t]=function(t,a){t?e(a):n(a)}},e.authenticate=function(e,n,t){s.ensureInitialized();var r=s.sendMessageRequestToParent("bot.authenticate",[e]);a.GlobalVars.callbacks[r]=function(e,a){e?n(a):t(a)}},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0);!function(e){var n,t,r,i=function(){return function(){this.enabled=!0}}();e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),s.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleNavBarMenuItemPress",[e]))},s.GlobalVars.handlers.actionMenuItemPress=function(e){t&&t(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleActionMenuItemPress",[e]))},s.GlobalVars.handlers.setModuleView=function(e){r&&r(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("viewConfigItemPress",[e]))},e.setUpViews=function(e,n){a.ensureInitialized(),r=n,a.sendMessageRequestToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){a.ensureInitialized(),n=t,a.sendMessageRequestToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){a.ensureInitialized(),t=n,a.sendMessageRequestToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0),r=t(2),i=t(3);n.getUserJoinedTeams=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getUserJoinedTeams",[n]);s.GlobalVars.callbacks[t]=e},n.enterFullscreen=function(){a.ensureInitialized(r.frameContexts.content),a.sendMessageRequestToParent("enterFullscreen",[])},n.exitFullscreen=function(){a.ensureInitialized(r.frameContexts.content),a.sendMessageRequestToParent("exitFullscreen",[])},n.openFilePreview=function(e){a.ensureInitialized(r.frameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId];a.sendMessageRequestToParent("openFilePreview",n)},n.showNotification=function(e){a.ensureInitialized(r.frameContexts.content);var n=[e.message,e.notificationType];a.sendMessageRequestToParent("showNotification",n)},n.uploadCustomApp=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("uploadCustomApp",[e]);s.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n,t){a.ensureInitialized();var r=a.sendMessageRequestToParent(e,n);return"function"==typeof t&&(s.GlobalVars.callbacks[r]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.apply(null,e)}),r},n.sendCustomEvent=function(e,n){if(a.ensureInitialized(),!s.GlobalVars.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;a.ensureInitialized(),s.GlobalVars.handlers[e]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.apply(t,e)}},n.getChatMembers=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getChatMembers");s.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getConfigSetting",[n]);s.GlobalVars.callbacks[t]=e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0),r=t(2);!function(e){e.openConversation=function(e){a.ensureInitialized(r.frameContexts.content);var n=a.sendMessageRequestToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}]);s.GlobalVars.onCloseConversationHandler=e.onCloseConversation,s.GlobalVars.onStartConversationHandler=e.onStartConversation,s.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){a.ensureInitialized(r.frameContexts.content),a.sendMessageRequestToParent("conversations.closeConversation"),s.GlobalVars.onCloseConversationHandler=null,s.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(15);n.appInitialization=a.appInitialization;var s=t(16);n.authentication=s.authentication;var r=t(4);n.enablePrintCapability=r.enablePrintCapability,n.executeDeepLink=r.executeDeepLink,n.getContext=r.getContext,n.getMruTabInstances=r.getMruTabInstances,n.getTabInstances=r.getTabInstances,n.initialize=r.initialize,n.navigateBack=r.navigateBack,n.navigateCrossDomain=r.navigateCrossDomain,n.navigateToTab=r.navigateToTab,n.print=r.print,n.registerBackButtonHandler=r.registerBackButtonHandler,n.registerBeforeUnloadHandler=r.registerBeforeUnloadHandler,n.registerChangeSettingsHandler=r.registerChangeSettingsHandler,n.registerFullScreenHandler=r.registerFullScreenHandler,n.registerOnLoadHandler=r.registerOnLoadHandler,n.registerOnThemeChangeHandler=r.registerOnThemeChangeHandler,n.shareDeepLink=r.shareDeepLink;var i=t(5);n.settings=i.settings;var o=t(17);n.tasks=o.tasks;var l=t(7);n.ChildAppWindow=l.ChildAppWindow,n.ParentAppWindow=l.ParentAppWindow},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(2);!function(e){e.notifyAppLoaded=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.appLoaded",[s.version])},e.notifySuccess=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.success",[s.version])},e.notifyFailure=function(e){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.failure",[e.reason,e.message])}}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),s=t(0),r=t(2);!function(e){var n,t;function i(){l();try{s.GlobalVars.childWindow&&s.GlobalVars.childWindow.close()}finally{s.GlobalVars.childWindow=null,s.GlobalVars.childOrigin=null}}function o(e){n=e,i();var t=n.width||600,a=n.height||400;t=Math.min(t,s.GlobalVars.currentWindow.outerWidth-400),a=Math.min(a,s.GlobalVars.currentWindow.outerHeight-200);var r=document.createElement("a");r.href=n.url;var o=void 0!==s.GlobalVars.currentWindow.screenLeft?s.GlobalVars.currentWindow.screenLeft:s.GlobalVars.currentWindow.screenX,l=void 0!==s.GlobalVars.currentWindow.screenTop?s.GlobalVars.currentWindow.screenTop:s.GlobalVars.currentWindow.screenY;o+=s.GlobalVars.currentWindow.outerWidth/2-t/2,l+=s.GlobalVars.currentWindow.outerHeight/2-a/2,s.GlobalVars.childWindow=s.GlobalVars.currentWindow.open(r.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+o+", width="+t+", height="+a),s.GlobalVars.childWindow?u():c("FailedToOpenWindow")}function l(){t&&(clearInterval(t),t=0),delete s.GlobalVars.handlers.initialize,delete s.GlobalVars.handlers.navigateCrossDomain}function u(){l(),t=s.GlobalVars.currentWindow.setInterval(function(){if(!s.GlobalVars.childWindow||s.GlobalVars.childWindow.closed)c("CancelledByUser");else{var e=s.GlobalVars.childOrigin;try{s.GlobalVars.childOrigin="*",a.sendMessageEventToChild("ping")}finally{s.GlobalVars.childOrigin=e}}},100),s.GlobalVars.handlers.initialize=function(){return[r.frameContexts.authentication,s.GlobalVars.hostClientType]},s.GlobalVars.handlers.navigateCrossDomain=function(){return!1}}function c(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,i()}}function d(e,n,t){if(e){var a=document.createElement("a");a.href=decodeURIComponent(e),a.host&&a.host!==window.location.host&&"outlook.office.com"===a.host&&a.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(a.href=f(a.href,"result",t)),s.GlobalVars.currentWindow.location.assign(f(a.href,"authSuccess",""))),n&&"reason"===n&&(t&&(a.href=f(a.href,"reason",t)),s.GlobalVars.currentWindow.location.assign(f(a.href,"authFailure",""))))}}function f(e,n,t){var a=e.indexOf("#"),s=-1===a?"#":e.substr(a);return s=s+"&"+n+(""!==t?"="+t:""),(e=-1===a?e:e.substr(0,a))+s}s.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,i()}},s.GlobalVars.handlers["authentication.authenticate.failure"]=c,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(a.ensureInitialized(r.frameContexts.content,r.frameContexts.settings,r.frameContexts.remove,r.frameContexts.task),"desktop"===s.GlobalVars.hostClientType||"android"===s.GlobalVars.hostClientType||"ios"===s.GlobalVars.hostClientType||"rigel"===s.GlobalVars.hostClientType){var i=document.createElement("a");i.href=t.url;var l=a.sendMessageRequestToParent("authentication.authenticate",[i.href,t.width,t.height]);s.GlobalVars.callbacks[l]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}else o(t)},e.getAuthToken=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getAuthToken",[e.resources]);s.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.getUser=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getUser");s.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.notifySuccess=function(e,n){d(n,"result",e),a.ensureInitialized(r.frameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(s.GlobalVars.parentWindow,function(){return setTimeout(function(){return s.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){d(n,"reason",e),a.ensureInitialized(r.frameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(s.GlobalVars.parentWindow,function(){return setTimeout(function(){return s.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";var a=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&(t[a[s]]=e[a[s]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var s=t(1),r=t(0),i=t(2),o=t(7);!function(e){e.startTask=function(e,n){s.ensureInitialized(i.frameContexts.content);var t=s.sendMessageRequestToParent("tasks.startTask",[e]);return r.GlobalVars.callbacks[t]=n,new o.ChildAppWindow},e.updateTask=function(e){s.ensureInitialized(i.frameContexts.content,i.frameContexts.task),e.width,e.height;var n=a(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");s.sendMessageRequestToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){s.ensureInitialized(i.frameContexts.content,i.frameContexts.task),s.sendMessageRequestToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))}])});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            var input;
            var valueGetter;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}

// EXTERNAL MODULE: ../microsoft-teams-library-js/dist/MicrosoftTeams.min.js
var MicrosoftTeams_min = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        MicrosoftTeams_min["initialize"]();
        MicrosoftTeams_min["appInitialization"].notifyAppLoaded();
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getContext"](output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                MicrosoftTeams_min["navigateCrossDomain"](url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerOnThemeChangeHandler"](output);
            }
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerChangeSettingsHandler"](function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "deepLinkParameters"
                }],
            action: function (deepLinkParameters) {
                MicrosoftTeams_min["shareDeepLink"](deepLinkParameters);
            }
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "deepLink"
                }],
            action: function (deepLink) {
                MicrosoftTeams_min["executeDeepLink"](deepLink);
            }
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            hasOutput: true,
            action: function (url, output) {
                MicrosoftTeams_min["authentication"].authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    },
                });
            }
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo, output) {
                childWindow = MicrosoftTeams_min["tasks"].startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            }
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            }
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                var parentWindow = MicrosoftTeams_min["ParentAppWindow"].Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = MicrosoftTeams_min["ParentAppWindow"].Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min["showNotification"](showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                MicrosoftTeams_min["authentication"].notifyFailure(reason);
            }
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                }],
            action: function (result) {
                MicrosoftTeams_min["authentication"].notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    output("SaveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.saveEvent && window.saveEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            }
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "settings"
                }],
            hasOutput: true,
            action: function (settings, output) {
                MicrosoftTeams_min["settings"].setSettings(settings);
            }
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "validityState"
                }],
            action: function (validityState) {
                MicrosoftTeams_min["settings"].setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["settings"].registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.removeEvent && window.removeEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent && window.removeEvent.notifySuccess();
            }
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "filePreviewParameters"
                }],
            action: function (filePreviewParameters) {
                MicrosoftTeams_min["openFilePreview"](filePreviewParameters);
            }
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                },
                {
                    type: "string",
                    name: "appId"
                }],
            action: function (result, appId) {
                MicrosoftTeams_min["tasks"].submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                MicrosoftTeams_min["tasks"].startTask(taskInfo);
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                MicrosoftTeams_min["showNotification"](showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                MicrosoftTeams_min["authentication"].getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["getChatMembers"](output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min;
                MicrosoftTeams_min["getUserJoinedTeams"](output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                MicrosoftTeams_min["registerBeforeUnloadHandler"](function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    alert('beforeUnload recieved');
                    return true;
                });
            }
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            }
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                totalStates++;
                window.history.pushState({ some: 'state', id: totalStates }, "tab state" + totalStates, '/testTab');
                output("total States: " + totalStates);
                window.addEventListener('popstate', function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " + event.state.id);
                    }
                }, false);
            }
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                MicrosoftTeams_min["registerBackButtonHandler"](function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            }
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "openConversationRequest"
                }],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                try {
                    MicrosoftTeams_min["conversations"].openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            }
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                MicrosoftTeams_min["conversations"].closeConversation();
            }
        });
        addModule({
            name: "setFrameContext",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "frameContext"
                }],
            action: function (frameContext) {
                MicrosoftTeams_min["setFrameContext"](frameContext);
            }
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        MicrosoftTeams_min["appInitialization"].notifySuccess();
    }
    catch (err) {
        MicrosoftTeams_min["appInitialization"].notifyFailure({ reason: "Other" /* Other */, message: err.message });
    }
};

// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map