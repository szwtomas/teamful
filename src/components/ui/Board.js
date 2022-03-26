import React, { useState, useEffect } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Link as StyledLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Board = ({ tickets, currentPage, ticketLimit }) => {
	const [currentTickets, setCurrentTickets] = useState([]);

	useEffect(() => {
		// Calculates the tickets to be listed in the current page
		// we begin at the page number times the ticket page, and
		// the upper bound is that offset plus the page limit
		const offset = currentPage * ticketLimit;
		setCurrentTickets(tickets.slice(offset, offset + ticketLimit));
	}, [tickets, currentPage, ticketLimit]);

	return (
		<Table variant={"simple"} mb={5}>
			<Thead>
				<Tr>
					<Th>Title</Th>
					<Th>Category</Th>
					<Th>Priority</Th>
					<Th></Th>
				</Tr>
			</Thead>
			<Tbody>
				{currentTickets.map(t => {
					return (
						<Tr key={t.id}>
							<Td>{t.title}</Td>
							<Td>{t.category}</Td>
							<Td>{t.priority}</Td>
							<Td>
								<StyledLink
									color="green.400"
									as={RouterLink}
									to="szwtomas/board"
								>
									Details
								</StyledLink>
							</Td>
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	);
};

export default Board;
