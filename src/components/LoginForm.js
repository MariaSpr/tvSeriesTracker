import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Button, Form, Item, Label, Input, Spinner } from 'native-base';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
        };

    onLoginButtonPressed() {
        const {email, password}  = this.state;
        this.setState({error:'', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
                console.log(email);
                console.log(password);
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        console.log("success");
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderHelper() {
        if(this.state.loading) {
            return <Spinner color='blue' />;

        }
        return (
            <Button block rounded primary onPress={this.onLoginButtonPressed.bind(this)}>
                <Text>sign in</Text>
            </Button>
        );
    }

    onLoginFail() {
        console.log("fail");
        this.setState({ error: 'Authentication Failed', loading: false });
        if(this.state.password.length < 6) {
            this.setState({ error: 'Password must be longer than 6 characters', loading: false });
        }
    }



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
                                <Label>Email:</Label>
                                <Input
                                    value={this.state.email}
                                    onChangeText={email => this.setState({email})}/>
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item inlineLabel>
                                <Label>Password:</Label>
                                <Input secureTextEntry={true}
                                       value={this.state.password}
                                       onChangeText={password => this.setState({password})}/>
                            </Item>
                        </CardItem>
                        <CardItem >
                            <Body>
                            {this.renderHelper()}
                            </Body>
                        </CardItem>
                    </Card>
                    <Text style={styles.errorText}>{this.state.error}</Text>
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
    },
    errorText: {
        color: 'red',
        alignSelf:'center',
        fontSize: 20
    }
});


export default LoginForm;