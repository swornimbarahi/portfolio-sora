import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";
// @ts-ignore
import Resume from "../../assets/resume.pdf";

export const ResumeButton: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-flex",
        "ui-h--3",
        "ui-pt--1",
        "ui-position--fixed",
        "ui-position--bottom-10",
        "ui-layer--6"
      )}
    >
      <div
        className={classnames("ui-min-vw--50", "ui-text--md", "ui-text--right")}
      >
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className={classnames("ui-color--red", "ui-text--no-decor")}
        >
          <span
            className={classnames(
              "ui-bg--black",
              "ui-pl--2",
              "ui-pb--1",
              "ui-pt--1",
              styles["logo-black-bg"]
            )}
          >
            Res
          </span>
        </a>
      </div>
      <div
        className={classnames("ui-min-vw--50", "ui-text--md", "ui-text--left")}
      >
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className={classnames("ui-color--black", "ui-text--no-decor")}
        >
          <span
            className={classnames(
              "ui-bg--red",
              "ui-pr--1",
              "ui-pb--1",
              "ui-pt--1",
              styles["logo-red-bg"]
            )}
          >
            ume
          </span>
        </a>
      </div>
    </div>
  );
};
