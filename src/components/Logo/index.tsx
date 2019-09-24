import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

export const Logo: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-flex",
        "ui-h--3",
        "ui-font--cursive",
        "ui-pt--1",
        "ui-position--fixed",
        "ui-layer--4"
      )}
    >
      <div className={classnames("ui-min-vw--50", "ui-h--3", "ui-text--right")}>
        swornim
      </div>
      <div
        className={classnames(
          "ui-min-vw--50",
          "ui-h--3",
          "ui-color--red",
          "ui-text--left"
        )}
      >
        barahi
      </div>
    </div>
  );
};
