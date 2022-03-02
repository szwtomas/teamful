import React from "react";
import {
	Container,
	Heading,
	Stack,
	Text,
	Button,
	Image,
	Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/images/hero.png";
import { useColorModeValue } from "@chakra-ui/react";

const Hero = () => {
	let navigate = useNavigate();

	const handleSignUpClick = () => navigate("/signup");
	const handleLearnMoreClick = () => navigate("/about");

	const learnMoreBtnBg = useColorModeValue(null, "#ffffff");
	const learnMoreBtnColor = useColorModeValue("green.400", "green.400");
	const descriptionColor = useColorModeValue("gray.500", "gray.300");

	return (
		<Container maxW={"5xl"}>
			<Stack
				textAlign={"center"}
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={8}
			>
				<Heading
					fontWeight={600}
					fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
					lineHeight={"110%"}
					letterSpacing={1}
				>
					Project Managment{" "}
					<Text as={"span"} color={"green.400"}>
						made easy
					</Text>
				</Heading>
				<Text letterSpacing={1} color={descriptionColor} maxW={"3xl"}>
					Organize your project, assign task to different team members, keep
					track of bugs and mark their priority in a simple manner. use all
					features completely free.
				</Text>
				<Stack spacing={6} direction={"row"}>
					<Button
						onClick={handleSignUpClick}
						rounded={"full"}
						px={6}
						colorScheme={"green"}
						bg={"green.400"}
						_hover={{ bg: "green.500" }}
					>
						Sign Up
					</Button>
					<Button
						onClick={handleLearnMoreClick}
						rounded={"full"}
						px={6}
						bg={learnMoreBtnBg}
						color={learnMoreBtnColor}
					>
						Learn more
					</Button>
				</Stack>
				<Flex w={"full"} justify="center">
					<Image
						src={HeroImg}
						h={["18rem", "18rem", "22rem", "26rem"]}
						mt={[2, 4, 8, 12, 14]}
						mb={0}
					/>
				</Flex>
			</Stack>
		</Container>
	);
};

export default Hero;
