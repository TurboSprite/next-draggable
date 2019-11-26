!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.spriteDraggable=e():t.spriteDraggable=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=65)}([function(t,e,n){var r=n(22)("wks"),o=n(23),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports={}},function(t,e,n){var r=n(6),o=n(21);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(19)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7),o=n(40),i=n(41),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(37),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(22)("keys"),o=n(23);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){n(34);for(var r=n(1),o=n(4),i=n(3),u=n(0)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";var r=n(17),o=n(18),i=n(42),u=n(4),c=n(3),a=n(43),f=n(25),s=n(52),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,h,m){a(n,e,v);var g,x,b,_=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",O="values"==y,S=!1,w=t.prototype,j=w[l]||w["@@iterator"]||y&&w[y],P=j||_(y),E=y?O?_("entries"):P:void 0,L="Array"==e&&w.entries||j;if(L&&(b=s(L.call(new t)))!==Object.prototype&&b.next&&(f(b,M,!0),r||"function"==typeof b[l]||u(b,l,d)),O&&j&&"values"!==j.name&&(S=!0,P=function(){return j.call(this)}),r&&!m||!p&&!S&&w[l]||u(w,l,P),c[e]=P,c[M]=d,y)if(g={values:O?P:_("values"),keys:h?P:_("keys"),entries:E},m)for(x in g)x in w||i(w,x,g[x]);else o(o.P+o.F*(p||S),e,g);return g}},function(t,e){t.exports=!0},function(t,e,n){var r=n(1),o=n(2),i=n(38),u=n(4),c=n(8),a=function(t,e,n){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,y=t&a.P,h=t&a.B,m=t&a.W,g=d?o:o[e]||(o[e]={}),x=g.prototype,b=d?r:v?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(s=!p&&b&&void 0!==b[f])&&c(g,f)||(l=s?b[f]:n[f],g[f]=d&&"function"!=typeof b[f]?n[f]:h&&s?i(l,r):m&&b[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[f]=l,t&a.R&&x&&!x[f]&&u(x,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(6).f,o=n(8),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(54)(!0);n(16)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(15),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector=e.Matrix=void 0;var r=i(n(29)),o=i(n(30));function i(t){return t&&t.__esModule?t:{default:t}}e.Matrix=r.default,e.Vector=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){t=t||[1,0,0,1,0,0],this.m=[t[0],t[1],t[2],t[3],t[4],t[5]]};r.prototype.unit=function(){return this.m=[1,0,0,1,0,0],this},r.prototype.multiply=function(t){var e=this.m,n=void 0;n=t instanceof r?t.m:t;var o=e[0]*n[0]+e[2]*n[1],i=e[1]*n[0]+e[3]*n[1],u=e[0]*n[2]+e[2]*n[3],c=e[1]*n[2]+e[3]*n[3],a=e[0]*n[4]+e[2]*n[5]+e[4],f=e[1]*n[4]+e[3]*n[5]+e[5];return e[0]=o,e[1]=i,e[2]=u,e[3]=c,e[4]=a,e[5]=f,this},r.prototype.inverse=function(){var t=new r(this.m),e=t.m,n=1/(e[0]*e[3]-e[1]*e[2]),o=e[3]*n,i=-e[1]*n,u=-e[2]*n,c=e[0]*n,a=n*(e[2]*e[5]-e[3]*e[4]),f=n*(e[1]*e[4]-e[0]*e[5]);return e[0]=o,e[1]=i,e[2]=u,e[3]=c,e[4]=a,e[5]=f,t},r.prototype.translate=function(t,e){return this.multiply([1,0,0,1,t,e])},r.prototype.rotate=function(t){var e=t*Math.PI/180,n=Math.cos(e),r=Math.sin(e);return this.multiply([n,r,-r,n,0,0])},r.prototype.skew=function(t,e){e|=0;var n=t*Math.PI/180,r=e*Math.PI/180,o=Math.tan(n),i=Math.tan(r);return this.multiply([1,i,o,1,0,0])},r.prototype.scale=function(t,e){return this.multiply([t,0,0,e,0,0])},r.prototype.transformPoint=function(t,e){var n=t,r=e;return[t=n*this.m[0]+r*this.m[2]+this.m[4],e=n*this.m[1]+r*this.m[3]+this.m[5]]},r.prototype.transformVector=function(t,e){var n=t,r=e;return[t=n*this.m[0]+r*this.m[2],e=n*this.m[1]+r*this.m[3]]},e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(31)),o=u(n(60)),i=u(n(61));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,0];(0,o.default)(this,t);var i=(0,r.default)(e,3),u=i[0],c=i[1],a=i[2],f=(0,r.default)(n,3),s=f[0],l=f[1],p=f[2];a=a||0,p=p||0,this.x=u-s,this.y=c-l,this.z=a-p}return(0,i.default)(t,[{key:"unit",value:function(){var e=this.length;return new t([this.x/e,this.y/e,this.z/e])}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"cross",value:function(e){var n=this.x,r=this.y,o=this.z,i=e.x,u=e.y,c=e.z;return new t([r*c-o*u,o*i-n*c,n*u-i*r])}},{key:"length",get:function(){var t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}}]),t}();e.default=c},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(32)),o=i(n(56));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var c,a=(0,o.default)(t);!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){t.exports={default:n(33),__esModule:!0}},function(t,e,n){n(14),n(26),t.exports=n(55)},function(t,e,n){"use strict";var r=n(35),o=n(36),i=n(3),u=n(9);t.exports=n(16)(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(5)&&!n(19)((function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";var r=n(44),o=n(21),i=n(25),u={};n(4)(u,n(0)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(7),o=n(45),i=n(24),u=n(13)("IE_PROTO"),c=function(){},a=function(){var t,e=n(20)("iframe"),r=i.length;for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(6),o=n(7),i=n(46);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(47),o=n(24);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(8),o=n(9),i=n(48)(!1),u=n(13)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(9),o=n(49),i=n(50);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(12),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(12),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(8),o=n(53),i=n(13)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(12),o=n(10);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){var r=n(27),o=n(0)("iterator"),i=n(3);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){t.exports={default:n(57),__esModule:!0}},function(t,e,n){n(14),n(26),t.exports=n(58)},function(t,e,n){var r=n(7),o=n(59);t.exports=n(2).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(27),o=n(0)("iterator"),i=n(3);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(62),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){n(64);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(18);r(r.S+r.F*!n(5),"Object",{defineProperty:n(6).f})},function(t,e,n){"use strict";n.r(e);var r=n(28);let o=null,i=[];const u=Symbol("mouseDown"),c=Symbol("mouseMove"),a=Symbol("mouseUp"),f=Symbol("isDraggable"),s=Symbol("isDroppable"),l=Symbol("isDragenter"),p=Symbol("dragRect");function d(t,e){if(e&&void 0!==e.dragRect&&(t[p]=e.dragRect),e&&e.destroy||!1===e)return t[f]?(delete t[f],t.removeEventListener("mousedown",t[u],!1).removeEventListener("mousemove",t[c],!1).removeEventListener("mouseup",t[a],!1)):t;if(!t[f])return t[f]=!0,t[u]=function(e){if(e.originalEvent&&3===e.originalEvent.which)return;if(e.stopPropagation(),(o=function t(e){if(e[f])return e;if("layer"===e.tarName)return null;if(e.parent)return t(e.parent);return null}(e.target))!==t)return;const[n,r]=t.getOffsetPosition(e.x,e.y);o.x0_=n,o.y0_=r,o.dispatchEvent("dragstart",y(e),!0,!0),o.setMouseCapture()},t[c]=function(e){if(o&&o===t&&null!=o.x0_){const[n,u]=t.getOffsetPosition(e.x,e.y);let c=n-t.x0_,a=u-t.y0_;const[f,s]=t.attr("pos"),d=new r.Matrix(t.transformMatrix);[c,a]=d.transformPoint(c,a);let[v,m,g,x]=t[p]||[],b=f+c,_=s+a;void 0!==v&&(b=Math.max(v,b)),void 0!==g&&(b=Math.min(g,b)),void 0!==m&&(_=Math.max(m,_)),void 0!==x&&(_=Math.min(x,_)),t.attr({x:b,y:_}),o.dispatchEvent("drag",y(e),!0,!0),function(t,e){t.dragItem=e,i.forEach(n=>{if(e!==n){let r=h(e,n);r&&!n[l]?(n[l]=!0,n.dispatchEvent("dragenter",y(t),!0,!0)):!r&&n[l]?(delete n[l],n.dispatchEvent("dragleave",y(t),!0,!0)):r&&n[l]&&n.dispatchEvent("dragover",y(t),!0,!0)}})}(e,t)}},t[a]=function(e){o&&null!=o.x0_&&(o.releaseMouseCapture(),delete o.x0_,delete o.y0_,o.dispatchEvent("dragend",y(e),!0,!0),function(t,e){t.dragItem=e,i.forEach(n=>{h(e,n)&&n[l]&&(delete n[l],n.dispatchEvent("drop",y(t),!0,!0))})}(e,t));o=null},t.addEventListener("mousedown",t[u],!1).addEventListener("mousemove",t[c],!1).addEventListener("mouseup",t[a],!1)}function v(t,e){if(e&&e.destroy||!1===e){if(t[s]){delete t[s];const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}else t[s]||(i.push(t),t[s]=!0);return t}function y(t){return{detail:t}}function h(t,e){let{top:n,left:r,width:o,height:i}=t.getBoundingClientRect(),u=[r+o/2,n+i/2];return e.isPointCollision(u[0],u[1])}function m(t){const e=t.Node;Object.assign(e.prototype,{draggable:function(t){d(this,t)},droppable:function(t){v(this,t)}})}n.d(e,"install",(function(){return m})),n.d(e,"draggable",(function(){return d})),n.d(e,"droppable",(function(){return v}))}])}));
//# sourceMappingURL=index.js.map