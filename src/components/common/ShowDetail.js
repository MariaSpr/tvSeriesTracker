import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';


class ShowDetail extends Component{

    state = {
        modalVisible: false,
    };

    setModalVisible = (visible)=> {
        this.setState({modalVisible: visible});
    };

    render () {
        const {show} = this.props;
        return (
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>{show['original_name']}</Text>
                    </CardItem>
                    <CardItem cardBody>
                        <Image style={{height: 200, width: null, flex: 1}} source={{ uri: TMDB_IMG_URL+show['backdrop_path'] }}/>
                    </CardItem>
                    <CardItem>

                    </CardItem>
                    <CardItem bordered>
                        <Body>
                        <Text>{show['overview']}</Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            <Button transparent textStyle={{color: '#87838B'}} onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <Icon name="more" />
                                <Text>VIEW MORE DETAILS</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </Content>
        );

    }
}

export default ShowDetail;