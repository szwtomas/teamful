import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalFooter,
	ModalBody,
	Button,
	Stack,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

const AddMemberModal = ({ isOpen, onClose }) => {
	return (
		<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Heading as="h4" fontSize="2xl">
						Invite new member
					</Heading>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack direction="column" spacing={5}>
						<Stack direction={"column"}>
							<Heading as="h5" fontSize={"lg"}>
								Username or Email:
							</Heading>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={<BiUser color="gray.300" />}
								/>
								<Input
									type="tel"
									placeholder="E.g: szwtomas"
									_focus={{ border: "1px solid #48BB78" }}
								/>
							</InputGroup>
						</Stack>
						<Stack direction="column">
							<Heading as="h5" fontSize="lg">
								Role:
							</Heading>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									children={<MdWorkOutline color="gray.300" />}
								/>
								<Input
									type="tel"
									placeholder="E.g: Developer"
									_focus={{ border: "1px solid #48BB78" }}
								/>
							</InputGroup>
						</Stack>
						<Stack direction="column">
							<Heading as="h5" fontSize="lg">
								Message:
							</Heading>
							<Textarea placeholder="For the user" />
						</Stack>
					</Stack>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme={"green"}>Send Invite</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddMemberModal;
