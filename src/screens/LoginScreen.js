import React, { Component } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LoginForm />
        );
    }
}

export default LoginScreen;