import { SvgXml } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

import {
  Title,
  SushiSmall as SushiSmallWelcome,
  SushiMedium as SushiMediumWelcome,
  SushiBig as SushiBigWelcome,
} from '@assets/icons/welcome';
import { SushiBig as SushiBigLogin, SushiSmall as SushiSmallLogin } from '@assets/icons/login';
import { SushiBig as SushiBigRegister, SushiSmall as SushiSmallRegister } from '@assets/icons/register';

type Icons = 'title' | 'sushi-small' | 'sushi-medium' | 'sushi-big';
type Screens = 'Welcome' | 'Login' | 'Register';

interface SvgComponentProps {
  name: Icons;
  screen: Screens;
  style?: StyleProp<ViewStyle>;
}

const SvgComponent = ({ name, screen, style }: SvgComponentProps) => {
  return <SvgXml xml={getIconXml(name, screen)} style={style} />;
};

export default SvgComponent;

function getIconXml(name: Icons, screen: Screens): string {
  switch (name) {
    case 'title':
      return Title;
    case 'sushi-small':
      if (screen === 'Login') {
        return SushiSmallLogin;
      } else if (screen === 'Register') {
        return SushiSmallRegister;
      }
      return SushiSmallWelcome;
    case 'sushi-medium':
      return SushiMediumWelcome;
    case 'sushi-big':
      if (screen === 'Login') {
        return SushiBigLogin;
      } else if (screen === 'Register') {
        return SushiBigRegister;
      }
      return SushiBigWelcome;
  }
}
