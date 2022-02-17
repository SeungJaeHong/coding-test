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

export type SearchFilter = 'isSale' | 'isSoldOut' | 'isExclusive';

export interface SearchGoodsParams {
  keyword: string;
  filters: SearchFilter[];
  page: number;
  size: number;
}
