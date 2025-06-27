import { useState, useEffect } from "react";
import Projects from "./components/Projects.tsx";

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
				Irving Marca is a Mexican director based between Barcelona and Paris
				since 2021. His work moves fluidly between narrative and commercial
				projects, ranging from fashion and automotive to sports and documentary.
				With a blend of technical precision and organic sensibility, he explores
				the interplay of light, emotion, and atmosphere to craft stories that
				connect on a human level. Always curious and collaborative, he
				approaches each project as an opportunity to experiment with new visual
				languages and create images that stay with the viewer.
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
