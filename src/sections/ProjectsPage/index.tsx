import React, { FunctionComponent } from "react";
import classnames from "classnames";

export const ProjectsPage: FunctionComponent = () => {
  return (
    <div>
      <div
        className={classnames(
          "ui-position--fixed",
          "ui-vertical-align",
          "ui-layer--4",
          "ui-min-vh"
        )}
      >
        <div>
          <div className={classnames("ui-flex", "ui-h--6", "ui-pb--1")}>
            <div
              className={classnames(
                "ui-min-vw--50",
                "ui-text--right",
                "ui-pl--5",
                "ui-pr--2",
                "ui-border-box"
              )}
            ></div>
            <div
              className={classnames(
                "ui-min-vw--50",
                "ui-text--left",
                "ui-pr--5",
                "ui-pl--2",
                "ui-border-box"
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
