import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Button, Form, Item, Label, Input } from 'native-base';

class LoginForm extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Sign In</Text>
                        </CardItem>
                        <CardItem>
                            <Item inlineLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item inlineLabel>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} />
                            </Item>
                        </CardItem>
                        <CardItem >
                            <Body>
                                <Button block rounded primary onPress={() => alert("This is Button")}>
                                    <Text>sign in</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default LoginForm;