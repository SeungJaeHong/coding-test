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

export const FONT_SIZE_DICTIONARY = {
  lg: '16px',
  md: '14px',
  sm: '12px',
  xs: '11px',
} as const;

export const HELPER_COLOR_DICTIONARY = {
  primary: COLOR_DICTIONARY.contrast.black,
  secondary: COLOR_DICTIONARY.contrast.darkGrey,
  inverse: COLOR_DICTIONARY.contrast.white,
  danger: COLOR_DICTIONARY.red.red,
  info: COLOR_DICTIONARY.green.crayola,
  accent: COLOR_DICTIONARY.blue.azure,
} as const;
