import React, { useContext } from "react";
import ProjectContext from "../contexts/ProjectContext";

const ProjectPreview = () => {
	const { project } = useContext(ProjectContext);

	return <div>ProjectPreview</div>;
};

export default ProjectPreview;
