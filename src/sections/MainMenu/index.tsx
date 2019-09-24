import React, { FunctionComponent, useContext } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import { MenuContext } from "../../stores/MenuContext";

export const MainMenu: FunctionComponent = () => {
	const { showMenu } = useContext(MenuContext) as {
		showMenu: boolean;
	};

	return (
		<div
			className={classnames([
				"ui-min-vh",
				"ui-vertical-align",
				"ui-position--fixed",
        "ui-layer--8",
        styles["main-menu-container"],
        { "ui-keep-y": showMenu }
			])}
		>
			<div
				className={classnames([
					"ui-min-vw",
          styles["main-menu-background"],
					"ui-min-vh",
				])}
			>
				<div
					className={classnames(
						"ui-flex",
						"ui-center",
						"ui-color--red",
						"ui-min-h--100"
					)}
				>
					<div
						className={classnames(
							"ui-flex",
							"ui-flex--vertical",
							"ui-space-evenly",
							"ui-min-h--100",
              "ui-text--center", "ui-text--md"
						)}
					>
						<div className={classnames("ui-mt--10", "ui-pt--10")}>Home</div>
						<div>About</div>
						<div>Projects</div>
						<div className={classnames("ui-mb--10", "ui-pb--10")}>Experience</div>
					</div>
				</div>
			</div>
		</div>
	);
};
