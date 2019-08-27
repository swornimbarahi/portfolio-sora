import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import ProfilePicture from "../../assets/profile_picture.jpg";
import { Gmail, GitHub, Medium, LinkedIn } from "../../components/SVGs/Icons";

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
            styles["main-page--profile-placement"],
            styles["main-page--profile-picture"]
          )}
        />
      </div>
      <div>
        <div
          className={classnames(
            "ui-circle",
            "ui-position--fixed",
            "ui-overflow--hidden",
            styles["main-page--logo-placement"]
          )}
        >
          <Gmail />
        </div>
        <GitHub />
        <Medium />
        <LinkedIn />
      </div>
    </>
  );
};
