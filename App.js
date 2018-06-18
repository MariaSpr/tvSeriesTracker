/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import firebase from 'firebase'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';




export default class App extends Component {
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

    }
  render() {
    return (
        <Container>
            <Header>
                <Left style={styles.headerCenter} />
                <Body style={styles.headerCenter}>
                  <Title>tvSeriesTracker</Title>
                </Body>
              <Right style={styles.headerCenter} />
            </Header>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerCenter: {
    flex:1
  }
});
