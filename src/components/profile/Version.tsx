import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import DefaultText from '@components/base/DefaultText';

const Version = () => {
  return (
    <View style={styles.container}>
      <DefaultText>{`Ver ${Constants.expoVersion}`}</DefaultText>
    </View>
  );
};

export default Version;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
