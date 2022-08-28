import React from 'react';
import DefaultText from '@components/base/DefaultText';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Colors from '@constants/colors';
import Icon from '@components/base/Icon';

const Location = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Icon name={'location'} />
        </View>
        <DefaultText textType={'medium'} fontSize={'small'}>
          Akadeemia tee 7
        </DefaultText>
      </View>
    </TouchableOpacity>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    width: 184,
    height: 34,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.White,
  },
  iconWrapper: {
    marginRight: 5,
  },
});
