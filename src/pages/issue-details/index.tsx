import { Card } from "@/components/card";
import { LinksSection } from "@/components/links/links";
import { useIssueDetailsQuery } from "@/hooks/use-issue-details-query";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

export function IssueDetailsPage() {
	const query = useIssueDetailsQuery();

	if (query.isError) {
		throw new Error("Failed to fetch post details");
	}

	if (query.isLoading) {
		return <div>Loading...</div>;
	}

	const { title, body, created_at, comments, user, url } = query.data!;

	const createdAtLabel = formatDistance(new Date(created_at), new Date(), {
		locale: ptBR,
	});

	return (
		<div className="mx-4 flex flex-col gap-4">
			<Card className="flex flex-col rounded-lg w-full gap-2 h-28">
				<div className="flex justify-between text-app-color-brand text-sm uppercase p-2">
					<Link to={"../"}>
						<span className="flex align-middle">
							<ChevronLeft size={16} /> Voltar
						</span>
					</Link>
					<a href={url} target="_blank">
						<span className="flex align-middle">
							<ExternalLink size={16} /> Ver no Github
						</span>
					</a>
				</div>
				<h2 className="font-bold text-app-color-base-title">{title}</h2>
				<div>
					<LinksSection
						links={[
							{
								type: "github",
								content: user.login,
							},
							{
								type: "createdAt",
								content: `há ${createdAtLabel}`,
							},
							{
								type: "commentsCount",
								content: comments,
							},
						]}
					/>
				</div>
			</Card>
			<Markdown className="text-app-color-base-text text-md font-normal">
				{body}
			</Markdown>
		</div>
	);
}
