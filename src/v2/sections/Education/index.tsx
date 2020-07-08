import React, { FunctionComponent } from "react";
import classnames from "classnames";

import Title from "../../components/Title";

import EducationIcon from "../../assets/icons/education.png";

const Education: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-bg--dark-grey",
        "ui-display--min-height",
        "ui-v-align"
      )}
    >
      <div className={classnames("ui-width--all")}>
        <div className="ui-icon--container">
          <img
            src={EducationIcon}
            alt=""
            className={classnames("ui-icon", "ui-line-align", "ui-icon--solo")}
          />
          <Title
            block={false}
            bold={1}
            size={9}
            className={classnames("ui-font--white", "ui-line-align")}
            uppercase
          >
            asdf
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Education;
