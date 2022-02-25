import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const colors = {
	primary: "green.400",
};

const fontSizes = {
	xs: "0.75rem",
	sm: "0.875rem",
	md: "1rem",
	lg: "1.125rem",
	xl: "1.25rem",
	"2xl": "1.5rem",
	"3xl": "1.875rem",
	"4xl": "2.25rem",
	"5xl": "3rem",
	"6xl": "3.75rem",
	"7xl": "4.5rem",
	"8xl": "6rem",
	"9xl": "8rem",
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
};

const sizes = {
	max: "max-content",
	min: "min-content",
	full: "100%",
	"3xs": "14rem",
	"2xs": "16rem",
	xs: "20rem",
	sm: "24rem",
	md: "28rem",
	lg: "32rem",
	xl: "36rem",
	"2xl": "42rem",
	"3xl": "48rem",
	"4xl": "56rem",
	"5xl": "64rem",
	"6xl": "72rem",
	"7xl": "80rem",
	"8xl": "90rem",
	container: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
	},
};

const theme = extendTheme({
	config,
	colors,
	fontSizes,
	breakpoints,
	spacing,
	sizes,
});

export default theme;
