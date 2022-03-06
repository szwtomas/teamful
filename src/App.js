import React, { useState } from "react";
import RoutesWrapper from "pages/Routes";
import { ProjectContextProvider } from "contexts/ProjectContext";

const App = () => {
	return (
		<div className="app">
			<ProjectContextProvider value={{}}>
				<RoutesWrapper />
			</ProjectContextProvider>
		</div>
	);
};

export default App;
