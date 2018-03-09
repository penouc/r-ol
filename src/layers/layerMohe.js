import TileLayer from "ol/layer/tile";
import XYZ from "ol/source/xyz";

let moheLayer = new TileLayer({
  source: new XYZ({
    tileUrlFunction: function(coord) {
      return "http://mrsq.amap.com/map/tile/aoi/900913/{x}_{y}_{z}.png"
        .replace("{x}", coord[1])
        .replace("{y}", -coord[2] - 1)
        .replace("{z}", coord[0]);
    }
  }),
  zIndex: 3,
  name: "amap地图"
});

let showLayer = (before, after) => {
  before && before();
  moheLayer.setVisible(true);
  after && after();
};

let hideLayer = (before, after) => {
  before && before();
  moheLayer.setVisible(false);
  after && after();
};

export { moheLayer, showLayer, hideLayer };
