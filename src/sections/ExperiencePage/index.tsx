import React, { FunctionComponent, useEffect, ReactNode } from "react";
import classnames from "classnames";

import LocationRed from "../../assets/location_red.svg";
import LocationBlack from "../../assets/location_black.svg";

import styles from "./index.module.scss";

export const ExperiencePage: FunctionComponent = () => {
	return (
		<div
			className={classnames(
				"ui-min-vh",
				"ui-position--fixed",
				"ui-vertical-align",
				"ui-layer--4"
			)}
		>
			<ExperienceList />
		</div>
	);
};

const ExperienceList = () => {
	let ret: ReactNode[] = [];
	for (let i = 0; i < EXPERIENCES.length; i += 2) {
		ret.push(
			<ExperienceLine
				experienceLeft={EXPERIENCES[i]}
				experienceRight={EXPERIENCES[i + 1]}
				last={EXPERIENCES.length - 2 > i}
			/>
		);
	}

	return <div>{ret}</div>;
};

const ExperienceLine: FunctionComponent<{
	experienceLeft: ExperienceType;
	experienceRight: ExperienceType;
	last: boolean;
}> = ({ experienceLeft, experienceRight, last }) => {
	return (
		<div
			className={classnames(
				"ui-flex",
				"ui-h--6",
				"ui-pt--2",
				"ui-pb--2",
				"ui-animate--focus-in"
			)}
		>
			<div
				className={classnames(
					"ui-min-vw--50",
					"ui-text--right",
					"ui-pl--5",
					"ui-pr--2",
					"ui-border-box",
					"ui-color--black"
				)}
			>
				<div className={classnames("ui-flex")}>
					<div className={classnames("ui-flex--grow")} />
					<div
						className={classnames([
							"ui-border-color--black",
							{ "ui-bottom-border": last },
							styles["experience-container"],
							"ui-animate--focus-in-expand"
						])}
					>
						{experienceLeft["companyName"]}
						<div className={classnames("ui-text--xs", "ui-pt--1", "ui-pb--3")}>
							{experienceLeft["location"]}
							<img
								src={LocationBlack}
								className={classnames("ui-icon--xs", "ui-ml--1")}
								alt="location-icon"
							/>
						</div>
					</div>
				</div>
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
				<div className={classnames("ui-flex")}>
					<div
						className={classnames(
							"ui-border-color--red",
							{ "ui-bottom-border": last },
							styles["experience-container"],
							"ui-animate--focus-in-expand"
						)}
					>
						{experienceRight["companyName"]}
						<div className={classnames("ui-text--xs", "ui-pt--1", "ui-pb--3")}>
							<img
								src={LocationRed}
								className={classnames("ui-icon--xs", "ui-mr--1")}
								alt="location-icon"
							/>
							{experienceRight["location"]}
						</div>
					</div>
					<div className={classnames("ui-flex--grow")} />
				</div>
			</div>
		</div>
	);
};

type ExperienceType = {
	companyName: string;
	location: string;
	title: string;
	dates: [string, string];
	achievements: string[];
};

const EXPERIENCES: ExperienceType[] = [
	{
		companyName: "Dollar Shave Club",
		location: "Marina Del Rey, CA",
		title: "Software Engineering Intern",
		dates: ["June 2019", "August 2019"],
		achievements: [""]
	},
	{
		companyName: "Coding Hub",
		location: "Plattsburgh, NY",
		title: "Tech Lead / Full Stack Developer",
		dates: ["January 2019", "Present"],
		achievements: [""]
	},
	{
		companyName: "Real Time Solutions",
		location: "Lalitpur, Nepal",
		title: "Software Engineering Intern",
		dates: ["", ""],
		achievements: [""]
	},
	{
		companyName: "Claude J Clark Learning Center",
		location: "Plattsburgh, NY",
		title: "Academic Tutor",
		dates: ["", ""],
		achievements: [""]
	}
];
