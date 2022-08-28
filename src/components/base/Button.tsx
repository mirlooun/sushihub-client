import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import DefaultText from '@components/base/DefaultText';

interface ButtonProps {
  title: string;
  color: string;
  backgroundColor: string;
  btnSize: ButtonSize;
  callback?: () => void | React.Dispatch<React.SetStateAction<any>>;
}

type ButtonSize = 'small' | 'large';

const Button = ({ title, color, backgroundColor, btnSize, callback }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, width: btnSize === 'small' ? 250 : 300 }]}
      onPress={() => (callback ? callback() : {})}
    >
      <DefaultText textType={'regular'} fontSize={'medium'} style={{ color }}>
        {title}
      </DefaultText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 33,
  },
});
