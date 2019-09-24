import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

export const MenuButton: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div onClick={() => setOpen(!open)}>
      <div
        className={classnames(
          styles["menu-icon"],
          open ? styles["menu-icon-open"] : ""
        )}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
