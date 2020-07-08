import React, { useState, useEffect } from "react";

import "./styles/index.scss";

import ModeContext from "./stores/ModeContext";

import Test from "./components/Test";
import Intro from "./sections/Intro";

export const App = () => {
	const [theme, setTheme] = useState(true);

	useEffect(() => {
		if (theme) setTheme(true);
	}, [theme]);

	return (
		<ModeContext.Provider value={{ theme }}>
			<div>
        <Intro />
				<Test />
			</div>
		</ModeContext.Provider>
	);
};
