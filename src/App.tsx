import React, { FunctionComponent, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SideMenu } from "./sections/SideMenu";
import { MainMenu } from "./sections/MainMenu";

import "./App.scss";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";

import { MainPage } from "./sections/MainPage";
import { ProjectsPage } from "./sections/ProjectsPage";
import { ExperiencePage } from "./sections/ExperiencePage";

import { MenuContext } from "./stores/MenuContext";
import { AboutPage } from "./sections/AboutPage";

import { App as V2 } from "./v2";

const App: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState<boolean>();
  const [showIcons, setShowIcons] = useState<boolean>();

  useEffect(() => {
    setShowMenu(false);
    setShowIcons(true);
  }, []);

  useEffect(() => {
    setShowIcons(showMenu || window.location.pathname === "/");
  }, [showMenu]);

  return (
    <div className="ui-position--relative">
      {!window.location.pathname.startsWith("/v2") ? (
        <>
          <Router>
            <MenuContext.Provider value={{ showMenu, setShowMenu, showIcons }}>
              <SideMenu />
              <MainMenu />
            </MenuContext.Provider>
            <Background />
            <Logo />
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/projects" exact component={ProjectsPage} />
              <Route path="/experience" exact component={ExperiencePage} />
              <Route path="/v2/" exact component={V2} />
              <Route component={MainPage} />
            </Switch>
          </Router>
        </>
      ) : (
        <V2 />
      )}
    </div>
  );
};

export default App;
