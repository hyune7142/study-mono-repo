import { DefaultTheme } from 'styled-components';
import { COLOR_PALETTES } from './constants';

export const blue: DefaultTheme = {
  primary: {
    description: 'Blue 베이스 테마의 Primary Color(주색) 입니다.',
    main: COLOR_PALETTES.primary_blue[6],
    sub: COLOR_PALETTES.primary_blue[5],
  },
};

export const mint: DefaultTheme = {
  primary: {
    description: 'Mint 베이스 테마의 Primary Color(주색) 입니다.',
    main: COLOR_PALETTES.primary_mint[6],
    sub: COLOR_PALETTES.primary_mint[5],
  },
};

export const light: DefaultTheme = {
  status: {
    description:
      '상태를 표현할때 사용되는 색상입니다. 대체로 경보상태와 같은 정보를 표현할때 주로 사용되는 컬러입니다.',
    normal: COLOR_PALETTES.green[7],
    info: COLOR_PALETTES.blue[10],
    suspicous: COLOR_PALETTES.yellow[7],
    warning: COLOR_PALETTES.orange[10],
    critical: COLOR_PALETTES.red[7],
  },
  border: {
    description:
      '테두리에 사용되는 컬러정보입니다. background 컬러에 비해 진한 컬러감을 가지고 있습니다. 때에 따라 해당 컬러를 배경으로 사용할 때도 있습니다.',
    default: COLOR_PALETTES.grayscale.gray4,
    success: COLOR_PALETTES.green[7],
    info: COLOR_PALETTES.blue[7],
    warning: COLOR_PALETTES.yellow[7],
    error: COLOR_PALETTES.red[5],
    danger: COLOR_PALETTES.red[6],
  },
  background: {
    description:
      '배경화면으로 사용되는 컬러입니다. border 컬러에 비해 연한 컬러감을 가지고 있습니다. 때에 따라 해당 컬러를 테두리로 사용하는 경우도 있습니다.',
    primary: COLOR_PALETTES.grayscale.white,
    secondary: COLOR_PALETTES.primary_blue[1],
    neutral: COLOR_PALETTES.secondary[1],
    disabled: COLOR_PALETTES.grayscale.gray2,
    selection: COLOR_PALETTES.grayscale.gray2,
    rail: COLOR_PALETTES.grayscale.gray5,
    tooltip: COLOR_PALETTES.grayscale.gray9,
    success: COLOR_PALETTES.green[1],
    info: COLOR_PALETTES.blue[1],
    warning: COLOR_PALETTES.yellow[1],
    error: COLOR_PALETTES.red[1],
    danger: COLOR_PALETTES.red[4],
  },
  grayscale: {
    description: '여러상황에서 다양하게 사용되는 컬러입니다.',
    white: COLOR_PALETTES.grayscale.white,
    gray1: COLOR_PALETTES.grayscale.gray1,
    gray2: COLOR_PALETTES.grayscale.gray2,
    gray3: COLOR_PALETTES.grayscale.gray3,
    gray4: COLOR_PALETTES.grayscale.gray4,
    gray5: COLOR_PALETTES.grayscale.gray5,
    gray6: COLOR_PALETTES.grayscale.gray6,
    gray7: COLOR_PALETTES.grayscale.gray7,
    gray8: COLOR_PALETTES.grayscale.gray8,
    gray9: COLOR_PALETTES.grayscale.gray9,
    black: COLOR_PALETTES.grayscale.black,
  },
  typography: {
    description: '테마에서의 폰트색상입니다.',
    default: COLOR_PALETTES.typography.gray9,
    reversal: COLOR_PALETTES.typography.white,
    secondary: COLOR_PALETTES.typography.gray5,
    neutral: COLOR_PALETTES.secondary[1],
    disabled: COLOR_PALETTES.typography.gray6,
    normal: COLOR_PALETTES.green[7],
    info: COLOR_PALETTES.blue[10],
    suspicous: COLOR_PALETTES.yellow[7],
    warning: COLOR_PALETTES.orange[10],
    danger: COLOR_PALETTES.red[6],
    critical: COLOR_PALETTES.red[7],
  },
};

