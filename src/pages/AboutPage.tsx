import Time from "../components/Time";
import "../about.css";

function AboutPage() {
	return (
		<div className="about-page">
			<div className="center">
				<div className="info-container">
					<img src="./img/pfp.jpeg" alt="profile_picture" className="pfp" />
					<div className="information">
						<p>hello@irvingmarca.com</p>
						<p>+34 652 697 491</p>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Instagram
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							Vimeo
						</a>
						<br />
						<p>1/2 _________Límite</p>
					</div>
				</div>
			</div>
			<div className="bottom-left corner">
				IRVING MARCA
				<br />
				COLORIST & DIRECTOR
			</div>
			<div className="top-right corner">
				<Time />
			</div>
		</div>
	);
}

export default AboutPage;
