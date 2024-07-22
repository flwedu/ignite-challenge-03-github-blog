export function useEnvVars(){
	return {
		repoName: import.meta.env.VITE_BLOG_REPO_NAME,
		userName: import.meta.env.VITE_USER_NAME,
		apiUrl: import.meta.env.VITE_API_URL,
	}
}
