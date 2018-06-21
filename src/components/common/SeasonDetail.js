import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight, ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';
import DetailsModal from "./DetailsModal";


class SeasonDetail extends Component{


    render () {
        const {season} = this.props;
        return (
                <Card>
                    <CardItem header bordered>
                        <Text>{season['name']+" | "+"episode count: "+season['episode_count']}</Text>
                    </CardItem>
                    <CardItem cardBody>
                        <Image style={{height: 200, width: null, flex: 1}} source={{ uri: TMDB_IMG_URL+season['poster_path'] }}/>
                    </CardItem>
                    <CardItem header bordered>
                        <Left>
                            <Icon name='calendar'></Icon>
                            <Text>{"Air Date: "+season['air_date']}</Text>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{season['overview']}</Text>
                        </Body>
                    </CardItem>


                </Card>
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

export default SeasonDetail;