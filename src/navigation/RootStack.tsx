import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '@components/navbar/Navbar';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';

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

const RootStack = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator
        initialRouteName={'Home'}
        tabBar={(props) => <Navbar {...props} />}
        defaultScreenOptions={{ headerShown: false, headerTransparent: true, tabBarHideOnKeyboard: true }}
      >
        <Tab.Screen name={'Home'} options={{ headerShown: false }} component={Home} />
        <Tab.Screen name={'History'} options={{ headerShown: false }} component={History} />
        <Tab.Screen name={'Cart'} options={{ headerShown: false }} component={Cart} />
        <Tab.Screen name={'Profile'} options={{ headerShown: false }} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
