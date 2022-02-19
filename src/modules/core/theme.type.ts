import {
  FontSizeType,
  FontWeightType,
  HelperColorType,
  ShapeType,
  SpacingType,
  ThemeType,
} from './theme';

export interface ThemedComponentProps {
  theme: ThemeType;
}

export interface MarginProps {
  /**
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
   */
  m?: SpacingType;
  mx?: SpacingType;
  my?: SpacingType;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
}

export interface PaddingProps {
  /**
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
   */
  p?: SpacingType;
  px?: SpacingType;
  py?: SpacingType;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
}

export interface HelperColorProps {
  /**
  @property $color (color)

  ```
  primary: #000000 COLOR_DICTIONARY.contrast.black; 
  secondary: #aaaaaa COLOR_DICTIONARY.contrast.darkGrey;
  inverse: #ffffff COLOR_DICTIONARY.contrast.white;
  danger: #ff0000 COLOR_DICTIONARY.red.red;
  info: #18a286 COLOR_DICTIONARY.blue.azure;
  accent: #0078ff COLOR_DICTIONARY.green.crayola;
  ```
  */
  $color?: HelperColorType;
}

export interface FontWeightProps {
  /**
  @property weight (font-weight)

  ```
    bold: 700,
    medium: 500,
    normal: 400,
  ```
 */
  weight?: FontWeightType;
}

export interface FontSizeProps {
  /**
  @property size (font-size)
  ```
    lg: '16px',
    md: '14px',
    sm: '12px',
    xs: '11px',
  ```
  */
  size?: FontSizeType;
}

export interface LineThroughProps {
  through?: boolean;
}

export interface TypographyProps
  extends ThemedComponentProps,
    MarginProps,
    PaddingProps,
    HelperColorProps,
    FontWeightProps,
    FontSizeProps,
    LineThroughProps {}

export interface BackgroundHelperColorProps {
  bgColor?: HelperColorType;
}

export interface ButtonShapeProps {
  shape?: ShapeType;
}

export interface BorderDisplayProps {
  withBorder?: boolean;
}

export interface SpacingProps {
  /**
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
   */
  spacing?: SpacingType;
}

export interface ButtonProps
  extends ThemedComponentProps,
    ButtonShapeProps,
    HelperColorProps,
    BackgroundHelperColorProps,
    BorderDisplayProps,
    SpacingProps {}
