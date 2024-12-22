export type UserType = "kol" | "brand" | "agency";

export const getWelcomeMessage = (userType: UserType, name: string = "John Doe"): string => {
  switch (userType) {
    case "kol":
      return `Welcome, ${name}! Let's connect you to the perfect campaigns and grow your influence.`;
    case "brand":
      return `Welcome, ${name}! Ready to launch impactful campaigns?`;
    case "agency":
      return `Welcome, ${name}! Let's streamline your influencer marketing campaigns.`;
    default:
      return `Welcome, ${name}!`;
  }
};

export const getSubtitleMessage = (userType: UserType): string => {
  switch (userType) {
    case "kol":
      return "View and manage your campaign slots";
    case "brand":
      return "Manage and track your campaign slots";
    case "agency":
      return "Oversee and coordinate campaign slots";
    default:
      return "Manage your campaign slots";
  }
};