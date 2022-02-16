const PREFIX_DICTIONARY = {
  ICON: '/assets/images/icons/',
} as const;

export const ICON_DICTIONARY = {
  LOGO: PREFIX_DICTIONARY.ICON + 'logo_musinsa.svg',
  SEARCH: PREFIX_DICTIONARY.ICON + 'search.svg',
  CLOSE: PREFIX_DICTIONARY.ICON + 'close.svg',
  REFRESH: PREFIX_DICTIONARY.ICON + 'refresh.svg',
  EMPTY: PREFIX_DICTIONARY.ICON + 'empty.svg',
} as const;
