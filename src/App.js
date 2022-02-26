import React from "react";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar.js";
import "./global.css";

const App = () => {
	return (
		<div>
			<NavBar />
			<SideBar />

			<div className="app">
				<Router>
					<Routes>
						<Route path="/" element={<p>Hola</p>} />
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
		</div>
	);
};

export default App;
