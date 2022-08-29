import React from 'react';
import { TextInput, View, StyleSheet, Keyboard } from 'react-native';
import DefaultText from '@components/base/DefaultText';
import FontSizes from '@constants/fontSizes';
import Colors from '@constants/colors';
import { TextInputEvent } from '@screens/Profile';

interface UserFieldProps {
  title: string;
  value: string | null;
  fieldName?: string;
  isEditable?: boolean;
  onChange?: (event: TextInputEvent) => void;
}

const UserField = ({ title, fieldName, value, isEditable, onChange }: UserFieldProps) => {
  return (
    <View style={styles.container}>
      <DefaultText fontSize={'pre-medium'} style={styles.fontTranparent}>
        {title}
      </DefaultText>
      {isEditable ? (
        <TextInput
          value={value || ''}
          style={[{ fontFamily: 'Poppins-Regular', fontSize: FontSizes.PreMedium, color: Colors.Black }]}
          onChangeText={(value) => onChange && fieldName && onChange({ fieldName, value })}
          onSubmitEditing={Keyboard.dismiss}
        />
      ) : (
        <DefaultText fontSize={'pre-medium'} style={!isEditable ? { opacity: 0.3 } : {}}>
          {value}
        </DefaultText>
      )}
    </View>
  );
};

export default UserField;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: Colors.Grey,
  },
  fontTranparent: {
    opacity: 0.5,
  },
});
