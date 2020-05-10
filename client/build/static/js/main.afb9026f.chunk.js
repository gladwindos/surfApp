(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,t,a){e.exports=a(79)},51:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(25),s=(a(51),a(52),a(29)),i=function(){return r.a.createElement(s.a,{bg:"dark",variant:"dark"},r.a.createElement(s.a.Brand,null,"Surfing Spots"))},u=a(9),m=a.n(u),p=a(15),d=a(20),f=a(17),E=a(21),v=a(44),h=a(10),g=a(40),b=a(41),S=a(45),j=a(43),k=a(24),w=a.n(k),x=function(e){Object(S.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({address:e}),n.props.updateLocation({})},n.handleSelect=function(e){Object(k.geocodeByAddress)(e).then((function(e){var t=e[0].formatted_address;return n.setState({address:t}),Object(k.getLatLng)(e[0])})).then((function(e){console.log("Success",e),n.props.updateLocation(e)})).catch((function(e){return console.error("Error",e)}))},n.state={address:""},n}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,o=e.loading;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label",htmlFor:"location-input"},"Location"),r.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input form-control"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},o&&r.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",n(e,{className:t,style:a}),r.a.createElement("span",null,e.description))}))))}))}}]),a}(r.a.Component),O=function(e){var t=e.filterData,a=e.setFilterData,n=e.getBestSpots,o=e.setSpots,c=e.getNearestSpot,l=e.setNearestSpot,s=t.experience,i=t.location,u=t.distance,g=function(e){a(Object(f.a)(Object(f.a)({},t),{},Object(d.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n(s,i,u,o),i.lat&&i.lng&&c(s,i,u,l);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(E.a,null,r.a.createElement(h.a,{onSubmit:function(e){return b(e)},className:"filter-section"},r.a.createElement(h.a.Group,{controlId:"experience-dropdown"},r.a.createElement(h.a.Label,null,"Experience"),r.a.createElement(h.a.Control,{as:"select",name:"experience",onChange:function(e){return g(e)}},r.a.createElement("option",{value:"novice"},"Novice"),r.a.createElement("option",{value:"intermediate"},"Intermediate"),r.a.createElement("option",{value:"expert"},"Expert"))),r.a.createElement(x,{updateLocation:function(e){a(Object(f.a)(Object(f.a)({},t),{},{location:e}))}}),r.a.createElement(h.a.Group,{controlId:"distance-dropdown"},r.a.createElement(h.a.Label,null,"Max Distance"),r.a.createElement(h.a.Control,{as:"select",name:"distance",onChange:function(e){return g(e)}},r.a.createElement("option",{value:"none"},"None"),r.a.createElement("option",{value:"1"},"1km"),r.a.createElement("option",{value:"5"},"5km"),r.a.createElement("option",{value:"10"},"10km"),r.a.createElement("option",{value:"25"},"25km"),r.a.createElement("option",{value:"50"},"50km"),r.a.createElement("option",{value:"100"},"100km"))),r.a.createElement(v.a,{variant:"primary",type:"submit"},"Filter")))},y=a(42),N=a(16),_=a(18),C=function(e){var t=e.spots;return r.a.createElement(_.a,null,r.a.createElement(_.a.Item,{className:"spots-list-header"},r.a.createElement("h4",null,"Best Surfing Spots")),r.a.createElement("div",{className:"spots-list"},t.length>0?t.map((function(e){return r.a.createElement(_.a.Item,{key:e.spot_id},r.a.createElement("h5",null,e.spot_name+", "+e.county_name),r.a.createElement("p",null,"Wind Speed: "+e.wind_speed+"m/s"))})):r.a.createElement(_.a.Item,null,r.a.createElement("p",null,"Please refine your search"))))},B=a(13),I=function(e){var t=e.header,a=e.title,n=e.text;return r.a.createElement(B.a,null,r.a.createElement(B.a.Header,{as:"h5"},t),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,a),r.a.createElement(B.a.Text,null,n)))},L=function(e){var t=e.spots,a=e.nearestSpot,n=t.length>0?t[0].spot_name+", "+t[0].county_name:"Please refine your search",o=t.length>0?"Wind Speed: "+t[0].wind_speed+" m/s":"-",c=a&&a.spot_name?a.spot_name+", "+a.county_name:"Please refine your search",l=a&&a.wind_speed?"Wind Speed: "+a.wind_speed:"-";return r.a.createElement("div",{className:"spots-section"},r.a.createElement(I,{header:"Best Spot Today",title:n,text:o}),r.a.createElement(I,{header:"Nearest Quality Spot",title:c,text:l}))},D=function(e){var t=e.spots,a=e.nearestSpot;return r.a.createElement(E.a,null,r.a.createElement(y.a,null,r.a.createElement(N.a,{md:6},r.a.createElement(C,{spots:t})),r.a.createElement(N.a,{md:6},r.a.createElement(L,{spots:t,nearestSpot:a}))))},P=a(28),W=a.n(P),F=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n,r){var o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="api/spots/best/"+t+"/?",a.lat&&a.lng&&(o+="latitude=".concat(a.lat,"&longitude=").concat(a.lng,"&"),"none"!==n&&(o=o+"distance="+n)),console.log(o),e.next=6,W.a.get(o);case 6:c=e.sent,r(c.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n,r){var o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o="api/spots/nearest/"+t+"/?",a.lat&&a.lng&&(o+="latitude=".concat(a.lat,"&longitude=").concat(a.lng,"&"),"none"!==n&&(o=o+"distance="+n)),e.next=5,W.a.get(o);case 5:c=e.sent,r(c.data[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n,r){return e.apply(this,arguments)}}();var A=function(){var e=Object(n.useState)({experience:"novice",location:{},distance:"none"}),t=Object(l.a)(e,2),a=t[0],o=t[1],c=a.experience,s=a.location,u=a.distance,m=Object(n.useState)([]),p=Object(l.a)(m,2),d=p[0],f=p[1],E=Object(n.useState)({}),v=Object(l.a)(E,2),h=v[0],g=v[1];return Object(n.useEffect)((function(){F(c,s,u,f)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(O,{filterData:a,setFilterData:o,getBestSpots:F,setSpots:f,getNearestSpot:T,setNearestSpot:g}),r.a.createElement(D,{filterData:a,spots:d,nearestSpot:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.afb9026f.chunk.js.map