import { Input } from "@/components/input";
import { IssueCard } from "@/components/issue-card";
import { useRepoIssuesQuery } from "@/hooks/use-repo-issues-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface IssuesSearchPageQueryParams
	extends Record<"userName" | "repoName", string> {}

export function RepoIssuesSearchPage() {
	const params = useParams<IssuesSearchPageQueryParams>();
	const [queryText, setQueryText] = useState("");
	const query = useRepoIssuesQuery({
		...params,
		text: queryText,
	});

	return (
		<div>
			<h1>Search Page</h1>
			<form>
				<Input
					onChange={(e) => {
						setQueryText(e.target.value);
					}}
					value={queryText}
				/>
			</form>
			{query.data && (
				<div>
					{query.data.items.map((issue) => (
						<IssueCard key={issue.id} {...issue} />
					))}
				</div>
			)}
		</div>
	);
}
