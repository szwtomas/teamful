import React, { useState, useEffect, createContext } from "react";
import { getProjectById } from "../assets/data/projects";

const ProjectContext = createContext();

const ProjectContextProvider = ({ value = {}, children }) => {
	const [project, setProject] = useState(value);

	// React doesen't update state when re-rendering with different props
	// So we set the project manually (don't know if this is the best way)
	useEffect(() => setProject(value), [value]);

	// Fetches project with matching id and sets it
	const setId = id => {
		getProjectById(id)
			.then(p => setProject(p))
			.catch(err => console.error(err));
	};

	return (
		<ProjectContext.Provider value={{ project, setProject, setId }}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
export { ProjectContextProvider };
