/* 2017-02-09 14:20:26 */
!function t(e,n,o){function r(a,u){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var p=n[a]={exports:{}};e[a][0].call(p.exports,function(t){var n=e[a][1][t];return r(n?n:t)},p,p.exports,t,e,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,n){"use strict";function o(t){return"string"==typeof t?t.replace(/^\s+|\s+$/g,""):""}function r(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""}function i(t){return"number"==typeof t}function a(t){var e;try{e=o(t.getAttribute("href",2))}catch(n){}return e||""}function u(t,e,n){t[g]((s?"on":"")+e,function(t){t=t||c.event;var e=t.target||t.srcElement;n(t,e)},!1)}var c=window,p=document,s=!!p.attachEvent,d="attachEvent",f="addEventListener",g=s?d:f,h=function(){function t(t){for(var e;t&&"BODY"!=t.tagName&&!(e=r(t,"microscope-data"));)t=t.parentNode;return e||""}function e(t){var e,n,o,r,i,a,u=p.getElementsByTagName("*");for(e=[];t&&1==t.nodeType;t=t.parentNode)if(a=t.getAttribute("id")){for(r=0,n=0;n<u.length;n++)if(i=u[n],i.id==a){r++;break}if(e.unshift(t.tagName.toLowerCase()+'[@id="'+a+'"]'),1==r)return e.unshift("/"),e.join("/")}else{for(n=1,o=t.previousSibling;o;o=o.previousSibling)o.tagName==t.tagName&&n++;e.unshift(t.tagName.toLowerCase()+"["+n+"]")}return e.length?"/"+e.join("/"):null}function n(){var t="BackCompat"==p.compatMode?p.body:p.documentElement,e=Math.max(t.scrollWidth,t.clientWidth),n=Math.max(t.scrollHeight,t.clientHeight);return[e,n,t.scrollTop,t.scrollLeft]}function o(t,e){var o=n(),r=o[0],a=o[1],u=o[2],c=o[3],p=e.pageX,s=e.pageY;i(p)||(p=e.clientX+c,s=e.clientY+u);var d,f,g=-1;t&&t.getBoundingClientRect&&(f=t.getBoundingClientRect(),g=f.left+c,d=f.top+u);var h,l=r>>1;return p-=l,g-=l,h=i(d)?[["elx",g],["ely",d],["elw",t.offsetWidth],["elh",t.offsetHeight]]:[],h.concat([["docw",r],["doch",a],["x",p],["y",s]]),h}function s(t){for(;t&&t.tagName&&"BODY"!=t.tagName;){if("4111"==r(t,"data-componentid"))return x;t=t.parentNode}return I}function d(n,i){var u,c,d,h,l,m,v,y,w=0,N=s(n),_=t(n),T=0,x=[];if(_&&(N||"1"==b||"4"==b)){for(x.push(["xpath",e(n)]);n&&n!=p&&(m=n.tagName,m&&"HTML"!=m&&(w=1),h||"A"!=m&&"AREA"!=m&&"IMG"!=m&&"BUTTON"!=m&&"INPUT"!=m&&"TEXTAREA"!=m||(h=n,T=1),"A"!=m&&"AREA"!=m||(l=n,u=a(n)),(y=r(n,"data-widgetid"))&&x.push(["widgetid",y]),(y=r(n,"data-componentid"))&&x.push(["componentid",y]),c=n.parentNode);)n=c;w&&T&&(u&&x.push(["href",u]),T&&(x.push(["udp_wm_valid_hit",1]),v=o(h,i),x.concat(v),C++,x.push(["cc",C]),d=(new Date).getTime(),x.push(["t",d-B]),x.push(["t2",d-L]),L=d,x.push(["udp_wm_type",1]),x.push(["page_id",g.pageId||""]),x.push(["shop_id",g.shopId||""]),x.push(["site_instance_id",g.siteInstanceId||""]),x.push(["page_prototypeId",b]),x.push(["siteCategory",g.siteCategory||""]),x.push(["moduleId",_]),"2"!=b&&f(A,x),N&&f(E,x)))}}function f(t,e){var n=e.concat(l);h.send(t,n)}var g,h=c.goldlog,l=[["sw",c.screen.width],["sh",c.screen.height]],m=location,v=m.protocol,y="https:"==v,w=y?v:"http:",N=w+(y?"//log":"//ga")+".mmstat.com/",_=w+(y?"//log":"//go")+".mmstat.com/",A=N+"ued.1.1.1?logtype=6",E=_+"ued.1.1.5?logtype=5";try{g=h._$.meta_info._microscope_data||{}}catch(T){g={}}var b=g.prototypeId||"",x=!0,I=!1,C=0,B=(new Date).getTime(),L=B;"1"!=b&&"2"!=b&&"4"!=b||u(p,"mousedown",function(t,e){e&&d(e,t)})};h()},{}]},{},[1]);