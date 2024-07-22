import { Card } from "@/components/card";
import { LinksSection } from "@/components/links/links";
import { useIssueDetailsQuery } from "@/hooks/use-issue-details-query";

export function IssueDetailsPage() {
	const query = useIssueDetailsQuery();

	if (query.isError) {
		throw new Error("Failed to fetch post details");
	}

	if (query.isLoading) {
		return <div>Loading...</div>;
	}

	const { title, body, created_at, comments, user } = query.data!;

	return (
		<div>
			<Card>
				<h1>{title}</h1>
				<div>
					<LinksSection
						links={[
							{
								type: "github",
								content: user.login,
							},
							{
								type: "createdAt",
								content: created_at,
							},
							{
								type: "commentsCount",
								content: comments?.toString(),
							},
						]}
					/>
				</div>
			</Card>
			<p>{body}</p>
		</div>
	);
}
