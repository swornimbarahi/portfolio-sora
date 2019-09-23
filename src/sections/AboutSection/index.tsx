import React, { FunctionComponent } from "react";
import classnames from "classnames";

import MyPicture from "../../assets/my_picture.png";

import styles from "./index.module.scss";

export const AboutSection: FunctionComponent = () => {
	return (
		<div className={classnames("ui-min-vh")}>
			<h1 className={classnames("ui-pt--8", "ui-pb--8")}>About me</h1>
			<div className={classnames("ui-vertical-align")}>
				<div
					className={classnames("ui-flex", "ui-space-between", "ui-min-w--100")}
				>
					<div
						className={classnames(
							"ui-text--md",
							"ui-vertical-align",
							styles["about-me-desc"]
						)}
					>
						<div>
							Hi there!
							<br />I am a Computer Science enthusiast who loves building cool,
							sophisticated, and helpful software applications. I am currently a
							senior pursuing a Bachelors of Science degree in Computer Science
							at SUNY Plattsburgh. I love working on{" "}
							<a
								className={classnames("ui-text--no-decor", "ui-color--red")}
								href="https://github.com/swornimbarahi"
                target="_blank"
                rel="noopener noreferrer"
							>
								projects
							</a>{" "}
							with new, upcoming, and interesting technologies. I grew up
							helping build and building{" "}
							<a
								className={classnames("ui-text--no-decor", "ui-color--red")}
								href="https://festivalscelebratedinnepal.wordpress.com/2017/09/21/rato-machhendranath-jatra-red-chariot/"
                target="_blank"
                rel="noopener noreferrer"
							>
								a chariot for the Rato Macchendranath deity
							</a>{" "}
							in Lalitpur, Nepal. I am also a Tech Lead at{" "}
							<a
								className={classnames("ui-text--no-decor", "ui-color--red")}
								href="https://www.coding-hub.com"
                target="_blank"
                rel="noopener noreferrer"
							>
								Coding Hub
							</a>{" "}
							which is a club on campus that is dedicated to developing
							sophisticated software applications to solve students problems at
							SUNY Plattsburgh.
						</div>
					</div>
					<div className={classnames("ui-vertical-align")}>
						<div className={classnames("ui-flex", "ui-flex--vertical")}>
							<img
								src={MyPicture}
								className={classnames("ui-mb--4", styles["my-picture"])}
								alt=""
							/>
							<button
								className={classnames(
									"ui-bg--red",
									"ui-border-radius--20",
									"ui-text--md",
									"ui-color--white",
									"ui-p--1",
									"ui-pl--2",
									"ui-pr--2",
									"ui-border--none"
								)}
							>
								Resume
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
