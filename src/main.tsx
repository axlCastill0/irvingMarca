import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import VideoContainer from "./VideoContainer";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<VideoContainer />
	</StrictMode>
);
