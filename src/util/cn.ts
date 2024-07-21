import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind utility for creating CSS classes.
 * @param args Class values to be merged.
 * @returns CSS classes merged with Tailwind utilities.
 */
export function cn(...args: ClassValue[]) {
	return twMerge(clsx(args));
}
