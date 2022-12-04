export type ProductTypes = {
  id: number;
  createdAt: string;
  productName: string;
  productDetail: string;
  productCost: number;
  productQuantity: number;
  productUrl: string;
  productImage: string;
  isFavorite: boolean;
};

export type ReviewTypes = {
  name: string;
  detail: string;
  createdAt: string;
  rating: number;
  id: number;
  userId: number;
  productId: number;
};

export type CommentTypes = {
  name: string;
  detail: string;
  createdAt: string;
  id: number;
  userId: number;
  productId: number;
};

export type ProductImageTypes = {
  id: number;
  img: string;
  productId: number;
};

export type FavoriteProductTypes = {
  id: number;
  productId: number;
  userId: number;
};
