import React, { FunctionComponent } from "react";

import GithubIcon from "../../assets/github.png";
import GmailIcon from "../../assets/gmail.png";
import MediumIcon from "../../assets/medium.png";
import LinkedInIcon from "../../assets/linkedin.png";

interface IconsPropType {
  className?: string;
}

export const GitHub: FunctionComponent<IconsPropType> = props => {
  const { className } = props;

  return <img src={GithubIcon} alt="" className={className} />;
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
