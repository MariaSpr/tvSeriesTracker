import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Thumbnail, Left, Button, Icon } from 'native-base';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';


const ShowDetail = ({show}) => {
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
                        <Button transparent textStyle={{color: '#87838B'}} onPress={() => this.props.navigation.navigate("Details")}>
                            <Icon name="more" />
                            <Text>VIEW MORE DETAILS</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </Content>
    );

};

export default ShowDetail;