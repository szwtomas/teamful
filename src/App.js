import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
