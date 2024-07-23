import { IssueItem } from "@/types/issues";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Card } from "../card";

interface PostProps extends Pick<IssueItem, "title" | "body" | "created_at"> {}

export function IssueCard({ title, body, created_at }: PostProps) {
	const createdAtLabel = formatDistance(new Date(created_at), new Date(), {
		locale: ptBR,
	});

	return (
		<Card className="p-4 rounded-lg gap-4 w-full h-card-height align-top">
			<div className="flex justify-between">
				<h3 className="font-bold text-app-color-base-title">{title}</h3>
				<span className="text-app-color-base-span">Há {createdAtLabel}</span>
			</div>
			<p className="text-app-color-base-text text-ellipsis text-wrap truncate h-3/4">
				{body}
			</p>
		</Card>
	);
}
