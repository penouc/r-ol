export let layerConfig = [
  {
    name: "高德地图",
    value: "amapLayer",
    url:
      "http://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&x={x}&y={y}&z={z}&style=7"
  },
  {
    name: "到达点（热力图）",
    value: "arriveLayer",
    url: "http://dipper-heatmap.amap.com/monthly?m=1&t=31&x={x}&y={y}&z={z}"
  },
  {
    name: "节点层",
    url: "http://mrsq.amap.com/map/tile/node/900913/{x}_{y}_{z}.png"
  },
  {
    name: "电子眼",
    url:
      "http://mrsq.amap.com/map/tile/camera/900913/{x}_{y}_{z}.png?pixBuf=100&renderStyleId=997"
  },
  {
    name: "魔盒",
    value: "moheLayer",
    url: "http://mrsq.amap.com/map/tile/aoi/900913/{x}_{y}_{z}.png"
  },
  {
    name: "路网层",
    value: "highwayLayer",
    url: "http://mrsq.amap.com/map/tile/aoi/900913/{x}_{y}_{z}.png"
  }
];
