export interface Link {
	type:
		| "company"
		| "github"
		| "linkedin"
		| "website"
		| "email"
		| "followers"
		| "twitter"
		| "createdAt"
		| "commentsCount";
	content: string | number;
}
