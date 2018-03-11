import VectorSource from "ol/source/vector";
import WKT from "ol/format/wkt";

const getSomeData = data => {
  let source = new VectorSource({});
  let format = new WKT();
  let feature = format.readFeature("POINT (116.415592 39.934313)");
  feature.getGeometry().transform("EPSG:4326", "EPSG:3857");
  source.addFeature(feature);
  //   console.log("actions", source);
  return {
    type: "RENDER_SOME_VECTORS",
    source
  };
};

const renderVectorApp = (state, action) => {
  switch (action.type) {
    case "RENDER_SOME_VECTORS":
      return Object.assign(...state, {
        demoSource: action.source
      });
    default:
      return state;
  }
};

export { getSomeData, renderVectorApp };
