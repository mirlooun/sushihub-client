import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Location from '@components/header/Location';
import Colors from '@constants/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Location />
      </View>
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
