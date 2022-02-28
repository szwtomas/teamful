import React, { useState, useEffect, createContext } from "react";

const ProjectContext = createContext();

const ProjectContextProvider = ({ value = {}, children }) => {
	const [project, setProject] = useState(value);
	useEffect(() => setProject(value), [value]);

	return (
		<ProjectContext.Provider value={{ project, setProject }}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
export { ProjectContextProvider };
