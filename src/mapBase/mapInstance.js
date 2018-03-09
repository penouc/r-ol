import Map from "ol/map";
import View from "ol/view";
import Control from "ol/control";
import "../assets/css/ol.css";

let mapInstance;

const initMap = () => {
  mapInstance = new Map({
    target: "map",
    layers: [],
    view: new View({
      center: [12958000, 4857000],
      zoom: 18,
      maxZoom: 24,
      minZoom: 4
    }),
    controls: Control.defaults({
      attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
        collapsible: false
      })
    })
  });

  var controls = mapInstance.getControls().getArray();
  for (let index = 0; index < controls.length; index++) {
    const element = controls[index];
    mapInstance.removeControl(element);
  }
};

let getMapInstance = function() {
  return mapInstance;
};

export { initMap, getMapInstance };
