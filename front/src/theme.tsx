// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from "@chakra-ui/react";

// Version 2: Using functions
const customTheme = extendTheme({
	styles: {
		global: () => ({
			body: {
				fontFamily: "Poppins",
				bg: "#0A192F",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			},
		}),
	},
});

export default customTheme;
