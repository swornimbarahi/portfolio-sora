import React, { FunctionComponent } from "react";
import classnames from "classnames";

import { SideMenu } from "./sections/SideMenu";

import "./App.scss";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { MainPage } from "./sections/MainPage";

const App: FunctionComponent = () => {
  return (
    <div className="ui-position--relative">
      <SideMenu />
      <Background />
      <Logo />
      <div
        className={classnames(
          "ui-body",
          "ui-position--relative",
          "ui-layer--3",
          "ui-ma"
        )}
      >
        <MainPage />
      </div>
      <div style={{ height: "400vh" }} />
    </div>
  );
};

export default App;
