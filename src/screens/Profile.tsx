import React from 'react';
import { View, StyleSheet } from 'react-native';
import Heading from '@components/base/Heading';
import BaseScreen from '@components/base/BaseScreen';
import UserField from '@components/profile/UserField';
import Colors from '@constants/colors';

const Profile = () => {
  const user = {
    firstName: 'Denis',
    lastName: 'Bogomolov',
    address: 'Õismäetee 8, 30',
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
      </View>
    </BaseScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
