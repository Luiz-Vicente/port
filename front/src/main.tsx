import React from "react";
import ReactDOM from "react-dom/client";

// routes
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import customTheme from "./theme.tsx";

// styles
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root-react")!).render(
	<React.StrictMode>
		<ChakraProvider theme={customTheme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
