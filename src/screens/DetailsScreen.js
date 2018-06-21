import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LoginForm from '../components/LoginForm';

class DetailsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This IS DETAILS</Text>
            </View>
        );
    }
}

export default DetailsScreen;