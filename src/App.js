import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/about" element={<About />} />
					<Route path="/:projectId">
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
