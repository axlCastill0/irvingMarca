import { Link } from "react-router-dom";

import Time from "../components/Time";
import "../about.css";

function AboutPage() {
	return (
		<div className="about-page">
			<div className="center">
				<div className="info-container">
					<Link to="/">
						<img src="./img/pfp.jpeg" alt="profile_picture" className="pfp" />
					</Link>
					<div className="information">
						<p>hello@irvingmarca.com</p>
						<p>+34 652 697 491</p>
						<a
							href="https://www.instagram.com/irving_marca/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
						<a
							href="https://irvingmarca.wetransfer.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vimeo
						</a>
						<a
							href="https://www.instagram.com/limite_________________?utm_source=ig_web_button_share_sheet"
							target="_blank"
							rel="noopener noreferrer"
						>
							1/2 _________Límite
						</a>
					</div>
				</div>
				<p className="description-container">
					Irving Marca is a Mexican director based between Barcelona and Paris
					since 2021. His work moves fluidly between narrative and commercial
					projects, ranging from fashion and automotive to sports and
					documentary. With a blend of technical precision and organic
					sensibility, he explores the interplay of light, emotion, and
					atmosphere to craft stories that connect on a human level. Always
					curious and collaborative, he approaches each project as an
					opportunity to experiment with new visual languages and create images
					that stay with the viewer.
				</p>
			</div>
			<div className="bottom-left corner">
				IRVING MARCA
				<br />
				COLORIST & DIRECTOR
			</div>
			<div className="top-right corner">
				<Time />
			</div>
			<div className="top-left corner">
				<a
					href="https://www.linkedin.com/in/axlcastillo/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="axl" src="/axlLogo.png" alt="Made by Axl Castillo" />
				</a>
			</div>
			<div className="bottom-right corner">
				<div className="nav">
					<Link className="nav-tag-about" to="/">
						Home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
