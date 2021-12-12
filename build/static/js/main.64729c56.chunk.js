(this["webpackJsonpwildfire-app"]=this["webpackJsonpwildfire-app"]||[]).push([[0],{30:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(4),a=c.n(s),o=(c(30),c(6)),r=c.n(o),l=c(16),j=c(3),d=c(25),u=c(9),b=c(20),v=c.n(b),O=c(1),h=function(e){var t,c,n,i,s=e.isVolcano,a=void 0===s?0:s,o=e.isWildfire,r=void 0===o?0:o,l=e.isStorm,j=void 0===l?0:l,d=e.isIceberg,b=void 0===d?0:d,h=(e.lat,e.lng,e.onClick);return a&&(t=Object(O.jsx)(u.a,{icon:"emojione:volcano",className:"location-icon"})),r&&(c=Object(O.jsx)(u.a,{icon:v.a,className:"location-icon"})),j&&(n=Object(O.jsx)(u.a,{icon:"carbon:thunderstorm-severe",hFlip:!0,className:"location-icon"})),b&&(i=Object(O.jsx)(u.a,{icon:"openmoji:iceberg",className:"location-icon"})),Object(O.jsxs)("div",{className:"location-marker",onClick:h,children:[t,c,n,i]})},g=function(e){var t=e.info;return Object(O.jsxs)("div",{className:"location-info",children:[Object(O.jsx)("h2",{children:"Event Location Info"}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Type: ",t.id]}),Object(O.jsxs)("li",{children:["Name: ",t.title]})]})]})},f=function(e){var t=e.volcanoes,c=e.wildfires,n=e.storms,i=e.icebergs;return Object(O.jsx)("div",{className:"counter-info",children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Volcanoes : ",Object(O.jsx)("strong",{style:{color:"red"},children:t})]}),Object(O.jsxs)("li",{children:["Wildfires : ",Object(O.jsx)("strong",{style:{color:"red"},children:c})]}),Object(O.jsxs)("li",{children:["Storms : ",Object(O.jsx)("strong",{style:{color:"red"},children:n})]}),Object(O.jsxs)("li",{children:["IceBergs : ",Object(O.jsx)("strong",{style:{color:"red"},children:i})]})]})})},x=function(e){var t=e.selected,c=e.eventData,i=e.center,s=e.zoom,a=Object(n.useState)(null),o=Object(j.a)(a,2),r=o[0],l=o[1],u=0,b=0,v=0,x=0,m=0,p=0,D=0,S=0;t.forEach((function(e){"V"===e.value?m=1:"W"===e.value?p=1:"S"===e.value?D=1:"I"===e.value&&(S=1)}));var k=c.map((function(e){return 8===e.categories[0].id?(b+=1,Object(O.jsx)(h,{isWildfire:p,lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){l({id:e.categories[0].title,title:e.title})}})):12===e.categories[0].id?(u+=1,Object(O.jsx)(h,{isVolcano:m,lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){l({id:e.categories[0].title,title:e.title})}})):10===e.categories[0].id?(v+=1,Object(O.jsx)(h,{isStorm:D,lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){l({id:e.categories[0].title,title:e.title})}})):15===e.categories[0].id?(x+=1,Object(O.jsx)(h,{isIceberg:S,lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){l({id:e.categories[0].title,title:e.title})}})):null}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"map",children:Object(O.jsx)(d.a,{bootstrapURLKeys:{key:"AIzaSyBdBvxU8-2HtDvYhPDUS2jyP5x9Ze2f5hw"},defaultCenter:i,defaultZoom:s,"border-color":"black",children:k})}),r&&Object(O.jsx)(g,{info:r}),Object(O.jsx)(f,{volcanoes:u,wildfires:b,storms:v,icebergs:x})]})};x.defaultProps={center:{lat:42.3265,lng:-122.8756},zoom:1};var m=x,p=c.p+"static/media/loader.fe6d9081.gif",D=function(){return Object(O.jsxs)("div",{className:"loader",children:[Object(O.jsx)("img",{src:p,alt:"Loading"}),Object(O.jsx)("h1",{children:"Fetching Data"})]})},S=c(5),k=c(22),N=c(24),y=function(e){var t=function(e){for(var t=[],c=0;c<e.length;++c)t.push(["".concat(e[c].categories[0].title),"".concat(e[c].id),"".concat(e[c].title),"".concat(e[c].geometries[0].date),"".concat(e[c].geometries[0].coordinates[0]),"".concat(e[c].geometries[0].coordinates[1])]);return t}(e),c=[["Event Type","Event ID","Event Name","Event Date","Longitude","Latitude"]].concat(Object(S.a)(t)),n="sep=!\n";return c.forEach((function(e){var t=e.join("!");n+=t+"\n"})),n},C=function(){var e=new Date;return"Disasters_Info_".concat(e.getDate(),"_").concat(e.getMonth(),"_").concat(e.getFullYear(),".csv")},I=function(e){var t=e.eventData;return Object(O.jsx)("div",{className:"download-button",children:Object(O.jsx)(k.CSVLink,{filename:C(),separator:"!",data:y(t),asyncOnClick:!0,children:Object(O.jsx)("h1",{children:Object(O.jsx)(N.a,{})})})})},w=function(e){var t=e.eventData;return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("h1",{children:" Natural Disaster Tracker "}),Object(O.jsx)(I,{eventData:t})]})},E=c(23),F=[{label:"WildFires \ud83d\udd25",value:"W"},{label:"Volcanoes \ud83c\udf0b",value:"V"},{label:"Storm \u26c8\ufe0f",value:"S"},{label:"IceBerg \ud83e\uddca",value:"I"}];var L=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),a=Object(j.a)(s,2),o=a[0],d=a[1],u=Object(n.useState)([]),b=Object(j.a)(u,2),v=b[0],h=b[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(){var t,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.events,i(n),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(w,{eventData:c})}),Object(O.jsxs)("div",{className:"selection-menu",children:[Object(O.jsx)("h1",{children:"Select Disaster"}),Object(O.jsx)(E.a,{options:F,value:v,onChange:h,labelledBy:"Select",shouldToggleOnHover:!0})]}),o?Object(O.jsx)(D,{}):Object(O.jsx)(m,{selected:v,eventData:c})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),B()}},[[41,1,2]]]);
//# sourceMappingURL=main.64729c56.chunk.js.map