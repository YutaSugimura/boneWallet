import { COLORS } from '../common';
import { valueOf } from './common';

type ColorMap = typeof COLORS;
export type Color = valueOf<ColorMap>;
