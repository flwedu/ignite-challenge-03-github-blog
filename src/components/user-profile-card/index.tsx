import { Card } from "@/components/card";
import { LinksSection } from "@/components/links/links.tsx";
import type { User } from "@/types/user.ts";

interface UserProfileCardProps {
	user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
	return (
		<Card className="flex gap-4 p-4 z-10">
			<div className="place-self-center w-1/4">
				<img
					className="rounded-md size-32"
					srcSet={user.avatar_url}
				/>
			</div>
			<div className="w-3/4 flex flex-col gap-2">
				<h1 className="text-app-color-base-title text-2xl font-medium">{user.name}</h1>
				<p className="text-app-color-base-text">{user.bio}</p>
				<LinksSection
					links={[
						{
							type: "github",
							content: user.login,
						},
						{
							type: "company",
							content: user.company,
						},
						{
							type: "followers",
							content: user.followers?.toString(),
						},
					]}
				/>
			</div>
		</Card>
	);
}
