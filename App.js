import React from "react";
import { View, Text } from 'react-native';
import Home from "./components/Home";
import Details from "./components/Details";
import Liked from "./components/Liked";
import Profile from "./components/Profile";

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createStackNavigator();
const Stack = createBottomTabNavigator()

const App = () => {
  return (
    <View>
      <Text>App.js</Text>
    </View>
  )
}

export default App;