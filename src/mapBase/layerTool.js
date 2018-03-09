import { getMapInstance } from "./mapInstance";

function addLayer(layer) {
  let Layers = getMapInstance().getLayers();
  Layers.push(layer);
}

function removeLayer() {}

const addInteraction = interaction => {
  getMapInstance().addInteraction(interaction);
};

export { addLayer, removeLayer, addInteraction };
