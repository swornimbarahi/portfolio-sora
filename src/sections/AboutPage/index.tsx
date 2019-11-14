import React, { FunctionComponent } from "react";
import classnames from "classnames";

import SoraPicture from "../../assets/sora_picture.svg";

import styles from "./index.module.scss";

export const AboutPage: FunctionComponent = () => {
	return (
		<div
			className={classnames(
				"ui-position--fixed",
				"ui-vertical-align",
				"ui-layer--4",
				"ui-min-vh"
			)}
		>
			<div>
				<div className={classnames("ui-min-vw", "ui-flex", "ui-center")}>
					<img
						src={SoraPicture}
						className={classnames(styles["sora-picture"], "ui-circle")}
						alt=""
					/>
				</div>
				<div
					className={classnames(
						"ui-flex",
						"ui-text--xxl",
						"ui-pt--2",
						"ui-animate--focus-in"
					)}
				>
					<div
						className={classnames(
							"ui-min-vw--50",
							"ui-text--right",
							"ui-pl--5",
							"ui-pr--2",
							"ui-border-box"
						)}
					>
						Swornim
					</div>
					<div
						className={classnames(
							"ui-min-vw--50",
							"ui-text--left",
							"ui-pr--5",
							"ui-pl--2",
							"ui-border-box",
							"ui-color--red"
						)}
					>
						Barahi
					</div>
				</div>
			</div>
		</div>
	);
};


// I am a Computer Science enthusiast who loves building cool,
// sophisticated, and helpful software applications. I am currently a
// senior pursuing a Bachelors of Science degree in Computer Science
// at SUNY Plattsburgh. I love working on{" "}
// <a
//   className={classnames("ui-text--no-decor", "ui-color--red")}
//   href="https://github.com/swornimbarahi"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   projects
// </a>{" "}
// with new, upcoming, and interesting technologies. I grew up
// helping build and building{" "}
// <a
//   className={classnames("ui-text--no-decor", "ui-color--red")}
//   href="https://festivalscelebratedinnepal.wordpress.com/2017/09/21/rato-machhendranath-jatra-red-chariot/"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   a chariot for the Rato Macchendranath deity
// </a>{" "}
// in Lalitpur, Nepal. I am also a Tech Lead at{" "}
// <a
//   className={classnames("ui-text--no-decor", "ui-color--red")}
//   href="https://www.coding-hub.com"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Coding Hub
// </a>{" "}
// which is a club on campus that is dedicated to developing
// sophisticated software applications to solve students problems at
// SUNY Plattsburgh.
