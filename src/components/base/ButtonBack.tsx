import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '@components/base/Icon';
import Colors from '@constants/colors';

interface ButtonBackProps {
  callback: () => void;
}

const ButtonBack = ({ callback }: ButtonBackProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => callback()}>
      <Icon name={'btnBack'} />
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 38,
    backgroundColor: Colors.White,
    borderRadius: 10,
  },
});
