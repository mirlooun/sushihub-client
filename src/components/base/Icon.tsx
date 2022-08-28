import { SvgXml } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import { LocationIcon, SearchIcon, AddIcon, RemoveIcon } from '@assets/icons';
import {
  ProfileClicked,
  ProfileUnClicked,
  CartClicked,
  CartUnClicked,
  HistoryClicked,
  HistoryUnClicked,
  HomeClicked,
  HomeUnClicked,
} from '@assets/icons/navbar';

export type IconType = 'location' | 'search' | cartControls | NavBarType;

type cartControls = 'add' | 'remove';

type navBarTapped = 'home' | 'history' | 'cart' | 'profile';

type navBarUnTapped = 'unHome' | 'unHistory' | 'unCart' | 'unProfile';

export type NavBarType = navBarTapped | navBarUnTapped;

interface IconProps {
  name: IconType;
}

const Icon = ({ name }: IconProps) => {
  return <SvgXml xml={getIconXml(name)} style={styles.icon} />;
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

function getIconXml(iconType: IconType): string {
  let icon;

  switch (iconType) {
    case 'location':
      icon = LocationIcon;
      break;
    case 'search':
      icon = SearchIcon;
      break;
    case 'add':
      icon = AddIcon;
      break;
    case 'remove':
      icon = RemoveIcon;
      break;
    case 'home':
      icon = HomeClicked;
      break;
    case 'unHome':
      icon = HomeUnClicked;
      break;
    case 'profile':
      icon = ProfileClicked;
      break;
    case 'unProfile':
      icon = ProfileUnClicked;
      break;
    case 'history':
      icon = HistoryClicked;
      break;
    case 'unHistory':
      icon = HistoryUnClicked;
      break;
    case 'cart':
      icon = CartClicked;
      break;
    case 'unCart':
      icon = CartUnClicked;
      break;
    default:
      throw new Error('Icon not found!');
  }

  return icon;
}
