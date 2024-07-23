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
	};

	return (
		<div className="mx-4">
			<div className="flex justify-between my-2 text-sm">
				<span className="text-app-color-base-subtitle">Publicações</span>
				<span className="text-app-color-base-span">
					{query.data?.total_count}{" "}
					{query.data?.total_count === 1 ? "publicação" : "publicações"}
				</span>
			</div>
			<form onSubmit={form.handleSubmit(onSubmit)} className="my-2">
				<Input
					{...form.register("query")}
					placeholder="Buscar conteúdo"
					className="w-full border bg-app-color-base-input py-3 px-4 rounded-sm border-app-color-base-border text-app-color-base-label focus:outline-0 focus:border-app-color-base-label placeholder:text-app-color-base-label"
				/>
			</form>
			{query.data && (
				<div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
					{query.data.items.map((issue) => (
						<IssueCard key={issue.id} {...issue} />
					))}
				</div>
			)}
		</div>
	);
}
