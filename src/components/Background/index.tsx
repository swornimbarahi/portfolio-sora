import React, { FunctionComponent } from "react";

import "./index.scss";

import classnames from "classnames";

export const Background: FunctionComponent = () => {
  return (
    <div className="ui-min-vw ui-min-vh ui-bg--charcoal ui-position--absolute ui-layer--0 ui-position--top-0">
      <div
        className={classnames(
          "ui-min-vh ui-bg--white ui-position--absolute",
          "line-ver"
        )}
      />
      <div
        className={classnames(
          "ui-min-vw ui-bg--white ui-position--absolute",
          "line-hor"
        )}
      />
    </div>
  );
};
