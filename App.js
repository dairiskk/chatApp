
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import LoginPage from './pages/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import PrivateChatPage from './pages/PrivateChatPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // <SafeAreaView>

    // <StatusBar
    //   backgroundColor="#00BCD4"
    //   barStyle="dark-content"
    // />


    // </SafeAreaView>
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#00BCD4"
          barStyle="dark-content"
        />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginPage">
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
          />
          <Stack.Screen
            name="PrivateChatPage"
            component={PrivateChatPage}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});


