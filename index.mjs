// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(o,d,l,m){var u,f,p;if(!t(o))throw new TypeError(s("null46",o));if(!r(d))throw new TypeError(s("null2H",d));if(!r(l))throw new TypeError(s("null3N",l));return p=-1,e(u={},"next",(function(){var e;if(p+=1,f)return{done:!0};if((e=o.next()).done)return f=!0,e;if(e=e.value,!0===d(e,p))return f=!0,{done:!0};return l.call(m,e,p),{value:e,done:!1}})),e(u,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(o[n])&&e(u,n,(function(){return i(o[n](),d,l,m)})),u}export{i as default};
//# sourceMappingURL=index.mjs.map
