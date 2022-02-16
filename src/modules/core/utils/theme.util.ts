import { FONT_SIZE_DICTIONARY, HELPER_COLOR_DICTIONARY } from '../constants';
import { FontSizeType, HelperColorType } from '../theme';

export const findFontSizeByType = (type: FontSizeType = 'sm') => {
  return FONT_SIZE_DICTIONARY[type];
};

export const findColorByType = (type: HelperColorType = 'primary') => {
  return HELPER_COLOR_DICTIONARY[type];
};
