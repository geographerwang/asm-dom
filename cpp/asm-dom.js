!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.asmDom=t():e.asmDom=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";t.__esModule=!0,t.nodes=void 0;var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=t.nodes={0:null},u=0,a=function(e){if(null===e)return 0;if(void 0!==e.asmDomPtr)return e.asmDomPtr;var t=++u;return i[t]=e,e.asmDomPtr=t,t};t.default={addNode:function(e){return a(e.parentNode),a(e.nextSibling),a(e)},createElement:function(e){return a(r.default.create(e))},createElementNS:function(e,t){return a(r.default.createNS(t,e))},createTextNode:function(e){return a(r.default.createText(e))},createComment:function(e){return a(r.default.createComment(e))},insertBefore:function(e,t,n){i[e].insertBefore(i[t],i[n])},removeChild:function(e){null!==i[e]&&void 0!==i[e]&&r.default.collect(i[e])},appendChild:function(e,t){i[e].appendChild(i[t])},removeAttribute:function(e,t){i[e].removeAttribute(t)},setAttribute:function(e,t,n){120!==t.charCodeAt(0)?i[e].setAttribute(t,n):58===t.charCodeAt(3)?i[e].setAttributeNS("http://www.w3.org/XML/1998/namespace",t,n):58===t.charCodeAt(5)?i[e].setAttributeNS("http://www.w3.org/1999/xlink",t,n):i[e].setAttribute(t,n)},parentNode:function(e){return null!==i[e]&&void 0!==i[e]&&null!==i[e].parentNode?i[e].parentNode.asmDomPtr:0},nextSibling:function(e){return null!==i[e]&&void 0!==i[e]&&null!==i[e].nextSibling?i[e].nextSibling.asmDomPtr:0},setTextContent:function(e,t){i[e].textContent=t}}},function(e,t,n){"use strict";t.__esModule=!0;var o={collect:function(e){o.clean(e);var t=e.nodeName;void 0!==e.asmDomNS&&(t+=e.namespaceURI);var n=o.nodes[t];void 0!==n?n.push(e):o.nodes[t]=[e]},create:function(e){e=e.toUpperCase();var t=o.nodes[e];if(void 0!==t){var n=t.pop();if(void 0!==n)return n}return document.createElement(e)},createNS:function(e,t){e=e.toUpperCase();var n=o.nodes[e+t];if(void 0!==n){var r=n.pop();if(void 0!==r)return r}var i=document.createElementNS(t,e);return i.asmDomNS=t,i},createText:function(e){var t=o.nodes["#text"];if(void 0!==t){var n=t.pop();if(void 0!==n)return n.nodeValue=e,n}return document.createTextNode(e)},createComment:function(e){var t=o.nodes["#comment"];if(void 0!==t){var n=t.pop();if(void 0!==n)return n.nodeValue=e,n}return document.createComment(e)},clean:function(e){for(var t=void 0;t=e.lastChild;)o.collect(t);for(e.remove(),t=void 0!==e.attributes?e.attributes.length:0;t--;)e.removeAttribute(e.attributes[t].name);void 0!==e.asmDomRaws&&e.asmDomRaws.length>0&&(e.asmDomRaws.forEach(function(t){e[t]=void 0}),e.asmDomRaws=[]),null!==e.textContent&&""!==e.textContent&&(e.textContent=""),Object.keys(e).forEach(function(t){"a"===t[0]&&"s"===t[1]&&"m"===t[2]&&"D"===t[3]&&"o"===t[4]&&"m"===t[5]||(e[t]=void 0)})},nodes:{}};t.default=o},function(e,t,n){"use strict";var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);void 0===window&&void 0!==global&&(global.window={}),void 0===window.asmDomHelpers&&(window.asmDomHelpers={}),window.asmDomHelpers.domApi=r.default,window.asmDomHelpers.nodes=o.nodes}])});