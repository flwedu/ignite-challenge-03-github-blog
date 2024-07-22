import { IssuesCardsList } from "../../components/issues-cards-list";
import { UserProfileCard } from "@/components/user-profile-card";
import { useUserProfileQuery } from "@/hooks/use-user-profile-query.ts";

export function UserProfilePage() {
	const userQuery = useUserProfileQuery();

	if (userQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (userQuery.isError) {
		throw new Error("Failed to fetch post details");
	}

	const data = userQuery.data!;

	return (<div>
		<UserProfileCard user={data} />
		<IssuesCardsList />
	</div>)
}
