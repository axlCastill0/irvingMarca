import { useState, useEffect } from "react";
import Projects from "./projects/Projects.tsx";

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
				Based in Barcelona, Irving is a Mexican film director known for his
				striking visual storytelling in advertising and documentary. His work
				bridges cultures, blending artistry and emotion to create impactful
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
					<span className="nav-tag">About</span>
					<span className="nav-tag">Color</span>
					<span className="nav-tag">Direction</span>
				</div>
			</div>
		</>
	);
}

export default App;
