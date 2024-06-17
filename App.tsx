import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import IntroScreen from './screen/Intro';
import LoginScreen from './screen/LoginScreen';
import SignInScreen from './screen/SignInScreen';
import MapScreen from './screen/MapScreen';
import HomeScreen from './screen/HomeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{
            title: 'Welcome',
            headerTitleAlign: 'center',
            headerTransparent: true,
            animationDuration: 450,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerTitleAlign: 'center',
            headerTransparent: true,
            animationDuration: 450,
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'Discover',
            headerTitleAlign: 'center',
            headerTransparent: true,
            animationDuration: 450,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTransparent: true,
            animationDuration: 450,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: '',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTransparent: true,
            animationDuration: 450,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
