import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import ProfilePicture from "../../assets/profile_picture.jpg";
import { Gmail, GitHub, Medium, LinkedIn } from "../../components/Icons";

export const MainPage: FunctionComponent = () => {
  return (
    <>
      <div>
        <img
          src={ProfilePicture}
          alt=""
          className={classnames(
            "ui-circle",
            "ui-position--fixed",
            "ui-axis--normalize",
            styles["main-page--profile-placement"],
            styles["main-page--profile-picture"]
          )}
        />
      </div>
      <div>
        <a
          href="https://github.com/swornimbarahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub
            className={classnames(
              "ui-position--fixed",
              "ui-axis--normalize",
              styles["main-page--logo"],
              styles["main-page--logo-placement-github"]
            )}
          />
        </a>

        <a
          href="mailto:swornimbarahi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gmail
            className={classnames(
              "ui-position--fixed",
              "ui-axis--normalize",
              styles["main-page--logo"],
              styles["main-page--logo-placement-gmail"]
            )}
          />
        </a>
        <a
          href="https://linkedin.com/in/swornimbarahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn
            className={classnames(
              "ui-position--fixed",
              "ui-axis--normalize",
              styles["main-page--logo"],
              styles["main-page--logo-placement-linkedin"]
            )}
          />
        </a>
        <a
          href="https://medium.com/@swornimbarahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Medium
            className={classnames(
              "ui-position--fixed",
              "ui-axis--normalize",
              styles["main-page--logo"],
              styles["main-page--logo-placement-medium"]
            )}
          />
        </a>
      </div>
    </>
  );
};
