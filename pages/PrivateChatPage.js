
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, View, Keyboard } from 'react-native';
import { Button, Chip, Avatar } from 'react-native-paper';




export default function PrivateChatPage({ navigation }) {
  const [text, setText] = React.useState("");
  return (

    <View style={styles.container}>
      <Button style={styles.loginButton} mode="outlined" onPress={() => navigation.navigate('HomePage')} >BACK</Button>
      <Chip   onPress={() => console.log('Pressed')}><Avatar.Icon size={50} icon="folder" />Example ChipExample ChipExample Chip</Chip>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 0,
    // borderWidth: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  }

});


