import React from "react";

const TeamItem = ({ img, name, description }) => {
	return (
		<div className="item col-md-6 col-sm-6">
			<div className="wrap">
				<div className="cover">
					<img src={img} alt="" />
				</div>
				<div className="info">
					<div className="name">{name}</div>
					<p className="title">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default TeamItem;
