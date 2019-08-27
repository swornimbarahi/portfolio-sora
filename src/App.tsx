import React, { FunctionComponent } from "react";

import { Background } from "./components/Background";
import { MainPage } from "./sections/MainPage";

import "./App.scss";

const App: FunctionComponent = () => {
	return (
		<div className="ui-color--white ui-position--absolute">
			<Background />
			<div className="ui-position--fixed">
				<MainPage />
			</div>
		</div>
	);
};

export default App;
