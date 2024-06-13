export type Product = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  about: string;
  image: string;
  star: number;
  value: number;
  inSale: boolean;
  percentage: number;
  isNew: boolean;
  sku: string;
  category: string;
  tags: string[];
};

export type Products = {
  Products: Product[];
};

export interface ServiceProductsProps {
  setProducts(e: Product[]): void;
}

export interface ServiceProductIdProps {
  setProduct(e: Product): void;
  paramId: number;
}
