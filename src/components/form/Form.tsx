import { View, StyleSheet } from 'react-native';

import Button from '@components/base/Button';
import FormField from '@components/form/FormField';

import Colors from '@constants/colors';

interface FormProps {
  fields: { name: string; isSecret?: boolean }[];
  btnTitle: string;
  btnCallBack: () => void;
}

const Form = ({ fields, btnTitle, btnCallBack }: FormProps) => {
  return (
    <View style={styles.container}>
      {fields.map((field, index) => (
        <FormField key={index} fieldName={field.name} isSecret={field.isSecret} />
      ))}
      <Button
        title={btnTitle}
        color={Colors.White}
        backgroundColor={Colors.Salmon}
        btnSize={'small'}
        onPress={() => btnCallBack()}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 35,
  },
});
