!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).slideChangeTracker=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={},c={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,a=f&&!c.call({1:2},1);u.f=a?function(t){var e=f(this,t);return!!e&&e.enumerable}:c;var l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,p=function(t){return s.call(t).slice(8,-1)},g=p,d="".split,y=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},h=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==g(t)?d.call(t,""):Object(t)}:Object,v=y,b=function(t){return h(v(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=m,w=function(t,e){if(!S(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!S(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!S(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},O=y,j=function(t){return Object(O(t))},T=j,C={}.hasOwnProperty,x=function(t,e){return C.call(T(t),e)},E=m,P=n.document,k=E(P)&&E(P.createElement),M=function(t){return k?P.createElement(t):{}},A=!i&&!o((function(){return 7!=Object.defineProperty(M("div"),"a",{get:function(){return 7}}).a})),L=i,I=u,N=l,_=b,F=w,z=x,D=A,q=Object.getOwnPropertyDescriptor;r.f=L?q:function(t,e){if(t=_(t),e=F(e,!0),D)try{return q(t,e)}catch(t){}if(z(t,e))return N(!I.f.call(t,e),t[e])};var G={},W=m,B=function(t){if(!W(t))throw TypeError(String(t)+" is not an object");return t},K=i,R=A,V=B,Y=w,H=Object.defineProperty;G.f=K?H:function(t,e,n){if(V(t),e=Y(e,!0),V(n),R)try{return H(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var J=G,Q=l,U=i?function(t,e,n){return J.f(t,e,Q(1,n))}:function(t,e,n){return t[e]=n,t},X={exports:{}},Z=n,$=U,tt=function(t,e){try{$(Z,t,e)}catch(n){Z[t]=e}return e},et=tt,nt="__core-js_shared__",rt=n[nt]||et(nt,{}),ot=rt,it=Function.toString;"function"!=typeof ot.inspectSource&&(ot.inspectSource=function(t){return it.call(t)});var ut=ot.inspectSource,ct=ut,ft=n.WeakMap,at="function"==typeof ft&&/native code/.test(ct(ft)),lt={exports:{}},st=rt;(lt.exports=function(t,e){return st[t]||(st[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var pt,gt,dt,yt=0,ht=Math.random(),vt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++yt+ht).toString(36)},bt=lt.exports,mt=vt,St=bt("keys"),wt={},Ot=at,jt=m,Tt=U,Ct=x,xt=rt,Et=function(t){return St[t]||(St[t]=mt(t))},Pt=wt,kt="Object already initialized",Mt=n.WeakMap;if(Ot||xt.state){var At=xt.state||(xt.state=new Mt),Lt=At.get,It=At.has,Nt=At.set;pt=function(t,e){if(It.call(At,t))throw new TypeError(kt);return e.facade=t,Nt.call(At,t,e),e},gt=function(t){return Lt.call(At,t)||{}},dt=function(t){return It.call(At,t)}}else{var _t=Et("state");Pt[_t]=!0,pt=function(t,e){if(Ct(t,_t))throw new TypeError(kt);return e.facade=t,Tt(t,_t,e),e},gt=function(t){return Ct(t,_t)?t[_t]:{}},dt=function(t){return Ct(t,_t)}}var Ft={set:pt,get:gt,has:dt,enforce:function(t){return dt(t)?gt(t):pt(t,{})},getterFor:function(t){return function(e){var n;if(!jt(e)||(n=gt(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},zt=n,Dt=U,qt=x,Gt=tt,Wt=ut,Bt=Ft.get,Kt=Ft.enforce,Rt=String(String).split("String");(X.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,u=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||qt(n,"name")||Dt(n,"name",e),(o=Kt(n)).source||(o.source=Rt.join("string"==typeof e?e:""))),t!==zt?(i?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:Dt(t,e,n)):u?t[e]=n:Gt(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&Bt(this).source||Wt(this)}));var Vt=n,Yt=n,Ht=function(t){return"function"==typeof t?t:void 0},Jt=function(t,e){return arguments.length<2?Ht(Vt[t])||Ht(Yt[t]):Vt[t]&&Vt[t][e]||Yt[t]&&Yt[t][e]},Qt={},Ut=Math.ceil,Xt=Math.floor,Zt=function(t){return isNaN(t=+t)?0:(t>0?Xt:Ut)(t)},$t=Zt,te=Math.min,ee=function(t){return t>0?te($t(t),9007199254740991):0},ne=Zt,re=Math.max,oe=Math.min,ie=b,ue=ee,ce=function(t,e){var n=ne(t);return n<0?re(n+e,0):oe(n,e)},fe=function(t){return function(e,n,r){var o,i=ie(e),u=ue(i.length),c=ce(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},ae={includes:fe(!0),indexOf:fe(!1)},le=x,se=b,pe=ae.indexOf,ge=wt,de=function(t,e){var n,r=se(t),o=0,i=[];for(n in r)!le(ge,n)&&le(r,n)&&i.push(n);for(;e.length>o;)le(r,n=e[o++])&&(~pe(i,n)||i.push(n));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Qt.f=Object.getOwnPropertyNames||function(t){return de(t,ye)};var he={};he.f=Object.getOwnPropertySymbols;var ve,be,me=Qt,Se=he,we=B,Oe=Jt("Reflect","ownKeys")||function(t){var e=me.f(we(t)),n=Se.f;return n?e.concat(n(t)):e},je=x,Te=Oe,Ce=r,xe=G,Ee=o,Pe=/#|\.prototype\./,ke=function(t,e){var n=Ae[Me(t)];return n==Ie||n!=Le&&("function"==typeof e?Ee(e):!!e)},Me=ke.normalize=function(t){return String(t).replace(Pe,".").toLowerCase()},Ae=ke.data={},Le=ke.NATIVE="N",Ie=ke.POLYFILL="P",Ne=ke,_e=n,Fe=r.f,ze=U,De=X.exports,qe=tt,Ge=function(t,e){for(var n=Te(e),r=xe.f,o=Ce.f,i=0;i<n.length;i++){var u=n[i];je(t,u)||r(t,u,o(e,u))}},We=Ne,Be=p,Ke=Array.isArray||function(t){return"Array"==Be(t)},Re=w,Ve=G,Ye=l,He=Jt("navigator","userAgent")||"",Je=n.process,Qe=Je&&Je.versions,Ue=Qe&&Qe.v8;Ue?be=(ve=Ue.split("."))[0]<4?1:ve[0]+ve[1]:He&&(!(ve=He.match(/Edge\/(\d+)/))||ve[1]>=74)&&(ve=He.match(/Chrome\/(\d+)/))&&(be=ve[1]);var Xe=be&&+be,Ze=Xe,$e=o,tn=!!Object.getOwnPropertySymbols&&!$e((function(){return!String(Symbol())||!Symbol.sham&&Ze&&Ze<41})),en=tn&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,nn=n,rn=lt.exports,on=x,un=vt,cn=tn,fn=en,an=rn("wks"),ln=nn.Symbol,sn=fn?ln:ln&&ln.withoutSetter||un,pn=function(t){return on(an,t)&&(cn||"string"==typeof an[t])||(cn&&on(ln,t)?an[t]=ln[t]:an[t]=sn("Symbol."+t)),an[t]},gn=m,dn=Ke,yn=pn("species"),hn=o,vn=Xe,bn=pn("species"),mn=function(t,e){var n,r,o,i,u,c=t.target,f=t.global,a=t.stat;if(n=f?_e:a?_e[c]||qe(c,{}):(_e[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=Fe(n,r))&&u.value:n[r],!We(f?r:c+(a?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ge(i,o)}(t.sham||o&&o.sham)&&ze(i,"sham",!0),De(n,r,i,t)}},Sn=o,wn=Ke,On=m,jn=j,Tn=ee,Cn=function(t,e,n){var r=Re(e);r in t?Ve.f(t,r,Ye(0,n)):t[r]=n},xn=function(t,e){var n;return dn(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!dn(n.prototype)?gn(n)&&null===(n=n[yn])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},En=function(t){return vn>=51||!hn((function(){var e=[];return(e.constructor={})[bn]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Pn=Xe,kn=pn("isConcatSpreadable"),Mn=9007199254740991,An="Maximum allowed index exceeded",Ln=Pn>=51||!Sn((function(){var t=[];return t[kn]=!1,t.concat()[0]!==t})),In=En("concat"),Nn=function(t){if(!On(t))return!1;var e=t[kn];return void 0!==e?!!e:wn(t)};mn({target:"Array",proto:!0,forced:!Ln||!In},{concat:function(t){var e,n,r,o,i,u=jn(this),c=xn(u,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(Nn(i=-1===e?u:arguments[e])){if(f+(o=Tn(i.length))>Mn)throw TypeError(An);for(n=0;n<o;n++,f++)n in i&&Cn(c,f,i[n])}else{if(f>=Mn)throw TypeError(An);Cn(c,f++,i)}return c.length=f,c}});return function(){function t(t){return t.getSlides().indexOf(t.getCurrentSlide())}return{id:"slideChangeTracker",init:function(e){var n=[];console.log("Config",e.getConfig().slideChangeTracker),console.log("SlideChangeTracker plugin was loaded"),e.on("slidechanged",(function(r){var o=t(e),i=function(t){return t.getSlides().length}(e),u={timestamp:(new Date).toISOString(),flattenedSlideNumber:t(e),slideNotation:"".concat(o,"/").concat(i)};e.getConfig().writeSlideChanges&&n.push(u),console.log(n)})),function(t){var e=document.createElement("button");e.textContent="►",e.style.cssText="position: absolute;bottom: 0.5em; right: 0.5em;",e.classList="button-active",e.addEventListener("click",(function(n){e.classList.toggle("button-active"),e.textContent="►"===e.textContent?"⏸":"►",t.getConfig().writeSlideChanges=!0!==t.getConfig().writeSlideChanges})),document.querySelector(".reveal").parentElement.appendChild(e)}(e)}}}}));
