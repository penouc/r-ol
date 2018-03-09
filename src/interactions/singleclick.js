// import { getMapInstance } from "../mapBase/mapInstance";
import Pointer from "ol/interaction/pointer";
import condition from "ol/events/condition";
import getHighwayData from "../redux/actions/getHighwayData";

const handleDownEvent = ev => {
  return true;
};

const handleUpEvent = ev => {
  if (!condition.doubleClick(ev)) {
    getHighwayData(ev.coordinate);
    return false;
  }
  return false;
};

let clickInteration = new Pointer({
  handleDownEvent: handleDownEvent,
  handleUpEvent: handleUpEvent
});

export { clickInteration };
