import React from "react";
import NavBar from "./NavBar";
import { Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<Flex flexDir={"row"} m={0} p={0}>
				<SideBar />
				<Flex width="94%" mr="auto" ml="auto">
					{children}
				</Flex>
			</Flex>
		</>
	);
};

export default Layout;
