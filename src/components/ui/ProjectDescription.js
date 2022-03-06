import React, { useState, useContext } from "react";
import ProjectContext from "contexts/ProjectContext";
import {
	Stack,
	Flex,
	Heading,
	IconButton,
	InputRightElement,
	InputGroup,
	Input,
	Link,
	Text,
	Textarea,
	Button,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import Separator from "./Separator";

const ProjectDescription = () => {
	const { project } = useContext(ProjectContext);

	const [showTitleChange, setShowTitleChange] = useState(false);
	const [editTitleText, setEditTitletext] = useState(project.title);

	const [showDescriptionChange, setShowDescriptionChange] = useState(false);
	const [editDescriptionText, setEditDescriptionText] = useState("");

	const handleTitleInputChange = evt => {
		setEditTitletext(evt.target.value);
	};

	const handleTitleEdit = () => {
		setShowTitleChange(!showTitleChange);
	};

	const handleDescriptionEdit = () => {
		setShowDescriptionChange(!showDescriptionChange);
	};

	const handleDescriptionInputChange = evt => {
		setEditDescriptionText(evt.target.value);
	};

	return (
		<Flex width="100%" ml="auto" mr="auto">
			<Stack
				direction="column"
				width="95%"
				ml="auto"
				mr="auto"
				p={6}
				spacing={4}
			>
				<Stack direction={"row"} alignItems="center" spacing={8}>
					{/*   --------- TITLE ---------   */}
					{showTitleChange ? (
						<InputGroup width="400px">
							<Input
								placeholder="Enter new name..."
								border="2px"
								value={editTitleText}
								onChange={handleTitleInputChange}
							/>
							<InputRightElement
								children={<CheckIcon color="green.400" />}
								onClick={handleTitleEdit}
							/>
						</InputGroup>
					) : (
						<>
							<Heading
								as="h2"
								fontSize="4xl"
								transition="all 0.3s ease"
								_hover={{
									transform: "scale(1.1)",
								}}
								onClick={handleTitleEdit}
							>
								{project.title}
							</Heading>
							<IconButton
								bg="transparent"
								as={EditIcon}
								w={5}
								h={5}
								color="gray.500"
								onClick={handleTitleEdit}
								transition="all 0.3s ease"
								_hover={{
									transform: "scale(1.2)",
									background: "transparent",
								}}
							/>
						</>
					)}
				</Stack>
				<Separator />
				<Stack direction="column">
					{/*   --------- DESCRIPTION ---------   */}
					{showDescriptionChange ? (
						<Stack direction="column" spacing={3}>
							<Text>Edit description: </Text>
							<Textarea
								value={editDescriptionText}
								onChange={handleDescriptionInputChange}
								placeholder="Here is a sample placeholder"
								size="sm"
							/>
							<Button
								onClick={handleDescriptionEdit}
								bg="green.400"
								color="white"
								rightIcon={<CheckIcon />}
								w={"140px"}
								my={"10px"}
							>
								Confirm
							</Button>
						</Stack>
					) : (
						<>
							<Stack direction="row" spacing={8}>
								<Heading as="h3" fontSize="xl">
									Description
								</Heading>
								<Link
									color="green.400"
									fontSize="lg"
									onClick={handleDescriptionEdit}
								>
									Edit
								</Link>
							</Stack>
							<Text>{project.description}</Text>
						</>
					)}
				</Stack>
				<Separator />
			</Stack>
		</Flex>
	);
};

export default ProjectDescription;
