import { fetchUser } from "@/api/routes/fetch-user.ts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface UserProfileQueryParams extends Record<"userName", string> {}

export function useUserProfileQuery() {
	const { userName } = useParams<UserProfileQueryParams>();

	return useQuery({
		queryKey: ["user", userName],
		queryFn: async () => {
			if(!userName) throw new Error("Missing required parameters: userName");
			return await fetchUser(userName);
		},
	});
}
