(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Button/index.mdx":function(e,o,t){"use strict";t.r(o);var n=t("./node_modules/react/index.js"),r=t.n(n),A=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=function(e){return r.a.createElement("button",null,e.children)};function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)t=A[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(n=0;n<A.length;n++)t=A[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,o){return!o||"object"!==g(o)&&"function"!==typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,o){return(p=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}t.d(o,"default",function(){return B});var B=function(e){function o(e){var t;return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l(this,s(o).call(this,e))).layout=null,t}var t,n,g;return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&p(e,o)}(o,r.a.Component),t=o,(n=[{key:"render",value:function(){var e=this.props,o=e.components,t=a(e,["components"]);return r.a.createElement(A.MDXTag,{name:"wrapper",components:o},r.a.createElement(A.MDXTag,{name:"h1",components:o,props:{id:"button"}},"Button"),r.a.createElement(i.f,{of:c}),r.a.createElement(A.MDXTag,{name:"h2",components:o,props:{id:"basic-usage"}},"Basic usage"),r.a.createElement(i.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPAITqXkECeADjAASESAPgA6AJxGpGgqHygBDVAHMAvCJB11oiVLwx56bZMZEYBeX3J55YuGbUgAqgBUAYgFoAHFvHHT5vlR5UwdMOHIxCG4CCGp1S2paGgcAWU4-eQB3eEpTDO5uPgBXODQlPjZyAC8fHRMzCyCQ9QA3CBhM7koxAniqGjoCB0yIdAI8FUw28hh3EbG8ABo0CBj5KHdw9ZgVAEZavwaBAgJudxgARyKIFocADXdHAEF3AGFc7nkYgCNYPsTBg52ioYOglDADlIYgRYEI0lRKFBuGJKAArGAcRgAemhsN8UigaAA1nwxDAoED-vEuLwgUR5OCsVh3BAqSABGSwA5CKc4IgsVjyOhUJsCOgcOhkULUDhUGYsZBYHAsfJyOQAPoANgALABOTUAVl2WIAMo4ANIQFJQSHYvQGIxSb6UdCcR2MdA3PijBwoyi9EBCbGelru8KRaJ8OBicgOLFwcwxchY1HKsRFGgQUwAP3kBRwYAATPIwJrNegwJgAAzfGBGzyqzUAdhwqa02PDUQIYYiXajMbjCa-rJTypadDYthwTZLTYAzOg555W3B2_He9EexGCP3Y-p44mR6mVfmq2Ai-RNaWV2vO5v8djna73ViZEIQABfRYgNCYXCpsgQH6JICAYLEACpwMkPg-GcPAIDgPh3kwABlRR0GdLABHkRDazoDIigIXJh3IdYoHScE5TEL5QWKUplGgvgAAMqDCdDMJgMQmJwPgAEkwD4ThKCKAByMlLCKSJhMQvBKEyPhxi-bCCjoUFFkE4TLEURirAxElhJ3YSxAqdgZM4mBEGOXl-SxJRVjwIpvhwKgiCxVBKDaVBOEFF14HYygsE4yRGP4jSij4bBeEiOgZgyLyowIdMlCUJU-BGcYFPgxC4H8rB1O4WAcP4aiEP4RRvTgOAighVAYOoPg7PGRyeMQABKSRwKxSQsy6Ho-AAJX0Dg-DAFEiD4MShoIESAG5uqIXqd0G1UCAAEQAeRSEaxomskVvcNgiFm-bFqQj5qEGbbcgmnAsWwYICpgY7UEkZaOA2lIcDJDBOIACkYj0blEWqYL4aQ5yEd4FoumhvWhnpaPSvAEjYjAOLERA7QhxiYMYbghF-3id3pdI5VogxPRiah1j4ZFKG4RCiIasxvR3b7MEiZQ0vJKBWuxfGcbBqGujlWGsWB3GsRDIRFkkSoilMGgcHBAgAFFYEVggACFOF49BfrEyh_RE9rUFambP2_e6FtgFdAOAwYGB67ody1wiiNq0brpE27nudvq3p3L3xsmlaRJOl2-GAPhUywj8rpDgABGAiH9WJUB8slw5e1B-gTEzqhQrhUpUKPGPpMQ7NQSyRKrPg524LARNlkHPnQT1lBr7VG74TVG-bxiwESVxgmgTga_UFCjNi5D-AABRRdR1NT9y4E-GYB5BoeaBQiAqgsvhdm1FuP2C3PqHzp4Cj4UvfujqxoHQb6-A_Vqb6EPh_pBwGWgSzhYBUMASoVQi7_3gB-CWoNgAPygE_fCAAyeBCkeAwEoAJGBcDaoqGwRNMAGYODpxEnwAA_JYeCsDvq_TfpZDB31T7fylkDSQptJCRUjpgMA8gihQB3FQ9-n8AZXwFiDXGgccCuGokoTWkDQZgzdicagkNCTkBJKYbE8iPYyNBowDR9UiS_gcHYfo6AbCcC0K8ZRqiYDqPdoowW2IxESIZNIgGWIhHA1NpbEA68iQMhgCuag9sAT0EQCAYAjF1BNAhEgPg6hWJ-TRgFTi5wsAPT-CAFuMFWicVKHEGJ6gqw4EKVWJeESQBhA3FTF6-SQBPCjD1WAEVUk234JgAqlBOC0RKGUUkU13DxJyokwKEgMllPpGgdQll1C_mwDeUZIN1BtInDFdoq4YnhJEbEkAe0OCTK2QoWgCZSmbPUDsggB1ch7PUAc-AAZGL0I_F4wZGEArOWoJAJQATUBBIGCEsJ6haA2xopMuJe1aDuDOe4PM3B1CPI_PCoAA",__position:1,__code:'<Button>Click me</Button>\n<Button kind="secondary">Click me</Button>',__scope:{props:this?this.props:t,Button:c}},r.a.createElement(c,null,"Click me"),r.a.createElement(c,{kind:"secondary"},"Click me")))}}])&&u(t.prototype,n),g&&u(t,g),o}();B.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-components-button-index.477845fd0e8b26f4498d.js.map