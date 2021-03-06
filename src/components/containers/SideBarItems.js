import React from "react";
import { Stack } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import SideBarItem from "components/ui/SideBarItem";

const SideBarItems = ({ asideIsLarge, onOverlay }) => {
	return (
		<Stack spacing={10} direction="column">
			<SideBarItem
				label="My Projects"
				path="/szwtomas/projects"
				asideIsLarge={asideIsLarge}
				labelIcon={GrProjects}
				onOverlay={onOverlay}
			/>

			<SideBarItem
				label="My Tickets"
				labelIcon={FaTicketAlt}
				path="/"
				asideIsLarge={asideIsLarge}
				onOverlay={onOverlay}
			/>
			<SideBarItem
				label="Dashboard"
				labelIcon={MdDashboard}
				path="/szwtomas/dashboard"
				asideIsLarge={asideIsLarge}
				onOverlay={onOverlay}
			/>
			<SideBarItem
				label="Project Board"
				labelIcon={AiOutlineFundProjectionScreen}
				path="/"
				asideIsLarge={asideIsLarge}
				onOverlay={onOverlay}
			/>
		</Stack>
	);
};

export default SideBarItems;
