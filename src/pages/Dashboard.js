import React, { useContext } from "react";
import Layout from "components/containers/Layout";
import ProjectPreview from "components/ui/ProjectPreview";
import ProjectContext from "contexts/ProjectContext";
import ProjectSelection from "components/ui/ProjectSelection";
import { Flex, Stack } from "@chakra-ui/react";
import MembersPreview from "components/containers/MembersPreview";
import TicketsPreview from "components/containers/TicketsPreview";

// TODO: Fill with ProjectPreview, MembersPreview and TicketsPreview Components (and statistics?)
const Dashboard = () => {
	const { existsCurrentProject } = useContext(ProjectContext);

	if (!existsCurrentProject()) {
		return (
			<Layout>
				<Flex
					justifyContent={"center"}
					ml={"auto"}
					mr="auto"
					flexDirection={"column"}
				>
					<ProjectSelection />
				</Flex>
			</Layout>
		);
	}

	return (
		<Layout>
			<Flex flexDir="column" ml={"auto"} mr="auto" w="90%" maxW={"925px"}>
				<Stack direction="column" spacing="25px">
					<ProjectPreview />
					<MembersPreview />
					<TicketsPreview />
				</Stack>
			</Flex>
		</Layout>
	);
};

export default Dashboard;
