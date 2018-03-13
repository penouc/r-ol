import Pointer from "ol/interaction/pointer";
import { getSomeData } from "../redux/renderSomeVectors";
import store from "../redux/createStore";
import condition from "ol/events/condition";

const handleDownEvent = ev => {};

const handleEvent = ev => {
  if (condition.doubleClick(ev)) {
    console.log("handleEvent", ev);
    store.dispatch(getSomeData());
    return true;
  }
  return true;
};

let click = new Pointer({
  //   handleDownEvent: handleDownEvent,
  handleEvent: handleEvent
});

export { click };
