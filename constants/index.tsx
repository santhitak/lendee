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

export type CategoryTypes = {
  id: number;
  productId: number;
  categoryId: number;
};

export const allCategories = [
  { id: 1, name: "เครื่องครัว" },
  { id: 2, name: "เฟอร์นิเจอร์" },
  { id: 3, name: "เครื่องใช้ไฟฟ้า" },
  { id: 4, name: "แฟชั่น" },
  { id: 5, name: "ของใช้ภายในบ้าน" },
  { id: 6, name: "เครื่องมือ" },
  { id: 7, name: "อุปกรณ์เล่นเกมส์" },
  { id: 8, name: "อุปกรณ์กีฬา" },
  { id: 9, name: "เครื่องประดับ" },
  { id: 10, name: "อุปกรณ์ศิลปะ" },
  { id: 11, name: "สัตว์เลี้ยง" },
];
