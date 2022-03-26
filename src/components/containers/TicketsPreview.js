import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Link as StyledLink, Box } from "@chakra-ui/react";
import { getTickets } from "assets/data/tickets";
import TicketsList from "components/ui/TicketsList";

const TicketsPreview = () => {
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		getTickets()
			.then(res => setTickets(res))
			.catch(err => console.error(err));
	}, []);

	return (
		<>
			<Flex
				flexDir="column"
				justifyContent={"center"}
				alignItems="center"
				width="100%"
			>
				<TicketsList tickets={tickets} />
				<Box ml="auto" mr="5%">
					<StyledLink
						color="green.400"
						fontSize="lg"
						as={RouterLink}
						to="/szwtomas/board"
					>
						View Board
					</StyledLink>
				</Box>
			</Flex>
		</>
	);
};

export default TicketsPreview;
