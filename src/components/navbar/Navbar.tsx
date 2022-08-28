import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon, { NavBarType } from '@components/base/Icon';
import { Colors } from '@constants/index';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';

const Navbar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
            style={styles.tab}
          >
            <Icon name={getRouteIcon(route.name, isFocused)} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;

const getRouteIcon = (routeName: string, isFocused: boolean): NavBarType => {
  switch (routeName) {
    case 'Home':
      return isFocused ? 'home' : 'unHome';
    case 'History':
      return isFocused ? 'history' : 'unHistory';
    case 'Cart':
      return isFocused ? 'cart' : 'unCart';
    case 'Profile':
      return isFocused ? 'profile' : 'unProfile';
    default:
      return 'home';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.White,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowColor: Colors.Black,
    elevation: 5,
  },
  tab: {
    marginHorizontal: 30,
  },
});
