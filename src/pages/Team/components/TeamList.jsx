import React from "react";
import { TeamItem } from "../components";

const TeamList = ({ teamList }) => {
	return (
		<div className="list row">
			{teamList &&
				teamList.map((team, idx) => {
					return (
						<TeamItem
							key={idx}
							img={team.img}
							name={team.name}
							description={team.description}
						/>
					);
				})}
		</div>
	);
};

export default TeamList;
