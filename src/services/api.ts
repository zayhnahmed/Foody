// services/api.ts

const API_URL = 'https://api.jsonbin.io/v3/b/698184b543b1c97be96155bf';

/* ======================================================
   API MODELS (what the backend actually returns)
   ====================================================== */

export interface APIFoodItem {
  id: number;
  title: string;
  thumbNailImage: string;
  mainImage: string;
  rating: number;
  category: string;
  description: string;
  cuisine?: string;
  tags?: string[];
}

interface APIResponse {
  record: {
    data: APIFoodItem[];
    meta: {
      total: number;
    };
  };
  metadata: {
    id: string;
    createdAt: string;
  };
}

/* ======================================================
   UI MODEL (what your app consumes)
   ====================================================== */

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

/* ======================================================
   FETCH FUNCTION
   ====================================================== */

export const fetchFoodItems = async (): Promise<FoodItem[]> => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: APIResponse = await response.json();

    // 🔥 Map backend data → UI data
    return json.record.data.map(
      (item): FoodItem => ({
        id: String(item.id),
        name: item.title,
        image: item.thumbNailImage,
        rating: item.rating,
        category: item.category,
        description: item.description,
        cuisine: item.cuisine,
        tags: item.tags,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch food items: ${error.message}`);
    }
    throw new Error('Failed to fetch food items');
  }
};
