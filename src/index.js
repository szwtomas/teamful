import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import myTheme from "./assets/themes/theme";

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS={true}>
			{<ColorModeScript initialColorMode={myTheme.config.initialColorMode} />}
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
