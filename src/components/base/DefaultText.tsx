import { Text, StyleSheet, TextStyle } from 'react-native';

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  textType?: 'regular' | 'bold' | 'light';
};

const DefaultText = ({ children, textType, style }: CustomTextProps) => {
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
    default:
      textStyle = styles.regular;
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
});

export default DefaultText;
