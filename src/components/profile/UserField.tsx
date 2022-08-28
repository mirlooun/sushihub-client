import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import DefaultText from '@components/base/DefaultText';
import FontSizes from '@constants/fontSizes';
import Colors from '@constants/colors';

interface UserFieldProps {
  fieldName: string;
  value: string;
  isEditable?: boolean;
}

const UserField = ({ fieldName, value, isEditable }: UserFieldProps) => {
  return (
    <View style={styles.container}>
      <DefaultText fontSize={'pre-medium'} style={styles.fontTranparent}>
        {fieldName}
      </DefaultText>
      {isEditable ? (
        <TextInput
          value={value}
          style={[{ fontFamily: 'Poppins-Regular', fontSize: FontSizes.PreMedium, color: Colors.Black }]}
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
