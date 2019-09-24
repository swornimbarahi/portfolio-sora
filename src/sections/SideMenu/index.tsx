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
        "ui-layer--3",
        "ui-min-vh",
        "ui-ml--4",
        "ui-mr--4",
        "ui-flex",
        "ui-flex--vertical",
        "ui-space-between"
      )}
    >
      <div />
      <div />
      <MenuButton />
      <Icons />
    </div>
  );
};
