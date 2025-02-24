export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "The best fine dining experience I've had in years. The truffle risotto was exceptional!",
    date: "2024-02-15",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    comment: "Beautiful ambiance and great service. The scallops were perfectly cooked.",
    date: "2024-02-10",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
  }
];