export interface ProductVariant {
  id: string | number;
  title: string;
  sku: string;
  price: string;
  available: boolean;
}

export interface Product {
  id: string;
  brand: 'DermaFix';
  name: string;
  handle: string;
  url: string;
  sku: string;
  price: string;
  compare_at_price: string;
  description: string;
  ingredients: string;
  how_to_use: string;
  skin_concerns: string;
  category: string;
  product_type: string;
  tags: string[];
  image_url: string;
  all_images: string[];
  variants: ProductVariant[];
  vendor: string;
  in_stock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const SKIN_CONCERNS = [
  'Acne',
  'Ageing',
  'Dehydrated Skin',
  'Dry Skin',
  'Hyperpigmentation',
  'Sensitive Skin',
  'Eczema',
  'Rosacea',
  'Scarring',
  'Sun Damage',
  'Oily Skin',
  'Dark Circles',
];

export const CATEGORIES = [
  'All',
  'Cleansers',
  'Toners & Mists',
  'Serums & Boosters',
  'Moisturisers',
  'Eye Care',
  'Masks & Masques',
  'Sun Protection',
  'Corrective Coverage',
  'Exfoliants & Peels',
  'Facial Oils',
  'Lip Care',
  'Hair Care',
  'Kits & Sets',
];
