/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';



export default class App extends Component {
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
