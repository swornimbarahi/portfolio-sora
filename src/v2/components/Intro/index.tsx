// modules
import React from "react";
import classnames from "classnames";

// assets
import SwornimBarahi from "../../assets/pictures/swornimbarahi.png";
import Title from "../Title";
import Icons from "../Icons";

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
				className={classnames("ui-rel-p--20", "ui-no-select", "ui-no-drag", "ui-landing")}
			/>
      <Title bold={2} className="ui-font--white" size={10} uppercase>Swornim Barahi</Title>
      <Icons />
		</div>
	);
};

export default Intro;
