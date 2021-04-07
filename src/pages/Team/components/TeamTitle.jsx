import React from "react";

const TeamTitle = ({ description }) => {
	return (
		<div className="top">
			<h2 className="main-title">CFD team</h2>
			<p className="top-des">{description}</p>
		</div>
	);
};

export default TeamTitle;
