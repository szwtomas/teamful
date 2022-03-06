import React from "react";
import { Divider } from "@chakra-ui/react";

const Separator = () => {
	return (
		<Divider
			orientation="horizontal"
			size="8px"
			style={{
				border: "1px solid lightgray",
			}}
		/>
	);
};

export default Separator;
