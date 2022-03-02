import React from "react";
import { Flex, Table, Thead, Tr, Td, Th, Tbody, Link } from "@chakra-ui/react";
import CreateProjectButton from "./CreateProjectButton";

const UserProjectsTable = ({ projects, handleClick }) => {
	const getProjectElements = () => {
		return projects.map(p => {
			return (
				<Tr key={p.id}>
					<Td fontWeight={"bold"}>{p.title}</Td>
					<Td>{"Admin"}</Td>
					<Td>
						<Link onClick={() => handleClick(p.id)} color="green.400">
							To Dashboard
						</Link>
					</Td>
				</Tr>
			);
		});
	};

	return (
		<>
			<Flex
				w="100%"
				maxWidth={"1250px"}
				direction="row"
				alignItems={"center"}
				justifyContent="center"
				mt="35px"
				mr="auto"
				ml="auto"
			>
				<Table variant="simple" size="lg">
					<Thead>
						<Tr>
							<Th fontSize="lg" fontWeight={"bold"}>
								Project name
							</Th>
							<Th fontSize="lg" fontWeight={"bold"}>
								Role
							</Th>
							<Th fontSize="lg" fontWeight={"bold"}>
								Dashboard Link
							</Th>
						</Tr>
					</Thead>
					<Tbody>{getProjectElements()}</Tbody>
				</Table>
			</Flex>
			<Flex
				direction="row"
				justifyContent={["center", "center", "flex-end", "flex-end"]}
				alignItems="center"
				w={["100%", "100%", "85%", "85%"]}
			>
				<CreateProjectButton />
			</Flex>
		</>
	);
};

export default UserProjectsTable;
