import { HelperColorType } from '../../core/theme';

export const isActiveFilter = <T>(filters: T[], filter: T) => {
  return filters.includes(filter);
};

export const getCircleButtonColors = (keyword: string, isShow: boolean) => {
  let bgColor = 'inverse' as HelperColorType;
  let color = 'primary' as HelperColorType;
  if (keyword) {
    color = 'info';
  }
  if (isShow) {
    bgColor = 'info';
    color = 'inverse';
  }
  return { bgColor, color };
};

export function getGoodsFilterClass<T>(filters: T[], filter: T) {
  return filters.includes(filter) ? 'info' : 'primary';
}

export const numberWithCommas = (num: number) => {
  return num.toLocaleString('ko-KR');
};

export const formatKRW = (amount: number) => {
  return `${numberWithCommas(amount)}원`;
};

export const formatPercentage = (percentage: number) => {
  return `${percentage}%`;
};
