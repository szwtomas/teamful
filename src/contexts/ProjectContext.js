import React, { useState, createContext, useEffect } from "react";
import { getProjectById } from "assets/data/projects";
import { getItem, addItem } from "helpers/localStorage";

const ProjectContext = createContext();

// Current project has to be set with setProject
const ProjectContextProvider = ({ value = {}, children }) => {
	const [project, setProject] = useState(value);

	useEffect(() => {
		const currentProject = getItem("project");
		if (currentProject) {
			setProject(currentProject);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("currentProject", JSON.stringify(project));
	}, [project]);

	// Fetches project with matching id and sets it
	const setProjectWithId = id => {
		getProjectById(id)
			.then(p => setProject(p))
			.catch(err => console.error(err));
	};

	const existsCurrentProject = () => Object.keys(project).length !== 0;

	return (
		<ProjectContext.Provider
			value={{ project, setProject, setProjectWithId, existsCurrentProject }}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
export { ProjectContextProvider };
