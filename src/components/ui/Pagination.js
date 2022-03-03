import React from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({
	totalMembers,
	membersPerPage,
	handleClick,
	currentPage,
}) => {
	const pageNumbers = [];

	for (let i = 0; i < Math.ceil(totalMembers / membersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<Flex
				direction="row"
				mt={"20px"}
				alignItems="center"
				justifyContent={"center"}
			>
				{currentPage !== 0 && (
					<ChevronLeftIcon
						fontSize="28px"
						transition={"all 0.3s ease"}
						_hover={{
							transform: "scale(1.3)",
						}}
						onClick={() => handleClick(currentPage - 1)}
					/>
				)}
				<Box mx="8px">
					{pageNumbers.map(n => {
						return (
							<Button
								key={n}
								w={"25px"}
								h="40px"
								bg="white"
								color="green.400"
								variant="outline"
								border={currentPage === n ? "2px" : "0px"}
								mx={"2px"}
								onClick={() => handleClick(n)}
							>
								{n + 1}
							</Button>
						);
					})}
				</Box>
				{currentPage !== pageNumbers.length - 1 && (
					<ChevronRightIcon
						fontSize="28px"
						transition={"all 0.3s ease"}
						_hover={{
							transform: "scale(1.3)",
						}}
						onClick={() => handleClick(currentPage + 1)}
					/>
				)}
			</Flex>
		</nav>
	);
};

export default Pagination;
