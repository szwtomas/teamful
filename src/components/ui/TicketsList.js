import React from "react";
import { Box, Flex, Text, Link, Divider, Heading } from "@chakra-ui/react";

const TicketItem = ({
	title = "",
	showDivider = true,
	category = "Feature",
	priority = "Low",
}) => {
	return (
		<Flex flexDir={"column"}>
			<Flex
				flexDir={["column", "column", "row", "row"]}
				justifyContent={["center", "center", "space-between"]}
				alignItems="center"
				py={1}
				pl={3.5}
				pr={2}
				my={1}
			>
				<Text as="h5" width={[null, null, "250px"]} fontWeight="bold">
					{title}
				</Text>

				<Text width={[null, null, "185px"]}>{category}</Text>

				<Text width={[null, null, "120px"]}>{`${priority} priority`}</Text>

				{/* TODO: Link details to specific ticket page */}
				<Link to="/szwtomas/dashboard" color="green.400">
					{"Details"}
				</Link>
			</Flex>
			{showDivider && (
				<Divider
					orientation="horizontal"
					size="8px"
					style={{
						border: "1px solid lightgray",
					}}
				/>
			)}
		</Flex>
	);
};

const TicketsList = ({ tickets = [] }) => {
	return (
		<Flex flexDir={"column"} mt={5} width="90%" mb={4}>
			<Heading as="h3" width="100%" textAlign={"center"}>
				Tickets
			</Heading>
			<Box m={4} p={3} borderWidth={4} borderRadius="6px" width="100%">
				{tickets.map((ticket, index, array) => {
					return (
						<TicketItem
							key={ticket.id}
							title={ticket.title}
							showDivider={index !== array.length - 1}
							priority={ticket.priority}
							category={ticket.category}
						/>
					);
				})}
			</Box>
		</Flex>
	);
};

export default TicketsList;
