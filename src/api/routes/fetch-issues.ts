import { apiClient } from "@/api/api-client.ts";
import { IssuesSearchResponse } from "@/types/issues";
import { AxiosResponse } from "axios";

interface FetchIssuesParams {
	userName: string;
	repoName: string;
	text: string;
}

export async function fetchIssues(params: FetchIssuesParams) {
	return (
		await apiClient.get<unknown, AxiosResponse<IssuesSearchResponse>>(
			"/search/issues",
			{
				params: {
					q: encodeURIComponent(
						`${params.text} repo:${params.userName}/${params.repoName}`,
					),
				},
			},
		)
	).data;
}
