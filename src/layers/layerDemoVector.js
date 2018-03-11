import VectorLayer from "ol/layer/vector";
import VectorSource from "ol/source/vector";
import store from "../redux/createStore";

let demoVectorLayer = new VectorLayer({
  source: store.getState()["demoSource"]
});

demoVectorLayer.refresh = () => {
  console.log("new Data", store.getState());
  console.log("demoVectorLayer", demoVectorLayer);
  demoVectorLayer.setSource(store.getState()["demoSource"]);
};

export { demoVectorLayer };
