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
				border={"2px solid black"}
				ml="auto"
				mr="auto"
				mt={1}
				p={5}
				flexDir="column"
			>
				<Heading as="h2" textAlign={"center"}>
					Tickets
				</Heading>
				<BoardContainer />
			</Flex>
		</Layout>
	);
};

export default BoardPage;
