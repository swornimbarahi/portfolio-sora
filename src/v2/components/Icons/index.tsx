import React, { FunctionComponent } from "react";
import classnames from "classnames";

import Awards from "../../assets/icons/awards.png";
import Education from "../../assets/icons/education.png";
import Experience from "../../assets/icons/experience.png";
import Link from "../../assets/icons/link.png";
import Projects from "../../assets/icons/projects.png";

const IconsList = [
	{
		img: Awards,
		link: "#awards",
		noLoad: "awards",
	},
	{
		img: Education,
		link: "#education",
		noLoad: "education",
	},
	{
		img: Experience,
		link: "#experience",
		noLoad: "experience",
	},
	{
		img: Link,
		link: "#link",
		noLoad: "link",
	},
	{
		img: Projects,
		link: "#projects",
		noLoad: "projects",
	},
];

const Icons: FunctionComponent = () => {
	return (
		<div
			className={classnames(
				"ui-flex",
				"ui-flex--row",
        "ui-flex--space-around",
        "ui-flex--wrap",
				"ui-per-m-h--20",
				"ui-per-m-v--3"
			)}
		>
			{IconsList.map((iconData) => {
				return (
					<div
						className={classnames("ui-icon--container")}
						key={iconData.noLoad}
					>
						<img
							src={iconData.img}
							alt={iconData.noLoad}
							className={classnames("ui-icon")}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Icons;
