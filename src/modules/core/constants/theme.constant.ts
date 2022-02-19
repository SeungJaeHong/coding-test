/**
 * @description
 * 컬러 이름에 대한 정의는 아래 사이트에서 참고
 * https://www.color-name.com/hex
 * 컬러 배열 순서는 hex값 작 -> 크
 */
export const CONTRAST_DICTIONARY = {
  black: '#000000',
  sonicSilver: '#777777',
  darkGrey: '#aaaaaa',
  chineseSilver: '#cccccc',
  brightGrey: '#eeeeee',
  ghostWhite: '#f9f9f9',
  antiFlashWhite: '#f1f1f1',
  white: '#ffffff',
} as const;

export const RED_DICTIONARY = {
  red: '#ff0000',
} as const;

export const GREEN_DICTIONARY = {
  crayola: '#18a286',
} as const;

export const BLUE_DICTIONARY = {
  azure: '#0078ff',
} as const;

export const COLOR_DICTIONARY = {
  contrast: CONTRAST_DICTIONARY,
  red: RED_DICTIONARY,
  green: GREEN_DICTIONARY,
  blue: BLUE_DICTIONARY,
} as const;

export const HELPER_COLOR_DICTIONARY = {
  primary: COLOR_DICTIONARY.contrast.black,
  secondary: COLOR_DICTIONARY.contrast.darkGrey,
  disable: COLOR_DICTIONARY.contrast.sonicSilver,
  inverse: COLOR_DICTIONARY.contrast.white,
  danger: COLOR_DICTIONARY.red.red,
  accent: COLOR_DICTIONARY.green.crayola,
  info: COLOR_DICTIONARY.blue.azure,
} as const;

export const FONT_SIZE_DICTIONARY = {
  lg: '16px',
  md: '14px',
  sm: '12px',
  xs: '11px',
} as const;

export const FONT_WEIGHT_DICTIONARY = {
  bold: 700,
  medium: 500,
  normal: 400,
} as const;

export const SPACING_SIZE_DICTIONARY = {
  '0': '0px',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '12': '12px',
  '16': '16px',
  '20': '20px',
  '24': '24px',
  '32': '32px',
  '40': '40px',
  '48': '48px',
  '64': '64px',
  '72': '72px',
} as const;

export const SHAPE_LIST = ['circle', 'square'] as const;
