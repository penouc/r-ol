import React, { Component } from "react";
import { initMap } from "../mapBase/mapInstance";
import { addLayer, addInteraction } from "../mapBase/layerTool";
import { amapLayer } from "../layers/layerAmap";
import { highwayLayer } from "../layers/layerHighway";
import { vectorHighwayLayer } from "../layers/layerVectorHighway";
import { clickInteration as singleclick } from "../interactions/singleclick";
import { LayerManagerApp } from "../components/layerManagerApp";

function loadLayers() {
  addLayer(amapLayer);
  // addLayer(arriveLayer);
  // addLayer(moheLayer);
  addLayer(highwayLayer);
  addLayer(vectorHighwayLayer);
}

function loadInteractions() {
  addInteraction(singleclick);
}

export class Home extends Component {
  componentDidMount() {
    initMap();
    loadLayers();
    loadInteractions();
  }

  render() {
    return (
      <div>
        <div id="map" />
        <div>
          <LayerManagerApp />
        </div>
      </div>
    );
  }
}
