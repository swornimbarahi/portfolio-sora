import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import MainPicture from "../../assets/main_picture.svg";

export const MainPage: FunctionComponent = () => {
	return (
		<div>
			<img
				src={MainPicture}
				alt=""
				className={classnames(
					"ui-position--fixed",
          "ui-position--bottom-0",
          "ui-axis--left",
          "ui-ma",
          styles["main-picture"]
				)}
			/>
		</div>
	);
};
