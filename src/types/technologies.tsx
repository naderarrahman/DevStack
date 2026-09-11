export interface Technology {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Styling" | "State Management" | "Tools";
  description: string;
  icon: string;
  rating: number;
  experience: "Beginner" | "Intermediate" | "Advanced";
}