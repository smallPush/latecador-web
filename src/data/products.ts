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

export const productItemsMap: Map<string, ProductItemDetails> = new Map(
  products.flatMap((product) =>
    product.items.map((item) => [
      item.id,
      { ...item, image: product.image },
    ])
  )
);
