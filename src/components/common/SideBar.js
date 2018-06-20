import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon
} from "native-base";
const routes = ["Main", "Profile"];
export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri:
                                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            width: "100%",
                            alignSelf: "stretch",
                            position: "absolute"
                        }}
                    />
                    <List
                        dataArray={routes}
                        contentContainerStyle={{ marginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}