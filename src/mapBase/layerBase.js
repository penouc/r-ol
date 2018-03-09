// import { TileLayer } from "ol/tile";

export class layerBase {
  name = "图层爸爸";
  constructor(options) {
    this.init = false;

    this.createBaseLayer();
  }

  openLayer = (beforeOpen, afterOpen) => {};

  closeLayer = (beforeOpen, afterOpen) => {};
}
