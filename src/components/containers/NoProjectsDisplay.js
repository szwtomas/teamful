import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import CreateProjectButton from "../ui/CreateProjectButton";

const NoProjectsDisplay = () => {
	return (
		<Flex pt={10} direction="column" textAlign={"center"}>
			<Heading>Start a new project!</Heading>
			<Text pt={4}>Start a project to begin using Teamful</Text>
			<Flex alignItems={"center"} justifyContent="center" pt={6}>
				<CreateProjectButton />
			</Flex>
		</Flex>
	);
};

export default NoProjectsDisplay;
