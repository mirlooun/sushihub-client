import { View, StyleSheet } from 'react-native';

import { Heading, DefaultText, BaseScreen } from '@components/base';
import MenuItem from '@components/menu-item-list/MenuItem';
import TotalContainer from '@components/cart/TotalContainer';

import Colors from '@constants/colors';

import useCart from '@context/cartContext';

import { useMenuItemDetailsModal } from '@hooks/useMenuItemDetailsModal';

const Cart = () => {
  const { cartItems, total } = useCart();
  const { handleModalOpen, MenuItemDetailsModal } = useMenuItemDetailsModal();

  return (
    <>
      <BaseScreen backgroundColor={Colors.Grey}>
        <Heading name={'Cart'} />
        <View style={cartStyles.container}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((menuItem) => (
                <MenuItem key={menuItem.id} menuItem={menuItem} handleModalOpen={handleModalOpen} isCartView />
              ))}
            </>
          ) : (
            <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center' }}>
              <DefaultText fontSize={'small'}>Cart is empty...</DefaultText>
            </View>
          )}
        </View>
        <MenuItemDetailsModal />
      </BaseScreen>
      {cartItems.length > 0 && <TotalContainer total={total} />}
    </>
  );
};

export default Cart;

const cartStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
