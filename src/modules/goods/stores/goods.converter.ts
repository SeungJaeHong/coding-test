import { DEFAULT_PAGE, DEFAULT_SIZE } from '../../core/constants';
import { GoodsEntity, SearchGoodsParams } from '../../core/entities';
import { GoodsModel } from '../models';

export const toGoodsParams = (params?: Partial<SearchGoodsParams>) => {
  return {
    keyword: params?.keyword || '',
    filters: params?.filters || [],
    page: params?.page || DEFAULT_PAGE,
    size: params?.size || DEFAULT_SIZE,
  };
};

export const toGoodsModel = (goods: GoodsEntity) =>
  ({
    goodsNo: goods.goodsNo || -1,
    goodsName: goods.goodsName || '',
    price: goods.price || 0,
    brandName: goods.brandName || '',
    imageUrl: goods.imageUrl || '',
    linkUrl: goods.linkUrl || '',
    brandLinkUrl: goods.brandLinkUrl || '',
    normalPrice: goods.normalPrice || 0,
    isSale: goods.isSale || false,
    saleRate: goods.saleRate || 0,
    isSoldOut: goods.isSoldOut || false,
    isExclusive: goods.isExclusive || false,
  } as GoodsModel);

export const toGoodsListModel = (goodsList: GoodsEntity[] = []) => {
  return goodsList.map(toGoodsModel);
};
