import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

interface BaseScreenProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const BaseScreen = ({ children, backgroundColor }: BaseScreenProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {children}
      <ExpoStatusBar style="auto" backgroundColor={backgroundColor} />
    </View>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: Colors.LightGrey,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
