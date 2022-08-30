import { View, StyleSheet } from 'react-native';
import Heading from '@components/base/Heading';
import DefaultText from '@components/base/DefaultText';
import BaseScreen from '@components/base/BaseScreen';
import Colors from '@constants/colors';
import useCart from '@context/cartContext';
import MenuItem from '@components/menu-item-list/MenuItem';
import { NavBarHeight } from '@constants/navBarHeight';
import { formatCurrency } from '@utils/priceFormatter';
import Button from '@components/base/Button';
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

interface TotalContainerProps {
  total: number;
}

const TotalContainer = ({ total }: TotalContainerProps) => {
  const formattedTotal = formatCurrency(total);
  return (
    <View style={totalContainerStyles.container}>
      <View style={totalContainerStyles.textWrapper}>
        <DefaultText fontSize={'medium'} style={{ color: Colors.Coal }}>
          Subtotal
        </DefaultText>
        <DefaultText fontSize={'medium'} style={{ color: Colors.Coal }}>
          {formattedTotal}
        </DefaultText>
      </View>
      <View style={totalContainerStyles.dash}></View>
      <View style={[totalContainerStyles.textWrapper, { marginBottom: 10 }]}>
        <DefaultText fontSize={'big'}>Total</DefaultText>
        <DefaultText fontSize={'big'} style={{ color: Colors.Coal }}>
          {formattedTotal}
        </DefaultText>
      </View>
      <Button title={'Order'} color={Colors.White} backgroundColor={Colors.Salmon} btnSize={'small'} />
    </View>
  );
};

const totalContainerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: Colors.White,
    height: 210,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: NavBarHeight - 10,
  },
  textWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dash: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.Coal,
    marginVertical: 10,
  },
});
