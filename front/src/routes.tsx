import { createBrowserRouter } from "react-router-dom";
import { Home, Redirect } from "./components/pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/design",
		element: (
			<Redirect
				url="https://www.figma.com/file/mQJ3XZfl6QHEUw42mTq7c3/Portf%C3%B3lio-Luiz-Vicente?type=design&node-id=1%3A568&mode=design&t=MGFrLCBhKhOx4Sez-1"
				siteName="Figma"
			/>
		),
	},
	{
		path: "/repo",
		element: (
			<Redirect
				url="https://github.com/Luiz-Vicente/port"
				siteName="GitHub"
			/>
		),
	},
]);

export default router;
