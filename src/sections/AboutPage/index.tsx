import React, { FunctionComponent } from "react";
import classnames from "classnames";

import SoraPicture from "../../assets/sora_picture.svg";

import styles from "./index.module.scss";

export const AboutPage: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-position--fixed",
        "ui-vertical-align",
        "ui-layer--4",
        "ui-min-vh"
      )}
    >
      <div>
        <div
          className={classnames(
            "ui-min-vw",
            "ui-flex",
            "ui-center",
          )}
        >
          <img
            src={SoraPicture}
            className={classnames(
              styles["sora-picture"],
              "ui-circle",
              "ui-no-mobile",
              "ui-mb--3",
              "ui-landscape-no-mobile"
            )}
            alt=""
          />
        </div>
        <div
          className={classnames(
            "ui-flex",
            "ui-text--sm",
            "ui-pt--2",
            "ui-animate--focus-in"
          )}
        >
          <div
            className={classnames(
              "ui-min-vw--50",
              "ui-flex",
              "ui-text--right",
              "ui-pl--5",
              "ui-pr--4",
              "ui-border-box"
            )}
          >
            <div className="ui-flex--grow" />
            <div className={classnames("ui-min-vw--30")}>
              I am currently a senior pursuing a Bachelors of Science degree in
              Computer Science at SUNY Plattsburgh. I love working on{" "}
              <a
                className={classnames(
                  "ui-text--no-decor",
                  "ui-color--black",
                  "ui-text--underline"
                )}
                href="https://github.com/swornimbarahi"
                target="_blank"
                rel="noopener noreferrer"
              >
                projects
              </a>{" "}
              as a Full Stack Developer in{" "}
              <a
                className={classnames(
                  "ui-text--no-decor",
                  "ui-color--black",
                  "ui-text--underline"
                )}
                href="https://www.coding-hub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coding Hub
              </a>
              , a club on campus.
            </div>
          </div>
          <div
            className={classnames(
              "ui-min-vw--50",
              "ui-text--left",
              "ui-flex",
              "ui-pr--5",
              "ui-pl--4",
              "ui-border-box",
              "ui-color--red"
            )}
          >
            <div className={classnames("ui-min-vw--30")}>
              I grew up helping build and building{" "}
              <a
                className={classnames(
                  "ui-text--no-decor",
                  "ui-color--red",
                  "ui-text--underline"
                )}
                href="https://festivalscelebratedinnepal.wordpress.com/2017/09/21/rato-machhendranath-jatra-red-chariot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a chariot for the Rato Macchendranath deity
              </a>{" "}
              in Lalitpur, Nepal. And I love playing the guitar and the drums.
            </div>
            <div className="ui-flex--grow" />
          </div>
        </div>
      </div>
    </div>
  );
};
