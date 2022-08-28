import { SvgXml } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import { LocationIcon, SearchIcon, AddIcon, RemoveIcon } from '@assets/icons';

type iconType = 'location' | 'search' | cartControls;

type cartControls = 'add' | 'remove';

interface IconProps {
  name: iconType;
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

function getIconXml(iconType: iconType): string {
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
    default:
      throw new Error('Icon not found!');
  }

  return icon;
}
