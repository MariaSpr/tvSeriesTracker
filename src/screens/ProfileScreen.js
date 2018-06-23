import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Header, Title, Tab, Tabs, Button, Left, Right, Body, Icon, Text, Spinner, Content, Item, Input } from 'native-base';
import LoginForm from '../components/LoginForm';
import firebase from 'firebase';

class ProfileScreen extends Component {


    render() {
        const { navigate } = this.props.navigation;
        const {currentUser} = firebase.auth();
        return (
            <View style={styles.Container}>
                <Icon style={{fontSize: 200}} name='contact' />
                <Text style={styles.Icon}>{currentUser.email}</Text>
                <View style={styles.Button}>
                    <Button danger onPress={() => firebase.auth().signOut()}>
                        <Text>Sign Out</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
    },
    Icon: {
        fontSize: 35,
    },
    Button: {
        margin: 20,
    }
});

export default ProfileScreen;