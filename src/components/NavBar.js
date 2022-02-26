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
} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import ProfileImage from "./../assets/images/profile-example.jpeg";

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const bg = useColorModeValue("green.400", "green.400");
	const textColor = useColorModeValue("gray.200", "gray.800");

	return (
		<nav>
			<Box boxShadow={"0 2px 10px 0 rgba(0,0,0,.3)"} bg={bg}>
				<Flex
					h={"8vh"}
					alignItems={"center"}
					justifyContent={"space-between"}
					px={[6, 10, 16]}
				>
					<IconButton
						p={0}
						size={"md"}
						icon={isOpen ? null : <HamburgerIcon fontSize="28px" />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
						bg="none"
						color="gray.200"
						_hover={{
							background: "none",
						}}
					/>
					<Box as={"h3"}>
						<Text fontSize={"4xl"} fontWeight={"bold"} color={textColor}>
							Shoppio
						</Text>
					</Box>

					<Stack direction={"row"} align="center" spacing={8}>
						<Stack direction={"row"} spacing={5}>
							<IconButton
								icon={<BellIcon fontSize={"3xl"} />}
								aria-label={"Open Notifications"}
								display={{ sm: "none", md: "block" }}
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
								display={{ sm: "none", md: "block" }}
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
			</Box>
		</nav>
	);
};

export default NavBar;
