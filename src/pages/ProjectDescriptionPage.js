import React from "react";
import { Flex } from "@chakra-ui/react";
import Layout from "components/containers/Layout";
import ProjectDescription from "components/ui/ProjectDescription";

const ProjectDescriptionPage = () => {
	return (
		<Layout>
			<Flex
				width={"95%"}
				height="min-content"
				maxWidth="1050px"
				ml={"auto"}
				mr={"auto"}
				border={"2px solid lightgray"}
				borderRadius={10}
				mt={"45px"}
				p={5}
			>
				<ProjectDescription />
			</Flex>
		</Layout>
	);
};

export default ProjectDescriptionPage;
