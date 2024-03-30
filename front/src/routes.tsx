import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import { redirectTo } from "./helpers/redirect";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/design",
		element: redirectTo(
			"https://www.figma.com/file/mQJ3XZfl6QHEUw42mTq7c3/Portf%C3%B3lio-Luiz-Vicente?type=design&node-id=1%3A568&mode=design&t=MGFrLCBhKhOx4Sez-1"
		),
	},
]);

export default router;
