import React from "react";

const Banner = ({ heading }) => {
	return (
		<div className="banner jarallax">
			<div className="container">
				<div className="content">
					{heading.map((text, idx) => (
						<h2 key={idx} className="title">
							{text}
						</h2>
					))}
					<div className="btn main round">KHÓA HỌC</div>
				</div>
			</div>
			<div className="jarallax-img">
				<img data-src="img/bg-cover.jpg" alt="" className="lazyload" />
				<div
					className="video-bg lazyload"
					data-src="video/CFD-video-bg2.mp4"
				/>
			</div>
		</div>
	);
};

export default Banner;
