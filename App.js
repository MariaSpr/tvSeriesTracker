/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';
import LoginForm from './src/components/LoginForm';
import {LoggedOut, LoggedIn} from "./src/components/common/Router";
import firebase from 'firebase';


// const Router  = StackNavigator({
//     Login: {screen: LoginScreen},
//     Main: {screen: MainScreen}
// });



export default class App extends Component {

    state = { loggedInUser :false}

    componentWillMount() {
        // Firebase initialization before rendering
        firebase.initializeApp({
            apiKey: "AIzaSyCHxI4YPfCm0Db9D584rv_oPqRTJa_cAIk",
            authDomain: "tvseriestracker-54011.firebaseapp.com",
            databaseURL: "https://tvseriestracker-54011.firebaseio.com",
            projectId: "tvseriestracker-54011",
            storageBucket: "tvseriestracker-54011.appspot.com",
            messagingSenderId: "419188042738"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedInUser: true });
            } else {
                this.setState({ loggedInUser: false });
            }
        });

    }


    // signInRender() {
    //     switch (this.state.loggedInUser) {
    //         case true:
    //             return (
    //                 <Button danger onPress={() => firebase.auth().signOut()}>
    //                     <Text>Sign Out</Text>
    //                 </Button>
    //             );
    //         case false:
    //             return <Router />;
    //         default:
    //             return <Spinner color='blue' />;
    //     }
    // }



  render() {
    return (
        <LoggedIn />
    );
  }
}

const styles = StyleSheet.create({
  headerCenter: {
    flex:1
  }
});




