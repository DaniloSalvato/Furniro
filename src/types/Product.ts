export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  value: number;
  inSale: boolean;
  percentage: number;
  isNew: boolean;
};

export type Products = {
  Products: Product[];
};

export interface ServiceProductsProps {
  setProducts(e: Product[]): void;
}
