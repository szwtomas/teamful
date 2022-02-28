import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import {
	Table,
	Thead,
	Td,
	Tr,
	Th,
	Tbody,
	Link as StyledLink,
	Flex,
	Stack,
	Button,
} from "@chakra-ui/react";
import ProjectContext from "../contexts/ProjectContext";
import { getUserProjects } from "../assets/data/users";
import { AddIcon } from "@chakra-ui/icons";

const UserProjectsPage = () => {
	const { username } = useParams();
	const [projects, setProjects] = useState([]);

	const context = useContext(ProjectContext);
	console.log(context);

	let navigate = useNavigate();

	useEffect(() => {
		getUserProjects(username)
			.then(proj => setProjects(proj))
			.catch(err => console.error(err));
	}, [username]);

	const handleClick = id => {
		// setProjectWithId(id);
		navigate("/dashboard");
	};

	const getProjectElements = () => {
		return projects.map(p => {
			return (
				<Tr key={p.id}>
					<Td fontWeight={"bold"}>{p.title}</Td>
					<Td>{"Admin"}</Td>
					<Td>
						<StyledLink onClick={() => handleClick(p.id)} color="green.400">
							To Dashboard
						</StyledLink>
					</Td>
				</Tr>
			);
		});
	};

	return (
		<Layout>
			<Stack
				direction="column"
				w="100%"
				mr="auto"
				ml="auto"
				maxWidth={"1050px"}
				mt={"20px"}
				spacing={5}
			>
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
					<Button
						w={"160px"}
						h="48px"
						bg="green.400"
						color="white"
						rightIcon={<AddIcon />}
						fontSize={"lg"}
						_hover={{
							background: "green.500",
						}}
					>
						New Project
					</Button>
				</Flex>
			</Stack>
		</Layout>
	);
};

export default UserProjectsPage;
