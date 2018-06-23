import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight, ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon, Badge } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';
import axios from 'axios';
import SeasonDetail from "./SeasonDetail";
import firebase from 'firebase';


class DetailsModal extends Component{

    state = {tvShowDetails: {}, seasons: [], genres: [], networks: []};

    componentWillMount(){
        const {show} = this.props;
        console.log(show['id']);
        console.log(TMDB_URL+'tv/'+show['id']+TMDB_API_KEY);
        axios.get(TMDB_URL+'tv/'+show['id']+TMDB_API_KEY)
            .then(res => {
                this.setState({tvShowDetails: res.data, seasons: res.data.seasons, genres: res.data.genres, networks: res.data.networks},

                );
                console.log(res);
                console.log(this.state.tvShowDetails['homepage']);
            })
            .catch(err => {console.log(err)})

    }

    renderSeasons() {
        return this.state.seasons.map((season,index) =>
                <SeasonDetail key={index} season={season} />
        );
    }

    renderGenres() {
        return this.state.genres.map((genre,index) =>
            <Badge key={index} info>
                <Text> {" "+genre['name']+" "} </Text>
            </Badge>
        );
    }

    renderNetworks() {
        return this.state.networks.map((network,index) =>
                <Text key={index}> {network['name']} </Text>

        );
    }

    onAddToWatchListPressed() {
        console.log('add to watchlist pressed');
        const {currentUser} = firebase.auth();
        const showID = this.props.show['id'];
        var firebaseRef = firebase.database().ref(`users/${currentUser.uid}/watchlist`);
        console.log(firebaseRef);
        console.log(firebaseRef.child(showID));
        console.log(firebaseRef.child(showID).key);
        firebaseRef.child(showID).set({
                original_name: this.props.show['original_name'],
                backdrop_path: this.props.show['backdrop_path'],
                overview: this.props.show['overview'],
                name: this.props.show['name'],
                id: this.props.show['id']
        });


    }



    render () {
        const {show} = this.props;
        console.log(show);
        console.log(show['original_name']);
        return (
            <ScrollView>
                <ImageBackground style={{height:'100%',flex: 1}} source={{ uri: TMDB_IMG_URL+show['backdrop_path'] }}>
                    <View style={styles.Container}>
                        <View style={styles.buttonAndCover}>
                            <Image style={styles.imagePoster} source={{ uri: TMDB_IMG_URL+show['poster_path'] }}/>
                            <View>
                                <Button primary style={styles.buttonStyle} onPress={this.onAddToWatchListPressed.bind(this)}>
                                    <Text style={styles.textStyleInsideImage}>ADD TO WATCHLIST</Text>
                                </Button>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textStyleTitle}>{show['original_name']}</Text>
                                    <Text style={styles.normalTextWhite}>Last aired: {this.state.tvShowDetails['last_air_date']}</Text>
                                    <Text style={styles.normalTextWhite}>{this.state.tvShowDetails['status']}</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </ImageBackground>
                <Card>
                    <CardItem header>
                        <Text style={styles.normalText}># episodes: {this.state.tvShowDetails['number_of_episodes']} </Text>
                        <Text style={styles.normalText}># seasons: {this.state.tvShowDetails['number_of_seasons']} </Text>
                    </CardItem>
                    <CardItem >
                        <Left>
                            <Icon name='ios-desktop-outline'  />
                            {this.renderNetworks()}
                        </Left>
                    </CardItem>
                    <CardItem bordered>
                        <Left>
                            {this.renderGenres()}
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{show['overview']}</Text>
                        </Body>
                    </CardItem>
                </Card>
                {this.renderSeasons()}
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
        height: 200,
        width: 150,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 20,
    },
    buttonStyle: {
        padding: 10,
        margin: 10,
        borderRadius: 30,
    },
    textStyleTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    normalTextWhite: {
        color: 'white',
    },
    normalText: {
        color:'black',
    },
    textContainer: {
        margin: 20,
    }
});

export default DetailsModal;