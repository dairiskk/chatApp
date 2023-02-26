
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, View, Keyboard } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { redirect } from 'react-router-dom';
import HomePage from './HomePage';

export default function LoginPage({ navigation }) {

  const [text, setText] = React.useState("");
  return (

    <View style={styles.container}>

      <View style={styles.loginForm}>
        <TextInput
          style={styles.email}
          label="Email"
          mode="outlined"
          value={text}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={text => setText(text)}
          right={<TextInput.Icon icon="email" />}
        />

        <TextInput
          style={styles.email}
          label="Passwprd"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />

        <Button style={styles.loginButton} mode="outlined" onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.text}>Log In</Text>
        </Button>
        <Button style={styles.loginFacebook} mode="outlined" onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>Facebook</Text>
        </Button>
        <Button style={styles.register} mode="outlined" onPress={() => console.log('Pressed')}>
          <Text style={styles.text}>Register</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FF',
    flex: 1,
    marginTop: 0,
    // borderWidth: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  loginForm: {
    marginTop: 200,
  },
  loginButton: {
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 30,
  },
  loginFacebook: {
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 10,
  },
  register: {
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'green',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  email: {
    marginBottom: 20

  },

});


