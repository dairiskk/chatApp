
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, View, Keyboard } from 'react-native';
import { List, Button } from 'react-native-paper';
import { SearchBar } from '../components/SearchBar';
export default function HomePage({ navigation }) {

    const [text, setText] = React.useState("");
    return (

        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('LoginPage')}>BACK</Button>
            <SearchBar></SearchBar>
            <Text>Contacts</Text>
            <List.Item
                onPress={() => navigation.navigate('PrivateChatPage')}
                style={styles.item}
                title="John Doe"
                description="1337"
                left={props => <List.Icon {...props} icon="folder" />}
            />


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
        backgroundColor: 'black',
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


