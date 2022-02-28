import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import About from "./About";
import Dashboard from "./Dashboard";
import UserProjectsPage from "./UserProjectsPage";

const RoutesWrapper = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/about" element={<About />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="/:username">
					<Route path="projects" element={<UserProjectsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesWrapper;