export const dark: DefaultTheme = {
  status: {
    description:
      '상태를 표현할때 사용되는 색상입니다. 대체로 경보상태와 같은 정보를 표현할때 주로 사용되는 컬러입니다.',
    normal: COLOR_PALETTES.green[7],
    info: COLOR_PALETTES.blue[10],
    suspicous: COLOR_PALETTES.yellow[7],
    warning: COLOR_PALETTES.orange[10],
    critical: COLOR_PALETTES.red[7],
  },
  border: {
    description:
      '테두리에 사용되는 컬러정보입니다. background 컬러에 비해 진한 컬러감을 가지고 있습니다. 때에 따라 해당 컬러를 배경으로 사용할 때도 있습니다.',
    default: COLOR_PALETTES.secondary[8],
    success: COLOR_PALETTES.green[7],
    info: COLOR_PALETTES.blue[7],
    warning: COLOR_PALETTES.yellow[7],
    error: COLOR_PALETTES.red[5],
    danger: COLOR_PALETTES.red[6],
  },
  background: {
    description:
      '배경화면으로 사용되는 컬러입니다. border 컬러에 비해 연한 컬러감을 가지고 있습니다. 때에 따라 해당 컬러를 테두리로 사용하는 경우도 있습니다.',
    primary: COLOR_PALETTES.secondary[10],
    secondary: COLOR_PALETTES.primary_blue[1],
    neutral: COLOR_PALETTES.secondary[9],
    disabled: COLOR_PALETTES.secondary[8],
    selection: COLOR_PALETTES.secondary[9],
    rail: COLOR_PALETTES.secondary[8],
    tooltip: COLOR_PALETTES.secondary[8],
    success: COLOR_PALETTES.green[1],
    info: COLOR_PALETTES.blue[1],
    warning: COLOR_PALETTES.yellow[1],
    error: COLOR_PALETTES.red[1],
    danger: COLOR_PALETTES.red[4],
  },
  grayscale: {
    description: '여러상황에서 다양하게 사용되는 컬러입니다.',
    white: COLOR_PALETTES.grayscale.white,
    gray1: COLOR_PALETTES.grayscale.gray1,
    gray2: COLOR_PALETTES.grayscale.gray2,
    gray3: COLOR_PALETTES.grayscale.gray3,
    gray4: COLOR_PALETTES.grayscale.gray4,
    gray5: COLOR_PALETTES.grayscale.gray5,
    gray6: COLOR_PALETTES.grayscale.gray6,
    gray7: COLOR_PALETTES.grayscale.gray7,
    gray8: COLOR_PALETTES.grayscale.gray8,
    gray9: COLOR_PALETTES.grayscale.gray9,
    black: COLOR_PALETTES.grayscale.black,
  },
  typography: {
    description: '테마에서의 폰트색상입니다.',
    default: COLOR_PALETTES.typography.white,
    reversal: COLOR_PALETTES.typography.gray9,
    secondary: COLOR_PALETTES.typography.gray5,
    neutral: COLOR_PALETTES.secondary[6],
    disabled: COLOR_PALETTES.typography.gray6,
    normal: COLOR_PALETTES.green[7],
    info: COLOR_PALETTES.blue[10],
    suspicous: COLOR_PALETTES.yellow[7],
    warning: COLOR_PALETTES.orange[10],
    danger: COLOR_PALETTES.red[6],
    critical: COLOR_PALETTES.red[7],
  },
};

export const light_blue: DefaultTheme = {
  name: 'lightBlue',
  ...blue,
  ...light,
};

export const dark_blue: DefaultTheme = {
  name: 'darkBlue',
  ...blue,
  ...dark,
};

export const light_mint: DefaultTheme = {
  name: 'lightMint',
  ...mint,
  ...light,
};

export const dark_mint: DefaultTheme = {
  name: 'darkMint',
  ...mint,
  ...dark,
};

export default {
  darkBlue: dark_blue,
  lightBlue: light_blue,
  darkMint: dark_mint,
  lightMint: light_mint,
};
