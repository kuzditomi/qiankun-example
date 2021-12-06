import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

function render(props: any) {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// some code
renderWithQiankun({
  mount(props: any) {
    console.log("mount home app");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap home app");
  },
  unmount(props: any) {
    console.log("unmount home app");
    const { container } = props;
    const mountRoot = container?.querySelector("#root");
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector("#root")
    );
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
