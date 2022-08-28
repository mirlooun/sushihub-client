import Location from '@components/header/Location';
import Greeting from '@components/header/Greeting';
import SearchFood from '@components/header/SearchFood';
import { View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <>
      <Location />
      <View style={styles.container}>
        <Greeting />
      </View>
      <SearchFood />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
});
