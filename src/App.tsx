import React, { FunctionComponent, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SideMenu } from "./sections/SideMenu";
import { MainMenu } from "./sections/MainMenu";

import "./App.scss";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { MainPage } from "./sections/MainPage";

import { MenuContext } from "./stores/MenuContext";

const App: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>();

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="ui-position--relative">
      <Router>
        <MenuContext.Provider value={{ showMenu, setShowMenu }}>
          <SideMenu />
          <MainMenu />
        </MenuContext.Provider>
        <Background />
        <Logo />
        <Route path="" exact component={MainPage} />
      </Router>
    </div>
  );
};

export default App;
