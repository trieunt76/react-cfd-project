import React from "react";
import CourseList from "../../components/CourseList";
import Login from "../../components/Login";
import { Banner, Different, Testimonial, Gallery, Action } from "./components";

const Home = () => {
	return (
		<>
			<main className="homepage" id="main">
				<Banner
					heading={["Thực chiến", "Tạo ra sản phẩm có giá trị"]}
				/>

				<CourseList shortDescription="Nơi có những khóa học thực chiến Front-End Dev và UX/UI Design, kết nối và chia sẻ kinh nghiệm giúp bạn có đầy đủ kỹ năng thực tế để tạo ra những sản phẩm sáng tạo, tinh tế và phù hợp." />

				<Different />
				<Testimonial />
				<Gallery />
				<Action />
			</main>
			<div>
				<div className="popup-video" style={{ display: "none" }}>
					<div className="wrap">
						<div className="video-src" />
					</div>
					<div className="close" />
				</div>
				<Login />
				<div
					className="popup-form popup-login"
					style={{ display: "none" }}
				>
					<div className="wrap">
						<h2 className="title">Đăng ký</h2>
						<div className="btn btn-icon rect white btn-google">
							<img src="/img/google.svg" alt="" />
							Google
						</div>
						<p className="policy">
							Bằng việc đăng kí, bạn đã đồng ý
							<a href="!#">Điều khoản bảo mật</a> của CFD
						</p>
						<div className="close">
							<img src="/img/close-icon.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
