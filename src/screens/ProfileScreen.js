import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Header, Title, Tab, Tabs, Button, Left, Right, Body, Icon, Text, Spinner, Content, Item, Input } from 'native-base';
import LoginForm from '../components/LoginForm';
import firebase from 'firebase';

class ProfileScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button danger onPress={() => firebase.auth().signOut()}>
                    <Text>Sign Out</Text>
                </Button>
            </View>
        );
    }
}

export default ProfileScreen;