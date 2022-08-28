import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { LocationIcon } from '@assets/icons';

type iconType = 'location';

interface IconProps {
  name: iconType;
}

const Icon = ({ name }: IconProps) => {
  const iconSource = getIconSource(name);

  return <Image source={iconSource} style={styles.icon} />;
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

function getIconSource(iconType: iconType): ImageSourcePropType {
  let icon;

  switch (iconType) {
    case 'location':
      icon = LocationIcon;
      break;
    default:
      throw new Error('Icon not found!');
  }

  return icon as ImageSourcePropType;
}
