import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { IssueDetailsPage } from "./pages/issue-details";
import { UserProfilePage } from "./pages/user-profile";

export const router: ReturnType<typeof createBrowserRouter> =
	createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/",
					element: <UserProfilePage />,
				},
				{
					path: "issues/:id",
					element: <IssueDetailsPage />,
				},
			],
		},
	]);
