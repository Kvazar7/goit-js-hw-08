function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=v();if(T(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,o-(e-c)):n}(e))}function O(e){return u=void 0,g&&r?b(e):(r=i=void 0,a)}function h(){var e=v(),n=T(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},h.flush=function(){return void 0===u?a:O(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),S=document.querySelector("input"),T=document.querySelector("textarea");b.addEventListener("input",e(t)((function(e){const{elements:{email:t,message:n}}=e.target,r={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}),500));const j=localStorage.getItem("feedback-form-state");var O;(O=j)&&"email"===S.name&&(S.value=JSON.parse(O).email),O&&"message"===T.name&&(T.value=JSON.parse(O).message),b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget,r={email:t.value,message:n.value};console.log(r),e.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.ee07144c.js.map
