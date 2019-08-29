import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import ProfilePicture from "../../assets/profile_picture.jpg";
import { Gmail, GitHub, Medium, LinkedIn } from "../../components/Icons";

export const MainPage: FunctionComponent = () => {
	return (
		<>
			<div>
				<img
					src={ProfilePicture}
					alt=""
					className={classnames(
						"ui-circle",
						"ui-position--fixed",
						"ui-axis--normalize",
						styles["main-page--profile-placement"],
						styles["main-page--profile-picture"]
					)}
				/>
			</div>
			<div>
				<GitHub
					className={classnames(
						"ui-position--fixed",
						"ui-axis--normalize",
						styles["main-page--logo"],
						styles["main-page--logo-placement-github"]
					)}
				/>
				<Gmail
					className={classnames(
						"ui-position--fixed",
						"ui-axis--normalize",
						styles["main-page--logo"],
						styles["main-page--logo-placement-gmail"]
					)}
				/>
				<LinkedIn
					className={classnames(
						"ui-position--fixed",
						"ui-axis--normalize",
						styles["main-page--logo"],
						styles["main-page--logo-placement-linkedin"]
					)}
				/>
				<Medium
					className={classnames(
						"ui-position--fixed",
						"ui-axis--normalize",
						styles["main-page--logo"],
						styles["main-page--logo-placement-medium"]
					)}
				/>
			</div>
		</>
	);
};
