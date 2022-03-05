import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
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
		<Flex justifyContent={"center"} width="100%">
			<TicketsList tickets={tickets} />
		</Flex>
	);
};

export default TicketsPreview;
