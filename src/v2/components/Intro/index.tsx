// modules
import React from "react";
import classnames from "classnames";

// assets
import SwornimBarahi from "../../assets/pictures/swornimbarahi.png";

const Intro = () => {
	return (
		<div
			className={classnames("ui-text--center", "ui-bg--black", "ui-display--min-height", "ui-display--min-width")}
		>
			<img src={SwornimBarahi} alt="" className={classnames("ui-p--20")}/>
		</div>
	);
};

export default Intro;
