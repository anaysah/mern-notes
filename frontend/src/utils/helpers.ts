export const getInitialName = (name: string) => {
  if (!name) return "";

  // Split the name by spaces to get an array of words
  const nameParts = name.trim().split(" ");

  // Map over the name parts and take the first letter of each part
  const initials = nameParts.map((part) => part.charAt(0).toUpperCase());

  // Join the initials to form the final result
  return initials.join("");
};
