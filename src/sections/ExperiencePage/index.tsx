import React, { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

import LocationRed from "../../assets/location_red.svg";
import LocationBlack from "../../assets/location_black.svg";
import CalendarRed from "../../assets/calendar_red.svg";
import CalendarBlack from "../../assets/calendar_black.svg";

import styles from "./index.module.scss";

import { EXPERIENCES, ExperienceType } from "./experience";

export const ExperiencePage: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-min-vh",
        "ui-position--fixed",
        "ui-vertical-align",
        "ui-layer--4"
      )}
    >
      <ExperienceList />
    </div>
  );
};

const ExperienceList = () => {
  let ret: ReactNode[] = [];
  for (let i = 0; i < EXPERIENCES.length; i += 2) {
    ret.push(
      <ExperienceLine
        experienceLeft={EXPERIENCES[i]}
        experienceRight={EXPERIENCES[i + 1]}
        last={EXPERIENCES.length - 2 > i}
      />
    );
  }

  return <div>{ret}</div>;
};

const ExperienceLine: FunctionComponent<{
  experienceLeft: ExperienceType;
  experienceRight: ExperienceType;
  last: boolean;
}> = ({ experienceLeft, experienceRight, last }) => {
  return (
    <div
      className={classnames(
        "ui-flex",
        "ui-h--6",
        "ui-pt--2",
        "ui-pb--2",
        "ui-animate--focus-in"
      )}
    >
      <div
        className={classnames(
          "ui-min-vw--50",
          "ui-text--right",
          "ui-pl--5",
          "ui-pr--2",
          "ui-border-box",
          "ui-color--black"
        )}
      >
        <div className={classnames("ui-flex")}>
          <div className={classnames("ui-flex--grow")} />
          <div
            className={classnames([
              "ui-border-color--black",
              { "ui-bottom-border": last },
              styles["experience-container"],
              "ui-animate--focus-in-expand"
            ])}
          >
            {experienceLeft["companyName"]}
            <div className={classnames("ui-text--xs", "ui-pt--1")}>
              <em>{experienceLeft["title"]}</em>
            </div>
            <div className={classnames("ui-text--xs", "ui-pt--2")}>
              {experienceLeft["location"]}
              <img
                src={LocationBlack}
                className={classnames("ui-icon--xs", "ui-ml--1")}
                alt="location-icon"
              />
            </div>
            <div className={classnames("ui-text--xs", "ui-pt--1", "ui-pb--3")}>
              {experienceLeft["dates"][0]}
              {" - "}
              {experienceLeft["dates"][1]}
              <img
                src={CalendarBlack}
                className={classnames("ui-icon--xs", "ui-ml--1")}
                alt="location-icon"
              />
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
              { "ui-bottom-border": last },
              styles["experience-container"],
              "ui-animate--focus-in-expand"
            )}
          >
            {experienceRight["companyName"]}
            <div className={classnames("ui-text--xs", "ui-pt--1")}>
              <em>{experienceRight["title"]}</em>
            </div>
            <div className={classnames("ui-text--xs", "ui-pt--2")}>
              <img
                src={LocationRed}
                className={classnames("ui-icon--xs", "ui-mr--1")}
                alt="location-icon"
              />
              {experienceRight["location"]}
            </div>
            <div className={classnames("ui-text--xs", "ui-pt--1", "ui-pb--3")}>
              <img
                src={CalendarRed}
                className={classnames("ui-icon--xs", "ui-mr--1")}
                alt="location-icon"
              />
              {experienceRight["dates"][0]}
              {" - "}
              {experienceRight["dates"][1]}
            </div>
          </div>
          <div className={classnames("ui-flex--grow")} />
        </div>
      </div>
    </div>
  );
};
