import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { permissions, declinedPermissions, expires } from 'expo'
import firebase from '../Config';

export default class Login extends React.Component {
    // constructor(props) {
    //     this.state = {

    //     }
    // }

    async logIn() {
        // try {
        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Expo.Facebook.logInWithReadPermissionsAsync('360492578101385', {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            console.log('Success token', token)
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            console.log('Success response after', response)
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInAndRetrieveDataWithCredential(credential)
                .then((success) => {
                    const userObj = {
                        name: success.additionalUserInfo.profile.name,
                        uid: success.user.uid,
                        photo: success.user.photoURL,
                        token: success.credential.accessToken
                    }
                    console.log('Success*******', userObj)
                })
                .catch((error) => {
                    console.log('Error', error)
                })
        } else {
            // type === 'cancel'
        }
    } catch({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open logIn!</Text>
                <TouchableOpacity style={styles.button} onPress={this.logIn}>
                    <Text style={styles.text}>Login Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'blue',
    },
    text: {
        color: 'white',
        backgroundColor: 'blue',
    }
});
