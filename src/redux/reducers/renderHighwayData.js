import { setSource } from "../../layers/layerVectorHighway";
import VectorSource from "ol/source/vector";
import Style from "ol/style/style";
import Stroke from "ol/style/stroke";
import WKT from "ol/format/wkt";

const renderHighwayData = res => {
  let source = new VectorSource({});
  if (res.data) {
    let geom = res.data.data["0"].results["0"].geom;
    let format = new WKT();
    let feature = format.readFeature(geom);
    feature.getGeometry().transform("EPSG:4326", "EPSG:3857");
    feature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "red",
          width: 5
        })
      })
    );
    source.addFeature(feature);
  }

  setSource(source);
};

export default renderHighwayData;
