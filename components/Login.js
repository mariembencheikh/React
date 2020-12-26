/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';


const Login = ({navigation}) => {
  const [login, setLogin] = useState("")
  return (

    <View style={
      {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

      }
    }>
      <Image style={
        {
          width: 100,
          height: 100,
          marginBottom: 10,
        }
      } source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" }}></Image>

      <TextInput onChangeText={(text) => setLogin(text)} placeholder="Login" style={
        {
          width: "80%",
          height: 50,
          marginBottom: 10,
          borderColor: "black",
          borderWidth: 2,
          padding: 10,
        }
      } />
      <TextInput secureTextEntry={true} placeholder="Password" style={
        {
          width: "80%",
          height: 50,
          marginBottom: 10,
          borderColor: "black",
          borderWidth: 2,
          padding: 10

        }} />


      <TouchableOpacity onPress={() => navigation.navigate('Profile', { name: "Marieml", lastName: "Ben cheikh", email: "mariem@gmail.com" })} style={
        {
          width: "40%",
          height: 50,
          backgroundColor: "blue",
          opacity: 0.7,
          justifyContent: "center",
          alignItems: "center",
        }
      }
        activeOpacity={
          0.5
        } >
        <Text style={{ color: "white" }} >Connexion</Text>
      </TouchableOpacity>
    </View>

  );
};



export default Login;
