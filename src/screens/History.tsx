import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Heading from '@components/base/Heading';
import DefaultText from '@components/base/DefaultText';
import BaseScreen from '@components/base/BaseScreen';
import { Colors } from '@constants/index';

const History = () => {
  const orderHistory = [];
  return (
    <BaseScreen>
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
