export type ProductTypes = {
  productName: string;
  productDetail: string;
  productCost: number;
  productUrl: string;
  productImage: string;
  favorite: boolean;
  productCategories: string[];
};

export type CommentTypes = {
  name: string;
  detail: string;
  createdAt: string;
};

export const productMockData: ProductTypes[] = [
  {
    productName: "Docksta table",
    productDetail:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",
    productCost: 599,
    productUrl: "",
    productImage:
      "https://www.ikea.com/ext/ingkadam/m/6d477e623fcc852c/original/UGC100000871.jpg",
    favorite: false,
    productCategories: ["เฟอร์นิเจอร์", "เครื่องครัว"],
  },
  {
    productName: "Ektorp sofa",
    productDetail:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    productCost: 499,
    productUrl: "",
    productImage:
      "https://www.ikea.com/th/en/images/products/ektorp-3-seat-sofa-totebo-dark-turquoise__1059128_ph168018_s5.jpg?f=s",
    favorite: false,
    productCategories: ["เฟอร์นิเจอร์"],
  },
  {
    productName: "Billy bookcase",
    productDetail:
      "voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
    productCost: 209,
    productUrl: "",
    productImage:
      "https://cdn.mos.cms.futurecdn.net/Py8oJJuCisSN97AmXykAW7.jpg",
    favorite: false,
    productCategories: ["เฟอร์นิเจอร์"],
  },
  {
    productName: "Poäng armchair",
    productDetail:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni",
    productCost: 159,
    productUrl: "",
    productImage:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC1wz_JX4mc7SEdIquSvgj_T4aVvgQIvVt10vHaZWCmu-wj6yhTZQ_mLxXeajoOt_MNP-X0Ulaqz7gVPjpbfRUJNJU09tzj3ncwAtWHYlZ&usqp=CAE",
    favorite: false,
    productCategories: ["เฟอร์นิเจอร์"],
  },
];
