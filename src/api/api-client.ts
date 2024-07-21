import axios from "axios";

export const apiClient = axios.create({
	url: import.meta.env.VITE_API_URL,
});
