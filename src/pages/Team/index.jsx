import React from "react";
import { TeamTitle, TeamList } from "./components";
import { TeamListData } from "../../mocks";
const Team = () => {
	return (
		<main className="team" id="main">
			<section>
				<div className="container">
					<TeamTitle description="Chúng ta không phải một lớp học, những thành viên CFD là một TEAM, cùng học hỏi và hỗ trợ lẫn nhau dưới sự hướng dẫn từ những người đồng sáng lập CFD." />
					<TeamList teamList={TeamListData} />
				</div>
			</section>
		</main>
	);
};

export default Team;
