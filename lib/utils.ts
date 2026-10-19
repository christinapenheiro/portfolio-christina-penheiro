import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Safely merges Tailwind CSS class names.
 * Uses clsx for conditional logic, then tailwind-merge to resolve conflicts.
 * Example: cn("px-4", isActive && "bg-lime-400") → "px-4 bg-lime-400" (or "px-4" if isActive is false)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
