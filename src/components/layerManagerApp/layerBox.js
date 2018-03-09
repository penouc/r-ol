import React, { Component } from "react";
import {
  amapLayer,
  showLayer as showamapLayer,
  hideLayer as hideamapLayer
} from "../../layers/layerAmap";
import {
  arriveLayer,
  showLayer as showarriveLayer,
  hideLayer as hidearriveLayer
} from "../../layers/layerArrive";
import {
  moheLayer,
  showLayer as showmoheLayer,
  hideLayer as hidemoheLayer
} from "../../layers/layerMohe";
import {
  highwayLayer,
  showLayer as showhighwayLayer,
  hideLayer as hidehighwayLayer
} from "../../layers/layerHighway";
// import "./index.css";

let layersLink = {
  amapLayer,
  showamapLayer,
  hideamapLayer,
  arriveLayer,
  showarriveLayer,
  hidearriveLayer,
  moheLayer,
  showmoheLayer,
  hidemoheLayer,
  highwayLayer,
  showhighwayLayer,
  hidehighwayLayer
};

const boxStyle = {
  display: "inline-block",
  position: "relative",
  width: "40px",
  height: "40px",
  backgroundColor: "#E7ECFF ",
  border: "1px rgb(185, 193, 205) dashed",
  borderRadius: "4px",
  left: "0px",
  textAlign: "center",
  verticalAlign: "middle",
  //   fontSize: "0px",
  lineHeight: "40px",
  color: "#fff",
  marginLeft: "3px",
  marginTop: "3px",
  cursor: "pointer"
};

export class LayerBox extends Component {
  clickBox = ev => {
    let currLayer = layersLink[this.props.value];
    if (!currLayer) {
      return;
    }
    if (currLayer.getVisible() === true) {
      //此处增加了 Redux 之后，去除 amapLayer
      layersLink["hide" + this.props.value]();
    } else {
      layersLink["show" + this.props.value]();
    }
  };
  render() {
    return (
      <div style={boxStyle} onClick={this.clickBox}>
        <div className="layer-box box-unused">
          <div className="div_text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
