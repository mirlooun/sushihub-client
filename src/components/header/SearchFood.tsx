import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from '@components/base/DefaultText';
import Search from '@components/header/Search';
import CategoryChoice from '@components/header/CategoryChoice';

const SearchFood = () => {
  return (
    <View style={styles.container}>
      <DefaultText fontSize={'big'}>What do you want to eat today?</DefaultText>
      <Search />
      <CategoryChoice />
    </View>
  );
};

export default SearchFood;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
