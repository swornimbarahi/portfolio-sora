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
        "ui-layer--8"
      )}
    >
      <div className={classnames("ui-min-vw--50", "ui-h--3", "ui-text--right")}>
        <span
          className={classnames(
            "ui-bg--red",
            "ui-pl--2",
            "ui-pb--1",
            styles["logo-black-bg"]
          )}
        >
          swornim
        </span>
      </div>
      <div
        className={classnames(
          "ui-min-vw--50",
          "ui-h--3",
          "ui-color--red",
          "ui-text--left"
        )}
      >
        <span
          className={classnames(
            "ui-bg--black",
            "ui-pr--2",
            "ui-pb--1",
            styles["logo-red-bg"]
          )}
        >
          barahi
        </span>
      </div>
    </div>
  );
};
