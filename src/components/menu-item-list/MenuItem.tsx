import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

import { DefaultText, Icon } from '@components/base';
import PriceTag from '@components/menu-item-list/PriceTag';
import AmountControls from '@components/menu-item-list/AmountControls';

import { Colors } from '@constants/index';
import { MenuItem as MenuItemModel } from '@models/MenuItem';
import useCart from '@context/cartContext';
import { usePromptModal } from '@hooks/usePromptModal';

interface MenuItemProps {
  menuItem: MenuItemModel;
  isCartView?: boolean;
  handleModalOpen?: (menuItem: MenuItemModel) => void;
}

const MenuItem = ({ menuItem, handleModalOpen, isCartView }: MenuItemProps) => {
  const { removeFromCart, updateAmount } = useCart();

  const handleAmoutChange = (action: 'add' | 'remove') => {
    updateAmount(menuItem, action);
  };

  const handleRemove = () => {
    removeFromCart(menuItem);
  };

  const { handlePromptModalOpen, PromptModal } = usePromptModal({ onAgree: handleRemove });

  return (
    <TouchableOpacity key={menuItem.id} onPress={() => handleModalOpen && handleModalOpen(menuItem)}>
      <View
        style={[
          styles.container,
          {
            justifyContent: 'space-evenly',
          },
        ]}
      >
        <Image source={{ uri: menuItem.image }} style={styles.image} />
        <View style={styles.description}>
          <Description {...menuItem} />
          <PriceTag size={'small'} {...menuItem} isCartView={isCartView} />
        </View>
        {isCartView && (
          <>
            <View style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <AmountControls amount={menuItem.amount as number} handleAmountChange={handleAmoutChange} />
              <TouchableOpacity onPress={handlePromptModalOpen}>
                <Icon name={'trashBin'} />
              </TouchableOpacity>
            </View>
            <PromptModal />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const Description = (props: MenuItemModel) => {
  const { title, description } = props;
  return (
    <View>
      <DefaultText fontSize={'medium'} style={{ color: Colors.Green }}>
        {title}
      </DefaultText>
      <DefaultText fontSize={'smallest'}>{description}</DefaultText>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    backgroundColor: Colors.White,
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 110,
  },
  image: {
    width: 130,
    height: '100%',
    alignSelf: 'center',
  },
  cartOptionsWrapper: {
    flexDirection: 'row',
  },
});
