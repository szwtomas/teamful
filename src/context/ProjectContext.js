import React, { useState, useEffect, createContext } from "react";

const ProjectContext = createContext();

const ProjectContextProvider = ({ value = {}, children }) => {
	const [project, setProject] = useState(value);

	// React doesen't update state when re-rendering with different props
	// So we set the project manually (don't know if this is the best way)
	useEffect(() => setProject(value), [value]);

	return (
		<ProjectContext.Provider value={{ project, setProject }}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContext;
export { ProjectContextProvider };
