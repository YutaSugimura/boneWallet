import { Dimensions, Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

const device = Dimensions.get('screen');

export const DEVICE_WIDTH = device.width;
export const DEVICE_HEIGHT = device.height;

export const COLORS = {
  white: '#FFF',
  black: 'rgba(0, 0, 0, 0.87)',
  gray: '#CCC',
  red: '#f43b47',
  blue: '#4facfe',
} as const;
