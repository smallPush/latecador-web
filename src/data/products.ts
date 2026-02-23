import productsData from './products.json';

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  unit?: string;
}

export interface Product {
  id: string;
  title: string;
  image?: string;
  images?: string[];
  imagePlaceholderColor: string;
  featured?: boolean;
  items: ProductItem[];
  extraInfo?: string;
}

export const products: Product[] = productsData as Product[];

export interface ProductItemDetails extends ProductItem {
  image?: string;
}

const map = new Map<string, ProductItemDetails>();
for (const product of products) {
  for (const item of product.items) {
    map.set(item.id, { ...item, image: product.image });
  }
}

export const productItemsMap = map;
