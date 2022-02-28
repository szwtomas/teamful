import React from "react";
import RoutesWrapper from "./pages/Routes";
import { ProjectContextProvider } from "./contexts/ProjectContext";

const App = () => {
	return (
		<div className="app">
			<ProjectContextProvider>
				<RoutesWrapper />
			</ProjectContextProvider>
		</div>
	);
};

export default App;
