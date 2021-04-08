import React from "react";
import CourseList from "../../components/CourseList";

const Course = () => {
	return (
		<main className="homepage" id="main">
			<section className="section-1">
				<div className="container">
					<h2 className="main-title">KHÓA HỌC CFD</h2>
					<CourseList shortDescription="Khóa học thực chiến tại CFD được thiết kế giúp cho thành viên trải nghiệm những dự án thực tế, bám sát yêu cầu nhà tuyển dụng, cũng như những kỹ năng cần thiết để ứng tuyển tại các công ty." />
				</div>
			</section>
		</main>
	);
};

export default Course;
