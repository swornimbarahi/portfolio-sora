import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { ResumeButton } from "../../components/ResumeButton";

export const MainPage: FunctionComponent = () => {
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
        <div>
          <FirstLine />
          <SecondLine />
        </div>
      </div>
      <ResumeButton />
    </div>
  );
};

const FirstLine: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-flex",
        "ui-h--6",
        "ui-pb--1",
        "ui-animate--text-focus-in"
      )}
    >
      <div
        className={classnames(
          "ui-min-vw--50",
          "ui-text--right",
          "ui-pl--5",
          "ui-pr--2",
          "ui-border-box"
        )}
      >
        <div>Hello!</div>
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
        <div>
          I am{" "}
          <span className={classnames("ui-bg--red", "ui-color--black")}>
            Swornim
          </span>{" "}
          Barahi.
        </div>
      </div>
    </div>
  );
};

const SecondLine: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-flex",
        "ui-h--6",
        "ui-pb--1",
        "ui-animate--text-focus-in"
      )}
    >
      <div
        className={classnames(
          "ui-min-vw--50",
          "ui-text--right",
          "ui-pl--5",
          "ui-pr--2",
          "ui-border-box"
        )}
      >
        <div>
          A{" "}
          <span className={classnames("ui-bg--black", "ui-color--red")}>
            Software
          </span>
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
        <span className={classnames("ui-bg--red", "ui-color--black")}>
          Engineer.
        </span>
      </div>
    </div>
  );
};
