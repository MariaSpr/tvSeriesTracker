import React, { Component } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Button, Form, Item, Label, Input, Spinner } from 'native-base';
import axios from 'axios';
import firebase from 'firebase';


class ShowList extends Component{
    state = {shows: []};

    componentWillMount(){
        axios.get('http://api.themoviedb.org/3/tv/popular?api_key=2e531a7dc0ef5462b9146f28f4b7492e')
            .then(res => {this.setState({shows: res.data.results});
            console.log(res.data.results);
            })
            .catch(err => {console.log(err)})

    }

    renderShows() {
        return this.state.shows.map((show,index) =>
            <Text key={index}>{show['original_name']}</Text>
        );
    }

    render(){
        return (
            <ScrollView>
                {this.renderShows()}
            </ScrollView>
        );
    }
}

export default ShowList;