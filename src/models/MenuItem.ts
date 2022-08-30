export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number | null;
  image: string;
  amount?: number;
  category: Category;
}

export interface Category {
  title: string;
}
