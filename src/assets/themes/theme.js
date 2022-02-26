import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const colors = {
	primary: "green.400",
	styles: {
		global: props => ({
			"html, body, #root": {
				height: "100%",
			},
			"*::-webkit-scrollbar": {
				display: "none",
			},
		}),
	},
};

const breakpoints = createBreakpoints({
	sm: "30em",
	md: "48em",
	lg: "62em",
	xl: "80em",
	"2xl": "96em",
});

const spacing = {
	px: "1px",
	0.5: "0.125rem",
	1: "0.25rem",
	1.5: "0.375rem",
	2: "0.5rem",
	2.5: "0.625rem",
	3: "0.75rem",
	3.5: "0.875rem",
	4: "1rem",
	5: "1.25rem",
	6: "1.5rem",
	7: "1.75rem",
	8: "2rem",
	9: "2.25rem",
	10: "2.5rem",
	11: "3rem",
	12: "3.5rem",
	13: "4rem",
	14: "4.5rem",
	15: "5rem",
	16: "6rem",
	17: "7rem",
	18: "9rem",
	19: "10rem",
	20: "11rem",
};

const theme = extendTheme({
	config,
	colors,
	breakpoints,
	spacing,
});

export default theme;
