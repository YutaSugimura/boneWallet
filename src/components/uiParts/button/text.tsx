import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../../../common';
import type { Color } from '../../../types/style';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  fontColor?: Color;
  fontSize?: number;
  fontWeight?: '400' | '700' | 'bold';
};

export const TextButton: React.VFC<Props> = ({
  label,
  onPress,
  disabled,
  fontColor,
  fontSize,
  fontWeight,
}) => {
  const textStyle = {
    color: fontColor ?? COLORS.black,
    fontSize: fontSize ?? 15,
    fontWeight: fontWeight ?? '400',
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.2} disabled={disabled}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};
