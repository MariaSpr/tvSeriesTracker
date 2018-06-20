import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginForm from '../components/LoginForm';

class ProfileScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is PROFILE</Text>
            </View>
        );
    }
}

export default ProfileScreen;