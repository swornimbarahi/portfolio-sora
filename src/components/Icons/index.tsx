import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import GitHubIcon from "../../assets/github.png";
import GmailIcon from "../../assets/gmail.png";
import MediumIcon from "../../assets/medium.png";
import LinkedInIcon from "../../assets/linkedin.png";

interface IconsPropType {
  className?: string;
}

export const Icons: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-flex",
        "ui-flex--vertical",
        "ui-min-w--100",
        "ui-center",
        styles["fade-in"]
      )}
    >
      <div className={classnames("ui-mt--1", "ui-mb--1")}>
        <a
          href="https://github.com/swornimbarahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className={styles["social-logo"]} />
        </a>
      </div>
      <div className={classnames("ui-mt--1", "ui-mb--1")}>
        <a
          href="mailto:swornimbarahi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gmail className={styles["social-logo"]} />
        </a>
      </div>
      <div className={classnames("ui-mt--1", "ui-mb--1")}>
        <a
          href="https://medium.com/@swornimbarahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Medium className={styles["social-logo"]} />
        </a>
      </div>
      <div className={classnames("ui-mt--1", "ui-mb--4")}>
        <a
          href="https://linkedin.com/in/swornimbarahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className={styles["social-logo"]} />
        </a>
      </div>
    </div>
  );
};

export const GitHub: FunctionComponent<IconsPropType> = props => {
  const { className } = props;

  return <img src={GitHubIcon} alt="" className={className} />;
};

export const Gmail: FunctionComponent<IconsPropType> = props => {
  const { className } = props;

  return <img src={GmailIcon} alt="" className={className} />;
};

export const Medium: FunctionComponent<IconsPropType> = props => {
  const { className } = props;

  return <img src={MediumIcon} alt="" className={className} />;
};

export const LinkedIn: FunctionComponent<IconsPropType> = props => {
  const { className } = props;

  return <img src={LinkedInIcon} alt="" className={className} />;
};
