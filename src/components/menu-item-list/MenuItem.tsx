import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { MenuItem as MenuItemModel } from '@models/MenuItem';
import DefaultText from '@components/base/DefaultText';
import { Colors } from '@constants/index';
import { formatCurrency } from '@utils/priceFormatter';

interface MenuItemProps {
  menuItem: MenuItemModel;
}

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <TouchableOpacity key={menuItem.id}>
      <View style={styles.container}>
        <Image source={{ uri: menuItem.image }} style={styles.image} />
        <Description {...menuItem} />
        {/* <CartOptions /> */}
      </View>
    </TouchableOpacity>
  );
};

const Description = (props: MenuItemModel) => {
  const { title, description } = props;
  return (
    <View style={styles.description}>
      <View>
        <DefaultText fontSize={'medium'} style={{ color: Colors.Green }}>
          {title}
        </DefaultText>
        <DefaultText fontSize={'smallest'}>{description}</DefaultText>
      </View>
      <PriceTag {...props} />
    </View>
  );
};

interface PriceTagProps {
  price: number;
  discountedPrice: number | null;
}

const PriceTag = ({ price, discountedPrice }: PriceTagProps) => {
  return discountedPrice ? (
    <View style={styles.priceWrapper}>
      <DefaultText fontSize={'small'} style={[styles.priceTagRegularDashed, styles.priceTag]}>
        {formatCurrency(price)}
      </DefaultText>
      <DefaultText fontSize={'small'} style={[styles.priceTagDiscounted, styles.priceTag, { marginLeft: 3 }]}>
        {formatCurrency(discountedPrice)}
      </DefaultText>
    </View>
  ) : (
    <View style={styles.priceWrapper}>
      <DefaultText fontSize={'small'} style={[styles.priceTagRegular, styles.priceTag]}>
        {formatCurrency(price)}
      </DefaultText>
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
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 130,
    height: '100%',
    alignSelf: 'center',
  },
  priceWrapper: {
    flexDirection: 'row',
  },
  priceTag: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  priceTagRegular: {
    color: Colors.Coal,
    backgroundColor: Colors.LightGreen,
  },
  priceTagRegularDashed: {
    color: Colors.DarkGrey,
    backgroundColor: Colors.LightGreen,
    textDecorationLine: 'line-through',
  },
  priceTagDiscounted: {
    color: Colors.White,
    backgroundColor: Colors.Red,
  },
  cartOptionsWrapper: {
    flexDirection: 'row',
  },
});
