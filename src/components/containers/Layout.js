import React, { useState, useEffect, useContext } from "react";
import NavBar from "./NavBar";
import { Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import { ProjectContextProvider } from "../contexts/ProjectContext";
import ProjectContext from "../contexts/ProjectContext";

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
	const { project } = useContext(ProjectContext);

	return (
		<>
			<NavBar projectTitle={project.title} />
			<Flex flexDir={"row"} m={0} p={0}>
				<SideBar />
				<Flex width="94%" mr="auto" ml="auto">
					{children}
				</Flex>
			</Flex>
		</>
	);
};

export default Layout;
