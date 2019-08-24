import React, { FunctionComponent } from "react";

import { Background } from "./components/Background";
import { MainPage } from "./sections/MainPage";

import "./App.scss";

const App: FunctionComponent = () => {
  return (
    <div>
      <Background />
      <MainPage />
    </div>
  );
};

export default App;
