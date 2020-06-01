// modules
import React from "react";
import classnames from "classnames";

// assets
import SwornimBarahi from "../../assets/pictures/swornimbarahi.png";

const Intro = () => {
	return (
		<div
			className={classnames(
				"ui-text--center",
				"ui-bg--black",
				"ui-display--min-height",
				"ui-display--min-width"
			)}
		>
			<img
				src={SwornimBarahi}
				alt=""
				className={classnames("ui-rel-p--20", "ui-no-select", "ui-no-drag")}
			/>
		</div>
	);
};

export default Intro;
