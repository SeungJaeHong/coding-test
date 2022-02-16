export interface GoodsEntity {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean;
  saleRate: number;
  isSoldOut: boolean;
  isExclusive: boolean;
}

export interface SearchGoodsParams {
  goodsName: string;
  filters?: string[];
  page: number;
  size: number;
}
