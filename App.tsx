import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import IntroScreen from './screen/Intro';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/Login';
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
          name="Home"
          component={HomeScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
