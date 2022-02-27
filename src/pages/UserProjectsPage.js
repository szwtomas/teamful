import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import {
	Table,
	Thead,
	Td,
	Tr,
	Th,
	TableCaption,
	Tbody,
	Link as StyledLink,
	Flex,
} from "@chakra-ui/react";
import { getUserProjects } from "../assets/data/users";
import { Link as RouterLink } from "react-router-dom";

const UserProjectsPage = () => {
	const params = useParams();
	const [projects, setProjects] = useState([]);

	const userId = parseInt(params.userId);

	useEffect(() => {
		getUserProjects(userId)
			.then(proj => setProjects(proj))
			.catch(err => console.error(err));
	}, [userId]);

	const getProjectElements = () => {
		return projects.map(p => {
			return (
				<Tr key={p.id}>
					<Td fontWeight={"bold"}>{p.title}</Td>
					<Td>{"Admin"}</Td>
					<Td>
						<StyledLink
							as={RouterLink}
							color="green.400"
							to={`/${p.id}/dashboard`}
						>
							To Dashboard
						</StyledLink>
					</Td>
				</Tr>
			);
		});
	};

	return (
		<Layout>
			<Flex
				h="100%"
				w="100%"
				maxWidth={"1250px"}
				direction="row"
				alignItems={"center"}
				justifyContent="center"
				mt="35px"
				mr="auto"
				ml="auto"
			>
				<Table variant="simple">
					<TableCaption>Tomas projects</TableCaption>
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
		</Layout>
	);
};

export default UserProjectsPage;
