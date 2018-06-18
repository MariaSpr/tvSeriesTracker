import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Button } from 'native-base';

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
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text>
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Button bordered rounded block primary>
                                <Text>sign in</Text>
                            </Button>

                        </CardItem>
                    </Card>
                </Content>
                <Footer />
            </Container>
        );
    }
}

export default LoginForm;