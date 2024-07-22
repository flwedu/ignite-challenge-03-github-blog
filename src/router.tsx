import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { IssueDetailsPage } from "./pages/issue-details";
import { RepoIssuesSearchPage } from "./pages/repo-issues-search-page";
import { UserProfilePage } from "./pages/user-profile";

export const router: ReturnType<typeof createBrowserRouter> =
	createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/:userName",
					element: <UserProfilePage />,
				},
				{
					path: "/:userName/:repoName",
					element: <RepoIssuesSearchPage />,
				},
				{
					path: "/:userName/:repoName/:id",
					element: <IssueDetailsPage />,
				},
			],
		},
	]);
