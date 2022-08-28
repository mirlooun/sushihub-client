import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';

interface BaseScreenProps {
  children: React.ReactNode;
}

const BaseScreen = ({ children }: BaseScreenProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default BaseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.Grey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
