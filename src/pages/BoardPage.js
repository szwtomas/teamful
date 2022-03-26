import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Layout from "components/containers/Layout";
import BoardContainer from "components/containers/BoardContainer";

const BoardPage = () => {
	return (
		<Layout>
			<Flex
				width="90%"
				maxWidth="1050px"
				h="min-content"
				ml="auto"
				mr="auto"
				mt={5}
				p={5}
				flexDir="column"
				border={"2px solid lightgrey"}
				borderRadius="6px"
			>
				<Heading as="h2" textAlign={"center"} mb={4}>
					Tickets
				</Heading>
				<BoardContainer />
			</Flex>
		</Layout>
	);
};

export default BoardPage;
