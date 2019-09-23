import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

export const Navbar: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-position--sticky",
        "ui-vertical-align",
        styles["navbar-height"]
      )}
    >
      <div
        className={classnames(
          "ui-flex",
          "ui-body",
          "ui-space-between",
          "ui-ma"
        )}
      >
        <div>
          <div
            className={classnames(
              "ui-h--3",
              "ui-font--cursive",
              "ui-ml--2",
              "ui-mr--2"
            )}
          >
            <span className={"ui-color--blue"}>swornim</span>
            <span className={"ui-color--red"}>barahi</span>
          </div>
        </div>
        <div
          className={classnames("ui-flex", styles["navbar-links-container"])}
        >
          <div
            className={classnames(
              "ui-ml--1",
              "ui-mr--2",
              "ui-text--center",
              "ui-vertical-align"
            )}
          >
            <a
              href="#Home"
              className={classnames("ui-text--no-decor", "ui-color--charcoal")}
            >
              <div
                className={classnames(
                  "ui-text--md",
                  "ui-font--light",
                  styles["navbar-link"]
                )}
              >
                Home
              </div>
            </a>
          </div>
          <div
            className={classnames(
              "ui-ml--2",
              "ui-mr--2",
              "ui-text--center",
              "ui-vertical-align"
            )}
          >
            <a
              href="#About"
              className={classnames("ui-text--no-decor", "ui-color--charcoal")}
            >
              <div className={classnames("ui-text--md", styles["navbar-link"])}>
                About
              </div>
            </a>
          </div>
          <div
            className={classnames(
              "ui-ml--2",
              "ui-mr--2",
              "ui-text--center",
              "ui-vertical-align"
            )}
          >
            <a
              href="#Experience"
              className={classnames("ui-text--no-decor", "ui-color--charcoal")}
            >
              <div className={classnames("ui-text--md", styles["navbar-link"])}>
                Experience
              </div>
            </a>
          </div>
          <div
            className={classnames(
              "ui-ml--2",
              "ui-mr--1",
              "ui-text--center",
              "ui-vertical-align"
            )}
          >
            <a
              href="#Projects"
              className={classnames("ui-text--no-decor", "ui-color--charcoal")}
            >
              <div className={classnames("ui-text--md", styles["navbar-link"])}>
                Projects
              </div>
            </a>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
