import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./styles/index.scss";

import ModeContext from "./stores/ModeContext";

import Test from "./components/Test";

export const App = () => {
	const [theme, setTheme] = useState(true);

	useEffect(() => {
		if (theme) setTheme(true);
	}, [theme]);

	return (
		<ModeContext.Provider value={{ theme }}>
			<div
				className={classnames(
					"ui-bg--black",
					"ui-display--min-height",
          "ui-display--min-width",
          
				)}
			>
				<Test />
			</div>
		</ModeContext.Provider>
	);
};
