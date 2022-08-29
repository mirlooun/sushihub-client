import { CartProvider } from '@context/cartContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from '@components/navbar/Navbar';

// screens
import Home from '@screens/Home';
import History from '@screens/History';
import Cart from '@screens/Cart';
import Profile from '@screens/Profile';

type RootStackParamList = {
  Home: undefined;
  History: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppStack = ({ onReady }: { onReady: () => Promise<void> }) => {
  return (
    <CartProvider>
      <NavigationContainer onReady={onReady}>
        <Tab.Navigator
          initialRouteName={'Home'}
          tabBar={(props) => <Navbar {...props} />}
          defaultScreenOptions={{
            headerShown: false,
            headerTransparent: true,
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tab.Screen name={'Home'} options={{ headerShown: false }} component={Home} />
          <Tab.Screen name={'History'} options={{ headerShown: false }} component={History} />
          <Tab.Screen name={'Cart'} options={{ headerShown: false }} component={Cart} />
          <Tab.Screen name={'Profile'} options={{ headerShown: false }} component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppStack;
