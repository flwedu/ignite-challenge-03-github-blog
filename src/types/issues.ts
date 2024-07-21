import { User } from "./user";

export interface IssuesSearchResponse {
	total_count: number;
	incomplete_results: boolean;
	items: IssueItem[];
}

export interface IssueItem {
	url: string;
	repository_url: string;
	labels_url: string;
	comments_url: string;
	events_url: string;
	html_url: string;
	id: number;
	node_id: string;
	number: number;
	title: string;
	user: User;
	labels: unknown[];
	state: string;
	locked: boolean;
	assignee: null;
	assignees: unknown[];
	milestone: null;
	comments: number;
	created_at: string;
	updated_at: string;
	closed_at: null | string;
	author_association: string;
	active_lock_reason: null;
	body: null | string;
	reactions: Reactions;
	timeline_url: string;
	performed_via_github_app: null;
	state_reason: null | string;
	score: number;
}

interface Reactions {
	url: string;
	total_count: number;
	"+1": number;
	"-1": number;
	laugh: number;
	hooray: number;
	confused: number;
	heart: number;
	rocket: number;
	eyes: number;
}
