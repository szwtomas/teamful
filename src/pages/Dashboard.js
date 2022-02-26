import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../assets/data/projects";
import { Box, Heading } from "@chakra-ui/react";

const Dashboard = () => {
	const params = useParams();
	const projectId = parseInt(params.projectId);

	const [project, setProject] = useState({});

	useEffect(() => {
		getProjectById(projectId)
			.then(proj => setProject(proj))
			.catch(err => console.error(err));
	}, [projectId]);

	return (
		<Box>
			<Heading as={"h2"} textAlign="center" mt={5}>
				{project.title}
			</Heading>
		</Box>
	);
};

export default Dashboard;
