import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

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
        <div className={classnames("ui-flex", "ui-text--md")}>
          <div
            className={classnames(
              "ui-text--right",
              "ui-pl--5",
              "ui-pr--2",
              "ui-border-box",
              "ui-min-vw--50",
              styles["card-container"]
            )}
          >
            <div className={classnames("ui-flex")}>
              <div className={classnames("ui-flex--grow")} />
              <div
                className={classnames(
                  "ui-bottom-border",
                  styles["project-container"],
                  "ui-border-color--black",
                  "ui-animate--focus-in-expand"
                )}
              >
                Tutoring Hub
                <div
                  className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--3")}
                >
                  A web app to rate tutors on campus.
                </div>
              </div>
            </div>
            <div className={classnames("ui-flex", "ui-pt--2")}>
              <div className={classnames("ui-flex--grow")} />
              <div
                className={classnames(
                  "ui-bottom-border",
                  styles["project-container"],
                  "ui-border-color--black",
                  "ui-animate--focus-in-expand"
                )}
              >
                Coches Neurologicos
                <div
                  className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--3")}
                >
                  A website for a small business in Peru
                </div>
              </div>
            </div>
            <div className={classnames("ui-flex", "ui-pt--2")}>
              <div className={classnames("ui-flex--grow")} />
              <div
                className={classnames(
                  styles["project-container"],
                  "ui-animate--focus-in-expand"
                )}
              >
                GamerNOW
                <div
                  className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--3")}
                >
                  A fantasy league webapp for OverWatch
                </div>
              </div>
            </div>
          </div>
          <div
            className={classnames(
              "ui-min-vw--50",
              "ui-text--left",
              "ui-pr--5",
              "ui-pl--2",
              "ui-border-box",
              "ui-color--red"
            )}
          >
            <div className={classnames("ui-flex")}>
              <div
                className={classnames(
                  "ui-border-color--red",
                  "ui-bottom-border",
                  styles["project-container"],
                  "ui-animate--focus-in-expand"
                )}
              >
                Shuttler Website
                <div
                  className={classnames("ui-text--xs", "ui-pt--1", "ui-pb--3")}
                >
                  A mobile app to track the college{"'"}s shuttle
                </div>
              </div>
              <div className={classnames("ui-flex--grow")} />
            </div>
            <div className={classnames("ui-flex", "ui-pt--2")}>
              <div
                className={classnames(
                  "ui-border-color--red",
                  "ui-bottom-border",
                  styles["project-container"],
                  "ui-animate--focus-in-expand"
                )}
              >
                Coding Hub Website
                <div
                  className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--3")}
                >
                  A website for the Coding Club on campus
                </div>
              </div>
              <div className={classnames("ui-flex--grow")} />
            </div>
            <div className={classnames("ui-flex", "ui-pt--2")}>
              <div
                className={classnames(
                  styles["project-container"],
                  "ui-animate--focus-in-expand"
                )}
              >
                OneSpot
                <div
                  className={classnames("ui-text--xs", "ui-pt--1", "ui-pb--3")}
                >
                  A webapp to keep track of job applications
                </div>
              </div>
              <div className={classnames("ui-flex--grow")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
