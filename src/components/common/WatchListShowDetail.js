import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight, ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';
import WatchListDetailsModal from "./WatchListShowDetailModal";


class WatchListShowDetail extends Component{

    state = {
        modalVisible: false,
    };

    setModalVisible = (visible)=> {
        this.setState({modalVisible: visible});
    };

    render () {
        const {show} = this.props;
        return (
            <View>
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
                        this.setModalVisible(!this.state.modalVisible);
                    }}>

                    <WatchListDetailsModal show={show}/>

                </Modal>
            </View>
        );

    }
}

const styles  = StyleSheet.create({
    Container: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flex:1,
    },
    textStyleInsideImage: {
        color: 'white',
        fontWeight:'bold',
    },
    buttonAndCover: {
        flexDirection: 'row',
    },
    imagePoster: {
        height: 250,
        width: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
    },
    buttonStyle: {
        padding: 10,
        margin: 20,
        borderRadius: 30,
    },
    textStyleTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    normalText: {
        color: 'white',
    },
    textContainer: {
        margin: 20,
    }
});

export default WatchListShowDetail;