import React, { FunctionComponent } from "react";
import classnames from "classnames";

import { Navbar } from "./components/Navbar";
import { MainSection } from "./sections/MainSection";

import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <div className={classnames("ui-body", "ui-ma")}>
        <MainSection />
      </div>
    </>
  );
};

export default App;
