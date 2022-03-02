import React from "react";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const CreateProjectButton = () => {
	return (
		<Button
			w={"160px"}
			h="48px"
			bg="green.400"
			color="white"
			rightIcon={<AddIcon />}
			fontSize={"lg"}
			_hover={{
				background: "green.500",
			}}
		>
			New Project
		</Button>
	);
};

export default CreateProjectButton;
