import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Header from '@components/header/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ExpoStatusBar style="auto" />
    </View>
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
