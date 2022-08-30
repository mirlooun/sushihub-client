import { View, TextInput, StyleSheet } from 'react-native';

import { DefaultText } from '@components/base';

import { Colors, FontSizes } from '@constants/index';

interface FormFieldProps {
  fieldName: string;
  isSecret?: boolean;
}

const FormField = ({ fieldName, isSecret }: FormFieldProps) => {
  return (
    <View style={styles.fieldContainer}>
      <DefaultText fontSize={'pre-medium'}>{fieldName}</DefaultText>
      <TextInput style={styles.innerContainer} secureTextEntry={isSecret ? true : false} />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 20,
    backgroundColor: Colors.White,
  },
  innerContainer: {
    padding: 10,
    backgroundColor: Colors.White,
    borderColor: Colors.Grey,
    borderWidth: 3,
    borderRadius: 6,
    fontSize: FontSizes.PreMedium,
  },
});
