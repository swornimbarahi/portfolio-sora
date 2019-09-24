import React, {
  FunctionComponent,
  useContext,
  Dispatch,
  SetStateAction
} from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import { MenuContext } from "../../stores/MenuContext";

export const MenuButton: FunctionComponent = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext) as {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;
  };

  return (
    <div onClick={() => setShowMenu(!showMenu)}>
      <div
        className={classnames(
          styles["menu-icon"],
          showMenu ? styles["menu-icon-open"] : ""
        )}
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
