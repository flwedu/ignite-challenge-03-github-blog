/// <reference types="vite/client" />
// biome-ignore lint/correctness/noUnusedVariables: is used by vite
interface ImportMetaEnv {
	VITE_API_URL: string;
	VITE_API_KEY: string;
	VITE_USER_NAME: string;
	VITE_BLOG_REPO_NAME: string;
}
