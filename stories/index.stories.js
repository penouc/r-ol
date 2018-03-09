import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { LayerManagerApp } from "../src/components/layerManagerApp";
import { LayerBox } from "../src/components/layerManagerApp/layerBox";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ))
  .add("layermanager", () => <LayerManagerApp />)
  .add("LayerBox", () => <LayerBox onClick={action("clicked")} />);
