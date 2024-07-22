import {
	AtSign,
	Building,
	Calendar,
	GithubIcon,
	Globe2Icon,
	LinkedinIcon,
	MessageCircle,
	TwitterIcon,
	Users,
} from "lucide-react";
import React from "react";
import { Link } from "./links.type";

const LinkIconsMap: Record<Link["type"], React.ReactElement> = {
	company: <Building />,
	github: <GithubIcon />,
	linkedin: <LinkedinIcon />,
	website: <Globe2Icon />,
	email: <AtSign />,
	followers: <Users />,
	twitter: <TwitterIcon />,
	commentsCount: <MessageCircle />,
	createdAt: <Calendar />,
};

export function getLinkIcon(type: Link["type"]) {
	return LinkIconsMap[type];
}
