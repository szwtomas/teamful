import React, { useState, useEffect, createContext } from "react";
import { getProjectById } from "../assets/data/projects";

const ProjectContext = createContext();

// Current project has to always be set with setProject setter
const ProjectContextProvider = ({ value = {}, children }) => {
	const [project, setProject] = useState(value);

	// Fetches project with matching id and sets it
	const setProjectWithId = id => {
		getProjectById(id)
			.then(p => setProject(p))
			.catch(err => console.error(err));
	};

	return (
		<ProjectContext.Provider value={{ project, setProject, setProjectWithId }}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
export { ProjectContextProvider };
