!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);try{var o=window.top;window.top.document}catch(e){try{o=window.parent,window.parent.document}catch(e){o=window,window.document}}var i=function(e,t,n){var o,i=e.style.cssText.match(new RegExp("(?:[;\\s]|^)("+t.replace("-","\\-")+"\\s*:(.*?)(;|$))"));i?(o=i.index+i[0].indexOf(i[1]),e.style.cssText=e.style.cssText.substring(0,o)+t+": "+n+" !important;"+e.style.cssText.substring(o+i[1].length)):e.style.cssText+=" "+t+": "+n+" !important;"},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=n.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},r=function(e,t,n){var o,i;n?((o=new Date).setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toGMTString()):i="",document.cookie=e+"="+t+i+"; path=/"},l=function(e){var t,n,o,i=e+"=";for(o=document.cookie.split(";"),t=0;t<o.length;t++){for(n=o[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(i))return n.substring(i.length,n.length)}return""},c=a("eg-console");1==c&&r("eg-debug",c,1),c=l("eg-debug");var d=a("eg-level");null!=d&&""!=d&&r("eg-debug-level",d,1),d=l("eg-debug-level");var s={ERROR:"error",INFO:"info",WARN:"warn",info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.log(e,t,this.INFO,n)},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.log(e,t,this.ERROR,n)},warn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.log(e,t,this.WARN,n)},log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=Array(o).fill("\t");if(n=n.toLowerCase(),e="".concat(e,":").concat(i.join("")),1==c&&null!=d)switch(d){case"error":switch(n){case"error":console.error(e,t)}break;case"warn":switch(n){case"error":console.error(e,t);break;case"warn":console.warn(e,t)}break;case"info":switch(n){case"error":console.error(e,t);break;case"warn":console.warn(e,t);break;case"info":console.info(e,t)}}},setCssTextStyle:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e&&(t instanceof Array?t.forEach((function(t){i(e,t.type,t.value)})):i(e,t,n))},sizeToText:function(e){return null==e||null==e||""==e?null:"number"!=typeof e&&(e.indexOf("px")||e.indexOf("%"))?e:"number"==typeof e?"".concat(e,"px"):null},readCookie:l,writeCookie:r};function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}try{var h=window.top,v=window.top.document}catch(e){try{h=window.parent,v=window.parent.document}catch(e){h=window,v=window.document}}var m="EG_MobileInPage";new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.data={adContainer:{dom:null,id:"eg-wrapper-mobile-overlay"},adContent:{dom:null,id:null,ads:null},zone:{width:"100%",height:"600px"},slot:{name:null,size:[],kpi:null},process:{start:null},googletag:null},this.init()}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this;this.data.process.start=(new Date).getTime(),s.log(m,"Code Init");var t=s.sizeToText(this.config.creativeWidth),n=s.sizeToText(this.config.creativeHeight);null!=this.config.ad_id&&(this.data.adContainer.id=this.config.ad_id),this.data=g(g({},this.data),{},{width:null!=t?t:this.data.zone.width,height:null!=n?n:this.data.zone.height,slot:{name:this.config.slotName,size:this.config.size,kpi:this.config.kpi?this.config.kpi:null},adContainer:{id:null!=this.config.ad_id?this.config.ad_id:this.data.adContainer.id,dom:null}}),s.log(m,this.data),this.data.adContainer.dom=h.top.document.body,s.setCssTextStyle(this.data.wrapper,[{type:"width",value:"100%"},{type:"height",value:"auto"},{type:"margin",value:"auto"},{type:"padding",value:"auto"},{type:"overflow",value:"hidden"}]),this.loadGATAg((function(){e.insertCreative()}))}},{key:"loadGATAg",value:function(e){s.log(m,"Load Google Tag");var t=h.document.createElement("script");t.async=!0,t.type="text/javascript";var n="https:"==h.document.location.protocol;t.src=(n?"https:":"http:")+"//securepubads.g.doubleclick.net/tag/js/gpt.js",v.getElementsByTagName("head").item(0).appendChild(t),h.googletag=h.googletag||{cmd:[]},this.data.googletag=h.googletag,t.addEventListener("load",e)}},{key:"insertCreative",value:function(){var e=this;s.log(m,"------------------------Insert Creative------------------------");var t=s.readCookie("eg_mobileinpage_tag_".concat(this.data.slot.name));t=t||0,s.info(m,"Current counnt cookie: "+t);var n=this.data.googletag,o=(new Date).getTime();n.cmd.push((function(){e.data.adContent.id=n.defineSlot(e.data.slot.name,e.data.slot.size,"div-gpt-ad-eg-".concat(o)),e.data.adContent.id.addService(n.pubads()),n.pubads().addEventListener("slotRenderEnded",(function(n){var o=n.slot.getSlotId().getName();o==e.data.slot.name&&(s.info(m,"slotName: "+o),s.info(m,"isEmpty: "+n.isEmpty),s.info(m,"Campaign ID: "+n.campaignId),s.info(m,"Creative ID: "+n.creativeId),s.info(m,"Line Item ID:"+n.lineItemId),s.info(m,"Size:"+n.size),n.isEmpty?s.info(m,"Don't have ad"):(s.info(m,"Have ad"),s.writeCookie("eg_mobileinpage_tag_".concat(e.data.slot.name),Number(t)+1,31)))})),n.pubads().disableInitialLoad(),n.enableServices()}));var i=v.createElement("div");i.id="div-gpt-ad-eg-".concat(o),this.data.adContent.ads=i,s.setCssTextStyle(i,[{type:"margin",value:"unset"}]),i.style.margin=0;var a=h.document.createElement("script");a.innerHTML="googletag.cmd.push(function() { window.googletag.display('div-gpt-ad-eg-".concat(o,"'); });"),i.append(a),this.data.adContainer.dom.append(i),setTimeout((function(){s.info(m,"->Load ads && check capping"),null==e.data.slot.kpi||t>e.data.slot.kpi?(s.info(m,"Match kpi capping or don't set capping"),n.pubads().isInitialLoadDisabled()&&n.pubads().refresh([e.data.adContent.id])):s.info(m,"Don't match kpi capping")}),500)}}])&&f(t.prototype,n),o&&f(t,o),e}())(eg_capping_config)}]);