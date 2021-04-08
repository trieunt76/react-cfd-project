import React from "react";

const CourseItem = ({
	status,
	course,
	description,
	thumbnail,
	teacher,
	teacherAvatar,
}) => {
	return (
		<div className="col-md-4 course">
			<div className="wrap">
				<a className="cover" href="!#">
					<img src={thumbnail} alt="" />
					<span className="badge b1">{status}</span>
					<div className="hover">
						<div className="top">
							<div className="user">
								<img src="/img/icon-user-white.svg" alt="" />
								12
							</div>
							<div className="heart">
								<img src="/img/icon-heart.svg" alt="" /> 100
							</div>
						</div>
						<div className="share">
							<img src="/img/icon-viewmore.svg" alt="" />
						</div>
					</div>
				</a>
				<div className="info">
					<a className="name" href="!#">
						{course}
					</a>
					<p className="des">{description}</p>
				</div>
				<div className="bottom">
					<div className="teacher">
						<div className="avatar">
							<img src={teacherAvatar} alt="" />
						</div>
						<div className="name">{teacher}</div>
					</div>
					<div className="register-btn">Đăng Ký</div>
				</div>
			</div>
		</div>
	);
};

export default CourseItem;
