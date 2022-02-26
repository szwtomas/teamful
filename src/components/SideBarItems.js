import React from "react";
import { Icon, Stack } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import SideBarItem from "./SideBarItem";

const SideBarItems = ({ asideIsLarge }) => {
	return (
		<Stack spacing={10} direction="column">
			<SideBarItem
				label="My Projects"
				path="/"
				asideIsLarge={asideIsLarge}
				labelIcon={GrProjects}
			/>

			<SideBarItem
				label="My Tickets"
				labelIcon={FaTicketAlt}
				path="/"
				asideIsLarge={asideIsLarge}
			/>
			<SideBarItem
				label="Dashboard"
				labelIcon={MdDashboard}
				path="/"
				asideIsLarge={asideIsLarge}
			/>
			<SideBarItem
				label="Project Board"
				labelIcon={AiOutlineFundProjectionScreen}
				path="/"
				asideIsLarge={asideIsLarge}
			/>
		</Stack>
	);
};

export default SideBarItems;
