export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert';
  image: string;
}

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: "Seared Scallops",
    description: "Pan-seared scallops with cauliflower purée and crispy pancetta",
    price: 18.99,
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Burrata Caprese",
    description: "Fresh burrata with heirloom tomatoes, basil, and aged balsamic",
    price: 16.99,
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Duck Confit Spring Rolls",
    description: "Crispy spring rolls filled with duck confit and Asian slaw",
    price: 15.99,
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1677604014885-2c071b66fcec?w=800&auto=format&fit=crop&q=60"
  },

  // Main Courses
  {
    id: 4,
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle and aged parmesan",
    price: 28.99,
    category: "main",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826a07f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Wagyu Beef Tenderloin",
    description: "Grade A5 Wagyu beef with roasted vegetables and red wine jus",
    price: 65.99,
    category: "main",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    name: "Chilean Sea Bass",
    description: "Miso-glazed sea bass with baby bok choy and ginger sauce",
    price: 42.99,
    category: "main",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60"
  },

  // Desserts
  {
    id: 7,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: 12.99,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Classic vanilla bean crème brûlée with caramelized sugar",
    price: 10.99,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    name: "Tiramisu",
    description: "Traditional Italian tiramisu with mascarpone and coffee",
    price: 11.99,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=60"
  }
];