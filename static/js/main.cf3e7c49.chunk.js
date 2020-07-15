(this["webpackJsonpweather-site"]=this["webpackJsonpweather-site"]||[]).push([[0],{101:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r);a(101),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(51),l=a.n(i),u=a(52),s=a.n(u),m=a(190),d=a(36),v=a(15),f=a(28),h=a.n(f),p=a(188),b=a(189),_=a(184),E=a(148),O=a(53),j=a.n(O),g=a(40),y=function(){var e=Object(n.useState)("Local Weather"),t=Object(v.a)(e,2),a=t[0],r=t[1];return c.a.createElement(_.a,{className:h.a.navButtonsContainer,variant:"text",color:"inherit","aria-label":"text primary button group"},c.a.createElement(E.a,{className:j()(h.a.navButton,Object(d.a)({},h.a.selected,"Local Weather"===a)),onClick:function(){return r("Local Weather")}},c.a.createElement(g.b,{to:"/home"},c.a.createElement(p.a,null),c.a.createElement("p",{className:h.a.text},"Local Weather"))),c.a.createElement(E.a,{className:j()(h.a.navButton,Object(d.a)({},h.a.selected,"Favorite"===a)),onClick:function(){return r("Favorite")}},c.a.createElement(g.b,{to:"/favorites"},c.a.createElement(b.a,null),c.a.createElement("p",{className:h.a.text},"Favorite"))))},N=function(){return c.a.createElement(m.a,{position:"static",className:s.a.header},c.a.createElement("div",{className:s.a.title},"Weather App"),c.a.createElement(y,null))},x=a(81),W=a(21),w=a.n(W),k=a(31),S=a(32),C=a.n(S),B=a(194),I=a(195),L=a(192),D="vcU4ppZOKHGMh6TUIfo2YqOaPh6e8vU6",R="".concat("http://dataservice.accuweather.com/","locations/v1/cities/autocomplete?apikey=").concat(D,"&q="),A="".concat("http://dataservice.accuweather.com/","currentconditions/v1/"),T="?apikey=".concat(D,"&details=true"),z="".concat("http://dataservice.accuweather.com/","forecasts/v1/daily/5day/"),K="?apikey=".concat(D,"&metric=true"),V=a(13),F=Object(V.atom)({key:"cities",default:[]}),M=Object(V.atom)({key:"selectedCity",default:{Key:"215854",LocalizedName:"Tel Aviv"}}),P=Object(V.atom)({key:"favorites",default:[]}),H=a(82),U=a.n(H);function q(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(v.a)(o,2),l=i[0],u=i[1],s=Object(n.useState)(!1),m=Object(v.a)(s,2),d=m[0],f=m[1],h=Object(V.useRecoilState)(F),p=Object(v.a)(h,2),b=p[0],_=p[1],E=Object(V.useSetRecoilState)(M);Object(n.useEffect)((function(){Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,C.a.get("".concat(R).concat(l,"&language=en-us"));case 5:t=e.sent,a=t.data,f(!1),_((function(e){return e.concat(a)}));case 9:case"end":return e.stop()}}),e)})))()}),[_,l]);return c.a.createElement(I.a,{className:U.a.autocomplete,open:a,onOpen:function(){return r(!0)},onClose:function(){return r(!1)},getOptionSelected:function(e,t){return E(e),e.LocalizedName===t.LocalizedName},getOptionLabel:function(e){return e.LocalizedName},options:l?b:[],loading:d,renderInput:function(e){return c.a.createElement(B.a,Object.assign({},e,{label:"Search a city",variant:"filled",onChange:function(e){return u(e.target.value)},InputProps:Object(x.a)({},e.InputProps,{endAdornment:c.a.createElement(c.a.Fragment,null,d?c.a.createElement(L.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})}var J=a(86),Z=a(56),G=a.n(Z),Y=a(35),$=a.n(Y),Q=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=(null===e||void 0===e?void 0:e.toString().length)>1?e:"0"+e;r("https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png"))}),[e]),c},X=function(){var e,t,a,r,o=Object(n.useState)({}),i=Object(v.a)(o,2),l=i[0],u=i[1],s=Object(V.useRecoilValue)(M);Object(n.useEffect)((function(){Object(k.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(A).concat(s.Key).concat(T));case 2:t=e.sent,a=t.data,u(a[0]);case 5:case"end":return e.stop()}}),e)})))()}),[s]);var m=Q(l.WeatherIcon);return c.a.createElement("div",{className:$.a.currentWeather},c.a.createElement("div",{className:$.a.city},s.LocalizedName),c.a.createElement("img",{className:$.a.icon,src:m,alt:"Waether icon"}),c.a.createElement("div",{className:$.a.degree},null===(e=l)||void 0===e||null===(t=e.Temperature)||void 0===t||null===(a=t.Metric)||void 0===a?void 0:a.Value," c"),c.a.createElement("div",{className:$.a.description},null===(r=l)||void 0===r?void 0:r.WeatherText))},ee=a(57),te=a.n(ee),ae=function(e){var t=Q(e.iconId);return c.a.createElement("div",{className:te.a.dayWrather},c.a.createElement("header",{className:te.a.header},e.header),c.a.createElement("img",{src:t,alt:"Weather Icon"}),c.a.createElement("div",null,e.minDegree," | ",e.maxDegree))},ne=a(85),ce=a.n(ne),re=function(){var e=Object(V.useRecoilValue)(M),t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){Object(k.a)(w.a.mark((function t(){var a,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(z).concat(e.Key).concat(K));case 2:a=t.sent,n=a.data,o(n.DailyForecasts);case 5:case"end":return t.stop()}}),t)})))()}),[e]);return c.a.createElement("div",{className:ce.a.forecasts},r.map((function(e,t){var a,n={header:(a=e).Date.substring(5,10),iconId:a.Day.Icon,maxDegree:a.Temperature.Maximum.Value,minDegree:a.Temperature.Minimum.Value};return c.a.createElement(ae,Object.assign({key:t},n))})))},oe=a(193),ie=function(){var e=Object(V.useRecoilState)(P),t=Object(v.a)(e,2),a=t[0],n=t[1],r=Object(V.useRecoilValue)(M);return c.a.createElement("div",{className:G.a.container},c.a.createElement("div",{className:G.a.favoritesButton},a.includes(r)?c.a.createElement(b.a,{onClick:function(){var e=a.filter((function(e){return e.Key!==r.Key}));n(e)}}):c.a.createElement(oe.a,{onClick:function(){var e=[].concat(Object(J.a)(a),[r]),t=(a.length<5||e.shift(),e);n(t)}})),c.a.createElement(X,null),c.a.createElement(re,null))},le=a(11),ue=function(){var e=Object(V.useRecoilValue)(P);return c.a.createElement("div",null,e.map((function(e){return e.LocalizedName})))},se=function(){return c.a.createElement(g.a,null,c.a.createElement(N,null),c.a.createElement(le.d,null,c.a.createElement(le.b,{path:"/home"},c.a.createElement("div",{className:l.a.root},c.a.createElement("div",{className:l.a.body},c.a.createElement(q,null),c.a.createElement(ie,null)))),c.a.createElement(le.b,{path:"/favorites"},c.a.createElement(ue,null)),c.a.createElement(le.b,{path:"*",render:function(){return c.a.createElement(le.a,{to:"/home"})}})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V.RecoilRoot,null,c.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){e.exports={navButtonsContainer:"Navigation_navButtonsContainer__1w3BW",navButton:"Navigation_navButton__1RB8w",selected:"Navigation_selected__1yivo",text:"Navigation_text__bIsMy"}},35:function(e,t,a){e.exports={currentWeather:"CurrentWeather_currentWeather__23SgT",city:"CurrentWeather_city__3t15C",icon:"CurrentWeather_icon__3RI7c",degree:"CurrentWeather_degree__2APO1",description:"CurrentWeather_description__2vpei"}},51:function(e,t,a){e.exports={root:"Layout_root__3LIBh",body:"Layout_body__fc1n1"}},52:function(e,t,a){e.exports={header:"Header_header__2KbHt",title:"Header_title__1Is28"}},56:function(e,t,a){e.exports={container:"WeatherDetailsContainer_container__1alxk",favoritesButton:"WeatherDetailsContainer_favoritesButton__TODZc"}},57:function(e,t,a){e.exports={dayWrather:"DayWeather_dayWrather__qSSUs",header:"DayWeather_header__2lj_h"}},82:function(e,t,a){e.exports={autocomplete:"AsyncAutocomplete_autocomplete__2BrvA"}},85:function(e,t,a){e.exports={forecasts:"Forecasts_forecasts__1S9aR"}},96:function(e,t,a){e.exports=a(147)}},[[96,1,2]]]);
//# sourceMappingURL=main.cf3e7c49.chunk.js.map