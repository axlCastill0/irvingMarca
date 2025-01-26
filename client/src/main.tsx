import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<video autoPlay loop muted playsInline className="background-video">
			<source src="./public/img/pruebaweb.mp4" type="video/mp4" />
		</video>
		<App />
	</StrictMode>
);
