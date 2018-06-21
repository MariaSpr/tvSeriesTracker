import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Tab, Tabs, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';
import ShowList from '../../components/common/ShowList';

class ExploreTab extends Component {


    render() {
        return (
            <View>
               <ShowList />
            </View>


        );
    }
}

export default ExploreTab;