import TileLayer from "ol/layer/tile";
import XYZ from "ol/source/xyz";

let arriveLayer = new TileLayer({
  source: new XYZ({
    tileUrlFunction: function(coord) {
      return "http://dipper-heatmap.amap.com/monthly?m=1&t=31&x={x}&y={y}&z={z}"
        .replace("{x}", coord[1])
        .replace("{y}", -coord[2] - 1)
        .replace("{z}", coord[0]);
    }
  }),
  zIndex: 1,
  name: "到达点"
});

let showLayer = (before, after) => {
  before && before();
  arriveLayer.setVisible(true);
  after && after();
};

let hideLayer = (before, after) => {
  before && before();
  arriveLayer.setVisible(false);
  after && after();
};

export { arriveLayer, showLayer, hideLayer };
