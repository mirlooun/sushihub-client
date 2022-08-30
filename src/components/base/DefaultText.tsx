import { Text, StyleSheet, TextStyle } from 'react-native';

import { FontSizes } from '@constants/index';

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  textType?: 'regular' | 'bold' | 'light' | 'medium';
  fontSize?: 'smallest' | 'small' | 'medium' | 'pre-big' | 'big' | 'pre-medium' | 'ultra';
};

const DefaultText = ({ children, textType = 'regular', fontSize = 'medium', style }: CustomTextProps) => {
  let textStyle = {};
  switch (textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'light':
      textStyle = styles.light;
      break;
    case 'medium':
      textStyle = styles.medium;
      break;
    default:
      textStyle = styles.regular;
      break;
  }

  switch (fontSize) {
    case 'small':
      textStyle = { ...textStyle, fontSize: FontSizes.Small };
      break;
    case 'medium':
      textStyle = { ...textStyle, fontSize: FontSizes.Medium };
      break;
    case 'pre-big':
      textStyle = { ...textStyle, fontSize: FontSizes.PreBig };
      break;
    case 'big':
      textStyle = { ...textStyle, fontSize: FontSizes.Big };
      break;
    case 'smallest':
      textStyle = { ...textStyle, fontSize: FontSizes.Smallest };
      break;
    case 'pre-medium':
      textStyle = { ...textStyle, fontSize: FontSizes.PreMedium };
      break;
    case 'ultra':
      textStyle = { ...textStyle, fontSize: FontSizes.Ultra };
      break;
  }

  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;

  return <Text style={[textStyle, { ...passedStyles }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Light',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
});

export default DefaultText;
