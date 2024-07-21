import { apiClient } from "@/api/api-client.ts";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";

export async function fetchUser(userName: string) {
	return (
		await apiClient.get<unknown, AxiosResponse<User>>(`/users/${userName}`)
	).data;
}
