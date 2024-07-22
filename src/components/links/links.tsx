import { getLinkIcon } from "./get-link-icon";
import { Link } from "./links.type";

export interface LinksSectionProps {
	links: Link[];
}

export function LinksSection({ links }: LinksSectionProps) {
	if (!links.length) return null;

	return (
		<div className="flex gap-4 align-middle">
			{links.map(({ type, content }) => (
				<div key={type} className="flex gap-2">
					<span className="font-semibold text-app-color-base-label">
						{getLinkIcon(type)}
					</span>
					<span className="text-app-color-base-subtitle">{content}</span>
				</div>
			))}
		</div>
	);
}
