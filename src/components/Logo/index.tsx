import React, { FunctionComponent } from "react";
import classnames from "classnames";

export const Logo: FunctionComponent = () => {
	return (
		<div
			className={classnames(
				"ui-flex",
				"ui-h--3",
				"ui-font--cursive",
				"ui-pt--1",
				"ui-position--fixed",
				"ui-layer--9"
			)}
		>
			<div className={classnames("ui-min-vw--50", "ui-h--3", "ui-text--right")}>
				<span className={classnames("ui-bg--red", "ui-pl--1", "ui-pb--1")}>swornim</span>
			</div>
			<div
				className={classnames(
					"ui-min-vw--50",
					"ui-h--3",
					"ui-color--red",
					"ui-text--left"
				)}
			>
				barahi
			</div>
		</div>
	);
};
