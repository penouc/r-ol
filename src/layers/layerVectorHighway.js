import VectorLayer from "ol/layer/vector";
import VectorSource from "ol/source/vector";

let source = new VectorSource({});
let vectorHighwayLayer = new VectorLayer({
  source: source,
  zIndex: 7
});

export { vectorHighwayLayer };

export let setSource = source => {
  vectorHighwayLayer.setSource(source);
};
