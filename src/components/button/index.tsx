import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Color } from '../../types/style';
import { COLORS, DEVICE_WIDTH } from '../../common';

type Props = {
  label: string;
  onPress: () => void;
  width?: number;
  height?: number;
  backgroundColor?: Color;
  borderWidth?: number;
  borderColor?: Color;
  borderRadius?: number;
  fontColor?: Color;
  fontSize?: number;
  fontWeight?: '400' | '700' | 'bold';
};

export const Button: React.VFC<Props> = ({
  label,
  onPress,
  width,
  height,
  backgroundColor,
  borderWidth,
  borderColor,
  borderRadius,
  fontColor,
  fontSize,
  fontWeight,
}) => {
  const buttonStyle = {
    width: width ?? DEVICE_WIDTH * 0.8,
    height: height ?? 60,
    backgroundColor: backgroundColor ?? COLORS.white,
    borderWidth: borderWidth ?? 1,
    borderColor: borderColor ?? COLORS.gray,
    borderRadius: borderRadius ?? 6,
  };

  const textStyle = {
    color: fontColor ?? COLORS.black,
    fontSize: fontSize ?? 15,
    fontWeight: fontWeight ?? '400',
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});