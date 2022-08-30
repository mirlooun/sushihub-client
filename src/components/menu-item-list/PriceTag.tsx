import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from '@components/base/DefaultText';
import { formatCurrency } from '@utils/priceFormatter';
import Colors from '@constants/colors';

interface PriceTagProps {
  price: number;
  discountedPrice: number | null;
  size: 'small' | 'medium';
  isCartView?: boolean;
}

const PriceTag = ({ price, discountedPrice, size, isCartView }: PriceTagProps) => {
  return discountedPrice ? (
    <View style={styles.priceWrapper}>
      {!isCartView && (
        <DefaultText
          fontSize={size}
          style={[styles.priceTagRegularDashed, styles.priceTag, { marginRight: size === 'medium' ? 7 : 3 }]}
        >
          {formatCurrency(price)}
        </DefaultText>
      )}
      <DefaultText fontSize={size} style={[styles.priceTagDiscounted, styles.priceTag]}>
        {formatCurrency(discountedPrice)}
      </DefaultText>
    </View>
  ) : (
    <View style={styles.priceWrapper}>
      <DefaultText fontSize={size} style={[styles.priceTagRegular, styles.priceTag]}>
        {formatCurrency(price)}
      </DefaultText>
    </View>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
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
