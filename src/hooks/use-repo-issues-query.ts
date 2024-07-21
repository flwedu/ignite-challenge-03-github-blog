import { fetchIssues } from "@/api/routes/fetch-issues";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface UseRepoIssuesProps {
	text?: string;
}

interface RepoIssuesQueryParams
	extends Record<"userName" | "repoName", string> {}

export function useRepoIssuesQuery({ text = "" }: UseRepoIssuesProps) {
	const { userName, repoName } = useParams<RepoIssuesQueryParams>();

	return useQuery({
		queryKey: ["issues", userName, repoName, text],
		queryFn: async () => {
			if (!userName || !repoName) {
				throw new Error("Missing required parameters");
			}

			return await fetchIssues({
				userName,
				repoName,
				text,
			});
		},
		refetchInterval: 60 * 60 * 1000, // every hour
	});
}
