import React from 'react';
import { View, StyleSheet } from 'react-native';
import Heading from '@components/base/Heading';
import BaseScreen from '@components/base/BaseScreen';
import UserField from '@components/profile/UserField';
import Colors from '@constants/colors';
import Button from '@components/base/Button';
import Version from '@components/profile/Version';
import { NavBarHeight } from '@constants/index';

const Profile = () => {
  const user = {
    firstName: 'Denis',
    lastName: 'Bogomolov',
    address: 'Õismäe tee 8, 30',
    phoneNumber: '+352 56133722',
  };

  return (
    <BaseScreen backgroundColor={Colors.White}>
      <Heading name={'Your Profile'} />
      <View style={styles.container}>
        <UserField fieldName={'First name'} value={user.firstName} isEditable />
        <UserField fieldName={'Last name'} value={user.lastName} isEditable />
        <UserField fieldName={'Delivery address'} value={user.address} isEditable />
        <UserField fieldName={'Phone number'} value={user.phoneNumber} />
        <View style={styles.bottomContainer}>
          <Version />
          <Button title={'Log out'} color={Colors.White} backgroundColor={Colors.Coal} btnSize={'small'} />
        </View>
      </View>
    </BaseScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: NavBarHeight + 10,
  },
});
