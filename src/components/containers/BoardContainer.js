import React, { useEffect, useState } from "react";
import { getTickets } from "assets/data/tickets";
import { Flex } from "@chakra-ui/react";
import Board from "components/ui/Board";

const BoardContainer = () => {
	const [tickets, setTickets] = useState([]);
	useEffect(() => {
		const req = async () => {
			try {
				const res = await getTickets();
				setTickets(res);
			} catch (err) {
				console.error(err);
			}
		};

		req();
	});

	return (
		<Flex width="100%" height={"min-content"} flexDir={"column"}>
			<Board tickets={tickets} />
		</Flex>
	);
};

export default BoardContainer;
