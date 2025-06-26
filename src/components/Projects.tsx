import projects from "../utils/projects.ts";

type Project = {
	name: string;
	number: string;
	role: string;
};

function Projects() {
	const _projects = projects.map((project: Project, index: number) => (
		<div key={index} className="projects-table">
			<div className="project-name">{project.name}</div>
			<div className="project-number">{project.number}</div>
			<div className="project-role">{project.role}</div>
		</div>
	));

	return <>{_projects}</>;
}

export default Projects;
