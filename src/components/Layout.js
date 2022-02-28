import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import { ProjectContextProvider } from "../context/ProjectContext";
import { useParams } from "react-router-dom";
import { getProjectById } from "../assets/data/projects";

/*
Layout component puts page content under the navbar and at the right side of sidebar
To do this, wrap the content inside <Layout></Layout>
E.g:

const DashboardContainer = () => {
    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
}
*/

// When Layout is Used, user is already login so we use ProjectContext
const Layout = ({ children }) => {
	const [currentProject, setCurrentProject] = useState({});
	const { projectId } = useParams();

	useEffect(() => {
		if (projectId !== undefined) {
			// projectId comes as a string
			const id = parseInt(projectId);
			getProjectById(id)
				.then(p => setCurrentProject(p))
				.catch(err => console.error(err));
		} else {
			// User doesn't have any project or hasn't selected one
			setCurrentProject({});
		}
	}, [projectId]);

	return (
		<ProjectContextProvider value={currentProject}>
			<NavBar />
			<Flex flexDir={"row"} m={0} p={0}>
				<SideBar />
				<Flex width="94%" mr="auto" ml="auto">
					{children}
				</Flex>
			</Flex>
		</ProjectContextProvider>
	);
};

export default Layout;
