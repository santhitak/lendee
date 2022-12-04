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
  authorId: number;
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
