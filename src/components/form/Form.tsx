import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '@constants/colors';
import Button from '@components/base/Button';
import DefaultText from '@components/base/DefaultText';
import FontSizes from '@constants/fontSizes';

interface FormProps {
  fields: { name: string; isSecret?: boolean }[];
  btnTitle: string;
}

const Form = ({ fields, btnTitle }: FormProps) => {
  return (
    <View style={formStyles.container}>
      {fields.map((field, index) => (
        <FormField key={index} fieldName={field.name} isSecret={field.isSecret} />
      ))}
      <Button title={btnTitle} color={Colors.White} backgroundColor={Colors.Salmon} btnSize={'small'} />
    </View>
  );
};

interface FormFieldProps {
  fieldName: string;
  isSecret?: boolean;
}

const FormField = ({ fieldName, isSecret }: FormFieldProps) => {
  return (
    <View style={formStyles.fieldContainer}>
      <DefaultText fontSize={'pre-medium'}>{fieldName}</DefaultText>
      <TextInput style={formStyles.innerContainer} secureTextEntry={isSecret ? true : false} />
    </View>
  );
};

export default Form;

const formStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 35,
  },
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
