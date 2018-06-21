import React, { Component } from 'react';
import { Container, Header, Title, Tab, Tabs, Button, Left, Right, Body, Icon, Text, Spinner, Content } from 'native-base';
import {DrawerActions} from "react-navigation";
import ExploreTab from './Tabs/ExploreTab';
import WatchListTab from './Tabs/WatchListTab';

class MainScreen extends Component {


    toggleDrawer = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header hasTabs>
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
                <Content>
                    <Tabs initialPage={0}>
                        <Tab heading="Explore">
                            <ExploreTab />
                        </Tab>
                        <Tab heading="WatchList">
                            <WatchListTab />
                        </Tab>
                    </Tabs>
                </Content>

            </Container>

        );
    }
}

export default MainScreen;