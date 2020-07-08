import React, { useState, useEffect } from "react";

import "./styles/index.scss";

import ModeContext from "./stores/ModeContext";

import Test from "./components/Test";
import Intro from "./sections/Intro";
import Education from "./sections/Education";

export const App = () => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    if (theme) setTheme(true);
  }, [theme]);

  return (
    <ModeContext.Provider value={{ theme }}>
      <div>
        <Intro />
        <Education />
        <Test />
      </div>
    </ModeContext.Provider>
  );
};
