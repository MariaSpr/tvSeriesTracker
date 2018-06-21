import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight, ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';


class DetailsModal extends Component{


    render () {
        const {show} = this.props;
        console.log(show);
        console.log(show['original_name']);
        return (
            <ScrollView>
                <ImageBackground style={{height:'100%',flex: 1, resizeMode:'cover'}} source={{ uri: TMDB_IMG_URL+show['backdrop_path'] }}>
                    <View style={styles.Container}>
                        <View style={styles.buttonAndCover}>
                            <Image style={styles.imagePoster} source={{ uri: TMDB_IMG_URL+show['poster_path'] }}/>
                            <View>
                                <Button primary style={styles.buttonStyle}>
                                    <Text style={styles.textStyleInsideImage}>ADD TO WATCHLIST</Text>
                                </Button>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textStyleTitle}>{show['original_name']}</Text>
                                    <Text style={styles.normalText}>{show['first_air_date']}</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </ImageBackground>
                <Card>
                    <CardItem header>
                        <Text>{show['original_name']}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text>{show['overview']}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        );

    }
}

const styles  = StyleSheet.create({
    Container: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: 350,
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
        height: 150,
        width: 100,
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

export default DetailsModal;