import React, { useContext } from "react";
import ProjectContext from "contexts/ProjectContext";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";

const ProjectPreview = () => {
	const { project } = useContext(ProjectContext);

	return (
		<Flex
			flexDir={["column", "column", "row", "row"]}
			alignItems="center"
			width="95%"
			maxWidth={"950px"}
			h={"min-content"}
			border="2px solid grey"
			boxShadow={"2px 4px 12px 1px rgba(0, 0, 0, 0.2)"}
			borderRadius="10px"
			ml={"auto"}
			mr="auto"
			mt={6}
			p={6}
		>
			<Flex flexDir={"column"} width="80%" mb="auto">
				<Heading as="h3">{project.title}</Heading>
				<Text as="p" mt="25px">
					{project.description}
				</Text>
			</Flex>
			<Flex mt={["20px", "20px", "auto"]} ml="12px">
				<Link color="green.400">View project details</Link>
			</Flex>
		</Flex>
	);
};

export default ProjectPreview;
