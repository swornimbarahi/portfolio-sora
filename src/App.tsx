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
      <MainPage />
    </div>
  );
};

export default App;
