import { View, StyleSheet } from 'react-native';
import Heading from '@components/base/Heading';
import DefaultText from '@components/base/DefaultText';
import BaseScreen from '@components/base/BaseScreen';
import Colors from '@constants/colors';

const Cart = () => {
  const cartItems = [];
  return (
    <BaseScreen backgroundColor={Colors.Grey}>
      <Heading name={'Cart'} />
      <View style={styles.container}>
        {cartItems.length > 0 ? (
          <View></View>
        ) : (
          <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center' }}>
            <DefaultText fontSize={'small'}>Cart is empty...</DefaultText>
          </View>
        )}
      </View>
    </BaseScreen>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
