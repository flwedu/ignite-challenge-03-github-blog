import { cn } from "@/util";
import { HTMLAttributes, PropsWithChildren } from "react";

export function Card({
	children,
	className,
	...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
	return (
		<div
			{...props}
			className={cn(
				"border border-app-color-base-border rounded-sm shadow-sm bg-app-color-base-post hover:border-app-color-base-label",
				className,
			)}
		>
			{children}
		</div>
	);
}
