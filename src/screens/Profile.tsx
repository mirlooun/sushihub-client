import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Heading, BaseScreen, Button } from '@components/base';
import UserField from '@components/profile/UserField';
import Version from '@components/profile/Version';

import { Colors, NavBarHeight } from '@constants/index';

import useAuth from '@context/userContext';
import { User } from '@models/User';

type EditableFields = 'firstName' | 'lastName' | 'address' | 'email';

export interface TextInputEvent {
  fieldName: string;
  value: string;
}

const Profile = () => {
  const [isEdited, setEdited] = useState(false);
  const { getUser, updateUser, removeUser } = useAuth();
  const [profile, setProfile] = useState(getUser() as User);

  const onUserChange = (event: TextInputEvent) => {
    const { fieldName, value } = event;
    const updatedProfile = { ...profile };
    updatedProfile[fieldName as EditableFields] = value;
    setProfile({ ...updatedProfile });
    setEdited(true);
  };

  const onSave = () => {
    updateUser(profile);
    setEdited(false);
  };

  return (
    <BaseScreen backgroundColor={Colors.White}>
      <Heading name={'Your Profile'} />
      <View style={styles.container}>
        <UserField
          title={'First name'}
          fieldName={'firstName'}
          value={profile.firstName}
          onChange={onUserChange}
          isEditable
        />
        <UserField
          title={'Last name'}
          fieldName={'lastName'}
          value={profile.lastName}
          onChange={onUserChange}
          isEditable
        />
        <UserField
          title={'Delivery address'}
          fieldName={'address'}
          value={profile.address}
          onChange={onUserChange}
          isEditable
        />
        <UserField title={'Phone number'} value={profile.phoneNumber} />
        {isEdited && (
          <Button
            title={'Save'}
            color={Colors.White}
            backgroundColor={Colors.Green}
            btnSize={'small'}
            onPress={() => onSave()}
          />
        )}
        <View style={styles.bottomContainer}>
          <Version />
          <Button
            title={'Log out'}
            color={Colors.White}
            backgroundColor={Colors.Coal}
            btnSize={'small'}
            onPress={() => removeUser()}
          />
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
