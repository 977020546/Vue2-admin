(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-918feb4e"],{"24fd":function(t,e,o){"use strict";o("3782")},3782:function(t,e,o){},"3e2f":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"travelmap"},[o("el-card",{staticClass:"card"},[o("div",{attrs:{id:"main"}})])],1)},n=[],a=o("1725"),c=o("4ec3"),i={name:"TravelMap",created:function(){var t=this;Object(c["i"])().then((function(e){if(200===e.data.status){console.log(e);var o=e.data.data,r=o.points,n=o.linesData;t.draw(r,n)}})).catch((function(t){throw t}))},methods:{draw:function(t,e){var o=this.$echarts.init(document.getElementById("main"));this.$echarts.registerMap("china",a);var r={backgroundColor:"rgb(121,145,209)",geo:{map:"china",aspectScale:.75,zoom:1.1,itemStyle:{areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#09132c"},{offset:1,color:"#274d68"}],globalCoord:!0},shadowColor:"rgb(58,115,192)",shadowOffsetX:10,shadowOffsetY:11},regions:[{name:"南海诸岛",itemStyle:{opacity:.5}}]},series:[{type:"map",label:{show:!0,color:"#1DE9B6",emphasis:{color:"rgb(183,185,14)"}},zoom:1.1,map:"china",itemStyle:{backgroundColor:"rgb(147,235,248)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgb(31,54,150)"},{offset:1,color:"rgb(89,128,142)"}],globalCoord:!0},emphasis:{areaColor:"rgb(46,229,206)",borderWidth:.1}}},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",SymbolSize:10,zlevel:1,data:t,rippleEffect:{period:15,scale:4,brushType:"fill"}},{type:"lines",zlevel:2,effect:{show:!0,period:4,Symbol:"arrow",SymbolSize:7,trailLength:.4},lineStyle:{normal:{color:"#1DE9B6",width:1,opacity:.1,curveness:Math.random()}},data:e}]};o.setOption(r)}}},l=i,u=(o("24fd"),o("2877")),s=Object(u["a"])(l,r,n,!1,null,"6fec4818",null);e["default"]=s.exports},"4ec3":function(t,e,o){"use strict";o.d(e,"f",(function(){return c})),o.d(e,"h",(function(){return i})),o.d(e,"g",(function(){return l})),o.d(e,"e",(function(){return u})),o.d(e,"d",(function(){return s})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return f})),o.d(e,"a",(function(){return h})),o.d(e,"i",(function(){return p}));var r=o("ba5f"),n=o("4328"),a=o.n(n);function c(t){return Object(r["a"])({method:"post",url:"/login",data:t})}function i(t){return Object(r["a"])({method:"get",url:"/students",params:t})}function l(t){return Object(r["a"])({method:"delete",url:"/students/".concat(t)})}function u(){return Object(r["a"])({method:"get",url:"/info"})}function s(t){return t=a.a.stringify(t),Object(r["a"])({method:"post",url:"/info",data:t})}function d(t){return Object(r["a"])({method:"delete",url:"/info/".concat(t)})}function f(t){return t=a.a.stringify(t),Object(r["a"])({method:"put",url:"/info",data:t})}function h(t){return Object(r["a"])({method:"post",url:"/dataview",data:t})}function p(){return Object(r["a"])({method:"get",url:"/travel"})}}}]);