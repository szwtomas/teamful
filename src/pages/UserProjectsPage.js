import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import Layout from "components/containers/Layout";
import UserProjectsTable from "components/ui/UserProjectsTable";
import NoProjectsDisplay from "components/containers/NoProjectsDisplay";
import ProjectContext from "contexts/ProjectContext";
import { getUserProjects } from "assets/data/users";

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

	// TODO: Make navigation generic
	const goToDashboard = id => {
		setProjectWithId(id);
		navigate("/szwtomas/dashboard");
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
				{projects.length > 0 && (
					<UserProjectsTable projects={projects} handleClick={goToDashboard} />
				)}
				{projects.length === 0 && <NoProjectsDisplay />}
			</Stack>
		</Layout>
	);
};

export default UserProjectsPage;
