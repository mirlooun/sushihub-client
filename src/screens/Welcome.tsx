import { View, StyleSheet } from 'react-native';

import { BaseScreen, Button } from '@components/base';
import SvgComponent from '@components/welcome/SvgComponent';

import Colors from '@constants/colors';

import { Props } from '@navigation/WelcomeStack';

const Welcome = ({ navigation }: Props) => {
  return (
    <BaseScreen backgroundColor={Colors.Grey}>
      <SvgComponent
        name={'title'}
        screen={'Welcome'}
        style={[{ width: 186, height: 107 }, styles.container, styles.title]}
      />
      <SvgComponent
        name={'sushi-small'}
        screen={'Welcome'}
        style={[{ width: 166, height: 166 }, styles.container, styles.sushiSmall]}
      />
      <SvgComponent
        name={'sushi-medium'}
        screen={'Welcome'}
        style={[{ width: 224, height: 224 }, styles.container, styles.sushiMedium]}
      />
      <SvgComponent
        name={'sushi-big'}
        screen={'Welcome'}
        style={[{ width: 370, height: 370 }, styles.container, styles.sushiBig]}
      />
      <View style={{ position: 'absolute', bottom: '21%', alignSelf: 'center' }}>
        <View style={{ marginBottom: 20 }}>
          <Button
            title={'Log in'}
            color={Colors.White}
            backgroundColor={Colors.Salmon}
            btnSize={'large'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <Button
          title={'Sign up'}
          color={Colors.Salmon}
          backgroundColor={Colors.White}
          btnSize={'large'}
          isBordered
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </BaseScreen>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  title: {
    alignSelf: 'center',
    top: '10%',
  },
  sushiSmall: {
    top: '37%',
    left: -70,
  },
  sushiMedium: {
    top: '22%',
    right: -120,
  },
  sushiBig: {
    bottom: -250,
    left: -180,
  },
});
