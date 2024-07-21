import { fetchIssueDetails } from "@/api/routes/fetch-issue-details";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface IssueDetailsQueryParams
	extends Record<"userName" | "repoName" | "id", string> {}

export function useIssueDetailsQuery() {
	const { id, repoName, userName } = useParams<IssueDetailsQueryParams>();

	return useQuery({
		queryKey: ["postDetails", userName, repoName, id],
		queryFn: async () => {
			if (!userName || !repoName || !id) {
				throw new Error("Missing required parameters");
			}

			return await fetchIssueDetails({
				id: Number.parseInt(id),
				userName,
				repoName,
			});
		},
		refetchInterval: 60 * 60 * 1000, // every hour
	});
}
