// modules
import React from "react";
import classnames from "classnames";

// assets
import SwornimBarahi from "../../assets/pictures/swornimbarahi.png";
import Title from "../../components/Title";
import Icons from "../../components/Icons";

const Intro = () => {
  return (
    <div
      className={classnames(
        "ui-text--center",
        "ui-bg--black",
        "ui-display--min-height",
        "ui-v-align"
      )}
    >
      <div>
        <img
          src={SwornimBarahi}
          alt=""
          className={classnames("ui-no-select", "ui-no-drag", "ui-landing")}
        />
        <Title bold={1} className="ui-font--white" size={10} uppercase>
          Swornim Barahi
        </Title>
        <Icons />
      </div>
    </div>
  );
};

export default Intro;
