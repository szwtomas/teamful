import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../assets/data/projects";
import Layout from "../components/Layout";

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
		<Layout>
			<span>Hola</span>
		</Layout>
	);
};

export default Dashboard;
