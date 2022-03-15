import React, { useEffect, useState } from "react";
import { getTickets } from "assets/data/tickets";
import { Flex, Heading } from "@chakra-ui/react";
import Board from "components/ui/Board";
import Pagination from "components/ui/Pagination";

const BoardContainer = () => {
	const [tickets, setTickets] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	const ticketsPerPage = 12;

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

	const handlePageChange = page => {
		setCurrentPage(page);
	};

	return (
		<Flex width="100%" height={"min-content"} flexDir={"column"}>
			<Heading as="h2" fontSize={"5xl"} textAlign="center" />
			<Board
				tickets={tickets}
				currentPage={currentPage}
				ticketLimit={ticketsPerPage}
			/>
			<Pagination
				itemsPerPage={ticketsPerPage}
				totalItems={tickets.length}
				currentPage={currentPage}
				handleClick={handlePageChange}
			/>
		</Flex>
	);
};

export default BoardContainer;
