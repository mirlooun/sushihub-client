import { View, StyleSheet } from 'react-native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

import Colors from '@constants/colors';
import { BaseScreen, DefaultText, Heading } from '@components/base';

const History = () => {
  const orderHistory = [];
  return (
    <BaseScreen backgroundColor={Colors.Grey}>
      <Heading name={'History'} />
      <View style={styles.container}>
        {orderHistory.length > 0 ? (
          <View></View>
        ) : (
          <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center' }}>
            <DefaultText fontSize={'small'}>Order history is empty...</DefaultText>
          </View>
        )}
      </View>
      <ExpoStatusBar style="auto" backgroundColor={Colors.Grey} />
    </BaseScreen>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
