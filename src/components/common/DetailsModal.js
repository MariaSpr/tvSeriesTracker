import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';


class DetailsModal extends Component{


    render () {
        const {show} = this.props;
        console.log(show);
        console.log(show['original_name']);
        return (
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
        );

    }
}

export default DetailsModal;