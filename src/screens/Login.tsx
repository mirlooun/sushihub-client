import { View, StyleSheet } from 'react-native';
import { Props } from '@navigation/WelcomeStack';

// components
import DefaultText from '@components/base/DefaultText';
import BaseScreen from '@components/base/BaseScreen';
import Colors from '@constants/colors';
import ButtonBack from '@components/base/ButtonBack';
import SvgComponent from '@components/welcome/SvgComponent';
import Form from '@components/form/Form';
import useAuth from '@context/userContext';

const mockToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6IiszNzI1MzA0NzkwNyIsImFkZHJlc3MiOm51bGwsImlhdCI6MTUxNjIzOTAyMn0.uk9JKMPKBfrRAmh8fziC3XPRnwje9npD7anC6gNzvrg';

const Login = ({ navigation }: Props) => {
  const { saveUser } = useAuth();

  return (
    <BaseScreen backgroundColor={Colors.Grey}>
      <SvgComponent name={'sushi-small'} screen={'Login'} style={[styles.absolute, styles.sushiSmall]} />
      <SvgComponent name={'sushi-big'} screen={'Login'} style={[styles.absolute, styles.sushiBig]} />
      <View style={styles.container}>
        <ButtonBack callback={() => navigation.goBack()} />
        <DefaultText fontSize={'ultra'} textType={'regular'} style={{ alignSelf: 'center', marginTop: 36 }}>
          Sign in
        </DefaultText>
        <Form
          fields={[{ name: 'Email or username' }, { name: 'Password', isSecret: true }]}
          btnTitle={'Sign in'}
          btnCallBack={() => saveUser(mockToken)}
        />
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
