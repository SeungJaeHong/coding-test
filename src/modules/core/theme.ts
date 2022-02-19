import {
  COLOR_DICTIONARY,
  FONT_SIZE_DICTIONARY,
  FONT_WEIGHT_DICTIONARY,
  HELPER_COLOR_DICTIONARY,
  SHAPE_LIST,
  SPACING_SIZE_DICTIONARY,
} from './constants';

export const theme = {
  color: COLOR_DICTIONARY,
  fontSize: FONT_SIZE_DICTIONARY,
  weight: FONT_WEIGHT_DICTIONARY,
  spacing: SPACING_SIZE_DICTIONARY,
} as const;

export type ThemeType = typeof theme;

export type ColorType = keyof typeof COLOR_DICTIONARY;

export type FontSizeType = keyof typeof FONT_SIZE_DICTIONARY;

export type FontWeightType = keyof typeof FONT_WEIGHT_DICTIONARY;

export type HelperColorType = keyof typeof HELPER_COLOR_DICTIONARY;

export type SpacingType = keyof typeof SPACING_SIZE_DICTIONARY;

export type ShapeType = typeof SHAPE_LIST[number];
