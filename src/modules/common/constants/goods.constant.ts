export const GOODS_FILTER_DICTIONARY = {
  isSale: '세일상품',
  isExclusive: '단독상품',
  isSoldOut: '품절포함',
} as const;

export type GoodsFilterType = keyof typeof GOODS_FILTER_DICTIONARY;
