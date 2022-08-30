import { View, StyleSheet } from 'react-native';

import Location from '@components/header/Location';
import Greeting from '@components/header/Greeting';
import SearchFood from '@components/header/SearchFood';

const Header = () => {
  return (
    <>
      <Location />
      <View style={styles.container}>
        <Greeting />
        <SearchFood />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
