import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

import ProfilePicture from "../../assets/profile_picture.svg";
import { Icons } from "../../components/Icons";

export const MainSection: FunctionComponent = () => {
	return (
		<div className={classnames("ui-min-vh", "ui-vertical-align")}>
			<div
				className={classnames(
					"ui-flex",
					"ui-min-w--100",
					"ui-space-between",
					styles["main--section"],
					"ui-ma"
				)}
			>
				<img
					src={ProfilePicture}
					alt=""
					className={classnames(
						styles["main-page--profile-picture"],
            "ui-mt--10",
            "ui-ma"
					)}
				/>
				<div
					className={classnames(
						"ui-flex",
						"ui-flex--grow",
						"ui-flex--vertical"
					)}
				>
					<div className={classnames("ui-flex", "ui-text--center", "ui-ma")}>
						<div className={classnames("ui-mb--6", "ui-tracking-in-expand")}>
							<div className={classnames("ui-h--5")}>Hello! I am</div>
							<h1 className={classnames("ui-h--2", "ui-font--cursive")}>
								Swornim Barahi
							</h1>
							<span className={classnames("ui-h--4", "ui-font--cursive")}>
								Sora{" "}
							</span>
							<span className={classnames("ui-h--5")}>for short.</span>
						</div>
					</div>
					<Icons />
				</div>
			</div>
		</div>
	);
};
