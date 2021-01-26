import Vue from 'vue';
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
 
VueAMap.initAMapApiLoader({
  // 高德key
  key: '75c19882b1dee843a37729e7ff2d0037',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer'],
  v: '1.4.4', 
  uiVersion: '1.0.11' // ui版本号
})
