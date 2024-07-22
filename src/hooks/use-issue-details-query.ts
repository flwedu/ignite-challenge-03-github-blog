import { fetchIssueDetails } from "@/api/routes/fetch-issue-details";
import { useEnvVars } from "@/hooks/use-env-vars.ts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface IssueDetailsQueryParams
	extends Record<"userName" | "repoName" | "id", string> {}

export function useIssueDetailsQuery() {
	const { id } = useParams<IssueDetailsQueryParams>();
	const { userName, repoName } = useEnvVars();

	return useQuery({
		queryKey: ["postDetails", id],
		queryFn: async () => {
			return await fetchIssueDetails({
				id: Number.parseInt(id ?? "0"),
				userName,
				repoName,
			});
		},
		refetchInterval: 60 * 60 * 1000, // every hour
	});
}
