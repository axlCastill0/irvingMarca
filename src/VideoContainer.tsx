import { useState } from "react";
import App from "./App.tsx";

function VideoContainer() {
	const [introEnded, setIntroEnded] = useState(false);

	const handleIntroEnd = () => {
		setIntroEnded(true);
		const bgVideo = document.querySelector(
			".background-video"
		) as HTMLVideoElement;
		bgVideo.play().catch((e) => {
			console.error("Error playing background video:", e);
		});
	};

	return (
		<>
			{!introEnded && (
				<video
					autoPlay
					muted
					playsInline
					className="intro-video"
					onEnded={handleIntroEnd}
					onError={(e) => console.error("Intro video error:", e)}
				>
					<source src="./media/RAFAGA.mp4" type="video/mp4" />
				</video>
			)}
			<video
				className="background-video"
				loop
				muted
				playsInline
				style={{ opacity: introEnded ? 1 : 0 }}
				onError={(e) => console.error("Background video error:", e)}
			>
				<source src="./media/BG-WEB.mp4" type="video/mp4" />
			</video>
			{introEnded && (
				<div className="overlay">
					<App />
				</div>
			)}
		</>
	);
}

export default VideoContainer;
