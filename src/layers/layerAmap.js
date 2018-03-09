import TileLayer from "ol/layer/tile";
import XYZ from "ol/source/xyz";

let amapLayer = new TileLayer({
  source: new XYZ({
    tileUrlFunction: function(coord) {
      return "http://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&x={x}&y={y}&z={z}&style=7"
        .replace("{x}", coord[1])
        .replace("{y}", -coord[2] - 1)
        .replace("{z}", coord[0]);
    }
  }),
  zIndex: 0,
  name: "amap地图"
});

let showLayer = (before, after) => {
  before && before();
  amapLayer.setVisible(true);
  after && after();
};

let hideLayer = (before, after) => {
  before && before();
  amapLayer.setVisible(false);
  after && after();
};

export { amapLayer, showLayer, hideLayer };
