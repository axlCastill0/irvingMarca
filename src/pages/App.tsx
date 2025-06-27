import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Projects from "../components/Projects";

function App() {
	const getBcnTime = () =>
		new Date().toLocaleTimeString("en-US", { timeZone: "Europe/Madrid" });
	const getMxnTime = () =>
		new Date().toLocaleTimeString("en-US", { timeZone: "America/Mexico_City" });

	const [bcnTime, setBcnTime] = useState(getBcnTime());
	const [mxnTime, setMxnTime] = useState(getMxnTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setBcnTime(getBcnTime());
			setMxnTime(getMxnTime());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="center">
				<em>SELECTED PROJECTS</em>
				<br />
				<Projects />
			</div>
			<div className="top-left corner">
				Based in Barcelona / París, Irving is a Mexican film director known for
				his striking visual storytelling in advertising and documentary. His
				work bridges cultures, blending artistry and emotion to create impactful
				audiovisual narratives
			</div>
			<div className="top-right corner">
				<div className="times">
					BCN {bcnTime}
					<br />
					MX {mxnTime}
				</div>
			</div>
			<div className="bottom-left corner">
				IRVING MARCA
				<br />
				COLORIST & DIRECTOR
			</div>
			<div className="bottom-right corner">
				<div className="nav">
					<Link className="nav-tag" to="/about">
						About
					</Link>
					<span className="nav-tag">
						<a
							href="https://www.instagram.com/irving_marca/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</span>
				</div>
			</div>
		</>
	);
}

export default App;
