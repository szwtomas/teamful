import React from "react";
import { Link, Stack, Text, Icon } from "@chakra-ui/react";

const SideBarItem = ({ labelIcon, label, asideIsLarge, onOverlay = false }) => {
	return (
		<Link
			transition={"all 0.25s ease"}
			_hover={{
				textDecoration: "none",
				transform: "scale(1.1)",
			}}
		>
			<Stack direction="row" alignItems={"center"} spacing={5}>
				<Icon
					as={labelIcon}
					fontSize="24px"
					transition={"all 0.2s ease"}
					_hover={asideIsLarge ? "" : { transform: "scale(1.2)" }}
				/>
				{(asideIsLarge || onOverlay) && (
					<Text color="black" fontSize="20px">
						{label}
					</Text>
				)}
			</Stack>
		</Link>
	);
};

export default SideBarItem;
