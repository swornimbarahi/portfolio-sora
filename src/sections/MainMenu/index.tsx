import React, {
  FunctionComponent,
  useContext,
  Dispatch,
  SetStateAction
} from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

import { MenuContext } from "../../stores/MenuContext";

export const MainMenu: FunctionComponent = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext) as {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;
  };

  return (
    <div
      className={classnames([
        "ui-min-vh",
        "ui-vertical-align",
        "ui-position--fixed",
        "ui-layer--7",
        styles["main-menu-container"],
        { "ui-keep-y": showMenu }
      ])}
      onClick={() => setShowMenu(!showMenu)}
    >
      <div
        className={classnames([
          "ui-min-vw",
          styles["main-menu-background"],
          "ui-min-vh"
        ])}
      >
        <div
          className={classnames(
            "ui-flex",
            "ui-center",
            "ui-color--red",
            "ui-min-h--100"
          )}
        >
          <div
            className={classnames(
              "ui-flex",
              "ui-flex--vertical",
              "ui-space-evenly",
              "ui-min-h--100",
              "ui-text--center",
              "ui-text--md"
            )}
          >
            <Link
              to="/"
              className={classnames(
                "ui-mt--10",
                "ui-pt--10",
                "ui-text--no-decor",
                "ui-color--red"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={classnames("ui-text--no-decor", "ui-color--red")}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={classnames("ui-text--no-decor", "ui-color--red")}
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className={classnames(
                "ui-mb--10",
                "ui-pb--10",
                "ui-text--no-decor",
                "ui-color--red"
              )}
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
