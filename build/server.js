(()=>{"use strict";var e={4:(e,r,n)=>{const o=require("express"),t=require("path"),i=require("jsonwebtoken"),d=require("body-parser");var c;n(334).config(),(c=o()).use(d.urlencoded({extended:!1})),c.use(d.json()),c.post("/login",(function(e,r,n){if(e.body.username===process.env.SECRET_USER&&e.body.password===process.env.SECRET_PASSWORD){var o=i.sign({user:"system"},process.env.SECRET_KEY,{expiresIn:3});r.send({logged:!0,token:o})}else r.send({logged:!1})})),c.get("/bundle.js",(function(e,r,n){var o=t.resolve(__dirname+"/bundle.js");r.sendFile(o)})),c.get("/index.html",(function(e,r,n){var o=t.resolve(__dirname+"/index.html");r.sendFile(o)})),c.get("/informe-de-labores",(function(e,r,n){var o=e.headers.authorization;if(void 0!==o){var t=o.split(" ")[1];e.token=t,n()}else r.sendStatus(403)}),(function(e,r,n){i.verify(e.token,process.env.SECRET_KEY,(function(e,n){e?r.sendStatus(403):r.sendFile(__dirname+"/"+process.env.SECRET_PDF_FILE_NAME)}))})),c.listen(41230)},334:e=>{e.exports=require("dotenv")}},r={};function n(o){var t=r[o];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var i=r[o]={exports:{}};try{var d={id:o,module:i,factory:e[o],require:n};n.i.forEach((function(e){e(d)})),i=d.module,d.factory.call(i.exports,i,i.exports,d.require)}catch(e){throw i.error=e,e}return i.exports}n.m=e,n.c=r,n.i=[],n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"main."+n.h()+".hot-update.json",n.h=()=>"cdb4d01e32fcbb699ca6",n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e,r,o,t,i={},d=n.c,c=[],a=[],s="idle";function u(e){s=e;for(var r=0;r<a.length;r++)a[r].call(null,e)}function l(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return l(e)}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return u("check"),n.hmrM().then((function(t){if(!t)return u(v()?"ready":"idle"),null;u("prepare");var i=[];return r=[],o=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,r){return n.hmrC[r](t.c,t.r,t.m,e,o,i),e}),[])).then((function(){return l((function(){return e?h(e):(u("ready"),i)}))}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=o.map((function(r){return r(e)}));o=void 0;var n,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return u("abort"),Promise.resolve().then((function(){throw i[0]}));u("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),u("apply");var d=function(e){n||(n=e)},c=[];return r.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)c.push(r[n])}})),n?(u("fail"),Promise.resolve().then((function(){throw n}))):t?h(e).then((function(e){return c.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(u("idle"),Promise.resolve(c))}function v(){if(t)return o||(o=[]),Object.keys(n.hmrI).forEach((function(e){t.forEach((function(r){n.hmrI[e](r,o)}))})),t=void 0,!0}n.hmrD=i,n.i.push((function(h){var v,m,y,_,E=h.module,g=function(n,o){var t=d[o];if(!t)return n;var i=function(r){if(t.hot.active){if(d[r]){var i=d[r].parents;-1===i.indexOf(o)&&i.push(o)}else c=[o],e=r;-1===t.children.indexOf(r)&&t.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+o),c=[];return n(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(i,f,a(f));return i.e=function(e){return function(e){switch(s){case"ready":return u("prepare"),r.push(e),l((function(){u("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);E.hot=(v=h.id,m=E,_={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){c=m.parents.slice(),e=y?void 0:v,n(v)},active:!0,accept:function(e,r,n){if(void 0===e)_._selfAccepted=!0;else if("function"==typeof e)_._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var o=0;o<e.length;o++)_._acceptedDependencies[e[o]]=r||function(){},_._acceptedErrorHandlers[e[o]]=n;else _._acceptedDependencies[e]=r||function(){},_._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)_._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)_._declinedDependencies[e[r]]=!0;else _._declinedDependencies[e]=!0},dispose:function(e){_._disposeHandlers.push(e)},addDisposeHandler:function(e){_._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=_._disposeHandlers.indexOf(e);r>=0&&_._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":o=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](v,o)})),u("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](v,o)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return s;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:i[v]},e=void 0,_),E.parents=c,E.children=[],c=[],h.require=g})),n.hmrC={},n.hmrI={}})(),(()=>{var e,r,o,t,i={179:1};function d(e,o){var i=require("./"+n.hu(e)),d=i.modules,c=i.runtime;for(var a in d)n.o(d,a)&&(r[a]=d[a],o&&o.push(a));c&&t.push(c)}function c(d){function c(e){for(var r=[e],o={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),d=i.id,c=i.chain,s=n.c[d];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:d};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:d};for(var u=0;u<s.parents.length;u++){var l=s.parents[u],f=n.c[l];if(f){if(f.hot._declinedDependencies[d])return{type:"declined",chain:c.concat([l]),moduleId:d,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[d]?(o[l]||(o[l]=[]),a(o[l],[d])):(delete o[l],r.push(l),t.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:o}}function a(e,r){for(var n=0;n<r.length;n++){var o=r[n];-1===e.indexOf(o)&&e.push(o)}}n.f&&delete n.f.requireHmr,e=void 0;var s={},u=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(n.o(r,p)){var h,v=r[p],m=!1,y=!1,_=!1,E="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":d.onDeclined&&d.onDeclined(h),d.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":d.onDeclined&&d.onDeclined(h),d.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":d.onUnaccepted&&d.onUnaccepted(h),d.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+E));break;case"accepted":d.onAccepted&&d.onAccepted(h),y=!0;break;case"disposed":d.onDisposed&&d.onDisposed(h),_=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in l[p]=v,a(u,h.outdatedModules),h.outdatedDependencies)n.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),a(s[p],h.outdatedDependencies[p]));_&&(a(u,[h.moduleId]),l[p]=f)}r=void 0;for(var g,b=[],I=0;I<u.length;I++){var D=u[I],w=n.c[D];w&&(w.hot._selfAccepted||w.hot._main)&&l[D]!==f&&!w.hot._selfInvalidated&&b.push({module:D,require:w.hot._requireSelf,errorHandler:w.hot._selfAccepted})}return{dispose:function(){var e;o.forEach((function(e){delete i[e]})),o=void 0;for(var r,t=u.slice();t.length>0;){var d=t.pop(),c=n.c[d];if(c){var a={},l=c.hot._disposeHandlers;for(I=0;I<l.length;I++)l[I].call(null,a);for(n.hmrD[d]=a,c.hot.active=!1,delete n.c[d],delete s[d],I=0;I<c.children.length;I++){var f=n.c[c.children[I]];f&&(e=f.parents.indexOf(d))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(n.o(s,p)&&(c=n.c[p]))for(g=s[p],I=0;I<g.length;I++)r=g[I],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in l)n.o(l,r)&&(n.m[r]=l[r]);for(var o=0;o<t.length;o++)t[o](n);for(var i in s)if(n.o(s,i)){var c=n.c[i];if(c){g=s[i];for(var a=[],f=[],p=[],h=0;h<g.length;h++){var v=g[h],m=c.hot._acceptedDependencies[v],y=c.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(y),p.push(v)}}for(var _=0;_<a.length;_++)try{a[_].call(null,g)}catch(r){if("function"==typeof f[_])try{f[_](r,{moduleId:i,dependencyId:p[_]})}catch(n){d.onErrored&&d.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[_],error:n,originalError:r}),d.ignoreErrored||(e(n),e(r))}else d.onErrored&&d.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[_],error:r}),d.ignoreErrored||e(r)}}}for(var E=0;E<b.length;E++){var I=b[E],D=I.module;try{I.require(D)}catch(r){if("function"==typeof I.errorHandler)try{I.errorHandler(r,{moduleId:D,module:n.c[D]})}catch(n){d.onErrored&&d.onErrored({type:"self-accept-error-handler-errored",moduleId:D,error:n,originalError:r}),d.ignoreErrored||(e(n),e(r))}else d.onErrored&&d.onErrored({type:"self-accept-errored",moduleId:D,error:r}),d.ignoreErrored||e(r)}}return u}}}n.hmrI.require=function(e,i){r||(r={},t=[],o=[],i.push(c)),n.o(r,e)||(r[e]=n.m[e])},n.hmrC.require=function(a,s,u,l,f,p){f.push(c),e={},o=s,r=u.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],a.forEach((function(r){n.o(i,r)&&void 0!==i[r]&&(l.push(d(r,p)),e[r]=!0)})),n.f&&(n.f.requireHmr=function(r,o){e&&!n.o(e,r)&&n.o(i,r)&&void 0!==i[r]&&(o.push(d(r)),e[r]=!0)})},n.hmrM=function(){return Promise.resolve().then((function(){return require("./"+n.hmrF())})).catch((function(e){if("MODULE_NOT_FOUND"!==e.code)throw e}))}})(),n(4)})();