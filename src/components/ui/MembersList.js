import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Spacer, Divider } from "@chakra-ui/react";

const MembersList = ({ members, currentPage, membersLimit }) => {
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
							<Text>{member.role}</Text>
						</Flex>
						{i !== currentMembers.length - 1 && (
							<Divider
								orientation="horizontal"
								size="8px"
								style={{
									border: "1px solid lightgray",
								}}
							/>
						)}
					</Box>
				);
			})}
		</Box>
	);
};

export default MembersList;
