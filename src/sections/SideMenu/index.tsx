import React, { FunctionComponent, useContext } from "react";
import classnames from "classnames";

import { Icons } from "../../components/Icons";
import { MenuButton } from "../../components/MenuButton";

import { MenuContext } from "../../stores/MenuContext";

export const SideMenu: FunctionComponent = () => {
  const { showIcons } = useContext(MenuContext) as {
    showIcons: boolean;
  };

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
      <div className={"ui-no-mobile"} />
      <div className={"ui-no-mobile"} />
      <div className={"ui-no-mobile"} />
      <div className={"ui-no-mobile"} />
      <div className={"ui-no-mobile"} />
      <div className={"ui-no-mobile"} />
      <div className={"ui-no-mobile"} />
      <div className={classnames("ui-mt--6")}>
        <MenuButton />
      </div>
      <div className={"ui-no-landscape-mobile"} />
      <div className={"ui-no-landscape-mobile"} />
      <div className={"ui-no-landscape-mobile"} />
      {showIcons ? (
        <Icons />
      ) : (
        <>
          <div className="ui-mt--10 ui-mb--10" />
          <div className="ui-mt--3" />
        </>
      )}
      <div className={"ui-only-mobile"} />
      <div className={"ui-only-mobile"} />
      <div className={"ui-only-mobile"} />
      <div className={"ui-only-mobile"} />
    </div>
  );
};
