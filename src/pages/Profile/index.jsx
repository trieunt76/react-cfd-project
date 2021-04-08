import React from "react";
import {
	Avatar,
	Course,
	Info,
	PaymentHistory,
	Coin,
	Project,
} from "./components";

const Profile = () => {
	return (
		<main className="profile" id="main">
			<section>
				<Avatar />
				<div className="container">
					<div className="tab">
						<div className="tab-title">
							<a href="!#" className="active">
								Thông tin tài khoản
							</a>
							<a href="!#">Khóa học của bạn</a>
							<a href="!#">Dự án đã làm</a>
							<a href="!#">Lịch sử thanh toán</a>
							<a href="!#">Quản lý COIN của tôi</a>
						</div>
						<div className="tab-content">
							<Info />
							<Course />
							<Project />
							<PaymentHistory />
							<Coin />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Profile;
