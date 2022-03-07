import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Stack, Icon } from "@chakra-ui/react";
import Separator from "./Separator";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const transitionStyles = {
	transition: "all 0.5 ease",
};

const hoverStyle = {
	transform: "scale(1.15)",
};

const MembersList = ({
	members,
	currentPage,
	membersLimit,
	showEdit = false,
}) => {
	const [currentMembers, setCurrentMembers] = useState([]);

	useEffect(() => {
		// Calculates the members tu be listed in the current page
		// we begin at the page number times the members page page, and
		// the upper bound is that offset plus the page limit
		const offset = currentPage * membersLimit;
		setCurrentMembers(members.slice(offset, offset + membersLimit));
	}, [currentPage, membersLimit, members]);

	return (
		<Box m={4} p={3} borderWidth={4} borderRadius="6px">
			{currentMembers.map((member, i) => {
				return (
					<Box key={member.id}>
						<Flex p={2}>
							<Text>{member.name}</Text>
							<Spacer />
							<Stack direction="row" spacing={4}>
								<Text>{member.role}</Text>
								<Icon
									as={EditIcon}
									transition="all 0.2s ease"
									_hover={hoverStyle}
								/>
								<Icon
									as={DeleteIcon}
									transition="all 0.2s ease"
									_hover={hoverStyle}
								/>
							</Stack>
						</Flex>
						{i !== currentMembers.length - 1 && <Separator />}
					</Box>
				);
			})}
		</Box>
	);
};

export default MembersList;
