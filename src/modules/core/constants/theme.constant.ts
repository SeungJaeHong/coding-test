export const COLOR_DICTIONARY = {
  black: '#000000',
  grey: '#aaaaaa',
  white: '#ffffff',
  red: '#ff0000',
  green: '#18a286',
} as const;

export const FONT_SIZE_DICTIONARY = {
  lg: '16px',
  md: '14px',
  sm: '12px',
  xs: '11px',
} as const;

export const HELPER_COLOR_DICTIONARY = {
  primary: COLOR_DICTIONARY.black,
  secondary: COLOR_DICTIONARY.grey,
  inverse: COLOR_DICTIONARY.white,
  danger: COLOR_DICTIONARY.red,
  info: COLOR_DICTIONARY.green,
} as const;
