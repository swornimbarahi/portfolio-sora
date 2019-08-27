import React, { FunctionComponent } from "react";

import ProfilePicture from "../../assets/profile_picture.jpg";

export const MainPage: FunctionComponent = () => {
	return (
		<div>
			<img src={ProfilePicture} className="ui-circle main-page--profile-placement main-page--big-picture"/>
		</div>
	);
};
