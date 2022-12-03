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

export type CommentTypes = {
  name: string;
  detail: string;
  createdAt: string;
};
