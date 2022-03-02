import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LogIn = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Log In
					</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						To enter your workspace
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"xl"}
					p={16}
				>
					<Stack spacing={4}>
						<FormControl id="userName">
							<FormLabel>Username</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input type={showPassword ? "text" : "password"} />
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() =>
											setShowPassword(showPassword => !showPassword)
										}
									>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Stack spacing={10} pt={2}>
							<Button
								loadingText="Submitting"
								size="lg"
								bg={"green.400"}
								color={"white"}
								_hover={{
									bg: "green.500",
								}}
							>
								Log In
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={"center"}>
								Don't have an account? <Link color={"green.400"}>Sign Up</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default LogIn;
