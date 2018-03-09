import GeoUtils from "../../mapBase/tool/geoUtils";
import proj from "ol/proj";
import axios from "axios";
import renderHighwayData from "../reducers/renderHighwayData";

function getBbox(coord, delta) {
  var ndelta = delta || 5;
  var extent = GeoUtils.getBoundsPixBuf(coord, ndelta);

  return extent;
}

const getHighwayData = coordinate => {
  new Promise((resolve, reject) => {
    let coord = proj.transform(coordinate, "EPSG:900913", "EPSG:4326");
    let extent = getBbox(coord, 5);
    axios({
      // `url` 是用于请求的服务器 URL
      url: "http://mrsq.amap.com/featureinfo?layers=road&bbox=" + extent
    }).then(res => {
      if (
        !res.data ||
        !res.data.data ||
        res.data.data.length === 0 ||
        !res.data.data["0"].results ||
        res.data.data["0"].results.length === 0
      ) {
        return;
      }
      renderHighwayData(res);
    });
  });
};
export default getHighwayData;
