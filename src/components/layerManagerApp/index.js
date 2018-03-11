import React, { Component } from "react";
import { Button } from "antd";
import { LayerBox } from "./layerBox";
import { layerConfig } from "./layerConfig";
import { getSomeData } from "../../redux/renderSomeVectors";
import store from "../../redux/createStore";

const LayerManagerStyle = {
  height: "48px",
  backgroundColor: "#eee",
  width: "260px",
  position: "fixed",
  left: "104px",
  top: "20px"
};

const clickGetSomeData = () => {
  let action = getSomeData();
  console.log("action ", action);
  store.dispatch(action);
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
        <Button onClick={clickGetSomeData}>试试</Button>
      </div>
    );
  }
}

export { LayerManagerApp };
