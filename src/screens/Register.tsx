import { View, StyleSheet } from 'react-native';
import DefaultText from '@components/base/DefaultText';
import { Props } from '@navigation/WelcomeStack';
import BaseScreen from '@components/base/BaseScreen';
import ButtonBack from '@components/base/ButtonBack';
import Form from '@components/form/Form';
import SvgComponent from '@components/welcome/SvgComponent';
import Colors from '@constants/colors';

const Register = ({ navigation }: Props) => {
  return (
    <BaseScreen backgroundColor={Colors.Grey} transparentStatusbar={true}>
      <SvgComponent name={'sushi-small'} screen={'Register'} style={[styles.absolute, styles.sushiSmall]} />
      <SvgComponent name={'sushi-big'} screen={'Register'} style={[styles.absolute, styles.sushiBig]} />
      <View style={styles.container}>
        <ButtonBack callback={() => navigation.goBack()} />
        <DefaultText fontSize={'ultra'} textType={'regular'} style={{ alignSelf: 'center', marginTop: 36 }}>
          Sign up
        </DefaultText>
        <Form
          fields={[{ name: 'First name' }, { name: 'Last name' }, { name: 'Email' }, { name: 'Password' }]}
          btnTitle={'Create account'}
        />
      </View>
    </BaseScreen>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  absolute: {
    position: 'absolute',
  },
  sushiSmall: {
    bottom: -80,
    left: -60,
  },
  sushiBig: {
    top: -240,
    right: -180,
  },
});
