import { View, TextInput, StyleSheet } from 'react-native';
import { Colors, FontSizes } from '@constants/index';
import Icon from '@components/base/Icon';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon name={'search'} />
      </View>
      <TextInput placeholder={'Search food...'} style={styles.text} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
  },
  iconWrapper: {
    marginHorizontal: 5,
  },
  text: {
    width: '100%',
    fontSize: FontSizes.Small,
    fontFamily: 'Poppins-Regular',
  },
});
