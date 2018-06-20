import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';
import LoginForm from '../components/LoginForm';

class MainScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>tvSeriesTracker</Title>
                    </Body>
                    <Right />
                </Header>
        );
    }
}

export default MainScreen;