import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

export const OverlayMenu: FunctionComponent = () => {
	return (
		<>
			<div>
				<div
					className={classnames(
						"ui-circle",
						"ui-shadow",
            styles["menu-icon-container"],
            "ui-vertical-align"
					)}
				>
					<div className={classnames(styles["menu-icon"])}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div
				className={classnames("ui-min--vw", "ui-min--vh", "ui-bg--black")}
			></div>
		</>
	);
};
