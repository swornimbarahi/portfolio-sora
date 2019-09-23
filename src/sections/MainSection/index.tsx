import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import ProfilePicture from "../../assets/profile_picture.svg";
import { Icons } from "../../components/Icons";

export const MainSection: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-min-vh",
        "ui-vertical-align",
        styles["main--section"]
      )}
    >
      <img
        src={ProfilePicture}
        alt=""
        className={styles["main-page--profile-picture"]}
      />
      <div
        className={classnames("ui-flex", "ui-flex--grow", "ui-flex--vertical")}
      >
        <div className={classnames("ui-flex", "ui-text--center", "ui-ma")}>
          <div className={classnames("ui-mb--6", "ui-tracking-in-expand")}>
            <div className={classnames("ui-h--5")}>Hello! I am</div>
            <h1 className={classnames("ui-h--1", "ui-font--cursive")}>
              Swornim Barahi
            </h1>
            <span className={classnames("ui-h--1", "ui-font--cursive")}>
              Sora{" "}
            </span>
            <span className={classnames("ui-h--5")}>for short.</span>
          </div>
        </div>
        <Icons />
      </div>
    </div>
  );
};
