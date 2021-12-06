import React from "react";
import ReactDOM from "react-dom";

export function renderSubApp(isLoading: boolean) {
  const container = document.getElementById("container");

  ReactDOM.render(<Render loading={isLoading} />, container);
}

const Render: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
};
