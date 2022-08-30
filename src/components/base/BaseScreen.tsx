import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

import Colors from '@constants/colors';

interface BaseScreenProps {
  backgroundColor: string;
  transparentStatusbar?: boolean;
  children: React.ReactNode;
}

const BaseScreen = ({ children, backgroundColor, transparentStatusbar }: BaseScreenProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {children}
      <ExpoStatusBar style="auto" translucent={transparentStatusbar} backgroundColor={backgroundColor} />
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
