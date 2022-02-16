import {
  COLOR_DICTIONARY,
  FONT_SIZE_DICTIONARY,
  HELPER_COLOR_DICTIONARY,
} from './constants';

export const theme = {
  color: COLOR_DICTIONARY,
  fontSize: FONT_SIZE_DICTIONARY,
};

export type ThemeType = typeof theme;

export type FontSizeType = keyof typeof FONT_SIZE_DICTIONARY;

export type HelperColorType = keyof typeof HELPER_COLOR_DICTIONARY;
