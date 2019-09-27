import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import { Icons } from "../../components/Icons";
import { MenuButton } from "../../components/MenuButton";

export const SideMenu: FunctionComponent = () => {
  return (
    <div
      className={classnames(
        "ui-position--fixed",
        "ui-layer--9",
        "ui-min-vh",
        "ui-ml--4",
        "ui-mr--4",
        "ui-flex",
        "ui-flex--vertical",
        "ui-space-between"
      )}
    >
      <div className={classnames(styles["no-mobile"])} />
      <div className={classnames(styles["no-mobile"])} />
      <div className={classnames("ui-mt--8", "ui-mb--2")}>
        <MenuButton />
      </div>
      <Icons />
    </div>
  );
};
