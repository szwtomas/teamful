import React from "react";
import Hero from "../components/Hero";
import { Heading } from "@chakra-ui/react";

const Home = () => {
	return (
		<div>
			<Heading as="h1" fontSize={"7xl"} fontWeight="bold" display={"none"}>
				Teamful
			</Heading>
			<Heading as="h1" fontSize={"7xl"} textAlign="center" mt={5}>
				<span style={{ color: "	#48BB78" }}>Team</span>
				<span>Ful</span>
			</Heading>
			<Hero />
		</div>
	);
};

export default Home;
