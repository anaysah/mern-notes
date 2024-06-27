import { isAxiosError } from "axios";

export const getInitialName = (name: string) => {
  if (!name) return "";

  // Split the name by spaces to get an array of words
  const nameParts = name.trim().split(" ");

  // Map over the name parts and take the first letter of each part
  const initials = nameParts.map((part) => part.charAt(0).toUpperCase());

  // Join the initials to form the final result
  return initials.join("");
};

export function handleError(error: unknown, setError: (message: string) => void): void {
  if (isAxiosError(error)) {
    setError(error.response?.data?.error ?? "An error occurred");
  } else if (error instanceof Error) {
    setError(error.message);
  } else {
    setError("An unexpected error occurred");
  }
}