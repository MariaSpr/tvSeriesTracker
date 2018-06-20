import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';
import {DrawerActions} from "react-navigation";

class MainScreen extends Component {


    toggleDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={this.toggleDrawer}>
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