import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Welcome from '@screens/Welcome';
import Login from '@screens/Login';
import Register from '@screens/Register';

type WelcomeStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<WelcomeStackParamList>();

const WelcomeStack = ({ onReady }: { onReady: () => Promise<void> }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        initialRouteName={'Welcome'}
        defaultScreenOptions={{ headerShown: false, headerTransparent: true }}
      >
        <Stack.Screen name={'Welcome'} options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name={'Login'} options={{ headerShown: false }} component={Login} />
        <Stack.Screen name={'Register'} options={{ headerShown: false }} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeStack;
