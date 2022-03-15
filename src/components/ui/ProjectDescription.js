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
	useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import Separator from "./Separator";
import MembersPreview from "../containers/MembersPreview";
import AddMemberModal from "./AddMemberModal";

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

	const { isOpen, onOpen, onClose } = useDisclosure();

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
								_focus={{ border: "3px solid #48BB78" }}
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
								_focus={{ border: "2px solid #48BB78" }}
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
				<Stack direction="column">
					{/*   ------- MEMBERS  -------   */}
					<Flex
						flexDir={"row"}
						spacing={8}
						alignItems="center"
						justifyContent={"space-between"}
					>
						<Heading as="h3" fontSize={"xl"}>
							Members
						</Heading>
						<Button
							color="white"
							leftIcon={<AddIcon />}
							bg="green.400"
							variant="solid"
							onClick={onOpen}
						>
							Add new member
						</Button>
					</Flex>
					<MembersPreview showTitle={false} showEdit={true} />
				</Stack>
			</Stack>
			<AddMemberModal onClose={onClose} isOpen={isOpen} />
		</Flex>
	);
};

export default ProjectDescription;
