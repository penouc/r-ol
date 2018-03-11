import { createStore } from "redux";
import { renderVectorApp } from "./renderSomeVectors";
import { initState } from "./initState";
import { demoVectorLayer } from "../layers/layerDemoVector";

let store = createStore(renderVectorApp, initState);

store.subscribe(function() {
  console.log("subscribe");
  demoVectorLayer.refresh();
});

export default store;
