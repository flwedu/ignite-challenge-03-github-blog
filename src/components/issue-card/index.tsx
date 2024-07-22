import { IssueItem } from "@/types/issues";
import { Card } from "../card";

interface PostProps extends Pick<IssueItem, "title" | "body" | "created_at"> {}

export function IssueCard({ title, body, created_at }: PostProps) {
	return (
		<Card>
			<div className="grid grid-cols-2">
				<h3 className="font-bold text-app-color-base-title">{title}</h3>
				<span className="text-slate-200">{created_at}</span>
			</div>
			<p className="text-slate-200">{body}</p>
		</Card>
	);
}
