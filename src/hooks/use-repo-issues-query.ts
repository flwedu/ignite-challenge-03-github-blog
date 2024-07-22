import { fetchIssues } from "@/api/routes/fetch-issues";
import { useEnvVars } from "@/hooks/use-env-vars.ts";
import { useQuery } from "@tanstack/react-query";

interface UseRepoIssuesProps {
	text?: string;
}

export function useRepoIssuesQuery({ text = "" }: UseRepoIssuesProps) {
	const { userName, repoName } = useEnvVars();

	return useQuery({
		queryKey: ["issues", text],
		queryFn: async () => {
			return await fetchIssues({
				userName,
				repoName,
				text,
			});
		},
		refetchInterval: 60 * 60 * 1000, // every hour
	});
}
