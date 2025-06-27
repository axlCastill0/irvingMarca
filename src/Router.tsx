import { Routes, Route } from "react-router-dom";
import VideoContainer from "./pages/VideoContainer";
import AboutPage from "./pages/AboutPage";

function Router() {
	return (
		<Routes>
			<Route path="/" element={<VideoContainer />} />
			<Route path="/about" element={<AboutPage />} />
		</Routes>
	);
}

export default Router;
