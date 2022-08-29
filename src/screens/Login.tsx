import { View, StyleSheet } from 'react-native';
import { Props } from '@navigation/WelcomeStack';

// components
import DefaultText from '@components/base/DefaultText';
import BaseScreen from '@components/base/BaseScreen';
import Colors from '@constants/colors';
import ButtonBack from '@components/base/ButtonBack';
import SvgComponent from '@components/welcome/SvgComponent';
import Form from '@components/form/Form';

const Login = ({ navigation }: Props) => {
  return (
    <BaseScreen backgroundColor={Colors.Grey}>
      <SvgComponent name={'sushi-small'} screen={'Login'} style={[styles.absolute, styles.sushiSmall]} />
      <SvgComponent name={'sushi-big'} screen={'Login'} style={[styles.absolute, styles.sushiBig]} />
      <View style={styles.container}>
        <ButtonBack callback={() => navigation.goBack()} />
        <DefaultText fontSize={'ultra'} textType={'regular'} style={{ alignSelf: 'center', marginTop: 36 }}>
          Sign in
        </DefaultText>
        <Form fields={[{ name: 'Email or username' }, { name: 'Password', isSecret: true }]} btnTitle={'Sign in'} />
      </View>
    </BaseScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  absolute: {
    position: 'absolute',
  },
  sushiSmall: {
    top: '10%',
    right: -45,
  },
  sushiBig: {
    bottom: -220,
    left: -150,
  },
});
