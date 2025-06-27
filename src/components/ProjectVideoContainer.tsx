interface ProjectVideoContainerProps {
	video: string;
}

function ProjectVideoContainer({ video }: ProjectVideoContainerProps) {
	return (
		<div className="project-video">
			<video
				style={{ width: "100%", height: "auto" }}
				autoPlay
				muted
				playsInline
				loop
				src={video}
			>
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default ProjectVideoContainer;
