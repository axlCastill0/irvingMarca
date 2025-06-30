import { Link } from "react-router-dom";

import Projects from "../components/Projects";
import Time from "../components/Time";

function App() {
	return (
		<>
			<div>
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
				<Time />
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
				</div>
			</div>
		</>
	);
}

export default App;
