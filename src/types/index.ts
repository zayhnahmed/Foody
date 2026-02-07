export interface FoodItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: string;
  description: string;
  cuisine?: string;
  tags?: string[];
}

export interface APIResponse {
  record: FoodItem[];
  metadata: {
    id: string;
    createdAt: string;
  };
}
