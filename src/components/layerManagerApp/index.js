import React, { Component } from "react";
import { LayerBox } from "./layerBox";
import { layerConfig } from "./layerConfig";

const LayerManagerStyle = {
  height: "48px",
  backgroundColor: "#eee",
  width: "260px",
  position: "fixed",
  left: "104px",
  top: "20px"
};

class LayerManagerApp extends Component {
  constructor(props) {
    super();
    this.layersConfItems = layerConfig.map((val, ind) => {
      let icon = val.name.slice(0, 1);
      return (
        <LayerBox key={ind} value={val.value}>
          {icon}
        </LayerBox>
      );
    });
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div style={LayerManagerStyle} className="boxex-wrap">
        {this.layersConfItems}
      </div>
    );
  }
}

export { LayerManagerApp };
