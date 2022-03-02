import React, { useContext } from "react";
import Layout from "components/containers/Layout";
import ProjectPreview from "components/ui/ProjectPreview";
import ProjectContext from "contexts/ProjectContext";
import ProjectSelection from "components/ui/ProjectSelection";
import { Flex } from "@chakra-ui/react";

// TODO: Fill with ProjectPreview, MembersPreview and TicketsPreview Components (and statistics?)
const Dashboard = () => {
	const { existsCurrentProject } = useContext(ProjectContext);

	return (
		<Layout>
			{existsCurrentProject() && <ProjectPreview />}
			{!existsCurrentProject() && (
				<Flex justifyContent={"center"} ml={"auto"} mr="auto">
					<ProjectSelection />
				</Flex>
			)}
		</Layout>
	);
};

export default Dashboard;
