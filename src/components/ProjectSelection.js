import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProjectSelection = () => {
	let navigate = useNavigate();

	// TODO: Make generic to all users
	const handleClick = () => {
		navigate("/szwtomas/projects");
	};

	return (
		<Flex pt={10} direction="column" textAlign={"center"}>
			<Heading>Select an existing Project!</Heading>
			<Text pt={4}>
				Select a Project to interact with its Dashboard and tickets
			</Text>
			<Flex alignItems={"center"} justifyContent="center" pt={6}>
				<Button
					onClick={handleClick}
					variant={"solid"}
					bg="green.400"
					color="white"
				>
					Go to Projects
				</Button>
			</Flex>
		</Flex>
	);
};

export default ProjectSelection;
