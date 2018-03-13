import VectorLayer from "ol/layer/vector";
import store from "../redux/createStore";

let demoVectorLayer = new VectorLayer({
  source: store.getState()["demoSource"]
});

demoVectorLayer.refresh = () => {
  console.log("new Data", store.getState());
  console.log("demoVectorLayer", demoVectorLayer);
  demoVectorLayer.setSource(store.getState()["demoSource"]);
};

store.subscribe(() => {
  demoVectorLayer.refresh();
});

export { demoVectorLayer };
