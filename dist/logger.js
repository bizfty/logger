!(function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=2)})([(function(e,n,o){"use strict";n.__esModule=!0;var t=o(1),r=(function(){function e(e,n,o){this._hanlers=o,this._level=e,this._name=n}return e.prototype.trace=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.invoke(t.Level.TRACE,e)},e.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.invoke(t.Level.DEBUG,e)},e.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.invoke(t.Level.INFO,e)},e.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.invoke(t.Level.WARN,e)},e.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.invoke(t.Level.ERROR,e)},e.prototype.time=function(e){},e.prototype.timeEnd=function(e){},e.prototype.invoke=function(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];this._hanlers&&this._hanlers.length>0&&!(t.Level[this._level]>t.Level[e])&&this._hanlers.forEach((function(e){e.handle(n)}))},e})();n.Logger=r}),(function(e,n,o){"use strict";n.__esModule=!0,(function(e){e[e.ALL=0]="ALL",e[e.TRACE=1]="TRACE",e[e.DEBUG=2]="DEBUG",e[e.INFO=3]="INFO",e[e.WARN=4]="WARN",e[e.ERROR=5]="ERROR",e[e.OFF=6]="OFF"})(n.Level||(n.Level={}))}),(function(e,n,o){"use strict";n.__esModule=!0;var t=o(3);n.LoggerFactory=t.LoggerFactory;var r=o(0);n.Logger=r.Logger}),(function(e,n,o){"use strict";n.__esModule=!0;var t=o(0),r=o(1),i=o(4),s=(function(){function e(){}return e.getLogger=function(n){return e.instance||(e.instance=new e,e.instance.options||(window[e.LoggerFactoryOptionsValueName]?e.instance.options=window[e.LoggerFactoryOptionsValueName]:e.instance.options=e.instance.createDefaultConfig())),n&&e.instance.options.loggers[n]?e.instance.options.loggers[n]:e.instance.options.root},e.prototype.createDefaultConfig=function(){var e=new i.BrowserConsoleHandler;return{root:new t.Logger(r.Level.ERROR,"root",[e]),handlers:{console:e},loggers:{}}},e.LoggerFactoryOptionsValueName="LoggerFactoryConfig",e})();n.LoggerFactory=s}),(function(e,n,o){"use strict";n.__esModule=!0;var t=(function(){function e(){}return e.prototype.handle=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.log(e)},e})();n.BrowserConsoleHandler=t})]);