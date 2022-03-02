import React, { useState } from "react";
import {
	Flex,
	Box,
	Text,
	IconButton,
	Stack,
	Avatar,
	Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ProfileImage from "../../assets/images/profile-example.jpeg";
import SideBarItems from "../containers/SideBarItems";

const SideBar = () => {
	const [asideIsLarge, setAsideIsLarge] = useState(true);

	return (
		<Box>
			<Flex
				bg={"gray.200"}
				pos="sticky"
				left="0"
				m={0}
				h="92vh"
				w={asideIsLarge ? "240px" : "80px"}
				boxShadow="0 14px 12px 0 rgba(0, 0, 0, 0.3)"
				flexDir="column"
				justifyContent="space-between"
				display={["none", "none", "flex"]}
				alignContent="center"
				alignItems={"center"}
				borderRadius={asideIsLarge ? "0 4px 4px 0 " : "0 10px 10px 0"}
				overflow="hidden"
			>
				<Flex
					pr={asideIsLarge ? "10px" : "0"}
					flexDirection="row"
					w="100%"
					alignItems={asideIsLarge ? "center" : "center"}
					justifyContent="space-around"
					mt={2}
				>
					{asideIsLarge && (
						<Heading as="h3" size="lg" color="gray.700">
							Teamful
						</Heading>
					)}
					<IconButton
						background="none"
						mt={1}
						color="gray.700"
						_hover={{ background: "none" }}
						icon={<HamburgerIcon fontSize="20px" />}
						onClick={() => setAsideIsLarge(!asideIsLarge)}
						aria-label="toggle menu"
					/>
				</Flex>

				<SideBarItems asideIsLarge={asideIsLarge} />

				{asideIsLarge && (
					<Stack p={"5%"} direction="column" w="100%" mb={4} ml={3}>
						<Stack direction={"row"} spacing={4}>
							<Avatar name="Tomas Szwarcberg" src={ProfileImage} size="lg" />
							<Stack direction="column">
								<Heading as="h3" size="sm">
									Tomas Szwarcberg
								</Heading>
								<Text color="gray">Admin</Text>
							</Stack>
						</Stack>
					</Stack>
				)}
				{!asideIsLarge && (
					<Avatar
						name="Tomas Szwarcberg"
						src={ProfileImage}
						size="md"
						mb={8}
						transition={"all 0.2s ease"}
						_hover={{ transform: "scale(1.2)" }}
					/>
				)}
			</Flex>
		</Box>
	);
};

export default SideBar;
