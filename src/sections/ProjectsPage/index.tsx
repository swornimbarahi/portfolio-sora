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
          <LeftProjects />
          <RightProjects />
        </div>
      </div>
    </div>
  );
};

const LeftProjects = () => {
  return (
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
        <a
          className={classnames("ui-text--no-decor", "ui-color--black")}
          href="https://github.com/coding-hub-org/tutoring-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classnames(
              "ui-bottom-border",
              styles["project-container"],
              "ui-border-color--black",
              "ui-animate--text-focus-in"
            )}
          >
            Tutoring Hub
            <div className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--1")}>
              A web app to rate tutors on campus.
            </div>
          </div>
        </a>
      </div>
      <div className={classnames("ui-flex", "ui-pt--1")}>
        <div className={classnames("ui-flex--grow")} />
        <a
          className={classnames("ui-text--no-decor", "ui-color--black")}
          href="https://github.com/swornimbarahi/coches-neurologicos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classnames(
              "ui-bottom-border",
              styles["project-container"],
              "ui-border-color--black",
              "ui-animate--text-focus-in"
            )}
          >
            Coches Neurologicos
            <div className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--1")}>
              A website for a small business in Peru
            </div>
          </div>
        </a>
      </div>
      <div className={classnames("ui-flex", "ui-pt--1")}>
        <div className={classnames("ui-flex--grow")} />
        <a
          className={classnames("ui-text--no-decor", "ui-color--black")}
          href="https://github.com/bad-at-names/gamer_now"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classnames(
              styles["project-container"],
              "ui-animate--text-focus-in"
            )}
          >
            GamerNOW
            <div className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--1")}>
              A fantasy league web app for OverWatch
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const RightProjects = () => {
  return (
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
        <a
          className={classnames("ui-text--no-decor", "ui-color--red")}
          href="https://github.com/coding-hub-org/shuttler-admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classnames(
              "ui-border-color--red",
              "ui-bottom-border",
              styles["project-container"],
              "ui-animate--text-focus-in"
            )}
          >
            Shuttler Website
            <div className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--1")}>
              A mobile app to track the college{"'"}s shuttle
            </div>
          </div>
        </a>
        <div className={classnames("ui-flex--grow")} />
      </div>
      <div className={classnames("ui-flex", "ui-pt--1")}>
        <a
          className={classnames("ui-text--no-decor", "ui-color--red")}
          href="https://github.com/coding-hub-org/coding-hub-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classnames(
              "ui-border-color--red",
              "ui-bottom-border",
              styles["project-container"],
              "ui-animate--text-focus-in"
            )}
          >
            Coding Hub Website
            <div className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--1")}>
              A website for the Coding Club on campus
            </div>
          </div>
        </a>
        <div className={classnames("ui-flex--grow")} />
      </div>
      <div className={classnames("ui-flex", "ui-pt--2")}>
        <a
          className={classnames("ui-text--no-decor", "ui-color--red")}
          href="https://github.com/jgaurav6/onespot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={classnames(
              styles["project-container"],
              "ui-animate--text-focus-in"
            )}
          >
            OneSpot
            <div className={classnames("ui-text--sm", "ui-pt--1", "ui-pb--1")}>
              A web app to keep track of job applications
            </div>
          </div>
        </a>
        <div className={classnames("ui-flex--grow")} />
      </div>
    </div>
  );
};
