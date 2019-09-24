import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";

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
  }, [])

	return (
		<div className="ui-position--relative">
			<MenuContext.Provider value={{ showMenu, setShowMenu }}>
				<SideMenu />
        <MainMenu />
			</MenuContext.Provider>
			<Background />
			<Logo />
			<MainPage />
		</div>
	);
};

export default App;
