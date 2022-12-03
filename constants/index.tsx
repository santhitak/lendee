export type ProductTypes = {
  id: number;
  createdAt: string;
  productName: string;
  productDetail: string;
  productCost: number;
  productQuantity: number;
  productUrl: string;
  isFavorite: boolean;
};

export type ReviewTypes = {
  name: string;
  detail: string;
  createdAt: string;
  rating: number;
};

export type CommentTypes = {
  name: string;
  detail: string;
  createdAt: string;
};
