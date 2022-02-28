import React, { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

const ProjectPreview = () => {
	const { project } = useContext(ProjectContext);
	console.log(project);

	return <div>ProjectPreview</div>;
};

export default ProjectPreview;
