import { getMapInstance } from "../mapInstance";
import proj from "ol/proj";

const GeoUtils = {
  getBoundsPixBuf: function(loc, radius) {
    radius = radius || 5;
    if (!loc) {
      alert("请传入坐标点");
    }
    var isE4326 = loc[0] < 180 ? true : false;
    if (isE4326) {
      loc = proj.transform(loc, "EPSG:4326", "EPSG:3857");
    }
    // 西南角（左下角） ，东北角（右上角）
    var pixLoc = getMapInstance().getPixelFromCoordinate(loc);
    var sw = [pixLoc[0] - radius, pixLoc[1] + radius];
    var ne = [pixLoc[0] + radius, pixLoc[1] - radius];

    if (isE4326) {
      var startPoint = proj.transform(
        getMapInstance().getCoordinateFromPixel(sw),
        "EPSG:3857",
        "EPSG:4326"
      );
      var endPoint = proj.transform(
        getMapInstance().getCoordinateFromPixel(ne),
        "EPSG:3857",
        "EPSG:4326"
      );
      return startPoint.concat(endPoint);
    }
    return getMapInstance()
      .getCoordinateFromPixel(sw)
      .concat(getMapInstance().getCoordinateFromPixel(ne));
  }
};

export default GeoUtils;
