

import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../components/Login';
import Profile from '../components/Profile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Routes =() =>{
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
