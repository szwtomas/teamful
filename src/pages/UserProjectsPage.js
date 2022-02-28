import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import UserProjectsTable from "../components/UserProjectsTable";
import ProjectContext from "../contexts/ProjectContext";
import { getUserProjects } from "../assets/data/users";

const UserProjectsPage = () => {
	const { username } = useParams();
	const [projects, setProjects] = useState([]);

	const { setProjectWithId } = useContext(ProjectContext);

	let navigate = useNavigate();

	useEffect(() => {
		getUserProjects(username)
			.then(proj => setProjects(proj))
			.catch(err => console.error(err));
	}, [username]);

	const goToDashboard = id => {
		setProjectWithId(id);
		navigate("/dashboard");
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
				<UserProjectsTable projects={projects} handleClick={goToDashboard} />
			</Stack>
		</Layout>
	);
};

export default UserProjectsPage;
