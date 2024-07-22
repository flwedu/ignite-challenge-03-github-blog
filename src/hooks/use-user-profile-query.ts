import { fetchUser } from "@/api/routes/fetch-user.ts";
import { useEnvVars } from "@/hooks/use-env-vars.ts";
import { useQuery } from "@tanstack/react-query";

export function useUserProfileQuery() {
	const { userName } = useEnvVars();

	return useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			return await fetchUser(userName);
		},
	});
}
