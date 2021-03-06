import React from "react";
import {
	Box,
	Text,
	Flex,
	IconButton,
	Avatar,
	useDisclosure,
	Stack,
	useColorMode,
	useColorModeValue,
	useBreakpointValue,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerHeader,
	DrawerContent,
	Heading,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	BellIcon,
	MoonIcon,
	SunIcon,
	CloseIcon,
} from "@chakra-ui/icons";
import SideBarItems from "components/containers/SideBarItems";
import ProfileImage from "assets/images/profile-example.jpeg";

const NavBar = ({ projectTitle }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const bg = useColorModeValue("green.400", "green.400");
	const textColor = useColorModeValue("gray.200", "gray.800");

	const titleText = useBreakpointValue(["", "", "Workspace"]);

	const handleOpenMenuClick = () => {
		onOpen();
	};

	return (
		<Box
			bg={bg}
			overflow="hidden"
			h="8vh"
			minHeight={"70px"}
			position="sticky"
			top={"0"}
			width="100%"
			margin="0px auto"
		>
			<header style={{ height: "100%" }}>
				<Flex
					h={"100%"}
					alignItems={"center"}
					justifyContent={"space-between"}
					px={[6, 10, 16]}
				>
					<IconButton
						p={0}
						size={"md"}
						icon={isOpen ? null : <HamburgerIcon fontSize="28px" />}
						aria-label={"Open Menu"}
						display={["flex", "flex", "none"]}
						onClick={handleOpenMenuClick}
						bg="none"
						color="gray.200"
						_hover={{
							background: "none",
						}}
					/>
					<Box as={"h3"}>
						<Text
							fontSize={["md", "2xl"]}
							fontWeight={"bold"}
							color={textColor}
						>
							{projectTitle
								? `${projectTitle} ${titleText}`
								: "Tomas Workspace"}
						</Text>
					</Box>

					<Stack direction={"row"} align="center" spacing={8}>
						<Stack direction={"row"} spacing={5}>
							<IconButton
								icon={<BellIcon fontSize={"3xl"} />}
								aria-label={"Open Notifications"}
								display={["none", "none", "flex"]}
								variant="ghost"
								color={"gray.100"}
							/>
							<IconButton
								size={"2xl"}
								icon={
									colorMode === "light" ? (
										<MoonIcon fontSize={"3xl"} />
									) : (
										<SunIcon fontSize={"3xl"} />
									)
								}
								aria-label={"Toggle Color Scheme"}
								display={["none", "none", "flex"]}
								onClick={toggleColorMode}
								variant="ghost"
								color={"gray.100"}
							/>
						</Stack>
						<Avatar
							name="Tomas Szwarcberg"
							colorScheme="ghost"
							src={ProfileImage}
							size="md"
						/>
					</Stack>
				</Flex>
				<Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader>
							<Stack direction="column">
								<Flex width="100%" justifyContent={"flex-end"} pr="10px">
									<IconButton
										icon={<CloseIcon fontSize={"xl"} />}
										bg="none"
										color="black"
										_hover={{
											background: "none",
										}}
										aria-label="close overlay menu"
										onClick={onClose}
									/>
								</Flex>
								<Heading as="h2" textAlign={"center"} fontSize="5xl">
									Teamful
								</Heading>
							</Stack>
						</DrawerHeader>
						<DrawerBody>
							<Flex alignItems={"center"} justifyContent="center" mt="20px">
								<SideBarItems onOverlay="true" />
							</Flex>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</header>
		</Box>
	);
};

export default NavBar;
