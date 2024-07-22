import { Input } from "@/components/input";
import { IssueCard } from "@/components/issue-card";
import { useRepoIssuesQuery } from "@/hooks/use-repo-issues-query";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

interface IssueCardsListFormType {
	query: string;
}

export function IssuesCardsList() {
	const form = useForm<IssueCardsListFormType>();
	const [queryText, setQueryText] = useState("");
	const query = useRepoIssuesQuery({
		text: queryText,
	});

	const onSubmit: SubmitHandler<IssueCardsListFormType> = (data) => {
		setQueryText(data.query);
	}

	return (
		<div>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Input {...form.register("query")}/>
			</form>
			{query.data && (
				<div className="flex flex-wrap">
					{query.data.items.map((issue) => (
						<IssueCard key={issue.id} {...issue} />
					))}
				</div>
			)}
		</div>
	);
}
