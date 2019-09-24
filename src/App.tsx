import React, { FunctionComponent } from "react";
import classnames from "classnames";

import { Navbar } from "./components/Navbar";
import { OverlayMenu } from "./components/OverlayMenu";
import { MainSection } from "./sections/MainSection";
import { AboutSection } from "./sections/AboutSection";

import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className={classnames("ui-body", "ui-ma")}>
        <OverlayMenu />
        <MainSection />
        <AboutSection />
      </div>
    </>
  );
};

export default App;
