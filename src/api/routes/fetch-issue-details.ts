import { apiClient } from "@/api/api-client.ts";
import { IssueItem } from "@/types/issues";
import { AxiosResponse } from "axios";

interface FetchIssueDetailsParams {
	userName: string;
	repoName: string;
	id: number;
}

export async function fetchIssueDetails({
	id,
	repoName,
	userName,
}: FetchIssueDetailsParams) {
	return (
		await apiClient.get<unknown, AxiosResponse<IssueItem>>(
			`/repos/${userName}/${repoName}/issues/${id}`,
		)
	).data;
}
