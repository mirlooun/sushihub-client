import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from '@components/base/DefaultText';
import Search from '@components/header/Search';

const SearchFood = () => {
  return (
    <View style={styles.container}>
      <DefaultText fontSize={'big'}>What do you want to eat today?</DefaultText>
      <Search />
    </View>
  );
};

export default SearchFood;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
