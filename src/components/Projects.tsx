import { useState } from "react";
import projects from "../utils/projects.ts";
import ProjectVideoContainer from "./ProjectVideoContainer.tsx";

type Project = {
	name: string;
	number: string;
	role: string;
	video: string;
};

function Projects() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<>
			{projects.map((project: Project, index: number) => (
				<div
					key={index}
					className="projects-table"
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
					style={{ position: "relative" }}
				>
					<div className="project-name">{project.name}</div>
					<div className="project-number">{project.number}</div>
					<div className="project-role">{project.role}</div>
				</div>
			))}
			{hoveredIndex !== null && (
				<ProjectVideoContainer video={projects[hoveredIndex].video} />
			)}
		</>
	);
}

export default Projects;
