import TileLayer from "ol/layer/tile";
import XYZ from "ol/source/xyz";

let highwayLayer = new TileLayer({
  source: new XYZ({
    tileUrlFunction: function(coord) {
      return "http://mrsq.amap.com/map/tile/highway/900913/{x}_{y}_{z}.png?renderStyle=%5B%7B%22layer-name%22%3A%22highway%22%2C%22styles%22%3A%5B%7B%22rules%22%3A%5B%7B%22symbolizers%22%3A%5B%7B%22type%22%3A%22line%22%2C%22stroke%22%3A%22%23000000%22%2C%22stroke-width%22%3A3%7D%5D%7D%5D%7D%5D%7D%5D&render=renderV2"
        .replace("{x}", coord[1])
        .replace("{y}", -coord[2] - 1)
        .replace("{z}", coord[0]);
    }
  }),
  zIndex: 1,
  name: "路网层"
});

let showLayer = (before, after) => {
  before && before();
  highwayLayer.setVisible(true);
  after && after();
};

let hideLayer = (before, after) => {
  before && before();
  highwayLayer.setVisible(false);
  after && after();
};

export { highwayLayer, showLayer, hideLayer };
