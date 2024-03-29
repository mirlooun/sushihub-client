import { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Icon, DefaultText, Button } from '@components/base';
import AmountControls from '@components/menu-item-list/AmountControls';
import PriceTag from '@components/menu-item-list/PriceTag';

import Colors from '@constants/colors';
import { MenuItem } from '@models/MenuItem';
import useCart from '@context/cartContext';

interface MenuItemDetailsProps {
  menuItem: MenuItem;
  closeModal: () => void;
}

const MenuItemDetails = ({ menuItem, closeModal }: MenuItemDetailsProps) => {
  const [amount, changeAmout] = useState(1);
  const [isFavorite, changeFavorite] = useState(false);
  const { isInCart, addToCart, removeFromCart } = useCart();

  const handleAmoutChange = (action: 'add' | 'remove') => {
    if (action === 'add') {
      changeAmout((prev) => {
        if (prev > 50) return prev;
        return prev + 1;
      });
    } else {
      changeAmout((prev) => {
        if (prev === 1) return prev;
        return prev - 1;
      });
    }
  };

  const handleFavoriteChange = () => {
    changeFavorite((prev) => !prev);
  };

  const handleAddToCart = () => {
    if (isInCart(menuItem)) {
      removeFromCart(menuItem);
    } else {
      addToCart({ ...menuItem, amount });
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.upperContainer} onPress={() => closeModal()}></TouchableOpacity>
      <View style={styles.innerContainer}>
        <Image source={{ uri: menuItem.image }} style={styles.image} />
        <CloseButton closeModal={closeModal} />
        <LikeButton isFavorite={isFavorite} handleFavoriteChange={handleFavoriteChange} />
        <View style={styles.infoBox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ maxWidth: 260 }}>
              <DefaultText fontSize={'medium'} textType={'medium'} style={{ paddingBottom: 3 }}>
                {menuItem.description}
              </DefaultText>
              <PriceTag size={'medium'} {...menuItem} />
            </View>
            <AmountControls amount={amount} handleAmountChange={handleAmoutChange} />
          </View>
          <View style={styles.descriptionBox}>
            <DefaultText fontSize={'medium'} textType={'medium'} style={{ color: Colors.Coal }}>
              Description
            </DefaultText>
            <DefaultText fontSize={'small'} textType={'medium'} style={{ color: Colors.Coal, marginTop: 10 }}>
              {menuItem.description}
            </DefaultText>
          </View>
          <View style={styles.bottomContainer}>
            <Button
              onPress={() => handleAddToCart()}
              title={isInCart(menuItem) ? 'Remove from cart' : 'Add to cart'}
              color={Colors.White}
              backgroundColor={isInCart(menuItem) ? Colors.Coal : Colors.Salmon}
              btnSize={'small'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const CloseButton = (props: { closeModal: () => void }) => {
  return (
    <TouchableOpacity onPress={() => props.closeModal()} style={styles.closeButton}>
      <Icon name={'closeBtn'} />
    </TouchableOpacity>
  );
};

const LikeButton = (props: { isFavorite: boolean; handleFavoriteChange: () => void }) => {
  return (
    <TouchableOpacity onPress={() => props.handleFavoriteChange()} style={styles.likeButton}>
      <Icon name={props.isFavorite ? 'likeBtn' : 'unLikeBtn'} />
    </TouchableOpacity>
  );
};

export default MenuItemDetails;

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: Colors.Black,
    height: '100%',
    opacity: 0.3,
  },
  innerContainer: {
    position: 'absolute',
    marginTop: 150,
    height: '100%',
    width: '100%',
    paddingHorizontal: 17,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  closeButton: {
    position: 'absolute',
    padding: 17,
  },
  likeButton: {
    position: 'absolute',
    padding: 17,
    right: 0,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 230,
  },
  infoBox: {
    paddingVertical: 10,
    height: 350,
  },
  controls: {
    minWidth: 80,
    flexDirection: 'column',
  },
  innerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionBox: {
    paddingTop: 20,
  },
  bottomContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 34,
  },
});
