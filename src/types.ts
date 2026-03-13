export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: {
    jakarta: number;
    papua: number;
  };
  category: string;
}

export interface ShippingResult {
  courier: string;
  service: string;
  cost: number;
  etd: string;
}

export type Origin = 'Jakarta' | 'Papua';
