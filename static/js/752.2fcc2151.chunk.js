"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[752],{323:function(n,t,e){e.d(t,{h:function(){return a}});var r=e(4569),i=e.n(r),c=e(1140),a=i().create({baseURL:c._n,params:{api_key:c.$h}})},1140:function(n,t,e){e.d(t,{$h:function(){return i},YQ:function(){return c},_n:function(){return r}});var r="https://api.themoviedb.org/3",i="cdbf15650442f13f9645e14e807ed3ed",c="https://image.tmdb.org/t/p"},752:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,c,a,s=e(5861),u=e(885),o=e(7757),f=e.n(o),p=e(6871),l=e(2791),d=e(1140),h=e(168),m=e(4313),x=m.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  justify-content: center;\n  margin: -5px;\n"]))),g=m.ZP.li(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: baseline;\n  max-width: 80px;\n  margin: 4px;\n  flex-grow: 1;\n"]))),v=m.ZP.img(c||(c=(0,h.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 8px;\n"]))),w=m.ZP.p(a||(a=(0,h.Z)(["\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: gray;\n"]))),_=e(184),y=function(n){var t=n.credits;return(0,_.jsx)("div",{children:(0,_.jsx)(x,{children:t.map((function(n){return(0,_.jsxs)(g,{children:[(0,_.jsx)(v,{src:d.YQ+"/w500"+n.profile_path,alt:""}),(0,_.jsx)(w,{children:n.name})]},n.credit_id)}))})})},b=e(323),Z=e(6066),j=function(){var n=(0,s.Z)(f().mark((function n(t){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.h.get("/movie/".concat(t,"/credits"));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),Z.Am.e("Sorry, something went wrong ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),k=function(){var n=(0,l.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],i=(0,p.UO)().movieId;return(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(i);case 2:t=n.sent,e=t.data.cast,r(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[i]),(0,_.jsx)(_.Fragment,{children:e&&(0,_.jsx)(y,{credits:e})})}}}]);
//# sourceMappingURL=752.2fcc2151.chunk.js.map