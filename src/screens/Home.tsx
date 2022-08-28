import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Header from '@components/header/Header';
import MenuItemList from '@components/menu-item-list/MenuItemList';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryChoice from '@components/header/CategoryChoice';

const Home = () => {
  return (
    <ScrollView stickyHeaderIndices={[1]} style={styles.container}>
      <Header />
      <CategoryChoice />
      <MenuItemList />
      <ExpoStatusBar style="auto" backgroundColor={Colors.Grey} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.Grey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
