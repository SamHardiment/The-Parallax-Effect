import React from "react";
import ReactDom from "react-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import { App } from "./App";
ReactDom.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById("root")
);
