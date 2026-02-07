// App constants and configuration

// API Configuration
export const API_URL = 'https://api.jsonbin.io/v3/b/698184b543b1c97be96155bf';

// AsyncStorage Keys
export const STORAGE_KEYS = {
  FAVORITES: '@food_app_favorites',
} as const;

// App Configuration
export const APP_CONFIG = {

  SKELETON_COUNT: 5,
  
  MAX_RETRY_ATTEMPTS: 3,
  
  CACHE_DURATION: 5 * 60 * 1000,
} as const;

// UI Constants
export const UI_CONSTANTS = {

  MIN_TOUCH_TARGET: 44,
  
  CARD_IMAGE_ASPECT_RATIO: 0.75,

  ANIMATION_DURATION_SHORT: 200,
  ANIMATION_DURATION_MEDIUM: 300,
  ANIMATION_DURATION_LONG: 500,
} as const;