import { UserProfileCard } from "@/components/user-profile-card";
import { useUserProfileQuery } from "@/hooks/use-user-profile-query.ts";

export function UserProfilePage() {
	const query = useUserProfileQuery();

	if (query.isLoading) {
		return <div>Loading...</div>;
	}

	if (query.isError) {
		throw new Error("Failed to fetch post details");
	}

	const data = query.data!;

	return <UserProfileCard user={data} />;
}
