import React, { FunctionComponent } from "react";
import classnames from "classnames";

export const Background: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-position--fixed",
        "ui-layer--1",
        "ui-min-vh",
        "ui-min-vw",
        "ui-flex"
      )}
    >
      <div className={classnames("ui-min-vh", "ui-min-vw--50", "ui-bg--red")} />
      <div
        className={classnames("ui-min-vh", "ui-min-vw--50", "ui-bg--black")}
      />
    </div>
  );
};
