var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=i||u||Function("return this")(),s=Object.prototype.toString,c=Math.max,l=Math.min,m=function(){return f.Date.now()};function d(e,t,n){var r,o,a,i,u,f,s=0,d=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,s=t,i=e.apply(a,n)}function S(e){return s=e,u=setTimeout(T,t),d?y(e):i}function O(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-s>=a}function T(){var e=m();if(O(e))return j(e);u=setTimeout(T,function(e){var n=t-(e-f);return p?l(n,a-(e-s)):n}(e))}function j(e){return u=void 0,b&&r?y(e):(r=o=void 0,i)}function h(){var e=m(),n=O(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(T,t),y(f)}return void 0===u&&(u=setTimeout(T,t)),i}return t=g(t)||0,v(n)&&(d=!!n.leading,a=(p="maxWait"in n)?c(g(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?i:j(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=v(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form"),b=document.querySelector("input"),y=document.querySelector("textarea");savedMessage=localStorage.getItem("feedback-form-state"),localStorage.setItem("feedback-form-state",JSON.stringify({email:"",message:""})),b.value=JSON.parse(savedMessage).email||"",y.value=JSON.parse(savedMessage).message||"",p.addEventListener("input",(function(e){const{elements:{email:t,message:n}}=e.currentTarget,r={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))})),p.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log(`email: ${t.value}, message: ${n.value}`),e.currentTarget.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.87f07db8.js.map